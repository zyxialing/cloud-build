package utils;

import android.app.Activity;
import android.content.res.Resources;
import android.os.Build;
import android.provider.Settings;
import android.util.DisplayMetrics;

public class SystemBarUtils {

    /**
     * 获取状态栏高度，兼容 API 22+
     */
    public static int getStatusBarHeight(Activity activity) {
        int result = 0;
        int resourceId = activity.getResources().getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            result = activity.getResources().getDimensionPixelSize(resourceId);
        }
        return result;
    }

    /**
     * 获取导航栏高度（底部虚拟键高度）
     * 适配各种机型，有导航栏时返回高度，否则0
     */
    public static int getNavigationBarHeight(Activity activity) {
         return   (getRealScreenHeight(activity)-getUsableScreenHeight(activity)-getStatusBarHeight(activity));
    }

    /**
     * 判断是否有导航栏
     * 通过比较屏幕显示高度和真实高度判断
     */

    /**
     * 获取屏幕真实高度（含导航栏）
     */
    public static int getRealScreenHeight(Activity activity) {
        DisplayMetrics metrics = new DisplayMetrics();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            activity.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
        } else {
            activity.getWindowManager().getDefaultDisplay().getMetrics(metrics);
        }
        return metrics.heightPixels;
    }

    public static int getRealScreenWitdh(Activity activity) {
        DisplayMetrics metrics = new DisplayMetrics();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            activity.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
        } else {
            activity.getWindowManager().getDefaultDisplay().getMetrics(metrics);
        }
        return metrics.widthPixels;
    }

    /**
     * 获取屏幕可用高度（不含导航栏）
     */
    public static int getUsableScreenHeight(Activity activity) {
        DisplayMetrics metrics = new DisplayMetrics();
        activity.getWindowManager().getDefaultDisplay().getMetrics(metrics);
        return metrics.heightPixels;
    }
}
