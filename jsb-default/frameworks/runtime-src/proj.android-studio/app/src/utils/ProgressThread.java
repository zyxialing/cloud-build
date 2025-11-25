package utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import android.annotation.SuppressLint;
import android.app.ProgressDialog;
import android.content.Context;
import android.os.Handler;
import android.os.Message;
import android.util.Log;

import ui.AlGameActivity;
import org.cocos2dx.javascript.Constants;

public class ProgressThread extends Thread {
    ProgressDialog mProgressDialog;
    private File saveFilePath;
    private String downUrl;
    @SuppressLint("SdCardPath")
    String mFileName = "";
    private Context context;

    private final int DOWN_FAIL = 0;
    private final int UPDATE_TITLE = 1;
    private final int FIX_APPLICATION = 2;

    public ProgressThread(final Context mContext,
                          ProgressDialog progressDialog, String mUrl) {
        mProgressDialog = progressDialog;
        mProgressDialog.setCancelable(false);
        mProgressDialog.setCanceledOnTouchOutside(false);
        context = mContext;
        mFileName = AlGameActivity.filePath + DialogUtil.getLastFileName(mUrl);
        Log.v("tishi", mFileName);
        saveFilePath = new File(mFileName);
        downUrl = mUrl;
    }

    //
    @Override
    public void run() {
        int fileSize = -1;
        int downFileSize = 0;
        // boolean result = false;
        int progress = 0;
        try {
            URL url = new URL(downUrl);
            Log.v("tishi", downUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            if (null == conn) {
                return;
            }
            conn.setReadTimeout(10000);
            conn.setRequestMethod("GET");
            conn.setDoInput(true);
            conn.connect();
            if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
                fileSize = conn.getContentLength();
                InputStream is = conn.getInputStream();
                FileOutputStream fos = new FileOutputStream(saveFilePath);
                byte[] buffer = new byte[1024];
                int i = 0;
                int tempProgress = -1;
                while ((i = is.read(buffer)) != -1) {
                    if (this.isInterrupted()) {
                        fos.flush();
                        fos.close();
                        is.close();
                        conn.disconnect();
                        Message msg = new Message();
                        msg.what = DOWN_FAIL;
                        mHandlerMain.sendMessage(msg);
                        break;
                    }
                    downFileSize = downFileSize + i;
                    // 下载进度
                    progress = (int) (downFileSize * 100.0 / fileSize);
                    fos.write(buffer, 0, i);
                    mProgressDialog.setProgress(progress);
                    synchronized (this) {
                        if (downFileSize == fileSize) {
                            Message msg = new Message();
                            msg.what = FIX_APPLICATION;
                            mHandlerMain.sendMessage(msg);
                        } else if (tempProgress != progress) {
                            Message msg = new Message();
                            msg.what = UPDATE_TITLE;
                            msg.arg1 = downFileSize;
                            msg.arg2 = fileSize;
                            mHandlerMain.sendMessage(msg);
                            tempProgress = progress;
                        }
                    }
                }
                fos.flush();
                fos.close();
                is.close();
                conn.disconnect();
                // result = true;
            } else {
                // result = false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            // result = false;
            Log.v("tishi", e.getMessage());
            Message msg = new Message();
            msg.what = DOWN_FAIL;
            msg.obj = (Exception) e;
            mHandlerMain.sendMessage(msg);
        }
        // return result;
    }
    /**
     * 如果服务组件没有安装，有两种安装方1.直接打开语音服务组件下载页面，进行下载后安装
     * 2.把服务组件apk安装包放在assets中，为了避免被编译压缩，修改后缀名为mp3，然后copy到SDcard中进行安装
     */
    private void processInstall(Context context, String assetsApk) {
        // 本地安装方式

    }

    @SuppressLint("HandlerLeak")
    private Handler mHandlerMain = new Handler() {
        public void handleMessage(Message msg) {// 此方法在ui线程运行
            switch (msg.what) {
                case DOWN_FAIL:
                    //Log.v("tishi_CancelDownload", mFileName);
                    mProgressDialog.cancel();
                    //UnityPlayer.UnitySendMessage( Constants.CallUnityRoot,
                            //Constants.CallAPKUpdateCallback, "0,Update failed");
                    Constants.CallUnityFunction("0#Update failed",
                            Constants.CallUnityupdateApplicationCallBack);
                    break;
                case UPDATE_TITLE:
                    //Log.v("tishi33333333333333", mFileName);
                    double downFileSize = DialogUtil.divide((double) msg.arg1,
                            (double) 1024.0, 2);
                    downFileSize = DialogUtil.divide(downFileSize, 1024.0, 2);
                    double fileSize = DialogUtil.divide((double) msg.arg2, 1024.0, 2);
                    fileSize = DialogUtil.divide(fileSize, 1024.0, 2);
                    mProgressDialog.setTitle("Updating...  (" + downFileSize + "Mb"
                            + " / " + fileSize + "Mb)");
                    break;
                case FIX_APPLICATION:
                    //Log.v("tishiFix_Applocation", mFileName);
                    Constants.CallUnityFunction("0#installApk",
                            Constants.CallUnityupdateApplicationCallBack);
                    processInstall(context, mFileName);
                    mProgressDialog.cancel();
                    break;
            }
        }
    };

}
