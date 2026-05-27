# Cocos2d-x
-keep public class org.cocos2dx.** { *; }
-dontwarn org.cocos2dx.javascript.SDKConfig
-dontwarn org.cocos2dx.javascript.SDKManager
-dontwarn org.cocos2dx.javascript.Constants
-dontwarn win.CoMainActivity

# Gson (used in CoMainActivity)
-keep class com.google.gson.** { *; }
-dontwarn com.google.gson.**

# Google Play Services - Ads Identifier (GAID)
-keep class com.google.android.gms.ads.identifier.** { *; }

# AppsFlyer
-keep class com.appsflyer.** { *; }
-dontwarn com.appsflyer.**

# Install Referrer (transitive dependency of AppsFlyer)
-keep public class com.android.installreferrer.** { *; }

# AndroidX Core (ActivityCompat, ContextCompat used directly)
-keep class androidx.core.** { *; }
-dontwarn androidx.core.**

# AndroidX AppCompat

# AndroidX Lifecycle (fix ReportFragment crash on Google Play)
-keep class androidx.lifecycle.** { *; }
-keep class * extends android.app.Fragment { *; }

# Kotlin runtime (used by AndroidX / Room internally)
-keep class kotlin.Metadata { *; }
-keep class kotlin.jvm.internal.** { *; }
-keep class kotlin.reflect.** { *; }
-keep class kotlinx.coroutines.** { *; }
-dontwarn kotlinx.coroutines.**
-keepclassmembernames class kotlin.coroutines.SafeContinuation {
   volatile <fields>;
}
-keepclassmembers class **$WhenMappings {
   <fields>;
}

# Keep source info for readable stack traces
-renamesourcefileattribute SourceFile
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,*Annotation*,EnclosingMethod,RuntimeVisibleAnnotations,RuntimeInvisibleAnnotations

# Firebase Crashlytics
-keep class com.google.firebase.crashlytics.** { *; }

# 不混淆类名、方法名、字段名 打开后不会混淆了
#-dontobfuscate
