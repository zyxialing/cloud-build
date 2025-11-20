window.__require = function e(t, n, o) {
function i(a, s) {
if (!n[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = n[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return i(t[a][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
Alert: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "78052U/SxxKbaWY5cjj8G5p", "Alert");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../framework/componects/EventComponent"), a = e("../config/Config"), s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._closeBtn = null;
t._vcontent = null;
t._textContent = null;
t._richTextContent = null;
t._contentLayout = null;
t._confirm = null;
t._cancel = null;
t._config = null;
return t;
}
Object.defineProperty(t.prototype, "config", {
get: function() {
return this._config;
},
enumerable: !1,
configurable: !0
});
t.prototype.show = function(e) {
this._vcontent = cc.find("content", this.node);
this._contentLayout = cc.find("scroll/view/content", this._vcontent).getComponent(cc.Layout);
this._textContent = cc.find("scroll/view/content/content", this._vcontent).getComponent(cc.Label);
this._richTextContent = cc.find("scroll/view/content/richContent", this._vcontent).getComponent(cc.RichText);
this._closeBtn = cc.find("bgs/back/Title/close", this._vcontent);
this._confirm = cc.find("layout/confirm", this._vcontent);
this._cancel = cc.find("layout/cancel", this._vcontent);
e.confirmString || (e.confirmString = "Ok");
e.cancelString || (e.cancelString = "Cancel");
this._config = e;
this.writeContent(e);
this.showButton(e);
};
t.prototype.writeContent = function(e) {
if (e.richText) {
this._textContent.node.active = !1;
this._richTextContent.node.active = !0;
this._richTextContent.string = e.richText;
this._richTextContent._updateRichText();
(t = .5 * (215 - this._richTextContent.node.getContentSize().height)) < 0 && (t = 0);
this._contentLayout.paddingTop = t;
} else {
this._textContent.node.active = !0;
this._richTextContent.node.active = !1;
if (e.text) {
this._textContent.string = e.text;
this._textContent._forceUpdateRenderData();
var t;
(t = .5 * (215 - this._textContent.node.getContentSize().height)) < 0 && (t = 0);
this._contentLayout.paddingTop = t;
} else {
Log.e("请指定提示内容");
this._textContent.string = "";
}
}
e.confirmString && (n = cc.find("Background/Label", this._confirm)) && (n.getComponent(cc.Label).string = e.confirmString);
if (e.cancelString) {
var n;
(n = cc.find("Background/Label", this._cancel)) && (n.getComponent(cc.Label).string = e.cancelString);
}
};
t.prototype.showButton = function(e) {
if (this._confirm && this._cancel && this._closeBtn) {
this._closeBtn.active = e.hideX;
this.onN(this._closeBtn, cc.Node.EventType.TOUCH_END, this.close.bind(this));
if (e.confirmCb) {
this._confirm.active = !0;
this.onN(this._confirm, cc.Node.EventType.TOUCH_END, this.onSureClick.bind(this));
} else this._confirm.active = !1;
if (e.cancelCb) {
this._cancel.active = !0;
this.onN(this._cancel, cc.Node.EventType.TOUCH_END, this.onCancelClick.bind(this));
} else this._cancel.active = !1;
this._confirm.active ? this._cancel.active || (this._confirm.x = 0) : this._cancel.active ? this._cancel.x = 0 : Log.w("提示框无按钮显示");
}
};
t.prototype.close = function() {
var e = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this.config.closeCb && this.config.closeCb();
} else this._close(function() {
e.config.closeCb && e.config.closeCb();
});
};
t.prototype._close = function(e) {
if (cc.isValid(this._vcontent)) {
cc.Tween.stopAllByTarget(this._vcontent);
App.alert.finishAlert();
e && e();
}
};
t.prototype.onSureClick = function() {
var e = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this._config.confirmCb && this._config.confirmCb();
} else this._close(function() {
e._config.confirmCb && e._config.confirmCb();
});
};
t.prototype.onCancelClick = function() {
var e = this;
App.globalAudio.playButtonClick();
if (this._config.immediatelyCallback) {
this._close(null);
this._config.tag = 1;
this._config.cancelCb && this._config.cancelCb();
} else this._close(function() {
e._config.cancelCb && e._config.cancelCb();
});
};
return t;
}(r.default), c = function() {
function e() {
this.module = null;
this.isResident = !0;
this.curPanel = null;
this.queue = [];
}
Object.defineProperty(e.prototype, "prefab", {
get: function() {
return App.uiManager.getScenePrefab("Alert");
},
enumerable: !1,
configurable: !0
});
e.prototype.getConfig = function(e) {
var t = {};
e.tag && (t.tag = e.tag);
e.text && (t.text = e.text);
e.title && (t.title = e.title);
e.confirmString && (t.confirmString = e.confirmString);
e.cancelString && (t.cancelString = e.cancelString);
e.richText && (t.richText = e.richText);
e.immediatelyCallback && (t.immediatelyCallback = e.immediatelyCallback);
e.isRepeat && (t.isRepeat = e.isRepeat);
return t;
};
e.prototype.show = function(e) {
Log.e("------------------------------------------");
if (e.tag && 0 == e.isRepeat && this.isRepeat(e.tag)) {
Log.w("弹出框已经存在 config : " + JSON.stringify(this.getConfig(e)));
return !1;
}
this.queue.push(e);
this._show(e);
return !0;
};
e.prototype.isCurrentShow = function(e) {
return !(!this.curPanel || this.curPanel.getComponent(s).config.tag != e);
};
e.prototype.currentShow = function(e) {
if (this.curPanel) {
var t = this.curPanel.getComponent(s).config;
if (!e) return t;
if (t.tag == e) return t;
}
return null;
};
e.prototype.isRepeat = function(e) {
if (this.curPanel) {
var t = this.curPanel.getComponent(s).config;
if (t.tag == e) {
Log.w("重复的弹出框 config ; " + JSON.stringify(this.getConfig(t)));
return !0;
}
} else for (var n = 0; n < this.queue.length; n++) {
var o = this.queue[n];
if (o.tag == e) {
Log.w("重复的弹出框 config ; " + JSON.stringify(this.getConfig(o)));
return !0;
}
}
return !1;
};
e.prototype.close = function(e) {
if (e) {
for (var t = this.queue.length; t--; ) this.queue[t].tag == e && this.queue.splice(t, 1);
this.curPanel && this.curPanel.getComponent(s).config.tag == e && this.finishAlert();
} else this.finishAlert();
};
e.prototype.closeAll = function() {
this.queue = [];
this.finishAlert();
};
e.prototype.finishAlert = function() {
if (this.curPanel) {
this.curPanel.destroy();
this.curPanel = null;
}
var e = this.queue.shift();
if (0 != this.queue.length) {
this._show(this.queue[0]);
return this.queue[0];
}
return e;
};
e.prototype._show = function(e) {
if (!this.curPanel) {
this.curPanel = cc.instantiate(this.prefab);
var t = this.curPanel.addComponent(s);
e.isSpOrder ? App.uiManager.addView(this.curPanel, a.ViewZOrder.SpGameLoading) : App.uiManager.addView(this.curPanel, a.ViewZOrder.Alert);
t.show(e);
}
};
e.module = "【Alert】";
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"../../framework/componects/EventComponent": "EventComponent",
"../config/Config": "Config"
} ],
AnimationPlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0ca1c2dxK1CBLcdpUI2RcMf", "AnimationPlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.anim = null;
return t;
}
t.prototype.init = function() {
if (!this.anim) {
this.anim = this.node.getComponentInChildren(cc.Animation);
this.rewardNode = this.anim.node;
}
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this.init();
this.node.active = !0;
this.anim.play(null, 0);
};
t.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], t);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
Animation_Nodes: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c7591OPSYRHNZ0MVtaoU6om", "Animation_Nodes");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Animation_PlayType = void 0;
var a, s = cc._decorator, c = s.ccclass, l = s.property;
(function(e) {
e[e.Once = 0] = "Once";
e[e.Loop = 1] = "Loop";
})(a = n.Animation_PlayType || (n.Animation_PlayType = {}));
var u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isPlayOnEnable = !0;
t.playType = a.Once;
t.speed = .05;
t.isStop_LastFrameOfOnce = !1;
t.beginShowId = 0;
t.delayTimeToSecond = 0;
t.needPlayCount = 1;
t.hadPlayCount = 0;
t.node_children = [];
t.callback_OverOnce = null;
t.curShowId = 0;
t.time = 0;
t.lastTime = 0;
t.isRun = !1;
return t;
}
t.prototype.onLoad = function() {
this.node_children = [];
for (var e = this.node.children, t = 0; t < e.length; t++) {
var n = e[t];
n.active = !1;
this.node_children.push(n);
}
};
t.prototype.onEnable = function() {
0 != this.node_children.length && this.isPlayOnEnable && this.Play();
};
t.prototype.Play = function() {
this.hadPlayCount = 0;
this.curShowId = this.beginShowId;
this.beginShowId >= 0 && this.ShowCurNode();
this.lastTime = this.time + this.delayTimeToSecond;
this.isRun = !0;
};
t.prototype.Stop = function() {
this.node.active = !1;
this.isRun = !1;
for (var e = 0; e < this.node_children.length; e++) this.node_children[e].active = !1;
};
t.prototype.SetCallback_OnceOver = function(e) {
this.callback_OverOnce = e;
};
t.prototype.SetNeedPlayCount = function(e) {
this.needPlayCount = e;
};
t.prototype.ShowCurNode = function() {
this.node_children[this.curShowId].active = !0;
};
t.prototype.update = function(e) {
this.time += e;
if (this.isRun && this.lastTime + this.speed <= this.time) {
this.lastTime = this.time;
this.playType == a.Loop ? this.CheckNextShow_Loop() : this.CheckNextShow_Once();
}
};
t.prototype.CheckNextShow_Once = function() {
this.curShowId >= 0 && (this.node_children[this.curShowId].active = !1);
if (this.curShowId == this.node_children.length - 1) {
this.hadPlayCount++;
if (this.hadPlayCount < this.needPlayCount) {
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
return;
}
if (this.callback_OverOnce) {
this.callback_OverOnce();
this.callback_OverOnce = null;
}
this.isRun = !1;
this.isStop_LastFrameOfOnce ? this.node_children[this.curShowId].active = !0 : this.Stop();
} else {
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
}
};
t.prototype.CheckNextShow_Loop = function() {
this.curShowId >= 0 && (this.node_children[this.curShowId].active = !1);
this.curShowId = (this.curShowId + 1) % this.node_children.length;
this.ShowCurNode();
};
r([ l ], t.prototype, "isPlayOnEnable", void 0);
r([ l({
type: cc.Enum(a)
}) ], t.prototype, "playType", void 0);
r([ l ], t.prototype, "speed", void 0);
r([ l ], t.prototype, "isStop_LastFrameOfOnce", void 0);
r([ l ], t.prototype, "beginShowId", void 0);
r([ l ], t.prototype, "delayTimeToSecond", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {} ],
AppInfo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fd091hr2g1Ekp9f7yM7fDrc", "AppInfo");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../HotVersion"), i = e("../common/config/ConstString"), r = e("../common/config/GlobalVar"), a = e("../common/enum/GlobalEnum"), s = e("../common/utils/CmmUtils"), c = e("../config/URLConfig"), l = e("./GameNativeConfig"), u = e("./SdkManager"), p = function() {
function e() {}
Object.defineProperty(e, "data", {
get: function() {
null == this._data && (this._data = JSON.parse(u.default.getGameConfig()));
return this._data;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "appData", {
get: function() {
return this._data;
},
enumerable: !1,
configurable: !0
});
e.initAppsflyerSdk = function() {};
e.getLoginType = function() {
this._loginType = App.storage.getItem(l.default.Key.autoLoginType, null);
return this._loginType;
};
e.getVerCode = function() {
return e.isApp ? this.data.gameVersion : u.default.verCode;
};
e.getAppVer = function() {
return o.default.hot_version;
};
e.getChannelId = function() {
return this.data.channel || u.default.channelID;
};
e.getOffLineMode = function() {
return "true" == this.data.offline;
};
e.isSimulator = function() {
return "1" == u.default.CheckIsSimulator();
};
e.getVersionString = function() {
if (App.SingleGame) return "h5_" + e.getAppVer();
var t = c.default.getChannel();
return t ? e.getChannelId() + "_" + t.version + "_" + e.getAppVer() + "_" + t.id : "error";
};
e.getPlatform = function() {
return App.IsHtmlGame ? 1003 : e.isAndroid ? 1001 : e.isIOS ? 1004 : 1003;
};
e.getLanguage = function() {
return this.data.local || "";
};
e.getDeviceId = function() {
return u.default.getDeviceId() || "";
};
e.getThridInfo = function() {
return this.data.hardware || "";
};
e.getAdjust_Adid = function() {
null == this._adid && (this._adid = u.default.getAdjustAdid());
return this._adid || "";
};
e.getAppflyId = function() {
null == this._afid && (this._afid = u.default.GetAppsFlyerId());
return this._afid || "";
};
e.getGoogleAdId = function() {
null == this._googleId && (this._googleId = u.default.getGoogleID());
return this._googleId || u.default.getDeviceId();
};
e.getFireBaseAppInstanceID = function() {
return u.default.getFirebaseAppInstanceId() || "";
};
e.getPhoneOS = function() {
return this.data.supportAbi || "";
};
e.isSupportBackHome = function() {
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 2;
} catch (e) {
return !1;
}
return !1;
};
e.isSupportOpenAndroidUrl = function() {
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 3;
} catch (e) {
return !1;
}
return !1;
};
e.isSupportGoogleLogin = function() {
if (!e.isAndroid) return e.isIOS, !1;
if (this.data && this.data.gameVersion) try {
return Number.parseInt(this.data.gameVersion.split(".")[0]) >= 4;
} catch (e) {
return !1;
}
};
e.getPhoneDeviceType = function() {
return cc.sys.os || "";
};
e.getSimOperator = function() {
return this.data.simOperator || "";
};
e.getOsVersion = function() {
return this.data.device || "";
};
e.getMobileBrand = function() {
return this.data.brand || "";
};
e.getMobileModel = function() {
return this.data.model || "";
};
e.getOpenUDID = function() {
return this.data.androidId || "";
};
e.getCashModel = function() {
return this.data["version.codename"] || "";
};
e.getYcn = function() {
return "ver_uid";
};
e.getInstallRefer = function() {
return this.data.installed || "";
};
e.checkVpn = function() {
return "";
};
e.getDeviceInfo = function() {
return this.data.display || "";
};
e.getAllInstallPackages = function() {
return this.data.pkgName || "";
};
Object.defineProperty(e, "pkgLabel", {
get: function() {
return this.data.pkgLabel || "";
},
enumerable: !1,
configurable: !0
});
e.getPkgId = function() {
null == this._pkgId && (null != this.data.pkgId ? this._pkgId = this.data.pkgId : this._pkgId = u.default.getPkgId());
return this._pkgId || "";
};
e.hasBigFunSdk = function() {
return 1;
};
e.hasletPmSdk = function() {
return 1;
};
e.hasAdjustSdk = function() {
return !0;
};
e.hasKaoPuSdk = function() {
return !1;
};
Object.defineProperty(e, "ostime", {
get: function() {
return s.CmmUtils.msec;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isAndroid", {
get: function() {
return !cc.sys.isBrowser && cc.sys.os == cc.sys.OS_ANDROID;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isIOS", {
get: function() {
return !cc.sys.isBrowser && cc.sys.os == cc.sys.OS_IOS;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isBrowser", {
get: function() {
return !!cc.sys.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isApp", {
get: function() {
return this.isIOS || this.isAndroid;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isWindowBrowser", {
get: function() {
return !!cc.sys.isBrowser && cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS;
},
enumerable: !1,
configurable: !0
});
e.showCustomService = function() {
var e = App.storage.getItem(i.ConstString.userId), t = App.storage.getItem(i.ConstString.userName), n = r.GlobalVar.cusUrl;
e && (n = n.replace("unset_id", e));
t && (n = n.replace("unset_name", t));
n += "&lan=0";
u.default.openUrl(n);
};
e.showNtaUrl = function() {
u.default.openUrl(r.GlobalVar.ntaUrl);
};
e.showNoticeUrl = function() {};
e.showShareLinkUrl = function() {
u.default.setClipboardContent(r.GlobalVar.shareLinkUrl);
};
e.showTC = function() {
u.default.openUrl(r.GlobalVar.tc_url);
};
e.showPP = function() {
u.default.openUrl(r.GlobalVar.pp_url);
};
e.showKYC = function() {
u.default.openUrl(r.GlobalVar.kycUrl);
};
e.getCountryLange = function() {
var e = a.GlobalEnum.LanguageType.English;
switch (r.GlobalVar.countryCode) {
case 0:
e = a.GlobalEnum.LanguageType.Hindi;
break;

case 1:
e = a.GlobalEnum.LanguageType.English;
break;

case 2:
e = a.GlobalEnum.LanguageType.Indonesian;
break;

case 3:
e = a.GlobalEnum.LanguageType.Portuguese;
break;

case 4:
e = a.GlobalEnum.LanguageType.HindiEnglish;
break;

case 5:
e = a.GlobalEnum.LanguageType.Mexico;
}
return e;
};
e.isHaveTwoLanguage = function() {
return e.getCountryLange() != a.GlobalEnum.LanguageType.English;
};
e.getCountryLanguages = function() {
var e = [];
switch (r.GlobalVar.countryCode) {
case 3:
e = [ {
name: "Português",
type: 3
}, {
name: "English",
type: 0
} ];
break;

case 1:
e = [ {
name: "English",
type: 0
} ];
break;

default:
e = [ {
name: "English",
type: 0
}, {
name: "हिंदी भाषा",
type: 1
}, {
name: "Hindi(English)",
type: 4
} ];
}
return e;
};
e.getOneLinkInviteCode = function() {
if (App.IsHtmlGame) {
var t = u.default._ios_addeeplink;
if (t) {
console.error("+++++++++++++++++++++++" + t);
l = e.getIOSInviteBrowserValue("deep_link_value");
s.CmmUtils.stringNotEmpty(l) || (l = e.getCookie("deep_link_value"));
var n = e.getIOSInviteBrowserValue("deep_link_sub1");
s.CmmUtils.stringNotEmpty(n) || (n = e.getCookie("_fbp"));
var o = e.getIOSInviteBrowserValue("deep_link_sub2");
s.CmmUtils.stringNotEmpty(o) || (o = e.getCookie("_fbc"));
var r = e.getIOSInviteBrowserValue("deep_link_sub3");
s.CmmUtils.stringNotEmpty(o) || (r = e.getCookie("uuid_fb"));
(c = {}).deep_link_value = l;
c.deep_link_sub1 = n;
c.deep_link_sub2 = o;
c.deep_link_sub3 = r;
c.click_id = e.getPixel_clickId();
return JSON.stringify(c);
}
l = e.getBrowserValue("deep_link_value");
s.CmmUtils.stringNotEmpty(l) || (l = e.getCookie("deep_link_value"));
n = e.getBrowserValue("deep_link_sub1");
s.CmmUtils.stringNotEmpty(n) || (n = e.getCookie("_fbp"));
o = e.getBrowserValue("deep_link_sub2");
s.CmmUtils.stringNotEmpty(o) || (o = e.getCookie("_fbc"));
r = e.getBrowserValue("deep_link_sub3");
s.CmmUtils.stringNotEmpty(o) || (r = e.getCookie("uuid_fb"));
(c = {}).deep_link_value = l;
c.deep_link_sub1 = n;
c.deep_link_sub2 = o;
c.deep_link_sub3 = r;
c.click_id = e.getPixel_clickId();
return JSON.stringify(c);
}
var a = App.storage.getItem(i.ConstString.saveOneLinkInviteCode, "");
if (e.isIOS) {
u.default._ios_addeeplink = a;
var c, l = e.getIOSInviteBrowserValue("deep_link_value");
(c = {}).deep_link_value = l;
return JSON.stringify(c);
}
return a;
};
e.getCookie = function(e) {
var t = ("; " + document.cookie).split("; " + e + "=");
return 2 === t.length ? t.pop().split(";").shift() : "";
};
e.getBrowserValue = function(e) {
for (var t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
var o = t[n].split("=");
if (o[0] == e) return o[1];
}
return null;
};
e.getIOSInviteBrowserValue = function(e) {
for (var t = u.default._ios_addeeplink.substring(1).split("&"), n = 0; n < t.length; n++) {
var o = t[n].split("=");
if (o[0] == e) return o[1];
}
return null;
};
e.getPixel_clickId = function() {
if (App.IsHtmlGame) {
var t = e.getBrowserValue("click_id");
s.CmmUtils.stringNotEmpty(t) || (t = e.getCookie("click_id"));
if (t && s.CmmUtils.stringNotEmpty(t)) {
App.storage.setItem(i.ConstString.pexel_click_id, t);
return t;
}
return App.storage.getItem(i.ConstString.pexel_click_id, "");
}
return "";
};
e.getHtmlChannelID = function() {
var t = e.getBrowserValue("r");
s.CmmUtils.stringNotEmpty(t) || (t = e.getCookie("webChannel"));
if (t) {
var n = [ 0, 0 ];
n[1] = parseInt(t.substring(4), 36);
n[1] = n[1] - t.charCodeAt(0) - t.charCodeAt(1);
n[0] = parseInt(t.substring(2, 4), 36) - 170;
return n[1];
}
return 0;
};
e.getHttpId = function() {
if (App.IsHtmlGame) {
var t = e.getBrowserValue("r");
s.CmmUtils.stringNotEmpty(t) || (t = e.getCookie("webChannel"));
if (t) {
var n = [ 0, 0 ];
n[1] = parseInt(t.substring(4), 36);
n[1] = n[1] - t.charCodeAt(0) - t.charCodeAt(1);
n[0] = parseInt(t.substring(2, 4), 36) - 170;
return n[0].toString();
}
return -1;
}
return e.getApkHttpId();
};
e.getApkHttpId = function() {
return u.default.getHttpId();
};
e.isSingleOpener = function() {
return App.SingleGame && !window.opener;
};
e.isTestChannel = function() {
return 3928880 == u.default.channelID;
};
e._data = null;
return e;
}();
n.default = p;
cc._RF.pop();
}, {
"../HotVersion": "HotVersion",
"../common/config/ConstString": "ConstString",
"../common/config/GlobalVar": "GlobalVar",
"../common/enum/GlobalEnum": "GlobalEnum",
"../common/utils/CmmUtils": "CmmUtils",
"../config/URLConfig": "URLConfig",
"./GameNativeConfig": "GameNativeConfig",
"./SdkManager": "SdkManager"
} ],
Application: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8b46bGdLJ5CLrG33SnmY+DP", "Application");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Application = void 0;
var r = e("./scripts/common/component/Alert"), a = e("./scripts/common/component/GlobalAudio"), s = e("./scripts/common/component/Loading"), c = e("./scripts/common/component/Tips"), l = e("./scripts/common/component/UILoading"), u = e("./scripts/common/component/UIReconnect"), p = e("./scripts/common/component/UpdateLoading"), d = e("./scripts/common/config/ConstString"), h = e("./scripts/common/config/GlobalVar"), f = e("./scripts/common/config/HostInfo"), _ = e("./scripts/common/data/Bundles"), g = e("./scripts/common/data/StageData"), y = e("./scripts/common/entry/CmmEntry"), m = e("./scripts/common/utils/CmmUtils"), v = e("./scripts/config/URLConfig"), E = e("./scripts/framework/defines/Enums"), S = e("./scripts/framework/defines/Macros"), b = e("./scripts/framework/Framework"), R = e("./scripts/framework/utils/Singleton"), C = e("./scripts/sdk/AppInfo"), A = e("./scripts/sdk/SdkManager"), T = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._offlineMode = !1;
t._singleGame = !1;
t._nativeGame = !0;
t._enterBackgroundTime = 0;
t._globalAudio = null;
return t;
}
Object.defineProperty(t.prototype, "isLazyRelease", {
get: function() {
this.isAutoReleaseUnuseResources || Log.w("需要使用都自己导出cc.game.EVENT_LOW_MEMORY事件");
return !1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "Bundles", {
get: function() {
return _.Bundles;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "OfflineMode", {
get: function() {
return this._offlineMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "SingleGame", {
get: function() {
return this._singleGame;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "IsHtmlGame", {
get: function() {
return !this._nativeGame && C.default.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isAutoReleaseUnuseResources", {
get: function() {
return !0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "autoReleaseUnuseResourcesTimeout", {
get: function() {
return 300;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "utils", {
get: function() {
return R.Singleton.instance.get(m.CmmUtils);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uiReconnect", {
get: function() {
return R.Singleton.instance.get(u.UIReconnect);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "tips", {
get: function() {
return R.Singleton.instance.get(c.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "uiLoading", {
get: function() {
return R.Singleton.instance.get(l.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "alert", {
get: function() {
return R.Singleton.instance.get(r.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "loading", {
get: function() {
return R.Singleton.instance.get(s.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "updateLoading", {
get: function() {
return R.Singleton.instance.get(p.default);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "cmmData", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "stageData", {
get: function() {
return this.dataCenter.get(g.StageData);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "globalAudio", {
get: function() {
if (this._globalAudio) return this._globalAudio;
this._globalAudio = this.uiManager.canvas.getComponent(a.default);
return this._globalAudio;
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function() {
if (App.IsHtmlGame) {
A.default.channelID = C.default.getHtmlChannelID();
A.default.httpId = C.default.getHttpId();
}
e.prototype.init.call(this);
this.entryManager.delegate = new y.CmmEntry();
};
t.prototype.onLoad = function(e) {
C.default.data;
cc.view.setDesignResolutionSize(750, 1600, cc.ResolutionPolicy.NO_BORDER);
this.initPopSort();
App.uiManager.onLoad(e);
App.serviceManager.onLoad();
App.entryManager.onLoad(e);
};
t.prototype.updateGlobalConfig = function() {};
t.prototype.initPopSort = function() {
var e = App.storage.getItem(d.ConstString.showBigSaleDay), t = App.storage.getItem(d.ConstString.showShareAfter, 0);
if (m.CmmUtils.day != e) {
App.storage.setItem(d.ConstString.showBigSaleDay, m.CmmUtils.day);
App.storage.setItem(d.ConstString.showShareAfter, 1);
} else App.storage.setItem(d.ConstString.showShareAfter, t + 1);
};
t.prototype.updateConfig = function() {
var e = this;
if (C.default.isAndroid || C.default.isIOS) {
var t = A.default.GetUrlData();
if (m.CmmUtils.stringNotEmpty(t)) {
v.default.urlData = t;
var n = v.default.getChannel();
this.initConfig(n);
}
this._offlineMode = C.default.getOffLineMode();
} else if (this.SingleGame) {
h.GlobalVar.token = C.default.getBrowserValue("token");
h.GlobalVar.host = decodeURIComponent(C.default.getBrowserValue("host"));
h.GlobalVar.guid = C.default.getBrowserValue("uid");
h.GlobalVar.curGameId = C.default.getBrowserValue("gId");
h.GlobalVar.resPath = C.default.getBrowserValue("resPath");
Log.e("测试token:" + h.GlobalVar.token);
switch (C.default.getBrowserValue("country")) {
case "PK":
h.GlobalVar.money_symbol = "Rs";
h.GlobalVar.countryCode = 1;
break;

case "BR":
h.GlobalVar.money_symbol = "R$";
h.GlobalVar.countryCode = 3;
break;

case "MEX":
h.GlobalVar.money_symbol = "$";
h.GlobalVar.countryCode = 5;
break;

default:
h.GlobalVar.money_symbol = "₹";
h.GlobalVar.countryCode = 0;
}
} else App.asset.LoadTxt(S.Macro.BUNDLE_RESOURCES, "configs/url", null, function(t, n) {
v.default.urlData = n.text;
var o = v.default.getChannel();
e.initConfig(o);
});
};
t.prototype.initConfig = function(e) {
if (e) {
f.HostInfo.URL_Login_Server = e.url;
h.GlobalVar.countryCode = e.countryCode;
h.GlobalVar.phone_prefix = e.phone_prefix;
h.GlobalVar.money_symbol = e.money_symbol;
h.GlobalVar.gameCode = e.gameCode;
h.GlobalVar.channelName = e.channelName;
h.GlobalVar.des = e.des;
} else App.tips.show("channelid config error!");
};
t.prototype.update = function() {};
t.prototype.onDestroy = function(e) {
App.serviceManager.onDestroy();
App.entryManager.onDestroy(e);
};
t.prototype.onEnterBackground = function() {
this._enterBackgroundTime = Date.timeNow();
Log.d("[MainController]", "onEnterBackground " + this._enterBackgroundTime);
App.globalAudio.onEnterBackground();
};
t.prototype.onEnterForgeground = function() {};
return t;
}(b.Framewok);
n.Application = T;
var O = new T();
O.logger.level = E.LogLevel.ALL;
window.App = O;
O.init();
cc._RF.pop();
}, {
"./scripts/common/component/Alert": "Alert",
"./scripts/common/component/GlobalAudio": "GlobalAudio",
"./scripts/common/component/Loading": "Loading",
"./scripts/common/component/Tips": "Tips",
"./scripts/common/component/UILoading": "UILoading",
"./scripts/common/component/UIReconnect": "UIReconnect",
"./scripts/common/component/UpdateLoading": "UpdateLoading",
"./scripts/common/config/ConstString": "ConstString",
"./scripts/common/config/GlobalVar": "GlobalVar",
"./scripts/common/config/HostInfo": "HostInfo",
"./scripts/common/data/Bundles": "Bundles",
"./scripts/common/data/StageData": "StageData",
"./scripts/common/entry/CmmEntry": "CmmEntry",
"./scripts/common/utils/CmmUtils": "CmmUtils",
"./scripts/config/URLConfig": "URLConfig",
"./scripts/framework/Framework": "Framework",
"./scripts/framework/defines/Enums": "Enums",
"./scripts/framework/defines/Macros": "Macros",
"./scripts/framework/utils/Singleton": "Singleton",
"./scripts/sdk/AppInfo": "AppInfo",
"./scripts/sdk/SdkManager": "SdkManager"
} ],
AssetManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b4fc1D2m55E+a6Fji/1Ky71", "AssetManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.AssetManager = void 0;
var o = e("./Resource"), i = function() {
function e() {
this._logTag = "[RemoteLoader] ";
}
e.prototype.loadImage = function(e, t) {
var n = this;
return new Promise(function(o) {
if (null == e || null == e || e.length <= 0) o(null); else {
if (t) {
var i = App.cache.remoteCaches.getSpriteFrame(e);
if (i && i.data) {
o(i.data);
return;
}
App.cache.remoteCaches.remove(e);
} else App.cache.remoteCaches.remove(e);
n._loadRemoteRes(e, cc.Texture2D, t).then(function(t) {
var n = App.cache.remoteCaches.get(e);
if (t && n) {
n.data = t;
n.data.name = e;
var i = App.cache.remoteCaches.setSpriteFrame(e, n.data);
o(i);
} else o(null);
});
}
});
};
e.prototype.loadImage_fixed = function(e, t, n) {
var o = this;
return new Promise(function(i) {
if (null == e || null == e || e.length <= 0) i(null); else {
if (t) {
var r = App.cache.remoteCaches.getSpriteFrame(e);
if (r && r.data) {
i({
url: e,
sprite: r.data,
compare: n
});
return;
}
App.cache.remoteCaches.remove(e);
} else App.cache.remoteCaches.remove(e);
o._loadRemoteRes(e, cc.Texture2D, t).then(function(t) {
var o = App.cache.remoteCaches.get(e);
if (t && o) {
o.data = t;
o.data.name = e;
var r = App.cache.remoteCaches.setSpriteFrame(e, o.data);
i({
url: e,
sprite: r,
compare: n
});
} else i(null);
});
}
});
};
e.prototype._loadRemoteRes = function(e, t) {
return new Promise(function(n) {
var i = App.cache.remoteCaches.get(e);
if (i) i.isLoaded ? n(i.data) : i.finishCb.push(n); else {
(i = new o.Resource.CacheData()).info.resourceType = o.Resource.Type.Remote;
i.info.type = t;
App.cache.remoteCaches.set(e, i);
cc.assetManager.loadRemote(e, function(e, t) {
if (i) {
i.isLoaded = !0;
if (t) {
i.data = t;
i.data.addRef();
}
i.doFinish(t);
n(i.data);
}
});
}
});
};
e.prototype.update = function() {};
return e;
}(), r = function() {
function e() {
this.isResident = !0;
this.module = null;
this._remote = new i();
}
Object.defineProperty(e.prototype, "remote", {
get: function() {
return this._remote;
},
enumerable: !1,
configurable: !0
});
e.prototype.getBundle = function(e) {
return App.bundleManager.getBundle(e);
};
e.prototype.load = function(e, t, n, i, r) {
var a = App.cache.get(e, t);
if (a) {
a.isLoaded ? r(a) : a.finishCb.push(r);
a.status = o.Resource.CacheStatus.NONE;
} else {
(a = new o.Resource.CacheData()).info.url = t;
a.info.type = n;
a.info.bundle = e;
App.cache.set(e, t, a);
console.time("加载资源 : " + a.info.url);
var s = this.getBundle(e);
if (!s) {
var c = new Error(this.module + " " + e + " 没有加载，请先加载");
this._onLoadComplete(a, r, c, null);
return;
}
var l = s.get(t, n);
l ? this._onLoadComplete(a, r, null, l) : i ? s.load(t, n, i, this._onLoadComplete.bind(this, a, r)) : s.load(t, n, this._onLoadComplete.bind(this, a, r));
}
};
e.prototype._onLoadComplete = function(e, t, n, i) {
e.isLoaded = !0;
var r = e;
if (n) {
App.SingleGame || Log.e(this.module + "加载资源失败:" + e.info.url + " 原因:" + (n.message ? n.message : "未知"));
e.data = null;
r.data = null;
App.cache.remove(e.info.bundle, e.info.url);
t(e);
} else {
e.data = i;
r.data = i;
t(e);
}
e.doFinish(r);
e.doGet(r.data);
if (e.status == o.Resource.CacheStatus.WAITTING_FOR_RELEASE && e.data) {
e.status = o.Resource.CacheStatus.NONE;
var a = new o.Resource.Info();
a.url = e.info.url;
a.type = e.info.type;
a.data = e.data;
a.bundle = e.info.bundle;
this.releaseAsset(a);
}
console.timeEnd("加载资源 : " + e.info.url);
};
e.prototype.loadDir = function(e, t, n, i, r) {
var a = App.cache.get(e, t);
if (a) {
a.isLoaded ? r(a) : a.finishCb.push(r);
a.status = o.Resource.CacheStatus.NONE;
} else {
(a = new o.Resource.CacheData()).info.url = t;
a.info.type = n;
a.info.bundle = e;
App.cache.set(e, t, a);
console.time("加载资源 : " + a.info.url);
var s = this.getBundle(e);
if (!s) {
var c = new Error(this.module + " " + e + " 没有加载，请先加载");
this._onLoadComplete(a, r, c, null);
return;
}
i ? s.loadDir(t, n, i, this._onLoadComplete.bind(this, a, r)) : s.loadDir(t, n, this._onLoadComplete.bind(this, a, r));
}
};
e.prototype.LoadTxt = function(e, t, n, o) {
var i = this.getBundle(e);
i ? i.load(t, cc.TextAsset, n, o) : o(new Error(this.module + " " + e + " 没有加载，请先加载"), null);
};
e.prototype.loadScene = function(e, t, n, o) {
var i = this.getBundle(e);
i ? i.loadScene(t, n, o) : o(new Error(this.module + " " + e + " 没有加载，请先加载"), null);
};
e.prototype.releaseAsset = function(e) {
if (e && e.bundle) {
var t = App.cache.get(e.bundle, e.url, !1);
if (!t) return;
if (t.isInvalid) return;
if (t.isLoaded) {
if (t.info.retain) return;
App.cache.removeWithInfo(e);
} else t.status = o.Resource.CacheStatus.WAITTING_FOR_RELEASE;
}
};
e.prototype.retainAsset = function(e) {
if (e) {
var t = App.cache.get(e.bundle, e.url);
if (t) {
t.info.retain || (t.info.retain = e.retain);
if (Array.isArray(t.data)) for (var n = 0; n < t.data.length; n++) t.data[n] && t.data[n].addRef(); else t.data && t.data.addRef();
}
}
};
e.prototype.addPersistAsset = function(e, t, n) {
var i = new o.Resource.Info();
i.url = e;
i.data = t;
i.bundle = n;
i.retain = !0;
this.retainAsset(i);
};
e.module = "【AssetManager】";
return e;
}();
n.AssetManager = r;
cc._RF.pop();
}, {
"./Resource": "Resource"
} ],
AudioComponent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dbfa0kogUdFBoo4g5VgZ0Si", "AudioComponent");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./EventComponent"), s = e("../core/asset/Resource"), c = e("../utils/Singleton"), l = e("../defines/Macros"), u = cc._decorator, p = u.ccclass, d = (u.property, 
u.menu, function() {
function e() {
this.musicVolume = 1;
this.effectVolume = 1;
this.isEffectOn = !0;
this.isMusicOn = !0;
this._curMusicUrl = "";
this.prevMusicUrl = "";
this.curEffectId = -1;
this.curBundle = null;
this.curLoop = !0;
this.isPlaying = !1;
this._storeMusicKey = "default_save_music";
this._storeEffectKey = "default_save_effect";
this._storeMusicVolumeKey = "default_save_music_volume_key";
this._storeEffectVolumeKey = "default_save_effect_volume_key";
}
Object.defineProperty(e.prototype, "curMusicUrl", {
get: function() {
return this._curMusicUrl;
},
set: function(e) {
this.prevMusicUrl = this._curMusicUrl;
this._curMusicUrl = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function() {
this.isMusicOn = App.storage.getItem(this._storeMusicKey, this.isMusicOn);
this.isEffectOn = App.storage.getItem(this._storeEffectKey, this.isEffectOn);
this.musicVolume = App.storage.getItem(this._storeMusicVolumeKey, this.musicVolume);
this.effectVolume = App.storage.getItem(this._storeEffectVolumeKey, this.effectVolume);
};
e.prototype.save = function() {
try {
App.storage.setItem(this._storeMusicKey, this.isMusicOn);
App.storage.setItem(this._storeMusicVolumeKey, this.musicVolume);
App.storage.setItem(this._storeEffectKey, this.isEffectOn);
App.storage.setItem(this._storeEffectVolumeKey, this.effectVolume);
} catch (e) {}
};
e.module = "【音效数据】";
return e;
}()), h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.owner = null;
t.curPlayMusicUrl = null;
t.interval = .06;
t.curInterval = 0;
t.maxSamePlay = 1;
return t;
}
n = t;
t.prototype.addEvents = function() {
e.prototype.addEvents.call(this);
this.onD("AudioComponent_PLAY_MUSIC", this.onPlayMusic);
};
t.prototype.onPlayMusic = function() {
this.curPlayMusicUrl == this.curMusicUrl && !this.isPlaying && this.curMusicUrl && this.curBundle && this.playMusic(this.curMusicUrl, this.curBundle, this.curLoop);
};
Object.defineProperty(t.prototype, "audioData", {
get: function() {
return c.Singleton.instance.get(d);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "musicVolume", {
get: function() {
return this.audioData.musicVolume;
},
set: function(e) {
cc.audioEngine.setMusicVolume(e);
e <= 0 && this.stopMusic();
this.audioData.musicVolume = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "effectVolume", {
get: function() {
return this.audioData.effectVolume;
},
set: function(e) {
cc.audioEngine.setEffectsVolume(e);
e <= 0 && this.stopEffect();
this.audioData.effectVolume = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isEffectOn", {
get: function() {
return this.audioData.isEffectOn;
},
set: function(e) {
this.audioData.isEffectOn = e;
this.save();
e || this.stopEffect();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isMusicOn", {
get: function() {
return this.audioData.isMusicOn;
},
set: function(e) {
this.audioData.isMusicOn = e;
this.save();
if (this.audioData.isMusicOn) {
if (!this.curMusicUrl) return;
dispatch("AudioComponent_PLAY_MUSIC", this);
} else this.stopMusic();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "curMusicUrl", {
get: function() {
return this.audioData.curMusicUrl;
},
set: function(e) {
this.audioData.curMusicUrl = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "prevMusiUrl", {
get: function() {
return this.audioData.prevMusicUrl;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "curBundle", {
get: function() {
return this.audioData.curBundle;
},
set: function(e) {
this.audioData.curBundle = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "curLoop", {
get: function() {
return this.audioData.curLoop;
},
set: function(e) {
this.audioData.curLoop = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isPlaying", {
get: function() {
return this.audioData.isPlaying;
},
set: function(e) {
this.audioData.isPlaying = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.save = function() {
this.audioData.save();
};
t.prototype.stopEffect = function(e) {
void 0 === e && (e = null);
if (null == e) {
if (this.audioData.curEffectId < 0) return;
cc.audioEngine.stopEffect(this.audioData.curEffectId);
this.audioData.curEffectId = -1;
} else cc.audioEngine.stopEffect(e);
};
t.prototype.pauseEffect = function(e) {
void 0 === e && (e = null);
if (null == e) {
if (this.audioData.curEffectId < 0) return;
cc.audioEngine.pauseEffect(this.audioData.curEffectId);
this.audioData.curEffectId = -1;
} else cc.audioEngine.pauseEffect(e);
};
t.prototype.stopAllEffects = function() {
cc.audioEngine.stopAllEffects();
};
t.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
this.isPlaying = !1;
};
t.prototype.playMusic = function(e, t, n) {
var o = this;
void 0 === n && (n = !0);
return new Promise(function(i) {
o.curPlayMusicUrl = e;
o.curMusicUrl = e;
o.curBundle = t;
o.curLoop = n;
o.audioData.isMusicOn && App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(r) {
if (r) {
var a = new s.Resource.Info();
a.url = e;
a.type = cc.AudioClip;
a.data = r;
a.bundle = t;
o.owner ? App.uiManager.addLocal(a, o.owner.className) : App.uiManager.garbage.addLocal(a);
if (!o.isPlaying || o.curMusicUrl != o.prevMusiUrl) {
o.stopMusic();
cc.audioEngine.playMusic(r, n);
}
o.isPlaying = !0;
i({
url: e,
isSuccess: !0
});
} else i({
url: e,
isSuccess: !1
});
});
});
};
t.prototype.playEffect = function(e, t, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(r) {
if (r) {
var a = new s.Resource.Info();
a.url = e;
a.type = cc.AudioClip;
a.data = r;
a.bundle = t;
o.owner ? App.uiManager.addLocal(a, o.owner.className) : App.uiManager.garbage.addLocal(a);
var c = cc.audioEngine.playEffect(r, n);
o.audioData.curEffectId = c;
i(c);
} else i(-1);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
t.prototype.playBundleMultipleEffect = function(e, t) {
n.playLargeEffect(e, t);
};
t.prototype.playHallMultipleEffect = function(e) {
n.playLargeEffect(e, l.Macro.BUNDLE_RESOURCES);
};
t.prototype.playMainMultipleEffect = function(e) {
n.playLargeEffect(e, l.Macro.BUNDLE_RESOURCES);
};
t.prototype.onEnterBackground = function() {
App.globalAudio.pauseBackgroundMusic();
cc.audioEngine.pauseAllEffects();
};
t.prototype.onEnterForgeground = function() {
App.globalAudio.resumeBackgroundMusic();
cc.audioEngine.resumeAllEffects();
};
t.prototype.playCustomEffect = function(e, t, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(r) {
if (r) {
App.asset.addPersistAsset(e, r, t);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
t.prototype.update = function(e) {
var t = this;
this.curInterval += e;
if (this.curInterval >= this.interval) {
this.curInterval = 0;
n.globalClip.size > 0 && n.globalClip.forEach(function(e) {
if (e.count > t.maxSamePlay) for (var n = 0; n < t.maxSamePlay; n++) t.playCustomEffect(e.name, e.bundle); else for (n = 0; n < e.count; n++) t.playCustomEffect(e.name, e.bundle);
});
n.globalClip.clear();
}
};
t.playLargeEffect = function(e, t) {
this.globalClip.has(e) ? this.globalClip.get(e).count++ : this.globalClip.set(e, {
name: e,
count: 1,
bundle: t
});
};
var n;
t.globalClip = new Map();
return n = r([ p ], t);
}(a.default);
n.default = h;
cc._RF.pop();
}, {
"../core/asset/Resource": "Resource",
"../defines/Macros": "Macros",
"../utils/Singleton": "Singleton",
"./EventComponent": "EventComponent"
} ],
AudioMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bfb4fhT6L1HzLi8umIX5SbW", "AudioMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgm = null;
t.bgm_game = null;
t.effects = [];
return t;
}
n = t;
t.prototype.onLoad = function() {
n.instance = this;
var e = App.storage.getItem("soundState", !0);
this.setSoundState(e);
this.playBGM(this.bgm);
};
t.prototype.onDestroy = function() {
this.stopBGM();
n.instance = null;
};
t.prototype.playEffect = function(e) {
for (var t = -1, n = 0; n < this.effects.length; n++) {
var o = this.effects[n];
if (o.name == e) {
t = cc.audioEngine.playEffect(o, !1);
break;
}
}
return t;
};
t.prototype.PauseMusic = function() {
this.bgm && cc.audioEngine.pauseMusic();
};
t.prototype.ResumeMusic = function() {
this.bgm && cc.audioEngine.resumeMusic();
};
t.prototype.playBGM = function(e) {
e ? cc.audioEngine.playMusic(e, !0) : cc.audioEngine.playMusic(this.bgm, !0);
};
t.prototype.stopBGM = function() {
cc.audioEngine.stopMusic();
};
t.prototype.StopEffect_audioID = function(e) {
cc.audioEngine.stopEffect(e);
};
t.prototype.setSoundState = function(e) {
cc.audioEngine.setMusicVolume(e ? 1 : 0);
cc.audioEngine.setEffectsVolume(e ? 1 : 0);
};
var n;
t.instance = null;
r([ c(cc.AudioClip) ], t.prototype, "bgm", void 0);
r([ c(cc.AudioClip) ], t.prototype, "bgm_game", void 0);
r([ c(cc.AudioClip) ], t.prototype, "effects", void 0);
return n = r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
BaseAnimState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "caa3bDLKYxOVpuxk6Plb8Cn", "BaseAnimState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/enum/GlobalEnum"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.state = a.GlobalEnum.ElementState.Normal;
return t;
}
t.prototype.show = function(e) {
this.config = e;
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
r([ l({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], t.prototype, "state", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum"
} ],
"BaseLineItem ": [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e0daew5TE9HTr87k1MeqWuo", "BaseLineItem ");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {};
t.prototype.show = function() {
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
return r([ s ], t);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
BaseLineMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "582a4IlwrtCwLMi/e9YjH6+", "BaseLineMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {};
t.prototype.showRewardLine = function(e) {
this.lines[e].show();
};
t.prototype.showRewardLines = function() {};
t.prototype.showOtherType = function() {};
t.prototype.hide = function() {
if (this.lines) for (var e = 0; e < this.lines.length; e++) this.lines[e].hide();
};
t.prototype.lineAnims_None = function() {};
return r([ s ], t);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
BinaryStreamMessage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0b706caWmdEULamHl7PndHE", "BinaryStreamMessage");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BinaryStreamHeartbeat = n.BinaryStream = n.UINT = n.USHORT = n.UBYTE = n.INT = n.SHORT = n.BYTE = n.DOUBLE = n.FLOAT = n.STRING = n.BOOL = n.serialize = void 0;
var r = e("../../../defines/Macros"), a = e("../../../plugin/ByteArray"), s = e("../Net"), c = e("./Message");
n.serialize = function(e, t, n, o, i) {
return function(r, a) {
if (void 0 === Reflect.getOwnPropertyDescriptor(r, "__serialize__")) {
var s = {};
if (Reflect.getPrototypeOf(r).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(r, "__serialize__")) for (var c = Reflect.getPrototypeOf(r).__serialize__, l = Object.keys(c), u = l.length, p = 0; p < u; p++) s[l[p]] = c[l[p]].slice(0);
Reflect.defineProperty(r, "__serialize__", {
value: s
});
}
if (r.__serialize__[e]) throw "SerializeKey has already been declared:" + e;
r.__serialize__[e] = [ a, t, n, o, i ];
};
};
var l = function() {
function e() {
this.data = null;
}
e.prototype.read = function() {};
e.prototype.write = function() {};
Object.defineProperty(e.prototype, "littleEndian", {
get: function() {
return r.Macro.USING_LITTLE_ENDIAN;
},
enumerable: !1,
configurable: !0
});
return e;
}(), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.data = 0;
return t;
}
return t;
}(l), p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.data = !1;
return t;
}
t.prototype.read = function(e) {
this.data = e.readBoolean();
};
t.prototype.write = function(e) {
e.writeBoolean(this.data);
};
return t;
}(l);
n.BOOL = p;
var d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.data = "";
t.byteSize = void 0;
return t;
}
t.prototype.read = function(e) {
var t = this.byteSize;
null == this.byteSize && (t = e.readUnsignedInt());
this.data = e.readUTFBytes(t);
};
t.prototype.write = function(e) {
var t = new a.ByteArray();
t.writeUTFBytes(this.data, this.byteSize);
null == this.byteSize && e.writeUnsignedInt(t.length);
e.writeBytes(t);
};
return t;
}(l);
n.STRING = d;
var h = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readFloat();
};
t.prototype.write = function(e) {
e.writeFloat(this.data);
};
return t;
}(u);
n.FLOAT = h;
var f = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readDouble();
};
t.prototype.write = function(e) {
e.writeDouble(this.data);
};
return t;
}(u);
n.DOUBLE = f;
var _ = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readByte();
};
t.prototype.write = function(e) {
e.writeByte(this.data);
};
return t;
}(u);
n.BYTE = _;
var g = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readShort();
};
t.prototype.write = function(e) {
e.writeShort(this.data);
};
return t;
}(u);
n.SHORT = g;
var y = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readInt();
};
t.prototype.write = function(e) {
e.writeInt(this.data);
};
return t;
}(u);
n.INT = y;
var m = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readUnsignedByte();
};
t.prototype.write = function(e) {
e.writeByte(this.data);
};
return t;
}(u);
n.UBYTE = m;
var v = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readUnsignedShort();
};
t.prototype.write = function(e) {
e.writeUnsignedShort(this.data);
};
return t;
}(u);
n.USHORT = v;
var E = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.read = function(e) {
this.data = e.readUnsignedInt();
};
t.prototype.write = function(e) {
e.writeUnsignedInt(this.data);
};
return t;
}(u);
n.UINT = E;
var S = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.byteArray = null;
t.buffer = null;
return t;
}
t.prototype.encode = function() {
this.byteArray = new a.ByteArray(this.buffer);
this.byteArray.endian = r.Macro.USING_LITTLE_ENDIAN;
this.serialize();
this.buffer = this.byteArray.bytes;
return !0;
};
t.prototype.isNumberValue = function(e) {
return e == h || e == f || e == _ || e == g || e == y || e == m || e == v || e == E;
};
t.prototype.isBoolValue = function(e) {
return e == p;
};
t.prototype.isStringValue = function(e) {
return e == d;
};
t.prototype.serialize = function() {
var e = Reflect.getPrototypeOf(this).__serialize__;
if (!e) return null;
for (var t = Object.keys(e), n = t.length, o = 0; o < n; o++) {
var i = e[t[o]], r = i[0], a = i[1], s = i[2], c = i[3], l = i[4];
this.serializeMember(this[r], r, a, s, c, l);
}
};
t.prototype.serializeMember = function(e, n, o, i, r, a) {
if (this.isNumberValue(o)) this.serializeNumberStreamValue(e, o); else if (this.isBoolValue(o)) this.serializeBoolValue(e, o); else if (this.isStringValue(o)) this.serializeStringStreamValue(e, o, i); else if (e instanceof Array) this.serializeArray(e, n, o, i, r, a); else if (e instanceof t) {
e.byteArray = this.byteArray;
e.serialize();
} else Log.e("序列化成员 : " + n + " 出错!!");
};
t.prototype.serializeNumberStreamValue = function(e, t) {
var n = new t();
n.data = null == e || e == Number.NaN ? 0 : e;
n.write(this.byteArray);
};
t.prototype.serializeBoolValue = function(e, t) {
var n = new t();
n.data = null != e && e;
n.write(this.byteArray);
};
t.prototype.serializeStringStreamValue = function(e, t, n) {
var o = new t();
o.byteSize = n;
o.data = null == e ? "" : e;
o.write(this.byteArray);
};
t.prototype.checkArrayDimension = function(e, t) {
var n = 0, o = e;
do {
n++;
o = o[0];
} while (o && Array.isArray(o) && o.length > 0);
return n == t;
};
t.prototype.serializeArray = function(e, t, n, o, i, r) {
null == r && (r = 1);
if (this.checkArrayDimension(e, r)) {
this.byteArray.writeUnsignedInt(e.length);
for (var a = 0; a < e.length; a++) e[a] instanceof Array ? this.serializeArray(e[a], t + "[" + a + "]", n, o, i, r - 1) : this.serializeMember(e[a], t + "[" + a + "]", o, i, void 0);
} else Log.e(t + " 定义数组跟序列化的数组维度不一致");
};
t.prototype.decode = function(e) {
this.buffer = e;
this.byteArray = new a.ByteArray(e);
this.byteArray.endian = r.Macro.USING_LITTLE_ENDIAN;
this.deserialize();
return !0;
};
t.prototype.deserialize = function() {
var e = Reflect.getPrototypeOf(this).__serialize__;
if (!e) return !0;
for (var t = Object.keys(e), n = t.length, o = 0; o < n; o++) {
var i = e[t[o]], r = i[0], a = i[1], s = i[2], c = i[3], l = i[4];
this.deserializeMember(r, a, s, c, l);
}
};
t.prototype.deserializeMember = function(e, n, o, i, r) {
try {
var a = this[e];
if (this.isNumberValue(n)) this[e] = this.deserializeNumberStreamValue(e, n); else if (this.isBoolValue(n)) this[e] = this.deserializeBoolValue(e, n); else if (this.isStringValue(n)) this[e] = this.deserializeStringStreamValue(e, n, o); else if (a instanceof Array) this.deserializeArray(e, n, o, i, r); else if (a instanceof t) {
a.byteArray = this.byteArray;
a.deserialize();
} else Log.e("deserializeMember " + e + " error!!!");
} catch (t) {
Log.w(t.message);
Log.e("deserializeMember " + e + " error!!!");
}
};
t.prototype.deserializeNumberStreamValue = function(e, t) {
var n = new t();
n.read(this.byteArray);
return n.data;
};
t.prototype.deserializeBoolValue = function(e, t) {
var n = new t();
n.read(this.byteArray);
return n.data;
};
t.prototype.deserializeStringStreamValue = function(e, t, n) {
var o = new t();
o.byteSize = n;
o.read(this.byteArray);
return o.data;
};
t.prototype._deserializeArray = function(e, n, o, i, r, a) {
void 0 === a && (a = 1);
if (!(a <= 0)) for (var s = this.byteArray.readUnsignedInt(), c = 0, l = 0; l < s; l++) if (a > 1) {
e.push([]);
this._deserializeArray(e[c], n + "[" + c + "]", o, i, r, a - 1);
c++;
} else {
var u = new i();
if (u instanceof t) {
u.byteArray = this.byteArray;
e[l] = u.deserialize();
} else if (u instanceof d) {
u.byteSize = r;
u.read(this.byteArray);
e[l] = u.data;
} else {
u.read(this.byteArray);
e[l] = u.data;
}
}
};
t.prototype.deserializeArray = function(e, t, n, o, i) {
this[e] = [];
null == i && (i = 1);
this._deserializeArray(this[e], e, t, n, o, i);
};
return t;
}(c.Message);
n.BinaryStream = S;
var b = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.type = s.Net.ServiceType.BinaryStream;
return t;
}(S);
n.BinaryStreamHeartbeat = b;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../../plugin/ByteArray": "ByteArray",
"../Net": "Net",
"./Message": "Message"
} ],
BitEncrypt: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7cabdeR6KhPb5jNmHpa30Pt", "BitEncrypt");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BitEncrypt = void 0;
var o = function() {
function e() {
this.logTag = "[BitEncrypt]:";
this._encryptKey = "EskKbMvzZBILhcTv";
}
Object.defineProperty(e.prototype, "encryptKey", {
get: function() {
return this._encryptKey;
},
set: function(e) {
this._encryptKey = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.decode = function(e, t) {
return this._code(e, t);
};
e.prototype.encode = function(e, t) {
return this._code(e, t);
};
e.prototype._code = function(e, t) {
var n = this._check(e, t);
if (n.isOK) {
for (var o = [], i = 0; i < e.length; i++) o.push(e.charCodeAt(i));
var r = 0, a = /[\w\d_-`~#!$%^&*(){}=+;:'"<,>,/?|\\\u4e00-\u9fa5]/g;
for (i = 0; i < o.length; i++) {
var s = e[i].match(a);
if (s && s.length > 0) {
o[i] ^= n.key.charCodeAt(r);
(s = String.fromCharCode(o[i]).match(a)) && s.length || (o[i] ^= n.key.charCodeAt(r));
++r >= n.key.length && (r = 0);
}
}
var c = "";
for (i = 0; i < o.length; i++) c += String.fromCharCode(o[i]);
return c;
}
return e;
};
e.prototype._check = function(e, t) {
return e && e.length > 0 ? t && t.length > 0 ? {
isOK: !0,
key: t
} : this.encryptKey && this.encryptKey.length > 0 ? {
isOK: !0,
key: this.encryptKey
} : {
isOK: !1,
key: ""
} : {
isOK: !1,
key: ""
};
};
return e;
}();
n.BitEncrypt = new o();
cc._RF.pop();
}, {} ],
BundleManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1fefaUPK2VP1Z0gfox2dQg7", "BundleManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BundleManager = void 0;
var o = e("../../defines/Macros"), i = function() {
function e() {
this.module = null;
this.gameBundles = new Map();
}
e.prototype.isEngineBundle = function(e) {
return e == cc.AssetManager.BuiltinBundleName.INTERNAL || e == cc.AssetManager.BuiltinBundleName.MAIN || e == cc.AssetManager.BuiltinBundleName.RESOURCES || e == cc.AssetManager.BuiltinBundleName.START_SCENE;
};
e.prototype.getBundle = function(e) {
return e ? "string" == typeof e ? cc.assetManager.getBundle(e) : e : null;
};
e.prototype.getBundleName = function(e) {
if (e) return "string" == typeof e ? e : e.name;
Log.e("输入参数错误 : " + e);
return o.Macro.UNKNOWN;
};
e.prototype.enterBundle = function(e) {
e ? App.updateManager.dowonLoad(e) : Log.e("无效的入口信息");
};
e.prototype.loadBundle = function(e) {
var t = this;
e.bundle != o.Macro.BUNDLE_invite && e.bundle != o.Macro.BUNDLE_ACTIVITY_card || App.loading.show(0, 0, !0);
var n = this.getBundle(e.bundle);
if (n) {
Log.d(e.bundle + "已经加载在缓存中，直接使用");
e.handler.onLoadBundleComplete(e);
this.unLoadOtherBundles(e.bundle);
this.gameBundles.set(e.bundle, n);
} else {
e.handler.onStartLoadBundle(e);
Log.d("loadBundle : " + e.bundle);
this._loadBundle(e.bundle, function(n, o) {
if (n) {
Log.e("load bundle : " + e.bundle + " fail !!!");
e.handler.onLoadBundleError(e, n);
} else {
Log.d("load bundle : " + e.bundle + " success !!!");
e.handler.onLoadBundleComplete(e);
t.unLoadOtherBundles(e.bundle);
t.gameBundles.set(e.bundle, o);
}
});
}
};
e.prototype.unLoadOtherBundles = function(e) {
cc.director.getScene();
this.gameBundles.forEach(function(t, n) {
e != n && cc.assetManager.removeBundle(t);
});
this.gameBundles.clear();
};
e.prototype._loadBundle = function(e, t) {
cc.assetManager.loadBundle(e, t);
};
e.module = "【Bundle管理器】";
return e;
}();
n.BundleManager = i;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
BundleUpdateHandlerImpl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aa5aek2Hb1Ne6ZDRnHkyWY2", "BundleUpdateHandlerImpl");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.BundleUpdateHandlerImpl = void 0;
var o = e("../utils/CmmUtils"), i = function() {
function e() {
this.module = null;
this.isResident = !0;
}
e.prototype.onNewVersionFund = function(e) {
e.doUpdate();
};
e.prototype.onUpdateFailed = function() {};
e.prototype.onPreVersionFailed = function(e) {
this.onUpdateFailed(e);
};
e.prototype.onShowUpdating = function() {};
e.prototype.onNeedUpdateMain = function() {
App.alert.show({
text: "Game version Is too low! Please restart game.",
hideX: !1,
confirmCb: function() {
cc.game.restart();
}
});
};
e.prototype.onOther = function() {};
e.prototype.onDownloading = function() {};
e.prototype.onAreadyUpToData = function(e) {
App.tips.show("already RemoteVersion" + e.name);
};
e.prototype.onStarCheckUpdate = function() {};
e.prototype.onStartLoadBundle = function() {};
e.prototype.onLoadBundleError = function(e) {
App.tips.show("loadFailed" + e.name);
};
e.prototype.onLoadBundleComplete = function(e) {
App.entryManager.onLoadBundleComplete(e);
};
e.prototype.onLoadBundle = function(e) {
App.bundleManager.loadBundle(e);
};
e.prototype.onDownloadComplete = function() {};
e.prototype.onNeedRestartApp = function(e, t) {
var n = o.CmmUtils.string_format_args("{0} version Is too low! Please restart game.", e.name);
App.alert.show({
text: n,
confirmCb: function() {
t(!1, !0);
}
});
};
e.module = "【Bundle热更新】";
return e;
}();
n.BundleUpdateHandlerImpl = i;
cc._RF.pop();
}, {
"../utils/CmmUtils": "CmmUtils"
} ],
Bundles: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1b5b1/drJxONqwuCVtz9omd", "Bundles");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Bundles = void 0;
(function(e) {
e[e.resources = 0] = "resources";
e[e.hall = 1] = "hall";
e[e.Agame = 2] = "Agame";
e[e.rummy = 3] = "rummy";
e[e.dragontiger = 4] = "dragontiger";
e[e.teenpatti = 5] = "teenpatti";
e[e.teenpattiPrivate = 6] = "teenpattiPrivate";
e[e.anubis = 7] = "anubis";
e[e.baccarat3patti = 8] = "baccarat3patti";
e[e.baccaratab = 9] = "baccaratab";
e[e.buffalo = 10] = "buffalo";
e[e.motoracing = 11] = "motoracing";
e[e.updown7 = 12] = "updown7";
e[e.sixdice = 13] = "sixdice";
e[e.starslots = 14] = "starslots";
e[e.teenpattislots = 15] = "teenpattislots";
e[e.singlelp = 16] = "singlelp";
e[e.mines = 17] = "mines";
e[e.rouletteslots = 18] = "rouletteslots";
e[e.liondance = 19] = "liondance";
e[e.carsdrifting = 20] = "carsdrifting";
e[e.crash = 21] = "crash";
e[e.sicbo = 22] = "sicbo";
e[e.classicfruitslot = 23] = "classicfruitslot";
e[e.hotchilli = 24] = "hotchilli";
e[e.luckyjoker = 25] = "luckyjoker";
e[e.doubledragon = 26] = "doubledragon";
e[e.fortunetiger = 27] = "fortunetiger";
e[e.halloween = 28] = "halloween";
e[e.minesball = 29] = "minesball";
e[e.spinstrike = 30] = "spinstrike";
e[e.activitycard = 31] = "activitycard";
e[e.loca = 32] = "loca";
e[e.baccarat = 33] = "baccarat";
e[e.invite = 34] = "invite";
e[e.domino = 35] = "domino";
e[e.piggybank = 36] = "piggybank";
e[e.fastfielder = 37] = "fastfielder";
e[e.superwingo = 38] = "superwingo";
e[e.teenpattiJoker = 39] = "teenpattiJoker";
e[e.teenpattiAK47 = 40] = "teenpattiAK47";
e[e.lottery7 = 41] = "lottery7";
e[e.diwalilights = 42] = "diwalilights";
e[e.ganeshagold = 43] = "ganeshagold";
})(n.Bundles || (n.Bundles = {}));
cc._RF.pop();
}, {} ],
ByteArray: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7e5e7EuQNJHfJTtg8v9lh88", "ByteArray");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ByteArray = n.EndianConst = n.Endian = void 0;
var o, i, r = function() {
function e() {}
e.LITTLE_ENDIAN = "littleEndian";
e.BIG_ENDIAN = "bigEndian";
return e;
}();
n.Endian = r;
(function(e) {
e[e.LITTLE_ENDIAN = 0] = "LITTLE_ENDIAN";
e[e.BIG_ENDIAN = 1] = "BIG_ENDIAN";
})(o = n.EndianConst || (n.EndianConst = {}));
(function(e) {
e[e.SIZE_OF_BOOLEAN = 1] = "SIZE_OF_BOOLEAN";
e[e.SIZE_OF_INT8 = 1] = "SIZE_OF_INT8";
e[e.SIZE_OF_INT16 = 2] = "SIZE_OF_INT16";
e[e.SIZE_OF_INT32 = 4] = "SIZE_OF_INT32";
e[e.SIZE_OF_UINT8 = 1] = "SIZE_OF_UINT8";
e[e.SIZE_OF_UINT16 = 2] = "SIZE_OF_UINT16";
e[e.SIZE_OF_UINT32 = 4] = "SIZE_OF_UINT32";
e[e.SIZE_OF_FLOAT32 = 4] = "SIZE_OF_FLOAT32";
e[e.SIZE_OF_FLOAT64 = 8] = "SIZE_OF_FLOAT64";
})(i || (i = {}));
var a = function() {
function e(e, t) {
void 0 === t && (t = 0);
this.bufferExtSize = 0;
this.$endian = null;
this.EOF_byte = -1;
this.EOF_code_point = -1;
t < 0 && (t = 0);
this.bufferExtSize = t;
var n, o = 0;
if (e) {
var i = void 0;
if (e instanceof Uint8Array) {
i = e;
o = e.length;
} else {
o = e.byteLength;
i = new Uint8Array(e);
}
(n = 0 == t ? new Uint8Array(o) : new Uint8Array((1 + (o / t | 0)) * t)).set(i);
} else n = new Uint8Array(t);
this.write_position = o;
this._position = 0;
this._bytes = n;
this.data = new DataView(n.buffer);
this.endian = r.BIG_ENDIAN;
}
Object.defineProperty(e.prototype, "endian", {
get: function() {
return this.$endian == o.LITTLE_ENDIAN ? r.LITTLE_ENDIAN : r.BIG_ENDIAN;
},
set: function(e) {
this.$endian = e == r.LITTLE_ENDIAN ? o.LITTLE_ENDIAN : o.BIG_ENDIAN;
},
enumerable: !1,
configurable: !0
});
e.prototype.setArrayBuffer = function() {};
Object.defineProperty(e.prototype, "readAvailable", {
get: function() {
return this.write_position - this._position;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "buffer", {
get: function() {
return this.data.buffer.slice(0, this.write_position);
},
set: function(e) {
var t, n = e.byteLength, o = new Uint8Array(e), i = this.bufferExtSize;
(t = 0 == i ? new Uint8Array(n) : new Uint8Array((1 + (n / i | 0)) * i)).set(o);
this.write_position = n;
this._bytes = t;
this.data = new DataView(t.buffer);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "rawBuffer", {
get: function() {
return this.data.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bytes", {
get: function() {
return this._bytes;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dataView", {
get: function() {
return this.data;
},
set: function(e) {
this.buffer = e.buffer;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bufferOffset", {
get: function() {
return this.data.byteOffset;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "position", {
get: function() {
return this._position;
},
set: function(e) {
this._position = e;
e > this.write_position && (this.write_position = e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "length", {
get: function() {
return this.write_position;
},
set: function(e) {
this.write_position = e;
this.data.byteLength > e && (this._position = e);
this._validateBuffer(e);
},
enumerable: !1,
configurable: !0
});
e.prototype._validateBuffer = function(e) {
if (this.data.byteLength < e) {
var t = this.bufferExtSize, n = void 0;
(n = 0 == t ? new Uint8Array(e) : new Uint8Array((1 + (e / t >> 0)) * t)).set(this._bytes);
this._bytes = n;
this.data = new DataView(n.buffer);
}
};
Object.defineProperty(e.prototype, "bytesAvailable", {
get: function() {
return this.data.byteLength - this._position;
},
enumerable: !1,
configurable: !0
});
e.prototype.clear = function() {
var e = new ArrayBuffer(this.bufferExtSize);
this.data = new DataView(e);
this._bytes = new Uint8Array(e);
this._position = 0;
this.write_position = 0;
};
e.prototype.readBoolean = function() {
return !!this.validate(i.SIZE_OF_BOOLEAN) && !!this._bytes[this.position++];
};
e.prototype.readByte = function() {
return this.validate(i.SIZE_OF_INT8) ? this.data.getInt8(this.position++) : 0;
};
e.prototype.readBytes = function(e, t, n) {
void 0 === t && (t = 0);
void 0 === n && (n = 0);
if (e) {
var o = this._position, i = this.write_position - o;
if (!(i < 0)) {
if (0 == n) n = i; else if (n > i) return;
var r = e._position;
e._position = 0;
e.validateBuffer(t + n);
e._position = r;
e._bytes.set(this._bytes.subarray(o, o + n), t);
this.position += n;
}
}
};
e.prototype.readDouble = function() {
if (this.validate(i.SIZE_OF_FLOAT64)) {
var e = this.data.getFloat64(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT64;
return e;
}
return 0;
};
e.prototype.readFloat = function() {
if (this.validate(i.SIZE_OF_FLOAT32)) {
var e = this.data.getFloat32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT32;
return e;
}
return 0;
};
e.prototype.readInt = function() {
if (this.validate(i.SIZE_OF_INT32)) {
var e = this.data.getInt32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT32;
return e;
}
return 0;
};
e.prototype.readShort = function() {
if (this.validate(i.SIZE_OF_INT16)) {
var e = this.data.getInt16(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT16;
return e;
}
return 0;
};
e.prototype.readUnsignedByte = function() {
return this.validate(i.SIZE_OF_UINT8) ? this._bytes[this.position++] : 0;
};
e.prototype.readUnsignedInt = function() {
if (this.validate(i.SIZE_OF_UINT32)) {
var e = this.data.getUint32(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT32;
return e;
}
return 0;
};
e.prototype.readUnsignedShort = function() {
if (this.validate(i.SIZE_OF_UINT16)) {
var e = this.data.getUint16(this._position, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
return e;
}
return 0;
};
e.prototype.readUTF = function() {
var e = this.readUnsignedShort();
return e > 0 ? this.readUTFBytes(e) : "";
};
e.prototype.readUTFBytes = function(e) {
if (!this.validate(e)) return "";
var t = this.data, n = new Uint8Array(t.buffer, t.byteOffset + this._position, e);
this.position += e;
return this.decodeUTF8(n);
};
e.prototype.writeBoolean = function(e) {
this.validateBuffer(i.SIZE_OF_BOOLEAN);
this._bytes[this.position++] = +e;
};
e.prototype.writeByte = function(e) {
this.validateBuffer(i.SIZE_OF_INT8);
this._bytes[this.position++] = 255 & e;
};
e.prototype.writeBytes = function(e, t, n) {
void 0 === t && (t = 0);
void 0 === n && (n = 0);
var o;
if (!(t < 0) && !(n < 0) && (o = 0 == n ? e.length - t : Math.min(e.length - t, n)) > 0) {
this.validateBuffer(o);
this._bytes.set(e._bytes.subarray(t, t + o), this._position);
this.position = this._position + o;
}
};
e.prototype.writeDouble = function(e) {
this.validateBuffer(i.SIZE_OF_FLOAT64);
this.data.setFloat64(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT64;
};
e.prototype.writeFloat = function(e) {
this.validateBuffer(i.SIZE_OF_FLOAT32);
this.data.setFloat32(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_FLOAT32;
};
e.prototype.writeInt = function(e) {
this.validateBuffer(i.SIZE_OF_INT32);
this.data.setInt32(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT32;
};
e.prototype.writeShort = function(e) {
this.validateBuffer(i.SIZE_OF_INT16);
this.data.setInt16(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_INT16;
};
e.prototype.writeUnsignedInt = function(e) {
this.validateBuffer(i.SIZE_OF_UINT32);
this.data.setUint32(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT32;
};
e.prototype.writeUnsignedShort = function(e) {
this.validateBuffer(i.SIZE_OF_UINT16);
this.data.setUint16(this._position, e, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
};
e.prototype.writeUTF = function(e) {
var t = this.encodeUTF8(e), n = t.length;
this.validateBuffer(i.SIZE_OF_UINT16 + n);
this.data.setUint16(this._position, n, this.$endian == o.LITTLE_ENDIAN);
this.position += i.SIZE_OF_UINT16;
this._writeUint8Array(t, !1);
};
e.prototype.writeUTFBytes = function(e, t) {
this._writeUint8Array(this.encodeUTF8(e, t));
};
e.prototype.toString = function() {
return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
};
e.prototype._writeUint8Array = function(e, t) {
void 0 === t && (t = !0);
var n = this._position, o = n + e.length;
t && this.validateBuffer(o);
this.bytes.set(e, n);
this.position = o;
};
e.prototype.validate = function(e) {
var t = this._bytes.length;
return t > 0 && this._position + e <= t;
};
e.prototype.validateBuffer = function(e) {
this.write_position = e > this.write_position ? e : this.write_position;
e += this._position;
this._validateBuffer(e);
};
e.prototype.encodeUTF8 = function(e, t) {
for (var n = 0, o = this.stringToCodePoints(e), i = []; o.length > n; ) {
var r = o[n++];
if (this.inRange(r, 55296, 57343)) this.encoderError(r); else if (this.inRange(r, 0, 127)) if (null == t) i.push(r); else {
if (!(i.length + 1 < t)) break;
i.push(r);
} else {
var a = 0, s = 0;
if (this.inRange(r, 128, 2047)) {
a = 1;
s = 192;
} else if (this.inRange(r, 2048, 65535)) {
a = 2;
s = 224;
} else if (this.inRange(r, 65536, 1114111)) {
a = 3;
s = 240;
}
if (null == t) {
i.push(this.div(r, Math.pow(64, a)) + s);
for (;a > 0; ) {
var c = this.div(r, Math.pow(64, a - 1));
i.push(128 + c % 64);
a -= 1;
}
} else {
var l = 0;
i.push(this.div(r, Math.pow(64, a)) + s);
l++;
for (;a > 0; ) {
c = this.div(r, Math.pow(64, a - 1));
i.push(128 + c % 64);
a -= 1;
l++;
}
if (i.length > t) {
i.splice(i.length - l, l);
break;
}
}
}
}
if (null != t && i.length < t) for (a = t - i.length; a > 0; ) {
i.push(0);
a--;
}
return new Uint8Array(i);
};
e.prototype.decodeUTF8 = function(e) {
for (var t = 0, n = "", o = null, i = 0, r = 0, a = 0, s = 0; e.length > t; ) {
var c = e[t++];
if (c == this.EOF_byte) o = 0 != r ? this.decoderError(!1) : this.EOF_code_point; else if (0 == r) if (this.inRange(c, 0, 127)) o = c; else {
if (this.inRange(c, 194, 223)) {
r = 1;
s = 128;
i = c - 192;
} else if (this.inRange(c, 224, 239)) {
r = 2;
s = 2048;
i = c - 224;
} else if (this.inRange(c, 240, 244)) {
r = 3;
s = 65536;
i = c - 240;
} else this.decoderError(!1);
i *= Math.pow(64, r);
o = null;
} else if (this.inRange(c, 128, 191)) {
a += 1;
i += (c - 128) * Math.pow(64, r - a);
if (a !== r) o = null; else {
var l = i, u = s;
i = 0;
r = 0;
a = 0;
s = 0;
o = this.inRange(l, u, 1114111) && !this.inRange(l, 55296, 57343) ? l : this.decoderError(!1, c);
}
} else {
i = 0;
r = 0;
a = 0;
s = 0;
t--;
o = this.decoderError(!1, c);
}
if (null !== o && o !== this.EOF_code_point) if (o <= 65535) o > 0 && (n += String.fromCharCode(o)); else {
o -= 65536;
n += String.fromCharCode(55296 + (o >> 10 & 1023));
n += String.fromCharCode(56320 + (1023 & o));
}
}
return n;
};
e.prototype.encoderError = function() {};
e.prototype.decoderError = function(e, t) {
return t || 65533;
};
e.prototype.inRange = function(e, t, n) {
return t <= e && e <= n;
};
e.prototype.div = function(e, t) {
return Math.floor(e / t);
};
e.prototype.stringToCodePoints = function(e) {
for (var t = [], n = 0, o = e.length; n < e.length; ) {
var i = e.charCodeAt(n);
if (this.inRange(i, 55296, 57343)) if (this.inRange(i, 56320, 57343)) t.push(65533); else if (n == o - 1) t.push(65533); else {
var r = e.charCodeAt(n + 1);
if (this.inRange(r, 56320, 57343)) {
var a = 1023 & i, s = 1023 & r;
n += 1;
t.push(65536 + (a << 10) + s);
} else t.push(65533);
} else t.push(i);
n += 1;
}
return t;
};
return e;
}();
n.ByteArray = a;
cc._RF.pop();
}, {} ],
CacheManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b4bfajBspdK6rFm4JM2XHck", "CacheManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CacheManager = void 0;
var o = e("./Resource"), i = e("../../defines/Macros"), r = function() {
function e(e) {
this._caches = new Map();
this.name = i.Macro.UNKNOWN;
this.name = e;
}
e.prototype.get = function(e, t) {
if (this._caches.has(e)) {
var n = this._caches.get(e);
if (t && n && n.isInvalid) {
Log.w("资源加载完成，但已经被释放 , 重新加载资源 : " + e);
this.remove(e);
return null;
}
return this._caches.get(e);
}
return null;
};
e.prototype.set = function(e, t) {
this._caches.set(e, t);
};
e.prototype.remove = function(e) {
return this._caches.delete(e);
};
e.prototype.removeUnuseCaches = function() {
var e = this;
this._caches.forEach(function(t, n) {
if (Array.isArray(t.data)) {
for (var o = !0, i = 0; i < t.data.length; i++) t.data[i] && t.data[i].refCount > 0 && (o = !1);
o && e._caches.delete(n);
} else t.data && t.data.refCount <= 0 && e._caches.delete(n);
});
};
Object.defineProperty(e.prototype, "size", {
get: function() {
return this._caches.size;
},
enumerable: !1,
configurable: !0
});
e.prototype.debug = function() {
this.name;
var e = this._caches, t = [], n = [];
e.forEach(function(e, o) {
var i = {
url: o,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && e.data && !cc.isValid(e.data) ? n.push(i) : t.push(i);
});
if (t.length > 0) {
Log.d("----------- 有效缓存信息 -----------");
Log.d(JSON.stringify(t));
}
if (n.length > 0) {
Log.d("----------- 无效缓存信息 -----------");
Log.d(JSON.stringify(n));
}
};
return e;
}(), a = function() {
this.refCount = 0;
this.url = "";
this.retain = !1;
}, s = function() {
function e() {
this._caches = new Map();
this._spriteFrameCaches = new Map();
this._resMap = new Map();
}
e.prototype.get = function(e) {
return this._caches.has(e) ? this._caches.get(e) : null;
};
e.prototype.getSpriteFrame = function(e) {
if (this._spriteFrameCaches.has(e)) {
var t = this._spriteFrameCaches.get(e);
if (this.get(e)) return t;
this.remove(e);
return null;
}
return null;
};
e.prototype.setSpriteFrame = function(e, t) {
if (t && t instanceof cc.Texture2D) {
var n = this.getSpriteFrame(e);
if (n) return n.data;
var i = new o.Resource.CacheData();
i.data = new cc.SpriteFrame(t);
i.isLoaded = !0;
i.info.url = e;
this._spriteFrameCaches.set(e, i);
return i.data;
}
return null;
};
e.prototype.set = function(e, t) {
t.info.url = e;
this._caches.set(e, t);
};
e.prototype._getCacheInfo = function(e, t) {
void 0 === t && (t = !0);
if (e && e.url && e.url.length > 0) {
if (!this._resMap.has(e.url)) {
if (!t) return null;
var n = new a();
n.url = e.url;
this._resMap.set(e.url, n);
}
return this._resMap.get(e.url);
}
return null;
};
e.prototype.retainAsset = function(e) {
if (e && e.data) {
var t = this._getCacheInfo(e);
if (t) {
t.retain ? e.retain : t.retain = e.retain;
e.data.addRef();
t.refCount++;
t.retain && (t.refCount = 999999);
}
}
};
e.prototype.releaseAsset = function(e) {
if (e && e.data) {
var t = this._getCacheInfo(e, !1);
if (t) {
if (t.retain) return;
t.refCount--;
t.refCount <= 0 && this.remove(t.url);
}
}
};
e.prototype.remove = function(e) {
this._resMap.delete(e);
if (this._spriteFrameCaches.has(e)) {
this._spriteFrameCaches.get(e).data.decRef();
this._spriteFrameCaches.delete(e);
}
var t = this._caches.has(e) ? this._caches.get(e) : null;
if (t && t.data instanceof cc.Asset) {
t.data.decRef();
t.info.data = t.data;
}
return this._caches.delete(e);
};
e.prototype.debug = function() {
var e = this._spriteFrameCaches, t = this._caches, n = this._resMap;
Log.d("---- 远程加载资源缓存信息 ----");
var o = [], i = [];
e.forEach(function(e, t) {
var n = {
url: t,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && (e.data && !cc.isValid(e.data) || !e.data) ? i.push(n) : o.push(n);
});
if (o.length > 0) {
Log.d("----------------有效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(o));
}
if (i.length > 0) {
Log.d("----------------无效 spriteFrame 缓存信息------------------");
Log.d(JSON.stringify(i));
}
o = [];
i = [];
t.forEach(function(e, t) {
var n = {
url: t,
data: {
url: e.info.url,
isLoaded: e.isLoaded,
isValid: cc.isValid(e.data),
assetType: cc.js.getClassName(e.info.type),
data: e.data ? cc.js.getClassName(e.data) : null,
status: e.status
}
};
e.isLoaded && e.data && !cc.isValid(e.data) ? i.push(n) : o.push(n);
});
if (o.length > 0) {
Log.d("----------------有效缓存信息------------------");
Log.d(JSON.stringify(o));
}
if (i.length > 0) {
Log.d("----------------无效缓存信息------------------");
Log.d(JSON.stringify(i));
}
if (n.size > 0) {
Log.d("----------------当前资源引用计数信息------------------");
o = [];
n.forEach(function(e, t) {
var n = {
url: t,
data: {
refCount: e.refCount,
url: e.url,
retain: e.retain
}
};
o.push(n);
});
Log.d(JSON.stringify(o));
}
};
return e;
}(), c = function() {
function e() {
this.isResident = !0;
this.module = null;
this._bundles = new Map();
this._remoteCaches = new s();
}
Object.defineProperty(e.prototype, "remoteCaches", {
get: function() {
return this._remoteCaches;
},
enumerable: !1,
configurable: !0
});
e.prototype.getBundleName = function(e) {
return App.bundleManager.getBundleName(e);
};
e.prototype.get = function(e, t, n) {
void 0 === n && (n = !0);
var o = this.getBundleName(e);
return o && this._bundles.has(o) ? this._bundles.get(o).get(t, n) : null;
};
e.prototype.set = function(e, t, n) {
var o = this.getBundleName(e);
if (o) if (this._bundles.has(o)) this._bundles.get(o).set(t, n); else {
var i = new r(o);
i.set(t, n);
this._bundles.set(o, i);
}
};
e.prototype.remove = function(e, t) {
var n = this.getBundleName(e);
return !(!n || !this._bundles.has(n)) && this._bundles.get(n).remove(t);
};
e.prototype.removeWithInfo = function(e) {
if (e) if (e.data) if (Array.isArray(e.data)) {
for (var t = !0, n = 0; n < e.data.length; n++) {
e.data[n].decRef();
0 != e.data[n].refCount && (t = !1);
}
if (t) {
this.remove(e.bundle, e.url);
return !0;
}
} else {
e.data.decRef();
if (0 == e.data.refCount) {
this.remove(e.bundle, e.url);
return !0;
}
} else Log.e("info.data is null , bundle : " + e.bundle + " url : " + e.url); else Log.e("info is null");
return !1;
};
e.prototype.removeBundle = function(e) {
var t = this.getBundleName(e);
t && this._bundles.has(t) && this._bundles.delete(t);
};
e.prototype._removeUnuseCaches = function() {
this._bundles.forEach(function(e) {
e && e.removeUnuseCaches();
});
};
e.prototype._getGetCacheByAsyncArgs = function() {
return arguments.length < 3 ? null : "string" != typeof arguments[0] ? null : cc.js.isChildClassOf(arguments[1], cc.Asset) ? {
url: arguments[0],
type: arguments[1],
bundle: arguments[2]
} : null;
};
e.prototype.getCache = function() {
var e = arguments, t = this;
return new Promise(function(n) {
var o = t._getGetCacheByAsyncArgs.apply(t, e);
if (o) {
var i = t.get(o.bundle, o.url);
i ? i.isLoaded ? o.type ? i.data instanceof o.type ? n(i.data) : n(null) : n(i.data) : i.getCb.push(n) : n(null);
} else n(null);
});
};
e.prototype.getCacheByAsync = function() {
var e = this, t = this, n = this._getGetCacheByAsyncArgs.apply(this, arguments);
return new Promise(function(o) {
n ? t.getCache(n.url, n.type, n.bundle).then(function(t) {
n = n;
t && t instanceof n.type ? o(t) : App.asset.load(n.bundle, n.url, n.type, null, function(t) {
n = n;
if (t && t.data && t.data instanceof n.type) o(t.data); else {
App.SingleGame || Log.e(e.module + "加载失败 : " + n.url);
o(null);
}
});
}) : o(null);
});
};
e.prototype.getSpriteFrameByAsync = function(e, t, n, i, r) {
var a = this;
return new Promise(function(s) {
var c = 0, l = function(u) {
a.getCacheByAsync(u, cc.SpriteAtlas, r).then(function(a) {
var p = new o.Resource.Info();
p.url = u;
p.type = cc.SpriteAtlas;
p.data = a;
p.bundle = r;
i(n, p);
if (a) {
var d = a.getSpriteFrame(t);
if (d) if (cc.isValid(d)) s({
url: u,
spriteFrame: d
}); else {
Log.e("精灵帧被释放，释放当前无法的图集资源 url ：" + u + " key : " + t);
App.asset.releaseAsset(p);
s({
url: u,
spriteFrame: null,
isTryReload: !0
});
} else ++c >= e.length ? s({
url: u,
spriteFrame: null
}) : l(e[c]);
} else s({
url: u,
spriteFrame: null
});
});
};
l(e[c]);
});
};
e.prototype.debug = function() {
this._bundles.forEach(function(e) {
e.debug();
});
this.remoteCaches.debug();
};
e.module = "【缓存管理器】";
return e;
}();
n.CacheManager = c;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Resource": "Resource"
} ],
CanvasHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5210dzFU1lPr5pMvEIr/xA/", "CanvasHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CanvasHelper = void 0;
var o = function() {
function e() {
this.module = null;
this.downloadMime = "image/octet-stream";
}
Object.defineProperty(e.prototype, "support", {
get: function() {
var e = document.createElement("canvas"), t = e.getContext("2d");
return {
canvas: !!t,
imageData: !!(null == t ? void 0 : t.getImageData),
dataURL: !!e.toDataURL,
btoa: !!window.btoa
};
},
enumerable: !1,
configurable: !0
});
e.prototype.scaleCanvas = function(e, t, n) {
var o = e.width, i = e.height;
null == t && (t = o);
null == n && (n = i);
var r = document.createElement("canvas"), a = r.getContext("2d");
r.width = t;
r.height = n;
null == a || a.drawImage(e, 0, 0, o, i, 0, 0, t, n);
return r;
};
e.prototype.getDataURL = function(e, t, n, o) {
return (e = this.scaleCanvas(e, n, o)).toDataURL(t);
};
e.prototype.saveFile = function(e, t, n) {
this.fileDownload(e, t, n);
};
e.prototype.genImage = function(e) {
var t = document.createElement("img");
t.src = e;
return t;
};
e.prototype.fixType = function(e) {
return "image/" + (e = e.toLowerCase().replace(/jpg/i, "jpeg")).match(/png|jpeg|bmp|gif/)[0];
};
e.prototype.encodeData = function(e) {
if (!window.btoa) throw "btoa undefined";
var t = "";
if ("string" == typeof e) t = e; else for (var n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
return btoa(t);
};
e.prototype.getImageData = function(e) {
var t, n = e.width, o = e.height;
return null === (t = e.getContext("2d")) || void 0 === t ? void 0 : t.getImageData(0, 0, n, o);
};
e.prototype.makeURL = function(e, t) {
return "data:" + t + ";base64," + e;
};
e.prototype.genBitmapImage = function(e) {
var t = e.width, n = e.height, o = t * n * 3, i = o + 54, r = [ 66, 77, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], a = [ 40, 0, 0, 0, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], s = (4 - 3 * t % 4) % 4, c = e.data, l = "", u = t << 2, p = n, d = String.fromCharCode;
do {
for (var h = u * (p - 1), f = "", _ = 0; _ < t; _++) {
var g = _ << 2;
f += d(c[h + g + 2]) + d(c[h + g + 1]) + d(c[h + g]);
}
for (var y = 0; y < s; y++) f += String.fromCharCode(0);
l += f;
} while (--p);
return this.encodeData(r.concat(a)) + this.encodeData(l);
};
e.prototype.savaAsImage = function(e, t, n, o, i) {
void 0 === o && (o = "png");
void 0 === i && (i = "defaultpng");
var r = null;
if (this.support.canvas && this.support.dataURL) {
if ("string" == typeof e) {
var a = document.getElementById(e);
a && (r = a);
} else r = e;
if (!r) return;
o = this.fixType(o);
if (/bmp/.test(o)) {
var s = this.getImageData(this.scaleCanvas(r, t, n));
if (s) {
var c = this.genBitmapImage(s);
this.saveFile(this.makeURL(c, this.downloadMime), o.replace("image/", ""), i);
}
} else {
r = this.scaleCanvas(r, t, n);
var l = this;
r.toBlob(function(e) {
var t = URL.createObjectURL(e);
l.saveFile(t, o.replace("image/", ""), i);
}, o, 1);
}
}
};
e.prototype.convertToImage = function(e, t, n, o) {
void 0 === o && (o = "png");
var i = null;
if (this.support.canvas && this.support.dataURL) {
if ("string" == typeof e) {
var r = document.getElementById(e);
r && (i = r);
} else i = e;
if (!i) return;
if (/bmp/.test(o)) {
var a = this.getImageData(this.scaleCanvas(i, t, n)), s = this.genBitmapImage(a);
return this.genImage(this.makeURL(s, "image/bmp"));
}
s = this.getDataURL(i, o, t, n);
return this.genImage(s);
}
};
e.prototype.fileDownload = function(e, t, n) {
var o = document.createElement("a");
o.style.display = "none";
o.href = e;
o.download = n + "." + t;
document.body.appendChild(o);
o.click();
document.body.removeChild(o);
};
e.prototype.saveAsPNG = function(e, t, n) {
return this.savaAsImage(e, t, n, "png", "defaultpng");
};
e.prototype.saveAsJPEG = function(e, t, n) {
return this.savaAsImage(e, t, n, "jpeg", "defaultjpg");
};
e.prototype.saveAsGIF = function(e, t, n) {
return this.savaAsImage(e, t, n, "gif", "defaultgif");
};
e.prototype.saveAsBMP = function(e, t, n) {
return this.savaAsImage(e, t, n, "bmp", "defaultbmp");
};
e.prototype.convertToPNG = function(e, t, n) {
return this.convertToImage(e, t, n, "png");
};
e.prototype.convertToJPEG = function(e, t, n) {
return this.convertToImage(e, t, n, "jpeg");
};
e.prototype.convertToGIF = function(e, t, n) {
return this.convertToImage(e, t, n, "gif");
};
e.prototype.convertToBMP = function(e, t, n) {
return this.convertToImage(e, t, n, "bmp");
};
e.module = "【CanvasHelper】";
return e;
}();
n.CanvasHelper = o;
cc._RF.pop();
}, {} ],
ChooseLevelModel_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "897eajH43xJr5MNFG5WzLF6", "ChooseLevelModel_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_CanClick = null;
t.node_Lock = null;
t.label_Level = null;
t.sprite_Icon = null;
t.isCanPlay = !1;
t.curLevel = 1;
t.callBack_Btn = null;
t.tween_Main = null;
return t;
}
t.prototype.Init = function(e, t, n, o, i) {
this.curLevel = e;
this.isCanPlay = n;
this.callBack_Btn = i;
this.ClearTween();
this.sprite_Icon.spriteFrame = t;
this.label_Level.string = "" + e;
this.node_CanClick.active = n;
this.node_Lock.active = !n;
this.node_Main.scale = 0;
this.tween_Main = cc.tween(this.node_Main).delay(o).to(.3, {
scale: 1
}).start();
};
t.prototype.ResetState = function(e) {
this.isCanPlay = e;
this.node_Lock.active = !e;
this.node_CanClick.active = e;
};
t.prototype.ButtonClick_Choose = function() {
this.callBack_Btn && this.callBack_Btn(this.curLevel);
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
};
r([ c(cc.Node) ], t.prototype, "node_Main", void 0);
r([ c(cc.Node) ], t.prototype, "node_CanClick", void 0);
r([ c(cc.Node) ], t.prototype, "node_Lock", void 0);
r([ c(cc.Label) ], t.prototype, "label_Level", void 0);
r([ c(cc.Sprite) ], t.prototype, "sprite_Icon", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
CmdConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7ecb37+gFCb4nV3AYSD2s7", "CmdConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
LabaTCP: {
SERVER_GAME_HEART: -1,
SERVER_GAME_LOGIN: 6e3,
Laba_UpDate_User: -1,
Laba_LOGIN_REQ: 6e3,
Laba_CONNENCT_SUCC: 4001,
SERVER_NOTIFY_TABLE_DISBAND: 6666,
Laba_GM_ROOM_INFO_RETURN: 8812,
Laba_SM_ROOM_INFO_RETURN: 8813,
Laba_OutGame: 4002,
Laba_SERVER_SYSTEM_MESSAGE: 9001,
Laba_Server_BroadCast: 1e4,
SERVER_FORCED_OFFLINE: 9003,
SERVER_TABLE_INFO_CHANGE: 8903,
SERVER_NOTIFY_REFLUSH_GAMEHOST: 9005,
SERVER_NOTIFY_GAME_MODE_INFO: 9006,
SERVER_NOTICE_USER_CHANGE: 8904,
CLINET_NOTICE_USER_CHANGE: 8905,
CLINET_NOTICE_KYC_CHANGE: 9008,
CLIENT_HEART_PING: 8888,
CLINET__SEND_CHAT_MSG: 8906,
SERVER_SEND_CHAT_MSG: 8907
},
CallbreakTCP: {
SERVER_LOGIN_Req: 6e3,
SERVER_LOGIN_SUCC_UC: 6001,
SERVER_TABLE_INFO_UC: 6002,
CLIENT_ROOM_INFO_REQ: 6033,
SERVER_LOGIN_SUCC_BC: 6003,
SERVER_LOGOUT_SUCC_BC: 6004,
CLIENT_LOGOUT_REQ: 6005,
CLIENT_SWITCH_ROOM: 6021,
CLIENT_READY_REQ: 6022,
GF_CLIENT_CHAT_REQ: 6025,
GF_CLIENT_FACE_REQ: 6031,
GF_CLIENT_EMOTION_REQ: 6028,
SERVER_CHAT_BC: 6027,
SERVER_FACE_BC: 6032,
SERVER_EMOTION_BC: 6030,
SERVER_GAME_HEART: -1,
SERVER_GAME_WILL_START_BC: 6006,
SERVER_GAME_START_BC: 6007,
SERVER_GAME_CARDS_BC: 6008,
SERVER_NOTIFY_SCORE_BC: 6009,
CLIENT_SCORE_REQUEST: 6010,
SERVER_SCORE_RETURN: 6011,
SERVER_SCORE_RETURN_BC: 6012,
SERVER_NOTIFY_OUT_CARD_BC: 6013,
SERVER_NOTIFY_OUT_CARD: 6014,
CLIENT_OUT_CARD_REQUEST: 6015,
SERVER_OUT_CARD_RETURN: 6016,
SERVER_OUT_CARD_RETURN_BC: 6017,
SERVER_GET_SCORE_BC: 6018,
SERVER_GAME_ROUND_BC: 6019
},
TeenTCP: {
SERVER_LOGIN_Req: 6e3,
SERVER_LOGIN_SUCC_UC: 6001,
CLIENT_ROOM_INFO_REQ: 1010,
GF_CLIENT_CHAT_REQ: 1005,
GF_CLIENT_FACE_REQ: 1006,
GF_CLIENT_EMOTION_REQ: 1011,
SERVER_GAME_HEART: -1,
SERVER_LOGIN_SUCC_BC: 4001,
SERVER_LOGIN_ERR_UC: 4002,
SERVER_LOGOUT_SUCC_BC: 4004,
CLIENT_LOGOUT_REQ: 1002,
SERVER_TABLE_INFO_UC: 4006,
SERVER_GAME_START_BC: 4009,
SERVER_NEXT_BET_BC: 4010,
SERVER_BET_SUCC_BC: 4011,
GM_NOTIFY_BUY_REQUEST: 5026,
SERVER_BET_SUCC_UC: 4012,
SERVER_GAME_END_BC: 4014,
SERVER_CHAT_BC: 4016,
SERVER_FACE_BC: 4017,
SERVER_EMOTION_BC: 4021,
SM_PRE_SLIDE_SHOW_RETURN: 5021,
CLIENT_BET_REQ: 1004,
SM_SLIDE_SHOW_RETURN: 5020,
SM_AJECT_SLIDE_SHOW_RETURN: 5022,
SM_AGREE_SLIDE_SHOW_RETURN: 5029,
SM_ALL_SHOW_RETURN: 5023,
SM_SEE_FLAG_RETURN: 5024,
SM_SLIDE_BET_BC: 5025,
SM_BUY_BC_RETURN: 5027,
SM_SHOW_OTHER_CARD: 5028,
SERVER_SHOWCARD_INFORM: 5002,
CLIENT_SWITCH_ROOM: 1007,
SERVER_START_GAME: 5030,
CLIENT_START_GAME_REQ: 5031,
SERVER_START_GAME_RETURN: 5032,
SERVER_ALERT_RETURN: 5044,
CLIENT_READY_REQ: 5006,
SERVER_SHOW_INFO: 6030,
SM_BUY_BC_START: 5035
},
AbTCP: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_BC_RETURN: 4002,
SM_LOGIN_SUCC_BC_RETURN: 4003,
SM_LOGOUT_SUCC_BC_RETURN: 4004,
GM_LOGINOUT_REQUEST: 4005,
GM_CHANGE_REQUEST: 4006,
SM_PRE_START_BC_RETURN: 4007,
SM_START_BC_RETURN: 4008,
SM_BACK_CARD_BC_RETURN: 4009,
SM_NOTIFY_STATE_BC_RETURN: 4010,
GM_PLAYER_BET_REQUEST: 4011,
SM_PLAYER_BET_RETURN: 4012,
SM_PLAYER_BET_BC_RETURN: 4013,
SM_GAME_END_BC_INFORM: 4014,
GF_CLIENT_CHAT_REQ: 4015,
SM_CHAT_RETURN: 4016,
SM_CHAT_BC_RETURN: 4017,
GF_CLIENT_EMOTION_REQ: 4018,
SM_EXPRESSION_RETURN: 4019,
SM_EXPRESSION_BC_RETURN: 4020,
GF_CLIENT_FACE_REQ: 4021,
SM_NORMALEXPRESION_BC_RETURN: 4022,
SM_NOTIFY_PLAYER_STATE_BC_RETURN: 4023,
SM_TABLE_INFO_RETURN: 4024,
GM_CANCEL_BET_REQUEST: 4025,
SM_CANCEL_BET_RETURN: 4026,
SM_CANCEL_BET_BC_RETURN: 4027,
GM_CHANGE_BET_REQUEST: 4028,
SM_CHANGE_BET_RETURN: 4029
},
SevenUpTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
SM_ONLINE_PLAYERS_COUNT: 6029
},
RummyTcp: {
SERVER_GAME_HEART: -1,
SERVER_CREATE_REQ: 5e3,
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_BC_RETURN: 7002,
SM_LOGIN_SUCC_BC_RETURN: 7003,
GM_LOGINOUT_REQUEST: 7004,
SM_LOGOUT_SUCC_BC_RETURN: 7005,
GM_CHANGE_REQUEST: 7006,
SM_NOTIFY_GAME_START_BC_RETURN: 7008,
SM_START_BC_RETURN: 7009,
GM_SELF_CARDS_REQUEST: 7010,
SM_SELF_CARDS_RETURN: 7011,
GM_GONG_CARDS_REQUEST: 7012,
SM_GONG_CARDS_RETURN: 7013,
SM_NEXT_DEAL_BC_RETURN: 7014,
GM_DROP_CARD_REQUEST: 7015,
SM_DROP_CARD_RETURN: 7016,
SM_DROP_CARD_BC_RETURN: 7017,
GM_PICK_CARD_REQUEST: 7018,
SM_PICK_CARD_RETRUN: 7019,
SM_PICK_CARD_BC_RETRUN: 7020,
GM_DISCARD_CARD_REQUEST: 7021,
SM_DISCARD_CARD_RETURN: 7022,
SM_DISCARD_CARD_BC_RETURN: 7023,
GM_MOVE_CARD_REQUEST: 7024,
SM_MOVE_CARD_REQUEST: 7025,
GM_GROUP_CARD_REQUEST: 7026,
SM_GROUP_CARD_REQUEST: 7027,
GM_DECARE_CARD_REQUEST: 7028,
SM_DECARE_CARD_RETURN: 7029,
SM_DECARE_CARD_BC_RETURN: 7030,
GM_FINISH_REQUEST: 7031,
SM_FINISH_RETURN: 7032,
SM_GAME_END_BC_INFORM: 7033,
GM_LAST_CARD_REQUEST: 7034,
SM_LAST_CARD_RETURN: 7035,
GF_CLIENT_CHAT_REQ: 7036,
SM_CHAT_RETURN: 7037,
SM_CHAT_BC_RETURN: 7038,
GF_CLIENT_EMOTION_REQ: 7039,
SM_EXPRESSION_RETURN: 7040,
SM_EXPRESSION_BC_RETURN: 7041,
GF_CLIENT_FACE_REQ: 7042,
SM_NORMALEXPRESION_REQUEST: 7043,
SM_NORMALEXPRESION_BC_RETURN: 7044,
SM_LEVEL_CD_BC_RETURN: 7045,
GM_FLUSH_TABLEINFO_REQUEST: 7046,
GM_DECARE_CARD_CHECK_RETURN: 7047,
SM_DECARE_CARD_CHECK_RETURN: 7048,
GM_GAME_SHOW_INFO: 7051,
SM_GAME_SHOW_INFO: 7052,
GM_ADD_CARD_REQUEST: 7053,
SM_ADD_CARD_RETURN: 7054,
SM_NOTIFY_MONEY_CHANGE_BC_RETURN: 7056,
SERVER_ALERT_RETURN: 5044,
GM_NOTIFY_BUY_REQUEST: 5026,
SM_NOTIFY_DRAW_CARDS_BC_RETURN: 7059,
SM_FINISH_RETURN_BC: 7060,
SM_GAME_SHOW_SWITCH: 7061,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GM_OUT_CARD_RECORD_REQ: 7057,
SM_OUT_CARD_RECORD_RETURN: 7058
},
InbetweenTCP: {
GM_LOGIN_REQUEST: 7e3,
SM_LOGIN_RETURN: 7001,
SM_LOGIN_SUCC_BC_RETURN: 7002,
GM_LOGINOUT_REQUEST: 7003,
SM_LOGOUT_SUCC_BC_RETURN: 7004,
SM_TABLEINFO_BC_RETURN: 7005,
GM_CHANGE_REQUEST: 7006,
SM_CHANGE_SUCC_BC_RETURN: 7007,
SM_NOTIFY_GAME_START_BC_RETURN: 7008,
SM_START_BC_RETURN: 7009,
SM_NOTIFY_DRAW_CARDS_BC_RETURN: 7010,
SM_SELF_CARDS_RETURN: 7011,
SM_NEXT_DEAL_BC_RETURN: 7012,
GM_BET_REQUEST: 7013,
SM_BET_RETURN: 7014,
SM_BET_BC_RETURN: 7015,
GM_FOLD_CARD_REQUEST: 7016,
SM_FOLD_CARD_RETURN: 7017,
SM_FOLD_CARD_BC_RETURN: 7018,
GF_CLIENT_CHAT_REQ: 7019,
SM_CHAT_RETURN: 7020,
SM_CHAT_BC_RETURN: 7021,
GF_CLIENT_EMOTION_REQ: 7022,
SM_EXPRESSION_RETURN: 7023,
SM_EXPRESSION_BC_RETURN: 7024,
GF_CLIENT_FACE_REQ: 7025,
SM_NORMALEXPRESION_REQUEST: 7026,
SM_NORMALEXPRESION_BC_RETURN: 7027,
CLIENT_ROOM_INFO_REQ: 7028,
SM_NOTIFY_GAME_SETTLE: 7029,
SM_NOTIFY_MONEY_CHANGE_BC_RETURN: 7030,
SERVER_ALERT_RETURN: 5044,
GM_NOTIFY_BUY_REQUEST: 5026
},
RedBlackTCP: {
RB_CLIENT_LOGIN_REQUEST: 6e3,
RB_CLIENT_LOGINOUT_REQUEST: 6004,
RB_CLIENT_BET_REQUEST: 6006,
RB_CLIENT_BET_AGIN_REQUEST: 6010,
RB_CLIENT_AUTO_REQUEST: 6012,
RB_CLIENT_GAME_INFO_REQUEST: 6015,
RB_CLIENT_GAME_RECORD_REQUEST: 6016,
RB_SERVER_LOGIN_RETURN: 6001,
RB_SERVER_GAME_INFO_RETURN: 6002,
RB_SERVER_LOGOUT_SUCC_RETURN: 6003,
RB_SERVER_NOTIFY_ROLL_RESULT: 6005,
RB_SERVER_BET_RETURN: 6007,
RB_SERVER_PER_SECOND_BET_INFO: 6008,
RB_SERVER_NOTIFY_STATE_CHANGE: 6009,
RB_SERVER_BET_AGIN_RETURN: 6011,
RB_SERVER_AUTO_RETURN: 6013,
RB_SERVER_TRENDINFO_RETURN: 6014,
RB_SERVER_GAME_RECORD_RETURN: 6017,
RB_SERVER_GAME_SCROLLER: 6018,
RB_SERVER_GAME_RED: 6019,
RB_SERVER_GAME_WINNER_REQUEST: 6021,
RB_CLIENT_EXIT_GAME_REQUEST: 6022
},
SlotMachineTCP: {
RB_CLIENT_LOGIN_REQUEST: 6e3,
RB_CLIENT_LOGINOUT_REQUEST: 7006,
RB_CLIENT_BET_REQUEST: 7012,
RB_CLIENT_BET_AUTO_REQUEST: 7037,
RB_CLIENT_BET_CHANGE_REQUEST: 7017,
RB_CLIENT_GAME_INFO_REQUEST: 7028,
RB_CLIENT_GAME_RECORD_REQUEST: 7010,
RB_SERVER_LOGIN_RETURN: 6001,
RB_SERVER_GAME_INFO_RETURN: 7002,
RB_SERVER_LOGOUT_SUCC_RETURN: 7005,
RB_SERVER_BET_RETURN: 7013,
RB_SERVER_AUTO_BET_RETURN: 7038,
RB_SERVER_BET_CHANGE_RETURN: 7018,
RB_SERVER_GAME_RECORD_RETURN: 7011,
RB_SERVER_GAME_RED: 7034
},
SixDiceTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033
},
GuessNumberTcp: {
GF_RollDice_GM_LOGIN_REQUEST: 6e3,
GF_RollDice_SM_LOGIN_RETURN: 6001,
GF_RollDice_SM_TABLEINFO_RETURN: 6002,
GGF_RollDice_SM_LOGOUT_SUCC_BC_RETURN: 6005,
GF_RollDice_GM_LOGINOUT_REQUEST: 6006,
GF_RollDice_SM_NOTIFY_ROLL_RESULT: 6007,
GF_RollDice_GM_HISTORY_RECORD_REQUSET: 6010,
GF_RollDice_SM_HISTORY_RECORD_RETURN: 6011,
GF_RollDice_GM_BET_REQUEST: 6012,
GF_RollDice_SM_BET_RETURN: 6013,
GF_RollDice_SM_BET_BC: 6014,
GF_RollDice_SM_PER_SECOND_BET_INFO: 6015,
GF_RollDice_SM_NOTIFY_BET: 6016,
GF_RollDice_GM_NOTIFY_BET_CHANGE: 6017,
GF_RollDice_SM_BET_CHANGE_RETURN: 6018,
GF_RollDice_GM_SIT_DOWN_REQUEST: 6019,
GF_RollDice_SM_SIT_DOWN_RETURN: 6020,
GF_RollDice_SM_SIT_DOWN_BC: 6021,
GF_RollDice_GM_STAND_UP_REQUEST: 6022,
GF_RollDice_SM_STAND_UP_RETURN: 6023,
GF_RollDice_SM_STAND_UP_BC: 6024,
GF_RollDice_SM_NOTIFY_COMMING_REST: 6025,
GF_RollDice_GM_PLAYERS_INFO_REQUEST: 6026,
GF_RollDice_SM_PLAYERS_INFO_RETURN: 6027,
GF_RollDice_GM_REQUEST_TABLE_INFO: 6028,
GF_RollDice_SERVER_CHAT_BC: 6040,
GF_RollDice_SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
GF_RollDice_SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SM_ONLINE_PLAYERS_COUNT: 6029
},
CommonRoomTCP: {
SERVER_VENHU_GUIDE: 9002,
COMMON_HEARTBEAT_REQ: 8888
},
BrpattiTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1,
GM_GET_GAME_RECORD: 6037,
SM_GET_GAME_RECORD: 6038,
GM_GET_BIG_WIN_RECORD: 6050,
SM_GET_BIG_WIN_RECORD: 6051,
GM_GET_JACKPOT_RECORD: 6052,
SM_GET_JACKPOT_RECORD: 6053
},
BrabTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_SEN_BASE_CARD: 6048,
SERVER_SEN_RESULT_CARD: 6049,
SERVER_GAME_HEART: -1
},
BigBattleTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_REQUEST_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
SERVER_GAME_HEART: -1
},
PaomaTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_RACING_START: 6007,
SM_NOTIFY_RACING_END: 6008,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036
},
BaccaratTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_GET_GOLD_RECORD_REQUEST: 6030,
SM_GOLD_RECORD_RETURN: 6031,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_SEN_BASE_CARD: 6048,
SERVER_SEN_RESULT_CARD: 6049,
SERVER_NOTIFY_CLEAN_LOG: 6050,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036
},
VideoPokerTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_GAME_START_BC: 6003,
SM_LOGIN_SUCC_BC_RETURN: 6004,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
GM_DEAL_REQUEST: 6008,
SM_DEAL_RESPOND: 6009,
GM_DRAW_REQUEST: 6010,
SM_DRAW_RESPOND: 6011,
GM_DOUBLE_REQUEST: 6012,
SM_DOUBLE_RESPOND: 6013,
SM_NOTIFY_DOUBLE_OPEN: 6014,
SM_DOUBLE_OPEN_RESPOND: 6015,
GM_JACK_DOUBlE_REQUEST: 6016,
SM_JACK_DOUBLE_OPEN_RESPOND: 6017
},
CrashTcp: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_RACING_START: 6007,
SM_NOTIFY_RACING_END: 6008,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_BET_BC: 6014,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
GM_NOTIFY_BET_CHANGE: 6017,
SM_BET_CHANGE_RETURN: 6018,
GM_SIT_DOWN_REQUEST: 6019,
SM_SIT_DOWN_RETURN: 6020,
SM_SIT_DOWN_BC: 6021,
GM_STAND_UP_REQUEST: 6022,
SM_STAND_UP_RETURN: 6023,
SM_STAND_UP_BC: 6024,
SM_NOTIFY_COMMING_REST: 6025,
GM_PLAYERS_INFO_REQUEST: 6026,
SM_PLAYERS_INFO_RETURN: 6027,
GM_GET_TABLE_INFO: 6028,
SM_ONLINE_PLAYERS_COUNT: 6029,
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SM_RACING_BC: 6034,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
CLIENT_CHAT_REQ: 6042,
CLIENT_FACE_REQ: 6043,
SERVER_UPDATE_INFO_BC: 6044,
CLIENT_INFO_REQ: 6045,
SERVER_EMOTION_BC: 6046,
CLIENT_EMOTION_REQ: 6047,
SERVER_ONLINECOUNT_REQUEST: 6035,
SERVER_ONLINECOUNT_RETURN: 6036,
SM_CRASHOUT_REQUEST: 6037,
SM_CRASHOUT_RETURN: 6038,
SM_CRASHOUT_BC: 6039,
SM_ROOM_CLOSE: 6050
},
Mines: {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLE_INFO_BC_RETURN: 6002,
SM_GAME_START_BC: 6003,
SM_LOGIN_SUCC_BC_RETURN: 6004,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_GAME_END: 6007,
GM_OPEN_REQUEST: 6008,
SM_OPEN_RESPOND: 6009,
GM_DRAW_REQUEST: 6010,
SM_DRAW_RESPOND: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
GM_GET_TABLE_INFO: 6028,
SM_ROOM_CLOSE: 6050
}
};
cc._RF.pop();
}, {} ],
CmdDefines: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b06838e7phP8ryXKzNFC0BC", "CmdDefines");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SUB_CMD_SYS = n.MainCmd = void 0;
n.MainCmd = {
CMD_SYS: 1,
CMD_GAME: 2,
CMD_LOBBY: 1e4,
CMD_PAY: 4,
CMD_CHAT: 5
};
n.SUB_CMD_SYS = {
CMD_SYS_HEART: 8888,
CMD_Game_Time_Out: 99
};
cc._RF.pop();
}, {} ],
CmmEntry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7f398QeqRxGm4NRGJcpNW5h", "CmmEntry");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CmmEntry = void 0;
var r = e("../../framework/core/entry/EntryDelegate"), a = e("../../framework/defines/Macros"), s = e("../../framework/utils/Singleton"), c = e("./BundleUpdateHandlerImpl"), l = e("./MainUpdateHandlerImpl"), u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onEnterGameView = function(t, n) {
App.stageData.where = t.bundle;
e.prototype.onEnterGameView.call(this, t, n);
};
t.prototype.getEntryConfig = function(e) {
var t = App.stageData.getEntry(e);
if (t) {
var n = App.updateManager.getItem(t);
e == a.Macro.BUNDLE_RESOURCES ? n.handler = s.Singleton.instance.get(l.MainUpdateHandlerImpl) : n.handler = s.Singleton.instance.get(c.BundleUpdateHandlerImpl);
return n;
}
Log.e("未找到入口配置信息" + e);
return null;
};
t.prototype.getPersistBundle = function() {
return [ a.Macro.BUNDLE_RESOURCES ];
};
return t;
}(r.EntryDelegate);
n.CmmEntry = u;
cc._RF.pop();
}, {
"../../framework/core/entry/EntryDelegate": "EntryDelegate",
"../../framework/defines/Macros": "Macros",
"../../framework/utils/Singleton": "Singleton",
"./BundleUpdateHandlerImpl": "BundleUpdateHandlerImpl",
"./MainUpdateHandlerImpl": "MainUpdateHandlerImpl"
} ],
CmmUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "34b7aySWwlFtbKsOlMK4TuQ", "CmmUtils");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.director = n.display = n.CmmUtils = void 0;
var r = e("../../framework/defines/Macros"), a = e("../../framework/utils/Utils"), s = e("../../sdk/AppInfo"), c = e("../../sdk/GameNativeConfig"), l = e("../../sdk/SdkManager"), u = e("../config/Config"), p = e("../config/ConstString"), d = e("../config/GlobalVar"), h = e("../config/User"), f = e("../event/CommonEvent"), _ = e("./UIUtils"), g = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.getUpRoot = function() {
t.upRootNode || (t.upRootNode = cc.find("Canvas/uiRoot/upRoot"));
return t.upRootNode;
};
Object.defineProperty(t, "msec", {
get: function() {
return new Date().getTime();
},
enumerable: !1,
configurable: !0
});
t.string_format_args = function(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
for (var o = 0; o < t.length; o++) e = e.replace(RegExp("\\{" + o + "\\}", "ig"), t[o]);
return e;
};
Object.defineProperty(t, "day", {
get: function() {
return new Date().getDay();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "sec", {
get: function() {
return Math.floor(this.msec / 1e3);
},
enumerable: !1,
configurable: !0
});
t.Since = function(e) {
return this.msec - e;
};
t.NumberAddCurrencyString = function(e) {
return e + "";
};
t.NumberForceAddCurrencyString = function(e) {
return d.GlobalVar.money_symbol + e;
};
t.NumberToKString = function(e) {
return e < 1e3 ? t.saveDecimal(2, e.toString()) : t.returnNumericalForNewUnit(e, 1e3, "K", 2, !1);
};
t.NumberToMString = function(e) {
return e < 1e3 ? t.saveDecimal(2, e.toString()) : e < 1e6 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2, !1) : t.returnNumericalForNewUnit(e, 1e6, "M", 2, !1);
};
t.NumberToBString = function(e, n) {
e || (e = 0);
return e < 1e3 ? t.saveDecimal(2, e.toString()) : e < 1e6 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2, n) : e < 1e9 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2, n) : t.returnNumericalForNewUnit(e, 1e9, "B", 2, n);
};
t.NumberToTableGmaeBString = function(e, n) {
return e < 1e3 ? t.saveDecimal(0, e.toString()) : e < 1e6 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2, n) : e < 1e9 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2, n) : t.returnNumericalForNewUnit(e, 1e9, "B", 2, n);
};
t.NumberToGameString = function(e, n) {
void 0 === n && (n = 0);
return 2 == d.GlobalVar.countryCode ? e < 1e5 ? t.saveDecimal(n, e.toString()) : e < 1e7 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2) : e < 1e10 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2) : t.returnNumericalForNewUnit(e, 1e9, "B", 2) : e < 1e7 ? t.saveDecimal(n, e.toString()) : e < 1e9 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2) : e < 1e12 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2) : t.returnNumericalForNewUnit(e, 1e9, "B", 2);
};
t.NumberToGameStringHavePoint = function(e) {
return 2 == d.GlobalVar.countryCode ? e < 1e5 ? t.saveDecimal(0, e.toString()) : e < 1e7 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2) : e < 1e10 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2) : t.returnNumericalForNewUnit(e, 1e9, "B", 2) : e < 1e7 ? t.saveDecimal(2, e.toString()) : e < 1e9 ? t.returnNumericalForNewUnit(e, 1e3, "K", 2) : e < 1e12 ? t.returnNumericalForNewUnit(e, 1e6, "M", 2) : t.returnNumericalForNewUnit(e, 1e9, "B", 2);
};
t.NumberToHallString = function(e, n, o) {
e || (e = 0);
return 2 == d.GlobalVar.countryCode ? o ? this.returnNumericalForNewUnit(e, 1e3, "K", 2, !0) : this.returnNumericalForNewUnit(e, 1e3, "K", 2, !1) : this.returnNumerical(t.saveDecimal(2, e.toString(), n));
};
t.NumberToTabeGameString = function(e) {
e || (e = 0);
return 2 == d.GlobalVar.countryCode ? this.returnNumericalForNewUnit(e, 1e3, "K", 2, !0) : this.returnNumerical(t.saveDecimal(0, e.toString()));
};
t.NumberToOtherString = function(e, n, o) {
e || (e = 0);
return 2 == d.GlobalVar.countryCode ? o ? this.returnNumericalForNewUnit(e, 1e3, "K", 2, !0) : this.returnNumericalForNewUnit(e, 1e3, "K", 2, !1) : this.returnNumerical(t.saveDecimal(2, e.toString(), n));
};
t.NumberToJackString = function(e) {
e || (e = 0);
return 2 == d.GlobalVar.countryCode ? this.returnNumerical(t.saveDecimal(0, e, !1)) : this.returnNumerical(t.saveDecimal(2, e, !0));
};
t.NumberToString_Country = function(e, t, n) {
return 2 == t ? this.NumberToHallString_Indonesia(e, n) : this.NumberToHallString(e, n);
};
t.NumberToHallString_Indonesia = function(e, t) {
e || (e = 0);
var n = this.returnNumericalForNewUnit(e, 1e3, "K", 2, t);
if (e >= 1e3) {
var o = n.substring(0, n.length - 1);
n = this.returnNumerical(o) + "K";
}
return n;
};
t.stringToNumber = function(e) {
var t = 0;
Number(e) && (t = Number(e));
return t;
};
t.checkNumberAndSymbol = function(e) {
return !!Number(e);
};
t.AvatarPath = function(e) {
return p.ConstString.headPath + e;
};
t.Until = function(e) {
return e - this.msec;
};
t.formatDate = function(e) {
return new Date(1e3 * e).format("hh:mm:ss");
};
t.formatSec = function(e) {
var t = Math.floor(e % 86400 / 3600), n = Math.floor(e % 3600 / 60), o = Math.floor(e % 60);
return (t < 10 ? "0" + t : t) + ":" + (n < 10 ? "0" + n : n) + ":" + (o < 10 ? "0" + o : o);
};
t.color = function(e) {
return cc.color(e >> 16 & 255, e >> 8 & 255, e >> 0 & 255, 255);
};
t.sleep = function(e) {
return new Promise(function(t) {
setTimeout(function() {
t(1);
}, 1e3 * e);
});
};
t.precentString = function(e) {
return (100 * e).toFixed(0) + "%";
};
t.sleepNode = function(e, t) {
void 0 === t && (t = 0);
return new Promise(function(n) {
e.scheduleOnce(function() {
n(1);
}, t);
});
};
t.fromdate = function(e) {
var t = function(e) {
return e < 10 ? "0" + e : "" + e;
};
if (e > 3600) {
var n = Math.floor(e / 3600), o = (e - 3600 * n) % 60;
return n + ":" + t(Math.floor((e - 3600 * n) / 60)) + ":" + t(o);
}
if (e > 60) {
o = e % 60;
return "00:" + t(Math.floor(e / 60)) + ":" + t(o);
}
return "00:" + t(e);
};
t.parseRichText = function(e) {
for (var t = "", n = e.split("|"), o = 0; o < n.length; o++) {
var i = n[o], r = i.lastIndexOf("("), a = i.lastIndexOf(")");
if (-1 != r && -1 != a) {
var s = i.substr(0, r);
t += "<color=" + i.substr(r + 1).replace(")", "") + ">" + s + "</c>";
} else t += i;
}
return t;
};
t.copyObjWhenKeyEqual = function(e, t) {
for (var n = 0, o = Object.keys(e); n < o.length; n++) {
var i = o[n];
t[i] = e[i];
}
return t;
};
t.copyObjArrWhenKeyEqual = function(e) {
for (var t = [], n = 0; n < e.length; n++) {
var o = {};
this.copyObjWhenKeyEqual(e[n], o);
t.push(o);
}
return t;
};
t.money = function(e) {
return e ? Number.isInteger(e) ? e.toString() : e.toFixed(2) : "0";
};
t.isNil = function(e) {
return !cc.isValid(e);
};
t.isNull = function(e) {
return !e && 0 != e;
};
t.stringNotEmpty = function(e) {
return "string" == typeof e && "undefine" != e && "" != e;
};
t.nick = function(e, t) {
null == e && (e = "null");
void 0 === t && (t = 10);
return e.length > t ? e.substring(0, t) : e;
};
t.colorOfString = function(e) {
if (null == e || 7 != e.length) return null;
var t = e.toLowerCase();
if ("#" == t.charAt(0)) {
t = t.slice(1);
var n = parseInt(t[0] + t[1], 16), o = parseInt(t[2] + t[3], 16), i = parseInt(t[4] + t[5], 16);
return new cc.Color(n, o, i, 255);
}
};
t.isGameing = function() {
return !(!App.gameView || "LoginView" == App.gameView.className || "HallView" == App.gameView.className);
};
t.isHallviewing = function() {
return "HallView" == App.gameView.className;
};
t.returnNumerical = function(e) {
var t = "", n = 0, o = "", i = "";
if ("-" == e[0]) {
o = "-";
e = e.substring(1, e.length);
}
if (e.indexOf(".") > 0) {
i = "." + e.split(".")[1];
e = e.split(".")[0];
}
if (e.length > 3) {
n = e.length;
if (0 != (n %= 3)) {
for (var r = 0; r < n; r++) t += e[r];
t += ",";
}
}
var a = 0;
for (r = n; r < e.length; r++) {
t += e[r];
if (3 == ++a && r != e.length - 1) {
t += ",";
a = 0;
}
}
return o + t + i;
};
t.returnNumericalForNewUnit = function(e, t, n, o, i) {
void 0 === i && (i = !1);
var r = Number(this.saveDecimal(o, e.toString(), i));
return Math.abs(r) < t ? r + "" : this.saveDecimal(o, r / t + "", i) + n;
};
t.saveDecimal = function(e, t, n) {
void 0 === n && (n = !1);
for (var o = "", i = !1, r = "", a = !1, s = 0; s < t.length; s++) {
i && e--;
if ("." == t[s]) {
a = !0;
i = !0;
if (0 == e) break;
}
if (i) {
r += t[s];
if (0 == e) break;
} else o += t[s];
}
if (n) {
a || (r = "." + r);
for (s = 0; s < e; s++) r += "0";
}
return o + r;
};
t.stringToNumberArr = function(e, t) {
try {
for (var n = e.split(t), o = [], i = 0; i < n.length; i++) n[i].length > 0 && o.push(Number(n[i]));
return o;
} catch (e) {
Log.e(e.toString());
return null;
}
};
t.stringToIntArr = function(e, n) {
try {
for (var o = e.split(n), i = [], r = 0; r < o.length; r++) o[r].length > 0 && i.push(t.stringToInt(o[r]));
return i;
} catch (e) {
Log.e(e.toString());
return null;
}
};
t.stringToInt = function(e) {
try {
return "" == e || null == e ? 0 : Number.parseInt(e);
} catch (e) {
Log.e(e.toString());
return 0;
}
};
t.numberRollTo = function(e, t, n, o, i) {
var r = this, a = {
str: n,
scale: 1
};
cc.tween(a).to(t, {
str: o,
scale: 1.5
}, {
onUpdate: function() {
if (e) {
e.string = i ? d.GlobalVar.money_symbol + r.NumberToHallString(a.str, !0) : r.NumberToHallString(a.str, !0);
e.node.scale = a.scale;
}
}
}).call(function() {
cc.tween(a).to(.2, {
scale: 1
}, {
onUpdate: function() {
e && (e.node.scale = a.scale);
}
}).start();
}).start();
};
t.numberOnlyRollTo = function(e, t, n, o, i) {
var r = this, a = {
str: n
};
return cc.tween(a).to(t, {
str: o
}, {
onUpdate: function() {
e && (e.string = i ? d.GlobalVar.money_symbol + r.NumberToHallString(a.str, !0) : r.NumberToHallString(a.str, !0));
}
}).start();
};
t.scaleToBack = function(e) {
cc.tween(e).to(.1, {
scale: 1.3
}).call(function() {
cc.tween(e).to(.1, {
scale: 1
}).start();
}).start();
};
t.popRet1 = function(e, t) {
var n = e;
if (0 != n.ret) {
if (0 == n.type) {
App.tips.show(n.desc);
return;
}
if (4 == n.type) {
cc.director.clear();
cc.game.end();
return;
}
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {
if (1 != n.type) {
if (2 != n.type) if (3 != n.type) ; else if (App.SingleGame) l.default.ExitSingleGame(); else {
if ("LoginView" == App.gameView.className) {
App.storage.removeItem(c.default.Key.PhoneId);
h.default.self.clear();
} else {
App.storage.removeItem(c.default.Key.PhoneId);
h.default.self.clear();
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
t && t.close();
}
} else if (App.SingleGame) l.default.ExitSingleGame(); else {
d.GlobalVar.isGameing && dispatch(f.ComponentGameEvent.SURE_TOP_BANNER_EXIT);
if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
t && t.close();
}
},
confirmString: "Ok",
text: n.desc,
hideX: !1,
tag: "http",
isRepeat: !1
});
}
};
t.popRetNoRet1 = function(e, t) {
var n = e;
if (0 != n.type) if (4 != n.type) App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {
if (1 != n.type) {
if (2 != n.type) if (3 != n.type) ; else if (App.SingleGame) l.default.ExitSingleGame(); else {
if ("LoginView" == App.gameView.className) {
App.storage.removeItem(c.default.Key.PhoneId);
h.default.self.clear();
} else {
App.storage.removeItem(c.default.Key.PhoneId);
h.default.self.clear();
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
t && t.close();
}
} else if (App.SingleGame) l.default.ExitSingleGame(); else {
d.GlobalVar.isGameing && dispatch(f.ComponentGameEvent.SURE_TOP_BANNER_EXIT);
if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(r.Macro.BUNDLE_RESOURCES);
l.default.setOrientation_l();
}
t && t.close();
}
},
confirmString: "Ok",
text: n.desc,
hideX: !1,
tag: "http",
isRepeat: !1
}); else {
cc.director.clear();
cc.game.end();
} else App.tips.show(n.desc);
};
t.popTips = function(e) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: function() {},
confirmString: "Ok",
text: e,
hideX: !1,
isRepeat: !1
});
};
t.popSureOrCancelTips = function(e, t) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: t,
cancelCb: function() {},
confirmString: "Ok",
cancelString: "Cancel",
text: e,
hideX: !1,
isRepeat: !1
});
};
t.popTipsBack = function(e, t) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: t,
confirmString: "Ok",
richText: e,
hideX: !1,
isRepeat: !1
});
};
t.popTipsBackX = function(e, t, n) {
App.alert.show({
title: u.Config.alertTitlePath.TIPS,
confirmCb: t,
confirmString: n,
richText: e,
hideX: !0,
isRepeat: !1
});
};
t.prototype.localConvertWorldPointAR = function(e) {
return e ? e.convertToWorldSpaceAR(cc.v2(0, 0)) : null;
};
t.prototype.localConvertlocalPointAR = function(e, t) {
if (e) {
var n = e.convertToWorldSpaceAR(cc.v2(0, 0));
return this.worldConvertLocalPointAR(t, n);
}
return null;
};
t.prototype.localConvertlocalPointAR_Vec3 = function(e, t) {
if (e) {
var n = e.convertToWorldSpaceAR(cc.v3(0, 0, 0));
return this.worldConvertLocalPointAR(t, n);
}
return null;
};
t.prototype.worldConvertLocalPointAR = function(e, t) {
return e ? e.convertToNodeSpaceAR(t) : null;
};
t.prototype.flyLizi = function(e, t, n, o, i, r, a) {
var s = {
prefab: n,
parent: o,
startPoint: e,
endPoint: t,
num: 1,
flyTime: 1 - .3 * i,
delay: 0,
dir: !0,
disableDir: !0,
extraY: 50 * i - 200,
finishCallBack: r,
updateCallBack: a
};
App.utils.flyCoinToPoint(s);
};
t.prototype.flyCoinToPoint = function(e) {
for (var t = 0, n = 0, o = [], i = 0; i < e.num; i++) {
var r = cc.instantiate(e.prefab);
o.push(r);
}
var a = function(i) {
e.parent.addChild(o[i]);
var r = s.worldConvertLocalPointAR(e.parent, e.startPoint), a = s.worldConvertLocalPointAR(e.parent, e.endPoint), c = r.add(a).multiplyScalar(.5), l = a.sub(r).mag(), u = e.dir ? (Math.random() + .01) * l : -(Math.random() + .01) * l;
e.disableDir && (u = 0);
var p = e.extraY || 0, d = e.extraX || 0, h = c.add(cc.v2(u + d, 0 + p));
o[i].position = r;
cc.tween(o[i]).delay(n).bezierTo(e.flyTime, r, h, a).call(function() {
t++;
e.updateCallBack ? e.updateCallBack(o[i]) : o[i].destroy();
t == e.num && e.finishCallBack && e.finishCallBack();
}).start();
n += e.delay;
}, s = this;
for (i = 0; i < e.num; i++) a(i);
return o;
};
t.prototype.flyLineCoinToPoint = function(e) {
for (var t = 0, n = 0, o = [], i = 0; i < e.num; i++) {
var r = cc.instantiate(e.prefab);
o.push(r);
}
var a = function(i) {
e.parent.addChild(o[i]);
var r = s.worldConvertLocalPointAR(e.parent, e.startPoint), a = s.worldConvertLocalPointAR(e.parent, e.endPoint);
o[i].position = r;
cc.tween(o[i]).delay(n).to(e.flyTime, {
position: a
}).call(function() {
++t == e.num && e.finishCallBack && e.finishCallBack();
e.updateCallBack ? e.updateCallBack(o[i]) : o[i].destroy();
}).start();
n += e.delay;
}, s = this;
for (i = 0; i < e.num; i++) a(i);
};
t.initAndroidAssets = function(e) {
for (var n = 0; n < e.length; n++) {
var o = e[n];
t.SetAndroidAssetsPic(null, o);
}
};
t.initAndroidTxts = function(e) {
for (var n = 0; n < e.length; n++) {
var o = e[n];
t.getAndroidJson(o);
}
};
t.SetAndroidAssetsPic = function(e, t) {
var n = this;
if (s.default.isAndroid) {
var o = jsb.fileUtils.getDefaultResourceRootPath() + "img/" + t;
if (this.cachPics.has(o)) {
if (e) {
e.spriteFrame = this.cachPics.get(o);
return !0;
}
} else try {
cc.assetManager.loadRemote(o, function(t, i) {
if (t) Log.e("++++" + t.message); else {
var r = new cc.SpriteFrame(i);
n.cachPics.set(o, r);
e && (e.spriteFrame = r);
}
});
} catch (e) {
Log.e("++++没有图片" + o);
}
}
return !1;
};
t.SetAndroidAssetsColor = function(e, t, n) {
if (s.default.isAndroid) {
var o = jsb.fileUtils.getDefaultResourceRootPath() + "txt/color.txt";
cc.assetManager.loadRemote(o, function(e, t) {
e ? Log.e(e.message) : Log.e(t.toString());
n && n();
});
}
};
t.setAndroidToNode = function(e, t) {
var n = e.name;
t && (n = t);
if (this.cachTxts.has(n)) {
var o = this.cachTxts.get(n);
e.active = o.active;
o.position && (e.position = cc.v3(o.position.x, o.position.y, 0));
o.scale && e.setScale(cc.v2(o.scale.x, o.scale.y));
o.rotation && (e.angle = o.rotation);
o.opacity && (e.opacity = o.opacity);
o.color && (e.color = this.colorOfString(o.color));
var i = e.getComponent(cc.Widget);
Log.e(o);
if (i && o.widget) {
Log.e(o.widget);
i.isAlignTop = o.widget.isAlignTop;
i.isAlignLeft = o.widget.isAlignLeft;
i.isAlignRight = o.widget.isAlignRight;
i.isAlignBottom = o.widget.isAlignBottom;
i.top = o.widget.top;
i.left = o.widget.left;
i.right = o.widget.right;
i.bottom = o.widget.bottom;
i.updateAlignment();
}
}
};
t.getAndroidJson = function(e) {
var t = this;
if (s.default.isAndroid) {
var n = jsb.fileUtils.getDefaultResourceRootPath() + "txt/" + e + ".txt";
if (this.cachTxts.has(n)) return this.cachTxts.get(n);
cc.assetManager.loadRemote(n, function(e, n) {
if (e) Log.e(e.message); else for (var o = JSON.parse(n.text), i = 0, r = Object.keys(o); i < r.length; i++) {
var a = r[i];
console.error(a);
console.error(o[a]);
t.cachTxts.set(a, o[a]);
}
});
} else {
n = "test/" + e;
if (this.cachTxts.has(n)) return this.cachTxts.get(n);
cc.resources.load(n, function(e, n) {
if (e) Log.e(e.message); else for (var o = JSON.parse(n.text), i = 0, r = Object.keys(o); i < r.length; i++) {
var a = r[i];
t.cachTxts.set(a, o[a]);
}
});
}
};
t.convertResult = function(e, t) {
var n = [];
e.awardResult && e.awardResult.awardline && (n = e.awardResult.awardline);
var o = [];
e.awardResult && e.awardResult.awardPos && (o = e.awardResult.awardPos);
for (var i = new Array(), r = [], a = 0, s = 0; s < e.value.length; s++) {
var c = e.value[s];
a++;
var l = c - 1;
if (c < 0) {
var u = Math.abs(c) - 1;
i.push({
index: u,
value: Math.abs(c),
isEmpty: !0
});
} else i.push({
index: l,
value: c,
isEmpty: !1
});
if (a == t) {
a = 0;
r.push(i);
i = new Array();
}
}
r.forEach(function(e) {
for (var t = !1, n = 0; n < e.length; n++) if (e[n].isEmpty) {
t = !0;
break;
}
for (n = 0; n < e.length; n++) e[n].isEmpty = t;
});
return {
awardline: n,
awardPos: o,
results: r
};
};
t.awaitTime = function(e, t) {
return new Promise(function(n, o) {
if (t && t.aborted) o(null); else {
var i = setTimeout(function() {
n(null);
}, e);
t && (t.abort = function() {
clearTimeout(i);
o(null);
t.abort = null;
t.aborted = !0;
});
}
});
};
t.convertResults = function(e, t) {
var n = [];
e.awardResult && e.awardResult.awardline && (n = e.awardResult.awardline);
var o = [];
e.awardResult && e.awardResult.awardPos && (o = e.awardResult.awardPos);
for (var i = [], r = 0; r < e.value.length; r++) {
for (var a = new Array(), s = [], c = 0, l = e.value[r], u = 0; u < l.length; u++) {
var p = l[u];
c++;
var d = p - 1;
if (-1 == p) {
var h = l[r + 1] - 1;
a.push({
index: h,
value: p,
isEmpty: !0
});
} else a.push({
index: d,
value: p,
isEmpty: !1
});
if (c == t) {
c = 0;
s.push(a);
a = new Array();
}
}
s.forEach(function(e) {
for (var t = !1, n = 0; n < e.length; n++) if (e[n].isEmpty) {
t = !0;
break;
}
for (var o = 0; o < e.length; o++) e[o].isEmpty = t;
});
i.push(s);
}
var f = [];
for (r = 0; r < i.length; r++) {
var _ = i[r], g = {
awardline: n[r] || [],
awardPos: o[r] || [],
resultWilds: [],
wildNums: [],
wildPos: [],
results: _
};
f.push(g);
}
return f;
};
t.convertClassicfruitResult = function(e) {
for (var t = new Array(), n = [], o = 0, i = 0; i < e.inCard.length; i++) {
var r = e.inCard[i];
o++;
var a = r - 1;
if (-1 == r) {
var s = e.inCard[i + 1] - 1;
t.push({
index: s,
value: r,
isEmpty: !0
});
} else t.push({
index: a,
value: r,
isEmpty: !1
});
if (1 == o) {
o = 0;
n.push(t);
t = new Array();
}
}
n.forEach(function(e) {
for (var t = !1, n = 0; n < e.length; n++) if (e[n].isEmpty) {
t = !0;
break;
}
for (n = 0; n < e.length; n++) e[n].isEmpty = t;
});
return {
results: n
};
};
t.InitSlotsCommonFreeEnter = function(e) {
return _.default.showPrefab(r.Macro.BUNDLE_RESOURCES, "slots_common/prefabs/freeEnterNode", e);
};
t.upRootNode = null;
t.cachPics = new Map();
t.cachTxts = new Map();
return t;
}(a.Utils);
n.CmmUtils = g;
var y = function() {
function e() {}
Object.defineProperty(e, "width", {
get: function() {
return cc.view.getVisibleSize().width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "height", {
get: function() {
return cc.view.getVisibleSize().height;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "cx", {
get: function() {
return this.width >> 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "cy", {
get: function() {
return this.height >> 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "scaleX", {
get: function() {
return this.width / m.width;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "scaleY", {
get: function() {
return this.height / m.height;
},
enumerable: !1,
configurable: !0
});
e.fix = function(t) {
m.height > e.height && (t.scale = e.scaleY);
};
return e;
}();
n.display = y;
var m = function() {
function e() {}
Object.defineProperty(e, "scene", {
get: function() {
return cc.find("Canvas");
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "width", {
get: function() {
return 1336;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "height", {
get: function() {
return 720;
},
enumerable: !1,
configurable: !0
});
return e;
}();
n.director = m;
cc._RF.pop();
}, {
"../../framework/defines/Macros": "Macros",
"../../framework/utils/Utils": "Utils",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../../sdk/SdkManager": "SdkManager",
"../config/Config": "Config",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../config/User": "User",
"../event/CommonEvent": "CommonEvent",
"./UIUtils": "UIUtils"
} ],
CommonEvent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a70e5fyz7RGvoGeXvoRT8o/", "CommonEvent");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SdkEvent = n.SimpleEvent = n.Hall_Event = n.ComponentGameEvent = n.HotEvent = n.HttpEvent = n.ShowLabaType = n.CommonEvent = void 0;
(function(e) {
e.TEST_PROTO_MSG = "TEST_PROTO_MSG";
e.TEST_BINARY_MSG = "TEST_BINARY_MSG";
e.TEST_JSON_MSG = "TEST_JSON_MSG";
e.LOBBY_SERVICE_CONNECTED = "LOBBY_SERVICE_CONNECTED";
e.LOBBY_SERVICE_CLOSE = "LOBBY_SERVICE_CLOSE";
e.GAME_SERVICE_CONNECTED = "GAME_SERVICE_CONNECTED";
e.GAME_SERVICE_CLOSE = "GAME_SERVICE_CLOSE";
e.CHAT_SERVICE_CONNECTED = "CHAT_SERVICE_CONNECTED";
e.CHAT_SERVICE_CLOSE = "CHAT_SERVICE_CLOSE";
e.Change_Language = "Change_Language";
e.Show_Hall = "Show_Hall";
e.Close_Panel = "Close_Panel";
e.Time_Second = "Time_Second";
e.EventMaskAll = "EventMaskAll";
e.OpenAndCloseActivity_Laba = "OpenAndCloseActivity_Laba";
e.Open_Show_Hide_laba = "Open_Show_Hide_laba";
e.laba_ChangeView = "laba_ChangeView";
e.ClearLoginToken = "ClearLoginToken";
e.OpenWebView = "OpenWebView";
e.BackToHall = "BackToHall";
e.Exit_Invite = "Exit_Invite";
e.GameInBackGroundBack = "GameInBackGroundBack";
e.RefreshRechageList = "RefreshRechageList";
e.PenetratingClickEvent = "PenetratingClickEvent";
e.PenetratingClickSwitchEvent = "PenetratingClickSwitchEvent";
e.AllLayoutUpdate = "AllLayoutUpdate";
e.ChangeDir = "ChangeDir";
e.TopBlackNode = "TopBlackNode";
})(n.CommonEvent || (n.CommonEvent = {}));
(function(e) {
e[e.All = 0] = "All";
e[e.Normal = 1] = "Normal";
e[e.New = 2] = "New";
})(n.ShowLabaType || (n.ShowLabaType = {}));
(function(e) {
e.CheckReportFinish = "CheckReportFinish";
e.CheckReportFinish_A = "CheckReportFinish_A";
e.BigSaleUpdate = "BigSaleUpdate";
e.WithDrawUpdate = "WithDrawUpdate";
e.updateBindCardAcount = "updateBindCardAcount";
e.UpdateFreeMoney = "UpdateFreeMoney";
e.UpdateRedPoint = "UpdateRedPoint";
e.CheckUpdateFinish = "CheckUpdateFinish";
e.UpdatePlayerInfo = "UpdatePlayerInfo";
e.UpdateCheckInfo = "UpdateCheckInfo";
e.UpdateAddPhoneInfo = "UpdateAddPhoneInfo";
e.GoogleLoginSuccessfull = "GoogleLoginSuccessfull";
e.ChangePayChannel = "ChangePayChannel";
})(n.HttpEvent || (n.HttpEvent = {}));
(function(e) {
e.CheckUpdateMain = "CheckUpdateMain";
e.MainUpdateShow = "MainUpdateShow";
e.MainLoadComplete = "MainLoadComplete";
e.DownProgress = "DownProgress";
e.DownComplete = "DownComplete";
e.DownMainProgress = "DownMainProgress";
e.DownMainComplete = "DownMainComplete";
e.DownHallProgress = "DownHallProgress";
e.DownHallComplete = "DownHallComplete";
e.DownGameFail = "DownGameFail";
})(n.HotEvent || (n.HotEvent = {}));
(function(e) {
e.Game_SwitchTable_Event = "Game_SwitchTable_Event";
e.Game_Exit_Event = "Game_Exit_Event";
e.Game_ExitAndEnterOtherGame_Event = "Game_ExitAndEnterOtherGame_Event";
e.Show_Hall_View = "Show_View";
e.Roll_Ease_Anim_End = "Roll_Ease_Anim_End";
e.GrayBtns_Event = "GrayBtns_Event";
e.GaryBtns_Quickly = "GaryBtns_Quickly";
e.Common_Scroll_Item_Click = "Common_Scroll_Item_Click";
e.Common_Scroll_Item_Update = "Common_Scroll_Item_Update";
e.Hide_ALL_UI = "Hide_ALL_UI";
e.TopBannerIsOpened = "TopBannerIsOpened";
e.TcololrEvent = "TcololrEvent";
e.ShowDemoBtn = "ShowDemoBtn";
e.TryGameRequest = "TryGameRequest";
e.GameList_refresh = "GameList_refresh";
e.GameList_update = "GameList_update";
e.GameSelfData_refresh = "GameSelfData_refresh";
e.EditorBox_begin = "EditorBox_changed";
e.EditorBox_changed = "EditorBox_changed";
e.EditorBox_changeEnded = "EditorBox_changeEnded";
e.SURE_TOP_BANNER_EXIT = "SURE_TOP_BANNER_EXIT";
e.UpdateScreenSize = "UpdateScreenSize";
e.UpdateCurGameAudio = "UpdateCurGameAudio";
e.UpdateLayoutUpdate = "UpdateLayoutUpdate";
})(n.ComponentGameEvent || (n.ComponentGameEvent = {}));
(function(e) {
e.fly_to_coin = "fly_to_coin";
e.refresh_coin = "refresh_coin";
e.refresh_activity = "refresh_activity";
e.acitvity_mask_name = "acitvity_mask_name";
e.acitvity_mask_name2 = "acitvity_mask_name2";
e.activity_close = "activity_close";
e.update_cpf_data = "update_cpf_data";
})(n.Hall_Event || (n.Hall_Event = {}));
(function(e) {
e.SimpleEvent_recharge_click = "SimpleEvent_recharge_click";
e.Html5_view_loading = "Html5_view_loading";
e.Cheat_view_Button = "Cheat_view_Button";
e.SP_GAME_OPEN_MUSIC = "SP_GAME_OPEN_MUSIC";
e.load_native_game_progress = "load_native_game_progress";
e.load_native_game_complete = "load_native_game_complete";
e.load_loadView_finish = "load_loadView_finish";
})(n.SimpleEvent || (n.SimpleEvent = {}));
(function(e) {
e.SdkEvent_hide_loading = "SdkEvent_hide_loading__";
e.SdkEvent_finish_video_back = "SdkEvent_finish_video_back__";
})(n.SdkEvent || (n.SdkEvent = {}));
cc._RF.pop();
}, {} ],
CommonGameJson: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d6e05nIr8lLrqVsp3p+BCrI", "CommonGameJson");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CommonGameJson = void 0;
var r = e("../../framework/core/net/message/JsonMessage"), a = e("../../sdk/AppInfo"), s = e("../config/GlobalVar"), c = e("./CmdDefines"), l = e("./HttpSender"), u = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.mainCmd = c.MainCmd.CMD_GAME;
t.data = {
uid: l.default.uid,
skey: l.default.skey,
roomId: s.GlobalVar.curRoomId,
token: s.GlobalVar.token,
channel: a.default.getChannelId(),
lan: 0
};
console.error(t.data);
return t;
}
Object.defineProperty(t.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return t;
}(r.JsonMessage);
n.CommonGameJson = u;
cc._RF.pop();
}, {
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"../../sdk/AppInfo": "AppInfo",
"../config/GlobalVar": "GlobalVar",
"./CmdDefines": "CmdDefines",
"./HttpSender": "HttpSender"
} ],
CommonSender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8f657bQGuFObovTUEt8JmZ1", "CommonSender");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../common/net/HttpSender"), a = e("../../common/config/User"), s = e("../../sdk/AppInfo"), c = e("../../sdk/GameNativeConfig"), l = e("../config/GlobalVar"), u = e("../event/CommonEvent"), p = e("../enum/GlobalEnum"), d = e("../config/ConstString"), h = e("../../sdk/SdkManager"), f = e("../../sdk/SdkCallBack"), _ = e("../utils/CmmUtils"), g = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.Send_CheckRepot = function(e) {
var t = {
action: "CheckReport",
ts: s.default.ostime,
os: cc.sys.os,
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
is_simulator: s.default.isSimulator(),
installReferrer: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer_ts : "",
sim: h.default.getCountry(),
vpn: h.default.checkVPN()
};
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Login);
};
t.prototype.Send_CheckVer = function(e) {
var t = {
action: "CheckVer",
ts: s.default.ostime,
os: cc.sys.os,
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
network: s.default.appData.network || "",
clickLabel: s.default.appData.clickLabel || "",
adjust_ts: s.default.appData.adjust_ts || 0,
is_simulator: s.default.isSimulator(),
installReferrer: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer_ts : "",
sim: h.default.getCountry(),
vpn: h.default.checkVPN()
};
return this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Login);
};
t.prototype.Send_GameUrl = function(e) {
var t = {
action: "GameUrl",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_GetHost = function(e) {
this.SendPostHttp({
action: "GetHost"
}, e, p.GlobalEnum.HttpUrlType.Login);
};
t.prototype.Send_Login = function(e, t) {
var n = {
action: "GameLogin",
ts: s.default.ostime,
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
deep_link_value: s.default.getOneLinkInviteCode(),
loginType: c.default.LoginType.Phone,
os: cc.sys.os,
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: h.default.checkVPN(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
pwdtoken: e,
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
ycz: s.default.getYcn(),
installReferrer: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer_ts : "",
sim: h.default.getCountry()
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Login);
};
t.prototype.Send_AutoRegister = function(e) {
var t = {
action: "GameLogin",
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
loginType: c.default.LoginType.Guest,
deep_link_value: s.default.getOneLinkInviteCode(),
os: cc.sys.os,
tel_no: "",
code: "",
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: h.default.checkVPN(),
ycz: s.default.getYcn(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
installReferrer: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer_ts : "",
sim: h.default.getCountry()
};
Log.d("登录数据:", t);
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Login);
};
t.prototype.Send_RedPoint = function(e) {
this.SendPostHttp({
action: "RedPoint"
}, e);
};
t.prototype.Send_SignupCode = function(e, t, n) {
var o = {
action: "SignupCode",
ycz: s.default.getYcn(),
tel_no: t,
type: n
};
this.SendPostHttp(o, e);
};
t.prototype.Send_PhoneLogin = function(e, t, n) {
var o = {
action: "SendLogin",
tel_no: t,
code: n,
deep_link_value: s.default.getOneLinkInviteCode(),
ts: s.default.ostime,
phonename: s.default.getPhoneDeviceType(),
deviceId: s.default.getDeviceId(),
phonenos: s.default.getPhoneOS(),
loginType: c.default.LoginType.Phone,
os: cc.sys.os,
crashmodel: s.default.getCashModel(),
gaid: s.default.getGoogleAdId(),
adid: s.default.getAdjust_Adid(),
afid: s.default.getAppflyId(),
m_model: s.default.getMobileModel(),
vpn: h.default.checkVPN(),
third_info: s.default.getThridInfo(),
os_device: s.default.getDeviceInfo(),
firebaseId: s.default.getFireBaseAppInstanceID(),
is_simulator: s.default.isSimulator(),
installReferrer: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer : "",
installReferrer_ts: f.default.getInstance().coolData ? f.default.getInstance().coolData.installReferrer_ts : "",
sim: h.default.getCountry()
};
return this.SendPostHttp(o, e, p.GlobalEnum.HttpUrlType.Login, 1);
};
t.prototype.Send_PlayerInfo = function(e) {
return this.SendPostHttp({
action: "PlayerInfo"
}, e, p.GlobalEnum.HttpUrlType.Hall, 1);
};
t.prototype.Send_PayChannel = function(e) {
return this.SendPostHttp({
action: "PayChannel"
}, e, p.GlobalEnum.HttpUrlType.Hall, 1);
};
t.prototype.Send_GameRule = function() {
return this.SendPostHttp({
action: "GameRule"
}, function(e) {
for (var t = new Map(), n = e.data.rules, o = 0; o < n.length; o++) {
var i = n[o];
t.set(i.gameId, e.data.path + "/{0}/" + i.ruleImg);
}
l.GlobalVar.gameRuleMap = t;
});
};
t.prototype.Send_VipConfig = function(e) {
return this.SendPostHttp({
action: "VipConfig"
}, e);
};
t.prototype.Send_NShopList = function(e) {
return this.SendPostHttp({
action: "NShopList"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_UpdateIDCard = function(e, t, n) {
var o = {
action: "UpdateIDCard",
cert: e,
realName: t
};
this.SendPostHttp(o, n, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_NShopGetDayfree = function(e) {
return this.SendPostHttp({
action: "ShopDayFree"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
t.prototype.Send_Redeemcode = function(e, t) {
var n = {
action: "CDKey",
cdkey: t
};
return this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
t.prototype.Send_payMoney = function(e, t, n) {
var o = this;
if (a.default.self.isBindPhone) {
var i = {
action: "PayOrderGet",
mid: l.GlobalVar.getCurMidData().mid,
id: e
};
_.CmmUtils.isNull(t) || (i.bankCode = t);
_.CmmUtils.isNull(n) || (i.amount = n);
this.SendPostHttp(i, function(e) {
if (0 == e.ret) {
var t = e.data;
o.openURL(t);
}
}, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
}
};
t.prototype.Send_payMoney2 = function(e, t, n, o) {
if (a.default.self.isBindPhone) {
var i = {
action: "PayOrderGet",
mid: t,
id: e
};
_.CmmUtils.isNull(o) || (i.bankCode = o);
this.SendPostHttp(i, n, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
}
};
t.prototype.Send_payMoney3 = function(e, t) {
var n = {
action: "PayOrderGet",
amount: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.openURL = function(e) {
Log.d("open pay url:", e);
e.openType && 2 == +e.openType && cc.sys.openURL(e.ext_info);
};
t.prototype.Send_InitDayTask = function(e) {
this.SendPostHttp({
action: "InitDayTask"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_GetDayTask = function(e, t) {
var n = {
action: "GetDayTask",
id: e
};
this.SendPostHttp(n, t);
};
t.prototype.Send_InitWeekTask = function(e) {
this.SendPostHttp({
action: "InitWeekTask"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_InitTaskInfo = function(e) {
this.SendPostHttp({
action: "TaskInfo"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_WeekTaskGet = function(e, t, n) {
var o = {
action: "WeekTaskGet",
day: e,
id: t
};
this.SendPostHttp(o, n);
};
t.prototype.Send_GetTaskInfo = function(e, t) {
var n = {
action: "GetTask",
id: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall, 100);
};
t.prototype.Send_SpinWeekTable = function(e) {
this.SendPostHttp({
action: "SpinWeekTable"
}, e, p.GlobalEnum.HttpUrlType.Hall, 100, null);
};
t.prototype.Send_WeekGet = function(e) {
this.SendPostHttp({
action: "WeekGet"
}, e);
};
t.prototype.Send_WithdrawRecord2 = function(e, t) {
var n = {
action: "WithdrawRecord",
page: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_ChargeRecord = function(e, t) {
var n = {
action: "ChargeRecord",
page: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_BindingPhone = function(e, t, n, o) {
var i = {
action: "BindingPhone",
tel_no: t,
code: n,
name: o
};
this.SendPostHttp(i, e);
};
t.prototype.Send_VipBonus = function(e) {
this.SendPostHttp({
action: "VipBonus"
}, e);
};
t.prototype.Send_VipBonusGet = function(e, t) {
var n = {
action: "VipBonusGet",
type: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_freeMoney = function(e) {
this.SendPostHttp({
action: "Hall.freeMoney"
}, e);
};
t.prototype.Send_getFreeMoney = function(e) {
this.SendPostHttp({
action: "Hall.getFreeMoney"
}, e);
};
t.prototype.Send_InitExchange = function(e) {
this.SendPostHttp({
action: "InitExchange"
}, e);
};
t.prototype.Send_GetExchange = function(e, t) {
var n = {
action: "Exchange",
id: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_getActInfo = function(e) {
this.SendPostHttp({
action: "Act.get"
}, e);
};
t.prototype.Send_getTaskInfo = function(e) {
this.SendPostHttp({
action: "Act_13.page"
}, e);
};
t.prototype.Send_getTask13Reward = function(e, t) {
var n = {
action: "Act_13.Get",
taskId: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_getACT_17 = function(e) {
this.SendPostHttp({
action: "Act_17.page"
}, e);
};
t.prototype.Send_getACT_17Reward = function(e) {
this.SendPostHttp({
action: "Act_17.Get"
}, e);
};
t.prototype.Send_getEamil = function(e, t) {
var n = {
action: "email.get",
page: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_getNotice = function(e, t) {
var n = {
action: "HallNotify",
page: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_writeEamil = function(e, t) {
var n = {
action: "email.act",
eid: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_WithdrawPage = function(e) {
this.SendPostHttp({
action: "WithdrawPage"
}, e);
};
t.prototype.Send_Withdraw = function(e, t) {
var n = t;
t || 0 == t || (n = "");
var o = {
action: "Withdraw",
transferId: App.storage.getItem(d.ConstString.transferId, ""),
accType: n
};
this.SendPostHttp(o, e);
};
t.prototype.Send_WithdrawApis = function(e, t) {
var n = {
action: "WithdrawApis",
account: t.account,
accountName: t.accountName,
ifsc: t.ifsc,
phone: t.phone,
email: t.email,
amount: t.amount,
fastId: t.fastId
};
_.CmmUtils.isNull(t.accType) || (n.accType = t.accType);
_.CmmUtils.isNull(t.iban) || (n.iban = t.iban);
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
t.prototype.Send_AddTransfer = function(e, t) {
var n = {
action: "AddTransfer",
account: t.account,
accountName: t.accountName,
ifsc: t.ifsc,
phone: t.phone,
email: t.email,
bankCode: t.bankCode
};
_.CmmUtils.isNull(t.accType) || (n.accType = t.accType);
_.CmmUtils.isNull(t.iban) || (n.iban = t.iban);
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100, null, !0);
};
t.prototype.Send_WheelInfo = function(e) {
this.SendPostHttp({
action: "Act_10.page"
}, e);
};
t.prototype.Send_WheelDraw = function(e) {
this.SendPostHttp({
action: "Act_10.Get"
}, e);
};
t.prototype.Send_InitHall = function(e) {
this.SendPostHttp({
action: "InitHall"
}, e);
};
t.prototype.Send_GameList = function(e, t) {
void 0 === t && (t = "");
var n = {
action: "GameList",
gamelist: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_Act_16 = function(e) {
this.SendPostHttp({
action: "Act_16.page"
}, e);
};
t.prototype.Send_CheckPlayer = function() {
this.SendPostHttp({
action: "CheckPlayer"
}, null).then(function() {
a.default.self.updateMoneyInfo();
});
};
t.prototype.Send_Act_Get16 = function(e) {
this.SendPostHttp({
action: "Act_16.Get"
}, e, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
t.prototype.Send_Act_TestCash = function(e, t) {
var n = {
action: "TestCash",
type: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
t.prototype.Send_Act_15 = function(e) {
this.SendPostHttp({
action: "Act_15.page"
}, function(t) {
a.default.self.initFirstChargeInfo(t.data);
dispatch(u.HttpEvent.BigSaleUpdate);
e && e();
});
};
t.prototype.Send_PlayerLimit = function(e) {
var t = {
action: "PlayerLimit",
gameId: e
};
this.SendPostHttp(t, null, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_InitSignin = function(e) {
this.SendPostHttp({
action: "InitSignin"
}, e, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
t.prototype.Send_Signin = function(e, t) {
var n = {
action: "Signin",
type: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, !0, null, !0);
};
t.prototype.Send_ChangeName = function(e, t) {
var n = {
action: "ModifyPlayerName",
name: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_ChangeAvatar = function(e, t) {
var n = {
action: "ModifyPlayerAvatar",
avatar: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_MoneyInfo = function(e) {
this.SendPostHttp({
action: "MoneyInfo"
}, e);
};
t.prototype.Send_Activate = function(e) {
var t = {
action: "activate",
data: e
};
this.SendPostHttp(t, null, p.GlobalEnum.HttpUrlType.Login, 0);
};
t.prototype.Send_SaveBoxInit = function(e, t) {
void 0 === t && (t = !1);
var n = {
action: "InitSafeBox"
};
t ? this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100) : this.SendPostHttp(n, e);
};
t.prototype.Send_SaveBoxIn = function(e, t) {
var n = {
action: "InSafeBox",
id: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_SaveBoxOut = function(e) {
this.SendPostHttp({
action: "OutSafeBox"
}, e);
};
t.prototype.Send_SaveBoxRecord = function(e, t) {
var n = {
action: "SafeBoxRecord",
page: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_GamePlayerCount = function(e) {
this.SendPostHttp({
action: "GameOnlines"
}, e);
};
t.prototype.Send_MatchInit = function(e, t) {
void 0 === t && (t = !1);
var n = {
action: "InitRankData"
};
t ? this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall, 100) : this.SendPostHttp(n, e);
};
t.prototype.Send_MatchRankGet = function(e, t) {
var n = {
action: "RankGet",
id: t
};
this.SendPostHttp(n, e);
};
t.prototype.Send_ShareGiftInit = function(e) {
this.SendPostHttp({
action: "playerInfo"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareGetLockGold = function(e) {
this.SendPostHttp({
action: "claimLockGold"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareExtend1 = function(e) {
this.SendPostHttp({
action: "extend1"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareGiftGet = function(e, t) {
void 0 === t && (t = !1);
this.SendPostHttp({
action: "turntableSpin"
}, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_AgentInfo = function(e, t) {
var n = {
action: "agentInfo",
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_Claim = function(e, t) {
var n = {
action: "claim",
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_PDDInit = function(e) {
this.SendPostHttp({
action: "pddInit"
}, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_PDDSpin = function(e, t) {
var n = {
action: "pddSpin",
type: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_ShareGiftPDDInit = function(e) {
this.SendPostHttp({
action: "act2"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_SharePDDInitData = function(e) {
this.SendPostHttp({
action: "act2_init"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareGiftPDDGet = function(e, t) {
var n = {
action: "act2_Lottery",
type: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareGiftPDDWithdraw = function(e) {
this.SendPostHttp({
action: "act2_Claim"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareTreeInitData = function(e) {
this.SendPostHttp({
action: "act3_init"
}, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_ShareTreeGet = function(e, t, n) {
void 0 === n && (n = -1);
var o = {
action: "act3",
type: t,
index: n
};
this.SendPostHttp(o, e, p.GlobalEnum.HttpUrlType.ShareGift, 1);
};
t.prototype.Send_AddTransfer_share = function(e, t) {
var n = t.bankCode;
t.bankCode || (n = "");
var o = "";
t.iban && (o = t.iban);
var i = {
action: "AddTransfer",
account: t.account,
accountName: t.accountName,
ifsc: t.ifsc,
phone: t.phone,
email: t.email,
accType: t.accType,
bankCode: n,
cnic: t.cnic,
iban: o
};
this.SendPostHttp(i, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_WithdrawRecord2_share = function(e, t) {
void 0 === t && (t = 1);
var n = {
action: "WithdrawRecord",
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_ChargeRecord_share = function(e, t) {
void 0 === t && (t = 1);
var n = {
action: "ChargeRecord",
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_Transfers = function(e) {
this.SendPostHttp({
action: "Transfers"
}, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_Withdraw_share = function(e, t) {
void 0 === t && (t = "");
var n = {
action: "Withdraw",
accType: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_WithdrawApis_share = function(e, t) {
var n = {
action: "WithdrawApis",
account: t.account,
accountName: t.accountName,
ifsc: t.ifsc,
phone: t.phone,
email: t.email,
amount: t.amount,
index: t.index,
cnic: t.cnic,
accType: t.accType
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_ChangeToGame = function(e, t) {
var n = {
action: "exchange",
value: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_MoneyInfo_share = function(e) {
this.SendPostHttp({
action: "MoneyInfo"
}, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_Act1 = function(e) {
this.SendPostHttp({
action: "act1"
}, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_GetAct1 = function(e, t) {
var n = {
action: "act1Receive",
index: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.ShareGift);
};
t.prototype.Send_InitAdCoins = function(e) {
this.SendPostHttp({
action: "InitAdCoins"
}, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_GetAdCoins = function(e) {
this.SendPostHttp({
action: "GetAdCoins"
}, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_Join = function(e) {
var t = {
action: "joinGame",
gameId: l.GlobalVar.curGameId,
roomId: l.GlobalVar.curRoomId
};
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_DeomJoin = function(e) {
var t = {
action: "joinGame",
gameId: l.GlobalVar.curGameId,
roomId: -1
};
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_Spin = function(e, t) {
var n = {
action: "spin",
gameId: l.GlobalVar.curGameId,
betIndex: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_PlayGame = function(e, t, n) {
var o = n;
o.action = "playGame";
o.gameId = l.GlobalVar.curGameId;
o.betIndex = t;
Log.e("Send_PlayGame =>" + JSON.stringify(o));
this.SendPostHttp(o, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_Extra1 = function(e, t) {
var n = t;
n.action = "extra1";
n.gameId = l.GlobalVar.curGameId;
Log.e("Send_Extra1 =>" + JSON.stringify(n));
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_Extra2 = function(e) {
var t = {
action: "extra2",
gameId: l.GlobalVar.curGameId
};
Log.e("Send_Extra2 =>" + JSON.stringify(t));
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_GetBonus = function(e) {
var t = {
action: "getBouns",
gameId: l.GlobalVar.curGameId
};
Log.e("Send_GetBonus =>" + JSON.stringify(t));
this.SendPostHttp(t, e, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_Jackpot = function(e, t) {
var n = {
action: "getJackpot",
gameId: l.GlobalVar.curGameId,
betIndex: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Game, !1, function() {});
};
t.prototype.Send_HeartBeat = function() {
var e = {
action: "heartbeat",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(e, null, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_ExitGame = function() {
var e = {
action: "leaveGame",
gameId: l.GlobalVar.curGameId
};
this.SendPostHttp(e, null, p.GlobalEnum.HttpUrlType.Game);
};
t.prototype.Send_AddCPF = function(e, t) {
var n = {
action: "AddCPF",
cpf: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_InitSendMoney = function(e) {
this.SendPostHttp({
action: "InitSendMoney"
}, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_PlayerMode_offline = function(e, t) {
var n = {
action: "PlayerMode",
sendid: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_RechargePage = function(e) {
this.SendPostHttp({
action: "RechargePage"
}, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_SendMoney = function(e, t, n) {
var o = {
action: "SendMoney",
toId: t,
money: n
};
this.SendPostHttp(o, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_GiveRecord1 = function(e, t) {
var n = {
action: "GiveRecord",
type: 1,
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_GiveRecord2 = function(e, t) {
var n = {
action: "GiveRecord",
type: 2,
page: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_RecvMoney = function(e, t) {
var n = {
action: "RecvMoney",
id: t
};
this.SendPostHttp(n, e, p.GlobalEnum.HttpUrlType.Hall);
};
t.prototype.Send_ShareInfo = function(e) {
this.SendPostHttp({
action: "ShareInfo"
}, e);
};
t.prototype.Send_ActivityList = function(e) {
this.SendPostHttp({
action: "ActivityList"
}, e, p.GlobalEnum.HttpUrlType.Activity, 100);
};
t.prototype.Send_InitActivity = function(e, t) {
var n = {
action: "InitActivity",
actId: e
};
this.SendPostHttp(n, t, p.GlobalEnum.HttpUrlType.Activity, 100);
};
t.prototype.Send_Activity10100Req = function(e, t, n) {
var o = {
action: "ActivityReq",
actId: 10100,
type: t
}, i = 100;
if (n) {
_.CmmUtils.isNull(n.page) || (o.page = n.page);
_.CmmUtils.isNull(n.index) || (o.index = n.index);
_.CmmUtils.isNull(n.useCash) || (o.useCash = n.useCash);
_.CmmUtils.isNull(n.delay) || (i = n.delay);
}
this.SendPostHttp(o, e, p.GlobalEnum.HttpUrlType.Activity, i);
};
t.module = "CommonSender";
return t;
}(r.default);
n.default = g;
cc._RF.pop();
}, {
"../../common/config/User": "User",
"../../common/net/HttpSender": "HttpSender",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../../sdk/SdkCallBack": "SdkCallBack",
"../../sdk/SdkManager": "SdkManager",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../enum/GlobalEnum": "GlobalEnum",
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils"
} ],
CommonService: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cdac79M5PhBeIG696a7Pj9/", "CommonService");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CommonService = void 0;
var r = e("../config/Config"), a = e("../../framework/core/net/service/Service"), s = e("./ReconnectHandler"), c = e("./CmdDefines"), l = function(e) {
i(t, e);
function t() {
var t = e.call(this) || this;
t.ip = "localhost";
t.port = 3e3;
t.protocol = "ws";
t._maxEnterBackgroundTime = r.Config.MAX_INBACKGROUND_TIME;
t._backgroundTimeOutId = -1;
t.reconnectHandler = new s.ReconnectHandler(t);
return t;
}
Object.defineProperty(t.prototype, "data", {
get: function() {
return App.stageData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "maxEnterBackgroundTime", {
get: function() {
return this._maxEnterBackgroundTime;
},
set: function(e) {
(e < r.Config.MIN_INBACKGROUND_TIME || e > r.Config.MAX_INBACKGROUND_TIME) && (e = r.Config.MIN_INBACKGROUND_TIME);
Log.d(this.module, "maxEnterBackgroundTime " + e);
this._maxEnterBackgroundTime = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.initIP_PORT = function(e, t, n) {
this.ip = e;
this.port = t;
this.protocol = n;
};
t.prototype.connect = function() {
e.prototype.connect_server.call(this, this.ip, this.port, this.protocol);
};
t.prototype.sendHeartbeat = function() {
this.heartbeat ? this.send(new this.heartbeat()) : Log.e("请先设置心跳解析类型");
};
t.prototype.getMaxHeartbeatTimeOut = function() {
return e.prototype.getMaxHeartbeatTimeOut.call(this);
};
t.prototype.getHeartbeatInterval = function() {
return e.prototype.getHeartbeatInterval.call(this);
};
t.prototype.onHeartbeatTimeOut = function() {
Log.w(this.module + " 心跳超时，您已经断开网络");
this.close();
App.serviceManager.reconnect(this);
};
t.prototype.isHeartBeat = function(e) {
return e.cmd == String(c.MainCmd.CMD_SYS) + String(c.SUB_CMD_SYS.CMD_SYS_HEART);
};
t.prototype.onEnterBackground = function() {
if (!this.data.isLoginStage()) {
var e = this;
e._backgroundTimeOutId = setTimeout(function() {
Log.d("进入后台时间过长，主动关闭网络，等玩家切回前台重新连接网络");
e.close();
App.alert.close(r.Config.RECONNECT_ALERT_TAG);
}, 1e3 * e.maxEnterBackgroundTime);
}
};
t.prototype.onEnterForgeground = function(e) {
if (-1 != this._backgroundTimeOutId) {
Log.d("清除进入后台的超时关闭网络定时器");
clearTimeout(this._backgroundTimeOutId);
Log.d("在后台时间" + e + " , 最大时间为: " + this.maxEnterBackgroundTime);
if (this.data.isLoginStage()) return;
if (e > this.maxEnterBackgroundTime) {
Log.d("从回台切换，显示重新连接网络");
this.close();
App.alert.close(r.Config.RECONNECT_ALERT_TAG);
App.serviceManager.reconnect(this);
}
}
};
return t;
}(a.Service);
n.CommonService = l;
cc._RF.pop();
}, {
"../../framework/core/net/service/Service": "Service",
"../config/Config": "Config",
"./CmdDefines": "CmdDefines",
"./ReconnectHandler": "ReconnectHandler"
} ],
CommonUIHelper: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6e886x3W5ZLF5O3MX+mlH5Q", "CommonUIHelper");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../../common/config/User"), i = function() {
function e() {}
e.isNeedShowRecharge = function(e, t) {
var n = o.default.self.data.money;
(t || 0 == t) && (n = t);
return e > n;
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {
"../../common/config/User": "User"
} ],
Config: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "df6483YRVVPlodAQqnkAnjN", "Config");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NetPriority = n.ViewZOrder = n.Config = void 0;
(function(e) {
e.isShowDebugButton = !0;
e.audioPath = {
dialog: "all_audio/dlg_open",
button: "all_audio/Click",
cash: "all_audio/Add_Cash",
gamestart: "all_audio/Game_Start",
winner: "all_audio/Winner",
loading: "all_audio/loading",
popreward: "all_audio/popreward"
};
e.alertTitlePath = {
TIPS: "TIPS"
};
e.isSkipCheckUpdate = !1;
e.HOT_UPDATE_URL = "http://192.168.1.5:3000";
e.USE_AUTO_VERSION = !0;
e.LOADING_TIME_OUT = 30;
e.HTTP_TIME_OUT = 10;
e.LOADING_CONTENT_CHANGE_INTERVAL = 3;
e.LOAD_VIEW_TIME_OUT = 20;
e.LOAD_VIEW_DELAY = .1;
e.RECONNECT_TIME_OUT = 10;
e.MAX_INBACKGROUND_TIME = 60;
e.MIN_INBACKGROUND_TIME = 5;
e.RECONNECT_ALERT_TAG = 100;
e.SHOW_DEBUG_INFO_KEY = "SHOW_DEBUG_INFO_KEY";
e.standaloneWindowsPlatformId = "1000";
e.androidPlatformId = "1001";
e.iosPlatformId = "1004";
e.isGcenter = !1;
e.useShangbaoStyle = 0;
})(n.Config || (n.Config = {}));
(function(e) {
e.Zero = 0;
e.Horn = 1;
e.UI = 2;
e.Tips = 3;
e.Alert = 4;
e.UP = 5;
e.Loading = 6;
e.UILoading = 7;
e.SpGameLoading0 = 8;
e.SpGameLoading = 9;
})(n.ViewZOrder || (n.ViewZOrder = {}));
(function(e) {
e[e.Game = 0] = "Game";
e[e.Chat = 1] = "Chat";
e[e.Lobby = 2] = "Lobby";
})(n.NetPriority || (n.NetPriority = {}));
cc._RF.pop();
}, {} ],
ConstString: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "65cc7oIG55KQaOYMnp303+O", "ConstString");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ConstString = void 0;
(function(e) {
e.localBgmPath = "__localBgmPath";
e.abBG = "__abBG";
e.agameData = "__agameData";
e.enableAutoLogin = "__enableAutoLogin";
e.accountName = "__accountName";
e.userId = "userId";
e.userName = "userName";
e.deviceIdKey = "my_did";
e.setting_vibration = "setting_vibration";
e.lan_key = "z_using_language";
e.showVipUpdate = "__showVipUpdate";
e.showBigSaleDay = "__showBigSaleDay2";
e.showShareAfter = "__showShareAfter2";
e.showAGift = "__showAGift";
e.gameListVersion = "__gameListVersion";
e.gameListData = "__gameListData";
e.agameListVersion = "__agameListVersion";
e.agameListData = "__agameListData";
e.rummy_time = "__rummy_time";
e.tp_time = "__tp_time";
e.coolData = "__coolData";
e.saveOneLinkInviteCode = "__saveOneLinkInviteCode";
e.simData = "__simData";
e.simulator = "__simulator";
e.transferId = "transferId";
e.lastSelectedPay = "__lastSelectedPay";
e.testUrlIndex = "__testUrlIndex";
e.limitGameData = "__limitGameData";
e.pay5DefalutType = "__pay5DefalutType";
e.c4_send_ID = "__c4_send_ID";
e.pexel_click_id = "__pexel_click_id";
e.default_withdraw_type_id = "__default_withdraw_type_id";
e.like_game_list = "__like_game_list";
e.game_children_list_page_version = "__game_children_list_page_version";
e.dontshowagainforjili = "__dontshowagainforjili";
e.defaultHeadPath = "all_texture/headicon/head";
e.headPath = "all_texture/headicon/";
e.vipPath = "common/texture/hall_vip/VIP";
e.lottery7_gou = "__lottery7_gou";
e.recharge_mid = "__recharge_mid";
e.hotPath = "/buildUpdate";
e.gameIconPath = "/gameIcons/";
e.http = "http";
})(n.ConstString || (n.ConstString = {}));
cc._RF.pop();
}, {} ],
1: [ function(e, t) {
var n = e("util/"), o = Array.prototype.slice, i = Object.prototype.hasOwnProperty, r = t.exports = u;
r.AssertionError = function(e) {
this.name = "AssertionError";
this.actual = e.actual;
this.expected = e.expected;
this.operator = e.operator;
if (e.message) {
this.message = e.message;
this.generatedMessage = !1;
} else {
this.message = c(this);
this.generatedMessage = !0;
}
var t = e.stackStartFunction || l;
if (Error.captureStackTrace) Error.captureStackTrace(this, t); else {
var n = new Error();
if (n.stack) {
var o = n.stack, i = t.name, r = o.indexOf("\n" + i);
if (r >= 0) {
var a = o.indexOf("\n", r + 1);
o = o.substring(a + 1);
}
this.stack = o;
}
}
};
n.inherits(r.AssertionError, Error);
function a(e, t) {
return n.isUndefined(t) ? "" + t : n.isNumber(t) && !isFinite(t) ? t.toString() : n.isFunction(t) || n.isRegExp(t) ? t.toString() : t;
}
function s(e, t) {
return n.isString(e) ? e.length < t ? e : e.slice(0, t) : e;
}
function c(e) {
return s(JSON.stringify(e.actual, a), 128) + " " + e.operator + " " + s(JSON.stringify(e.expected, a), 128);
}
function l(e, t, n, o, i) {
throw new r.AssertionError({
message: n,
actual: e,
expected: t,
operator: o,
stackStartFunction: i
});
}
r.fail = l;
function u(e, t) {
e || l(e, !0, t, "==", r.ok);
}
r.ok = u;
r.equal = function(e, t, n) {
e != t && l(e, t, n, "==", r.equal);
};
r.notEqual = function(e, t, n) {
e == t && l(e, t, n, "!=", r.notEqual);
};
r.deepEqual = function(e, t, n) {
p(e, t) || l(e, t, n, "deepEqual", r.deepEqual);
};
function p(e, t) {
if (e === t) return !0;
if (n.isBuffer(e) && n.isBuffer(t)) {
if (e.length != t.length) return !1;
for (var o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
return !0;
}
return n.isDate(e) && n.isDate(t) ? e.getTime() === t.getTime() : n.isRegExp(e) && n.isRegExp(t) ? e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase : n.isObject(e) || n.isObject(t) ? h(e, t) : e == t;
}
function d(e) {
return "[object Arguments]" == Object.prototype.toString.call(e);
}
function h(e, t) {
if (n.isNullOrUndefined(e) || n.isNullOrUndefined(t)) return !1;
if (e.prototype !== t.prototype) return !1;
if (n.isPrimitive(e) || n.isPrimitive(t)) return e === t;
var i = d(e), r = d(t);
if (i && !r || !i && r) return !1;
if (i) return p(e = o.call(e), t = o.call(t));
var a, s, c = g(e), l = g(t);
if (c.length != l.length) return !1;
c.sort();
l.sort();
for (s = c.length - 1; s >= 0; s--) if (c[s] != l[s]) return !1;
for (s = c.length - 1; s >= 0; s--) if (!p(e[a = c[s]], t[a])) return !1;
return !0;
}
r.notDeepEqual = function(e, t, n) {
p(e, t) && l(e, t, n, "notDeepEqual", r.notDeepEqual);
};
r.strictEqual = function(e, t, n) {
e !== t && l(e, t, n, "===", r.strictEqual);
};
r.notStrictEqual = function(e, t, n) {
e === t && l(e, t, n, "!==", r.notStrictEqual);
};
function f(e, t) {
return !(!e || !t) && ("[object RegExp]" == Object.prototype.toString.call(t) ? t.test(e) : e instanceof t || !0 === t.call({}, e));
}
function _(e, t, o, i) {
var r;
if (n.isString(o)) {
i = o;
o = null;
}
try {
t();
} catch (e) {
r = e;
}
i = (o && o.name ? " (" + o.name + ")." : ".") + (i ? " " + i : ".");
e && !r && l(r, o, "Missing expected exception" + i);
!e && f(r, o) && l(r, o, "Got unwanted exception" + i);
if (e && r && o && !f(r, o) || !e && r) throw r;
}
r.throws = function(e, t, n) {
_.apply(this, [ !0 ].concat(o.call(arguments)));
};
r.doesNotThrow = function(e, t) {
_.apply(this, [ !1 ].concat(o.call(arguments)));
};
r.ifError = function(e) {
if (e) throw e;
};
var g = Object.keys || function(e) {
var t = [];
for (var n in e) i.call(e, n) && t.push(n);
return t;
};
}, {
"util/": 4
} ],
2: [ function(e, t) {
"function" == typeof Object.create ? t.exports = function(e, t) {
e.super_ = t;
e.prototype = Object.create(t.prototype, {
constructor: {
value: e,
enumerable: !1,
writable: !0,
configurable: !0
}
});
} : t.exports = function(e, t) {
e.super_ = t;
var n = function() {};
n.prototype = t.prototype;
e.prototype = new n();
e.prototype.constructor = e;
};
}, {} ],
3: [ function(e, t) {
t.exports = function(e) {
return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8;
};
}, {} ],
4: [ function(e, t, n) {
(function(t, o) {
var i = /%[sdj%]/g;
n.format = function(e) {
if (!S(e)) {
for (var t = [], n = 0; n < arguments.length; n++) t.push(s(arguments[n]));
return t.join(" ");
}
n = 1;
for (var o = arguments, r = o.length, a = String(e).replace(i, function(e) {
if ("%%" === e) return "%";
if (n >= r) return e;
switch (e) {
case "%s":
return String(o[n++]);

case "%d":
return Number(o[n++]);

case "%j":
try {
return JSON.stringify(o[n++]);
} catch (e) {
return "[Circular]";
}

default:
return e;
}
}), c = o[n]; n < r; c = o[++n]) v(c) || !C(c) ? a += " " + c : a += " " + s(c);
return a;
};
n.deprecate = function(e, i) {
if (b(o.process)) return function() {
return n.deprecate(e, i).apply(this, arguments);
};
if (!0 === t.noDeprecation) return e;
var r = !1;
return function() {
if (!r) {
if (t.throwDeprecation) throw new Error(i);
t.traceDeprecation ? console.trace(i) : console.error(i);
r = !0;
}
return e.apply(this, arguments);
};
};
var r, a = {};
n.debuglog = function(e) {
b(r) && (r = t.env.NODE_DEBUG || "");
e = e.toUpperCase();
if (!a[e]) if (new RegExp("\\b" + e + "\\b", "i").test(r)) {
var o = t.pid;
a[e] = function() {
var t = n.format.apply(n, arguments);
console.error("%s %d: %s", e, o, t);
};
} else a[e] = function() {};
return a[e];
};
function s(e, t) {
var o = {
seen: [],
stylize: l
};
arguments.length >= 3 && (o.depth = arguments[2]);
arguments.length >= 4 && (o.colors = arguments[3]);
m(t) ? o.showHidden = t : t && n._extend(o, t);
b(o.showHidden) && (o.showHidden = !1);
b(o.depth) && (o.depth = 2);
b(o.colors) && (o.colors = !1);
b(o.customInspect) && (o.customInspect = !0);
o.colors && (o.stylize = c);
return p(o, e, o.depth);
}
n.inspect = s;
s.colors = {
bold: [ 1, 22 ],
italic: [ 3, 23 ],
underline: [ 4, 24 ],
inverse: [ 7, 27 ],
white: [ 37, 39 ],
grey: [ 90, 39 ],
black: [ 30, 39 ],
blue: [ 34, 39 ],
cyan: [ 36, 39 ],
green: [ 32, 39 ],
magenta: [ 35, 39 ],
red: [ 31, 39 ],
yellow: [ 33, 39 ]
};
s.styles = {
special: "cyan",
number: "yellow",
boolean: "yellow",
undefined: "grey",
null: "bold",
string: "green",
date: "magenta",
regexp: "red"
};
function c(e, t) {
var n = s.styles[t];
return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e;
}
function l(e) {
return e;
}
function u(e) {
var t = {};
e.forEach(function(e) {
t[e] = !0;
});
return t;
}
function p(e, t, o) {
if (e.customInspect && t && O(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
var i = t.inspect(o, e);
S(i) || (i = p(e, i, o));
return i;
}
var r = d(e, t);
if (r) return r;
var a = Object.keys(t), s = u(a);
e.showHidden && (a = Object.getOwnPropertyNames(t));
if (T(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return h(t);
if (0 === a.length) {
if (O(t)) {
var c = t.name ? ": " + t.name : "";
return e.stylize("[Function" + c + "]", "special");
}
if (R(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
if (A(t)) return e.stylize(Date.prototype.toString.call(t), "date");
if (T(t)) return h(t);
}
var l, m = "", v = !1, E = [ "{", "}" ];
if (y(t)) {
v = !0;
E = [ "[", "]" ];
}
O(t) && (m = " [Function" + (t.name ? ": " + t.name : "") + "]");
R(t) && (m = " " + RegExp.prototype.toString.call(t));
A(t) && (m = " " + Date.prototype.toUTCString.call(t));
T(t) && (m = " " + h(t));
if (0 === a.length && (!v || 0 == t.length)) return E[0] + m + E[1];
if (o < 0) return R(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
e.seen.push(t);
l = v ? f(e, t, o, s, a) : a.map(function(n) {
return _(e, t, o, s, n, v);
});
e.seen.pop();
return g(l, m, E);
}
function d(e, t) {
if (b(t)) return e.stylize("undefined", "undefined");
if (S(t)) {
var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
return e.stylize(n, "string");
}
return E(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : v(t) ? e.stylize("null", "null") : void 0;
}
function h(e) {
return "[" + Error.prototype.toString.call(e) + "]";
}
function f(e, t, n, o, i) {
for (var r = [], a = 0, s = t.length; a < s; ++a) I(t, String(a)) ? r.push(_(e, t, n, o, String(a), !0)) : r.push("");
i.forEach(function(i) {
i.match(/^\d+$/) || r.push(_(e, t, n, o, i, !0));
});
return r;
}
function _(e, t, n, o, i, r) {
var a, s, c;
(c = Object.getOwnPropertyDescriptor(t, i) || {
value: t[i]
}).get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special"));
I(o, i) || (a = "[" + i + "]");
s || (e.seen.indexOf(c.value) < 0 ? (s = v(n) ? p(e, c.value, null) : p(e, c.value, n - 1)).indexOf("\n") > -1 && (s = r ? s.split("\n").map(function(e) {
return "  " + e;
}).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
return "   " + e;
}).join("\n")) : s = e.stylize("[Circular]", "special"));
if (b(a)) {
if (r && i.match(/^\d+$/)) return s;
if ((a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
a = a.substr(1, a.length - 2);
a = e.stylize(a, "name");
} else {
a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
a = e.stylize(a, "string");
}
}
return a + ": " + s;
}
function g(e, t, n) {
return e.reduce(function(e, t) {
t.indexOf("\n");
return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
}, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1];
}
function y(e) {
return Array.isArray(e);
}
n.isArray = y;
function m(e) {
return "boolean" == typeof e;
}
n.isBoolean = m;
function v(e) {
return null === e;
}
n.isNull = v;
n.isNullOrUndefined = function(e) {
return null == e;
};
function E(e) {
return "number" == typeof e;
}
n.isNumber = E;
function S(e) {
return "string" == typeof e;
}
n.isString = S;
n.isSymbol = function(e) {
return "symbol" == typeof e;
};
function b(e) {
return void 0 === e;
}
n.isUndefined = b;
function R(e) {
return C(e) && "[object RegExp]" === w(e);
}
n.isRegExp = R;
function C(e) {
return "object" == typeof e && null !== e;
}
n.isObject = C;
function A(e) {
return C(e) && "[object Date]" === w(e);
}
n.isDate = A;
function T(e) {
return C(e) && ("[object Error]" === w(e) || e instanceof Error);
}
n.isError = T;
function O(e) {
return "function" == typeof e;
}
n.isFunction = O;
n.isPrimitive = function(e) {
return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e;
};
n.isBuffer = e("./support/isBuffer");
function w(e) {
return Object.prototype.toString.call(e);
}
function M(e) {
return e < 10 ? "0" + e.toString(10) : e.toString(10);
}
var N = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function P() {
var e = new Date(), t = [ M(e.getHours()), M(e.getMinutes()), M(e.getSeconds()) ].join(":");
return [ e.getDate(), N[e.getMonth()], t ].join(" ");
}
n.log = function() {
console.log("%s - %s", P(), n.format.apply(n, arguments));
};
n.inherits = e("inherits");
n._extend = function(e, t) {
if (!t || !C(t)) return e;
for (var n = Object.keys(t), o = n.length; o--; ) e[n[o]] = t[n[o]];
return e;
};
function I(e, t) {
return Object.prototype.hasOwnProperty.call(e, t);
}
}).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"./support/isBuffer": 3,
_process: 10,
inherits: 2
} ],
5: [ function(e, t, n) {
"use strict";
n.byteLength = function(e) {
var t = l(e), n = t[0], o = t[1];
return 3 * (n + o) / 4 - o;
};
n.toByteArray = function(e) {
var t, n, o = l(e), a = o[0], s = o[1], c = new r(u(0, a, s)), p = 0, d = s > 0 ? a - 4 : a;
for (n = 0; n < d; n += 4) {
t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)];
c[p++] = t >> 16 & 255;
c[p++] = t >> 8 & 255;
c[p++] = 255 & t;
}
if (2 === s) {
t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4;
c[p++] = 255 & t;
}
if (1 === s) {
t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2;
c[p++] = t >> 8 & 255;
c[p++] = 255 & t;
}
return c;
};
n.fromByteArray = function(e) {
for (var t, n = e.length, i = n % 3, r = [], a = 0, s = n - i; a < s; a += 16383) r.push(p(e, a, a + 16383 > s ? s : a + 16383));
if (1 === i) {
t = e[n - 1];
r.push(o[t >> 2] + o[t << 4 & 63] + "==");
} else if (2 === i) {
t = (e[n - 2] << 8) + e[n - 1];
r.push(o[t >> 10] + o[t >> 4 & 63] + o[t << 2 & 63] + "=");
}
return r.join("");
};
for (var o = [], i = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) {
o[s] = a[s];
i[a.charCodeAt(s)] = s;
}
i["-".charCodeAt(0)] = 62;
i["_".charCodeAt(0)] = 63;
function l(e) {
var t = e.length;
if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var n = e.indexOf("=");
-1 === n && (n = t);
return [ n, n === t ? 0 : 4 - n % 4 ];
}
function u(e, t, n) {
return 3 * (t + n) / 4 - n;
}
function p(e, t, n) {
for (var i, r, a = [], s = t; s < n; s += 3) {
i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]);
a.push(o[(r = i) >> 18 & 63] + o[r >> 12 & 63] + o[r >> 6 & 63] + o[63 & r]);
}
return a.join("");
}
}, {} ],
6: [ function(e, t, n) {
(function(t) {
"use strict";
var o = e("base64-js"), i = e("ieee754"), r = e("isarray");
n.Buffer = c;
n.SlowBuffer = function(e) {
+e != e && (e = 0);
return c.alloc(+e);
};
n.INSPECT_MAX_BYTES = 50;
c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
try {
var e = new Uint8Array(1);
e.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
};
return 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength;
} catch (e) {
return !1;
}
}();
n.kMaxLength = a();
function a() {
return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function s(e, t) {
if (a() < t) throw new RangeError("Invalid typed array length");
if (c.TYPED_ARRAY_SUPPORT) (e = new Uint8Array(t)).__proto__ = c.prototype; else {
null === e && (e = new c(t));
e.length = t;
}
return e;
}
function c(e, t, n) {
if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(e, t, n);
if ("number" == typeof e) {
if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
return d(this, e);
}
return l(this, e, t, n);
}
c.poolSize = 8192;
c._augment = function(e) {
e.__proto__ = c.prototype;
return e;
};
function l(e, t, n, o) {
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? _(e, t, n, o) : "string" == typeof t ? h(e, t, n) : g(e, t);
}
c.from = function(e, t, n) {
return l(null, e, t, n);
};
if (c.TYPED_ARRAY_SUPPORT) {
c.prototype.__proto__ = Uint8Array.prototype;
c.__proto__ = Uint8Array;
"undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
value: null,
configurable: !0
});
}
function u(e) {
if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
if (e < 0) throw new RangeError('"size" argument must not be negative');
}
function p(e, t, n, o) {
u(t);
return t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof o ? s(e, t).fill(n, o) : s(e, t).fill(n) : s(e, t);
}
c.alloc = function(e, t, n) {
return p(null, e, t, n);
};
function d(e, t) {
u(t);
e = s(e, t < 0 ? 0 : 0 | y(t));
if (!c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < t; ++n) e[n] = 0;
return e;
}
c.allocUnsafe = function(e) {
return d(null, e);
};
c.allocUnsafeSlow = function(e) {
return d(null, e);
};
function h(e, t, n) {
"string" == typeof n && "" !== n || (n = "utf8");
if (!c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
var o = 0 | m(t, n), i = (e = s(e, o)).write(t, n);
i !== o && (e = e.slice(0, i));
return e;
}
function f(e, t) {
var n = t.length < 0 ? 0 : 0 | y(t.length);
e = s(e, n);
for (var o = 0; o < n; o += 1) e[o] = 255 & t[o];
return e;
}
function _(e, t, n, o) {
t.byteLength;
if (n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
if (t.byteLength < n + (o || 0)) throw new RangeError("'length' is out of bounds");
t = void 0 === n && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, n) : new Uint8Array(t, n, o);
c.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = c.prototype : e = f(e, t);
return e;
}
function g(e, t) {
if (c.isBuffer(t)) {
var n = 0 | y(t.length);
if (0 === (e = s(e, n)).length) return e;
t.copy(e, 0, 0, n);
return e;
}
if (t) {
if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? s(e, 0) : f(e, t);
if ("Buffer" === t.type && r(t.data)) return f(e, t.data);
}
var o;
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function y(e) {
if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
return 0 | e;
}
c.isBuffer = function(e) {
return !(null == e || !e._isBuffer);
};
c.compare = function(e, t) {
if (!c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
if (e === t) return 0;
for (var n = e.length, o = t.length, i = 0, r = Math.min(n, o); i < r; ++i) if (e[i] !== t[i]) {
n = e[i];
o = t[i];
break;
}
return n < o ? -1 : o < n ? 1 : 0;
};
c.isEncoding = function(e) {
switch (String(e).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
};
c.concat = function(e, t) {
if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === e.length) return c.alloc(0);
var n;
if (void 0 === t) {
t = 0;
for (n = 0; n < e.length; ++n) t += e[n].length;
}
var o = c.allocUnsafe(t), i = 0;
for (n = 0; n < e.length; ++n) {
var a = e[n];
if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
a.copy(o, i);
i += a.length;
}
return o;
};
function m(e, t) {
if (c.isBuffer(e)) return e.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
"string" != typeof e && (e = "" + e);
var n = e.length;
if (0 === n) return 0;
for (var o = !1; ;) switch (t) {
case "ascii":
case "latin1":
case "binary":
return n;

case "utf8":
case "utf-8":
case void 0:
return Z(e).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * n;

case "hex":
return n >>> 1;

case "base64":
return Q(e).length;

default:
if (o) return Z(e).length;
t = ("" + t).toLowerCase();
o = !0;
}
}
c.byteLength = m;
function v(e, t, n) {
var o = !1;
(void 0 === t || t < 0) && (t = 0);
if (t > this.length) return "";
(void 0 === n || n > this.length) && (n = this.length);
if (n <= 0) return "";
if ((n >>>= 0) <= (t >>>= 0)) return "";
e || (e = "utf8");
for (;;) switch (e) {
case "hex":
return B(this, t, n);

case "utf8":
case "utf-8":
return N(this, t, n);

case "ascii":
return L(this, t, n);

case "latin1":
case "binary":
return U(this, t, n);

case "base64":
return M(this, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return D(this, t, n);

default:
if (o) throw new TypeError("Unknown encoding: " + e);
e = (e + "").toLowerCase();
o = !0;
}
}
c.prototype._isBuffer = !0;
function E(e, t, n) {
var o = e[t];
e[t] = e[n];
e[n] = o;
}
c.prototype.swap16 = function() {
var e = this.length;
if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var t = 0; t < e; t += 2) E(this, t, t + 1);
return this;
};
c.prototype.swap32 = function() {
var e = this.length;
if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var t = 0; t < e; t += 4) {
E(this, t, t + 3);
E(this, t + 1, t + 2);
}
return this;
};
c.prototype.swap64 = function() {
var e = this.length;
if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var t = 0; t < e; t += 8) {
E(this, t, t + 7);
E(this, t + 1, t + 6);
E(this, t + 2, t + 5);
E(this, t + 3, t + 4);
}
return this;
};
c.prototype.toString = function() {
var e = 0 | this.length;
return 0 === e ? "" : 0 === arguments.length ? N(this, 0, e) : v.apply(this, arguments);
};
c.prototype.equals = function(e) {
if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
return this === e || 0 === c.compare(this, e);
};
c.prototype.inspect = function() {
var e = "", t = n.INSPECT_MAX_BYTES;
if (this.length > 0) {
e = this.toString("hex", 0, t).match(/.{2}/g).join(" ");
this.length > t && (e += " ... ");
}
return "<Buffer " + e + ">";
};
c.prototype.compare = function(e, t, n, o, i) {
if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
void 0 === t && (t = 0);
void 0 === n && (n = e ? e.length : 0);
void 0 === o && (o = 0);
void 0 === i && (i = this.length);
if (t < 0 || n > e.length || o < 0 || i > this.length) throw new RangeError("out of range index");
if (o >= i && t >= n) return 0;
if (o >= i) return -1;
if (t >= n) return 1;
if (this === e) return 0;
for (var r = (i >>>= 0) - (o >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(r, a), l = this.slice(o, i), u = e.slice(t, n), p = 0; p < s; ++p) if (l[p] !== u[p]) {
r = l[p];
a = u[p];
break;
}
return r < a ? -1 : a < r ? 1 : 0;
};
function S(e, t, n, o, i) {
if (0 === e.length) return -1;
if ("string" == typeof n) {
o = n;
n = 0;
} else n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648);
n = +n;
isNaN(n) && (n = i ? 0 : e.length - 1);
n < 0 && (n = e.length + n);
if (n >= e.length) {
if (i) return -1;
n = e.length - 1;
} else if (n < 0) {
if (!i) return -1;
n = 0;
}
"string" == typeof t && (t = c.from(t, o));
if (c.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, o, i);
if ("number" == typeof t) {
t &= 255;
return c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [ t ], n, o, i);
}
throw new TypeError("val must be string, number or Buffer");
}
function b(e, t, n, o, i) {
var r, a = 1, s = e.length, c = t.length;
if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
if (e.length < 2 || t.length < 2) return -1;
a = 2;
s /= 2;
c /= 2;
n /= 2;
}
function l(e, t) {
return 1 === a ? e[t] : e.readUInt16BE(t * a);
}
if (i) {
var u = -1;
for (r = n; r < s; r++) if (l(e, r) === l(t, -1 === u ? 0 : r - u)) {
-1 === u && (u = r);
if (r - u + 1 === c) return u * a;
} else {
-1 !== u && (r -= r - u);
u = -1;
}
} else {
n + c > s && (n = s - c);
for (r = n; r >= 0; r--) {
for (var p = !0, d = 0; d < c; d++) if (l(e, r + d) !== l(t, d)) {
p = !1;
break;
}
if (p) return r;
}
}
return -1;
}
c.prototype.includes = function(e, t, n) {
return -1 !== this.indexOf(e, t, n);
};
c.prototype.indexOf = function(e, t, n) {
return S(this, e, t, n, !0);
};
c.prototype.lastIndexOf = function(e, t, n) {
return S(this, e, t, n, !1);
};
function R(e, t, n, o) {
n = Number(n) || 0;
var i = e.length - n;
o ? (o = Number(o)) > i && (o = i) : o = i;
var r = t.length;
if (r % 2 != 0) throw new TypeError("Invalid hex string");
o > r / 2 && (o = r / 2);
for (var a = 0; a < o; ++a) {
var s = parseInt(t.substr(2 * a, 2), 16);
if (isNaN(s)) return a;
e[n + a] = s;
}
return a;
}
function C(e, t, n, o) {
return q(Z(t, e.length - n), e, n, o);
}
function A(e, t, n, o) {
return q(K(t), e, n, o);
}
function T(e, t, n, o) {
return A(e, t, n, o);
}
function O(e, t, n, o) {
return q(Q(t), e, n, o);
}
function w(e, t, n, o) {
return q(J(t, e.length - n), e, n, o);
}
c.prototype.write = function(e, t, n, o) {
if (void 0 === t) {
o = "utf8";
n = this.length;
t = 0;
} else if (void 0 === n && "string" == typeof t) {
o = t;
n = this.length;
t = 0;
} else {
if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
t |= 0;
if (isFinite(n)) {
n |= 0;
void 0 === o && (o = "utf8");
} else {
o = n;
n = void 0;
}
}
var i = this.length - t;
(void 0 === n || n > i) && (n = i);
if (e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
o || (o = "utf8");
for (var r = !1; ;) switch (o) {
case "hex":
return R(this, e, t, n);

case "utf8":
case "utf-8":
return C(this, e, t, n);

case "ascii":
return A(this, e, t, n);

case "latin1":
case "binary":
return T(this, e, t, n);

case "base64":
return O(this, e, t, n);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return w(this, e, t, n);

default:
if (r) throw new TypeError("Unknown encoding: " + o);
o = ("" + o).toLowerCase();
r = !0;
}
};
c.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
function M(e, t, n) {
return 0 === t && n === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, n));
}
function N(e, t, n) {
n = Math.min(e.length, n);
for (var o = [], i = t; i < n; ) {
var r = e[i], a = null, s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
if (i + s <= n) {
var c, l, u, p;
switch (s) {
case 1:
r < 128 && (a = r);
break;

case 2:
128 == (192 & (c = e[i + 1])) && (p = (31 & r) << 6 | 63 & c) > 127 && (a = p);
break;

case 3:
c = e[i + 1];
l = e[i + 2];
128 == (192 & c) && 128 == (192 & l) && (p = (15 & r) << 12 | (63 & c) << 6 | 63 & l) > 2047 && (p < 55296 || p > 57343) && (a = p);
break;

case 4:
c = e[i + 1];
l = e[i + 2];
u = e[i + 3];
128 == (192 & c) && 128 == (192 & l) && 128 == (192 & u) && (p = (15 & r) << 18 | (63 & c) << 12 | (63 & l) << 6 | 63 & u) > 65535 && p < 1114112 && (a = p);
}
}
if (null === a) {
a = 65533;
s = 1;
} else if (a > 65535) {
a -= 65536;
o.push(a >>> 10 & 1023 | 55296);
a = 56320 | 1023 & a;
}
o.push(a);
i += s;
}
return I(o);
}
var P = 4096;
function I(e) {
var t = e.length;
if (t <= P) return String.fromCharCode.apply(String, e);
for (var n = "", o = 0; o < t; ) n += String.fromCharCode.apply(String, e.slice(o, o += P));
return n;
}
function L(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) o += String.fromCharCode(127 & e[i]);
return o;
}
function U(e, t, n) {
var o = "";
n = Math.min(e.length, n);
for (var i = t; i < n; ++i) o += String.fromCharCode(e[i]);
return o;
}
function B(e, t, n) {
var o, i = e.length;
(!t || t < 0) && (t = 0);
(!n || n < 0 || n > i) && (n = i);
for (var r = "", a = t; a < n; ++a) r += (o = e[a]) < 16 ? "0" + o.toString(16) : o.toString(16);
return r;
}
function D(e, t, n) {
for (var o = e.slice(t, n), i = "", r = 0; r < o.length; r += 2) i += String.fromCharCode(o[r] + 256 * o[r + 1]);
return i;
}
c.prototype.slice = function(e, t) {
var n, o = this.length;
(e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : e > o && (e = o);
(t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : t > o && (t = o);
t < e && (t = e);
if (c.TYPED_ARRAY_SUPPORT) (n = this.subarray(e, t)).__proto__ = c.prototype; else {
var i = t - e;
n = new c(i, void 0);
for (var r = 0; r < i; ++r) n[r] = this[r + e];
}
return n;
};
function G(e, t, n) {
if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
}
c.prototype.readUIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || G(e, t, this.length);
for (var o = this[e], i = 1, r = 0; ++r < t && (i *= 256); ) o += this[e + r] * i;
return o;
};
c.prototype.readUIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || G(e, t, this.length);
for (var o = this[e + --t], i = 1; t > 0 && (i *= 256); ) o += this[e + --t] * i;
return o;
};
c.prototype.readUInt8 = function(e, t) {
t || G(e, 1, this.length);
return this[e];
};
c.prototype.readUInt16LE = function(e, t) {
t || G(e, 2, this.length);
return this[e] | this[e + 1] << 8;
};
c.prototype.readUInt16BE = function(e, t) {
t || G(e, 2, this.length);
return this[e] << 8 | this[e + 1];
};
c.prototype.readUInt32LE = function(e, t) {
t || G(e, 4, this.length);
return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
};
c.prototype.readUInt32BE = function(e, t) {
t || G(e, 4, this.length);
return 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
c.prototype.readIntLE = function(e, t, n) {
e |= 0;
t |= 0;
n || G(e, t, this.length);
for (var o = this[e], i = 1, r = 0; ++r < t && (i *= 256); ) o += this[e + r] * i;
o >= (i *= 128) && (o -= Math.pow(2, 8 * t));
return o;
};
c.prototype.readIntBE = function(e, t, n) {
e |= 0;
t |= 0;
n || G(e, t, this.length);
for (var o = t, i = 1, r = this[e + --o]; o > 0 && (i *= 256); ) r += this[e + --o] * i;
r >= (i *= 128) && (r -= Math.pow(2, 8 * t));
return r;
};
c.prototype.readInt8 = function(e, t) {
t || G(e, 1, this.length);
return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
};
c.prototype.readInt16LE = function(e, t) {
t || G(e, 2, this.length);
var n = this[e] | this[e + 1] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt16BE = function(e, t) {
t || G(e, 2, this.length);
var n = this[e + 1] | this[e] << 8;
return 32768 & n ? 4294901760 | n : n;
};
c.prototype.readInt32LE = function(e, t) {
t || G(e, 4, this.length);
return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
c.prototype.readInt32BE = function(e, t) {
t || G(e, 4, this.length);
return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
c.prototype.readFloatLE = function(e, t) {
t || G(e, 4, this.length);
return i.read(this, e, !0, 23, 4);
};
c.prototype.readFloatBE = function(e, t) {
t || G(e, 4, this.length);
return i.read(this, e, !1, 23, 4);
};
c.prototype.readDoubleLE = function(e, t) {
t || G(e, 8, this.length);
return i.read(this, e, !0, 52, 8);
};
c.prototype.readDoubleBE = function(e, t) {
t || G(e, 8, this.length);
return i.read(this, e, !1, 52, 8);
};
function k(e, t, n, o, i, r) {
if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (t > i || t < r) throw new RangeError('"value" argument is out of bounds');
if (n + o > e.length) throw new RangeError("Index out of range");
}
c.prototype.writeUIntLE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var i = 1, r = 0;
this[t] = 255 & e;
for (;++r < n && (i *= 256); ) this[t + r] = e / i & 255;
return t + n;
};
c.prototype.writeUIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
n |= 0;
o || k(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
var i = n - 1, r = 1;
this[t + i] = 255 & e;
for (;--i >= 0 && (r *= 256); ) this[t + i] = e / r & 255;
return t + n;
};
c.prototype.writeUInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 1, 255, 0);
c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
this[t] = 255 & e;
return t + 1;
};
function F(e, t, n, o) {
t < 0 && (t = 65535 + t + 1);
for (var i = 0, r = Math.min(e.length - n, 2); i < r; ++i) e[n + i] = (t & 255 << 8 * (o ? i : 1 - i)) >>> 8 * (o ? i : 1 - i);
}
c.prototype.writeUInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else F(this, e, t, !0);
return t + 2;
};
c.prototype.writeUInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 2, 65535, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else F(this, e, t, !1);
return t + 2;
};
function j(e, t, n, o) {
t < 0 && (t = 4294967295 + t + 1);
for (var i = 0, r = Math.min(e.length - n, 4); i < r; ++i) e[n + i] = t >>> 8 * (o ? i : 3 - i) & 255;
}
c.prototype.writeUInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t + 3] = e >>> 24;
this[t + 2] = e >>> 16;
this[t + 1] = e >>> 8;
this[t] = 255 & e;
} else j(this, e, t, !0);
return t + 4;
};
c.prototype.writeUInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 4, 4294967295, 0);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else j(this, e, t, !1);
return t + 4;
};
c.prototype.writeIntLE = function(e, t, n, o) {
e = +e;
t |= 0;
if (!o) {
var i = Math.pow(2, 8 * n - 1);
k(this, e, t, n, i - 1, -i);
}
var r = 0, a = 1, s = 0;
this[t] = 255 & e;
for (;++r < n && (a *= 256); ) {
e < 0 && 0 === s && 0 !== this[t + r - 1] && (s = 1);
this[t + r] = (e / a >> 0) - s & 255;
}
return t + n;
};
c.prototype.writeIntBE = function(e, t, n, o) {
e = +e;
t |= 0;
if (!o) {
var i = Math.pow(2, 8 * n - 1);
k(this, e, t, n, i - 1, -i);
}
var r = n - 1, a = 1, s = 0;
this[t + r] = 255 & e;
for (;--r >= 0 && (a *= 256); ) {
e < 0 && 0 === s && 0 !== this[t + r + 1] && (s = 1);
this[t + r] = (e / a >> 0) - s & 255;
}
return t + n;
};
c.prototype.writeInt8 = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 1, 127, -128);
c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e));
e < 0 && (e = 255 + e + 1);
this[t] = 255 & e;
return t + 1;
};
c.prototype.writeInt16LE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
} else F(this, e, t, !0);
return t + 2;
};
c.prototype.writeInt16BE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 2, 32767, -32768);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 8;
this[t + 1] = 255 & e;
} else F(this, e, t, !1);
return t + 2;
};
c.prototype.writeInt32LE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 4, 2147483647, -2147483648);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = 255 & e;
this[t + 1] = e >>> 8;
this[t + 2] = e >>> 16;
this[t + 3] = e >>> 24;
} else j(this, e, t, !0);
return t + 4;
};
c.prototype.writeInt32BE = function(e, t, n) {
e = +e;
t |= 0;
n || k(this, e, t, 4, 2147483647, -2147483648);
e < 0 && (e = 4294967295 + e + 1);
if (c.TYPED_ARRAY_SUPPORT) {
this[t] = e >>> 24;
this[t + 1] = e >>> 16;
this[t + 2] = e >>> 8;
this[t + 3] = 255 & e;
} else j(this, e, t, !1);
return t + 4;
};
function H(e, t, n, o) {
if (n + o > e.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("Index out of range");
}
function V(e, t, n, o, r) {
r || H(e, 0, n, 4);
i.write(e, t, n, o, 23, 4);
return n + 4;
}
c.prototype.writeFloatLE = function(e, t, n) {
return V(this, e, t, !0, n);
};
c.prototype.writeFloatBE = function(e, t, n) {
return V(this, e, t, !1, n);
};
function x(e, t, n, o, r) {
r || H(e, 0, n, 8);
i.write(e, t, n, o, 52, 8);
return n + 8;
}
c.prototype.writeDoubleLE = function(e, t, n) {
return x(this, e, t, !0, n);
};
c.prototype.writeDoubleBE = function(e, t, n) {
return x(this, e, t, !1, n);
};
c.prototype.copy = function(e, t, n, o) {
n || (n = 0);
o || 0 === o || (o = this.length);
t >= e.length && (t = e.length);
t || (t = 0);
o > 0 && o < n && (o = n);
if (o === n) return 0;
if (0 === e.length || 0 === this.length) return 0;
if (t < 0) throw new RangeError("targetStart out of bounds");
if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
if (o < 0) throw new RangeError("sourceEnd out of bounds");
o > this.length && (o = this.length);
e.length - t < o - n && (o = e.length - t + n);
var i, r = o - n;
if (this === e && n < t && t < o) for (i = r - 1; i >= 0; --i) e[i + t] = this[i + n]; else if (r < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (i = 0; i < r; ++i) e[i + t] = this[i + n]; else Uint8Array.prototype.set.call(e, this.subarray(n, n + r), t);
return r;
};
c.prototype.fill = function(e, t, n, o) {
if ("string" == typeof e) {
if ("string" == typeof t) {
o = t;
t = 0;
n = this.length;
} else if ("string" == typeof n) {
o = n;
n = this.length;
}
if (1 === e.length) {
var i = e.charCodeAt(0);
i < 256 && (e = i);
}
if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
if ("string" == typeof o && !c.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
} else "number" == typeof e && (e &= 255);
if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
if (n <= t) return this;
t >>>= 0;
n = void 0 === n ? this.length : n >>> 0;
e || (e = 0);
var r;
if ("number" == typeof e) for (r = t; r < n; ++r) this[r] = e; else {
var a = c.isBuffer(e) ? e : Z(new c(e, o).toString()), s = a.length;
for (r = 0; r < n - t; ++r) this[r + t] = a[r % s];
}
return this;
};
var z = /[^+\/0-9A-Za-z-_]/g;
function Y(e) {
if ((e = W(e).replace(z, "")).length < 2) return "";
for (;e.length % 4 != 0; ) e += "=";
return e;
}
function W(e) {
return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Z(e, t) {
t = t || Infinity;
for (var n, o = e.length, i = null, r = [], a = 0; a < o; ++a) {
if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
if (!i) {
if (n > 56319) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
if (a + 1 === o) {
(t -= 3) > -1 && r.push(239, 191, 189);
continue;
}
i = n;
continue;
}
if (n < 56320) {
(t -= 3) > -1 && r.push(239, 191, 189);
i = n;
continue;
}
n = 65536 + (i - 55296 << 10 | n - 56320);
} else i && (t -= 3) > -1 && r.push(239, 191, 189);
i = null;
if (n < 128) {
if ((t -= 1) < 0) break;
r.push(n);
} else if (n < 2048) {
if ((t -= 2) < 0) break;
r.push(n >> 6 | 192, 63 & n | 128);
} else if (n < 65536) {
if ((t -= 3) < 0) break;
r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
} else {
if (!(n < 1114112)) throw new Error("Invalid code point");
if ((t -= 4) < 0) break;
r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
}
}
return r;
}
function K(e) {
for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
return t;
}
function J(e, t) {
for (var n, o, i, r = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) {
o = (n = e.charCodeAt(a)) >> 8;
i = n % 256;
r.push(i);
r.push(o);
}
return r;
}
function Q(e) {
return o.toByteArray(Y(e));
}
function q(e, t, n, o) {
for (var i = 0; i < o && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
return i;
}
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 5,
ieee754: 9,
isarray: 7
} ],
7: [ function(e, t) {
var n = {}.toString;
t.exports = Array.isArray || function(e) {
return "[object Array]" == n.call(e);
};
}, {} ],
8: [ function(e, t) {
(function(n) {
var o = e("util"), i = e("assert");
function r() {
return new Date().getTime();
}
var a, s = Array.prototype.slice, c = {};
a = "undefined" != typeof n && n.console ? n.console : "undefined" != typeof window && window.console ? window.console : {};
for (var l = [ [ function() {}, "log" ], [ function() {
a.log.apply(a, arguments);
}, "info" ], [ function() {
a.log.apply(a, arguments);
}, "warn" ], [ function() {
a.warn.apply(a, arguments);
}, "error" ], [ function(e) {
c[e] = r();
}, "time" ], [ function(e) {
var t = c[e];
if (!t) throw new Error("No such label: " + e);
delete c[e];
var n = r() - t;
a.log(e + ": " + n + "ms");
}, "timeEnd" ], [ function() {
var e = new Error();
e.name = "Trace";
e.message = o.format.apply(null, arguments);
a.error(e.stack);
}, "trace" ], [ function(e) {
a.log(o.inspect(e) + "\n");
}, "dir" ], [ function(e) {
if (!e) {
var t = s.call(arguments, 1);
i.ok(!1, o.format.apply(null, t));
}
}, "assert" ] ], u = 0; u < l.length; u++) {
var p = l[u], d = p[0], h = p[1];
a[h] || (a[h] = d);
}
t.exports = a;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
assert: 1,
util: 13
} ],
9: [ function(e, t, n) {
n.read = function(e, t, n, o, i) {
var r, a, s = 8 * i - o - 1, c = (1 << s) - 1, l = c >> 1, u = -7, p = n ? i - 1 : 0, d = n ? -1 : 1, h = e[t + p];
p += d;
r = h & (1 << -u) - 1;
h >>= -u;
u += s;
for (;u > 0; r = 256 * r + e[t + p], p += d, u -= 8) ;
a = r & (1 << -u) - 1;
r >>= -u;
u += o;
for (;u > 0; a = 256 * a + e[t + p], p += d, u -= 8) ;
if (0 === r) r = 1 - l; else {
if (r === c) return a ? NaN : Infinity * (h ? -1 : 1);
a += Math.pow(2, o);
r -= l;
}
return (h ? -1 : 1) * a * Math.pow(2, r - o);
};
n.write = function(e, t, n, o, i, r) {
var a, s, c, l = 8 * r - i - 1, u = (1 << l) - 1, p = u >> 1, d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = o ? 0 : r - 1, f = o ? 1 : -1, _ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
t = Math.abs(t);
if (isNaN(t) || Infinity === t) {
s = isNaN(t) ? 1 : 0;
a = u;
} else {
a = Math.floor(Math.log(t) / Math.LN2);
if (t * (c = Math.pow(2, -a)) < 1) {
a--;
c *= 2;
}
if ((t += a + p >= 1 ? d / c : d * Math.pow(2, 1 - p)) * c >= 2) {
a++;
c /= 2;
}
if (a + p >= u) {
s = 0;
a = u;
} else if (a + p >= 1) {
s = (t * c - 1) * Math.pow(2, i);
a += p;
} else {
s = t * Math.pow(2, p - 1) * Math.pow(2, i);
a = 0;
}
}
for (;i >= 8; e[n + h] = 255 & s, h += f, s /= 256, i -= 8) ;
a = a << i | s;
l += i;
for (;l > 0; e[n + h] = 255 & a, h += f, a /= 256, l -= 8) ;
e[n + h - f] |= 128 * _;
};
}, {} ],
10: [ function(e, t) {
var n, o, i = t.exports = {};
function r() {
throw new Error("setTimeout has not been defined");
}
function a() {
throw new Error("clearTimeout has not been defined");
}
(function() {
try {
n = "function" == typeof setTimeout ? setTimeout : r;
} catch (e) {
n = r;
}
try {
o = "function" == typeof clearTimeout ? clearTimeout : a;
} catch (e) {
o = a;
}
})();
function s(e) {
if (n === setTimeout) return setTimeout(e, 0);
if ((n === r || !n) && setTimeout) {
n = setTimeout;
return setTimeout(e, 0);
}
try {
return n(e, 0);
} catch (t) {
try {
return n.call(null, e, 0);
} catch (t) {
return n.call(this, e, 0);
}
}
}
function c(e) {
if (o === clearTimeout) return clearTimeout(e);
if ((o === a || !o) && clearTimeout) {
o = clearTimeout;
return clearTimeout(e);
}
try {
return o(e);
} catch (t) {
try {
return o.call(null, e);
} catch (t) {
return o.call(this, e);
}
}
}
var l, u = [], p = !1, d = -1;
function h() {
if (p && l) {
p = !1;
l.length ? u = l.concat(u) : d = -1;
u.length && f();
}
}
function f() {
if (!p) {
var e = s(h);
p = !0;
for (var t = u.length; t; ) {
l = u;
u = [];
for (;++d < t; ) l && l[d].run();
d = -1;
t = u.length;
}
l = null;
p = !1;
c(e);
}
}
i.nextTick = function(e) {
var t = new Array(arguments.length - 1);
if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
u.push(new _(e, t));
1 !== u.length || p || s(f);
};
function _(e, t) {
this.fun = e;
this.array = t;
}
_.prototype.run = function() {
this.fun.apply(null, this.array);
};
i.title = "browser";
i.browser = !0;
i.env = {};
i.argv = [];
i.version = "";
i.versions = {};
function g() {}
i.on = g;
i.addListener = g;
i.once = g;
i.off = g;
i.removeListener = g;
i.removeAllListeners = g;
i.emit = g;
i.prependListener = g;
i.prependOnceListener = g;
i.listeners = function() {
return [];
};
i.binding = function() {
throw new Error("process.binding is not supported");
};
i.cwd = function() {
return "/";
};
i.chdir = function() {
throw new Error("process.chdir is not supported");
};
i.umask = function() {
return 0;
};
}, {} ],
11: [ function(e, t, n) {
arguments[4][2][0].apply(n, arguments);
}, {
dup: 2
} ],
12: [ function(e, t, n) {
arguments[4][3][0].apply(n, arguments);
}, {
dup: 3
} ],
13: [ function(e, t, n) {
arguments[4][4][0].apply(n, arguments);
}, {
"./support/isBuffer": 12,
_process: 10,
dup: 4,
inherits: 11
} ],
14: [ function(e, t) {
var n = {
utf8: {
stringToBytes: function(e) {
return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
},
bytesToString: function(e) {
return decodeURIComponent(escape(n.bin.bytesToString(e)));
}
},
bin: {
stringToBytes: function(e) {
for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
return t;
},
bytesToString: function(e) {
for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
return t.join("");
}
}
};
t.exports = n;
}, {} ],
15: [ function(e, t) {
n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {
rotl: function(e, t) {
return e << t | e >>> 32 - t;
},
rotr: function(e, t) {
return e << 32 - t | e >>> t;
},
endian: function(e) {
if (e.constructor == Number) return 16711935 & o.rotl(e, 8) | 4278255360 & o.rotl(e, 24);
for (var t = 0; t < e.length; t++) e[t] = o.endian(e[t]);
return e;
},
randomBytes: function(e) {
for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
return t;
},
bytesToWords: function(e) {
for (var t = [], n = 0, o = 0; n < e.length; n++, o += 8) t[o >>> 5] |= e[n] << 24 - o % 32;
return t;
},
wordsToBytes: function(e) {
for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
return t;
},
bytesToHex: function(e) {
for (var t = [], n = 0; n < e.length; n++) {
t.push((e[n] >>> 4).toString(16));
t.push((15 & e[n]).toString(16));
}
return t.join("");
},
hexToBytes: function(e) {
for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
return t;
},
bytesToBase64: function(e) {
for (var t = [], o = 0; o < e.length; o += 3) for (var i = e[o] << 16 | e[o + 1] << 8 | e[o + 2], r = 0; r < 4; r++) 8 * o + 6 * r <= 8 * e.length ? t.push(n.charAt(i >>> 6 * (3 - r) & 63)) : t.push("=");
return t.join("");
},
base64ToBytes: function(e) {
e = e.replace(/[^A-Z0-9+\/]/gi, "");
for (var t = [], o = 0, i = 0; o < e.length; i = ++o % 4) 0 != i && t.push((n.indexOf(e.charAt(o - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | n.indexOf(e.charAt(o)) >>> 6 - 2 * i);
return t;
}
}, t.exports = o;
var n, o;
}, {} ],
16: [ function(e, t) {
t.exports = function(e) {
return null != e && (n(e) || o(e) || !!e._isBuffer);
};
function n(e) {
return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
}
function o(e) {
return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
}
}, {} ],
17: [ function(e, t) {
(function() {
var n = e("crypt"), o = e("charenc").utf8, i = e("is-buffer"), r = e("charenc").bin, a = function(e, t) {
e.constructor == String ? e = t && "binary" === t.encoding ? r.stringToBytes(e) : o.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || e.constructor === Uint8Array || (e = e.toString());
for (var s = n.bytesToWords(e), c = 8 * e.length, l = 1732584193, u = -271733879, p = -1732584194, d = 271733878, h = 0; h < s.length; h++) s[h] = 16711935 & (s[h] << 8 | s[h] >>> 24) | 4278255360 & (s[h] << 24 | s[h] >>> 8);
s[c >>> 5] |= 128 << c % 32;
s[14 + (c + 64 >>> 9 << 4)] = c;
var f = a._ff, _ = a._gg, g = a._hh, y = a._ii;
for (h = 0; h < s.length; h += 16) {
var m = l, v = u, E = p, S = d;
l = f(l, u, p, d, s[h + 0], 7, -680876936);
d = f(d, l, u, p, s[h + 1], 12, -389564586);
p = f(p, d, l, u, s[h + 2], 17, 606105819);
u = f(u, p, d, l, s[h + 3], 22, -1044525330);
l = f(l, u, p, d, s[h + 4], 7, -176418897);
d = f(d, l, u, p, s[h + 5], 12, 1200080426);
p = f(p, d, l, u, s[h + 6], 17, -1473231341);
u = f(u, p, d, l, s[h + 7], 22, -45705983);
l = f(l, u, p, d, s[h + 8], 7, 1770035416);
d = f(d, l, u, p, s[h + 9], 12, -1958414417);
p = f(p, d, l, u, s[h + 10], 17, -42063);
u = f(u, p, d, l, s[h + 11], 22, -1990404162);
l = f(l, u, p, d, s[h + 12], 7, 1804603682);
d = f(d, l, u, p, s[h + 13], 12, -40341101);
p = f(p, d, l, u, s[h + 14], 17, -1502002290);
l = _(l, u = f(u, p, d, l, s[h + 15], 22, 1236535329), p, d, s[h + 1], 5, -165796510);
d = _(d, l, u, p, s[h + 6], 9, -1069501632);
p = _(p, d, l, u, s[h + 11], 14, 643717713);
u = _(u, p, d, l, s[h + 0], 20, -373897302);
l = _(l, u, p, d, s[h + 5], 5, -701558691);
d = _(d, l, u, p, s[h + 10], 9, 38016083);
p = _(p, d, l, u, s[h + 15], 14, -660478335);
u = _(u, p, d, l, s[h + 4], 20, -405537848);
l = _(l, u, p, d, s[h + 9], 5, 568446438);
d = _(d, l, u, p, s[h + 14], 9, -1019803690);
p = _(p, d, l, u, s[h + 3], 14, -187363961);
u = _(u, p, d, l, s[h + 8], 20, 1163531501);
l = _(l, u, p, d, s[h + 13], 5, -1444681467);
d = _(d, l, u, p, s[h + 2], 9, -51403784);
p = _(p, d, l, u, s[h + 7], 14, 1735328473);
l = g(l, u = _(u, p, d, l, s[h + 12], 20, -1926607734), p, d, s[h + 5], 4, -378558);
d = g(d, l, u, p, s[h + 8], 11, -2022574463);
p = g(p, d, l, u, s[h + 11], 16, 1839030562);
u = g(u, p, d, l, s[h + 14], 23, -35309556);
l = g(l, u, p, d, s[h + 1], 4, -1530992060);
d = g(d, l, u, p, s[h + 4], 11, 1272893353);
p = g(p, d, l, u, s[h + 7], 16, -155497632);
u = g(u, p, d, l, s[h + 10], 23, -1094730640);
l = g(l, u, p, d, s[h + 13], 4, 681279174);
d = g(d, l, u, p, s[h + 0], 11, -358537222);
p = g(p, d, l, u, s[h + 3], 16, -722521979);
u = g(u, p, d, l, s[h + 6], 23, 76029189);
l = g(l, u, p, d, s[h + 9], 4, -640364487);
d = g(d, l, u, p, s[h + 12], 11, -421815835);
p = g(p, d, l, u, s[h + 15], 16, 530742520);
l = y(l, u = g(u, p, d, l, s[h + 2], 23, -995338651), p, d, s[h + 0], 6, -198630844);
d = y(d, l, u, p, s[h + 7], 10, 1126891415);
p = y(p, d, l, u, s[h + 14], 15, -1416354905);
u = y(u, p, d, l, s[h + 5], 21, -57434055);
l = y(l, u, p, d, s[h + 12], 6, 1700485571);
d = y(d, l, u, p, s[h + 3], 10, -1894986606);
p = y(p, d, l, u, s[h + 10], 15, -1051523);
u = y(u, p, d, l, s[h + 1], 21, -2054922799);
l = y(l, u, p, d, s[h + 8], 6, 1873313359);
d = y(d, l, u, p, s[h + 15], 10, -30611744);
p = y(p, d, l, u, s[h + 6], 15, -1560198380);
u = y(u, p, d, l, s[h + 13], 21, 1309151649);
l = y(l, u, p, d, s[h + 4], 6, -145523070);
d = y(d, l, u, p, s[h + 11], 10, -1120210379);
p = y(p, d, l, u, s[h + 2], 15, 718787259);
u = y(u, p, d, l, s[h + 9], 21, -343485551);
l = l + m >>> 0;
u = u + v >>> 0;
p = p + E >>> 0;
d = d + S >>> 0;
}
return n.endian([ l, u, p, d ]);
};
a._ff = function(e, t, n, o, i, r, a) {
var s = e + (t & n | ~t & o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + t;
};
a._gg = function(e, t, n, o, i, r, a) {
var s = e + (t & o | n & ~o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + t;
};
a._hh = function(e, t, n, o, i, r, a) {
var s = e + (t ^ n ^ o) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + t;
};
a._ii = function(e, t, n, o, i, r, a) {
var s = e + (n ^ (t | ~o)) + (i >>> 0) + a;
return (s << r | s >>> 32 - r) + t;
};
a._blocksize = 16;
a._digestsize = 16;
t.exports = function(e, t) {
if (null == e) throw new Error("Illegal argument " + e);
var o = n.wordsToBytes(a(e, t));
return t && t.asBytes ? o : t && t.asString ? r.bytesToString(o) : n.bytesToHex(o);
};
})();
}, {
charenc: 14,
crypt: 15,
"is-buffer": 16
} ],
DataCenter: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6dd53VIJxhDKb1mMOEPSGTs", "DataCenter");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DataCenter = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = null;
return t;
}
t.module = "【数据中心】";
return t;
}(e("../utils/SingletonT").SingletonT);
n.DataCenter = r;
cc._RF.pop();
}, {
"../utils/SingletonT": "SingletonT"
} ],
Decorators: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "28328Zes0dNXoR3TlxVIFxD", "Decorators");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.inject = n.registerEntry = void 0;
n.registerEntry = function(e, t, n) {
return function(o) {
o.__classname__ = e;
o.bundle = t;
App.entryManager.register(o, n);
};
};
function o(e, t, n) {
var o = cc.find(e, t);
return cc.js.isChildClassOf(n, cc.Component) ? null == o ? void 0 : o.getComponent(n) : o;
}
n.inject = function(e, t, n) {
return function(i, r) {
if (i instanceof cc.Component) {
var a = i;
if (!Reflect.has(i, "_FIND_OPTIONS_")) {
var s = a.onLoad;
a.onLoad = function() {
var e = this, t = Reflect.get(e, "_FIND_OPTIONS_"), n = function(n) {
var i = Reflect.get(t, n);
Reflect.get(e, i.member) || Reflect.defineProperty(e, i.member, {
enumerable: !0,
configurable: !0,
get: function() {
var t = e.node;
if (i.root) {
var r = "__" + i.root.replace(/\//g, "_");
cc.isValid(e[r]) || (e[r] = o(i.root, t, cc.Node));
t = e[r];
}
cc.isValid(e[n]) || (e[n] = o(i.path, t, i.type));
return e[n];
},
set: function(t) {
e[n] = t;
}
});
};
for (var i in t) n(i);
s && Reflect.apply(s, this, arguments);
};
Reflect.defineProperty(i, "_FIND_OPTIONS_", {
value: {}
});
}
var c = {
path: e,
type: t,
member: r,
root: n
}, l = "__" + r, u = Reflect.get(i, "_FIND_OPTIONS_");
Reflect.defineProperty(u, l, {
value: c,
enumerable: !0
});
} else Log.e("无法注入,仅支持 Component 组件");
};
};
cc._RF.pop();
}, {} ],
DefaultCodec: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d8e3b/byClMa67KBqQZr2Fa", "DefaultCodec");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.DefaultCodec = void 0;
var r = e("../../../defines/Macros"), a = e("../../../plugin/ByteArray"), s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mainCmd = 0;
t.subCmd = 0;
t.buffer = null;
t.headerSize = 3 * Uint32Array.BYTES_PER_ELEMENT;
return t;
}
t.prototype.pack = function(e) {
this.mainCmd = e.mainCmd;
this.subCmd = e.subCmd;
var t = 0;
e.buffer && (t = e.buffer.length);
var n = new a.ByteArray();
n.endian = r.Macro.USING_LITTLE_ENDIAN;
n.writeUnsignedInt(t);
n.writeUnsignedInt(this.mainCmd);
n.writeUnsignedInt(this.subCmd);
if (e.buffer) {
var o = new a.ByteArray(e.buffer);
n.writeBytes(o);
}
this.buffer = n.bytes;
return !0;
};
t.prototype.unPack = function(e) {
var t = new a.ByteArray(e.data);
t.endian = r.Macro.USING_LITTLE_ENDIAN;
var n = t.readUnsignedInt();
this.mainCmd = t.readUnsignedInt();
this.subCmd = t.readUnsignedInt();
var o = t.buffer.slice(t.position);
this.buffer = new Uint8Array(o);
return n == this.buffer.length;
};
Object.defineProperty(t.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return t;
}(e("./Message").Codec);
n.DefaultCodec = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../../plugin/ByteArray": "ByteArray",
"./Message": "Message"
} ],
Dispatcher: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "76e60J3VtFFtpDVPb7EZx5v", "Dispatcher");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Dispatcher = void 0;
var o = function() {
function e() {
this._eventCaches = null;
this.isResident = !0;
this.module = null;
this._eventCaches = {};
}
Object.defineProperty(e, "instance", {
get: function() {
return this._instance || (this._instance = new e());
},
enumerable: !1,
configurable: !0
});
e.prototype.destory = function() {
e._instance = null;
};
e.prototype.add = function(e, t, n, o) {
if (e && t && n) {
for (var i = this._eventCaches[e] || [], r = !1, a = 0; a < i.length; a++) if (i[a].target === n) {
r = !0;
break;
}
if (!r) {
var s = {
type: e,
callback: t,
target: n,
once: o
};
i.push(s);
this._eventCaches[e] = i;
}
}
};
e.prototype.remove = function(e, t) {
if (e && t) {
var n = this._eventCaches[e];
if (n) {
for (var o = 0; o < n.length; o++) if (n[o].target === t) {
n.splice(o, 1);
break;
}
0 == n.length && delete this._eventCaches[e];
}
}
};
e.prototype.dispatch = function() {
if (!(arguments.length < 1)) {
var e = arguments[0];
if (e) {
Array.prototype.shift.apply(arguments);
var t = this._eventCaches[e];
if (t) {
for (var n = [], o = 0; o < t.length; o++) {
var i = t[o];
try {
"object" == typeof Reflect ? Reflect.apply(i.callback, i.target, arguments) : i.callback.apply(i.target, arguments);
i.once && n.push(i);
} catch (e) {
Log.e(e);
}
}
for (o = 0; o < n.length; o++) {
var r = n[o];
this.remove(r.type, r.target);
}
}
}
}
};
e._instance = null;
e.module = "【事件管理器】";
return e;
}();
n.Dispatcher = o;
window.dispatch = function() {
App ? Reflect.apply(App.dispatcher.dispatch, App.dispatcher, arguments) : Reflect.apply(o.instance.dispatch, o.instance, arguments);
};
cc._RF.pop();
}, {} ],
DragonPlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cf70foaiJ9FcIJlsyRC2mld", "DragonPlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.dragon = null;
return t;
}
t.prototype.init = function() {
this.dragon || (this.dragon = this.node.getComponentInChildren(dragonBones.ArmatureDisplay));
};
t.prototype.show = function() {
this.init();
this.node.active = !0;
this.dragon.armature().animation.gotoAndPlayByFrame(this.dragon.animationName, 0);
};
t.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], t);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
ElementState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a5689NY8kROP6+M7phBJEYf", "ElementState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../ElementAnimState/BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function(e) {
this.rollConfig = e;
this.states = [];
for (var t = this.node.children, n = 0; n < t.length; n++) {
var o = t[n].getComponent(a.default);
o && this.states.push(o);
}
};
t.prototype.show = function(e) {
this.node.active = !0;
for (var t = 0; t < this.states.length; t++) this.states[t].state == e ? this.states[t].show(this.rollConfig) : this.states[t].hide();
};
t.prototype.hide = function() {
this.node.active = !1;
};
t.prototype.setExtraFunction = function() {};
return r([ c ], t);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../ElementAnimState/BaseAnimState": "BaseAnimState"
} ],
EntryDelegate: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dffc4VtciJG9ooQbgINQE1F", "EntryDelegate");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EntryDelegate = void 0;
var o = e("../../defines/Macros"), i = function() {
function e() {}
e.prototype.onEnterGameView = function(e, t) {
var n = this.getPersistBundle();
e && n.push(e.bundle);
App.gameView && App.gameView.close();
App.gameView = t;
};
e.prototype.onShowGameView = function() {};
e.prototype.onCheckUpdate = function() {
Log.d("主包检测更新");
var e = this.getEntryConfig(o.Macro.BUNDLE_RESOURCES);
App.bundleManager.enterBundle(e);
};
e.prototype.getPersistBundle = function() {
return [ o.Macro.BUNDLE_RESOURCES ];
};
e.prototype.onEnterMain = function(e, t) {
if (e) {
App.gameView && App.gameView.close();
e.onEnter(t);
}
};
e.prototype.getEntryConfig = function() {
return null;
};
return e;
}();
n.EntryDelegate = i;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
EntryManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6a0a5urXGFIa6PxPM70GI94", "EntryManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EntryManager = void 0;
var o = e("./EntryDelegate"), i = e("../../defines/Macros"), r = e("../../../common/config/GlobalVar"), a = e("../../../common/enum/GlobalEnum"), s = e("../../../common/event/CommonEvent"), c = function() {
function e() {
this.module = null;
this.isResident = !0;
this._entrys = new Map();
this.delegate = new o.EntryDelegate();
this.node = null;
}
e.prototype.register = function(e, t) {
var n = this.getEntry(e.bundle);
n && this._entrys.delete(e.bundle);
(n = new e()).bundle = e.bundle;
n.gameViewType = t;
this._entrys.set(n.bundle, n);
this.node && n.onLoad(this.node);
};
e.prototype.onLoad = function(e) {
var t = this;
this.node = e;
this._entrys.forEach(function(e) {
if (!e.isRunning) {
e.onLoad(t.node);
e.isMain && e.onEnter();
}
});
};
e.prototype.onDestroy = function() {
this._entrys.forEach(function(e) {
e.onDestroy();
});
};
e.prototype.onCheckUpdate = function() {
this.delegate.onCheckUpdate();
};
e.prototype.call = function(e, t) {
for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
var i = this.getEntry(e);
i && i.call(t, n);
};
e.prototype.enterBundle = function(e, t) {
var n = this.delegate.getEntryConfig(e);
if (n) {
if (e == i.Macro.BUNDLE_RESOURCES) {
var o = this.getEntry(e);
r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Login;
this.delegate.onEnterMain(o, t);
} else {
n.userData = t;
if (n.bundle == i.Macro.BUNDLE_RESOURCES) {
r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Hall;
dispatch(s.CommonEvent.Open_Show_Hide_laba, !0, 1);
} else n.bundle.includes("activity") ? r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Activity : r.GlobalVar.moduleGame = a.GlobalEnum.HttpUrlType.Game;
App.bundleManager.enterBundle(n);
}
dispatch(s.CommonEvent.laba_ChangeView);
}
};
e.prototype.backBundle = function(e) {
var t = App.stageData.prevWhere;
t ? this.enterBundle(t, e) : Log.d(this.module + "已经是最后一个场景，无法返回");
};
e.prototype.onLoadBundleComplete = function(e) {
e.isLoaded = !0;
var t = this.getEntry(e.bundle);
t && t.onEnter(e.userData);
};
e.prototype.onEnterGameView = function(e, t) {
var n = this.getEntry(e);
if (n) {
this.delegate.onEnterGameView(n, t);
n.onEnterGameView(t);
}
};
e.prototype.onShowGameView = function(e, t) {
var n = this.getEntry(e);
if (n) {
this.delegate.onShowGameView(n, t);
n.onShowGameView(t);
}
};
e.prototype.onUnloadBundle = function(e) {
var t = this.getEntry(e);
t && t.onUnloadBundle();
};
e.prototype.onDestroyGameView = function(e, t) {
var n = this.getEntry(e);
if (n) {
n.onUnloadBundle();
n.onDestroyGameView(t);
}
};
e.prototype.getEntry = function(e) {
var t = App.bundleManager.getBundleName(e);
return this._entrys.get(t) || null;
};
e.prototype.debug = function() {
Log.d("-------Bundle入口管理器-------");
this._entrys.forEach(function(e) {
Log.d("bundle : " + e.bundle);
});
};
e.module = "【入口管理器】";
return e;
}();
n.EntryManager = c;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../../common/enum/GlobalEnum": "GlobalEnum",
"../../../common/event/CommonEvent": "CommonEvent",
"../../defines/Macros": "Macros",
"./EntryDelegate": "EntryDelegate"
} ],
Entry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b3b13nmoK5Kw6BrevBcoPth", "Entry");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Entry = void 0;
var o = e("../../../common/config/GlobalVar"), i = e("../../defines/Macros"), r = e("../asset/ResourceLoader"), a = function() {
function e() {
this.gameViewType = null;
this.isMain = !1;
this.bundle = "";
this.loader = null;
this.node = null;
this.isRunning = !1;
this._gameView = null;
this.loader = new r.default();
}
Object.defineProperty(e.prototype, "gameView", {
get: function() {
return this._gameView;
},
set: function(e) {
this._gameView = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function(e) {
this.node = e;
this.isRunning = !0;
};
e.prototype.onDestroy = function() {
this.isRunning = !1;
};
e.prototype.onEnter = function(e) {
var t = this;
o.GlobalVar.curGameAlias = this.bundle;
this.initData();
this.loadResources(function() {
t.openGameView(e);
});
};
e.prototype.onEnterGameView = function(e) {
this._gameView = e;
};
e.prototype.onShowGameView = function() {};
e.prototype.onDestroyGameView = function() {
this._gameView = null;
};
e.prototype.onUnloadBundle = function() {
App.uiManager.closeBundleView(this.bundle);
this.unloadResources();
};
e.prototype.unloadResources = function() {
this.loader.unLoadResources();
};
e.prototype.openGameView = function(e) {
if (this.bundle != i.Macro.BUNDLE_RESOURCES) App.uiManager.open({
type: this.gameViewType,
bundle: this.bundle,
args: e,
isRoot: !0
}); else {
App.uiManager.open({
type: this.gameViewType,
bundle: this.bundle,
args: e,
isRoot: !0
});
App.bundleManager.unLoadOtherBundles(null);
}
};
e.prototype.closeGameView = function() {
App.uiManager.close(this.gameViewType);
};
e.prototype.call = function() {};
e.bundle = "";
return e;
}();
n.Entry = a;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../defines/Macros": "Macros",
"../asset/ResourceLoader": "ResourceLoader"
} ],
Enums: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "23267NRTnFKrK0t8pgnX8bC", "Enums");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NodeEvent = n.ButtonSpriteType = n.ViewStatus = n.LogLevel = void 0;
(function(e) {
e[e.DEBUG = 1] = "DEBUG";
e[e.DUMP = 16] = "DUMP";
e[e.WARN = 256] = "WARN";
e[e.ERROR = 4096] = "ERROR";
e[e.NONE = 65536] = "NONE";
e[e.ALL = 4369] = "ALL";
})(n.LogLevel || (n.LogLevel = {}));
(function(e) {
e[e.WAITTING_CLOSE = 0] = "WAITTING_CLOSE";
e[e.WATITING_HIDE = 1] = "WATITING_HIDE";
e[e.WAITTING_NONE = 2] = "WAITTING_NONE";
})(n.ViewStatus || (n.ViewStatus = {}));
(function(e) {
e.Norml = "normalSprite";
e.Pressed = "pressedSprite";
e.Hover = "hoverSprite";
e.Disable = "disabledSprite";
})(n.ButtonSpriteType || (n.ButtonSpriteType = {}));
(function(e) {
e.click = "click";
e.toggle = "toggle";
})(n.NodeEvent || (n.NodeEvent = {}));
cc._RF.pop();
}, {} ],
EventComponent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2e4d76YTw1N17MrzXvyK5Tx", "EventComponent");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../core/event/EventProcessor"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._eventProcessor = new a.EventProcessor();
return t;
}
t.prototype.on = function(e) {
e.target || (e.target = this);
this._eventProcessor.on(e);
};
t.prototype.once = function(e) {
e.target || (e.target = this);
this._eventProcessor.once(e);
};
t.prototype.off = function(e) {
e.target || (e.target = this);
this._eventProcessor.off(e);
};
t.prototype.onD = function(e, t) {
this.on({
bind: "Dispatcher",
type: e,
cb: t
});
};
t.prototype.onceD = function(e, t) {
this.once({
bind: "Dispatcher",
type: e,
cb: t
});
};
t.prototype.offD = function(e) {
this.off({
bind: "Dispatcher",
type: e
});
};
t.prototype.onG = function(e, t) {
this.on({
bind: "Game",
type: e,
cb: t
});
};
t.prototype.onceG = function(e, t) {
this.once({
bind: "Game",
type: e,
cb: t
});
};
t.prototype.offG = function(e, t) {
this.off({
bind: "Game",
type: e,
cb: t
});
};
t.prototype.onI = function(e, t) {
this.on({
bind: "Input",
type: e,
cb: t
});
};
t.prototype.onceI = function(e, t) {
this.once({
bind: "Input",
type: e,
cb: t
});
};
t.prototype.offI = function(e, t) {
this.off({
bind: "Input",
type: e,
cb: t
});
};
t.prototype.onN = function(e, t, n, o, i) {
this.on({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
t.prototype.onceN = function(e, t, n, o, i) {
this.once({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
t.prototype.offN = function(e, t, n, o, i) {
this.off({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
t.prototype.getComponentEvent = function(e, t) {
var n = new cc.Component.EventHandler();
n.target = this.node;
n.component = this._className;
n.handler = e;
n.customEventData = t;
return n;
};
t.prototype.addEvents = function() {};
t.prototype.onLoad = function() {
this.addEvents();
};
t.prototype.onDestroy = function() {
this._eventProcessor.onDestroy();
};
return r([ c ], t);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../core/event/EventProcessor": "EventProcessor"
} ],
EventProcessor: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c7128LLSnRNc7ihWrVwwpuJ", "EventProcessor");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.EventProcessor = void 0;
var o = function() {
function e() {
this._eventsD = new Map();
this._eventsG = [];
this._eventsI = [];
}
e.prototype.onD = function(e, t) {
this.on({
bind: "Dispatcher",
type: e,
cb: t
});
};
e.prototype.onceD = function(e, t) {
this.once({
bind: "Dispatcher",
type: e,
cb: t
});
};
e.prototype.offD = function(e) {
this.off({
bind: "Dispatcher",
type: e
});
};
e.prototype.onG = function(e, t) {
this.on({
bind: "Game",
type: e,
cb: t
});
};
e.prototype.onceG = function(e, t) {
this.once({
bind: "Game",
type: e,
cb: t
});
};
e.prototype.offG = function(e, t) {
this.off({
bind: "Game",
type: e,
cb: t
});
};
e.prototype.onI = function(e, t) {
this.on({
bind: "Input",
type: e,
cb: t
});
};
e.prototype.onceI = function(e, t) {
this.once({
bind: "Input",
type: e,
cb: t
});
};
e.prototype.offI = function(e, t) {
this.off({
bind: "Input",
type: e,
cb: t
});
};
e.prototype.onN = function(e, t, n, o, i) {
this.on({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
e.prototype.onceN = function(e, t, n, o, i) {
this.once({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
e.prototype.offN = function(e, t, n, o, i) {
this.off({
bind: "Node",
type: t,
cb: n,
target: o,
useCapture: i,
node: e
});
};
e.prototype.addEvents = function() {};
e.prototype.onLoad = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
this.addEvents();
};
e.prototype.onDestroy = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
this._cleanD();
this._cleanG();
this._cleanI();
this._cleanN();
};
e.prototype.on = function(e) {
switch (e.bind) {
case "Dispatcher":
this._onD(e);
break;

case "Game":
this._onG(e);
break;

case "Input":
this._onI(e);
break;

case "Node":
this._onN(e);
break;

default:
Log.e("on " + e.bind + " 未知事件类型");
}
};
e.prototype.once = function(e) {
e.once = !0;
this.on(e);
};
e.prototype.off = function(e) {
switch (e.bind) {
case "Dispatcher":
this._offD(e);
break;

case "Game":
this._offG(e);
break;

case "Input":
this._offI(e);
break;

case "Node":
this._offN(e);
break;

default:
Log.e("off " + e.bind + " 未知事件类型");
}
};
e.prototype._onD = function(e) {
e.target || (e.target = this);
if (this._eventsD.has(e.type)) Log.e(e.type + " 重复注册"); else {
App.dispatcher.add(e.type, e.cb, e.target, e.once);
this._eventsD.set(e.type, e);
}
};
e.prototype._offD = function(e) {
e.target || (e.target = this);
if (this._eventsD.has(e.type)) {
App.dispatcher.remove(e.type, e.target);
this._eventsD.delete(e.type);
}
};
e.prototype._cleanD = function() {
this._eventsD.forEach(function(e) {
App.dispatcher.remove(e.type, e.target);
});
this._eventsD.clear();
};
e.prototype._onG = function(e) {
e.target || (e.target = this);
if (!this._has(this._eventsG, e)) {
e.once ? cc.game.once(e.type, e.cb, e.target) : cc.game.on(e.type, e.cb, e.target);
this._eventsG.push(e);
}
};
e.prototype._offG = function(e) {
e.target || (e.target = this);
cc.game.off(e.type, e.cb, e.target);
for (var t = 0; t < this._eventsG.length; t++) {
var n = this._eventsG[t];
if (n.type == e.type && n.cb == e.cb && n.target == n.target) {
this._eventsG.splice(t, 1);
break;
}
}
};
e.prototype._cleanG = function() {
for (var e = 0; e < this._eventsG.length; e++) {
var t = this._eventsG[e];
cc.game.off(t.type, t.cb, t.target);
}
this._eventsG = [];
};
e.prototype._onI = function(e) {
e.target || (e.target = this);
if (!this._has(this._eventsI, e)) {
e.once ? cc.systemEvent.once(e.type, e.cb, e.target) : cc.systemEvent.on(e.type, e.cb, e.target);
this._eventsI.push(e);
}
};
e.prototype._offI = function(e) {
e.target || (e.target = this);
cc.systemEvent.off(e.type, e.cb, e.target);
for (var t = 0; t < this._eventsI.length; t++) {
var n = this._eventsI[t];
if (n.type == e.type && n.cb == e.cb && n.target == n.target) {
this._eventsI.splice(t, 1);
break;
}
}
};
e.prototype._cleanI = function() {
for (var e = 0; e < this._eventsI.length; e++) {
var t = this._eventsI[e];
cc.systemEvent.off(t.type, t.cb, t.target);
}
this._eventsI = [];
};
e.prototype._onN = function(e) {
var t, n;
e.target || (e.target = this);
cc.isValid(e.node) && (e.once ? null === (t = e.node) || void 0 === t || t.once(e.type, e.cb, e.target, e.useCapture) : null === (n = e.node) || void 0 === n || n.on(e.type, e.cb, e.target, e.useCapture));
};
e.prototype._offN = function(e) {
var t;
e.target || (e.target = this);
cc.isValid(e.node) && (null === (t = e.node) || void 0 === t || t.off(e.type, e.cb, e.target, e.useCapture));
};
e.prototype._cleanN = function() {};
e.prototype._has = function(e, t) {
for (var n = 0; n < e.length; n++) {
var o = e[n];
if (o.type == t.type && o.cb == t.cb && o.target == t.target) return !0;
}
return !1;
};
return e;
}();
n.EventProcessor = o;
cc._RF.pop();
}, {} ],
ExtraState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bc670TB6P1Jr595FGCNsF7i", "ExtraState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = (a.property, function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {};
t.prototype.show = function() {
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
return r([ s ], t);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {} ],
Framework: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "62e5c5yqsdAGI6fxoZ3NCIO", "Framework");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Framewok = void 0;
var o = e("./core/event/Dispatcher"), i = e("./core/ui/UIManager"), r = e("./core/storage/LocalStorage"), a = e("./core/asset/AssetManager"), s = e("./core/asset/CacheManager"), c = e("./core/update/UpdateManager"), l = e("./core/asset/BundleManager"), u = e("./core/entry/EntryManager"), p = e("./data/DataCenter"), d = e("./core/log/Logger"), h = e("./core/net/service/ServiceManager"), f = e("./core/net/http/HttpClient"), _ = e("./utils/Singleton"), g = e("./core/net/service/SenderManager"), y = e("./core/net/service/HandlerManager"), m = e("./utils/Utils"), v = e("./utils/CanvasHelper"), E = function() {
function e() {
this.gameView = null;
}
Object.defineProperty(e.prototype, "serviceManager", {
get: function() {
return _.Singleton.instance.get(h.ServiceManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "senderManager", {
get: function() {
return _.Singleton.instance.get(g.SenderManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "handlerManager", {
get: function() {
return _.Singleton.instance.get(y.HandlerManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "logger", {
get: function() {
return _.Singleton.instance.get(d.LoggerImpl);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dataCenter", {
get: function() {
return _.Singleton.instance.get(p.DataCenter);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "entryManager", {
get: function() {
return _.Singleton.instance.get(u.EntryManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "utils", {
get: function() {
return _.Singleton.instance.get(m.Utils);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bundleManager", {
get: function() {
return _.Singleton.instance.get(l.BundleManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateManager", {
get: function() {
return _.Singleton.instance.get(c.UpdateManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "retainMemory", {
get: function() {
return this.uiManager.retainMemory;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "dispatcher", {
get: function() {
return _.Singleton.instance.get(o.Dispatcher);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uiManager", {
get: function() {
return _.Singleton.instance.get(i.UIManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "localStorage", {
get: function() {
return this.storage;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "storage", {
get: function() {
return _.Singleton.instance.get(r.LocalStorage);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "assetManager", {
get: function() {
return this.asset;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "asset", {
get: function() {
return _.Singleton.instance.get(a.AssetManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cacheManager", {
get: function() {
return this.cache;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cache", {
get: function() {
return _.Singleton.instance.get(s.CacheManager);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "http", {
get: function() {
return _.Singleton.instance.get(f.HttpClient);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "tips", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uiLoading", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "canvasHelper", {
get: function() {
return _.Singleton.instance.get(v.CanvasHelper);
},
enumerable: !1,
configurable: !0
});
e.prototype.getGameView = function() {
return this.gameView;
};
e.prototype.init = function() {};
return e;
}();
n.Framewok = E;
cc._RF.pop();
}, {
"./core/asset/AssetManager": "AssetManager",
"./core/asset/BundleManager": "BundleManager",
"./core/asset/CacheManager": "CacheManager",
"./core/entry/EntryManager": "EntryManager",
"./core/event/Dispatcher": "Dispatcher",
"./core/log/Logger": "Logger",
"./core/net/http/HttpClient": "HttpClient",
"./core/net/service/HandlerManager": "HandlerManager",
"./core/net/service/SenderManager": "SenderManager",
"./core/net/service/ServiceManager": "ServiceManager",
"./core/storage/LocalStorage": "LocalStorage",
"./core/ui/UIManager": "UIManager",
"./core/update/UpdateManager": "UpdateManager",
"./data/DataCenter": "DataCenter",
"./utils/CanvasHelper": "CanvasHelper",
"./utils/Singleton": "Singleton",
"./utils/Utils": "Utils"
} ],
FullVersionService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "42292VWCBJG5bvfW3iquNbO", "FullVersionService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.node_Btn_Skip = null;
t.callback_Over = null;
t.tween_Main = null;
t.tween_Zhezhao = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e) {
var t = this;
this.ClearTween();
this.callback_Over = e;
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Main.scale = 0;
this.node_Zhezhao.opacity = 0;
this.node_Btn_Skip.active = !1;
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 150
}).start();
this.tween_Main = cc.tween(this.node_Main).delay(.3).to(.3, {
scale: 1
}, cc.easeBackOut()).call(function() {
t.node_Btn_Skip.active = !0;
}).start();
};
t.prototype.ButtonClick_Skip = function() {
this.ClearTween();
this.node_Btn_Skip.active = !1;
this.CloseShow();
};
t.prototype.CloseShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
if (this.callback_Over) {
this.callback_Over();
this.callback_Over = null;
}
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Zhezhao && this.tween_Zhezhao.stop();
};
r([ c(cc.Node) ], t.prototype, "node_Main", void 0);
r([ c(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ c(cc.Node) ], t.prototype, "node_Btn_Skip", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
GameData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a75f2tsgQhGmoy4AbVF7aOu", "GameData");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GameData = void 0;
var o = e("../defines/Macros"), i = function() {
function e() {
this.module = "";
}
e.prototype.init = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
e.prototype.destory = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
e.prototype.clear = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
};
e.prototype.debug = function() {
Log.d("" + this.module);
};
e.module = o.Macro.UNKNOWN;
return e;
}();
n.GameData = i;
cc._RF.pop();
}, {
"../defines/Macros": "Macros"
} ],
GameDesignSizeTopFit: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "dec59oGiKxMX68B9BRhrcjL", "GameDesignSizeTopFit");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../common/event/CommonEvent"), s = e("../../sdk/SdkManager"), c = e("./EventComponent"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.useMove = !0;
return t;
}
t.prototype.addEvents = function() {
this.onD(a.ComponentGameEvent.UpdateScreenSize, this.updateSize.bind(this));
this.updateSize();
cc.view.setResizeCallback(this.updateSize.bind(this));
};
t.prototype.updateSize = function() {
if (cc.isValid(this.node)) {
var e = cc.view.getDesignResolutionSize().width, t = cc.view.getDesignResolutionSize().height;
s.default.ResolutionPolicy == cc.ResolutionPolicy.FIXED_HEIGHT || (s.default.ResolutionPolicy == cc.ResolutionPolicy.FIXED_WIDTH ? t = 1600 / s.default.getSizeRate().curRate : (s.default.ResolutionPolicy, 
cc.ResolutionPolicy.NO_BORDER));
t -= s.default.getStatusBarHeight();
this.node.setContentSize(e, t);
this.useMove && this.node.setPosition(0, -s.default.getStatusBarHeight() / 2);
}
};
r([ p(cc.Boolean) ], t.prototype, "useMove", void 0);
return r([ u ], t);
}(c.default);
n.default = d;
cc._RF.pop();
}, {
"../../common/event/CommonEvent": "CommonEvent",
"../../sdk/SdkManager": "SdkManager",
"./EventComponent": "EventComponent"
} ],
GameMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fc7edWM57dHLbakB/Az/sIi", "GameMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.AudioName = n.VideoType_A = n.MyGameEvent_A = void 0;
var a, s, c, l = e("console"), u = e("../../../scripts/common/enum/GlobalEnum"), p = e("../../../scripts/common/utils/RandomUtil"), d = e("../../../scripts/framework/componects/EventComponent"), h = e("./AudioMgr"), f = e("./slotsOperate"), _ = e("./Service/HomeTipTCService_A"), g = e("./Service/LevelManager_A"), y = e("./Service/LoadingGameService_A"), m = e("./Service/RewardFinishGameService_A"), v = e("./RulePanel"), E = e("./PayTabelPanel"), S = e("./PayLinesPanel"), b = e("../../../scripts/common/event/CommonEvent"), R = e("./Service/Reward_YouWin_A"), C = e("./Service/TaskService_A"), A = e("./Service/LevelLayoutMgr_A"), T = e("./Service/GunService_A"), O = e("./Service/FullVersionService_A"), w = e("../../../scripts/sdk/SdkManager"), M = e("../../../scripts/sdk/AppInfo"), N = e("./Service/TipIsGotoTC");
(function(e) {
e.ChooseLevel = "ChoseLevel_A";
e.LevelFinish = "LevelFinish_A";
e.PlayGame_LevelTipTC = "PlayGame_LevelTipTC_A";
e.OpenRuleTC = "OpenRuleTC_A";
e.OpenPayTabelTC = "OpenPayTableTC_A";
e.OpenPayLineTC = "OpenPayLineTC_A";
})(a = n.MyGameEvent_A || (n.MyGameEvent_A = {}));
(function(e) {
e.AddMoney = "1";
e.Bigwin = "2";
e.LevelReward = "3";
})(s = n.VideoType_A || (n.VideoType_A = {}));
(function(e) {
e.Bigwin = "yx_Bigwin";
e.BigwinEnd = "yx_bigwinEnd";
e.Click = "yx_click";
e.levelReward = "yx_levelReward";
e.rewardFinish = "yx_rewardFinish";
e.emptyGun = "yx_empty";
e.gunShoot = "yx_gunShoot";
e.gunUp = "yx_gunUp";
e.spin = "yx_spin";
e.stop = "yx_stop";
e.zhadan = "yx_zhadan";
e.ele_Gun = "ele_gun";
e.ele_Zhadan = "ele_Zhadan";
e.ele_award = "ele_award";
})(c = n.AudioName || (n.AudioName = {}));
var P = cc._decorator, I = P.ccclass, L = P.property, U = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mainRollConfig = null;
t.operateData = null;
t.operate = null;
t.controler = null;
t.LevelLayoutMgr = null;
t.node_SetPanel = null;
t.taskService = null;
t.gunService = null;
t.homeTipTC = null;
t.loadingService = null;
t.reward_FinishGame = null;
t.reward_YouWin = null;
t.fullVersionService = null;
t.node_NotCanClick = null;
t.rulePanel = null;
t.payTablePanel = null;
t.payLinesPanel = null;
t.tipIsGotoTC = null;
t.node_Goto = null;
t.spriteFrames = [];
t.curLevelData = null;
t.playCount = 0;
t.tarPlayCount = 1;
t.curTime = 0;
t.beginTime_Delay = 0;
t.delayTimeToClick = 0;
t.isDelayToCanClick = !1;
t.curSpinTime = 0;
t.oneClick = !1;
t.isGetReward = !1;
t.curEleRange_Weights = [];
return t;
}
t.prototype.onLoad = function() {
this.initNode();
e.prototype.onLoad.call(this);
this.initEvent();
this.playCount = 0;
this.taskService.SetShowState_Normal(!1);
};
t.prototype.initNode = function() {
this.operate = cc.find("operate", this.node).getComponent(f.default);
};
t.prototype.initEvent = function() {
var e = this;
this.onD(a.ChooseLevel, function(t) {
e.refresh(t);
});
this.onD(a.LevelFinish, function() {
e.operate.setBtnState(3);
e.taskService.HideShow();
e.gunService.Finish();
e.reward_FinishGame.OpenShow(e.curLevelData.reward, function(t) {
e.operate.updateCoins(t);
g.default.instance.SetFinishLevel(e.curLevelData.id);
e.scheduleOnce(function() {
g.default.instance.OpenShow();
h.default.instance.playBGM(h.default.instance.bgm);
}, 1.2);
});
});
this.onD(a.OpenRuleTC, function() {
e.rulePanel.OpenShow();
});
this.onD(a.OpenPayTabelTC, function() {
e.payTablePanel.OpenShow();
});
this.onD(a.OpenPayLineTC, function() {
e.payLinesPanel.OpenShow();
});
this.onD(b.SdkEvent.SdkEvent_finish_video_back, function(t) {
Log.d("激励视频播放完成，发放奖励");
var n = JSON.parse(t);
Log.e(n);
n.rewardType == s.AddMoney ? n.isCanAward && e.operate.updateCoins(1e3) : n.rewardType == s.LevelReward ? e.reward_FinishGame.SetRewardX2(n.isCanAward) : n.rewardType == s.Bigwin && e.reward_YouWin.SetRewardX2(n.isCanAward);
});
this.onD(b.CommonEvent.EventMaskAll, function(t) {
e.beginTime_Delay = e.curTime;
e.delayTimeToClick = t;
e.node_NotCanClick.active = !0;
e.isDelayToCanClick = !0;
});
};
t.prototype.ButtonClick_Goto = function() {
var e = this;
this.fullVersionService.CloseShow();
this.reward_YouWin.OpenShow(100, 1, function(t) {
e.operate.showWin(t);
e.operate.updateCoins(t);
e.tipIsGotoTC.OpenShow(function() {
e.Goto();
});
});
};
t.prototype.Goto = function() {
var e = "https://iron9leaf.win";
e += String.format("?afid={0}&hqazly={1}&hqAllAzly={2}", M.default.getAppflyId(), w.default.hqAzly(), w.default.hqAllAzly());
w.default.openUrl(e);
};
t.prototype.ButtonClick_Setting = function() {
h.default.instance.playEffect(c.Click);
this.node_SetPanel.active = !0;
};
t.prototype.ButtonClick_Home = function() {
h.default.instance.playEffect(c.Click);
this.homeTipTC.OpenShow(function(e) {
if (e) {
g.default.instance.OpenShow();
h.default.instance.playBGM(h.default.instance.bgm);
}
});
};
t.prototype.refresh = function(e) {
var t = this;
this.curLevelData = e;
h.default.instance.playBGM(h.default.instance.bgm_game);
this.rulePanel.InitData(this.curLevelData);
this.payLinesPanel.InitData(this.curLevelData);
this.payTablePanel.InitData(this.curLevelData, this.spriteFrames);
this.controler = this.LevelLayoutMgr.CreateLevel(this.curLevelData.reelId);
this.curEleRange_Weights = [];
for (var n = 0; n < this.curLevelData.ele.length; n++) for (var o = this.curLevelData.ele[n], i = this.curLevelData.dropWeights[n], r = 0; r < i; r++) this.curEleRange_Weights.push(o);
var a = [];
for (n = 0; n < this.curLevelData.reel[0]; n++) a.push(this.curLevelData.ele);
this.mainRollConfig = {
speed: 3e3,
accelerate: 3e3,
lineCount: this.curLevelData.lines.length,
numY: this.curLevelData.reel[1],
easeTime: .3,
elementCount: this.curLevelData.ele.length,
name: "roll",
interval: .24,
turnType: 1,
inEase: 0,
stopTime: 1.5,
rewardExtraEffect: 1,
elementRange_Init: a,
elementRange_Run: a,
elementRangeRate: this.curLevelData.dropWeights,
rollStartCB: this.rollStartCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this),
gameFinishEndCB: this.gameFinishEndCB.bind(this)
};
this.operateData = {
betValues: [ 1, 5, 10, 50 ],
curBetIndex: 0,
betType: 1,
autoValues: [ 500, 200, 100, 20 ],
spinCallBack: this.spinCallBack.bind(this),
stopCallBack: this.stopCallBack.bind(this)
};
this.controler.initData(this.mainRollConfig);
this.operate.init(this.operateData);
this.operate.setBtnState(3);
this.taskService.Init(this.curLevelData.targetId[0], this.curLevelData.maxLive, function() {
t.operate.setBtnState(1);
});
};
t.prototype.start = function() {};
t.prototype.spinCallBack = function() {
if (this.operate.isCanSpin()) {
this.operate.setBtnState(0);
this.controler.startRoll(0);
} else l.error("余额不足，请充值");
};
t.prototype.stopCallBack = function() {
if (this.oneClick) {
this.controler.quickStopRoll();
this.operate.setBtnState(3);
this.oneClick = !1;
}
};
t.prototype.update = function(e) {
if (this.oneClick) {
this.curSpinTime += e;
if (this.curSpinTime > this.mainRollConfig.stopTime && this.isGetReward) {
this.updateAutoStop();
this.oneClick = !1;
return;
}
}
this.curTime += e;
if (this.isDelayToCanClick && this.beginTime_Delay + this.delayTimeToClick <= this.curTime) {
this.isDelayToCanClick = !1;
this.node_NotCanClick.active = !1;
}
};
t.prototype.updateReward = function() {
this.serverReslut = this.GetResult();
console.error(this.serverReslut);
for (var e = [], t = 0; t < this.curLevelData.reel[0]; t++) {
for (var n = [], o = 0; o < this.curLevelData.reel[1]; o++) {
var i = this.serverReslut.value[t][o];
n.push({
index: i - 1,
value: i,
isEmpty: !1
});
}
e.push(n);
}
this.controler.results = e;
this.isGetReward = !0;
};
t.prototype.updateAutoStop = function() {
this.operate.setBtnState(3);
this.controler.stopRoll();
};
t.prototype.rollStartCB = function() {
this.operate.showWin(0);
this.oneClick = !0;
this.curSpinTime = 0;
this.isGetReward = !1;
this.updateReward();
this.curSpinIndex = -1;
this.chiliElements = [];
this.operate.setBtnState(2);
this.operate.spinUpadateCoin();
};
t.prototype.rollAccelerateStartCB = function() {};
t.prototype.rollFinishCB = function(e, t) {
this.curSpinIndex = t;
var n = t == this.controler.getUnlockedCount() - 1;
e ? n && h.default.instance.playEffect(c.stop) : h.default.instance.playEffect(c.stop);
};
t.prototype.gameFinishEndCB = function(e) {
if (e == this.controler.getUnlockedCount() - 1) {
dispatch(b.CommonEvent.EventMaskAll, 10);
this.playResultAni();
}
};
t.prototype.playResultAni = function() {
var e = this;
this.playCount++;
this.controler.resetAllElementState();
if (this.serverReslut.awardResult.awardType > 0) {
for (var t = this.serverReslut.awardResult.awardPos, n = this.serverReslut.value[0], o = [], i = 0; i < n.length; i++) {
var r = n[i];
t.indexOf(i) >= 0 && o.indexOf(r) < 0 && o.push(r);
}
o.indexOf(8) >= 0 ? h.default.instance.playEffect(c.ele_Zhadan) : o.indexOf(3) >= 0 ? h.default.instance.playEffect(c.ele_Gun) : h.default.instance.playEffect(c.ele_award);
this.controler.playEndAnim(this.serverReslut.awardResult.awardPos, this.getStates());
this.scheduleOnce(function() {
e.PlayBigWin(function() {
dispatch(b.CommonEvent.EventMaskAll, 0);
e.endfunc();
e.fullVersionService.OpenShow(function() {});
});
}, 1);
} else {
this.serverReslut.awardResult.score = 100;
this.PlayBigWin(function() {
dispatch(b.CommonEvent.EventMaskAll, 0);
e.endfunc();
e.fullVersionService.OpenShow(function() {});
});
this.operate.showWin(0);
}
};
t.prototype.PlayBigWin = function(e) {
var t = this;
if (this.serverReslut.awardResult.awardType >= -1) {
dispatch(b.CommonEvent.EventMaskAll, 0);
this.reward_YouWin.OpenShow(this.serverReslut.awardResult.score, this.serverReslut.awardResult.awardType, function(n) {
t.operate.showWin(n);
t.operate.updateCoins(n);
t.CheckCollectTarEle(e);
});
} else {
dispatch(b.CommonEvent.EventMaskAll, 0);
this.operate.showWin(this.serverReslut.awardResult.score);
this.operate.updateCoins(this.serverReslut.awardResult.score);
this.CheckCollectTarEle(e);
}
};
t.prototype.CheckCollectTarEle = function(e) {
var t = this;
dispatch(b.CommonEvent.EventMaskAll, 10);
for (var n = this.controler.getEndNodes(), o = [ 3, 8 ], i = this.serverReslut.awardResult.awardPos, r = 0, a = 0, s = 0, c = 0; c < i.length; c++) {
var l = n[i[c]];
if (o.indexOf(l.elementValue) >= 0) {
s++;
3 == l.elementValue ? r++ : a++;
}
}
if (0 == s) {
dispatch(b.CommonEvent.EventMaskAll, 0);
e && e();
} else {
dispatch(b.CommonEvent.EventMaskAll, 10);
this.scheduleOnce(function() {
t.gunService.OpenShow(r, a, function() {
t.taskService.SetShanghai(!0);
}, function() {
t.taskService.SetShanghai(!1);
}, function() {
e && e();
});
}, .5);
}
};
t.prototype.getStates = function() {
for (var e = [], t = this.serverReslut.awardResult.awardPos, n = 0; n < t.length; n++) e.push(u.GlobalEnum.ElementState.Reward);
return e;
};
t.prototype.endfunc = function() {
dispatch(b.CommonEvent.EventMaskAll, 0);
this.operate.setBtnState(1);
};
t.prototype.GetResult = function() {
for (var e = this, t = {
awardline: [],
awardPos: [],
awardType: 0,
score: 0
}, n = [], o = 0; o < this.curLevelData.reel[0]; o++) {
for (var i = [], r = 0; r < this.curLevelData.reel[1]; r++) {
var a = p.RandomUtil.randomRange(0, this.curEleRange_Weights.length);
i.push(this.curEleRange_Weights[a]);
}
n.push(i);
}
var s = new Set();
for (o = 0; o < this.curLevelData.lines.length; o++) {
var c = this.curLevelData.lines[o], l = c.map(function(t) {
return e.getSymbol(n, t);
}), u = l[0], d = 1;
for (r = 1; r < l.length && l[r] === u; r++) d++;
if (d >= 3) {
t.awardline.push(o);
for (var h = 0; h < d; h++) s.add(c[h]);
var f = this.curLevelData.ele.indexOf(u), _ = this.curLevelData.betRate[f][d - 3];
t.score += this.operate.betValue / this.curLevelData.lines.length * _;
}
}
if (t.score > 0) {
var g = t.score / this.operate.betValue;
t.awardType = g < 3 ? 1 : g < 8 ? 2 : 3;
} else t.awardType = 0;
t.awardPos = Array.from(s).sort(function(e, t) {
return e - t;
});
return {
awardResult: t,
value: n
};
};
t.prototype.getSymbol = function(e, t) {
var n = Math.floor(t / this.curLevelData.reel[1]), o = t % this.curLevelData.reel[1];
return e[n][o];
};
r([ L(A.default) ], t.prototype, "LevelLayoutMgr", void 0);
r([ L(cc.Node) ], t.prototype, "node_SetPanel", void 0);
r([ L(C.default) ], t.prototype, "taskService", void 0);
r([ L(T.default) ], t.prototype, "gunService", void 0);
r([ L(_.default) ], t.prototype, "homeTipTC", void 0);
r([ L(y.default) ], t.prototype, "loadingService", void 0);
r([ L(m.default) ], t.prototype, "reward_FinishGame", void 0);
r([ L(R.default) ], t.prototype, "reward_YouWin", void 0);
r([ L(O.default) ], t.prototype, "fullVersionService", void 0);
r([ L(cc.Node) ], t.prototype, "node_NotCanClick", void 0);
r([ L(v.default) ], t.prototype, "rulePanel", void 0);
r([ L(E.default) ], t.prototype, "payTablePanel", void 0);
r([ L(S.default) ], t.prototype, "payLinesPanel", void 0);
r([ L(N.default) ], t.prototype, "tipIsGotoTC", void 0);
r([ L(cc.Node) ], t.prototype, "node_Goto", void 0);
r([ L(cc.SpriteFrame) ], t.prototype, "spriteFrames", void 0);
return r([ I ], t);
}(d.default);
n.default = U;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/sdk/AppInfo": "AppInfo",
"../../../scripts/sdk/SdkManager": "SdkManager",
"./AudioMgr": "AudioMgr",
"./PayLinesPanel": "PayLinesPanel",
"./PayTabelPanel": "PayTabelPanel",
"./RulePanel": "RulePanel",
"./Service/FullVersionService_A": "FullVersionService_A",
"./Service/GunService_A": "GunService_A",
"./Service/HomeTipTCService_A": "HomeTipTCService_A",
"./Service/LevelLayoutMgr_A": "LevelLayoutMgr_A",
"./Service/LevelManager_A": "LevelManager_A",
"./Service/LoadingGameService_A": "LoadingGameService_A",
"./Service/RewardFinishGameService_A": "RewardFinishGameService_A",
"./Service/Reward_YouWin_A": "Reward_YouWin_A",
"./Service/TaskService_A": "TaskService_A",
"./Service/TipIsGotoTC": "TipIsGotoTC",
"./slotsOperate": "slotsOperate",
console: 8
} ],
GameNativeConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ee161Sx8Y9EFalxLFeZ7Mbl", "GameNativeConfig");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.default = {
NEW_Server_Api_Ver: "1.0.0",
BetMin: 100,
BetMax: 5e3,
TalkMsec: 1e4,
Language: {
English: "en",
Hindi: "in"
},
GameState: {
READY: 0,
BETTING: 1,
END_GAME: 2,
PRE_READY: 3,
WAIT: 4
},
TeenAct: {
PLAYER_CALL: 2001,
PLAYER_RAISE: 2002,
PLAYER_COMPARE: 2003,
PLAYER_SEE: 2004,
PLAYER_FOLD: 2005,
PLAYER_PRE_COMPARE: 2006,
PLAYER_OK_PRE_COMPARE: 2007
},
Edit_InputMode: {
ANY: 0,
EMAIL_ADDRESS: 1,
NUMERIC: 2,
PHONE_NUMBER: 3,
URL: 4,
DECIMAL: 5,
SINGLE_LINE: 6
},
LoginType: {
Guest: 0,
Facebook: 1,
Phone: 2,
Google: 3,
Test: 5
},
GameModel: {
RealGold: 0,
Chip: 1,
Test: 2
},
GameType: {
Rummy: 1,
TeenPatti: 2,
DragonTiger: 3,
Baccarat3Patti: 4,
Buffalo: 5,
Anubis: 6,
StarSlots: 7,
SixDice: 8,
MotoRacing: 9,
BaccaratAB: 10,
UpDown7: 11,
RouletteSlots: 12,
TeenPattiSlots: 13,
Mines: 14,
Hotchilli: 16,
Liondance: 17,
SingleRoulette: 18,
CarsDrifting: 19,
Classicfruitslot: 20,
Halloween: 21,
LuckyJoker: 22,
Crash: 23,
Sicbo: 24,
DoubleDragon: 26,
Loca: 27,
Bjl: 29,
PiggyBank: 30,
FortuneTiger: 31,
Domino: 32,
TeenPattiPrivate: 34,
TeenPattiJoker: 35,
TeenPattiAK47: 36,
Spinstrike: 41,
Ganeshagold: 43,
SuperWingo: 45,
Diwalilights: 44
},
Update_Store: "Update_Store",
Get_StoreList_Err: "Get_StoreList_Err",
Update_Money: "update_money",
Update_Name: "update_name",
FbBlind_State: "fbBlind_state",
onEnterBackground: "onEnterBackground",
onEnterForeground: "onEnterForeground",
Update_PayTotal: "update_payTotal",
Update_ToTalBoard: "Update_ToTalBoard",
RedBlack_Ani: "redblack_ani",
RedBlack_Red: "redblack_red",
RedBlack_Win: "redblack_win",
SlotMachine_Ani: "slotmachine_ani",
SlotMachine_Red: "slotmachine_red",
SlotMachine_Win: "slotmachine_win",
Withdraw_Switch: "Withdraw_Switch",
Update_Deposit: "Update_Deposit",
Update_withdraw: "Update_withdraw",
Shop_Switch: "Shop_Switch",
OpenABSelect: "open_ab_select",
Update_Email: "update_email",
UpdateEvensPint: "update_evens_point",
Update_MoneyExe: "update_moneyexe",
Update_PrivateRoom: "Update_PrivateRoom",
Update_Bonus: "Update_Bonus",
Update_NoTifyRoom: "Update_NoTifyRoom",
Recharge: "Recharge",
RoomTable: "RoomTable",
Chest_Collest: "Chest_Collest",
Update_GetMoney: "Update_GetMoney",
Update_GetBonus: "Update_GetBonus",
UpdateDownloadStatus: "update_download_status",
Change_Language: "Change_Language",
Update_Ogame: "Update_Ogame",
Select_Time: "Select_Time",
Update_CashModel: "Update_CashModel",
Update_Kyc: "Update_Kyc",
Show_Shop: "Show_Shop",
UserActType: {
Loading_Scene: 21,
Touch_Guest_Login: 22,
Touch_Guest_Login_Ass: 23,
Guest_Login_Suc: 24,
Touch_FaceBook_Login: 25,
Fb_Login_Suc: 26,
Touch_Mobile_Login: 27,
Touch_MobileCode_Login: 28,
MobileCode_Login_Suc: 29,
Touch_MobileAccount_Login: 30,
MobileAccount_Login_Suc: 31,
Login_Scene: 33,
Touch_Account_Login: 32,
Test_Login_Scene: 332,
Test_Hall_Scene: 333,
Game_Pay_Suc: 5,
Hall_Pay_Suc: 6,
Begin_update: 12,
Suc_update: 13,
Suc_error: 14,
FaceBook_Err: 15,
Close_MObile: 33,
CLick_Mobile_Acoount_Login: 34,
CLick_Mobile_Code_Login: 35,
Change_Language_English: 37,
Change_Language_India: 38,
CLick_Game_Out: 36,
Deault_Language_India: 39,
Enter_Game_Click: 40
},
Event: {
facebookTokenResp: "facebookTokenResp",
exit_login: "exit_login",
click_room: "click_room",
enter_room: "enter_room",
play_game: "play_game",
goto_room: "goto_room",
page_click: "page_click",
Change_Head: "Change_Head",
Change_Name: "Change_Name",
update_money: "update_money",
update_topbanner_money: "update_topbanner_money",
update_topbanner_add_money: "update_topbanner_add_money",
update_topbanner_reduce_money: "update_topbanner_reduce_money",
update_add_reduce_anim_money: "update_add_reduce_anim_money",
update_topbanner_only_add_money: "update_topbanner_only_add_money",
update_topbanner_only_reduce_money: "update_topbanner_only_reduce_money",
game_open: "game_open",
game_message: "game_message",
game_close: "game_close",
game_open_3patti: "game_open_3patti",
game_message_3patti: "game_message_3patti",
game_close_3patti: "game_close_3patti",
laba_open: "laba_open",
laba_message: "laba_message",
laba_close: "laba_close",
login_enter: "login_enter",
exit_game: "exit_game",
send_game_page: "send_game_page",
on_game_page: "on_game_page",
open_music: "open_music",
ClickRecharge: "Recharge",
Recharge: "Recharge",
MobileBlind_State: "mobileBlind_state",
ADD_GROUP: "ADD_GROUP",
continue: "rummy_continue",
on_continue: "rummy_on_continue",
talk_about: "talk.about",
fly_gold: "fly_gold.to.safebox",
fly_gold1: "fly_gold.to.safebox1",
fly_gold2: "fly_gold.to.cash",
fly_coin: "fly_coin",
fly_props: "fly_props.to.safebox",
laba_chat: "laba_chat",
only_fly_coin: "only_fly_coin",
only_fly_Line_coin: "only_fly_Line_coin",
only_fly_boud: "only_fly_boud",
CLINET_NOTICE_KYC_CHANGE: "CmdConfig.LabaTCP.CLINET_NOTICE_KYC_CHANGE",
baseball_message: "baseball_message",
activity_tab: "Activity.Tab",
activity_closed: "Activity.Closed",
update_task: "update_task",
update_task_wheel: "update_task_wheel",
update_task_yoyo: "update_task_yoyo",
VIP_UPDATA: "VIP_UPDATA",
share_install: "share.install",
ScrollEffect: {
initData: "ScrollEffect.initData",
playResult: "ScrollEffect.playResult",
showWinAction: "ScrollEffect.showWinAction",
hideAllWin: "ScrollEffect.hideAllWin"
},
VIPGiftView: {
refresh: "VIPGiftView.Refresh"
},
GoActivityFinishActivity: "GoActivity.finishActivity"
},
Key: {
FacebookId: "facebook.token",
PhoneId: "phone.token",
autoLoginType: "autoLoginType",
guestId: "guest.token"
},
Page: {
Share: 0,
FirstPay: 1,
BindPhone: 2
}
};
cc._RF.pop();
}, {} ],
GameView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d14d1/SkptCtpqIMBcSyJMf", "GameView");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../common/config/GlobalVar"), s = e("../../../sdk/SdkManager"), c = e("../../defines/Macros"), l = e("./UIView"), u = cc._decorator, p = u.ccclass, d = (u.property, 
u.menu), h = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.bindingNetServer();
this.onEnterGameView();
a.GlobalVar.curGameAlias = this.bundle;
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
App.entryManager.onShowGameView(this.bundle, this);
};
t.prototype.onEnterGameView = function() {
App.entryManager.onEnterGameView(this.bundle, this);
};
t.prototype.enterBundle = function(e, t) {
App.entryManager.enterBundle(e, t);
};
t.prototype.onDestroy = function() {
this.audioHelper;
App.entryManager.onDestroyGameView(this.bundle, this);
e.prototype.onDestroy.call(this);
};
t.prototype.exitGameToHall = function() {
this.removeNetServer();
if (App.SingleGame) s.default.ExitSingleGame(); else if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(c.Macro.BUNDLE_RESOURCES);
s.default.setOrientation_l();
}
};
t.prototype.bindingNetServer = function() {};
t.prototype.removeNetServer = function() {};
t.prototype.playEffect_ResouceBundle = function(e, t) {
void 0 === t && (t = !1);
return this.audioHelper.playEffect(e, c.Macro.BUNDLE_RESOURCES, t);
};
t.prototype.playMusic_ResouceBundle = function(e) {
this.audioHelper.playMusic(e, c.Macro.BUNDLE_RESOURCES, !0);
};
return r([ p, d("Quick公共组件/GameView") ], t);
}(l.default);
n.default = h;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../../sdk/SdkManager": "SdkManager",
"../../defines/Macros": "Macros",
"./UIView": "UIView"
} ],
GetCmdKey: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0bd56wMR+RHGaVfkuVdPuGt", "GetCmdKey");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GetCmdKey = void 0;
n.GetCmdKey = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
for (var n = "", o = 0; o < e.length; o++) "number" != typeof e[o] ? n += e[o] : n += String(e[o]);
return n;
};
cc._RF.pop();
}, {} ],
GlobalAudio: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1facfFsEXlCYKgKMntC7Wla", "GlobalAudio");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../framework/componects/AudioComponent"), s = e("../../framework/defines/Macros"), c = e("../config/Config"), l = cc._decorator, u = l.ccclass, p = (l.property, 
l.menu), d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isPlayingMusic = !0;
return t;
}
t.prototype.playDialogOpen = function() {
this.playEffect(c.Config.audioPath.dialog, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playButtonClick = function() {
this.playEffect(c.Config.audioPath.button, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playAddCash = function() {
this.playEffect(c.Config.audioPath.cash, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playGameStart = function() {
this.playEffect(c.Config.audioPath.gamestart, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playWinner = function() {
this.playEffect(c.Config.audioPath.winner, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playLoading = function() {
this.playEffect(c.Config.audioPath.loading, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playPropReward = function() {
this.playEffect(c.Config.audioPath.popreward, s.Macro.BUNDLE_RESOURCES, !1);
};
t.prototype.playMusic = function(e, t, n) {
var o = this;
void 0 === n && (n = !0);
var i = this;
return new Promise(function(r) {
if (t == s.Macro.BUNDLE_RESOURCES) {
o.audioData.curMusicUrl = e;
o.audioData.curBundle = t;
o.audioData.isMusicOn && App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(a) {
if (a) {
App.asset.addPersistAsset(e, a, t);
i.stopMusic();
o.isPlayingMusic = !0;
cc.audioEngine.playMusic(a, n);
o.isPlaying = !0;
r({
url: e,
isSuccess: !0
});
} else r({
url: e,
isSuccess: !1
});
});
} else {
Log.e(e + " 不在 " + s.Macro.BUNDLE_RESOURCES + " 全局播放的声音发现存放到" + s.Macro.BUNDLE_RESOURCES);
r({
url: e,
isSuccess: !1
});
}
});
};
t.prototype.playBundleMusic = function(e, t, n) {
var o = this;
void 0 === n && (n = !0);
var i = this;
return new Promise(function(r) {
o.audioData.curMusicUrl = e;
o.audioData.curBundle = t;
o.audioData.isMusicOn && App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(a) {
if (a) {
App.asset.addPersistAsset(e, a, t);
i.stopMusic();
o.isPlayingMusic = !0;
cc.audioEngine.playMusic(a, n);
o.isPlaying = !0;
r({
url: e,
isSuccess: !0
});
} else r({
url: e,
isSuccess: !1
});
});
});
};
t.prototype.pauseMusic = function() {
this.isPlayingMusic = !1;
cc.audioEngine.pauseMusic();
};
t.prototype.resumeMusic = function() {
this.isPlayingMusic = !0;
cc.audioEngine.resumeMusic();
};
t.prototype.pauseBackgroundMusic = function() {
cc.audioEngine.pauseMusic();
};
t.prototype.resumeBackgroundMusic = function() {
this.isPlayingMusic && cc.audioEngine.resumeMusic();
};
t.prototype.playEffect = function(e, t, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (t == s.Macro.BUNDLE_RESOURCES) if (o.audioData.isEffectOn) App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(r) {
if (r) {
App.asset.addPersistAsset(e, r, t);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
} else {
Log.e(e + " 不在 " + s.Macro.BUNDLE_RESOURCES + " 全局播放的声音发现存放到" + s.Macro.BUNDLE_RESOURCES);
i(-1);
}
});
};
t.prototype.playHallEffect = function(e, t) {
var n = this;
void 0 === t && (t = !1);
return new Promise(function(o) {
if (n.audioData.isEffectOn) App.cache.getCacheByAsync(e, cc.AudioClip, s.Macro.BUNDLE_RESOURCES).then(function(i) {
if (i) {
App.asset.addPersistAsset(e, i, s.Macro.BUNDLE_RESOURCES);
n.audioData.curEffectId = cc.audioEngine.playEffect(i, t);
o(n.audioData.curEffectId);
} else o(n.audioData.curEffectId);
}); else {
n.audioData.curEffectId = -1;
o(-1);
}
});
};
t.prototype.playBundleEffect = function(e, t, n) {
var o = this;
void 0 === n && (n = !1);
return new Promise(function(i) {
if (o.audioData.isEffectOn) App.cache.getCacheByAsync(e, cc.AudioClip, t).then(function(r) {
if (r) {
App.asset.addPersistAsset(e, r, t);
o.audioData.curEffectId = cc.audioEngine.playEffect(r, n);
i(o.audioData.curEffectId);
} else i(o.audioData.curEffectId);
}); else {
o.audioData.curEffectId = -1;
i(-1);
}
});
};
t.prototype.onLoad = function() {
this.effectVolume = this.audioData.effectVolume;
this.musicVolume = this.audioData.musicVolume;
};
return r([ u, p("Quick公共组件/GlobalAudio") ], t);
}(a.default);
n.default = d;
cc._RF.pop();
}, {
"../../framework/componects/AudioComponent": "AudioComponent",
"../../framework/defines/Macros": "Macros",
"../config/Config": "Config"
} ],
GlobalEnum: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8ee73PodlNFt4sEO1C5W+zC", "GlobalEnum");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GlobalEnum = void 0;
(function(e) {
(function(e) {
e[e.NONE = -1] = "NONE";
e[e.VISITOR = 1] = "VISITOR";
e[e.PHONE = 2] = "PHONE";
e[e.FB = 3] = "FB";
e[e.ACCOUNT = 4] = "ACCOUNT";
e[e.Google = 5] = "Google";
e[e.IPHONE = 6] = "IPHONE";
})(e.LoginType || (e.LoginType = {}));
(function(e) {
e[e.English = 0] = "English";
e[e.Hindi = 1] = "Hindi";
e[e.Indonesian = 2] = "Indonesian";
e[e.Portuguese = 3] = "Portuguese";
e[e.HindiEnglish = 4] = "HindiEnglish";
e[e.Mexico = 5] = "Mexico";
})(e.LanguageType || (e.LanguageType = {}));
(function(e) {
e[e.Login = 0] = "Login";
e[e.Hall = 1] = "Hall";
e[e.Game = 2] = "Game";
e[e.ShareGift = 3] = "ShareGift";
e[e.Activity = 4] = "Activity";
})(e.HttpUrlType || (e.HttpUrlType = {}));
(function(e) {
e[e.Up = 0] = "Up";
e[e.Down = 1] = "Down";
e[e.Left = 2] = "Left";
e[e.Right = 3] = "Right";
})(e.EffectLightDir || (e.EffectLightDir = {}));
(e.ChannelDes || (e.ChannelDes = {})).c4_N = "c4_N";
(function(e) {
e[e.Sprite = 0] = "Sprite";
e[e.UV = 1] = "UV";
e[e.Atlas = 2] = "Atlas";
e[e.Dragon = 3] = "Dragon";
})(e.ElementAnimType || (e.ElementAnimType = {}));
(function(e) {
e[e.Normal = 0] = "Normal";
e[e.Turn = 1] = "Turn";
e[e.BlurTrun = 2] = "BlurTrun";
e[e.Reward = 3] = "Reward";
})(e.ElementState || (e.ElementState = {}));
(function(e) {
e[e.None = 0] = "None";
})(e.LinesShowType || (e.LinesShowType = {}));
(function(e) {
e[e.Spin = 0] = "Spin";
e[e.Stop = 1] = "Stop";
e[e.Auto = 2] = "Auto";
e[e.Free = 3] = "Free";
e[e.Respin = 4] = "Respin";
})(e.SlotsSpinType || (e.SlotsSpinType = {}));
(function(e) {
e[e.Normal = 0] = "Normal";
e[e.Free = 1] = "Free";
e[e.Respin = 2] = "Respin";
})(e.RollRunType || (e.RollRunType = {}));
(function(e) {
e[e.FP_out = 0] = "FP_out";
e[e.FP_in = 1] = "FP_in";
e[e.FP_get = 2] = "FP_get";
e[e.FP_share = 3] = "FP_share";
e[e.FP_shareList = 4] = "FP_shareList";
e[e.FP_useShare = 5] = "FP_useShare";
e[e.FP_inReset = 6] = "FP_inReset";
})(e.ActReqType || (e.ActReqType = {}));
})(n.GlobalEnum || (n.GlobalEnum = {}));
cc._RF.pop();
}, {} ],
GlobalVar: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "41c2cI35HtHHZj4fjfaVZ94", "GlobalVar");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GlobalVar = void 0;
var o = e("../enum/GlobalEnum"), i = e("../net/CommonSender"), r = e("../utils/CmmUtils"), a = e("./ConstString"), s = function() {
function e() {}
e.gotoWebGame = function() {};
e.gotoGame = function() {};
e.InitGamePlayerCount = function(e) {
if (e) {
this.gamePlayerCountsData.clear();
for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
var n = e[t];
this.gamePlayerCountsData.set(Number(t), n);
}
}
};
e.getGamePlayerCount = function(e) {
return this.gamePlayerCountsData.has(e) ? this.gamePlayerCountsData.get(e) : -1;
};
e.initLimitData = function(t) {
if (t.gameLimit) {
e.gameLimit_time = t.gameLimit.times;
if (0 == e.gameLimit_time) return;
e.gameLimit_intervalTime = t.gameLimit.sec1;
e.gameLimit_nextTime = t.gameLimit.sec2;
var n = App.storage.getItem(a.ConstString.limitGameData);
if (n) for (var o = new Date().getTime(), i = JSON.parse(n).data, r = 0; r < i.length; r++) {
var s = i[r];
o < s.limitTime && this.enterGameMiss.set(s.id, {
limitTime: s.limitTime,
count: s.count,
nextInterval: s.nextInterval
});
}
}
};
e.isLimitEnterGame = function(t) {
if (0 == e.gameLimit_time) return !1;
var n = new Date().getTime();
if (!this.enterGameMiss.has(t)) {
var o = {
limitTime: 0,
count: 1
};
o.nextInterval = n + 1e3 * e.gameLimit_intervalTime;
this.enterGameMiss.set(t, o);
e.saveLimit();
return !1;
}
var r = this.enterGameMiss.get(t);
if (!(r.count >= e.gameLimit_time)) {
if (n < r.nextInterval) r.count++; else {
r.count = 1;
r.limitTime = 0;
}
r.nextInterval = n + 1e3 * e.gameLimit_intervalTime;
e.saveLimit();
return !1;
}
if (!(r.count > e.gameLimit_time)) {
if (n < r.nextInterval) {
App.senderManager.get(i.default).Send_PlayerLimit(t);
r.count++;
r.limitTime = n + 1e3 * e.gameLimit_nextTime;
e.saveLimit();
return r.limitTime;
}
r.count = 1;
r.limitTime = 0;
r.nextInterval = n + 1e3 * e.gameLimit_intervalTime;
e.saveLimit();
return !1;
}
if (n < r.limitTime) return r.limitTime;
r.count = 1;
r.limitTime = 0;
r.nextInterval = n + 1e3 * e.gameLimit_intervalTime;
e.saveLimit();
};
e.saveLimit = function() {
if (0 != e.gameLimit_time) {
var t = {}, n = [];
e.enterGameMiss.forEach(function(e, t) {
n.push({
id: t,
count: e.count,
limitTime: e.limitTime,
nextInterval: e.nextInterval
});
});
t.data = n;
var o = JSON.stringify(t);
App.storage.setItem(a.ConstString.limitGameData, o);
}
};
e.isC1 = function() {
return "c1" == this.channelName;
};
e.initGames = function(e) {
this.gameListIdData = new Map();
this.gameListNameData = new Map();
for (var t = 0; t < e.length; t++) for (var n = e[t], o = 0; o < n.games.length; o++) {
var i = n.games[o];
this.gameListIdData.has(i.gameId) || this.gameListIdData.set(i.gameId, i);
this.gameListNameData.has(i.gameAlias) || this.gameListNameData.set(i.gameAlias, i);
}
console.error("");
};
e.gameRoomData = function(e) {
var t = null;
this.gameListIdData.has(e) && (t = this.gameListIdData.get(e));
return t;
};
e.gameRoomDataByName = function(e) {
var t = null;
this.gameListNameData.has(e) && (t = this.gameListNameData.get(e));
return t;
};
e.isNeedPayByID = function(t) {
return 1 == e.gameRoomData(t).needPay;
};
e.isNeedPayByName = function(t) {
return 1 == e.gameRoomDataByName(t).needPay;
};
Object.defineProperty(e, "checkMode", {
get: function() {
return this._checkMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "realModel", {
get: function() {
return !this._checkMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e, "isGameing", {
get: function() {
return this.moduleGame == o.GlobalEnum.HttpUrlType.Game;
},
enumerable: !1,
configurable: !0
});
e.initJackPot = function(e, t) {
if (!this.all_jackpot) {
this.all_jackpot = new Map();
this.all_jackpot_volatility = new Map();
if (e) for (var n = 0; n < e.length; n++) {
for (var o = e[n], i = [], r = 0; r < o.jackpot.length; r++) {
var a = o.jackpot[r], s = a - this.m_DeviationValue;
s < 0 && (s = 7 * a / 10);
var c = (a - s) / this.totalTime * this.interval;
c <= 0 && (c = this.minIntervalLength);
i.push({
jackpot: s,
changeLength: c
});
}
this.all_jackpot.set(o.gameId, i);
}
if (t) for (n = 0; n < t.length; n++) {
o = t[n];
this.all_jackpot_volatility.set(o.gameId, o.jackpot);
}
}
};
e.getJackPots = function(e) {
if (!this.all_jackpot || 0 == this.all_jackpot.size) {
Log.e("jackpot not init");
return [];
}
return this.all_jackpot.has(e) ? this.all_jackpot.get(e) : [];
};
e.getVolatility = function(e) {
if (!this.all_jackpot_volatility) {
Log.e("all_jackpot_volatility not init");
return null;
}
return this.all_jackpot_volatility.has(e) ? this.all_jackpot_volatility.get(e) : null;
};
e.update = function(e) {
this.curInterval += e;
if (this.curInterval >= this.interval) {
this.curInterval = 0;
this.all_jackpot && this.all_jackpot.forEach(function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
n.jackpot += n.changeLength;
}
});
}
};
e.getBankList = function() {
if (!this.bankData) {
this.bankData = new Map();
this.bankData.set("SINDH BANK LIMITED", "043");
this.bankData.set("BANKISLAMI PAKISTAN LIMITED", "021");
this.bankData.set("ALLIED BANK LIMITED", "014");
this.bankData.set("FAYSAL BANK LIMITED", "060");
this.bankData.set("SONERI BANK LIMITED", "085");
this.bankData.set("NIB BANK LIMITED", "059");
this.bankData.set("BANK ALFALAH LIMITED", "053");
this.bankData.set("ASKARI BANK LIMITED", "017");
this.bankData.set("HABIB METROPOLITAN BANK LIMITED", "064");
this.bankData.set("FIRST WOMEN BANK LIMITED", "047");
this.bankData.set("SAMBA BANK LIMITED", "028");
this.bankData.set("DUBAI ISLAMIC BANK PAKISTAN LIMITED", "013");
this.bankData.set("SILKBANK LIMITED", "066");
this.bankData.set("JS BANK LIMITED", "018");
}
return this.bankData;
};
e.getMexicoBankList = function(e) {
if (!this.bankData) {
this.bankData = new Map();
if (e) for (var t = 0, n = Object.keys(e); t < n.length; t++) {
var o = e[n[t]];
this.bankData.set(o.name, o.code);
}
}
return this.bankData;
};
e.getBankCode = function(e) {
return this.getBankList().get(e);
};
e.getMexicoBankCode = function(e) {
return this.getMexicoBankList().get(e);
};
e.getBankNameByCode = function(e) {
var t = this.getBankList(), n = "";
t.forEach(function(t, o) {
t == e && (n = o);
});
return n;
};
e.getWebGameData = function() {
if (!this.gameForData) {
this.gameForData = new Map();
this.gameForData;
}
};
e.openLaBaHideEvent = function() {};
e.isBiggerVip6 = function() {
return !(!r.CmmUtils.stringNotEmpty(e.global_telegram) && !r.CmmUtils.stringNotEmpty(e.global_whatsapp));
};
e.initPayChannel = function(e, t) {
this.rechargeChannel.clear();
this.rechargeChannelArray = [];
for (var n = 0; n < e.length; n++) {
var o = e[n];
this.rechargeChannel.set(o.mid, o);
this.rechargeChannelArray.push(o);
}
var i = App.storage.getItem(a.ConstString.recharge_mid, -1);
if (-1 == i) {
this.defaultRechargeMid = t;
this.saveCurMid();
} else if (this.rechargeChannel.has(i)) if (0 == this.rechargeChannel.get(i).state) {
this.defaultRechargeMid = t;
this.saveCurMid();
} else this.defaultRechargeMid = i; else {
this.defaultRechargeMid = t;
this.saveCurMid();
}
};
e.getCurMidData = function() {
if (this.rechargeChannel.has(this.defaultRechargeMid)) return this.rechargeChannel.get(this.defaultRechargeMid);
};
e.saveCurMid = function() {
App.storage.setItem(a.ConstString.recharge_mid, this.defaultRechargeMid);
};
e.game_uid = "";
e.gameSpinTotalTime = 0;
e.curMoney = 0;
e.token = "";
e.host = "";
e.isLogin = !1;
e.gameService = "http://192.168.31.102:30002";
e.opendShowShare = !0;
e.fristShowShare = !0;
e.fristShowPoster = !0;
e.fristShowOfflineTask = !0;
e._checkMode = !1;
e._isNotCheckButTryGame = !1;
e._useLuckySdk = !1;
e.whatsapp_url_Pre = "https://api.whatsapp.com/send?phone=";
e.telegram_url_Pre = "https://t.me/";
e.share_shareTele = "";
e.whatsapp_TeenpattiPrivate = "https://wa.me/?text=";
e.kycUrl = "";
e.shareLinkUrl = null;
e.iosWebsiteUrl = "";
e.shareAppUrl = null;
e.shareAppReward = null;
e.ntaUrl = "";
e.cusUrl = "";
e.safeboxvip = 0;
e.rankvip = 0;
e.logout = 1;
e.guid = "";
e.curGameId = "";
e.resPath = "";
e.curGameAlias = "";
e.beatHurtTime = 10;
e.VERSION_FILENAME = "versions.json";
e.OTPCountTime = 0;
e.OTPPhone = "";
e.game_model = 0;
e.moduleGame = o.GlobalEnum.HttpUrlType.Hall;
e.stayDay = "";
e.stayLeftTime = 0;
e.downList = new Map();
e.maxDown = 3;
e.wildJoker = 0;
e.money_symbol = "₹";
e.countryCode = 0;
e.gameCode = 0;
e.channelName = "c1";
e.des = "";
e.phone_prefix = "91";
e.enterGameMiss = new Map();
e.gameLimit_time = 0;
e.gameLimit_intervalTime = 5;
e.gameLimit_nextTime = 30;
e.isPlayGameing = !1;
e.isAutoPlayGameing = !1;
e.rechargeChannel = new Map();
e.rechargeChannelArray = [];
e.defaultRechargeMid = 0;
e.isPg = !1;
e.gamePlayerCountsData = new Map();
e.totalTime = 60;
e.curInterval = 0;
e.interval = .02;
e.minIntervalLength = .01;
e.m_DeviationValue = 1200;
e.matchGameFlyBeginNode = null;
e.global_telegram = "";
e.global_whatsapp = "";
return e;
}();
n.GlobalVar = s;
cc._RF.pop();
}, {
"../enum/GlobalEnum": "GlobalEnum",
"../net/CommonSender": "CommonSender",
"../utils/CmmUtils": "CmmUtils",
"./ConstString": "ConstString"
} ],
GrayNodeColor: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c4009EBOtlJ/LaWmS2PCG8Z", "GrayNodeColor");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.normalColor = null;
t.selectedColor = null;
t.isGray = !0;
return t;
}
t.prototype.setGray = function(e) {
this.node.color = e ? this.selectedColor : this.normalColor;
this.isGray = e;
};
t.prototype.updateNScolor = function(e, t) {
e && (this.normalColor = e);
t && (this.selectedColor = t);
this.setGray(this.isGray);
};
r([ c(cc.Color) ], t.prototype, "normalColor", void 0);
r([ c(cc.Color) ], t.prototype, "selectedColor", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
GunService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "94ff7QQaAJBWps3XjBvmqJV", "GunService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/UVAnimation/Animation_Nodes"), s = e("../AudioMgr"), c = e("../GameMgr"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.node_Move_Gun = null;
t.node_qiangkou = null;
t.node_Gun = null;
t.node_Move_Zhadan = null;
t.aniNodes_qiangkou = [];
t.aniNodes_zhadan = [];
t.configPos_Gun = [ cc.v3(625, -100, 0), cc.v3(425, -100, 0) ];
t.configPos_Zhadan = [ cc.v3(520, 0, 0), cc.v3(320, 0, 0) ];
t.isFinish = !1;
t.count_myGun = 0;
t.count_myZhadao = 0;
t.callback_Gun = null;
t.callback_Zhadan = null;
t.callback_Over = null;
t.tween_MoveGun = null;
t.tween_MoveZhadan = null;
t.tween_PlayGun = null;
return t;
}
t.prototype.onLoad = function() {
this.aniNodes_qiangkou = [];
this.aniNodes_zhadan = [];
for (var e = this.node_qiangkou.children, t = 0; t < e.length; t++) {
var n = e[t].getComponent(a.default);
this.aniNodes_qiangkou.push(n);
}
var o = this.node_Move_Zhadan.children;
for (t = 0; t < o.length; t++) {
n = o[t].getComponent(a.default);
this.aniNodes_zhadan.push(n);
n.node.position = cc.v3(0, 0, 0);
}
};
t.prototype.OpenShow = function(e, t, n, o, i) {
this.isFinish = !1;
this.count_myGun = e;
this.count_myZhadao = t;
this.callback_Gun = n;
this.callback_Zhadan = o;
this.callback_Over = i;
this.ClearTween();
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Move_Gun.position = this.configPos_Gun[0];
this.node_Move_Zhadan.position = this.configPos_Zhadan[0];
for (var r = 0; r < this.aniNodes_zhadan.length; r++) {
var a = this.aniNodes_zhadan[r];
a.node.position = cc.v3(0, 0, 0);
a.Stop();
}
this.aniNodes_zhadan[0].node.active = !0;
e > 0 ? this.PlayShowGun() : this.PlayShowZhadan();
};
t.prototype.Finish = function() {
this.isFinish = !0;
};
t.prototype.PlayShowGun = function() {
var e = this;
this.tween_MoveGun = cc.tween(this.node_Move_Gun).to(.5, {
position: this.configPos_Gun[1]
}).call(function() {
e.PlayGun(0);
}).start();
};
t.prototype.PlayGun = function(e, t) {
var n = this;
void 0 === t && (t = .1);
this.tween_PlayGun && this.tween_PlayGun.stop();
if (this.isFinish) this.HideShowGun(); else {
this.node_Gun.angle = 0;
this.tween_PlayGun = cc.tween(this.node_Gun).delay(t).call(function() {
s.default.instance.playEffect(c.AudioName.gunShoot);
n.aniNodes_qiangkou[e].node.active = !0;
}).to(.1, {
angle: -20
}).to(.1, {
angle: 0
}).call(function() {
n.callback_Gun && n.callback_Gun(e);
++e == n.count_myGun ? n.HideShowGun() : n.PlayGun(e, .3);
}).start();
}
};
t.prototype.HideShowGun = function() {
var e = this;
this.tween_MoveGun && this.tween_MoveGun.stop();
this.tween_MoveGun = cc.tween(this.node_Move_Gun).to(.5, {
position: this.configPos_Gun[0]
}).call(function() {
e.PlayShowZhadan();
}).start();
};
t.prototype.PlayShowZhadan = function() {
var e = this;
this.isFinish ? this.HideShow() : this.count_myZhadao > 0 ? this.tween_MoveZhadan = cc.tween(this.node_Move_Zhadan).to(.5, {
position: this.configPos_Zhadan[1]
}).call(function() {
e.PlayZhadan(0);
}).start() : this.HideShow();
};
t.prototype.PlayZhadan = function(e, t) {
var n = this;
void 0 === t && (t = .1);
if (this.isFinish) this.HideShowZhadan(); else {
var o = this.aniNodes_zhadan[e];
o.node.active = !0;
o.node.scale = .8;
var i = cc.v2(0, 0), r = cc.v2(-50, 300), a = cc.v2(-320, 455);
cc.tween(o.node).delay(t).call(function() {
s.default.instance.playEffect(c.AudioName.zhadan);
o.Play();
}).parallel(cc.tween().bezierTo(.3, i, r, a), cc.tween().to(.3, {
scale: .6
})).call(function() {
n.callback_Zhadan && n.callback_Zhadan(e);
o.Stop();
++e == n.count_myZhadao ? n.HideShowZhadan() : n.PlayZhadan(e, .3);
}).start();
}
};
t.prototype.HideShowZhadan = function() {
var e = this;
this.tween_MoveZhadan && this.tween_MoveZhadan.stop();
this.tween_MoveZhadan = cc.tween(this.node_Move_Zhadan).to(.5, {
position: this.configPos_Zhadan[0]
}).call(function() {
e.HideShow();
}).start();
};
t.prototype.HideShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
this.callback_Over && this.callback_Over();
};
t.prototype.ClearTween = function() {
this.tween_MoveGun && this.tween_MoveGun.stop();
this.tween_MoveZhadan && this.tween_MoveZhadan.stop();
this.tween_PlayGun && this.tween_PlayGun.stop();
};
r([ p(cc.Node) ], t.prototype, "node_Main", void 0);
r([ p(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ p(cc.Node) ], t.prototype, "node_Move_Gun", void 0);
r([ p(cc.Node) ], t.prototype, "node_qiangkou", void 0);
r([ p(cc.Node) ], t.prototype, "node_Gun", void 0);
r([ p(cc.Node) ], t.prototype, "node_Move_Zhadan", void 0);
return r([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/Animation_Nodes": "Animation_Nodes",
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
HallHandler: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9ea20awrx9LiIfsU1Z5aSu+", "HallHandler");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../common/config/CmdConfig"), a = e("../../common/net/CmdDefines"), s = e("../../common/net/GetCmdKey"), c = e("../../framework/core/net/message/JsonMessage"), l = e("../../framework/core/net/service/Handler"), u = e("./LobbyCmd"), p = e("./LobbyService"), d = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "service", {
get: function() {
return App.serviceManager.get(p.LobbyService);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, u.SUB_CMD_LOBBY.SERVER_GAME_LOGIN), this.loginSuccessful, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, a.SUB_CMD_SYS.CMD_SYS_HEART), this.sysHurt, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_UpDate_User), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.CLINET_NOTICE_USER_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_SM_ROOM_INFO_RETURN), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_NOTICE_USER_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_NOTIFY_REFLUSH_GAMEHOST), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_CONNENCT_SUCC), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_FORCED_OFFLINE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.SERVER_SEND_CHAT_MSG), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.CLINET_NOTICE_KYC_CHANGE), this.commonMessage, c.JsonMessage);
this.onS(s.GetCmdKey(a.MainCmd.CMD_LOBBY, r.default.LabaTCP.Laba_SERVER_SYSTEM_MESSAGE), this.commonMessage, c.JsonMessage);
};
t.prototype.loginSuccessful = function() {};
t.prototype.sysHurt = function() {};
t.prototype.commonMessage = function() {};
t.module = "res";
return t;
}(l.Handler);
n.default = d;
cc._RF.pop();
}, {
"../../common/config/CmdConfig": "CmdConfig",
"../../common/net/CmdDefines": "CmdDefines",
"../../common/net/GetCmdKey": "GetCmdKey",
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"../../framework/core/net/service/Handler": "Handler",
"./LobbyCmd": "LobbyCmd",
"./LobbyService": "LobbyService"
} ],
HallSender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "04b840UXxRKCZJUnrbRq0rq", "HallSender");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HallSender = void 0;
var r = e("../../common/net/HttpSender"), a = e("../../sdk/GameNativeConfig"), s = e("./LobbyCmd"), c = e("./LobbyService"), l = e("./TestJsonMessage"), u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "service", {
get: function() {
return App.serviceManager.get(c.LobbyService);
},
enumerable: !1,
configurable: !0
});
t.prototype.login = function() {
var e = new l.TestJsonMessage();
e.subCmd = s.SUB_CMD_LOBBY.SERVER_GAME_LOGIN;
e.data = {
uid: r.default.uid,
skey: r.default.skey,
version: a.default.NEW_Server_Api_Ver
};
this.send(e);
};
t.module = "res";
return t;
}(r.default);
n.HallSender = u;
cc._RF.pop();
}, {
"../../common/net/HttpSender": "HttpSender",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"./LobbyCmd": "LobbyCmd",
"./LobbyService": "LobbyService",
"./TestJsonMessage": "TestJsonMessage"
} ],
HandlerManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "eadedokPQ5Hb4BTTntCHdxa", "HandlerManager");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HandlerManager = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = null;
return t;
}
t.module = "【Handler管理器】";
return t;
}(e("../../../utils/SingletonT").SingletonT);
n.HandlerManager = r;
cc._RF.pop();
}, {
"../../../utils/SingletonT": "SingletonT"
} ],
Handler: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "19a0fr3e8lEjbNb/wNKtrVQ", "Handler");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Handler = void 0;
var r = e("../../event/EventProcessor"), a = e("../../../defines/Macros"), s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._module = a.Macro.UNKNOWN;
return t;
}
Object.defineProperty(t.prototype, "module", {
get: function() {
return this._module;
},
set: function(e) {
this._module = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.onS = function(e, t, n, o) {
void 0 === o && (o = !0);
var i = this.service;
i && i.addListener && i.addListener(e, n, t, o, this);
};
t.prototype.offS = function(e) {
var t = this.service;
t && t.removeListeners && t.removeListeners(this, e);
};
t.prototype.onDestroy = function() {
this.offS();
e.prototype.onDestroy.call(this);
};
t.prototype.debug = function() {
Log.d(this.module);
};
t.prototype.destory = function() {
this.onDestroy();
};
t.prototype.init = function() {
this.onLoad();
};
t.module = a.Macro.UNKNOWN;
return t;
}(r.EventProcessor);
n.Handler = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../event/EventProcessor": "EventProcessor"
} ],
HomeTipTCService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5a3a8rJqKNG67D5Ajzxghu5", "HomeTipTCService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../AudioMgr"), s = e("../GameMgr"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.clickType = 0;
t.isCanClick = !1;
t.callback_Over = null;
t.tween_main = null;
t.tween_Zhezhao = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e) {
var t = this;
this.ClearTween();
this.isCanClick = !1;
this.callback_Over = e;
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Zhezhao.opacity = 0;
this.node_Main.scale = 0;
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 200
}).start();
this.tween_main = cc.tween(this.node_Main).delay(.3).to(.35, {
scale: 1
}, cc.easeBackOut()).call(function() {
t.isCanClick = !0;
}).start();
};
t.prototype.ButtonClick_Home = function() {
if (this.isCanClick) {
this.isCanClick = !1;
a.default.instance.playEffect(s.AudioName.Click);
this.clickType = 1;
this.CloseShow();
}
};
t.prototype.ButtonClick_Close = function() {
if (this.isCanClick) {
this.isCanClick = !1;
a.default.instance.playEffect(s.AudioName.Click);
this.clickType = 0;
this.CloseShow();
}
};
t.prototype.CloseShow = function() {
var e = this;
this.ClearTween();
this.tween_main = cc.tween(this.node_Main).to(.3, {
scale: 0
}, cc.easeBackIn()).start();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).delay(.2).to(.3, {
opacity: 0
}).delay(.1).call(function() {
e.callback_Over && e.callback_Over(e.clickType);
e.node_Main.active = !1;
e.node_Zhezhao.active = !1;
}).start();
};
t.prototype.ClearTween = function() {
this.tween_Zhezhao && this.tween_Zhezhao.stop();
this.tween_main && this.tween_main.stop();
};
r([ u(cc.Node) ], t.prototype, "node_Main", void 0);
r([ u(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
return r([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
HostInfo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "40cf2uJ++pNW4yKdnZgB1wI", "HostInfo");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HostInfo = void 0;
var o = e("../utils/CmmUtils"), i = function() {
function e() {}
e.init = function(e) {
this.URL_Laba_Server = e.laba + "/";
var t = e.laba.split(":");
this.URL_Laba_Server_ws = t[0];
this.URL_Laba_Server_ip = t[1].replace("//", "");
this.URL_Laba_Server_prot = t[2];
this.URL_Activity_Server = e.activity + "/";
this.URL_Hall_Server = e.hall + "/";
this.agentUrl = e.agent + "/";
this.haveAgent = o.CmmUtils.stringNotEmpty(e.agent);
};
e.URL_Login_Server = "";
e.URL_Hall_Server = "";
e.URL_Activity_Server = "";
e.URL_Laba_Server = "";
e.URL_Laba_Server_ip = "";
e.URL_Laba_Server_prot = "";
e.URL_Laba_Server_ws = "";
e.agentUrl = "";
e.haveAgent = !1;
return e;
}();
n.HostInfo = i;
cc._RF.pop();
}, {
"../utils/CmmUtils": "CmmUtils"
} ],
HotUpdate: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ef514GPLTxPO5EXpXxuufDl", "HotUpdate");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(e) {
try {
c(o.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(o.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
c((o = o.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var c = e("../../common/component/ZProgressbar"), l = e("../../common/config/Config"), u = e("../../common/config/ConstString"), p = e("../../common/config/GlobalVar"), d = e("../../common/config/HostInfo"), h = e("../../common/config/User"), f = e("../../common/event/CommonEvent"), _ = e("../../common/net/CommonSender"), g = e("../../common/net/HttpSender"), y = e("../../common/utils/CmmUtils"), m = e("../../framework/componects/EventComponent"), v = e("../../framework/core/update/Update"), E = e("../../framework/defines/Enums"), S = e("../../framework/defines/Macros"), b = e("../../sdk/AppInfo"), R = e("../../sdk/GameNativeConfig"), C = cc._decorator, A = C.ccclass, T = C.property, O = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.wRoot1 = null;
t.wRoot2 = null;
t.cRoot1 = null;
t.cRoot2 = null;
t.mainUpdateNode = null;
t.percent = null;
t.precentLabel = null;
t.enterFun = null;
return t;
}
n = t;
t.prototype.addEvents = function() {
this.onD(f.HotEvent.DownMainProgress, this.downMainProgress);
this.onD(f.HotEvent.DownMainComplete, this.downMainComplete);
};
t.prototype.init = function() {
this.mainUpdateNode = cc.find("updateNode", this.node);
this.percent = cc.find("updateNode/precent", this.node).getComponent(c.default);
};
t.prototype.enterGame = function() {
App.OfflineMode || n.sender.Send_Act_15();
this.mainUpdateNode.active = !1;
this.enterFun();
n.autoLogin();
};
t.prototype.checkVersion = function(e) {
var t = this;
n.sender = App.senderManager.get(_.default);
this.enterFun = e;
if (p.GlobalVar.isLogin) {
this.mainUpdateNode.active = !1;
this.enterFun();
this.refreshDataInfo();
} else n.sender.Send_CheckVer(function(e) {
var n = e.data;
if (0 != n.gameStatus) {
t.updateGlobalVar(n);
p.GlobalVar.isLogin = !0;
} else y.CmmUtils.popTipsBack(n.closeMsg, function() {});
});
};
t.prototype.refreshDataInfo = function() {
h.default.self.updatePlayerInfo();
dispatch(f.HttpEvent.BigSaleUpdate);
dispatch(R.default.Event.update_money);
dispatch(f.HttpEvent.UpdateFreeMoney);
};
t.prototype.initConfig = function(e) {
p.GlobalVar.regDelay = e.regDelay;
p.GlobalVar.taskCoin = e.weekReward;
p.GlobalVar.tc_url = e.serviceUrl;
p.GlobalVar.pp_url = e.privacyUrl;
p.GlobalVar.rankvip = e.rankvip;
p.GlobalVar.logout = e.logout;
p.GlobalVar.shareAppUrl = e.app;
p.GlobalVar.shareAppReward = e.appReward;
p.GlobalVar.iosWebsiteUrl = e.website;
p.GlobalVar.shareLinkUrl = e.qrlink;
p.GlobalVar.ntaUrl = e.nta;
p.GlobalVar.cusUrl = e.cusUrl;
p.GlobalVar.shareCoin = e.shareReward;
dispatch(f.HttpEvent.CheckUpdateFinish);
};
t.prototype.updateGlobalVar = function(e) {
p.GlobalVar.downList.clear();
d.HostInfo.init(e.hosts);
this.initConfig(e.config);
App.updateManager.hotUpdateUrl = e.update.updateUrl + u.ConstString.hotPath;
if (e.webUrl) {
var t = e.webUrlTip;
this.showTip_WebUrl(t, e.webUrl);
} else {
App.updateManager.isSkipCheckUpdate = 1 != e.update.updateStatus;
p.GlobalVar.hotUpdateUrl = App.updateManager.hotUpdateUrl;
p.GlobalVar.gameIconPath = e.updateUrl + u.ConstString.gameIconPath;
Log.e("更新热更地址：" + App.updateManager.hotUpdateUrl);
this.checkUpdate();
}
};
t.initHallSocket = function() {};
t.prototype.checkUpdate = function() {
return a(this, void 0, void 0, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
if (!b.default.isBrowser) return [ 3, 1 ];
this.enterGame();
return [ 3, 4 ];

case 1:
App.uiLoading.show(0);
if (!App.updateManager.isSkipCheckUpdate) return [ 3, 2 ];
App.uiLoading.hide();
this.enterGame();
return [ 3, 4 ];

case 2:
return [ 4, App.updateManager.getRemoteVersions() ];

case 3:
if (t.sent()) if (App.updateManager.getStatus(S.Macro.MAIN_PACK_BUNDLE_NAME) != v.Update.Status.UP_TO_DATE) App.entryManager.onCheckUpdate(); else {
App.uiLoading.hide();
App.entryManager.onCheckUpdate();
this.enterGame();
} else {
App.uiLoading.hide();
e = function() {
cc.game.restart();
};
App.alert.show({
title: l.Config.alertTitlePath.TIPS,
confirmCb: e,
confirmString: "Ok",
text: "down remote version fail",
hideX: !1,
isRepeat: !1
});
}
t.label = 4;

case 4:
return [ 2 ];
}
});
});
};
t.prototype.downMainProgress = function(e) {
App.uiLoading.hide();
this.percent.node.active = !0;
var t = e.info;
Log.e("xxxxxxxxxxxxxxmian" + t.percent);
var n = t.percent || 0;
this.percent.progress(n);
};
t.prototype.downMainComplete = function() {
App.uiLoading.hide();
this.percent.node.active = !0;
Log.e("xxxxxxxxxxxxxxxxx主包更新完成");
cc.game.restart();
};
t.prototype.showTip_WebUrl = function(e, t) {
App.alert.show({
text: e,
confirmString: "OK",
title: l.Config.alertTitlePath.TIPS,
confirmCb: function() {
cc.sys.openURL(t);
}
});
};
t.autoLogin = function() {
var e = this, t = App.storage.getItem(R.default.Key.PhoneId);
t ? this.sender.Send_Login(t, function(t) {
e.LoingCallBack(t.data);
}) : dispatch(f.CommonEvent.Show_Hall);
};
t.prototype.updatePlayerMode = function() {
this.wRoot1 && (this.wRoot1.active = !h.default.self.isMerchantPlayer);
this.wRoot2 && (this.wRoot2.active = h.default.self.isMerchantPlayer);
this.cRoot1 && (this.cRoot1.active = !h.default.self.isMerchantPlayer);
this.cRoot2 && (this.cRoot2.active = h.default.self.isMerchantPlayer);
};
t.LoingCallBack = function(e) {
var t = this;
Log.w(JSON.stringify(e));
0 == e.log ? App.logger.level = E.LogLevel.NONE : App.logger.level = E.LogLevel.ALL;
p.GlobalVar.cusUrl = e.cusUrl;
App.storage.setItem(R.default.Key.PhoneId, e.pwdtoken);
g.default.skey = e.skey;
g.default.uid = e.uid;
App.storage.setItem(u.ConstString.userId, g.default.uid);
this.initIndex = 0;
this.sender.Send_InitHall(function(e) {
p.GlobalVar.initLimitData(e.data);
p.GlobalVar.kycUrl = e.data.kycUrl;
p.GlobalVar.shareLinkUrl = e.data.qrlink;
t.initIndex++;
});
this.sender.Send_Act_15();
this.sender.Send_PlayerInfo(function(e) {
h.default.self.initPlayerInfo(e.data);
h.default.self.updateServerRedPoint();
t.initIndex++;
});
this.sender.Send_PayChannel(function(e) {
p.GlobalVar.initPayChannel(e.data.pays, e.data.mid);
t.initIndex++;
});
this.sender.Send_Act_16(function(e) {
h.default.self.initBindRewardInfo(e.data);
dispatch(f.HttpEvent.CheckUpdateFinish);
t.initIndex++;
});
this.sender.Send_getNotice(function(e) {
Log.e("-Notice----\x3e" + JSON.stringify(e.data));
e.data.list && e.data.list.length > 0 && (p.GlobalVar.noticeData = e.data.list.reverse());
}, 1);
App.OfflineMode || this.sender.Send_VipConfig(function(e) {
h.default.self.initVipConfig(e.data);
t.initIndex++;
});
App.OfflineMode || this.sender.Send_VipConfig(function() {
p.GlobalVar.poster && p.GlobalVar.poster.list && p.GlobalVar.poster.list.length > 0 ? t.initIndex++ : t.sender.Send_ActivityList(function(e) {
p.GlobalVar.poster = e.data.poster;
p.GlobalVar.poster && p.GlobalVar.poster.list && p.GlobalVar.poster.list.reverse();
t.initIndex++;
});
});
h.default.self.checkPlayer();
this.initHallSocket();
};
t.prototype.update = function() {
if (App.OfflineMode) {
if (4 == n.initIndex) {
n.initIndex = 5;
dispatch(f.CommonEvent.Show_Hall);
}
} else if (6 == n.initIndex) {
n.initIndex = 7;
dispatch(f.CommonEvent.Show_Hall);
}
};
var n;
t.sender = null;
t.initIndex = 0;
r([ T(cc.Node) ], t.prototype, "wRoot1", void 0);
r([ T(cc.Node) ], t.prototype, "wRoot2", void 0);
r([ T(cc.Node) ], t.prototype, "cRoot1", void 0);
r([ T(cc.Node) ], t.prototype, "cRoot2", void 0);
return n = r([ A ], t);
}(m.default);
n.default = O;
cc._RF.pop();
}, {
"../../common/component/ZProgressbar": "ZProgressbar",
"../../common/config/Config": "Config",
"../../common/config/ConstString": "ConstString",
"../../common/config/GlobalVar": "GlobalVar",
"../../common/config/HostInfo": "HostInfo",
"../../common/config/User": "User",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonSender": "CommonSender",
"../../common/net/HttpSender": "HttpSender",
"../../common/utils/CmmUtils": "CmmUtils",
"../../framework/componects/EventComponent": "EventComponent",
"../../framework/core/update/Update": "Update",
"../../framework/defines/Enums": "Enums",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig"
} ],
HotVersion: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f43e4B7O/tAIrJtCmQn3l7X", "HotVersion");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function e() {}
e.hot_version = "2.9.0";
return e;
}();
n.default = o;
cc._RF.pop();
}, {} ],
HttpClient: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8f248ibg1tHVrFHV/QUgzEG", "HttpClient");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HttpClient = n.HttpPackage = void 0;
var o = e("../../../../common/config/Config"), i = e("./Http"), r = function() {
function e() {
this.data = null;
this.url = null;
this.timeout = 1e3 * o.Config.HTTP_TIME_OUT;
this.type = i.Http.Type.GET;
this.async = !0;
this.requestHeader = null;
this.isAutoAttachCurrentTime = !1;
this._responseType = "";
}
Object.defineProperty(e.prototype, "responseType", {
get: function() {
"" == this._responseType && (this._responseType = "text");
return this._responseType;
},
set: function(e) {
this._responseType = e;
},
enumerable: !1,
configurable: !0
});
return e;
}(), a = function() {
function e() {
this._data = new r();
this._params = null;
}
Object.defineProperty(e.prototype, "data", {
get: function() {
return this._data;
},
set: function(e) {
this._data = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "params", {
get: function() {
return this._params;
},
set: function(e) {
this._params = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.send = function(e, t) {
App.http.request(this, e, t);
};
e.crossProxy = {};
e.location = {
host: "",
pathname: "",
protocol: ""
};
return e;
}();
n.HttpPackage = a;
var s = function() {
function e() {
this.module = null;
}
e.prototype.crossProxy = function(e) {
if (cc.sys.isBrowser && a.crossProxy) {
for (var t = a.crossProxy, n = a.location, o = Object.keys(t), i = 0; i < o.length; i++) {
var r = o[i], s = t[r];
if (e.indexOf(r) > -1 && s.protocol && s.api) {
n.protocol != s.protocol && (e = e.replace(s.protocol, n.protocol));
return e.replace(r, n.host + "/" + s.api);
}
}
return e;
}
return e;
};
e.prototype.convertParams = function(e, t) {
if (null == t || null == t) return e;
var n = "&";
e.indexOf("?") < 0 && (n = "?");
for (var o = Object.keys(t), i = 0; i < o.length; i++) n += 0 == i ? o[i] + "=" + encodeURIComponent(t[o[i]]) : "&" + o[i] + "=" + encodeURIComponent(t[o[i]]);
return e + n;
};
e.prototype.convertData = function(e) {
return e;
};
e.prototype.request = function(e, t, n) {
var o = e.data.url;
if (o) {
var r = new XMLHttpRequest();
r.onreadystatechange = function() {
if (4 === r.readyState) if (r.status >= 200 && r.status < 300) "arraybuffer" == r.responseType || "blob" == r.responseType ? t && t(r.response) : t && t(r.responseText); else {
var e = "request error status:" + r.status;
Log.e("request error status : " + r.status + " url : " + o + " ");
n && (n({
type: i.Http.ErrorType.RequestError,
reason: e
}), n = null);
}
};
r.responseType = e.data.responseType;
r.timeout = e.data.timeout;
r.ontimeout = function() {
r.abort();
n && n({
type: i.Http.ErrorType.TimeOut,
reason: "request timeout"
});
};
r.onerror = function() {
Log.e("request error : " + o + " ");
n && n({
type: i.Http.ErrorType.RequestError,
reason: "request error"
});
};
o = this.crossProxy(o);
o = this.convertParams(o, e.params);
e.data.isAutoAttachCurrentTime && (o = o.indexOf("?") >= 0 ? o + "&cur_loc_t=" + Date.timeNow() : o + "?cur_loc_t=" + Date.timeNow());
if (e.data.type === i.Http.Type.POST) {
r.open(i.Http.Type.POST, o, e.data.async);
if (e.data.requestHeader) if (e.data.requestHeader instanceof Array) e.data.requestHeader.forEach(function(e) {
r.setRequestHeader(e.name, e.value);
}); else {
var a = e.data.requestHeader;
r.setRequestHeader(a.name, a.value);
} else r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
r.send(this.convertData(e.data.data));
} else {
r.open(i.Http.Type.GET, o, e.data.async);
if (e.data.requestHeader) if (e.data.requestHeader instanceof Array) e.data.requestHeader.forEach(function(e) {
r.setRequestHeader(e.name, e.value);
}); else {
a = e.data.requestHeader;
r.setRequestHeader(a.name, a.value);
}
r.send();
}
} else n && n({
type: i.Http.ErrorType.UrlError,
reason: "reuqest url error"
});
};
e.module = "【Http管理器】";
return e;
}();
n.HttpClient = s;
cc._RF.pop();
}, {
"../../../../common/config/Config": "Config",
"./Http": "Http"
} ],
HttpSender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2b407Tz2zdGSb5aI1UwBrbX", "HttpSender");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../aesres/aesres"), a = e("../../framework/core/net/http/Http"), s = e("../../framework/core/net/http/HttpClient"), c = e("../../framework/core/net/service/Sender"), l = e("../../framework/defines/Macros"), u = e("../../sdk/AppInfo"), p = e("../../sdk/SdkManager"), d = e("../config/ConstString"), h = e("../config/GlobalVar"), f = e("../config/HostInfo"), _ = e("../enum/GlobalEnum"), g = e("../utils/CmmUtils"), y = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "service", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
t.prototype.addCommonParam = function(e) {
var n = g.CmmUtils.sec;
e.ver = u.default.getVerCode(), e.channel_id = u.default.getChannelId();
e.skey = t.skey;
e.lan = 0;
e.platform = u.default.getPlatform();
"0" != t.uid ? e.uid = t.uid : e.uid = App.storage.getItem(d.ConstString.userId) || "0";
e.check_uid = e.uid;
g.CmmUtils.stringNotEmpty(e.skey) || (e.uid = "0");
e.ts = n;
Log.e("http_new发送参数：" + JSON.stringify(e));
var o = {}, i = JSON.stringify(e);
i = r.default.encrypt(i);
o.data = i;
return o;
};
t.prototype.addCommonGameParam = function(e) {
e.uid = h.GlobalVar.guid;
e.gameId = h.GlobalVar.curGameId;
e.uid && !g.CmmUtils.isNull(e.gameId) && (e.token = "");
Log.e("http_new发送参数：" + JSON.stringify(e));
var t = {}, n = JSON.stringify(e);
n = r.default.encrypt(n);
t.data = n;
return t;
};
t.prototype.SendPostHttp = function(e, t, n, o, i) {
var r = this;
void 0 === n && (n = _.GlobalEnum.HttpUrlType.Hall);
return new Promise(function(c) {
var l = new s.HttpPackage();
switch (n) {
case _.GlobalEnum.HttpUrlType.Login:
l.data.url = f.HostInfo.URL_Login_Server;
o || (o = 100);
break;

case _.GlobalEnum.HttpUrlType.Hall:
l.data.url = f.HostInfo.URL_Hall_Server;
break;

case _.GlobalEnum.HttpUrlType.Game:
l.data.url = h.GlobalVar.game_http_url;
break;

case _.GlobalEnum.HttpUrlType.ShareGift:
l.data.url = f.HostInfo.agentUrl;
break;

case _.GlobalEnum.HttpUrlType.Activity:
l.data.url = f.HostInfo.URL_Activity_Server;
}
l.data.isAutoAttachCurrentTime = !1;
l.data.type = a.Http.Type.POST;
var u = {};
u = g.CmmUtils.copyObjWhenKeyEqual(e, u);
l.params = r.addCommonParam(e);
var p = i;
p || (p = function(e) {
if (n != _.GlobalEnum.HttpUrlType.Game || h.GlobalVar.isGameing) {
switch (e.type) {
case a.Http.ErrorType.TimeOut:
}
c(null);
}
});
Log.e("http_new :" + l.data.url);
l.send(function(e) {
var o = JSON.parse(e);
Log.d("http_new :" + JSON.stringify(o));
if (0 == o.ret) t && t(o); else {
Log.e(l.data.url);
Log.e(n);
}
c(o);
}, p);
});
};
t.prototype.SendGamePostHttp = function(e, t, n, o, i) {
var r = this;
return new Promise(function(c) {
var u = new s.HttpPackage();
u.data.url = h.GlobalVar.gameService;
u.data.isAutoAttachCurrentTime = !1;
u.data.type = a.Http.Type.POST;
u.params = r.addCommonGameParam(e);
n && App.uiLoading.show(n);
var d = o;
d || (d = function(o) {
n && App.uiLoading.hide();
switch (o.type) {
case a.Http.ErrorType.TimeOut:
App.alert.show({
text: o.reason,
confirmString: "Try Again",
tag: "http",
isRepeat: !1,
hideX: i,
confirmCb: function() {
r.SendGamePostHttp(e, t, n, null, i);
},
immediatelyCallback: !0
});
break;

default:
App.alert.show({
text: o.reason,
confirmString: "Try Again",
tag: "http",
isRepeat: !1,
hideX: !0,
confirmCb: function() {
r.SendGamePostHttp(e, t, n, null, i);
},
closeCb: function() {
if (App.SingleGame) p.default.ExitSingleGame(); else if ("LoginView" != App.gameView.className) {
App.entryManager.enterBundle(l.Macro.BUNDLE_RESOURCES);
p.default.setOrientation_l();
}
},
immediatelyCallback: !0
});
}
c(null);
});
Log.e("http_new :" + u.data.url);
u.send(function(e) {
n && App.uiLoading.hide();
var o = JSON.parse(e);
Log.d("http_new :" + JSON.stringify(o));
if (0 == o.ret) t && t(o); else {
Log.e(u.data.url);
g.CmmUtils.popRet1(o, null);
}
c(o);
}, d);
});
};
t.doGetRequest = function(e, t) {
var n = new XMLHttpRequest();
n.onreadystatechange = function() {
if (4 == n.readyState && 200 == n.status) {
var o = n.responseText;
Log.e("[HTTP] ================ \n >> request >> " + e + "\n << respond << " + o);
try {
t(JSON.parse(o));
} catch (e) {
t({
ret: -3,
desc: "parse error"
});
}
}
};
n.ontimeout = function() {
Log.e("[HTTP] ontimeout ->", e);
t({
ret: -1,
desc: "network timeout"
});
};
n.onerror = function() {
Log.e("[HTTP] onerror ->", e);
t({
ret: -2,
desc: "network failed"
});
};
Log.w("[HTTP] get request ->" + e);
n.open("GET", e);
n.send();
};
t.uid = "0";
t.skey = "";
t.httpSecretKey = "_P9M!E^&tx8K?N1";
return t;
}(c.Sender);
n.default = y;
cc._RF.pop();
}, {
"../../aesres/aesres": "aesres",
"../../framework/core/net/http/Http": "Http",
"../../framework/core/net/http/HttpClient": "HttpClient",
"../../framework/core/net/service/Sender": "Sender",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/SdkManager": "SdkManager",
"../config/ConstString": "ConstString",
"../config/GlobalVar": "GlobalVar",
"../config/HostInfo": "HostInfo",
"../enum/GlobalEnum": "GlobalEnum",
"../utils/CmmUtils": "CmmUtils"
} ],
Http: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "684c9CBZ2NBQJyjobWDkoFY", "Http");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Http = void 0;
(function(e) {
(function(e) {
e[e.UrlError = 0] = "UrlError";
e[e.TimeOut = 1] = "TimeOut";
e[e.RequestError = 2] = "RequestError";
})(e.ErrorType || (e.ErrorType = {}));
(function(e) {
e.POST = "POST";
e.GET = "GET";
})(e.Type || (e.Type = {}));
})(n.Http || (n.Http = {}));
cc._RF.pop();
}, {} ],
JsonMessage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "04477YisahPuY0c+R6qXD5e", "JsonMessage");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.JsonMessageHeartbeat = n.JsonMessage = n.serialize = void 0;
var r = e("../../../plugin/ByteArray"), a = e("../Net"), s = e("./Message");
n.serialize = function(e, t, n, o) {
return function(i, r) {
if (void 0 === Reflect.getOwnPropertyDescriptor(i, "__serialize__")) {
var a = {};
if (Reflect.getPrototypeOf(i).__serialize__ && void 0 === Reflect.getOwnPropertyDescriptor(i, "__serialize__")) for (var s = Reflect.getPrototypeOf(i).__serialize__, c = Object.keys(s), l = c.length, u = 0; u < l; u++) a[c[u]] = s[c[u]].slice(0);
Reflect.defineProperty(i, "__serialize__", {
value: a
});
}
if (i.__serialize__[e]) throw "SerializeKey has already been declared:" + e;
i.__serialize__[e] = [ r, t, n, o ];
};
};
var c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.data = null;
t.byteArray = null;
t.buffer = null;
return t;
}
t.prototype.encode = function() {
var e = JSON.stringify(this.data);
this.byteArray = new r.ByteArray();
this.byteArray.writeUTFBytes(e);
this.buffer = this.byteArray.bytes;
return !0;
};
t.prototype.serializeMember = function(e) {
if ("number" == typeof e) return this.serializeNumber(e);
if ("boolean" == typeof e) return this.serializeBool(e);
if ("string" == typeof e) return this.serializeString(e);
if (e instanceof Array) return this.serializeArray(e);
if (e instanceof Map) return this.serializeMap(e);
if (e instanceof t) return e.serialize();
Log.w("Invalid serialize value : " + e);
return null;
};
t.prototype.serializeNumber = function(e) {
null == e && (e = 0);
"string" == typeof e && (e = Number(e));
Number.isNaN(e) && (e = 0);
return e;
};
t.prototype.serializeBool = function(e) {
null == e && (e = !1);
"string" == typeof e && (e = "true" == e);
Number.isNaN(e) && (e = !1);
return e;
};
t.prototype.serializeString = function(e) {
return null == e ? "" : e.toString();
};
t.prototype.serializeArray = function(e) {
var t = this, n = [];
e.forEach(function(e) {
n.push(t.serializeMember(e));
});
return n;
};
t.prototype.serializeMap = function(e) {
var t = [], n = this;
e.forEach(function(e, o) {
var i = {
k: n.serializeMember(o),
v: n.serializeMember(e)
};
if (null === i.k) {
Log.w("Invalid map key!");
i.k = "";
}
if (null === i.v) {
Log.w("Invalid map value");
i.v = "";
}
t.push(i);
});
return t;
};
t.prototype.decode = function(e) {
if (e) {
this.buffer = e;
this.byteArray = new r.ByteArray(e);
var t = this.byteArray.readUTFBytes(this.byteArray.length);
if (t.length > 0) try {
this.data = JSON.parse(t);
} catch (e) {
return !1;
}
return this.deserialize(this.data);
}
return !1;
};
t.prototype.deserialize = function(e) {
var t = Reflect.getPrototypeOf(this).__serialize__;
if (!t) return !0;
for (var n = Object.keys(t), o = n.length, i = 0; i < o; i++) {
var r = n[i], a = t[r], s = a[0], c = a[1], l = a[2], u = a[3];
if (!this.deserializeMember(s, c, l, u, e[r])) {
Log.w("Invalid deserialize member :" + s);
return !1;
}
}
return !0;
};
t.prototype.deserializeMember = function(e, n, o, i, r) {
try {
var a = this[e];
if ("number" == typeof a) this[e] = this.deserializeNumber(e, r); else if ("boolean" == typeof a) this[e] = this.deserializeBool(e, r); else if ("string" == typeof a) this[e] = this.deserializeString(e, r); else if (a instanceof Array) this.deserializeArray(e, o, r); else if (a instanceof Map) this.deserializeMap(e, o, i, r); else if (a instanceof t) a.deserialize(r); else {
if (null !== a) {
Log.w("Invalid deserialize member : " + e + " value:" + a);
return !1;
}
switch (n) {
case Number:
this[e] = this.deserializeNumber(e, r);
break;

case String:
this[e] = this.deserializeString(e, r);
break;

case Array:
this[e] = [];
break;

case Map:
this[e] = new Map();
break;

default:
this[e] = new n();
if (!(this[e] instanceof t)) {
Log.w("Invalid deserialize member :" + e + " value:" + a);
return !1;
}
this[e].deserialize(r);
}
}
return !0;
} catch (t) {
Log.w(t.message);
this[e] = t.data || null;
return !1;
}
};
t.prototype.deserializeNumber = function(e, t) {
if (null == t || NaN === t) throw {
message: "Invalid deserializeNumber member : " + e + " value : " + t,
data: 0
};
return Number(t);
};
t.prototype.deserializeBool = function(e, t) {
if (null == t || NaN === t) throw {
message: "Invalid deserializeNumber member : " + e + " value : " + t,
data: 0
};
return Boolean(t);
};
t.prototype.deserializeString = function(e, t) {
if (null == t) throw {
message: "Invalid deserializeString member : " + e + " value : " + t,
data: ""
};
return t;
};
t.prototype.deserializeArray = function(e, n, o) {
var i = this;
if (!(o instanceof Array)) throw {
message: "Invalid deserializeArray member : " + e + " value : " + o,
data: []
};
this[e] = [];
o.forEach(function(o, r) {
if (n === Number) i[e].push(i.deserializeNumber(e + "[" + r + "]", o)); else if (n === String) i[e].push(i.deserializeString(e + "[" + r + "]", o)); else {
if (n === Array) throw {
message: "Invalid deserializeArray member : " + e + " array value type is Array"
};
if (n instanceof Map) throw {
message: "Invalid deserializeArray member : " + e + " array value type is Map"
};
if (i[e] instanceof t) i[e].deserialize(o); else {
var a = new n();
if (!(a instanceof t)) throw {
message: "Invalid deserializeArray member : " + e + " array value type is " + n
};
a.deserialize(o);
i[e].push(a);
}
}
});
};
t.prototype.deserializeMap = function(e, n, o, i) {
var r = this;
if (!(i instanceof Array)) throw {
message: "Invalid deserializeMap member : " + e + " value : " + i,
data: new Map()
};
this[e].clear();
i.forEach(function(i, a) {
if (null === i || void 0 === i.k || null === i.k || void 0 === i.v || null === i.v) throw {
message: "Invalid deserializeMap member : " + e + " invalid element : " + i
};
var s, c;
if (n === Number) s = r.deserializeNumber(e + "[" + a + "]:key", i.k); else {
if (n !== String) throw {
message: "Invalid deserializeMap member : " + e + " invalid key type : " + n
};
s = r.deserializeString(e + "[" + a + "]:key", i.k);
}
if (o === Number) c = r.deserializeNumber(e + "[" + a + "]:value", i.v); else if (o === String) c = r.deserializeString(e + "[" + a + "]:value", i.v); else {
if (o === Array) throw {
message: "Invalid deserializeMap member : " + e + " invalid value type : Array"
};
if (o instanceof Map) throw {
message: "Invalid deserializeMap member : " + e + " invalid value type : Map"
};
if (!((c = new o()) instanceof t)) throw {
message: "Invalid deserializeMap member : " + e + " invalid value type : " + o
};
c.deserialize(i.v);
}
r[e].set(s, c);
});
};
return t;
}(s.Message);
n.JsonMessage = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.type = a.Net.ServiceType.Json;
return t;
}(c);
n.JsonMessageHeartbeat = l;
cc._RF.pop();
}, {
"../../../plugin/ByteArray": "ByteArray",
"../Net": "Net",
"./Message": "Message"
} ],
LevelLayoutMgr_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9809548KpRLzqsfTUIa1gX0", "LevelLayoutMgr_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../Model/LevelModel_A"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prefab_levels = [];
return t;
}
t.prototype.CreateLevel = function(e) {
this.node.destroyAllChildren();
var t = cc.instantiate(this.prefab_levels[e]);
t.parent = this.node;
return t.getComponent(a.default).controler;
};
r([ l(cc.Prefab) ], t.prototype, "prefab_levels", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../Model/LevelModel_A": "LevelModel_A"
} ],
LevelManager_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "188fdN13iBM0IxMRQdbxi6s", "LevelManager_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/sdk/SdkManager"), s = e("../AudioMgr"), c = e("../GameMgr"), l = e("../Model/ChooseLevelModel_A"), u = e("./SettingChooseTC_A"), p = cc._decorator, d = p.ccclass, h = p.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.prefab_Model = null;
t.scrollView_level = null;
t.node_Content = null;
t.settingTC = null;
t.spriteFrames = [];
t.chooseLevelModels = [];
t.finish_lv_Str = "finish_lv";
t.configData = null;
t.curPlayLevel = 1;
t.finishLevel = 0;
t.tween_Content = null;
return t;
}
n = t;
t.prototype.onLoad = function() {
var e = this;
n.instance = this;
this.scrollView_level.enabled = !1;
this.node_Content.destroyAllChildren();
this.chooseLevelModels = [];
this.InitConfigData();
this.getLevel();
for (var t = 0; t < this.configData.levels.length; t++) {
var o = this.configData.levels[t], i = cc.instantiate(this.prefab_Model);
i.parent = this.node_Content;
var r = i.getComponent(l.default);
this.chooseLevelModels.push(r);
var a = t <= this.finishLevel;
r.Init(o.id, this.spriteFrames[o.id - 1], a, .1 * t, function(t) {
e.Callback_ChooseLevel(t);
});
}
this.Callback_ChooseLevel(this.curPlayLevel);
};
t.prototype.start = function() {};
t.prototype.OpenShow = function() {
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
};
t.prototype.CloseShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
};
t.prototype.SetFinishLevel = function(e) {
if (e > this.finishLevel) {
this.finishLevel = e;
this.setLevel();
for (var t = 0; t < this.chooseLevelModels.length; t++) {
var n = this.chooseLevelModels[t], o = t <= this.finishLevel;
n.ResetState(o);
}
}
};
t.prototype.PlayNextLevel = function(e) {
e < this.chooseLevelModels.length ? this.Callback_ChooseLevel(e + 1) : this.Callback_ChooseLevel(e);
};
t.prototype.ButtonClick_Home = function() {
s.default.instance.playEffect(c.AudioName.Click);
cc.director.loadScene("login");
a.default.showInterstitial();
};
t.prototype.ButtonClick_Setting = function() {
s.default.instance.playEffect(c.AudioName.Click);
this.settingTC.OpenShow();
};
t.prototype.AutoRefreshPosition = function(e) {
var t = this;
this.tween_Content && this.tween_Content.stop();
this.scrollView_level.enabled = !1;
var n, o = -this.chooseLevelModels[this.finishLevel].node.position.x;
n = this.finishLevel < 8 ? 1700 : 8 == this.finishLevel ? 1500 : 9 == this.finishLevel ? 1380 : 10 == this.finishLevel ? 1260 : 11 == this.finishLevel ? 1100 : 900;
if (e) {
var i = cc.v2(this.node_Content.position.x, this.node_Content.position.y), r = cc.v2(o - 200, (n + 1e3) / 2), a = cc.v2(o, n);
this.tween_Content = cc.tween(this.node_Content).bezierTo(3, i, r, a).call(function() {
t.scrollView_level.enabled = !0;
}).start();
} else this.tween_Content = cc.tween(this.node_Content).to(2, {
position: cc.v3(o, n, 0)
}, cc.easeSineOut()).call(function() {
t.scrollView_level.enabled = !0;
}).start();
};
t.prototype.Callback_ChooseLevel = function(e) {
this.curPlayLevel = e;
var t = this.configData.levels[e - 1];
dispatch(c.MyGameEvent_A.ChooseLevel, t);
this.CloseShow();
};
t.prototype.getLevel = function() {
this.finishLevel = App.storage.getItem(this.finish_lv_Str, 0);
};
t.prototype.setLevel = function() {
App.storage.setItem(this.finish_lv_Str, this.finishLevel);
};
t.prototype.InitConfigData = function() {
this.configData = {
levels: [ {
id: 1,
reelId: 0,
reel: [ 3, 3 ],
targetId: [ 0 ],
maxLive: 21,
reward: 200,
ele: [ 1, 2, 3, 4, 5 ],
dropWeights: [ 1, 1, 3, 1, 1 ],
lines: [ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ], [ 0, 4, 8 ], [ 2, 4, 6 ] ],
betRate: [ [ 15 ], [ 9 ], [ 6 ], [ 2 ], [ 1 ] ]
}, {
id: 2,
reelId: 1,
reel: [ 4, 3 ],
targetId: [ 1 ],
maxLive: 500,
reward: 300,
ele: [ 1, 2, 3, 4, 5, 6 ],
dropWeights: [ 1, 1, 3, 2, 3, 4 ],
lines: [ [ 0, 3, 6, 9 ], [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 0, 3, 6, 10 ], [ 1, 3, 6, 11 ], [ 2, 5, 8, 10 ], [ 1, 5, 8, 11 ], [ 0, 5, 8, 9 ], [ 2, 3, 6, 11 ] ],
betRate: [ [ 30, 80 ], [ 20, 50 ], [ 10, 20 ], [ 5, 10 ], [ 3, 8 ], [ 1, 5 ] ]
}, {
id: 3,
reelId: 1,
reel: [ 4, 3 ],
targetId: [ 2 ],
maxLive: 1e3,
reward: 500,
ele: [ 1, 2, 3, 4, 5, 6, 7 ],
dropWeights: [ 1, 1, 3, 2, 3, 4, 5 ],
lines: [ [ 0, 3, 6, 9 ], [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 0, 3, 6, 10 ], [ 1, 3, 6, 11 ], [ 2, 5, 8, 10 ], [ 1, 5, 8, 11 ], [ 0, 5, 8, 9 ], [ 2, 3, 6, 11 ] ],
betRate: [ [ 50, 100 ], [ 30, 80 ], [ 20, 50 ], [ 10, 20 ], [ 5, 10 ], [ 2, 8 ], [ 1, 5 ] ]
}, {
id: 4,
reelId: 2,
reel: [ 5, 3 ],
targetId: [ 3 ],
maxLive: 2e3,
reward: 800,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
dropWeights: [ 1, 1, 2, 5, 6, 7, 8, 2 ],
lines: [ [ 0, 3, 6, 9, 12 ], [ 1, 4, 7, 10, 13 ], [ 2, 5, 8, 11, 14 ], [ 0, 4, 8, 10, 12 ], [ 2, 4, 6, 10, 14 ], [ 0, 3, 7, 11, 14 ], [ 2, 5, 7, 9, 12 ], [ 1, 3, 7, 11, 13 ], [ 1, 5, 7, 9, 14 ] ],
betRate: [ [ 45, 90, 600 ], [ 36, 45, 240 ], [ 27, 36, 180 ], [ 18, 30, 120 ], [ 9, 27, 90 ], [ 6, 24, 60 ], [ 3, 15, 45 ], [ 3, 6, 9 ] ]
}, {
id: 5,
reelId: 2,
reel: [ 5, 3 ],
targetId: [ 4 ],
maxLive: 3e3,
reward: 1e3,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 1, 2, 5, 6, 7, 8, 2, 9 ],
lines: [ [ 0, 3, 6, 9, 12 ], [ 1, 4, 7, 10, 13 ], [ 2, 5, 8, 11, 14 ], [ 0, 4, 8, 10, 12 ], [ 2, 4, 6, 10, 14 ], [ 0, 3, 7, 11, 14 ], [ 2, 5, 7, 9, 12 ], [ 1, 3, 7, 11, 13 ], [ 1, 5, 7, 9, 14 ] ],
betRate: [ [ 72, 180, 900 ], [ 45, 90, 600 ], [ 36, 45, 240 ], [ 27, 36, 180 ], [ 18, 30, 120 ], [ 9, 27, 90 ], [ 6, 24, 60 ], [ 3, 15, 45 ], [ 3, 6, 9 ] ]
}, {
id: 6,
reelId: 3,
reel: [ 6, 4 ],
targetId: [ 5 ],
maxLive: 5e3,
reward: 1500,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
dropWeights: [ 1, 1, 2, 5, 6, 7, 8, 2, 9, 10 ],
lines: [ [ 0, 4, 8, 12, 16, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 3, 7, 11, 15, 19, 23 ], [ 0, 5, 10, 15, 18, 21 ], [ 3, 6, 9, 12, 17, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 12, 17, 20 ], [ 2, 7, 10, 15, 18, 23 ], [ 0, 5, 10, 15, 19, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 6, 11, 14, 19, 22 ], [ 2, 5, 8, 13, 16, 21 ], [ 0, 4, 9, 13, 17, 21 ], [ 3, 7, 10, 14, 18, 22 ], [ 1, 4, 8, 13, 18, 23 ], [ 2, 7, 11, 14, 16, 20 ], [ 0, 5, 9, 13, 17, 21 ], [ 3, 6, 10, 14, 18, 22 ], [ 1, 6, 10, 15, 19, 23 ], [ 2, 5, 9, 12, 16, 20 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 14, 19, 23 ], [ 2, 7, 10, 13, 16, 20 ], [ 0, 4, 8, 12, 17, 22 ], [ 3, 7, 11, 15, 18, 21 ], [ 1, 5, 10, 13, 18, 23 ], [ 2, 6, 9, 12, 17, 20 ], [ 0, 4, 9, 12, 17, 21 ], [ 3, 6, 10, 13, 18, 22 ], [ 1, 5, 9, 14, 18, 22 ], [ 2, 6, 10, 13, 16, 20 ], [ 0, 5, 9, 14, 18, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 5, 8, 13, 17, 21 ], [ 2, 7, 11, 15, 19, 23 ] ],
betRate: [ [ 50, 150, 200, 250 ], [ 50, 150, 200, 250 ], [ 40, 80, 150, 200 ], [ 40, 80, 150, 200 ], [ 20, 40, 100, 160 ], [ 20, 40, 80, 120 ], [ 10, 40, 80, 120 ], [ 10, 30, 80, 120 ], [ 10, 20, 60, 100 ], [ 10, 20, 40, 80 ] ]
}, {
id: 7,
reelId: 3,
reel: [ 6, 4 ],
targetId: [ 6 ],
maxLive: 8e3,
reward: 2e3,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
dropWeights: [ 1, 1, 3, 5, 6, 7, 8, 2, 9, 10, 12 ],
lines: [ [ 0, 4, 8, 12, 16, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 3, 7, 11, 15, 19, 23 ], [ 0, 5, 10, 15, 18, 21 ], [ 3, 6, 9, 12, 17, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 12, 17, 20 ], [ 2, 7, 10, 15, 18, 23 ], [ 0, 5, 10, 15, 19, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 6, 11, 14, 19, 22 ], [ 2, 5, 8, 13, 16, 21 ], [ 0, 4, 9, 13, 17, 21 ], [ 3, 7, 10, 14, 18, 22 ], [ 1, 4, 8, 13, 18, 23 ], [ 2, 7, 11, 14, 16, 20 ], [ 0, 5, 9, 13, 17, 21 ], [ 3, 6, 10, 14, 18, 22 ], [ 1, 6, 10, 15, 19, 23 ], [ 2, 5, 9, 12, 16, 20 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 14, 19, 23 ], [ 2, 7, 10, 13, 16, 20 ], [ 0, 4, 8, 12, 17, 22 ], [ 3, 7, 11, 15, 18, 21 ], [ 1, 5, 10, 13, 18, 23 ], [ 2, 6, 9, 12, 17, 20 ], [ 0, 4, 9, 12, 17, 21 ], [ 3, 6, 10, 13, 18, 22 ], [ 1, 5, 9, 14, 18, 22 ], [ 2, 6, 10, 13, 16, 20 ], [ 0, 5, 9, 14, 18, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 5, 8, 13, 17, 21 ], [ 2, 7, 11, 15, 19, 23 ] ],
betRate: [ [ 100, 200, 250, 300 ], [ 50, 150, 200, 250 ], [ 50, 150, 200, 250 ], [ 40, 80, 150, 200 ], [ 40, 80, 150, 200 ], [ 20, 40, 100, 160 ], [ 20, 40, 80, 120 ], [ 10, 40, 80, 120 ], [ 10, 30, 80, 120 ], [ 10, 20, 60, 100 ], [ 10, 20, 40, 80 ] ]
}, {
id: 8,
reelId: 3,
reel: [ 6, 4 ],
targetId: [ 7 ],
maxLive: 5e3,
reward: 1500,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
dropWeights: [ 1, 1, 3, 5, 6, 7, 8, 2, 9, 10, 11, 11 ],
lines: [ [ 0, 4, 8, 12, 16, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 3, 7, 11, 15, 19, 23 ], [ 0, 5, 10, 15, 18, 21 ], [ 3, 6, 9, 12, 17, 20 ], [ 1, 5, 9, 13, 17, 21 ], [ 2, 6, 10, 14, 18, 22 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 12, 17, 20 ], [ 2, 7, 10, 15, 18, 23 ], [ 0, 5, 10, 15, 19, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 6, 11, 14, 19, 22 ], [ 2, 5, 8, 13, 16, 21 ], [ 0, 4, 9, 13, 17, 21 ], [ 3, 7, 10, 14, 18, 22 ], [ 1, 4, 8, 13, 18, 23 ], [ 2, 7, 11, 14, 16, 20 ], [ 0, 5, 9, 13, 17, 21 ], [ 3, 6, 10, 14, 18, 22 ], [ 1, 6, 10, 15, 19, 23 ], [ 2, 5, 9, 12, 16, 20 ], [ 0, 5, 8, 13, 16, 21 ], [ 3, 6, 11, 14, 19, 22 ], [ 1, 4, 9, 14, 19, 23 ], [ 2, 7, 10, 13, 16, 20 ], [ 0, 4, 8, 12, 17, 22 ], [ 3, 7, 11, 15, 18, 21 ], [ 1, 5, 10, 13, 18, 23 ], [ 2, 6, 9, 12, 17, 20 ], [ 0, 4, 9, 12, 17, 21 ], [ 3, 6, 10, 13, 18, 22 ], [ 1, 5, 9, 14, 18, 22 ], [ 2, 6, 10, 13, 16, 20 ], [ 0, 5, 9, 14, 18, 23 ], [ 3, 6, 9, 12, 16, 20 ], [ 1, 5, 8, 13, 17, 21 ], [ 2, 7, 11, 15, 19, 23 ] ],
betRate: [ [ 100, 200, 250, 300 ], [ 100, 200, 250, 300 ], [ 50, 150, 200, 250 ], [ 50, 150, 200, 250 ], [ 40, 80, 150, 200 ], [ 40, 80, 150, 200 ], [ 20, 40, 100, 160 ], [ 20, 40, 80, 120 ], [ 10, 40, 80, 120 ], [ 10, 30, 80, 120 ], [ 10, 20, 60, 100 ], [ 10, 20, 40, 80 ] ]
} ]
};
};
var n;
t.instance = null;
r([ h(cc.Node) ], t.prototype, "node_Main", void 0);
r([ h(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ h(cc.Prefab) ], t.prototype, "prefab_Model", void 0);
r([ h(cc.ScrollView) ], t.prototype, "scrollView_level", void 0);
r([ h(cc.Node) ], t.prototype, "node_Content", void 0);
r([ h(u.default) ], t.prototype, "settingTC", void 0);
r([ h(cc.SpriteFrame) ], t.prototype, "spriteFrames", void 0);
return n = r([ d ], t);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../../../scripts/sdk/SdkManager": "SdkManager",
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr",
"../Model/ChooseLevelModel_A": "ChooseLevelModel_A",
"./SettingChooseTC_A": "SettingChooseTC_A"
} ],
LevelModel_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "125a2+T3fxMUb7nXpCFgYYt", "LevelModel_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../core/newRoll/ZRollControler"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.controler = null;
t.node_LinePrenet = null;
t.node_LineModel = null;
t.sizeX = 154;
t.sizeY = 168;
return t;
}
t.prototype.Init = function() {};
r([ l(a.default) ], t.prototype, "controler", void 0);
r([ l(cc.Node) ], t.prototype, "node_LinePrenet", void 0);
r([ l(cc.Node) ], t.prototype, "node_LineModel", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../../core/newRoll/ZRollControler": "ZRollControler"
} ],
LineItemSize: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c4533x7Qu9F6JXsWxsJ6I8l", "LineItemSize");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.centerNode = null;
return t;
}
t.prototype.setSize = function(e) {
var t = this.centerNode.getContentSize();
this.centerNode.setContentSize(t.width, e);
};
r([ c(cc.Node) ], t.prototype, "centerNode", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
LineItem: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1dca08aqw5JmLKCG7sKv/Gh", "LineItem");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseLineItem "), s = e("./LineItemSize"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function(e) {
this.scale = e.scale;
this.poses = [];
for (var t = 0; t < e.tempPoses.length; t++) this.poses.push(e.tempPoses[t] + t * e.numY);
this.fixedPoses = e.lineMgr.lineFixedPos;
this.head = e.lineMgr.head;
this.center = e.lineMgr.center;
this.end = e.lineMgr.end;
this.instancePrefab();
this.hide();
};
t.prototype.show = function() {
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
t.prototype.instancePrefab = function() {
for (var e, t, n = 0, o = [], i = 0; i < this.poses.length; i++) {
var r = this.poses[i], a = this.fixedPoses[r], c = App.utils.localConvertWorldPointAR(a), l = App.utils.worldConvertLocalPointAR(this.node.parent, c), u = null;
if (0 == i) t = u = cc.instantiate(this.head); else if (i == this.poses.length - 1) {
(u = cc.instantiate(this.end)).parent = this.node;
u.position = l;
var p = cc.instantiate(this.center);
n = cc.Vec2.distance(e, c);
n /= this.scale;
p.getComponent(s.default).setSize(n);
p.parent = this.node;
p.position = l;
o.push(p);
} else {
u = cc.instantiate(this.center);
n = cc.Vec2.distance(e, c);
n /= this.scale;
u.getComponent(s.default).setSize(n);
o.push(u);
}
u.parent = this.node;
u.position = l;
e = c;
}
for (i = 0; i < o.length; i++) {
var d = o[i], h = t.position.sub(d.position).normalize(), f = 180 * Math.atan2(h.y, h.x) / Math.PI;
d.angle = f;
t = d;
}
};
return r([ l ], t);
}(a.default));
n.default = u;
cc._RF.pop();
}, {
"./BaseLineItem ": "BaseLineItem ",
"./LineItemSize": "LineItemSize"
} ],
LineMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9ac79VJNwpOi6k1mB4/P3CJ", "LineMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseLineMgr"), s = e("./LineItem"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lineData = null;
t.head = null;
t.center = null;
t.end = null;
return t;
}
t.prototype.init = function(e, t) {
this.config = e;
var n = cc.find("linePos", this.node);
this.lineFixedPos = n.children;
var o = cc.find("lines", this.node), i = cc.find("lines/line", this.node);
this.lines = [];
i.active = !1;
for (var r = 0; r < e.lineCount; r++) {
var a = cc.instantiate(i);
a.parent = o;
a.position = cc.Vec3.ZERO;
a.zIndex = r;
this.lines.push(a.getComponent(s.default));
}
for (r = 0; r < this.lines.length; r++) this.lines[r].init({
lineMgr: this,
tempPoses: this.lineData.json[r],
numY: this.config.numY,
scale: t
});
};
t.prototype.showRewardLine = function(e) {
this.lines[e].show();
};
t.prototype.showRewardLines = function(e) {
this.lineAnims_None(e);
};
t.prototype.lineAnims_None = function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
this.lines[n].show();
}
};
r([ u(cc.JsonAsset) ], t.prototype, "lineData", void 0);
r([ u(cc.Prefab) ], t.prototype, "head", void 0);
r([ u(cc.Prefab) ], t.prototype, "center", void 0);
r([ u(cc.Prefab) ], t.prototype, "end", void 0);
return r([ l ], t);
}(a.default);
n.default = p;
cc._RF.pop();
}, {
"./BaseLineMgr": "BaseLineMgr",
"./LineItem": "LineItem"
} ],
LoadingGameService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "14289zEH8dOPIQOxhX3C2Cg", "LoadingGameService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_main = null;
t.node_zhezhao = null;
t.sprite_Progress = null;
t.tween_Progress = null;
return t;
}
t.prototype.OpenShow = function() {
var e = this;
this.tween_Progress && this.tween_Progress.stop();
this.sprite_Progress.fillRange = 0;
this.node_main.active = !0;
this.node_zhezhao.active = !0;
this.tween_Progress = cc.tween(this.sprite_Progress).to(2, {
fillRange: 1
}).call(function() {
e.CloseShow();
}).start();
};
t.prototype.CloseShow = function() {
this.node_main.active = !1;
this.node_zhezhao.active = !1;
};
r([ c(cc.Node) ], t.prototype, "node_main", void 0);
r([ c(cc.Node) ], t.prototype, "node_zhezhao", void 0);
r([ c(cc.Sprite) ], t.prototype, "sprite_Progress", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
Loading: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bb305D9F5lGI6TgHkSWfCvt", "Loading");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../config/Config"), i = e("../event/CommonEvent"), r = e("../utils/CmmUtils"), a = e("./ZProgressbar"), s = function() {
function e() {
this.module = null;
this.node = null;
this.precentTxt = null;
this.bar = null;
this.animNode = null;
}
e.prototype.show = function(e, t, n, o) {
var i = this;
this._show(e, t);
this.curTime = r.CmmUtils.msec;
this.widget = this.node.getComponent(cc.Widget);
this.precentTxt = cc.find("precent_html/label", this.node).getComponent(cc.Label);
this.bar = cc.find("precent_html", this.node).getComponent(a.default);
this.animNode = cc.find("precent_html/anim", this.node);
n ? this.animNode.scale = 0 : r.CmmUtils.isNull(o) || (this.animNode.scale = o);
this.tweener && this.tweener.removeSelf();
t > 0 ? this.tweener = cc.tween(this.animNode).to(t, {
scale: e
}, {
onUpdate: function() {
i.bar.progress(i.animNode.scale);
i.precentTxt.string = r.CmmUtils.precentString(i.animNode.scale);
}
}).call(function() {
e >= 1 && i.hide();
}).start() : e >= 1 && this.hide();
return this;
};
e.prototype.progress = function(e) {
if (this.node && this.node.active) {
this.tweener && this.tweener.removeSelf();
if (this.bar) {
this.precentTxt.string = r.CmmUtils.precentString(e);
this.bar.progress(e);
this.animNode.scale = e;
}
}
};
e.prototype.hide = function() {
var e = this, t = 1e3 - (r.CmmUtils.msec - this.curTime);
if (t <= 0) {
if (this.node) {
this.node.active = !1;
dispatch(i.SdkEvent.SdkEvent_hide_loading);
}
} else setTimeout(function() {
if (e.node) {
e.node.active = !1;
dispatch(i.SdkEvent.SdkEvent_hide_loading);
}
}, t);
};
e.prototype._show = function() {
this.node || (this.node = cc.instantiate(App.uiManager.getScenePrefab("Loading")));
this.node.removeFromParent();
App.uiManager.addView(this.node, o.ViewZOrder.Loading);
this.node.position = cc.Vec3.ZERO;
this.node.active = !0;
};
e.module = "【Loading】";
return e;
}();
n.default = s;
cc._RF.pop();
}, {
"../config/Config": "Config",
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils",
"./ZProgressbar": "ZProgressbar"
} ],
LobbyCmd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "04e03YdPLBADrD0Q+gFggMH", "LobbyCmd");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SUB_CMD_LOBBY = void 0;
n.SUB_CMD_LOBBY = {
SERVER_GAME_LOGIN: 6e3,
Laba_UpDate_User: -1,
Laba_CONNENCT_SUCC: 4001,
SERVER_NOTIFY_TABLE_DISBAND: 6666,
Laba_GM_ROOM_INFO_RETURN: 8812,
Laba_SM_ROOM_INFO_RETURN: 8813,
Laba_OutGame: 4002,
Laba_SERVER_SYSTEM_MESSAGE: 9001,
Laba_Server_BroadCast: 1e4,
SERVER_FORCED_OFFLINE: 9003,
SERVER_TABLE_INFO_CHANGE: 8903,
SERVER_NOTIFY_REFLUSH_GAMEHOST: 9005,
SERVER_NOTIFY_GAME_MODE_INFO: 9006,
SERVER_NOTICE_USER_CHANGE: 8904,
CLINET_NOTICE_USER_CHANGE: 8905,
CLINET_NOTICE_KYC_CHANGE: 9008,
CLIENT_HEART_PING: 8888,
CLINET__SEND_CHAT_MSG: 8906,
SERVER_SEND_CHAT_MSG: 8907
};
cc._RF.pop();
}, {} ],
LobbyService: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7d221xQC8lOQZAIMEJyn82g", "LobbyService");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LobbyService = void 0;
var r = e("../../common/config/Config"), a = e("../../common/event/CommonEvent"), s = e("../../common/net/CommonService"), c = e("./HallSender"), l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.priority = r.NetPriority.Lobby;
return t;
}
t.prototype.onOpen = function(t) {
e.prototype.onOpen.call(this, t);
App.senderManager.get(c.HallSender).login();
dispatch(a.CommonEvent.LOBBY_SERVICE_CONNECTED, this);
};
t.prototype.onClose = function(t) {
e.prototype.onClose.call(this, t);
dispatch(a.CommonEvent.LOBBY_SERVICE_CLOSE, this);
};
t.module = "hall";
return t;
}(s.CommonService);
n.LobbyService = l;
cc._RF.pop();
}, {
"../../common/config/Config": "Config",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonService": "CommonService",
"./HallSender": "HallSender"
} ],
LocalStorage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0a90d5yS1ZFT7BByVolyMn/", "LocalStorage");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LocalStorage = void 0;
var o = e("../../plugin/BitEncrypt"), i = function() {
function e() {
this.module = null;
this.key = "VuxiAKihQ0VR9WRe";
}
e.prototype.encrypt = function(e) {
return o.BitEncrypt.encode(JSON.stringify(e), this.key);
};
e.prototype.decryption = function(e) {
return o.BitEncrypt.decode(e, this.key);
};
e.prototype.getItem = function(e, t) {
void 0 === t && (t = null);
var n = this.storage.getItem(e);
if (!n) return t;
try {
var o = this.decryption(n), i = JSON.parse(o);
return i.type ? i.value : n;
} catch (e) {
return n;
}
};
e.prototype.setItem = function(e, t) {
var n = typeof t;
if ("number" == n || "string" == n || "boolean" == n || "object" == n) {
var o = {
type: n,
value: t
};
try {
var i = this.encrypt(o);
this.storage.setItem(e, i);
} catch (e) {}
}
};
e.prototype.removeItem = function(e) {
this.storage.removeItem(e);
};
Object.defineProperty(e.prototype, "storage", {
get: function() {
return cc.sys.localStorage;
},
enumerable: !1,
configurable: !0
});
e.module = "【本地仓库】";
return e;
}();
n.LocalStorage = i;
cc._RF.pop();
}, {
"../../plugin/BitEncrypt": "BitEncrypt"
} ],
Logger: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b388dQOpwNPF4PVWAlmnZIy", "Logger");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LoggerImpl = void 0;
var o = e("../../defines/Enums"), i = function() {
function e() {
this.logger = console;
this._level = o.LogLevel.ALL;
this.module = null;
this.isResident = !0;
this.update();
}
Object.defineProperty(e.prototype, "level", {
get: function() {
return this._level;
},
set: function(e) {
this._level = e;
this.update();
},
enumerable: !1,
configurable: !0
});
e.prototype.attach = function(e) {
if (!this.isValid(e)) {
this.level = this.level | e;
this.update();
}
};
e.prototype.detach = function(e) {
if (this.isValid(e)) {
this.level = this.level ^ e;
this.update();
}
};
e.prototype.isValid = function(e) {
return !!(this.level & e);
};
e.prototype.update = function() {
this.isValid(o.LogLevel.DUMP) ? cc.sys.isBrowser ? this.logger.dump = console.debug : this.logger.dump = this.dump.bind(this) : this.logger.dump = function() {};
this.isValid(o.LogLevel.ERROR) ? this.logger.e = console.error : this.logger.e = function() {};
this.isValid(o.LogLevel.DEBUG) ? this.logger.d = console.log : this.logger.d = function() {};
this.isValid(o.LogLevel.WARN) ? this.logger.w = console.warn : this.logger.w = function() {};
};
e.prototype.dump = function() {
if (this.isValid(o.LogLevel.DUMP)) {
var e = arguments[2];
null == e && (e = 5);
Number.isNaN(e) && (e = 10);
e > 10 && (e = 10);
if (e <= 0) {
e = 1;
return;
}
var t = arguments[0];
t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());
var n = this._dump(t, arguments[1], e, 0);
this.logger.d(n);
}
};
e.prototype.convertName = function(e, t) {
void 0 === t && (t = "=");
return e.length > 0 ? e + " " + t + " " : " ";
};
e.prototype.toBoolean = function(e, t) {
return "" + this.convertName(e) + t + ";";
};
e.prototype.toNumber = function(e, t) {
return "" + this.convertName(e) + t;
};
e.prototype.toStringForDump = function(e, t) {
return this.convertName(e) + '"' + t + '"';
};
e.prototype.toOther = function(e, t) {
return this.convertName(e) + typeof t;
};
e.prototype.toUnknown = function(e) {
return (e.length > 0 ? e + " " : " ") + "is unknown type!";
};
Object.defineProperty(e.prototype, "indentFormat", {
get: function() {
return "    ";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "halfIndentFormat", {
get: function() {
return "   ";
},
enumerable: !1,
configurable: !0
});
e.prototype.toArray = function(e, t, n, o) {
var i, r = "", a = "";
i = t.length;
for (var s = this.convertName(e, ""), c = 0; c < o; ++c) a += " ";
r = s + "[";
for (var l = 0; l < i; ++l) r += "\n" + (0 === a.length ? "" : "" + a) + this.indentFormat + "[" + l + "]:" + this._dump(t[l], "", n, o + 1);
return r + "\n" + (0 === a.length ? "" : "" + a + this.halfIndentFormat) + "]";
};
e.prototype.toObject = function(e, t, n, o) {
var i = "";
if (null === t) return "null";
var r = "";
if (t instanceof Object) {
for (var a = 0; a < o; ++a) r += " ";
i = "{";
for (var s in t) i += "\n" + (0 === r.length ? "" : "" + r) + this.indentFormat + s + ":" + this._dump(t[s], "", n, o + 1);
return i + "\n" + (0 === r.length ? "" : "" + r + this.halfIndentFormat) + "}";
}
return "Unknown Object Type!";
};
e.prototype._dump = function(e, t, n, o) {
void 0 === t && (t = "unkown");
if (o > n) return "...";
t = "undefined" == typeof t ? "" : t;
var i = "";
switch (typeof e) {
case "boolean":
i += this.toBoolean("", e);
break;

case "number":
i += this.toNumber("", e);
break;

case "string":
i += this.toStringForDump("", e);
break;

case "object":
Array.isArray(e) ? i += this.toArray(t, e, n, o) : i += this.toObject(t, e, n, o);
break;

case "function":
case "undefined":
i += this.toOther(t, e);
break;

default:
i += this.toUnknown(t);
}
return i;
};
e.module = "【日志管理器】";
return e;
}();
n.LoggerImpl = i;
cc._RF.pop();
}, {
"../../defines/Enums": "Enums"
} ],
LoginEntry: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a2dbbmTWHZKvZx7pxD3dsGe", "LoginEntry");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./view/LoginView"), s = e("../../scripts/framework/defines/Macros"), c = e("../../scripts/framework/core/entry/Entry"), l = e("../../scripts/framework/defines/Decorators");
(function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isMain = !0;
return t;
}
t.prototype.addNetHandler = function() {};
t.prototype.removeNetHandler = function() {};
t.prototype.loadResources = function(e) {
e();
};
t.prototype.initData = function() {};
t.prototype.onEnter = function(t) {
e.prototype.onEnter.call(this, t);
Log.d("--------------onEnterLogin--------------");
};
t.prototype.onEnterGameView = function(t) {
e.prototype.onEnterGameView.call(this, t);
};
t.prototype.onUnloadBundle = function() {
this.removeNetHandler();
this.unloadResources();
};
t = r([ l.registerEntry("LoginEntry", s.Macro.BUNDLE_RESOURCES, a.default) ], t);
})(c.Entry);
cc._RF.pop();
}, {
"../../scripts/framework/core/entry/Entry": "Entry",
"../../scripts/framework/defines/Decorators": "Decorators",
"../../scripts/framework/defines/Macros": "Macros",
"./view/LoginView": "LoginView"
} ],
LoginViewNodes: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aebcf/zcGVPg4Oc9CtA6CiW", "LoginViewNodes");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.headIcon = null;
t.register = null;
t.loginInfo = null;
t.player_name = null;
t.vip_value = null;
t.copyBtn = null;
t.stayFill = null;
t.rechargeFill = null;
t.betFill = null;
return t;
}
r([ c(cc.Sprite) ], t.prototype, "headIcon", void 0);
r([ c(cc.Node) ], t.prototype, "register", void 0);
r([ c(cc.Node) ], t.prototype, "loginInfo", void 0);
r([ c(cc.Label) ], t.prototype, "player_name", void 0);
r([ c(cc.Label) ], t.prototype, "vip_value", void 0);
r([ c(cc.Node) ], t.prototype, "copyBtn", void 0);
r([ c(cc.Sprite) ], t.prototype, "stayFill", void 0);
r([ c(cc.Sprite) ], t.prototype, "rechargeFill", void 0);
r([ c(cc.Sprite) ], t.prototype, "betFill", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
LoginView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "70f72G0TFhBn7yKDYJo+teY", "LoginView");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../common/config/ConstString"), s = e("../../common/config/GlobalVar"), c = e("../../common/config/HostInfo"), l = e("../../common/config/User"), u = e("../../common/event/CommonEvent"), p = e("../../common/net/CommonSender"), d = e("../../common/net/HttpSender"), h = e("../../common/utils/UIUtils"), f = e("../../framework/core/ui/GameView"), _ = e("../../framework/defines/Enums"), g = e("../../framework/defines/Macros"), y = e("../../sdk/AppInfo"), m = e("../../sdk/SdkManager"), v = e("../net/LobbyService"), E = e("./HotUpdate"), S = e("./LoginViewNodes"), b = cc._decorator, R = b.ccclass, C = (b.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.gameRoot = null;
t.root = null;
t.signBtn = null;
t.bounsBtn = null;
t.moreBtn = null;
t.moreMaskBtn = null;
t.logoNode = null;
t.logoBtn = null;
t.ntaBtn = null;
t.activityBtn = null;
t.noticeBtn = null;
t.settingBtn = null;
t.Button_Refer = null;
t.label_ShareTarValue = null;
t.Button_Events = null;
t.Button_Task = null;
t.Btn_Match = null;
t.lock_Match = null;
t.Btn_Bigsale = null;
t.Btn_Bigsale_hd = null;
t.withdrawBtn = null;
t.crashBtn = null;
t.loginBtn = null;
t.copyBtn = null;
t.infoBtn = null;
t.vipBtn = null;
t.moneyLabel = null;
t.refreshBtn = null;
t.coinBtn = null;
t.kefuBtn = null;
t.playerName = null;
t.label_Match_VipTip = null;
t.label_Match_TipContent = null;
t.bonus_label = null;
t.lock_Match_Tip = null;
t.lgvNodes = null;
t.merchantAddCash = null;
t.merchantAddWithdraw = null;
t.merchantLogo = null;
t.hotUpdate = null;
t.isWaitForSecToClick = !1;
return t;
}
t.getPrefabUrl = function() {
return "@/LoginView";
};
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
if (App.SingleGame) s.GlobalVar.gotoWebGame(); else {
cc.find("bg", this.node).active = !0;
dispatch(u.SimpleEvent.Html5_view_loading, !0);
this.SetShowRoot_AfterCheckVerResult();
}
};
t.prototype.SetShowRoot_AfterCheckVerResult = function() {
var e = this, t = "prefabs/view/web/root";
App.OfflineMode && (t = "prefabs/view/web/offlineRoot");
h.default.getPrefab(g.Macro.BUNDLE_RESOURCES, t).then(function(t) {
var n = cc.instantiate(t);
e.node.addChild(n);
e.initNode();
y.default.isBrowser || (e.hotUpdate.mainUpdateNode.active = !0);
e.hotUpdate.checkVersion(e.enterGame.bind(e));
dispatch(u.SimpleEvent.Html5_view_loading, !1);
});
};
t.prototype.initNode = function() {
this.root = cc.find("root", this.node);
this.gameRoot = cc.find("root", this.root);
this.hotUpdate = this.root.getComponent(E.default);
this.hotUpdate.init();
this.addLocalEvents();
};
t.prototype.initOfflineNode = function() {
this.root = cc.find("root", this.node);
this.gameRoot = cc.find("root", this.root);
this.hotUpdate = this.root.getComponent(E.default);
this.hotUpdate.init();
this.ntaBtn = cc.find("root/top_layer/top_html/logo", this.root);
this.logoNode = cc.find("root/top_layer/top_html/logo", this.root);
this.merchantAddCash = cc.find("root/top_layer/top_html/merchantAddCash", this.root);
this.merchantAddWithdraw = cc.find("root/top_layer/top_html/merchantAddWithdraw", this.root);
this.moreBtn = cc.find("root/top_layer/top_html/others/more", this.root);
this.moreMaskBtn = cc.find("root/moreMaskBtn", this.root);
this.noticeBtn = cc.find("moreItem/noticeBtn", this.moreMaskBtn);
this.settingBtn = cc.find("moreItem/settingBtn", this.moreMaskBtn);
this.Button_Refer = cc.find("root/bottom_layer/btns/Button_Refer", this.root);
this.label_ShareTarValue = cc.find("root/bottom_layer/btns/Button_Refer/freecash/Layout/Label2", this.root).getComponent(cc.Label);
this.Button_Task = cc.find("root/bottom_layer/btns/Btn_Task", this.root);
this.withdrawBtn = cc.find("root/bottom_layer/btns/withdrawBtn", this.root);
this.crashBtn = cc.find("root/bottom_layer/btns/crashBtn", this.root);
this.loginBtn = cc.find("root/top_layer/top_html/personInfo/register/loginBtn", this.root);
this.infoBtn = cc.find("root/top_layer/top_html/personInfo/common/infoBtn", this.root);
this.copyBtn = cc.find("root/top_layer/top_html/personInfo/loginInfo/copyBtn", this.root);
this.merchantLogo = cc.find("root/top_layer/top_html/Merchant", this.root);
this.playerName = cc.find("root/top_layer/top_html/personInfo/loginInfo/playerName", this.root).getComponent(cc.Label);
this.moneyLabel = cc.find("root/top_layer/top_html/total_coins/MoneyLabel", this.root).getComponent(cc.Label);
this.refreshBtn = cc.find("root/top_layer/top_html/total_coins/Background/refreshBtn", this.root);
this.coinBtn = cc.find("root/top_layer/top_html/total_coins/icon/coinBtn", this.root);
this.kefuBtn = cc.find("root/kefuBtn", this.root);
this.lgvNodes = this.root.getComponent(S.default);
this.addLocalEvents();
};
t.prototype.addLocalEvents = function() {
var e = this;
this.onN(this.moreBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.moreMaskBtn.active = !0;
});
this.onN(this.moreMaskBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.moreMaskBtn.active = !1;
});
this.onN(this.Button_Refer, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
c.HostInfo.haveAgent || App.tips.show("coming soon!");
});
this.onN(this.Button_Events, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.Button_Task, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.Btn_Match && this.onN(this.Btn_Match, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.showMatch();
});
this.Btn_Bigsale && this.onN(this.Btn_Bigsale, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.withdrawBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.crashBtn, _.NodeEvent.click, function() {
App.globalAudio.playAddCash();
});
this.onN(this.loginBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.signBtn && this.onN(this.signBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.bounsBtn && this.onN(this.bounsBtn, _.NodeEvent.click, function() {});
this.activityBtn && this.onN(this.activityBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.moreMaskBtn.active = !1;
});
this.onN(this.noticeBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.moreMaskBtn.active = !1;
});
this.onN(this.settingBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.moreMaskBtn.active = !1;
});
this.onN(this.infoBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.vipBtn && this.onN(this.vipBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.copyBtn, _.NodeEvent.click, function() {
m.default.setClipboardContent(d.default.uid.toString());
});
this.onN(this.refreshBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
if (l.default.self.isBindPhone) {
e.moneyLabel.string = "update...";
e.scheduleOnce(function() {
l.default.self.updateMoneyInfo();
}, .5);
}
});
this.onN(this.coinBtn, _.NodeEvent.click, function() {
App.globalAudio.playAddCash();
});
this.logoBtn && this.onN(this.logoBtn, _.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
});
this.onN(this.ntaBtn, _.NodeEvent.click, function() {
y.default.showNtaUrl();
});
this.onN(this.kefuBtn, _.NodeEvent.click, function() {
y.default.showCustomService();
});
};
t.prototype.SetBtnState_TaskAndHotSale = function(e) {
Log.e("isTask = " + e);
this.Btn_Bigsale.active = !e;
this.Button_Task.active = e;
};
t.prototype.onBackGroundUpdate = function() {
l.default.self.isBindPhone && l.default.self.updatePlayerInfo();
};
t.prototype.onPlayMusic = function() {
this.audioHelper.playMusic("all_audio/music_bg", this.bundle, !0);
};
t.prototype.openWebView = function(e, t) {
if (y.default.isAndroid) {
App.globalAudio.stopMusic();
if (y.default.isSupportBackHome()) {
t || m.default.setOrientation_p();
m.default.openWebView(e);
} else m.default.openUrl(e);
} else m.default.openUrl(e);
};
t.prototype.clearLoginToken = function() {
App.serviceManager.get(v.LobbyService, !0).close(!0);
this.moneyLabel.string = l.default.self.moneyString;
this.bonus_label && (this.bonus_label.string = l.default.self.bonusBString);
this.infoBtn && (this.infoBtn.active = !1);
this.vipBtn && (this.vipBtn.active = !1);
this.merchantAddCash && (this.merchantAddCash.active = !1);
this.merchantAddWithdraw && (this.merchantAddWithdraw.active = !1);
this.logoNode && (this.logoNode.active = !0);
this.merchantLogo && (this.merchantLogo.active = !1);
this.lgvNodes.register.active = !0;
this.lgvNodes.loginInfo.active = !1;
App.storage.removeItem(a.ConstString.userId);
d.default.uid = "0";
s.GlobalVar.isLogin = !1;
this.hotUpdate.checkVersion(this.enterGame.bind(this));
};
t.prototype.enterGame = function() {
this.label_ShareTarValue && (this.label_ShareTarValue.string = s.GlobalVar.shareCoin);
this.audioHelper.playMusic("all_audio/music_bg", this.bundle, !0);
if (l.default.self.isBindPhone) {
l.default.self.checkPlayer();
l.default.self.updateServerRedPoint();
l.default.self.updateFreeMoneyInfo();
dispatch(u.CommonEvent.Show_Hall);
}
};
t.prototype.refreshPlayerInfo = function() {
this.merchantLogo && (this.merchantLogo.active = l.default.self.isMerchantPlayer);
this.lgvNodes.register.active = !1;
this.lgvNodes.loginInfo.active = !0;
var e = l.default.self.data;
this.infoBtn.active = !0;
this.lgvNodes.vip_value && (this.vipBtn.active = !0);
this.logoNode && (this.logoNode.active = !l.default.self.isMerchantPlayer);
h.default.loadHead(this.lgvNodes.headIcon, e);
this.lgvNodes.player_name.string = "ID:" + d.default.uid;
this.lgvNodes.vip_value && (this.lgvNodes.vip_value.string = l.default.self.data.viplevel + "");
this.lgvNodes.stayFill && (this.lgvNodes.stayFill.fillRange = 0 == l.default.self.data.stayexp ? 0 : l.default.self.data.stayexp / l.default.self.data.stayexpm);
this.lgvNodes.rechargeFill && (this.lgvNodes.rechargeFill.fillRange = 0 == l.default.self.data.payexp ? 0 : l.default.self.data.payexp / l.default.self.data.payexpm);
this.lgvNodes.betFill && (this.lgvNodes.betFill.fillRange = 0 == l.default.self.data.payexp ? 0 : l.default.self.data.betexp / l.default.self.data.betexpm);
this.moneyLabel.string = l.default.self.moneyString;
this.bonus_label && (this.bonus_label.string = l.default.self.bonusBString);
this.label_Match_VipTip && (this.label_Match_VipTip.string = "VIP" + s.GlobalVar.rankvip);
this.lock_Match && (this.lock_Match.active = 0 == l.default.self.data.rank);
this.playerName && (this.playerName.string = l.default.self.data.name);
this.merchantAddCash && (this.merchantAddCash.active = l.default.self.isMerchantPlayer);
this.merchantAddWithdraw && (this.merchantAddWithdraw.active = l.default.self.isMerchantPlayer);
this.Btn_Bigsale_hd && (l.default.self.data.dayfree ? this.Btn_Bigsale_hd.active = 0 == l.default.self.data.dayfreeTime : this.Btn_Bigsale_hd.active = !1);
this.hotUpdate.updatePlayerMode();
};
t.prototype.showMatch = function() {};
t.prototype.onShowPanel = function() {
if (!(s.GlobalVar.noticeData && s.GlobalVar.noticeData.length > 0)) {
if (App.OfflineMode) {
l.default.self.updateServerRedPoint();
this.autoShowOffLineTask();
} else {
l.default.self.updateServerRedPoint();
var e = App.storage.getItem(a.ConstString.showVipUpdate), t = App.storage.getItem(a.ConstString.showShareAfter);
if (this.autoShowShare(t)) ; else if (this.showActivity()) ; else if (1 == t && s.GlobalVar.fristShowShare) s.GlobalVar.fristShowShare = !1; else if (e) {
var n = JSON.parse(e);
if (n && 10002 == n.activity_id) {
l.default.self.updatePlayerInfo();
return;
}
}
}
h.default.showChecatNode();
}
};
t.prototype.autoShowShare = function(e) {
if (!l.default.self.isBindPhone) return !1;
if (e >= 2 && s.GlobalVar.opendShowShare) {
s.GlobalVar.opendShowShare = !1;
return !0;
}
return !1;
};
t.prototype.autoShowOffLineTask = function() {
if (!l.default.self.isBindPhone) return !1;
if (!l.default.self.isNormalPlayer) return !1;
if (s.GlobalVar.fristShowOfflineTask) {
s.GlobalVar.fristShowOfflineTask = !1;
return !0;
}
};
t.prototype.refreshShareTarValue = function() {
var e = this;
Log.e("refreshShareTarValue");
App.senderManager.get(p.default).Send_ShareGiftPDDInit(function(t) {
Log.e(t);
e.label_ShareTarValue.string = t.data.target;
});
};
t.prototype.showActivity = function() {
if (!l.default.self.isBindPhone) return !1;
if (!s.GlobalVar.fristShowPoster) return !1;
if (s.GlobalVar.poster) {
var e = s.GlobalVar.poster.list;
if (e && e.length > 0) {
e.pop();
return !0;
}
s.GlobalVar.fristShowPoster = !1;
return !1;
}
return !1;
};
return r([ R ], t);
}(f.default));
n.default = C;
cc._RF.pop();
}, {
"../../common/config/ConstString": "ConstString",
"../../common/config/GlobalVar": "GlobalVar",
"../../common/config/HostInfo": "HostInfo",
"../../common/config/User": "User",
"../../common/event/CommonEvent": "CommonEvent",
"../../common/net/CommonSender": "CommonSender",
"../../common/net/HttpSender": "HttpSender",
"../../common/utils/UIUtils": "UIUtils",
"../../framework/core/ui/GameView": "GameView",
"../../framework/defines/Enums": "Enums",
"../../framework/defines/Macros": "Macros",
"../../sdk/AppInfo": "AppInfo",
"../../sdk/SdkManager": "SdkManager",
"../net/LobbyService": "LobbyService",
"./HotUpdate": "HotUpdate",
"./LoginViewNodes": "LoginViewNodes"
} ],
Login: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1bc65AnotxDTr4x34sIE3ah", "Login");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/utils/RandomUtil"), s = e("../../../scripts/framework/componects/EventComponent"), c = e("../../../scripts/framework/core/ui/UIManager"), l = e("../../../scripts/framework/defines/Enums"), u = cc._decorator, p = u.ccclass, d = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.play = null;
t.progress = null;
t.bar = null;
return t;
}
t.prototype.addEvents = function() {
var e = this;
this.onN(this.play, l.NodeEvent.click, function() {
e.loading();
});
c.UIManager.newGameTest();
};
t.prototype.loading = function() {
var e = this;
this.play.active = !1;
this.progress.active = !0;
this.bar.fillRange = 0;
cc.tween(this.bar).to(a.RandomUtil.randomFRange(1, 2), {
fillRange: 1
}).call(function() {
e.progress.active = !1;
cc.director.loadScene("slots");
}).start();
};
r([ d(cc.Node) ], t.prototype, "play", void 0);
r([ d(cc.Node) ], t.prototype, "progress", void 0);
r([ d(cc.Sprite) ], t.prototype, "bar", void 0);
return r([ p ], t);
}(s.default);
n.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/core/ui/UIManager": "UIManager",
"../../../scripts/framework/defines/Enums": "Enums"
} ],
Macros: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4031ctCbPFGk4Bhg4c+Z6Ra", "Macros");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Macro = void 0;
var o = e("../plugin/ByteArray");
(function(e) {
e.USING_LITTLE_ENDIAN = o.Endian.BIG_ENDIAN;
e.BUNDLE_RESOURCES = "resources";
e.BUNDLE_REMOTE = "__Remote__Caches__";
e.ENABLE_CHANGE_LANGUAGE = !0;
e.USING_LAN_KEY = "i18n.";
e.ADAPT_SCREEN = "Event_ADAPT_SCREEN";
e.UNKNOWN = "UNKNOWN";
e.ON_CUSTOM_CLOSE = "ON_CUSTOM_CLOSE";
e.MAIN_PACK_BUNDLE_NAME = "main";
e.BUNDLE_Agame = "Agame";
e.BUNDLE_rummy = "rummy";
e.BUNDLE_dragontiger = "dragontiger";
e.BUNDLE_teenpatti = "teenpatti";
e.BUNDLE_teenpatti_Joker = "teenpattiJoker";
e.BUNDLE_teenpatti_AK47 = "teenpattiAK47";
e.BUNDLE_teenpatti_Private = "teenpattiPrivate";
e.BUNDLE_anubis = "anubis";
e.BUNDLE_baccarat3patti = "baccarat3patti";
e.BUNDLE_baccaratab = "baccaratab";
e.BUNDLE_buffalo = "buffalo";
e.BUNDLE_motoracing = "motoracing";
e.BUNDLE_sixdice = "sixdice";
e.BUNDLE_updown7 = "updown7";
e.BUNDLE_StarSlots = "starslots";
e.BUNDLE_TeenPattiSlots = "teenpattislots";
e.BUNDLE_SingleRoulette = "singlelp";
e.BUNDLE_mines = "mines";
e.BUNDLE_Roulette = "rouletteslots";
e.BUNDLE_liondance = "liondance";
e.BUNDLE_carsdrifting = "carsdrifting";
e.BUNDLE_crash = "crash";
e.BUNDLE_minesball = "minesball";
e.BUNDLE_sicbo = "sicbo";
e.BUNDLE_classicfruitslot = "classicfruitslot";
e.BUNDLE_hotchilli = "hotchilli";
e.BUNDLE_LuckyJoker = "luckyjoker";
e.BUNDLE_Halloween = "halloween";
e.BUNDLE_doubledragon = "doubledragon";
e.BUNDLE_ACTIVITY_card = "activitycard";
e.BUNDLE_Loca = "loca";
e.BUNDLE_baccarat = "baccarat";
e.BUNDLE_fortunetiger = "fortunetiger";
e.BUNDLE_invite = "invite";
e.BUNDLE_domino = "domino";
e.BUNDLE_piggybankSlots = "piggybank";
e.BUNDLE_fastfielder = "fastfielder";
e.BUNDLE_Spinstrike = "spinstrike";
e.BUNDLE_SuperWingo = "superwingo";
e.BUNDLE_Lottery7 = "lottery7";
e.BUNDLE_ganeshagold = "ganeshagold";
e.BUNDLE_diwalilights = "diwalilights";
})(n.Macro || (n.Macro = {}));
cc._RF.pop();
}, {
"../plugin/ByteArray": "ByteArray"
} ],
MainController: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3a1b1yNnbZHxYN0g/CgqIEb", "MainController");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./scripts/framework/componects/EventComponent"), s = cc._decorator, c = s.ccclass, l = (s.property, 
s.menu), u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.interval = 0;
t.hideTime = 0;
return t;
}
t.prototype.onLoad = function() {
this.hideEventNode = cc.find("hideEvent", this.node);
e.prototype.onLoad.call(this);
App.onLoad(this.node);
this.onG(cc.game.EVENT_HIDE, this.onEnterBackground);
this.onG(cc.game.EVENT_SHOW, this.onEnterForgeground);
};
t.prototype.update = function() {
App.update(this.node);
};
t.prototype.onDestroy = function() {
App.onDestroy(this.node);
e.prototype.onDestroy.call(this);
};
t.prototype.onEnterBackground = function() {
App.onEnterBackground();
};
t.prototype.onEnterForgeground = function() {
App.onEnterForgeground();
};
return r([ c, l("Quick公共组件/MainController") ], t);
}(a.default);
n.default = u;
cc._RF.pop();
}, {
"./scripts/framework/componects/EventComponent": "EventComponent"
} ],
MainUpdateHandlerImpl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5f62cCswQxE+ouDoVyx8cKC", "MainUpdateHandlerImpl");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MainUpdateHandlerImpl = void 0;
var o = e("../event/CommonEvent"), i = e("../utils/CmmUtils"), r = function() {
function e() {
this.module = null;
this.isResident = !0;
}
e.prototype.onNewVersionFund = function(e) {
e.doUpdate();
};
e.prototype.onUpdateFailed = function() {
var e = i.CmmUtils.string_format_args("downloadFailed:{0}", "main");
App.alert.show({
text: e,
confirmCb: function() {
cc.game.restart();
}
});
};
e.prototype.onPreVersionFailed = function(e) {
this.onUpdateFailed(e);
};
e.prototype.onShowUpdating = function() {};
e.prototype.onNeedUpdateMain = function() {};
e.prototype.onOther = function() {};
e.prototype.onDownloading = function(e, t) {
dispatch(o.HotEvent.DownMainProgress, {
bundle: e.bundle,
info: t
});
};
e.prototype.onAreadyUpToData = function(e) {
App.tips.show("already RemoteVersion" + e.name);
};
e.prototype.onStarCheckUpdate = function() {};
e.prototype.onStartLoadBundle = function() {};
e.prototype.onLoadBundleError = function(e, t) {
App.tips.show("loadFailed:" + e.name);
Log.dump(t, "onLoadBundleError");
cc.game.restart();
};
e.prototype.onLoadBundleComplete = function(e) {
App.entryManager.onLoadBundleComplete(e);
};
e.prototype.onLoadBundle = function() {};
e.prototype.onDownloadComplete = function(e) {
dispatch(o.HotEvent.DownMainComplete, e.bundle);
};
e.prototype.onNeedRestartApp = function(e, t) {
t(!0, !1);
dispatch(o.HotEvent.DownMainComplete, e.bundle);
};
e.module = "【主包热更新】";
return e;
}();
n.MainUpdateHandlerImpl = r;
cc._RF.pop();
}, {
"../event/CommonEvent": "CommonEvent",
"../utils/CmmUtils": "CmmUtils"
} ],
Message: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6b052vqScBHXY8FSCY2FxJ9", "Message");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Message = n.Codec = n.IMessage = void 0;
var r = function() {};
n.IMessage = r;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return t;
}(r);
n.Codec = a;
var s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return t;
}(r);
n.Message = s;
cc._RF.pop();
}, {} ],
Net: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7defc/7Iv1NMaarDPEKXxqf", "Net");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Net = void 0;
(function(e) {
(function(e) {
e[e.Unknown = 0] = "Unknown";
e[e.Json = 1] = "Json";
e[e.Proto = 2] = "Proto";
e[e.BinaryStream = 3] = "BinaryStream";
})(e.ServiceType || (e.ServiceType = {}));
})(n.Net || (n.Net = {}));
cc._RF.pop();
}, {} ],
NextLvTipTCService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "4b832rS8ltPGY4cRF83UTIL", "NextLvTipTCService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../AudioMgr"), s = e("../GameMgr"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.clickType = 0;
t.isCanClick = !1;
t.callback_Over = null;
t.tween_main = null;
t.tween_Zhezhao = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e) {
var t = this;
this.ClearTween();
this.isCanClick = !1;
this.callback_Over = e;
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Zhezhao.opacity = 0;
this.node_Main.scale = 0;
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 200
}).start();
this.tween_main = cc.tween(this.node_Main).delay(.3).to(.35, {
scale: 1
}, cc.easeBackOut()).call(function() {
t.isCanClick = !0;
}).start();
};
t.prototype.ButtonClick_PlayNext = function() {
if (this.isCanClick) {
this.isCanClick = !1;
a.default.instance.playEffect(s.AudioName.Click);
this.clickType = 1;
this.CloseShow();
}
};
t.prototype.ButtonClick_Close = function() {
if (this.isCanClick) {
this.isCanClick = !1;
a.default.instance.playEffect(s.AudioName.Click);
this.clickType = 0;
this.CloseShow();
}
};
t.prototype.CloseShow = function() {
var e = this;
this.ClearTween();
this.tween_main = cc.tween(this.node_Main).to(.3, {
scale: 0
}, cc.easeBackIn()).start();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).delay(.2).to(.3, {
opacity: 0
}).delay(.1).call(function() {
e.callback_Over && e.callback_Over(e.clickType);
e.node_Main.active = !1;
e.node_Zhezhao.active = !1;
}).start();
};
t.prototype.ClearTween = function() {
this.tween_Zhezhao && this.tween_Zhezhao.stop();
this.tween_main && this.tween_main.stop();
};
r([ u(cc.Node) ], t.prototype, "node_Main", void 0);
r([ u(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
return r([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
PayLineItem_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7308k6JiVPGIGULOa3rxVf", "PayLineItem_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./PayLineModel_A"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.layout_ = null;
t.payLineModel = [];
return t;
}
t.prototype.Init = function(e, t, n, o, i, r, a) {
this.layout_.spacingX = e;
for (var s = 0; s < this.payLineModel.length; s++) {
var c = this.payLineModel[s];
if (s < a.length) {
c.node.active = !0;
c.Init(o[s], i, r[s], t, n, a[s]);
} else c.node.active = !1;
}
};
r([ l(cc.Layout) ], t.prototype, "layout_", void 0);
r([ l(a.default) ], t.prototype, "payLineModel", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./PayLineModel_A": "PayLineModel_A"
} ],
PayLineModel_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d8b2eljvrlJW4OprZuaiISs", "PayLineModel_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label_Id = null;
t.node_GeziPre = null;
t.node_GeziLayout = null;
t.normalSize = 58;
return t;
}
t.prototype.Init = function(e, t, n, o, i, r) {
this.label_Id.string = e + "";
this.node_GeziLayout.height = 20 * (i[1] - 3) + this.normalSize;
this.node_GeziLayout.destroyAllChildren();
for (var a = 0; a < o; a++) {
var s = cc.instantiate(this.node_GeziPre);
s.parent = this.node_GeziLayout;
r.indexOf(a) >= 0 ? s.color = n : s.color = t;
}
};
r([ c(cc.Label) ], t.prototype, "label_Id", void 0);
r([ c(cc.Node) ], t.prototype, "node_GeziPre", void 0);
r([ c(cc.Node) ], t.prototype, "node_GeziLayout", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
PayLinesPanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "20ed6sPKsxOV4j9X5zJHjU2", "PayLinesPanel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/event/CommonEvent"), s = e("./AudioMgr"), c = e("./Model/PayLineItem_A"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Zhezhao = null;
t.node_main = null;
t.node_CloseBtn = null;
t.node_Grid = null;
t.node_Item = null;
t.label_LineCountTip = null;
t.color_Di = null;
t.color_Lines = [];
t.config_jianju = [ 66, 36, 10 ];
t.tween_Move = null;
return t;
}
t.prototype.InitData = function(e) {
this.node_Grid.destroyAllChildren();
var t = e.lines.length, n = this.config_jianju[0], o = e.reel[0] * e.reel[1];
this.label_LineCountTip.string = "There are " + t + " fixed paylines.";
if (3 == t) {
n = this.config_jianju[0];
var i = [ 1, 2, 3 ], r = [ this.color_Lines[0], this.color_Lines[1], this.color_Lines[2] ];
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
(s = h.getComponent(c.default)).Init(n, o, e.reel, i, this.color_Di, r, e.lines);
} else if (7 == t) {
n = this.config_jianju[1];
for (var a = 0; a < 2; a++) {
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
var s = h.getComponent(c.default);
if (0 == a) {
i = [ 1, 2, 3 ], r = [ this.color_Lines[0], this.color_Lines[1], this.color_Lines[2] ];
var l = [ e.lines[0], e.lines[1], e.lines[2] ];
s.Init(n, o, e.reel, i, this.color_Di, r, l);
} else {
i = [ 4, 5, 6, 7 ], r = [ this.color_Lines[3], this.color_Lines[4], this.color_Lines[5], this.color_Lines[6] ], 
l = [ e.lines[3], e.lines[4], e.lines[5], e.lines[6] ];
s.Init(n, o, e.reel, i, this.color_Di, r, l);
}
}
} else if (9 == t) {
n = this.config_jianju[0];
var u = 0;
for (a = 0; a < 3; a++) {
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
s = h.getComponent(c.default), i = [], r = [], l = [];
for (var p = 0; p < 3; p++) {
i.push(u + 1);
r.push(this.color_Lines[u]);
l.push(e.lines[u]);
u++;
}
s.Init(n, o, e.reel, i, this.color_Di, r, l);
}
} else {
n = this.config_jianju[2];
var d = t / 5;
for (u = 0, a = 0; a < d; a++) {
var h;
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
for (s = h.getComponent(c.default), i = [], r = [], l = [], p = 0; p < 5; p++) {
i.push(u + 1);
r.push(this.color_Lines[u % this.color_Lines.length]);
l.push(e.lines[u]);
u++;
}
s.Init(n, o, e.reel, i, this.color_Di, r, l);
}
}
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.node_main.height = this.node.height;
this.node_CloseBtn.active = !1;
this.node_Zhezhao.active = !0;
this.node_main.active = !0;
this.node_main.position = cc.v3(0, -this.node_main.height, 0);
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, 0, 0)
}).delay(.2).call(function() {
e.node_CloseBtn.active = !0;
}).start();
};
t.prototype.CloseShow = function() {
this.node_Zhezhao.active = !1;
this.node_main.active = !1;
};
t.prototype.ButtonClick_Close = function() {
var e = this;
s.default.instance.playEffect("click");
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, -this.node_main.height, 0)
}).call(function() {
e.CloseShow();
}).start();
};
r([ p(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ p(cc.Node) ], t.prototype, "node_main", void 0);
r([ p(cc.Node) ], t.prototype, "node_CloseBtn", void 0);
r([ p(cc.Node) ], t.prototype, "node_Grid", void 0);
r([ p(cc.Node) ], t.prototype, "node_Item", void 0);
r([ p(cc.Label) ], t.prototype, "label_LineCountTip", void 0);
r([ p(cc.Color) ], t.prototype, "color_Di", void 0);
r([ p(cc.Color) ], t.prototype, "color_Lines", void 0);
return r([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"./AudioMgr": "AudioMgr",
"./Model/PayLineItem_A": "PayLineItem_A"
} ],
PayTabelPanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e416fJrPw5IarwlJYlcLyMl", "PayTabelPanel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/event/CommonEvent"), s = e("./AudioMgr"), c = e("./GameMgr"), l = e("./Model/PayTableItem_A"), u = cc._decorator, p = u.ccclass, d = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Zhezhao = null;
t.node_main = null;
t.node_CloseBtn = null;
t.node_Parent = null;
t.node_PayTabelItem = null;
t.tween_Move = null;
return t;
}
t.prototype.start = function() {};
t.prototype.InitData = function(e, t) {
this.node_Parent.destroyAllChildren();
var n = Math.floor(e.ele.length / 2), o = !1;
if (e.ele.length % 2 == 1) {
n += 1;
o = !0;
}
for (var i = 0, r = 0; r < n; r++) {
var a = cc.instantiate(this.node_PayTabelItem);
a.parent = this.node_Parent;
var s = a.getComponent(l.default), c = [], u = [];
if (0 == r) if (o) {
c.push(t[e.ele[i] - 1]);
u.push(e.betRate[i]);
i++;
} else {
c.push(t[e.ele[i] - 1]);
u.push(e.betRate[i]);
i++;
c.push(t[e.ele[i] - 1]);
u.push(e.betRate[i]);
i++;
} else {
c.push(t[e.ele[i] - 1]);
u.push(e.betRate[i]);
i++;
c.push(t[e.ele[i] - 1]);
u.push(e.betRate[i]);
i++;
}
s.SetData(c, u);
}
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.node_main.height = this.node.height;
this.node_CloseBtn.active = !1;
this.node_Zhezhao.active = !0;
this.node_main.active = !0;
this.node_main.position = cc.v3(0, -this.node_main.height, 0);
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, 0, 0)
}).delay(.2).call(function() {
e.node_CloseBtn.active = !0;
}).start();
};
t.prototype.CloseShow = function() {
this.node_Zhezhao.active = !1;
this.node_main.active = !1;
};
t.prototype.ButtonClick_Close = function() {
var e = this;
s.default.instance.playEffect(c.AudioName.Click);
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, -this.node_main.height, 0)
}).call(function() {
e.CloseShow();
}).start();
};
r([ d(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ d(cc.Node) ], t.prototype, "node_main", void 0);
r([ d(cc.Node) ], t.prototype, "node_CloseBtn", void 0);
r([ d(cc.Node) ], t.prototype, "node_Parent", void 0);
r([ d(cc.Node) ], t.prototype, "node_PayTabelItem", void 0);
return r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr",
"./Model/PayTableItem_A": "PayTableItem_A"
} ],
PayTableItem_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c6365uTDu5PtKKYvnHcCLto", "PayTableItem_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./PayTableModel_A"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.payTabelModels = [];
return t;
}
t.prototype.SetData = function(e, t) {
for (var n = 0; n < this.payTabelModels.length; n++) {
var o = this.payTabelModels[n];
if (n < e.length) {
o.node.active = !0;
o.SetData(e[n], t[n]);
} else o.node.active = !1;
}
};
r([ l(a.default) ], t.prototype, "payTabelModels", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"./PayTableModel_A": "PayTableModel_A"
} ],
PayTableModel_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d2be94Qtw1J74kvz/VkJ3Zd", "PayTableModel_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Muls = [];
t.label_Muls = [];
t.sprite_Icon = null;
return t;
}
t.prototype.SetData = function(e, t) {
this.sprite_Icon.spriteFrame = e;
for (var n = 0; n < this.node_Muls.length; n++) {
this.node_Muls[n];
if (n < t.length) {
this.node_Muls[n].active = !0;
this.label_Muls[n].string = t[n] + "";
} else this.node_Muls[n].active = !1;
}
};
r([ c(cc.Node) ], t.prototype, "node_Muls", void 0);
r([ c(cc.Label) ], t.prototype, "label_Muls", void 0);
r([ c(cc.Sprite) ], t.prototype, "sprite_Icon", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
Process: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "58400Ck+xhNDLE/SZfLVDGQ", "Process");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Process = void 0;
var o = e("../message/DefaultCodec"), i = function() {
function e() {
this.Codec = o.DefaultCodec;
this._listeners = {};
this._masseageQueue = new Array();
this._isDoingMessage = !1;
this.isPause = !1;
this.serviceType = null;
}
e.prototype.pauseMessageQueue = function() {
this.isPause = !0;
};
e.prototype.resumeMessageQueue = function() {
this.isPause = !1;
};
e.prototype.handMessage = function() {
var e, t = this;
if (!this.isPause && !this._isDoingMessage && 0 != this._masseageQueue.length) {
var n = this._masseageQueue.shift();
if (null != n && 0 != n.length) {
this._isDoingMessage = !0;
for (var o = 0, i = 0; i < n.length; i++) {
var r = n[i];
if (r.func instanceof Function) try {
var a = r.func.call(r.target, r.data);
"number" == typeof a && (o = Math.max(o, a));
} catch (e) {
Log.e(e);
}
}
0 == o ? this._isDoingMessage = !1 : null === (e = App.uiManager.mainController) || void 0 === e || e.scheduleOnce(function() {
t._isDoingMessage = !1;
}, o);
}
}
};
e.prototype.onMessage = function(e) {
var t = String(e.cmd);
this._listeners[t] ? this._listeners[t].length <= 0 || this.addMessageQueue(t, e, !0) : Log.w("no find listener data main cmd : " + e.cmd);
};
e.prototype.reset = function() {
this._isDoingMessage = !1;
this._listeners = {};
this._masseageQueue = [];
this.resumeMessageQueue();
};
e.prototype.close = function() {
this._masseageQueue = [];
this._isDoingMessage = !1;
};
e.prototype.addListener = function(e, t, n, o, i) {
var r = e;
if (this._listeners[r]) {
for (var a = !1, s = 0; s < this._listeners[r].length; s++) if (this._listeners[r][s].target === i) {
a = !0;
break;
}
if (a) return;
this._listeners[r].push({
cmd: e,
func: n,
type: t,
isQueue: o,
target: i
});
} else {
this._listeners[r] = [];
this._listeners[r].push({
cmd: e,
func: n,
type: t,
isQueue: o,
target: i
});
}
};
e.prototype.removeListeners = function(e, t) {
if (t) {
var n = this;
Object.keys(this._listeners).forEach(function(o) {
for (var i = n._listeners[o], r = i.length; r--; ) i[r].target == e && i[r].cmd == t && i.splice(r, 1);
0 == i.length && delete n._listeners[o];
});
for (var o = this._masseageQueue.length; o--; ) {
for (var i = (a = this._masseageQueue[o]).length; i--; ) a[i].target == e && a[o].cmd == t && a.splice(i, 1);
0 == a.length && this._masseageQueue.splice(o, 1);
}
} else {
var r = this;
Object.keys(this._listeners).forEach(function(t) {
for (var n = r._listeners[t], o = n.length; o--; ) n[o].target == e && n.splice(o, 1);
0 == n.length && delete r._listeners[t];
});
for (o = this._masseageQueue.length; o--; ) {
var a;
for (i = (a = this._masseageQueue[o]).length; i--; ) a[i].target == e && a.splice(i, 1);
0 == a.length && this._masseageQueue.splice(o, 1);
}
}
};
e.prototype.decode = function() {
return null;
};
e.prototype.addMessageQueue = function(e, t, n) {
if (!(this._listeners[e].length <= 0)) {
for (var o = this._listeners[e], i = [], r = 0; r < o.length; r++) {
var a = t;
if (n) {
(a = this.decode(o[r], t)).mainCmd = t.mainCmd;
a.subCmd = t.subCmd;
}
if (o[r].isQueue) i.push(this.copyListenerData(o[r], a)); else try {
o[r].func && o[r].func.call(o[r].target, a);
} catch (e) {
Log.e(e);
}
}
i.length > 0 && this._masseageQueue.push(i);
}
};
e.prototype.copyListenerData = function(e, t) {
return {
type: e.type,
func: e.func,
isQueue: e.isQueue,
data: t,
target: e.target,
cmd: e.cmd
};
};
return e;
}();
n.Process = i;
cc._RF.pop();
}, {
"../message/DefaultCodec": "DefaultCodec"
} ],
ProtoMessage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "97022QB+WdBYKJUlkAHn+/q", "ProtoMessage");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ProtoMessageHeartbeat = n.ProtoCodec = n.ProtoMessage = void 0;
var r = e("../Net"), a = e("./Message"), s = function(e) {
i(t, e);
function t(t) {
var n = e.call(this) || this;
n.buffer = null;
n.type = null;
n.data = null;
n.type = t;
return n;
}
t.prototype.encode = function() {
this.buffer = this.type.encode(this.data).finish();
return !!this.buffer;
};
t.prototype.decode = function(e) {
if (e) {
this.buffer = e;
this.data = this.type.decode(this.buffer);
return !0;
}
return !1;
};
return t;
}(a.Message);
n.ProtoMessage = s;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return t;
}(a.Codec);
n.ProtoCodec = c;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.type = r.Net.ServiceType.Proto;
return t;
}(a.Message);
n.ProtoMessageHeartbeat = l;
cc._RF.pop();
}, {
"../Net": "Net",
"./Message": "Message"
} ],
RandomUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6a648Q2y55Ilpl1isDmViBm", "RandomUtil");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.RandomUtil = void 0;
var o = function() {
function e() {}
e.randomString = function(e) {
for (var t = "", n = 0; n < e; n++) t += this._keys[Math.floor((this._keys.length - 1) * Math.random())];
return t;
};
e.randomNumber = function(e) {
return Math.floor(Math.random() * e);
};
e.randomRange = function(t, n) {
var o = e.randomNumber(n - t) + t;
o < t && (o = t);
return o;
};
e.randomFRange = function(e, t) {
var n = Math.random() * (t - e) + e;
n < e && (n = e);
return n;
};
e._keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
return e;
}();
n.RandomUtil = o;
cc._RF.pop();
}, {} ],
ReconnectHandler: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "332fdJoOHVG1YBiCqB4JIAB", "ReconnectHandler");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReconnectHandler = void 0;
var r = e("../../framework/core/net/service/Handler"), a = e("../../framework/defines/Macros"), s = e("../../sdk/SdkManager"), c = e("../config/Config"), l = function(e) {
i(t, e);
function t(t) {
var n = e.call(this) || this;
n._service = null;
n._enabled = !1;
n._connectCount = 0;
n._maxConnectCount = 3;
n.isConnecting = !1;
n.connectID = 1;
n.connectTimeOutID = 2;
n._service = t;
return n;
}
Object.defineProperty(t.prototype, "module", {
get: function() {
return this.service.module;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "service", {
get: function() {
return this._service;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "data", {
get: function() {
return App.stageData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "enabled", {
get: function() {
return this._enabled;
},
set: function(e) {
this._enabled = e;
},
enumerable: !1,
configurable: !0
});
t.prototype.reconnect = function() {
if (!this.isInvalid) {
this.service.close();
this.stop();
this.delayConnect();
}
};
t.prototype.stop = function() {
this.stopActions();
this.isConnecting = !1;
this._connectCount = 0;
};
t.prototype.delayConnect = function() {
var e = this;
if (!this.isInvalid) if (this.isConnecting) Log.w(this.service.module + " 正在连接中..."); else {
var t = .3;
if (this._connectCount > 0) {
(t = (this._connectCount + 1) * t) > 3 && (t = 3);
Log.d("" + this.service.module + t + "秒后尝试重连");
}
this.stopAction(this.connectID);
this.delayCall(this.connectID, t, function() {
e.connect();
});
}
};
t.prototype.connect = function() {
var e = this;
if (!this.isInvalid) if (this.data.isLoginStage()) Log.w("重连处于登录界面，停止重连"); else {
this._connectCount++;
if (this._connectCount > this._maxConnectCount) this.showReconnectDialog(); else {
this.service.connect();
this.stopAction(this.connectTimeOutID);
this.delayCall(this.connectTimeOutID, c.Config.RECONNECT_TIME_OUT, function() {
e.connectTimeOut();
});
}
}
};
t.prototype.connectTimeOut = function() {
if (!this.isInvalid) {
this.stopAction(this.connectID);
this.isConnecting = !1;
this.service.close();
this.showReconnectDialog();
}
};
t.prototype.showReconnectDialog = function() {
var e = this;
if (!this.isInvalid) {
Log.d(this.service.module + " 断开");
this.stopAction(this.connectTimeOutID);
"hall" == this.service.module || App.alert.show({
tag: c.Config.RECONNECT_ALERT_TAG,
isRepeat: !1,
text: "Network connection failed, please check the network and try again!",
confirmCb: function() {
e.stop();
App.entryManager.enterBundle(a.Macro.BUNDLE_RESOURCES);
s.default.setOrientation_l();
}
});
}
};
t.prototype.onOpen = function() {
if (!this.isInvalid) {
this._connectCount = 0;
this.isConnecting = !1;
this.stop();
Log.d(this.service.module + "服务器重连成功");
}
};
t.prototype.onClose = function() {
if (!this.isInvalid) {
this.isConnecting = !1;
this.delayConnect();
}
};
t.prototype.onError = function() {
if (!this.isInvalid) {
this.service.close();
this.isConnecting = !1;
this.delayConnect();
}
};
Object.defineProperty(t.prototype, "isInvalid", {
get: function() {
return !(this.service && this.enabled && !this.data.isLoginStage());
},
enumerable: !1,
configurable: !0
});
t.prototype.stopActions = function() {
this.stopAction(this.connectID);
this.stopAction(this.connectTimeOutID);
};
t.prototype.stopAction = function(e) {
cc.Tween.stopAllByTag(e);
};
t.prototype.delayCall = function(e, t, n) {
cc.tween(this).tag(e).delay(t).call(n).start();
};
t.prototype.onDestroy = function() {
this.stopActions();
e.prototype.onDestroy.call(this);
};
return t;
}(r.Handler);
n.ReconnectHandler = l;
cc._RF.pop();
}, {
"../../framework/core/net/service/Handler": "Handler",
"../../framework/defines/Macros": "Macros",
"../../sdk/SdkManager": "SdkManager",
"../config/Config": "Config"
} ],
ResourceLoader: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c2732/K5T1ACJsHnXRUvfbR", "ResourceLoader");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("./Resource"), i = function() {
function e() {
this._resources = new Map();
this._loadedCount = 0;
this._loadedResource = new Map();
this._isLoading = !1;
this._tag = null;
}
Object.defineProperty(e.prototype, "tag", {
get: function() {
return this._tag;
},
set: function(e) {
this._tag = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onLoadComplete", {
get: function() {
return this._onLoadComplete;
},
set: function(e) {
this._onLoadComplete = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onLoadProgress", {
get: function() {
return this._onLoadProgress;
},
set: function(e) {
this._onLoadProgress = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "getLoadResources", {
get: function() {
return this._getLoadResource;
},
set: function(e) {
this._getLoadResource = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadResources = function() {
var e = this;
if (this.getLoadResources) {
var t = this.getLoadResources();
if (t) if (t.length <= 0) this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE); else if (this._isLoading) this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.LOADING); else if (this._resources.size > 0 && this.isLoadComplete()) {
this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
} else {
this._isLoading = !0;
t.forEach(function(t) {
t.url ? e._resources.set(t.url, t) : t.dir ? e._resources.set(t.dir, t) : t.preloadView && e._resources.set(t.preloadView.getPrefabUrl(), t);
});
this._loadedCount = 0;
this._resources.forEach(function(t) {
t.preloadView ? App.uiManager.preload(t.preloadView, t.bundle).then(function(n) {
var i = new o.Resource.CacheData();
i.isLoaded = !0;
i.data = n;
t.preloadView && (i.info.url = t.preloadView.getPrefabUrl());
i.info.bundle = t.bundle;
e._onLoadResourceComplete(i);
}) : t.dir ? App.asset.loadDir(t.bundle, t.dir, t.type, null, e._onLoadResourceComplete.bind(e)) : App.asset.load(t.bundle, t.url, t.type, null, e._onLoadResourceComplete.bind(e));
});
} else this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
} else this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.NO_FOUND_LOAD_RESOURCE);
};
e.prototype.unLoadResources = function() {
this._unLoadResources();
};
e.prototype._unLoadResources = function() {
var e = this;
if (this._isLoading || this._resources.size <= 0) this._isLoading && Log.d("resources is loading , waiting for unload!!!"); else {
this._resources.size > 0 && this._resources.forEach(function(t) {
if (t.url) {
if (e._loadedResource.has(t.url)) {
(n = e._loadedResource.get(t.url)) && App.asset.releaseAsset(n);
e._loadedResource.delete(t.url);
}
} else if (t.dir && e._loadedResource.has(t.dir)) {
var n;
(n = e._loadedResource.get(t.dir)) && App.asset.releaseAsset(n);
e._loadedResource.delete(t.dir);
}
});
this._isLoading = !1;
this._loadedCount = 0;
this._resources.clear();
}
};
e.prototype._onLoadResourceComplete = function(e) {
this._loadedCount++;
if (this._onLoadProgress) {
this._loadedCount > this._resources.size && (this._loadedCount = this._resources.size);
this._onLoadProgress(this._loadedCount, this._resources.size, e);
}
if (e && (Array.isArray(e.data) || e.data instanceof cc.Asset)) {
var t = new o.Resource.Info();
t.url = e.info.url;
t.type = e.info.type;
t.data = e.data;
t.bundle = e.info.bundle;
App.asset.retainAsset(t);
this._loadedResource.set(t.url, t);
}
this.checkLoadResourceComplete();
};
e.prototype.checkLoadResourceComplete = function() {
if (this.isLoadComplete()) {
this._isLoading = !1;
this.onLoadComplete && this.onLoadComplete(o.Resource.LoaderError.SUCCESS);
this.onLoadResourceComplete();
}
};
e.prototype.onLoadResourceComplete = function() {};
e.prototype.isLoadComplete = function() {
return this._loadedCount >= this._resources.size;
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {
"./Resource": "Resource"
} ],
Resource: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c41edAZb7FKMK3lJVdZR6iI", "Resource");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Resource = void 0;
(function(e) {
var t, n;
(function(e) {
e[e.LOADING = 0] = "LOADING";
e[e.NO_FOUND_LOAD_RESOURCE = 1] = "NO_FOUND_LOAD_RESOURCE";
e[e.SUCCESS = 2] = "SUCCESS";
})(e.LoaderError || (e.LoaderError = {}));
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.WAITTING_FOR_RELEASE = 1] = "WAITTING_FOR_RELEASE";
})(t = e.CacheStatus || (e.CacheStatus = {}));
(function(e) {
e[e.Local = 0] = "Local";
e[e.Remote = 1] = "Remote";
})(n = e.Type || (e.Type = {}));
var o = function() {
this.url = "";
this.type = null;
this.data = null;
this.retain = !1;
this.bundle = null;
this.resourceType = n.Local;
this.stamp = null;
};
e.Info = o;
var i = function() {
function e() {
this.isLoaded = !1;
this.data = null;
this.info = new o();
this.status = t.NONE;
this.getCb = [];
this.finishCb = [];
}
e.prototype.doGet = function(e) {
for (var t = 0; t < this.getCb.length; t++) this.getCb[t] && this.getCb[t](e);
this.getCb = [];
};
e.prototype.doFinish = function(e) {
for (var t = 0; t < this.finishCb.length; t++) this.finishCb[t] && this.finishCb[t](e);
this.finishCb = [];
};
Object.defineProperty(e.prototype, "isInvalid", {
get: function() {
return this.isLoaded && this.data && !cc.isValid(this.data);
},
enumerable: !1,
configurable: !0
});
return e;
}();
e.CacheData = i;
})(n.Resource || (n.Resource = {}));
cc._RF.pop();
}, {} ],
RewardFinishGameService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "973e5i1SCZJ+rWDogmRhJwy", "RewardFinishGameService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/utils/CmmUtils"), s = e("../../../../scripts/sdk/SdkManager"), c = e("../AudioMgr"), l = e("../GameMgr"), u = cc._decorator, p = u.ccclass, d = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.label_Reward = null;
t.ani_Guang = null;
t.node_Btn_Claim = null;
t.node_Btn_RewardX2 = null;
t.node_Mask_RewardX2 = null;
t.curShowGold = 0;
t.curTarReward = 0;
t.callback_Over = null;
t.audioID_bigwin = -1;
t.tween_Main = null;
t.tween_Gold = null;
t.tween_ClaimBtn = null;
t.tween_RewardX2Btn = null;
t.tween_X2 = null;
t.tween_DelayShowBtn = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e, t) {
var n = this;
c.default.instance.PauseMusic();
this.audioID_bigwin = c.default.instance.playEffect(l.AudioName.levelReward);
this.ClearTween();
this.callback_Over = t;
this.curTarReward = e;
this.goldInfo = {
gold: 0
};
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Main.scale = 0;
this.node_Zhezhao.opacity = 0;
this.node_Mask_RewardX2.active = !1;
this.ani_Guang && this.ani_Guang.stop();
this.ShowReward();
this.tween_Main = cc.tween(this.node_Main).delay(.6).to(.35, {
scale: 1
}, cc.easeBackOut()).call(function() {
n.ani_Guang && n.ani_Guang.play();
}).start();
this.tween_Gold = cc.tween(this.goldInfo).delay(1).to(2, {
gold: e
}, {
onUpdate: function() {
n.curShowGold = n.goldInfo.gold;
n.ShowGold();
}
}).call(function() {
n.curShowGold = n.curTarReward;
n.ShowGold();
}).delay(.5).call(function() {}).start();
};
t.prototype.SetRewardX2 = function(e) {
var t = this;
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
if (e) {
this.node_Mask_RewardX2.active = !0;
this.goldInfo = {
gold: this.curTarReward
};
var n = 2 * this.curTarReward;
this.tween_Gold = cc.tween(this.goldInfo).delay(.4).to(2, {
gold: n
}, {
onUpdate: function() {
t.curShowGold = t.goldInfo.gold;
t.ShowGold();
}
}).call(function() {
t.curShowGold = n;
t.curTarReward = n;
t.ShowGold();
}).start();
} else {
this.node_Mask_RewardX2.active = !1;
App.tips.show("Failed to claim. The advertisement viewing time is insufficient.");
}
};
t.prototype.ButtonClick_Claim = function() {
var e = this;
c.default.instance.playEffect(l.AudioName.Click);
c.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.node_Mask_RewardX2.active = !0;
if (this.callback_Over) {
this.callback_Over(this.curShowGold);
this.callback_Over = null;
}
this.scheduleOnce(function() {
e.CloseShow();
}, 1.8);
};
t.prototype.ButtonClick_RewardX2 = function() {
var e = this;
c.default.instance.playEffect(l.AudioName.Click);
c.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.node_Mask_RewardX2.active = !0;
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
this.delayToShowBtn = {
value: 0
};
this.tween_DelayShowBtn = cc.tween(this.delayToShowBtn).to(.5, {
value: 10
}).call(function() {
e.node_Mask_RewardX2.active = !1;
}).start();
s.default.showRewardedAd(l.VideoType_A.LevelReward);
};
t.prototype.CloseShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
};
t.prototype.ShowClaimBtn = function() {
this.node_Btn_Claim.active = !0;
this.tween_ClaimBtn = cc.tween(this.node_Btn_Claim).to(.3, {
scale: 1
}, cc.easeBackOut()).start();
};
t.prototype.ShowRewardX2Btn = function() {};
t.prototype.ShowGold = function() {
this.label_Reward.string = a.CmmUtils.NumberToHallString(this.curShowGold, !0);
};
t.prototype.ShowReward = function() {
this.label_Reward.string = a.CmmUtils.NumberToHallString(this.curTarReward, !0);
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Gold && this.tween_Gold.stop();
this.tween_ClaimBtn && this.tween_ClaimBtn.stop();
this.tween_RewardX2Btn && this.tween_RewardX2Btn.stop();
this.tween_X2 && this.tween_X2.stop();
};
r([ d(cc.Node) ], t.prototype, "node_Main", void 0);
r([ d(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ d(cc.Label) ], t.prototype, "label_Reward", void 0);
r([ d(cc.Animation) ], t.prototype, "ani_Guang", void 0);
r([ d(cc.Node) ], t.prototype, "node_Btn_Claim", void 0);
r([ d(cc.Node) ], t.prototype, "node_Btn_RewardX2", void 0);
r([ d(cc.Node) ], t.prototype, "node_Mask_RewardX2", void 0);
return r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../../scripts/sdk/SdkManager": "SdkManager",
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
Reward_YouWin_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a70e1Mi76RFbavGaEKRdbAA", "Reward_YouWin_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/utils/CmmUtils"), s = e("../../../../scripts/sdk/SdkManager"), c = e("../AudioMgr"), l = e("../GameMgr"), u = cc._decorator, p = u.ccclass, d = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.label_Score = null;
t.ani_Guang = null;
t.node_Btn_Skip = null;
t.curShowGold = 0;
t.curTarReward = 0;
t.callback_Over = null;
t.audioID_bigwin = -1;
t.tween_Main = null;
t.tween_Zhezhao = null;
t.tween_Gold = null;
t.tween_ClaimBtn = null;
t.tween_RewardX2Btn = null;
t.tween_DelayShowBtn = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e, t, n) {
var o = this;
c.default.instance.PauseMusic();
this.audioID_bigwin = c.default.instance.playEffect(l.AudioName.Bigwin);
this.ClearTween();
this.callback_Over = n;
this.curTarReward = e;
this.goldInfo = {
gold: 0
};
this.label_Score.string = "0";
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Main.scale = 0;
this.node_Zhezhao.opacity = 0;
this.node_Btn_Skip.active = !1;
this.ani_Guang && this.ani_Guang.stop();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 150
}).start();
this.tween_Main = cc.tween(this.node_Main).delay(.3).to(.3, {
scale: 1
}, cc.easeBackOut()).call(function() {
o.ani_Guang && o.ani_Guang.play();
o.node_Btn_Skip.active = !0;
}).start();
var i = 4;
t > 2 && (i = 6);
this.tween_Gold = cc.tween(this.goldInfo).delay(.6).to(i, {
gold: e
}, {
onUpdate: function() {
o.curShowGold = o.goldInfo.gold;
o.ShowGold();
}
}).call(function() {
o.curShowGold = o.curTarReward;
o.ShowGold();
c.default.instance.StopEffect_audioID(o.audioID_bigwin);
c.default.instance.playEffect(l.AudioName.BigwinEnd);
o.node_Btn_Skip.active = !1;
}).delay(.5).call(function() {}).start();
};
t.prototype.SetRewardX2 = function(e) {
var t = this;
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
if (e) {
this.goldInfo = {
gold: this.curTarReward
};
var n = 2 * this.curTarReward;
this.tween_Gold = cc.tween(this.goldInfo).delay(.4).to(2, {
gold: n
}, {
onUpdate: function() {
t.curShowGold = t.goldInfo.gold;
t.ShowGold();
}
}).call(function() {
t.curShowGold = n;
t.curTarReward = n;
t.ShowGold();
}).delay(3).call(function() {
t.PlayHideAni();
}).start();
} else App.tips.show("Failed to claim. The advertisement viewing time is insufficient.");
};
t.prototype.ButtonClick_Skip = function() {
this.ClearTween();
this.node_Btn_Skip.active = !1;
c.default.instance.StopEffect_audioID(this.audioID_bigwin);
c.default.instance.playEffect(l.AudioName.BigwinEnd);
this.curShowGold = this.curTarReward;
this.ShowGold();
this.ShowRewardX2Btn();
this.ShowClaimBtn();
};
t.prototype.ButtonClick_Claim = function() {
c.default.instance.playEffect(l.AudioName.Click);
c.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.PlayHideAni();
};
t.prototype.ButtonClick_RewardX2 = function() {
c.default.instance.playEffect(l.AudioName.Click);
c.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
this.delayToShowBtn = {
value: 0
};
this.tween_DelayShowBtn = cc.tween(this.delayToShowBtn).to(.5, {
value: 10
}).call(function() {}).start();
s.default.showRewardedAd(l.VideoType_A.Bigwin);
};
t.prototype.CloseShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
};
t.prototype.PlayHideAni = function() {
var e = this;
this.ClearTween();
this.tween_Main = cc.tween(this.node_Main).to(.35, {
scale: 0
}, cc.easeBackIn()).start();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).delay(.2).to(.3, {
opacity: 0
}).delay(.2).call(function() {
c.default.instance.ResumeMusic();
if (e.callback_Over) {
e.callback_Over(e.curShowGold);
e.callback_Over = null;
}
e.CloseShow();
}).start();
};
t.prototype.ShowClaimBtn = function() {};
t.prototype.ShowRewardX2Btn = function() {};
t.prototype.ShowGold = function() {
this.label_Score.string = a.CmmUtils.NumberToHallString(this.curShowGold, !0);
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Zhezhao && this.tween_Zhezhao.stop();
this.tween_Gold && this.tween_Gold.stop();
this.tween_ClaimBtn && this.tween_ClaimBtn.stop();
this.tween_RewardX2Btn && this.tween_RewardX2Btn.stop();
};
r([ d(cc.Node) ], t.prototype, "node_Main", void 0);
r([ d(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ d(cc.Label) ], t.prototype, "label_Score", void 0);
r([ d(cc.Animation) ], t.prototype, "ani_Guang", void 0);
r([ d(cc.Node) ], t.prototype, "node_Btn_Skip", void 0);
return r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../../scripts/sdk/SdkManager": "SdkManager",
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
RollElement: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "886b8ppVGJMGaUU4NnsNa6n", "RollElement");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../scripts/common/enum/GlobalEnum"), s = e("./ElementState/ElementState"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.defautl = a.GlobalEnum.ElementState.Normal;
return t;
}
t.prototype.init = function(e) {
this.rollConfig = e;
this.elementIns = [];
for (var t = this.node.children, n = 0; n < t.length; n++) this.elementIns.push(t[n].getComponent(s.default));
for (n = 0; n < this.elementIns.length; n++) this.elementIns[n].init(e);
};
t.prototype.setDefault = function() {
this.setState(this.defautl);
};
t.prototype.setState = function(e) {
this.curElement ? this.curElement.show(e) : console.error("没有钙元素" + e);
};
t.prototype.setRes = function(e) {
for (var t = 0; t < this.elementIns.length; t++) this.elementIns[t].hide();
this.curElement = this.elementIns[e];
this.rollConfig.turnType ? this.curElement.show(a.GlobalEnum.ElementState.BlurTrun) : this.curElement.show(a.GlobalEnum.ElementState.Turn);
};
r([ u({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], t.prototype, "defautl", void 0);
return r([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"./ElementState/ElementState": "ElementState"
} ],
RulePanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c54fd1ga11KxKTz83xjE9b4", "RulePanel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/event/CommonEvent"), s = e("./AudioMgr"), c = e("./GameMgr"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Zhezhao = null;
t.node_main = null;
t.node_CloseBtn = null;
t.label_Layout = null;
t.label_PayLines = null;
t.label_Symbols = null;
t.label_BetType = null;
t.tween_Move = null;
return t;
}
t.prototype.start = function() {};
t.prototype.InitData = function(e) {
this.label_Layout.string = "Layout: " + e.reel[0] + " reels x " + e.reel[1] + " rows";
this.label_PayLines.string = "Paylines: Fixed " + e.lines.length + " lines";
this.label_Symbols.string = "Symbols: " + e.ele.length + " regular symbols (no wild or scatter)";
this.label_BetType.string = "Bet Type: TotalBet = Line Bet x " + e.lines.length;
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.node_main.height = this.node.height;
this.node_CloseBtn.active = !1;
this.node_Zhezhao.active = !0;
this.node_main.active = !0;
this.node_main.position = cc.v3(0, -this.node_main.height, 0);
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, 0, 0)
}).delay(.2).call(function() {
e.node_CloseBtn.active = !0;
}).start();
};
t.prototype.CloseShow = function() {
this.node_Zhezhao.active = !1;
this.node_main.active = !1;
};
t.prototype.ButtonClick_Close = function() {
var e = this;
s.default.instance.playEffect(c.AudioName.Click);
dispatch(a.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, -this.node_main.height, 0)
}).call(function() {
e.CloseShow();
}).start();
};
r([ p(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ p(cc.Node) ], t.prototype, "node_main", void 0);
r([ p(cc.Node) ], t.prototype, "node_CloseBtn", void 0);
r([ p(cc.Label) ], t.prototype, "label_Layout", void 0);
r([ p(cc.Label) ], t.prototype, "label_PayLines", void 0);
r([ p(cc.Label) ], t.prototype, "label_Symbols", void 0);
r([ p(cc.Label) ], t.prototype, "label_BetType", void 0);
return r([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr"
} ],
SdkCallBack: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "81db5JZuylKSK0fDmJz1vOZ", "SdkCallBack");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../common/config/ConstString"), i = e("../common/config/User"), r = e("../common/event/CommonEvent"), a = e("../common/net/CommonSender"), s = e("./SdkManager"), c = function() {
function e() {}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.SDK_LoginCallback = function(e) {
Log.d("Android To JS --\x3e SDK_LoginCallback:" + e);
try {
var t = JSON.parse(e);
Log.d("googleLoginData.state = " + t.state);
Log.d("googleLoginData.userId = " + t.userId);
Log.d("googleLoginData.token = " + t.token);
if (0 == t.state) Log.d("googleSignIn 登录成功 "); else if (1 == t.state) Log.d("googleSignIn 取消登录 "); else if (2 == t.state) {
Log.d("googleSignIn 登录异常");
return;
}
} catch (e) {}
};
e.prototype.GetGoogleIDOver_Callback = function(e) {
Log.d("Android To JS --\x3e Android Get GoogleID = " + e);
};
e.prototype.SavepicCallBack = function(e) {
Log.d("Android To JS --\x3e Android Save Pic State = " + e);
JSON.parse(e).code ? Log.d("Android To JS --\x3e Android Save Pic State is Success") : Log.d("Android To JS --\x3e Android Save Pic State is False");
};
e.prototype.ChoosePhoto_Callback = function(e) {
Log.d("Android To JS --\x3e Android ChoosePhoto :" + e);
};
e.prototype.SaveInviteCode = function(e) {
Log.d("Android To JS --\x3e Adjust inviteCode :" + e);
};
e.prototype.AgentOpenPaymentCallBack = function(e) {
Log.d("Android To JS --\x3e AgentSDK调过来的充值，商品ID = " + e);
App.senderManager.get(a.default).Send_payMoney(Number.parseInt(e), 0);
};
e.prototype.UnreadMessageForAIHelp = function(e) {
Log.d("Android To JS --\x3e AIHelp Count = " + e);
};
e.prototype.BatteryDataCallback = function(e) {
Log.d("Android To JS --\x3e BatteryData = " + e);
};
e.prototype.InstallReferrerCallBack = function(e) {
Log.d("Android To JS --\x3e InstallReferrerCallBack---------------\x3e" + e);
};
e.prototype.CallUnityupdateApplicationCallBack = function(e) {
Log.d("Android To JS --\x3e updateApplicationResult---------------\x3e" + e);
};
e.prototype.UploadAppsFlyerInstallData = function(e) {
Log.d("Android To JS --\x3e UploadAppsFlyerInstallData---------------\x3e" + e);
};
e.prototype.ReportedActivateDataCallback = function(e) {
Log.d("Android To JS --\x3e 安卓冷启动数据---------------\x3e" + e);
var t = App.storage.getItem(o.ConstString.coolData);
if (t && "" != t) this.coolData = JSON.parse(t); else if (e && "" != e) {
this.coolData = JSON.parse(e);
App.storage.setItem(o.ConstString.coolData, e);
}
App.senderManager.get(a.default).Send_Activate(e);
};
e.prototype.SaveOnLinkInviteCode = function(e) {
App.storage.setItem(o.ConstString.saveOneLinkInviteCode, e);
};
e.prototype.CallFBShareBack = function(e) {
Log.e("zzzzzzzzzzzzzzzzzzzzzzzzzz测试:" + e);
};
e.prototype.CallRefreshPlayerInfo = function(e) {
Log.e("zzzzzzzzzzzzzzzzzzzzzzzzzz更新playerinfo" + e);
s.default.setOrientation_l();
dispatch(r.CommonEvent.BackToHall);
i.default.self.updatePlayerInfo(function() {
dispatch(r.CommonEvent.Show_Hall);
});
};
e.prototype.AdmobFinishVideoCallBack = function(e) {
Log.e("----------AdmobFinishVideoCallBack:" + e);
dispatch(r.SdkEvent.SdkEvent_finish_video_back, e);
};
e.prototype.CallAndroidCallBackHome = function(e) {
Log.e("----------AndroidCallBackHome:" + e);
App.globalAudio.playButtonClick();
};
e.prototype.CallAndroidCallPlayAudio = function(e) {
Log.e("----------CallAndroidCallPlayAudio:" + e);
App.globalAudio.playButtonClick();
};
e.prototype.CallCocosAdReward = function() {
dispatch(r.SdkEvent.SdkEvent_finish_video_back);
};
e._instance = null;
return e;
}();
n.default = c;
window.SdkCallBack = c.getInstance();
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../common/config/User": "User",
"../common/event/CommonEvent": "CommonEvent",
"../common/net/CommonSender": "CommonSender",
"./SdkManager": "SdkManager"
} ],
SdkManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ec70dPSIyZHi4vccJg01+w7", "SdkManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../common/config/ConstString"), i = e("../common/config/GlobalVar"), r = e("../common/enum/GlobalEnum"), a = e("./AppInfo"), s = e("../common/event/CommonEvent"), c = e("./SdkCallBack"), l = function() {
function t() {}
t.getGameConfig = function() {
var e = null;
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "getGameConfig", "()Ljava/lang/String;");
Log.d("========AD获取设备数据:", e);
} else if (a.default.isIOS) {
e = jsb.reflection.callStaticMethod(this.iosName_sdk, "getGameConfig:", "");
Log.d("========IOS获取设备数据:", e);
}
return e || "{}";
};
t.UploadInstallData = function() {
Log.d("Js Call Android Prev: GetAdjust上报");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "ReportedActivateData", "(Ljava/lang/String;)V", a.default.getChannelId().toString());
Log.d("Js Call Android After: GetAdjust上报");
}
};
t.InitGoogleSignInManager = function(e) {
Log.d("Js Call Android Prev: InitGoogleSignIn");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "InitGoogleSDK", "(Ljava/lang/String;)V", e);
Log.d("Js Call Android After: InitGoogleSignIn");
}
};
t.checkVPN = function() {
Log.d("Js Call Android Prev: checkVPN");
var e = "0";
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "checkVPN", "()Ljava/lang/String;");
Log.d("Js Call Android After: checkVPN = " + e);
} else if (a.default.isIOS) {
e = jsb.reflection.callStaticMethod(this.iosName_sdk, "checkVPN:", "");
Log.d("Js Call Android After: checkVPN = " + e);
} else cc.sys.isBrowser;
return e;
};
t.getCountry = function() {
Log.d("Js Call Android Prev: getCountry");
var e = App.storage.getItem(o.ConstString.simData);
if (!e || "" == e) if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "getCountryCode", "()Ljava/lang/String;");
App.storage.setItem(o.ConstString.simData, e);
Log.d("Js Call Android After: getCountry = " + e);
} else a.default.isIOS ? e = i.GlobalVar.countryCode + "" : cc.sys.isBrowser;
return e;
};
t.getDeviceId = function() {
var t = App.storage.getItem(o.ConstString.deviceIdKey), n = this.getGoogleID();
if (n) {
t = n;
Log.d(">>获取设备googleid:", t, "; googleid=", n);
} else {
if (t && t.length) {
Log.d(">>缓存设备id:", t);
return t;
}
var i = new Date().getTime() + "" + Math.random();
t = e("md5")(i);
Log.d(">>随机设备id:", t, "; temp=", i);
}
App.storage.setItem(o.ConstString.deviceIdKey, t);
return t;
};
t.getFirebaseAppInstanceId = function() {
if (this._ios_firebaseid) return this._ios_firebaseid;
Log.d("Js Call Android Prev: getFirebaseAppInstanceId");
var e = "";
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "getFireBaseAppInstanceId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getFirebaseAppInstanceId = " + e);
return e;
}
a.default.isIOS;
return e;
};
t.getGoogleID = function() {
Log.d("Js Call Android Prev: getGoogleID");
if (this._ios_idfa) return this._ios_idfa;
var e = null;
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "getGoogleId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getGoogleID = " + e);
} else if (a.default.isIOS) {
e = jsb.reflection.callStaticMethod(this.iosName_sdk, "getIDFA:", "");
Log.d("Js Call Android After: getIDFA = " + e);
} else cc.sys.isBrowser;
return e;
};
t.getAdjustAdid = function() {
if (this._ios_adjustid) return this._ios_adjustid;
if (this._adjustAdid) return this._adjustAdid;
if (a.default.isAndroid) {
this._adjustAdid = jsb.reflection.callStaticMethod(this.javaName_sdk, "getAdid", "()Ljava/lang/String;");
Log.d("Js Call Android After: getAdjustAdid = " + this._adjustAdid);
} else if (a.default.isIOS) {
this._adjustAdid = jsb.reflection.callStaticMethod(this.iosName_sdk, "getAdid:", "");
Log.d("Js Call IOS After: getAdjustAdid = " + this._adjustAdid);
}
return this._adjustAdid;
};
t.GetAppsFlyerId = function() {
Log.d("Js Call Android Prev: GetAppsFlyerId");
if (this._afid) return this._afid;
if (a.default.isAndroid) {
this._afid = jsb.reflection.callStaticMethod(this.javaName_sdk, "GetAppsFlyerId", "()Ljava/lang/String;");
Log.d("Js Call Android After: GetAppsFlyerId = " + this._afid);
} else if (a.default.isIOS) {
this._afid = jsb.reflection.callStaticMethod(this.iosName_sdk, "GetAppsFlyerId:", "");
Log.d("Js Call IOS After: GetAppsFlyerId = " + this._afid);
}
return this._afid;
};
t.getIdfa = function() {
if (this._idfa.indexOf("000000")) {
var t = new Date().getTime() + "" + Math.random();
this._idfa = e("md5")(t);
Log.d(">>随机设备id:", this._idfa, "; temp=", t);
}
return this._idfa;
};
t.getPkgId = function() {
Log.d("Js Call Android Prev: getPkgId");
if (a.default.isAndroid) {
var e = jsb.reflection.callStaticMethod(this.javaName_sdk, "PkgID", "()Ljava/lang/String;");
Log.d("Js Call Android After: getPkgId = " + e);
return e;
}
a.default.isIOS;
return "";
};
t.google_Login = function() {
Log.d("Js Call Android Prev: google_Login");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "google_Login", "()V");
Log.d("Js Call Android After: google_Login");
}
};
t.SDK_LoginOut = function() {
Log.d("Js Call Android Prev: GoogleSignOut");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "google_LoginOut", "()V");
Log.d("Js Call Android After: GoogleSignOut");
}
};
t.setClipboardContent = function(e) {
App.globalAudio.playButtonClick();
Log.d("Js Call Android Prev: copy");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "copy", "(Ljava/lang/String;)Z", e);
Log.d("Js Call Android After: copy");
} else {
if (!a.default.isIOS) {
if (!e || "" == e) return App.tips.show("is empty");
if (!document.queryCommandSupported("copy")) {
App.tips.show("not support!");
return;
}
var t = document.createElement("textarea");
t.value = e;
document.body.appendChild(t);
t.select();
t.setSelectionRange(0, e.length);
document.execCommand("copy") || App.tips.show("not support!");
t.remove();
return;
}
jsb.reflection.callStaticMethod(this.iosName_sdk, "copy:", e);
}
};
t.openUrl = function(e) {
a.default.isAndroid && a.default.isSupportOpenAndroidUrl() ? jsb.reflection.callStaticMethod(this.javaName_sdk, "openUrl", "(Ljava/lang/String;)V", e) : cc.sys.openURL(e);
};
t.openWebView = function(e) {
a.default.isAndroid && jsb.reflection.callStaticMethod(this.javaName_sdk, "OpenWebView", "(Ljava/lang/String;)V", e);
};
t.CheckIsSimulator = function() {
Log.d("Js Call Android Prev: CheckIsSimulator");
var e = "0";
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "checkSimulator", "()Ljava/lang/String;");
Log.d("Js Call Android 安卓检查是否为模拟器-----\x3e" + e);
}
return e;
};
t.LogPurchaseEvent_Firebase = function(e, t) {
Log.d("Js Call Android Prev: LogPurchaseEvent_Firebase");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "logPurchaseEvent_Firebase", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
Log.d("Js Call Android After: LogPurchaseEvent_Firebase");
}
};
t.updateApplication = function(e) {
Log.d("Js Call Android Prev: updateApplication");
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "updateApplication", "(Ljava/lang/String;)V", e);
Log.d("Js Call Android After: updateApplication");
}
};
t.StopShakePhone = function() {
a.default.isAndroid;
};
t.hqAllAzly = function() {
var e = "";
Log.d("Js Call Android Prev: hqAllAzly:" + e);
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "hqAllAzly", "()Ljava/lang/String;");
Log.d("Js Call Android After: hqAllAzly");
}
return e;
};
t.hqAzly = function() {
var e = "";
Log.d("Js Call Android Prev: hqAzly:");
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "hqAzly", "()Ljava/lang/String;");
Log.d("Js Call Android After: hqAzly");
}
return e;
};
t.shareFacebook = function(e) {
Log.d("Js Call Android Prev: shareFacebook:" + e);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "shareFacebook", "(Ljava/lang/String;)V", e);
Log.d("Js Call Android After: shareFacebook");
}
};
t.SetAppsFlyerCustomerID = function(e) {
if (i.GlobalVar.des == r.GlobalEnum.ChannelDes.c4_N) {
Log.d("Js Call Android Prev: SetAppsFlyerCustomerID:" + e);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "SetAppsFlyerCustomerID", "(Ljava/lang/String;)V", e);
Log.d("Js Call Android After: SetAppsFlyerCustomerID");
}
}
};
t.GetUrlData = function() {
var e;
Log.d("Js Call Android Prev: GetUrlData:" + e);
if (a.default.isAndroid) {
e = jsb.reflection.callStaticMethod(this.javaName_sdk, "GetUrlData", "()Ljava/lang/String;");
Log.d("Js Call Android After: GetUrlData:" + e);
} else if (a.default.isIOS) {
e = jsb.reflection.callStaticMethod(this.iosName_sdk, "GetUrlData:", "");
Log.d("========IOS获取url:", e);
}
return e;
};
t.getHttpId = function() {
if (a.default.isAndroid) {
t.httpId = jsb.reflection.callStaticMethod(this.javaName_sdk, "getHttpId", "()Ljava/lang/String;");
Log.d("Js Call Android After: getHttpId:" + t.httpId);
}
return t.httpId;
};
t.showCSRDialog = function(e) {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showCSRDialog", "(Ljava/lang/String;)V", e) : a.default.isIOS;
};
t.chooseAudioPath = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "chooseAudioPath", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "chooseAudioPath:", "");
};
t.playLocalAudio = function() {
var e = App.storage.getItem(o.ConstString.localBgmPath, "");
Log.e("播放music" + e);
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "playLocalAudio", "(Ljava/lang/String;)V", e);
Log.d("Js Call Android After: playLocalAudio");
} else a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "playLocalAudio:", e);
};
t.pauseLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "pauseLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "pauseLocalAudio:", "");
};
t.resumeLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "resumeLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "resumeLocalAudio:", "");
};
t.stopLocalAudio = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "stopLocalAudio", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "stopLocalAudio:", "");
};
t.openPhoto = function() {
if (a.default.isAndroid) {
jsb.reflection.callStaticMethod(this.javaName_sdk, "openPhotoAlbum", "()V");
Log.d("Js Call Android After: openPhotoAlbum:");
} else a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "openPhotoAlbum:", "");
};
t.sendThirdMessage = function(e, t) {
if (a.default.isAndroid) {
t = t.replace("+", "");
jsb.reflection.callStaticMethod(this.javaName_sdk, "earnLogin", "(Ljava/lang/String;Ljava/lang/String;)V", e, t);
Log.d("Js Call Android After: earnLogin:");
}
};
t.setOrientation_l = function() {
dispatch(s.CommonEvent.TopBlackNode, !1);
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "setOrientation_l", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "setOrientation_l:", "");
cc.view.setDesignResolutionSize(1600, 750, cc.ResolutionPolicy.SHOW_ALL);
cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
this.isP = !1;
dispatch(s.ComponentGameEvent.UpdateScreenSize);
};
t.setOrientation_p = function(e) {
dispatch(s.CommonEvent.TopBlackNode, !0);
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "setOrientation_p", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "setOrientation_p:", "");
t.setAspect(e);
cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
this.isP = !0;
dispatch(s.ComponentGameEvent.UpdateScreenSize);
};
t.ExitSingleGame = function() {
window.opener && window.close();
};
t.initAdmob = function() {
Log.e("Js Call Android Prev: initAdmob");
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "initAdmob", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "initAdmob:", "");
};
t.showInterstitial = function() {
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showInterstitial", "()V") : a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "showInterstitial:", "");
};
t.showRewardedAd = function(e) {
this.rewardTag = e || "";
a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "showRewardedAd", "()V") : a.default.isIOS ? jsb.reflection.callStaticMethod(this.iosName_sdk, "showRewardedAd:", "") : c.default.getInstance().CallCocosAdReward("");
};
t.isReadyRewardedAd = function() {
return a.default.isAndroid ? jsb.reflection.callStaticMethod(this.javaName_sdk, "isReadyRewardedAd", "()Z") : !!a.default.isIOS && jsb.reflection.callStaticMethod(this.iosName_sdk, "isReadyRewardedAd:", "()Z");
};
t.getScreenSize = function() {
var e = cc.view.getDesignResolutionSize().width, t = cc.view.getDesignResolutionSize().height;
return cc.size(e, t);
};
t.getSizeRate = function() {
var e = cc.view.getFrameSize().height, t = cc.view.getFrameSize().width, n = (e > t ? e : t) / (e < t ? e : t);
return {
curRate: 1600 / 750 / n,
curAspect: n,
isPad: n < 1334 / 750
};
};
t.setAspect = function() {
var e = t.getSizeRate();
if (a.default.isWindowBrowser) {
cc.view.setDesignResolutionSize(750, 1334, cc.ResolutionPolicy.FIXED_HEIGHT);
t.ResolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
} else {
var n = cc.view.getFrameSize().height, o = cc.view.getFrameSize().width;
if (e.curRate > 1) if (e.isPad) {
cc.view.setDesignResolutionSize(750, 1334, cc.ResolutionPolicy.FIXED_HEIGHT);
t.ResolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
} else {
n > o ? cc.view.setDesignResolutionSize(750, 750 / o * n, cc.ResolutionPolicy.NO_BORDER) : cc.view.setDesignResolutionSize(750, 750 / n * o, cc.ResolutionPolicy.NO_BORDER);
t.ResolutionPolicy = cc.ResolutionPolicy.NO_BORDER;
} else {
var i = 1600 / e.curRate;
cc.view.setDesignResolutionSize(750, i, cc.ResolutionPolicy.FIXED_WIDTH);
t.ResolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
}
}
};
t.getStatusBarHeight = function() {
var e = 0;
if (a.default.isAndroid) {
(e = jsb.reflection.callStaticMethod(this.javaName_sdk, "getStatusBarHeight", "()I")) || (e = 0);
Log.d("Js Call Android After: getStatusBarHeight:" + e);
} else if (a.default.isIOS) {
e = jsb.reflection.callStaticMethod(this.iosName_sdk, "getStatusBarHeight:", "");
Log.d("Js Call IOS After: getStatusBarHeight:" + e);
} else e = 0;
cc.view.getFrameSize().height, cc.view.getDesignResolutionSize().height;
return 600;
};
t.getHalfBarHeight = function() {
return .5 * t.getStatusBarHeight();
};
t.javaName_sdk = "org/cocos2dx/javascript/SDKManager";
t.iosName_sdk = "SdkManager";
t.httpId = "0";
t.channelID = 3928880;
t.appID = 100;
t.verCode = "5.0.0";
t.ResolutionPolicy = cc.ResolutionPolicy.SHOW_ALL;
t._adjustAdid = "";
t._afid = "";
t._idfa = "";
t.isP = !0;
t.rewardTag = "";
return t;
}();
n.default = l;
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../common/config/GlobalVar": "GlobalVar",
"../common/enum/GlobalEnum": "GlobalEnum",
"../common/event/CommonEvent": "CommonEvent",
"./AppInfo": "AppInfo",
"./SdkCallBack": "SdkCallBack",
md5: 17
} ],
SenderManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5593eRtoWxF2IKSjeo3KXj3", "SenderManager");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SenderManager = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = null;
return t;
}
t.module = "【Sender管理器】";
return t;
}(e("../../../utils/SingletonT").SingletonT);
n.SenderManager = r;
cc._RF.pop();
}, {
"../../../utils/SingletonT": "SingletonT"
} ],
Sender: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7d4f4M66PdIs4/CMJGvQmLa", "Sender");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Sender = void 0;
var r = e("../../event/EventProcessor"), a = e("../../../defines/Macros"), s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = "";
return t;
}
t.prototype.send = function(e) {
this.service && this.service.send && this.service.send(e);
};
t.prototype.debug = function() {
Log.d(this.module);
};
t.prototype.destory = function() {
this.onDestroy();
};
t.prototype.init = function() {
this.onLoad();
};
t.module = a.Macro.UNKNOWN;
return t;
}(r.EventProcessor);
n.Sender = s;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../../event/EventProcessor": "EventProcessor"
} ],
ServerConnector: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "325034GFixIs5aVKWJNRCJu", "ServerConnector");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ServerConnector = void 0;
var o = e("./WebSocketClient"), i = function() {
function e() {
this._wsClient = null;
this._sendHartId = -1;
this._curRecvHartTimeOutCount = 0;
this._enabled = !0;
this._wsClient = new o.default();
this._wsClient.onClose = this.onClose.bind(this);
this._wsClient.onError = this.onError.bind(this);
this._wsClient.onMessage = this.onMessage.bind(this);
this._wsClient.onOpen = this.onOpen.bind(this);
}
e.prototype.getMaxHeartbeatTimeOut = function() {
return 5;
};
e.prototype.getHeartbeatInterval = function() {
return 3e4;
};
e.prototype.isHeartBeat = function() {
return !1;
};
e.prototype.onOpen = function() {
this.recvHeartbeat();
this.stopSendHartSchedule();
this.startSendHartSchedule();
};
e.prototype.onClose = function() {
this.stopSendHartSchedule();
};
e.prototype.onError = function() {
this.stopSendHartSchedule();
};
e.prototype.onMessage = function() {
this.recvHeartbeat();
};
e.prototype.recvHeartbeat = function() {
this._curRecvHartTimeOutCount = 0;
};
Object.defineProperty(e.prototype, "enabled", {
get: function() {
return this._enabled;
},
set: function(e) {
this._enabled = e;
0 == e && this.close();
},
enumerable: !1,
configurable: !0
});
e.prototype.connect_server = function(e, t, n) {
void 0 === t && (t = null);
void 0 === n && (n = "wss");
this.enabled && (t ? "string" == typeof t && t.length > 0 ? this._wsClient && this._wsClient.initWebSocket(e, t, n) : "number" == typeof t && t > 0 ? this._wsClient && this._wsClient.initWebSocket(e, t.toString(), n) : this._wsClient && this._wsClient.initWebSocket(e, null, n) : this._wsClient && this._wsClient.initWebSocket(e, null, n));
};
e.prototype.stopSendHartSchedule = function() {
if (-1 != this._sendHartId) {
clearInterval(this._sendHartId);
this._sendHartId = -1;
}
};
e.prototype.startSendHartSchedule = function() {
var e = this;
this._sendHartId = setInterval(function() {
e._curRecvHartTimeOutCount = e._curRecvHartTimeOutCount + 1;
if (e._curRecvHartTimeOutCount > e.getMaxHeartbeatTimeOut()) {
e.stopSendHartSchedule();
e.onHeartbeatTimeOut();
} else e.sendHeartbeat();
}, e.getHeartbeatInterval());
};
e.prototype.sendBuffer = function(e) {
this._wsClient && this._wsClient.send(e);
};
e.prototype.close = function(e) {
void 0 === e && (e = !1);
this.stopSendHartSchedule();
this._wsClient && this._wsClient.close(e);
};
Object.defineProperty(e.prototype, "isConnected", {
get: function() {
return !!this._wsClient && this._wsClient.isConnected;
},
enumerable: !1,
configurable: !0
});
return e;
}();
n.ServerConnector = i;
cc._RF.pop();
}, {
"./WebSocketClient": "WebSocketClient"
} ],
ServiceManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "195e3JngMBC6KT42cPw9G2N", "ServiceManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ServiceManager = void 0;
var o = e("../../../defines/Macros"), i = function() {
function e() {
this.module = null;
this.services = [];
this.waitReconnect = [];
this.curReconnect = void 0;
}
e.prototype.get = function(e, t) {
void 0 === t && (t = !1);
var n = this.getModule(e);
if (n == o.Macro.UNKNOWN) return null;
var i = this.getService(n);
if (i) return i;
if ("string" != typeof e && t) {
(i = new e()).module = n;
this.services.push(i);
return i;
}
return null;
};
e.prototype.destory = function(e) {
if (e) {
for (var t = this.getModule(e), n = this.services.length; n--; ) if (this.services[n].module == t) {
this.services[n].close();
this.services[n].destory();
this.services.splice(n, 1);
}
} else this.clear();
};
e.prototype.clear = function(e) {
for (var t = this.services.length; t--; ) if (!this.isInExclude(this.services[t], e)) {
this.services[t].close();
this.services[t].destory();
this.services.splice(t, 1);
}
};
e.prototype.isInExclude = function(e, t) {
if (!t) return !1;
for (var n = 0; n < t.length; n++) if (this.getModule(t[n]) == e.module) return !0;
return !1;
};
e.prototype.getModule = function(e) {
o.Macro.UNKNOWN;
return "string" == typeof e ? e : e.module;
};
e.prototype.onDestroy = function() {
this.clear();
};
e.prototype.update = function() {
this.services.forEach(function(e) {
e && e.handMessage();
});
};
e.prototype.close = function() {
this.services.forEach(function(e) {
e && e.close();
});
};
e.prototype.onLoad = function() {};
e.prototype.onError = function(e, t) {
Log.d(t.module + " 网络错误!!!");
!this.isWaiReconnect(t) && t.reconnectHandler && t.reconnectHandler.enabled && this.waitReconnect.push(t);
this.sortWait();
if (this.curReconnect) this.curReconnect == t && t.reconnectHandler && t.reconnectHandler.enabled && t.reconnectHandler.onError(e); else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.onError(e);
break;
}
this.curReconnect = void 0;
}
};
e.prototype.onClose = function(e, t) {
if (e.type != o.Macro.ON_CUSTOM_CLOSE) {
Log.d(t.module + " 网络关闭!!!");
!this.isWaiReconnect(t) && t.reconnectHandler && t.reconnectHandler.enabled && this.waitReconnect.push(t);
this.sortWait();
if (this.curReconnect) this.curReconnect == t && t.reconnectHandler && t.reconnectHandler.enabled && t.reconnectHandler.onClose(e); else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.onClose(e);
break;
}
this.curReconnect = void 0;
}
} else Log.d(t.module + " 应用层主动关闭Socket");
};
e.prototype.onOpen = function(e, t) {
for (var n = !1, o = 0; o < this.waitReconnect.length; o++) if (this.waitReconnect[o] == t) {
t.reconnectHandler && t.reconnectHandler.onOpen(e);
n = !0;
this.waitReconnect.splice(o, 1);
break;
}
!n && t && t.reconnectHandler && t.reconnectHandler.enabled && t.reconnectHandler.onOpen(e);
Log.d(t.module + "重连成功...");
this.curReconnect = void 0;
for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.reconnect();
Log.d(this.curReconnect.module + "进入重连...");
break;
}
this.curReconnect = void 0;
}
this.curReconnect || App.uiReconnect.hide();
};
e.prototype.onEnterBackground = function() {
this.services.forEach(function(e) {
e.onEnterBackground();
});
};
e.prototype.onEnterForgeground = function(e) {
this.services.forEach(function(t) {
t.onEnterForgeground(e);
});
};
e.prototype.reconnect = function(e) {
!this.isWaiReconnect(e) && e.reconnectHandler && e.reconnectHandler.enabled && this.waitReconnect.push(e);
this.sortWait();
if (this.curReconnect) {
if (this.waitReconnect.length > 1 && this.waitReconnect[0] != this.curReconnect) {
if (this.curReconnect.reconnectHandler && this.curReconnect.reconnectHandler.enabled && this.curReconnect.reconnectHandler.isConnecting) {
Log.w("优先级低的网络正常连接中 : " + this.curReconnect.module + ",正在连接中，将不会按照优先级进行重连");
return;
}
!this.isWaiReconnect(e) && e.reconnectHandler && e.reconnectHandler.enabled && this.waitReconnect.push();
this.sortWait();
Log.w("当前网络:" + this.curReconnect.module + "不是优先级最高的，将为您重新切换到优先级高的网络进行重连!!!");
this.curReconnect = void 0;
for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
Log.w("已为您切换优先级高的:" + this.curReconnect.module + "进行重连!!!");
this.curReconnect.reconnectHandler.reconnect();
break;
}
this.curReconnect = void 0;
}
}
this.curReconnect == e && e.reconnectHandler && e.reconnectHandler.enabled && e.reconnectHandler.reconnect();
} else for (;this.waitReconnect.length > 0; ) if (!this.curReconnect) {
this.curReconnect = this.waitReconnect.shift();
if (this.curReconnect && this.curReconnect.reconnectHandler && this.curReconnect.enabled) {
this.curReconnect.reconnectHandler.reconnect();
break;
}
this.curReconnect = void 0;
}
};
e.prototype.sortWait = function() {
this.waitReconnect.length >= 1 && this.waitReconnect.sort(function(e, t) {
return t.priority - e.priority;
});
};
e.prototype.getService = function(e) {
for (var t = 0; t < this.services.length; t++) if (this.services[t].module == e) return this.services[t];
return null;
};
e.prototype.isWaiReconnect = function(e) {
return -1 != this.waitReconnect.indexOf(e);
};
e.prototype.debug = function() {
Log.d("-----------网络管理器中相关网络信息------------");
this.services.forEach(function(e) {
var t = "Module : " + e.module + " , 进入后台的最大允许时间 : " + e.maxEnterBackgroundTime + " , 优先级 : " + e.priority;
Log.d(t);
t = "重连信息 : ";
e.reconnectHandler ? t = "是否允许重连 : " + e.reconnectHandler.enabled : t += "无重连Handler";
Log.d(t);
t = "状态信息 , 是否允许连接网络 : " + e.enabled + " 是否连接 : " + e.isConnected + " 网络数据类型 : " + e.serviceType;
Log.d(t);
});
};
e.module = "【Service管理器】";
return e;
}();
n.ServiceManager = i;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros"
} ],
Service: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "aac1a0Z061GhoAtBoDHNbI0", "Service");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Service = void 0;
var r = e("../../../defines/Macros"), a = e("../Net"), s = e("../socket/ServerConnector"), c = e("./Process"), l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = r.Macro.UNKNOWN;
t.reconnectHandler = null;
t._Process = new c.Process();
t._Heartbeat = null;
t.priority = 0;
t.serviceType = a.Net.ServiceType.Unknown;
return t;
}
Object.defineProperty(t.prototype, "Process", {
set: function(e) {
if (null != e) {
this._Process = new e();
this._Process.serviceType = this.serviceType;
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "Codec", {
set: function(e) {
this._Process.Codec = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "heartbeat", {
get: function() {
return this._Heartbeat;
},
set: function(e) {
this._Heartbeat = e;
this.serviceType = e.type;
this._Process.serviceType = e.type;
},
enumerable: !1,
configurable: !0
});
t.prototype.onOpen = function(t) {
e.prototype.onOpen.call(this, t);
App.serviceManager.onOpen(t, this);
};
t.prototype.onClose = function(t) {
e.prototype.onClose.call(this, t);
App.serviceManager.onClose(t, this);
};
t.prototype.onError = function(t) {
e.prototype.onError.call(this, t);
App.serviceManager.onError(t, this);
};
t.prototype.onMessage = function(t) {
this.recvHeartbeat();
var n = new this._Process.Codec();
if (n.unPack(t)) if (this.isHeartBeat(n)) this.onRecvHeartBeat(); else {
e.prototype.onMessage.call(this, t);
this._Process.onMessage(n);
} else Log.e("decode header error");
};
t.prototype.onRecvHeartBeat = function() {};
t.prototype.addListener = function(e, t, n, o, i) {
this._Process.addListener(e, t, n, o, i);
};
t.prototype.removeListeners = function(e, t) {
this._Process.removeListeners(e, t);
};
t.prototype.addMessageQueue = function(e, t, n) {
void 0 === n && (n = !1);
this._Process.addMessageQueue(e, t, n);
};
t.prototype.pauseMessageQueue = function() {
this._Process.isPause = !0;
};
t.prototype.resumeMessageQueue = function() {
this._Process.isPause = !1;
};
t.prototype.handMessage = function() {
this._Process.handMessage();
};
t.prototype.reset = function() {
this._Process.reset();
};
t.prototype.close = function(t) {
void 0 === t && (t = !1);
this._Process.close();
e.prototype.close.call(this, t);
};
t.prototype.send = function(e) {
Log.d(String.format("cmd:{0}  webSend:{1}", e.cmd, JSON.stringify(e.data)));
if (this._Process.Codec) if (e.encode()) {
var t = new this._Process.Codec();
t.pack(e);
this.isHeartBeat(e) || Log.d("send request main cmd : " + e.cmd + " ");
this.sendBuffer(t.buffer);
} else Log.e("encode error"); else Log.e("请求指定数据包头处理类型");
};
t.prototype.destory = function() {
this.reconnectHandler && this.reconnectHandler.onDestroy();
};
t.module = r.Macro.UNKNOWN;
return t;
}(s.ServerConnector);
n.Service = l;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros",
"../Net": "Net",
"../socket/ServerConnector": "ServerConnector",
"./Process": "Process"
} ],
SetPanel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b4715CRKXZCuoj6+RORRMjq", "SetPanel");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/framework/componects/EventComponent"), s = e("../../../scripts/framework/defines/Enums"), c = e("../../../scripts/sdk/SdkManager"), l = e("./AudioMgr"), u = e("./PayLinesPanel"), p = e("./PayTabelPanel"), d = e("./RulePanel"), h = cc._decorator, f = h.ccclass, _ = h.property, g = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_main = null;
t.close = null;
t.soundOpne = null;
t.soudnclose = null;
t.exit = null;
t.soundBtn = null;
t.ruleBtn = null;
t.payTableBtn = null;
t.payLinesBtn = null;
t.rulePanel = null;
t.payTablePanel = null;
t.payLinesPanel = null;
return t;
}
t.prototype.onEnable = function() {
this.node_main.scale = 0;
cc.tween(this.node_main).to(.5, {
scale: 1
}, {
easing: "backOut"
}).start();
};
t.prototype.addEvents = function() {
var e = this;
this.onN(this.close, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
e.node.active = !1;
c.default.showInterstitial();
});
this.onN(this.exit, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
e.node.active = !1;
cc.director.loadScene("login");
c.default.showInterstitial();
});
this.onN(this.soundBtn, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
var t = App.storage.getItem("soundState", !0);
t = !t;
App.storage.setItem("soundState", t);
e.refreshSoundState();
c.default.showInterstitial();
});
this.onN(this.ruleBtn, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
e.rulePanel.OpenShow();
});
this.onN(this.payTableBtn, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
e.payTablePanel.OpenShow();
});
this.onN(this.payLinesBtn, s.NodeEvent.click, function() {
l.default.instance.playEffect("click");
e.payLinesPanel.OpenShow();
});
this.refreshSoundState();
};
t.prototype.refreshSoundState = function() {
var e = App.storage.getItem("soundState", !0);
this.soundOpne.active = e;
this.soudnclose.active = !e;
l.default.instance.setSoundState(e);
};
r([ _(cc.Node) ], t.prototype, "node_main", void 0);
r([ _(cc.Node) ], t.prototype, "close", void 0);
r([ _(cc.Node) ], t.prototype, "soundOpne", void 0);
r([ _(cc.Node) ], t.prototype, "soudnclose", void 0);
r([ _(cc.Node) ], t.prototype, "exit", void 0);
r([ _(cc.Node) ], t.prototype, "soundBtn", void 0);
r([ _(cc.Node) ], t.prototype, "ruleBtn", void 0);
r([ _(cc.Node) ], t.prototype, "payTableBtn", void 0);
r([ _(cc.Node) ], t.prototype, "payLinesBtn", void 0);
r([ _(d.default) ], t.prototype, "rulePanel", void 0);
r([ _(p.default) ], t.prototype, "payTablePanel", void 0);
r([ _(u.default) ], t.prototype, "payLinesPanel", void 0);
return r([ f ], t);
}(a.default);
n.default = g;
cc._RF.pop();
}, {
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/defines/Enums": "Enums",
"../../../scripts/sdk/SdkManager": "SdkManager",
"./AudioMgr": "AudioMgr",
"./PayLinesPanel": "PayLinesPanel",
"./PayTabelPanel": "PayTabelPanel",
"./RulePanel": "RulePanel"
} ],
SettingChooseTC_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f55b7RiQBtKx6KBp0n6TZTa", "SettingChooseTC_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/sdk/SdkManager"), s = e("../AudioMgr"), c = e("../GameMgr"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_main = null;
t.node_zhezhao = null;
t.soundOpne = null;
t.soudnclose = null;
t.clickType = 0;
t.tween_Main = null;
return t;
}
t.prototype.onEnable = function() {};
t.prototype.onDestroy = function() {
this.tween_Main && this.tween_Main.stop();
};
t.prototype.OpenShow = function() {
this.tween_Main && this.tween_Main.stop();
this.node_main.active = !0;
this.node_zhezhao.active = !0;
this.node_main.scale = 0;
this.tween_Main = cc.tween(this.node_main).to(.35, {
scale: 1
}, cc.easeBackOut()).start();
};
t.prototype.CloseShow = function() {
var e = this;
this.tween_Main && this.tween_Main.stop();
this.tween_Main = cc.tween(this.node_main).to(.35, {
scale: 0
}, cc.easeBackIn()).delay(.1).call(function() {
if (0 == e.clickType) a.default.showInterstitial(); else {
cc.director.loadScene("login");
a.default.showInterstitial();
}
e.node_main.active = !1;
e.node_zhezhao.active = !1;
}).start();
};
t.prototype.onLoad = function() {
this.refreshSoundState();
};
t.prototype.ButtonClick_Close = function() {
s.default.instance.playEffect(c.AudioName.Click);
this.clickType = 0;
this.CloseShow();
};
t.prototype.ButtonClick_Exit = function() {
s.default.instance.playEffect(c.AudioName.Click);
this.clickType = 1;
this.CloseShow();
};
t.prototype.ButtonClick_SoundBtn = function() {
s.default.instance.playEffect(c.AudioName.Click);
var e = App.storage.getItem("soundState", !0);
e = !e;
App.storage.setItem("soundState", e);
this.refreshSoundState();
a.default.showInterstitial();
};
t.prototype.refreshSoundState = function() {
var e = App.storage.getItem("soundState", !0);
this.soundOpne.active = e;
this.soudnclose.active = !e;
s.default.instance.setSoundState(e);
};
r([ p(cc.Node) ], t.prototype, "node_main", void 0);
r([ p(cc.Node) ], t.prototype, "node_zhezhao", void 0);
r([ p(cc.Node) ], t.prototype, "soundOpne", void 0);
r([ p(cc.Node) ], t.prototype, "soudnclose", void 0);
return r([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../../scripts/sdk/SdkManager": "SdkManager",
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
SimpleLineMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "13fc2LEGmxDva4k5aJaQgvo", "SimpleLineMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseLineItem "), s = e("./BaseLineMgr"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.init = function() {
this.lines = this.node.getComponentsInChildren(a.default);
};
t.prototype.showRewardLine = function(e) {
this.lines[e].show();
};
t.prototype.showRewardLines = function() {};
t.prototype.hide = function() {
for (var e = 0; e < this.lines.length; e++) this.lines[e].hide();
};
t.prototype.lineAnims_None = function() {};
return r([ l ], t);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"./BaseLineItem ": "BaseLineItem ",
"./BaseLineMgr": "BaseLineMgr"
} ],
SingletonT: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9e9fct02ElIbrDDB2qZrYRN", "SingletonT");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SingletonT = void 0;
var o = e("../defines/Macros"), i = function() {
function e() {
this._datas = new Map();
this.module = null;
}
e.prototype.get = function(e, t) {
void 0 === t && (t = !0);
var n = this.getKey(e);
if (n == o.Macro.UNKNOWN) return null;
if (this._datas.has(n)) return this._datas.get(n);
if ("string" != typeof e && t) {
var i = null;
(i = e.instance ? e.instance : new e()).module = e.module;
Log.d(i.module + "初始化");
i.init && i.init();
this._datas.set(e.module, i);
return i;
}
return null;
};
e.prototype.destory = function(e) {
var t = this;
if (e) {
var n = this.getKey(e);
if (this._datas.has(n)) {
Log.d(n + "销毁");
var o = this._datas.get(n);
o && o.destory && o.destory();
this._datas.delete(n);
return !0;
}
return !1;
}
this._datas.forEach(function(e) {
if (e.isResident) Log.d(e.module + "为常驻单列，不做销毁处理"); else {
Log.d(e.module + "销毁");
e.destory && e.destory();
t._datas.delete(e.module);
}
});
return !0;
};
e.prototype.clear = function(e) {
var t = this;
e ? this._datas.forEach(function(n) {
if (!t.isInExclude(n, e)) {
Log.d(n.module + "清理");
n.clear && n.clear();
}
}) : this._datas.forEach(function(e) {
Log.d(e.module + "清理");
e.clear && e.clear();
});
};
e.prototype.debug = function() {
Log.d("************************** " + this.module + " 开始 **************************");
this._datas.forEach(function(e) {
e.debug ? e.debug() : Log.d(e.module + " : 未实现debug接口");
});
Log.d("************************** " + this.module + " 结束 **************************");
};
e.prototype.isInExclude = function(e, t) {
if (!t) return !1;
for (var n = 0; n < t.length; n++) if (this.getKey(t[n]) == e.module) return !0;
return !1;
};
e.prototype.getKey = function(e) {
o.Macro.UNKNOWN;
return "string" == typeof e ? e : e.module;
};
return e;
}();
n.SingletonT = i;
cc._RF.pop();
}, {
"../defines/Macros": "Macros"
} ],
Singleton: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5904etz/RdHI4wv7lZBfn2B", "Singleton");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Singleton = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = "【单列管理器】";
return t;
}
Object.defineProperty(t, "instance", {
get: function() {
return this._instance || (this._instance = new t());
},
enumerable: !1,
configurable: !0
});
t._instance = null;
return t;
}(e("./SingletonT").SingletonT);
n.Singleton = r;
cc._RF.pop();
}, {
"./SingletonT": "SingletonT"
} ],
SlotJudge: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6eb22jbiYNJ4qMIUYt9aJMr", "SlotJudge");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.awardLines_Config = void 0;
n.awardLines_Config = [ [ 0, 6, 12, 18, 24 ], [ 1, 7, 13, 19, 25 ], [ 2, 8, 14, 20, 26 ], [ 3, 9, 15, 21, 27 ], [ 4, 10, 16, 22, 28 ], [ 5, 11, 17, 23, 29 ], [ 0, 7, 14, 21, 28 ], [ 1, 8, 15, 22, 29 ], [ 5, 10, 15, 20, 25 ], [ 4, 9, 14, 19, 24 ], [ 1, 7, 14, 19, 25 ], [ 4, 10, 15, 22, 28 ], [ 2, 8, 13, 20, 26 ], [ 3, 9, 16, 21, 27 ], [ 2, 9, 16, 21, 26 ], [ 3, 8, 13, 18, 23 ], [ 0, 6, 13, 18, 24 ], [ 5, 11, 14, 23, 29 ], [ 1, 8, 14, 20, 25 ], [ 4, 9, 15, 21, 28 ], [ 0, 7, 13, 19, 24 ], [ 5, 10, 16, 22, 29 ], [ 1, 8, 15, 20, 25 ], [ 4, 9, 14, 19, 28 ], [ 2, 7, 12, 19, 26 ], [ 3, 10, 17, 22, 27 ], [ 1, 6, 14, 20, 28 ], [ 4, 11, 15, 21, 23 ], [ 2, 9, 15, 22, 29 ], [ 3, 8, 14, 19, 24 ], [ 0, 7, 15, 21, 29 ], [ 5, 10, 14, 18, 24 ], [ 1, 8, 16, 22, 28 ], [ 4, 9, 13, 19, 25 ], [ 2, 7, 15, 21, 27 ], [ 3, 8, 14, 20, 26 ], [ 0, 8, 16, 20, 28 ], [ 5, 9, 13, 19, 23 ], [ 1, 6, 12, 18, 25 ], [ 4, 11, 17, 23, 28 ], [ 2, 7, 13, 21, 27 ], [ 3, 9, 15, 19, 25 ], [ 0, 7, 13, 21, 29 ], [ 5, 10, 14, 20, 24 ], [ 1, 7, 13, 19, 27 ], [ 4, 8, 14, 20, 26 ], [ 2, 8, 15, 22, 29 ], [ 3, 9, 14, 19, 24 ], [ 0, 8, 14, 22, 28 ], [ 5, 9, 15, 21, 25 ] ];
var o = [ [ 400, 2400, 6400 ], [ 360, 2e3, 5600 ], [ 320, 1600, 5e3 ], [ 240, 1200, 3600 ], [ 200, 1e3, 3200 ], [ 160, 800, 2e3 ], [ 100, 400, 1200 ], [ 80, 320, 800 ], [ 50, 200, 500 ], [ 20, 80, 240 ], [ 10, 40, 200 ], [ 4, 20, 100 ] ], i = function() {
function e() {}
e.getSymbol = function(e, t) {
var n = t % 6;
return e[Math.floor(t / 6)][n];
};
e.checkAwards = function(e, t) {
for (var i = this, r = {
awardline: [],
awardPos: [],
awardType: 0,
score: 0
}, a = new Set(), s = 0; s < n.awardLines_Config.length; s++) {
for (var c = n.awardLines_Config[s], l = c.map(function(t) {
return i.getSymbol(e, t);
}), u = l[0], p = 1, d = 1; d < l.length && l[d] === u; d++) p++;
if (p >= 3) {
r.awardline.push(s);
for (var h = 0; h < p; h++) a.add(c[h]);
var f = o[u][p - 3];
r.score += .02 * t * f;
}
}
if (r.score > 0) {
var _ = r.score / t;
r.awardType = _ < 1 ? 1 : _ < 3 ? 2 : 3;
} else r.awardType = 0;
r.awardPos = Array.from(a).sort(function(e, t) {
return e - t;
});
return {
awardResult: r,
value: e
};
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
SlotsDataUtil: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "fbe21A0B65CPaCsn6Ox0i3o", "SlotsDataUtil");
var o = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, a = (i.property, function() {
function e() {}
e.prototype.getWildMultiple = function() {
for (var e = this.initDesk.wildMultiple.split(";"), t = [], n = 0; n < e.length; n++) {
var o = e[n];
t.push(Number.parseInt(o));
}
return t;
};
return o([ r ], e);
}());
n.default = a;
cc._RF.pop();
}, {} ],
SpinePlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1d3c07xkA9FYJebfCW8c7Mp", "SpinePlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spine = null;
return t;
}
t.prototype.init = function() {
this.spine || (this.spine = this.node.getComponentInChildren(sp.Skeleton));
};
t.prototype.show = function() {
this.init();
this.node.active = !0;
};
t.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ c ], t);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
SpritePlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2393cCIwE9Aq5Scs7SotJ0Y", "SpritePlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("./BaseAnimState"), s = cc._decorator, c = s.ccclass, l = (s.property, 
function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.show = function() {
this.node.active = !0;
};
t.prototype.hide = function() {
this.node.active = !1;
};
return r([ c ], t);
}(a.default));
n.default = l;
cc._RF.pop();
}, {
"./BaseAnimState": "BaseAnimState"
} ],
StageData: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ea9ee6ybWdE2q6pbGPmMeIm", "StageData");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.StageData = void 0;
var r = e("../../framework/core/update/Update"), a = e("../../framework/data/GameData"), s = e("../../framework/defines/Macros"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._sceneStack = [];
t._where = s.Macro.UNKNOWN;
t._entrys = new Map();
t._games = [];
return t;
}
Object.defineProperty(t.prototype, "where", {
get: function() {
return this._where;
},
set: function(e) {
Log.d("" + this.module + this._where + " ==> " + e);
var t = this._where;
this._where = e;
t != e && this.push(e);
},
enumerable: !1,
configurable: !0
});
t.prototype.init = function() {
var t = this;
e.prototype.init.call(this);
var n = App.Bundles, o = Object.keys(n);
this._entrys.clear();
o.forEach(function(e) {
var n = new r.Update.Config("bundles." + e + ".name", e);
t._entrys.set(e, n);
e != s.Macro.BUNDLE_RESOURCES && t._games.push({
name: e,
sort: 0,
bundle: e
});
});
};
t.prototype.isLoginStage = function(e) {
return e ? e == s.Macro.BUNDLE_RESOURCES : this.where == s.Macro.BUNDLE_RESOURCES;
};
t.prototype.getEntry = function(e) {
return this._entrys.get(e);
};
Object.defineProperty(t.prototype, "games", {
get: function() {
return this._games;
},
enumerable: !1,
configurable: !0
});
t.prototype.push = function(e) {
for (var t = 0, n = this._sceneStack.length - 1; n >= 0; n--) if (this._sceneStack[n] == e) {
t = this._sceneStack.length - n;
break;
}
for (;t > 0; ) {
this._sceneStack.pop();
t--;
}
this._sceneStack.push(e);
Log.d(this.module + "压入场景 : " + e);
Log.d(this.module + "当前场景堆栈 : " + this._sceneStack.toString());
};
Object.defineProperty(t.prototype, "prevWhere", {
get: function() {
var e = void 0;
this._sceneStack.length >= 2 && (e = this._sceneStack[this._sceneStack.length - 2]);
Log.d(this.module + "获取的上一场景 : " + e);
return e;
},
enumerable: !1,
configurable: !0
});
t.module = "【Stage数据】";
return t;
}(a.GameData);
n.StageData = c;
cc._RF.pop();
}, {
"../../framework/core/update/Update": "Update",
"../../framework/data/GameData": "GameData",
"../../framework/defines/Macros": "Macros"
} ],
StorageUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cd1b3npZENMZZm4OLfpQidg", "StorageUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function e() {}
e.flushall = function() {
cc.sys.localStorage.clear();
};
e.delete = function(e) {
cc.sys.localStorage.removeItem(e);
};
e.string = function(e, t) {
return cc.sys.localStorage.getItem(e) || t;
};
e.number = function(e, t) {
var n = cc.sys.localStorage.getItem(e);
return n ? +n : t;
};
e.data = function(e) {
var t = cc.sys.localStorage.getItem(e);
if (t) try {
return JSON.parse(t);
} catch (t) {
Log.e(t);
this.delete(e);
}
return null;
};
e.save = function(e, t) {
cc.sys.localStorage.setItem(e, "" + t);
};
e.saveJson = function(e, t) {
try {
cc.sys.localStorage.setItem(e, JSON.stringify(t));
} catch (e) {
Log.e(e);
}
};
return e;
}();
n.default = o;
cc._RF.pop();
}, {} ],
TAtlasPlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "503c8zqKqtHDaWpEIYeuO+l", "TAtlasPlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/UVAnimation/TAtlasPlay_Init"), s = e("./BaseAnimState"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.tAtlasPlay = null;
return t;
}
t.prototype.init = function() {
if (!this.tAtlasPlay) {
this.tAtlasPlay = this.node.getComponent(a.default);
this.tAtlasPlay.customInit();
}
};
t.prototype.show = function(t) {
e.prototype.show.call(this, t);
this.init();
this.node.active = !0;
console.error("播放动画:" + this.tAtlasPlay);
this.tAtlasPlay.playRun();
};
t.prototype.hide = function() {
this.init();
this.node.active = !1;
};
return r([ l ], t);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/UVAnimation/TAtlasPlay_Init": "TAtlasPlay_Init",
"./BaseAnimState": "BaseAnimState"
} ],
TAtlasPlay_Init: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ed249qDBVZJYorDLF7/G52l", "TAtlasPlay_Init");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../common/utils/RandomUtil"), s = e("./TUVPlay"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteAtlas = null;
t.speed = .2;
t.isDealy = !1;
t.dealyTime = 0;
t.playType = s.PlayType.Loop;
t.beginFrame = 0;
t.endFrame = 0;
t.isAwakeRunShow = !1;
t.beginShowFrame = 0;
t.isStopRunShow = !1;
t.endShowFrame = 0;
t.counts_playerState = s.PlayState.Fixed;
t.playeCount = 0;
t.minPlayeCount = 0;
t.maxPlayeCount = 0;
t.counts_playerState_pingpang = s.PlayState.Fixed;
t.playeCount_pingpang = 0;
t.minPlayeCount_pingpang = 0;
t.maxPlayeCount_pingpang = 0;
t.playPatter = s.PlayPattern.Order;
t.settingFrame = [];
t.isUseOverEvent = !1;
t.overEvent = [];
t.isUseCountOverEvent = !1;
t.countOverEvent = [];
t.nowCount = 0;
t.frame = 0;
t.inc = 1;
t.time = 0;
t.lastTime = 0;
t.isStop = !1;
t.isPlay = !1;
t.pingpangFlage = 0;
return t;
}
t.prototype.customInit = function() {
this.sprite = this.node.getComponent(cc.Sprite);
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.setStop = function(e) {
this.isPlay = !1;
this.setAnimationgUvRect(e);
};
t.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == s.PlayType.Counts ? this.counts_playerState == s.PlayState.Fixed ? this.nowCount = this.playeCount : this.nowCount = a.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == s.PlayType.PingpangCounts && (this.counts_playerState_pingpang == s.PlayState.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = a.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
t.prototype.update = function(e) {
this.time = this.time + e;
if (this.isPlay) switch (this.playType) {
case s.PlayType.Once:
this.runOnce();
break;

case s.PlayType.Loop:
this.runLoop();
break;

case s.PlayType.Pingpang:
this.runPingpang();
break;

case s.PlayType.Counts:
this.runCounts();
break;

case s.PlayType.PingpangCounts:
this.runPingpangCounts();
}
};
t.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.setAnimationgUvRect = function(e) {
this.playPatter == s.PlayPattern.Order ? this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame((e + 1).toString()) : this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame(this.settingFrame[e].toString());
};
t.prototype.getDealyTime = function() {
return this.dealyTime;
};
t.prototype.allEvent = function() {
if (null != this.overEvent) for (var e = 0; e < this.overEvent.length; e++) {
var t = this.overEvent[e];
t.emit([ t.customEventData ]);
}
};
t.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var e = 0; e < this.countOverEvent.length; e++) {
var t = this.countOverEvent[e];
t.emit([ t.customEventData ]);
}
};
r([ u(cc.SpriteAtlas) ], t.prototype, "spriteAtlas", void 0);
r([ u ], t.prototype, "speed", void 0);
r([ u ], t.prototype, "isDealy", void 0);
r([ u({
visible: function() {
return this.isDealy;
}
}) ], t.prototype, "dealyTime", void 0);
r([ u({
type: cc.Enum(s.PlayType)
}) ], t.prototype, "playType", void 0);
r([ u ], t.prototype, "beginFrame", void 0);
r([ u ], t.prototype, "endFrame", void 0);
r([ u ], t.prototype, "isAwakeRunShow", void 0);
r([ u({
visible: function() {
return this.isAwakeRunShow;
}
}) ], t.prototype, "beginShowFrame", void 0);
r([ u ], t.prototype, "isStopRunShow", void 0);
r([ u({
visible: function() {
return this.isStopRunShow;
}
}) ], t.prototype, "endShowFrame", void 0);
r([ u({
type: cc.Enum(s.PlayState),
visible: function() {
return this.playType == s.PlayType.Counts;
}
}) ], t.prototype, "counts_playerState", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Fixed;
}
}) ], t.prototype, "playeCount", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], t.prototype, "minPlayeCount", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], t.prototype, "maxPlayeCount", void 0);
r([ u({
type: cc.Enum(s.PlayState),
visible: function() {
return this.playType == s.PlayType.PingpangCounts;
}
}) ], t.prototype, "counts_playerState_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Fixed;
}
}) ], t.prototype, "playeCount_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], t.prototype, "minPlayeCount_pingpang", void 0);
r([ u({
visible: function() {
return this.playType == s.PlayType.Counts && this.counts_playerState == s.PlayState.Random;
}
}) ], t.prototype, "maxPlayeCount_pingpang", void 0);
r([ u({
type: cc.Enum(s.PlayPattern)
}) ], t.prototype, "playPatter", void 0);
r([ u({
type: cc.Integer,
visible: function() {
return this.playPatter == s.PlayPattern.Setting;
}
}) ], t.prototype, "settingFrame", void 0);
r([ u ], t.prototype, "isUseOverEvent", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], t.prototype, "overEvent", void 0);
r([ u ], t.prototype, "isUseCountOverEvent", void 0);
r([ u({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], t.prototype, "countOverEvent", void 0);
return r([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil",
"./TUVPlay": "TUVPlay"
} ],
TAtlasPlay: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6741dUCnYdMdp70kMGIzKwW", "TAtlasPlay");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PlayPattern = n.PlayState = n.PlayType = void 0;
var a, s, c, l = e("../../common/utils/RandomUtil"), u = cc._decorator, p = u.ccclass, d = u.property;
(function(e) {
e[e.Once = 0] = "Once";
e[e.Loop = 1] = "Loop";
e[e.Pingpang = 2] = "Pingpang";
e[e.Counts = 3] = "Counts";
e[e.PingpangCounts = 4] = "PingpangCounts";
})(a = n.PlayType || (n.PlayType = {}));
(function(e) {
e[e.Fixed = 0] = "Fixed";
e[e.Random = 1] = "Random";
})(s = n.PlayState || (n.PlayState = {}));
(function(e) {
e[e.Order = 0] = "Order";
e[e.Setting = 1] = "Setting";
})(c = n.PlayPattern || (n.PlayPattern = {}));
var h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteAtlas = null;
t.speed = .2;
t.isDealy = !1;
t.dealyTime = 0;
t.playType = a.Loop;
t.beginFrame = 0;
t.endFrame = 0;
t.isAwakeRunShow = !1;
t.beginShowFrame = 0;
t.isStopRunShow = !1;
t.endShowFrame = 0;
t.isLoadPlay = !0;
t.counts_playerState = s.Fixed;
t.playeCount = 0;
t.minPlayeCount = 0;
t.maxPlayeCount = 0;
t.counts_playerState_pingpang = s.Fixed;
t.playeCount_pingpang = 0;
t.minPlayeCount_pingpang = 0;
t.maxPlayeCount_pingpang = 0;
t.playPatter = c.Order;
t.settingFrame = [];
t.isUseOverEvent = !1;
t.overEvent = [];
t.isUseCountOverEvent = !1;
t.countOverEvent = [];
t.nowCount = 0;
t.frame = 0;
t.inc = 1;
t.time = 0;
t.lastTime = 0;
t.isStop = !1;
t.isPlay = !1;
t.pingpangFlage = 0;
return t;
}
t.prototype.onLoad = function() {
this.sprite = this.node.getComponent(cc.Sprite);
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.start = function() {
this.isLoadPlay && this.playRun();
};
t.prototype.setStop = function(e) {
this.isPlay = !1;
this.setAnimationgUvRect(e);
};
t.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == a.Counts ? this.counts_playerState == s.Fixed ? this.nowCount = this.playeCount : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == a.PingpangCounts && (this.counts_playerState_pingpang == s.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
t.prototype.update = function(e) {
this.time = this.time + e;
if (this.isPlay) switch (this.playType) {
case a.Once:
this.runOnce();
break;

case a.Loop:
this.runLoop();
break;

case a.Pingpang:
this.runPingpang();
break;

case a.Counts:
this.runCounts();
break;

case a.PingpangCounts:
this.runPingpangCounts();
}
};
t.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.setAnimationgUvRect = function(e) {
this.playPatter == c.Order ? this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame((e + 1).toString()) : this.sprite.spriteFrame = this.spriteAtlas.getSpriteFrame(this.settingFrame[e].toString());
};
t.prototype.getDealyTime = function() {
return this.dealyTime;
};
t.prototype.allEvent = function() {
if (null != this.overEvent) for (var e = 0; e < this.overEvent.length; e++) {
var t = this.overEvent[e];
t.emit([ t.customEventData ]);
}
};
t.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var e = 0; e < this.countOverEvent.length; e++) {
var t = this.countOverEvent[e];
t.emit([ t.customEventData ]);
}
};
r([ d(cc.SpriteAtlas) ], t.prototype, "spriteAtlas", void 0);
r([ d ], t.prototype, "speed", void 0);
r([ d ], t.prototype, "isDealy", void 0);
r([ d({
visible: function() {
return this.isDealy;
}
}) ], t.prototype, "dealyTime", void 0);
r([ d({
type: cc.Enum(a)
}) ], t.prototype, "playType", void 0);
r([ d ], t.prototype, "beginFrame", void 0);
r([ d ], t.prototype, "endFrame", void 0);
r([ d ], t.prototype, "isAwakeRunShow", void 0);
r([ d({
visible: function() {
return this.isAwakeRunShow;
}
}) ], t.prototype, "beginShowFrame", void 0);
r([ d ], t.prototype, "isStopRunShow", void 0);
r([ d({
visible: function() {
return this.isStopRunShow;
}
}) ], t.prototype, "endShowFrame", void 0);
r([ d ], t.prototype, "isLoadPlay", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.Counts;
}
}) ], t.prototype, "counts_playerState", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], t.prototype, "playeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "minPlayeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "maxPlayeCount", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.PingpangCounts;
}
}) ], t.prototype, "counts_playerState_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], t.prototype, "playeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "minPlayeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "maxPlayeCount_pingpang", void 0);
r([ d({
type: cc.Enum(c)
}) ], t.prototype, "playPatter", void 0);
r([ d({
type: cc.Integer,
visible: function() {
return this.playPatter == c.Setting;
}
}) ], t.prototype, "settingFrame", void 0);
r([ d ], t.prototype, "isUseOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], t.prototype, "overEvent", void 0);
r([ d ], t.prototype, "isUseCountOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], t.prototype, "countOverEvent", void 0);
return r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil"
} ],
TUVPlayState: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "03364yl5etApo3kFIG+6D7T", "TUVPlayState");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/UVAnimation/TUVPlay"), s = e("./BaseAnimState"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.anim = null;
return t;
}
t.prototype.init = function() {
if (!this.anim) {
this.anim = this.node.getComponentInChildren(a.default);
this.rewardNode = this.anim.node;
}
};
t.prototype.show = function(t) {
var n = this;
e.prototype.show.call(this, t);
this.init();
t.rewardParent && this.scheduleOnce(function() {
var e = App.utils.localConvertWorldPointAR(n.rewardNode), o = App.utils.worldConvertLocalPointAR(t.rewardParent, e);
n.rewardNode.setParent(t.rewardParent);
t.rewardParentOrginScale || 0 == t.rewardParentOrginScale ? n.rewardNode.scale = t.rewardParentOrginScale : n.rewardNode.scale = 1;
n.rewardNode.position = cc.v3(o);
}, .32);
this.anim.playRun();
this.node.active = !0;
};
t.prototype.hide = function() {
this.init();
if (this.rewardNode && this.rewardNode.parent != this.node) {
this.rewardNode.setParent(this.node);
this.rewardNode.scale = 1;
this.rewardNode.position = cc.Vec3.ZERO;
}
this.node.active = !1;
};
return r([ l ], t);
}(s.default));
n.default = u;
cc._RF.pop();
}, {
"../../../scripts/common/UVAnimation/TUVPlay": "TUVPlay",
"./BaseAnimState": "BaseAnimState"
} ],
TUVPlay: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "38eafmyLUVKwp2S4L4jmPJ7", "TUVPlay");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PlayPattern = n.PlayState = n.PlayType = void 0;
var a, s, c, l = e("../../common/utils/RandomUtil"), u = cc._decorator, p = u.ccclass, d = u.property;
(function(e) {
e[e.Once = 0] = "Once";
e[e.Loop = 1] = "Loop";
e[e.Pingpang = 2] = "Pingpang";
e[e.Counts = 3] = "Counts";
e[e.PingpangCounts = 4] = "PingpangCounts";
})(a = n.PlayType || (n.PlayType = {}));
(function(e) {
e[e.Fixed = 0] = "Fixed";
e[e.Random = 1] = "Random";
})(s = n.PlayState || (n.PlayState = {}));
(function(e) {
e[e.Order = 0] = "Order";
e[e.Setting = 1] = "Setting";
})(c = n.PlayPattern || (n.PlayPattern = {}));
var h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hor_ver = new cc.Vec2(1, 1);
t.speed = .2;
t.isDealy = !1;
t.dealyTime = 0;
t.playType = a.Loop;
t.beginFrame = 0;
t.endFrame = 0;
t.isAwakeRunShow = !1;
t.beginShowFrame = 0;
t.isStopRunShow = !1;
t.endShowFrame = 0;
t.isLoadPlay = !0;
t.counts_playerState = s.Fixed;
t.playeCount = 0;
t.minPlayeCount = 0;
t.maxPlayeCount = 0;
t.counts_playerState_pingpang = s.Fixed;
t.playeCount_pingpang = 0;
t.minPlayeCount_pingpang = 0;
t.maxPlayeCount_pingpang = 0;
t.playPatter = c.Order;
t.settingFrame = [];
t.isUseOverEvent = !1;
t.overEvent = [];
t.isUseCountOverEvent = !1;
t.countOverEvent = [];
t.nowCount = 0;
t.frame = 0;
t.inc = 1;
t.time = 0;
t.lastTime = 0;
t.isStop = !1;
t.isPlay = !1;
t.hor_ver_unit = new cc.Vec2(0, 0);
t.pingpangFlage = 0;
return t;
}
t.prototype.onLoad = function() {
this.isPlay = !1;
this.maxCount = this.hor_ver.x * this.hor_ver.y;
this.dataArray = new Array(this.maxCount);
this.rc = this.node.getComponent(cc.RenderComponent);
this.sprite = this.node.getComponent(cc.Sprite);
this.hor_ver_unit.x = 1 / this.hor_ver.x;
this.hor_ver_unit.y = 1 / this.hor_ver.y;
for (var e = 0; e < this.hor_ver.y; e++) for (var t = 0; t < this.hor_ver.x; t++) {
var n = e * this.hor_ver.x + t;
this.dataArray[n] = new cc.Vec2(t * this.hor_ver_unit.x, (e + 1) * this.hor_ver_unit.y);
}
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.start = function() {
this.isLoadPlay && this.playRun();
};
t.prototype.setStop = function(e) {
this.isPlay = !1;
this.rc && this.setAnimationgUvRect(e);
};
t.prototype.setOrginStop = function() {
this.isPlay = !1;
this.isAwakeRunShow ? this.setAnimationgUvRect(this.beginShowFrame) : this.setAnimationgUvRect(this.beginFrame);
};
t.prototype.playRun = function() {
if (null != this.sprite) {
this.isPlay = !1;
this.isStop = !1;
this.inc = 1;
this.lastTime = this.time;
this.frame = this.beginFrame;
this.pingpangFlage = 0;
this.playType == a.Counts ? this.counts_playerState == s.Fixed ? this.nowCount = this.playeCount : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount, this.maxPlayeCount) : this.playType == a.PingpangCounts && (this.counts_playerState_pingpang == s.Fixed ? this.nowCount = this.playeCount_pingpang : this.nowCount = l.RandomUtil.randomRange(this.minPlayeCount_pingpang, this.maxPlayeCount_pingpang));
this.isAwakeRunShow && this.setAnimationgUvRect(this.beginShowFrame);
this.isDealy && (this.lastTime = this.time + this.getDealyTime());
this.isPlay = !0;
}
};
t.prototype.update = function(e) {
if (this.isPlay) {
this.time = this.time + e;
switch (this.playType) {
case a.Once:
this.runOnce();
break;

case a.Loop:
this.runLoop();
break;

case a.Pingpang:
this.runPingpang();
break;

case a.Counts:
this.runCounts();
break;

case a.PingpangCounts:
this.runPingpangCounts();
}
}
};
t.prototype.runPingpangCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.allEvent();
} else this.countEvent();
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runCounts = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.nowCount--;
if (0 == this.nowCount) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
} else {
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.frame = this.beginFrame;
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
this.countEvent();
}
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.runPingpang = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame == this.beginFrame && .5 == this.pingpangFlage) {
this.pingpangFlage = 0;
this.inc = 1;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.countEvent();
}
if (this.frame == this.endFrame) {
this.pingpangFlage = .5;
this.inc = -1;
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runLoop = function() {
if (this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.countEvent();
this.frame = this.beginFrame;
if (this.isStopRunShow) {
this.setAnimationgUvRect(this.endShowFrame);
return;
}
}
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
};
t.prototype.runOnce = function() {
if (!this.isStop && this.time > this.lastTime + this.speed) {
this.lastTime = this.time;
if (this.frame > this.endFrame) {
this.isStop = !0;
this.isStopRunShow && this.setAnimationgUvRect(this.endShowFrame);
this.allEvent();
this.countEvent();
} else {
this.setAnimationgUvRect(this.frame);
this.frame = this.frame + this.inc;
}
}
};
t.prototype.setAnimationgUvRect = function(e) {
this.playPatter == c.Order ? this.rc.getMaterial(0).setProperty("uv_offset", this.dataArray[e]) : this.rc.getMaterial(0).setProperty("uv_offset", this.dataArray[this.settingFrame[e]]);
};
t.prototype.getDealyTime = function() {
return this.dealyTime;
};
t.prototype.allEvent = function() {
if (null != this.overEvent) for (var e = 0; e < this.overEvent.length; e++) {
var t = this.overEvent[e];
t.emit([ t.customEventData ]);
}
};
t.prototype.countEvent = function() {
if (null != this.countOverEvent) for (var e = 0; e < this.countOverEvent.length; e++) {
var t = this.countOverEvent[e];
t.emit([ t.customEventData ]);
}
};
r([ d(cc.Vec2) ], t.prototype, "hor_ver", void 0);
r([ d ], t.prototype, "speed", void 0);
r([ d ], t.prototype, "isDealy", void 0);
r([ d({
visible: function() {
return this.isDealy;
}
}) ], t.prototype, "dealyTime", void 0);
r([ d({
type: cc.Enum(a)
}) ], t.prototype, "playType", void 0);
r([ d ], t.prototype, "beginFrame", void 0);
r([ d ], t.prototype, "endFrame", void 0);
r([ d ], t.prototype, "isAwakeRunShow", void 0);
r([ d({
visible: function() {
return this.isAwakeRunShow;
}
}) ], t.prototype, "beginShowFrame", void 0);
r([ d ], t.prototype, "isStopRunShow", void 0);
r([ d({
visible: function() {
return this.isStopRunShow;
}
}) ], t.prototype, "endShowFrame", void 0);
r([ d ], t.prototype, "isLoadPlay", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.Counts;
}
}) ], t.prototype, "counts_playerState", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], t.prototype, "playeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "minPlayeCount", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "maxPlayeCount", void 0);
r([ d({
type: cc.Enum(s),
visible: function() {
return this.playType == a.PingpangCounts;
}
}) ], t.prototype, "counts_playerState_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Fixed;
}
}) ], t.prototype, "playeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "minPlayeCount_pingpang", void 0);
r([ d({
visible: function() {
return this.playType == a.Counts && this.counts_playerState == s.Random;
}
}) ], t.prototype, "maxPlayeCount_pingpang", void 0);
r([ d({
type: cc.Enum(c)
}) ], t.prototype, "playPatter", void 0);
r([ d({
type: cc.Integer,
visible: function() {
return this.playPatter == c.Setting;
}
}) ], t.prototype, "settingFrame", void 0);
r([ d ], t.prototype, "isUseOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "结束回调",
visible: function() {
return this.isUseOverEvent;
}
}) ], t.prototype, "overEvent", void 0);
r([ d ], t.prototype, "isUseCountOverEvent", void 0);
r([ d({
type: cc.Component.EventHandler,
tooltip: "次数播放结束回调",
visible: function() {
return this.isUseCountOverEvent;
}
}) ], t.prototype, "countOverEvent", void 0);
return r([ p ], t);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../common/utils/RandomUtil": "RandomUtil"
} ],
TaskModel_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e32bbv8kyBJh6iYqrpBvXvC", "TaskModel_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/utils/RandomUtil"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_ani = null;
t.tween_Ani = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.Init = function() {
this.ClearTween();
this.node_ani.scale = 0;
this.tween_Ani = cc.tween(this.node_ani).delay(.5).to(.5, {
scale: 1
}, cc.easeBackOut()).start();
};
t.prototype.PlayBeGongji = function(e) {
this.ClearTween();
this.tween_Ani = e ? cc.tween(this.node_ani).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(1, 1, 0)
}).to(.05, {
position: cc.v3(-1, -1, 0)
}).to(.05, {
position: cc.v3(0, 0, 0)
}).start() : cc.tween(this.node_ani).to(.1, {
position: cc.v3(0, 20, 0),
angle: a.RandomUtil.randomFRange(-5, 5)
}).to(.05, {
position: cc.v3(0, 18, 0),
angle: a.RandomUtil.randomFRange(-3, 3)
}).to(.05, {
position: cc.v3(0, 16, 0),
angle: a.RandomUtil.randomFRange(-3, 3)
}).to(.1, {
position: cc.v3(2, 5, 0),
angle: a.RandomUtil.randomFRange(-3, 3)
}).to(.05, {
position: cc.v3(-2, 2, 0),
angle: a.RandomUtil.randomFRange(-1, 1)
}).to(.05, {
position: cc.v3(2, 2, 0),
angle: a.RandomUtil.randomFRange(-1, 1)
}).to(.05, {
position: cc.v3(-2, -2, 0),
angle: 0
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(2, 2, 0)
}).to(.05, {
position: cc.v3(-2, -2, 0)
}).to(.05, {
position: cc.v3(2, -2, 0)
}).to(.05, {
position: cc.v3(-2, 2, 0)
}).to(.05, {
position: cc.v3(1, 1, 0)
}).to(.05, {
position: cc.v3(-1, -1, 0)
}).to(.05, {
position: cc.v3(0, 0, 0),
angle: 0
}).start();
};
t.prototype.ClearTween = function() {
this.tween_Ani && this.tween_Ani.stop();
};
r([ l(cc.Node) ], t.prototype, "node_ani", void 0);
return r([ c ], t);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/RandomUtil": "RandomUtil"
} ],
TaskService_A: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "050f7KRKk5PtrFX5h7sEfGf", "TaskService_A");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/UVAnimation/Animation_Nodes"), s = e("../../../../scripts/common/utils/CmmUtils"), c = e("../../../../scripts/common/utils/RandomUtil"), l = e("../GameMgr"), u = e("../Model/TaskModel_A"), p = cc._decorator, d = p.ccclass, h = p.property, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.node_Scale = null;
t.node_TaskModels = [];
t.node_TaskParent = null;
t.node_Effect_Zhidan = null;
t.node_Effect_baozha = null;
t.ani_Nodes_zidan = null;
t.ani_Nodes_baozha = null;
t.node_Progress = null;
t.progressBar = null;
t.label_Progress = null;
t.curTaskModel = null;
t.maxLive = 100;
t.curLive = 100;
t.tween_Main = null;
t.tween_Zhezhao = null;
t.tween_Progress = null;
t.tween_ShowProgress = null;
t.color = cc.color(255, 0, 0, 255);
t.configScale_Scale = [ 1, .36 ];
t.configPos_TaskParent = [ cc.v3(0, 460, 0), cc.v3(-360, 0, 0) ];
t.configPos_Lay = [ cc.v3(0, 139, 0), cc.v3(150, 0, 0) ];
t.configScale_Lay = [ 1, 1.5 ];
t.configPos_Lay_out = [ cc.v3(0, 80, 0), cc.v3(20, 0, 0) ];
t.curIsShow = !1;
return t;
}
t.prototype.start = function() {};
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.SetShowState_Normal = function() {};
t.prototype.Init = function(e, t, n) {
var o = this;
this.ClearTween();
this.node_Main.scale = 1;
this.node_Zhezhao.active = !0;
this.node_Zhezhao.opacity = 100;
this.node_TaskParent.destroyAllChildren();
var i = cc.instantiate(this.node_TaskModels[e]);
i.parent = this.node_TaskParent;
i.position = cc.v3(0, 0, 0);
this.curTaskModel = i.getComponent(u.default);
this.curTaskModel.Init();
this.color = cc.color(255, 0, 0, 255);
this.curLive = t;
this.maxLive = t;
this.RefreshProgress();
this.node_Progress.opacity = 0;
var r = this.configPos_Lay[1];
this.tween_ShowProgress = cc.tween(this.node_Progress).delay(1.5).to(.5, {
opacity: 255,
position: r
}).delay(.6).call(function() {
n && n();
}).start();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).delay(2).to(.5, {
opacity: 0
}).call(function() {
o.node_Zhezhao.active = !1;
}).start();
};
t.prototype.HideShow = function() {
this.ClearTween();
this.tween_Main = cc.tween(this.node_Main).to(.35, {
scale: 0
}).start();
};
t.prototype.SetShanghai = function(e) {
var t = this, n = 1;
if (e) {
n = c.RandomUtil.randomRange(1, 3);
this.ani_Nodes_zidan.node.active = !0;
} else {
n = c.RandomUtil.randomRange(3, 6);
this.ani_Nodes_baozha.node.active = !0;
}
this.curTaskModel.PlayBeGongji(e);
this.ClearTween();
this.label_Progress.string = s.CmmUtils.NumberToHallString(100 * this.progressBar.progress, !0) + "%";
this.curLive = this.curLive - n;
if (this.curLive <= 0) {
this.curLive = 0;
dispatch(l.MyGameEvent_A.LevelFinish);
}
var o = this.curLive / this.maxLive, i = 100 * o;
this.tween_Progress = cc.tween(this.progressBar).delay(.2).call(function() {
t.label_Progress.string = s.CmmUtils.NumberToHallString(i, !0) + "%";
}).to(.2, {
progress: o
}).call(function() {
t.RefreshProgress();
}).start();
};
t.prototype.RefreshProgress = function() {
var e = this.curLive / this.maxLive;
this.progressBar.progress = e;
var t = 100 * e;
this.label_Progress.string = s.CmmUtils.NumberToHallString(t, !0) + "%";
this.color = cc.color(255 - Math.floor(100 - t), 0, 0, 255);
this.label_Progress.node.color = this.color;
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Zhezhao && this.tween_Zhezhao.stop();
this.tween_Progress && this.tween_Progress.stop();
this.tween_ShowProgress && this.tween_ShowProgress.stop();
};
r([ h(cc.Node) ], t.prototype, "node_Main", void 0);
r([ h(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ h(cc.Node) ], t.prototype, "node_Scale", void 0);
r([ h(cc.Prefab) ], t.prototype, "node_TaskModels", void 0);
r([ h(cc.Node) ], t.prototype, "node_TaskParent", void 0);
r([ h(cc.Node) ], t.prototype, "node_Effect_Zhidan", void 0);
r([ h(cc.Node) ], t.prototype, "node_Effect_baozha", void 0);
r([ h(a.default) ], t.prototype, "ani_Nodes_zidan", void 0);
r([ h(a.default) ], t.prototype, "ani_Nodes_baozha", void 0);
r([ h(cc.Node) ], t.prototype, "node_Progress", void 0);
r([ h(cc.ProgressBar) ], t.prototype, "progressBar", void 0);
r([ h(cc.Label) ], t.prototype, "label_Progress", void 0);
return r([ d ], t);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/Animation_Nodes": "Animation_Nodes",
"../../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../../scripts/common/utils/RandomUtil": "RandomUtil",
"../GameMgr": "GameMgr",
"../Model/TaskModel_A": "TaskModel_A"
} ],
TestJsonMessage: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "8e510IGgi1Jh6ME4AzoUcyZ", "TestJsonMessage");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TestJsonMessage = void 0;
var r = e("../../common/net/CmdDefines"), a = e("../../framework/core/net/message/JsonMessage"), s = e("./LobbyCmd"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mainCmd = r.MainCmd.CMD_LOBBY;
t.subCmd = s.SUB_CMD_LOBBY.SERVER_GAME_LOGIN;
return t;
}
Object.defineProperty(t.prototype, "cmd", {
get: function() {
return String(this.mainCmd) + String(this.subCmd);
},
enumerable: !1,
configurable: !0
});
return t;
}(a.JsonMessage);
n.TestJsonMessage = c;
cc._RF.pop();
}, {
"../../common/net/CmdDefines": "CmdDefines",
"../../framework/core/net/message/JsonMessage": "JsonMessage",
"./LobbyCmd": "LobbyCmd"
} ],
TipIsGotoTC: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "509fcLukidHRInZ+5IWYC47", "TipIsGotoTC");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.callback_Over = null;
t.tween_Main = null;
t.tween_Zhezhao = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.OpenShow = function(e) {
this.ClearTween();
this.callback_Over = e;
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Main.scale = 0;
this.node_Zhezhao.opacity = 0;
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 150
}).start();
this.tween_Main = cc.tween(this.node_Main).delay(.3).to(.3, {
scale: 1
}, cc.easeBackOut()).start();
};
t.prototype.ButtonClick_Goto = function() {
if (this.callback_Over) {
this.callback_Over();
this.callback_Over = null;
}
this.CloseShow();
};
t.prototype.ButtonClick_Skip = function() {
this.ClearTween();
this.CloseShow();
};
t.prototype.CloseShow = function() {
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Zhezhao && this.tween_Zhezhao.stop();
};
r([ c(cc.Node) ], t.prototype, "node_Main", void 0);
r([ c(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
Tips: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "71bdbJWugtIoaZ6duSr5kIe", "Tips");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../config/Config"), a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._content = null;
return t;
}
t.prototype.init = function(e, t) {
this._content = cc.find("content", this.node);
this._content && (this._content.getComponent(cc.Label).string = e);
this.runTimeOut(t);
};
t.prototype.runTimeOut = function(e) {
var t = this;
cc.tween(this._content).delay(e).call(function() {
App.tips.finishShowItem(t.node);
}).start();
};
t.prototype.fadeOut = function() {
var e = this;
this.node.stopAllActions();
this.node.runAction(cc.sequence(cc.spawn(cc.moveBy(.5, 0, 50).easing(cc.easeExponentialOut()), cc.fadeOut(1)), cc.callFunc(function() {
e.node.removeFromParent();
})));
};
t.prototype.fadeIn = function() {
this.node.stopAllActions();
this.node.opacity = 0;
var e = this.node.position;
this.node.runAction(cc.spawn(cc.fadeIn(.5), cc.moveTo(.5, e.x, e.y + 50).easing(cc.easeExponentialOut())));
};
return t;
}(cc.Component), s = function() {
function e() {
this.module = null;
this.isResident = !0;
this._queue = [];
this.MAX_NUM = 3;
this.FADE_TIME = 2;
this._id = 0;
}
Object.defineProperty(e.prototype, "prefab", {
get: function() {
return App.uiManager.getScenePrefab("Tips");
},
enumerable: !1,
configurable: !0
});
e.prototype._show = function(e) {
var t = cc.instantiate(this.prefab);
if (t) {
var n = t.addComponent(a);
n.init(e, this.FADE_TIME);
n.fadeIn();
t.userData = this._id++;
t.name = "Tips" + t.userData;
App.uiManager.addView(t, r.ViewZOrder.Tips);
for (var o = this._queue.length, i = 0; i < o; i++) {
(s = this._queue[i]).opacity = 255;
s.stopAllActions();
s.runAction(cc.moveTo(.5, 0, 50 + (o - i) * (t.height + 3)).easing(cc.easeExponentialOut()));
}
this._queue.push(t);
if (this._queue.length > this.MAX_NUM) {
var s;
(s = this._queue.shift()).getComponent(a).fadeOut();
}
}
};
e.prototype.show = function(e) {
if (null != e && null != e && "" != e) {
Log.d("Toast.show msg=%s", e);
this._show(e);
}
};
e.prototype.testDelayShow = function(e, t) {
if (null != e && null != e && "" != e) {
Log.d("Toast.show msg=%s", e);
this._show(e);
setTimeout(function() {
t();
}, 2e3);
}
};
e.prototype.finishShowItem = function(e) {
for (var t = 0; t < this._queue.length; t++) if (this._queue[t].userData == e.userData) {
this._queue.splice(t, 1);
e.getComponent(a).fadeOut();
break;
}
};
e.prototype.clear = function() {
for (var e = null; e = this._queue.pop(); ) {
e.stopAllActions();
e.removeFromParent();
}
};
e.module = "【Tips】";
return e;
}();
n.default = s;
cc._RF.pop();
}, {
"../config/Config": "Config"
} ],
UIContainer: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d39cadhCYlFI5biU3GHNSKG", "UIContainer");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isDiverse = !1;
t.prefab = null;
t.prefabs = [];
t.pools = new Map();
t.prefabPool = [];
return t;
}
t.prototype.initPrefabsNode = function(e, t) {
this.node.addChild(e);
e.active = !1;
this.prefabs[t] = e;
};
t.prototype.initPrefabNode = function(e) {
this.node.addChild(e);
e.active = !1;
this.prefab = e;
};
t.prototype.preInstance = function(e) {
if (this.isDiverse) for (var t = 0; t < this.prefabs.length; t++) for (var n = t, o = 0; o < e; o++) {
var i = {}, r = cc.instantiate(this.prefabs[n]);
i.node = r;
i.type = n;
this.pushNodeToPool(i);
}
};
t.prototype.initDatas = function(e, t, n, o, i) {
this.HideFunc = i;
this.Func = n;
this.list = e;
if (this.Nodes) for (var r = 0; r < this.Nodes.length; r++) this.pushNodeToPool(this.Nodes[r]);
this.Nodes = [];
for (var a = 0; a < this.prefabs.length; a++) (s = this.prefabs[a]).active = !1;
for (r = 0; r < e.length; r++) {
var s = this.prefabs[t[r]], c = this.getNodeByPool(t[r], s);
this.node.addChild(c);
c.active = !0;
var l = {};
l.node = c;
l.type = t[r];
this.Nodes.push(l);
}
for (r = 0; r < this.Nodes.length; r++) this.refreshNodes(this.Nodes[r].node, {
data: e[r],
index: r
});
o && o();
};
t.prototype.initData = function(e, t, n, o) {
this.Func = t;
this.list = e;
if (this.Nodes) for (var i = 0; i < this.Nodes.length; i++) if (o) {
this.Nodes[i].active = !1;
this.prefabPool.push(this.Nodes[i]);
} else this.Nodes[i].destroy();
this.Nodes = [];
this.prefab.active = !1;
for (i = 0; i < e.length; i++) {
var r = null;
if (this.prefabPool.length > 0) r = this.prefabPool.pop(); else {
r = cc.instantiate(this.prefab);
this.node.addChild(r);
}
this.Nodes.push(r);
}
for (i = 0; i < this.Nodes.length; i++) this.refreshNodes(this.Nodes[i], {
data: e[i],
index: i
});
n && n();
};
t.prototype.refreshNodes = function(e, t) {
e.active = !0;
this.Func && this.Func(e, t);
};
t.prototype.refreshData = function(e) {
this.list = e;
if (this.isDiverse) for (var t = 0; t < this.Nodes.length; t++) this.refreshNodes(this.Nodes[t].node, {
data: this.list[t],
index: t
}); else for (t = 0; t < this.Nodes.length; t++) this.refreshNodes(this.Nodes[t], {
data: this.list[t],
index: t
});
};
t.prototype.refresh = function() {
if (this.isDiverse) for (var e = 0; e < this.Nodes.length; e++) this.refreshNodes(this.Nodes[e].node, {
data: this.list[e],
index: e
}); else for (e = 0; e < this.Nodes.length; e++) this.refreshNodes(this.Nodes[e], {
data: this.list[e],
index: e
});
};
t.prototype.getNodes = function() {
return this.Nodes;
};
t.prototype.getNodeByPool = function(e, t) {
var n = null;
if (this.pools.has(e)) n = this.pools.get(e); else {
n = new cc.NodePool(e.toString());
this.pools.set(e, n);
}
return n.size() > 0 ? n.get() : cc.instantiate(t);
};
t.prototype.pushNodeToPool = function(e) {
var t = null;
if (this.pools.has(e.type)) t = this.pools.get(e.type); else {
t = new cc.NodePool(e.type.toString());
this.pools.set(e.type, t);
}
e.node.active = !1;
cc.Tween.stopAllByTarget(e.node);
t.put(e.node);
this.HideFunc && this.HideFunc(e.node);
};
r([ c(cc.Boolean) ], t.prototype, "isDiverse", void 0);
r([ c({
type: cc.Node,
visible: function() {
return !this.isDiverse;
}
}) ], t.prototype, "prefab", void 0);
r([ c({
type: cc.Node,
visible: function() {
return this.isDiverse;
}
}) ], t.prototype, "prefabs", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
UILoading: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e9477pH+RpF+LErGtlVrhBu", "UILoading");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../config/Config"), i = function() {
function e() {
this.module = null;
this.isResident = !0;
this.node = null;
this.delay = null;
this.content = null;
this.text = null;
this._uiName = null;
this._timerId = -1;
}
e.prototype.show = function(e, t, n) {
var i = this;
void 0 === n && (n = o.Config.HTTP_TIME_OUT);
this.delaySureTimer = setTimeout(function() {
i.delay = o.Config.LOAD_VIEW_DELAY;
i._show(n, t);
}, e);
};
e.prototype._show = function(e, t) {
this.node || (this.node = cc.instantiate(App.uiManager.getScenePrefab("UILoading")));
this.node.removeFromParent();
App.uiManager.addView(this.node, o.ViewZOrder.UILoading);
this.node.position = cc.Vec3.ZERO;
this.content = cc.find("content", this.node);
cc.Tween.stopAllByTarget(this.content);
this.text = cc.find("text", this.content).getComponent(cc.Label);
this.text.string = "0%";
this.content.opacity = 0;
this.delay > 0 && cc.tween(this.content).delay(this.delay).set({
opacity: 255
}).start();
this.startTimeOutTimer(e, t);
this.node.active = !0;
};
e.prototype.startTimeOutTimer = function(e, t) {
var n = this;
this.stopTimeOutTimer();
e && (this._timerId = setTimeout(function() {
t && t();
n.hide();
}, 1e3 * e));
};
e.prototype.stopTimeOutTimer = function() {
clearTimeout(this._timerId);
clearTimeout(this.delaySureTimer);
this._timerId = -1;
this.delaySureTimer = -1;
};
e.prototype.hide = function() {
this.stopTimeOutTimer();
if (this.node) {
cc.Tween.stopAllByTarget(this.content);
this.node.active = !1;
}
};
e.prototype.updateProgress = function(e) {
if (this.text) {
if (null == e || null == e || Number.isNaN(e)) {
this.hide();
return;
}
e >= 0 && e <= 100 && (this.text.string = e + "%");
}
};
e.module = "【UILoading】";
return e;
}();
n.default = i;
cc._RF.pop();
}, {
"../config/Config": "Config"
} ],
UIManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1160cq52hlJX6pF767NAsGG", "UIManager");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UIManager = n.ViewDynamicLoadData = void 0;
var o = e("../../../common/config/Config"), i = e("../../../common/event/CommonEvent"), r = e("../../../common/net/CommonSender"), a = e("../../../common/utils/UIUtils"), s = e("../../../sdk/SdkManager"), c = e("../../defines/Enums"), l = e("../../defines/Macros"), u = e("../asset/Resource"), p = "DYNAMIC_LOAD_GARBAGE", d = "DYNAMIC_LOAD_RETAIN_MEMORY", h = function() {
function e(e) {
void 0 === e && (e = null);
this.local = new Map();
this.remote = new Map();
this.name = e;
}
e.prototype.addLocal = function(e, t) {
void 0 === t && (t = null);
if (e && e.url) {
this.name == p && Log.e("找不到资源持有者: " + e.url);
if (!this.local.has(e.url)) {
App.asset.retainAsset(e);
this.local.set(e.url, e);
}
}
};
e.prototype.addRemote = function(e, t) {
void 0 === t && (t = null);
if (e && e.data && !this.remote.has(e.url)) {
this.name == p && Log.e("找不到资源持有者 : " + e.url);
App.cache.remoteCaches.retainAsset(e);
this.remote.set(e.url, e);
}
};
e.prototype.clear = function() {
if (this.name == p) {
(this.local.size > 0 || this.remote.size > 0) && Log.e("当前未能释放资源如下:");
if (this.local && this.local.size > 0) {
Log.e("-----------local-----------");
this.local && this.local.forEach(function(e) {
Log.e(e.url);
});
}
if (this.remote && this.remote.size > 0) {
Log.e("-----------remote-----------");
this.remote && this.remote.forEach(function(e) {
Log.e(e.url);
});
}
} else {
if (this.local) {
this.local.forEach(function(e) {
App.asset.releaseAsset(e);
});
this.local.clear();
}
if (this.remote) {
this.remote.forEach(function(e) {
App.cache.remoteCaches.releaseAsset(e);
});
this.remote.clear();
}
}
};
return e;
}();
n.ViewDynamicLoadData = h;
var f = function() {
function e() {
this.isLoaded = !1;
this.status = c.ViewStatus.WAITTING_NONE;
this.view = null;
this.finishCb = [];
this.getViewCb = [];
this.isPreload = !1;
this.isPrefab = !0;
this.info = null;
this.viewType = null;
this.bundle = null;
this.loadData = new h();
this.node = null;
}
e.prototype.doGet = function(e) {
for (var t = 0; t < this.getViewCb.length; t++) {
var n = this.getViewCb[t];
n && n(e);
}
this.getViewCb = [];
};
e.prototype.doFinish = function(e) {
for (var t = 0; t < this.finishCb.length; t++) {
var n = this.finishCb[t];
n && n(e);
}
this.finishCb = [];
};
e.prototype.doCallback = function(e, t, n) {
this.doFinish(e, t, n);
this.doGet(e, t, n);
};
return e;
}(), _ = function() {
function e() {
this.isResident = !0;
this.module = null;
this._viewDatas = new Map();
this.garbage = new h(p);
this.retainMemory = new h(d);
this._canvas = null;
this._mainController = null;
this._prefabs = null;
}
e.prototype.getViewData = function(e) {
var t = this.getClassName(e);
if (t) return this._viewDatas.has(t) ? this._viewDatas.get(t) : void 0;
};
e.prototype.getViewType = function(e) {
if (!cc.isValid(e)) return null;
var t = e.className;
if (!t) return null;
var n = this._viewDatas.get(t);
return n ? n.viewType : null;
};
e.prototype.getClassName = function(e) {
if (e) return "string" == typeof e ? e : cc.js.getClassName(e);
};
e.prototype.defaultOpenOption = function(e) {
var t = {
bundle: l.Macro.BUNDLE_RESOURCES,
delay: e.delay,
name: e.name,
zIndex: 0,
preload: !1,
type: e.type,
args: e.args,
isRoot: e.isRoot
};
null != e.bundle && (t.bundle = e.bundle);
null != e.zIndex && (t.zIndex = e.zIndex);
null != e.preload && (t.preload = e.preload);
return t;
};
e.prototype.preload = function(e, t) {
return this.open({
type: e,
preload: !0,
bundle: t
});
};
e.prototype.parsePrefabUrl = function(e) {
return "@" == e[0] ? {
isPrefab: !1,
url: e.substr(1)
} : {
isPrefab: !0,
url: e
};
};
e.prototype.open = function(e) {
e.notshowwebloading || dispatch(i.SimpleEvent.Html5_view_loading, !0);
var t = this.defaultOpenOption(e);
return this._open(t);
};
e.prototype._open = function(e) {
var t = this;
return new Promise(function(n) {
if (e.type) {
var o = cc.js.getClassName(e.type);
if (t.getUIRoot(e.zIndex)) {
var r = t.getViewData(e.type);
if (r) {
r.isPreload = e.preload;
if (r.isLoaded) {
r.status = c.ViewStatus.WAITTING_NONE;
if (!e.preload && r.view && cc.isValid(r.node)) {
r.node.zIndex = e.zIndex;
r.node.parent || t.addView(r.node, e.zIndex);
r.view.show(e.args);
}
n(r.view);
return;
}
r.status = c.ViewStatus.WAITTING_NONE;
e.preload || e.isRoot;
r.finishCb.push(n);
} else {
(r = new f()).loadData.name = o;
var a = e.type.getPrefabUrl(), s = t.parsePrefabUrl(a);
r.isPreload = e.preload;
r.isPrefab = s.isPrefab;
r.viewType = e.type;
r.bundle = e.bundle;
t._viewDatas.set(o, r);
if (s.isPrefab) {
var l = null;
if (!e.preload) {
e.isRoot;
var p = 0;
l = function(t, n) {
var o = t / n;
p < o && (p = o);
if (e.isRoot) {
dispatch(i.SimpleEvent.load_native_game_progress, p);
App.loading.progress(p);
}
};
}
t.loadPrefab(e.bundle, a, l).then(function(o) {
r.info = new u.Resource.Info();
r.info.url = a;
r.info.type = cc.Prefab;
r.info.data = o;
r.info.bundle = e.bundle;
App.asset.retainAsset(r.info);
t.createNode(r, n, e);
App.uiLoading.hide();
if (e.isRoot) {
dispatch(i.SimpleEvent.load_native_game_complete);
App.loading.hide();
}
}).catch(function(i) {
r.isLoaded = !0;
Log.e(i);
t.close(e.type);
r.doCallback(null, o, "打开界面异常");
n(null);
var a = "";
e.name && (a = e.name);
App.tips.show("加载界面" + a + "失败，请重试");
App.uiLoading.hide();
});
} else {
r.info = new u.Resource.Info();
r.info.url = s.url;
r.info.type = cc.Prefab;
r.info.data = t.getScenePrefab(s.url);
r.info.bundle = e.bundle;
t.createNode(r, n, e);
}
}
} else n(null);
} else n(null);
});
};
e.prototype._addComponent = function(e, t, n) {
if (e) {
var o = this.getClassName(t.viewType), i = e.getComponent(t.viewType);
if (!i && !(i = e.addComponent(t.viewType))) return null;
i.className = o;
i.bundle = n.bundle;
t.view = i;
i.args = n.args;
t.isPreload || this.addView(e, n.zIndex);
return i;
}
return null;
};
e.prototype.createNode = function(e, t, n) {
e.isLoaded = !0;
var o = this.getClassName(e.viewType);
if (e.status != c.ViewStatus.WAITTING_CLOSE) {
var i = cc.instantiate(e.info.data);
e.node = i;
var r = this._addComponent(i, e, n);
if (r) if (e.status == c.ViewStatus.WATITING_HIDE) {
r.hide();
t(r);
e.doCallback(r, o, "加载完成，但加载过程中被隐藏");
} else {
e.isPreload || r.show(n.args);
t(r);
e.doCallback(r, o, "加载完成，回调之前加载中的界面");
} else t(null);
} else {
t(null);
e.doCallback(null, o, "获取界内已经关闭");
}
};
e.prototype.loadPrefab = function(e, t, n) {
return new Promise(function(o, i) {
App.asset.load(e, t, cc.Prefab, n, function(e) {
e && e.data && e.data instanceof cc.Prefab ? o(e.data) : i("加载prefab : " + t + " 失败");
});
});
};
e.prototype.getUIRoot = function(e) {
if (!this.uiRoot) {
this.uiRoot = new Map();
this.uiRoot.set(o.ViewZOrder.Zero, cc.find("gameRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Horn, cc.find("hornRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UI, cc.find("uiRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Tips, cc.find("tipsRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Alert, cc.find("alertRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UP, cc.find("upRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.Loading, cc.find("loadingRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.UILoading, cc.find("uiloadingRoot", this.canvas));
this.uiRoot.set(o.ViewZOrder.SpGameLoading0, cc.find("spGameLoading0Root", this.canvas));
this.uiRoot.set(o.ViewZOrder.SpGameLoading, cc.find("spGameLoadingRoot", this.canvas));
}
return this.uiRoot.get(e);
};
Object.defineProperty(e.prototype, "mainController", {
get: function() {
if (!this._mainController && !cc.isValid(this._mainController)) return this._mainController;
var e = this.canvas;
if (e) {
this._mainController = e.getComponent("MainController");
return this._mainController;
}
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "prefabs", {
get: function() {
this._prefabs || cc.isValid(this._prefabs) || (this._prefabs = cc.find("prefabs", this.canvas));
return this._prefabs;
},
enumerable: !1,
configurable: !0
});
e.prototype.getScenePrefab = function(e) {
return cc.find(e, this.prefabs);
};
e.prototype.onLoad = function(e) {
this._canvas = e;
};
Object.defineProperty(e.prototype, "canvas", {
get: function() {
return this._canvas;
},
enumerable: !1,
configurable: !0
});
e.prototype.addView = function(e, t) {
this.getUIRoot(t).addChild(e);
};
e.prototype.addLocal = function(e, t) {
if (e) {
var n = this.getViewData(t);
n && n.loadData.addLocal(e, t);
}
};
e.prototype.addRemote = function(e, t) {
if (e) {
var n = this.getViewData(t);
n && n.loadData.addRemote(e, t);
}
};
e.prototype.close = function(e) {
var t = this.getViewData(e);
if (t) {
t.status = c.ViewStatus.WAITTING_CLOSE;
var n = this.getClassName(e);
if (t.view && cc.isValid(t.node)) {
t.node.removeFromParent();
t.node.destroy();
}
t.loadData.clear();
t.isPrefab && App.asset.releaseAsset(t.info);
this._viewDatas.delete(n);
1 == this._viewDatas.size && this._viewDatas.has("LoginView") && dispatch(i.CommonEvent.Show_Hall);
Log.d(this.module + " close view : " + n);
}
};
e.prototype.closeExcept = function(e) {
var t = this;
if (null != e && null != e && 0 != e.length) {
for (var n = new Set(), o = 0; o < e.length; o++) n.add(this.getClassName(e[o]));
this._viewDatas.forEach(function(e, o) {
n.has(o) || t.close(o);
});
} else this._viewDatas.forEach(function(e, n) {
t.close(n);
});
};
e.prototype.closeBundleView = function(e) {
var t = this;
this._viewDatas.forEach(function(n, o) {
n.bundle == e && t.close(o);
});
};
e.prototype.hide = function(e) {
var t = this.getViewData(e);
t && (t.isLoaded ? t.view && cc.isValid(t.view.node) && t.view.hide() : t.status = c.ViewStatus.WATITING_HIDE);
};
e.prototype.getView = function(e) {
var t = this;
return new Promise(function(n) {
if (null != e && null != e) {
var o = t.getViewData(e);
o ? o.isPreload ? n(null) : o.isLoaded ? n(o.view) : o.getViewCb.push(n) : n(null);
} else n(null);
});
};
e.prototype.checkView = function() {};
e.prototype.isShow = function(e) {
var t = this.getViewData(e);
return !!t && !(!t.isLoaded || t.status != c.ViewStatus.WAITTING_NONE || !t.view) && t.view.node.active;
};
e.newGameTest = function() {
App.senderManager.get(r.default).Send_CheckVer(function() {}).then(function(e) {
e && e.data && 1 == e.data.check_mode ? a.default.getScene(l.Macro.BUNDLE_RESOURCES, "Main", function() {
cc.audioEngine.stopMusic();
}) : s.default.initAdmob();
});
};
e.module = "【UI管理器】";
return e;
}();
n.UIManager = _;
cc._RF.pop();
}, {
"../../../common/config/Config": "Config",
"../../../common/event/CommonEvent": "CommonEvent",
"../../../common/net/CommonSender": "CommonSender",
"../../../common/utils/UIUtils": "UIUtils",
"../../../sdk/SdkManager": "SdkManager",
"../../defines/Enums": "Enums",
"../../defines/Macros": "Macros",
"../asset/Resource": "Resource"
} ],
UIReconnect: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a9553MVGq5KVI3EXTyejTH6", "UIReconnect");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UIReconnect = void 0;
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = null;
t.isResident = !0;
return t;
}
t.prototype.startTimeOutTimer = function() {};
t.prototype.stopTimeOutTimer = function() {};
t.prototype.hide = function() {
this.node && (this.node.active = !1);
};
t.module = "【重连提示】";
return t;
}(e("./Loading").default);
n.UIReconnect = r;
cc._RF.pop();
}, {
"./Loading": "Loading"
} ],
UIUtils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5bc715g7G9GoIzsL48/qwfu", "UIUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../../framework/defines/Macros"), i = e("../config/ConstString"), r = e("../config/User"), a = e("../event/CommonEvent"), s = e("../net/HttpSender"), c = e("./CmmUtils"), l = function() {
function e() {}
e.loadHead = function(t, n) {
var o = t;
if (null == n) this.loadHead(o, r.default.self.data); else if (n.avatar) if (-1 != n.avatar.search(i.ConstString.http)) App.asset.remote.loadImage(n.avatar, !0).then(function(e) {
e && (o.spriteFrame = e);
}); else {
var a = n.avatar.replace(".png", "");
e.setMainSprite(o, c.CmmUtils.AvatarPath(a));
}
};
e.setMainSprite = function(e, t, n) {
if (t && e) {
var i = e;
return new Promise(function(e, r) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, t, cc.SpriteFrame, null, function(t) {
if (i && t && t.data && t.data instanceof cc.SpriteFrame) {
n && (i.sizeMode = cc.Sprite.SizeMode.TRIMMED);
i.spriteFrame = t.data;
e(t.data);
} else r("加载图片 : 失败");
});
});
}
};
e.setMainSprite_Altas = function(e, t, n, i) {
if (t && e) {
var r = e;
return new Promise(function(e, a) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, t, cc.SpriteAtlas, null, function(t) {
if (r && t && t.data && t.data instanceof cc.SpriteAtlas) {
i && (r.sizeMode = cc.Sprite.SizeMode.TRIMMED);
r.spriteFrame = t.data.getSpriteFrame(n);
e(t.data);
} else a("加载图片 : 失败");
});
});
}
};
e.setMainBackSprite = function(e, t) {
var n = e;
return new Promise(function(i, r) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, t, cc.SpriteFrame, null, function(t) {
n && t && t.data && t.data instanceof cc.SpriteFrame ? i({
src: e,
sprite: t.data
}) : r("加载图片 : 失败");
});
});
};
e.setSprite = function(e, t, n) {
var o = e;
App.SingleGame;
return new Promise(function(e, i) {
App.asset.load(t, n, cc.SpriteFrame, null, function(t) {
if (t && t.data && t.data instanceof cc.SpriteFrame) {
o && (o.spriteFrame = t.data);
e(t.data);
} else i("加载图片 : 失败");
});
});
};
e.setLanSprite = function(e, t, n) {
var o = e;
App.SingleGame;
return new Promise(function(e, i) {
App.asset.load(t, n, cc.SpriteFrame, null, function(t) {
if (t && t.data && t.data instanceof cc.SpriteFrame) {
o && (o.spriteFrame = t.data);
e(t.data);
} else i("加载图片 : 失败");
});
});
};
e.setSpriteAtlas = function(e, t) {
return new Promise(function(n, o) {
App.asset.load(e, t, cc.SpriteAtlas, null, function(e) {
e && e.data && e.data instanceof cc.SpriteAtlas ? n(e.data) : o("加载图片 : 失败");
});
});
};
e.setLabelFont = function(e, t, n) {
var o = e;
return new Promise(function(e, i) {
App.asset.load(t, n, cc.Font, null, function(t) {
if (t && t.data && t.data instanceof cc.Font) {
o && (o.font = t.data);
e(t.data);
} else i("加载图片 : 失败");
});
});
};
e.getMainSprite = function(e) {
return new Promise(function(t, n) {
App.asset.load(o.Macro.BUNDLE_RESOURCES, e, cc.SpriteFrame, null, function(e) {
e && e.data && e.data instanceof cc.SpriteFrame ? t(e.data) : n("加载图片 : 失败");
});
});
};
e.getScene = function(e, t, n) {
return new Promise(function(o, i) {
App.asset.loadScene(e, t, n, function(e, n) {
if (e) i("加载资源prefab 失败:" + t); else {
o(n);
cc.director.runScene(n);
}
});
});
};
e.getPrefab = function(e, t) {
return new Promise(function(n, o) {
App.asset.load(e, t, cc.Prefab, null, function(e) {
e && e.data && e.data instanceof cc.Prefab ? n(e.data) : o("加载资源prefab 失败:" + t);
});
});
};
e.showPrefab = function(e, t, n) {
var o = this;
return new Promise(function(i, r) {
dispatch(a.SimpleEvent.Html5_view_loading, !0);
App.asset.load(e, t, cc.Prefab, null, function(e) {
if (e && e.data && e.data instanceof cc.Prefab) {
var s = cc.instantiate(e.data);
n ? n.addChild(s) : o.getPopRoot().addChild(s);
dispatch(a.SimpleEvent.Html5_view_loading, !1);
i(s);
} else r("加载资源prefab 失败:" + t);
});
});
};
e.getPopRoot = function() {
var e = cc.find("Canvas"), t = cc.find("Canvas/popRoot");
if (null === t) {
t = new cc.Node("popRoot");
e.addChild(t);
var n = t.addComponent(cc.Widget);
n.left = 0;
n.right = 0;
n.top = 0;
n.bottom = 0;
n.isAlignBottom = !0;
n.isAlignLeft = !0;
n.isAlignTop = !0;
n.isAlignRight = !0;
n.updateAlignment();
t.zIndex = 999;
var o = cc.find("Canvas/_PARTICLE_ROOT_");
o && (o.zIndex = 9999);
}
return t;
};
e.showChecatNode = function() {
if (r.default.self.isTestPlayer) {
Log.e("xxxxxxxxxxxxxxxx:测试玩家" + s.default.uid);
e.cheatBtn ? e.cheatBtn.active = !0 : e.showPrefab(o.Macro.BUNDLE_RESOURCES, "prefabs/orgin/cheatBtn", e.getPopRoot()).then(function(t) {
e.cheatBtn = t;
});
} else e.cheatBtn && (e.cheatBtn.active = !1);
};
e.cheatBtn = null;
return e;
}();
n.default = l;
cc._RF.pop();
}, {
"../../framework/defines/Macros": "Macros",
"../config/ConstString": "ConstString",
"../config/User": "User",
"../event/CommonEvent": "CommonEvent",
"../net/HttpSender": "HttpSender",
"./CmmUtils": "CmmUtils"
} ],
UIView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "3ab94+tF5hMG5+UXd1Yf5M5", "UIView");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../componects/EventComponent"), s = e("../../componects/AudioComponent"), c = e("../../defines/Macros"), l = e("../../../common/utils/UIUtils"), u = e("../../../common/event/CommonEvent"), p = cc._decorator, d = p.ccclass, h = (p.property, 
p.menu), f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._className = "unknow";
t._bundle = null;
t._enabledKeyUp = !1;
t._enabledKeyDown = !1;
t.audioHelper = null;
t._enterBackgroundTime = 0;
t._enableFrontAndBackgroundSwitch = !1;
return t;
}
t.getPrefabUrl = function() {
Log.e("请求实现public static getPrefabUrl");
return c.Macro.UNKNOWN;
};
t.prototype.cancll = function() {
this.unscheduleAllCallbacks();
};
Object.defineProperty(t.prototype, "args", {
get: function() {
return this._args;
},
set: function(e) {
this._args = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "className", {
get: function() {
return this._className;
},
set: function(e) {
this._className = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "bundle", {
get: function() {
return this._bundle;
},
set: function(e) {
this._bundle = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "closeAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
t.prototype.close = function() {
var e = this;
this.closeAction ? this.closeAction(function() {
App.uiManager.close(e.className);
}) : App.uiManager.close(this.className);
};
Object.defineProperty(t.prototype, "showAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
t.prototype.show = function(e) {
this._args = e;
this.node && (this.node.active = !0);
this.showAction && this.showAction(function() {});
dispatch(u.SimpleEvent.Html5_view_loading, !1);
};
Object.defineProperty(t.prototype, "hideAction", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
});
t.prototype.hide = function() {
var e = this;
this.hideAction ? this.hideAction(function() {
e.node && e.node.removeFromParent();
}) : this.node && this.node.removeFromParent();
};
Object.defineProperty(t.prototype, "enabledKeyUp", {
get: function() {
return this._enabledKeyUp;
},
set: function(e) {
this._enabledKeyUp = e;
e ? this.onI(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp) : this.offI(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "enabledKeyDown", {
get: function() {
return this._enabledKeyUp;
},
set: function(e) {
this._enabledKeyUp = e;
e ? this.onI(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown) : this.offI(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown);
},
enumerable: !1,
configurable: !0
});
t.prototype.onKeyUp = function(e) {
e.keyCode == cc.macro.KEY.escape ? this.onKeyBackUp(e) : e.stopPropagation();
};
t.prototype.onKeyDown = function(e) {
e.keyCode == cc.macro.KEY.escape ? this.onKeyBackDown(e) : e.stopPropagation();
};
t.prototype.onKeyBackUp = function(e) {
e.stopPropagation();
};
t.prototype.onKeyBackDown = function(e) {
e.stopPropagation();
};
t.prototype.onLoad = function() {
this.audioHelper = this.addComponent(s.default);
this.audioHelper.owner = this;
e.prototype.onLoad.call(this);
};
t.prototype.playEffect = function(e, t) {
void 0 === t && (t = !1);
return App.SingleGame ? this.audioHelper.playEffect(e, c.Macro.BUNDLE_RESOURCES, t) : this.audioHelper.playEffect(e, this.bundle, t);
};
t.prototype.playMusic = function(e) {
App.SingleGame ? this.audioHelper.playMusic(e, c.Macro.BUNDLE_RESOURCES, !0) : this.audioHelper.playMusic(e, this.bundle, !0);
};
t.prototype.setSprite = function(e, t) {
l.default.setSprite(e, this.bundle, t);
};
Object.defineProperty(t.prototype, "enableFrontAndBackgroundSwitch", {
get: function() {
return this._enableFrontAndBackgroundSwitch;
},
set: function(e) {
this._enableFrontAndBackgroundSwitch = e;
if (e) {
this.onG(cc.game.EVENT_SHOW, this._onEnterForgeGround);
this.onG(cc.game.EVENT_HIDE, this._onEnterBackground);
} else {
this.offG(cc.game.EVENT_SHOW, this._onEnterForgeGround);
this.offG(cc.game.EVENT_HIDE, this._onEnterBackground);
}
},
enumerable: !1,
configurable: !0
});
t.prototype._onEnterBackground = function() {
this._enterBackgroundTime = Date.timeNow();
this.onEnterBackground();
};
t.prototype._onEnterForgeGround = function() {
var e = Date.timeNow() - this._enterBackgroundTime;
this.onEnterForgeground(e);
};
t.prototype.onEnterForgeground = function() {};
t.prototype.onEnterBackground = function() {};
return r([ d, h("Quick公共组件/UIView") ], t);
}(a.default);
n.default = f;
cc._RF.pop();
}, {
"../../../common/event/CommonEvent": "CommonEvent",
"../../../common/utils/UIUtils": "UIUtils",
"../../componects/AudioComponent": "AudioComponent",
"../../componects/EventComponent": "EventComponent",
"../../defines/Macros": "Macros"
} ],
URLConfig: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1ff71oRFDJEQL3kNtAra51a", "URLConfig");
var o = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../common/config/ConstString"), r = e("../framework/plugin/BitEncrypt"), a = e("../sdk/AppInfo"), s = e("../sdk/SdkManager"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function() {
function e() {}
t = e;
e.getChannel = function() {
if (!t.urlConfigs) {
t.urlConfigs = new Map();
t.urlConfigs.set(3928880, "c3_N");
t.urlConfigs.set(3928870, "c4_N");
t.urlConfigs.set(3928883, "b3_N");
t.urlConfigData = new Map();
for (var e = r.BitEncrypt.decode(this.urlData), n = JSON.parse(e), o = Object.keys(n), i = 0, c = o; i < c.length; i++) {
var l = c[i];
t.urlConfigData.set(l, n[l]);
t.urlConfigData.set(n[l].id, n[l]);
}
if (App.IsHtmlGame) {
t._maplru_data = new Map();
for (var u = 0, p = o; u < p.length; u++) {
l = p[u];
t._maplru_data.has(n[l].comurl) || t._maplru_data.set(n[l].comurl, n[l]);
}
}
}
if (App.IsHtmlGame) {
if (t.fixedData) return t.fixedData;
if (0 == s.default.channelID) t._maplru_data.forEach(function(e, n) {
if (n == window.location.origin) {
s.default.channelID = e.defaultChannel;
t.fixedData = e;
}
}); else {
var d = t.urlConfigData.get(a.default.getHttpId());
t.fixedData = d;
}
console.error(t.fixedData);
return t.fixedData || {};
}
var h = t.urlConfigData.get("all");
if (h) return h;
var f = a.default.getChannelId();
"string" == typeof f && (f = Number.parseInt(f));
var _ = t.urlConfigs.get(f);
return (d = t.urlConfigData.get(_)) || {};
};
e.getRandomUrl = function() {
if (!this.unUsedUrl) {
this.unUsedUrl = [ "www.google.sdfsafdsa.com" ];
this.unUsedUrl = [ "www.google32e4sadsa.com" ];
}
var e = App.storage.getItem(i.ConstString.testUrlIndex, 0);
e >= this.unUsedUrl.length && (e = 0);
var t = this.unUsedUrl[e];
if (t) {
e++;
App.storage.setItem(i.ConstString.testUrlIndex, e);
}
return t;
};
var t;
e.urlData = "{}";
return t = o([ l ], e);
}());
n.default = u;
cc._RF.pop();
}, {
"../common/config/ConstString": "ConstString",
"../framework/plugin/BitEncrypt": "BitEncrypt",
"../sdk/AppInfo": "AppInfo",
"../sdk/SdkManager": "SdkManager"
} ],
UpdateItem: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "7d953mhTWRDmJAA45uTe+Q+", "UpdateItem");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UpdateItem = void 0;
var o = e("../../defines/Macros"), i = e("./Update"), r = function() {
function e(e) {
this._name = "";
this.bundle = "";
this.handler = null;
this.userData = null;
this.isLoaded = !1;
this._code = i.Update.Code.UNINITED;
this._state = i.Update.State.UNINITED;
this._name = e.name;
this.bundle = e.bundle;
}
Object.defineProperty(e.prototype, "name", {
get: function() {
return this._name;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "assetsManager", {
get: function() {
return App.updateManager.getAssetsManager(this);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "code", {
get: function() {
return this.isBrowser ? i.Update.Code.ALREADY_UP_TO_DATE : this._code;
},
set: function(e) {
this._code = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "state", {
get: function() {
return this.isBrowser ? i.Update.State.UP_TO_DATE : this._state;
},
set: function(e) {
this._state = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "updateName", {
get: function() {
return this.assetsManager.name;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isBrowser", {
get: function() {
return App.updateManager.isBrowser;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isSkipUpdate", {
get: function() {
if (this.isBrowser) return !0;
var e = App.updateManager.getStatus(this.bundle);
return App.updateManager.isSkipCheckUpdate || e == i.Update.Status.UP_TO_DATE;
},
enumerable: !1,
configurable: !0
});
e.prototype.reset = function() {
this.state = i.Update.State.UNINITED;
this.code = i.Update.Code.UNINITED;
Log.d(this.bundle + " AssetsManager 重置");
this.assetsManager.manager.reset();
};
e.prototype.convertBundle = function(e) {
return App.updateManager.convertBundle(e);
};
e.prototype.getProjectString = function() {
return App.updateManager.getProjectString(this.bundle);
};
e.prototype.checkUpdate = function() {
this.handler.onStarCheckUpdate(this);
this.checkBundleUpdate();
};
Object.defineProperty(e.prototype, "isMain", {
get: function() {
return this.assetsManager.name == i.Update.MAIN_PACK;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "remoteMd5", {
get: function() {
return this.assetsManager.manager.getRemoteManifest().getMd5();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "storagePath", {
get: function() {
return App.updateManager.storagePath;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hotUpdateUrl", {
get: function() {
return App.updateManager.hotUpdateUrl;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isUpdating", {
get: function() {
var e = this, t = function(t) {
if (t == i.Update.State.PREDOWNLOAD_VERSION) {
Log.d(e.bundle + " 准备下载版本文件");
return !0;
}
if (t == i.Update.State.DOWNLOADING_VERSION) {
Log.d(e.bundle + " 下载版本文件中");
return !0;
}
if (t == i.Update.State.PREDOWNLOAD_MANIFEST) {
Log.d(e.bundle + " 准备下载project文件");
return !0;
}
if (t == i.Update.State.DOWNLOADING_MANIFEST) {
Log.d(e.bundle + " 下载project文件中");
return !0;
}
if (t == i.Update.State.VERSION_LOADED) {
Log.d(e.bundle + " 下载版本文件完成，下一步骤会解析版本文件，也算在更新过程中");
return !0;
}
if (t == i.Update.State.MANIFEST_LOADED) {
Log.d(e.bundle + " 下载project文件完成,下载步骤会解析project文件，也算在更新过程中");
return !0;
}
if (t == i.Update.State.UPDATING) {
Log.d(e.bundle + " 正在更新中");
return !0;
}
};
if (t(this.assetsManager.manager.getState())) {
Log.d(this.bundle + " C++层更新中");
return !0;
}
if (t(this.state)) {
Log.d(this.bundle + " TS层更新中");
return !0;
}
return !1;
},
enumerable: !1,
configurable: !0
});
e.prototype.checkBundleUpdate = function() {
if (this.assetsManager.manager.getLocalManifest()) {
Log.d(this.bundle + " 本地文件已经加载完成,直接进入更新流程");
if (this.isUpdating) {
Log.d(this.bundle + " 正在检测更新中...");
this.handler.onShowUpdating(this);
return;
}
}
var e = this.getProjectString();
if (e) {
var t = new jsb.Manifest(e, this.storagePath, this.hotUpdateUrl);
Log.d(this.bundle + " --存在本地版本控制文件checkUpdate--");
this.assetsManager.manager.loadLocalManifest(t, "");
this._checkUpdate();
} else {
var n = {
version: "0",
bundle: this.convertBundle(this.bundle),
md5: o.Macro.UNKNOWN
}, i = JSON.stringify(n);
t = new jsb.Manifest(i, this.storagePath, this.hotUpdateUrl);
Log.d(this.bundle + " 检测更新");
Log.d(this.bundle + " 版本信息 : " + i);
this.assetsManager.manager.loadLocalManifest(t, "");
this._checkUpdate();
}
};
e.prototype._checkUpdate = function() {
Log.d(this.bundle + " 进入检测更新");
this.state = i.Update.State.UPDATING;
this.assetsManager.manager.setEventCallback(this.checkCb.bind(this));
this.assetsManager.manager.checkUpdate();
};
e.prototype.checkCb = function(e) {
var t = e.getEventCode(), n = this.assetsManager.manager.getState();
Log.d(this.bundle + " checkCb event code : " + t + " state : " + n);
switch (t) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
Log.d(this.bundle + " No local manifest file found, hot update skipped.");
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
Log.d(this.bundle + " Fail to download manifest file, hot update skipped.");
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
Log.d(this.bundle + " Already up to date with the latest remote version.");
this.isMain ? App.updateManager.savePreVersions() : this.bundle == o.Macro.BUNDLE_HALL && (t = App.updateManager.checkMainMd5(this, t));
break;

case i.Update.Code.NEW_VERSION_FOUND:
Log.d(this.bundle + " New version found, please try to update.");
this.isMain || (t = App.updateManager.checkAllowUpdate(this, t));
break;

default:
return;
}
this.state = n;
this.code = t;
t == i.Update.Code.NEW_VERSION_FOUND ? this.handler.onNewVersionFund(this) : t == i.Update.Code.ALREADY_UP_TO_DATE ? this.handler.onAreadyUpToData(this) : t == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || t == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || t == i.Update.Code.ERROR_PARSE_MANIFEST ? this.handler.onUpdateFailed(this) : t == i.Update.Code.MAIN_PACK_NEED_UPDATE || t == i.Update.Code.PRE_VERSIONS_NOT_FOUND ? this.handler.onNeedUpdateMain(this) : this.handler.onOther(this);
};
e.prototype.doUpdate = function() {
Log.d(this.bundle + " 即将热更新, updating : " + this.isUpdating);
if (!this.isUpdating) {
Log.d(this.bundle + " 执行更新 ");
this.assetsManager.manager.setEventCallback(this.updateCb.bind(this));
this.assetsManager.manager.update();
}
};
e.prototype.updateCb = function(e) {
var t = this, n = !1, o = !1, r = e.getEventCode(), a = this.assetsManager.manager.getState();
Log.d(this.bundle + " --update cb code : " + r + " state : " + a);
switch (r) {
case i.Update.Code.ERROR_NO_LOCAL_MANIFEST:
Log.d(this.bundle + " No local manifest file found, hot update skipped.");
o = !0;
break;

case i.Update.Code.UPDATE_PROGRESSION:
Log.d(this.bundle + " " + e.getDownloadedBytes() + " / " + e.getTotalBytes());
Log.d(this.bundle + " " + e.getDownloadedFiles() + " / " + e.getTotalFiles());
Log.d(this.bundle + " percent : " + e.getPercent());
Log.d(this.bundle + " percent by file : " + e.getPercentByFile());
Log.d(this.bundle + " assetId : " + e.getAssetId());
var s = e.getMessage();
s && Log.d(this.bundle + " Updated file: " + s);
break;

case i.Update.Code.ERROR_DOWNLOAD_MANIFEST:
case i.Update.Code.ERROR_PARSE_MANIFEST:
Log.d(this.bundle + " Fail to download manifest file, hot update skipped.");
o = !0;
break;

case i.Update.Code.ALREADY_UP_TO_DATE:
Log.d(this.bundle + " Already up to date with the latest remote version");
o = !0;
this.isMain && App.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FINISHED:
Log.d(this.bundle + " Update finished. " + e.getMessage());
n = !0;
this.isMain && App.updateManager.savePreVersions();
break;

case i.Update.Code.UPDATE_FAILED:
Log.d(this.bundle + " Update failed. " + e.getMessage());
break;

case i.Update.Code.ERROR_UPDATING:
Log.d(this.bundle + " Asset update error: " + e.getAssetId() + " , " + e.getMessage());
break;

case i.Update.Code.ERROR_DECOMPRESS:
Log.d(this.bundle + " " + e.getMessage());
}
o && this.assetsManager.manager.setEventCallback(null);
var c = !1;
if (this.isMain) {
if (n) {
this.assetsManager.manager.setEventCallback(null);
e.getDownloadedFiles() > 0 && (c = !0);
}
} else if (n) {
Log.d(this.bundle + " 更新前是否加载过 : " + this.isLoaded);
if (this.isLoaded && e.getDownloadedFiles() > 0) {
Log.d(this.bundle + " 已经加载过，需要重启");
c = !0;
}
}
this.state = a;
this.code = r;
var l = {
downloadedBytes: e.getDownloadedBytes(),
totalBytes: e.getTotalBytes(),
downloadedFiles: e.getDownloadedFiles(),
totalFiles: e.getTotalFiles(),
percent: e.getPercent(),
percentByFile: e.getPercentByFile(),
code: e.getEventCode(),
state: a,
needRestart: c,
bundle: this.bundle,
assetId: e.getAssetId(),
progress: 0
};
if (l.code == i.Update.Code.UPDATE_FINISHED) {
l.progress = 1.1;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.UPDATE_PROGRESSION) {
l.totalBytes <= 0 ? l.progress = 0 : l.progress = l.percent == Number.NaN ? 0 : l.percent;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.ALREADY_UP_TO_DATE) {
l.progress = 1;
this.handler.onDownloading(this, l);
} else if (l.code == i.Update.Code.UPDATE_FAILED || l.code == i.Update.Code.ERROR_NO_LOCAL_MANIFEST || l.code == i.Update.Code.ERROR_DOWNLOAD_MANIFEST || l.code == i.Update.Code.ERROR_PARSE_MANIFEST || l.code == i.Update.Code.ERROR_DECOMPRESS) {
l.progress = -1;
Log.e("更新" + this.name + "失败");
this.handler.onUpdateFailed(this);
}
if (n) {
Log.d(this.bundle + " 更新完成,下载资源数 : " + e.getDownloadedFiles());
if (c) {
Log.d(this.bundle + " 更新完成，需要重启游戏");
this.handler.onNeedRestartApp(this, function(e, n) {
jsb.fileUtils.purgeCachedEntries();
var o = .5;
e && (o = 1);
n && setTimeout(function() {
Log.d(t.bundle + " 重启游戏");
cc.game.restart();
}, o);
});
} else {
jsb.fileUtils.purgeCachedEntries();
this.reset();
this.handler.onDownloadComplete(this);
}
}
Log.d(this.bundle + "update cb  failed : " + o + "  , isRestartApp : " + c + " isUpdateFinished : " + n + " , updating : " + this.isUpdating);
};
return e;
}();
n.UpdateItem = r;
cc._RF.pop();
}, {
"../../defines/Macros": "Macros",
"./Update": "Update"
} ],
UpdateLoading: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f6768OM7o5DULODtu+5yGA1", "UpdateLoading");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
});
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.module = null;
return t;
}
t.module = "【UpdateLoading】";
return t;
}(e("./Loading").default);
n.default = r;
cc._RF.pop();
}, {
"./Loading": "Loading"
} ],
UpdateManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b4686A+V9RC9qa8HPdcxcAM", "UpdateManager");
var o = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(e) {
try {
c(o.next(e));
} catch (e) {
r(e);
}
}
function s(e) {
try {
c(o.throw(e));
} catch (e) {
r(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
c((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = t.call(e, a);
} catch (e) {
r = [ 6, e ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UpdateManager = void 0;
var r = e("./Update"), a = e("../../defines/Macros"), s = e("../net/http/HttpClient"), c = e("./UpdateItem"), l = e("../../../common/config/GlobalVar"), u = function() {
function e() {
this.isResident = !0;
this.module = null;
this.items = [];
this.current = null;
this._hotUpdateUrl = "";
this.isSkipCheckUpdate = !1;
this.assetsManagers = {};
this.preVersions = {};
this.remoteVersions = {};
this.defaultVersion = "1.0.0";
this.defaultMD5 = a.Macro.UNKNOWN;
this.mainBundles = [ "src", "jsb-adapter", "assets/resources", "assets/main", "assets/internal", "main.js" ];
this.isAutoVersion = !0;
}
Object.defineProperty(e.prototype, "storagePath", {
get: function() {
return jsb.fileUtils.getWritablePath() + "caches/";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hotUpdateUrl", {
get: function() {
return this._hotUpdateUrl;
},
set: function(e) {
this._hotUpdateUrl = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isBrowser", {
get: function() {
return cc.sys.platform == cc.sys.WECHAT_GAME || cc.sys.isBrowser;
},
enumerable: !1,
configurable: !0
});
e.prototype.getAssetsManager = function(e) {
var t = e.convertBundle(e.bundle);
if (!this.assetsManagers[t]) {
this.assetsManagers[t] = new r.Update.AssetsManager(t, this.storagePath);
this.assetsManagers[t].manager.setPackageUrl(this.hotUpdateUrl);
this.assetsManagers[t].manager.setMainBundles(this.mainBundles);
this.assetsManagers[t].manager.setDownloadAgainZip(.8);
}
return this.assetsManagers[t];
};
e.prototype.dowonLoad = function(e) {
if (e.isSkipUpdate) e.handler.onLoadBundle(e); else {
this.current = this.getItem(e);
if (this.current) if (this.current.isUpdating) {
Log.d(e.bundle + " 正在更新中...");
this.current.handler.onShowUpdating(this.current);
} else {
Log.d(e.bundle + " 不在更新状态，进入更新...");
this._dowonLoad(e);
} else {
Log.d(e.bundle + " 放入下载队列中...");
this.items.push(e);
this._dowonLoad(e);
}
}
};
e.prototype._dowonLoad = function(e) {
return o(this, void 0, void 0, function() {
return i(this, function(t) {
switch (t.label) {
case 0:
this.current = e;
return [ 4, this.loadVersions(this.current) ];

case 1:
if (t.sent()) if (this.getStatus(e.bundle) == r.Update.Status.UP_TO_DATE) {
e.state = r.Update.State.UP_TO_DATE;
if (e.bundle == a.Macro.BUNDLE_HALL && this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("进入" + e.bundle + " 时，需要更新主包");
e.handler.onNeedUpdateMain(e);
} else {
Log.d(e.bundle + " 已经是最新，直接进入...");
e.handler.onLoadBundle(e);
}
} else {
Log.d(e.bundle + " 进入检测更新...");
e.state = r.Update.State.READY_TO_UPDATE;
e.checkUpdate();
}
return [ 2 ];
}
});
});
};
e.prototype.getItem = function(e) {
if (e instanceof c.UpdateItem) return this._getItem(e.bundle);
var t = this._getItem(e.bundle);
null == t && (t = new c.UpdateItem(e));
return t;
};
e.prototype._getItem = function(e) {
for (var t = 0; t < this.items.length; t++) if (e == this.items[t].bundle) return this.items[t];
return null;
};
e.prototype.checkAllowUpdate = function(e, t) {
var n = e.remoteMd5, o = this.preVersions[e.updateName];
if (null == o || null == o) {
Log.e("预处理版本未存在!!!!");
return r.Update.Code.PRE_VERSIONS_NOT_FOUND;
}
if (o.md5 == n) Log.d(e.bundle + " 将要下载版本 md5 与远程版本 md5 相同，可以下载 version : " + o.version + " md5:" + o.md5); else if (e.bundle == a.Macro.BUNDLE_HALL) {
Log.d(e.bundle + " 更新");
if (this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("更新" + e.bundle + "时，主包有更新，需要先更新主包");
t = r.Update.Code.MAIN_PACK_NEED_UPDATE;
} else Log.d("更新" + e.bundle + "时，主包无更新，直接更新进入");
} else if (this.isMd5Change(r.Update.MAIN_PACK) || this.isMd5Change(a.Macro.BUNDLE_HALL)) {
Log.d("更新" + e.bundle + "时，主包与大厅有更新，下载 md5 :" + n + " 与预处理md5不一致，需要对主包先进行更新");
t = r.Update.Code.MAIN_PACK_NEED_UPDATE;
} else Log.e("更新" + e.bundle + "时，主包与大厅无更新，可直接下载更新！！");
return t;
};
e.prototype.checkMainMd5 = function(e, t) {
Log.d(e.bundle + " 无更新，检测主包md5是否变化，如果变更，需要提示玩家更新主包");
if (this.isMd5Change(r.Update.MAIN_PACK)) {
Log.d("进入" + e.bundle + "时，主包有更新，需要先更新主包");
t = r.Update.Code.MAIN_PACK_NEED_UPDATE;
}
return t;
};
e.prototype.getStatus = function(e) {
if (this.isBrowser || this.isSkipCheckUpdate) return r.Update.Status.UP_TO_DATE;
e = this.convertBundle(e);
Log.e("xzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
Log.e(e);
var t = this.getVersionInfo(e);
Log.e(JSON.stringify(t));
Log.e(JSON.stringify(this.remoteVersions));
return t ? t.md5 && this.remoteVersions[e] && this.remoteVersions[e].md5 && t.md5 == this.remoteVersions[e].md5 ? r.Update.Status.UP_TO_DATE : r.Update.Status.NEED_UPDATE : r.Update.Status.NEED_DOWNLOAD;
};
Object.defineProperty(e.prototype, "appVersion", {
get: function() {
if (this.isBrowser) return this.defaultVersion;
var e = r.Update.MANIFEST_ROOT + "$apk.json", t = this.getString(e);
if (t) return "v" + JSON.parse(t).version;
Log.e(this.module + "无法读取到" + e);
return this.defaultVersion;
},
enumerable: !1,
configurable: !0
});
e.prototype.getMd5 = function(e) {
if (this.isBrowser) return this.defaultMD5;
e = this.convertBundle(e);
var t = this.getVersionInfo(e);
if (t) return "" + t.md5;
if (this.remoteVersions[e]) {
Log.w(this.module + "本地无版本信息,返回远程版本" + this.remoteVersions[e].md5);
return "" + this.remoteVersions[e].md5;
}
Log.e(this.module + "远程无版本信息，返回默认版本" + this.defaultMD5);
return this.defaultMD5;
};
e.prototype.getVersion = function(e) {
if (this.isBrowser) return this.defaultVersion;
e = this.convertBundle(e);
this.isAutoVersion && (e = a.Macro.MAIN_PACK_BUNDLE_NAME);
var t = this.getVersionInfo(e);
if (t) return "" + t.version;
if (this.remoteVersions[e]) {
Log.w(this.module + "本地无版本信息,返回远程版本" + this.remoteVersions[e].version);
return "" + this.remoteVersions[e].version;
}
Log.e(this.module + "远程无版本信息，返回默认版本" + this.defaultVersion);
return this.defaultVersion;
};
e.prototype.isMd5Change = function(e) {
e = this.convertBundle(e);
return !(!this.preVersions[e] || !this.remoteVersions[e] || this.preVersions[e].md5 == this.remoteVersions[e].md5);
};
e.prototype.getString = function(e) {
var t = "" + this.storagePath + e;
return jsb.fileUtils.isFileExist(t) ? jsb.fileUtils.getStringFromFile(t) : jsb.fileUtils.isFileExist(e) ? jsb.fileUtils.getStringFromFile(e) : void 0;
};
e.prototype.getVersionString = function(e) {
e = this.convertBundle(e);
var t = "" + r.Update.MANIFEST_ROOT + e + "_version.json";
return this.getString(t);
};
e.prototype.getProjectString = function(e) {
e = this.convertBundle(e);
var t = "" + r.Update.MANIFEST_ROOT + e + "_project.json";
return this.getString(t);
};
e.prototype.getVersionInfo = function(e) {
var t = this.getVersionString(e);
if (t) return JSON.parse(t);
};
e.prototype.loadVersions = function(e) {
var t = this;
return new Promise(function(n) {
return o(t, void 0, void 0, function() {
var t, o;
return i(this, function(i) {
switch (i.label) {
case 0:
if (this.isBrowser) {
n(!0);
return [ 2 ];
}
e.state = r.Update.State.PREDOWNLOAD_VERSION;
e.handler.onShowUpdating(e);
Log.d(this.module + " 请求远程版本信息");
return [ 4, this.readRemoteVersions() ];

case 1:
if (t = i.sent()) {
this.remoteVersions = JSON.parse(t);
if ((o = e.convertBundle(e.bundle)) == r.Update.MAIN_PACK && this.getStatus(o) == r.Update.Status.UP_TO_DATE) {
Log.d(this.module + " 主包已经是最新，写入远程的版本信息");
this.savePreVersions();
jsb.fileUtils.purgeCachedEntries();
}
Log.d(this.module + " 加载" + e.bundle + "时，加载远程版本信息成功...");
e.state = r.Update.State.VERSION_LOADED;
n(!0);
} else {
this.remoteVersions = {};
e.state = r.Update.State.FAIL_TO_UPDATE;
e.code = r.Update.Code.PRE_VERSIONS_NOT_FOUND;
e.handler.onPreVersionFailed(e);
Log.e(this.module + " 加载" + e.bundle + "时，加载远程版本信息失败...");
n(!1);
}
return [ 2 ];
}
});
});
});
};
e.prototype.getRemoteVersions = function() {
var e = this;
return new Promise(function(t) {
return o(e, void 0, void 0, function() {
var e;
return i(this, function(n) {
switch (n.label) {
case 0:
if (this.isBrowser) {
t(!0);
return [ 2 ];
}
Log.d(this.module + " 请求远程版本信息");
return [ 4, this.readRemoteVersions() ];

case 1:
if (e = n.sent()) {
this.remoteVersions = JSON.parse(e);
if (this.getStatus(r.Update.MAIN_PACK) == r.Update.Status.UP_TO_DATE) {
Log.d(this.module + " 主包已经是最新，写入远程的版本信息");
this.savePreVersions();
jsb.fileUtils.purgeCachedEntries();
}
Log.d(this.module + "加载远程版本信息成功...");
t(!0);
} else {
this.remoteVersions = {};
Log.e(this.module + " 加载远程版本信息失败...");
t(!1);
}
return [ 2 ];
}
});
});
});
};
e.prototype.convertBundle = function(e) {
return e == a.Macro.BUNDLE_RESOURCES ? r.Update.MAIN_PACK : e;
};
e.prototype.readRemoteVersions = function() {
var e = this;
return new Promise(function(t) {
var n = new s.HttpPackage();
n.data.url = e.hotUpdateUrl + "/" + r.Update.MANIFEST_ROOT + l.GlobalVar.VERSION_FILENAME;
n.data.isAutoAttachCurrentTime = !0;
n.send(function(e) {
t(e);
}, function(e) {
Log.dump(e);
t(null);
});
});
};
e.prototype.savePreVersions = function() {
if (Object.keys(this.remoteVersions).length > 0) {
Log.d(this.module + " 保存远程版本信息如下:");
var e = JSON.stringify(this.remoteVersions);
Log.d(e);
this.preVersions = JSON.parse(e);
} else Log.e(this.module + " 致命更新错误,无法读取到远程版本信息!!!");
};
e.prototype.debug = function() {
Log.d("-----------热火更新管理器中相关信息------------");
Log.dump({
name: "预处理版本信息",
data: this.preVersions
});
Log.dump({
name: "远程版本信息",
data: this.remoteVersions
});
};
e.module = "【更新管理器】";
return e;
}();
n.UpdateManager = u;
cc._RF.pop();
}, {
"../../../common/config/GlobalVar": "GlobalVar",
"../../defines/Macros": "Macros",
"../net/http/HttpClient": "HttpClient",
"./Update": "Update",
"./UpdateItem": "UpdateItem"
} ],
Update: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "97b39HmANRGlKWepYtdAr+F", "Update");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Update = void 0;
var o = e("../../defines/Macros");
(function(e) {
e.MAIN_PACK = o.Macro.MAIN_PACK_BUNDLE_NAME;
e.MANIFEST_ROOT = "manifest/";
(function(e) {
e[e.ERROR_NO_LOCAL_MANIFEST = 0] = "ERROR_NO_LOCAL_MANIFEST";
e[e.ERROR_DOWNLOAD_MANIFEST = 1] = "ERROR_DOWNLOAD_MANIFEST";
e[e.ERROR_PARSE_MANIFEST = 2] = "ERROR_PARSE_MANIFEST";
e[e.NEW_VERSION_FOUND = 3] = "NEW_VERSION_FOUND";
e[e.ALREADY_UP_TO_DATE = 4] = "ALREADY_UP_TO_DATE";
e[e.UPDATE_PROGRESSION = 5] = "UPDATE_PROGRESSION";
e[e.ASSET_UPDATED = 6] = "ASSET_UPDATED";
e[e.ERROR_UPDATING = 7] = "ERROR_UPDATING";
e[e.UPDATE_FINISHED = 8] = "UPDATE_FINISHED";
e[e.UPDATE_FAILED = 9] = "UPDATE_FAILED";
e[e.ERROR_DECOMPRESS = 10] = "ERROR_DECOMPRESS";
e[e.MAIN_PACK_NEED_UPDATE = 11] = "MAIN_PACK_NEED_UPDATE";
e[e.PRE_VERSIONS_NOT_FOUND = 12] = "PRE_VERSIONS_NOT_FOUND";
e[e.UNINITED = 13] = "UNINITED";
})(e.Code || (e.Code = {}));
(function(e) {
e[e.UNINITED = 0] = "UNINITED";
e[e.UNCHECKED = 1] = "UNCHECKED";
e[e.PREDOWNLOAD_VERSION = 2] = "PREDOWNLOAD_VERSION";
e[e.DOWNLOADING_VERSION = 3] = "DOWNLOADING_VERSION";
e[e.VERSION_LOADED = 4] = "VERSION_LOADED";
e[e.PREDOWNLOAD_MANIFEST = 5] = "PREDOWNLOAD_MANIFEST";
e[e.DOWNLOADING_MANIFEST = 6] = "DOWNLOADING_MANIFEST";
e[e.MANIFEST_LOADED = 7] = "MANIFEST_LOADED";
e[e.NEED_UPDATE = 8] = "NEED_UPDATE";
e[e.READY_TO_UPDATE = 9] = "READY_TO_UPDATE";
e[e.UPDATING = 10] = "UPDATING";
e[e.UNZIPPING = 11] = "UNZIPPING";
e[e.UP_TO_DATE = 12] = "UP_TO_DATE";
e[e.FAIL_TO_UPDATE = 13] = "FAIL_TO_UPDATE";
})(e.State || (e.State = {}));
(function(e) {
e[e.NEED_DOWNLOAD = 0] = "NEED_DOWNLOAD";
e[e.UP_TO_DATE = 1] = "UP_TO_DATE";
e[e.NEED_UPDATE = 2] = "NEED_UPDATE";
})(e.Status || (e.Status = {}));
var t = function() {
function e(e, t) {
this.bundle = "";
this.name = "";
this.name = e;
this.bundle = t;
}
e.prototype.clone = function() {
return new e(this.name, this.bundle);
};
return e;
}();
e.Config = t;
var n = function() {
function e(e, t) {
this.name = "";
this._manager = null;
this.type = "";
this.storagePath = "";
this.name = e;
this.type = "type." + e;
this.storagePath = t;
this.create();
}
Object.defineProperty(e.prototype, "manager", {
get: function() {
this._manager || this.create();
return this._manager;
},
set: function(e) {
this._manager = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.reset = function() {
this.manager.reset();
};
e.prototype.create = function() {
Log.d("创建 " + this.name + " AssetsManager");
this.manager = new jsb.AssetsManager(this.type, this.storagePath);
};
return e;
}();
e.AssetsManager = n;
})(n.Update || (n.Update = {}));
cc._RF.pop();
}, {
"../../defines/Macros": "Macros"
} ],
User: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9917cSi18NG16/f1xK6LCTK", "User");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../utils/CmmUtils"), i = e("../../sdk/GameNativeConfig"), r = e("./GlobalVar"), a = e("../../sdk/AppInfo"), s = e("../net/HttpSender"), c = e("./ConstString"), l = e("../event/CommonEvent"), u = e("../net/CommonSender"), p = function() {
function e() {
this.wOpenId = "";
this.roomTable = [];
this.crashModel = 0;
this.ruleFlag = "";
this.hasReqRoom = !1;
this.laba_broadcast_op = 0;
this.laba_broadcast_url = "";
this.isInGameScene = 0;
this.isInGameing = 0;
this.showGuest = 1;
this.min_charge = 0;
this.max_charge = 0;
this.has_charged = 0;
this.withdraw_alert = 0;
this.isAutoGame = !1;
this.register_type = 0;
this.register_vid = 7;
this.isLoginHall = !1;
this.teenPattiType = 0;
this.soreTb = [];
this.thirdToken = "";
this.loginType = 0;
this.curRoomId = 0;
this.curGameType = -1;
this.latitude = "";
this.longitude = "";
this.game_model = 0;
this.update_url = "";
this.facebook_appid = "";
this.kochava_guid = "";
this.kochava_type = 0;
this.appsflyer_guid = "";
this.hasInitAppsflyerSdk = 0;
this.appsflyer_type = 0;
this.pp_url = "";
this.tos_url = "";
this.isNeedLoc = !1;
this.online_users = 0;
this._loginTb = {};
this.redPoints = new Map();
this._mySaveKeys = {};
this.initUserData(a.default.getChannelId());
this.hasReqRoom = !1;
this.isInGameing = 0;
this.isInGameScene = 0;
}
Object.defineProperty(e, "self", {
get: function() {
return this._instance || (this._instance = new this());
},
enumerable: !1,
configurable: !0
});
e.prototype.initUserData = function(e) {
this.urlChannelId = e;
this.showGuest = 1;
this.min_charge = 0;
this.max_charge = 0;
this.has_charged = 0;
this.withdraw_alert = 0;
};
e.prototype.clear = function() {
this.loginType = 0;
this.thirdToken = "";
this._loginTb = {};
App.storage.removeItem(i.default.Key.PhoneId);
dispatch(l.CommonEvent.ClearLoginToken);
};
Object.defineProperty(e.prototype, "isCheckMode", {
get: function() {
return 1 == this.data.check_mode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "data", {
get: function() {
return this._loginTb;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "uid", {
get: function() {
return s.default.uid;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "skey", {
get: function() {
return this.data.skey;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "withdraw", {
get: function() {
return this.data.withdraw;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isPay", {
get: function() {
return this.data && this.data.paytotal > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "avatar", {
get: function() {
return c.ConstString.headPath + this._loginTb.avatar;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isBindPhone", {
get: function() {
return this.data && this.data.tel_no && this.data.tel_no.length > 6;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "tel_no", {
get: function() {
return this.data && this.data.tel_no ? this.data.tel_no : "";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "moneyNumber", {
get: function() {
return this.data.money;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "moneyString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.money);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "chipString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.chips);
},
enumerable: !1,
configurable: !0
});
e.prototype.setVipLevel = function(e) {
this.data.viplevel = e;
dispatch(i.default.Event.VIP_UPDATA, e);
};
e.prototype.setVipExtraPoint = function(e) {
Log.d("ExtraExtra:" + e);
this.data.bet_rate = e;
};
e.prototype.updateReward = function(e, t, n) {
Log.e(e);
1 == e.reward_type && (this.data.gmoney = e.gmoney);
2 == e.reward_type && (this.data.bonus = e.bonus);
if (t) {
var o = 1 == n ? i.default.Event.fly_gold1 : i.default.Event.fly_gold;
2 == e.reward_type ? dispatch(o, e.reward_value + " bonus") : o = i.default.Event.fly_gold2;
}
};
e.prototype.updatePlayerInfo = function(e) {
var t = this;
App.senderManager.get(u.default).Send_PlayerInfo(function(n) {
t.initPlayerInfo(n.data);
e && e();
});
};
e.prototype.updateServerRedPoint = function() {
var e = this;
this.isBindPhone && App.senderManager.get(u.default).Send_RedPoint(function(t) {
Log.e("红------" + JSON.stringify(t));
var n = t.data;
e.redPoints.clear();
for (var o in n) if (Object.prototype.hasOwnProperty.call(n, o)) {
var i = n[o];
if ("activity" == o) {
e.redPoints.set(o, !0);
e.initAcitvityRed(i);
} else e.redPoints.set(o, 0 != i);
}
dispatch(l.HttpEvent.UpdateRedPoint);
});
};
e.prototype.initAcitvityRed = function(e) {
for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
var n = e[t];
this.redPoints.set(t, 0 != n);
}
};
e.prototype.getRedPoint = function(e) {
return !!this.redPoints.has(e) && this.redPoints.get(e);
};
e.prototype.updateRedPoint = function(e, t) {
this.redPoints.set(e, t);
};
e.prototype.updateMoneyInfo = function() {
var e = this;
App.senderManager.get(u.default).Send_MoneyInfo(function(t) {
var n = t.data;
e._loginTb.deposit = n.deposit;
e._loginTb.withdraw = n.withdraw;
e._loginTb.bonus = n.bonus;
e._loginTb.money = n.money;
e._loginTb.gmoney = n.gmoney;
e._loginTb.gbonus = n.gbonus;
dispatch(i.default.Event.update_money);
});
};
e.prototype.updateFreeMoneyInfo = function() {
App.senderManager.get(u.default).Send_Act_16(function(t) {
e.self.initBindRewardInfo(t.data);
});
};
e.prototype.checkPlayer = function() {
App.senderManager.get(u.default).Send_CheckPlayer();
};
e.prototype.isFinishIdCardBind = function() {
return 1 == r.GlobalVar.countryCode || 3 == r.GlobalVar.countryCode ? !!(this._loginTb.idcard && o.CmmUtils.stringNotEmpty(this._loginTb.idcard.cert) && o.CmmUtils.stringNotEmpty(this._loginTb.idcard.realName)) : 5 != r.GlobalVar.countryCode;
};
e.prototype.updateIDCardInof = function(e, t) {
if (this._loginTb.idcard) {
this._loginTb.idcard.cert = e;
this._loginTb.idcard.realName = t;
}
};
e.prototype.initPlayerInfo = function(e) {
r.GlobalVar.global_telegram = e.telegram;
r.GlobalVar.global_whatsapp = e.whatsapp;
r.GlobalVar.stayLeftTime = e.stayLeftTime;
r.GlobalVar.stayDay = e.stayDay;
this._loginTb.create_time = e.create_time;
this._loginTb.playerMode = e.playerMode;
this._loginTb.cur_time = e.cur_time;
this._loginTb.name = e.name;
this._loginTb.payexp = e.payexp;
this._loginTb.betexp = e.betexp;
this._loginTb.stayexp = e.stayexp;
this._loginTb.payexpm = e.payexpm;
this._loginTb.betexpm = e.betexpm;
this._loginTb.stayexpm = e.stayexpm;
this._loginTb.viplevel = e.viplevel;
this._loginTb.deposit = e.deposit;
this._loginTb.withdraw = e.withdraw;
this._loginTb.bonus = e.bonus;
this._loginTb.money = e.money;
this._loginTb.gmoney = e.gmoney;
this._loginTb.gbonus = e.gbonus;
this._loginTb.tel_no = e.tel_no;
this._loginTb.avatar = e.avatar;
this._loginTb.avatar_url = e.avatar_url;
this._loginTb.bet_rate = e.bet_rate;
this._loginTb.money_exe = e.money_exe;
this._loginTb.paytotal = e.paytotal;
this._loginTb.chips = e.chips;
this._loginTb.dayfree = e.dayfree;
this._loginTb.dayfreeTime = e.dayFreeTime;
this._loginTb.loginDays = e.loginDays;
this._loginTb.safebox = e.safebox;
this._loginTb.rank = e.rank;
this._loginTb.idcard = e.idcard;
App.storage.setItem(c.ConstString.userName, e.name);
dispatch(i.default.Event.update_money);
dispatch(l.HttpEvent.CheckUpdateFinish);
};
e.prototype.initVipConfig = function(e) {
this._loginTb.vips = e.vips;
};
e.prototype.initFirstChargeInfo = function(e) {
this._loginTb.first_charge = e;
};
e.prototype.initBindRewardInfo = function(e) {
this._loginTb.bindRewardInfo = e;
dispatch(l.HttpEvent.UpdateFreeMoney);
};
e.prototype.Second = function() {
dispatch(l.CommonEvent.Time_Second);
this.countBindLeftTime();
};
Object.defineProperty(e.prototype, "haveWheelNum", {
get: function() {
return !!this._loginTb.wheelInfo && this._loginTb.wheelInfo.recharge_last > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "autoPopBind", {
get: function() {
return !(!this._loginTb.bindRewardInfo || 0 != this._loginTb.bindRewardInfo.recvTimes);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isShowFirstTips", {
get: function() {
return !(!this._loginTb.bindRewardInfo || 0 != this._loginTb.bindRewardInfo.recvTimes);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "showBindRewardBtn", {
get: function() {
return !!(this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.recvTimes > 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isBozhu", {
get: function() {
return !!this._loginTb.playerMode && 3 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isTestPlayer", {
get: function() {
return !!this._loginTb.playerMode && 4 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isMerchantPlayer", {
get: function() {
return !!this._loginTb.playerMode && 5 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isNormalPlayer", {
get: function() {
return !!this._loginTb.playerMode && 1 == this._loginTb.playerMode;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "getFreeAmount", {
get: function() {
return e.self.data.bindRewardInfo && e.self.data.bindRewardInfo.totalAmount ? e.self.data.bindRewardInfo.totalAmount : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "getBindRewardLeftTime", {
get: function() {
return this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.leftTime > 0 ? this._loginTb.bindRewardInfo.leftTime : 0;
},
enumerable: !1,
configurable: !0
});
e.prototype.updateBindRewardLeftTime = function(e) {
if (this._loginTb.bindRewardInfo) {
this._loginTb.bindRewardInfo.leftTime = e.leftTime;
this._loginTb.bindRewardInfo.amount = e.amount;
this._loginTb.bindRewardInfo.totalAmount = e.nextAmount;
this._loginTb.bindRewardInfo.count = e.count;
}
return 0;
};
e.prototype.countBindLeftTime = function() {
if (this._loginTb.bindRewardInfo && this._loginTb.bindRewardInfo.leftTime > 0) {
this._loginTb.bindRewardInfo.leftTime -= 1;
this._loginTb.bindRewardInfo.leftTime < 0 && (this._loginTb.bindRewardInfo.leftTime = 0);
}
r.GlobalVar.OTPCountTime--;
r.GlobalVar.OTPCountTime < 0 && (r.GlobalVar.OTPCountTime = 0);
};
Object.defineProperty(e.prototype, "isFinishAllBigSale", {
get: function() {
return this.data && this.data.first_charge && this.data.first_charge.leftTime && this.data.first_charge.leftTime > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "canSafebox", {
get: function() {
return Math.floor(this.data.gmoney) > 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bonusString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.bonus + this.data.gmoney);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bonusBString", {
get: function() {
return o.CmmUtils.NumberToBString(this.data.bonus + this.data.gmoney);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bonusNumber", {
get: function() {
return this.data.bonus + this.data.gmoney;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bonusOnlyNumber", {
get: function() {
return this.data.bonus;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "bonusOnlyString", {
get: function() {
return o.CmmUtils.NumberToHallString(this.data.bonus);
},
enumerable: !1,
configurable: !0
});
e.prototype.checkFastBuy = function() {
return 1 == this.data.first_charge;
};
e.prototype.bindPhone = function(e) {
this.data.tel_no = e;
dispatch(i.default.Event.MobileBlind_State);
};
e.prototype.updateOnlyBouns = function(e) {
null != e && (this.data.bonus = e);
dispatch(i.default.Event.update_money);
};
e.prototype.updateMoney = function(e) {
null != e && (this.data.money = e);
dispatch(i.default.Event.update_money);
};
e.prototype.updateGameMoney = function(e) {
null != e && (this.data.gameMoney = e);
dispatch(i.default.Event.update_money);
};
e.prototype.addMoney = function(e) {
this.data.money += e;
dispatch(i.default.Event.update_money);
};
e.prototype.addOnlyBouns = function(e) {
this.data.bonus += e;
dispatch(i.default.Event.update_money);
};
e.prototype.updateMoneyExe = function(e) {
null != e && (this.data.chips = e);
dispatch(i.default.Event.update_money);
};
e.prototype.updateAvatar = function(e) {
this.data.avatar = e;
dispatch(i.default.Event.update_money);
};
e.prototype.save = function(e, t) {
App.storage.setItem(this.uid + "." + e, t);
};
e.prototype.getLocalValue = function(e, t) {
return App.storage.getItem(this.uid + "." + e, t);
};
e.prototype.checkDay = function(e) {
if (this._mySaveKeys[e]) return !1;
var t = this.getLocalValue(e);
null == t && (t = "0");
return o.CmmUtils.Since(+t) > 864e5;
};
e.prototype.saveNow = function(e) {
if (!this._mySaveKeys[e]) {
this._mySaveKeys[e] = o.CmmUtils.msec;
this.save(e, o.CmmUtils.msec);
}
};
Object.defineProperty(e.prototype, "open_h5share", {
get: function() {
return !!this.data.open_h5share && 1 == this.data.open_h5share;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "open_h5link", {
get: function() {
return this.data.open_h5link;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isLuckySdk", {
get: function() {
return 1 == this.data.use_lucky_sdk;
},
enumerable: !1,
configurable: !0
});
e.prototype.saveAgameMoney = function() {
var t = App.storage.getItem(c.ConstString.agameData), n = JSON.parse(t);
n.money = e.self.data.money;
App.storage.setItem(c.ConstString.agameData, JSON.stringify(n));
};
e._instance = null;
return e;
}();
n.default = p;
cc._RF.pop();
}, {
"../../sdk/AppInfo": "AppInfo",
"../../sdk/GameNativeConfig": "GameNativeConfig",
"../event/CommonEvent": "CommonEvent",
"../net/CommonSender": "CommonSender",
"../net/HttpSender": "HttpSender",
"../utils/CmmUtils": "CmmUtils",
"./ConstString": "ConstString",
"./GlobalVar": "GlobalVar"
} ],
Utils: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "573e1UqFIBJ1bTmddUaWN6N", "Utils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Utils = void 0;
var o = function() {
function e() {
this.module = null;
}
e.prototype.showView = function(e, t) {
if (e) {
cc.Tween.stopAllByTag(999);
cc.tween(e).tag(999).set({
scale: .2
}).to(.2, {
scale: 1.15
}).delay(.05).to(.1, {
scale: 1
}).call(function() {
t && t();
}).start();
}
};
e.prototype.hideView = function(e, t) {
if (e) {
cc.Tween.stopAllByTag(999);
cc.tween(e).tag(999).to(.2, {
scale: 1.15
}).to(.1, {
scale: .3
}).call(function() {
t && t();
}).start();
}
};
e.prototype.isMail = function(e) {
return /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g.test(e);
};
e.prototype.isTEL = function(e) {
return /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/g.test(e);
};
e.prototype.limitString = function(e, t, n, o) {
void 0 === n && (n = 100);
void 0 === o && (o = "..");
if (e) {
e.string = t;
e.forceDoLayout();
var i = e.node.width;
if (i <= n) return;
var r = (i - n) / (i / t.length);
r = Math.ceil(r);
var a = t.substring(0, t.length - r) + o;
e.string = a;
e.forceDoLayout();
for (;e.node.width > n; ) {
a = a.substring(0, a.length - o.length - 1) + o;
e.string = a;
e.forceDoLayout();
}
e.string = a;
}
};
e.prototype.toThousandths = function(e) {
var t = "";
if (e < 0) {
e *= -1;
t = "-";
}
var n = /(?=(?!\b)(\d{3})+\.?\b)/g;
return t + e.toString().replace(/(^|\s)\d+(?=\.?\d*($|\s))/g, function(e) {
return e.replace(n, ",");
});
};
e.prototype.toFormat = function(e, t) {
void 0 === t && (t = 2);
var n = {
K: 1e3,
M: 1e6,
B: 1e9,
T: 1e12
}, o = [ "K", "M", "B", "T" ], i = "", r = "", a = 0, s = 1;
e < 0 && (s = -1);
if ((e = Math.abs(e)) < 1e3) r = e.toFixed(t); else for (var c = o.length - 1; c >= 0; c--) if ((a = e / n[o[c]]) >= 1) {
r = a.toFixed(t);
i = o[c];
break;
}
return "" + (a = parseFloat(r)) * s + i;
};
e.prototype.toNumber = function(e, t) {
void 0 === t && (t = 2);
var n = e.match(/-?\d+e?[+-]?\d+[KMBT]?|-?\d*\.\d*e?[+-]?\d*[KMBT]?|-?\d+[KMBT]?/);
if (n && n.length > 0) {
for (var o = {
K: 1e3,
M: 1e6,
B: 1e9,
T: 1e12
}, i = "", r = 0; r < n.length; r++) i += n[r];
var a = i.match(/[KMBT]/), s = "";
a && a.length > 0 && (s = a[0]);
var c = i.substring(0, i.length - s.length), l = parseFloat(c), u = o[s];
u && (l *= u);
return parseFloat(l.toFixed(t));
}
Log.e("无法匹配" + e);
return 0;
};
e.prototype.isIDNumber = function(e) {
return !!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/g.test(e);
};
e.prototype.isTencentQQ = function(e) {
return !!/^[1-9][0-9]{4,}$/.test(e);
};
e.module = "【Utils】";
return e;
}();
n.Utils = o;
cc._RF.pop();
}, {} ],
WebSocketClient: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ac51fHyw0NHz4ZiC8L4t9zI", "WebSocketClient");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = e("../../../defines/Macros"), i = function() {
function e() {
this._tag = "[WebSocketClinet]";
this._ip = "";
this._port = null;
this._protocol = "wss";
this._dataArr = [];
this._isWaitingConnect = !1;
this._conTimeOut = 10;
this._sendTimeOut = 10;
this._ws = null;
this._onOpen = null;
this._onClose = null;
this._onMessage = null;
this._onError = null;
this._closeEvent = null;
}
Object.defineProperty(e.prototype, "connectTimeOut", {
get: function() {
return this._conTimeOut;
},
set: function(e) {
this._conTimeOut = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "sendTimeOut", {
get: function() {
return this._sendTimeOut;
},
set: function(e) {
this._sendTimeOut = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onOpen", {
get: function() {
return this._onOpen;
},
set: function(e) {
this._onOpen = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onClose", {
get: function() {
return this._onClose;
},
set: function(e) {
this._onClose = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onMessage", {
get: function() {
return this._onMessage;
},
set: function(e) {
this._onMessage = e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onError", {
get: function() {
return this._onError;
},
set: function(e) {
this._onError = e;
},
enumerable: !1,
configurable: !0
});
e.prototype.init = function(e, t, n) {
this._ip = e;
this._port = t;
this._protocol = n;
this._dataArr = [];
this._conTimeOut = 10;
this._sendTimeOut = 10;
this._closeEvent = null;
};
e.prototype.connectWebSocket = function(e, t, n) {
this.init(e, t, n);
if (this._ip) {
var o = n + "://" + this._ip;
this._port && (o = o + ":" + this._port);
this._ws = new WebSocket(o);
if (this._ws) {
this._ws.binaryType = "arraybuffer";
this._ws.onopen = this.__onConected.bind(this);
this._ws.onmessage = this.__onMessage.bind(this);
this._ws.onclose = this.__onClose.bind(this);
this._ws.onerror = this.__onError.bind(this);
}
}
};
e.prototype.initWebSocket = function(e, t, n) {
if (null == e || null == e || e.length < 0) ; else if (this._ws) if (this._ws.readyState == WebSocket.CONNECTING) {
if (this._ip == e && this._port == t) return;
} else if (this._ws.readyState == WebSocket.OPEN) this._ip == e && this._port; else if (this._ws.readyState == WebSocket.CLOSING) {
this._isWaitingConnect = !0;
this._ip = e;
this._port = t;
} else {
this._ws = null;
this.connectWebSocket(e, t, n);
} else this.connectWebSocket(e, t, n);
};
e.prototype.__onConected = function(e) {
this._ws;
if (this._dataArr.length > 0) {
for (var t = 0; t < this._dataArr.length; t++) this.send(this._dataArr[t]);
this._dataArr = [];
}
this.onOpen && this.onOpen(e);
};
e.prototype.__onMessage = function(e) {
this.onMessage && this.onMessage(e);
};
e.prototype.__onClose = function(e) {
this._ws = null;
if (this._closeEvent) {
e = this._closeEvent;
this._closeEvent = null;
}
if (this._isWaitingConnect) {
this._closeEvent = null;
this.connectWebSocket(this._ip, this._port, this._protocol);
this._isWaitingConnect = !1;
} else this.onClose && this.onClose(e);
};
e.prototype.__onError = function(e) {
this.onError && this.onError(e);
};
Object.defineProperty(e.prototype, "isConnected", {
get: function() {
return !(!this._ws || this._ws.readyState !== WebSocket.OPEN);
},
enumerable: !1,
configurable: !0
});
e.prototype.send = function(e) {
this._ws && e && (this._ws.readyState === WebSocket.OPEN ? this._ws.send(e) : this._ws.readyState == WebSocket.CONNECTING ? this._dataArr.push(e) : (this._ws.readyState, 
WebSocket.CLOSING));
};
e.prototype.close = function(e) {
if (this._ws) {
this._closeEvent = {
type: o.Macro.ON_CUSTOM_CLOSE,
isEnd: e
};
this._ws.close();
}
this._dataArr = [];
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {
"../../../defines/Macros": "Macros"
} ],
ZProgressbar: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6c323MfDwdGt6FVNsKDE69t", "ZProgressbar");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.totalLength = 0;
t.progressMask = null;
t.labelValue = null;
t.tempValue = {
value: 0
};
return t;
}
t.prototype.progress = function(e) {
var t = this;
if (0 == e) {
this.tempValue = {
value: 0
};
this.setView(0);
} else {
this.node.active = !0;
this.tweener = cc.tween(this.tempValue).to(.5, {
value: e
}, {
onUpdate: function() {
t.setView(t.tempValue.value);
}
}).start();
}
};
t.prototype.setView = function(e) {
this.val = e;
var t = this.val / 1, n = this.totalLength * t;
this.progressMask.width = n;
this.labelValue.string = Math.ceil(100 * t) + "%";
};
r([ c ], t.prototype, "totalLength", void 0);
r([ c(cc.Node) ], t.prototype, "progressMask", void 0);
r([ c(cc.Label) ], t.prototype, "labelValue", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
ZRollAction: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "d4c54KvmCNENKQscCCULmZ1", "ZRollAction");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/enum/GlobalEnum"), s = e("../../../scripts/common/utils/RandomUtil"), c = e("./ZRollElement"), l = cc._decorator, u = l.ccclass, p = (l.property, 
function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.endElements = [];
t.result = null;
t.isRolling = !1;
t.speed = 2e3;
t.dtTime = .02;
t.curRollRunType = a.GlobalEnum.RollRunType.Normal;
t.curRollElementsConfig = [];
return t;
}
t.prototype.initData = function(e, t, n, o, i) {
var r = this;
this.accelerateDelayTime = 0;
this.nextRollAction = o;
this.rollIndex = e;
this.rollConfig = t;
this.speed = t.speed;
this.fixedSpeed = t.speed;
this.name = t.name;
this.interval = t.interval || 0;
this.randomMin = t.randomIconRange ? t.randomIconRange.x : 0;
this.randomMax = t.randomIconRange ? t.randomIconRange.y : t.elementCount;
this.view = i;
this.elements = [];
this.lockedEndElements = [];
this.node.destroyAllChildren();
this.maxNumY = t.numY + 2;
this.halfCount = t.numY / 2 - .5;
this.tempHalfCount = this.maxNumY / 2 - .5;
for (var a = 0; a < this.maxNumY; a++) {
var s = cc.instantiate(n);
s.name = "element" + a;
this.node.addChild(s);
s.position = cc.v3(0, (this.tempHalfCount - a) * s.getContentSize().height, 0);
var l = s.getComponent(c.default);
l.resetPostion = s.position;
l.index = a;
l.rollIndex = this.rollIndex;
l.finish = !1;
this.elements.push(l);
a > 0 && a < this.maxNumY - 1 && this.lockedEndElements.push(l);
}
this.elementCount = this.elements.length;
this.elements.forEach(function(e) {
0 == e.index ? e.lastElement = r.elements[r.elementCount - 1] : e.lastElement = r.elements[e.index - 1];
e.index == r.elementCount - 1 ? e.nextElement = r.elements[0] : e.nextElement = r.elements[e.index + 1];
});
this.sizeY = this.elements[0].node.getContentSize().height;
this.minY = this.elements[this.elementCount - 1].node.position.y;
this.maxY = this.elements[0].node.position.y;
this.isRolling = !1;
this.result = new Array();
this.halfUp = (this.halfCount + 1) * this.sizeY;
this.halfDown = -this.halfUp;
for (a = 0; a < this.elements.length; a++) this.elements[a].init(t);
this.randomAllElement();
for (a = 0; a < this.elements.length; a++) this.elements[a].setDefault();
this.isLocked = !1;
};
t.prototype.setLock = function(e) {
if (this.isLocked != e) {
this.isLocked = e;
if (this.isLocked) {
this.endElements = [];
for (var t = this.lockedEndElements.length - 1; t >= 0; t--) this.endElements.push(this.lockedEndElements[t]);
this.resetPosition();
}
}
};
t.prototype.setLockElement = function(e) {
for (var t = 0; t < this.endElements.length; t++) this.endElements[t].setResNorml(e[t]);
};
t.prototype.startRoll = function() {
var e = this;
if (!this.isLocked) {
for (var t = 0; t < this.elements.length; t++) {
var n = this.elements[t];
n.finish = !1;
cc.Tween.stopAllByTarget(n.node);
}
this.endElements = [];
this.speed = this.rollConfig.speed;
this.speed = this.fixedSpeed;
this.accelerateDelayTime = 0;
if (this.view.isCheckCallback_StartRoll && this.rollConfig.rollStartCB) {
this.view.isCheckCallback_StartRoll = !1;
this.rollConfig.rollStartCB(this.name);
}
switch (this.rollConfig.inEase) {
case 1:
this.inBack(function() {
e.isRolling = !0;
e.rollConfig.rollEaseFinishCB && e.rollConfig.rollEaseFinishCB(e.name, e.rollIndex);
});
break;

default:
this.isRolling = !0;
this.rollConfig.rollEaseFinishCB && this.rollConfig.rollEaseFinishCB(this.name, this.rollIndex);
}
}
};
t.prototype.sotpRoll = function(e) {
e && this.inBackTween && this.inBackTween.stop();
this.result = this.view.results[this.rollIndex];
if (this.isLocked) {
this.result.reverse();
for (var t = 0; t < this.endElements.length; t++) (r = this.endElements[t]).setResNorml(this.result[t].index);
this.nextRollAction && this.nextRollAction.sotpRoll(!1);
} else {
this.isRolling = !1;
var n = [];
for (t = 0; t < this.elements.length; t++) {
(r = this.elements[t]).setState(a.GlobalEnum.ElementState.Normal);
r.node.y < this.minY && n.push(r);
}
1 == n.length ? this.resetElement(n[0]) : n.length > 1 && this.overSpeedResetElement(n);
for (t = 0; t < this.elements.length; t++) (r = this.elements[t]).node.y >= this.halfUp && this.endElements.push(r);
this.endElements.sort(function(e, t) {
return e.node.y - t.node.y;
});
var o = this.endElements.length - this.rollConfig.numY;
if (o > 0) for (t = 0; t < o; t++) this.endElements.pop(); else if (o < 0) {
o = -o;
for (t = 0; t < o; t++) if (0 == this.endElements.length) {
this.resetPosition();
this.endElements.push(this.elements[0]);
} else {
var i = this.endElements[this.endElements.length - 1].lastElement;
this.endElements.push(i);
}
}
this.result.reverse();
for (t = 0; t < this.endElements.length; t++) {
var r;
(r = this.endElements[t]).setResNorml(this.result[t].index);
if (0 == t) {
r.targetPos = this.result[t].isEmpty ? cc.v2(0, -this.sizeY / 2 + (1 - this.halfCount) * this.sizeY) : cc.v2(0, -this.sizeY * this.halfCount);
r.finish = !0;
}
}
this.setToFixedPos(e);
}
};
t.prototype.setSpeed = function(e) {
this.speed = e;
};
t.prototype.startAccelerateBack = function() {
this.rollConfig.rollAccelerateStartCB && this.rollConfig.rollAccelerateStartCB(this.rollIndex);
};
t.prototype.setAccelerateSpeed = function(e, t) {
if (this.nextRollAction) {
this.nextRollAction.speed = e;
this.nextRollAction.startAccelerateBack();
this.accelerateDelayTime = t;
}
};
t.prototype.stopAnim = function() {
if (this.elements) for (var e = 0; e < this.elements.length; e++) this.elements[e] && this.elements[e].setState(a.GlobalEnum.ElementState.Normal);
};
t.prototype.setToFixedPos = function(e) {
for (var t = 0; t < this.endElements.length; t++) {
var n = this.endElements[t];
if (n.finish) {
this.moveToTargetPos(n, e);
return;
}
}
};
t.prototype.moveToTargetPos = function(e, t) {
var n = this, o = e.node.y;
cc.Tween.stopAllByTarget(e.node);
var i = "backOut";
this.rollConfig.stopEaseStr && (i = this.rollConfig.stopEaseStr);
cc.tween(e.node).to(.3, {
position: cc.v3(0, e.targetPos.y, 0)
}, {
easing: i,
onUpdate: function() {
var t = o - e.node.y;
o = e.node.y;
n.moveOtherElements(t, e, e.index, !0);
}
}).call(function() {
e.nextElement.node.y = e.node.y - n.sizeY;
n.rollConfig.gameFinishEndCB && n.rollConfig.gameFinishEndCB(n.rollIndex);
}).start();
this.scheduleOnce(function() {
n.rollConfig.rollFinishCB(t, n.rollIndex);
t || n.nextRollAction && (n.accelerateDelayTime > 0 ? n.scheduleOnce(function() {
n.nextRollAction.sotpRoll(!1);
}, n.accelerateDelayTime) : n.nextRollAction.sotpRoll(!1));
}, this.interval);
};
t.prototype.moveOtherElements = function(e, t) {
for (var n = 0; n < this.elements.length; n++) t != (i = this.elements[n]) && (i.node.y = i.node.y - e);
var o = [];
for (n = 0; n < this.elements.length; n++) {
var i;
(i = this.elements[n]).node.y < this.minY && o.push(i);
}
1 == o.length ? this.resetElement(o[0]) : o.length > 1 && this.overSpeedResetElement(o);
};
t.prototype.randomAllElement = function() {
for (var e = 0; e < this.elements.length; e++) {
var t = this.elements[e], n = 0;
if (this.rollConfig.elementRange_Init) {
var o = this.rollConfig.elementRange_Init[this.rollIndex];
n = o[s.RandomUtil.randomRange(0, o.length)] - 1;
} else n = s.RandomUtil.randomRange(this.randomMin, this.randomMax);
t.setRes(n);
}
};
t.prototype.randomAllElementByBetIndex = function() {};
t.prototype.customUpdate = function() {
this.isRolling && this.updateElementPos();
};
t.prototype.updateElementPos = function() {
for (var e = this.dtTime * this.speed, t = 0; t < this.elements.length; t++) (o = this.elements[t]).node.y = o.node.y - e;
var n = [];
for (t = 0; t < this.elements.length; t++) {
var o;
(o = this.elements[t]).node.y < this.minY && n.push(o);
}
1 == n.length ? this.resetElement(n[0]) : n.length > 1 && this.overSpeedResetElement(n);
};
t.prototype.resetElement = function(e) {
e.node.y = this.sizeY + e.nextElement.node.y;
this.resetByElement(e);
};
t.prototype.setCurRollElementConfig = function(e) {
this.curRollElementsConfig = [];
this.curRollRunType = e;
switch (e) {
case a.GlobalEnum.RollRunType.Normal:
if (this.rollConfig.elementRange_Run) {
var t = this.rollConfig.elementRange_Run[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (var n = 0; n < t.length; n++) for (var o = t[n], i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = t;
}
break;

case a.GlobalEnum.RollRunType.Free:
var r = this.rollConfig.elementRange_Run_Free[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (n = 0; n < r.length; n++) for (o = r[n], 
i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = r;
break;

case a.GlobalEnum.RollRunType.Respin:
var s = this.rollConfig.elementRange_Run_Respin[this.rollIndex];
if (this.rollConfig.elementRangeRate) for (n = 0; n < s.length; n++) for (o = s[n], 
i = 0; i < this.rollConfig.elementRangeRate[o - 1]; i++) this.curRollElementsConfig.push(o); else this.curRollElementsConfig = s;
}
};
t.prototype.resetByElement = function(e) {
if (this.isRolling) {
var t;
t = this.curRollElementsConfig.length > 0 ? this.curRollElementsConfig[s.RandomUtil.randomRange(0, this.curRollElementsConfig.length)] - 1 : s.RandomUtil.randomRange(this.randomMin, this.randomMax);
e.setRes(t);
}
};
t.prototype.overSpeedResetElement = function(e) {
if (e.length == this.elementCount) {
var t = this.getMinYElement(e);
t.node.y = this.maxY;
this.resetByElement(t);
this.resetMinByElement(t, t.index);
} else {
var n = this.getMaxYElement(this.elements), o = this.getMaxYElement(e);
this.resetMaxByElement(n, o.index);
}
};
t.prototype.resetMinByElement = function(e, t) {
if (e.nextElement.index != t) {
e.nextElement.node.y = e.node.y - this.sizeY;
this.resetByElement(e.nextElement);
this.resetMinByElement(e.nextElement, t);
}
};
t.prototype.resetMaxByElement = function(e, t) {
if (e.lastElement.index != t) {
e.lastElement.node.y = e.node.y + this.sizeY;
this.resetByElement(e.lastElement);
this.resetMaxByElement(e.lastElement, t);
}
};
t.prototype.getMinYElement = function(e) {
for (var t = Number.MAX_SAFE_INTEGER, n = -1, o = 0; o < e.length; o++) if (e[o].node.y < t) {
n = o;
t = e[o].node.y;
}
return e[n];
};
t.prototype.getMaxYElement = function(e) {
for (var t = -Number.MAX_SAFE_INTEGER, n = -1, o = 0; o < e.length; o++) if (e[o].node.y > t) {
n = o;
t = e[o].node.y;
}
return e[n];
};
t.prototype.inBack = function(e) {
var t = this;
this.inBackTween && this.inBackTween.stop();
var n = this.elements[0];
n.targetPos = cc.v2(0, n.node.position.y + 120);
var o = n.node.y;
this.inBackTween = cc.tween(n.node).to(.2, {
position: cc.v3(0, n.targetPos.y, 0)
}, {
easing: "backIn",
onUpdate: function() {
var e = o - n.node.y;
o = n.node.y;
t.moveOtherElements(e, n, n.index, !0);
}
}).call(function() {
e();
}).start();
};
t.prototype.resetPosition = function() {
for (var e = 0; e < this.elements.length; e++) this.elements[e].resetPos();
};
t.prototype.setExtraFunction = function(e) {
for (var t = 0; t < this.elements.length; t++) this.elements[t].setExtraFunction(e);
};
return r([ u ], t);
}(cc.Component));
n.default = p;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/common/utils/RandomUtil": "RandomUtil",
"./ZRollElement": "ZRollElement"
} ],
ZRollControler: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "befa8QtdYtKDp8F1uAoLJTu", "ZRollControler");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/enum/GlobalEnum"), s = e("./ZRollAction"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.prefab = null;
t.rollActions = [];
t.isCheckCallback_StartRoll = !0;
return t;
}
t.prototype.onLoad = function() {
this.schedule(this.customUpdate.bind(this), .015, cc.macro.REPEAT_FOREVER);
};
t.prototype.initRollAcionts = function() {
for (var e = this.node.children, t = 0; t < e.length; t++) this.rollActions.push(e[t].getComponent(s.default));
};
t.prototype.initData = function(e) {
this.rollConfig = e;
0 == this.rollActions.length && this.initRollAcionts();
for (var t = 0; t < this.rollActions.length; t++) {
var n = this.rollActions[t + 1];
this.rollActions[t].initData(t, e, this.prefab, n, this);
}
this.setRollRunType(a.GlobalEnum.RollRunType.Normal);
};
t.prototype.setRollRunType = function(e) {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].setCurRollElementConfig(e);
};
t.prototype.getUnlockedCount = function() {
for (var e = 0, t = 0; t < this.rollActions.length; t++) this.rollActions[t].isLocked || e++;
return e;
};
t.prototype.setLocked = function(e) {
this.rollActions[e].setLock(!0);
};
t.prototype.setLockElement = function(e, t) {
this.rollActions[e].stopAnim();
this.rollActions[e].setLockElement(t);
};
t.prototype.setUnLocked = function(e) {
this.rollActions[e].setLock(!1);
};
t.prototype.resetUnLocked = function() {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].setLock(!1);
};
t.prototype.getRollAction = function(e) {
return this.rollActions[e];
};
t.prototype.getRollAction_All = function() {
return this.rollActions;
};
t.prototype.startRoll = function(e) {
var t = this;
void 0 === e && (e = 0);
this.isCheckCallback_StartRoll = !0;
if (e > 0) {
var n = this.rollActions.length - 2, o = 0;
this.rollActions[o].stopAnim();
this.rollActions[o].startRoll();
o++;
n >= 0 && this.schedule(function() {
t.rollActions[o].stopAnim();
t.rollActions[o].startRoll();
o++;
}, e, n);
} else for (var i = 0; i < this.rollActions.length; i++) {
this.rollActions[i].stopAnim();
this.rollActions[i].startRoll();
}
};
t.prototype.resetAllElementState = function() {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].stopAnim();
};
t.prototype.setAllElement = function() {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e];
};
t.prototype.setAllElementExtra = function(e) {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].setExtraFunction(e);
};
t.prototype.initResult = function(e) {
this.results = e;
};
t.prototype.quickStopRoll = function() {
for (var e = 0; e < this.rollActions.length; e++) this.rollActions[e].sotpRoll(!0);
};
t.prototype.stopRoll = function() {
this.rollActions[0].sotpRoll(!1);
};
t.prototype.stopUnlockRoll = function() {
for (var e = 0; e < this.rollActions.length; e++) {
var t = this.rollActions[e];
if (!t.isLocked) {
t.sotpRoll(!1);
return;
}
}
};
t.prototype.starAccelerate = function(e, t) {
this.rollActions[e].setAccelerateSpeed(this.rollConfig.accelerate, t);
};
t.prototype.playEndAnim = function(e, t) {
for (var n = [], o = 0; o < this.rollActions.length; o++) for (var i = this.rollActions[o], r = i.endElements.length - 1; r >= 0; r--) {
var a = i.endElements[r];
n.push(a);
}
for (o = 0; o < e.length; o++) n[e[o]].setState(t[o]);
};
t.prototype.getEndNodes = function() {
for (var e = [], t = 0; t < this.rollActions.length; t++) for (var n = this.rollActions[t], o = n.endElements.length - 1; o >= 0; o--) {
var i = n.endElements[o];
e.push(i);
}
return e;
};
t.prototype.getEndNodesByIndex = function(e) {
for (var t = [], n = this.rollActions[e], o = n.endElements.length - 1; o >= 0; o--) {
var i = n.endElements[o];
t.push(i);
}
return t;
};
t.prototype.getElementNodes = function() {
for (var e = [], t = 0; t < this.rollActions.length; t++) for (var n = this.rollActions[t], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
e.push(i);
}
return e;
};
t.prototype.getElementNodesByIndex = function(e) {
for (var t = [], n = this.rollActions[e], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
t.push(i);
}
return t;
};
t.prototype.getElementNodes_TopToBottom = function() {
for (var e = [], t = 0; t < this.rollActions.length; t++) for (var n = this.getElementNodesByIndex_TopToBottom(t), o = 0; o < n.length; o++) {
var i = n[o];
e.push(i);
}
return e;
};
t.prototype.getElementNodesByIndex_TopToBottom = function(e) {
for (var t = [], n = this.rollActions[e], o = n.elements.length - 1; o >= 0; o--) {
var i = n.elements[o];
t.push(i);
}
for (var r = t.length, a = 1; a < r; a++) {
var s = t[a];
for (o = a - 1; o >= 0 && t[o].node.position.y > s.node.position.y; ) {
t[o + 1] = t[o];
--o;
}
t[o + 1] = s;
}
return t.reverse();
};
t.prototype.customUpdate = function(e) {
for (var t = 0; t < this.rollActions.length; t++) this.rollActions[t].customUpdate(e);
};
r([ u(cc.Prefab) ], t.prototype, "prefab", void 0);
return r([ l ], t);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"./ZRollAction": "ZRollAction"
} ],
ZRollElement: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f949bCiDfBC/KN7H+/yqUqH", "ZRollElement");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/enum/GlobalEnum"), s = e("../ElementState/ElementState"), c = e("../ElementState/ExtraState"), l = cc._decorator, u = l.ccclass, p = l.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.resetPostion = cc.Vec3.ZERO;
t.defautl = a.GlobalEnum.ElementState.Normal;
return t;
}
t.prototype.init = function(e) {
this.extraState = this.node.getComponentInChildren(c.default);
this.extraState && this.extraState.init(e);
this.rollConfig = e;
this.elementIns = [];
for (var t = this.node.children, n = 0; n < t.length; n++) {
var o = t[n].getComponent(s.default);
o && this.elementIns.push(o);
}
for (n = 0; n < this.elementIns.length; n++) this.elementIns[n].init(e);
};
t.prototype.resetPos = function() {
this.node.position = this.resetPostion;
};
t.prototype.setDefault = function() {
this.setState(this.defautl);
};
t.prototype.setExtraFunction = function(e) {
for (var t = 0; t < this.elementIns.length; t++) this.elementIns[t].setExtraFunction(e);
};
t.prototype.setState = function(e) {
this.curElement ? this.curElement.show(e) : console.error("没有钙元素" + e);
this.extraState && (a.GlobalEnum.ElementState.Reward == e ? this.rollConfig.rewardExtraEffect && this.extraState.show() : this.extraState.hide());
};
t.prototype.setRes = function(e) {
this.elementIndex = e;
this.elementValue = this.elementIndex + 1;
for (var t = 0; t < this.elementIns.length; t++) this.elementIns[t].hide();
this.curElement = this.elementIns[e];
this.rollConfig.turnType ? this.curElement.show(a.GlobalEnum.ElementState.BlurTrun) : this.curElement.show(a.GlobalEnum.ElementState.Turn);
};
t.prototype.setResNorml = function(e) {
this.elementIndex = e;
this.elementValue = this.elementIndex + 1;
for (var t = 0; t < this.elementIns.length; t++) this.elementIns[t].hide();
this.curElement = this.elementIns[e];
this.curElement.show(a.GlobalEnum.ElementState.Normal);
};
t.prototype.getCurElementStateNode = function() {
for (var e = 0; e < this.elementIns.length; e++) if (this.elementIns[e].node.active) return this.elementIns[e];
};
r([ p({
type: cc.Enum(a.GlobalEnum.ElementState)
}) ], t.prototype, "defautl", void 0);
return r([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../ElementState/ElementState": "ElementState",
"../ElementState/ExtraState": "ExtraState"
} ],
ZRollMgr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "187c1smehRCsqimymocNih6", "ZRollMgr");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/enum/GlobalEnum"), s = e("../../../scripts/framework/componects/EventComponent"), c = e("../Line/BaseLineMgr"), l = e("./ZRollControler"), u = cc._decorator, p = u.ccclass, d = u.property, h = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.rollControler = null;
t.lineMgr = null;
t.animNode = null;
t.accelerateEffects = [];
return t;
}
t.prototype.initData = function(e) {
this.mainRollConfig = {
speed: 2e3,
accelerate: 3e3,
numY: 3,
lineCount: 5,
easeTime: .3,
elementCount: 11,
rewardParentOrginScale: 1,
name: "roll",
interval: .15,
turnType: 1,
stopTime: 1.55,
inEase: 1,
rollStartCB: this.rollStartCB.bind(this),
rollEaseFinishCB: this.rollEaseFinishCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this)
};
if (e) {
this.mainRollConfig.speed = e.speed;
this.mainRollConfig.accelerate = e.accelerate;
this.mainRollConfig.numY = e.numY;
this.mainRollConfig.easeTime = e.easeTime;
this.mainRollConfig.lineCount = e.lineCount;
this.mainRollConfig.elementCount = e.elementCount;
this.mainRollConfig.name = e.name;
this.mainRollConfig.interval = e.interval;
this.mainRollConfig.turnType = e.turnType;
this.mainRollConfig.stopTime = e.stopTime;
this.mainRollConfig.inEase = e.inEase;
this.mainRollConfig.rewardExtraEffect = e.rewardExtraEffect;
this.mainRollConfig.rewardParent = this.animNode;
this.mainRollConfig.rewardParentOrginScale = e.rewardParentOrginScale;
this.mainRollConfig.betIndex = e.betIndex;
e.numY_EveryReel && (this.mainRollConfig.numY_EveryReel = e.numY_EveryReel);
this.mainRollConfig.fixedParent1 = e.fixedParent1;
this.mainRollConfig.fixedParent2 = e.fixedParent2;
this.mainRollConfig.fixedParent3 = e.fixedParent3;
e.elementRange_Init && (this.mainRollConfig.elementRange_Init = e.elementRange_Init);
e.elementRange_Run && (this.mainRollConfig.elementRange_Run = e.elementRange_Run);
e.elementRange_Run_Free && (this.mainRollConfig.elementRange_Run_Free = e.elementRange_Run_Free);
e.elementRange_Run_Respin && (this.mainRollConfig.elementRange_Run_Respin = e.elementRange_Run_Respin);
e.elementFixed_Run && (this.mainRollConfig.elementFixed_Run = e.elementFixed_Run);
e.rollStartCB && (this.mainRollConfig.rollStartCB = e.rollStartCB);
e.rollEaseFinishCB && (this.mainRollConfig.rollEaseFinishCB = e.rollEaseFinishCB);
e.rollFinishCB && (this.mainRollConfig.rollFinishCB = e.rollFinishCB);
e.rollAccelerateStartCB && (this.mainRollConfig.rollAccelerateStartCB = e.rollAccelerateStartCB);
e.rollStopAudioCB && (this.mainRollConfig.rollStopAudioCB = e.rollStopAudioCB);
e.gameFinishEndCB && (this.mainRollConfig.gameFinishEndCB = e.gameFinishEndCB);
}
this.lineMgr && this.lineMgr.init(this.mainRollConfig, this.node.scale);
this.rollControler.initData(this.mainRollConfig);
};
t.prototype.startRoll = function(e) {
void 0 === e && (e = 0);
this.rollControler.startRoll(0);
};
t.prototype.starDelaytRoll = function(e) {
void 0 === e && (e = 0);
this.rollControler.startRoll(e);
};
t.prototype.initResult = function(e) {
this.results = e.results;
this.awardPos = e.awardPos;
this.awardline = e.awardline;
this.rollControler.initResult(e.results);
};
t.prototype.quickStopRoll = function() {
this.rollControler.quickStopRoll();
};
t.prototype.stopRoll = function() {
this.rollControler.stopRoll();
};
t.prototype.stopUnlockRoll = function() {
this.rollControler.stopUnlockRoll();
};
t.prototype.resetAllElementState = function() {
this.rollControler.resetAllElementState();
};
t.prototype.setAllElement = function(e) {
this.rollControler.setAllElement(e);
};
t.prototype.setAllElementExtra = function(e) {
this.rollControler.setAllElementExtra(e);
};
t.prototype.getUnlockCount = function() {
return this.rollControler.getUnlockedCount();
};
t.prototype.playEndAnim = function() {
this.rollControler.playEndAnim(this.awardPos, this.getStates());
};
t.prototype.setLocked = function(e) {
this.rollControler.setLocked(e);
};
t.prototype.setLockedElement = function(e, t) {
this.rollControler.setLockElement(e, t);
};
t.prototype.setUnLocked = function(e) {
for (var t = 0; t < e.length; t++) {
var n = e[t];
this.rollControler.setUnLocked(n);
}
};
t.prototype.resetUnLocked = function() {
this.rollControler.resetUnLocked();
};
t.prototype.getEndNodes = function() {
return this.rollControler.getEndNodes();
};
t.prototype.getEndNodesByIndex = function(e) {
return this.rollControler.getEndNodesByIndex(e);
};
t.prototype.getIndexEndNodesByValue = function(e, t) {
for (var n = this.rollControler.getEndNodesByIndex(e), o = [], i = 0; i < n.length; i++) {
var r = n[i];
r.elementValue == t && o.push(r);
}
return o;
};
t.prototype.getEndNodesByValue = function(e) {
for (var t = this.rollControler.getEndNodes(), n = [], o = 0; o < t.length; o++) {
var i = t[o];
i.elementValue == e && n.push(i);
}
return n;
};
t.prototype.starAccelerate = function(e, t) {
this.rollControler.starAccelerate(e, t);
};
t.prototype.getRollAction = function(e) {
return this.rollControler.getRollAction(e);
};
t.prototype.showRewardLines = function(e) {
this.lineMgr && this.awardline && this.awardline.length > 0 && this.lineMgr.showRewardLines(this.awardline, e);
};
t.prototype.hideLines = function() {
this.lineMgr && this.lineMgr.hide();
};
t.prototype.rollStartCB = function() {
this.curSpinIndex = -1;
};
t.prototype.rollAccelerateStartCB = function() {};
t.prototype.rollEaseFinishCB = function() {};
t.prototype.rollFinishCB = function(e, t) {
this.curSpinIndex = t;
this.mainRollConfig.numY;
};
t.prototype.awardStep1 = function() {
if (this.awardPos.length > 0) {
this.showRewardLines(a.GlobalEnum.LinesShowType.None);
this.playEndAnim();
}
};
t.prototype.getStates = function() {
for (var e = [], t = this.awardPos, n = 0; n < t.length; n++) e.push(a.GlobalEnum.ElementState.Reward);
return e;
};
r([ d(l.default) ], t.prototype, "rollControler", void 0);
r([ d(c.default) ], t.prototype, "lineMgr", void 0);
r([ d(cc.Node) ], t.prototype, "animNode", void 0);
r([ d(cc.Node) ], t.prototype, "accelerateEffects", void 0);
return r([ p ], t);
}(s.default);
n.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": "GlobalEnum",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../Line/BaseLineMgr": "BaseLineMgr",
"./ZRollControler": "ZRollControler"
} ],
aesres: [ function(e, t, n) {
(function(o) {
"use strict";
cc._RF.push(t, "61e3cIPpFRNmJzfd5EGMn6y", "aesres");
var i = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../common/net/HttpSender"), a = cc._decorator, s = a.ccclass, c = (a.property, 
function() {
function e() {}
t = e;
e.encrypt = function(e) {
var t = this.simpleXorEncrypt(e, r.default.httpSecretKey);
return o.from(t).toString("base64");
};
e.dencrypt = function(e) {
var n = window.atob(e);
n = t.simpleXorDecrypt(n, r.default.httpSecretKey);
return e;
};
e.simpleXorEncrypt = function(e, t) {
for (var n = "", o = 0; o < e.length; o++) {
var i = e.charCodeAt(o) ^ t.charCodeAt(o % t.length);
n += String.fromCharCode(i);
}
return n;
};
e.simpleXorDecrypt = function(e, n) {
return t.simpleXorEncrypt(e, n);
};
var t;
return t = i([ s ], e);
}());
n.default = c;
cc._RF.pop();
}).call(this, e("buffer").Buffer);
}, {
"../common/net/HttpSender": "HttpSender",
buffer: 6
} ],
gameLoading: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e680eX49uBFHKe0UMsxywGM", "gameLoading");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.load_item = null;
t.speed = 2;
return t;
}
t.prototype.onEnable = function() {
if (this.load_item) {
var e = cc.repeatForever(cc.rotateBy(this.speed, 360));
this.load_item.node.runAction(e);
}
};
r([ c(cc.Sprite) ], t.prototype, "load_item", void 0);
r([ c(cc.Float) ], t.prototype, "speed", void 0);
return r([ s ], t);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
slotsOperate: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a3ccbpSPFlKr6SC6xdoaE2U", "slotsOperate");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), r = this && this.__decorate || function(e, t, n, o) {
var i, r = arguments.length, a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
return r > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/event/CommonEvent"), s = e("../../../scripts/common/utils/CmmUtils"), c = e("../../../scripts/framework/componects/EventComponent"), l = e("../../../scripts/framework/defines/Enums"), u = e("../../../scripts/sdk/SdkManager"), p = e("./AudioMgr"), d = cc._decorator, h = d.ccclass, f = d.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spin = null;
t.stop = null;
t.adReward = null;
t.bet = null;
t.betMore = null;
t.betLabel = null;
t.curCoins = null;
t.winLabel = null;
t._data = null;
t.betValue = 1;
t.curCoinsValue = 1e4;
return t;
}
t.prototype.init = function(e) {
this._data = e;
this.clickBetItem(0);
this.updateCoins();
};
t.prototype.addEvents = function() {
var e = this;
this.onN(this.spin.node, l.NodeEvent.click, function() {
p.default.instance.playEffect("spin");
e._data && e._data.spinCallBack && e._data.spinCallBack();
});
this.onN(this.stop.node, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
e._data && e._data.stopCallBack && e._data.stopCallBack();
});
this.onN(this.adReward, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
u.default.showRewardedAd();
});
this.onN(this.bet, l.NodeEvent.click, function() {
p.default.instance.playEffect("click");
e.betMore.active = !0;
});
for (var t = this.betMore.children[1].children, n = 0; n < t.length; n++) {
var o = t[n];
this.onN(o, l.NodeEvent.click, this.clickBetItem.bind(this, n));
}
this.onD(a.SdkEvent.SdkEvent_finish_video_back, function() {
Log.d("激励视频播放完成，发放奖励");
e.updateCoins(1e3);
});
};
t.prototype.setBtnState = function(e) {
Log.e("setBtnState = " + e);
switch (e) {
case 1:
this.spin.interactable = !0;
this.spin.node.active = !0;
this.stop.node.active = !1;
this.stop.interactable = !1;
break;

case 2:
this.spin.interactable = !1;
this.spin.node.active = !1;
this.stop.interactable = !0;
this.stop.node.active = !0;
break;

case 3:
this.spin.interactable = !1;
this.spin.node.active = !1;
this.stop.interactable = !1;
this.stop.node.active = !0;
break;

default:
this.spin.interactable = !1;
this.stop.interactable = !1;
}
};
t.prototype.clickBetItem = function(e) {
p.default.instance.playEffect("click");
this.betValue = this._data.betValues[e];
this.betLabel.string = this.betValue.toString();
this.betMore.active = !1;
};
t.prototype.showWin = function(e) {
this.winLabel.string = e > 0 ? "WIN " + s.CmmUtils.NumberToHallString(e) : "Good Luck";
};
t.prototype.isCanSpin = function() {
return !(this.curCoinsValue < this.betValue);
};
t.prototype.spinUpadateCoin = function() {
this.curCoinsValue -= this.betValue;
App.storage.setItem("coins", this.curCoinsValue);
this.curCoins.string = s.CmmUtils.NumberToHallString(this.curCoinsValue);
};
t.prototype.updateCoins = function(e) {
if (e) {
this.curCoinsValue += e;
App.storage.setItem("coins", this.curCoinsValue);
}
this.curCoinsValue = App.storage.getItem("coins", 1e4);
this.curCoins.string = s.CmmUtils.NumberToHallString(this.curCoinsValue);
};
r([ f(cc.Button) ], t.prototype, "spin", void 0);
r([ f(cc.Button) ], t.prototype, "stop", void 0);
r([ f(cc.Node) ], t.prototype, "adReward", void 0);
r([ f(cc.Node) ], t.prototype, "bet", void 0);
r([ f(cc.Node) ], t.prototype, "betMore", void 0);
r([ f(cc.Label) ], t.prototype, "betLabel", void 0);
r([ f(cc.Label) ], t.prototype, "curCoins", void 0);
r([ f(cc.Label) ], t.prototype, "winLabel", void 0);
return r([ h ], t);
}(c.default);
n.default = _;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": "CommonEvent",
"../../../scripts/common/utils/CmmUtils": "CmmUtils",
"../../../scripts/framework/componects/EventComponent": "EventComponent",
"../../../scripts/framework/defines/Enums": "Enums",
"../../../scripts/sdk/SdkManager": "SdkManager",
"./AudioMgr": "AudioMgr"
} ]
}, {}, [ "Application", "MainController", "SlotsDataUtil", "AnimationPlayState", "BaseAnimState", "DragonPlayState", "SpinePlayState", "SpritePlayState", "TAtlasPlayState", "TUVPlayState", "ElementState", "ExtraState", "BaseLineItem ", "BaseLineMgr", "LineItem", "LineItemSize", "LineMgr", "SimpleLineMgr", "RollElement", "ZRollAction", "ZRollControler", "ZRollElement", "ZRollMgr", "AudioMgr", "GameMgr", "Login", "ChooseLevelModel_A", "LevelModel_A", "PayLineItem_A", "PayLineModel_A", "PayTableItem_A", "PayTableModel_A", "TaskModel_A", "PayLinesPanel", "PayTabelPanel", "RulePanel", "FullVersionService_A", "GunService_A", "HomeTipTCService_A", "LevelLayoutMgr_A", "LevelManager_A", "LoadingGameService_A", "NextLvTipTCService_A", "RewardFinishGameService_A", "Reward_YouWin_A", "SettingChooseTC_A", "TaskService_A", "TipIsGotoTC", "SetPanel", "SlotJudge", "slotsOperate", "HotVersion", "aesres", "Animation_Nodes", "TAtlasPlay", "TAtlasPlay_Init", "TUVPlay", "Alert", "GlobalAudio", "GrayNodeColor", "Loading", "Tips", "UIContainer", "UILoading", "UIReconnect", "UpdateLoading", "ZProgressbar", "gameLoading", "CmdConfig", "Config", "ConstString", "GlobalVar", "HostInfo", "User", "Bundles", "StageData", "BundleUpdateHandlerImpl", "CmmEntry", "MainUpdateHandlerImpl", "GlobalEnum", "CommonEvent", "CmdDefines", "CommonGameJson", "CommonSender", "CommonService", "GetCmdKey", "HttpSender", "ReconnectHandler", "CmmUtils", "RandomUtil", "StorageUtils", "UIUtils", "URLConfig", "Framework", "AudioComponent", "EventComponent", "GameDesignSizeTopFit", "AssetManager", "BundleManager", "CacheManager", "Resource", "ResourceLoader", "Entry", "EntryDelegate", "EntryManager", "Dispatcher", "EventProcessor", "Logger", "Net", "Http", "HttpClient", "BinaryStreamMessage", "DefaultCodec", "JsonMessage", "Message", "ProtoMessage", "Handler", "HandlerManager", "Process", "Sender", "SenderManager", "Service", "ServiceManager", "ServerConnector", "WebSocketClient", "LocalStorage", "GameView", "UIManager", "UIView", "Update", "UpdateItem", "UpdateManager", "DataCenter", "GameData", "Decorators", "Enums", "Macros", "BitEncrypt", "ByteArray", "CanvasHelper", "Singleton", "SingletonT", "Utils", "LoginEntry", "HallHandler", "HallSender", "LobbyCmd", "LobbyService", "TestJsonMessage", "CommonUIHelper", "HotUpdate", "LoginView", "LoginViewNodes", "AppInfo", "GameNativeConfig", "SdkCallBack", "SdkManager" ]);