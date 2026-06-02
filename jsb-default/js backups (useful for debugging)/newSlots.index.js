window.__require = function e(t, o, n) {
function i(c, a) {
if (!o[c]) {
if (!t[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!t[l]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = l;
}
var p = o[c] = {
exports: {}
};
t[c][0].call(p.exports, function(e) {
return i(t[c][1][e] || e);
}, p, p.exports, e, t, o, n);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
return i;
}({
AudioMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "bfb4fhT6L1HzLi8umIX5SbW", "AudioMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("./GameMgr"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bgm = null;
t.bgm_game = null;
t.effects = [];
return t;
}
o = t;
t.prototype.onLoad = function() {
o.instance = this;
this.refreshSoundState();
this.refreshMusicState();
this.playBGM(this.bgm);
};
t.prototype.refreshSoundState = function() {
var e = App.storage.getItem(c.MyGameEvent_A.SoundState, !0);
o.instance.setSoundState(e);
};
t.prototype.refreshMusicState = function() {
var e = App.storage.getItem(c.MyGameEvent_A.MusicState, !0);
o.instance.setMusicState(e);
};
t.prototype.onDestroy = function() {
this.stopBGM();
o.instance = null;
};
t.prototype.playEffect = function(e) {
for (var t = -1, o = 0; o < this.effects.length; o++) {
var n = this.effects[o];
if (n.name == e) {
t = cc.audioEngine.playEffect(n, !1);
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
cc.audioEngine.setEffectsVolume(e ? 1 : 0);
};
t.prototype.setMusicState = function(e) {
cc.audioEngine.setMusicVolume(e ? 1 : 0);
};
var o;
t.instance = null;
r([ s(cc.AudioClip) ], t.prototype, "bgm", void 0);
r([ s(cc.AudioClip) ], t.prototype, "bgm_game", void 0);
r([ s(cc.AudioClip) ], t.prototype, "effects", void 0);
return o = r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./GameMgr": "GameMgr"
} ],
AutoService_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b8a5f+NH9pBSYYLPMyasBMr", "AutoService_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../../scripts/common/event/CommonEvent"), a = e("../AudioMgr"), l = e("../GameMgr"), s = cc._decorator, p = s.ccclass, u = s.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.node_Move = null;
t.color_Count_Normal = null;
t.color_Count_Select = null;
t.label_Counts = [];
t.node_Mask_Autobtn = null;
t.hidePos = cc.v3(0, -500, 0);
t.autoCounts_Config = [ 10, 30, 50, 80, 1e3 ];
t.autoCount = 0;
t.tween_Move = null;
return t;
}
t.prototype.OpenShow = function() {
dispatch(c.CommonEvent.EventMaskAll, .5);
this.node_Mask_Autobtn.active = !0;
for (var e = 0; e < this.label_Counts.length; e++) this.label_Counts[e].node.color = this.color_Count_Normal;
this.tween_Move && this.tween_Move.stop();
this.node_Move.position = this.hidePos;
this.node_Zhezhao.active = !0;
this.node_Main.active = !0;
this.tween_Move = cc.tween(this.node_Move).to(.3, {
position: cc.v3(0, 0, 0)
}).start();
};
t.prototype.CloseShow = function() {
var e = this;
dispatch(c.CommonEvent.EventMaskAll, .5);
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_Move).to(.3, {
position: this.hidePos
}).call(function() {
e.node_Main.active = !1;
e.node_Zhezhao.active = !1;
}).start();
};
t.prototype.ButtonClick_Close = function() {
a.default.instance.playEffect(l.AudioName.Click);
this.CloseShow();
};
t.prototype.ButtonClick_Count0 = function() {
this.SetSelectAutoCount(0);
};
t.prototype.ButtonClick_Count1 = function() {
this.SetSelectAutoCount(1);
};
t.prototype.ButtonClick_Count2 = function() {
this.SetSelectAutoCount(2);
};
t.prototype.ButtonClick_Count3 = function() {
this.SetSelectAutoCount(3);
};
t.prototype.ButtonClick_Count4 = function() {
this.SetSelectAutoCount(4);
};
t.prototype.ButtonClick_StartAutoSpin = function() {
var e = this;
a.default.instance.playEffect(l.AudioName.Click);
this.CloseShow();
this.scheduleOnce(function() {
dispatch(l.MyGameEvent_A.SetAutoCount, e.autoCount);
}, .3);
};
t.prototype.SetSelectAutoCount = function(e) {
a.default.instance.playEffect(l.AudioName.Click);
this.autoCount = this.autoCounts_Config[e];
Log.e("Select Auto Count = " + this.autoCount);
for (var t = 0; t < this.label_Counts.length; t++) {
this.label_Counts[t].node.color = e == t ? this.color_Count_Select : this.color_Count_Normal;
}
this.node_Mask_Autobtn.active = !1;
};
r([ u(cc.Node) ], t.prototype, "node_Main", void 0);
r([ u(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ u(cc.Node) ], t.prototype, "node_Move", void 0);
r([ u(cc.Color) ], t.prototype, "color_Count_Normal", void 0);
r([ u(cc.Color) ], t.prototype, "color_Count_Select", void 0);
r([ u(cc.Label) ], t.prototype, "label_Counts", void 0);
r([ u(cc.Node) ], t.prototype, "node_Mask_Autobtn", void 0);
r([ u ], t.prototype, "hidePos", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
ChooseLevelModel_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "897eajH43xJr5MNFG5WzLF6", "ChooseLevelModel_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, l = c.property, s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_CanClick = null;
t.node_Lock = null;
t.label_Level = null;
t.label_Level2 = null;
t.isCanPlay = !1;
t.curLevel = 1;
t.callBack_Btn = null;
return t;
}
t.prototype.Init = function(e, t, o) {
this.curLevel = e;
this.isCanPlay = t;
this.callBack_Btn = o;
this.label_Level.string = "" + e;
this.label_Level2.string = "" + e;
this.node_CanClick.active = t;
this.node_Lock.active = !t;
};
t.prototype.ResetState = function(e) {
this.isCanPlay = e;
this.node_Lock.active = !e;
this.node_CanClick.active = e;
};
t.prototype.ButtonClick_Choose = function() {
this.callBack_Btn && this.callBack_Btn(this.curLevel);
};
r([ l(cc.Node) ], t.prototype, "node_Main", void 0);
r([ l(cc.Node) ], t.prototype, "node_CanClick", void 0);
r([ l(cc.Node) ], t.prototype, "node_Lock", void 0);
r([ l(cc.Label) ], t.prototype, "label_Level", void 0);
r([ l(cc.Label) ], t.prototype, "label_Level2", void 0);
return r([ a ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
GameMgr: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "fc7edWM57dHLbakB/Az/sIi", "GameMgr");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.AudioName = o.VideoType_A = o.MyGameEvent_A = void 0;
var c, a, l, s = e("console"), p = e("../../../scripts/common/enum/GlobalEnum"), u = e("../../../scripts/common/utils/RandomUtil"), d = e("../../../scripts/framework/componects/EventComponent"), h = e("./AudioMgr"), _ = e("./slotsOperate"), f = e("./Service/HomeTipTCService_A"), v = e("./Service/LoadingGameService_A"), y = e("./RulePanel"), m = e("./PayTabelPanel"), C = e("./PayLinesPanel"), b = e("../../../scripts/common/event/CommonEvent"), g = e("./Service/Reward_YouWin_A"), w = e("../../../scripts/sdk/SdkManager"), M = e("./Service/AutoService_A"), S = e("./Service/TaskService"), A = e("./Service/LevelManager_A"), R = e("../../../scripts/slotsframewrodk/core/newRoll/ZRollControler");
(function(e) {
e.ChooseLevel = "ChoseLevel_1";
e.LevelFinish = "LevelFinish_1";
e.PlayGame_LevelTipTC = "PlayGame_LevelTipTC_1";
e.OpenRuleTC = "OpenRuleTC_1";
e.OpenPayTabelTC = "OpenPayTableTC_1";
e.OpenPayLineTC = "OpenPayLineTC_1";
e.SetAutoCount = "SetAutoCount_1";
e.SoundState = "SoundState_1";
e.MusicState = "MusicState_1";
e.Coin = "Coin_Flower";
})(c = o.MyGameEvent_A || (o.MyGameEvent_A = {}));
(function(e) {
e.AddMoney = "1";
e.Bigwin = "2";
e.LevelReward = "3";
})(a = o.VideoType_A || (o.VideoType_A = {}));
(function(e) {
e.Bigwin = "yx_Bigwin";
e.BigwinEnd = "yx_bigwinEnd";
e.Click = "yx_click";
e.levelReward = "yx_levelReward";
e.rewardFinish = "yx_rewardFinish";
e.spin = "yx_spin";
e.stop = "yx_stop";
e.ele_award = "ele_award";
})(l = o.AudioName || (o.AudioName = {}));
var O = cc._decorator, P = O.ccclass, L = O.property, k = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.mainRollConfig = null;
t.operateData = null;
t.operate = null;
t.controler = null;
t.node_SetPanel = null;
t.homeTipTC = null;
t.loadingService = null;
t.reward_YouWin = null;
t.node_NotCanClick = null;
t.taskService = null;
t.rulePanel = null;
t.payTablePanel = null;
t.payLinesPanel = null;
t.autoService = null;
t.label_CurLevel = null;
t.spriteFrames = [];
t.curLevelData = null;
t.curCollectCount = 0;
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
};
t.prototype.initNode = function() {
this.operate = cc.find("operate", this.node).getComponent(_.default);
};
t.prototype.initEvent = function() {
var e = this;
this.onD(c.ChooseLevel, function(t) {
e.refresh(t);
});
this.onD(c.OpenRuleTC, function() {
e.rulePanel.OpenShow();
});
this.onD(c.OpenPayTabelTC, function() {
e.payTablePanel.OpenShow();
});
this.onD(c.OpenPayLineTC, function() {
e.payLinesPanel.OpenShow();
});
this.onD(b.SdkEvent.SdkEvent_finish_video_back, function(t) {
Log.d("激励视频播放完成，发放奖励");
var o = JSON.parse(t);
Log.e(o);
o.rewardType == a.AddMoney ? o.isCanAward && e.operate.updateCoins(1e3) : o.rewardType == a.Bigwin && e.reward_YouWin.SetRewardX2(o.isCanAward);
});
this.onD(b.CommonEvent.EventMaskAll, function(t) {
e.beginTime_Delay = e.curTime;
e.delayTimeToClick = t;
e.node_NotCanClick.active = !0;
e.isDelayToCanClick = !0;
});
this.onD(c.SetAutoCount, function(t) {
e.operate.SetAutoState(t);
e.scheduleOnce(function() {
e.operate.ButtonClick_Spin();
}, .1);
});
};
t.prototype.ButtonClick_Setting = function() {
h.default.instance.playEffect(l.Click);
this.node_SetPanel.active = !0;
};
t.prototype.ButtonClick_Home = function() {
h.default.instance.playEffect(l.Click);
this.homeTipTC.OpenShow(function(e) {
if (e) {
cc.director.loadScene("login");
w.default.showInterstitial();
h.default.instance.playBGM(h.default.instance.bgm);
}
});
};
t.prototype.ButtonClick_Rule = function() {
h.default.instance.playEffect(l.Click);
dispatch(c.OpenRuleTC);
};
t.prototype.ButtonClick_Auto = function() {
h.default.instance.playEffect(l.Click);
this.autoService.OpenShow();
};
t.prototype.refresh = function(e) {
this.curLevelData = e;
this.curCollectCount = 0;
this.label_CurLevel.string = this.curLevelData.id + "";
this.taskService.SetTask(this.curLevelData.maxLive);
h.default.instance.playBGM(h.default.instance.bgm_game);
this.rulePanel.InitData(this.curLevelData);
this.payLinesPanel.InitData(this.curLevelData);
this.payTablePanel.InitData(this.curLevelData, this.spriteFrames);
this.curEleRange_Weights = [];
for (var t = 0; t < this.curLevelData.ele.length; t++) for (var o = this.curLevelData.ele[t], n = this.curLevelData.dropWeights[t], i = 0; i < n; i++) this.curEleRange_Weights.push(o);
var r = [];
for (t = 0; t < this.curLevelData.reel[0]; t++) r.push(this.curLevelData.ele);
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
elementRange_Init: r,
elementRange_Run: r,
elementRangeRate: this.curLevelData.dropWeights,
rollStartCB: this.rollStartCB.bind(this),
rollFinishCB: this.rollFinishCB.bind(this),
rollAccelerateStartCB: this.rollAccelerateStartCB.bind(this),
gameFinishEndCB: this.gameFinishEndCB.bind(this)
};
this.operateData = {
betValues: [ 1 ],
curBetIndex: 0,
betType: 1,
autoValues: [ 500, 200, 100, 20 ],
spinCallBack: this.spinCallBack.bind(this),
stopCallBack: this.stopCallBack.bind(this)
};
this.controler.initData(this.mainRollConfig);
this.operate.init(this.operateData);
this.operate.setBtnState(!0);
};
t.prototype.start = function() {};
t.prototype.spinCallBack = function() {
if (this.operate.isCanSpin()) {
if (this.operate.autoCount > 0) {
this.operate.autoCount--;
this.operate.SetAutoState(this.operate.autoCount);
}
this.operate.setBtnState(!1);
this.controler.startRoll(0);
} else s.error("余额不足，请充值");
};
t.prototype.stopCallBack = function() {
if (this.oneClick) {
this.controler.quickStopRoll();
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
for (var o = [], n = 0; n < this.curLevelData.reel[1]; n++) {
var i = this.serverReslut.value[t][n];
o.push({
index: i - 1,
value: i,
isEmpty: !1
});
}
e.push(o);
}
this.controler.results = e;
this.isGetReward = !0;
};
t.prototype.updateAutoStop = function() {
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
this.operate.spinUpadateCoin();
};
t.prototype.rollAccelerateStartCB = function() {};
t.prototype.rollFinishCB = function(e, t) {
this.curSpinIndex = t;
var o = t == this.controler.getUnlockedCount() - 1;
e ? o && h.default.instance.playEffect(l.stop) : h.default.instance.playEffect(l.stop);
};
t.prototype.gameFinishEndCB = function(e) {
if (e == this.controler.getUnlockedCount() - 1) {
dispatch(b.CommonEvent.EventMaskAll, 10);
this.playResultAni();
}
};
t.prototype.playResultAni = function() {
var e = this;
this.controler.resetAllElementState();
if (this.serverReslut.awardResult.awardType > 0) {
for (var t = this.serverReslut.awardResult.awardPos, o = this.serverReslut.value[0], n = [], i = 0; i < o.length; i++) {
var r = o[i];
t.indexOf(i) >= 0 && n.indexOf(r) < 0 && n.push(r);
}
h.default.instance.playEffect(l.ele_award);
this.controler.playEndAnim(this.serverReslut.awardResult.awardPos, this.getStates());
this.scheduleOnce(function() {
e.PlayBigWin(function() {
dispatch(b.CommonEvent.EventMaskAll, 0);
e.endfunc();
});
}, 1);
} else {
dispatch(b.CommonEvent.EventMaskAll, 0);
this.operate.showWin(0);
this.endfunc();
}
};
t.prototype.PlayBigWin = function(e) {
var t = this;
if (this.serverReslut.awardResult.awardType >= 2) {
dispatch(b.CommonEvent.EventMaskAll, 0);
this.reward_YouWin.OpenShow(this.serverReslut.awardResult.score, this.serverReslut.awardResult.awardType, function(o) {
t.operate.showWin(o);
t.operate.updateCoins(o);
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
for (var o = this.controler.getEndNodes(), n = this.curLevelData.targetId, i = this.serverReslut.awardResult.awardPos, r = 0, c = 0; c < i.length; c++) {
var a = o[i[c]];
n.indexOf(a.elementValue) >= 0 && r++;
}
if (0 == r) {
dispatch(b.CommonEvent.EventMaskAll, 0);
e && e();
} else {
dispatch(b.CommonEvent.EventMaskAll, 10);
this.taskService.PlayAni_Collect();
this.curCollectCount += r;
if (this.curCollectCount >= this.curLevelData.maxLive) {
A.default.instance.SetFinishLevel(this.curLevelData.id);
this.scheduleOnce(function() {
e && e();
A.default.instance.OpenShow(function(e) {
t.operate.showWin(e);
t.operate.updateCoins(e);
});
}, .5);
} else this.scheduleOnce(function() {
e && e();
}, .5);
}
};
t.prototype.getStates = function() {
for (var e = [], t = this.serverReslut.awardResult.awardPos, o = 0; o < t.length; o++) e.push(p.GlobalEnum.ElementState.Reward);
return e;
};
t.prototype.endfunc = function() {
var e = this;
dispatch(b.CommonEvent.EventMaskAll, 0);
this.operate.autoCount > 0 ? this.scheduleOnce(function() {
e.operate.ButtonClick_Spin();
}, .5) : this.operate.setBtnState(!0);
};
t.prototype.GetResult = function() {
for (var e = this, t = {
awardline: [],
awardPos: [],
awardType: 0,
score: 0
}, o = [], n = 0; n < this.curLevelData.reel[0]; n++) {
for (var i = [], r = 0; r < this.curLevelData.reel[1]; r++) {
var c = u.RandomUtil.randomRange(0, this.curEleRange_Weights.length);
i.push(this.curEleRange_Weights[c]);
}
o.push(i);
}
var a = new Set();
if (this.curLevelData.lines.length > 0) for (n = 0; n < this.curLevelData.lines.length; n++) {
var l = this.curLevelData.lines[n], s = l.map(function(t) {
return e.getSymbol(o, t);
}), p = s[0], d = 1;
for (r = 1; r < s.length && s[r] === p; r++) d++;
if (d >= 3) {
t.awardline.push(n);
for (var h = 0; h < d; h++) a.add(l[h]);
var _ = this.curLevelData.ele.indexOf(p), f = this.curLevelData.betRate[_][d - 3];
t.score += this.operate.betValue / this.curLevelData.lines.length * f;
}
} else for (n = 0; n < this.curLevelData.ele.length; n++) {
for (var v = [], y = 0; y < this.curLevelData.reel[0]; y++) {
d = 0;
for (var m = 0; m < this.curLevelData.reel[1]; m++) o[y][m] === n + 1 && d++;
if (0 === d) break;
v.push(d);
}
if (v.length >= 3) {
for (h = 0; h < v.length; h++) for (m = 0; m < this.curLevelData.reel[1]; m++) if (o[h][m] === n + 1) {
var C = h * this.curLevelData.reel[1] + m;
a.add(C);
}
for (var b = 1, g = 0, w = v; g < w.length; g++) b *= w[g];
var M = v.length, S = b * this.curLevelData.betRate[n][M - 3] * this.operate.betValue / 50;
t.score += S;
}
}
if (t.score > 0) {
var A = t.score / this.operate.betValue;
t.awardType = A < 3 ? 1 : A < 8 ? 2 : 3;
} else t.awardType = 0;
t.awardPos = Array.from(a).sort(function(e, t) {
return e - t;
});
return {
awardResult: t,
value: o
};
};
t.prototype.getSymbol = function(e, t) {
var o = Math.floor(t / this.curLevelData.reel[1]), n = t % this.curLevelData.reel[1];
return e[o][n];
};
r([ L(R.default) ], t.prototype, "controler", void 0);
r([ L(cc.Node) ], t.prototype, "node_SetPanel", void 0);
r([ L(f.default) ], t.prototype, "homeTipTC", void 0);
r([ L(v.default) ], t.prototype, "loadingService", void 0);
r([ L(g.default) ], t.prototype, "reward_YouWin", void 0);
r([ L(cc.Node) ], t.prototype, "node_NotCanClick", void 0);
r([ L(S.default) ], t.prototype, "taskService", void 0);
r([ L(y.default) ], t.prototype, "rulePanel", void 0);
r([ L(m.default) ], t.prototype, "payTablePanel", void 0);
r([ L(C.default) ], t.prototype, "payLinesPanel", void 0);
r([ L(M.default) ], t.prototype, "autoService", void 0);
r([ L(cc.Label) ], t.prototype, "label_CurLevel", void 0);
r([ L(cc.SpriteFrame) ], t.prototype, "spriteFrames", void 0);
return r([ P ], t);
}(d.default);
o.default = k;
cc._RF.pop();
}, {
"../../../scripts/common/enum/GlobalEnum": void 0,
"../../../scripts/common/event/CommonEvent": void 0,
"../../../scripts/common/utils/RandomUtil": void 0,
"../../../scripts/framework/componects/EventComponent": void 0,
"../../../scripts/sdk/SdkManager": void 0,
"../../../scripts/slotsframewrodk/core/newRoll/ZRollControler": void 0,
"./AudioMgr": "AudioMgr",
"./PayLinesPanel": "PayLinesPanel",
"./PayTabelPanel": "PayTabelPanel",
"./RulePanel": "RulePanel",
"./Service/AutoService_A": "AutoService_A",
"./Service/HomeTipTCService_A": "HomeTipTCService_A",
"./Service/LevelManager_A": "LevelManager_A",
"./Service/LoadingGameService_A": "LoadingGameService_A",
"./Service/Reward_YouWin_A": "Reward_YouWin_A",
"./Service/TaskService": "TaskService",
"./slotsOperate": "slotsOperate",
console: void 0
} ],
HomeTipTCService_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5a3a8rJqKNG67D5Ajzxghu5", "HomeTipTCService_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../AudioMgr"), a = e("../GameMgr"), l = cc._decorator, s = l.ccclass, p = l.property, u = function(e) {
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
c.default.instance.playEffect(a.AudioName.Click);
this.clickType = 1;
this.CloseShow();
}
};
t.prototype.ButtonClick_Close = function() {
if (this.isCanClick) {
this.isCanClick = !1;
c.default.instance.playEffect(a.AudioName.Click);
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
r([ p(cc.Node) ], t.prototype, "node_Main", void 0);
r([ p(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
return r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
LevelLayoutMgr_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "9809548KpRLzqsfTUIa1gX0", "LevelLayoutMgr_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../Model/LevelModel_A"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
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
return t.getComponent(c.default).controler;
};
r([ s(cc.Prefab) ], t.prototype, "prefab_levels", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Model/LevelModel_A": "LevelModel_A"
} ],
LevelManager_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "188fdN13iBM0IxMRQdbxi6s", "LevelManager_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../GameMgr"), a = e("../Model/ChooseLevelModel_A"), l = cc._decorator, s = l.ccclass, p = l.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.node_Level = null;
t.node_Reward = null;
t.label_Reward = null;
t.btn_Claim = null;
t.btn_Close = null;
t.configData = null;
t.curPlayLevel = 1;
t.finishLevel = 0;
t.tween_Level = null;
t.tween_Reward = null;
t.callback_Claim = null;
t.chooseLevelModels = [];
return t;
}
o = t;
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.onLoad = function() {
var e = this;
o.instance = this;
this.InitConfigData();
this.finishLevel = 0;
this.Callback_ChooseLevel(1);
for (var t = 0; t < this.chooseLevelModels.length; t++) {
var n = this.chooseLevelModels[t], i = this.configData.levels[t], r = t <= this.finishLevel;
n.Init(i.id, r, function(t) {
e.PlayNextLevel(t);
});
}
};
t.prototype.start = function() {};
t.prototype.OpenShow = function(e) {
this.ClearTween();
this.callback_Claim = e;
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.btn_Close.interactable = !1;
this.btn_Claim.interactable = !0;
this.btn_Claim.node.scale = 1;
this.node_Level.scale = 0;
this.node_Reward.scale = 1;
this.label_Reward.string = "" + this.configData.levels[this.finishLevel].reward;
};
t.prototype.SetFinishLevel = function(e) {
if (e > this.finishLevel) {
this.finishLevel = e;
for (var t = 0; t < this.chooseLevelModels.length; t++) {
var o = this.chooseLevelModels[t], n = t <= this.finishLevel;
o.ResetState(n);
}
}
};
t.prototype.PlayNextLevel = function(e) {
this.Callback_ChooseLevel(e);
};
t.prototype.Callback_ChooseLevel = function(e) {
this.curPlayLevel = e;
var t = this.configData.levels[e - 1];
this.node_Main.active = !1;
this.node_Zhezhao.active = !1;
dispatch(c.MyGameEvent_A.ChooseLevel, t);
};
t.prototype.ButtonClick_Close = function() {
6 == this.finishLevel ? this.Callback_ChooseLevel(6) : this.Callback_ChooseLevel(this.finishLevel + 1);
};
t.prototype.ButtonClick_Claim = function() {
var e = this;
this.btn_Claim.interactable = !1;
this.btn_Close.interactable = !1;
this.callback_Claim && this.callback_Claim(this.configData.levels[this.finishLevel].reward);
this.tween_Reward = cc.tween(this.node_Reward).to(.5, {
scale: 0
}).call(function() {
e.btn_Claim.node.scale = 0;
}).start();
this.tween_Level = cc.tween(this.node_Level).delay(.5).to(.5, {
scale: 1
}).call(function() {
e.btn_Close.interactable = !0;
}).start();
};
t.prototype.ClearTween = function() {
this.tween_Level && this.tween_Level.stop();
this.tween_Reward && this.tween_Reward.stop();
};
t.prototype.InitConfigData = function() {
this.configData = {
levels: [ {
id: 1,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 20,
reward: 50,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 1, 1, 3, 3, 4, 4, 5, 6 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
}, {
id: 2,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 100,
reward: 300,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 1, 2, 2, 3, 3, 4, 5, 6 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
}, {
id: 3,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 500,
reward: 1e3,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 2, 2, 3, 3, 3, 4, 4, 5 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
}, {
id: 4,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 1e3,
reward: 2e3,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 2, 2, 3, 3, 3, 4, 4, 5 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
}, {
id: 5,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 5e3,
reward: 2e4,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
}, {
id: 6,
reelId: 2,
reel: [ 5, 5 ],
targetId: [ 9 ],
maxLive: 1e4,
reward: 1e5,
ele: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
dropWeights: [ 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
lines: [],
betRate: [ [ 80, 160, 400 ], [ 50, 100, 200 ], [ 20, 40, 80 ], [ 10, 20, 40 ], [ 8, 16, 32 ], [ 5, 10, 20 ], [ 4, 8, 16 ], [ 2, 4, 8 ], [ 1, 2, 4 ] ]
} ]
};
};
var o;
t.instance = null;
r([ p(cc.Node) ], t.prototype, "node_Main", void 0);
r([ p(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ p(cc.Node) ], t.prototype, "node_Level", void 0);
r([ p(cc.Node) ], t.prototype, "node_Reward", void 0);
r([ p(cc.Label) ], t.prototype, "label_Reward", void 0);
r([ p(cc.Button) ], t.prototype, "btn_Claim", void 0);
r([ p(cc.Button) ], t.prototype, "btn_Close", void 0);
r([ p(a.default) ], t.prototype, "chooseLevelModels", void 0);
return o = r([ s ], t);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../GameMgr": "GameMgr",
"../Model/ChooseLevelModel_A": "ChooseLevelModel_A"
} ],
LevelModel_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "125a2+T3fxMUb7nXpCFgYYt", "LevelModel_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../../scripts/slotsframewrodk/core/newRoll/ZRollControler"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
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
r([ s(c.default) ], t.prototype, "controler", void 0);
r([ s(cc.Node) ], t.prototype, "node_LinePrenet", void 0);
r([ s(cc.Node) ], t.prototype, "node_LineModel", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/slotsframewrodk/core/newRoll/ZRollControler": void 0
} ],
LoadingGameService_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "14289zEH8dOPIQOxhX3C2Cg", "LoadingGameService_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, l = c.property, s = function(e) {
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
r([ l(cc.Node) ], t.prototype, "node_main", void 0);
r([ l(cc.Node) ], t.prototype, "node_zhezhao", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprite_Progress", void 0);
return r([ a ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
Login: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1bc65AnotxDTr4x34sIE3ah", "Login");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/common/utils/RandomUtil"), a = e("../../../scripts/framework/componects/EventComponent"), l = e("../../../scripts/framework/core/ui/UIManager"), s = e("../../../scripts/framework/defines/Enums"), p = cc._decorator, u = p.ccclass, d = p.property, h = function(e) {
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
this.onN(this.play, s.NodeEvent.click, function() {
e.loading();
});
l.UIManager.newGameTest();
};
t.prototype.loading = function() {
var e = this;
this.play.active = !1;
this.progress.active = !0;
this.bar.fillRange = 0;
cc.tween(this.bar).to(c.RandomUtil.randomFRange(1, 2), {
fillRange: 1
}).call(function() {
e.progress.active = !1;
cc.director.loadScene("slots");
}).start();
};
r([ d(cc.Node) ], t.prototype, "play", void 0);
r([ d(cc.Node) ], t.prototype, "progress", void 0);
r([ d(cc.Sprite) ], t.prototype, "bar", void 0);
return r([ u ], t);
}(a.default);
o.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/utils/RandomUtil": void 0,
"../../../scripts/framework/componects/EventComponent": void 0,
"../../../scripts/framework/core/ui/UIManager": void 0,
"../../../scripts/framework/defines/Enums": void 0
} ],
PayLineItem_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f7308k6JiVPGIGULOa3rxVf", "PayLineItem_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("./PayLineModel_A"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.layout_ = null;
t.payLineModel = [];
return t;
}
t.prototype.Init = function(e, t, o, n, i, r, c) {
this.layout_.spacingX = e;
for (var a = 0; a < this.payLineModel.length; a++) {
var l = this.payLineModel[a];
if (a < c.length) {
l.node.active = !0;
l.Init(n[a], i, r[a], t, o, c[a]);
} else l.node.active = !1;
}
};
r([ s(cc.Layout) ], t.prototype, "layout_", void 0);
r([ s(c.default) ], t.prototype, "payLineModel", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./PayLineModel_A": "PayLineModel_A"
} ],
PayLineModel_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8b2eljvrlJW4OprZuaiISs", "PayLineModel_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, l = c.property, s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label_Id = null;
t.node_GeziPre = null;
t.node_GeziLayout = null;
t.normalSize = 58;
return t;
}
t.prototype.Init = function(e, t, o, n, i, r) {
this.label_Id.string = e + "";
this.node_GeziLayout.height = 20 * (i[1] - 3) + this.normalSize;
this.node_GeziLayout.destroyAllChildren();
for (var c = 0; c < n; c++) {
var a = cc.instantiate(this.node_GeziPre);
a.parent = this.node_GeziLayout;
r.indexOf(c) >= 0 ? a.color = o : a.color = t;
}
};
r([ l(cc.Label) ], t.prototype, "label_Id", void 0);
r([ l(cc.Node) ], t.prototype, "node_GeziPre", void 0);
r([ l(cc.Node) ], t.prototype, "node_GeziLayout", void 0);
return r([ a ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
PayLinesPanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "20ed6sPKsxOV4j9X5zJHjU2", "PayLinesPanel");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/common/event/CommonEvent"), a = e("./AudioMgr"), l = e("./GameMgr"), s = e("./Model/PayLineItem_A"), p = cc._decorator, u = p.ccclass, d = p.property, h = function(e) {
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
var t = e.lines.length, o = this.config_jianju[0], n = e.reel[0] * e.reel[1];
this.label_LineCountTip.string = "There are " + t + " fixed paylines.";
if (3 == t) {
o = this.config_jianju[0];
var i = [ 1, 2, 3 ], r = [ this.color_Lines[0], this.color_Lines[1], this.color_Lines[2] ];
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
(a = h.getComponent(s.default)).Init(o, n, e.reel, i, this.color_Di, r, e.lines);
} else if (7 == t) {
o = this.config_jianju[1];
for (var c = 0; c < 2; c++) {
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
var a = h.getComponent(s.default);
if (0 == c) {
i = [ 1, 2, 3 ], r = [ this.color_Lines[0], this.color_Lines[1], this.color_Lines[2] ];
var l = [ e.lines[0], e.lines[1], e.lines[2] ];
a.Init(o, n, e.reel, i, this.color_Di, r, l);
} else {
i = [ 4, 5, 6, 7 ], r = [ this.color_Lines[3], this.color_Lines[4], this.color_Lines[5], this.color_Lines[6] ], 
l = [ e.lines[3], e.lines[4], e.lines[5], e.lines[6] ];
a.Init(o, n, e.reel, i, this.color_Di, r, l);
}
}
} else if (9 == t) {
o = this.config_jianju[0];
var p = 0;
for (c = 0; c < 3; c++) {
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
a = h.getComponent(s.default), i = [], r = [], l = [];
for (var u = 0; u < 3; u++) {
i.push(p + 1);
r.push(this.color_Lines[p]);
l.push(e.lines[p]);
p++;
}
a.Init(o, n, e.reel, i, this.color_Di, r, l);
}
} else {
o = this.config_jianju[2];
var d = t / 5;
for (p = 0, c = 0; c < d; c++) {
var h;
(h = cc.instantiate(this.node_Item)).parent = this.node_Grid;
for (a = h.getComponent(s.default), i = [], r = [], l = [], u = 0; u < 5; u++) {
i.push(p + 1);
r.push(this.color_Lines[p % this.color_Lines.length]);
l.push(e.lines[p]);
p++;
}
a.Init(o, n, e.reel, i, this.color_Di, r, l);
}
}
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(c.CommonEvent.EventMaskAll, 1);
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
a.default.instance.playEffect(l.AudioName.Click);
dispatch(c.CommonEvent.EventMaskAll, 1);
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
r([ d(cc.Node) ], t.prototype, "node_Grid", void 0);
r([ d(cc.Node) ], t.prototype, "node_Item", void 0);
r([ d(cc.Label) ], t.prototype, "label_LineCountTip", void 0);
r([ d(cc.Color) ], t.prototype, "color_Di", void 0);
r([ d(cc.Color) ], t.prototype, "color_Lines", void 0);
return r([ u ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": void 0,
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr",
"./Model/PayLineItem_A": "PayLineItem_A"
} ],
PayTabelPanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e416fJrPw5IarwlJYlcLyMl", "PayTabelPanel");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/common/event/CommonEvent"), a = e("./AudioMgr"), l = e("./GameMgr"), s = e("./Model/PayTableItem_A"), p = cc._decorator, u = p.ccclass, d = p.property, h = function(e) {
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
var o = Math.floor(e.ele.length / 2), n = !1;
if (e.ele.length % 2 == 1) {
o += 1;
n = !0;
}
for (var i = 0, r = 0; r < o; r++) {
var c = cc.instantiate(this.node_PayTabelItem);
c.parent = this.node_Parent;
var a = c.getComponent(s.default), l = [], p = [];
if (0 == r) if (n) {
l.push(t[e.ele[i] - 1]);
p.push(e.betRate[i]);
i++;
} else {
l.push(t[e.ele[i] - 1]);
p.push(e.betRate[i]);
i++;
l.push(t[e.ele[i] - 1]);
p.push(e.betRate[i]);
i++;
} else {
l.push(t[e.ele[i] - 1]);
p.push(e.betRate[i]);
i++;
l.push(t[e.ele[i] - 1]);
p.push(e.betRate[i]);
i++;
}
a.SetData(l, p);
}
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(c.CommonEvent.EventMaskAll, 1);
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
a.default.instance.playEffect(l.AudioName.Click);
dispatch(c.CommonEvent.EventMaskAll, 1);
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
return r([ u ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": void 0,
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr",
"./Model/PayTableItem_A": "PayTableItem_A"
} ],
PayTableItem_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c6365uTDu5PtKKYvnHcCLto", "PayTableItem_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("./PayTableModel_A"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.payTabelModels = [];
return t;
}
t.prototype.SetData = function(e, t) {
for (var o = 0; o < this.payTabelModels.length; o++) {
var n = this.payTabelModels[o];
if (o < e.length) {
n.node.active = !0;
n.SetData(e[o], t[o]);
} else n.node.active = !1;
}
};
r([ s(c.default) ], t.prototype, "payTabelModels", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./PayTableModel_A": "PayTableModel_A"
} ],
PayTableModel_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d2be94Qtw1J74kvz/VkJ3Zd", "PayTableModel_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, l = c.property, s = function(e) {
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
for (var o = 0; o < this.node_Muls.length; o++) {
this.node_Muls[o];
if (o < t.length) {
this.node_Muls[o].active = !0;
this.label_Muls[o].string = t[o] + "";
} else this.node_Muls[o].active = !1;
}
};
r([ l(cc.Node) ], t.prototype, "node_Muls", void 0);
r([ l(cc.Label) ], t.prototype, "label_Muls", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprite_Icon", void 0);
return r([ a ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
Reward_YouWin_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a70e1Mi76RFbavGaEKRdbAA", "Reward_YouWin_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../../scripts/common/utils/CmmUtils"), a = e("../AudioMgr"), l = e("../GameMgr"), s = cc._decorator, p = s.ccclass, u = s.property, d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Main = null;
t.node_Zhezhao = null;
t.label_Score = null;
t.ani_Guang = null;
t.node_Btn_Claim = null;
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
t.prototype.OpenShow = function(e, t, o) {
var n = this;
a.default.instance.PauseMusic();
this.audioID_bigwin = a.default.instance.playEffect(l.AudioName.Bigwin);
this.ClearTween();
this.callback_Over = o;
this.curTarReward = e;
this.goldInfo = {
gold: 0
};
this.label_Score.string = "0";
this.node_Main.active = !0;
this.node_Zhezhao.active = !0;
this.node_Main.scale = 0;
this.node_Zhezhao.opacity = 0;
this.node_Btn_Claim.active = !1;
this.node_Btn_Claim.scale = 0;
this.node_Btn_Skip.active = !1;
this.ani_Guang && this.ani_Guang.stop();
this.tween_Zhezhao = cc.tween(this.node_Zhezhao).to(.3, {
opacity: 150
}).start();
this.tween_Main = cc.tween(this.node_Main).delay(.3).to(.3, {
scale: 1
}, cc.easeBackOut()).call(function() {
n.ani_Guang && n.ani_Guang.play();
n.node_Btn_Skip.active = !0;
}).start();
var i = 4;
t > 2 && (i = 6);
this.tween_Gold = cc.tween(this.goldInfo).delay(.6).to(i, {
gold: e
}, {
onUpdate: function() {
n.curShowGold = n.goldInfo.gold;
n.ShowGold();
}
}).call(function() {
n.curShowGold = n.curTarReward;
n.ShowGold();
a.default.instance.StopEffect_audioID(n.audioID_bigwin);
a.default.instance.playEffect(l.AudioName.BigwinEnd);
n.node_Btn_Skip.active = !1;
}).delay(.5).call(function() {
n.ShowClaimBtn();
}).start();
};
t.prototype.SetRewardX2 = function(e) {
var t = this;
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
if (e) {
this.goldInfo = {
gold: this.curTarReward
};
var o = 2 * this.curTarReward;
this.tween_Gold = cc.tween(this.goldInfo).delay(.4).to(2, {
gold: o
}, {
onUpdate: function() {
t.curShowGold = t.goldInfo.gold;
t.ShowGold();
}
}).call(function() {
t.curShowGold = o;
t.curTarReward = o;
t.ShowGold();
}).delay(3).call(function() {
t.PlayHideAni();
}).start();
} else App.tips.show("Failed to claim. The advertisement viewing time is insufficient.");
};
t.prototype.ButtonClick_Skip = function() {
this.ClearTween();
this.node_Btn_Skip.active = !1;
a.default.instance.StopEffect_audioID(this.audioID_bigwin);
a.default.instance.playEffect(l.AudioName.BigwinEnd);
this.curShowGold = this.curTarReward;
this.ShowGold();
this.ShowClaimBtn();
};
t.prototype.ButtonClick_Claim = function() {
a.default.instance.playEffect(l.AudioName.Click);
a.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.PlayHideAni();
};
t.prototype.ButtonClick_RewardX2 = function() {
a.default.instance.playEffect(l.AudioName.Click);
a.default.instance.StopEffect_audioID(this.audioID_bigwin);
this.tween_DelayShowBtn && this.tween_DelayShowBtn.stop();
this.delayToShowBtn = {
value: 0
};
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
a.default.instance.ResumeMusic();
if (e.callback_Over) {
e.callback_Over(e.curShowGold);
e.callback_Over = null;
}
e.CloseShow();
}).start();
};
t.prototype.ShowClaimBtn = function() {
this.node_Btn_Claim.active = !0;
this.tween_ClaimBtn = cc.tween(this.node_Btn_Claim).to(.3, {
scale: 1
}, cc.easeBackOut()).start();
};
t.prototype.ShowRewardX2Btn = function() {};
t.prototype.ShowGold = function() {
this.label_Score.string = c.CmmUtils.NumberToHallString(this.curShowGold, !0);
};
t.prototype.ClearTween = function() {
this.tween_Main && this.tween_Main.stop();
this.tween_Zhezhao && this.tween_Zhezhao.stop();
this.tween_Gold && this.tween_Gold.stop();
this.tween_ClaimBtn && this.tween_ClaimBtn.stop();
this.tween_RewardX2Btn && this.tween_RewardX2Btn.stop();
};
r([ u(cc.Node) ], t.prototype, "node_Main", void 0);
r([ u(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ u(cc.Label) ], t.prototype, "label_Score", void 0);
r([ u(cc.Animation) ], t.prototype, "ani_Guang", void 0);
r([ u(cc.Node) ], t.prototype, "node_Btn_Claim", void 0);
r([ u(cc.Node) ], t.prototype, "node_Btn_Skip", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
RulePanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c54fd1ga11KxKTz83xjE9b4", "RulePanel");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/common/event/CommonEvent"), a = e("./AudioMgr"), l = e("./GameMgr"), s = cc._decorator, p = s.ccclass, u = s.property, d = function(e) {
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
if (e.lines.length > 0) {
this.label_PayLines.string = "Paylines: Fixed " + e.lines.length + " lines";
this.label_BetType.node.active = !0;
this.label_BetType.string = "Bet Type: TotalBet = Line Bet x " + e.lines.length;
} else {
for (var t = 1, o = 0; o < e.reel[1]; o++) t *= e.reel[0];
this.label_PayLines.string = "Paylines: Fixed " + t + " lines";
this.label_BetType.node.active = !1;
}
this.label_Symbols.string = "Symbols: " + e.ele.length + " regular symbols (no wild or scatter)";
};
t.prototype.OpenShow = function() {
var e = this;
dispatch(c.CommonEvent.EventMaskAll, 1);
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
a.default.instance.playEffect(l.AudioName.Click);
dispatch(c.CommonEvent.EventMaskAll, 1);
this.tween_Move && this.tween_Move.stop();
this.tween_Move = cc.tween(this.node_main).to(.3, {
position: cc.v3(0, -this.node_main.height, 0)
}).call(function() {
e.CloseShow();
}).start();
};
r([ u(cc.Node) ], t.prototype, "node_Zhezhao", void 0);
r([ u(cc.Node) ], t.prototype, "node_main", void 0);
r([ u(cc.Node) ], t.prototype, "node_CloseBtn", void 0);
r([ u(cc.Label) ], t.prototype, "label_Layout", void 0);
r([ u(cc.Label) ], t.prototype, "label_PayLines", void 0);
r([ u(cc.Label) ], t.prototype, "label_Symbols", void 0);
r([ u(cc.Label) ], t.prototype, "label_BetType", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": void 0,
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr"
} ],
SetPanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b4715CRKXZCuoj6+RORRMjq", "SetPanel");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/framework/componects/EventComponent"), a = e("../../../scripts/framework/defines/Enums"), l = e("./AudioMgr"), s = e("./GameMgr"), p = e("./PayLinesPanel"), u = e("./PayTabelPanel"), d = e("./RulePanel"), h = cc._decorator, _ = h.ccclass, f = h.property, v = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_main = null;
t.close = null;
t.soundOpne = null;
t.soudnclose = null;
t.exit = null;
t.soundBtn = null;
t.musicBtn = null;
t.musicOpne = null;
t.musicClose = null;
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
this.onN(this.close, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
e.node.active = !1;
});
this.onN(this.exit, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
e.node.active = !1;
cc.director.loadScene("login");
});
this.onN(this.soundBtn, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
var t = App.storage.getItem(s.MyGameEvent_A.SoundState, !0);
t = !t;
App.storage.setItem(s.MyGameEvent_A.SoundState, t);
e.refreshSoundState();
});
this.onN(this.musicBtn, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
var t = App.storage.getItem(s.MyGameEvent_A.MusicState, !0);
t = !t;
App.storage.setItem(s.MyGameEvent_A.MusicState, t);
e.refreshMusicState();
});
this.onN(this.ruleBtn, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
e.rulePanel.OpenShow();
});
this.onN(this.payTableBtn, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
e.payTablePanel.OpenShow();
});
this.onN(this.payLinesBtn, a.NodeEvent.click, function() {
l.default.instance.playEffect(s.AudioName.Click);
e.payLinesPanel.OpenShow();
});
this.refreshSoundState();
this.refreshMusicState();
};
t.prototype.refreshSoundState = function() {
var e = App.storage.getItem(s.MyGameEvent_A.SoundState, !0);
this.soundOpne.active = e;
this.soudnclose.active = !e;
l.default.instance.setSoundState(e);
};
t.prototype.refreshMusicState = function() {
var e = App.storage.getItem(s.MyGameEvent_A.MusicState, !0);
this.musicOpne.active = e;
this.musicClose.active = !e;
l.default.instance.setMusicState(e);
};
r([ f(cc.Node) ], t.prototype, "node_main", void 0);
r([ f(cc.Node) ], t.prototype, "close", void 0);
r([ f(cc.Node) ], t.prototype, "soundOpne", void 0);
r([ f(cc.Node) ], t.prototype, "soudnclose", void 0);
r([ f(cc.Node) ], t.prototype, "exit", void 0);
r([ f(cc.Node) ], t.prototype, "soundBtn", void 0);
r([ f(cc.Node) ], t.prototype, "musicBtn", void 0);
r([ f(cc.Node) ], t.prototype, "musicOpne", void 0);
r([ f(cc.Node) ], t.prototype, "musicClose", void 0);
r([ f(cc.Node) ], t.prototype, "ruleBtn", void 0);
r([ f(cc.Node) ], t.prototype, "payTableBtn", void 0);
r([ f(cc.Node) ], t.prototype, "payLinesBtn", void 0);
r([ f(d.default) ], t.prototype, "rulePanel", void 0);
r([ f(u.default) ], t.prototype, "payTablePanel", void 0);
r([ f(p.default) ], t.prototype, "payLinesPanel", void 0);
return r([ _ ], t);
}(c.default);
o.default = v;
cc._RF.pop();
}, {
"../../../scripts/framework/componects/EventComponent": void 0,
"../../../scripts/framework/defines/Enums": void 0,
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr",
"./PayLinesPanel": "PayLinesPanel",
"./PayTabelPanel": "PayTabelPanel",
"./RulePanel": "RulePanel"
} ],
SettingChooseTC_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f55b7RiQBtKx6KBp0n6TZTa", "SettingChooseTC_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../../scripts/sdk/SdkManager"), a = e("../AudioMgr"), l = e("../GameMgr"), s = cc._decorator, p = s.ccclass, u = s.property, d = function(e) {
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
if (0 == e.clickType) c.default.showInterstitial(); else {
cc.director.loadScene("login");
c.default.showInterstitial();
}
e.node_main.active = !1;
e.node_zhezhao.active = !1;
}).start();
};
t.prototype.onLoad = function() {
this.refreshSoundState();
};
t.prototype.ButtonClick_Close = function() {
a.default.instance.playEffect(l.AudioName.Click);
this.clickType = 0;
this.CloseShow();
};
t.prototype.ButtonClick_Exit = function() {
a.default.instance.playEffect(l.AudioName.Click);
this.clickType = 1;
this.CloseShow();
};
t.prototype.ButtonClick_SoundBtn = function() {
a.default.instance.playEffect(l.AudioName.Click);
var e = App.storage.getItem("soundState", !0);
e = !e;
App.storage.setItem("soundState", e);
this.refreshSoundState();
c.default.showInterstitial();
};
t.prototype.refreshSoundState = function() {
var e = App.storage.getItem("soundState", !0);
this.soundOpne.active = e;
this.soudnclose.active = !e;
a.default.instance.setSoundState(e);
};
r([ u(cc.Node) ], t.prototype, "node_main", void 0);
r([ u(cc.Node) ], t.prototype, "node_zhezhao", void 0);
r([ u(cc.Node) ], t.prototype, "soundOpne", void 0);
r([ u(cc.Node) ], t.prototype, "soudnclose", void 0);
return r([ p ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../scripts/sdk/SdkManager": void 0,
"../AudioMgr": "AudioMgr",
"../GameMgr": "GameMgr"
} ],
SlotJudge: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6eb22jbiYNJ4qMIUYt9aJMr", "SlotJudge");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.awardLines_Config = void 0;
o.awardLines_Config = [ [ 0, 6, 12, 18, 24 ], [ 1, 7, 13, 19, 25 ], [ 2, 8, 14, 20, 26 ], [ 3, 9, 15, 21, 27 ], [ 4, 10, 16, 22, 28 ], [ 5, 11, 17, 23, 29 ], [ 0, 7, 14, 21, 28 ], [ 1, 8, 15, 22, 29 ], [ 5, 10, 15, 20, 25 ], [ 4, 9, 14, 19, 24 ], [ 1, 7, 14, 19, 25 ], [ 4, 10, 15, 22, 28 ], [ 2, 8, 13, 20, 26 ], [ 3, 9, 16, 21, 27 ], [ 2, 9, 16, 21, 26 ], [ 3, 8, 13, 18, 23 ], [ 0, 6, 13, 18, 24 ], [ 5, 11, 14, 23, 29 ], [ 1, 8, 14, 20, 25 ], [ 4, 9, 15, 21, 28 ], [ 0, 7, 13, 19, 24 ], [ 5, 10, 16, 22, 29 ], [ 1, 8, 15, 20, 25 ], [ 4, 9, 14, 19, 28 ], [ 2, 7, 12, 19, 26 ], [ 3, 10, 17, 22, 27 ], [ 1, 6, 14, 20, 28 ], [ 4, 11, 15, 21, 23 ], [ 2, 9, 15, 22, 29 ], [ 3, 8, 14, 19, 24 ], [ 0, 7, 15, 21, 29 ], [ 5, 10, 14, 18, 24 ], [ 1, 8, 16, 22, 28 ], [ 4, 9, 13, 19, 25 ], [ 2, 7, 15, 21, 27 ], [ 3, 8, 14, 20, 26 ], [ 0, 8, 16, 20, 28 ], [ 5, 9, 13, 19, 23 ], [ 1, 6, 12, 18, 25 ], [ 4, 11, 17, 23, 28 ], [ 2, 7, 13, 21, 27 ], [ 3, 9, 15, 19, 25 ], [ 0, 7, 13, 21, 29 ], [ 5, 10, 14, 20, 24 ], [ 1, 7, 13, 19, 27 ], [ 4, 8, 14, 20, 26 ], [ 2, 8, 15, 22, 29 ], [ 3, 9, 14, 19, 24 ], [ 0, 8, 14, 22, 28 ], [ 5, 9, 15, 21, 25 ] ];
var n = [ [ 400, 2400, 6400 ], [ 360, 2e3, 5600 ], [ 320, 1600, 5e3 ], [ 240, 1200, 3600 ], [ 200, 1e3, 3200 ], [ 160, 800, 2e3 ], [ 100, 400, 1200 ], [ 80, 320, 800 ], [ 50, 200, 500 ], [ 20, 80, 240 ], [ 10, 40, 200 ], [ 4, 20, 100 ] ], i = function() {
function e() {}
e.getSymbol = function(e, t) {
var o = t % 6;
return e[Math.floor(t / 6)][o];
};
e.checkAwards = function(e, t) {
for (var i = this, r = {
awardline: [],
awardPos: [],
awardType: 0,
score: 0
}, c = new Set(), a = 0; a < o.awardLines_Config.length; a++) {
for (var l = o.awardLines_Config[a], s = l.map(function(t) {
return i.getSymbol(e, t);
}), p = s[0], u = 1, d = 1; d < s.length && s[d] === p; d++) u++;
if (u >= 3) {
r.awardline.push(a);
for (var h = 0; h < u; h++) c.add(l[h]);
var _ = n[p][u - 3];
r.score += .02 * t * _;
}
}
if (r.score > 0) {
var f = r.score / t;
r.awardType = f < 1 ? 1 : f < 3 ? 2 : 3;
} else r.awardType = 0;
r.awardPos = Array.from(c).sort(function(e, t) {
return e - t;
});
return {
awardResult: r,
value: e
};
};
return e;
}();
o.default = i;
cc._RF.pop();
}, {} ],
TaskModel_A: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e32bbv8kyBJh6iYqrpBvXvC", "TaskModel_A");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../../scripts/common/utils/RandomUtil"), a = cc._decorator, l = a.ccclass, s = a.property, p = function(e) {
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
angle: c.RandomUtil.randomFRange(-5, 5)
}).to(.05, {
position: cc.v3(0, 18, 0),
angle: c.RandomUtil.randomFRange(-3, 3)
}).to(.05, {
position: cc.v3(0, 16, 0),
angle: c.RandomUtil.randomFRange(-3, 3)
}).to(.1, {
position: cc.v3(2, 5, 0),
angle: c.RandomUtil.randomFRange(-3, 3)
}).to(.05, {
position: cc.v3(-2, 2, 0),
angle: c.RandomUtil.randomFRange(-1, 1)
}).to(.05, {
position: cc.v3(2, 2, 0),
angle: c.RandomUtil.randomFRange(-1, 1)
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
r([ s(cc.Node) ], t.prototype, "node_ani", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/RandomUtil": void 0
} ],
TaskService: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d23a0Ck7jRCH7mXHARP9fgx", "TaskService");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, a = c.ccclass, l = c.property, s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.label = null;
t.node_Jumbo = null;
t.tween_Jumbo = null;
return t;
}
t.prototype.onDestroy = function() {
this.ClearTween();
};
t.prototype.SetTask = function(e) {
this.ClearTween();
this.label.string = "COLLECT " + e + " FLOWERS";
this.node_Jumbo.angle = -10;
this.node_Jumbo.scale = .52;
};
t.prototype.PlayAni_Collect = function() {
this.ClearTween();
this.tween_Jumbo = cc.tween(this.node_Jumbo).to(.5, {
scale: .64,
angle: -5
}).to(.5, {
scale: .52,
angle: -10
}).start();
};
t.prototype.ClearTween = function() {
this.tween_Jumbo && this.tween_Jumbo.stop();
};
r([ l(cc.Label) ], t.prototype, "label", void 0);
r([ l(cc.Node) ], t.prototype, "node_Jumbo", void 0);
return r([ a ], t);
}(cc.Component);
o.default = s;
cc._RF.pop();
}, {} ],
slotsOperate: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "a3ccbpSPFlKr6SC6xdoaE2U", "slotsOperate");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, n) {
var i, r = arguments.length, c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (r < 3 ? i(c) : r > 3 ? i(t, o, c) : i(t, o)) || c);
return r > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = e("../../../scripts/common/event/CommonEvent"), a = e("../../../scripts/common/utils/CmmUtils"), l = e("../../../scripts/framework/componects/EventComponent"), s = e("./AudioMgr"), p = e("./GameMgr"), u = cc._decorator, d = u.ccclass, h = u.property, _ = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.node_Normal = null;
t.node_Auto = null;
t.label_Auto = null;
t.betLabel = null;
t.curCoins = null;
t.winLabel = null;
t.btn_Reduce = null;
t.btn_Add = null;
t.btn_Auto = null;
t.btn_Rule = null;
t.btn_Spin = null;
t.btn_CancelAuto = null;
t.btn_Return = null;
t.btn_Setting = null;
t._data = null;
t.betValue = 1;
t.curCoinsValue = 1e4;
t.curBetIndex = 0;
t.autoCount = 0;
return t;
}
t.prototype.init = function(e) {
this._data = e;
this.SetAutoState(0);
this.clickBetItem(0);
this.updateCoins();
};
t.prototype.addEvents = function() {
var e = this;
this.onD(c.SdkEvent.SdkEvent_finish_video_back, function() {
Log.d("激励视频播放完成，发放奖励");
e.updateCoins(1e3);
});
};
t.prototype.setBtnState = function(e) {
Log.e("setBtnState = " + e);
if (this.autoCount > 0) {
this.btn_Spin.interactable = !1;
this.btn_Reduce.interactable = !1;
this.btn_Add.interactable = !1;
this.btn_Rule.interactable = !1;
this.btn_Auto.interactable = !1;
this.btn_Return.interactable = !1;
this.btn_Setting.interactable = !1;
} else {
this.btn_Spin.interactable = e;
this.btn_Reduce.interactable = e;
this.btn_Add.interactable = e;
this.btn_Rule.interactable = e;
this.btn_Auto.interactable = e;
this.btn_Return.interactable = e;
this.btn_Setting.interactable = e;
}
};
t.prototype.SetAutoState = function(e) {
this.autoCount = e;
this.label_Auto.string = this.autoCount + "";
if (this.autoCount > 0) {
this.node_Auto.active = !0;
this.node_Normal.active = !1;
} else {
this.node_Auto.active = !1;
this.node_Normal.active = !0;
}
};
t.prototype.ButtonClick_Spin = function() {
s.default.instance.playEffect(p.AudioName.spin);
this._data && this._data.spinCallBack && this._data.spinCallBack();
};
t.prototype.BUttonClick_CancelAuto = function() {
s.default.instance.playEffect(p.AudioName.Click);
this.SetAutoState(0);
};
t.prototype.ButtonClick_ReduceBet = function() {
s.default.instance.playEffect(p.AudioName.Click);
if (this.curBetIndex > 0) {
this.curBetIndex--;
this.clickBetItem(this.curBetIndex);
}
};
t.prototype.ButtonClick_AddBet = function() {
s.default.instance.playEffect(p.AudioName.Click);
if (this.curBetIndex < this._data.betValues.length - 1) {
this.curBetIndex++;
this.clickBetItem(this.curBetIndex);
}
};
t.prototype.clickBetItem = function(e) {
this.curBetIndex = e;
this.betValue = this._data.betValues[e];
this.betLabel.string = this.betValue.toString();
this.btn_Reduce.interactable = this.curBetIndex > 0;
this.btn_Add.interactable = this.curBetIndex < this._data.betValues.length - 1;
};
t.prototype.showWin = function(e) {
this.winLabel.string = e > 0 ? a.CmmUtils.NumberToHallString(e) : "0.00";
};
t.prototype.isCanSpin = function() {
return !(this.curCoinsValue < this.betValue);
};
t.prototype.spinUpadateCoin = function() {
this.curCoinsValue -= this.betValue;
App.storage.setItem(p.MyGameEvent_A.Coin, this.curCoinsValue);
this.curCoins.string = a.CmmUtils.NumberToHallString(this.curCoinsValue);
};
t.prototype.updateCoins = function(e) {
if (e) {
this.curCoinsValue += e;
App.storage.setItem(p.MyGameEvent_A.Coin, this.curCoinsValue);
}
this.curCoinsValue = App.storage.getItem(p.MyGameEvent_A.Coin, 1e4);
this.curCoins.string = a.CmmUtils.NumberToHallString(this.curCoinsValue);
};
r([ h(cc.Node) ], t.prototype, "node_Normal", void 0);
r([ h(cc.Node) ], t.prototype, "node_Auto", void 0);
r([ h(cc.Label) ], t.prototype, "label_Auto", void 0);
r([ h(cc.Label) ], t.prototype, "betLabel", void 0);
r([ h(cc.Label) ], t.prototype, "curCoins", void 0);
r([ h(cc.Label) ], t.prototype, "winLabel", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Reduce", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Add", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Auto", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Rule", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Spin", void 0);
r([ h(cc.Button) ], t.prototype, "btn_CancelAuto", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Return", void 0);
r([ h(cc.Button) ], t.prototype, "btn_Setting", void 0);
return r([ d ], t);
}(l.default);
o.default = _;
cc._RF.pop();
}, {
"../../../scripts/common/event/CommonEvent": void 0,
"../../../scripts/common/utils/CmmUtils": void 0,
"../../../scripts/framework/componects/EventComponent": void 0,
"./AudioMgr": "AudioMgr",
"./GameMgr": "GameMgr"
} ]
}, {}, [ "AudioMgr", "GameMgr", "Login", "ChooseLevelModel_A", "LevelModel_A", "PayLineItem_A", "PayLineModel_A", "PayTableItem_A", "PayTableModel_A", "TaskModel_A", "PayLinesPanel", "PayTabelPanel", "RulePanel", "AutoService_A", "HomeTipTCService_A", "LevelLayoutMgr_A", "LevelManager_A", "LoadingGameService_A", "Reward_YouWin_A", "SettingChooseTC_A", "TaskService", "SetPanel", "SlotJudge", "slotsOperate" ]);