package utils;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Dialog;
import android.content.ContentUris;
import android.content.Intent; // 【修改点1】导入Intent
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Build;
import android.provider.MediaStore;
import android.util.Log;
import android.view.Gravity;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import org.cocos2dx.javascript.Constants;

import java.io.File;
import java.io.FileOutputStream; // 【修改点2】复制文件用
import java.io.InputStream;      // 【修改点2】
import java.io.OutputStream;    // 【修改点2】
import java.util.ArrayList;
import java.util.List;

public class MusicPicker {

    public static Activity currentActivity;
    public static final int PERMISSION_REQUEST_CODE = 200;
    private static boolean isStoping = false;
    private static String curPlayAudioPath = "";
    private static MediaPlayer mediaPlayer;

    // 【修改点3】添加文件选择请求码
    private static final int FILE_SELECT_CODE = 3000;

    // 初始化
    public static void Init(Activity activity) {
        currentActivity = activity;
    }

    // 音乐数据结构
    public static class MusicItem {
        public long id;
        public String title;
        public String artist;
        public String path;

        public MusicItem(long id, String title, String artist, String path) {
            this.id = id;
            this.title = title;
            this.artist = artist;
            this.path = path;
        }
    }

    // 双模式播放用
    private static class PlaySource {
        String value;
        boolean isUri;
    }

    // 打开音乐选择
    public static void openMusicPicker() {
        // 【修改点4】Android 13 以上使用系统文件选择器
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            openSystemFilePicker();
            return;
        }

