package org.cocos2dx.javascript;

import android.content.pm.ActivityInfo;
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import org.json.JSONObject;


public class    Constants {
    public static String publisher;
    public static String CallUnityRoot = "EventMangerForAot";
    public static String CallUnityInstallReferrerCallBack="InstallReferrerCallBack";
    public static String CallAPKUpdateCallback = "APKUpdateCallback";
    public static String CallFBShareBack = "CallFBShareBack";
    public static String CallUnityFBLoginCallback = "SDK_LoginCallback";
    public static String CallUnityIronSourceRewardADCallBack = "ShowAdCallBack";
    public static String CallUnityIronSourceInterstitialADCallBack = "ShowInterstitialAdCallBack";
    public static String CallUnityBatteryManagerCallBack = "BatteryDataCallback";
    public static String CallUnityupdateApplicationCallBack = "CallUnityupdateApplicationCallBack";
    public static String CallUnityPurchaseCallBack="PurchaseCallBack";
    public static String CallUnitySaveInviteCode="SaveInviteCode";
    public static String CallUnitySaveOnLinkInviteCode="SaveOnLinkInviteCode";
    public static String CallUnityUnreadMessageForAIHelp ="UnreadMessageForAIHelp";
    public static String CallUnityReportedActivateData="ReportedActivateDataCallback";
    public static String CallUnityUploadInstallData="UploadAppsFlyerInstallData";
    public static String CallUnityGameConfigData="GameConfigCallBack";
    public static String UrlForWebView = "";
    public static int ScreenDirection = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
    public static String WebviewTitleStr = "FAQ";
    public static String CallUnitySavePic = "SavepicCallBack";
    public static String CallUnityLeosdkRequestState = "LeosdkRequestCallBack";
    public static String CallUnityAgentOpenPayment = "AgentOpenPaymentCallBack";
    public static String CallUnityGetGoogleIDOverCallback = "GetGoogleIDOver_Callback";
    public static String CallUnityChoosePhotoCallback = "ChoosePhoto_Callback";
    public static String CallRefreshPlayerInfo = "CallRefreshPlayerInfo";
    public static String CallAndroidCallBack = "CallAndroidCallBack";
    public static String CallAndroidCallPlayAudio = "CallAndroidCallPlayAudio";
    public static String CallAndroidCallAudioRemove = "CallAndroidCallAudioRemove";
    public static void CallUnityFunction(String param,String callBackUnityMethod)
    {
        Log.d("CallUnityFunction", "param:-> "+param);
        PostMessageToJS(param,callBackUnityMethod);

//       UnityPlayer.UnitySendMessage(CallUnityRoot, callBackUnityMethod, param);
        //android.util.Log.v("winter debug ", "CallUnityFunction :" +  param);
    }


    public static void PostMessageToJS(String data,String callBackUnityMethod){
        String evrStr = "window.SdkCallBack."+callBackUnityMethod+"('"+data+"');";
        Log.d("CallUnityFunction", "evrStr:-> "+evrStr);
        org.cocos2dx.lib.Cocos2dxHelper.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString("window.SdkCallBack."+callBackUnityMethod+"('"+data+"');");
            }
        });
    }

}
