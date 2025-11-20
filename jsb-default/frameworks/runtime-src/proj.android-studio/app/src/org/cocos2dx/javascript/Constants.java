package org.cocos2dx.javascript;

import android.content.pm.ActivityInfo;
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;
import org.json.JSONObject;


public class    Constants {


    public static String CallUnitySaveInviteCode="SaveInviteCode";
    public static String CallUnitySaveOnLinkInviteCode="SaveOnLinkInviteCode";
    public static String CallAndroidCallBack = "CallAndroidCallBack";
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
