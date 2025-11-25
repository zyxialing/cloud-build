package utils;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.DocumentsContract;
import android.provider.MediaStore;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

import org.cocos2dx.javascript.Constants;
import org.cocos2dx.javascript.SDKManager;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

public class PhotoAgent {

    private static PhotoAgent photoAgent = null;
    private Activity appActivity = null;
    private static final int ALBUM_REQUEST_CODE = 10001;
    private static final int REQ_CROP_IMAGE = 3001;
    // 修改点：新增 Android 13 SAF 请求码
    private static final int FILE_PICKER_REQUEST_CODE = 3005;

    private static Uri cropResultUri = null;
    private static Uri tempSourceUri = null;

    public static PhotoAgent getPhotoAgent() {
        if (photoAgent == null) {
            synchronized (PhotoAgent.class) {
                if (photoAgent == null) {
                    photoAgent = new PhotoAgent();
                }
            }
        }
        return photoAgent;
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == 1) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                SDKManager.openPhotoAlbum();
            } else {
                Log.w("PhotoAgent", "用户拒绝了相册访问权限");
            }
        }
    }

    public void initialize(Activity activity) {
        appActivity = activity;
    }

    /**
     * 打开相册
     */
    public void openPhotoAlbum() {
        // 修改点：Android 13 及以上改用 SAF 文件选择器
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            openSystemFilePicker();
            return;
        }

        // 保留原逻辑：使用 ACTION_PICK 打开相册
        Intent photoPickerIntent = new Intent(Intent.ACTION_PICK);
        photoPickerIntent.setDataAndType(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, "image/*");
        appActivity.startActivityForResult(photoPickerIntent, ALBUM_REQUEST_CODE);
    }

    // 修改点：Android 13 SAF 文件选择器
    private void openSystemFilePicker() {
        Intent intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
        intent.setType("image/*");
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        appActivity.startActivityForResult(intent, FILE_PICKER_REQUEST_CODE);
    }

    // 修改点：复制 SAF 选取的图片到 App 内部目录
    private String copyImageToApp(Uri uri) {
        try {
            File dir = new File(appActivity.getFilesDir(), "images");
            if (!dir.exists()) dir.mkdirs();
            String fileName = "photo_" + System.currentTimeMillis() + ".jpg";
            File outFile = new File(dir, fileName);

            InputStream in = appActivity.getContentResolver().openInputStream(uri);
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

    private Uri coverToPublic(Uri sourceUri) {
        tempSourceUri = null;
        tempSourceUri = createPublicImageUri();
        try (InputStream in = appActivity.getContentResolver().openInputStream(sourceUri);
             OutputStream out = appActivity.getContentResolver().openOutputStream(tempSourceUri)) {
            byte[] buffer = new byte[4096];
            int len;
            while ((len = in.read(buffer)) != -1) {
                out.write(buffer, 0, len);
            }
        } catch (Exception e) {
            Log.e("PhotoAgent", "复制 Google Photos 图片失败: " + e.getMessage(), e);
        }
        return tempSourceUri;
    }

    private void cropImage(Uri sourceUri) {
        sourceUri = coverToPublic(sourceUri);
        String supportAction = getAvailableCropAction(appActivity);
        try {
            if (supportAction == null) {
                cropResultUri = cropSquareManuallyToPublic(appActivity, sourceUri);
                if (cropResultUri == null) {
                    cropResultUri = sourceUri;
                }
                upLoadImage();
            } else {
                cropResultUri = createPublicImageUri();

                Intent intent = new Intent(supportAction);
                intent.setDataAndType(sourceUri, "image/*");
                intent.putExtra("crop", "true");
                intent.putExtra("aspectX", 1);
                intent.putExtra("aspectY", 1);
                intent.putExtra("scale", true);
                intent.putExtra(MediaStore.EXTRA_OUTPUT, cropResultUri);
                intent.putExtra("outputFormat", Bitmap.CompressFormat.JPEG.toString());
                intent.putExtra("return-data", false);
                intent.putExtra("noFaceDetection", true);
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
                appActivity.startActivityForResult(intent, REQ_CROP_IMAGE);
            }
        } catch (Exception e) {
            Log.e("PhotoAgent", "裁剪图片出错: " + e.getMessage(), e);
            cropResultUri = cropSquareManuallyToPublic(appActivity, sourceUri);
            if (cropResultUri == null) {
                cropResultUri = sourceUri;
            }
            upLoadImage();
        }
    }

    // 修改点：扩展回调，支持 FILE_PICKER_REQUEST_CODE
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.d("photoAgent", "onActivityResult: " + resultCode);

        // ✅ Android 13+ SAF 选图回调
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
                requestCode == FILE_PICKER_REQUEST_CODE && resultCode == appActivity.RESULT_OK) {
            if (data != null && data.getData() != null) {
                Uri uri = data.getData();
                String path = copyImageToApp(uri);
                if (path != null) {
                    cropImage(Uri.fromFile(new File(path)));
                }
            }
            return;
        }

        // ✅ 以下保留你原有逻辑
        if (requestCode == ALBUM_REQUEST_CODE && resultCode == appActivity.RESULT_OK) {
            Log.i("photoAgent", "调用相册回调");
            if (data != null) {
                Uri selectedImage = data.getData();
                if (selectedImage != null) {
                    cropImage(selectedImage);
                } else {
                    Log.e("photoAgent", "Selected image URI is null.");
                }
            }
        } else if (requestCode == REQ_CROP_IMAGE && resultCode == appActivity.RESULT_OK) {
            if (cropResultUri != null) {
                Log.d("Crop", "裁剪结果: " + cropResultUri);
                upLoadImage();
            }
            if (tempSourceUri != null) {
                appActivity.getContentResolver().delete(tempSourceUri, null, null);
                tempSourceUri = null;
                Log.d("PhotoAgent", "临时源文件已删除");
            }
        }
    }

    // ✅ 以下全是你原来的逻辑，无改动
    private String getAvailableCropAction(Activity context) {
        String[] cropActions = {
                "com.android.camera.action.CROP",
                "com.sec.android.app.camera.CROP_IMAGE",
                "com.sec.android.gallery3d.CROP",
                "com.samsung.android.app.camera.CROP",
                "com.huawei.camera.action.CROP",
                "com.android.gallery3d.CROP",
                "com.miui.gallery.CROP",
                "com.coloros.gallery3d.CROP",
                "com.android.gallery3d.filtershow.crop.CropActivity",
                "com.htc.album.action.CROP",
                "com.lenovo.scg.action.CROP",
                "com.motorola.gallery.CROP"
        };

        PackageManager pm = context.getPackageManager();
        for (String action : cropActions) {
            Intent intent = new Intent(action);
            intent.setType("image/*");
            List list = pm.queryIntentActivities(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (list != null && !list.isEmpty()) {
                return action;
            }
        }
        return null;
    }

    private Uri cropSquareManuallyToPublic(Activity context, Uri sourceUri) {
        try {
            Bitmap src = MediaStore.Images.Media.getBitmap(context.getContentResolver(), sourceUri);
            if (src == null) return null;
            int size = Math.min(src.getWidth(), src.getHeight());
            int x = (src.getWidth() - size) / 2;
            int y = (src.getHeight() - size) / 2;
            Bitmap square = Bitmap.createBitmap(src, x, y, size, size);

            Uri outputUri = createPublicImageUri();
            OutputStream out = context.getContentResolver().openOutputStream(outputUri);
            square.compress(Bitmap.CompressFormat.JPEG, 90, out);
            if (out != null) {
                out.flush();
                out.close();
            }
            src.recycle();
            square.recycle();
            return outputUri;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private Uri createPublicImageUri() {
        ContentValues values = new ContentValues();
        String fileName = "CROP_" + System.currentTimeMillis() + ".jpg";
        values.put(MediaStore.Images.Media.DISPLAY_NAME, fileName);
        values.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
            values.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/YourAppName");
        }
        return appActivity.getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values);
    }

    private void upLoadImage() {
        try {
            InputStream inputStream = appActivity.getContentResolver().openInputStream(cropResultUri);
            if (inputStream != null) {
                Bitmap bm = BitmapFactory.decodeStream(inputStream);
                if (bm != null) {
                    String imageBase64 = bitmapToBase64(bm);
                    Constants.CallUnityFunction(imageBase64, Constants.CallUnityChoosePhotoCallback);
                }
                inputStream.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (cropResultUri != null) {
                try {
                    appActivity.getContentResolver().delete(cropResultUri, null, null);
                } catch (Exception e) {
                    Log.e("PhotoAgent", "删除裁剪文件失败: " + e.getMessage(), e);
                }
                cropResultUri = null;
            }
        }
    }

    public static String bitmapToBase64(Bitmap bitmap) {
        String result = null;
        ByteArrayOutputStream baos = null;
        try {
            if (bitmap != null) {
                baos = new ByteArrayOutputStream();
                bitmap.compress(Bitmap.CompressFormat.JPEG, 30, baos);
                baos.flush();
                baos.close();

                byte[] bitmapBytes = baos.toByteArray();
                result = Base64.encodeToString(bitmapBytes, Base64.NO_WRAP);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }
}
