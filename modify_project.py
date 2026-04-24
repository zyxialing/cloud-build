import os
import json
import re
import shutil
import sys, traceback

def excepthook(type, value, tb):
    print("\n\n====== ⚠ 全局捕获到错误，完整堆栈如下 ======\n")
    traceback.print_exception(type, value, tb)
    input("\n按回车关闭窗口…")
    sys.exit(1)

sys.excepthook = excepthook

# -------------------------
# 根路径（按你的实际路径）
# -------------------------
PROJECT_ROOT = r"D:/androidwork/game2024_onlyaf_cloud_build"
ANDROID_ROOT = os.path.join(PROJECT_ROOT, "jsb-default/frameworks/runtime-src/proj.android-studio")

APP_ROOT = os.path.join(ANDROID_ROOT, "app")
INSTANT_ROOT = os.path.join(ANDROID_ROOT, "instantapp")
RES_VALUES = os.path.join(ANDROID_ROOT, "res/values/strings.xml")  # app 名称路径修正
MAIN_JAVA_ROOT = os.path.join(APP_ROOT, "src")

# -------------------------
# 工具：读写文件
# -------------------------
def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()

def write(path, txt):
    with open(path, "w", encoding="utf-8") as f:
        f.write(txt)

# -------------------------
# 1. 修改包名
# -------------------------
def replace_package(new_pkg):
    manifest_files = [
        os.path.join(APP_ROOT, "AndroidManifest.xml"),
        os.path.join(INSTANT_ROOT, "AndroidManifest.xml"),
    ]
    for mf in manifest_files:
        if os.path.exists(mf):
            content = read(mf)
            content = re.sub(r'package="[^"]+"', f'package="{new_pkg}"', content)
            write(mf, content)
            print(f"→ 修改包名：{mf}")

# -------------------------
# 2. 修改 build.gradle 中 namespace / applicationId
# -------------------------
def replace_gradle_package(new_pkg):
    gradles = [
        os.path.join(APP_ROOT, "build.gradle"),
        os.path.join(INSTANT_ROOT, "build.gradle"),
    ]
    for g in gradles:
        if os.path.exists(g):
            content = read(g)
            content = re.sub(r'namespace\s+"[^"]+"', f'namespace "{new_pkg}"', content)
            content = re.sub(r'applicationId\s+"[^"]+"', f'applicationId "{new_pkg}"', content)
            write(g, content)
            print(f"→ 修改 build.gradle：{g}")

# -------------------------
# 3. 修改 app_name
# -------------------------
def replace_app_name(name, channel):
    if os.path.exists(RES_VALUES):
        content = read(RES_VALUES)

        # app_name
        content = re.sub(
            r'<string name="app_name"[^>]*>.*?</string>',
            f'<string name="app_name" translatable="false">{name}</string>',
            content
        )

        # ⭐ 新增：deepLinkHost
        content = re.sub(
            r'<string name="deepLinkHost"[^>]*>.*?</string>',
            f'<string name="deepLinkHost" translatable="false">megaslots{channel}</string>',
            content
        )

        write(RES_VALUES, content)
        print("→ 修改 app_name + deepLinkHost 成功")

# -------------------------
# 4. 替换图标（正确路径）
# -------------------------
def replace_icon():
    src_icon = os.path.join(PROJECT_ROOT, "ic_launcher.png")
    dst_icon = os.path.join(ANDROID_ROOT, "res/mipmap/ic_launcher.png")  # 修正

    if os.path.exists(src_icon):
        os.makedirs(os.path.dirname(dst_icon), exist_ok=True)
        shutil.copy(src_icon, dst_icon)
        print("→ 图标替换成功")

def remove_empty_dirs(path):
    """递归删除空文件夹"""
    if not os.path.isdir(path):
        return

    # 先删除子目录
    for sub in os.listdir(path):
        full = os.path.join(path, sub)
        if os.path.isdir(full):
            remove_empty_dirs(full)

    # 子目录删完后，如果当前目录空了，就删掉
    if not os.listdir(path):
        os.rmdir(path)
        print("→ 删除空目录：", path)

# -------------------------
# 5. 主入口类重命名（含 package 修复）
# -------------------------
def rename_main_activity(old_path, new_path, new_pkg):
    old_java = os.path.join(MAIN_JAVA_ROOT, old_path + ".java")
    new_java = os.path.join(MAIN_JAVA_ROOT, new_path + ".java")

    # 防止重复执行：新类存在则跳过
    if os.path.exists(new_java):
        print("→ 新入口类已存在，跳过重命名：", new_java)
        return

    if not os.path.exists(old_java):
        print("⚠ 找不到旧入口类（可能已移动过）：", old_java)
        return

    # 创建新目录
    new_dir = os.path.dirname(new_java)
    os.makedirs(new_dir, exist_ok=True)

    content = read(old_java)
    old_class = old_path.split("/")[-1]
    new_class = new_path.split("/")[-1]

    # 替换类名
    content = content.replace(old_class, new_class)

    # 仅使用 new_path 作为包名
    pkg_path = os.path.dirname(new_path).replace("/", ".")
    content = re.sub(r'package\s+[^;]+;', f'package {pkg_path};', content)

    write(new_java, content)
    print("→ 新入口类生成：", new_java)

    # 删除旧文件
    os.remove(old_java)
    print("→ 旧入口类删除成功")

    # 删除旧目录空文件夹（递归）
    old_dir = os.path.dirname(old_java)
    remove_empty_dirs(old_dir)

