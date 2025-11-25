package utils;

import java.io.File;
import java.math.BigDecimal;
import java.util.ArrayList;

import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnCancelListener;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Environment;

public class DialogUtil {


    Context fContext;
    static ProgressDialog mProgressDialog;

    public static void createDialogForDown(final Context context,
                                           final int iconId, final String title, final String message,
                                           final String positive, final String negative, final String url) {
        AlertDialog.Builder builder = new AlertDialog.Builder(context);
        if (iconId != 0) {
            builder.setIcon(iconId);
        }
        if (title != null && !title.equals("")) {
            builder.setTitle(title);
        }
        if (message != null && !message.equals("")) {
            builder.setMessage(message);
        }
        if (positive != null && !positive.equals("")) {
            builder.setPositiveButton(positive,
                    new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,
                                            int whiceButton) {
                            DialogUtil.createDialogForDownProgress(context, 0,
                                    "Updating...", 1, url);

                        }
                    });
        }
        if (negative != null && !negative.equals("")) {
            builder.setNegativeButton(negative,
                    new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog,
                                            int whiceButton) {
                        }
                    });
        }
        builder.create().show();
    }

    int mSingleChoiceID = -1;
    static int MAX_PROGRESS = 100;

    public static void createDialogForDownProgress(Context context, int iconId,
                                                   String title, int style, String url) {

        ProgressDialog mProgressDialog = new ProgressDialog(context);

        if (iconId != 0) {
            mProgressDialog.setIcon(iconId);
        }

        if (title != null && !title.equals("")) {
            mProgressDialog.setTitle(title);
        }

        if (style != 0) {
            mProgressDialog.setProgressStyle(style);
        }
        final Thread progressThread = new ProgressThread(context,
                mProgressDialog, url);
        progressThread.start();
        mProgressDialog.setButton(DialogInterface.BUTTON_NEGATIVE, "取消",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        // TODO Auto-generated method stub
                        progressThread.interrupt();
                    }
                });
        mProgressDialog.show();
        mProgressDialog.setMax(MAX_PROGRESS);
    }

    ArrayList<Integer> MultiChoiceID = new ArrayList<Integer>();

    public static void showDialog(Context context, String str) {
        new AlertDialog.Builder(context).setMessage(str).show();
    }

    public static ProgressDialog show(Context context, CharSequence title,
                                      CharSequence message, OnCancelListener cancelListener) {
        try {
            ProgressDialog pd = new ProgressDialog(context);
            pd.setTitle(title);
            pd.setMessage(message);
            pd.setCancelable(false);
            pd.setCanceledOnTouchOutside(false);
            pd.setOnCancelListener(cancelListener);
            pd.show();
            return pd;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void dismiss(ProgressDialog pd) {
        if (pd == null)
            return;

        if (pd.isShowing() && pd.getWindow() != null) {
            try {
                pd.dismiss();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public static void setText(ProgressDialog pd, String title, String message,
                               OnCancelListener cancelListener) {
        if (pd == null)
            return;

        if (cancelListener != null)
            pd.setOnCancelListener(cancelListener);

        if (title != null)
            pd.setTitle(title);

        if (message != null)
            pd.setMessage(message);
    }

    public static ProgressDialog show(Context context, String title,
                                      String message) {
        try {
            ProgressDialog pd = new ProgressDialog(context);
            pd.setTitle(title);
            pd.setMessage(message);
            pd.setCancelable(true);
            pd.show();
            return pd;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    // 得到SDCARD的静态路径
    public static String getSDPath() {
        File sdDir = null;
        if (ExistSDCard()) {
            sdDir = Environment.getExternalStorageDirectory();
        }
        return sdDir.toString();
    }

    public static boolean ExistSDCard() {
        if (android.os.Environment.getExternalStorageState().equals(
                android.os.Environment.MEDIA_MOUNTED)) {
            return true;
        } else
            return false;
    }

    public static boolean isAppInstall(Context context, String appName) {
        PackageInfo packageInfo = null ;
        try {
            packageInfo = context.getPackageManager().getPackageInfo(appName, 0);
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return packageInfo==null?false:true;
    }

    public static String getLastFileName(String path) {

        int start = path.lastIndexOf("/");
        if (start != -1) {
            return path.substring(start + 1, path.length());
        } else {
            return null;
        }

    }

    /**
     *      * @param v1      * @param v2      * @param scale 对结果保留几位小�?     * @return
     *      
     */
    public static double divide(double v1, double v2, int scale) {
        BigDecimal b1 = new BigDecimal(Double.toString(v1));
        BigDecimal b2 = new BigDecimal(Double.toString(v2));
        return b1.divide(b2, scale).doubleValue();
    }
}
