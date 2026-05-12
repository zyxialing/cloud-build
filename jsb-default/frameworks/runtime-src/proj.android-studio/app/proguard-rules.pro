# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in E:\developSoftware\Android\SDK/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Proguard Cocos2d-x-lite for release
-keep public class org.cocos2dx.** { *; }
-dontwarn org.cocos2dx.javascript.SDKConfig
-dontwarn org.cocos2dx.javascript.SDKManager
-dontwarn org.cocos2dx.javascript.Constants
-dontwarn soft.SelfActivity   # AUTO_MAIN

-keep class com.earn.dev.gamelib.** { *; }
-dontwarn org.cocos2dx.javascript.SDKConfig

# Proguard Apache HTTP for release
-keep class org.apache.http.** { *; }
-dontwarn org.apache.http.**

# Proguard okhttp for release
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**

-keep class okio.** { *; }
-dontwarn okio.**

# Proguard Android Webivew for release. you can comment if you are not using a webview
-keep public class android.net.http.SslError
-keep public class android.webkit.WebViewClient

-dontwarn android.webkit.WebView
-dontwarn android.net.http.SslError
-dontwarn android.webkit.WebViewClient

# keep anysdk for release. you can comment if you are not using anysdk
-keep public class com.anysdk.** { *; }
-dontwarn com.anysdk.**

-keep class com.snail.antifake.** { *; }
-keep class com.appsflyer.** { *; }
-keep class kotlin.jvm.internal.** { *; }
-keep public class com.miui.referrer.** {*;}
-keep public class com.android.installreferrer.** { *; }

-keep class com.squareup.moshi.** { *; }
-dontwarn com.squareup.moshi.**
-keep interface com.squareup.moshi.** { *; }
-keep class kotlin.Metadata { *; }
-keep class kotlin.reflect.** { *; }
-keepattributes Signature, RuntimeVisibleAnnotations, RuntimeInvisibleAnnotations, EnclosingMethod, InnerClasses, Exceptions


# OkHttp
-keep class okhttp3.** { *; }
-dontwarn okhttp3.**
-keep interface okhttp3.** { *; }
-keep class okio.** { *; }
-dontwarn okio.**


# Kotlinx Serialization
-keep class kotlinx.serialization.** { *; }
-dontwarn kotlinx.serialization.**


# MMKV
-keep class com.tencent.mmkv.** { *; }
-dontwarn com.tencent.mmkv.**


# Core-ktx
-keep class androidx.core.** { *; }
-dontwarn androidx.core.**


# AppCompat
-keep class androidx.appcompat.** { *; }
-dontwarn androidx.appcompat.**


# Material
-keep class com.google.android.material.** { *; }
-dontwarn com.google.android.material.**


# Kotlin
-keepattributes RuntimeVisibleAnnotations
-keepclassmembers class ** {
   @kotlin.Metadata <methods>;
}
-keep class kotlin.Metadata { *; }
-keepattributes *Annotation*
-keep class kotlin.** { *; }
-keep class kotlin.Metadata { *; }
-dontwarn kotlin.**
-keepclassmembers class **$WhenMappings {
   <fields>;
}
-keepclassmembers class kotlin.Metadata {
   public <methods>;
}
-assumenosideeffects class kotlin.jvm.internal.Intrinsics {
   static void checkParameterIsNotNull(java.lang.Object, java.lang.String);
}
-keepnames class kotlinx.** { *; }
-renamesourcefileattribute SourceFile
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod
-keepclassmembernames class kotlinx.** {
   volatile <fields>;
}


-keepclassmembernames class kotlin.coroutines.SafeContinuation {
   volatile <fields>;
}
-keep class kotlinx.coroutines.** { *; }
-dontwarn kotlinx.coroutines.**