# -------------------------
# 6. Manifest 中的入口类替换（只改 <activity android:name="...">）
# -------------------------
def replace_manifest_launcher(new_path):
    manifest = os.path.join(APP_ROOT, "AndroidManifest.xml")
    if not os.path.exists(manifest):
        return

    # new_path:  unity/game/ui/AppActivity
    # → 转成 Java 全限定类: unity.game.ui.AppActivity
    java_class = new_path.replace("/", ".")

    content = read(manifest)

    # 只替换 <activity android:name="..."> 的入口类
    content = re.sub(
        r'(<activity[^>]+android:name=")[^"]+(")',
        rf'\1{java_class}\2',
        content,
        count=1   # ⭐⭐ 只替换 1 个
    )

    write(manifest, content)
    print("→ Manifest 入口类替换成功：", java_class)


# -------------------------
# 7. AF_DEV_KEY 替换
# -------------------------
def replace_af_dev_key(new_key, main_path):
    java_path = os.path.join(MAIN_JAVA_ROOT, main_path + ".java")
    if not os.path.exists(java_path):
        print("⚠ 找不到入口类：", java_path)
        return

    content = read(java_path)
    content = re.sub(r'AF_DEV_KEY\s*=\s*".*?"', f'AF_DEV_KEY = "{new_key}"', content)
    write(java_path, content)
    print("→ AF_DEV_KEY 替换成功")
	
def find_old_main_activity():
    for root, dirs, files in os.walk(MAIN_JAVA_ROOT):
        for f in files:
            if f.endswith(".java"):
                full = os.path.join(root, f)
                content = read(full)
                if "extends Cocos2dxActivity" in content:
                    rel = os.path.relpath(full, MAIN_JAVA_ROOT)
                    rel = rel.replace("\\", "/").replace(".java", "")
                    print("→ 自动检测到当前主入口类：", rel)
                    return rel

    raise Exception("❌ 未找到入口 Activity！(没有类 extends Cocos2dxActivity)")
def replace_txt_config(afkey, channel):
    txt_path = os.path.join(
        ANDROID_ROOT,
        "app/src/main/assets/txt"
    )

    if not os.path.exists(txt_path):
        print("⚠ 找不到 txt 目录：", txt_path)
        return

    for f in os.listdir(txt_path):
        if f.endswith(".txt"):
            path = os.path.join(txt_path, f)
            content = read(path)

            content = re.sub(
                r'"_af_key"\s*:\s*".*?"',
                f'"_af_key": "{afkey}"',
                content
            )

            content = re.sub(
                r'"_channel"\s*:\s*".*?"',
                f'"_channel": "{channel}"',
                content
            )

            write(path, content)
            print("→ 更新 txt 配置：", path)
def replace_proguard_main(main_path):
    proguard_path = os.path.join(APP_ROOT, "proguard-rules.pro")

    if not os.path.exists(proguard_path):
        print("⚠ 找不到 proguard 文件：", proguard_path)
        return

    full_class = main_path.replace("/", ".")
    content = read(proguard_path)

    if "# AUTO_MAIN" in content:
        # ✅ 已经有标记 → 精准替换
        content = re.sub(
            r'-dontwarn\s+[^\n]+#\s*AUTO_MAIN',
            f'-dontwarn {full_class}   # AUTO_MAIN',
            content
        )
        print("→ 更新 AUTO_MAIN：", full_class)

    else:
        # ❗第一次：找任意 dontwarn 行（你可以根据自己项目稍微收窄）
        match = re.search(r'-dontwarn\s+[^\n]+', content)

        if match:
            old_line = match.group(0)
            new_line = f'-dontwarn {full_class}   # AUTO_MAIN'
            content = content.replace(old_line, new_line, 1)
            print("→ 首次写入 AUTO_MAIN：", full_class)
        else:
            # 如果一个 dontwarn 都没有，就追加
            content += f'\n-dontwarn {full_class}   # AUTO_MAIN\n'
            print("→ 新增 AUTO_MAIN：", full_class)

    write(proguard_path, content)
# -------------------------
# 主流程
# -------------------------
def main():
    cfg = json.load(open(os.path.join(PROJECT_ROOT, "config.json"), "r", encoding="utf-8"))
    replace_txt_config(cfg["afkey"], cfg["channel"])
    replace_package(cfg["package"])
    replace_gradle_package(cfg["package"])
    replace_app_name(cfg["appname"], cfg["channel"])
    replace_icon()
    old_main = find_old_main_activity()
    new_main = cfg["main"]
    rename_main_activity(old_main, new_main, cfg["package"])
    replace_manifest_launcher(new_main)
    replace_af_dev_key(cfg["afkey"], new_main)
    replace_proguard_main(cfg["main"])
    print("\n===== 所有修改完成 =====")

if __name__ == "__main__":
    try:
        main()
    except:
        traceback.print_exc()
    finally:
        input("\n=== 运行结束，按回车关闭窗口 ===")
