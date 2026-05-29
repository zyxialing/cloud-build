window.__require = function t(e, o, i) {
function n(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return n(e[s][1][t] || t);
}, u, u.exports, t, e, o, i);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
AutoService_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f07da4YHtFJ0auzEEHJ1uMN", "AutoService_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/utils/CmmUtils"), l = cc._decorator, u = l.ccclass, p = l.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Main = null;
e.node_Zhezhao = null;
e.node_Move = null;
e.node_ChooseCounts = [];
e.editBox_decreases = null;
e.editBox_increases = null;
e.editBox_singleWin = null;
e.label_decreases = null;
e.label_increases = null;
e.label_singlewin = null;
e.node_switch_on_decrease = null;
e.node_switch_off_decrease = null;
e.node_switch_on_increase = null;
e.node_switch_off_increase = null;
e.node_switch_on_singlewin = null;
e.node_switch_off_singlewin = null;
e.node_StopType_decreases = null;
e.node_StopType_increases = null;
e.node_StopType_singlewin = null;
e.node_TipError = null;
e.label_TipError = null;
e.color_SetStop_Normal = cc.Color.WHITE;
e.color_SetStop_Choose = cc.Color.WHITE;
e.configCounts = [ 10, 20, 50, 100 ];
e.choseCount = 0;
e.cash_decreases = 0;
e.cash_increases = 0;
e.cash_singlewin = 0;
e.isStop_decreases = !1;
e.isStop_increases = !1;
e.isStop_singlewin = !1;
e.tween_Move = null;
e.callback_Start = null;
return e;
}
e.prototype.onDestroy = function() {
this.ClearTween();
};
e.prototype.OpenShow = function(t) {
dispatch(a.CommonEvent.EventMaskAll, .35);
this.callback_Start = t;
this.ResetState();
this.node_Move.position = cc.v3(0, 40, 0);
this.node_Move.opacity = 0;
this.tween_Move = cc.tween(this.node_Move).to(.3, {
position: cc.v3(0, -10, 0),
opacity: 255
}).start();
};
e.prototype.CloseShow = function() {
var t = this;
dispatch(a.CommonEvent.EventMaskAll, .35);
this.callback_Start = null;
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_Move).to(.3, {
position: cc.v3(0, 40, 0),
opacity: 0
}).call(function() {
t.node_Main.active = !1;
t.node_Zhezhao.active = !1;
}).start();
};
e.prototype.ResetState = function() {
this.ClearTween();
for (var t = 0; t < this.node_ChooseCounts.length; t++) this.node_ChooseCounts[t].active = !1;
this.choseCount = 0;
this.SetShow_Decreases(!1);
this.SetShow_Increases(!1);
this.SetShow_Singlewin(!1);
this.SetCashValue_Decreases(0);
this.SetCashValue_Increases(0);
this.SetCashValue_Singlewin(0);
this.node_TipError.active = !1;
this.node_Zhezhao.active = !0;
this.node_Main.active = !0;
};
e.prototype.ButtonClick_Close = function() {
this.callback_Start && this.callback_Start(null);
this.CloseShow();
};
e.prototype.ButtonClick_AutoCount0 = function() {
this.SetChooseCount(0);
};
e.prototype.ButtonClick_AutoCount1 = function() {
this.SetChooseCount(1);
};
e.prototype.ButtonClick_AutoCount2 = function() {
this.SetChooseCount(2);
};
e.prototype.ButtonClick_AutoCount3 = function() {
this.SetChooseCount(3);
};
e.prototype.ButtonClick_Switch_Decreases = function() {
this.SetShow_Decreases(!this.isStop_decreases);
};
e.prototype.ButtonClick_Reduce_Decreases = function() {
for (var t = Number.parseInt((10 * this.cash_decreases).toString()), e = (t - 1).toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_decreases = (t - o) / 10;
this.cash_decreases <= 0 && (this.cash_decreases = 0);
this.SetCashValue_Decreases(this.cash_decreases);
};
e.prototype.ButtonClick_Add_Decreases = function() {
for (var t = Number.parseInt((10 * this.cash_decreases).toString()), e = t.toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_decreases = (t + o) / 10;
this.SetCashValue_Decreases(this.cash_decreases);
};
e.prototype.EditBox_DidEnded_Decreases = function() {
var t = this.editBox_decreases.string.replace(s.GlobalVar.money_symbol, "").replace(",", ""), e = Number(t);
e || (e = 0);
(e = e < 1 ? Number.parseInt((10 * e).toString()) / 10 : Number.parseInt(e.toString())) < 0 && (e = 0);
this.SetCashValue_Decreases(e);
};
e.prototype.ButtonClick_Switch_Increases = function() {
this.SetShow_Increases(!this.isStop_increases);
};
e.prototype.ButtonClick_Reduce_Increases = function() {
for (var t = Number.parseInt((10 * this.cash_increases).toString()), e = (t - 1).toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_increases = (t - o) / 10;
this.cash_increases <= 0 && (this.cash_increases = 0);
this.SetCashValue_Increases(this.cash_increases);
};
e.prototype.ButtonClick_Add_Increases = function() {
for (var t = Number.parseInt((10 * this.cash_increases).toString()), e = t.toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_increases = (t + o) / 10;
this.SetCashValue_Increases(this.cash_increases);
};
e.prototype.EditBox_DidEnded_Increases = function() {
var t = this.editBox_increases.string.replace(s.GlobalVar.money_symbol, "").replace(",", ""), e = Number(t);
e || (e = 0);
(e = e < 1 ? Number.parseInt((10 * e).toString()) / 10 : Number.parseInt(e.toString())) < 0 && (e = 0);
this.SetCashValue_Increases(e);
};
e.prototype.ButtonClick_Switch_SingleWin = function() {
this.SetShow_Singlewin(!this.isStop_singlewin);
};
e.prototype.ButtonClick_Reduce_SingleWin = function() {
for (var t = Number.parseInt((10 * this.cash_singlewin).toString()), e = (t - 1).toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_singlewin = (t - o) / 10;
this.cash_singlewin <= 0 && (this.cash_singlewin = 0);
this.SetCashValue_Singlewin(this.cash_singlewin);
};
e.prototype.ButtonClick_Add_SingleWin = function() {
for (var t = Number.parseInt((10 * this.cash_singlewin).toString()), e = t.toString().length, o = 1, i = 0; i < e - 1; i++) o *= 10;
this.cash_singlewin = (t + o) / 10;
this.SetCashValue_Singlewin(this.cash_singlewin);
};
e.prototype.EditBox_DidEnded_SingleWin = function() {
var t = this.editBox_singleWin.string.replace(s.GlobalVar.money_symbol, "").replace(",", ""), e = Number(t);
e || (e = 0);
(e = e < 1 ? Number.parseInt((10 * e).toString()) / 10 : Number.parseInt(e.toString())) < 0 && (e = 0);
this.SetCashValue_Singlewin(e);
};
e.prototype.ButtonClick_Reset = function() {
this.ResetState();
};
e.prototype.ButtonClick_CloseTip = function() {
this.node_TipError.active = !1;
};
e.prototype.ButtonClick_Start = function() {
if (0 != this.choseCount) if (this.isStop_decreases || this.isStop_increases || this.isStop_singlewin) if (this.isStop_decreases && 0 == this.cash_decreases || this.isStop_increases && 0 == this.cash_increases || this.isStop_singlewin && 0 == this.cash_singlewin) {
this.label_TipError.string = App.zLan.getBundleString(1038);
this.node_TipError.active = !0;
} else if (!this.isStop_increases || this.isStop_decreases) {
var t = {
autoCount: this.choseCount,
stop_Decreases: this.cash_decreases,
stop_Increases: this.cash_increases,
stop_Singlewin: this.cash_singlewin
};
this.callback_Start && this.callback_Start(t);
this.CloseShow();
} else {
this.label_TipError.string = App.zLan.getBundleString(1037);
this.node_TipError.active = !0;
} else {
this.label_TipError.string = App.zLan.getBundleString(1037);
this.node_TipError.active = !0;
} else {
this.label_TipError.string = App.zLan.getBundleString(1036);
this.node_TipError.active = !0;
}
};
e.prototype.SetChooseCount = function(t) {
this.choseCount = this.configCounts[t];
for (var e = 0; e < this.node_ChooseCounts.length; e++) {
this.node_ChooseCounts[e].active = e == t;
}
};
e.prototype.SetShow_Decreases = function(t) {
this.isStop_decreases = t;
this.node_switch_off_decrease.active = !t;
this.node_switch_on_decrease.active = t;
if (t) {
this.node_StopType_decreases.color = this.color_SetStop_Choose;
this.label_decreases.node.color = this.color_SetStop_Choose;
} else {
this.node_StopType_decreases.color = this.color_SetStop_Normal;
this.label_decreases.node.color = this.color_SetStop_Normal;
}
};
e.prototype.SetShow_Increases = function(t) {
this.isStop_increases = t;
this.node_switch_off_increase.active = !t;
this.node_switch_on_increase.active = t;
if (t) {
this.node_StopType_increases.color = this.color_SetStop_Choose;
this.label_increases.node.color = this.color_SetStop_Choose;
} else {
this.node_StopType_increases.color = this.color_SetStop_Normal;
this.label_increases.node.color = this.color_SetStop_Normal;
}
};
e.prototype.SetShow_Singlewin = function(t) {
this.isStop_singlewin = t;
this.node_switch_off_singlewin.active = !t;
this.node_switch_on_singlewin.active = t;
if (t) {
this.node_StopType_singlewin.color = this.color_SetStop_Choose;
this.label_singlewin.node.color = this.color_SetStop_Choose;
} else {
this.node_StopType_singlewin.color = this.color_SetStop_Normal;
this.label_singlewin.node.color = this.color_SetStop_Normal;
}
};
e.prototype.SetCashValue_Decreases = function(t) {
this.cash_decreases = t;
this.editBox_decreases.string = c.CmmUtils.NumberForceAddCurrencyString(c.CmmUtils.NumberToHallString(t, !0));
};
e.prototype.SetCashValue_Increases = function(t) {
this.cash_increases = t;
this.editBox_increases.string = c.CmmUtils.NumberForceAddCurrencyString(c.CmmUtils.NumberToHallString(t, !0));
};
e.prototype.SetCashValue_Singlewin = function(t) {
this.cash_singlewin = t;
this.editBox_singleWin.string = c.CmmUtils.NumberForceAddCurrencyString(c.CmmUtils.NumberToHallString(t, !0));
};
e.prototype.ClearTween = function() {
this.tween_Move && this.tween_Move.stop();
};
r([ p(cc.Node) ], e.prototype, "node_Main", void 0);
r([ p(cc.Node) ], e.prototype, "node_Zhezhao", void 0);
r([ p(cc.Node) ], e.prototype, "node_Move", void 0);
r([ p(cc.Node) ], e.prototype, "node_ChooseCounts", void 0);
r([ p(cc.EditBox) ], e.prototype, "editBox_decreases", void 0);
r([ p(cc.EditBox) ], e.prototype, "editBox_increases", void 0);
r([ p(cc.EditBox) ], e.prototype, "editBox_singleWin", void 0);
r([ p(cc.Label) ], e.prototype, "label_decreases", void 0);
r([ p(cc.Label) ], e.prototype, "label_increases", void 0);
r([ p(cc.Label) ], e.prototype, "label_singlewin", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_on_decrease", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_off_decrease", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_on_increase", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_off_increase", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_on_singlewin", void 0);
r([ p(cc.Node) ], e.prototype, "node_switch_off_singlewin", void 0);
r([ p(cc.Node) ], e.prototype, "node_StopType_decreases", void 0);
r([ p(cc.Node) ], e.prototype, "node_StopType_increases", void 0);
r([ p(cc.Node) ], e.prototype, "node_StopType_singlewin", void 0);
r([ p(cc.Node) ], e.prototype, "node_TipError", void 0);
r([ p(cc.Label) ], e.prototype, "label_TipError", void 0);
r([ p(cc.Color) ], e.prototype, "color_SetStop_Normal", void 0);
r([ p(cc.Color) ], e.prototype, "color_SetStop_Choose", void 0);
return r([ u ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
AviatorEntry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "05070VyVjNJ/Ln6KbYr6Z3p", "AviatorEntry");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../scripts/framework/core/entry/Entry"), a = t("../../../scripts/framework/defines/Decorators"), c = t("../../../scripts/framework/defines/Macros"), l = t("./view/AviatorView");
(function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e = r([ a.registerEntry("AviatorEntry", c.Macro.BUNDLE_aviator, l.default) ], e);
})(s.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/AviatorView": "AviatorView"
} ],
AviatorView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3341fVxUEFIdan+IfAG2EZ2", "AviatorView");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
}, s = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, r) {
function s(t) {
try {
c(i.next(t));
} catch (t) {
r(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(s, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, r, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return r = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, r[1])).done) return n;
(i = 0, n) && (r = [ 2 & r[0], n.value ]);
switch (r[0]) {
case 0:
case 1:
n = r;
break;

case 4:
s.label++;
return {
value: r[1],
done: !1
};

case 5:
s.label++;
i = r[1];
r = [ 0 ];
continue;

case 7:
r = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
s = 0;
continue;
}
if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
s.label = r[1];
break;
}
if (6 === r[0] && s.label < n[1]) {
s.label = n[1];
n = r;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(r);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
r = e.call(t, s);
} catch (t) {
r = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/config/Config"), l = t("../../../../scripts/common/config/GlobalVar"), u = t("../../../../scripts/common/config/User"), p = t("../../../../scripts/common/event/CommonEvent"), _ = t("../../../../scripts/common/protocol/HeartbetJson"), h = t("../../../../scripts/common/utils/CmmUtils"), d = t("../../../../scripts/common/utils/RandomUtil"), v = t("../../../../scripts/framework/core/ui/GameView"), f = t("../../../../scripts/sdk/GameNativeConfig"), y = t("../../../../scripts/tableCommon/robot/BaseRobot"), m = t("../../../../scripts/tableCommon/robot/RobotEvent"), g = t("../game/GameController_Aviator"), C = t("../net/Cmd_Aviator"), S = t("../net/Event_Aviator"), A = t("../net/Handler_Aviator"), B = t("../net/Sender_Aviator"), b = t("../net/Service_Aviator"), M = cc._decorator, E = M.ccclass, w = (M.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameController = null;
e.colors = [ 100, 200 ];
e.maxBetTime = 10;
e.isPlayGameing = !1;
e.sender = null;
e.server = null;
e.count = 0;
e.isHadBetting = !1;
e.reconnecPlaySTART = !1;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/AviatorView";
};
e.prototype.bindingNetServer = function() {
this.server = App.serviceManager.get(b.Service_Aviator, !0);
this.sender = App.senderManager.get(B.Sender_Aviator);
App.handlerManager.get(A.default);
var t = l.GlobalVar.host.split(":"), e = t[1].replace("//", ""), o = t[2], i = t[0];
this.server.initIP_PORT(e, o, i);
this.server.heartbeat = _.HeartbeatJson;
this.server.maxEnterBackgroundTime = 5;
this.sender.reconnect();
};
e.prototype.removeNetServer = function() {
App.senderManager.destory(B.Sender_Aviator);
App.handlerManager.destory(A.default);
App.serviceManager.destory(b.Service_Aviator);
this.offD(p.ComponentGameEvent.Game_Exit_Event);
this.offD(S.Event_Aviator.ServerEvent_Aviator);
};
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
this.playMusic("sounds/bg_music");
};
e.prototype.initNode = function() {
this.gameController = this.node.getComponent(g.default);
this.gameController.countDown.node.active = !1;
};
e.prototype.addEvents = function() {
var t = this;
this.onD(f.default.Event.game_open, this.openReconn);
this.onD(f.default.Event.game_close, this.onClosed);
this.onD(p.ComponentGameEvent.Game_Exit_Event, this.onClickExit.bind(this));
this.onD(m.default.refreshRobotNum, function(e) {
t.gameController.onlineLabel.string = e + "";
});
this.onD(S.Event_Aviator.ServerEvent_refreshBetsNum, function(e, o, i) {
t.gameController.node_Record_Type_Allbet.active ? t.gameController.node_TipYouNotBetted.active = !1 : 0 == t.gameController.myplayers.curPlayers.length ? t.gameController.node_TipYouNotBetted.active = !0 : t.gameController.node_TipYouNotBetted.active = !1;
var n = o - e;
t.gameController.label_Record_Bets.string = n + "/" + o;
t.gameController.label_TotalWin.string = h.CmmUtils.NumberForceAddCurrencyString(h.CmmUtils.NumberToHallString(i, !0));
t.gameController.progressBar_Record_Bets.progress = e / o;
var r = t.gameController.players.getSprites_Head();
if (r.length > 0) {
for (var s = 0; s < t.gameController.sprite_Online_Heads.length; s++) {
var a = t.gameController.sprite_Online_Heads[s];
if (s < r.length) {
a.spriteFrame = r[s];
a.node.active = !0;
} else a.node.active = !1;
}
for (s = 0; s < t.gameController.sprite_Record_Heads.length; s++) {
a = t.gameController.sprite_Record_Heads[s];
if (s < r.length) {
a.spriteFrame = r[s];
a.node.active = !0;
} else a.node.active = !1;
}
} else {
for (s = 0; s < t.gameController.sprite_Online_Heads.length; s++) (a = t.gameController.sprite_Online_Heads[s]).node.active = !1;
for (s = 0; s < t.gameController.sprite_Record_Heads.length; s++) (a = t.gameController.sprite_Record_Heads[s]).node.active = !1;
}
});
this.onD(S.Event_Aviator.ServerEvent_soundEvent, this.playEventSound.bind(this));
this.onD(S.Event_Aviator.ServerEvent_Aviator, this.parseGameMsg.bind(this));
this.onD(S.Event_Aviator.ServerEvent_CloseResult, this.hideResult.bind(this));
this.onD(S.Event_Aviator.ServerEvent_GameEnd, this.gameEnd.bind(this));
this.onD(S.Event_Aviator.ServerEvent_MoniBet, this.callbackMoniBet.bind(this));
this.onD(S.Event_Aviator.ServerEvent_MoniCancelBet, this.callbackMoniCancelBet.bind(this));
this.onD(m.default.handler_server_xiazhu_robot, this.handler_server_bet_return.bind(this));
this.onD(m.default.handler_server_xiazhu_taking, this.handler_server_collect_return.bind(this));
var e = !1;
this.gameController.betSwitch.init(0, function(o) {
t.gameController.players.node.active = 0 == o;
t.gameController.myplayers.node.active = 1 == o;
t.gameController.node_Record_infoTitles.active = o <= 1;
t.gameController.node_Record_Type_Allbet.active = 0 == o;
t.gameController.node_Record_Type_Previous.active = !1;
if (0 == o) {
t.gameController.scrollView_Record.node.height = 770;
t.gameController.scrollView_Record.enabled = !0;
} else {
t.gameController.scrollView_Record.node.height = 770;
t.gameController.scrollView_Record.enabled = !1;
0 == t.gameController.myplayers.curPlayers.length ? t.gameController.node_TipYouNotBetted.active = !0 : t.gameController.node_TipYouNotBetted.active = !1;
}
e && dispatch(S.Event_Aviator.ServerEvent_soundEvent, 0);
e = !0;
});
};
e.prototype.sendEmojiArea = function(t) {
var e = cc.instantiate(t);
e.position = cc.v3(240, -90);
var o = cc.v3(240 + d.RandomUtil.randomFRange(-40, 40), 300 + d.RandomUtil.randomFRange(-40, 100));
cc.tween(e).to(.1, {
scale: 1.5
}).to(3, {
position: o
}).to(.5, {
opacity: 0
}).call(function() {
e && e.destroy();
}).start();
};
e.prototype.parseGameMsg = function(t) {
var e = t.subCmd, o = t.data;
this.count++;
e == C.SUB_CMD_Aviator.SM_HISTORY_RECORD_RETURN ? this.handler_server_history_recode_return(o) : e == C.SUB_CMD_Aviator.SM_TABLEINFO_RETURN ? this.handler_server_tableinfo(o) : e == C.SUB_CMD_Aviator.SM_NOTIFY_BET ? this.handler_server_notify_bet(o) : e == C.SUB_CMD_Aviator.SM_NOTIFY_ROLL_RESULT ? this.handler_server_game_end(o) : e == C.SUB_CMD_Aviator.SM_NOTIFY_BALL_STATE ? this.handler_server_update_ball(o) : e == C.SUB_CMD_Aviator.SM_LOGIN_RETURN ? this.handler_server_login_return(o) : e == C.SUB_CMD_Aviator.SM_BET_RETURN ? this.handler_server_bet_return(o) : e == C.SUB_CMD_Aviator.SM_COLLECT ? this.handler_server_collect_return(o) : e == C.SUB_CMD_Aviator.SM_SIT_DOWN_BC ? this.handler_server_richaseainfo(o) : e == C.SUB_CMD_Aviator.SM_STAND_UP_BC && this.handler_server_stand_up_bc(o);
};
e.prototype.handler_server_richaseainfo = function(t) {
console.error(t);
this.gameController.players.addPlayer(t);
};
e.prototype.handler_server_stand_up_bc = function(t) {
this.gameController.players.removePlayer(t);
console.error(t);
};
e.prototype.handler_server_collect_return = function(t) {
var e = t.uid == l.GlobalVar.game_uid;
if (0 == t.crash && e) {
dispatch(f.default.Event.update_topbanner_add_money, t.winMoney);
dispatch(S.Event_Aviator.ServerEvent_soundEvent, 3);
this.gameController.winResult.PlayShow(t);
}
e && this.gameController.betOptionItems.items[t.option].Refresh_CashoutOver(t);
this.gameController.players.takeStakePalyer(t);
};
e.prototype.handler_server_bet_return = function(t) {
y.default.gameIsTaking = !1;
if (l.GlobalVar.game_uid == t.uid) {
Log.e("自己下注");
this.gameController.betOptionItems.updateBetted(t.option, !0);
this.isPlayGameing = !0;
} else this.gameController.players.addStakePlayer(t);
};
e.prototype.callbackMoniBet = function(t) {
this.isHadBetting = !0;
this.gameController.players.addStakePlayer(t);
};
e.prototype.callbackMoniCancelBet = function(t) {
this.isHadBetting = !1;
this.gameController.players.cancelBetPlayer(t);
};
e.prototype.handler_server_login_return = function(t) {
y.default.init(t);
for (var e = 0; e < t.rich_players.length; e++) {
var o = t.rich_players[e];
this.gameController.players.addPlayer(o);
if (o.areaIndexs) for (var i = 0; i < o.areaIndexs.length; i++) {
var n = o.areaIndexs[i];
if (n > 0) {
var r = {};
r.name = o.name;
r.bet = n;
r.uid = o.uid;
r.option = i;
this.gameController.players.addStakePlayer(r);
}
}
}
if (0 == t.ret) {
dispatch(f.default.Event.Change_Name, t.name);
dispatch(f.default.Event.update_topbanner_money, t.money);
} else {
App.tips.show(t.alertStr);
this.doExitGame();
}
};
e.prototype.updateSelfMoney = function(t) {
u.default.self.updateGameMoney(t);
};
e.prototype.handler_server_history_recode_return = function(t) {
this.gameController.historyService.Init(t.history);
};
e.prototype.handler_server_tableinfo = function(t) {
var e = this;
Log.e("======加入房间:", JSON.stringify(t));
this.gameController.winResult.ResetForBegin();
this.gameController.betOptionItems.init(t.bet_config, t.collect, t.cur_bet, t.autoTake, this.sender, this.gameController.flyManager);
this.maxBetTime = t.betTime;
this.colors = t.color;
console.error("ddd" + t.state);
this.gameController.betOptionItems.setGameing(!1);
var o = t.betAreaInfo;
if (1 == t.state) {
this.reconnecPlaySTART = !0;
this.gameController.betOptionItems.SetGameState(0);
this.gameController.betOptionItems.updateBettingState(!0);
y.default.gameIsBetting = !0;
this.gameController.countDown.setUpTimes(t.cd, function() {
y.default.gameIsBetting = !1;
e.gameController.betOptionItems.updateBettingState(!1);
}, this.maxBetTime);
var i = t.cd - 1;
i < 0 && (i = 0);
this.scheduleOnce(function() {
e.gameController.betOptionItems.SetGameState(1);
}, i);
y.default.randomReconnectRobots(t.cd, t.curMultiple);
this.gameController.betOptionItems.reconnect(this.gameController.players, o);
} else if (2 == t.state) {
this.gameController.betOptionItems.SetGameState(2);
this.gameController.betOptionItems.setGameing(!0);
this.gameController.betOptionItems.reconnect(this.gameController.players, o, !0);
y.default.randomReconnectRobots(0, t.curMultiple);
} else {
this.gameController.betOptionItems.reconnect(this.gameController.players, o, !1, !0);
y.default.randomReconnectRobots(0, t.curMultiple);
this.gameController.betOptionItems.SetGameState(3);
}
this.gameController.flyManager.ResetForReconn(t);
};
e.prototype.handler_server_notify_bet = function(t) {
return s(this, void 0, void 0, function() {
var e, o = this;
return a(this, function() {
Log.e("======开始下注:", t);
dispatch(S.Event_Aviator.ServerEvent_CloseResult);
this.gameController.players.clearStakePlayers();
this.gameController.flyManager.ResetforBetting();
this.gameController.winResult.ResetForBegin();
y.default.gameIsResulting = !1;
y.default.gameIsBetting = !0;
y.default.gameIsTaking = !1;
this.gameController.countDown.setUpTimes(t.cd - 1, function() {
Log.e("倒计时结束----");
}, this.maxBetTime);
this.gameController.betOptionItems.SetGameState(0);
this.gameController.betOptionItems.updateBettingState(!0);
this.gameController.betOptionItems.setGameing(!1);
this.gameController.betOptionItems.autoBet();
this.audioHelper.stopAllEffects();
e = t.cd;
this.scheduleOnce(function() {
dispatch(S.Event_Aviator.ServerEvent_soundEvent, 1);
o.gameController.betOptionItems.SetGameState(1);
o.gameController.flyManager.Play();
o.gameController.betOptionItems.updateBettingState(!1);
o.gameController.betOptionItems.setGameing(!0);
y.default.gameIsBetting = !1;
}, e - 1);
return [ 2 ];
});
});
};
e.prototype.handler_server_game_end = function(t) {
return s(this, void 0, void 0, function() {
var e = this;
return a(this, function() {
this.gameController.betOptionItems.updateBettedFlase();
this.gameController.betOptionItems.updateBettingState(!1);
this.gameController.betOptionItems.setGameing(!1);
y.default.gameIsResulting = !0;
y.default.gameIsBetting = !1;
y.default.gameIsTaking = !1;
y.default.updatePlayers(t);
this.isPlayGameing = !1;
Log.e("===游戏结束:" + JSON.stringify(t));
this.scheduleOnce(function() {}, 1);
console.error("ddd");
this.scheduleOnce(function() {
e.audioHelper.stopAllEffects();
}, t.cd - 1);
this.gameEnd();
return [ 2 ];
});
});
};
e.prototype.handler_server_update_ball = function(t) {
var e = 1 == t.crash;
this.gameController.betOptionItems.updateBettingState(!1);
this.gameController.betOptionItems.setGameing(!0);
y.default.gameIsBetting = !1;
y.default.gameIsResulting = !0;
this.gameController.countDown.node.active && (this.gameController.countDown.node.active = !1);
this.gameController.flyManager.updateMultiple(t.curMultiple, e);
if (e) {
dispatch(S.Event_Aviator.ServerEvent_soundEvent, 2);
this.gameController.historyService.AddNewRecord(t.curMultiple);
y.default.gameIsTaking = !1;
this.gameController.betOptionItems.SetGameState(3);
} else {
this.gameController.betOptionItems.SetGameState(2);
y.default.gameIsTaking = !0;
}
};
e.prototype.hideResult = function() {
this.gameController.players.clearStakePlayers();
for (var t = 0; t < this.gameController.infoContentLayouts.length; t++) this.gameController.infoContentLayouts[t].updateLayout();
y.default.gameIsResulting = !1;
y.default.setOnlinePlayerLeftTimes();
};
e.prototype.gameEnd = function() {
this.gameController.betOptionItems.updateAccepted();
};
e.prototype.openReconn = function() {
this.sender.login();
};
e.prototype.onClosed = function() {
this.onPingTimeout();
};
e.prototype.onPingTimeout = function() {
var t = this;
if (this._isLogout) this._isLogout = !1; else {
this.sender.close();
var e = App.zLan.getString(1037);
App.alert.show({
title: c.Config.alertTitlePath.TIPS,
confirmCb: function() {
t.doExitGame();
},
cancelCb: function() {
t.doExitGame();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: e,
hideX: !1
});
}
};
e.prototype.onClickExit = function() {
var t = this;
if (this.isPlayGameing) {
var e = App.zLan.getString(1118), o = function() {};
App.alert.show({
title: c.Config.alertTitlePath.TIPS,
confirmCb: o,
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: e,
hideX: !0
});
} else {
o = function() {
t.doExitGame();
};
App.alert.show({
confirmCb: o,
cancelCb: function() {},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: App.zLan.getString(1015),
hideX: !0
});
}
};
e.prototype.doExitGame = function() {
this._isLogout = !0;
if (this.sender) {
this.sender.logout();
this.sender.close();
}
this.exitGameToHall();
};
e.prototype.update = function(t) {
y.default.customUpdate(t);
};
e.prototype.playEventSound = function(t) {
switch (t) {
case 0:
this.playEffect("sounds/yx_click");
break;

case 1:
this.playEffect("sounds/yx_qifei");
break;

case 2:
this.playEffect("sounds/yx_Zhuihui");
break;

case 3:
this.playEffect("sounds/yx_cashout");
break;

case 4:
this.playEffect("sounds/yx_cancelAuto");
}
};
return r([ E ], e);
}(v.default));
o.default = w;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/protocol/HeartbetJson": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/tableCommon/robot/BaseRobot": void 0,
"../../../../scripts/tableCommon/robot/RobotEvent": void 0,
"../game/GameController_Aviator": "GameController_Aviator",
"../net/Cmd_Aviator": "Cmd_Aviator",
"../net/Event_Aviator": "Event_Aviator",
"../net/Handler_Aviator": "Handler_Aviator",
"../net/Sender_Aviator": "Sender_Aviator",
"../net/Service_Aviator": "Service_Aviator"
} ],
BetOperateItem_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e6ad7cEM7NF+Yfoa305vV+y", "BetOperateItem_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/framework/componects/EventComponent"), l = t("../../../../scripts/framework/defines/Enums"), u = t("../../../../scripts/sdk/GameNativeConfig"), p = t("../net/Event_Aviator"), _ = t("./AutoService_Aviator"), h = cc._decorator, d = h.ccclass, v = h.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.option = 0;
e.autoService = null;
e.node_AutoArea = null;
e.btn_AutoType = null;
e.btn_BetType = null;
e.placeBetBtn = null;
e.cancelBetBtn_Betting = null;
e.cancelBetBtn_Round = null;
e.cashoutBtn = null;
e.label_cashoutValue = null;
e.label_PlaceBetValue = null;
e.waitMask = null;
e.node_AutoPlayBtn = null;
e.node_StopAutoBtn = null;
e.label_AutoCount = null;
e.node_autoCashOut_On = null;
e.node_autoCashOut_Off = null;
e.node_AddAndDelete = null;
e.node_AddBetArea = null;
e.node_DeleteBetArea = null;
e.node_mask_DeleteBtn = null;
e.betInput = null;
e.takeInput = null;
e.betNodes = [];
e.node_mask_AutoType = null;
e.node_mask_betInput = null;
e.node_mask_betBtn = null;
e.node_mask_autoCashoutBtn = null;
e.node_mask_autoCashoutInput = null;
e.isChooseAutoType = !1;
e.isBetting = !1;
e.isCanBetted = !1;
e.isAutoPlaying = !1;
e.isBetted = !1;
e.isAllowAutoCashout = !1;
e.isHadCashOut = !1;
e.gameState = 0;
e.isGaming = !1;
e.isTakenShowing = !1;
e.flyManager = null;
e.minBet = 10;
e.maxBet = 10;
e.minTake = 101;
e.maxTake = 1e10;
e.curBetValue = 10;
e.curAuto_cashoutMul = 200;
e.sender = null;
e.changeMoney_auto = 0;
e.autoCongfigData = null;
e.configHeight = [ 309, 394 ];
e.tween_BetType = null;
e.tween_AutoType = null;
e.needReduceMoney = 0;
return e;
}
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
this.tween_BetType && this.tween_BetType.stop();
this.tween_AutoType && this.tween_AutoType.stop();
};
e.prototype.init = function(t, e, o, i, n, r) {
this.sender = n;
this.flyManager = r;
this.minTake = e[0];
this.maxTake = e[1];
this.minBet = t[0];
this.curBetValue = o;
this.curAuto_cashoutMul = i;
this.maxBet = t[t.length - 1];
for (var a = t.slice(t.length - 4, t.length), c = 0; c < a.length; c++) {
var u = a[c];
this.betNodes[c].getComponentInChildren(cc.Label).string = s.GlobalVar.money_symbol + u;
this.onN(this.betNodes[c], l.NodeEvent.click, this.changeBetValue.bind(this, u));
}
this.isChooseAutoType = !1;
this.updateBetValue();
this.updatelabel_cashoutValue();
this.CancelAuto();
this.SetShowMask_DeleteBetArea(!1);
};
e.prototype.addEvents = function() {};
e.prototype.reconnect = function(t, e, o, i) {
if (t.selfbet > 0 && !i) {
this.waitMask.active = !1;
this.SetShowBtnType(p.BetOperateType.CancelBet_Round);
this.isCanBetted = !1;
this.isBetting = !1;
this.curBetValue = t.selfbet;
this.isBetted = !0;
this.updateBetValue();
o && (this.isTakenShowing = !0);
if (t.auto > 0) {
this.node_autoCashOut_On.active = !0;
this.curAuto_cashoutMul = t.auto;
this.updatelabel_cashoutValue();
}
if (t.taked > 0) {
this.updateAccepted();
var n = {};
n.uid = s.GlobalVar.game_uid;
n.option = t.option;
n.currentMultiple = t.taked;
n.winMoney = t.taked * t.selfbet * .01;
e.takeStakePalyer(n);
}
}
};
e.prototype.CancelAuto = function() {
this.tween_BetType && this.tween_BetType.stop();
this.tween_AutoType && this.tween_AutoType.stop();
this.btn_BetType.node.opacity = 255;
this.btn_AutoType.node.opacity = 0;
this.SetShowBtnType(p.BetOperateType.PlaceBet);
this.changeMoney_auto = 0;
this.isAutoPlaying = !1;
this.isCanBetted = !1;
this.isAllowAutoCashout = !1;
this.isHadCashOut = !1;
this.node_AutoArea.active = !1;
this.node_AutoPlayBtn.active = !0;
this.node_StopAutoBtn.active = !1;
this.SetShowMask_Auto(!1);
this.RefreshHeight(!1);
this.node_autoCashOut_Off.active = !0;
this.node_autoCashOut_On.active = !1;
this.node_mask_autoCashoutInput.active = !0;
};
e.prototype.ButtonClick_BetType = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.RefreshHeight(!1);
this.tween_BetType && this.tween_BetType.stop();
this.tween_AutoType && this.tween_AutoType.stop();
this.tween_BetType = cc.tween(this.btn_BetType.node).to(.3, {
opacity: 255
}).start();
this.tween_AutoType = cc.tween(this.btn_AutoType.node).to(.3, {
opacity: 0
}).start();
};
e.prototype.ButtonClick_AutoType = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.RefreshHeight(!0);
this.node_mask_autoCashoutInput.active = !this.isAllowAutoCashout;
this.tween_BetType && this.tween_BetType.stop();
this.tween_AutoType && this.tween_AutoType.stop();
this.tween_BetType = cc.tween(this.btn_BetType.node).to(.3, {
opacity: 0
}).start();
this.tween_AutoType = cc.tween(this.btn_AutoType.node).to(.3, {
opacity: 255
}).start();
};
e.prototype.ButtonClick_AutoCashOut = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
if (this.node_autoCashOut_On.active) {
this.node_autoCashOut_On.active = !1;
this.node_autoCashOut_Off.active = !0;
this.isAllowAutoCashout = !1;
} else {
this.node_autoCashOut_On.active = !0;
this.node_autoCashOut_Off.active = !1;
this.isAllowAutoCashout = !0;
}
this.node_mask_autoCashoutInput.active = !this.isAllowAutoCashout;
};
e.prototype.ButtonClick_AddBetValue = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
var t = .001 * Number.parseInt((1e3 * this.curBetValue).toFixed(0)), e = this.countBetAddInterval(t, .001);
this.curBetValue = 1e3 * this.curBetValue + 1e3 * e;
this.curBetValue = Number.parseInt(this.curBetValue.toFixed(0));
this.curBetValue = this.curBetValue / 1e3;
if (this.curBetValue > this.maxBet) {
this.curBetValue = this.maxBet;
App.tips.show(App.zLan.getBundleString(10002, this.maxBet));
}
this.updateBetValue();
};
e.prototype.ButtonClick_ReduceBetValue = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
var t = .001 * Number.parseInt((1e3 * this.curBetValue).toFixed(0)), e = this.countBetSubInterval(t, 1e7);
this.curBetValue = this.curBetValue - e;
this.curBetValue *= 1e3;
this.curBetValue = Math.round(this.curBetValue);
this.curBetValue = this.curBetValue / 1e3;
if (this.curBetValue < this.minBet) {
this.curBetValue = this.minBet;
App.tips.show(App.zLan.getBundleString(10001, this.minBet));
}
this.updateBetValue();
};
e.prototype.ButtonClick_PlaceBet = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
if (s.GlobalVar.curMoney < this.curBetValue) App.tips.show(App.zLan.getString(10231)); else {
this.isCanBetted = !0;
if (this.isBetting) {
this.SetShowBtnType(p.BetOperateType.CancelBet_Betting);
dispatch(u.default.Event.update_topbanner_reduce_money, this.curBetValue);
this.RefreshBetRecord(!0);
} else {
this.cancelBetBtn_Round.active = !0;
this.cancelBetBtn_Betting.active = !1;
this.SetShowBtnType(p.BetOperateType.CancelBet_Round);
}
this.SetShowMask_ExceptAuto(!0);
}
};
e.prototype.ButtonClick_CancelBetBtn = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
if (this.isBetting) {
dispatch(u.default.Event.update_topbanner_money, s.GlobalVar.curMoney + this.curBetValue);
this.RefreshBetRecord(!1);
}
this.CancelAuto();
};
e.prototype.ButtonClick_Cashout = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.isGaming && this.cashoutBtn.active && this.sender.send_SM_COLLECT(this.option, this.flyManager.curMultiple);
};
e.prototype.ButtonClick_OpenAuto = function() {
var t = this;
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.autoService.OpenShow(function(e) {
t.Callback_SetAuto(e);
});
};
e.prototype.ButtonClick_CancelAuto = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.CancelAuto();
};
e.prototype.ButtonClick_AddBetArea = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
dispatch(p.Event_Aviator.ServerEvent_addBetOperate);
};
e.prototype.ButtonClick_DeleteBetArea = function() {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
dispatch(p.Event_Aviator.ServerEvent_deleteBetOperate);
};
e.prototype.SetShowTwoBetArea = function() {
0 == this.option && (this.node_AddAndDelete.active = !1);
if (1 == this.option) {
this.node.active = !0;
this.node_AddAndDelete.active = !0;
this.node_DeleteBetArea.active = !0;
this.node_AddBetArea.active = !1;
}
};
e.prototype.SetShowOneBetArea = function() {
if (0 == this.option) {
this.node_AddAndDelete.active = !0;
this.node_DeleteBetArea.active = !1;
this.node_AddBetArea.active = !0;
}
if (1 == this.option) {
this.node_AddAndDelete.active = !1;
this.node.active = !1;
}
};
e.prototype.changeBetValue = function(t) {
dispatch(p.Event_Aviator.ServerEvent_soundEvent, 0);
this.curBetValue = t;
this.updateBetValue();
};
e.prototype.updatelabel_cashoutValue = function() {
this.curAuto_cashoutMul > this.maxTake && (this.curAuto_cashoutMul = this.maxTake);
this.node_autoCashOut_On.active ? this.curAuto_cashoutMul < 101 && (this.curAuto_cashoutMul = 101) : this.curAuto_cashoutMul < this.minTake && (this.curAuto_cashoutMul = this.minTake);
this.takeInput.string = (this.curAuto_cashoutMul / 100).toFixed(2);
};
e.prototype.onBetChanged = function() {
var t = this.betInput.string.replace(s.GlobalVar.money_symbol, "").replace(",", ""), e = Number.parseFloat(Number.parseFloat(t).toFixed(0));
e || (e = 0);
e < this.minBet && (e = this.minBet);
e > this.maxBet && (e = this.maxBet);
this.curBetValue = e;
this.betInput.string = s.GlobalVar.money_symbol + a.CmmUtils.NumberToHallString(e, !0);
this.label_PlaceBetValue.string = this.betInput.string;
};
e.prototype.onTakeChanged = function() {
var t = this.takeInput.string.replace("x", "").replace(",", ""), e = Number.parseFloat(Number.parseFloat(t).toFixed(2));
e || (e = 0);
e *= 100;
this.curAuto_cashoutMul = e;
this.takeInput.string = (this.curAuto_cashoutMul / 100).toFixed(2);
};
e.prototype.onTakeEnded = function() {
var t = this.takeInput.string.replace("x", "").replace(",", ""), e = Number.parseFloat(Number.parseFloat(t).toFixed(2));
e || (e = 0);
e *= 100;
this.node_autoCashOut_On.active ? e < 101 && (e = 101) : e < this.minTake && (e = this.minTake);
e > this.maxTake && (e = this.maxTake);
this.curAuto_cashoutMul = e;
this.takeInput.string = (this.curAuto_cashoutMul / 100).toFixed(2);
};
e.prototype.Callback_SetAuto = function(t) {
this.changeMoney_auto = 0;
this.autoCongfigData = t;
if (null == t) this.CancelAuto(); else {
this.isAutoPlaying = !0;
this.label_AutoCount.string = App.zLan.getBundleString(1024) + " (" + this.autoCongfigData.autoCount + ")";
this.node_AutoPlayBtn.active = !1;
this.node_StopAutoBtn.active = !0;
this.isCanBetted = !0;
this.isBetting ? this.autoBet() : this.isGaming && this.SetShowBtnType(p.BetOperateType.CancelBet_Round);
this.SetShowMask_Auto(!0);
}
};
e.prototype.countBetAddInterval = function(t, e) {
return t < e ? e / 10 : this.countBetAddInterval(t, 10 * e);
};
e.prototype.countBetSubInterval = function(t, e) {
return t > e ? e : this.countBetSubInterval(t, e / 10);
};
e.prototype.updateBetValue = function() {
if (s.GlobalVar.curMoney >= this.minBet) {
if (this.curBetValue > s.GlobalVar.curMoney) {
this.curBetValue = s.GlobalVar.curMoney;
App.tips.show(App.zLan.getString(10231));
}
} else this.curBetValue < this.minBet && (this.curBetValue = this.minBet);
this.betInput.string = s.GlobalVar.money_symbol + a.CmmUtils.NumberToHallString(this.curBetValue, !0);
this.label_PlaceBetValue.string = this.betInput.string;
};
e.prototype.autoBet = function(t) {
void 0 === t && (t = !0);
this.needReduceMoney = 0;
if (this.isBetting && this.isCanBetted) if (s.GlobalVar.curMoney < this.curBetValue) {
App.tips.show(App.zLan.getString(10231));
this.isAutoPlaying && this.CancelAuto();
} else {
if (this.isAutoPlaying) {
this.changeMoney_auto -= this.curBetValue;
this.autoCongfigData.autoCount--;
this.label_AutoCount.string = App.zLan.getBundleString(1024) + " (" + this.autoCongfigData.autoCount + ")";
this.SetShowMask_Auto(!0);
} else this.SetShowMask_ExceptAuto(!0);
if (t) {
this.needReduceMoney = this.curBetValue;
s.GlobalVar.curMoney -= this.curBetValue;
} else dispatch(u.default.Event.update_topbanner_reduce_money, this.curBetValue);
this.RefreshBetRecord(!0);
this.SetShowBtnType(p.BetOperateType.CancelBet_Betting);
}
};
e.prototype.autoTake = function() {
this.isGaming && this.sender.send_SM_COLLECT(this.option, this.flyManager.curMultiple);
};
e.prototype.updateBetted = function(t) {
this.isBetted = t;
};
e.prototype.setGaming = function(t) {
this.isGaming = t;
};
e.prototype.updateBettingState = function(t) {
this.isBetting = t;
this.updateTake();
};
e.prototype.SetGameState = function(t) {
this.gameState = t;
if (0 == this.gameState) {
this.waitMask.active = !1;
this.isCanBetted && this.SetShowBtnType(p.BetOperateType.CancelBet_Betting);
} else if (1 == this.gameState) {
this.isCanBetted && this.sender.send_request_down_bet(this.curBetValue, this.option);
this.isAutoPlaying || (this.isCanBetted = !1);
this.waitMask.active = !0;
} else if (3 == this.gameState) {
this.isTakenShowing = !1;
this.waitMask.active = !1;
if (this.isAutoPlaying) {
this.SetShowBtnType(p.BetOperateType.CancelBet_Round);
if (0 != this.autoCongfigData.stop_Decreases && this.changeMoney_auto < 0 && Math.abs(this.changeMoney_auto) >= this.autoCongfigData.stop_Decreases) {
this.CancelAuto();
return;
}
if (0 == this.autoCongfigData.autoCount) {
this.CancelAuto();
return;
}
} else this.isCanBetted ? this.SetShowBtnType(p.BetOperateType.CancelBet_Round) : this.SetShowBtnType(p.BetOperateType.PlaceBet);
} else this.waitMask.active = !1;
};
e.prototype.updateAccepted = function() {
if (!this.isCanBetted) {
this.SetShowBtnType(p.BetOperateType.PlaceBet);
this.waitMask.active = !1;
this.isTakenShowing = !1;
this.isBetted = !1;
}
};
e.prototype.Refresh_CashoutOver = function(t) {
this.isTakenShowing = !1;
this.isBetted = !1;
this.isHadCashOut = !0;
if (this.isAutoPlaying) {
this.SetShowBtnType(p.BetOperateType.CancelBet_Round);
this.changeMoney_auto += t.winMoney;
if (0 != this.autoCongfigData.stop_Increases && this.changeMoney_auto > 0 && this.changeMoney_auto >= this.autoCongfigData.stop_Increases) {
this.CancelAuto();
return;
}
if (0 != this.autoCongfigData.stop_Singlewin && t.winMoney >= this.autoCongfigData.stop_Singlewin) {
this.CancelAuto();
return;
}
if (0 != this.autoCongfigData.stop_Decreases && this.changeMoney_auto < 0 && Math.abs(this.changeMoney_auto) >= this.autoCongfigData.stop_Decreases) {
this.CancelAuto();
return;
}
if (0 == this.autoCongfigData.autoCount) {
this.CancelAuto();
return;
}
} else {
this.isCanBetted = !1;
this.SetShowBtnType(p.BetOperateType.PlaceBet);
}
};
e.prototype.updateTake = function() {
if (this.isBetted) {
this.placeBetBtn.active = !0;
this.isTakenShowing = !0;
this.isHadCashOut = !1;
} else {
this.cashoutBtn.active = !1;
this.isTakenShowing = !1;
}
};
e.prototype.update = function() {
if (this.isTakenShowing) {
this.cashoutBtn.active = this.flyManager.curMultiple >= this.minTake;
this.cashoutBtn.active && (this.label_cashoutValue.string = s.GlobalVar.money_symbol + a.CmmUtils.NumberToHallString(this.flyManager.curMultiple * this.curBetValue / 100, !0));
}
if (this.isAllowAutoCashout && this.cashoutBtn.active && !this.isHadCashOut && this.curAuto_cashoutMul <= this.flyManager.curMultiple) {
this.isHadCashOut = !0;
this.autoTake();
}
};
e.prototype.RefreshBetRecord = function(t) {
if (t) {
var e = {
allbet: this.curBetValue,
bet: this.curBetValue,
isSelf: !0,
money: s.GlobalVar.curMoney,
option: this.option,
players: 1,
ret: 0,
selfbet: this.curBetValue,
uid: s.GlobalVar.game_uid
};
dispatch(p.Event_Aviator.ServerEvent_MoniBet, e);
} else {
e = {
allbet: 0,
bet: 0,
isSelf: !0,
money: s.GlobalVar.curMoney,
option: this.option,
players: 1,
ret: 0,
selfbet: 0,
uid: s.GlobalVar.game_uid
};
dispatch(p.Event_Aviator.ServerEvent_MoniCancelBet, e);
}
};
e.prototype.RefreshHeight = function(t) {
this.isChooseAutoType = t;
this.node_AutoArea.active = t;
this.btn_BetType.interactable = t;
this.btn_AutoType.interactable = !t;
if (t) {
this.node.height = this.configHeight[1];
this.waitMask.height = this.configHeight[1];
} else {
this.node.height = this.configHeight[0];
this.waitMask.height = this.configHeight[0];
}
};
e.prototype.SetShowMask_ExceptAuto = function(t) {
this.node_mask_autoCashoutBtn.active = t;
this.node_mask_betBtn.active = t;
this.node_mask_betInput.active = t;
this.isAllowAutoCashout ? this.node_mask_autoCashoutInput.active = t : this.node_mask_autoCashoutInput.active = !0;
};
e.prototype.SetShowMask_Auto = function(t) {
this.SetShowMask_ExceptAuto(t);
this.node_mask_AutoType.active = t;
};
e.prototype.SetShowMask_DeleteBetArea = function(t) {
0 == this.option && (this.node_mask_DeleteBtn.active = !1);
1 == this.option && (this.node_mask_DeleteBtn.active = t);
};
e.prototype.SetShowBtnType = function(t) {
switch (t) {
case p.BetOperateType.PlaceBet:
this.placeBetBtn.active = !0;
this.cashoutBtn.active = !1;
this.cancelBetBtn_Betting.active = !1;
this.cancelBetBtn_Round.active = !1;
this.SetShowMask_DeleteBetArea(!1);
this.SetShowMask_Auto(!1);
break;

case p.BetOperateType.CancelBet_Betting:
this.placeBetBtn.active = !1;
this.cashoutBtn.active = !1;
this.cancelBetBtn_Betting.active = !0;
this.cancelBetBtn_Round.active = !1;
this.SetShowMask_DeleteBetArea(!0);
break;

case p.BetOperateType.CancelBet_Round:
this.placeBetBtn.active = !1;
this.cashoutBtn.active = !1;
this.cancelBetBtn_Betting.active = !1;
this.cancelBetBtn_Round.active = !0;
this.SetShowMask_DeleteBetArea(!0);
break;

case p.BetOperateType.Cashout:
this.placeBetBtn.active = !1;
this.cashoutBtn.active = !0;
this.cancelBetBtn_Betting.active = !1;
this.cancelBetBtn_Round.active = !1;
this.SetShowMask_DeleteBetArea(!0);
}
};
r([ v ], e.prototype, "option", void 0);
r([ v(_.default) ], e.prototype, "autoService", void 0);
r([ v(cc.Node) ], e.prototype, "node_AutoArea", void 0);
r([ v(cc.Button) ], e.prototype, "btn_AutoType", void 0);
r([ v(cc.Button) ], e.prototype, "btn_BetType", void 0);
r([ v(cc.Node) ], e.prototype, "placeBetBtn", void 0);
r([ v(cc.Node) ], e.prototype, "cancelBetBtn_Betting", void 0);
r([ v(cc.Node) ], e.prototype, "cancelBetBtn_Round", void 0);
r([ v(cc.Node) ], e.prototype, "cashoutBtn", void 0);
r([ v(cc.Label) ], e.prototype, "label_cashoutValue", void 0);
r([ v(cc.Label) ], e.prototype, "label_PlaceBetValue", void 0);
r([ v(cc.Node) ], e.prototype, "waitMask", void 0);
r([ v(cc.Node) ], e.prototype, "node_AutoPlayBtn", void 0);
r([ v(cc.Node) ], e.prototype, "node_StopAutoBtn", void 0);
r([ v(cc.Label) ], e.prototype, "label_AutoCount", void 0);
r([ v(cc.Node) ], e.prototype, "node_autoCashOut_On", void 0);
r([ v(cc.Node) ], e.prototype, "node_autoCashOut_Off", void 0);
r([ v(cc.Node) ], e.prototype, "node_AddAndDelete", void 0);
r([ v(cc.Node) ], e.prototype, "node_AddBetArea", void 0);
r([ v(cc.Node) ], e.prototype, "node_DeleteBetArea", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_DeleteBtn", void 0);
r([ v(cc.EditBox) ], e.prototype, "betInput", void 0);
r([ v(cc.EditBox) ], e.prototype, "takeInput", void 0);
r([ v(cc.Node) ], e.prototype, "betNodes", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_AutoType", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_betInput", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_betBtn", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_autoCashoutBtn", void 0);
r([ v(cc.Node) ], e.prototype, "node_mask_autoCashoutInput", void 0);
return r([ d ], e);
}(c.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../net/Event_Aviator": "Event_Aviator",
"./AutoService_Aviator": "AutoService_Aviator"
} ],
Cmd_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3b171xVZbtAlaWDMTSnL2R8", "Cmd_Aviator");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SUB_CMD_Aviator = void 0;
o.SUB_CMD_Aviator = {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
SM_TABLEINFO_RETURN: 6002,
SM_COLLECT: 10002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
SM_NOTIFY_ROLL_RESULT: 6007,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
SM_NOTIFY_BALL_STATE: 10001,
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
GM_REPEAT_BET_REQUEST: 6032,
SM_REPEAT_BET_RETURN: 6033,
SERVER_CHAT_BC: 6040,
SERVER_FACE_BC: 6041,
GF_CLIENT_CHAT_REQ: 6042,
GF_CLIENT_FACE_REQ: 6043,
SERVER_EMOTION_BC: 6046,
GF_CLIENT_EMOTION_REQ: 6047,
GF_EMOTION_REQ: 7036,
SERVER_GAME_HEART: 8888
};
cc._RF.pop();
}, {} ],
Event_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38368KbniJIdJJ5y1IMQKs5", "Event_Aviator");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BetOperateType = o.Event_Aviator = void 0;
(function(t) {
t.ServerEvent_Aviator = "ServerEvent_Aviator_";
t.ServerEvent_GameEnd = "ServerEvent_Aviator_GameEnd";
t.ServerEvent_GameAddScore = "ServerEvent_Aviator_GameAddScore";
t.ServerEvent_CloseResult = "ServerEvent_Aviator_CloseResult";
t.ServerEvent_3portal_explo_end = "ServerEvent_Aviator_3portal_explo_end";
t.ServerEvent_addBetOperate = "ServerEvent_Aviator_addBetOperate";
t.ServerEvent_deleteBetOperate = "ServerEvent_Aviator_deleteBetOperate";
t.ServerEvent_refreshBetsNum = "ServerEvent_Aviator_refreshBetsNum";
t.ServerEvent_soundEvent = "ServerEvent_Aviator_soundEvent";
t.ServerEvent_MoniBet = "ServerEvent_Aviator_MoniBet";
t.ServerEvent_MoniCancelBet = "ServerEvent_Aviator_MoniCancelBet";
})(o.Event_Aviator || (o.Event_Aviator = {}));
(function(t) {
t[t.PlaceBet = 0] = "PlaceBet";
t[t.CancelBet_Betting = 1] = "CancelBet_Betting";
t[t.CancelBet_Round = 2] = "CancelBet_Round";
t[t.Cashout = 3] = "Cashout";
})(o.BetOperateType || (o.BetOperateType = {}));
cc._RF.pop();
}, {} ],
FlyManager_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f4ef4HeC5ZDUoyQEGYZVTkP", "FlyManager_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/tableCommon/robot/BaseRobot"), c = t("./SurfacePlot_Aviator"), l = cc._decorator, u = l.ccclass, p = l.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_BettingWait = null;
e.label_mul = null;
e.color_config_Mul_normal = null;
e.color_Config_Mul_Fail = null;
e.node_TipFail = null;
e.node_sun = null;
e.node_FeiDestroyMove = null;
e.node_FeijiMove = null;
e.surfacePlots = [];
e.node_blur_0 = null;
e.node_blur_1 = null;
e.node_blur_2 = null;
e.isRun = !1;
e.curAngle_Sun = 0;
e.speed_SunRound = -.1;
e.curMultiple = 100;
e.configPos_Destory = [ cc.v3(0, 0, 0), cc.v3(800, 160, 0) ];
e.configPos_Start = cc.v3(-370, -210, 0);
e.configPos_FirstEnd = cc.v3(-335, -198, 0);
e.configPos_maxHeight = cc.v3(65, 100, 0);
e.configPos_minHeight = cc.v3(145, -112, 0);
e.curPos = cc.v3(-335, -198, 0);
e.tween_DestroyFly = null;
e.tween_NormalFly = null;
e.tween_Blur0 = null;
e.tween_Blur1 = null;
e.tween_Blur2 = null;
e.isExcute_ChangeToBlur1 = !1;
e.isExcute_ChangeToBlur2 = !1;
e.tempObj = {
num: 100
};
return e;
}
e.prototype.onDestroy = function() {
this.ClearTween();
};
e.prototype.ResetForReconn = function(t) {
var e = this;
this.ResetforBetting();
if (3 == t.state) {
this.node_BettingWait.active = !1;
this.node_FeiDestroyMove.position = this.configPos_Destory[1];
this.node_TipFail.active = !0;
this.label_mul.node.color = this.color_Config_Mul_Fail;
this.updateAddScore(t.gameRecord.win_op[0]);
} else 2 == t.state ? this.Play() : 1 == t.state && this.scheduleOnce(function() {
e.ReconnPlay();
}, t.cd);
};
e.prototype.ResetforBetting = function() {
this.ClearTween();
this.isRun = !1;
this.node_BettingWait.active = !0;
this.node_FeiDestroyMove.position = this.configPos_Destory[0];
this.node_FeijiMove.position = this.configPos_FirstEnd;
for (var t = 0; t < this.surfacePlots.length; t++) this.surfacePlots[t].ClearCurve();
this.curPos = cc.v3(this.configPos_FirstEnd.x, this.configPos_FirstEnd.y, 0);
this.node_TipFail.active = !1;
this.label_mul.string = "";
this.label_mul.node.color = this.color_config_Mul_normal;
this.node_blur_0.opacity = 0;
this.node_blur_1.opacity = 0;
this.node_blur_2.opacity = 0;
this.isExcute_ChangeToBlur1 = !1;
this.isExcute_ChangeToBlur2 = !1;
};
e.prototype.Play = function() {
var t = this;
this.node_BettingWait.active = !1;
this.scheduleOnce(function() {
t.updateAddScore(100);
t.label_mul.node.color = t.color_config_Mul_normal;
t.isRun = !0;
t.PlayStartFly();
}, .7);
};
e.prototype.ReconnPlay = function() {
this.node_BettingWait.active = !1;
this.updateAddScore(100);
this.label_mul.node.color = this.color_config_Mul_normal;
this.isRun = !0;
this.PlayStartFly();
};
e.prototype.Stop = function() {
this.isRun = !1;
for (var t = 0; t < this.surfacePlots.length; t++) this.surfacePlots[t].ClearCurve();
this.node_TipFail.active = !0;
this.ClearTween();
this.tween_DestroyFly = cc.tween(this.node_FeiDestroyMove).to(.5, {
position: this.configPos_Destory[1]
}).start();
this.tween_Blur0 = cc.tween(this.node_blur_0).to(.5, {
opacity: 0
}).start();
this.tween_Blur1 = cc.tween(this.node_blur_1).to(.5, {
opacity: 0
}).start();
this.tween_Blur2 = cc.tween(this.node_blur_2).to(.5, {
opacity: 0
}).start();
};
e.prototype.PlayStartFly = function() {
var t = this;
this.tween_NormalFly = cc.tween(this.curPos).to(7.7, {
x: this.configPos_maxHeight.x,
y: this.configPos_maxHeight.y
}, cc.easeQuadraticActionIn()).call(function() {
t.PlayLoop();
}).start();
this.PlayShowBlur0();
};
e.prototype.PlayLoop = function() {
this.tween_NormalFly && this.tween_NormalFly.stop();
this.tween_NormalFly = cc.tween(this.curPos).delay(.3).to(3, {
x: this.configPos_minHeight.x,
y: this.configPos_minHeight.y
}, cc.easeSineInOut()).delay(.3).to(3, {
x: this.configPos_maxHeight.x,
y: this.configPos_maxHeight.y
}, cc.easeSineInOut()).union().repeatForever().start();
};
e.prototype.update = function() {
if (this.isRun) {
this.curAngle_Sun = (this.curAngle_Sun + this.speed_SunRound) % 360;
this.node_sun.angle = this.curAngle_Sun;
this.node_FeijiMove.position = this.curPos;
for (var t = 0; t < this.surfacePlots.length; t++) this.surfacePlots[t].updateCurve(this.configPos_Start, this.curPos, this.configPos_Start.y);
}
};
e.prototype.updateAddScore = function(t) {
this.curMultiple = t;
this.label_mul.string = s.CmmUtils.NumberToHallString(t / 100, !0) + "x";
};
e.prototype.updateMultiple = function(t, e) {
var o = this;
this.tempObjTweener && this.tempObjTweener.stop();
if (e) {
this.label_mul.string = s.CmmUtils.NumberToHallString(t / 100, !0) + "x";
this.label_mul.node.color = this.color_Config_Mul_Fail;
this.Stop();
} else {
if (!this.isExcute_ChangeToBlur1 && t >= 200 && t < 1e3) {
this.PlayShowBlur1();
this.isExcute_ChangeToBlur1 = !0;
}
if (!this.isExcute_ChangeToBlur2 && t >= 1e3) {
this.PlayShowBlur2();
this.isExcute_ChangeToBlur2 = !0;
}
this.tempObj.num = this.curMultiple;
this.tempObjTweener = cc.tween(this.tempObj).to(.5, {
num: t
}, {
onUpdate: function(t) {
o.label_mul.string = s.CmmUtils.NumberToHallString(t.num / 100, !0) + "x";
a.default.curMutilpleValue = t.num;
o.curMultiple = t.num;
}
}).start();
}
};
e.prototype.PlayShowBlur0 = function() {
this.tween_Blur0 && this.tween_Blur0.stop();
this.tween_Blur0 = cc.tween(this.node_blur_0).to(.3, {
opacity: 255
}).start();
};
e.prototype.PlayShowBlur1 = function() {
this.tween_Blur0 && this.tween_Blur0.stop();
this.tween_Blur1 && this.tween_Blur1.stop();
this.tween_Blur0 = cc.tween(this.node_blur_0).to(.3, {
opacity: 0
}).start();
this.tween_Blur1 = cc.tween(this.node_blur_1).to(.3, {
opacity: 255
}).start();
};
e.prototype.PlayShowBlur2 = function() {
this.tween_Blur1 && this.tween_Blur1.stop();
this.tween_Blur2 && this.tween_Blur2.stop();
this.tween_Blur1 = cc.tween(this.node_blur_1).to(.3, {
opacity: 0
}).start();
this.tween_Blur2 = cc.tween(this.node_blur_2).to(.3, {
opacity: 255
}).start();
};
e.prototype.ClearTween = function() {
this.tween_DestroyFly && this.tween_DestroyFly.stop();
this.tween_NormalFly && this.tween_NormalFly.stop();
this.tween_Blur0 && this.tween_Blur0.stop();
this.tween_Blur1 && this.tween_Blur1.stop();
this.tween_Blur2 && this.tween_Blur2.stop();
this.tempObjTweener && this.tempObjTweener.stop();
};
r([ p(cc.Node) ], e.prototype, "node_BettingWait", void 0);
r([ p(cc.Label) ], e.prototype, "label_mul", void 0);
r([ p(cc.Color) ], e.prototype, "color_config_Mul_normal", void 0);
r([ p(cc.Color) ], e.prototype, "color_Config_Mul_Fail", void 0);
r([ p(cc.Node) ], e.prototype, "node_TipFail", void 0);
r([ p(cc.Node) ], e.prototype, "node_sun", void 0);
r([ p(cc.Node) ], e.prototype, "node_FeiDestroyMove", void 0);
r([ p(cc.Node) ], e.prototype, "node_FeijiMove", void 0);
r([ p(c.default) ], e.prototype, "surfacePlots", void 0);
r([ p(cc.Node) ], e.prototype, "node_blur_0", void 0);
r([ p(cc.Node) ], e.prototype, "node_blur_1", void 0);
r([ p(cc.Node) ], e.prototype, "node_blur_2", void 0);
return r([ u ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/tableCommon/robot/BaseRobot": void 0,
"./SurfacePlot_Aviator": "SurfacePlot_Aviator"
} ],
GameController_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2c323MKSsdH0apm8djaUIxF", "GameController_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/component/SwitchBtns"), a = t("../../../../scripts/tableCommon/tableCountTime"), c = t("./FlyManager_Aviator"), l = t("./HistoryService_Aviator"), u = t("./PlayersInfo_Aviator"), p = t("./WinResult_Aviator"), _ = t("./items_Aviator"), h = cc._decorator, d = h.ccclass, v = h.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.flyManager = null;
e.historyService = null;
e.countDown = null;
e.betScorll = null;
e.betOptionItems = null;
e.players = null;
e.myplayers = null;
e.onlineLabel = null;
e.betSwitch = null;
e.winResult = null;
e.infoContentLayouts = [];
e.node_Record_infoTitles = null;
e.node_Record_Type_Allbet = null;
e.node_Record_Type_Previous = null;
e.sprite_Record_Heads = [];
e.sprite_Online_Heads = [];
e.label_Record_Bets = null;
e.label_TotalWin = null;
e.progressBar_Record_Bets = null;
e.label_Record_LastMultiple = null;
e.node_TipYouNotBetted = null;
e.scrollView_Record = null;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.OverEvent_ScrollView_Record = function() {
if (this.node_Record_Type_Allbet.active) {
var t = this.scrollView_Record.getContentPosition();
if (!this.scrollView_Record.isScrolling() && Math.abs(t.y) < 1) {
this.scrollView_Record.enabled = !1;
return;
}
}
};
e.prototype.OverEvent_ScrollView_Up = function() {
this.node_Record_Type_Allbet.active && (this.scrollView_Record.enabled || (this.scrollView_Record.enabled = !0));
};
r([ v(c.default) ], e.prototype, "flyManager", void 0);
r([ v(l.default) ], e.prototype, "historyService", void 0);
r([ v(a.default) ], e.prototype, "countDown", void 0);
r([ v(cc.ScrollView) ], e.prototype, "betScorll", void 0);
r([ v(_.default) ], e.prototype, "betOptionItems", void 0);
r([ v(u.default) ], e.prototype, "players", void 0);
r([ v(u.default) ], e.prototype, "myplayers", void 0);
r([ v(cc.Label) ], e.prototype, "onlineLabel", void 0);
r([ v(s.default) ], e.prototype, "betSwitch", void 0);
r([ v(p.default) ], e.prototype, "winResult", void 0);
r([ v(cc.Layout) ], e.prototype, "infoContentLayouts", void 0);
r([ v(cc.Node) ], e.prototype, "node_Record_infoTitles", void 0);
r([ v(cc.Node) ], e.prototype, "node_Record_Type_Allbet", void 0);
r([ v(cc.Node) ], e.prototype, "node_Record_Type_Previous", void 0);
r([ v(cc.Sprite) ], e.prototype, "sprite_Record_Heads", void 0);
r([ v(cc.Sprite) ], e.prototype, "sprite_Online_Heads", void 0);
r([ v(cc.Label) ], e.prototype, "label_Record_Bets", void 0);
r([ v(cc.Label) ], e.prototype, "label_TotalWin", void 0);
r([ v(cc.ProgressBar) ], e.prototype, "progressBar_Record_Bets", void 0);
r([ v(cc.Label) ], e.prototype, "label_Record_LastMultiple", void 0);
r([ v(cc.Node) ], e.prototype, "node_TipYouNotBetted", void 0);
r([ v(cc.ScrollView) ], e.prototype, "scrollView_Record", void 0);
return r([ d ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/component/SwitchBtns": void 0,
"../../../../scripts/tableCommon/tableCountTime": void 0,
"./FlyManager_Aviator": "FlyManager_Aviator",
"./HistoryService_Aviator": "HistoryService_Aviator",
"./PlayersInfo_Aviator": "PlayersInfo_Aviator",
"./WinResult_Aviator": "WinResult_Aviator",
"./items_Aviator": "items_Aviator"
} ],
Handler_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4251fuyzLNB06v+Fme7btCD", "Handler_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/common/net/CmdDefines"), s = t("../../../../scripts/common/net/CommonGameJson"), a = t("../../../../scripts/common/net/GetCmdKey"), c = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/framework/core/net/service/Handler"), u = t("../../../../scripts/framework/defines/Macros"), p = t("./Cmd_Aviator"), _ = t("./Event_Aviator"), h = t("./Sender_Aviator"), d = t("./Service_Aviator"), v = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(d.Service_Aviator);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, r.SUB_CMD_SYS.CMD_Game_Time_Out), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SERVER_GAME_HEART), this.server_game_heart, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_LOGIN_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_TABLEINFO_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_PER_SECOND_BET_INFO), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_HISTORY_RECORD_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_NOTIFY_COMMING_REST), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_STAND_UP_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_NOTIFY_BET), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_NOTIFY_BALL_STATE), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_SIT_DOWN_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_LOGOUT_SUCC_BC_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_BET_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_NOTIFY_ROLL_RESULT), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SERVER_CHAT_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_BET_CHANGE_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_PLAYERS_INFO_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_REPEAT_BET_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.GF_EMOTION_REQ), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(r.MainCmd.CMD_GAME, p.SUB_CMD_Aviator.SM_COLLECT), this.commfunction, s.CommonGameJson);
};
e.prototype.server_game_heart = function() {};
e.prototype.commfunction = function(t) {
if (t.subCmd == r.SUB_CMD_SYS.CMD_Game_Time_Out) {
var e = App.senderManager.get(h.Sender_Aviator);
c.CmmUtils.popRet1(t.data, e);
} else dispatch(_.Event_Aviator.ServerEvent_Aviator, t);
};
e.module = u.Macro.BUNDLE_aviator;
return e;
}(l.Handler);
o.default = v;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/GetCmdKey": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/core/net/service/Handler": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./Cmd_Aviator": "Cmd_Aviator",
"./Event_Aviator": "Event_Aviator",
"./Sender_Aviator": "Sender_Aviator",
"./Service_Aviator": "Service_Aviator"
} ],
HistoryModel_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8bbdbuJdY9I5bMX4cC3QTx7", "HistoryModel_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmUtils"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_Multiple = null;
e.tween_Node = null;
return e;
}
e.prototype.onDestroy = function() {
this.tween_Node && this.tween_Node.stop();
};
e.prototype.SetMultiple = function(t, e, o, i) {
this.label_Multiple.string = s.CmmUtils.NumberToHallString(t / 100, !0) + "x";
this.label_Multiple.node.color = e;
this.node.zIndex = o;
this.tween_Node && this.tween_Node.stop();
if (i) {
this.node.scale = 2;
this.node.width = 50;
var n = this.label_Multiple.node.width;
this.tween_Node = cc.tween(this.node).to(1, {
scale: 1,
width: n
}).start();
} else {
this.node.scale = 1;
this.node.width = this.label_Multiple.node.width;
}
};
e.prototype.SetZOrder = function(t) {
this.node.zIndex = t;
};
r([ l(cc.Label) ], e.prototype, "label_Multiple", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
HistoryService_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "86c03hooNtHDLJ14yytcycy", "HistoryService_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../Model/HistoryModel_Aviator"), a = t("../net/Event_Aviator"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Parent = null;
e.node_Parent_All = null;
e.prefab_historyModel = null;
e.node_HistoryAll = null;
e.colors_Config = [];
e.node_close = null;
e.historyModels = [];
e.historyModels_All = [];
e.m_MaxShowCount = 10;
e.m_MaxShowCount_All = 28;
e.m_RecordList = [];
e.m_RecordList_All = [];
return e;
}
e.prototype.AddTouchEvent = function() {
var t = this;
cc.sys.platform == cc.sys.DESKTOP_BROWSER ? this.node_close.on(cc.Node.EventType.MOUSE_DOWN, function() {
t.SetShowHistory(!1);
}, this) : this.node_close.on(cc.Node.EventType.TOUCH_START, function() {
t.SetShowHistory(!1);
}, this);
};
e.prototype.RemoveTouchEvent = function() {
cc.sys.platform == cc.sys.DESKTOP_BROWSER ? this.node_close.off(cc.Node.EventType.MOUSE_DOWN, function() {}, this) : this.node_close.off(cc.Node.EventType.TOUCH_START, function() {}, this);
};
e.prototype.ClearData = function() {
this.node_Parent.destroyAllChildren();
this.node_Parent_All.destroyAllChildren();
this.historyModels = [];
this.historyModels_All = [];
this.m_RecordList = [];
this.m_RecordList_All = [];
this.node_HistoryAll.active = !1;
};
e.prototype.Init = function(t) {
this.ClearData();
for (var e = 0; e < t.length; e++) {
var o = t[e];
this.m_RecordList.push(o);
this.m_RecordList_All.push(o);
}
var i = 0;
this.m_RecordList.length > this.m_MaxShowCount && (i = this.m_RecordList.length - this.m_MaxShowCount);
for (e = i; e < this.m_RecordList.length; e++) {
var n = this.m_RecordList[e];
this.CreateHistoryModel(n, 100 - e, this.node_Parent, !1);
}
var r = 0;
this.m_RecordList_All.length > this.m_MaxShowCount_All && (r = this.m_RecordList_All.length - this.m_MaxShowCount_All);
for (e = r; e < this.m_RecordList_All.length; e++) {
n = this.m_RecordList_All[e];
this.CreateHistoryModel(n, 100 - e, this.node_Parent_All, !1);
}
};
e.prototype.AddNewRecord = function(t) {
for (var e = 0; e < this.historyModels.length; e++) (o = this.historyModels[e]).SetZOrder(100 - e);
if (this.historyModels.length < this.m_MaxShowCount) this.CreateHistoryModel(t, 0, this.node_Parent, !0); else {
var o = this.historyModels[0];
this.historyModels.splice(0, 1);
o.SetMultiple(t, this.GetColor(t), 0, !0);
this.historyModels.push(o);
}
for (e = 0; e < this.historyModels_All.length; e++) (o = this.historyModels_All[e]).SetZOrder(100 - e);
if (this.historyModels_All.length < this.m_MaxShowCount_All) this.CreateHistoryModel(t, 0, this.node_Parent_All, !1); else {
o = this.historyModels_All[0];
this.historyModels_All.splice(0, 1);
o.SetMultiple(t, this.GetColor(t), 0, !1);
this.historyModels_All.push(o);
}
};
e.prototype.ButtonClick_OpenHistoryAll = function() {
dispatch(a.Event_Aviator.ServerEvent_soundEvent, 0);
this.SetShowHistory(!0);
};
e.prototype.ButtonClick_CloseHistoryAll = function() {
dispatch(a.Event_Aviator.ServerEvent_soundEvent, 0);
this.SetShowHistory(!1);
};
e.prototype.SetShowHistory = function(t) {
this.node_HistoryAll.active = t;
t ? this.AddTouchEvent() : this.RemoveTouchEvent();
};
e.prototype.CreateHistoryModel = function(t, e, o, i) {
var n = cc.instantiate(this.prefab_historyModel);
n.parent = o;
var r = n.getComponent(s.default), a = this.GetColor(t);
r.SetMultiple(t, a, e, i);
o == this.node_Parent ? this.historyModels.push(r) : this.historyModels_All.push(r);
};
e.prototype.GetColor = function(t) {
var e;
e = t < 200 ? 0 : t < 1e3 ? 1 : 2;
return this.colors_Config[e];
};
r([ u(cc.Node) ], e.prototype, "node_Parent", void 0);
r([ u(cc.Node) ], e.prototype, "node_Parent_All", void 0);
r([ u(cc.Prefab) ], e.prototype, "prefab_historyModel", void 0);
r([ u(cc.Node) ], e.prototype, "node_HistoryAll", void 0);
r([ u(cc.Color) ], e.prototype, "colors_Config", void 0);
r([ u(cc.Node) ], e.prototype, "node_close", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Model/HistoryModel_Aviator": "HistoryModel_Aviator",
"../net/Event_Aviator": "Event_Aviator"
} ],
Player_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ebed8G6nUNEVo7xvJFVZIvl", "Player_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/common/utils/UIUtils"), l = cc._decorator, u = l.ccclass, p = l.property, _ = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Main = null;
e.labels = [];
e.bg = null;
e.sprite_Head = null;
return e;
}
e.prototype.init = function(t, e) {
this.uid = t.uid;
this.option = t.option;
this.setSelfColor(t.isSelf);
this.setName(e.name);
this.setHead(e);
this.setBet(t.bet);
this.labels[2].string = "";
this.labels[3].string = "";
};
e.prototype.setSelfColor = function() {};
e.prototype.setName = function(t) {
if (t.length > 0) {
var e = t.charAt(0), o = t.charAt(t.length - 1);
this.labels[0].string = e + "*****" + o;
}
};
e.prototype.setHead = function(t) {
c.default.loadHead_NoPackable(this.sprite_Head, t);
this.sprite_Head.spriteFrame._texture._packable = !1;
};
e.prototype.setBet = function(t) {
this.labels[1].string = s.GlobalVar.money_symbol + a.CmmUtils.NumberToHallString(t, !0);
};
e.prototype.setWin = function(t) {
this.labels[2].string = (.01 * t.currentMultiple).toFixed(2) + "x";
this.labels[3].string = s.GlobalVar.money_symbol + a.CmmUtils.NumberToHallString(t.winMoney, !0);
this.bg.active = !0;
};
e.prototype.clear = function() {
this.node.destroy();
};
e.prototype.update = function() {
var t = App.utils.localConvertlocalPointAR(this.node, this.node.parent.parent.parent);
t.y < -50 - this.node.parent.parent.parent.height || t.y > 50 ? this.node_Main.active = !1 : this.node_Main.active = !0;
};
r([ p(cc.Node) ], e.prototype, "node_Main", void 0);
r([ p(cc.Label) ], e.prototype, "labels", void 0);
r([ p(cc.Node) ], e.prototype, "bg", void 0);
r([ p(cc.Sprite) ], e.prototype, "sprite_Head", void 0);
return r([ u ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/UIUtils": void 0
} ],
PlayersInfo_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "99bdfipMG1Bo5JFH4DgOUTi", "PlayersInfo_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/framework/componects/EventComponent"), c = t("../../../../scripts/tableCommon/robot/BaseRobot"), l = t("../net/Event_Aviator"), u = t("./Player_Aviator"), p = cc._decorator, _ = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.myInfo = null;
e.prefab = null;
e.selfIndex = 0;
e.curPlayers = [];
e.totalWinMoney = 0;
e.hadCashoutCOunt = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.prefab.active = !1;
this.totalWinMoney = 0;
this.hadCashoutCOunt = 0;
};
e.prototype.addPlayer = function(t) {
this.myInfo && t.uid == s.GlobalVar.game_uid && this.myInfo.addPlayer(t);
c.default.getRobot(t.uid) || c.default.joinPlayer(t, !0);
};
e.prototype.removePlayer = function(t) {
this.myInfo && t.uid == s.GlobalVar.game_uid && this.myInfo.removePlayer(t);
c.default.getRobot(t.uid) && c.default.leavePlayer(t.uid);
};
e.prototype.addStakePlayer = function(t) {
this.myInfo && t.uid == s.GlobalVar.game_uid && this.myInfo.addStakePlayer(t);
var e = cc.instantiate(this.prefab);
e.setParent(this.node);
e.active = !0;
var o = e.getComponent(u.default), i = c.default.getRobot(t.uid), n = t.uid == s.GlobalVar.game_uid;
t.isSelf = n;
if (n) {
this.selfIndex++;
e.setSiblingIndex(0);
} else e.setSiblingIndex(this.selfIndex);
o.init(t, i);
this.curPlayers.push(o);
dispatch(l.Event_Aviator.ServerEvent_refreshBetsNum, this.hadCashoutCOunt, this.curPlayers.length, this.totalWinMoney);
};
e.prototype.cancelBetPlayer = function(t) {
this.myInfo && t.uid == s.GlobalVar.game_uid && this.myInfo.cancelBetPlayer(t);
if (this.curPlayers) for (var e = 0; e < this.curPlayers.length; e++) {
var o = this.curPlayers[e];
if (o.uid == t.uid && o.option == t.option) {
o.clear();
this.curPlayers.splice(e, 1);
break;
}
}
dispatch(l.Event_Aviator.ServerEvent_refreshBetsNum, this.hadCashoutCOunt, this.curPlayers.length, this.totalWinMoney);
};
e.prototype.clearStakePlayers = function() {
this.selfIndex = 0;
if (this.curPlayers) {
for (var t = 0; t < this.curPlayers.length; t++) this.curPlayers[t].clear();
this.curPlayers = [];
this.totalWinMoney = 0;
this.hadCashoutCOunt = 0;
}
if (this.myInfo) {
this.myInfo.clearStakePlayers();
this.node.setContentSize(750, 56);
dispatch(l.Event_Aviator.ServerEvent_refreshBetsNum, 0, this.curPlayers.length, 0);
}
};
e.prototype.takeStakePalyer = function(t) {
this.myInfo && t.uid == s.GlobalVar.game_uid && this.myInfo.takeStakePalyer(t);
for (var e = null, o = 0; o < this.curPlayers.length; o++) {
var i = this.curPlayers[o];
if (i.uid == t.uid && i.option == t.option) {
e = i;
break;
}
}
if (e) {
this.totalWinMoney += t.winMoney;
this.hadCashoutCOunt++;
e.setWin(t);
dispatch(l.Event_Aviator.ServerEvent_refreshBetsNum, this.hadCashoutCOunt, this.curPlayers.length, this.totalWinMoney);
}
};
e.prototype.getSprites_Head = function() {
for (var t = [], e = [], o = 0; o < this.curPlayers.length; o++) {
var i = this.curPlayers[o];
if (e.indexOf(i.uid) < 0) {
e.push(i.uid);
t.push(i.sprite_Head.spriteFrame);
if (3 == t.length) break;
}
}
return t;
};
var o;
r([ h(o) ], e.prototype, "myInfo", void 0);
r([ h(cc.Node) ], e.prototype, "prefab", void 0);
return r([ _ ], e);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/tableCommon/robot/BaseRobot": void 0,
"../net/Event_Aviator": "Event_Aviator",
"./Player_Aviator": "Player_Aviator"
} ],
Sender_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "17264lePa5BtIPSFeQeZKRw", "Sender_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Sender_Aviator = void 0;
var r = t("../../../../scripts/common/net/CommonGameJson"), s = t("../../../../scripts/common/net/HttpSender"), a = t("../../../../scripts/framework/defines/Macros"), c = t("./Cmd_Aviator"), l = t("./Service_Aviator"), u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(l.Service_Aviator);
},
enumerable: !1,
configurable: !0
});
e.prototype.reconnect = function() {
this.service.connect();
};
e.prototype.close = function() {
this.service.close();
};
e.prototype.login = function() {
var t = new r.CommonGameJson();
t.subCmd = c.SUB_CMD_Aviator.GM_LOGIN_REQUEST;
this.send(t);
};
e.prototype.logout = function() {
var t = new r.CommonGameJson();
t.subCmd = c.SUB_CMD_Aviator.GM_LOGINOUT_REQUEST;
this.send(t);
};
e.prototype.send_online_player = function(t) {
void 0 === t && (t = 1);
var e = new r.CommonGameJson();
e.subCmd = c.SUB_CMD_Aviator.GM_PLAYERS_INFO_REQUEST;
e.data.page = t;
this.send(e);
};
e.prototype.send_history = function() {
var t = new r.CommonGameJson();
t.subCmd = c.SUB_CMD_Aviator.GM_HISTORY_RECORD_REQUSET;
this.send(t);
};
e.prototype.send_change_bet = function(t) {
var e = new r.CommonGameJson();
e.subCmd = c.SUB_CMD_Aviator.GM_NOTIFY_BET_CHANGE;
e.data.cur_bet = t;
this.send(e);
};
e.prototype.send_request_down_bet = function(t, e, o) {
void 0 === o && (o = 0);
var i = new r.CommonGameJson();
i.subCmd = c.SUB_CMD_Aviator.GM_BET_REQUEST;
i.data.bet = t;
i.data.option = e;
i.data.multiple = o;
this.send(i);
};
e.prototype.send_SM_COLLECT = function(t, e) {
void 0 === e && (e = 0);
var o = new r.CommonGameJson();
o.subCmd = c.SUB_CMD_Aviator.SM_COLLECT;
o.data.take = e;
o.data.index = t;
this.send(o);
};
e.prototype.send_rebet = function() {
var t = new r.CommonGameJson();
t.subCmd = c.SUB_CMD_Aviator.GM_REPEAT_BET_REQUEST;
this.send(t);
};
e.prototype.send_chat_text = function(t, e) {
var o = new r.CommonGameJson();
o.subCmd = c.SUB_CMD_Aviator.GF_EMOTION_REQ;
o.data.text = t;
o.data.seatid = e;
this.send(o);
};
e.module = a.Macro.BUNDLE_aviator;
return e;
}(s.default);
o.Sender_Aviator = u;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/HttpSender": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./Cmd_Aviator": "Cmd_Aviator",
"./Service_Aviator": "Service_Aviator"
} ],
Service_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "320b7hatgFGE6BF1XRrMI9V", "Service_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Service_Aviator = void 0;
var r = t("../../../../scripts/common/config/Config"), s = t("../../../../scripts/common/net/CommonService"), a = t("../../../../scripts/framework/defines/Macros"), c = t("../../../../scripts/sdk/GameNativeConfig"), l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.priority = r.NetPriority.Game;
return e;
}
e.prototype.onOpen = function(e) {
t.prototype.onOpen.call(this, e);
dispatch(c.default.Event.game_open);
};
e.prototype.onClose = function(e) {
t.prototype.onClose.call(this, e);
dispatch(c.default.Event.game_close);
};
e.module = a.Macro.BUNDLE_aviator;
return e;
}(s.CommonService);
o.Service_Aviator = l;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/net/CommonService": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
SurfacePlot_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3e9d3y7vWZDvLpYBsQzZhDn", "SurfacePlot_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.graphics = null;
e.startPoint = cc.v3(0, 0, 0);
e.endPoint = cc.v3(100, 100, 0);
e.curveHeight = 0;
e.isFilled = !0;
e.isInverted = !1;
return e;
}
e.prototype.updateCurve = function(t, e, o) {
this.startPoint = t;
this.endPoint = e;
this.curveHeight = o;
this.graphics.clear();
this.drawCurve();
};
e.prototype.drawCurve = function() {
var t = cc.v2((this.startPoint.x + this.endPoint.x) / 2, this.curveHeight);
this.graphics.moveTo(this.startPoint.x, this.startPoint.y);
this.graphics.quadraticCurveTo(t.x, t.y, this.endPoint.x, this.endPoint.y);
if (this.isFilled) {
this.graphics.lineTo(this.endPoint.x, this.startPoint.y);
this.graphics.lineTo(this.startPoint.x, this.startPoint.y);
this.graphics.close();
this.graphics.fill();
}
this.graphics.stroke();
};
e.prototype.drawPoint = function(t, e) {
this.graphics.fillColor = e;
this.graphics.circle(t.x, t.y, 5);
this.graphics.fill();
};
e.prototype.ClearCurve = function() {
this.graphics.clear();
};
r([ c(cc.Graphics) ], e.prototype, "graphics", void 0);
r([ c ], e.prototype, "isFilled", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
WinResultModel_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ffdfcbFn+NMipWddAtqXJfA", "WinResultModel_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmUtils"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_Mul = null;
e.label_Value = null;
e.tween_Move = null;
e.callback_Over = null;
return e;
}
e.prototype.onDestroy = function() {
this.ClearTween();
};
e.prototype.ResetForBegin = function() {
this.ClearTween();
this.node.opacity = 0;
};
e.prototype.PlayMove = function(t, e) {
var o = this;
this.ClearTween();
this.callback_Over = e;
this.label_Mul.string = s.CmmUtils.NumberToHallString(t.currentMultiple / 100, !0) + "x";
this.label_Value.string = s.CmmUtils.NumberForceAddCurrencyString(s.CmmUtils.NumberToHallString(t.winMoney, !0));
this.node.position = cc.v3(0, -80, 0);
this.node.opacity = 0;
this.tween_Move = cc.tween(this.node).to(.4, {
position: cc.v3(0, 0, 0),
opacity: 255
}).delay(1.6).to(.3, {
position: cc.v3(0, 80, 0),
opacity: 0
}).call(function() {
if (o.callback_Over) {
o.callback_Over();
o.callback_Over = null;
}
}).start();
};
e.prototype.ButtonClick_Close = function() {
this.ClearTween();
this.node.opacity = 0;
if (this.callback_Over) {
this.callback_Over();
this.callback_Over = null;
}
};
e.prototype.ClearTween = function() {
this.tween_Move && this.tween_Move.stop();
};
r([ l(cc.Label) ], e.prototype, "label_Mul", void 0);
r([ l(cc.Label) ], e.prototype, "label_Value", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0
} ],
WinResult_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a8fe6ZnjUFDdLJQWhS///dh", "WinResult_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../Model/WinResultModel_Aviator"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Mask1 = null;
e.node_Mask2 = null;
e.resultModel1 = null;
e.resultModel2 = null;
e.isCanUse1 = !0;
return e;
}
e.prototype.ResetForBegin = function() {
this.isCanUse1 = !0;
this.resultModel1.ResetForBegin();
this.resultModel2.ResetForBegin();
this.node_Mask1.active = !1;
this.node_Mask2.active = !1;
};
e.prototype.PlayShow = function(t) {
var e = this;
if (this.isCanUse1) {
this.isCanUse1 = !1;
this.node_Mask1.active = !0;
this.resultModel1.PlayMove(t, function() {
e.isCanUse1 = !0;
e.node_Mask1.active = !1;
});
} else {
this.node_Mask2.active = !0;
this.resultModel2.PlayMove(t, function() {
e.node_Mask2.active = !1;
});
}
};
r([ l(cc.Node) ], e.prototype, "node_Mask1", void 0);
r([ l(cc.Node) ], e.prototype, "node_Mask2", void 0);
r([ l(s.default) ], e.prototype, "resultModel1", void 0);
r([ l(s.default) ], e.prototype, "resultModel2", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../Model/WinResultModel_Aviator": "WinResultModel_Aviator"
} ],
items_Aviator: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e1fc8OR2j1LsbokXaX8aNdG", "items_Aviator");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, s = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, o, s) : n(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), a = t("../../../../scripts/framework/componects/EventComponent"), c = t("../../../../scripts/sdk/GameNativeConfig"), l = t("../net/Event_Aviator"), u = t("./BetOperateItem_Aviator"), p = cc._decorator, _ = p.ccclass, h = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.items = [];
return e;
}
e.prototype.addEvents = function() {
this.onD(l.Event_Aviator.ServerEvent_addBetOperate, this.SetShowTwoBetArea.bind(this));
this.onD(l.Event_Aviator.ServerEvent_deleteBetOperate, this.SetShowOneBetArea.bind(this));
};
e.prototype.init = function(t, e, o, i, n, r) {
this.items[0].init(t, e, o, i, n, r);
this.items[1].init(t, e, o, i, n, r);
};
e.prototype.reconnect = function(t, e, o, i) {
for (var n = 0; n < e.length; n++) {
var r = e[n];
this.items[r.option].reconnect(r, t, o, i);
}
this.SetShowTwoBetArea();
};
e.prototype.SetShowTwoBetArea = function() {
this.items[0].SetShowTwoBetArea();
this.items[1].SetShowTwoBetArea();
};
e.prototype.SetShowOneBetArea = function() {
this.items[0].SetShowOneBetArea();
this.items[1].SetShowOneBetArea();
};
e.prototype.autoBet = function() {
this.items[0].autoBet();
this.items[1].autoBet();
var t = this.items[0].needReduceMoney + this.items[1].needReduceMoney;
if (t > 0) {
dispatch(c.default.Event.update_topbanner_money, s.GlobalVar.curMoney);
dispatch(c.default.Event.update_topbanner_only_reduce_money, t);
Log.e(s.GlobalVar.curMoney);
}
};
e.prototype.updateBetted = function(t, e) {
this.items[t].updateBetted(e);
};
e.prototype.updateBettedFlase = function() {
this.items[0].updateBetted(!1);
this.items[1].updateBetted(!1);
};
e.prototype.setGameing = function(t) {
this.items[0].setGaming(t);
this.items[1].setGaming(t);
};
e.prototype.updateBettingState = function(t) {
this.items[0].updateBettingState(t);
this.items[1].updateBettingState(t);
};
e.prototype.SetGameState = function(t) {
this.items[0].SetGameState(t);
this.items[1].SetGameState(t);
};
e.prototype.updateAccepted = function() {
this.items[0].updateAccepted();
this.items[1].updateAccepted();
};
r([ h(u.default) ], e.prototype, "items", void 0);
return r([ _ ], e);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../net/Event_Aviator": "Event_Aviator",
"./BetOperateItem_Aviator": "BetOperateItem_Aviator"
} ]
}, {}, [ "AviatorEntry", "HistoryModel_Aviator", "WinResultModel_Aviator", "AutoService_Aviator", "BetOperateItem_Aviator", "FlyManager_Aviator", "GameController_Aviator", "HistoryService_Aviator", "Player_Aviator", "PlayersInfo_Aviator", "SurfacePlot_Aviator", "WinResult_Aviator", "items_Aviator", "Cmd_Aviator", "Event_Aviator", "Handler_Aviator", "Sender_Aviator", "Service_Aviator", "AviatorView" ]);