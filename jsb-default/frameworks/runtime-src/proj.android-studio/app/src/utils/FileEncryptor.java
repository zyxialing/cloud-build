package utils;

import android.app.Activity;
import android.util.Base64;
import android.util.Log;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.regex.Pattern;

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
                testStr = readTextFromStream(inputStream);
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
    public static String readTextFromStream(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append("\n");
        }
        return sb.toString();
    }

    public static String decodeBitEncrypt(String content) {
        String key = "EskKbMvzZBILhcTv";

        if (content == null || content.length() == 0) {
            return content;
        }

        String regex = "[\\w\\d_\\-`~#!$%^&*(){}=+;:'\"<,>,/?|\\\\\u4e00-\\u9fa5]";
        java.util.regex.Pattern pattern = java.util.regex.Pattern.compile(regex);

        char[] src = content.toCharArray();
        char[] out = content.toCharArray();

        int index = 0;

        for (int i = 0; i < out.length; i++) {
            String current = String.valueOf(out[i]);

            if (pattern.matcher(current).matches()) {
                char oldChar = out[i];
                char newChar = (char) (out[i] ^ key.charAt(index));

                if (pattern.matcher(String.valueOf(newChar)).matches()) {

                    /*
                     * 关键修正：
                     * 旧算法有不可逆问题。
                     * 如果原字符是字母，异或后变成 '-'，
                     * 且这个 '-' 出现在单词 / URL path / JSON key 中间，
                     * 则认为这是旧算法误解码，保留原字符。
                     *
                     * 例如：
                     * vw8rs7login 不应该变成 v-8rs7login
                     * channelName 不应该变成 c-annelName
                     * defaultChannel 不应该变成 defaultCh-nnel
                     */
                    if (Character.isLetter(oldChar)
                            && newChar == '-'
                            && isMiddleOfWord(src, i)) {
                        out[i] = oldChar;
                    } else {
                        out[i] = newChar;
                    }
                } else {
                    out[i] = oldChar;
                }

                index++;
                if (index >= key.length()) {
                    index = 0;
                }
            }
        }

        return new String(out);
    }

    private static boolean isMiddleOfWord(char[] chars, int index) {
        if (index <= 0 || index >= chars.length - 1) {
            return false;
        }

        char prev = chars[index - 1];
        char next = chars[index + 1];

        return isWordLike(prev) && isWordLike(next);
    }

    private static boolean isWordLike(char c) {
        return Character.isLetterOrDigit(c) || c == '_';
    }
}
