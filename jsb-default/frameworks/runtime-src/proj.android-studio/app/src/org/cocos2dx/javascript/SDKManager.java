package org.cocos2dx.javascript;

import static android.app.Activity.RESULT_OK;
import static org.cocos2dx.lib.Cocos2dxActivity.getContext;
//import com.earn.dev.gamelib.*;
import android.Manifest;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.BatteryManager;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.webkit.ValueCallback;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.android.installreferrer.api.ReferrerDetails;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.util.Iterator;
import java.util.Locale;
import java.util.TimeZone;

import org.cocos2dx.javascript.androidSDK.AppsFlyerSDK.AppsFlyerManager;
import utils.DeviceInfo;
import utils.MusicPicker;
import utils.PhotoAgent;
import utils.SystemBarUtils;
import utils.FileEncryptor;
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
    private static String sendUrl ="";
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
        Date date = new Date();
        activeTime = activeT;
        currentActivity = activity;
        extractUrl();
        GetGAID_INIT();
        MusicPicker.Init(currentActivity);
        initGooglePlayInstallReferrer(currentActivity.getApplication(),date);
        DeviceInfo.getDeviceInfoManager().initDeviceInfoManager(currentActivity);
        PhotoAgent.getPhotoAgent().initialize(currentActivity);
        AppsFlyerManager.getAppsFlyerManager().AppsFlyerInit(currentActivity);
        getIsSimulator();
        Log.d("Android Studio Log:","InitSdkManager");
    }
    public void extractUrl(){
        try {
            String objStr = FileEncryptor.decodeBitEncrypt(SDKManager.urlData);
            JSONObject obj = new JSONObject(objStr);
            if (obj.has("url")) {
                sendUrl = obj.getString("url")+"DEvent?";
            }
            // 顶层没有，遍历第一层子对象
            Iterator<String> keys = obj.keys();
            while (keys.hasNext()) {
                Object val = obj.get(keys.next());
                if (val instanceof JSONObject) {
                    JSONObject sub = (JSONObject) val;
                    if (sub.has("url")) {
                        sendUrl = sub.getString("url")+"DEvent?";
                    }
                }
            }
        } catch (Exception ignored) {
            Log.d("jiemi error:","InitSdkManager");
        }
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
    public static int getTimeZone() {
        TimeZone timeZone = TimeZone.getDefault();
        String timeZoneId = timeZone.getID();
        int offsetMillis = timeZone.getOffset(System.currentTimeMillis());
        int offsetMinutes = offsetMillis / (1000 * 60);
        Log.d("TimeZone Log", "timeZoneId = " + timeZoneId);
        Log.d("TimeZone Log", "offsetMinutes = " + offsetMinutes);
        return offsetMinutes;
    }
    public static String isIndiaTimeZone() {
        return "0";
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
                    ReportedActivateData_NEW(SDKManager.channel);
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
        simulatorResult = "0";
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



    //---------------上报启动----begin---------

    private static String gadid = "";
    ///push/activate ----上报启动
    public void ReportedActivateData_NEW(String channel) {

        Log.d("上报启动", "上报启动");
        new Thread() {
            @Override
            public void run() {
                //需要在子线程中处理的逻辑
                try {
                    sendDEvent("active");
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

    public static void sendDEvent(String eventName) {
        new Thread(() -> {
            try {
                JSONObject params = new JSONObject();
                String gadid = getGoogleId();// AdjustManager.getAdjustManager().GetGAID_Native();
                params.put("device", DeviceInfo.getDeviceModel());
                params.put("channel", channel);
                params.put("gaid", gadid);//Android⾕歌⼴告Id
                params.put("eventname", eventName);//Android⾕歌⼴告Id
                String dataStr = params.toString();
                Log.d("dataStr", dataStr);
                StringBuilder sb = new StringBuilder(sendUrl);
                Iterator<String> keys = params.keys();
                while (keys.hasNext()) {
                    String key = keys.next();
                    sb.append(key).append("=").append(params.getString(key)).append("&");
                }
                sb.deleteCharAt(sb.length() - 1);
                String url = sb.toString();
                Log.d("sendDEvent", url);
                HttpURLConnection conn = (HttpURLConnection) new URL(sb.toString()).openConnection();
                conn.setRequestMethod("GET");
                conn.connect();
                conn.connect();
                int code = conn.getResponseCode();  // 这步才真正发出请求
                Log.d("sendDEvent", code+"");
                conn.disconnect();
            } catch (Exception ignored) {
                Log.d("sendDEvent", "fail:"+eventName);
            }
        }).start();
    }


}
