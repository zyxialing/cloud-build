package utils;

import android.Manifest;
import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.AsyncTask;
import android.os.Build;
import android.provider.Settings;
import android.telephony.TelephonyManager;


import androidx.core.app.ActivityCompat;

import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import com.google.android.gms.common.api.ResultCallback;

//import com.huawei.android.hms.pps.AdvertisingIdClient;

import java.io.IOException;
import java.security.DomainLoadStoreParameter;
import java.security.MessageDigest;
import java.util.Locale;
import java.util.UUID;

public class DeviceInfo {

    private static volatile DeviceInfo deviceInfosManager;
    private static Activity currentActivity;

    //获取实例
    public static DeviceInfo getDeviceInfoManager() {
        if (deviceInfosManager == null) {
            synchronized (DeviceInfo.class) {
                if (deviceInfosManager == null) {
                    deviceInfosManager = new DeviceInfo();
                }
            }
        }
        return deviceInfosManager;
    }

    public void initDeviceInfoManager(Activity activity) {
        currentActivity = activity;
    }

    /**
     * 获取当前系统语言
     *
     * @return
     */
    public String getCurrentLanguage() {
        return Locale.getDefault().getLanguage();
    }

    /**
     * 获取应用程序名称
     */
    public static synchronized String getAppName() {
        try {
            PackageManager packageManager = currentActivity.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    currentActivity.getPackageName(), 0);
            int labelRes = packageInfo.applicationInfo.labelRes;
            return currentActivity.getResources().getString(labelRes);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * [获取应用程序版本名称信息]
     *
     * @param
     * @return 当前应用的版本名称
     */
    public static synchronized String getVersionName() {
        try {
            PackageManager packageManager = currentActivity.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    currentActivity.getPackageName(), 0);
            return packageInfo.versionName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * [获取应用程序版本名称信息]
     *
     * @param
     * @return 当前应用的版本名称
     */
    public static synchronized int getVersionCode() {
        try {
            PackageManager packageManager = currentActivity.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    currentActivity.getPackageName(), 0);
            return packageInfo.versionCode;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return 0;
    }

    /**
     * 获取设备唯一码
     * @return
     */
    public static String getDeviceId() {
        Context context = currentActivity.getBaseContext();
        StringBuilder sbDeviceId = new StringBuilder();
        String imei = getIMEI(context);
        String androidId = getAndroidId(context);
        String serial = getSerial();
        String uuid = getDeviceUUID();

        //附加imei
        if (imei != null && imei.length() > 0) {
            sbDeviceId.append(imei);
            sbDeviceId.append("|");
        }
        //附加androidId
        if (androidId != null && androidId.length() > 0) {
            sbDeviceId.append(androidId);
            sbDeviceId.append("|");
        }
        //附加serial
        if (serial != null && serial.length() > 0) {
            sbDeviceId.append(serial);
            sbDeviceId.append("|");
        }
        //附加uuid
        if (uuid != null && uuid.length() > 0) {
            sbDeviceId.append(uuid);
        }

        if (sbDeviceId.length() > 0) {
            try {
                byte[] hash = getHashByString(sbDeviceId.toString());
                String sha1 = bytesToHex(hash);
                if (sha1 != null && sha1.length() > 0) {
                    //返回最终的DeviceId
                    return sha1;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    /**
     * 转16进制字符串
     *
     * @param data 数据
     * @return 16进制字符串
     */
    private static String bytesToHex(byte[] data) {
        StringBuilder sb = new StringBuilder();
        String string;
        for (int i = 0; i < data.length; i++) {
            string = (Integer.toHexString(data[i] & 0xFF));
            if (string.length() == 1) {
                sb.append("0");
            }
            sb.append(string);
        }
        return sb.toString().toUpperCase(Locale.CHINA);
    }

    /**
     * 取 SHA1
     *
     * @param data 数据
     * @return 对应的Hash值
     */
    private static byte[] getHashByString(String data) {
        try {
            MessageDigest messageDigest = MessageDigest.getInstance("SHA1");
            messageDigest.reset();
            messageDigest.update(data.getBytes("UTF-8"));
            return messageDigest.digest();
        } catch (Exception e) {
            return "".getBytes();
        }
    }


    /**
     * 获取硬件的UUID
     *
     * @return
     */
    private static String getDeviceUUID() {
        String deviceId = "9527" + Build.ID +
                Build.DEVICE +
                Build.BOARD +
                Build.BRAND +
                Build.HARDWARE +
                Build.PRODUCT +
                Build.MODEL +
                Build.SERIAL;
        return new UUID(deviceId.hashCode(), Build.SERIAL.hashCode()).toString().replace("-", "");
    }

    private static String getSerial() {
//        try {
//            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//                if (ActivityCompat.checkSelfPermission(currentActivity.getBaseContext(), Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
//                    // TODO: Consider calling
//                    //    ActivityCompat#requestPermissions
//                    // here to request the missing permissions, and then overriding
//                    //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
//                    //                                          int[] grantResults)
//                    // to handle the case where the user grants the permission. See the documentation
//                    // for ActivityCompat#requestPermissions for more details.
//                    return "";
//                }
//                return Build.getSerial();
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

        return null;
    }

    /**
     * 获取AndroidId
     *
     * @param context 上下文
     * @return AndroidId
     */
    private static String getAndroidId(Context context) {
        try {
            String androidId = Settings.Secure.getString(context.getContentResolver(),
                    Settings.Secure.ANDROID_ID);
            return androidId;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 获取IMEI
     *
     * @param context 上下文
     * @return IMEI
     */
    private static String getIMEI(Context context) {
//        try {
//            TelephonyManager telephonyManager = (TelephonyManager)
//                    context.getSystemService(Context.TELEPHONY_SERVICE);
//            if (ActivityCompat.checkSelfPermission(currentActivity.getBaseContext(), Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
//                // TODO: Consider calling
//                //    ActivityCompat#requestPermissions
//                // here to request the missing permissions, and then overriding
//                //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
//                //                                          int[] grantResults)
//                // to handle the case where the user grants the permission. See the documentation
//                // for ActivityCompat#requestPermissions for more details.
//                return "";
//            }
//            return telephonyManager.getDeviceId();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }

        return "";
    }

    /**
     * [获取应用程序版本名称信息]
     *
     * @param
     * @return 当前应用的版本名称
     */
    public static synchronized String getPackageName() {
        try {
            PackageManager packageManager = currentActivity.getPackageManager();
            PackageInfo packageInfo = packageManager.getPackageInfo(
                    currentActivity.getPackageName(), 0);
            return packageInfo.packageName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    public static String getInner_Ver() {
        String ver = "";

        if (android.os.Build.DISPLAY.contains(android.os.Build.VERSION.INCREMENTAL)) {
            ver = android.os.Build.DISPLAY;
        } else {
            ver = android.os.Build.VERSION.INCREMENTAL;
        }
        return ver;
    }



    /**
     * 获取厂商名
     **/
    public static String getDeviceManufacturer() {
        return android.os.Build.MANUFACTURER;
    }

    /**
     * 获取产品名
     **/
    public static String getDeviceProduct() {
        return android.os.Build.PRODUCT;
    }

    /**
     * 获取手机品牌
     */
    public static String getDeviceBrand() {
        return android.os.Build.BRAND;
    }

    /**
     * 获取手机型号
     */
    public static String getDeviceModel() {
        return android.os.Build.MODEL;
    }

    /**
     * 获取手机主板名
     */
    public static String getDeviceBoard() {
        return android.os.Build.BOARD;
    }

    /**
     * 设备名
     **/
    public static String getDeviceDevice() {
        return android.os.Build.DEVICE;
    }

    /**
     * 获取手机Android 版本
     *
     * @return
     */
    public static String getDeviceAndroidVersion() {
        return android.os.Build.VERSION.RELEASE;
    }
    /**
     * 是否是ispad
     *
     * @return
     */
    public static int isPad() {

        Context content = currentActivity.getBaseContext();
        TelephonyManager telephony = (TelephonyManager)content.getSystemService(content.TELEPHONY_SERVICE);
        if (telephony.getPhoneType() == TelephonyManager.PHONE_TYPE_NONE) {
            return 0;
        }else {
            return 1;
        }
    }
    /**
     * SIM
     *
     * @return
     */

    public static String getSimOperatorName()
    {
        Context content = currentActivity.getBaseContext();
        TelephonyManager telephony =(TelephonyManager)content.getSystemService(content.TELEPHONY_SERVICE);
        return telephony.getSimOperatorName();
    }
    /**
     * 网络
     *
     * @return
     */

    public static String getNetworkOperatorName()
    {
        Context content = currentActivity.getBaseContext();
        TelephonyManager telephony =(TelephonyManager)content.getSystemService(content.TELEPHONY_SERVICE);
        return telephony.getNetworkOperatorName();
    }


}
