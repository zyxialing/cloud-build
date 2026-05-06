package org.cocos2dx.javascript;

//import com.earn.dev.gamelib.*;
import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;
import android.util.Log;
import android.webkit.ValueCallback;
import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;

import java.util.Date;

import org.cocos2dx.javascript.androidSDK.AppsFlyerSDK.AppsFlyerManager;
import org.json.JSONException;
import org.json.JSONObject;

import utils.DeviceInfo;

public class SDKManager {

    private static Activity currentActivity;
    private static volatile SDKManager sdkManager;

    public  static String installStatus = "";
    public  static String installAfCannel = "";

    public static  String channel = "";
    public static  String urlData = "";

    public static final String gameVersion = "6.0.0";
    public static final String defaultCountryCode = "D";
    public static final int FILECHOOSER_RESULT_CODE = 10000;
    public static ValueCallback<Uri[]> mUploadMessage;


    private static long activeTime = 0;
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
        GetGAID_INIT();
        DeviceInfo.getDeviceInfoManager().initDeviceInfoManager(currentActivity);
        AppsFlyerManager.getAppsFlyerManager().AppsFlyerInit(currentActivity);
        //showSplash();
        Log.d("Android Studio Log:","InitSdkManager");

        Date date = new Date();
        initGooglePlayInstallReferrer(currentActivity.getApplication(),date);
//        Log.d("screen+StatusBar:",getStatusBarHeight()+"");
//        Log.d("screen+Navigation:",getNavigationBarHeight()+"");
//        Log.d("screen+RealScreen:",getRealScreenHeight()+"");
//        Log.d("screen+UsableScreen:",getUsableScreenHeight()+"");
//        Log.d("screen+UsableScreenw:",getRealScreenWitdh()+"");
    }
    private void initGooglePlayInstallReferrer(Application ctx, Date now){
        InstallReferrerClient referrerClient = InstallReferrerClient.newBuilder(ctx).build();
        referrerClient.startConnection(new InstallReferrerStateListener() {
            @Override
            public void onInstallReferrerSetupFinished(int responseCode) {
                switch (responseCode) {
                    case InstallReferrerClient.InstallReferrerResponse.OK:
                        // Connection established.
                        handleInstallReferrer(ctx, referrerClient, now);
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.FEATURE_NOT_SUPPORTED:
                        // API not available on the current Play Store app.
                        Log.e("", "FEATURE_NOT_SUPPORTED");
                        break;
                    case InstallReferrerClient.InstallReferrerResponse.SERVICE_UNAVAILABLE:
                        // Connection couldn't be established.
                        Log.e("", "SERVICE_UNAVAILABLE");
                        break;
                }
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                // Try to restart the connection on the next request to
                // Google Play by calling the startConnection() method.
                Log.d("", "onInstallReferrerServiceDisconnected!");
            }
        });
    }

    static String installReferrer = "";
    static long installReferrer_ts = 0;
    private static void handleInstallReferrer(Application ctx, InstallReferrerClient client, Date now){
        long temp = activeTime - now.getTime();

        try {
            ReferrerDetails response = client.getInstallReferrer();
            String referrer = response.getInstallReferrer();
            installReferrer = referrer;
            installReferrer_ts = temp;
            Log.i("", "安装来源值: referrer=" + referrer + "; 耗时=" + temp + "ms");

            if (TextUtils.isEmpty(referrer)) {
                Log.e("", "安装来源值为空!");
            } else {
                JSONObject jsonObj = new JSONObject();
                try {
                    jsonObj.put("installReferrer", referrer);
                    jsonObj.put("installReferrer_ts", temp);
                    Log.d("referrer----->",jsonObj.toString());
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }

            client.endConnection();
        } catch (Exception ex) {
            Log.e("InstallReferrerHelper", ex.toString());
        }
    }
    public static String getGoogleId()
    {
        if(googleAdId.equals("0")||googleAdId.equals("") ||googleAdId.equals("00000000-0000-0000-0000-000000000000"))
            return "";
        return googleAdId;
    }

    public static String googleAdId = "";
    public void GetGAID_INIT() {
        new Thread() {
            @Override
            public void run() {
                //需要在子线程中处理的逻辑
                try {
                    Log.d("gggggg begin:", googleAdId);
                    googleAdId = GetGAID_Native();
                    Log.d("gggggg Value:", "googleAdId = " + googleAdId);
                } catch (Exception e) {
                    e.printStackTrace();
                    Log.e("异常", e.toString());
                }
            }
        }.start();
    }


    //获取 GAID
    public String GetGAID_Native(){

        String gaid= "";
        AdvertisingIdClient.Info adInfo = null ;
        try {
            adInfo = AdvertisingIdClient.getAdvertisingIdInfo(currentActivity.getBaseContext());
        } catch (Exception e) {
            Log.e("getGAID", "Exception:"+e.toString());
            // Encountered a recoverable error connecting to Google Play services.
        }
        if (adInfo!= null){
            gaid= adInfo.getId();
            Log.w("getGAID", "gaid:"+gaid);
        }
        return gaid;
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
