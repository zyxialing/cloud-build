window.__require = function t(e, o, n) {
function r(s, l) {
if (!o[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var p = o[s] = {
exports: {}
};
e[s][0].call(p.exports, function(t) {
return r(e[s][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < n.length; s++) r(n[s]);
return r;
}({
AwardManger_DoubleDragon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "db7fdDsEApFKIBnGRgrL8s0", "AwardManger_DoubleDragon");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/enum/GlobalEnum"), l = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollElement"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Zhezhao = null;
e.node_EleParent = null;
e.prefab_Ele = null;
e.elements = [];
e.size_Width = 277.5;
e.size_Height = 256;
return e;
}
e.prototype.Init = function(t) {
this.node_EleParent.destroyAllChildren();
this.elements = [];
for (var e = 0; e < 5; e++) for (var o = 0; o < 3; o++) {
var n = cc.v3((e - 2) * this.size_Width, (1 - o) * this.size_Height, 0), r = cc.instantiate(this.prefab_Ele);
r.parent = this.node_EleParent;
r.position = n;
var i = r.getComponent(l.default);
i.init(t);
r.active = !1;
this.elements.push(i);
}
this.ResetForBegin();
};
e.prototype.ResetForBegin = function() {
for (var t = 0; t < this.elements.length; t++) this.elements[t].node.active = !1;
this.node_Zhezhao.active = !1;
};
e.prototype.ShowAward = function(t, e) {
this.node_Zhezhao.active = !0;
for (var o = 0; o < this.elements.length; o++) this.elements[o].node.active = !1;
for (o = 0; o < t.length; o++) {
var n = t[o];
this.elements[n].setResNorml(e[o] - 1);
this.elements[n].node.active = !0;
this.elements[n].setState(s.GlobalEnum.ElementState.Reward);
}
};
e.prototype.ShowAwardEle_Carousel = function(t) {
this.node_Zhezhao.active = !0;
for (var e = 0; e < t.length; e++) {
var o = t[e];
this.elements[o].node.active = !0;
this.elements[o].setState(s.GlobalEnum.ElementState.Reward);
}
};
e.prototype.HideAwardEle_Carousel = function(t) {
for (var e = 0; e < t.length; e++) {
var o = t[e];
this.elements[o].node.active = !1;
}
};
i([ p(cc.Node) ], e.prototype, "node_Zhezhao", void 0);
i([ p(cc.Node) ], e.prototype, "node_EleParent", void 0);
i([ p(cc.Prefab) ], e.prototype, "prefab_Ele", void 0);
return i([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollElement": void 0
} ],
BottomBtnService_DoubleDragon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a655ctDQdFB9qj6d0mov/1Y", "BottomBtnService_DoubleDragon");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, l = s.ccclass, a = s.property, c = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_RunningHide = null;
return e;
}
e.prototype.Init = function() {
this.SetState_RunningHide(!0);
};
e.prototype.SetState_RunningHide = function(t) {
this.node_RunningHide.opacity = t ? 255 : 60;
};
i([ a(cc.Node) ], e.prototype, "node_RunningHide", void 0);
return i([ l ], e);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
CarouselAwardLineMgr_DoubleDragon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60822/ukTJLQJHKbzgpJtxX", "CarouselAwardLineMgr_DoubleDragon");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/slotsframewrodk/Line/CarouselAwardLineMgr"), l = cc._decorator, a = l.ccclass, c = (l.property, 
function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.PlayAllAwardLine = function(t, e, o, n) {
this.m_SingleBet = n;
this.m_LineList = [];
this.m_LineMoneyList = [];
this.m_AwardLinePosIdsList = [];
if (!this.m_IsAllAways) {
this.m_LineList = t;
for (var r = [], i = 0, s = 0, l = -1, a = 0; a < t.length; a++) {
var c = t[a];
r = [];
l = -1;
for (var p = 0; p < this.m_AllLinePos[c].length; p++) {
10 != (s = o[i = this.m_AllLinePos[c][p]]) && (s %= 10);
if (this.m_WildElementList.indexOf(s) < 0) {
-1 == l && (l = s);
if (s != l) break;
}
e.indexOf(i) >= 0 && (this.m_WildElementList.indexOf(s) >= 0 || s == l) && r.push(i);
}
this.m_AwardLinePosIdsList.push(r);
}
}
this.WorkoutWinMoneyForLine(o);
for (a = 0; a < this.lineModels.length; a++) {
var u = this.lineModels[a];
t.indexOf(a) < 0 && u.HideLine();
}
this.m_IsRun = !1;
this.ShowAllLine_Carousel();
this.m_CurShowLineID = -1;
};
e.prototype.WorkoutWinMoneyForLine = function(t) {
for (var e = 3, o = 0, n = 0; n < this.m_AwardLinePosIdsList.length; n++) {
for (var r = this.m_AwardLinePosIdsList[n], i = t[r[0]] % 10, s = 0; s < r.length; s++) {
var l = t[r[s]] % 10;
if (this.m_WildElementList.indexOf(l) < 0) {
i = l;
break;
}
}
o = 0;
for (s = 0; s < r.length; s++) (l = t[r[s]]) < 10 ? o += 1 : l > 10 && (o += 2);
o > e && (e = o);
var a = this.betRateConfig["" + (i - 1)];
if (this.m_AwardNeedCount.length > 0) {
var c = this.m_AwardNeedCount[i - 1].indexOf(o);
if (c < 0) continue;
var p = Math.round(this.m_SingleBet * a[c] * 100) / 100;
this.m_LineMoneyList.push(p);
} else {
p = Math.round(this.m_SingleBet * a[0] * 100) / 100;
this.m_LineMoneyList.push(p);
}
}
dispatch("SetWinStarCount_DoubleDragon", e);
};
return i([ a ], e);
}(s.default));
o.default = c;
cc._RF.pop();
}, {
"../../../../scripts/slotsframewrodk/Line/CarouselAwardLineMgr": void 0
} ],
DoubleDragonEntry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cc06dC4WWhA3JHrCE51HRrG", "DoubleDragonEntry");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../scripts/framework/core/entry/Entry"), l = t("../../../scripts/framework/defines/Macros"), a = t("../../../scripts/framework/defines/Decorators"), c = t("./view/DoubleDragonView");
(function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {};
e = i([ a.registerEntry("DoubleDragonEntry", l.Macro.BUNDLE_doubledragon, c.default) ], e);
})(s.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/DoubleDragonView": "DoubleDragonView"
} ],
DoubleDragonView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "008c9Hy2MBFKqGCNZeZFJ5p", "DoubleDragonView");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/config/GlobalVar"), l = t("../../../../scripts/common/enum/GlobalEnum"), a = t("../../../../scripts/common/event/CommonEvent"), c = t("../../../../scripts/common/utils/CmmAudio"), p = t("../../../../scripts/common/utils/CmmUtils"), u = t("../../../../scripts/framework/defines/Decorators"), d = t("../../../../scripts/framework/defines/Macros"), h = t("../../../../scripts/sdk/GameNativeConfig"), f = t("../../../../scripts/slotsframewrodk/SlotsNewView"), m = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollMgr"), _ = t("../../../../scripts/slotsframewrodk/event/SlotsFrameEvent"), y = t("../../../../scripts/slotsframewrodk/other/SlotsOperate"), v = t("../../../../scripts/slotsframewrodk/reward/SlotsRewardMgr"), g = t("../Manager/GameController_DoubleDragon"), w = t("../other/dd_slots_rewardx8"), b = t("../other/doubledragon_game_count"), C = cc._decorator, A = C.ccclass, S = (C.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.countDown = null;
e.commonBg = null;
e.freeDragon = null;
e.x8WinCode = null;
e.node_bottom = null;
e.node_FreeTips = null;
e.node_Freebg = null;
e.gameController = null;
e.spinState = null;
e.tipsNode = null;
e.tipsIndex = 0;
e.isPlayAudio_Scatter = !1;
e.curRollStopCount_normal = 0;
e.actionCount = 0;
return e;
}
e.getPrefabUrl = function() {
return "prefabs/DoubleDragonView";
};
e.prototype.onLoad = function() {
this.gameController = this.node.getChildByName("GameController").getComponent(g.default);
this.gameController.init();
this.isLandscapeScreen = !1;
t.prototype.onLoad.call(this);
s.GlobalVar.isShowSymbol_OurSlots = !0;
this.gameController.carouselAwardLineMgr.Init(this.carouselConfig);
this.gameController.awardManager.Init(this.mainRollConfig);
};
e.prototype.initNode = function() {
var t = this;
this.slotsOperate = cc.find("mask/scale/root/bottom/SlotsOperate", this.node).getComponent(y.default);
this.rollControler = cc.find("mask/scale/root/mainRoll", this.node).getComponent(m.default);
var e = cc.find("mask/scale/root/roll2", this.node).getComponent(m.default);
this.rollControlers = [];
this.rollControlers.push(this.rollControler);
this.rollControlers.push(e);
this.effectMgt = cc.find("mask/scale/effects", this.node).getComponent(v.default);
this.effectMgt.init(this.slotsOperate);
this.x8WinCode.init(this.slotsOperate.winLabel);
this.freeDragon.active = !0;
this.tipsNode = this.node_FreeTips.children;
this.freeDragonAnim = this.freeDragon.getComponentsInChildren(dragonBones.ArmatureDisplay);
for (var o = function(t) {
var e = n.freeDragonAnim[t];
e.addEventListener(dragonBones.EventObject.COMPLETE, function() {
e.playAnimation("newAnimation", 0);
});
}, n = this, r = 0; r < this.freeDragonAnim.length; r++) o(r);
this.onD(a.ComponentGameEvent.Game_Exit_Event, function(e) {
void 0 === e && (e = !1);
t.Callback_ClickExitGame(e);
});
this.onD(_.PG_Event.AutoService_Confirm, function(e) {
t.slotsOperate.setChooseAutoCount(e);
});
this.onD(_.PG_Event.AutoService_Close, function() {
t.slotsOperate.closeAuto();
t.gameController.isCanCarousel && t.gameController.carouselAwardLineMgr.PlayCarouselAwardLine();
});
this.onD(a.ComponentGameEvent.GrayBtns_Event, function(e, o) {
e > 0 ? t.gameController.bottomBtnService.SetState_RunningHide(!1) : t.gameController.bottomBtnService.SetState_RunningHide(o);
});
this.onD("SetWinStarCount_DoubleDragon", function(e) {
0 == t.slotsData.result.nowFlage && e >= 5 && t.gameController.setTipsActive(!1, e);
});
};
e.prototype.playLong = function(t) {
this.freeDragonAnim[t].playAnimation("newAnimation_复制1", 1);
};
e.prototype.initSlotsNode = function() {
var t = this;
this.tipsIndex = 0;
this.rollControlers[1].initData({
speed: 3e3,
accelerate: 1e3,
lineCount: 25,
numY: 3,
rewardParentOrginScale: 1.226,
easeTime: .46,
elementCount: 17,
name: "other",
interval: .2,
turnType: 0,
stopTime: 1,
inEase: 1,
rewardExtraEffect: 1
});
this.mainRollConfig = {
speed: 3e3,
accelerate: 1e3,
lineCount: 30,
numY: 3,
easeTime: .46,
elementCount: 17,
name: "roll",
interval: .2,
turnType: 0,
stopTime: 1,
inEase: 1,
rewardExtraEffect: 1,
elementRange_Init: [ [ 3, 2, 1, 2, 3, 5, 6, 7, 1 ], [ 3, 3, 4, 5, 6, 7, 8, 8, 9 ], [ 4, 5, 6, 7, 10, 13, 8, 9, 14 ], [ 8, 9, 8, 9, 11, 15, 2, 1, 4 ], [ 12, 13, 14, 12, 13, 14, 15, 1, 2 ] ],
elementRange_Run: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ] ],
elementRange_Run_Free: [ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ], [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19 ] ],
rollStartCB: this.rollStartCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this),
gameFinishEndCB: this.gameFinishEndCB.bind(this)
};
this.slotSperateData = {
editor_offJoinRequest: !1,
betValues: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
curBetIndex: 0,
betType: 1,
maxBetEffect_switch: !0,
autoValues: [ 500, 200, 100, 20 ],
showCallBack: function() {},
helpCallBack: function() {
App.globalAudio.playButtonClick();
t.showGameHelp(!0);
},
spinCallBack: function(e) {
dispatch(a.CommonEvent.EventMaskAll, .1);
t.rollCount = 1;
if (t.creatHttpRequest_Spin()) {
e && t.spinState.PlayRotation_Run();
dispatch(a.CommonEvent.EventMaskAll, .2);
t.gameController.setTipsActive(!1);
t.playEffect("sounds/ws_yx_spin");
t.rollControler.startRoll(0);
dispatch(a.ComponentGameEvent.GrayBtns_Event, 0, !1);
t.slotsOperate.reduceAutoNum();
} else {
t.slotsOperate.closeAuto();
t.spinState.resetState();
}
},
stopCallBack: function() {
if (t.oneClick) {
dispatch(a.CommonEvent.EventMaskAll, .2);
t.gameController.isUseQuickStop = !0;
t.curSpinTime < t.mainRollConfig.stopTime && (t.curSpinTime = t.mainRollConfig.stopTime);
dispatch(a.ComponentGameEvent.GrayBtns_Event, 0, !1);
}
},
freeCallBack: function(e) {
if (e) t.slotSperateData.stopCallBack(); else {
t.gameController.setTipsActive(!0);
t.playEffect("sounds/ws_yx_spin");
t.createFreeHttp_Spin();
t.rollCount = 2;
for (var o = 0; o < t.rollCount; o++) t.rollControlers[o].startRoll(0);
dispatch(a.ComponentGameEvent.GrayBtns_Event, 0, !1);
}
},
autoCallBack: function() {
t.slotsOperate.closeAuto();
t.spinState.CancelAuto();
t.gameController.isCanCarousel && t.gameController.carouselAwardLineMgr.PlayCarouselAwardLine();
},
autoBtnCallback: function() {
var e = {
betValue: t.slotsData.initDesk.betValues[t.slotsOperate.curBetIndex],
win: t.slotsOperate.winLabelScore
};
t.gameController.autoService.OpenShow(e);
}
};
this.carouselConfig = {
isUseCarousel: !0,
isAllAways: !1,
jiangeTime: 2,
wildElements: [ 9, 19 ],
linePosPaths: [ [ 1, 4, 7, 10, 13 ], [ 0, 3, 6, 9, 12 ], [ 2, 5, 8, 11, 14 ], [ 0, 4, 8, 10, 12 ], [ 2, 4, 6, 10, 14 ], [ 0, 3, 7, 9, 12 ], [ 2, 5, 7, 11, 14 ], [ 1, 5, 8, 11, 13 ], [ 1, 3, 6, 9, 13 ], [ 0, 4, 7, 10, 12 ], [ 2, 4, 7, 10, 14 ], [ 1, 4, 6, 10, 13 ], [ 1, 4, 8, 10, 13 ], [ 0, 5, 8, 11, 12 ], [ 2, 3, 6, 9, 14 ], [ 1, 3, 7, 9, 13 ], [ 1, 5, 7, 11, 13 ], [ 0, 5, 6, 11, 12 ], [ 2, 3, 8, 9, 14 ], [ 0, 4, 6, 10, 12 ], [ 2, 4, 8, 10, 14 ], [ 0, 5, 7, 11, 12 ], [ 2, 3, 7, 9, 14 ], [ 1, 3, 8, 9, 13 ], [ 1, 5, 6, 11, 13 ], [ 0, 3, 8, 9, 12 ], [ 2, 5, 6, 11, 14 ], [ 0, 3, 6, 9, 13 ], [ 2, 5, 8, 11, 13 ], [ 1, 4, 7, 10, 12 ] ],
awardNeedCount: [ [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3, 4, 5, 6, 7, 8, 9, 10 ], [ 3 ] ],
HideAllAwardElement: function() {
for (var e = 0; e < t.gameController.curRollElements.length; e++) {
var o = t.gameController.curRollElements[e];
o.node.active = !0;
o.setState(l.GlobalEnum.ElementState.Normal);
}
t.gameController.awardManager.ResetForBegin();
},
HideAwardElement: function(e) {
for (var o = 0; o < e.length; o++) {
var n = e[o], r = t.gameController.curRollElements[n];
r.node.active = !0;
r.setState(l.GlobalEnum.ElementState.Normal);
}
t.gameController.awardManager.HideAwardEle_Carousel(e);
},
ShowAllAwardElement: function() {
for (var e = t.slotsData.result.awardResult.awardPos[0], o = 0; o < t.gameController.curRollElements.length; o++) {
var n = t.gameController.curRollElements[o];
if (e.indexOf(o) >= 0) {
n.setState(l.GlobalEnum.ElementState.Reward);
n.node.active = !1;
} else {
n.node.active = !0;
n.setState(l.GlobalEnum.ElementState.Normal);
}
}
t.gameController.awardManager.ShowAwardEle_Carousel(e);
},
ShowAwardElement: function(e) {
for (var o = 0; o < t.gameController.curRollElements.length; o++) {
var n = t.gameController.curRollElements[o];
if (e.indexOf(o) >= 0) {
n.setState(l.GlobalEnum.ElementState.Reward);
n.node.active = !1;
} else {
n.node.active = !0;
n.setState(l.GlobalEnum.ElementState.Normal);
}
}
t.gameController.awardManager.ShowAwardEle_Carousel(e);
}
};
};
e.prototype.setAcc = function(t, e) {
this.rollControler.accelerateEffects && this.rollControler.accelerateEffects.length > 0 && (this.rollControler.accelerateEffects[t].active = e);
};
e.prototype.rollStartCB = function() {
this.gameController.isUseQuickStop = !1;
this.gameController.isCanCarousel = !1;
this.gameController.carouselAwardLineMgr.ResetForBegin();
this.gameController.awardManager.ResetForBegin();
if (this.gameController.curRollElements.length > 0) for (var t = 0; t < this.gameController.curRollElements.length; t++) {
var e = this.gameController.curRollElements[t];
e.node.active = !0;
e.setState(l.GlobalEnum.ElementState.Normal);
}
this.gameController.curRollElements = [];
this.curRollStopCount_normal = 0;
this.curSpinIndex = 0;
this.scatterCount = 0;
this.slotsOperate.setTitleAndValue("WIN", 0);
this.setAcc(0, !1);
this.setAcc(1, !1);
this.setAcc(2, !1);
this.setAcc(3, !1);
this.setAcc(4, !1);
this.setAcc(5, !1);
this.isPlayAudio_Scatter = !1;
};
e.prototype.rollAccelerateStartCB = function() {
this.playEffect("sounds/ws_add");
this.setAcc(5, !0);
};
e.prototype.rollFinishCB = function(t, e) {
this.curSpinIndex++;
var o = this.curSpinIndex == this.rollControler.getUnlockCount();
if (t) {
if (!this.isPlayAudio_Scatter && this.haveScatter(e)) {
this.isPlayAudio_Scatter = !0;
this.playEffect("sounds/ws_addbefore");
}
o && this.playEffect("sounds/ws_yy_normalStop");
} else if (this.haveScatter(e)) {
this.scatterCount++;
if (1 == e && 1 == this.scatterCount) {
this.setAcc(e, !0);
this.playEffect("sounds/ws_addbefore");
} else if (2 == e && 2 == this.scatterCount) {
this.setAcc(e, !0);
this.playEffect("sounds/ws_addbefore");
this.rollControler.starAccelerate(e, 4);
} else if (3 == e && 3 == this.scatterCount) {
this.setAcc(e, !0);
this.playEffect("sounds/ws_addLast");
} else this.playEffect("sounds/ws_yy_normalStop");
} else this.playEffect("sounds/ws_yy_normalStop");
};
e.prototype.gameFinishEndCB = function() {
this.curRollStopCount_normal++;
if (this.curRollStopCount_normal == this.rollControler.getUnlockCount()) {
this.gameController.curRollElements = this.rollControler.getEndNodes();
this.spinState.ShowWaitForNext();
this.awardStep1();
} else dispatch(a.ComponentGameEvent.GrayBtns_Event, 0, !1);
};
e.prototype.convertResult = function() {
for (var t = p.CmmUtils.convertResults(this.slotsData.result, this.mainRollConfig.numY), e = 0; e < t.length; e++) {
var o = t[e];
this.rollControlers[e].initResult(o);
}
};
e.prototype.receiveResult = function() {
dispatch(h.default.Event.update_topbanner_money, this.slotsData.result.moneyInfo.beginMoney);
if (0 == this.curSpinIndex) {
dispatch(a.ComponentGameEvent.GaryBtns_Quickly);
this.spinState.setAuto_Quick_Mask(!1);
}
if (1 == this.slotsData.result.nowFlage) {
var t = this.freeInfo.freeCount.split("/");
this.slotsOperate.setSpinState(l.GlobalEnum.SlotsSpinType.Free, t[0]);
}
};
e.prototype.refreshFlag = function(t, e) {
switch (t) {
case 0:
if (!this.isNormalBgm) {
this.playMusic("sounds/ws_yy_normalBGM");
this.isNormalBgm = !0;
}
this.slotsOperate.setSpinState(l.GlobalEnum.SlotsSpinType.Spin);
if (e) e(); else {
this.slotsOperate.isEnalbeRoll = !0;
dispatch(a.CommonEvent.EventMaskAll, -1);
}
break;

case 1:
var o = this.freeInfo.freeCount.split("/");
this.slotsOperate.setSpinState(l.GlobalEnum.SlotsSpinType.Free, o[0]);
if (e) e(); else {
this.slotsOperate.isEnalbeRoll = !0;
dispatch(a.CommonEvent.EventMaskAll, -1);
}
break;

default:
App.tips.show("error");
}
};
e.prototype.gotoFreeState = function(t) {
if (t) {
this.rollControlers[1].node.active = !0;
this.rollControlers[0].node.position = cc.v3(0, 390, 0);
this.freeDragon.active = !1;
this.rollControler.rollControler.setRollRunType(l.GlobalEnum.RollRunType.Free);
this.node_bottom.position = cc.v3(0, -690, 0);
this.node_FreeTips.position = cc.v3(0, 90, 0);
this.node_FreeTips.scale = .9;
this.node_Freebg.active = !0;
var e = this.freeInfo.freeCount.split("/");
this.spinState.HideNormal(e[0]);
this.spinState.ShowFree();
} else {
this.rollControlers[1].node.active = !1;
this.rollControlers[0].node.position = cc.v3(0, 30, 0);
this.freeDragon.active = !0;
this.rollControler.rollControler.setRollRunType(l.GlobalEnum.RollRunType.Normal);
this.node_bottom.position = cc.v3(0, -498, 0);
this.node_FreeTips.position = cc.v3(0, 295, 0);
this.node_FreeTips.scale = .6;
this.node_Freebg.active = !1;
this.spinState.HideFree();
this.spinState.ShowNormal();
}
};
e.prototype.receiveInit = function() {
var t = this;
this.spinState = this.slotsOperate.getSlotsSpinState();
this.slotsOperate.setTitleAndValue("WIN", 0);
this.gameController.carouselAwardLineMgr.SetBetRate(this.slotsData.initDesk.betRate);
if (this.freeInfo) {
var e = this.freeInfo.freeCount.split("/"), o = {
title: App.zLan.getString(20074),
countTime: 30,
value: e[0],
audioPath: c.CmmAudio.common_slots_yx_laling,
time: 1.8,
bundle: d.Macro.BUNDLE_RESOURCES,
cb: this.gotoFreeState.bind(this)
};
this.slotsOperate.setOnlyTitleAndValue(App.zLan.getBundleString(2600004), this.freeInfo.freeTotalFen);
App.globalAudio.pauseMusic();
this.countDown.playEffect(o, function() {
App.globalAudio.resumeMusic();
t.playMusic("sounds/ws_yy_freeBGM");
t.isNormalBgm = !1;
t.refreshFlag(1);
});
} else {
this.rollControler.rollControler.setRollRunType(l.GlobalEnum.RollRunType.Normal);
this.refreshFlag(0);
}
};
e.prototype.awardStep1 = function() {
var t = this;
this.setAcc(5, !1);
if (0 == this.slotsData.result.nowFlage && 0 == this.slotsData.result.nextFlage) {
this.setAcc(1, !1);
this.setAcc(2, !1);
this.setAcc(3, !1);
}
dispatch(a.CommonEvent.EventMaskAll, 1e5);
for (var e = 0; e < this.rollCount; e++) this.rollControlers[e].resetAllElementState();
if (this.slotsData.result.isAward) {
this.showLine();
for (e = 0; e < this.rollCount; e++) this.rollControlers[e].playEndAnim();
if (0 == this.slotsData.result.nowFlage) {
var o = this.slotsData.result.awardResult.awardPos[0], n = this.slotsData.result.value[0], r = [];
for (e = 0; e < o.length; e++) {
var i = o[e];
r.push(n[i]);
}
var s = this.slotsData.initDesk.betValues[this.slotsOperate.curBetIndex] / 30;
this.gameController.awardManager.ShowAward(o, r);
this.gameController.carouselAwardLineMgr.PlayAllAwardLine(this.slotsData.result.awardResult.awardLine[0], o, this.slotsData.result.value[0], s);
}
var l = .4;
switch (this.slotsData.result.awardResult.awardType) {
case 1:
l += 0;
break;

case 2:
l += 1.1;
break;

case 3:
l += 1.4;
break;

case 5:
l += 1.2;
}
this.playLongAnim();
this.isX8() ? this.scheduleOnce(function() {
var e = {
moneyNum: t.slotsData.result.moneyInfo.totalWinMoney,
beforeMoneyNum: t.getx8Total()
};
t.x8WinCode.playEffect(e, function() {
t.endfunc();
});
}, l) : this.scheduleOnce(function() {
t.playScoreAnim(function() {
t.endfunc();
});
}, l);
} else this.endfunc();
};
e.prototype.playScoreAnim = function(t) {
var e = this.slotsData.result.awardResult.awardType, o = this.slotsData.result.moneyInfo.totalWinMoney;
dispatch(a.CommonEvent.EventMaskAll, -1);
this.effectMgt.playEffect(e, o, function() {
t();
});
};
e.prototype.endfunc = function() {
var t = this;
if (0 == this.slotsData.result.nowFlage && 1 == this.slotsData.result.nextFlage) {
var e = this.freeInfo.freeCount.split("/"), o = {
title: App.zLan.getString(20074),
countTime: 30,
value: e[0],
audioPath: c.CmmAudio.common_slots_yx_laling,
time: 1.8,
bundle: d.Macro.BUNDLE_RESOURCES,
cb: this.gotoFreeState.bind(this)
};
dispatch(a.CommonEvent.EventMaskAll, -1);
this.slotsOperate.setTitleAndValue(App.zLan.getBundleString(2600004), this.freeInfo.freeTotalFen);
App.globalAudio.pauseMusic();
this.countDown.playEffect(o, function() {
App.globalAudio.resumeMusic();
t.playMusic("sounds/ws_yy_freeBGM");
t.isNormalBgm = !1;
dispatch(a.CommonEvent.EventMaskAll, 1e4);
t.endfunc2();
});
} else if (1 == this.slotsData.result.nowFlage && 0 == this.slotsData.result.nextFlage) {
this.endfunc2(function() {
dispatch(a.CommonEvent.EventMaskAll, 1e4);
});
this.countDown.closeDoor(function() {
t.gotoFreeState(!1);
}, function() {
t.slotsOperate.isEnalbeRoll = !0;
});
} else this.endfunc2();
};
e.prototype.endfunc2 = function(t) {
var e = this;
if (this.slotsData.result.isAward) {
dispatch(_.SlotsEvent.slots_AddToEndMoney, this.slotsData.result.moneyInfo.endMoney);
o = .3;
this.getIsAuto() ? o = .8 : 1 == this.slotsData.result.awardResult.awardType && (o = .8);
if (1 == this.slotsData.result.nowFlage) this.slotsOperate.setTitleAndValue(App.zLan.getBundleString(2600004), this.freeInfo.freeTotalFen); else {
this.slotsOperate.setTitleAndValue(App.zLan.getBundleString(2600004), this.slotsData.result.moneyInfo.totalWinMoney, 6 == this.slotsData.result.awardResult.awardType);
if (this.slotsData.result.awardResult.awardLine[0].length > 0) {
this.gameController.isCanCarousel = !0;
this.checkIsCarousel();
}
}
this.scheduleOnce(function() {
e.refreshFlag(e.slotsData.result.nextFlage, function() {
dispatch(a.ComponentGameEvent.GrayBtns_Event, e.slotsOperate.getAutoNum(), !0);
dispatch(h.default.Event.update_topbanner_money, e.slotsData.result.moneyInfo.endMoney);
if (t) t(); else {
e.slotsOperate.isEnalbeRoll = !0;
dispatch(a.CommonEvent.EventMaskAll, -1);
}
});
}, o);
} else {
var o = .05;
(1 == this.slotsData.result.nowFlage || this.getIsAuto()) && (o = .5);
this.scheduleOnce(function() {
e.slotsOperate.setTitleAndValue(App.zLan.getBundleString(2600004), 0);
e.refreshFlag(e.slotsData.result.nextFlage, function() {
dispatch(a.ComponentGameEvent.GrayBtns_Event, e.slotsOperate.getAutoNum(), !0);
dispatch(h.default.Event.update_topbanner_money, e.slotsData.result.moneyInfo.endMoney);
if (t) t(); else {
e.slotsOperate.isEnalbeRoll = !0;
dispatch(a.CommonEvent.EventMaskAll, -1);
}
});
}, o);
}
};
e.prototype.checkIsCarousel = function() {
this.getIsAuto() || this.gameController.carouselAwardLineMgr.PlayCarouselAwardLine();
};
e.prototype.updateAuto = function(e) {
this.slotsOperate.isEnableFreeSpin() ? this.slotSperateData.freeCallBack && this.slotSperateData.freeCallBack(!1) : t.prototype.updateAuto.call(this, e);
};
e.prototype.updateAutoStop = function() {
if (this.gameController.isUseQuickStop) for (var t = 0; t < this.rollCount; t++) this.rollControlers[t].quickStopRoll(); else for (t = 0; t < this.rollCount; t++) this.rollControlers[t].stopRoll();
};
e.prototype.isX8 = function() {
if (this.freeInfo && this.freeInfo.winLine) {
var t = this.freeInfo.winLine;
if (t[0] > 0 && t[1] > 0 && 1 == this.slotsData.result.nowFlage && 1 == this.slotsData.result.nextFlage) return !0;
}
return !1;
};
e.prototype.getx8Total = function() {
var t = this.freeInfo.winLine;
return t[0] + t[1];
};
e.prototype.playLongAnim = function() {
if (this.freeInfo && this.freeInfo.winLine) {
this.freeInfo.winLine;
this.playLong(0);
}
};
e.prototype.getIsAuto = function() {
return this.slotsOperate.curAutoNum > 0;
};
e.prototype.haveScatter = function(t) {
for (var e = this.rollControler.getEndNodesByIndex(t), o = 0; o < e.length; o++) if (10 == e[o].elementValue) return !0;
return !1;
};
i([ u.inject("mask/scale/countDown", b.default) ], e.prototype, "countDown", void 0);
i([ u.inject("mask/scale/root/commonBg", cc.Node) ], e.prototype, "commonBg", void 0);
i([ u.inject("mask/scale/root/commonBg/freeDragon", cc.Node) ], e.prototype, "freeDragon", void 0);
i([ u.inject("mask/scale/winTypex8", w.default) ], e.prototype, "x8WinCode", void 0);
i([ u.inject("mask/scale/root/bottom", cc.Node) ], e.prototype, "node_bottom", void 0);
i([ u.inject("mask/scale/root/commonBg/freespin_tips", cc.Node) ], e.prototype, "node_FreeTips", void 0);
i([ u.inject("mask/bg/free", cc.Node) ], e.prototype, "node_Freebg", void 0);
return i([ A ], e);
}(f.default));
o.default = S;
cc._RF.pop();
}, {
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmAudio": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/slotsframewrodk/SlotsNewView": void 0,
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollMgr": void 0,
"../../../../scripts/slotsframewrodk/event/SlotsFrameEvent": void 0,
"../../../../scripts/slotsframewrodk/other/SlotsOperate": void 0,
"../../../../scripts/slotsframewrodk/reward/SlotsRewardMgr": void 0,
"../Manager/GameController_DoubleDragon": "GameController_DoubleDragon",
"../other/dd_slots_rewardx8": "dd_slots_rewardx8",
"../other/doubledragon_game_count": "doubledragon_game_count"
} ],
GameController_DoubleDragon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "02313K6yyZBFKJ5ZnZxa6UA", "GameController_DoubleDragon");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/slotsframewrodk/Line/CarouselAwardLineMgr"), l = t("../../../../scripts/slotsframewrodk/PG/AutoService_Base1_Pg"), a = t("./AwardManger_DoubleDragon"), c = t("./BottomBtnService_DoubleDragon"), p = cc._decorator, u = p.ccclass, d = p.property, h = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.carouselAwardLineMgr = null;
e.awardManager = null;
e.bottomBtnService = null;
e.autoService = null;
e.node_tips = [];
e.label_starCount = null;
e.curRollElements = [];
e.isUseQuickStop = !1;
e.isCanCarousel = !1;
e.tipsIndex = 0;
return e;
}
e.prototype.init = function() {
this.tipsIndex = 0;
this.setTipsActive(!1, 0);
};
e.prototype.setTipsActive = function(t, e) {
void 0 === e && (e = 0);
if (t) for (var o = 0; o < this.node_tips.length; o++) (n = this.node_tips[o]).active = 4 == o; else if (e > 0) {
this.label_starCount.string = e + "";
for (o = 0; o < this.node_tips.length; o++) (n = this.node_tips[o]).active = 3 == o;
} else {
for (o = 0; o < this.node_tips.length; o++) {
var n = this.node_tips[o];
o == this.tipsIndex ? n.active = !0 : n.active = !1;
}
this.tipsIndex = (this.tipsIndex + 1) % 3;
}
};
i([ d(s.default) ], e.prototype, "carouselAwardLineMgr", void 0);
i([ d(a.default) ], e.prototype, "awardManager", void 0);
i([ d(c.default) ], e.prototype, "bottomBtnService", void 0);
i([ d(l.default) ], e.prototype, "autoService", void 0);
i([ d(cc.Node) ], e.prototype, "node_tips", void 0);
i([ d(cc.Label) ], e.prototype, "label_starCount", void 0);
return i([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/slotsframewrodk/Line/CarouselAwardLineMgr": void 0,
"../../../../scripts/slotsframewrodk/PG/AutoService_Base1_Pg": void 0,
"./AwardManger_DoubleDragon": "AwardManger_DoubleDragon",
"./BottomBtnService_DoubleDragon": "BottomBtnService_DoubleDragon"
} ],
SlotsSpinState_DoubleDragon: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7a174gTr65I8K9Fd+xF9V0Q", "SlotsSpinState_DoubleDragon");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/enum/GlobalEnum"), l = t("../../../../scripts/slotsframewrodk/other/Btns/SlotsSpinState"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.node_Normal = null;
e.node_Free = null;
e.blockInputEvents_Free = null;
e.node_Rotation = null;
e.node_sb_arrow = null;
e.node_sb_arrow_blur = null;
e.node_sb_arrow_grey = null;
e.node_sb_arrow_grey_blur = null;
e.ani_horver = null;
e.ani_Auto_horver = null;
e.node_Auto_Quick_NotMask = null;
e.node_effect_Click = null;
e.particle_Star = null;
e.node_fixedButtom = null;
e.color_Normal = 255;
e.color_Pressed = 254;
e.color_Horver = 253;
e.color_Disabled = 252;
e.isDelayCheck = !1;
e.isCanCheck = !0;
e.isPlayHorver = !1;
e.isShow_Grey = !1;
e.isRotation = !1;
e.angle_rotation = 0;
e.angle_speed = -2;
e.tweenScale_Normal = null;
e.tween_StartBtn = null;
e.tween_FreeLeft = null;
e.time = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.COLOR_CHANGED, function() {
t.CheckSpinBtnState();
}, this.node);
this.blockInputEvents_Free = this.node_Free.getComponent(cc.BlockInputEvents);
this.blockInputEvents_Free.enabled = !1;
};
e.prototype.onDestroy = function() {
this.ClearTween();
this.tween_FreeLeft && this.tween_FreeLeft.stop();
this.tween_StartBtn && this.tween_StartBtn.stop();
};
e.prototype.start = function() {
this.resetState();
var t = this.node_Free.getChildByName("Layout").getComponent(cc.Layout);
t.enabled = !0;
t.updateLayout();
t.enabled = !1;
};
e.prototype.resetState = function() {
var t = this;
this.ClearTween();
this.particle_Star.stop();
this.node_effect_Click.opacity = 0;
this.angle_rotation = 0;
this.node_Rotation.angle = 0;
this.isDelayCheck = !0;
this.node_Normal.scale = 1;
this.StopAnimation_Horver();
this.PlayRotation_Normal();
this.isPlayHorver = !1;
this.scheduleOnce(function() {
t.isDelayCheck = !1;
}, .3);
};
e.prototype.CheckSpinBtnState = function() {
if (this.isCanCheck) {
var t = this.node.color.r;
if (t == this.color_Horver) this.isPlayHorver || this.PlayAnimation_Horver(); else {
this.StopAnimation_Horver();
if (this.isDelayCheck) return;
if (t == this.color_Pressed) {
if (this.state == s.GlobalEnum.SlotsSpinType.Spin) {
this.ClearTween();
this.tweenScale_Normal = cc.tween(this.node_Normal).to(.12, {
scale: .88
}).start();
}
} else if (t == this.color_Normal && this.state == s.GlobalEnum.SlotsSpinType.Spin) {
this.ClearTween();
this.tweenScale_Normal = cc.tween(this.node_Normal).to(.12, {
scale: 1
}).start();
}
}
} else {
this.ani_Auto_horver.stop();
this.ani_Auto_horver.node.active = !1;
}
};
e.prototype.setState = function(t, e) {
this.state == s.GlobalEnum.SlotsSpinType.Auto && t == s.GlobalEnum.SlotsSpinType.Stop ? this.state = s.GlobalEnum.SlotsSpinType.Auto : this.state = t;
switch (t) {
case s.GlobalEnum.SlotsSpinType.Spin:
this.setShowAuto(!1);
this.PlayRotation_Normal();
break;

case s.GlobalEnum.SlotsSpinType.Stop:
break;

case s.GlobalEnum.SlotsSpinType.Auto:
this.setShowAuto(!0);
break;

case s.GlobalEnum.SlotsSpinType.Free:
case s.GlobalEnum.SlotsSpinType.Respin:
this.setAutoNum(e);
}
};
e.prototype.setAutoNum = function(t) {
switch (this.state) {
case s.GlobalEnum.SlotsSpinType.Spin:
case s.GlobalEnum.SlotsSpinType.Stop:
break;

case s.GlobalEnum.SlotsSpinType.Auto:
this.autoLabel1.string = t;
0 == t && (this.isCanCheck = !1);
break;

case s.GlobalEnum.SlotsSpinType.Free:
this.freeLabel && (this.freeLabel.string = t);
break;

case s.GlobalEnum.SlotsSpinType.Respin:
this.respinLabel && (this.respinLabel.string = t);
}
};
e.prototype.setAutoNum_FromAutoBtn = function(t) {
this.autoLabel1 && (this.autoLabel1.string = t);
0 == t && (this.isCanCheck = !1);
};
e.prototype.CancelAuto = function() {
this.setShowAuto(!1);
};
e.prototype.HideNormal = function(t) {
void 0 === t && (t = 0);
this.tween_StartBtn && this.tween_StartBtn.stop();
this.tween_StartBtn = cc.tween(this.node_fixedButtom).to(.05, {
opacity: 0
}).start();
t > 0 && (this.freeLabel.string = t + "");
};
e.prototype.ShowNormal = function() {
this.tween_StartBtn && this.tween_StartBtn.stop();
this.tween_StartBtn = cc.tween(this.node_fixedButtom).to(.05, {
opacity: 255
}).start();
};
e.prototype.HideFree = function() {
var t = this;
Log.e("HideFree");
this.tween_FreeLeft && this.tween_FreeLeft.stop();
this.tween_FreeLeft = cc.tween(this.node_Free).to(.05, {
opacity: 0
}).call(function() {
t.blockInputEvents_Free.enabled = !1;
}).start();
};
e.prototype.ShowFree = function() {
Log.e("ShowFree");
this.tween_FreeLeft && this.tween_FreeLeft.stop();
this.blockInputEvents_Free.enabled = !0;
this.node_Free.opacity = 0;
this.tween_FreeLeft = cc.tween(this.node_Free).to(.05, {
opacity: 255
}).start();
};
e.prototype.PlayAnimation_Horver = function() {
this.isPlayHorver = !0;
this.ani_horver.node.opacity = 255;
this.ani_horver.play();
if (this.auto.active) {
this.ani_Auto_horver.node.active = !0;
this.ani_Auto_horver.play();
}
};
e.prototype.StopAnimation_Horver = function() {
this.isPlayHorver = !1;
this.ani_horver.stop();
this.ani_horver.node.scale = 1;
this.ani_horver.node.opacity = 0;
this.ani_Auto_horver.stop();
this.ani_Auto_horver.node.active = !1;
};
e.prototype.ShowWaitForNext = function() {
if (!this.auto.active) {
this.isCanCheck = !1;
this.isRotation = !1;
this.ShowRotationStyle(!1);
}
};
e.prototype.PlayRotation_Normal = function() {
this.angle_speed = -1.5;
this.isRotation = !0;
this.ShowRotationStyle(!0);
this.isCanCheck = !0;
this.CheckSpinBtnState();
};
e.prototype.PlayRotation_Run = function() {
var t = this;
this.isCanCheck = !1;
this.angle_speed = -12;
this.isRotation = !0;
if (this.isShow_Grey) {
this.node_sb_arrow.opacity = 0;
this.node_sb_arrow_blur.opacity = 0;
this.node_sb_arrow_grey_blur.opacity = 255;
this.node_sb_arrow_grey.opacity = 0;
} else {
this.node_sb_arrow.opacity = 0;
this.node_sb_arrow_grey.opacity = 0;
this.node_sb_arrow_blur.opacity = 255;
this.node_sb_arrow_grey_blur.opacity = 0;
}
if (this.auto.active) {
this.ani_Auto_horver.stop();
this.ani_Auto_horver.node.active = !1;
}
this.ResetState_Ani();
this.node_effect_Click.opacity = 255;
this.particle_Star.play();
this.scheduleOnce(function() {
t.node_effect_Click.opacity = 0;
t.ResetState_Ani();
}, 2);
this.ClearTween();
this.node_Normal.scale = .88;
this.tweenScale_Normal = cc.tween(this.node_Normal).to(.12, {
scale: 1
}).start();
};
e.prototype.setAuto_Quick_Mask = function() {
this.state == s.GlobalEnum.SlotsSpinType.Auto ? this.node_Auto_Quick_NotMask.active = !1 : this.node_Auto_Quick_NotMask.active = !0;
};
e.prototype.ResetState_Ani = function() {
this.particle_Star.stop();
this.node_effect_Click.opacity = 0;
};
e.prototype.ClearTween = function() {
this.tweenScale_Normal && this.tweenScale_Normal.stop();
};
e.prototype.update = function(t) {
this.time += t;
if (this.isRotation) {
this.angle_rotation = (this.angle_rotation + this.angle_speed) % 360;
this.node_Rotation.angle = this.angle_rotation;
}
};
e.prototype.ShowRotationStyle = function(t) {
this.isShow_Grey = !t;
if (t) {
this.node_sb_arrow.opacity = 255;
this.node_sb_arrow_grey.opacity = 0;
} else {
this.node_sb_arrow.opacity = 0;
this.node_sb_arrow_grey.opacity = 255;
}
this.node_sb_arrow_blur.opacity = 0;
this.node_sb_arrow_grey_blur.opacity = 0;
};
e.prototype.setShowAuto = function(t) {
this.auto.active = t;
this.spin.active = !t;
if (!t) {
this.node_Auto_Quick_NotMask.active = !0;
this.ani_Auto_horver.stop();
this.ani_Auto_horver.node.active = !1;
}
};
i([ p(cc.Node) ], e.prototype, "node_Normal", void 0);
i([ p(cc.Node) ], e.prototype, "node_Free", void 0);
i([ p(cc.Node) ], e.prototype, "node_Rotation", void 0);
i([ p(cc.Node) ], e.prototype, "node_sb_arrow", void 0);
i([ p(cc.Node) ], e.prototype, "node_sb_arrow_blur", void 0);
i([ p(cc.Node) ], e.prototype, "node_sb_arrow_grey", void 0);
i([ p(cc.Node) ], e.prototype, "node_sb_arrow_grey_blur", void 0);
i([ p(cc.Animation) ], e.prototype, "ani_horver", void 0);
i([ p(cc.Animation) ], e.prototype, "ani_Auto_horver", void 0);
i([ p(cc.Node) ], e.prototype, "node_Auto_Quick_NotMask", void 0);
i([ p(cc.Node) ], e.prototype, "node_effect_Click", void 0);
i([ p(cc.ParticleSystem3D) ], e.prototype, "particle_Star", void 0);
i([ p(cc.Node) ], e.prototype, "node_fixedButtom", void 0);
return i([ c ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/slotsframewrodk/other/Btns/SlotsSpinState": void 0
} ],
dd_AnimationPlayState: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "798aagPFNNI77nBKzITYd0P", "dd_AnimationPlayState");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState"), l = cc._decorator, a = l.ccclass, c = (l.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
return e;
}
e.prototype.init = function() {
this.myElementNode = this.node.parent;
if (!this.anim) {
this.anim = this.node.getComponentsInChildren(cc.Animation);
this.rewardNode = this.node;
}
};
e.prototype.show = function(e) {
var o = this;
t.prototype.show.call(this, e);
this.init();
e.rewardParent && this.scheduleOnce(function() {
var t = App.utils.localConvertWorldPointAR(o.rewardNode), n = App.utils.worldConvertLocalPointAR(e.rewardParent, t);
o.rewardNode.setParent(e.rewardParent);
e.rewardParentOrginScale || 0 == e.rewardParentOrginScale ? o.rewardNode.scale = e.rewardParentOrginScale : o.rewardNode.scale = 1;
o.rewardNode.position = cc.v3(n);
}, .32);
this.node.active = !0;
for (var n = 0; n < this.anim.length; n++) this.anim[n].play(null, 0);
};
e.prototype.hide = function() {
this.init();
if (this.rewardNode && this.rewardNode.parent != this.myElementNode) {
this.rewardNode.setParent(this.myElementNode);
this.rewardNode.scale = 1;
this.rewardNode.position = cc.Vec3.ZERO;
}
this.node.active = !1;
};
return i([ a ], e);
}(s.default));
o.default = c;
cc._RF.pop();
}, {
"../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState": void 0
} ],
dd_ExtraState: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be598bRR3VORYQiwqa6Iu4p", "dd_ExtraState");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/UVAnimation/TUVPlay"), l = t("../../../../scripts/slotsframewrodk/core/ElementState/ExtraState"), a = cc._decorator, c = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
return e;
}
e.prototype.init = function() {
this.anim = this.node.getComponentInChildren(s.default);
};
e.prototype.show = function() {
this.node.active = !0;
this.anim.playRun();
};
e.prototype.hide = function() {
this.node.active = !1;
};
return i([ c ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/TUVPlay": void 0,
"../../../../scripts/slotsframewrodk/core/ElementState/ExtraState": void 0
} ],
dd_TUVPlayAnimationState: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "301b5gJ+6pK+Ka/wboFydZ2", "dd_TUVPlayAnimationState");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/UVAnimation/TUVPlay"), l = t("../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState"), a = cc._decorator, c = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.actionAnim = null;
return e;
}
e.prototype.init = function() {
this.myElementNode = this.node.parent;
if (!this.anim) {
this.anim = this.node.getComponentsInChildren(s.default);
this.actionAnim = this.node.getComponentInChildren(cc.Animation);
this.rewardNode = this.node;
}
};
e.prototype.show = function(e) {
var o = this;
t.prototype.show.call(this, e);
this.init();
e.rewardParent && this.scheduleOnce(function() {
var t = App.utils.localConvertWorldPointAR(o.rewardNode), n = App.utils.worldConvertLocalPointAR(e.rewardParent, t);
o.rewardNode.setParent(e.rewardParent);
o.rewardNode.scale = 1;
o.rewardNode.position = cc.v3(n);
}, .32);
for (var n = 0; n < this.anim.length; n++) this.anim[n].playRun();
this.actionAnim.play(null, 0);
this.node.active = !0;
};
e.prototype.hide = function() {
this.init();
if (this.rewardNode && this.rewardNode.parent != this.myElementNode) {
this.rewardNode.setParent(this.myElementNode);
this.rewardNode.scale = 1;
this.rewardNode.position = cc.Vec3.ZERO;
}
this.node.active = !1;
};
return i([ c ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/TUVPlay": void 0,
"../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState": void 0
} ],
dd_TUVPlayState: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "067c2uiMdFH7KAVTjcx7vRq", "dd_TUVPlayState");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/UVAnimation/TUVPlay"), l = t("../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState"), a = cc._decorator, c = a.ccclass, p = (a.property, 
function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.actionAnim = null;
return e;
}
e.prototype.init = function() {
if (!this.anim) {
this.anim = this.node.getComponentInChildren(s.default);
this.actionAnim = this.node.getComponentInChildren(cc.Animation);
this.rewardNode = this.anim.node;
}
};
e.prototype.show = function(e) {
var o = this;
t.prototype.show.call(this, e);
this.init();
e.rewardParent && this.scheduleOnce(function() {
var t = App.utils.localConvertWorldPointAR(o.rewardNode), n = App.utils.worldConvertLocalPointAR(e.rewardParent, t);
o.rewardNode.setParent(e.rewardParent);
e.rewardParentOrginScale || 0 == e.rewardParentOrginScale ? o.rewardNode.scale = e.rewardParentOrginScale : o.rewardNode.scale = 1;
o.rewardNode.position = cc.v3(n);
}, .32);
this.anim.playRun();
this.actionAnim.play(null, 0);
this.node.active = !0;
};
e.prototype.hide = function() {
this.init();
if (this.rewardNode && this.rewardNode.parent != this.node) {
this.rewardNode.setParent(this.node);
this.rewardNode.scale = 1;
this.rewardNode.position = cc.Vec3.ZERO;
}
this.node.active = !1;
};
return i([ c ], e);
}(l.default));
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/TUVPlay": void 0,
"../../../../scripts/slotsframewrodk/core/ElementAnimState/BaseAnimState": void 0
} ],
dd_ZRollAction: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "11273lybI5GPIctDScgxXAI", "dd_ZRollAction");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/enum/GlobalEnum"), l = t("../../../../scripts/common/utils/RandomUtil"), a = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollAction"), c = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollElement"), p = cc._decorator, u = p.ccclass, d = (p.property, 
function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.initData = function(t, e, o, n, r) {
var i = this;
this.accelerateDelayTime = 0;
this.nextRollAction = n;
this.rollIndex = t;
this.rollConfig = e;
this.speed = e.speed;
this.fixedSpeed = e.speed;
this.name = e.name;
this.interval = e.interval || 0;
this.randomMin = e.randomIconRange ? e.randomIconRange.x : 0;
this.randomMax = e.randomIconRange ? e.randomIconRange.y : e.elementCount;
this.view = r;
this.elements = [];
this.lockedEndElements = [];
this.node.destroyAllChildren();
this.maxNumY = e.numY + 6;
this.halfCount = e.numY / 2 - .5;
this.tempHalfCount = this.maxNumY / 2 - .5;
for (var s = 0; s < this.maxNumY; s++) {
var l = cc.instantiate(o);
l.name = "element" + s;
this.node.addChild(l);
l.position = cc.v3(0, (this.tempHalfCount - s) * l.getContentSize().height, 0);
var a = l.getComponent(c.default);
a.resetPostion = l.position;
a.index = s;
a.rollIndex = this.rollIndex;
a.finish = !1;
this.elements.push(a);
s > 0 && s < this.maxNumY - 1 && this.lockedEndElements.push(a);
}
this.elementCount = this.elements.length;
this.elements.forEach(function(t) {
0 == t.index ? t.lastElement = i.elements[i.elementCount - 1] : t.lastElement = i.elements[t.index - 1];
t.index == i.elementCount - 1 ? t.nextElement = i.elements[0] : t.nextElement = i.elements[t.index + 1];
});
this.sizeY = this.elements[0].node.getContentSize().height;
this.minY = this.elements[this.elementCount - 1].node.position.y;
this.maxY = this.elements[0].node.position.y;
this.isRolling = !1;
this.result = new Array();
this.halfUp = (this.halfCount + 1) * this.sizeY;
this.halfDown = -this.halfUp;
for (s = 0; s < this.elements.length; s++) this.elements[s].init(e);
this.randomAllElement();
for (s = 0; s < this.elements.length; s++) this.elements[s].setDefault();
this.isLocked = !1;
};
e.prototype.randomAllElement = function() {
for (var t = 0; t < this.elements.length; t++) {
var e = this.elements[t], o = 0;
o = this.rollConfig.elementRange_Init ? this.rollConfig.elementRange_Init[this.rollIndex][t] - 1 : l.RandomUtil.randomRange(this.randomMin, this.randomMax);
e.setRes(o);
}
};
e.prototype.startAccelerateBack = function() {
this.rollConfig.rollAccelerateStartCB && this.rollConfig.rollAccelerateStartCB(this.rollIndex);
this.accelerateDelayTime > 0 && (this.isSpecialStop = !0);
};
e.prototype.setAccelerateSpeed = function(t, e) {
if (this.nextRollAction) {
this.nextRollAction.accelerateDelayTime = e;
this.nextRollAction.startAccelerateBack();
}
};
e.prototype.updateElementPos = function() {
t.prototype.updateElementPos.call(this);
if (this.isSpecialStop) {
this.speed -= 10;
if (this.rollConfig.accelerate > this.speed) {
this.speed = this.rollConfig.accelerate;
this.isSpecialStop = !1;
this.sotpRoll(!1);
}
}
};
e.prototype.sotpRoll = function(t) {
if (this.accelerateDelayTime > 0 && this.isSpecialStop) this.nextRollAction.isRolling && this.nextRollAction.sotpRoll(!1); else {
t && this.inBackTween && this.inBackTween.stop();
this.result = this.view.results[this.rollIndex];
if (this.isLocked) {
this.result.reverse();
for (var e = 0; e < this.endElements.length; e++) (i = this.endElements[e]).setResNorml(this.result[e].index);
this.nextRollAction && this.nextRollAction.sotpRoll(!1);
} else {
this.isRolling = !1;
var o = [];
for (e = 0; e < this.elements.length; e++) {
(i = this.elements[e]).setState(s.GlobalEnum.ElementState.Normal);
i.node.y < this.minY && o.push(i);
}
1 == o.length ? this.resetElement(o[0]) : o.length > 1 && this.overSpeedResetElement(o);
for (e = 0; e < this.elements.length; e++) (i = this.elements[e]).node.y >= this.halfUp && this.endElements.push(i);
this.endElements.sort(function(t, e) {
return t.node.y - e.node.y;
});
var n = this.endElements.length - this.rollConfig.numY;
if (n > 0) for (e = 0; e < n; e++) this.endElements.pop(); else if (n < 0) {
n = -n;
for (e = 0; e < n; e++) if (0 == this.endElements.length) {
this.resetPosition();
this.endElements.push(this.elements[0]);
} else {
var r = this.endElements[this.endElements.length - 1].lastElement;
this.endElements.push(r);
}
}
this.result.reverse();
for (e = 0; e < this.endElements.length; e++) {
var i;
(i = this.endElements[e]).setResNorml(this.result[e].index);
if (0 == e) {
i.targetPos = this.result[e].isEmpty ? cc.v2(0, -this.sizeY / 2 + (1 - this.halfCount) * this.sizeY) : cc.v2(0, -this.sizeY * this.halfCount);
i.finish = !0;
}
}
this.setToFixedPos(t);
}
}
};
e.prototype.moveToTargetPos = function(t, e) {
var o = this, n = t.node.y;
cc.Tween.stopAllByTarget(t.node);
var r = "backOut";
this.rollConfig.stopEaseStr && (r = this.rollConfig.stopEaseStr);
var i = .3;
if (this.accelerateDelayTime > 0) {
r = "quadOut";
i = (t.node.position.y - t.targetPos.y) / 689;
}
if (e) {
i = .15;
r = "linear";
}
cc.tween(t.node).to(i, {
position: cc.v3(0, t.targetPos.y, 0)
}, {
easing: r,
onUpdate: function() {
var e = n - t.node.y;
n = t.node.y;
o.moveOtherElements(e, t, t.index, !0);
}
}).call(function() {
t.nextElement.node.y = t.node.y - o.sizeY;
if (o.accelerateDelayTime > 0) {
o.rollConfig.rollFinishCB(e, o.rollIndex);
e || o.nextRollAction && (o.accelerateDelayTime > 0 || o.nextRollAction.sotpRoll(!1));
}
o.rollConfig.gameFinishEndCB && o.rollConfig.gameFinishEndCB(o.rollIndex, e);
}).start();
this.accelerateDelayTime <= 0 && (e ? this.rollConfig.rollFinishCB(e, this.rollIndex) : this.scheduleOnce(function() {
o.rollConfig.rollFinishCB(e, o.rollIndex);
e || o.nextRollAction && (o.accelerateDelayTime > 0 || o.nextRollAction.sotpRoll(!1));
}, this.interval));
};
return i([ u ], e);
}(a.default));
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/enum/GlobalEnum": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollAction": void 0,
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollElement": void 0
} ],
dd_ZRollControler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "57419tuIj5BWJXBk6s3r5q1", "dd_ZRollControler");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollAction"), l = t("../../../../scripts/slotsframewrodk/core/newRoll/ZRollControler"), a = cc._decorator, c = a.ccclass, p = a.property, u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.actions = [];
return e;
}
e.prototype.initRollAcionts = function() {
for (var t = 0; t < this.actions.length; t++) this.rollActions.push(this.actions[t]);
};
i([ p(s.default) ], e.prototype, "actions", void 0);
return i([ c ], e);
}(l.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollAction": void 0,
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollControler": void 0
} ],
dd_doorAnim: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "94563XV5ElK7p34e3Iks6M/", "dd_doorAnim");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/UVAnimation/TUVPlay"), l = t("../../../../scripts/framework/defines/Macros"), a = t("../../../../scripts/slotsframewrodk/reward/base_reward"), c = cc._decorator, p = c.ccclass, u = c.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.doorLeft = null;
e.doorRight = null;
e.normalLongAnims = [];
e.freeAnimL = null;
e.freeAnimR = null;
e.dragons = [];
e.lockNode = null;
e.lockUV = null;
e.dFreePos = 390;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.init = function() {};
e.prototype.playEffect = function(t, e) {
var o = this;
this.cb = t;
this.callback = e;
this.normalLongAnims[0].active = !1;
this.normalLongAnims[1].active = !1;
cc.tween(this.doorLeft).to(.8, {
position: cc.Vec3.ZERO
}, {
easing: "quintIn"
}).call(function() {
o.cb && o.cb(!0);
}).start();
cc.tween(this.doorRight).to(.8, {
position: cc.Vec3.ZERO
}, {
easing: "quintIn"
}).start();
this.scheduleOnce(this.playlong.bind(this), .3);
};
e.prototype.closeDoor = function(t, e) {
var o = this;
this.scheduleOnce(function() {
cc.tween(o.doorLeft).to(1, {
position: cc.Vec3.ZERO
}).start();
cc.tween(o.doorRight).to(1, {
position: cc.Vec3.ZERO
}).call(function() {
t && t();
}).delay(1).call(function() {
cc.tween(o.doorLeft).to(1, {
position: cc.v3(-o.dFreePos, 0, 0)
}, {
easing: "quintIn"
}).start();
cc.tween(o.doorRight).to(1, {
position: cc.v3(o.dFreePos, 0, 0)
}, {
easing: "quintIn"
}).call(function() {
e && e();
}).start();
}).start();
}, 1.6);
};
e.prototype.reset = function() {
this.lockNode.active = !1;
};
e.prototype.playlong = function() {
App.globalAudio.playBundleEffect("sounds/yx_longyin", l.Macro.BUNDLE_doubledragon);
for (var t = 0; t < this.dragons.length; t++) {
var e = this.dragons[t];
e.node.active = !0;
e.playRun();
}
this.scheduleOnce(this.endlong.bind(this), 3.66);
this.scheduleOnce(this.playlock.bind(this), 2.88);
};
e.prototype.playlock = function() {
var t = this;
this.lockNode.active = !0;
this.lockNode.angle = 0;
cc.tween(this.lockNode).to(.26, {
scale: 1,
opacity: 255
}).call(function() {
t.lockUV.node.active = !0;
t.lockUV.playRun();
}).to(1, {
angle: -180
}).to(.4, {
scale: 3,
opacity: 0
}).call(function() {
t.freeAnimL.node.active = !0;
t.freeAnimR.node.active = !0;
t.freeAnimL.playRun();
t.freeAnimR.playRun();
}).delay(1.12).call(function() {
t.doorOpen();
}).start();
};
e.prototype.doorOpen = function() {
var t = this;
cc.tween(this.doorLeft).to(.8, {
position: cc.v3(-this.dFreePos, 0, 0)
}, {
easing: "quintIn"
}).start();
cc.tween(this.doorRight).to(.8, {
position: cc.v3(this.dFreePos, 0, 0)
}, {
easing: "quintIn"
}).start();
this.freeAnimL.node.active = !1;
this.freeAnimR.node.active = !1;
this.normalLongAnims[0].active = !0;
this.normalLongAnims[1].active = !0;
this.scheduleOnce(function() {
t.callback && t.callback();
}, 1);
};
e.prototype.endlong = function() {
for (var t = 0; t < this.dragons.length; t++) this.dragons[t].node.active = !1;
};
i([ u(cc.Node) ], e.prototype, "doorLeft", void 0);
i([ u(cc.Node) ], e.prototype, "doorRight", void 0);
i([ u(cc.Node) ], e.prototype, "normalLongAnims", void 0);
i([ u(s.default) ], e.prototype, "freeAnimL", void 0);
i([ u(s.default) ], e.prototype, "freeAnimR", void 0);
i([ u(s.default) ], e.prototype, "dragons", void 0);
i([ u(cc.Node) ], e.prototype, "lockNode", void 0);
i([ u(s.default) ], e.prototype, "lockUV", void 0);
return i([ p ], e);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/UVAnimation/TUVPlay": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/slotsframewrodk/reward/base_reward": void 0
} ],
dd_slots_rewardx8: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8d2e98N76lKz6rxeL9Asaf/", "dd_slots_rewardx8");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/utils/CmmAudio"), l = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/slotsframewrodk/reward/slots_base_reward"), c = cc._decorator, p = c.ccclass, u = c.property, d = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.score = null;
e.x8 = null;
e.scorePosNode = null;
e.x8PosNode = null;
e.black = null;
return e;
}
e.prototype.playEffect = function(t, e) {
var o = this;
App.globalAudio.playHallEffect(s.CmmAudio.common_slots_MinWin);
var n = App.utils.localConvertlocalPointAR(this.targetPos.node, this.score.node.parent);
this.reset();
this.score.string = l.CmmUtils.NumberToHallString(t.beforeMoneyNum);
this.scorePosNode.string = this.score.string;
cc.tween(this.score.node).to(.15, {
scale: 1
}).delay(1).call(function() {
var r = o.scorePosNode.node.position;
cc.tween(o.score.node).to(.2, {
position: r
}).call(function() {
o.x8.active = !0;
o.x8.position = o.x8PosNode.position;
cc.tween(o.x8).to(.15, {
scale: 1
}).start();
}).delay(1).call(function() {
var e = cc.v3(o.x8PosNode.position.x + 100, 0, 0);
cc.tween(o.x8).to(.2, {
position: e,
opacity: 0
}).start();
l.CmmUtils.numberOnlyRollTo(o.score, 2, t.beforeMoneyNum, t.moneyNum);
cc.tween(o.score.node).to(1, {
position: cc.Vec3.ZERO
}).start();
}).delay(3).to(.5, {
position: n,
scale: .25
}).call(function() {
o.node.active = !1;
e && e();
}).start();
}).start();
};
e.prototype.reset = function() {
this.node.active = !0;
this.black.active = !0;
this.score.node.scale = 3;
this.score.node.position = cc.Vec3.ZERO;
this.x8.active = !1;
this.x8.scale = 3;
this.x8.opacity = 255;
cc.Tween.stopAllByTarget(this.score.node);
};
i([ u(cc.Label) ], e.prototype, "score", void 0);
i([ u(cc.Node) ], e.prototype, "x8", void 0);
i([ u(cc.Label) ], e.prototype, "scorePosNode", void 0);
i([ u(cc.Node) ], e.prototype, "x8PosNode", void 0);
i([ u(cc.Node) ], e.prototype, "black", void 0);
return i([ p ], e);
}(a.default);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmAudio": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/slotsframewrodk/reward/slots_base_reward": void 0
} ],
doubledragon_game_count: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7cde6QlkRlMn6BmHpcp6XJG", "doubledragon_game_count");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../scripts/common/event/CommonEvent"), l = t("../../../../scripts/framework/defines/Enums"), a = t("../../../../scripts/slotsframewrodk/reward/base_reward"), c = t("./dd_doorAnim"), p = cc._decorator, u = p.ccclass, d = p.property, h = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.doorAnim = null;
e.valueLabel = null;
e.showNode = null;
e.btn = null;
e.countLabel = null;
e.isStart = !1;
return e;
}
e.prototype.onLoad = function() {
var e = this;
t.prototype.onLoad.call(this);
this.onN(this.btn, l.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.callFunction();
});
};
e.prototype.initTitle = function(t) {
if (t.value) {
this.valueLabel.node.active = !0;
this.valueLabel.string = t.value;
} else this.valueLabel.node.active = !1;
};
e.prototype.closeDoor = function(t, e) {
dispatch(s.CommonEvent.EventMaskAll, 1e4);
this.doorAnim.closeDoor(function() {
t && t();
}, function() {
if (e) {
e();
dispatch(s.CommonEvent.EventMaskAll, -1);
}
});
};
e.prototype.playEffect = function(t, e) {
var o = this;
dispatch(s.ComponentGameEvent.GrayBtns_Event, 0, !1);
this.cb = t.cb;
this.initTitle(t);
this.isStart = !1;
this.callback = e;
this.node.active = !0;
this.showNode.position = cc.v3(0, 1e3, 0);
if (t.audioPath) {
App.globalAudio.playBundleEffect(t.audioPath, t.bundle);
cc.tween(this.showNode).delay(t.time).to(.8, {
position: cc.Vec3.ZERO
}, {
easing: "backOut"
}).call(function() {
o.totalTime = t.countTime;
o.isStart = !0;
}).start();
} else cc.tween(this.showNode).to(.8, {
position: cc.Vec3.ZERO
}, {
easing: "backOut"
}).call(function() {
o.totalTime = t.countTime;
o.isStart = !0;
}).start();
};
e.prototype.showCountDown = function() {
this.countLabel.string = App.zLan.string_format_args("({0}s)", Math.round(this.totalTime).toString());
};
e.prototype.update = function(t) {
if (this.isStart) {
if (this.totalTime > 0) this.totalTime -= t; else {
this.totalTime = 0;
this.callFunction();
}
this.showCountDown();
}
};
e.prototype.callFunction = function() {
var t = this;
this.node.active = !1;
dispatch(s.CommonEvent.EventMaskAll, 1e4);
this.doorAnim.playEffect(this.cb, function() {
if (t.callback) {
t.callback();
t.callback = null;
dispatch(s.CommonEvent.EventMaskAll, -1);
}
});
};
i([ d(c.default) ], e.prototype, "doorAnim", void 0);
i([ d(cc.Label) ], e.prototype, "valueLabel", void 0);
i([ d(cc.Node) ], e.prototype, "showNode", void 0);
i([ d(cc.Node) ], e.prototype, "btn", void 0);
i([ d(cc.Label) ], e.prototype, "countLabel", void 0);
return i([ u ], e);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/slotsframewrodk/reward/base_reward": void 0,
"./dd_doorAnim": "dd_doorAnim"
} ]
}, {}, [ "DoubleDragonEntry", "AwardManger_DoubleDragon", "BottomBtnService_DoubleDragon", "CarouselAwardLineMgr_DoubleDragon", "GameController_DoubleDragon", "SlotsSpinState_DoubleDragon", "dd_AnimationPlayState", "dd_ExtraState", "dd_TUVPlayAnimationState", "dd_TUVPlayState", "dd_ZRollAction", "dd_ZRollControler", "dd_doorAnim", "dd_slots_rewardx8", "doubledragon_game_count", "DoubleDragonView" ]);