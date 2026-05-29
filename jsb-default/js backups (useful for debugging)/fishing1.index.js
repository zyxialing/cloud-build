window.__require = function t(e, o, i) {
function n(r, a) {
if (!o[r]) {
if (!e[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var h = o[r] = {
exports: {}
};
e[r][0].call(h.exports, function(t) {
return n(e[r][1][t] || t);
}, h, h.exports, t, e, o, i);
}
return o[r].exports;
}
for (var s = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
return n;
}({
AutoFishingPanel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7871enb4GdC66XWigU+hhx4", "AutoFishingPanel");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/framework/componects/EventComponent"), a = t("../../../../scripts/framework/defines/Enums"), c = t("../net/Fishing1Event"), l = cc._decorator, h = l.ccclass, f = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.closeBtn = null;
e.all = null;
e.reset = null;
e.confirm = null;
e.subBtn = null;
e.addBtn = null;
e.toggle1 = null;
e.toggle2 = null;
e.toggle3 = null;
e.toggle4 = null;
e.toggle5 = null;
e.toggle1mark = null;
e.toggle2mark = null;
e.toggle3mark = null;
e.toggle4mark = null;
e.toggle5mark = null;
e.totalCount = 300;
e.content = null;
e.totalCountValue = null;
e.mapItem = null;
e.pressTimer = null;
e.longPressTimer = null;
e.isLongPress = !1;
e.speedAdd = 10;
e.maxAdd = 100;
return e;
}
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
this.refreshTotoalValue();
};
e.prototype.initNode = function() {
this.closeBtn = cc.find("root/bgs/top/close", this.node);
this.all = cc.find("root/all", this.node);
this.reset = cc.find("root/reset", this.node);
this.confirm = cc.find("root/confirm", this.node);
this.subBtn = cc.find("root/totalCount/sub", this.node);
this.addBtn = cc.find("root/totalCount/add", this.node);
this.toggle1 = cc.find("root/toggle1", this.node);
this.toggle2 = cc.find("root/toggle2", this.node);
this.toggle3 = cc.find("root/toggle3", this.node);
this.toggle4 = cc.find("root/toggle4", this.node);
this.toggle5 = cc.find("root/toggle5", this.node);
this.toggle1mark = cc.find("root/toggle1/checkmark", this.node);
this.toggle2mark = cc.find("root/toggle2/checkmark", this.node);
this.toggle3mark = cc.find("root/toggle3/checkmark", this.node);
this.toggle4mark = cc.find("root/toggle4/checkmark", this.node);
this.toggle5mark = cc.find("root/toggle5/checkmark", this.node);
this.toggle5mark = cc.find("root/toggle5/checkmark", this.node);
this.content = cc.find("root/content", this.node);
this.totalCountValue = cc.find("root/totalCount/value", this.node).getComponent(cc.Label);
this.allItem = [];
this.mapItem = new Map();
for (var t = 0; t < this.content.childrenCount; t++) {
var e = this.content.children[t], o = {};
o.node = e;
o.selected = cc.find("selected", e);
o.value = cc.find("value", e).getComponent(cc.Label);
o.type = Number.parseInt(o.node.name);
this.allItem.push(o);
this.mapItem.set(o.type, o);
}
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.closeBtn, a.NodeEvent.click, function() {
t.node.active = !1;
App.globalAudio.playButtonClick();
});
this.onN(this.reset, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.resetSelected();
});
this.onN(this.all, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.selectAll();
});
for (var e = 0; e < this.allItem.length; e++) {
var o = this.allItem[e];
this.onN(o.node, a.NodeEvent.click, this.clickItem.bind(this, o));
}
this.onN(this.confirm, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
var e = t.getAutoData();
dispatch(c.Fishing1Event.Fishing1ServerEvent_audoFishing, e);
t.node.active = !1;
});
this.onN(this.toggle1, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggle1mark.active = !t.toggle1mark.active;
});
this.onN(this.toggle2, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggle2mark.active = !t.toggle2mark.active;
t.toggle2mark.active && t.toggle3mark.active && (t.toggle3mark.active = !1);
});
this.onN(this.toggle3, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggle3mark.active = !t.toggle3mark.active;
t.toggle3mark.active && t.toggle2mark.active && (t.toggle2mark.active = !1);
});
this.onN(this.toggle4, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggle4mark.active = !t.toggle4mark.active;
});
this.onN(this.toggle5, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggle5mark.active = !t.toggle5mark.active;
});
this.onN(this.subBtn, cc.Node.EventType.TOUCH_START, function() {
App.globalAudio.playButtonClick();
t.isLongPress = !1;
t.speedAdd = 10;
t.pressTimer = setTimeout(function() {
t.isLongPress = !0;
t.longPressTimer = setInterval(function() {
t.totalCount -= t.speedAdd;
if (t.speedAdd < t.maxAdd) {
t.speedAdd += 10;
t.speedAdd > t.maxAdd && (t.speedAdd = t.maxAdd);
}
t.refreshTotoalValue();
}, 100);
}, 300);
});
this.onN(this.subBtn, cc.Node.EventType.TOUCH_END, function() {
if (!t.isLongPress) {
t.totalCount--;
t.refreshTotoalValue();
}
t.clearPress();
});
this.onN(this.subBtn, cc.Node.EventType.TOUCH_CANCEL, this.clearPress.bind(this));
this.onN(this.addBtn, cc.Node.EventType.TOUCH_START, function() {
App.globalAudio.playButtonClick();
t.isLongPress = !1;
t.speedAdd = 10;
t.pressTimer = setTimeout(function() {
t.isLongPress = !0;
t.longPressTimer = setInterval(function() {
t.totalCount += t.speedAdd;
if (t.speedAdd < t.maxAdd) {
t.speedAdd += 10;
t.speedAdd > t.maxAdd && (t.speedAdd = t.maxAdd);
}
t.refreshTotoalValue();
}, 100);
}, 300);
});
this.onN(this.addBtn, cc.Node.EventType.TOUCH_END, function() {
if (!t.isLongPress) {
t.totalCount++;
t.refreshTotoalValue();
}
t.clearPress();
});
this.onN(this.addBtn, cc.Node.EventType.TOUCH_CANCEL, this.clearPress.bind(this));
};
e.prototype.refreshTotoalValue = function() {
this.totalCount <= 0 && (this.totalCount = 1);
this.totalCount >= 1e4 && (this.totalCount = 1e4);
this.totalCountValue.string = this.totalCount.toString();
};
e.prototype.clearPress = function() {
if (this.pressTimer) {
clearTimeout(this.pressTimer);
this.pressTimer = null;
}
if (this.longPressTimer) {
clearInterval(this.longPressTimer);
this.longPressTimer = null;
}
};
e.prototype.show = function(t) {
this.node.active = !0;
this.selectAll();
for (var e = 0; e < this.allItem.length; e++) {
var o = this.allItem[e], i = t.get(o.type);
i.length > 1 ? o.value.string = "X" + i[0] + "-" + i[1] : o.value.string = "X" + i[0];
}
};
e.prototype.clickItem = function(t) {
t.selected.active = !t.selected.active;
};
e.prototype.resetSelected = function() {
for (var t = 0; t < this.allItem.length; t++) this.allItem[t].selected.active = !1;
};
e.prototype.selectAll = function() {
for (var t = 0; t < this.allItem.length; t++) this.allItem[t].selected.active = !0;
};
e.prototype.getAutoData = function() {
for (var t = {}, e = [], o = 0; o < this.allItem.length; o++) {
var i = this.allItem[o];
i.selected.active && e.push(i.type);
}
t.autoTypes = e;
t.odds25 = this.toggle1mark.active;
t.useTorpedo = this.toggle2mark.active;
t.directionalShoot = this.toggle3mark.active;
t.useElectric = this.toggle4mark.active;
t.totalShots = this.toggle5mark.active;
t.totoalCount = this.totalCount;
return t;
};
return s([ h ], e);
}(r.default));
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../net/Fishing1Event": "Fishing1Event"
} ],
EnergyPowerEffect: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f5a3emx93BEoZElK64/sHW6", "EnergyPowerEffect");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/fishframework/scripts/bulletFactory"), a = t("../../../../scripts/fishframework/scripts/fishBaseEffect"), c = cc._decorator, l = c.ccclass, h = c.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.boom_animation = null;
return e;
}
e.prototype.play = function(t, e) {
var o = this;
this.node.opacity = e ? 150 : 255;
this.node.setParent(r.default.instance.effectRoot);
this.node.position = App.utils.localConvertlocalPointAR_Vec3(t, r.default.instance.effectRoot);
this.boom_animation.play(null, 0);
this.scheduleOnce(function() {
o.node.destroy();
}, 2.1);
};
s([ h(cc.Animation) ], e.prototype, "boom_animation", void 0);
return s([ l ], e);
}(a.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishBaseEffect": void 0
} ],
EnergyPower: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9ce7a4Xt5BBX5mOgArktQvS", "EnergyPower");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/fishframework/scripts/fishBaseBullet"), h = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), f = t("../../../../scripts/fishframework/scripts/fishFactory"), p = t("../../../../scripts/framework/defines/Macros"), u = cc._decorator, d = u.ccclass, m = u.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.flyAnim = null;
e.targetPos = cc.v2(800, 375);
e.moveSpeed = 0;
e.isMoving = !1;
e.elapsedTime = 0;
e.totalDuration = .5;
e.startPos = cc.v2(0, 0);
return e;
}
e.prototype.shoot = function(t) {
this.serverData = t.serverData;
this.node.setParent(t.parent);
this.node.setPosition(t.pos);
this.startPos = t.pos.clone ? t.pos.clone() : cc.v2(t.pos.x, t.pos.y);
var e = this.targetPos.sub(this.startPos).mag();
this.moveSpeed = e / this.totalDuration;
this.elapsedTime = 0;
this.isMoving = !0;
this.flyAnim.play(null, 0);
App.globalAudio.playBundleEffect("audios/energy0", p.Macro.BUNDLE_Fishing1);
};
e.prototype.update = function(t) {
if (this.isMoving && this.node && this.node.isValid) {
this.elapsedTime += t;
var e = this.node.position.clone(), o = this.targetPos.sub(e), i = o.mag();
if (this.elapsedTime >= this.totalDuration || i <= 10) {
this.node.setPosition(this.targetPos);
this.isMoving = !1;
this.birthEffect();
} else {
var n = o.normalize().mul(this.moveSpeed * t);
this.node.setPosition(e.add(n));
}
}
};
e.prototype.birthEffect = function() {
return r(this, void 0, void 0, function() {
var t, e;
return a(this, function(o) {
switch (o.label) {
case 0:
Log.d("⚡ EnergyPower 到达中心，触发爆炸特效！");
App.globalAudio.playBundleEffect("audios/energy1", p.Macro.BUNDLE_Fishing1);
f.default.instance.koFishes(this.serverData);
return [ 4, c.CmmUtils.awaitTime(500) ];

case 1:
o.sent();
App.globalAudio.playBundleEffect("audios/energy1", p.Macro.BUNDLE_Fishing1);
return [ 4, c.CmmUtils.awaitTime(1e3) ];

case 2:
o.sent();
t = 0;
for (e = 0; e < this.serverData.wins.length; e++) t += this.serverData.wins[e];
t > 0 && dispatch(h.fishCommonEvent.fishCommonEvent_fish_reward, {
isEnergy: !0,
showReward: !0,
uid: this.serverData.uid,
win: t
});
this.destorySelf(null);
return [ 2 ];
}
});
});
};
e.prototype.destorySelf = function() {
this.node.destroy();
};
s([ m(cc.Animation) ], e.prototype, "flyAnim", void 0);
return s([ d ], e);
}(l.default);
o.default = y;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/fishBaseBullet": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
FishPlayer: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1805fkE655MToPbFFqvtEez", "FishPlayer");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/fishframework/scripts/bulletFactory"), h = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), f = t("../../../../scripts/fishframework/scripts/FishEvent"), p = t("../../../../scripts/fishframework/scripts/fishFactory"), u = t("../../../../scripts/fishframework/scripts/fishTouchManager"), d = t("../../../../scripts/framework/componects/EventComponent"), m = t("../../../../scripts/framework/defines/Enums"), y = t("../game/fishCicleReward"), v = t("../../../../scripts/framework/defines/Macros"), g = t("../net/Fishing1Event"), _ = t("../game/energyCicleReward"), b = t("../game/fish1Tools"), C = t("../../../../scripts/common/utils/RandomUtil"), w = cc._decorator, E = w.ccclass, F = w.property, k = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.testMoneys = [];
e.cannonsSpriteFrame = [];
e.cannon = null;
e.root = null;
e.fireAnimation = null;
e.waitNode = null;
e.anchor = null;
e.pointNode = [];
e.addBtn = null;
e.subBtn = null;
e.addDisable = null;
e.subDisable = null;
e.playerName = null;
e.betValue = null;
e.coinValue = null;
e.coinNode = null;
e.normal = null;
e.auto = null;
e.auotLightuv = null;
e.auotLightuvanchor = null;
e.auotLockLight = null;
e.auotLightParent = null;
e.torpedo = null;
e.cicleRewards = [];
e.energyReward = null;
e.betMoney = 1;
e.betIndex = 0;
e.bulletIndex = 0;
e.isSelf = !1;
e.weaponType = 0;
e.isAutoLockMode = !1;
e.isAutoFishing = !1;
e.lockedFish = null;
e.lockedFishId = "";
e.lockedType = -1;
e.curShootTime = 0;
e.changeLockFish = !1;
e.lockNode = null;
e.addscorePoint = null;
e.torpedoMul = 1;
e.serverMoney = 0;
e.fire1_loop_id = -1;
e.laserCount = 0;
e.rewardList = [];
e.autoFishingCount = -1;
e.directionalShoot = !1;
e.autoWeapon = 1;
e.useElectric = !1;
e.odds25 = !1;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.addscorePoint = cc.find("root/addscorePoint", this.node);
this.onN(this.addBtn.node, m.NodeEvent.click, this.addBetValue.bind(this));
this.onN(this.subBtn.node, m.NodeEvent.click, this.subBetValue.bind(this));
this.onD(f.FishEvent.FishEvent_Shoot_to_Server, this.shootself2server.bind(this));
this.onD(g.Fishing1Event.Fishing1ServerEvent_audoFishing, function(e) {
t.isSelf && t.autoFishing(e);
});
};
e.prototype.addBetValue = function() {
if (this.betIndex < this.betValues.length - 1) {
this.betIndex++;
this.betMoney = this.betValues[this.betIndex];
this.refreshPlayer();
this.sender.send_change_bet(this.betIndex);
this.fireAnimation.play("changeAnim2", 0);
App.globalAudio.playBundleEffect("audios/changeBet", v.Macro.BUNDLE_Fishing1);
dispatch(h.fishCommonEvent.fishCommonEvent_server_updateEnergy, this.getuid());
}
};
e.prototype.subBetValue = function() {
if (this.betIndex > 0) {
this.betIndex--;
this.betMoney = this.betValues[this.betIndex];
this.refreshPlayer();
this.sender.send_change_bet(this.betIndex);
this.fireAnimation.play("changeAnim2", 0);
App.globalAudio.playBundleEffect("audios/changeBet", v.Macro.BUNDLE_Fishing1);
dispatch(h.fishCommonEvent.fishCommonEvent_server_updateEnergy, this.getuid());
}
};
e.prototype.refreshDisabelBtn = function() {
if (0 == this.betIndex) {
this.subDisable.active = !0;
this.subBtn.interactable = !1;
} else {
this.subDisable.active = !1;
this.subBtn.interactable = !0;
}
if (this.betIndex == this.betValues.length - 1) {
this.addDisable.active = !0;
this.addBtn.interactable = !1;
} else {
this.addDisable.active = !1;
this.addBtn.interactable = !0;
}
};
e.prototype.refreshCannon = function() {
if (0 == this.weaponType) if (this.betIndex < 3) {
this.cannon.spriteFrame = this.cannonsSpriteFrame[0];
this.bulletIndex = 0;
} else if (this.betIndex < 6) {
this.cannon.spriteFrame = this.cannonsSpriteFrame[1];
this.bulletIndex = 1;
} else {
this.cannon.spriteFrame = this.cannonsSpriteFrame[2];
this.bulletIndex = 2;
} else 2 == this.weaponType && (this.bulletIndex = 3);
};
e.prototype.initData = function(t, e) {
this.lockNode = e;
this.betValues = t.bet_config;
this.energys = t.energys;
this.energy = t.energy;
this.torpedoMul = t.bullets[1];
};
e.prototype.joinGame = function(t, e) {
this.sender = e;
this.botData = t.bot;
this.root.active = !0;
this.waitNode.active = !1;
this._playerData = t;
this.betIndex = this._playerData.betIndex;
this.betMoney = this.betValues[this.betIndex];
this.isSelf = this._playerData.uid == u.default.self_uid;
if (this.isSelfBot()) {
this.botData.ruleIndex = 0;
u.default.self_BotMapUids.has(this._playerData.uid) || u.default.self_BotMapUids.set(this._playerData.uid, this);
}
this.setWeaponMode(t);
this.initLockedFish(t);
this.refreshPlayer();
this.rewardList = [];
this.cicleRewards = [];
this.cicleRewards.push(cc.find("root/reward1", this.node).getComponent(y.default));
this.cicleRewards.push(cc.find("root/reward2", this.node).getComponent(y.default));
this.cicleRewards.push(cc.find("root/reward3", this.node).getComponent(y.default));
this.energyReward = cc.find("root/energyReward", this.node).getComponent(_.default);
dispatch(h.fishCommonEvent.fishCommonEvent_server_updateEnergy, this.getuid());
this.OpenBotCfgShoot();
};
e.prototype.getEnergyProgress = function() {
return this.energy / this.energys[this.betIndex];
};
e.prototype.energyIsFull = function() {
return this.energy >= this.energys[this.betIndex];
};
e.prototype.exitGame = function() {
this._playerData && u.default.self_BotMapUids.has(this._playerData.uid) && u.default.self_BotMapUids.set(this._playerData.uid, this);
this.root.active = !1;
this.waitNode.active = !0;
this._playerData = null;
this.botData = null;
this.auotLockLight.active = !1;
};
e.prototype.shootself2server = function(t, e, o) {
void 0 === e && (e = 0);
void 0 === o && (o = "");
this.isSelfBot() || this.shoot2server(t, e, o);
};
e.prototype.shoot2server = function(t, e, o) {
void 0 === e && (e = 0);
void 0 === o && (o = "");
if (this._playerData && (this._playerData.uid == u.default.self_uid || this.isSelfBot()) && 0 != p.default.instance.start) {
var i = App.utils.worldConvertLocalPointAR(this.root, t), n = cc.v2(i.x - this.anchor.position.x, i.y - this.anchor.position.y).normalize(), s = {};
s.dir = n;
s.type = e;
s.uid = this._playerData.uid;
s.fid = o;
s.bid = l.default.instance.getNewBulletID(this._playerData.uid);
s.isServer = !1;
if (this.checkMoneyEnough(s)) {
this.send2server(s);
this.server2shoot(s);
} else {
this.isSelfBot() || App.tips.show(App.zLan.getString(10231));
dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
}
}
};
e.prototype.shootLockFish = function(t) {
if (this._playerData && this._playerData.uid == t.uid) if ("" != t.fid) {
if (this.curShootTime >= u.default.torpedoIntervalTime) {
var e = p.default.instance.getRenderFish(t.fid);
if (e) {
var o = App.utils.localConvertWorldPointAR(e.node);
this.shoot2server(o, this.weaponType, t.fid);
}
this.curShootTime = 0;
}
} else this.cancelLockFish();
};
e.prototype.send2server = function(t) {
this.isSelfBot() ? this.sender.send_shoot(this.betMoney, t.dir, t.bid, t.type, t.fid, this.getuid()) : this.sender.send_shoot(this.betMoney, t.dir, t.bid, t.type, t.fid);
};
e.prototype.server2shoot = function(t) {
if (this._playerData && t.uid == this._playerData.uid && (!this.isSelf && !this.isSelfBot() || !t.isServer)) {
var e = c.CmmUtils.dir2Angle(t.dir);
this.anchor.angle = e;
var o = this.pointNode[0];
switch (t.type) {
case 2:
this.fireAnimation.play("fire2", 0);
o = this.pointNode[1];
this.isSelf && App.globalAudio.playBundleEffect("audios/fire2", v.Macro.BUNDLE_Fishing1);
break;

case 0:
this.fireAnimation.play("fire", 0);
this.isSelf && App.globalAudio.playBundleEffect("audios/fire", v.Macro.BUNDLE_Fishing1);
}
t.worldPos = App.utils.localConvertWorldPointAR(o);
t.sender = this.sender;
t.bulletIndex = this.bulletIndex;
t.isBot = this.isSelfBot();
dispatch(h.fishCommonEvent.fishCommonEvent_serverToShoot, t);
}
};
e.prototype.server2ShootEnergy = function(t) {
if (t && this._playerData && t.uid == this._playerData.uid) {
var e = this.pointNode[0], o = {};
o.worldPos = App.utils.localConvertWorldPointAR(e);
o.sender = this.sender;
o.bulletIndex = 4;
o.data = t;
o.type = t.type;
o.isBot = this.isSelfBot();
o.uid = t.uid;
o.isServer = !0;
dispatch(h.fishCommonEvent.fishCommonEvent_serverToShoot, o);
}
};
e.prototype.refreshPlayer = function() {
this.playerName.string = this._playerData.name;
this.betValue.string = this.betMoney.toString();
this.coinValue.string = c.CmmUtils.NumberToGameString_Keep2(this._playerData.money);
if (this.isSelf) {
this.addBtn.node.active = !0;
this.subBtn.node.active = !0;
this.anchor.opacity = 255;
} else {
this.addBtn.node.active = !1;
this.subBtn.node.active = !1;
this.anchor.opacity = 150;
}
this.refreshDisabelBtn();
this.refreshCannon();
this.isSelf && dispatch(g.Fishing1Event.Fishing1ServerEvent_updateBetMoney, this.betMoney * this.torpedoMul);
};
e.prototype.checkMoneyEnough = function(t) {
if (t.isServer) return !0;
if (2 == t.type) {
var e = 6 * this.betMoney;
if (this._playerData && this._playerData.money >= e) {
this._playerData.money = this._playerData.money - e;
this.refreshPlayer();
return !0;
}
return !1;
}
if (this._playerData && this._playerData.money >= this.betMoney) {
this._playerData.money = this._playerData.money - this.betMoney;
this.refreshPlayer();
return !0;
}
return !1;
};
e.prototype.exitByID = function(t) {
if (this._playerData && this._playerData.uid == t.uid) this.exitGame(); else {
if (this.botData && t.bindId) {
this.botData.bindId = t.bindId;
this.botData.ruleIndex = C.RandomUtil.randomRange(0, this.botData.rules.length);
this.loopBotFun && this.unschedule(this.loopBotFun);
}
this.OpenBotCfgShoot();
}
};
e.prototype.isSelfBot = function() {
return !(!this.botData || this.botData.bindId != u.default.self_uid);
};
e.prototype.OpenBotCfgShoot = function() {
if (this.isSelfBot()) {
var t = this.botData.ruleIndex;
t >= this.botData.rules.length && (t = 0);
var e = this.botData.rules[t], o = this.botData.types[t], i = e[6], n = 1 == e[0], s = {};
s.autoTypes = o;
s.odds25 = 1 == e[1];
s.useElectric = 1 == e[2];
s.useTorpedo = 1 == e[3];
s.directionalShoot = 1 == e[4];
s.totalShots = e[5] > 0;
s.totoalCount = e[5];
n ? this.autoFishing(s) : dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
this.loopBotFun = this.openNextBotCfg.bind(this);
this.scheduleOnce(this.loopBotFun, i);
}
};
e.prototype.openNextBotCfg = function() {
if (this.isSelfBot()) {
this.botData.ruleIndex = this.botData.ruleIndex + 1;
this.OpenBotCfgShoot();
}
};
e.prototype.updatePlayerMoney = function(t) {
if (this._playerData && this._playerData.uid == t.uid) {
this.serverMoney = t.money;
this._playerData.money = t.money;
this.refreshPlayer();
if ((this.isSelf || this.isSelfBot()) && t.hasOwnProperty("energy")) {
this.energy = t.energy;
dispatch(h.fishCommonEvent.fishCommonEvent_server_updateEnergy, this.getuid());
}
}
};
e.prototype.updatePlayerBet = function(t) {
if (this._playerData && this._playerData.uid == t.uid) {
this.betIndex = t.betIndex;
this.betMoney = this.betValues[this.betIndex];
this.refreshPlayer();
}
};
e.prototype.setWeaponMode = function(t) {
if (this._playerData && this._playerData.uid == t.uid) {
t.lock ? this.weaponType = t.lock : this.weaponType = 0;
0 == this.weaponType ? this.isAutoLockMode = !1 : 1 == this.weaponType && (this.isAutoFishing || (this.isAutoLockMode = !0));
this.auto.active = 1 == this.weaponType;
this.normal.active = 0 == this.weaponType;
this.torpedo.active = 2 == this.weaponType;
this.auotLightParent.active = !1;
this.lockedFish = null;
this.lockedType = -1;
this.lockedFishId = "";
this.auotLockLight.active = !1;
this.lockNode.active = !1;
this.auotLockLight.setParent(l.default.instance.effectRoot);
this.refreshPlayer();
this.stopFire1_Loop();
}
};
e.prototype.update = function(t) {
if (this._playerData) {
this.updateCheckRewardFish();
this.curShootTime += t;
if (this.isAutoLockMode) if (this.lockedFish) this.updateAutoFire(); else {
if (this.isSelf) {
if (-1 != this.lockedType) {
var e = p.default.instance.getEnableViewTypeFish(this.lockedType);
(n = p.default.instance.getMinDisByFish(e, App.utils.localConvertWorldPointAR(this.node))) && dispatch(h.fishCommonEvent.fishCommonEvent_send_lockFish, {
fid: n.id,
uid: u.default.self_uid
});
}
} else if ("" != this.lockedFishId && (n = p.default.instance.getRenderFish(this.lockedFishId))) {
this.lockedFish = n;
this.curShootTime = 0;
this.changeLockFish = !0;
}
this.auotLightuv.height = 0;
this.auotLightuv.active = !1;
this.auotLockLight.active = !1;
} else if (this.isAutoFishing) if (this.lockedFish) this.updateAutoFishingFire(); else {
if (this.isSelf || this.isSelfBot()) {
if (this.autoTypes && this.autoTypes.length > 0) {
var o = p.default.instance.getEnableViewByLockTypes(this.autoTypes);
if (n = p.default.instance.getMinDisByFish(o, App.utils.localConvertWorldPointAR(this.node))) {
var i = u.default.self_uid;
this.isSelfBot() && (i = this._playerData.uid);
dispatch(h.fishCommonEvent.fishCommonEvent_send_lockFish, {
fid: n.id,
uid: i
});
}
}
} else if ("" != this.lockedFishId) {
var n;
if (n = p.default.instance.getRenderFish(this.lockedFishId)) {
this.lockedFish = n;
this.curShootTime = 0;
this.changeLockFish = !0;
}
}
this.auotLightuv.height = 0;
this.auotLightuv.active = !1;
this.auotLockLight.active = !1;
}
}
};
e.prototype.setLockedFish = function(t) {
var e = this;
if (this._playerData && this._playerData.uid == t.uid) if ("" != t.fid) {
this.lockedFishId = t.fid;
var o = p.default.instance.getRenderFish(this.lockedFishId);
if (o) {
this.lockedFish = o;
this.lockedType = o.type;
this.curShootTime = 0;
this.changeLockFish = !0;
if (this.isSelf && 1 == this.weaponType) {
App.globalAudio.playBundleEffect("audios/fire1", v.Macro.BUNDLE_Fishing1);
-1 == this.fire1_loop_id && App.globalAudio.playBundleEffect("audios/fire1_loop", v.Macro.BUNDLE_Fishing1, !0).then(function(t) {
e.fire1_loop_id = t;
});
}
}
} else this.cancelLockFish();
};
e.prototype.stopFire1_Loop = function() {
if (-1 != this.fire1_loop_id) {
App.globalAudio.stopEffect(this.fire1_loop_id);
this.fire1_loop_id = -1;
}
};
e.prototype.initLockedFish = function(t) {
if ("" != t.lockFish) {
this.lockedFishId = t.lockFish;
var e = p.default.instance.getRenderFish(this.lockedFishId);
if (e) {
this.lockedFish = e;
this.curShootTime = 0;
this.changeLockFish = !0;
}
}
};
e.prototype.updateAutoFire = function() {
if (this.lockedFish.isInViewPort()) {
var t = this.lockedFish.getLockPointWorldPos();
if (this.isSelf) {
this.lockNode.active = !0;
this.lockNode.position = t;
}
switch (this.weaponType) {
case 1:
this.updateLaser(t);
break;

case 2:
this.updateTorpedo(t);
}
} else {
this.lockedFish = null;
this.auotLockLight.active = !1;
this.isSelf && (this.lockNode.active = !1);
this.stopFire1_Loop();
}
};
e.prototype.updateAutoFishingFire = function() {
if (this.lockedFish.isInViewPort()) {
var t = this.lockedFish.getLockPointWorldPos();
if (this.isSelf) {
this.lockNode.active = !0;
this.lockNode.position = t;
}
if (this.directionalShoot && 0 == this.weaponType) this.updateNormalFire(t); else switch (this.weaponType) {
case 1:
this.updateLaser(t);
break;

case 2:
this.updateTorpedo(t);
}
} else {
this.lockedFish = null;
this.auotLockLight.active = !1;
this.isSelf && (this.lockNode.active = !1);
this.stopFire1_Loop();
}
};
e.prototype.cancelLockFish = function() {
this.lockedFish = null;
this.lockedType = -1;
this.lockedFishId = "";
this.lockNode.active = !1;
this.stopFire1_Loop();
};
e.prototype.updateLaser = function(t) {
this.auotLightParent.active = !0;
var e = this.auotLightuvanchor, o = l.default.instance.effectRoot, i = App.utils.localConvertlocalPointAR_Vec3(e, o), n = t.sub(i).normalize(), s = t.sub(i).mag();
this.anchor.angle = c.CmmUtils.dir2Angle(n);
this.auotLightuv.height = s - 143;
this.auotLightuv.active = !0;
this.auotLockLight.active = !0;
this.auotLockLight.position = t;
if (this.changeLockFish) {
var r = this.auotLightParent.getComponent(cc.Animation), a = this.auotLockLight.getComponent(cc.Animation);
r.play(null, 0);
a.play(null, 0);
this.changeLockFish = !1;
}
if ((this.isSelf || this.isSelfBot()) && this.curShootTime >= u.default.normalIntervalTime) {
if (!this.haveEnoughCutBetMoneyandBet()) {
this.isSelfBot() || App.tips.show(App.zLan.getString(10231));
dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
return;
}
this.laserCount++;
this.lockedFish.beAttacked();
this.isSelfBot() ? this.sender.send_laser_hit_fish(this.lockedFish.id, this.getuid()) : this.sender.send_laser_hit_fish(this.lockedFish.id);
this.curShootTime = 0;
if (this.isAutoFishing && -1 != this.autoFishingCount) {
this.autoFishingCount--;
this.autoFishingCount <= 0 && dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
}
}
};
e.prototype.updateTorpedo = function(t) {
if (this.curShootTime >= u.default.torpedoIntervalTime) {
this.shoot2server(t, 2, this.lockedFish.id);
this.curShootTime = 0;
if (this.isAutoFishing && -1 != this.autoFishingCount) {
this.autoFishingCount--;
this.autoFishingCount <= 0 && dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
}
}
};
e.prototype.updateNormalFire = function(t) {
if (this.curShootTime >= u.default.normalIntervalTime) {
this.shoot2server(t, 0, this.lockedFish.id);
this.curShootTime = 0;
if (this.isAutoFishing && -1 != this.autoFishingCount) {
this.autoFishingCount--;
this.autoFishingCount <= 0 && dispatch(h.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.getuid());
}
}
};
e.prototype.getuid = function() {
return this._playerData ? this._playerData.uid : null;
};
e.prototype.showEnergyRewardCicle = function(t) {
return r(this, void 0, void 0, function() {
return a(this, function() {
if (t.uid == this.getuid()) {
App.globalAudio.playBundleEffect("audios/energy2", v.Macro.BUNDLE_Fishing1);
this.energyReward.showReward(t);
this.updateMoneyPoolByNoCirecle(t);
}
return [ 2 ];
});
});
};
e.prototype.showRewardCicle = function(t) {
return r(this, void 0, void 0, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
if (t.uid != this.getuid()) return [ 3, 2 ];
b.default.showCoin2(t.startPos, t.uid);
return [ 4, c.CmmUtils.awaitTime(500) ];

case 1:
e.sent();
this.rewardList.push(t);
e.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.getEmpryRewardCicle = function() {
for (var t = 0; t < this.cicleRewards.length; t++) if (this.cicleRewards[t].isEmpry()) return this.cicleRewards[t];
return null;
};
e.prototype.getEmptyRewardCiclePos = function() {
var t = this.getEmpryRewardCicle();
return t ? t.getWorldPos() : this.cicleRewards[1].getWorldPos();
};
e.prototype.updateCheckRewardFish = function() {
this.testMoneys[2].string = "rewardList:" + this.rewardList.length;
if (0 != this.rewardList.length) {
var t = this.getEmpryRewardCicle();
if (t) {
var e = this.rewardList.pop();
t.showReward(e);
this.updateMoneyPool(e.win);
}
}
};
e.prototype.updateMoneyPool = function(t) {
this.refreshPlayer();
b.default.showAddScore(App.utils.localConvertWorldPointAR(this.addscorePoint), t, this.isSelf);
};
e.prototype.updateMoneyPoolByNoCirecle = function(t) {
if (t.uid == this.getuid()) {
this.refreshPlayer();
b.default.showAddScore(App.utils.localConvertWorldPointAR(this.addscorePoint), t.win, this.isSelf);
}
};
e.prototype.updateMoneyBackMoney = function(t) {
if (t.uid == this.getuid()) {
this.serverMoney = t.money;
this._playerData.money = t.money;
this.refreshPlayer();
b.default.showAddScore(App.utils.localConvertWorldPointAR(this.addscorePoint), t.bet, this.isSelf);
}
};
e.prototype.errorAddMoney = function() {
this._playerData && this._playerData.money > this.serverMoney && (this._playerData.money = this.serverMoney);
};
e.prototype.updateServerMoney = function(t) {
if (t.uid == this.getuid()) {
this.serverMoney = t.money;
this._playerData.money = t.money;
this.refreshPlayer();
}
};
e.prototype.lateUpdate = function() {
this.testMoneys[0].string = "本地钱:" + c.CmmUtils.NumberToGameString_Keep2(this._playerData ? this._playerData.money : 0);
this.testMoneys[2].string = "服务器钱:" + c.CmmUtils.NumberToGameString_Keep2(this.serverMoney);
this.botData ? this.testMoneys[3].string = this.botData.bindId : this.testMoneys[3].string = "";
this._playerData;
};
e.prototype.isEnableAutoUseElectric = function() {
return !(!this.isAutoFishing || !this.useElectric);
};
e.prototype.autoFishing = function(t) {
if (this.isSelf || this.isSelfBot()) {
this.autoWeapon = 1;
if (t.autoTypes.length > 0) {
this.isAutoFishing = !0;
this.isAutoLockMode = !1;
this.autoTypes = t.autoTypes.reverse();
}
t.useTorpedo && (this.autoWeapon = 2);
t.totalShots ? this.autoFishingCount = t.totoalCount : this.autoFishingCount = -1;
this.directionalShoot = t.directionalShoot;
this.directionalShoot && (this.autoWeapon = 0);
this.useElectric = t.useElectric;
this.odds25 = t.odds25;
this.isSelfBot() ? dispatch(g.Fishing1Event.Fishing1ServerEvent_audoFishingUpdateUI, this.getuid()) : dispatch(g.Fishing1Event.Fishing1ServerEvent_audoFishingUpdateUI);
}
};
e.prototype.setAutoFishingWeapon = function(t) {
1 == t && this.directionalShoot && (t = 0);
this.autoWeapon = t;
this.changeAutoWeapon();
};
e.prototype.changeAutoWeapon = function() {
if (this.autoWeapon != this.weaponType) {
var t = {};
t.uid = this.getuid();
t.lock = this.autoWeapon;
this.setWeaponMode(t);
this.isSelfBot() ? this.sender.send_changeLock(this.autoWeapon, this.getuid()) : this.sender.send_changeLock(this.autoWeapon);
}
};
e.prototype.haveEnoughCutBetMoneyandBet = function() {
if (this._playerData && this._playerData.money >= this.betMoney) {
this._playerData.money = this._playerData.money - this.betMoney;
this.refreshPlayer();
return !0;
}
return !1;
};
e.prototype.haveEnoughCutBetMoney = function() {
return !!(this._playerData && this._playerData.money >= this.betMoney);
};
e.prototype.getLocalMoney = function() {
return this._playerData.money;
};
e.prototype.getServerMoney = function() {
return this.serverMoney;
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
this.stopFire1_Loop();
};
s([ F(cc.Label) ], e.prototype, "testMoneys", void 0);
s([ F(cc.SpriteFrame) ], e.prototype, "cannonsSpriteFrame", void 0);
s([ F(cc.Sprite) ], e.prototype, "cannon", void 0);
s([ F(cc.Node) ], e.prototype, "root", void 0);
s([ F(cc.Animation) ], e.prototype, "fireAnimation", void 0);
s([ F(cc.Node) ], e.prototype, "waitNode", void 0);
s([ F(cc.Node) ], e.prototype, "anchor", void 0);
s([ F(cc.Node) ], e.prototype, "pointNode", void 0);
s([ F(cc.Button) ], e.prototype, "addBtn", void 0);
s([ F(cc.Button) ], e.prototype, "subBtn", void 0);
s([ F(cc.Node) ], e.prototype, "addDisable", void 0);
s([ F(cc.Node) ], e.prototype, "subDisable", void 0);
s([ F(cc.Label) ], e.prototype, "playerName", void 0);
s([ F(cc.Label) ], e.prototype, "betValue", void 0);
s([ F(cc.Label) ], e.prototype, "coinValue", void 0);
s([ F(cc.Node) ], e.prototype, "coinNode", void 0);
s([ F(cc.Node) ], e.prototype, "normal", void 0);
s([ F(cc.Node) ], e.prototype, "auto", void 0);
s([ F(cc.Node) ], e.prototype, "auotLightuv", void 0);
s([ F(cc.Node) ], e.prototype, "auotLightuvanchor", void 0);
s([ F(cc.Node) ], e.prototype, "auotLockLight", void 0);
s([ F(cc.Node) ], e.prototype, "auotLightParent", void 0);
s([ F(cc.Node) ], e.prototype, "torpedo", void 0);
return s([ E ], e);
}(d.default);
o.default = k;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/fishframework/scripts/FishEvent": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../game/energyCicleReward": "energyCicleReward",
"../game/fish1Tools": "fish1Tools",
"../game/fishCicleReward": "fishCicleReward",
"../net/Fishing1Event": "Fishing1Event"
} ],
Fishing1Cmd: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1c569nPuGdP5JUinC2pKV2i", "Fishing1Cmd");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SUB_CMD_DT = void 0;
o.SUB_CMD_DT = {
GM_LOGIN_REQUEST: 6e3,
SM_LOGIN_RETURN: 6001,
FISH_LEVEL_DATA: 20001,
FISH_SYNC_TIME: 20002,
FISH_ADD_FISH: 20004,
FISH_HIT: 20005,
FISH_HIT_RETURN: 6007,
FISH_CHANGE_BET: 20006,
FISH_UNFORZEN: 20007,
Fish_LOCK: 20008,
Fish_LOCK_FishType: 20009,
Fish_Hit_Fishes: 20010,
SM_TABLEINFO_RETURN: 6002,
SM_LOGOUT_SUCC_BC_RETURN: 6005,
GM_LOGINOUT_REQUEST: 6006,
GM_HISTORY_RECORD_REQUSET: 6010,
SM_HISTORY_RECORD_RETURN: 6011,
GM_BET_REQUEST: 6012,
SM_BET_RETURN: 6013,
SM_PER_SECOND_BET_INFO: 6015,
SM_NOTIFY_BET: 6016,
SM_NOTIFY_START: 1e4,
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
Fishing1Entry: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2dda0P86wpKl5GzauE+2q8M", "Fishing1Entry");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../scripts/framework/core/entry/Entry"), a = t("../../../scripts/framework/defines/Macros"), c = t("../../../scripts/framework/defines/Decorators"), l = t("./view/Fishing1View"), h = t("../../../scripts/fishframework/scripts/PathManager");
(function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadResources = function(t) {
t();
};
e.prototype.initData = function() {
h.PathManager.init(a.Macro.BUNDLE_Fishing1);
};
e = s([ c.registerEntry("Fishing1Entry", a.Macro.BUNDLE_Fishing1, l.default) ], e);
})(r.Entry);
cc._RF.pop();
}, {
"../../../scripts/fishframework/scripts/PathManager": void 0,
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/Fishing1View": "Fishing1View"
} ],
Fishing1Event: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3f43fPTrHZHVqDNRV4CI1Uv", "Fishing1Event");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.Fishing1Event = void 0;
(function(t) {
t.Fishing1ServerEvent = "Fishing1ServerEvent__";
t.Fishing1ServerEvent_sendEnergyType = "Fishing1ServerEvent_sendEnergyType__";
t.Fishing1ServerEvent_audoFishing = "Fishing1ServerEvent_audoFishing__";
t.Fishing1ServerEvent_audoFishingUpdateUI = "Fishing1ServerEvent_audoFishingUpdateUI__";
t.Fishing1ServerEvent_updateBetMoney = "Fishing1ServerEvent_updateBetMoney__";
})(o.Fishing1Event || (o.Fishing1Event = {}));
cc._RF.pop();
}, {} ],
Fishing1Handler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38645pOplhLjpUBCsYwsD6P", "Fishing1Handler");
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
}), s = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, r = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../scripts/framework/core/net/service/Handler"), c = t("../../../../scripts/common/net/GetCmdKey"), l = t("../../../../scripts/common/net/CommonGameJson"), h = t("../../../../scripts/framework/defines/Macros"), f = t("../../../../scripts/common/utils/CmmUtils"), p = t("../../../../scripts/common/net/CmdDefines"), u = t("./Fishing1Cmd"), d = t("./Fishing1Service"), m = t("./Fishing1Sender"), y = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), v = t("../../../../scripts/sdk/AppInfo"), g = t("../../../../scripts/common/config/ConstString"), _ = t("../../../../scripts/common/utils/RandomUtil"), b = t("../../../../scripts/fishframework/scripts/fishFactory"), C = t("../../../../scripts/fishframework/scripts/bulletFactory"), w = t("../../../../scripts/common/event/CommonEvent"), E = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.onceEnter = !0;
return e;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(d.Fishing1Service);
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, p.SUB_CMD_SYS.CMD_Game_Time_Out), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.SERVER_GAME_HEART), this.server_game_heart, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.SM_LOGIN_RETURN), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_LEVEL_DATA), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_SYNC_TIME), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_ADD_FISH), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.SM_SIT_DOWN_BC), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.SM_STAND_UP_BC), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.SM_BET_RETURN), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_HIT_RETURN), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_CHANGE_BET), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.FISH_UNFORZEN), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.Fish_LOCK), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.Fish_LOCK_FishType), this.commfunction, l.CommonGameJson);
this.onS(c.GetCmdKey(p.MainCmd.CMD_GAME, u.SUB_CMD_DT.Fish_Hit_Fishes), this.commfunction, l.CommonGameJson);
};
e.prototype.server_game_heart = function() {};
e.prototype.commfunction = function(t) {
return s(this, void 0, void 0, function() {
var e, o, i;
return r(this, function(n) {
switch (n.label) {
case 0:
if (!this.onceEnter) return [ 2 ];
if (!v.default.isTestChannel()) return [ 3, 2 ];
if (!App.storage.getItem(g.ConstString.testCheatHideBg2, !1)) return [ 3, 2 ];
e = App.storage.getItem(g.ConstString.testCheatHideBg2_time, 1);
o = App.storage.getItem(g.ConstString.testCheatHideBg2_timeProgress, 0);
return [ 4, f.CmmUtils.awaitTime(_.RandomUtil.randomFRange(.1, e) * o * 1e3) ];

case 1:
n.sent();
n.label = 2;

case 2:
switch (t.subCmd) {
case p.SUB_CMD_SYS.CMD_Game_Time_Out:
if (70004 == t.data.ret) {
if (this.onceEnter) {
(i = App.senderManager.get(m.Fishing1Sender)).logout();
dispatch(w.CommonEvent.offgame_close);
b.default.instance.clearFactory();
C.default.instance.clearFactory();
f.CmmUtils.popRet1(t.data, i);
this.onceEnter = !1;
}
} else {
i = App.senderManager.get(m.Fishing1Sender);
f.CmmUtils.popRet1(t.data, i);
}
break;

case u.SUB_CMD_DT.SM_LOGIN_RETURN:
dispatch(y.fishCommonEvent.fishCommonEvent_serverLoginReturn, t.data);
break;

case u.SUB_CMD_DT.FISH_LEVEL_DATA:
dispatch(y.fishCommonEvent.fishCommonEvent_serverLevelNew, t.data);
break;

case u.SUB_CMD_DT.FISH_ADD_FISH:
dispatch(y.fishCommonEvent.fishCommonEvent_serverAddFish, t.data);
break;

case u.SUB_CMD_DT.FISH_SYNC_TIME:
dispatch(y.fishCommonEvent.fishCommonEvent_sync_time, t.data);
break;

case u.SUB_CMD_DT.SM_SIT_DOWN_BC:
dispatch(y.fishCommonEvent.fishCommonEvent_player_join, t.data);
break;

case u.SUB_CMD_DT.SM_STAND_UP_BC:
dispatch(y.fishCommonEvent.fishCommonEvent_player_leave, t.data);
break;

case u.SUB_CMD_DT.SM_BET_RETURN:
dispatch(y.fishCommonEvent.fishCommonEvent_server_shoot, t.data);
break;

case u.SUB_CMD_DT.FISH_HIT_RETURN:
dispatch(y.fishCommonEvent.fishCommonEvent_server_hitFish, t.data);
break;

case u.SUB_CMD_DT.FISH_CHANGE_BET:
dispatch(y.fishCommonEvent.fishCommonEvent_server_changebet, t.data);
break;

case u.SUB_CMD_DT.FISH_UNFORZEN:
dispatch(y.fishCommonEvent.fishCommonEvent_server_unforzen, t.data);
break;

case u.SUB_CMD_DT.Fish_LOCK:
dispatch(y.fishCommonEvent.fishCommonEvent_server_lockchange, t.data);
break;

case u.SUB_CMD_DT.Fish_LOCK_FishType:
dispatch(y.fishCommonEvent.fishCommonEvent_server_lockFishType, t.data);
break;

case u.SUB_CMD_DT.Fish_Hit_Fishes:
dispatch(y.fishCommonEvent.fishCommonEvent_server_hitFishes, t.data);
}
return [ 2 ];
}
});
});
};
e.module = h.Macro.BUNDLE_Fishing1;
return e;
}(a.Handler);
o.default = E;
cc._RF.pop();
}, {
"../../../../scripts/common/config/ConstString": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/GetCmdKey": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/framework/core/net/service/Handler": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/AppInfo": void 0,
"./Fishing1Cmd": "Fishing1Cmd",
"./Fishing1Sender": "Fishing1Sender",
"./Fishing1Service": "Fishing1Service"
} ],
Fishing1Nodes: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eb48dm6y+tHOoOfzXakiF48", "Fishing1Nodes");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../common/FishPlayer"), a = t("../game/fishing1BossComming"), c = t("./AutoFishingPanel"), l = t("./FishingSurePanel"), h = cc._decorator, f = h.ccclass, p = h.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.players = [];
e.surePanel = null;
e.autoFishingPanel = null;
e.bossComming = null;
e.initLoading = null;
return e;
}
e.prototype.onLoad = function() {
this.players = this.node.getComponentsInChildren(r.default);
};
e.prototype.start = function() {};
e.prototype.getSelfPlayer = function() {
for (var t = 0; t < this.players.length; t++) if (this.players[t].isSelf) return this.players[t];
return null;
};
e.prototype.getPlayerByUID = function(t) {
for (var e = 0; e < this.players.length; e++) if (this.players[e].getuid() == t) return this.players[e];
return null;
};
e.prototype.updateFishPlayerMoney = function(t) {
this.players.forEach(function(e) {
e.updatePlayerMoney(t);
});
};
e.prototype.updateFishPlayerBet = function(t) {
this.players.forEach(function(e) {
e.updatePlayerBet(t);
});
};
e.prototype.showFishRewardCicle = function(t) {
if (t.isEnergy) for (var e = 0; e < this.players.length; e++) this.players[e].showEnergyRewardCicle(t); else for (e = 0; e < this.players.length; e++) this.players[e].showRewardCicle(t);
};
e.prototype.updateMoneyPool = function(t) {
for (var e = 0; e < this.players.length; e++) this.players[e].updateMoneyPoolByNoCirecle(t);
};
e.prototype.updateBackMoney = function(t) {
for (var e = 0; e < this.players.length; e++) this.players[e].updateMoneyBackMoney(t);
};
e.prototype.updateServerMoney = function(t) {
for (var e = 0; e < this.players.length; e++) this.players[e].updateServerMoney(t);
};
s([ p(l.default) ], e.prototype, "surePanel", void 0);
s([ p(c.default) ], e.prototype, "autoFishingPanel", void 0);
s([ p(a.default) ], e.prototype, "bossComming", void 0);
s([ p(cc.Node) ], e.prototype, "initLoading", void 0);
return s([ f ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../common/FishPlayer": "FishPlayer",
"../game/fishing1BossComming": "fishing1BossComming",
"./AutoFishingPanel": "AutoFishingPanel",
"./FishingSurePanel": "FishingSurePanel"
} ],
Fishing1Sender: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f56acMhLL1FWaSGGSwF3qI7", "Fishing1Sender");
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
o.Fishing1Sender = void 0;
var s = t("../../../../scripts/common/net/CommonGameJson"), r = t("../../../../scripts/common/net/HttpSender"), a = t("../../../../scripts/framework/defines/Macros"), c = t("./Fishing1Cmd"), l = t("./Fishing1Service"), h = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "service", {
get: function() {
return App.serviceManager.get(l.Fishing1Service);
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
var t = new s.CommonGameJson();
t.subCmd = c.SUB_CMD_DT.GM_LOGIN_REQUEST;
this.send(t);
};
e.prototype.logout = function() {
var t = new s.CommonGameJson();
t.subCmd = c.SUB_CMD_DT.GM_LOGINOUT_REQUEST;
this.send(t);
};
e.prototype.send_online_player = function(t) {
void 0 === t && (t = 1);
var e = new s.CommonGameJson();
e.subCmd = c.SUB_CMD_DT.GM_PLAYERS_INFO_REQUEST;
e.data.page = t;
this.send(e);
};
e.prototype.send_history = function() {
var t = new s.CommonGameJson();
t.subCmd = c.SUB_CMD_DT.GM_HISTORY_RECORD_REQUSET;
this.send(t);
};
e.prototype.send_change_bet = function(t) {
var e = new s.CommonGameJson();
e.subCmd = c.SUB_CMD_DT.FISH_CHANGE_BET;
e.data.betIndex = t;
this.send(e);
};
e.prototype.send_shoot = function(t, e, o, i, n, r) {
var a = new s.CommonGameJson();
a.subCmd = c.SUB_CMD_DT.GM_BET_REQUEST;
a.data.bet = t;
a.data.x = e.x;
a.data.y = e.y;
a.data.bid = o;
a.data.fid = n;
a.data.type = i;
r && (a.data.bot = r);
this.send(a);
};
e.prototype.send_lock_fish_type = function(t, e) {
var o = new s.CommonGameJson();
o.subCmd = c.SUB_CMD_DT.Fish_LOCK_FishType;
o.data.fid = t;
e && (o.data.bot = e);
this.send(o);
};
e.prototype.send_forzen_shoot = function(t) {
var e = new s.CommonGameJson();
e.subCmd = c.SUB_CMD_DT.GM_BET_REQUEST;
e.data.type = 2001;
t && (e.data.bot = t);
this.send(e);
};
e.prototype.send_changeLock = function(t, e) {
var o = new s.CommonGameJson();
o.subCmd = c.SUB_CMD_DT.Fish_LOCK;
o.data.lock = t;
e && (o.data.bot = e);
this.send(o);
};
e.prototype.send_hit_fish = function(t, e, o) {
var i = new s.CommonGameJson();
i.subCmd = c.SUB_CMD_DT.FISH_HIT;
i.data.bid = t;
i.data.fid = e;
o && (i.data.bot = o);
this.send(i);
};
e.prototype.send_hit_fishes = function(t, e, o, i, n) {
var r = new s.CommonGameJson();
r.subCmd = c.SUB_CMD_DT.Fish_Hit_Fishes;
r.data.fids = t;
r.data.type = e;
r.data.byfid = o;
r.data.lockfids = i;
n && (r.data.bot = n);
this.send(r);
};
e.prototype.send_laser_hit_fish = function(t, e) {
var o = new s.CommonGameJson();
o.subCmd = c.SUB_CMD_DT.FISH_HIT;
o.data.fid = t;
e && (o.data.bot = e);
this.send(o);
};
e.module = a.Macro.BUNDLE_Fishing1;
return e;
}(r.default);
o.Fishing1Sender = h;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/HttpSender": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./Fishing1Cmd": "Fishing1Cmd",
"./Fishing1Service": "Fishing1Service"
} ],
Fishing1Service: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6d818z7XZxGG7sKZm0MZrNl", "Fishing1Service");
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
o.Fishing1Service = void 0;
var s = t("../../../../scripts/common/config/Config"), r = t("../../../../scripts/common/net/CommonService"), a = t("../../../../scripts/framework/defines/Macros"), c = t("../../../../scripts/sdk/GameNativeConfig"), l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.priority = s.NetPriority.Game;
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
e.module = a.Macro.BUNDLE_Fishing1;
return e;
}(r.CommonService);
o.Fishing1Service = l;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/net/CommonService": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
Fishing1View: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a4324MDiy9Hs7qerEJNRfjV", "Fishing1View");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/config/Config"), l = t("../../../../scripts/common/config/GlobalVar"), h = t("../../../../scripts/common/event/CommonEvent"), f = t("../../../../scripts/common/net/GameSender"), p = t("../../../../scripts/common/protocol/HeartbetJson"), u = t("../../../../scripts/fishframework/scripts/bulletFactory"), d = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), m = t("../../../../scripts/fishframework/scripts/fishFactory"), y = t("../../../../scripts/framework/core/ui/GameView"), v = t("../../../../scripts/sdk/GameNativeConfig"), g = t("../game/fishing1Manager"), _ = t("../net/Fishing1Handler"), b = t("../net/Fishing1Sender"), C = t("../net/Fishing1Service"), w = t("./Fishing1Nodes"), E = t("../../../../scripts/fishframework/scripts/fishTouchManager"), F = t("../../../../scripts/framework/defines/Enums"), k = t("../net/Fishing1Event"), S = t("../../../../scripts/framework/defines/Macros"), M = t("../../../../scripts/fishframework/scripts/collision/fishCollisionMgr"), P = t("../game/fish1Tools"), B = t("../../../../scripts/common/utils/CmmUtils"), A = cc._decorator, R = A.ccclass, T = (A.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.fish_nodes = null;
e.backgroundNumber = 0;
e.fishing1Mgr = null;
e.touchManager = null;
e.curLevelCfg = null;
e.forzenBtn = null;
e.forzenValue = null;
e.forzenCD = null;
e.lockBtn = null;
e.torpedoBtn = null;
e.torpedoBtnValueBg = null;
e.torpedoBtnValue = null;
e.autoSetBtn = null;
e.lockSelected = null;
e.torpedoSelected = null;
e.autoSetSelected = null;
e.energyBtn = null;
e.energyProgress = null;
e.energyUv1 = null;
e.frozenEffect = null;
e.coinNode = null;
e.coinNode2 = null;
e.lockNode = null;
e.goldBoom = null;
e.fishRewardData = null;
e.sender = App.senderManager.get(b.Fishing1Sender);
e.gameSender = App.senderManager.get(f.default);
e.zidan = 0;
e.isPlayingForzenEffect = !1;
e.soundPre = "audios/";
return e;
}
e.getPrefabUrl = function() {
return "prefabs/Fishing1View";
};
e.prototype.bindingNetServer = function() {
this.server = App.serviceManager.get(C.Fishing1Service, !0);
this.sender = App.senderManager.get(b.Fishing1Sender);
App.handlerManager.get(_.default).onceEnter = !0;
var t = l.GlobalVar.host.split(":"), e = t[1].replace("//", ""), o = t[2], i = t[0];
this.server.initIP_PORT(e, o, i);
this.server.heartbeat = p.HeartbeatJson;
this.server.maxEnterBackgroundTime = 5;
this.sender.reconnect();
};
e.prototype.removeNetServer = function() {
App.senderManager.destory(b.Fishing1Sender);
App.handlerManager.destory(_.default);
App.serviceManager.destory(C.Fishing1Service);
this.offD(v.default.Event.game_close);
this.offD(h.ComponentGameEvent.Game_Exit_Event);
};
e.prototype.OffGameClose = function() {
this.offD(v.default.Event.game_close);
};
e.prototype.addEvents = function() {
this.onN(this.forzenBtn, F.NodeEvent.click, this.senderForzenShoot.bind(this));
this.onN(this.lockBtn, F.NodeEvent.click, this.senderLockMode.bind(this));
this.onN(this.torpedoBtn, F.NodeEvent.click, this.senderTorpedoMode.bind(this));
this.onN(this.autoSetBtn, F.NodeEvent.click, this.openAutoSetPanel.bind(this));
this.onN(this.energyBtn, F.NodeEvent.click, this.senderEnergyPower.bind(this));
this.onD(v.default.Event.game_open, this.openReconn);
this.onD(v.default.Event.game_close, this.onClosed);
this.onD(h.CommonEvent.offgame_close, this.OffGameClose.bind(this));
this.onD(h.ComponentGameEvent.Game_Exit_Event, this.onClickExit);
this.onD(d.fishCommonEvent.fishCommonEvent_send_lockFish, this.sendeLockFish.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_serverLevelNew, this.serverInitLevelCfg.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_serverAddFish, this.serverAddFish.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_serverLoginReturn, this.joinGameSuccess.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_player_join, this.joinPlayer.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_player_leave, this.leavePlayer.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_shoot, this.serverShoot.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_hitFish, this.serverHitFish.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_changebet, this.changeBet.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_unforzen, this.unForzen.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_lockchange, this.receiveLockMode.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_lockFishType, this.serverLockFishType.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_canel_lockFish, this.cancelSenderLockFish.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_hitFishes, this.serverHitFishes.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_server_updateEnergy, this.updateEnergy.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_collision_check, this.collision_check.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_fish_reward, this.show_fish_reward.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_cancel_autoFish, this.cancelAutoFishing.bind(this));
this.onD(k.Fishing1Event.Fishing1ServerEvent_audoFishingUpdateUI, this.refreshUISelected.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_play_sound, this.playSound.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_showGoldBoom, this.showGoldBoom.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_showCoin1, this.showCoin1.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_addscore2, this.addscore2.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_bosscoming, this.bosscoming.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_bossleave, this.bossleave.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_collectCoin1, this.collectCoin1.bind(this));
this.onD(d.fishCommonEvent.fishCommonEvent_collectCoin2, this.collectCoin2.bind(this));
this.onD(k.Fishing1Event.Fishing1ServerEvent_updateBetMoney, this.updateBetMoney.bind(this));
};
e.prototype.joinGameSuccess = function(t) {
E.default.self_BotMapUids.clear();
this.fishRewardData = new Map();
for (var e = 0, o = Object.entries(t.muls); e < o.length; e++) {
var i = o[e], n = i[0], s = i[1], r = Number(n);
Number.isInteger(r) && this.fishRewardData.set(r, s);
}
for (var a = 0; a < this.fish_nodes.players.length; a++) {
this.fish_nodes.players[a].initData(t, this.lockNode);
this.fish_nodes.players[a].exitGame();
}
this.forzenValue.string = B.CmmUtils.NumberToGameString_NoZero(t.bullets[0]);
var c = t.rich_players;
for (a = 0; a < c.length; a++) {
var l = c[a];
t.uid == l.uid && (E.default.self_uid = l.uid);
}
for (a = 0; a < c.length; a++) -1 != (l = c[a]).pos && this.fish_nodes.players[l.pos].joinGame(l, this.sender);
};
e.prototype.joinPlayer = function(t) {
this.fish_nodes.players[t.pos].joinGame(t, this.sender);
};
e.prototype.leavePlayer = function(t) {
for (var e = 0; e < this.fish_nodes.players.length; e++) this.fish_nodes.players[e].exitByID(t);
};
e.prototype.serverInitLevelCfg = function(t) {
this.fishing1Mgr.initLevelCfg(t);
if (1 == t.frozen) {
m.default.instance.forceReachedTime(t.curTime);
m.default.instance.forzenFish();
} else m.default.instance.unforzenFish();
this.fish_nodes.initLoading.active = !1;
};
e.prototype.serverAddFish = function() {};
e.prototype.serverShoot = function(t) {
switch (t.type) {
case 0:
case 2:
this.normalBulletShoot(t);
break;

case 2001:
this.fish_nodes.updateServerMoney(t);
m.default.instance.forceReachedTime(t.curTime);
m.default.instance.forzenFish();
this.ForzenEffect(!0);
this.updateForzenCd(t.uid);
}
};
e.prototype.updateForzenCd = function(t) {
var e = this;
if (E.default.isSelf(t)) {
this.forzenCD.node.active = !0;
this.forzenCD.fillRange = 1;
cc.tween(this.forzenCD).to(10, {
fillRange: 0
}).call(function() {
return [ e.forzenCD.node.active = !1 ];
}).start();
}
};
e.prototype.unForzen = function() {
m.default.instance.unforzenFish();
this.ForzenEffect(!1);
};
e.prototype.ForzenEffect = function(t) {
return r(this, void 0, void 0, function() {
return a(this, function() {
if (t) {
if (!this.isPlayingForzenEffect) {
this.frozenEffect.node.active = !0;
this.frozenEffect.play("frozenOpen", 0);
this.isPlayingForzenEffect = !0;
this.playEffect("audios/forzen");
}
} else {
this.frozenEffect.node.active = !1;
this.isPlayingForzenEffect = !1;
}
return [ 2 ];
});
});
};
e.prototype.updateEnergy = function(t) {
var e = this.fish_nodes.getPlayerByUID(t);
if (e) if (e.isSelf) {
var o = e.getEnergyProgress();
this.energyProgress.fillRange = o;
this.energyUv1.active = o >= 1;
e.isEnableAutoUseElectric() && this.energyUv1.active && this.autoEnergyPower(e.odds25);
} else if (e.isSelfBot()) {
var i = (o = e.getEnergyProgress()) >= 1;
e.isEnableAutoUseElectric() && i && this.autoBotEnergyPower(e.odds25, t);
}
};
e.prototype.normalBulletShoot = function(t) {
this.fish_nodes.updateFishPlayerMoney(t);
var e = {};
e.dir = cc.v2(t.x, t.y);
e.uid = t.uid;
e.bid = t.bid;
e.fid = t.fid;
e.type = t.type;
e.isServer = !0;
for (var o = 0; o < this.fish_nodes.players.length; o++) this.fish_nodes.players[o].server2shoot(e);
};
e.prototype.serverHitFish = function(t) {
if (1 != t.betback) {
this.fish_nodes.updateFishPlayerMoney(t);
if (t.fid) {
this.updateFishServerData(t.fid, t.win, t.hit, t.uid, t.byfid, !0);
if (E.default.self_uid == t.uid) {
var e = m.default.instance.getRenderFish(t.fid);
if (e && 100 == e.curHitType) switch (e.type) {
case 1:
case 2:
case 3:
this.playEffect("audios/type1death");
break;

case 4:
case 5:
case 6:
case 7:
case 9:
this.playEffect("audios/type2death");
break;

case 8:
case 10:
case 11:
case 12:
case 13:
case 14:
case 15:
case 16:
this.playEffect("audios/type3death");
}
}
m.default.instance.destoryFishById(t.fid);
}
t.bid && this.scheduleOnce(function() {
u.default.instance.deleteBulletByBid(t.bid);
}, 1);
} else this.fish_nodes.updateBackMoney(t);
};
e.prototype.serverLockFishType = function(t) {
for (var e = 0; e < this.fish_nodes.players.length; e++) this.fish_nodes.players[e].setLockedFish(t);
};
e.prototype.cancelSenderLockFish = function() {
this.sender.send_lock_fish_type("");
this.fish_nodes.getSelfPlayer().cancelLockFish();
};
e.prototype.changeBet = function(t) {
this.fish_nodes.updateFishPlayerBet(t);
};
e.prototype.sendeLockFish = function(t) {
var e = this.fish_nodes.getPlayerByUID(t.uid);
if (e.haveEnoughCutBetMoney()) if (e.isAutoLockMode || e.isAutoFishing) {
e.isSelfBot() ? this.sender.send_lock_fish_type(t.fid, t.uid) : e.isSelf && this.sender.send_lock_fish_type(t.fid);
e.setLockedFish(t);
} else e.shootLockFish(t); else {
e.isSelfBot() || App.tips.show(App.zLan.getString(10231));
dispatch(d.fishCommonEvent.fishCommonEvent_cancel_autoFish, t.uid);
}
};
e.prototype.senderForzenShoot = function() {
var t = this;
this.playEffect("audios/uiclick");
this.fish_nodes.surePanel.show(function() {
m.default.instance.start && t.sender.send_forzen_shoot();
});
};
e.prototype.senderLockMode = function() {
this.playEffect("audios/uiclick");
var t = this.fish_nodes.getSelfPlayer(), e = t.weaponType, o = {};
o.uid = E.default.self_uid;
if (t.isAutoFishing) {
this.sender.send_changeLock(1);
t.isAutoLockMode = !0;
o.lock = 1;
t.isAutoFishing = !1;
} else switch (e) {
case 0:
this.sender.send_changeLock(1);
t.isAutoLockMode = !0;
o.lock = 1;
break;

case 1:
this.sender.send_changeLock(0);
o.lock = 0;
t.isAutoLockMode = !1;
break;

case 2:
t.isAutoLockMode = !t.isAutoLockMode;
o.lock = 2;
}
this.touchManager.setLockMode(0 != o.lock);
this.receiveLockMode(o);
this.refreshUISelected();
};
e.prototype.senderTorpedoMode = function() {
this.playEffect("audios/uiclick");
var t = this.fish_nodes.getSelfPlayer(), e = t.weaponType;
if (t.isAutoFishing) 2 == e ? t.setAutoFishingWeapon(1) : t.setAutoFishingWeapon(2); else {
var o = {};
o.uid = E.default.self_uid;
switch (e) {
case 0:
case 1:
o.lock = 2;
break;

case 2:
t.isAutoLockMode ? o.lock = 1 : o.lock = 0;
}
var i = 0 != o.lock;
this.touchManager.setLockMode(i);
this.sender.send_changeLock(o.lock);
this.receiveLockMode(o);
}
this.refreshUISelected();
};
e.prototype.openAutoSetPanel = function() {
var t = {};
t.uid = E.default.self_uid;
var e = this.fish_nodes.getSelfPlayer(), o = e.weaponType;
e.isAutoFishing = !1;
e.isAutoLockMode = !1;
e.cancelLockFish();
clearInterval(this.odds25Timer);
this.touchManager.setLockMode(!1);
if (0 != o) {
t.lock = 0;
this.sender.send_changeLock(0);
this.receiveLockMode(t);
}
this.refreshUISelected();
this.fish_nodes.autoFishingPanel.show(this.fishRewardData);
};
e.prototype.cancelAutoFishing = function(t) {
var e = {};
e.uid = t;
var o = this.fish_nodes.getPlayerByUID(t), i = o.weaponType;
o.isAutoFishing = !1;
o.isAutoLockMode = !1;
o.cancelLockFish();
o.isSelf && this.touchManager.setLockMode(!1);
if (0 != i) {
e.lock = 0;
o.isSelfBot() ? this.sender.send_changeLock(0, t) : this.sender.send_changeLock(0);
this.receiveLockMode(e);
}
this.refreshUISelected();
};
e.prototype.senderEnergyPower = function() {
this.playEffect("audios/uiclick");
var t = m.default.instance.getEnableViewFishIDS();
this.sender.send_hit_fishes(t, 2002);
};
e.prototype.autoEnergyPower = function(t) {
var e = this;
if (t) this.odds25Timer = setInterval(function() {
if (m.default.instance.isHave25OddsBelow()) {
var t = m.default.instance.getEnableViewFishIDS();
e.sender.send_hit_fishes(t, 2002);
clearInterval(e.odds25Timer);
}
}, 500); else {
var o = m.default.instance.getEnableViewFishIDS();
this.sender.send_hit_fishes(o, 2002);
}
};
e.prototype.autoBotEnergyPower = function(t, e) {
if (t) {
if (m.default.instance.isHave25OddsBelow()) {
var o = m.default.instance.getEnableViewFishIDS();
this.sender.send_hit_fishes(o, 2002, null, null, e);
}
} else {
o = m.default.instance.getEnableViewFishIDS();
this.sender.send_hit_fishes(o, 2002, null, null, e);
}
};
e.prototype.refreshUISelected = function(t) {
var e = this.fish_nodes.getSelfPlayer();
t && (e = this.fish_nodes.getPlayerByUID(t));
if (e.isAutoFishing) {
e.changeAutoWeapon();
e.isSelf && this.touchManager.setLockMode(!0);
}
if (e.isSelf) {
this.lockSelected.active = e.isAutoLockMode;
this.torpedoSelected.active = 2 == e.weaponType;
this.autoSetSelected.active = e.isAutoFishing;
this.torpedoBtnValueBg.active = this.torpedoSelected.active;
}
};
e.prototype.collision_check = function(t) {
var e = null;
switch (t.type) {
case 25:
e = m.default.instance.getEnableViewFishIDS();
t.uid ? this.sender.send_hit_fishes(e, 2003, t.fid, null, t.uid) : this.sender.send_hit_fishes(e, 2003, t.fid);
break;

case 27:
e = m.default.instance.getEnableViewFishIDS();
t.uid ? this.sender.send_hit_fishes(e, 2004, t.fid, null, t.uid) : this.sender.send_hit_fishes(e, 2004, t.fid);
break;

case 26:
var o = m.default.instance.getEnableViewRandom3FishIDS(), i = M.default.queryFishInRectsByFishes(o.fishes, t.width, t.height);
e = M.default.coverToStringFids(i);
t.uid ? this.sender.send_hit_fishes(e, 2005, t.fid, o.fids, t.uid) : this.sender.send_hit_fishes(e, 2005, t.fid, o.fids);
}
};
e.prototype.serverHitFishes = function(t) {
this.fish_nodes.updateFishPlayerMoney(t);
this.updateHitFishesWinMoney(t);
switch (t.type) {
case 2002:
this.energyPowerShoot(t);
break;

case 2003:
case 2004:
case 2005:
m.default.instance.destoryCorpseFishById(t);
}
};
e.prototype.updateHitFishesWinMoney = function(t) {
for (var e = t.fids, o = t.wins, i = t.hits, n = 0; n < e.length; n++) {
var s = e[n];
this.updateFishServerData(s, o[n], i[n], t.uid, t.byfid, !0, t.type);
}
};
e.prototype.updateFishServerData = function(t, e, o, i, n, s, r) {
var a = m.default.instance.getRenderFish(t);
if (a) {
a.setFishHitState(e, o, i, n, r);
return !1;
}
if (s) {
dispatch(d.fishCommonEvent.fishCommonEvent_fish_reward, {
showReward: !1,
uid: i,
win: e
});
return !0;
}
};
e.prototype.energyPowerShoot = function(t) {
for (var e = 0; e < this.fish_nodes.players.length; e++) this.fish_nodes.players[e].server2ShootEnergy(t);
};
e.prototype.receiveLockMode = function(t) {
for (var e = 0; e < this.fish_nodes.players.length; e++) this.fish_nodes.players[e].setWeaponMode(t);
};
e.prototype.show_fish_reward = function(t) {
t.showReward ? this.fish_nodes.showFishRewardCicle(t) : this.fish_nodes.updateMoneyPool(t);
};
e.prototype.playSound = function(t) {
App.globalAudio.playBundleMultipleEffect(this.soundPre + t, S.Macro.BUNDLE_Fishing1);
};
e.prototype.showGoldBoom = function(t) {
P.default.showGoldBoom(t);
};
e.prototype.showCoin1 = function(t) {
P.default.showCoin1(t.worldPos, t.type, t.uid);
};
e.prototype.addscore2 = function(t) {
P.default.showAddScore2(t.worldPos, t.win, t.uid);
};
e.prototype.bosscoming = function(t, e) {
this.playMusic("audios/bgm2");
if (e) {
this.playEffect("audios/bosscomming");
var o = this.fishRewardData.get(t);
if (o) {
var i = "x" + o[0];
o.length > 1 && (i += " - x" + o[1]);
this.fish_nodes.bossComming.showBossComming(t, i);
}
}
};
e.prototype.bossleave = function() {
this.playMusic("audios/bgm");
};
e.prototype.collectCoin1 = function(t) {
P.default.collectCoin1(t);
};
e.prototype.collectCoin2 = function(t) {
P.default.collectCoin2(t);
};
e.prototype.updateBetMoney = function(t) {
this.torpedoBtnValue.string = B.CmmUtils.NumberToGameString_NoZero(t);
};
e.prototype.openReconn = function() {
return r(this, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.fishing1Mgr.initResources() ];

case 1:
t.sent();
this.sender.login();
return [ 2 ];
}
});
});
};
e.prototype.onClickExit = function() {
var t = this;
App.alert.show({
confirmCb: function() {
t.doExitGame();
},
cancelCb: function() {},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: App.zLan.getString(1015),
hideX: !0
});
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
e.prototype.doExitGame = function() {
this._isLogout = !0;
this.sender.logout();
this.sender.close();
m.default.instance.clearFactory();
u.default.instance.clearFactory();
this.exitGameToHall();
dispatch(h.ComponentGameEvent.Game_Exit_Close_FishBanner);
};
e.prototype.onLoad = function() {
this.initNode();
t.prototype.onLoad.call(this);
var e = [];
e.push(this.coinNode);
e.push(this.coinNode2);
e.push(this.goldBoom);
e.push(cc.find("prefabs/winscore", this.node));
e.push(cc.find("prefabs/winscore2", this.node));
P.default.initNode(e, this.fish_nodes.players);
cc.director.getCollisionManager().enabled = !0;
u.default.instance.effectRoot = this.node.getChildByName("effectRoot");
u.default.instance.effectRootlowui = this.node.getChildByName("effectRootlowui");
u.default.instance.effectRoot2 = this.node.getChildByName("effectRoot2");
this.scheduleOnce(this.previewParticle, 10);
this.playMusic("audios/bgm");
};
e.prototype.previewParticle = function() {
this.isPlayingForzenEffect || (this.frozenEffect.node.active = !1);
};
e.prototype.initNode = function() {
this.fish_nodes = this.node.getComponent(w.default);
this.fishing1Mgr = cc.find("gameRoot", this.node).getComponent(g.default);
this.forzenBtn = cc.find("uiRoot/speBullets/ver/forzenBtn", this.node);
this.forzenCD = cc.find("uiRoot/speBullets/ver/forzenBtn/cd", this.node).getComponent(cc.Sprite);
this.forzenValue = cc.find("uiRoot/speBullets/ver/forzenBtn/valueBg/value", this.node).getComponent(cc.Label);
this.lockBtn = cc.find("uiRoot/speBullets/ver/lockBtn", this.node);
this.lockSelected = cc.find("uiRoot/speBullets/ver/lockBtn/selected", this.node);
this.torpedoBtn = cc.find("uiRoot/speBullets/ver/torpedoBtn", this.node);
this.torpedoBtnValueBg = cc.find("uiRoot/speBullets/ver/torpedoBtn/valueBg", this.node);
this.torpedoBtnValue = cc.find("uiRoot/speBullets/ver/torpedoBtn/valueBg/value", this.node).getComponent(cc.Label);
this.torpedoSelected = cc.find("uiRoot/speBullets/ver/torpedoBtn/selected", this.node);
this.autoSetBtn = cc.find("uiRoot/speBullets/ver/autoSetBtn", this.node);
this.autoSetSelected = cc.find("uiRoot/speBullets/ver/autoSetBtn/selected", this.node);
this.energyBtn = cc.find("uiRoot/speBullets/energyBtn", this.node);
this.energyProgress = cc.find("uiRoot/speBullets/energyBtn/Background/progress", this.node).getComponent(cc.Sprite);
this.energyUv1 = cc.find("uiRoot/speBullets/energyBtn/Background/uv1", this.node);
this.touchManager = cc.find("playerRoot/touchManager", this.node).getComponent(E.default);
this.coinNode = cc.find("prefabs/coin", this.node);
this.coinNode2 = cc.find("prefabs/coin2", this.node);
this.goldBoom = cc.find("prefabs/goldboom", this.node);
this.frozenEffect = cc.find("frozenEffect", this.node).getComponent(cc.Animation);
this.lockNode = cc.find("lockRoot/lockNode", this.node);
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
this.forzenCD && cc.Tween.stopAllByTarget(this.forzenCD);
};
return s([ R ], e);
}(y.default));
o.default = T;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/net/GameSender": void 0,
"../../../../scripts/common/protocol/HeartbetJson": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/collision/fishCollisionMgr": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../game/fish1Tools": "fish1Tools",
"../game/fishing1Manager": "fishing1Manager",
"../net/Fishing1Event": "Fishing1Event",
"../net/Fishing1Handler": "Fishing1Handler",
"../net/Fishing1Sender": "Fishing1Sender",
"../net/Fishing1Service": "Fishing1Service",
"./Fishing1Nodes": "Fishing1Nodes"
} ],
FishingSurePanel: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "64d8cFJFk1F2Y+Z3LR9pWbf", "FishingSurePanel");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/framework/componects/EventComponent"), a = t("../../../../scripts/framework/defines/Enums"), c = cc._decorator, l = c.ccclass, h = c.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.closeBtn = null;
e.toggleBtn = null;
e.toggleCheckMark = null;
e.confirmBtn = null;
e.cancleBtn = null;
e.callBack = null;
e.forzenCache = "fishing_forzenCache";
return e;
}
e.prototype.onLoad = function() {
t.prototype.onLoad.call(this);
};
e.prototype.addEvents = function() {
var t = this;
this.onN(this.closeBtn, a.NodeEvent.click, function() {
t.node.active = !1;
App.globalAudio.playButtonClick();
});
this.onN(this.toggleBtn, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.toggleCheckMark.active = !t.toggleCheckMark.active;
App.storage.setItem(t.forzenCache, !t.toggleCheckMark.active);
});
this.onN(this.confirmBtn, a.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
t.node.active = !1;
t.callBack && t.callBack();
});
this.onN(this.cancleBtn, a.NodeEvent.click, function() {
t.node.active = !1;
App.globalAudio.playButtonClick();
});
};
e.prototype.show = function(t) {
if (App.storage.getItem(this.forzenCache, !0)) {
this.node.active = !0;
this.callBack = t;
this.toggleCheckMark.active = !1;
} else t && t();
};
s([ h(cc.Node) ], e.prototype, "closeBtn", void 0);
s([ h(cc.Node) ], e.prototype, "toggleBtn", void 0);
s([ h(cc.Node) ], e.prototype, "toggleCheckMark", void 0);
s([ h(cc.Node) ], e.prototype, "confirmBtn", void 0);
s([ h(cc.Node) ], e.prototype, "cancleBtn", void 0);
return s([ l ], e);
}(r.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Enums": void 0
} ],
MissileMove: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38ba0F5bSJEtp5j1/qxjPEd", "MissileMove");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/fishframework/scripts/bulletFactory"), a = t("../../../../scripts/framework/defines/Macros"), c = cc._decorator, l = c.ccclass, h = c.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.defaultDuration = 1;
e.boomPrefab = null;
e.startPos = null;
e.targetPos = null;
e.isMoving = !1;
e.elapsedTime = 0;
e.moveSpeed = 0;
return e;
}
e.prototype.launch = function(t, e) {
if (t && e) {
t instanceof cc.Node ? this.startPos = this.node.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.Vec2.ZERO)) : this.startPos = this.node.parent.convertToNodeSpaceAR(cc.v2(t.x, t.y));
e instanceof cc.Node ? this.targetPos = this.node.parent.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.Vec2.ZERO)) : this.targetPos = this.node.parent.convertToNodeSpaceAR(cc.v2(e.x, e.y));
var o = this.targetPos.sub(this.startPos).mag();
this.moveSpeed = o / this.defaultDuration;
this.node.setPosition(this.startPos);
this.isMoving = !0;
this.elapsedTime = 0;
var i = this.node.getComponent(cc.Animation);
i && i.play(null, 0);
} else cc.warn("🚫 Missile launch failed: start or target is null!");
};
e.prototype.update = function(t) {
if (this.isMoving && this.targetPos) {
this.elapsedTime += t;
var e = this.node.position.clone(), o = this.targetPos.sub(e), i = o.mag();
if (this.elapsedTime >= this.defaultDuration || i < 5) {
this.node.setPosition(this.targetPos);
this.isMoving = !1;
this.onArrived();
} else {
var n = o.normalize().mul(this.moveSpeed * t);
this.node.setPosition(e.add(n));
var s = 180 * Math.atan2(o.y, o.x) / Math.PI - 90;
this.node.angle = s;
}
}
};
e.prototype.onArrived = function() {
cc.log("💥 Missile reached target!");
var t = cc.instantiate(this.boomPrefab);
t.setParent(r.default.instance.effectRoot);
t.position = App.utils.localConvertlocalPointAR_Vec3(this.node, r.default.instance.effectRoot);
t.getComponent(cc.Animation).play(null, 0);
this.node.destroy();
App.globalAudio.playBundleEffect("audios/fish22_2", a.Macro.BUNDLE_Fishing1);
};
s([ h ], e.prototype, "defaultDuration", void 0);
s([ h(cc.Prefab) ], e.prototype, "boomPrefab", void 0);
return s([ l ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
TorpedoBullet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d9fb7QEBXFOVLAnxAexBeVq", "TorpedoBullet");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/common/event/CommonEvent"), a = t("../../../../scripts/common/utils/CmmUtils"), c = t("../../../../scripts/fishframework/scripts/bulletFactory"), l = t("../../../../scripts/fishframework/scripts/fishBaseBullet"), h = t("../../../../scripts/fishframework/scripts/fishBaseEffect"), f = t("../../../../scripts/fishframework/scripts/fishFactory"), p = t("../../../../scripts/framework/defines/Macros"), u = cc._decorator, d = u.ccclass, m = u.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.flyAnim = null;
e.targetFish = null;
e.targetPos = null;
e.flyDuration = 1;
e.accelerateStart = .56;
e.elapsed = 0;
e.startPos = null;
e.isServer = !1;
return e;
}
e.prototype.shoot = function(e) {
this.targetFish = f.default.instance.getRenderFish(e.fid);
if (this.targetFish) {
this.targetPos = App.utils.localConvertlocalPointAR_Vec3(this.targetFish.node, e.parent);
t.prototype.shoot.call(this, e);
this.isServer = e.isServer;
this.startPos = this.node.position.clone();
this.elapsed = 0;
this.flyAnim.play(null, 0);
} else this.removeBullet();
};
e.prototype.customUpdate = function(t) {
if (this.node && this.node.isValid) {
this.elapsed += t;
var e = this.elapsed / this.flyDuration;
e >= 1 && (e = 1);
if (this.targetFish && this.targetFish.node && this.targetFish.node.isValid) {
var o = this.targetFish.getLockPointWorldPos();
this.targetPos = o;
}
if (this.targetPos) {
var i = this.getSpeedCurve(e), n = this.startPos.lerp(this.targetPos, i);
this.node.setPosition(n);
var s = this.targetPos.sub(n).normalize(), r = a.CmmUtils.dir2Angle(s);
this.node.angle = cc.misc.lerp(this.node.angle, r, 10 * t);
e >= 1 && this.onHitTarget(this.targetFish);
}
}
};
e.prototype.getSpeedCurve = function(t) {
var e = this.accelerateStart;
if (t < e) return t / e * .5;
var o = (t - e) / (1 - e);
return .5 + .5 * Math.pow(o, 2);
};
e.prototype.onHitTarget = function(t) {
this.birthEffect();
this.destorySelf(t);
if (!this.isServer && !this.cfg.isBot) {
App.globalAudio.playBundleEffect("audios/boom1", p.Macro.BUNDLE_Fishing1);
dispatch(r.ComponentGameEvent.ShakeCamera, 1);
}
};
e.prototype.birthEffect = function() {
cc.instantiate(this.bulletEffect).getComponent(h.default).play(this.boomPoint, this.isServer);
};
e.prototype.destorySelf = function(t) {
this.removeBullet();
t && t.beAttacked();
!this.isServer && this.sender && t && (this.cfg.isBot ? this.sender.send_hit_fish(this.bid, t.id, this.cfg.uid) : this.sender.send_hit_fish(this.bid, t.id));
};
e.prototype.removeBullet = function() {
c.default.instance.deleteBullet(this);
this.node.destroy();
};
s([ m(cc.Animation) ], e.prototype, "flyAnim", void 0);
return s([ d ], e);
}(l.default);
o.default = y;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishBaseBullet": void 0,
"../../../../scripts/fishframework/scripts/fishBaseEffect": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
anemoneFish: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1614cdibu9NHqOUyOsSiJJ7", "anemoneFish");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/event/CommonEvent"), l = t("../../../../scripts/common/utils/CmmUtils"), h = t("../../../../scripts/fishframework/scripts/bulletFactory"), f = t("../../../../scripts/fishframework/scripts/collision/fishCollision"), p = t("../../../../scripts/fishframework/scripts/dyfishCommon"), u = t("../../../../scripts/fishframework/scripts/fishFactory"), d = t("../../../../scripts/fishframework/scripts/fishTouchManager"), m = t("../../../../scripts/framework/defines/Macros"), y = t("../effects/fish15boom"), v = t("../game/fish1Tools"), g = cc._decorator, _ = g.ccclass, b = g.property, C = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.collision2003 = null;
e.boomEffect = null;
e.fish15Effect1 = null;
e.fish15Effect2 = null;
e.vortexFishMap = new Map();
e.deletedIds = new Map();
return e;
}
e.prototype.initSpecialFishState = function() {
this.isSpecialFish = !0;
this.needDir = !1;
this.deathAnim && this.deathAnim.stop();
this.fish15Effect1.active = !1;
this.fish15Effect2.active = !1;
};
e.prototype.destorySelf = function() {
dispatch(c.ComponentGameEvent.ShakeCamera, 4);
if (this.curUID) {
this.isDeath = !0;
this.birthCollision();
} else t.prototype.destorySelf.call(this);
};
e.prototype.destorySelfByServer = function(t) {
if (this.deathAnim) {
App.globalAudio.playBundleEffect("audios/fish23_0", m.Macro.BUNDLE_Fishing1);
var e = cc.instantiate(this.boomEffect);
e.setParent(h.default.instance.effectRoot);
e.position = this.node.position;
e.getComponent(y.default).play();
this.startVortex(t);
}
};
e.prototype.startVortex = function(t) {
return r(this, void 0, void 0, function() {
var e, o, i, n, s, r, c, h, f, p;
return a(this, function(a) {
switch (a.label) {
case 0:
return [ 4, l.CmmUtils.awaitTime(1e3) ];

case 1:
a.sent();
this.deathAnim.play(null, 0);
App.globalAudio.playBundleEffect("audios/fish23_1", m.Macro.BUNDLE_Fishing1);
e = t.fids;
t.wins;
o = this.node.position.clone();
i = u.default.instance.getRenderFishs(e);
n = 300;
s = 0;
a.label = 2;

case 2:
return s < i.length ? !(r = i[s]) || r && r.isDeath ? [ 3, 5 ] : [ 3, 3 ] : [ 3, 6 ];

case 3:
c = r.node.position.clone();
h = c.sub(o);
f = h.mag();
p = Math.atan2(h.y, h.x);
this.vortexFishMap.set(r.id, {
fish: r,
angle: p,
radius: f,
rotateSpeed: 5 + 2 * Math.random(),
shrinkSpeed: 250 + 100 * Math.random(),
killByID: t.uid,
elapsedTime: 0
});
r.isDeath = !0;
r.node.zIndex = cc.macro.MAX_ZINDEX;
return [ 4, l.CmmUtils.awaitTime(n) ];

case 4:
a.sent();
n -= 10;
a.label = 5;

case 5:
s++;
return [ 3, 2 ];

case 6:
return [ 4, l.CmmUtils.awaitTime(2e3) ];

case 7:
a.sent();
this.forceExplodeAll(t.uid);
return [ 2 ];
}
});
});
};
e.prototype.updateOhterSomething = function(t) {
var e = this;
if (0 !== this.vortexFishMap.size) {
var o = this.node.position.clone();
this.deletedIds.clear();
this.vortexFishMap.forEach(function(i, n) {
var s = i.fish;
i.angle += i.rotateSpeed * t;
i.elapsedTime || (i.elapsedTime = 0);
i.elapsedTime += t;
var r = 1;
if (i.elapsedTime < 1) {
r = .3 + .7 * (c = i.elapsedTime / 1);
var a = void 0;
a = c < .5 ? 1 + c / .5 * 1 : 2 + (c - .5) / .5 * -1.5;
s.node.scale = a;
} else {
if (!(i.elapsedTime < 3)) {
u.default.instance.destoryFishById(n);
e.deletedIds.set(n, !0);
return;
}
var c;
r = 1 + (c = (i.elapsedTime - 1) / 2) * c * (3 - 2 * c) * 6;
s.node.scale = .5;
}
i.radius -= i.shrinkSpeed * r * t;
var l = o.x + Math.cos(i.angle) * i.radius, h = o.y + Math.sin(i.angle) * i.radius;
s.node.setPosition(l, h);
s.node.angle += 720 * t;
if (i.radius <= 20) {
u.default.instance.destoryFishById(n);
e.deletedIds.set(n, !0);
}
});
this.deletedIds.forEach(function(t, o) {
e.vortexFishMap.delete(o);
});
}
};
e.prototype.forceExplodeAll = function() {
this.vortexFishMap.forEach(function(t, e) {
u.default.instance.destoryFishById(e);
});
this.vortexFishMap.clear();
this.deathAnim = null;
this.deathBeforeAnim();
v.default.showGoldBoom(this.getLockPointWorldPos());
};
e.prototype.birthCollision = function() {
if (d.default.self_uid == this.curUID) {
(t = cc.instantiate(this.collision2003)).setParent(h.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(f.default).initData({
type: this.type,
fid: this.id
});
} else if (d.default.self_BotMapUids.has(this.curUID)) {
var t;
(t = cc.instantiate(this.collision2003)).setParent(h.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(f.default).initData({
type: this.type,
fid: this.id,
uid: this.curUID
});
} else this.destroyByFactory();
};
s([ b(cc.Prefab) ], e.prototype, "collision2003", void 0);
s([ b(cc.Prefab) ], e.prototype, "boomEffect", void 0);
s([ b(cc.Node) ], e.prototype, "fish15Effect1", void 0);
s([ b(cc.Node) ], e.prototype, "fish15Effect2", void 0);
return s([ _ ], e);
}(p.default);
o.default = C;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/collision/fishCollision": void 0,
"../../../../scripts/fishframework/scripts/dyfishCommon": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../effects/fish15boom": "fish15boom",
"../game/fish1Tools": "fish1Tools"
} ],
crabFish: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "42813TbM29KCZm6foZo4Huw", "crabFish");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/fishframework/scripts/bulletFactory"), l = t("../../../../scripts/fishframework/scripts/collision/fishCollision"), h = t("../../../../scripts/fishframework/scripts/fishFactory"), f = t("../../../../scripts/fishframework/scripts/fishTouchManager"), p = t("../effects/fish15boom"), u = t("../../../../scripts/common/utils/CmmUtils"), d = t("../../../../scripts/common/utils/RandomUtil"), m = t("../bullets/MissileMove"), y = t("../../../../scripts/common/event/CommonEvent"), v = t("../../../../scripts/fishframework/scripts/dyfishCommon"), g = t("../../../../scripts/framework/defines/Macros"), _ = cc._decorator, b = _.ccclass, C = _.property, w = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.collision2003 = null;
e.boomEffect = null;
e.missile = null;
e.backBomb = null;
return e;
}
e.prototype.initSpecialFishState = function() {
this.isSpecialFish = !0;
this.needDir = !1;
this.backBomb.active = !0;
};
e.prototype.destorySelf = function() {
dispatch(y.ComponentGameEvent.ShakeCamera, 4);
if (this.curUID) {
this.isDeath = !0;
this.birthCollision();
} else t.prototype.destorySelf.call(this);
};
e.prototype.destorySelfByServer = function(t) {
this.deathAnim && this.sendTorpedoBullet(t);
};
e.prototype.getTargetPos = function(t) {
var e = t.lockfids, o = [];
if (e) {
for (var i = e.split(","), n = 0; n < 3; n++) {
var s = h.default.instance.getRenderFish(i[n]);
if (s) {
var r = App.utils.localConvertWorldPointAR(s.node);
o.push(r);
}
}
var a = 3 - o.length;
for (n = 0; n < a; n++) {
var c = d.RandomUtil.randomRange(100, 1500), l = d.RandomUtil.randomRange(50, 700);
o.push(cc.v2(c, l));
}
} else for (n = 0; n < 3; n++) {
c = d.RandomUtil.randomRange(100, 1500), l = d.RandomUtil.randomRange(50, 700);
o.push(cc.v2(c, l));
}
return o;
};
e.prototype.sendTorpedoBullet = function(t) {
return r(this, void 0, void 0, function() {
var e, o, i, n;
return a(this, function(s) {
switch (s.label) {
case 0:
e = this.getTargetPos(t);
this.deathAnim.play(null, 0);
App.globalAudio.playBundleEffect("audios/fish22_0", g.Macro.BUNDLE_Fishing1);
return [ 4, u.CmmUtils.awaitTime(800) ];

case 1:
s.sent();
o = 0;
s.label = 2;

case 2:
if (!(o < 3)) return [ 3, 5 ];
(i = cc.instantiate(this.boomEffect)).setParent(c.default.instance.effectRoot);
i.position = this.node.position;
i.getComponent(p.default).play();
(n = cc.instantiate(this.missile)).setParent(c.default.instance.effectRoot);
n.getComponent(m.default).launch(App.utils.localConvertWorldPointAR(this.node), e[o]);
App.globalAudio.playBundleEffect("audios/fish22_1", g.Macro.BUNDLE_Fishing1);
return [ 4, u.CmmUtils.awaitTime(400) ];

case 3:
s.sent();
s.label = 4;

case 4:
o++;
return [ 3, 2 ];

case 5:
this.backBomb.active = !1;
return [ 4, u.CmmUtils.awaitTime(800) ];

case 6:
s.sent();
this.moveOutAndDestroyRandomDir(3);
this.killFishesAnim(t);
this.sendFish_reward();
return [ 2 ];
}
});
});
};
e.prototype.moveOutAndDestroyRandomDir = function(t) {
var e = this;
void 0 === t && (t = 2.5);
var o = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO), i = Math.random() * Math.PI * 2, n = cc.v2(Math.cos(i), Math.sin(i)), s = cc.v2(o.x + 1500 * n.x, o.y + 1500 * n.y), r = this.node.parent.convertToNodeSpaceAR(s);
cc.tween(this.node).to(t, {
position: r
}, {
onUpdate: function() {
e.uv && e.uv.syncShadowPosition(e.node.position);
}
}).call(function() {
e.destroyByFactory();
}).start();
};
e.prototype.killFishesAnim = function(t) {
for (var e = t.fids, o = (t.wins, h.default.instance.getRenderFishs(e)), i = 0; i < o.length; i++) {
var n = o[i];
if (!(!n || n && n.isDeath)) {
n.isDeath = !0;
n.node.zIndex = cc.macro.MAX_ZINDEX;
}
}
for (var s = 0; s < o.length; s++) {
var r = o[s];
r && h.default.instance.destoryFishById(r.id);
}
};
e.prototype.birthCollision = function() {
if (f.default.self_uid == this.curUID) {
(t = cc.instantiate(this.collision2003)).setParent(c.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(l.default).initData({
type: this.type,
fid: this.id
});
} else if (f.default.self_BotMapUids.has(this.curUID)) {
var t;
(t = cc.instantiate(this.collision2003)).setParent(c.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(l.default).initData({
type: this.type,
fid: this.id,
uid: this.curUID
});
} else this.destroyByFactory();
};
s([ C(cc.Prefab) ], e.prototype, "collision2003", void 0);
s([ C(cc.Prefab) ], e.prototype, "boomEffect", void 0);
s([ C(cc.Prefab) ], e.prototype, "missile", void 0);
s([ C(cc.Node) ], e.prototype, "backBomb", void 0);
return s([ b ], e);
}(v.default);
o.default = w;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/collision/fishCollision": void 0,
"../../../../scripts/fishframework/scripts/dyfishCommon": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../bullets/MissileMove": "MissileMove",
"../effects/fish15boom": "fish15boom"
} ],
energyCicleReward: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a09a2UGvH9ACYP2n47xMn84", "energyCicleReward");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/framework/defines/Macros"), h = cc._decorator, f = h.ccclass, p = (h.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rewardValue = null;
return e;
}
e.prototype.initNode = function() {
this.rewardValue || (this.rewardValue = cc.find("rewardValue", this.node).getComponent(cc.Label));
};
e.prototype.showReward = function(t) {
this.initNode();
this.node.active = !0;
this.showTime(t);
this.rewardValue.string = c.CmmUtils.NumberToGameString_NoZero(t.win);
};
e.prototype.showTime = function() {
return r(this, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
App.globalAudio.playBundleEffect("audios/high1", l.Macro.BUNDLE_Fishing1);
return [ 4, c.CmmUtils.awaitTime(3e3) ];

case 1:
t.sent();
this.node.active = !1;
return [ 2 ];
}
});
});
};
e.prototype.getWorldPos = function() {
return App.utils.localConvertWorldPointAR(this.node);
};
return s([ f ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
fish15boom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "86fbepz1dxJGYW4B+7JRSNv", "fish15boom");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, c = r.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
return e;
}
e.prototype.play = function() {
var t = this;
this.anim.play(null, 0);
this.scheduleOnce(function() {
t.node.destroy();
}, 1);
};
s([ c(cc.Animation) ], e.prototype, "anim", void 0);
return s([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
fish1Tools: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "196a7c0BetM9ZlDEPoS+2NZ", "fish1Tools");
var i = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../../../../scripts/common/utils/GamePool"), s = t("../../../../scripts/fishframework/scripts/bulletFactory"), r = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), a = t("../../../../scripts/fishframework/scripts/fishTouchManager"), c = t("../../../../scripts/fishframework/scripts/tools/fishCommonCoin"), l = t("../../../../scripts/fishframework/scripts/tools/fishCommonCoin2"), h = t("../effects/fish1addscore"), f = t("../effects/fish1addscore2"), p = t("../effects/glodboom"), u = cc._decorator, d = u.ccclass, m = (u.property, 
function() {
function t() {}
e = t;
t.initNode = function(t, e) {
this.instNode = t[0];
this.instNode2 = t[1];
this.instGlodBoom = t[2];
this.instAddScore = t[3];
this.instAddScore2 = t[4];
this.players = e;
n.default.ClearPools();
};
t.showCoin1 = function(t, e, o) {
switch (e) {
case 1:
case 2:
case 3:
this.showCoinType1(t, o, 0);
a.default.isSelf(o) && setTimeout(function() {
dispatch(r.fishCommonEvent.fishCommonEvent_play_sound, "mincoinfly");
}, 1e3);
break;

case 4:
case 5:
case 6:
case 7:
case 9:
this.showCoinType2(t, o);
a.default.isSelf(o) && setTimeout(function() {
dispatch(r.fishCommonEvent.fishCommonEvent_play_sound, "mincoinfly");
}, 1e3);
break;

default:
this.showCoinType3(t, o);
}
};
t.showCoin2 = function(t, o) {
var i = this.getPlayerByUid(o).getEmptyRewardCiclePos(), r = n.default.Pop(e.coin2Name, e.poolInstance2.bind(this));
r.setParent(s.default.instance.effectRoot);
r.setPosition(t);
r.active = !0;
r.getComponent(l.default).play(i);
a.default.isSelf(o) ? r.opacity = 255 : r.opacity = 150;
};
t.showGoldBoom = function(t) {
var o = n.default.Pop(e.glodBoomName, e.poolInstance3.bind(this));
o.active = !0;
o.getComponent(p.default).play(t);
};
t.showAddScore = function(t, o, i) {
var s = n.default.Pop(e.addscore1, e.poolInstance4.bind(this));
s.active = !0;
s.getComponent(h.default).play(t, o);
s.opacity = i ? 255 : 150;
};
t.showAddScore2 = function(t, o, i) {
var s = n.default.Pop(e.addscore2, e.poolInstance5.bind(this));
s.active = !0;
s.getComponent(f.default).play(t, o);
a.default.isSelf(i) ? s.opacity = 255 : s.opacity = 150;
};
t.collectCoin1 = function(t) {
n.default.Push(e.coin1Name, t, !0);
};
t.collectCoin2 = function(t) {
n.default.Push(e.coin2Name, t, !0);
};
t.collectGoldBoom = function(t) {
n.default.Push(e.glodBoomName, t, !0);
};
t.collectAddScore = function(t) {
n.default.Push(e.addscore1, t, !0);
};
t.collectAddScore2 = function(t) {
n.default.Push(e.addscore2, t, !0);
};
t.poolInstance = function() {
return cc.instantiate(e.instNode);
};
t.poolInstance2 = function() {
return cc.instantiate(e.instNode2);
};
t.poolInstance3 = function() {
return cc.instantiate(e.instGlodBoom);
};
t.poolInstance4 = function() {
return cc.instantiate(e.instAddScore);
};
t.poolInstance5 = function() {
return cc.instantiate(e.instAddScore2);
};
t.getPlayerByUid = function(t) {
for (var e = 0; e < this.players.length; e++) if (this.players[e].getuid() == t) return this.players[e];
return null;
};
t.showCoinType1 = function(t, o, i) {
var r = this.getPlayerByUid(o);
if (r && r.coinNode) {
var l = App.utils.localConvertWorldPointAR(r.coinNode), h = n.default.Pop(e.coin1Name, e.poolInstance.bind(this));
h.setParent(s.default.instance.effectRoot);
h.setPosition(t);
h.active = !0;
h.getComponent(c.default).play(l, i);
a.default.isSelf(o) ? h.opacity = 255 : h.opacity = 150;
}
};
t.showCoinType2 = function(t, e) {
for (var o = [ cc.v2(t.x - 30, t.y), cc.v2(t.x, t.y - 30), cc.v2(t.x + 30, t.y), cc.v2(t.x, t.y + 30) ], i = 0; i < o.length; i++) this.showCoinType1(o[i], e, .1 * i);
};
t.showCoinType3 = function(t, e) {
for (var o = [ cc.v2(t.x - 30, t.y), cc.v2(t.x, t.y - 30), cc.v2(t.x + 30, t.y), cc.v2(t.x, t.y + 30), cc.v2(t.x, t.y + 80), cc.v2(t.x - 45, t.y + 45), cc.v2(t.x - 80, t.y), cc.v2(t.x - 45, t.y - 45), cc.v2(t.x, t.y - 80), cc.v2(t.x + 45, t.y - 45), cc.v2(t.x + 80, t.y), cc.v2(t.x + 45, t.y + 45) ], i = 0; i < o.length; i++) this.showCoinType1(o[i], e, .02 * i);
};
var e;
t.instNode = null;
t.instNode2 = null;
t.instGlodBoom = null;
t.instAddScore = null;
t.instAddScore2 = null;
t.coin1Name = "coin";
t.coin2Name = "coin2";
t.glodBoomName = "glodboom";
t.addscore1 = "addscore1";
t.addscore2 = "addscore2";
t.players = [];
return e = i([ d ], t);
}());
o.default = m;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/GamePool": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/fishframework/scripts/tools/fishCommonCoin": void 0,
"../../../../scripts/fishframework/scripts/tools/fishCommonCoin2": void 0,
"../effects/fish1addscore": "fish1addscore",
"../effects/fish1addscore2": "fish1addscore2",
"../effects/glodboom": "glodboom"
} ],
fish1addscore2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "455a9OzwcBA0apjjmoUbtIJ", "fish1addscore2");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/fishframework/scripts/bulletFactory"), c = t("../game/fish1Tools"), l = cc._decorator, h = l.ccclass, f = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.label = null;
return e;
}
e.prototype.play = function(t, e) {
var o = this;
this.node.setParent(a.default.instance.effectRoot2);
var i = App.utils.worldConvertLocalPointAR(a.default.instance.effectRoot2, t);
this.node.position = i;
this.anim.play(null, 0);
this.label.string = "+" + r.CmmUtils.NumberToGameString_NoZero(e);
this.scheduleOnce(function() {
c.default.collectAddScore2(o.node);
}, 1.5);
};
s([ f(cc.Animation) ], e.prototype, "anim", void 0);
s([ f(cc.Label) ], e.prototype, "label", void 0);
return s([ h ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../game/fish1Tools": "fish1Tools"
} ],
fish1addscore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e6435IsmahC4pdSnC1ojWLC", "fish1addscore");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/common/utils/CmmUtils"), a = t("../../../../scripts/fishframework/scripts/bulletFactory"), c = t("../game/fish1Tools"), l = cc._decorator, h = l.ccclass, f = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.label = null;
return e;
}
e.prototype.play = function(t, e) {
var o = this;
this.node.setParent(a.default.instance.effectRoot2);
var i = App.utils.worldConvertLocalPointAR(a.default.instance.effectRoot2, t);
this.node.position = i;
this.anim.play(null, 0);
this.label.string = "+" + r.CmmUtils.NumberToGameString_NoZero(e);
this.scheduleOnce(function() {
c.default.collectAddScore(o.node);
}, 1.5);
};
s([ f(cc.Animation) ], e.prototype, "anim", void 0);
s([ f(cc.Label) ], e.prototype, "label", void 0);
return s([ h ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../game/fish1Tools": "fish1Tools"
} ],
fishCicleReward: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d3318bi7SpJe4GDxTQSKUNc", "fishCicleReward");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/utils/CmmUtils"), l = t("../../../../scripts/fishframework/scripts/fishTouchManager"), h = t("../../../../scripts/framework/defines/Macros"), f = cc._decorator, p = f.ccclass, u = (f.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rewardValue = null;
e.rewardValue2 = null;
e.isPlaying = !1;
e.gaofenType = [ 14, 15, 16, 20, 21, 22, 25, 26, 27, 30, 31, 32, 35, 36 ];
return e;
}
e.prototype.initNode = function() {
if (!this.rewardValue) {
this.rewardValue = cc.find("rewardValue", this.node).getComponent(cc.Label);
this.rewardValue2 = cc.find("rewardValue2", this.node).getComponent(cc.Label);
}
if (!this.fishes) {
this.fishes = new Map();
for (var t = cc.find("fishes", this.node), e = 0; e < this.gaofenType.length; e++) this.fishes.set(this.gaofenType[e], cc.find("fish" + this.gaofenType[e], t));
}
};
e.prototype.showReward = function(t) {
this.initNode();
this.isPlaying = !0;
this.node.active = !0;
this.showTime(t);
this.rewardValue.string = c.CmmUtils.NumberToGameString_NoZero(t.win);
this.rewardValue2.string = c.CmmUtils.NumberToGameString_NoZero(t.win);
};
e.prototype.showTime = function(t) {
return r(this, void 0, void 0, function() {
var e;
return a(this, function(o) {
switch (o.label) {
case 0:
this.fishes.forEach(function(t) {
t.active = !1;
});
if (e = this.fishes.get(t.type)) {
l.default.isSelf(t.uid) && App.globalAudio.playBundleEffect("audios/high2", h.Macro.BUNDLE_Fishing1);
e.active = !0;
this.rewardValue.node.active = !0;
this.rewardValue2.node.active = !1;
} else {
l.default.isSelf(t.uid) && App.globalAudio.playBundleEffect("audios/high1", h.Macro.BUNDLE_Fishing1);
this.rewardValue.node.active = !1;
this.rewardValue2.node.active = !0;
}
return [ 4, c.CmmUtils.awaitTime(3e3) ];

case 1:
o.sent();
if (cc.isValid(this.node)) {
this.node.active = !1;
this.isPlaying = !1;
}
return [ 2 ];
}
});
});
};
e.prototype.getWorldPos = function() {
return App.utils.localConvertWorldPointAR(this.node);
};
e.prototype.isEmpry = function() {
return !this.isPlaying;
};
return s([ p ], e);
}(cc.Component));
o.default = u;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
fishing1BossComming: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b937RYseNHd4GyNNFPVH/e", "fishing1BossComming");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, c = r.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.label = null;
e.names = null;
return e;
}
e.prototype.showBossComming = function(t, e) {
for (var o = this.names.children, i = 0; i < o.length; i++) o[i].active = !1;
var n = this.names.getChildByName(t.toString());
if (n) {
this.label.string = e;
this.node.active = !0;
n.active = !0;
this.anim.play(null, 0);
this.scheduleOnce(this.hide.bind(this), 2.2);
}
};
e.prototype.hide = function() {
this.node.active = !1;
};
s([ c(cc.Animation) ], e.prototype, "anim", void 0);
s([ c(cc.Label) ], e.prototype, "label", void 0);
s([ c(cc.Node) ], e.prototype, "names", void 0);
return s([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
fishing1Manager: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37463MqQ/hDb6W05u0h0K+6", "fishing1Manager");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/utils/GamePool"), l = t("../../../../scripts/common/utils/UIUtils"), h = t("../../../../scripts/fishframework/scripts/bulletFactory"), f = t("../../../../scripts/fishframework/scripts/fishBaseBullet"), p = t("../../../../scripts/fishframework/scripts/fishChnageLevelAnim"), u = t("../../../../scripts/fishframework/scripts/fishCommonEvent"), d = t("../../../../scripts/fishframework/scripts/fishFactory"), m = t("../../../../scripts/framework/componects/EventComponent"), y = t("../../../../scripts/framework/defines/Macros"), v = cc._decorator, g = v.ccclass, _ = v.property, b = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.testServer = null;
e.testLocal = null;
e.shadowStage = null;
e.fish_end_anim = null;
e.slider = null;
e.fishPathConst = "prefabs/fishs/fish";
e.typeMapPath = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 25, 26, 27, 30, 31, 32, 35, 36 ];
e.bulletPath = [ "prefabs/bullets/bullet0", "prefabs/bullets/bullet1", "prefabs/bullets/bullet2", "prefabs/bullets/torpedo0", "prefabs/bullets/energyPower" ];
e.mapPrefab = new Map();
e.mapBulletPrefab = new Map();
e.isCanReceiveTime = !1;
return e;
}
e.prototype.addEvents = function() {
var t = this;
this.onD(u.fishCommonEvent.fishCommonEvent_levelEnd, function() {
t.isCanReceiveTime = !1;
});
this.onD(u.fishCommonEvent.fishCommonEvent_serverToShoot, this.server2shoot.bind(this));
this.onD(u.fishCommonEvent.fishCommonEvent_sync_time, this.test.bind(this));
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
d.default.instance.customUpdate(t);
h.default.instance.customUpdate(t);
this.slider.progress = d.default.instance.percentTime;
this.testLocal.string = "本地时间:" + d.default.instance.curLevelTime.toFixed(2);
d.default.instance.isTestMode && (this.testLocal.string += "当前关卡：" + d.default.instance.isTestLevel);
};
e.prototype.preInstance = function(t) {
return cc.instantiate(this.mapPrefab.get(t));
};
e.prototype.initResources = function() {
return r(this, void 0, void 0, function() {
var t, e, o, i, n, s, r = this;
return a(this, function(a) {
switch (a.label) {
case 0:
c.default.ClearPools();
if (0 != this.mapPrefab.size) return [ 3, 2 ];
t = [];
e = function(e) {
var i = o.fishPathConst + o.typeMapPath[e], n = o.typeMapPath[e], s = l.default.getPrefab(y.Macro.BUNDLE_Fishing1, i).then(function(t) {
if (!r.mapPrefab.has(n)) {
r.mapPrefab.set(n, t);
c.default.Push(n.toString(), r.preInstance(n));
}
});
t.push(s);
};
o = this;
for (s = 0; s < this.typeMapPath.length; s++) e(s);
i = function(e) {
var o = n.bulletPath[e], i = l.default.getPrefab(y.Macro.BUNDLE_Fishing1, o).then(function(t) {
r.mapBulletPrefab.has(e) || r.mapBulletPrefab.set(e, t);
});
t.push(i);
};
n = this;
for (s = 0; s < this.bulletPath.length; s++) i(s);
return [ 4, Promise.all(t) ];

case 1:
a.sent();
a.label = 2;

case 2:
return [ 2 ];
}
});
});
};
e.prototype.initLevelCfg = function(t) {
this.levelCfg = t;
this.fish_end_anim.initCurMap(t);
d.default.instance.initData(t, this.mapPrefab, this.node, this.shadowStage);
this.isCanReceiveTime = !0;
this.levelCfg.curTime, this.levelCfg.time;
};
e.prototype.test = function(t) {
if (this.isCanReceiveTime) {
this.testServer.string = "服务器时间:" + t.curTime.toFixed(2) + "\n本地时间:" + d.default.instance.curLevelTime.toFixed(2);
d.default.instance.updateNextTime(t.curTime);
}
};
e.prototype.server2shoot = function(t) {
var e = App.utils.worldConvertLocalPointAR(this.node, t.worldPos), o = t.dir, i = this.mapBulletPrefab.get(t.bulletIndex), n = cc.instantiate(i).getComponent(f.default), s = {};
s.bid = t.bid;
s.isServer = t.isServer;
s.parent = h.default.instance.effectRoot;
s.pos = e;
s.dir = o;
s.fid = t.fid;
s.type = t.type;
s.speed = 2e3;
s.serverData = t.data;
if (t.isBot) {
s.isBot = t.isBot;
s.uid = t.uid;
}
switch (t.type) {
case 2:
s.parent = h.default.instance.effectRootlowui;
}
s.sender = t.sender;
n.shoot(s);
};
s([ _(cc.Label) ], e.prototype, "testServer", void 0);
s([ _(cc.Label) ], e.prototype, "testLocal", void 0);
s([ _(cc.Node) ], e.prototype, "shadowStage", void 0);
s([ _(p.default) ], e.prototype, "fish_end_anim", void 0);
s([ _(cc.Slider) ], e.prototype, "slider", void 0);
return s([ g ], e);
}(m.default);
o.default = b;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/GamePool": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishBaseBullet": void 0,
"../../../../scripts/fishframework/scripts/fishChnageLevelAnim": void 0,
"../../../../scripts/fishframework/scripts/fishCommonEvent": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/framework/componects/EventComponent": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
fishing1_anim: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9ff630qJKJB4Zo3bnzGhgL1", "fishing1_anim");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/common/utils/UIUtils"), a = t("../../../../scripts/fishframework/scripts/fishChnageLevelAnim"), c = t("../../../../scripts/framework/defines/Macros"), l = cc._decorator, h = l.ccclass, f = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.animation = null;
e.animNode = null;
e.background2Mask = null;
e.background2 = null;
e.reallyBackground = null;
e.nextSpriteFrame = null;
e.curMapPath = null;
e.nextMapPath = null;
e.mapBackGrounds = [ "texutes/big/Background_0", "texutes/big/Background_1", "texutes/big/Background_2", "texutes/big/Background_3", "texutes/big/Background_4", "texutes/big/Background_5", "texutes/big/Background_6", "texutes/big/Background_0", "texutes/big/Background_1", "texutes/big/Background_2", "texutes/big/Background_3", "texutes/big/Background_4", "texutes/big/Background_5", "texutes/big/Background_6", "texutes/big/Background_0", "texutes/big/Background_1", "texutes/big/Background_2", "texutes/big/Background_3" ];
return e;
}
e.prototype.initCurMap = function(t) {
this.init();
this.curMapPath = this.mapBackGrounds[t.curMapId];
this.nextMapPath = this.mapBackGrounds[t.nextMapId];
r.default.setSprite(this.reallyBackground, c.Macro.BUNDLE_Fishing1, this.curMapPath);
};
e.prototype.playAnim = function() {
var t = this;
this.init();
r.default.setSprite(this.background2, c.Macro.BUNDLE_Fishing1, this.nextMapPath).then(function(e) {
t.nextSpriteFrame = e;
});
this.animation.play(null, 0);
this.scheduleOnce(this.endBack.bind(this), 2.52);
};
e.prototype.endBack = function() {
this.animNode.active = !1;
this.reallyBackground.spriteFrame = this.nextSpriteFrame;
};
e.prototype.init = function() {
if (null == this.animation) {
this.animation = this.node.getComponent(cc.Animation);
this.background2Mask = cc.find("anim/background2Mask", this.node);
this.background2 = this.background2Mask.getChildByName("background2").getComponent(cc.Sprite);
this.reallyBackground = cc.find("reallyBackground", this.node).getComponent(cc.Sprite);
this.animNode = cc.find("anim", this.node);
}
};
return s([ h ], e);
}(a.default));
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/fishframework/scripts/fishChnageLevelAnim": void 0,
"../../../../scripts/framework/defines/Macros": void 0
} ],
glodboom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "727043pTEhLGZQArEURbJYp", "glodboom");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/fishframework/scripts/bulletFactory"), a = t("../game/fish1Tools"), c = cc._decorator, l = c.ccclass, h = c.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.boomAnimation = null;
return e;
}
e.prototype.play = function(t) {
var e = this;
this.node.setParent(r.default.instance.effectRoot);
this.node.position = App.utils.worldConvertLocalPointAR(r.default.instance.effectRoot, t);
this.boomAnimation.play(null, 0);
this.scheduleOnce(function() {
a.default.collectGoldBoom(e.node);
}, 1.5);
};
s([ h(cc.Animation) ], e.prototype, "boomAnimation", void 0);
return s([ l ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../game/fish1Tools": "fish1Tools"
} ],
testBer: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bdccc9CAXBNU7R9uGMae2/y", "testBer");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/fishframework/scripts/UtilsBezier"), a = cc._decorator, c = a.ccclass, l = a.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.berNodes = [];
e.totalSec = 10;
e.curSec = 0;
e.startGame = !1;
e.graphics = null;
return e;
}
e.prototype.start = function() {
this.scheduleOnce(this.play.bind(this), 1);
};
e.prototype.play = function() {
this.points = [];
for (var t = 0; t < this.berNodes.length; t++) {
var e = this.berNodes[t];
this.points.push(cc.v2(e.position.x, e.position.y));
}
this.startGame = !0;
this.drawBezierCurve(this.points, 100);
};
e.prototype.drawBezierCurve = function(t, e) {
this.graphics.clear();
if (!(t.length < 2)) {
this.graphics.moveTo(t[0].x, t[0].y);
for (var o = 1; o <= e; o++) {
var i = o / e, n = r.default.deCasteljau(t, i);
console.error("time:" + i + "----value:" + n.x + ":" + n.y);
this.graphics.lineTo(n.x, n.y);
}
this.graphics.stroke();
}
};
s([ l(cc.Node) ], e.prototype, "berNodes", void 0);
s([ l(cc.Graphics) ], e.prototype, "graphics", void 0);
return s([ c ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/fishframework/scripts/UtilsBezier": void 0
} ],
thunderFish: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c1cf8D8nsdHJp4xcRbOLe+t", "thunderFish");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__awaiter || function(t, e, o, i) {
return new (o || (o = Promise))(function(n, s) {
function r(t) {
try {
c(i.next(t));
} catch (t) {
s(t);
}
}
function a(t) {
try {
c(i.throw(t));
} catch (t) {
s(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(r, a);
var e;
}
c((i = i.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, i, n, s, r = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (o = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
r.label++;
return {
value: s[1],
done: !1
};

case 5:
r.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(n = r.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
r = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
r.label = s[1];
break;
}
if (6 === s[0] && r.label < n[1]) {
r.label = n[1];
n = s;
break;
}
if (n && r.label < n[2]) {
r.label = n[2];
r.ops.push(s);
break;
}
n[2] && r.ops.pop();
r.trys.pop();
continue;
}
s = e.call(t, r);
} catch (t) {
s = [ 6, t ];
i = 0;
} finally {
o = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../../scripts/common/event/CommonEvent"), l = t("../../../../scripts/common/utils/CmmUtils"), h = t("../../../../scripts/fishframework/scripts/bulletFactory"), f = t("../../../../scripts/fishframework/scripts/collision/fishCollision"), p = t("../../../../scripts/fishframework/scripts/dyfishCommon"), u = t("../../../../scripts/fishframework/scripts/fishFactory"), d = t("../../../../scripts/fishframework/scripts/fishTouchManager"), m = t("../../../../scripts/framework/defines/Macros"), y = t("../effects/fish15boom"), v = t("../game/fish1Tools"), g = cc._decorator, _ = g.ccclass, b = g.property, C = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lightEffect = null;
e.lightEffect2 = null;
e.boomEffect = null;
e.collision2003 = null;
e.rotatingFishMap = new Map();
e.lastFishNode = null;
return e;
}
e.prototype.initSpecialFishState = function() {
this.isSpecialFish = !0;
};
e.prototype.destorySelf = function() {
dispatch(c.ComponentGameEvent.ShakeCamera, 4);
if (this.curUID) {
this.isDeath = !0;
this.birthCollision();
} else t.prototype.destorySelf.call(this);
};
e.prototype.destorySelfByServer = function(t) {
var e = this;
if (this.deathAnim) {
this.deathAnim.play(null, 0);
this.scheduleOnce(function() {
var o = cc.instantiate(e.boomEffect);
o.setParent(h.default.instance.effectRoot);
o.position = e.node.position;
o.getComponent(y.default).play();
e.killFishesAnim(t);
}, 1);
}
};
e.prototype.birthCollision = function() {
if (d.default.self_uid == this.curUID) {
(t = cc.instantiate(this.collision2003)).setParent(h.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(f.default).initData({
type: this.type,
fid: this.id
});
} else if (d.default.self_BotMapUids.has(this.curUID)) {
var t;
(t = cc.instantiate(this.collision2003)).setParent(h.default.instance.effectRoot);
t.position = this.node.position;
t.getComponent(f.default).initData({
type: this.type,
fid: this.id,
uid: this.curUID
});
} else this.destroyByFactory();
};
e.prototype.killFishesAnim = function(t) {
return r(this, void 0, void 0, function() {
var e, o, i, n, s, r, c, f;
return a(this, function(a) {
switch (a.label) {
case 0:
return [ 4, l.CmmUtils.awaitTime(250) ];

case 1:
a.sent();
App.globalAudio.playBundleEffect("audios/fish21_0", m.Macro.BUNDLE_Fishing1);
return [ 4, l.CmmUtils.awaitTime(250) ];

case 2:
a.sent();
e = 300;
o = t.fids;
t.wins;
i = u.default.instance.getRenderFishs(o);
n = 0;
a.label = 3;

case 3:
return n < i.length ? !(s = i[n]) || s && s.isDeath ? [ 3, 6 ] : [ 3, 4 ] : [ 3, 7 ];

case 4:
s.isDeath = !0;
s.node.zIndex = cc.macro.MAX_ZINDEX;
(r = cc.instantiate(this.lightEffect)).setParent(h.default.instance.effectRoot);
if (this.rotatingFishMap.has(s.id)) return [ 3, 6 ];
this.rotatingFishMap.set(s.id, {
fish: s,
elapsed: 0
});
s.betLightAttackedEffect(r);
this.setLightning(s.node);
App.globalAudio.playBundleEffect("audios/fish21_1", m.Macro.BUNDLE_Fishing1);
return [ 4, l.CmmUtils.awaitTime(e) ];

case 5:
a.sent();
e -= 10;
a.label = 6;

case 6:
n++;
return [ 3, 3 ];

case 7:
return [ 4, l.CmmUtils.awaitTime(500) ];

case 8:
a.sent();
App.globalAudio.playBundleEffect("audios/fish21_2", m.Macro.BUNDLE_Fishing1);
return [ 4, l.CmmUtils.awaitTime(1500) ];

case 9:
a.sent();
this.rotatingFishMap.clear();
for (c = 0; c < i.length; c++) (f = i[c]) && u.default.instance.destoryFishById(f.id);
v.default.showGoldBoom(this.getLockPointWorldPos());
this.deathAnim = null;
this.deathBeforeAnim();
return [ 2 ];
}
});
});
};
e.prototype.updateOhterSomething = function(t) {
var e = this;
0 !== this.rotatingFishMap.size && this.rotatingFishMap.forEach(function(o, i) {
var n = o.fish;
if (n && n.node && n.node.isValid) {
o.elapsed += t;
n.node.angle += 250 * t;
if (o.elapsed >= 1) {
var s = e.node.position.clone(), r = n.node.position.clone(), a = s.sub(r), c = a.mag();
if (c > 1) {
var l = a.normalize().mul(100 * t);
l.mag() > c ? n.node.setPosition(s) : n.node.setPosition(r.add(l));
} else n.node.setPosition(s);
}
} else e.rotatingFishMap.delete(i);
});
};
e.prototype.setLightning = function(t) {
return r(this, void 0, void 0, function() {
var e, o, i, n, s;
return a(this, function(r) {
switch (r.label) {
case 0:
cc.isValid(this.lastFishNode) || (this.lastFishNode = this.node);
(e = cc.instantiate(this.lightEffect2)).setParent(h.default.instance.effectRoot);
o = App.utils.localConvertlocalPointAR_Vec3(this.lastFishNode, h.default.instance.effectRoot);
i = App.utils.localConvertlocalPointAR_Vec3(t, h.default.instance.effectRoot);
e.setPosition(o);
n = i.sub(o);
e.height = n.mag();
s = 180 * Math.atan2(n.y, n.x) / Math.PI;
e.angle = s - 90;
this.lastFishNode = t;
return [ 4, l.CmmUtils.awaitTime(1e3) ];

case 1:
r.sent();
e.destroy();
return [ 2 ];
}
});
});
};
s([ b(cc.Prefab) ], e.prototype, "lightEffect", void 0);
s([ b(cc.Prefab) ], e.prototype, "lightEffect2", void 0);
s([ b(cc.Prefab) ], e.prototype, "boomEffect", void 0);
s([ b(cc.Prefab) ], e.prototype, "collision2003", void 0);
return s([ _ ], e);
}(p.default);
o.default = C;
cc._RF.pop();
}, {
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/collision/fishCollision": void 0,
"../../../../scripts/fishframework/scripts/dyfishCommon": void 0,
"../../../../scripts/fishframework/scripts/fishFactory": void 0,
"../../../../scripts/fishframework/scripts/fishTouchManager": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../effects/fish15boom": "fish15boom",
"../game/fish1Tools": "fish1Tools"
} ],
torpedoboom: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e0f26IfHtdP2LgkFNY3hctZ", "torpedoboom");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, r = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (r = (s < 3 ? n(r) : s > 3 ? n(e, o, r) : n(e, o)) || r);
return s > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../../../../scripts/fishframework/scripts/bulletFactory"), a = t("../../../../scripts/fishframework/scripts/fishBaseEffect"), c = cc._decorator, l = c.ccclass, h = (c.property, 
function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.play = function(t, e) {
var o = this;
this.node.opacity = e ? 150 : 255;
this.node.setParent(r.default.instance.effectRoot);
this.node.position = App.utils.localConvertlocalPointAR_Vec3(t, r.default.instance.effectRoot);
this.boomAnimation.play(null, 0);
this.scheduleOnce(function() {
o.node.destroy();
}, 1);
};
e.prototype.play2 = function() {};
return s([ l ], e);
}(a.default));
o.default = h;
cc._RF.pop();
}, {
"../../../../scripts/fishframework/scripts/bulletFactory": void 0,
"../../../../scripts/fishframework/scripts/fishBaseEffect": void 0
} ]
}, {}, [ "Fishing1Entry", "EnergyPower", "MissileMove", "TorpedoBullet", "FishPlayer", "EnergyPowerEffect", "fish15boom", "fish1addscore", "fish1addscore2", "glodboom", "torpedoboom", "anemoneFish", "crabFish", "thunderFish", "energyCicleReward", "fish1Tools", "fishCicleReward", "fishing1BossComming", "fishing1Manager", "fishing1_anim", "Fishing1Cmd", "Fishing1Event", "Fishing1Handler", "Fishing1Sender", "Fishing1Service", "AutoFishingPanel", "Fishing1Nodes", "Fishing1View", "FishingSurePanel", "testBer" ]);