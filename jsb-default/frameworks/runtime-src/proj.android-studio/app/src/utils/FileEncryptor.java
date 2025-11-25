package utils;

import android.app.Activity;
import android.util.Base64;

import com.google.firebase.crashlytics.buildtools.reloc.com.google.common.io.CharStreams;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.*;
import java.nio.charset.StandardCharsets;

import kotlin.text.Charsets;

public class FileEncryptor {

    private static final String AES_ALGORITHM = "AES/CBC/PKCS5Padding";
    // 固定的 AES 密钥（必须是 32 字节，即 256-bit）
    private static final String FIXED_KEY_BASE64 = "12345678901234567890123456789012";
    private static final byte[] FIXED_KEY_IV = {
            19, -56, -105, -67, -93, 43, 2, -80,
            111, 127, 20, -8, -35, 70, 105, -72
    };

    // 获取固定密钥
    private static SecretKey getFixedAESKey() {
        byte[] keyBytes = FIXED_KEY_BASE64.getBytes(StandardCharsets.UTF_8);
        return new SecretKeySpec(keyBytes, "AES");
    }

    // AES 加密
    public static String encrypt(String data) throws Exception {
        Cipher cipher = Cipher.getInstance(AES_ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, getFixedAESKey(), new IvParameterSpec(FIXED_KEY_IV));
        byte[] encryptedBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
        return Base64.encodeToString(encryptedBytes, Base64.DEFAULT); // 适配 Android 低版本
    }

    // AES 解密
    public static String decrypt(String encryptedData) throws Exception {
        Cipher cipher = Cipher.getInstance(AES_ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, getFixedAESKey(), new IvParameterSpec(FIXED_KEY_IV));
        byte[] decodedBytes = Base64.decode(encryptedData, Base64.DEFAULT); // 适配 Android 低版本
        byte[] decryptedBytes = cipher.doFinal(decodedBytes);
        return new String(decryptedBytes, StandardCharsets.UTF_8);
    }

    public static void test(Activity activity) {
        try {
            InputStream inputStream = activity.getClass().getClassLoader().getResourceAsStream("assets/txt/config.txt");
            String testStr = "";
            try {
                testStr  = CharStreams.toString(new InputStreamReader(inputStream, Charsets.UTF_8));
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            String originalContent = testStr;
            System.out.println("原始内容: " + originalContent);

//            // 加密
            String encryptedContent = encrypt(originalContent);
            System.out.println("加密后: " + encryptedContent);

            // 解密
            String decryptedContent = decrypt(originalContent);
            System.out.println("解密后: " + decryptedContent);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
