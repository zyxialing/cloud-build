package org.cocos2dx.javascript;

import static org.cocos2dx.lib.Cocos2dxActivity.getContext;
import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;

import android.net.Uri;

import android.widget.Toast;


import org.cocos2dx.javascript.androidSDK.AppsFlyerSDK.AppsFlyerManager;


public class SDKManager {

    private static Activity currentActivity;
    private static volatile SDKManager sdkManager;
    private static long activeTime = 0;
    public  static String installStatus = "";
    //获取实例
    public static SDKManager getSDKManager() {

        if (sdkManager == null) {
            synchronized (SDKManager.class) {
                if (sdkManager == null) {
                    sdkManager = new SDKManager();
                }
            }
        }
        return sdkManager;
    }


    public void InitSDKManager(Activity activity, long activeT)
    {
        activeTime = activeT;
        currentActivity = activity;


        AppsFlyerManager.getAppsFlyerManager().AppsFlyerInit(currentActivity);

    }




    public static void shareBySystem(String content) {
        try {
            Intent share_intent = new Intent();
            share_intent.setAction(Intent.ACTION_SEND);//设置分享行为
            share_intent.setType("text/plain");//设置分享内容的类型
            share_intent.putExtra(Intent.EXTRA_TEXT, content);//添加分享内容
            share_intent = Intent.createChooser(share_intent, "share");
            getContext().startActivity(share_intent);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 分享内容到Facebook
    public static void shareFacebook(String link) {
        try {
            Intent shareIntent = new Intent(android.content.Intent.ACTION_SEND);
            shareIntent.setType("text/plain");
            shareIntent.putExtra(Intent.EXTRA_TEXT, link);
            shareIntent.setPackage("com.facebook.katana");
            getContext().startActivity(shareIntent);
        } catch (Exception e) {
            e.printStackTrace();
            try {
                String sharerUrl = "https://www.facebook.com/sharer/sharer.php?u=" + link;
                Intent shareIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(sharerUrl));
                getContext().startActivity(shareIntent);
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
    }

    //分享内容到Whatsapp
    public static int shareWhatsapp(String text) {
        try {
            Intent shareIntent = new Intent(Intent.ACTION_SEND);
            shareIntent.setType("text/plain");
            shareIntent.setPackage("com.whatsapp");
            shareIntent.putExtra(Intent.EXTRA_TEXT, text);
            getContext().startActivity(Intent.createChooser(shareIntent, "Share"));
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
        return 1;
    }




    //------复制文本
    public static boolean copy(String content){
        ClipboardManager cmb = (ClipboardManager) currentActivity.getBaseContext()
                .getSystemService(Context.CLIPBOARD_SERVICE);
        ClipData mClipData = ClipData.newPlainText(null, content);
        cmb.setPrimaryClip(mClipData);
        if (cmb.hasPrimaryClip()) {
            Toast.makeText(currentActivity.getBaseContext(), "Content copied to clipboard", Toast.LENGTH_LONG).show();
        }
        return  true;
    }


    public static void openUrl(String url){
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse(url));
            intent.setPackage("com.android.chrome"); // 指定 Chrome 包名
            currentActivity.startActivity(intent);
        } catch (Exception e) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(Uri.parse(url));
            currentActivity.startActivity(intent);
        }
    }


    public static String GetAppsFlyerId(){
        return AppsFlyerManager.getAppsFlyerManager().GetAppsFlyerId();
    }

    public static String hqAllAzly(){
        return  AppsFlyerManager.getAppsFlyerManager().afActivateData;
    }
    public static String hqAzly(){
        return  installStatus;
    }


}
