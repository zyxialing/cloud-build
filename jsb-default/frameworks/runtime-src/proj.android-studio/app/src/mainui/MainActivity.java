/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package mainui;

import org.cocos2dx.javascript.Constants;
import org.cocos2dx.javascript.SDKConfig;
import org.cocos2dx.javascript.SDKManager;
import org.cocos2dx.javascript.SDKWrapper;
import org.cocos2dx.javascript.androidSDK.AppsFlyerSDK.AppsFlyerManager;
//import org.cocos2dx.javascript.androidSDK.Adjust.AdjustManager;
import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;

import android.content.Context;
import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.util.Log;
import android.view.View;
import android.view.ViewTreeObserver;
import android.view.WindowManager;
import android.view.inputmethod.InputMethodManager;

import com.google.gson.Gson;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Date;

import kotlin.text.Charsets;
import utils.FileEncryptor;
import utils.MusicPicker;
import utils.PhotoAgent;

public class MainActivity extends Cocos2dxActivity {

    public static Context context = null;
    public static String filePath;

    private void InitConfig(){
//        FileEncryptor.test(this);
        InputStream inputStream = this.getClass().getClassLoader().getResourceAsStream("assets/txt/config.txt");
        String testStr = "";
        try {
             testStr = FileEncryptor.readTextFromStream(inputStream);
//            testStr = FileEncryptor.decrypt(testStr);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        InputStream urlStream = this.getClass().getClassLoader().getResourceAsStream("assets/txt/url.txt");
        String urlStr = "";
        try {
            urlStr  = FileEncryptor.readTextFromStream(urlStream);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }


        Gson gson = new Gson();
        SDKConfig config = gson.fromJson(testStr, SDKConfig.class);
        Log.d("TEST:",config._af_key);
        Log.d("TEST:",config._channel+"");
        Log.d("TEST:",urlStr);
        SDKManager.channel = config._channel;
        SDKManager.urlData = urlStr;
        AppsFlyerManager.AF_DEV_KEY = config._af_key;
//        AdjustManager.getAdjustManager().appAdjustToken = config._ad_key;
        final View decorView = getWindow().getDecorView();
        final View contentView = getWindow().getDecorView().findViewById(android.R.id.content);
        contentView.getViewTreeObserver().addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
            @Override
            public boolean onPreDraw() {
                // 检查软键盘是否关闭
                if (!isKeyboardVisible()) {
                    View currentFocus = getCurrentFocus();
                    if (currentFocus != null) {
                        setImmersiveMode();
                    }
                }
                return true;
            }
        });
    }
    // 方法：检查键盘是否显示
    private boolean isKeyboardVisible() {
        InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        if (imm != null) {
            return imm.isAcceptingText();  // 如果软键盘显示，返回 true
        }
        return false;
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        this.InitConfig();


        super.onCreate(savedInstanceState);
        // Workaround in
        // https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            // so just quietly finish and go away, dropping the user back into the activity
            // at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);

        context = MainActivity.this;

        Date now = new Date();
        long time = now.getTime();
        SDKManager.getSDKManager().InitSDKManager(this,time);
        //不休眠，需要添加权限WAKE_LOCK
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON, WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN); //就可以显示出状态栏了
    }


    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }

    @Override
    protected void onResume() {
        super.onResume();
//        AdjustManager.getAdjustManager().onActivityResumed();
        SDKWrapper.getInstance().onResume();
        MusicPicker.onResume();


    }

    @Override
    protected void onPause() {
        super.onPause();
//        AdjustManager.getAdjustManager().onActivityPaused();
        SDKWrapper.getInstance().onPause();
        MusicPicker.onPause();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }

        SDKWrapper.getInstance().onDestroy();
        unregisterReceiver(SDKManager.getSDKManager().batteryLevelRcvr);
        MusicPicker.onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
        PhotoAgent.getPhotoAgent().onActivityResult(requestCode,resultCode,data);
        SDKManager.dealWebImageResult(requestCode,resultCode,data);
        MusicPicker.onActivityResult(requestCode,resultCode,data);

    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }

    @Override
    public void onBackPressed() {
        Constants.CallUnityFunction("",Constants.CallAndroidCallBack);
        SDKWrapper.getInstance().onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN); //就可以显示出状态栏了
            // ActionBar 不适用于 Cocos 默认 theme，可略过
        } else if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT) {
            getWindow().clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN); //就可以显示出状态栏了
        }
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }

    public static MainActivity ctx(){
        return (MainActivity) SDKWrapper.getInstance().getContext();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        MusicPicker.onRequestPermissionsResult(requestCode,permissions,grantResults);
        PhotoAgent.onRequestPermissionsResult(requestCode,permissions,grantResults);
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        setImmersiveMode();
    }
    // 提取出一个沉浸式方法
    private void setImmersiveMode() {
        int flag = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE   // 防止界面跳动
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;

        View view = getWindow().getDecorView();
        view.setSystemUiVisibility(flag);
    }

}
