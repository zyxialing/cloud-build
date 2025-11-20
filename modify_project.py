import os
import json
import re
import shutil

# ---------- 你的工程根路径 ----------
BASE = r"D:\androidwork\game2024_onlyaf_cloud_build"
PROJECT = os.path.join(BASE, "jsb-default/frameworks/runtime-src/proj.android-studio")

# ---------- 关键文件路径 ----------
MANIFEST_APP = os.path.join(PROJECT, "app/AndroidManifest.xml")
MANIFEST_INSTANT = os.path.join(PROJECT, "instantapp/AndroidManifest.xml")

GRADLE_APP = os.path.join(PROJECT, "app/build.gradle")
GRADLE_INSTANT = os.path.join(PROJECT, "instantapp/build.gradle")

STRINGS_XML = os.path.join(PROJECT, "res/values/strings.xml")

MAIN_ACTIVITY = os.path.join(PROJECT, "app/src/ui/MainActivity.java")

ICON_SRC = os.path.join(BASE, "ic_launcher.png")  # ← 固定图标，不从配置读取
ICON_DIR = os.path.join(PROJECT, "res/mipmap")

# ------------------------------------------------------
# 工具：从文件中替换正则内容
# ------------------------------------------------------
def replace_in_file(path, pattern, repl):
    if not os.path.exists(path):
        print(f"⚠ 文件不存在：{path}")
        return

    text = open(path, "r", encoding="utf-8").read()
    new_text = re.sub(pattern, repl, text, flags=re.S)
    open(path, "w", encoding="utf-8").write(new_text)
    print(f"✔ 修改完成：{path}")


# ------------------------------------------------------
# 替换 manifest 中的 package
# ------------------------------------------------------
def update_manifest_package(new_pkg):
    pattern = r'package="[^"]+"'
    repl = f'package="{new_pkg}"'

    replace_in_file(MANIFEST_APP, pattern, repl)
    replace_in_file(MANIFEST_INSTANT, pattern, repl)


# ------------------------------------------------------
# 替换 build.gradle 中 namespace（只替 android{} 内）
# ------------------------------------------------------
def update_namespace(path, new_pkg):
    replace_in_file(
        path,
        r'(android\s*\{[^}]*?namespace\s*")([^"]+)(")',
        rf'\1{new_pkg}\3'
    )


# ------------------------------------------------------
# 替换 build.gradle 中 applicationId（只 defaultConfig 内）
# ------------------------------------------------------
def update_application_id(path, new_pkg):
    replace_in_file(
        path,
        r'(defaultConfig\s*\{[^}]*?applicationId\s*")([^"]+)(")',
        rf'\1{new_pkg}\3'
    )


# ------------------------------------------------------
# 修改 app_name
# ------------------------------------------------------
def update_app_name(new_name):
    pattern = r'<string name="app_name"[^>]*>.*?</string>'
    repl = f'<string name="app_name" translatable="false">{new_name}</string>'
    replace_in_file(STRINGS_XML, pattern, repl)


# ------------------------------------------------------
# 修改 AppsFlyer Key
# ------------------------------------------------------
def update_af_key(new_key):
    pattern = r'AppsFlyerManager\.AF_DEV_KEY\s*=\s*"[^"]+"'
    repl = f'AppsFlyerManager.AF_DEV_KEY = "{new_key}"'
    replace_in_file(MAIN_ACTIVITY, pattern, repl)


# ------------------------------------------------------
# 替换所有 mipmap 下的图标
# ------------------------------------------------------
def update_icon():
    if not os.path.exists(ICON_SRC):
        print(f"⚠ 未找到图标文件：{ICON_SRC}")
        return

    for root, dirs, files in os.walk(ICON_DIR):
        for f in files:
            if f.startswith("ic_launcher"):
                dst = os.path.join(root, f)
                shutil.copyfile(ICON_SRC, dst)
                print(f"✔ 图标替换：{dst}")


# ------------------------------------------------------
# 主执行流程
# ------------------------------------------------------
if __name__ == "__main__":
    cfg_file = os.path.join(BASE, "config.json")

    if not os.path.exists(cfg_file):
        print("❌ 找不到 config.json")
        exit()

    cfg = json.load(open(cfg_file, "r", encoding="utf-8"))

    pkg = cfg["package"]
    appname = cfg["appname"]
    afkey = cfg["afkey"]

    print("====== 开始修改工程 ======")

    update_manifest_package(pkg)
    update_namespace(GRADLE_APP, pkg)
    update_namespace(GRADLE_INSTANT, pkg)
    update_application_id(GRADLE_APP, pkg)
    update_application_id(GRADLE_INSTANT, pkg)
    update_app_name(appname)
    update_af_key(afkey)
    update_icon()

    print("\n🎉 全部修改完成！可以开始 GitHub Actions 云打包了！")
