import base64
import os
import tkinter as tk
from tkinter import messagebox, filedialog
from tkinter.scrolledtext import ScrolledText

# ---------------------- 生成 keystore ----------------------
def generate_keystore():
    file_name = entry_file.get().strip()
    store_pass = entry_store_pass.get().strip()
    key_alias = entry_key_alias.get().strip()
    key_pass = entry_key_pass.get().strip()

    cn = entry_cn.get().strip()
    ou = entry_ou.get().strip()
    o = entry_o.get().strip()
    l = entry_l.get().strip()
    st = entry_st.get().strip()
    c = entry_c.get().strip()

    if not file_name or not store_pass or not key_alias or not key_pass:
        messagebox.showerror("错误", "文件名、密码、Alias 都不能为空")
        return

    jks_file = f"{file_name}.jks"
    full_path = os.path.abspath(jks_file)

    dname = f"CN={cn}, OU={ou}, O={o}, L={l}, ST={st}, C={c}"

    cmd = (
        f'keytool -genkeypair -alias {key_alias} -keyalg RSA -keysize 2048 -validity 10000 '
        f'-keystore "{jks_file}" -storepass {store_pass} -keypass {key_pass} -dname "{dname}"'
    )

    if os.system(cmd) != 0:
        messagebox.showerror("失败", "生成 keystore 失败，请检查 keytool 是否安装")
        return

    messagebox.showinfo("成功", f"成功生成 Keystore：\n{full_path}")
    show_secrets(full_path, store_pass, key_alias, key_pass)


# ---------------------- 加载 keystore ----------------------
def load_keystore():
    jks_path = filedialog.askopenfilename(
        title="选择 jks 文件",
        filetypes=[("Keystore Files", "*.jks")]
    )
    if not jks_path:
        return

    entry_loaded_path.delete(0, tk.END)
    entry_loaded_path.insert(0, jks_path)

    text_output.delete(1.0, tk.END)
    text_output.insert(tk.END, f"已选择 keystore 文件：\n{jks_path}\n")


def parse_loaded_secrets():
    jks_path = entry_loaded_path.get().strip()
    store_pass = entry_loaded_store_pass.get().strip()
    key_pass = entry_loaded_key_pass.get().strip()

    if not jks_path or not store_pass or not key_pass:
        messagebox.showerror("错误", "必须输入 storePassword 和 keyPassword")
        return

    # 执行 keytool -list
    scan_cmd = f'keytool -list -v -keystore "{jks_path}" -storepass {store_pass}'
    with os.popen(scan_cmd) as p:
        out = p.read()

    alias = None
    for line in out.splitlines():
        line = line.strip()
        if line.lower().startswith("alias name:"):
            alias = line.split(":", 1)[1].strip()
            break
        if line.startswith("别名:"):
            alias = line.split(":", 1)[1].strip()
            break

    if not alias:
        messagebox.showerror("错误", "无法解析 KeyAlias，storePassword 可能错误！")
        return

    show_secrets(jks_path, store_pass, alias, key_pass)


# ---------------------- 显示 secrets ----------------------
def show_secrets(jks_path, store_pass, key_alias, key_pass):
    with open(jks_path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode()

    text_output.delete(1.0, tk.END)
    text_output.insert(tk.END, f"[Keystore 路径]\n{jks_path}\n\n")
    text_output.insert(tk.END, f"KEYSTORE_BASE64:\n{b64}\n\n")
    text_output.insert(tk.END, f"KEYSTORE_PASSWORD: {store_pass}\n")
    text_output.insert(tk.END, f"KEY_ALIAS: {key_alias}\n")
    text_output.insert(tk.END, f"KEY_PASSWORD: {key_pass}\n")


def copy_all():
    window.clipboard_clear()
    window.clipboard_append(text_output.get(1.0, tk.END))
    messagebox.showinfo("已复制", "Secrets 已复制到剪贴板！")


# ---------------------- UI 界面 ----------------------
window = tk.Tk()
window.title("Keystore 工具（生成 + 加载） - 凌凌七专用")
window.geometry("900x700")

# 主框架（左右两栏）
frame_main = tk.Frame(window)
frame_main.pack(fill="x", pady=10)

frame_left = tk.Frame(frame_main, padx=20)
frame_left.pack(side="left", fill="y")

frame_right = tk.Frame(frame_main, padx=20)
frame_right.pack(side="right", fill="y")

# ---------------- 左侧：生成 Keystore ----------------
tk.Label(frame_left, text="=== 生成 Keystore ===", font=("Arial", 14, "bold")).pack(pady=5)

def add_entry(frame, label):
    tk.Label(frame, text=label).pack()
    e = tk.Entry(frame, width=30)
    e.pack()
    return e

entry_file = add_entry(frame_left, "文件名（不要后缀）")
entry_store_pass = add_entry(frame_left, "storePassword")
entry_key_alias = add_entry(frame_left, "keyAlias")
entry_key_pass = add_entry(frame_left, "keyPassword")

tk.Label(frame_left, text="\n证书信息（随便填）").pack()

entry_cn = add_entry(frame_left, "CN")
entry_ou = add_entry(frame_left, "OU")
entry_o = add_entry(frame_left, "O")
entry_l = add_entry(frame_left, "L")
entry_st = add_entry(frame_left, "ST")
entry_c = add_entry(frame_left, "C（国家代码，例如 CN）")

tk.Button(frame_left, text="生成 Keystore", command=generate_keystore, bg="green", fg="white").pack(pady=10)

# ---------------- 右侧：加载 Keystore ----------------
tk.Label(frame_right, text="=== 加载已有 Keystore ===", font=("Arial", 14, "bold")).pack(pady=5)

tk.Button(frame_right, text="选择 JKS 文件", command=load_keystore, bg="orange").pack(pady=5)

entry_loaded_path = add_entry(frame_right, "已加载文件路径")
entry_loaded_store_pass = add_entry(frame_right, "storePassword")
entry_loaded_key_pass = add_entry(frame_right, "keyPassword")

tk.Button(frame_right, text="解析 Secrets", command=parse_loaded_secrets, bg="blue", fg="white").pack(pady=10)

# ---------------- 下方：输出框 ----------------
tk.Label(window, text="=== 输出（Secrets） ===", font=("Arial", 12)).pack()
text_output = ScrolledText(window, width=110, height=20)
text_output.pack(pady=5)

tk.Button(window, text="复制全部 Secrets", command=copy_all, bg="purple", fg="white").pack(pady=10)

window.mainloop()
