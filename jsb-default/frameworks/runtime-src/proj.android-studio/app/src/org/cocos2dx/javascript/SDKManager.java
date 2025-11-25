package org.cocos2dx.javascript;

import static android.app.Activity.RESULT_OK;
import static org.cocos2dx.lib.Cocos2dxActivity.getContext;
//import com.earn.dev.gamelib.*;
import android.Manifest;
import android.app.Activity;
import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.BatteryManager;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import android.util.Log;
import android.webkit.ValueCallback;
import android.widget.Toast;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.snail.antifake.deviceid.AndroidDeviceIMEIUtil;
import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.util.Date;
import java.util.Locale;

import org.cocos2dx.javascript.androidSDK.AppsFlyerSDK.AppsFlyerManager;
import utils.DeviceInfo;
import utils.MusicPicker;
import utils.PhotoAgent;
import utils.SystemBarUtils;

public class SDKManager {

    private static Activity currentActivity;
    private static volatile SDKManager sdkManager;

    public  static String installStatus = "";
    public  static String installAfCannel = "";

    public static  String channel = "";
    public static  String urlData = "";

    public static final String gameVersion = "5.0.0";
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
        MusicPicker.Init(currentActivity);
        DeviceInfo.getDeviceInfoManager().initDeviceInfoManager(currentActivity);
        PhotoAgent.getPhotoAgent().initialize(currentActivity);
        AppsFlyerManager.getAppsFlyerManager().AppsFlyerInit(currentActivity);
        monitorBatteryState();
        currentActivity.registerReceiver(batteryLevelRcvr,batteryLevelFilter);
        getIsSimulator();
        //showSplash();
        Log.d("Android Studio Log:","InitSdkManager");

        Date date = new Date();
        initGooglePlayInstallReferrer(currentActivity.getApplication(),date);
        //getGameConfig();
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