        // 以下保持原逻辑
        if (!hasAudioPermission()) {
            requestAudioPermission();
            return;
        }
        showFullScreenMusicDialog(currentActivity);
    }

    // 【修改点5】系统文件选择器
    private static void openSystemFilePicker() {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.setType("audio/*");
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        currentActivity.startActivityForResult(intent, FILE_SELECT_CODE);
    }

    // 【修改点6】接收系统文件选择回调
    public static void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            if (requestCode == FILE_SELECT_CODE && resultCode == Activity.RESULT_OK && data != null) {
                Uri uri = data.getData();
                if (uri != null) {
                    Log.d("MusicPicker", "选择的音频 URI: " + uri);
                    String localPath = copyAudioToApp(uri);
                    if (localPath != null) {
                        Log.d("MusicPicker", "复制到App内路径: " + localPath);
                        playAudio(localPath); // ✅ 复用你原本的播放逻辑
                        Constants.CallUnityFunction(localPath, Constants.CallAndroidCallPlayAudio);
                    } else {
                        Log.e("MusicPicker", "音频复制失败");
                    }
                }
            }
        }
    }

    // 【修改点7】复制SAF文件到App内部路径
    private static String copyAudioToApp(Uri uri) {
        try {
            File dir = new File(currentActivity.getFilesDir(), "music");
            if (!dir.exists()) dir.mkdirs();

            String fileName = "audio_" + System.currentTimeMillis() + ".mp3";
            File outFile = new File(dir, fileName);

            InputStream in = currentActivity.getContentResolver().openInputStream(uri);
            if (in == null) return null;
            OutputStream out = new FileOutputStream(outFile);

            byte[] buf = new byte[8192];
            int len;
            while ((len = in.read(buf)) > 0) out.write(buf, 0, len);
            in.close();
            out.close();

            return outFile.getAbsolutePath();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // 权限
    private static boolean hasAudioPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            return ContextCompat.checkSelfPermission(currentActivity,
                    Manifest.permission.READ_MEDIA_AUDIO) == PackageManager.PERMISSION_GRANTED;
        } else {
            return ContextCompat.checkSelfPermission(currentActivity,
                    Manifest.permission.READ_EXTERNAL_STORAGE) == PackageManager.PERMISSION_GRANTED;
        }
    }

    private static void requestAudioPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            ActivityCompat.requestPermissions(currentActivity,
                    new String[]{Manifest.permission.READ_MEDIA_AUDIO}, PERMISSION_REQUEST_CODE);
        } else {
            ActivityCompat.requestPermissions(currentActivity,
                    new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, PERMISSION_REQUEST_CODE);
        }
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == PERMISSION_REQUEST_CODE && grantResults.length > 0
                && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
            showFullScreenMusicDialog(currentActivity);
        }
    }

    // 查询音乐（按下载时间）
    @SuppressLint("Range")
    private static List<MusicItem> queryAllMusic(Activity activity) {
        List<MusicItem> musicList = new ArrayList<>();
        Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
        String[] projection = {
                MediaStore.Audio.Media._ID,
                MediaStore.Audio.Media.TITLE,
                MediaStore.Audio.Media.ARTIST,
                MediaStore.Audio.Media.DATA,
                MediaStore.Audio.Media.DATE_ADDED
        };
        String selection = MediaStore.Audio.Media.IS_MUSIC + "!= 0";
        String sortOrder = MediaStore.Audio.Media.DATE_ADDED + " DESC";

        try (Cursor cursor = activity.getContentResolver().query(
                uri, projection, selection, null, sortOrder)) {
            if (cursor != null) {
                while (cursor.moveToNext()) {
                    long id = cursor.getLong(cursor.getColumnIndex(MediaStore.Audio.Media._ID));
                    String title = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.TITLE));
                    String artist = cursor.getString(cursor.getColumnIndex(MediaStore.Audio.Media.ARTIST));
                    String path = null;
                    int dataIdx = cursor.getColumnIndex(MediaStore.Audio.Media.DATA);
                    if (dataIdx >= 0) path = cursor.getString(dataIdx);
                    musicList.add(new MusicItem(id, title, artist, path));
                }
            }
        }
        return musicList;
    }

    // 获取可播放资源（优先文件路径）
    private static PlaySource getPlayablePathOrUri(MusicItem item) {
        PlaySource ps = new PlaySource();
        if (item.path != null) {
            File f = new File(item.path);
            if (f.exists() && f.isFile()) {
                ps.value = f.getAbsolutePath();
                ps.isUri = false;
                return ps;
            }
        }
        if (item.id > 0) {
            Uri contentUri = ContentUris.withAppendedId(
                    MediaStore.Audio.Media.EXTERNAL_CONTENT_URI, item.id);
            ps.value = contentUri.toString();
            ps.isUri = true;
            return ps;
        }
        return null;
    }

    // 全屏音乐列表
    private static void showFullScreenMusicDialog(Activity activity) {
        activity.runOnUiThread(() -> {
            List<MusicItem> musicList = queryAllMusic(activity);

            Dialog dialog = new Dialog(activity, android.R.style.Theme_Black_NoTitleBar_Fullscreen);
            dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);

            LinearLayout root = new LinearLayout(activity);
            root.setOrientation(LinearLayout.VERTICAL);
            root.setBackgroundColor(0xFFFFFFFF);

            RelativeLayout titleBar = new RelativeLayout(activity);
            titleBar.setPadding(dp(16), dp(12), dp(16), dp(12));
            titleBar.setBackgroundColor(0xFF55110C);
            titleBar.setGravity(Gravity.CENTER_VERTICAL);

// 返回按钮
            TextView back = new TextView(activity);
            back.setText("←");
            back.setTextSize(28); // 大一点
            back.setTextColor(0xFFFFFFFF);
            back.setPadding(0, 0, dp(16), 0);
            RelativeLayout.LayoutParams backParams = new RelativeLayout.LayoutParams(
                    ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            backParams.addRule(RelativeLayout.ALIGN_PARENT_START);
            back.setOnClickListener(v -> dialog.dismiss());
            titleBar.addView(back, backParams);

// 中间标题
            TextView title = new TextView(activity);
            title.setText("Select Music");
            title.setTextSize(20);
            title.setTextColor(0xFFFFFFFF);
            title.setGravity(Gravity.CENTER);
            RelativeLayout.LayoutParams titleParams = new RelativeLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
            titleParams.addRule(RelativeLayout.CENTER_IN_PARENT);
            titleBar.addView(title, titleParams);

            root.addView(titleBar);

            // 如果没有音乐文件
            if (musicList.isEmpty()) {
                TextView emptyView = new TextView(activity);
                emptyView.setText("No local music found in device storage.");
                emptyView.setTextSize(16);
                emptyView.setTextColor(0xFF55110C);
                emptyView.setGravity(Gravity.CENTER);
                emptyView.setLayoutParams(new LinearLayout.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                ));
                root.addView(emptyView);
                dialog.setContentView(root);
                dialog.show();
                return;
            }

            // 列表显示音乐
            ListView listView = new ListView(activity);
            ArrayAdapter<String> adapter = new ArrayAdapter<String>(activity, android.R.layout.simple_list_item_1,
                    toTitleList(musicList)) {
                @Override
                public android.view.View getView(int position, android.view.View convertView, ViewGroup parent) {
                    TextView tv = new TextView(activity);
                    tv.setText(getItem(position));
                    tv.setTextSize(16);
                    tv.setTextColor(0xFF55110C);
                    tv.setGravity(Gravity.CENTER_VERTICAL);
                    tv.setPadding(dp(16), 0, dp(16), 0);
                    tv.setLayoutParams(new ListView.LayoutParams(
                            ViewGroup.LayoutParams.MATCH_PARENT, dp(60)));
                    android.graphics.drawable.StateListDrawable bg = new android.graphics.drawable.StateListDrawable();
                    bg.addState(new int[]{android.R.attr.state_pressed},
                            new android.graphics.drawable.ColorDrawable(0x33BB9F9A));
                    bg.addState(new int[]{},
                            new android.graphics.drawable.ColorDrawable(0xFFFFFFFF));
                    tv.setBackground(bg);
                    return tv;
                }
            };
            listView.setAdapter(adapter);
            listView.setDivider(new android.graphics.drawable.ColorDrawable(0xFFBB9F9A));
            listView.setDividerHeight(1);

            listView.setOnItemClickListener((parent, view, position, id) -> {
                MusicItem item = musicList.get(position);
                PlaySource ps = getPlayablePathOrUri(item);
                if (ps != null) {
                    playAudio(ps.value); // 自动判断路径 or URI
                    Constants.CallUnityFunction(ps.value, Constants.CallAndroidCallPlayAudio);
                    dialog.dismiss();
                } else {
                    Log.e("MusicPicker", "无法获取可播放资源");
                }
            });

            root.addView(listView, new LinearLayout.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT, 1));

            dialog.setContentView(root);
            dialog.getWindow().setLayout(WindowManager.LayoutParams.MATCH_PARENT,
                    WindowManager.LayoutParams.MATCH_PARENT);
            dialog.show();
        });
    }


    private static List<String> toTitleList(List<MusicItem> list) {
        List<String> titles = new ArrayList<>();
        for (MusicItem m : list) {
            String artist = (m.artist == null || m.artist.isEmpty()) ? "Unknown" : m.artist;
            String name = (m.title == null || m.title.isEmpty()) ? "Unknown" : m.title;
            titles.add(name + " - " + artist);
        }
        return titles;
    }

    // ✅ 保留你原有播放逻辑不变
    public static void playAudio(String value) {
        Log.e("MusicPicker", "播放: " + value);
        if (value != null && value.equals(curPlayAudioPath)) {
            Log.d("MusicPicker", "相同路径，忽略播放请求");
            if (mediaPlayer != null) {
                mediaPlayer.start();
                isStoping = false;
                return;
            }
        }
        isStoping = false;
        try {
            if (mediaPlayer != null) {
                mediaPlayer.stop();
                mediaPlayer.release();
            }
            mediaPlayer = new MediaPlayer();

            if (value.startsWith("content://") || value.startsWith("file://")) {
                mediaPlayer.setDataSource(currentActivity, Uri.parse(value));
            } else {
                mediaPlayer.setDataSource(value);
            }

            mediaPlayer.setLooping(true);
            mediaPlayer.prepareAsync();
            mediaPlayer.setOnPreparedListener(MediaPlayer::start);
            curPlayAudioPath = value;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 生命周期保持不变
    public static void onPause() {
        if (mediaPlayer != null && mediaPlayer.isPlaying()) {
            mediaPlayer.pause();
        }
    }

    public static void onResume() {
        if (!isStoping && mediaPlayer != null) {
            mediaPlayer.start();
        }
    }

    public static void onStop() {
        if (mediaPlayer != null && mediaPlayer.isPlaying()) {
            mediaPlayer.pause();
            isStoping = true;
        }
    }

    public static void onDestroy() {
        if (mediaPlayer != null) {
            mediaPlayer.stop();
            mediaPlayer.release();
            mediaPlayer = null;
            curPlayAudioPath = "";
        }
    }

    private static int dp(int dp) {
        float density = currentActivity.getResources().getDisplayMetrics().density;
        return (int) (dp * density + 0.5f);
    }
}
