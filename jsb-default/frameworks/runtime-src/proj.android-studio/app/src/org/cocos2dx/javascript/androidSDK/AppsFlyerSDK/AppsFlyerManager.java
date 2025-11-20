package org.cocos2dx.javascript.androidSDK.AppsFlyerSDK;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;


import androidx.annotation.NonNull;

import com.appsflyer.AppsFlyerConversionListener;
import com.appsflyer.AppsFlyerLib;
import com.appsflyer.deeplink.DeepLink;
import com.appsflyer.deeplink.DeepLinkListener;
import com.appsflyer.deeplink.DeepLinkResult;


import org.cocos2dx.javascript.Constants;
import org.cocos2dx.javascript.SDKManager;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;



public class AppsFlyerManager {
    private Activity currentActivity;
    public static final String LOG_TAG = "AppsFlyerFeedMeApp";
    public static final String DL_ATTRS = "dl_attrs";
    private static volatile AppsFlyerManager appsFlyerManager;
    private Handler mHandler;
    public static  String AF_DEV_KEY = "";
    private AppsFlyerManager() {
        if (mHandler == null) {
            mHandler = new Handler(Looper.getMainLooper());
        }
    }
    //获取实例
    public static AppsFlyerManager getAppsFlyerManager() {

        if (appsFlyerManager == null) {
            synchronized (AppsFlyerManager.class) {
                if (appsFlyerManager == null) {
                    appsFlyerManager = new AppsFlyerManager();
                }
            }
        }
        return appsFlyerManager;
    }

    private String appsFlyerId="";
    public String afActivateData="";
    //private String appsFlyerSub1="";
    public void AppsFlyerInit(Activity _mainActivity)
    {
        currentActivity = _mainActivity;
        AppsFlyerConversionListener conversionListener = new AppsFlyerConversionListener() {

            @Override
            public void onConversionDataSuccess(Map<String, Object> conversionData) {
                //测试时如果第一次关联到了数据，后面每次打开都能获取到关联数据
                for (String converName : conversionData.keySet()) {
                    JSONObject json = new JSONObject(conversionData);
                    afActivateData =json.toString();
                    Log.d("appf",afActivateData);
                    Log.d("LOG_TAG", "ConversionData: " + converName + " = " + conversionData.get(converName));
                    if(converName.equals("af_status"))
                    {
                        SDKManager.installStatus = conversionData.get("af_status").toString();
                        Log.d("MyDebug", "af_status: " + SDKManager.installStatus);
                    }
                }

            }

            @Override
            public void onConversionDataFail(String errorMessage) {
                Log.d("DeepLink", "error getting conversion data: " + errorMessage);
                afActivateData ="";
            }

            @Override
            public void onAppOpenAttribution(Map<String, String> conversionData) {
                //测试时此回调一直没有数据

            }

            @Override
            public void onAttributionFailure(String errorMessage) {
            }


        };

        AppsFlyerLib.getInstance().subscribeForDeepLink(new DeepLinkListener() {
            @Override
            public void onDeepLinking(@NonNull DeepLinkResult deepLinkResult) {
                DeepLinkResult.Status dlStatus = deepLinkResult.getStatus();
                if (dlStatus == DeepLinkResult.Status.FOUND) {
                    Log.d(LOG_TAG, "Deep link found");
                } else if (dlStatus == DeepLinkResult.Status.NOT_FOUND) {
                    Log.d(LOG_TAG, "Deep link not found");
                    return;
                } else {
                    // dlStatus == DeepLinkResult.Status.ERROR
                    DeepLinkResult.Error dlError = deepLinkResult.getError();
                    Log.d(LOG_TAG, "There was an error getting Deep Link data: " + dlError.toString());
                    return;
                }
                DeepLink deepLinkObj = deepLinkResult.getDeepLink();
                try {
                    Log.d(LOG_TAG, "The DeepLink data is: " + deepLinkObj.toString());
                } catch (Exception e) {
                    Log.d(LOG_TAG, "DeepLink data came back null");
                    return;
                }
                // An example for using is_deferred
                if (deepLinkObj.isDeferred()) {
                    Log.d(LOG_TAG, "This is a deferred deep link");
                } else {
                    Log.d(LOG_TAG, "This is a direct deep link");
                }
                // An example for using a generic getter
                try {
                    JSONObject dlData = deepLinkObj.getClickEvent();
                    Object value = dlData.get("deep_link_value");
                    setOneLinkData(value.toString());
                } catch (Exception e) {
                    Log.d(LOG_TAG, "Custom param fruit_name was not found in DeepLink data");
                    return;
                }

            }
        });


        AppsFlyerLib.getInstance().init(AF_DEV_KEY, conversionListener, currentActivity.getApplicationContext());
        AppsFlyerLib.getInstance().setDebugLog(true);
        AppsFlyerLib.getInstance().setCollectOaid(true);
        AppsFlyerLib.getInstance().setCollectAndroidID(true);
        AppsFlyerLib.getInstance().setCollectIMEI(false);
//        AppsFlyerLib.getInstance().enableLocationCollection(true);



        AppsFlyerLib.getInstance().start( currentActivity);
        appsFlyerId = AppsFlyerLib.getInstance().getAppsFlyerUID(currentActivity);
    }

    public void setLinkData(String value) {
        Log.d("xxx_DeepLink Value:", value);
        Constants.CallUnityFunction(value,Constants.CallUnitySaveInviteCode);
//        this.appsFlyerSub1 = value;
    }

    public void setOneLinkData(String value) {
        Log.d("OneLinkDeepLink Value:", value);
        Constants.CallUnityFunction(value,Constants.CallUnitySaveOnLinkInviteCode);
//        this.appsFlyerSub1 = value;
    }

    public void setAdditionalData(HashMap<String, Object> customData) {

    }


    public String GetAppsFlyerId()
    {
        return appsFlyerId;
    }

//    public String GetAppsFlyerSub1()
//    {
//        return appsFlyerSub1;
//    }
}