    public static String checkVPN() {
        //don't know why always returns null:
        ConnectivityManager connMgr = (ConnectivityManager) currentActivity.getBaseContext()
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = connMgr.getNetworkInfo(ConnectivityManager.TYPE_VPN);
        String ret = "0";
        if(networkInfo!=null&&networkInfo.isConnected()){
            ret = "1";
        }
        return ret;
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
                    Constants.CallUnityFunction(jsonObj.toString(), Constants.CallUnityInstallReferrerCallBack);
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
                    Constants.CallUnityFunction(googleAdId,Constants.CallUnityGetGoogleIDOverCallback);
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

    //--------是否模拟器登录---begin------
    public static String simulatorResult = "";
    public void getIsSimulator()
    {
        boolean b = AndroidDeviceIMEIUtil.isRunOnEmulator(currentActivity);
        if (b){
            Log.e("A", "emulator" );
            simulatorResult = "1";
        }else {
            Log.e("A", "phone" );
            simulatorResult = "0";
        }
    }

    public static String checkSimulator()
    {
        Log.d("检查模拟器------->", simulatorResult);
        return simulatorResult;
    }
    //------是否模拟器登录--end-


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

    //-------Wifi_Speed----begin--
    public static int wifi_speed = 0;
    private void initWifi() {
        Thread thread = new Thread() {
            @Override
            public void run() {
                while (true) {
                    try {
                        sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    wifi_speed = getWifiSpeed(); //信号
                }
            }
        };
        thread.start();
    }

    public static int getWifiSpeed() {
        return wifi_speed;
    }
    //-------Wifi_Speed----end--



    //获取游戏配置项
    public static String getGameConfig() {
        JSONObject jsonData = new JSONObject();
        try {
            jsonData.put("offline", false);
            jsonData.put("channel", channel);
            jsonData.put("gameVersion",gameVersion);
            jsonData.put("defaultCountryCode",defaultCountryCode);
            jsonData.put("googleId",getGoogleId());
            Log.d("getGameConfigJson-", jsonData.toString());
            // Constants.CallUnityFunction(jsonData.toString(),Constants.CallUnityGameConfigData);
        }catch (Exception e)
        {
            Log.e("getGameConfig-error:", e.toString());
        }

        return jsonData.toString();
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


    public BroadcastReceiver batteryLevelRcvr;
    public IntentFilter batteryLevelFilter;
    private static String batteryDataStr = "";
    private void monitorBatteryState() {
        batteryLevelRcvr = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                int rawlevel = intent.getIntExtra("level", -1);
                int scale = intent.getIntExtra("scale", -1);
                int status = intent.getIntExtra("status", -1);

                int level = -1; // percentage, or -1 for unknown
                if (rawlevel >= 0 && scale > 0) {
                    level = (rawlevel * 100) / scale;
                }
                batteryDataStr = level+"|"+scale+"|"+status;
                Constants.CallUnityFunction(batteryDataStr,Constants.CallUnityBatteryManagerCallBack);
            }
        };
        batteryLevelFilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
    }

    //---------------上报启动----begin---------
    public static boolean isGetCocosGameNative=false;
    public static String gameChannel="";
    public static void ReportedActivateData(String channel)
    {
        gameChannel = channel;
        isGetCocosGameNative=true;

        Log.d("上报adjust", "channel = " + channel);
        if(isGetCocosGameNative)
        {
            getSDKManager().ReportedActivateData_NEW(gameChannel);
            Log.d("上报adjust", "Unity上报");
        }
    }

    private static String gadid = "";
    ///push/activate ----上报启动
    public void ReportedActivateData_NEW(String channel) {
        JSONObject jsonData = new JSONObject();
        JSONObject deviceData = new JSONObject();
        Context content = currentActivity.getBaseContext();
        Log.d("上报启动", "上报启动");
        new Thread() {
            @Override
            public void run() {
                //需要在子线程中处理的逻辑
                try {
                    String gadid = getGoogleId();// AdjustManager.getAdjustManager().GetGAID_Native();
                    Log.d("gadid-", gadid);
                    IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
                    Intent batteryStatus = content.registerReceiver(null, ifilter);
                    BatteryManager manager = (BatteryManager) content.getSystemService(content.BATTERY_SERVICE);

                    int currentLevel = manager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
                    int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
                    int batteryTemperature = manager.getIntProperty(BatteryManager.BATTERY_PROPERTY_STATUS);

                    deviceData.put("batteryCharging", status);
                    deviceData.put("batteryPercent", currentLevel);
                    deviceData.put("batteryTemperature", batteryTemperature);
                    //  deviceData.put("lightSensor","");
                    deviceData.put("isTelephone", DeviceInfo.isPad());
                    deviceData.put("simOperatorName", DeviceInfo.getSimOperatorName());
                    deviceData.put("networkOperatorName", DeviceInfo.getNetworkOperatorName());
//-----------------------------------
                    jsonData.put("channel", channel);
//                    jsonData.put("adActivateData", AdjustManager.getAdjustManager().GetAdjustActivateData());
                    jsonData.put("pkg", currentActivity.getApplication().getPackageName());
                    jsonData.put("gadid", gadid);//Android⾕歌⼴告Id
                    jsonData.put("afid",AppsFlyerManager.getAppsFlyerManager().GetAppsFlyerId());
//                    jsonData.put("adid", AdjustManager.getAdjustManager().GetAdjustId());
                    jsonData.put("ver", DeviceInfo.getInner_Ver());
                    jsonData.put("verCode", DeviceInfo.getVersionCode());
                    jsonData.put("verName", DeviceInfo.getVersionName());
                    jsonData.put("lan", DeviceInfo.getDeviceInfoManager().getCurrentLanguage());
                    jsonData.put("model", DeviceInfo.getDeviceModel());
                    jsonData.put("osVer", "Android " + DeviceInfo.getDeviceAndroidVersion());
                    jsonData.put("device", deviceData);
//                    jsonData.put("attribution", AdjustManager.getAdjustManager().GetAttributionData());
                    jsonData.put("pkgId", getPkgId(currentActivity));
                    jsonData.put("installReferrer", installReferrer);
                    jsonData.put("installReferrer_ts", installReferrer_ts);
                    String dataStr = jsonData.toString();
                    Log.d("dataStr", dataStr);
                    Constants.CallUnityFunction(dataStr,Constants.CallUnityReportedActivateData);
                } catch (Exception e) {
                    e.printStackTrace();
                    Log.e("异常", e.toString());
                }
            }
        }.start();
    }
    //---------------上报启动----end---------

    //-------保存图片----------
    public static void savePng(String filePath) throws JSONException {
        JSONObject jsonData = new JSONObject();

        try{
            Log.d("unity","filePath = " + filePath);
            Intent scanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
            scanIntent.setData(Uri.fromFile(new File(filePath)));
            currentActivity.sendBroadcast(scanIntent);
            jsonData.put("code","true");
            String dataStr = jsonData.toString();
            Constants.CallUnityFunction(dataStr,Constants.CallUnitySavePic);
            Log.d("finish","----------------------finish-------------------------");
        }
        catch (Exception e){
            e.printStackTrace();
            Log.d("异常", e.toString());

            jsonData.put("code","false");
            String dataStr = jsonData.toString();
            Constants.CallUnityFunction(dataStr,Constants.CallUnitySavePic);
        }
    }

    //-------获取国家----------
    public static String getCountryCode()
    {
        String countryCode="";
        TelephonyManager telephonyManager = (TelephonyManager)currentActivity.getSystemService(Context.TELEPHONY_SERVICE);
        //获取ISO国家码，相当于提供SIM卡的国家码。
        countryCode = telephonyManager.getSimCountryIso();
        Log.d("getSimCountryIso()-->", countryCode);
        if(countryCode==null||countryCode=="")
        {
            Locale locale = currentActivity.getResources().getConfiguration().locale;
            countryCode = locale.getCountry();
            Log.d("getCountry()-->", countryCode);
        }
        return countryCode;
    }


    /** 查询手机的 MCC+MNC */
    private static String getSimOperator() {
        TelephonyManager tm = (TelephonyManager)currentActivity.getSystemService(Context.TELEPHONY_SERVICE);
        try {
            return tm.getSimOperator();
        } catch (Exception e) {

        }
        return null;
    }






    public static String PkgID(){
        return pkgId;
    }
    public static String pkgId = "";
    public String getPkgId(Context context) {
        try {
            InputStream is = context.getAssets().open("c");
            ByteArrayOutputStream result = new ByteArrayOutputStream();
            byte[] buffer = new byte[1024];
            int length;
            while ((length = is.read(buffer)) != -1) {
                result.write(buffer, 0, length);
            }
            pkgId = result.toString();
        } catch (Exception err) {
            err.printStackTrace();
        }
        return pkgId;
    }

    public static void openPhotoAlbum()
    {
        Log.d("ToolManager", "ToolManager: 打开相册");

        // Android 12 及以下
        if (ContextCompat.checkSelfPermission(currentActivity,
                Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(currentActivity,
                    new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, 1);
            return;
        }

        // 有权限，直接打开相册
        PhotoAgent.getPhotoAgent().openPhotoAlbum();
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


    public static  void FaceBookShare(String url,String title,String des){
//        GameLoginLogic.getGameLoginLogic().FacebookShareLink(url,title,des);
    }

    public static String GetAppsFlyerId(){
        return AppsFlyerManager.getAppsFlyerManager().GetAppsFlyerId();
    }

    public static String getAdid()
    {
        return "";//AdjustManager.getAdjustManager().GetAdjustId();
    }

    public static String GetUrlData(){
        return  urlData;
    }


    public static void setOrientation_l(){
        currentActivity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
    }

    public static void setOrientation_p(){
        currentActivity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
    }

    public static void chooseAudioPath(){
        MusicPicker.openMusicPicker();
    }
    public static void playLocalAudio(String path){
        Log.e("MusicPicker", path);
        MusicPicker.playAudio(path);
    }
    public static void pauseLocalAudio(){
        Log.e("MusicPicker", "pauseLocalAudio");
        MusicPicker.onPause();
    }
    public static void resumeLocalAudio(){
        Log.e("MusicPicker", "resumeLocalAudio");
        MusicPicker.onResume();
    }
    public static void stopLocalAudio(){
        Log.e("MusicPicker", "stopLocalAudio");
        MusicPicker.onStop();
    }

//    public static  void earnLogin(String id,String phone){
//        Log.e("EarnSdk", "id,phone:"+id+","+phone);
//        EarnManger.getInstance().login(id,phone, new CallbackListener() {
//            @Override
//            public void onComplete(@Nullable EarnError earnError, @Nullable EarnResult earnResult) {
//                Log.d("EarnSdk", "onComplete: " + earnResult);
//            }
//        });
//    }

    public static void dealWebImageResult(int requestCode,int resultCode,Intent data){
        if (requestCode == FILECHOOSER_RESULT_CODE && mUploadMessage != null) {
            Uri[] result = null;
            if (resultCode == RESULT_OK && data != null) {
                Uri dataUri = data.getData();
                if (dataUri != null) {
                    result = new Uri[]{dataUri};
                }
            }
            mUploadMessage.onReceiveValue(result);
            mUploadMessage = null;
        }
    }

    public static int getStatusBarHeight(){
        return  SystemBarUtils.getStatusBarHeight(currentActivity);
    }

    public static String hqAllAzly(){
        return  AppsFlyerManager.getAppsFlyerManager().afActivateData;
    }
    public static String hqAzly(){
        return  installStatus;
    }
}
