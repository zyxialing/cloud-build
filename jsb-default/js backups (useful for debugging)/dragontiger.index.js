window.__require = function e(t, o, i) {
function n(a, s) {
if (!o[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var p = o[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return n(t[a][1][e] || e);
}, p, p.exports, e, t, o, i);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
DragonGameController: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "dbec3K2JSFC67umn/sAk+XL", "DragonGameController");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../scripts/tableCommon/bet_area"), s = e("../../../scripts/tableCommon/bet_my_seat"), l = e("../../../scripts/tableCommon/bet_seat"), c = e("../../../scripts/tableCommon/bet_seat_list"), p = cc._decorator, d = p.ccclass, u = p.property, h = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.fapaiAnim = null;
t.betPercentLabels = [];
t.desktop = null;
t.coinBetGroupSp = null;
t.beginCoinNode = null;
t.betCoinNode = null;
t.flyCoin = null;
t.userBetAreas = [];
t.nositBtn = null;
t.nositLabel = null;
t.my_seat = null;
t.list_seat = null;
t.node_bet_players = [];
t.poupBg = null;
t.poupSp = null;
t.cutDownBgSp = null;
t.cardBackSp0 = null;
t.cardBackSp1 = null;
t.vsSpineNode = null;
t.longWinSpine = null;
t.heWinSprite = null;
t.superHeWinSprite = null;
t.huWinSpine = null;
t.historyList = null;
t.longAnimalSpine = null;
t.huAnimalSpine = null;
t.vsSprite = null;
t.waitNode = null;
t.waitForNextGameService = null;
t.waitTime = 0;
t.iconScale = .9;
t.moveAndRemove = !1;
return t;
}
r([ u(cc.Animation) ], t.prototype, "fapaiAnim", void 0);
r([ u({
displayName: "投注百分比",
type: cc.Label
}) ], t.prototype, "betPercentLabels", void 0);
r([ u({
displayName: "桌面",
type: cc.Node
}) ], t.prototype, "desktop", void 0);
r([ u({
displayName: "下注筹码预制体",
type: cc.Prefab
}) ], t.prototype, "coinBetGroupSp", void 0);
r([ u({
displayName: "自己下注fly位置",
type: cc.Node
}) ], t.prototype, "beginCoinNode", void 0);
r([ u({
displayName: "下注容器",
type: cc.Node
}) ], t.prototype, "betCoinNode", void 0);
r([ u({
displayName: "结束fly位置",
type: cc.Node
}) ], t.prototype, "flyCoin", void 0);
r([ u({
displayName: "下注区域列表",
type: [ a.default ]
}) ], t.prototype, "userBetAreas", void 0);
r([ u({
displayName: "人数按钮",
type: cc.Button
}) ], t.prototype, "nositBtn", void 0);
r([ u({
displayName: "在线人数",
type: cc.Label
}) ], t.prototype, "nositLabel", void 0);
r([ u({
displayName: "my_seat",
type: s.default
}) ], t.prototype, "my_seat", void 0);
r([ u({
displayName: "list_seat",
type: c.default
}) ], t.prototype, "list_seat", void 0);
r([ u({
displayName: "seats",
type: [ l.default ]
}) ], t.prototype, "node_bet_players", void 0);
r([ u({
displayName: "poupBg",
type: cc.Node
}) ], t.prototype, "poupBg", void 0);
r([ u({
displayName: "poupSp",
type: cc.Sprite
}) ], t.prototype, "poupSp", void 0);
r([ u({
displayName: "cutDownBgSp",
type: cc.Sprite
}) ], t.prototype, "cutDownBgSp", void 0);
r([ u({
displayName: "cardBackSp0",
type: cc.Sprite
}) ], t.prototype, "cardBackSp0", void 0);
r([ u({
displayName: "cardBackSp1",
type: cc.Sprite
}) ], t.prototype, "cardBackSp1", void 0);
r([ u({
displayName: "vsSpineNode",
type: cc.Node
}) ], t.prototype, "vsSpineNode", void 0);
r([ u({
displayName: "longWinSpine",
type: cc.Node
}) ], t.prototype, "longWinSpine", void 0);
r([ u({
displayName: "heWinSprite",
type: cc.Sprite
}) ], t.prototype, "heWinSprite", void 0);
r([ u({
displayName: "superHeWinSprite",
type: cc.Sprite
}) ], t.prototype, "superHeWinSprite", void 0);
r([ u({
displayName: "huWinSpine",
type: cc.Node
}) ], t.prototype, "huWinSpine", void 0);
r([ u({
displayName: "historyList",
type: cc.Node
}) ], t.prototype, "historyList", void 0);
r([ u({
displayName: "longAnimalSpine",
type: cc.Node
}) ], t.prototype, "longAnimalSpine", void 0);
r([ u({
displayName: "huAnimalSpine",
type: cc.Node
}) ], t.prototype, "huAnimalSpine", void 0);
r([ u({
displayName: "VS节点",
type: cc.Sprite
}) ], t.prototype, "vsSprite", void 0);
r([ u({
displayName: "等待定时器",
type: cc.Node
}) ], t.prototype, "waitNode", void 0);
r([ u ], t.prototype, "iconScale", void 0);
r([ u ], t.prototype, "moveAndRemove", void 0);
return r([ d ], t);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../scripts/tableCommon/bet_area": void 0,
"../../../scripts/tableCommon/bet_my_seat": void 0,
"../../../scripts/tableCommon/bet_seat": void 0,
"../../../scripts/tableCommon/bet_seat_list": void 0
} ],
DragonTigerCmd: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "1777dqvKKlPabyeH3q1aCYO", "DragonTigerCmd");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SUB_CMD_DT = void 0;
o.SUB_CMD_DT = {
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
DragonTigerEntry: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "761e1rZNyVI9K9rAvUaeEZi", "DragonTigerEntry");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../scripts/framework/core/entry/Entry"), s = e("../../../scripts/framework/defines/Macros"), l = e("../../../scripts/framework/defines/Decorators"), c = e("./view/DragonTigerView");
(function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.loadResources = function(e) {
e();
};
t.prototype.initData = function() {};
t = r([ l.registerEntry("DragonTigerEntry", s.Macro.BUNDLE_dragontiger, c.default) ], t);
})(a.Entry);
cc._RF.pop();
}, {
"../../../scripts/framework/core/entry/Entry": void 0,
"../../../scripts/framework/defines/Decorators": void 0,
"../../../scripts/framework/defines/Macros": void 0,
"./view/DragonTigerView": "DragonTigerView"
} ],
DragonTigerEvent: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "86d09D90T1Pl48HQcCjhyF5", "DragonTigerEvent");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DragonTigerEvent = void 0;
(o.DragonTigerEvent || (o.DragonTigerEvent = {})).DragonTigerServerEvent = "DragonTigerServerEvent__";
cc._RF.pop();
}, {} ],
DragonTigerHandler: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d6f1ddnO7tI3KW473mneKT7", "DragonTigerHandler");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = e("../../../../scripts/framework/core/net/service/Handler"), a = e("../../../../scripts/common/net/GetCmdKey"), s = e("../../../../scripts/common/net/CommonGameJson"), l = e("./DragonTigerService"), c = e("../../../../scripts/framework/defines/Macros"), p = e("../../../../scripts/common/utils/CmmUtils"), d = e("./DragonTigerCmd"), u = e("./DragonTigerSender"), h = e("./DragonTigerEvent"), m = e("../../../../scripts/common/net/CmdDefines"), _ = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "service", {
get: function() {
return App.serviceManager.get(l.DragonTigerService);
},
enumerable: !1,
configurable: !0
});
t.prototype.onLoad = function() {
e.prototype.onLoad.call(this);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, m.SUB_CMD_SYS.CMD_Game_Time_Out), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SERVER_GAME_HEART), this.server_game_heart, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_LOGIN_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_TABLEINFO_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_PER_SECOND_BET_INFO), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_HISTORY_RECORD_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_NOTIFY_COMMING_REST), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_STAND_UP_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_NOTIFY_BET), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_NOTIFY_START), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_SIT_DOWN_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_LOGOUT_SUCC_BC_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_BET_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_NOTIFY_ROLL_RESULT), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SERVER_CHAT_BC), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_BET_CHANGE_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_PLAYERS_INFO_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.SM_REPEAT_BET_RETURN), this.commfunction, s.CommonGameJson);
this.onS(a.GetCmdKey(m.MainCmd.CMD_GAME, d.SUB_CMD_DT.GF_EMOTION_REQ), this.commfunction, s.CommonGameJson);
};
t.prototype.server_game_heart = function() {};
t.prototype.commfunction = function(e) {
if (e.subCmd == m.SUB_CMD_SYS.CMD_Game_Time_Out) {
var t = App.senderManager.get(u.DragonTigerSender);
p.CmmUtils.popRet1(e.data, t);
} else dispatch(h.DragonTigerEvent.DragonTigerServerEvent, e);
};
t.module = c.Macro.BUNDLE_dragontiger;
return t;
}(r.Handler);
o.default = _;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CmdDefines": void 0,
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/GetCmdKey": void 0,
"../../../../scripts/common/utils/CmmUtils": void 0,
"../../../../scripts/framework/core/net/service/Handler": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./DragonTigerCmd": "DragonTigerCmd",
"./DragonTigerEvent": "DragonTigerEvent",
"./DragonTigerSender": "DragonTigerSender",
"./DragonTigerService": "DragonTigerService"
} ],
DragonTigerSender: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b078cL2X4RBUoab1MORzIOa", "DragonTigerSender");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DragonTigerSender = void 0;
var r = e("../../../../scripts/common/net/CommonGameJson"), a = e("../../../../scripts/common/net/HttpSender"), s = e("../../../../scripts/framework/defines/Macros"), l = e("./DragonTigerCmd"), c = e("./DragonTigerService"), p = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "service", {
get: function() {
return App.serviceManager.get(c.DragonTigerService);
},
enumerable: !1,
configurable: !0
});
t.prototype.reconnect = function() {
this.service.connect();
};
t.prototype.close = function() {
this.service.close();
};
t.prototype.login = function() {
var e = new r.CommonGameJson();
e.subCmd = l.SUB_CMD_DT.GM_LOGIN_REQUEST;
this.send(e);
};
t.prototype.logout = function() {
var e = new r.CommonGameJson();
e.subCmd = l.SUB_CMD_DT.GM_LOGINOUT_REQUEST;
this.send(e);
};
t.prototype.send_online_player = function(e) {
void 0 === e && (e = 1);
var t = new r.CommonGameJson();
t.subCmd = l.SUB_CMD_DT.GM_PLAYERS_INFO_REQUEST;
t.data.page = e;
this.send(t);
};
t.prototype.send_history = function() {
var e = new r.CommonGameJson();
e.subCmd = l.SUB_CMD_DT.GM_HISTORY_RECORD_REQUSET;
this.send(e);
};
t.prototype.send_change_bet = function(e) {
var t = new r.CommonGameJson();
t.subCmd = l.SUB_CMD_DT.GM_NOTIFY_BET_CHANGE;
t.data.cur_bet = e;
this.send(t);
};
t.prototype.send_request_down_bet = function(e, t) {
var o = new r.CommonGameJson();
o.subCmd = l.SUB_CMD_DT.GM_BET_REQUEST;
o.data.bet = e;
o.data.option = t;
this.send(o);
};
t.prototype.send_rebet = function() {
var e = new r.CommonGameJson();
e.subCmd = l.SUB_CMD_DT.GM_REPEAT_BET_REQUEST;
this.send(e);
};
t.prototype.send_chat_text = function(e, t) {
var o = new r.CommonGameJson();
o.subCmd = l.SUB_CMD_DT.GF_EMOTION_REQ;
o.data.text = e;
o.data.seatid = t;
this.send(o);
};
t.module = s.Macro.BUNDLE_dragontiger;
return t;
}(a.default);
o.DragonTigerSender = p;
cc._RF.pop();
}, {
"../../../../scripts/common/net/CommonGameJson": void 0,
"../../../../scripts/common/net/HttpSender": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"./DragonTigerCmd": "DragonTigerCmd",
"./DragonTigerService": "DragonTigerService"
} ],
DragonTigerService: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "b6345BemQVC1KXDwJnM7b7v", "DragonTigerService");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
});
Object.defineProperty(o, "__esModule", {
value: !0
});
o.DragonTigerService = void 0;
var r = e("../../../../scripts/common/config/Config"), a = e("../../../../scripts/common/net/CommonService"), s = e("../../../../scripts/framework/defines/Macros"), l = e("../../../../scripts/sdk/GameNativeConfig"), c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.priority = r.NetPriority.Game;
return t;
}
t.prototype.onOpen = function(t) {
e.prototype.onOpen.call(this, t);
dispatch(l.default.Event.game_open);
};
t.prototype.onClose = function(t) {
e.prototype.onClose.call(this, t);
dispatch(l.default.Event.game_close);
};
t.module = s.Macro.BUNDLE_dragontiger;
return t;
}(a.CommonService);
o.DragonTigerService = c;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/net/CommonService": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0
} ],
DragonTigerView: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "66920fRDDRGVLwXNTTY6ayN", "DragonTigerView");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../../scripts/common/config/Config"), s = e("../../../../scripts/common/config/GlobalVar"), l = e("../../../../scripts/common/config/User"), c = e("../../../../scripts/common/event/CommonEvent"), p = e("../../../../scripts/common/protocol/HeartbetJson"), d = e("../../../../scripts/common/utils/CmmAudio"), u = e("../../../../scripts/common/utils/RandomUtil"), h = e("../../../../scripts/common/utils/UIUtils"), m = e("../../../../scripts/framework/componects/AudioComponent"), _ = e("../../../../scripts/framework/core/ui/GameView"), f = e("../../../../scripts/framework/defines/Decorators"), g = e("../../../../scripts/framework/defines/Enums"), y = e("../../../../scripts/framework/defines/Macros"), C = e("../../../../scripts/login/view/CommonUIHelper"), v = e("../../../../scripts/sdk/GameNativeConfig"), S = e("../../../../scripts/tableCommon/BarrageNode"), b = e("../../../../scripts/tableCommon/CardHelp"), T = e("../../../../scripts/tableCommon/OnlineView"), D = e("../../../../scripts/tableCommon/WaitForNextGameService"), A = e("../../../../scripts/tableCommon/bet_action"), B = e("../../../../scripts/tableCommon/robot/RobotEvent"), R = e("../../../../scripts/tableCommon/robot/TableRobot"), N = e("../../../../scripts/tableCommon/tableCountTime"), M = e("../../src_a5/DragonGameController"), w = e("../../src_a5/lhdHistoryPanel"), L = e("../net/DragonTigerCmd"), E = e("../net/DragonTigerEvent"), I = e("../net/DragonTigerHandler"), O = e("../net/DragonTigerSender"), P = e("../net/DragonTigerService"), G = cc._decorator, k = G.ccclass, U = (G.property, 
function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.longEatCoinPos = null;
t.huEatCoinPos = null;
t.betBtn0 = null;
t.betBtn1 = null;
t.betBtn2 = null;
t.betBtn3 = null;
t.more_button = null;
t.lastBtn = null;
t.operatorBgSp = null;
t.selfNode = null;
t.itemPool = new cc.NodePool();
t._history_record = [];
t.sender = App.senderManager.get(O.DragonTigerSender);
t._chip_list = [];
t._bet_config = [];
return t;
}
t.getPrefabUrl = function() {
return "prefabs/DragonTigerView";
};
t.prototype.bindingNetServer = function() {
this.server = App.serviceManager.get(P.DragonTigerService, !0);
this.sender = App.senderManager.get(O.DragonTigerSender);
App.handlerManager.get(I.default);
var e = s.GlobalVar.host.split(":"), t = e[1].replace("//", ""), o = e[2], i = e[0];
this.server.initIP_PORT(t, o, i);
this.server.heartbeat = p.HeartbeatJson;
this.server.maxEnterBackgroundTime = 5;
this.sender.reconnect();
};
t.prototype.removeNetServer = function() {
App.senderManager.destory(O.DragonTigerSender);
App.handlerManager.destory(I.default);
App.serviceManager.destory(P.DragonTigerService);
this.offD(v.default.Event.game_close);
this.offD(c.ComponentGameEvent.Game_Exit_Event);
};
t.prototype.onLoad = function() {
var t = this;
s.GlobalVar.curGameId = v.default.GameType.DragonTiger;
this.bundle = y.Macro.BUNDLE_dragontiger;
this.gameController = this.node.getComponent(M.default);
this.initNode();
e.prototype.onLoad.call(this);
this.initUIEvent();
this.refresh();
this.playMusic("sound/dvt_bg");
h.default.getPrefab(y.Macro.BUNDLE_RESOURCES, "prefabs/effect/particle_star").then(function(e) {
t.flyLiziObj = e;
});
this.resetCurBetAreaInfo();
};
t.prototype.resetCurBetAreaInfo = function() {
this.curBetAreaInfo = [];
for (var e = 0; e < this.gameController.userBetAreas.length; e++) this.curBetAreaInfo.push({
allbet: 0,
option: e,
selfbet: 0,
players: 0
});
};
t.prototype.initNode = function() {
this.operatorBgSp = cc.find("desktop/operatorBgSp", this.node).getComponent(A.default);
null == this.gameController.waitForNextGameService && (this.gameController.waitForNextGameService = this.gameController.waitNode.getComponent(D.default));
};
t.prototype.addEvents = function() {
var e = this;
this.onD(v.default.Event.game_open, this.openReconn);
this.onD(v.default.Event.game_close, this.onClosed);
this.onD(E.DragonTigerEvent.DragonTigerServerEvent, this.parseGameMsg);
this.onD(c.ComponentGameEvent.Game_Exit_Event, this.onClickExit.bind(this));
this.onD(v.default.Event.send_game_page, function(t) {
e.sender.send_online_player(t);
});
this.onD(B.default.refreshRobotNum, function(t) {
e.handler_server_online_players_count(t);
});
this.onD(B.default.finishRobotInit, function() {
var t = R.default.getDeskRobots(), o = [];
t.forEach(function(e) {
o.push(e);
});
e.init_seats(o);
});
this.onD(B.default.deskRobotLeave, function(t) {
e.LeaveDeskRobot(t);
});
this.onD(B.default.deskRobotJoin, function(t) {
e.enterRobotDesk(t);
});
this.onD(B.default.handler_server_xiazhu_robot, this.handler_server_xiazhu_robot.bind(this));
};
t.prototype.initUIEvent = function() {
var e = this;
this.onN(this.betBtn0, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickArea(0);
});
this.onN(this.betBtn1, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickArea(1);
});
this.onN(this.betBtn2, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickArea(2);
});
this.onN(this.betBtn3, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickArea(3);
});
this.onN(this.more_button, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickHistoryMore();
});
this.onN(this.lastBtn, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
e.onClickRebet();
});
this.onN(this.gameController.nositBtn.node, g.NodeEvent.click, function() {
App.globalAudio.playButtonClick();
App.uiManager.open({
type: T.default,
bundle: y.Macro.BUNDLE_RESOURCES,
zIndex: a.ViewZOrder.UI
});
});
};
t.prototype.refresh = function() {};
t.prototype.openReconn = function() {
this.sender.login();
};
t.prototype.parseGameMsg = function(e) {
var t = e.subCmd, o = e.data;
t == L.SUB_CMD_DT.SM_HISTORY_RECORD_RETURN ? this.handler_server_history_recode_return(o) : t == L.SUB_CMD_DT.SM_LOGIN_RETURN ? this.handler_server_login_return(o) : t == L.SUB_CMD_DT.SM_TABLEINFO_RETURN ? this.handler_server_tableinfo(o) : t == L.SUB_CMD_DT.SM_SIT_DOWN_BC ? this.handler_server_richaseainfo(o) : t == L.SUB_CMD_DT.SM_LOGOUT_SUCC_BC_RETURN ? this.handler_server_logout_succ_bc(o) : t == L.SUB_CMD_DT.SM_BET_RETURN ? this.handler_server_xiazhu(o) : t == L.SUB_CMD_DT.SM_NOTIFY_ROLL_RESULT ? this.handler_server_game_end(o) : t == L.SUB_CMD_DT.SERVER_CHAT_BC || (t == L.SUB_CMD_DT.SM_NOTIFY_BET ? this.handler_server_notify_bet(o) : t == L.SUB_CMD_DT.SM_NOTIFY_START ? this.handler_server_notify_start(o) : t == L.SUB_CMD_DT.SM_BET_CHANGE_RETURN ? this.handler_server_bet_change_return(o) : t == L.SUB_CMD_DT.SM_STAND_UP_BC ? this.handler_server_stand_up_bc(o) : t == L.SUB_CMD_DT.SM_NOTIFY_COMMING_REST || (t == L.SUB_CMD_DT.SM_REPEAT_BET_RETURN ? this.handler_server_repeat_bet_return(o) : t == L.SUB_CMD_DT.GF_EMOTION_REQ && this.onTalkChat(o)));
};
t.prototype.updateSelfMoney = function(e) {
l.default.self.updateGameMoney(e);
};
t.prototype.getOption = function(e) {
return e.option;
};
t.prototype.sendCoin = function(e, t) {
var o = this.isMySeat(t), i = cc.v2(0, 0);
if (o) {
var n = App.utils.localConvertWorldPointAR(this.gameController.beginCoinNode);
i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, n);
this.gameController.userBetAreas[e].show_bet_blink();
} else {
var r = this.getSeatByID(t);
if (r) {
var a = App.utils.localConvertWorldPointAR(r.node);
i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, a);
r.play_bounce();
} else {
var s = App.utils.localConvertWorldPointAR(this.gameController.nositBtn.node);
i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, s);
}
}
var l = {
beginPos: i,
id: t,
areaIndex: e,
haveAudio: !0
};
this.addFly(l);
};
t.prototype.addFly = function(e) {
var t = this.randomNum(e.areaIndex), o = this.icon_instantiate();
o.setPosition(e.beginPos);
o.setScale(this.gameController.iconScale);
this.gameController.betCoinNode.addChild(o);
e.delay > 1 && (e.delay = 1);
var i = null == e.newPos ? e.beginPos : e.newPos;
this._chip_list.push({
node: o,
id: e.uid,
pos: i,
index: e.areaIndex
});
var n = this.isMySeat(e.uid), r = u.RandomUtil.randomFRange(-30, 30), a = r + 15, s = cc.Vec2.distance(e.beginPos, t) / 1200;
cc.tween(o).delay(e.delay).call(function() {
e.haveAudio && (n ? App.globalAudio.playBundleEffect(d.CmmAudio.common_mebet, y.Macro.BUNDLE_RESOURCES) : m.default.playLargeEffect(d.CmmAudio.common_chipmove, y.Macro.BUNDLE_RESOURCES));
}).to(s, {
position: cc.v3(t.x, t.y, 0)
}, {
easing: "quadOut"
}).to(.088, {
scale: 1.08,
angle: r
}).to(.088, {
scale: 1,
angle: a
}).start();
};
t.prototype.icon_instantiate = function() {
var e = this.itemPool.get();
null == e && (e = cc.instantiate(this.gameController.coinBetGroupSp));
e.opacity = 255;
return e;
};
t.prototype.randomNum = function(e) {
var t = this.gameController.userBetAreas[e];
if (null == t) return null;
var o = App.utils.localConvertWorldPointAR(t.arrived), i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, o), n = t.arrived.width / 2, r = t.arrived.height / 2;
i.x = i.x + 2 * Math.random() * n - n;
i.y = i.y + 2 * Math.random() * r - r;
return i;
};
t.prototype.isMySeat = function(e) {
return s.GlobalVar.game_uid == e;
};
t.prototype.getSeatByID = function(e) {
var t = R.default.getSeatID(e);
return this.gameController.node_bet_players[t];
};
t.prototype.getSeatBySeatID = function(e) {
return this.gameController.node_bet_players[e];
};
t.prototype.seat_area_info = function(e) {
var t = this, o = this.getOption(e), i = this.gameController.userBetAreas[o];
if (null != i) {
var n = {};
if (this.curBetAreaInfo) {
var r = R.default.areasTotalMoney[e.option];
if (r) {
n.option = e.option;
n.allbet = r.allbet + r.allRelBet;
n.players = r.relPlayers + r.players.size;
n.selfbet = r.selfbet;
n.multiple = r.multiple;
} else n = e;
this.curBetAreaInfo[n.option] = n;
var a = this.curBetAreaInfo[0].allbet + this.curBetAreaInfo[3].allbet;
this.curBetAreaInfo.forEach(function(e) {
e.allbet > 0 && t.gameController.userBetAreas[e.option].ShowBetTip();
});
var s = Math.floor(this.curBetAreaInfo[0].allbet / a * 100);
0 == s && this.curBetAreaInfo[0].allbet > 0 && (s = 1);
this.gameController.betPercentLabels[0].node.parent.active = s > 0;
this.gameController.betPercentLabels[0].string = s + "%";
var l = 100 - s;
this.gameController.betPercentLabels[1].string = l + "%";
this.gameController.betPercentLabels[1].node.parent.active = l > 0;
}
i.refresh_info(n.allbet, n.selfbet, n.multiple, n.players);
this._hasBet || (this._hasBet = n.selfbet > 0);
}
};
t.prototype._init = function() {
this.node.active || (this.node.active = !0);
};
t.prototype.init_bet_config = function(e, t, o) {
this._bet_config = e;
if (this.operatorBgSp) {
this.operatorBgSp.initChips(e, function(e) {
o && o(e);
});
this.operatorBgSp.select_chip(t);
}
};
t.prototype.init_seats = function(e) {
if (null != e) for (var t = 0; t < e.length; t++) {
var o = e[t], i = this.getSeatByID(o.id);
null != i && i.sitdown(o);
}
};
t.prototype.init_area_random_info_robot = function(e, t) {
for (var o = R.default.initBetAreaRelTempData(e, t), i = Array.from(R.default.areasTotalMoney), n = [], r = 0; r < i.length; r++) {
var a = i[r];
n.push(a);
}
return {
areaList: n,
chipList: o
};
};
t.prototype.init_area_info = function(e, t) {
if (null != e) {
this.curBetAreaInfo = e;
for (var o = 0; o < e.length; o++) this.seat_area_info(e[o]);
console.error(t);
if (t) for (o = 0; o < t.length; o++) {
var i = t[o];
this.addLastChip(i.option, i.id);
}
}
};
t.prototype.addLastChip = function(e, t) {
var o = App.utils.localConvertWorldPointAR(this.gameController.nositBtn.node), i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, o), n = this.randomNum(e), r = this.icon_instantiate();
r.setPosition(n);
r.setScale(this.gameController.iconScale);
this.gameController.betCoinNode.addChild(r);
this.gameController.moveAndRemove && (r.opacity = 0);
if (t) if (this.isMySeat(t)) {
var a = App.utils.localConvertWorldPointAR(this.gameController.beginCoinNode);
i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, a);
} else {
var s = this.getSeatByID(t);
if (null != s) {
var l = App.utils.localConvertWorldPointAR(s.node);
i = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, l);
}
}
this._chip_list.push({
node: r,
id: t,
pos: i,
index: e
});
};
t.prototype.playGameAniByType = function(e, t) {
var o = this;
if (this.gameController.poupBg) {
this.gameController.poupBg.active = !0;
this.gameController.poupBg.opacity = 0;
this.gameController.poupBg.position = cc.v3(-308, 0, 0);
if (0 == e) {
var i = App.zLan.getIcon(3001);
h.default.setSprite(this.gameController.poupSp.getComponent(cc.Sprite), i.bundle, i.path);
App.globalAudio.playBundleEffect(d.CmmAudio.common_placeyoubets, y.Macro.BUNDLE_RESOURCES);
R.default.setOnlinePlayerBetting(!0);
} else if (1 == e) {
i = App.zLan.getIcon(3002);
h.default.setSprite(this.gameController.poupSp.getComponent(cc.Sprite), i.bundle, i.path);
App.globalAudio.playBundleEffect(d.CmmAudio.common_stopBet, y.Macro.BUNDLE_RESOURCES);
this.clearDesktop();
R.default.setOnlinePlayerBetting(!1);
}
cc.tween(this.gameController.poupBg).to(.28, {
opacity: 255,
position: cc.Vec3.ZERO
}).delay(.88).to(.28, {
opacity: 0,
position: cc.v3(308, 0, 0)
}).call(function() {
o.gameController.poupBg.active = !0;
t && t();
}).start();
}
};
t.prototype.onTalkChat = function(e) {
var t = e.text;
if ("#" == t.charAt(0)) {
var o = "images/emoji/" + t.replace("#", "");
Log.d("收到表情:", o);
} else Log.d("收到信息:", t);
S.default.create(e, this.node);
};
t.prototype.handler_server_repeat_bet_return = function(e) {
Log.d("=======自己重复下注:", e);
if (0 == e.ret) {
this.updateSelfMoney(e.money);
for (var t = 0; t < e.betAreaInfo.length; t++) {
var o = e.betAreaInfo[t], i = this.getOption(o);
R.default.setCurBetAreaRelTempData(o, !0);
if (o.selfbet > 0) {
var n = this._bet_config[0], r = Math.ceil(o.selfbet / n);
r > 10 && (r = 10);
for (var a = 0; a < r; a++) this.sendCoin(i, s.GlobalVar.game_uid);
}
R.default.updatePlayerData(e);
this.seat_area_info(o);
}
} else 1 == e.pop_addcash ? C.default.isNeedShowRecharge(e.bet, l.default.self.data.gameMoney) : App.tips.show(e.err_msg);
};
t.prototype.handler_server_online_players_count = function(e) {
this.gameController.nositLabel.string = "" + e;
};
t.prototype.handler_server_history_recode_return = function(e) {
if (this._clickHistory) {
this._clickHistory = !1;
h.default.showPrefab(this.bundle, "prefab_a5/lhdHistoryMorePanel").then(function(t) {
t.getComponent("dragontiger_history_panel").load_list(e.history_record);
});
}
};
t.prototype.LeaveDeskRobot = function(e) {
var t = this.getSeatBySeatID(e.seatid);
Log.d("======jiqi离开:", e);
t && t.stand();
};
t.prototype.handler_server_stand_up_bc = function(e) {
var t = this.getSeatByID(e.uid);
Log.d("======土豪离开:", e);
t && t.stand();
R.default.leavePlayer(e.uid);
};
t.prototype.handler_server_login_return = function(e) {
R.default.init(e, 5);
if (0 == e.ret) this.gameController.waitTime = e.ps; else {
App.tips.show(e.alertStr);
this.doExitGame();
}
};
t.prototype.handler_server_tableinfo = function(e) {
var t = this;
Log.e("==========龙虎桌子信息:", e);
this._init();
R.default.initAreasMultiple(e.betAreaInfo);
this.flushGame();
this.init_bet_config(e.bet_config, e.cur_bet, function(e) {
t.sender.send_change_bet(e);
});
this._history_record = e.history_record || [];
this.updateSelfMoney(e.money);
this.operatorBgSp.hideOperator();
this.reconnectResult(e);
this.showHistoryByData();
};
t.prototype.reconnectResult = function(e) {
var t = e.betAreaInfo, o = null;
if (0 == e.state) {
this.showWaiting(App.zLan.getBundleString(1001), e.cd);
this.gameController.vsSprite.node.active = !0;
this.gameController.cutDownBgSp.node.active = !1;
this._currentGameing = !1;
R.default.gameIsBetting = !1;
this.init_area_info(t, o);
} else if (1 == e.state) {
this.gameController.vsSprite.node.active = !1;
this._currentGameing = !0;
R.default.gameIsBetting = e.cd > 1;
this.operatorBgSp.showOperator(1 == e.repeat && e.cd > 1);
this.setCutDownTimes(e.cd);
t = (i = this.init_area_random_info_robot(e.betAreaInfo, e.cd)).areaList;
o = i.chipList;
this.init_area_info(t, o);
} else {
var i;
t = (i = this.init_area_random_info_robot(e.betAreaInfo, 0)).areaList;
o = i.chipList;
this.init_area_info(t, o);
this.gameController.vsSprite.node.active = !0;
this.gameController.cutDownBgSp.node.active = !1;
this._currentGameing = !1;
R.default.gameIsBetting = !1;
if (e.gameRecord) if (e.cd > 4) {
this._history_record.length > 0 && (this._history_record = this._history_record.slice(0, this._history_record.length - 1));
var n = e.cd - 4;
this.showWaiting(App.zLan.getBundleString(1001), n);
this.scheduleOnce(this.playResult.bind(this, e.gameRecord, !1, !1), n);
} else {
this.showWaiting(App.zLan.getBundleString(1001), e.cd);
this.playResult(e.gameRecord, !1, !0);
}
}
};
t.prototype.playResult = function(e, t, o) {
var i = this;
void 0 === t && (t = !0);
void 0 === o && (o = !1);
var n = e.long_card, r = e.hu_card, a = e.win_op, s = {
win_op: e.win_op,
rich_players: e.rich_players,
isTie: 1 == e.win_op || 2 == e.win_op
}, l = R.default.updatePlayers(s, 1), c = l.deskWinPlayers;
if (this.gameController.cardBackSp0) {
this.gameController.cardBackSp0.node.active = !0;
var p = cc.find("cardSp", this.gameController.cardBackSp0.node), u = cc.find("cardValueSp", p);
if (t) this.gameController.cardBackSp0.node.runAction(cc.sequence(cc.delayTime(.01), cc.show(), cc.scaleTo(.1, -.1, .8), cc.callFunc(function() {
App.globalAudio.playHallEffect(d.CmmAudio.common_kaipai);
p.active = !0;
b.default.loadSpriteFrameForAltas("table_common/textures/cards/card_tex", "card" + n, u.getComponent(cc.Sprite));
}, this.gameController.cardBackSp0.node), cc.delayTime(.05), cc.scaleTo(.1, .8, .8), cc.delayTime(1), cc.callFunc(function() {
i.playEffect("sound/" + n % 16);
}, this.gameController.cardBackSp0.node))); else {
p.active = !0;
b.default.loadSpriteFrameForAltas("table_common/textures/cards/card_tex", "card" + n, u.getComponent(cc.Sprite));
}
}
if (this.gameController.cardBackSp1) {
this.gameController.cardBackSp1.node.active = !0;
var h = cc.find("cardSp", this.gameController.cardBackSp1.node), m = cc.find("cardValueSp", h);
if (t) this.gameController.cardBackSp1.node.runAction(cc.sequence(cc.delayTime(.01), cc.show(), cc.scaleTo(.1, -.1, .8), cc.callFunc(function() {
h.active = !0;
App.globalAudio.playHallEffect(d.CmmAudio.common_kaipai);
b.default.loadSpriteFrameForAltas("table_common/textures/cards/card_tex", "card" + r, m.getComponent(cc.Sprite));
}, this.gameController.cardBackSp1.node), cc.delayTime(.05), cc.scaleTo(.1, .8, .8), cc.delayTime(2), cc.callFunc(function() {
i.playEffect("sound/" + r % 16);
i.showShanGuang(a);
}, this.gameController.cardBackSp1.node), cc.delayTime(2), cc.callFunc(function() {
i.showWinSpBlinkAndFly(a, e);
}, this.gameController.cardBackSp1.node))); else {
h.active = !0;
b.default.loadSpriteFrameForAltas("table_common/textures/cards/card_tex", "card" + r, m.getComponent(cc.Sprite));
if (!o) {
this.showShanGuang(a);
this.showWinSpBlinkAndFly(a, e);
}
}
}
for (var _ = 0; _ < c.length; _++) {
var f = c[_], g = this.getSeatByID(f.id);
null != g && g.setLastMoney(f.money, f.winscore);
}
this.gameController.list_seat.setLastMoney(l.listTotalWin);
this.gameController.my_seat.setLastMoney(l.selfTotalWin);
R.default.setOnlinePlayerLeftTimes();
};
t.prototype.showWaiting = function(e, t) {
this.gameController.waitForNextGameService.Show(e, t, !0);
};
t.prototype.enterRobotDesk = function(e) {
var t = this.getSeatBySeatID(e.seatid);
null != t && t.sitdown(e);
};
t.prototype.handler_server_richaseainfo = function(e) {
var t = R.default.joinPlayer(e), o = this.getSeatByID(t.id);
null != o && o.sitdown(t);
};
t.prototype.handler_server_bet_change_return = function(e) {
Log.d("===========额度选择:", e);
0 == e.ret && this.operatorBgSp && this.operatorBgSp.select_chip(e.cur_bet);
};
t.prototype.handler_server_logout_succ_bc = function(e) {
if (e.uid == s.GlobalVar.game_uid) {
e.alertStr && App.tips.show(e.alertStr);
this.doExitGame();
} else {
var t = this.getSeatByID(e.uid);
t && t.stand();
}
};
t.prototype.handler_server_xiazhu = function(e) {
Log.d("======真人下注:", e);
if (0 == e.ret) {
if (s.GlobalVar.game_uid == e.uid) {
R.default.setCurBetAreaRelTempData(e, !0);
this.sendCoin(this.getOption(e), s.GlobalVar.game_uid);
this.updateSelfMoney(e.money);
} else {
var t = R.default.setCurBetAreaRelTempData(e, !1);
this.sendCoin(this.getOption(e), e.uid);
if (t) {
var o = this.getSeatByID(t.id);
o && o.setMoney(t.money);
}
}
this.seat_area_info(e);
} else 1 == e.pop_addcash ? C.default.isNeedShowRecharge(e.bet, l.default.self.data.gameMoney) : App.tips.show(e.err_msg);
};
t.prototype.handler_server_xiazhu_robot = function(e) {
var t = this.getSeatBySeatID(e.seatid), o = this.getOption(e);
this.gameController.userBetAreas[o].refresh_info(e.allbet, e.selfbet, e.multiple, e.players);
this.seat_area_info(e);
this.sendCoin(o, e.id);
null != t && t.setMoney(e.money);
};
t.prototype.handler_server_notify_start = function(e) {
this._hasBet = !1;
dispatch(c.CommonEvent.Open_Show_Hide_laba, !0);
Log.e("=======龙虎开始动画:", e);
this.handler_server_notify_commit_rest();
this.gameController.waitForNextGameService.Hide();
this.gameController.vsSprite.node.active = !0;
this.gameController.vsSpineNode.active = !1;
this.gameController.cardBackSp0.node.active = !1;
this.gameController.cardBackSp1.node.active = !1;
this.gameController.cutDownBgSp.node.active = !1;
this.showVSAnimation();
this.scheduleOnce(this.handler_server_notify_fapai.bind(this), 1);
};
t.prototype.handler_server_notify_fapai = function(e) {
var t = this;
Log.e("=======龙虎开始发牌:", e);
if (this.gameController.cardBackSp0) {
(o = cc.find("guangSpineNode", this.gameController.cardBackSp0.node)) && (o.active = !1);
cc.find("cardSp", this.gameController.cardBackSp0.node).active = !1;
}
if (this.gameController.cardBackSp1) {
var o;
(o = cc.find("guangSpineNode", this.gameController.cardBackSp1.node)) && (o.active = !1);
cc.find("cardSp", this.gameController.cardBackSp1.node).active = !1;
}
App.globalAudio.playHallEffect(d.CmmAudio.common_fapai);
this.gameController.fapaiAnim.play("fapai", 0);
this.scheduleOnce(function() {
t.playGameAniByType(0);
}, .5);
};
t.prototype.handler_server_notify_bet = function(e) {
Log.e("=======龙虎开始投注:", e);
this.gameController.vsSprite.node.active = !1;
this.gameController.waitForNextGameService.Hide();
this._currentGameing = !0;
R.default.gameIsBetting = !0;
this.operatorBgSp.showOperator(1 == e.repeat);
this.setLongAniStatus(0);
this.setHuAniStatus(0);
this.setCutDownTimes(e.cd);
};
t.prototype.getIsHadBetting = function() {
for (var e = 0; e < this.gameController.userBetAreas.length; e++) {
var t = this.gameController.userBetAreas[e];
if (null != t && t.getMyBet() > 0) return !0;
}
return !1;
};
t.prototype.handler_server_game_end = function(e) {
dispatch(c.CommonEvent.Open_Show_Hide_laba, !1);
Log.e("=======龙虎游戏结束:", e);
R.default.gameIsResulting = !0;
this.gameController.waitForNextGameService.Hide();
this.clearDesktop();
this.gameController.vsSprite.node.active = !0;
this.gameController.cutDownBgSp.node.active = !1;
this.scheduleOnce(this.playResult.bind(this, e), 1);
};
t.prototype.flyLiziToMoreBtn = function(e, t) {
var o = App.utils.localConvertWorldPointAR(this.more_button), i = App.utils.localConvertWorldPointAR(this.betBtn0);
1 == e ? i = App.utils.localConvertWorldPointAR(this.betBtn1) : 2 == e ? i = App.utils.localConvertWorldPointAR(this.betBtn2) : 3 == e && (i = App.utils.localConvertWorldPointAR(this.betBtn3));
App.utils.flyLizi(i, o, this.flyLiziObj, this.node, 0, null, function(e) {
t(e);
});
};
t.prototype.eachSeat = function(e) {
for (var t = 0; t < this.gameController.node_bet_players.length; t++) {
var o = this.gameController.node_bet_players[t];
o.isStand || e && e(o);
}
};
t.prototype.clearDesktop = function() {
this._currentGameing = !1;
R.default.gameIsBetting = !1;
this.operatorBgSp.hideOperator();
this.stopAndHideVsAnimation();
};
t.prototype.setTableBetInfo = function(e, t) {
for (var o = 0; o < this.gameController.betPercentLabels.length; o++) (i = this.gameController.betPercentLabels[o]).node.parent.active = e;
for (o = 0; o < this.gameController.userBetAreas.length; o++) {
var i = this.gameController.userBetAreas[o];
e ? i.ShowBetTip() : t != o && i.HideBetTip();
}
};
t.prototype.flushGame = function() {
this.unscheduleAllCallbacks();
this.clearBetChips();
this.clearDesktop();
this.clearBetAreas();
this.resetCurBetAreaInfo();
this.setTableBetInfo(!1, -1);
this.eachSeat(function(e) {
e.updateMoney();
});
};
t.prototype.clearBetChips = function() {
for (var e = 0; e < this._chip_list.length; e++) {
var t = this._chip_list[e];
this.icon_remove(t.node);
}
this._chip_list = [];
this.gameController.betCoinNode && this.gameController.betCoinNode.destroyAllChildren();
};
t.prototype.icon_remove = function(e) {
if (null != e) {
this.itemPool && this.itemPool.put(e);
e.stopAllActions();
e.removeFromParent();
}
};
t.prototype.clearBetAreas = function() {
for (var e = 0; e < this.gameController.userBetAreas.length; e++) {
var t = this.gameController.userBetAreas[e];
null != t && t.clear();
}
};
t.prototype.showShanGuang = function(e) {
var t = this;
this.flyLiziToMoreBtn(e, function(o) {
t.showHistoryByData(e);
o && cc.tween(o).to(.88, {
opacity: 0
}).call(function() {
o.destroy();
}).start();
});
if (0 == e) {
this.playEffect("sound/dvt_dragonwin");
if (this.gameController.longWinSpine) {
this.gameController.longWinSpine.active = !0;
(i = this.gameController.longWinSpine.getComponent(sp.Skeleton)).setToSetupPose();
i.clearTracks();
i.setAnimation(0, "win_long", !1);
i.setCompleteListener(function() {
t.gameController.longWinSpine.active = !1;
t.playEffect("sound/dvt_dragonwin2");
});
}
} else if (1 == e) {
if (this.gameController.heWinSprite) {
this.gameController.heWinSprite.node.active = !0;
this.gameController.heWinSprite.node.setScale(.2);
this.gameController.heWinSprite.node.runAction(cc.sequence(cc.show(), cc.scaleTo(.2, 1.2, 1.2), cc.delayTime(.1), cc.scaleTo(.1, 1, 1), cc.delayTime(.5), cc.hide()));
}
} else if (2 == e) {
if (this.gameController.superHeWinSprite) {
this.gameController.superHeWinSprite.node.active = !0;
this.gameController.superHeWinSprite.node.setScale(.2);
this.gameController.superHeWinSprite.node.runAction(cc.sequence(cc.show(), cc.scaleTo(.2, 1.2, 1.2), cc.delayTime(.1), cc.scaleTo(.1, 1, 1), cc.delayTime(.5), cc.hide()));
}
} else if (3 == e) {
this.playEffect("sound/dvt_tigerwin");
if (this.gameController.huWinSpine) {
this.gameController.huWinSpine.active = !0;
(i = this.gameController.huWinSpine.getComponent(sp.Skeleton)).setToSetupPose();
i.clearTracks();
i.setAnimation(0, "animation", !1);
i.setCompleteListener(function() {
t.gameController.huWinSpine.active = !1;
t.playEffect("sound/dvt_tigerwin2");
});
}
}
if (this.gameController.cardBackSp0 && (o = cc.find("guangSpineNode", this.gameController.cardBackSp0.node))) if (0 == e || 1 == e || 2 == e) {
o.active = !0;
(i = o.getComponent(sp.Skeleton)).setToSetupPose();
i.clearTracks();
i.setAnimation(0, "animation", !0);
} else o.active = !1;
if (this.gameController.cardBackSp1) {
this.gameController.cardBackSp1.node.active = !0;
var o;
if (o = cc.find("guangSpineNode", this.gameController.cardBackSp1.node)) if (3 == e || 1 == e || 2 == e) {
o.active = !0;
var i;
(i = o.getComponent(sp.Skeleton)).setToSetupPose();
i.clearTracks();
i.setAnimation(0, "animation", !0);
} else o.active = !1;
}
};
t.prototype.showWinSpBlinkAndFly = function(e, t) {
this.showWinSpBlink(e, 1 == e || 2 == e, t);
if (0 == e) {
this.setLongAniStatus(1);
this.setHuAniStatus(2);
} else if (2 == e) {
this.setLongAniStatus(2);
this.setHuAniStatus(1);
}
};
t.prototype.showWinSpBlink = function(e, t) {
var o = this, i = function(t) {
return e == t;
};
this.gameController.userBetAreas[e].start_blink();
App.globalAudio.playHallEffect(d.CmmAudio.common_moneyFromBanker);
for (var n = 0; n < this._chip_list.length; n++) {
var r = this._chip_list[n];
i(r.index) || this.flyWinOrLost(r, n % 300 / 300, e);
}
this.scheduleOnce(function() {
var n = App.utils.localConvertWorldPointAR(o.gameController.flyCoin), r = App.utils.worldConvertLocalPointAR(o.gameController.betCoinNode, n);
if (0 == e) {
n = App.utils.localConvertWorldPointAR(o.longEatCoinPos);
r = App.utils.worldConvertLocalPointAR(o.gameController.betCoinNode, n);
} else if (3 == e) {
n = App.utils.localConvertWorldPointAR(o.huEatCoinPos);
r = App.utils.worldConvertLocalPointAR(o.gameController.betCoinNode, n);
}
for (var a = o._chip_list.slice(), s = !0, l = 0; l < a.length; l++) {
var c = a[l];
c.node.opacity = 255;
if (i(c.index) || t && (0 == c.index || 3 == c.index)) {
var p = {
beginPos: r,
seatid: c.seatid,
areaIndex: c.index,
delay: l % 300 / 1e3,
haveAudio: !1,
newPos: c.pos
};
o.addFly(p);
if (s) {
App.globalAudio.playHallEffect(d.CmmAudio.common_moneyFromBanker2);
s = !1;
}
}
}
}, 1);
this.scheduleOnce(function() {
var n = o._chip_list.slice();
o._chip_list = [];
for (var r = !0, a = 0; a < n.length; a++) {
var s = n[a];
s.node.opacity = 255;
if (i(s.index) || t) {
o.flyWinOrLost(s, a % 300 / 1e3, e, !0);
if (r) {
o.scheduleOnce(function() {
App.globalAudio.playHallEffect(d.CmmAudio.common_coinOnHead);
}, .36);
App.globalAudio.playHallEffect(d.CmmAudio.common_moneyFromBanker);
r = !1;
}
}
}
}, 2);
this.scheduleOnce(function() {
o.gameController.my_seat.showLastWin();
o.gameController.list_seat.showLastWin();
o.eachSeat(function(e) {
e.showLastWin();
});
var e = R.default.getSelfRobot();
e && o.updateSelfMoney(e.money);
R.default.gameIsResulting = !1;
}, 2.6);
};
t.prototype.flyWinOrLost = function(e, t, o, i) {
var n = this, r = e.node, a = App.utils.localConvertWorldPointAR(this.gameController.flyCoin), s = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, a);
if (0 == o) {
a = App.utils.localConvertWorldPointAR(this.longEatCoinPos);
s = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, a);
} else if (3 == o) {
a = App.utils.localConvertWorldPointAR(this.huEatCoinPos);
s = App.utils.worldConvertLocalPointAR(this.gameController.betCoinNode, a);
}
var l = i ? e.pos : s;
if (i) {
this.setTableBetInfo(!1, -1);
this.gameController.fapaiAnim.play("shoupai", 0);
cc.tween(r).delay(t).to(.28, {
position: l,
opacity: 255
}).call(function() {
n.icon_remove(r);
}).start();
} else cc.tween(r).delay(t).to(.28, {
position: l,
opacity: 255
}).call(function() {
n.icon_remove(r);
n.setTableBetInfo(!1, o);
}).start();
};
t.prototype.handler_server_notify_commit_rest = function() {
this._currentGameing = !1;
R.default.gameIsBetting = !1;
this.operatorBgSp && this.operatorBgSp.hideOperator();
this.flushGame();
};
t.prototype.showVSAnimation = function() {
var e = this;
this.playEffect("sound/dvt_start_vs");
this.gameController.vsSpineNode.active = !0;
var t = this.gameController.vsSpineNode.getComponent(sp.Skeleton);
t.setToSetupPose();
t.clearTracks();
t.setAnimation(0, "vs", !1);
t.setCompleteListener(function() {
e.gameController.vsSpineNode.active = !1;
});
};
t.prototype.stopAndHideVsAnimation = function() {
this.gameController.vsSpineNode.active = !1;
this.gameController.vsSpineNode.getComponent(sp.Skeleton).setCompleteListener(function() {});
};
t.prototype.onClickHistoryMore = function() {
this._clickHistory = !0;
this.sender.send_history();
};
t.prototype.onClickArea = function(e) {
var t = this.operatorBgSp.getSelectValue();
if (!C.default.isNeedShowRecharge(t, l.default.self.data.gameMoney) && this._currentGameing) {
this.sender.send_request_down_bet(t, +e);
this.gameController.userBetAreas[e].start_blink(1);
}
};
t.prototype.onClickRebet = function() {
if (this._currentGameing) {
this.operatorBgSp.hideRebet();
this.sender.send_rebet();
}
};
Object.defineProperty(t.prototype, "isPlayGameing", {
get: function() {
return this._hasBet;
},
enumerable: !1,
configurable: !0
});
t.prototype.onClickExit = function() {
var e = this;
if (this.isPlayGameing) {
var t = App.zLan.getString(1118), o = function() {};
App.alert.show({
title: a.Config.alertTitlePath.TIPS,
confirmCb: o,
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: t,
hideX: !0
});
} else {
o = function() {
e.doExitGame();
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
t.prototype.onClickTableInfo = function() {
h.default.showPrefab(this.bundle, "prefab/table_info").then(function(e) {
e.getComponent("lhdTableInfo").setTableInfoNums(10, v.default.BetMax);
});
};
t.prototype.setLongAniStatus = function(e) {
var t = this;
void 0 === e && (e = 0);
if (this.gameController.longAnimalSpine) {
this.gameController.longAnimalSpine.active = !0;
var o = this.gameController.longAnimalSpine.getComponent(sp.Skeleton);
o.setToSetupPose();
o.clearTracks();
var i = "";
0 == e ? i = "wait" : 1 == e ? i = "win" : 2 == e ? i = "lost" : 3 == e ? i = "attack" : 4 == e && (i = "attacked");
if (0 == e) o.setAnimation(0, i, !0); else {
o.setAnimation(0, i, !1);
o.setCompleteListener(function() {
t.setLongAniStatus(0);
});
}
}
};
t.prototype.setHuAniStatus = function(e) {
var t = this;
void 0 === e && (e = 0);
if (this.gameController.huAnimalSpine) {
this.gameController.huAnimalSpine.active = !0;
var o = this.gameController.huAnimalSpine.getComponent(sp.Skeleton);
o.setToSetupPose();
o.clearTracks();
var i = "";
0 == e ? i = "wait" : 1 == e ? i = "win" : 2 == e ? i = "lost" : 3 == e ? i = "attack" : 4 == e && (i = "attacked");
if (0 == e) o.setAnimation(0, i, !0); else {
o.setAnimation(0, i, !1);
o.setCompleteListener(function() {
t.setHuAniStatus(0);
});
}
}
};
t.prototype.setCutDownTimes = function(e) {
this.gameController.cutDownBgSp && this.gameController.cutDownBgSp.getComponent(N.default).setUpTimes(e, this.playGameAniByType.bind(this, 1), s.GlobalVar.tableTotalBetTime);
};
t.prototype.showHistoryByData = function(e) {
if (null != this._history_record) {
var t = this.gameController.historyList.getComponent(w.default);
if (null != e) {
this._history_record.push(e);
t.load_one(e);
} else t.load_list(this._history_record);
}
};
t.prototype.onClosed = function() {
this.onPingTimeout();
};
t.prototype.onPingTimeout = function() {
var e = this;
if (this._isLogout) this._isLogout = !1; else {
this.sender.close();
var t = App.zLan.getString(1037);
App.alert.show({
title: a.Config.alertTitlePath.TIPS,
confirmCb: function() {
e.doExitGame();
},
cancelCb: function() {
e.doExitGame();
},
confirmString: App.zLan.getString(1002),
cancelString: App.zLan.getString(1014),
text: t,
hideX: !1
});
}
};
t.prototype.doExitGame = function() {
this._isLogout = !0;
this.sender.logout();
this.sender.close();
this.exitGameToHall();
};
t.prototype.lateUpdate = function(e) {
R.default.customUpdate(e);
};
r([ f.inject("desktop/longEatCoinPos", cc.Node) ], t.prototype, "longEatCoinPos", void 0);
r([ f.inject("desktop/huEatCoinPos", cc.Node) ], t.prototype, "huEatCoinPos", void 0);
r([ f.inject("desktop/bgSprite/beiRect0/betBtn", cc.Node) ], t.prototype, "betBtn0", void 0);
r([ f.inject("desktop/bgSprite/beiRect1/betBtn", cc.Node) ], t.prototype, "betBtn1", void 0);
r([ f.inject("desktop/bgSprite/beiRect2/betBtn", cc.Node) ], t.prototype, "betBtn2", void 0);
r([ f.inject("desktop/bgSprite/beiRect3/betBtn", cc.Node) ], t.prototype, "betBtn3", void 0);
r([ f.inject("desktop/Bar/more_button", cc.Node) ], t.prototype, "more_button", void 0);
r([ f.inject("desktop/operatorBgSp/lastBtn", cc.Node) ], t.prototype, "lastBtn", void 0);
r([ f.inject("desktop/player_layer/headBg", cc.Node) ], t.prototype, "selfNode", void 0);
return r([ k ], t);
}(_.default));
o.default = U;
cc._RF.pop();
}, {
"../../../../scripts/common/config/Config": void 0,
"../../../../scripts/common/config/GlobalVar": void 0,
"../../../../scripts/common/config/User": void 0,
"../../../../scripts/common/event/CommonEvent": void 0,
"../../../../scripts/common/protocol/HeartbetJson": void 0,
"../../../../scripts/common/utils/CmmAudio": void 0,
"../../../../scripts/common/utils/RandomUtil": void 0,
"../../../../scripts/common/utils/UIUtils": void 0,
"../../../../scripts/framework/componects/AudioComponent": void 0,
"../../../../scripts/framework/core/ui/GameView": void 0,
"../../../../scripts/framework/defines/Decorators": void 0,
"../../../../scripts/framework/defines/Enums": void 0,
"../../../../scripts/framework/defines/Macros": void 0,
"../../../../scripts/login/view/CommonUIHelper": void 0,
"../../../../scripts/sdk/GameNativeConfig": void 0,
"../../../../scripts/tableCommon/BarrageNode": void 0,
"../../../../scripts/tableCommon/CardHelp": void 0,
"../../../../scripts/tableCommon/OnlineView": void 0,
"../../../../scripts/tableCommon/WaitForNextGameService": void 0,
"../../../../scripts/tableCommon/bet_action": void 0,
"../../../../scripts/tableCommon/robot/RobotEvent": void 0,
"../../../../scripts/tableCommon/robot/TableRobot": void 0,
"../../../../scripts/tableCommon/tableCountTime": void 0,
"../../src_a5/DragonGameController": "DragonGameController",
"../../src_a5/lhdHistoryPanel": "lhdHistoryPanel",
"../net/DragonTigerCmd": "DragonTigerCmd",
"../net/DragonTigerEvent": "DragonTigerEvent",
"../net/DragonTigerHandler": "DragonTigerHandler",
"../net/DragonTigerSender": "DragonTigerSender",
"../net/DragonTigerService": "DragonTigerService"
} ],
dragontiger_BigRoad: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "abedfDdW79DI6RaCZ8ZyRK9", "dragontiger_BigRoad");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ResultType_dragon = void 0;
var a = e("./dragontiger_Model_BigRoad"), s = cc._decorator, l = s.ccclass, c = s.property;
(function(e) {
e[e.DRAGON = 0] = "DRAGON";
e[e.TIE = 1] = "TIE";
e[e.TIE2 = 2] = "TIE2";
e[e.TIGER = 3] = "TIGER";
})(o.ResultType_dragon || (o.ResultType_dragon = {}));
var p = function() {
function e() {
this.modelDic = new Map();
this.modelList = [];
}
e.prototype.SetMaxShowCount = function(e) {
this.maxShowCount = e;
};
e.prototype.ClearModel = function() {
this.modelList = [];
};
e.prototype.ClearData = function() {
this.modelDic.clear();
this.dragonLength = 0;
this.dragonType = -1;
};
return r([ l("BigRoadData_dragon") ], e);
}(), d = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.m_Index = 0;
t.m_SizeX = 14.2;
t.m_SizeY = 14;
t.m_BeginLocalPos = cc.v3(0, 35, 0);
t.m_MaxShowCount = 6;
t.m_HideParentTransform = null;
t.prefab = null;
t.m_LieParentTransforms = [];
t.m_RoadDataList = [];
t.m_CurFirstLieId = 0;
t.m_CurShowLieId = 0;
t.m_NewModelTargetLieID = 0;
t.m_NewModelTargetHangID = 0;
t.m_NewLieAllowMaxShowCount = 0;
t.m_NewModelIsFirst = !1;
t.m_IsShowSixDragon = !1;
t.m_LastTrendModel = null;
t.m_IsNeedPlayAnimation = !1;
t.m_IsFirstResultForTIE = !1;
t.m_IsTIE = !1;
t.instancePool = null;
t.isInit = !1;
return t;
}
Object.defineProperty(t.prototype, "IsTIE", {
get: function() {
return this.m_IsTIE;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "GetRoadDataList", {
get: function() {
return this.m_RoadDataList;
},
enumerable: !1,
configurable: !0
});
t.prototype.initNode = function() {
if (!this.isInit) {
this.isInit = !0;
this.instancePool = [];
var e = cc.find("Grid_Horizonal", this.node);
this.m_LieParentTransforms = e.children;
}
};
t.prototype.InitData = function(e) {
this.initNode();
this.m_IsNeedPlayAnimation = !1;
this.ClearData();
for (var t = 0; t < e.length; t++) this.AddNewData(e[t]);
};
t.prototype.ClearData = function() {
this.m_LastTrendModel = null;
this.m_CurFirstLieId = 0;
this.m_CurShowLieId = 0;
this.m_NewModelTargetLieID = 0;
this.m_NewModelTargetHangID = 0;
this.m_NewLieAllowMaxShowCount = this.m_MaxShowCount;
this.m_IsShowSixDragon = !1;
this.m_NewModelIsFirst = !0;
this.m_IsFirstResultForTIE = !1;
for (var e = 0; e < this.m_RoadDataList.length; e++) {
for (var t = 0; t < this.m_MaxShowCount; t++) if (this.m_RoadDataList[e].modelDic.has(t)) {
this.m_RoadDataList[e].modelDic.get(t).node.parent = this.m_HideParentTransform;
this.instancePool.push(this.m_RoadDataList[e].modelDic.get(t));
}
this.m_RoadDataList[e].ClearData();
}
this.m_RoadDataList = [];
};
t.prototype.AddNewModel_One = function(e) {
this.m_IsNeedPlayAnimation = !0;
this.AddNewData(e);
};
t.prototype.AddNewData = function(e) {
var t = this.GetValueType(e);
this.m_IsTIE = !1;
if (this.m_RoadDataList.length - this.m_CurFirstLieId >= this.m_LieParentTransforms.length) {
if (this.CheckIsAddNewLieData(t)) {
this.RemoveLieData();
this.MoveLieToPre();
this.AddNewLie();
}
} else 0 == this.m_RoadDataList.length ? this.AddNewLie() : this.CheckIsAddNewLieData(t) && this.AddNewLie();
this.m_NewModelIsFirst && (this.m_RoadDataList[this.m_CurShowLieId].dragonType = t);
this.CreateNewModel(e);
};
t.prototype.GetValueType = function(e) {
var t = e;
return t < 10 ? t : t < 100 ? Math.floor(t / 10) : Math.floor(t / 100);
};
t.prototype.CheckIsAddNewLieData = function(e) {
if (e == this.m_RoadDataList[this.m_CurShowLieId].dragonType) {
this.m_NewModelIsFirst = !1;
if (this.m_RoadDataList[this.m_CurShowLieId].dragonLength >= this.m_RoadDataList[this.m_CurShowLieId].maxShowCount) {
1 == this.m_RoadDataList[this.m_CurShowLieId].maxShowCount && (this.m_IsShowSixDragon = !0);
if (this.m_RoadDataList[this.m_CurShowLieId].dragonLength - this.m_RoadDataList[this.m_CurShowLieId].maxShowCount + 1 + this.m_CurShowLieId >= this.m_RoadDataList.length) {
this.m_NewModelTargetLieID = this.m_RoadDataList.length;
this.m_NewModelTargetHangID = this.m_RoadDataList[this.m_CurShowLieId].maxShowCount - 1;
this.m_NewLieAllowMaxShowCount = this.m_RoadDataList[this.m_CurShowLieId].maxShowCount - 1;
return !0;
}
this.m_NewModelTargetLieID = this.m_RoadDataList[this.m_CurShowLieId].dragonLength - this.m_RoadDataList[this.m_CurShowLieId].maxShowCount + 1 + this.m_CurShowLieId;
this.m_NewModelTargetHangID = this.m_RoadDataList[this.m_CurShowLieId].maxShowCount - 1;
this.m_NewLieAllowMaxShowCount = this.m_RoadDataList[this.m_CurShowLieId].maxShowCount - 1;
this.m_RoadDataList[this.m_NewModelTargetLieID].SetMaxShowCount(this.m_NewLieAllowMaxShowCount);
return !1;
}
this.m_NewModelTargetLieID = this.m_CurShowLieId;
this.m_NewModelTargetHangID = this.m_RoadDataList[this.m_CurShowLieId].dragonLength;
return !1;
}
this.m_IsShowSixDragon ? this.m_CurShowLieId = this.m_CurShowLieId + this.m_RoadDataList[this.m_CurShowLieId].dragonLength : this.m_CurShowLieId++;
this.m_NewModelIsFirst = !0;
if (this.m_CurShowLieId >= this.m_RoadDataList.length) {
this.m_NewModelTargetLieID = this.m_CurShowLieId;
this.m_NewModelTargetHangID = 0;
this.m_NewLieAllowMaxShowCount = this.m_MaxShowCount;
return !0;
}
this.m_NewModelTargetLieID = this.m_CurShowLieId;
this.m_NewModelTargetHangID = this.m_RoadDataList[this.m_CurShowLieId].dragonLength;
return !1;
};
t.prototype.AddNewLie = function() {
var e = new p();
e.ClearData();
e.SetMaxShowCount(this.m_NewLieAllowMaxShowCount);
this.m_RoadDataList.push(e);
};
t.prototype.RemoveLieData = function() {
for (var e = 0; e < this.m_MaxShowCount; e++) this.m_RoadDataList[this.m_CurFirstLieId].modelDic.has(e) && (this.m_RoadDataList[this.m_CurFirstLieId].modelDic.get(e).node.parent = this.m_HideParentTransform);
this.m_CurFirstLieId++;
};
t.prototype.MoveLieToPre = function() {
for (var e = this.m_CurFirstLieId; e < this.m_RoadDataList.length; e++) for (var t = this.m_RoadDataList[e], o = 0; o < this.m_MaxShowCount; o++) if (t.modelDic.has(o)) {
var i = t.modelDic.get(o);
i.node.parent = this.m_LieParentTransforms[e - this.m_CurFirstLieId];
i.node.position = cc.v3(0, i.node.position.y, 0);
}
};
t.prototype.CreateNewModel = function(e) {
var t = this.GetInstancePool();
t.node.parent = this.m_LieParentTransforms[this.m_NewModelTargetLieID - this.m_CurFirstLieId];
t.node.scale = 1;
t.node.position = cc.v3(this.m_BeginLocalPos.x, this.m_BeginLocalPos.y - this.m_NewModelTargetHangID * this.m_SizeY, 0);
t.Init(e);
this.m_RoadDataList[this.m_NewModelTargetLieID].modelDic.set(this.m_NewModelTargetHangID, t);
this.m_RoadDataList[this.m_CurShowLieId].dragonLength++;
this.m_LastTrendModel = t;
};
t.prototype.GetInstancePool = function() {
return this.instancePool.length > 0 ? this.instancePool.pop() : cc.instantiate(this.prefab).getComponent(a.default);
};
r([ c(cc.Integer) ], t.prototype, "m_Index", void 0);
r([ c({
type: cc.Float
}) ], t.prototype, "m_SizeX", void 0);
r([ c({
type: cc.Float
}) ], t.prototype, "m_SizeY", void 0);
r([ c(cc.Vec3) ], t.prototype, "m_BeginLocalPos", void 0);
r([ c(cc.Integer) ], t.prototype, "m_MaxShowCount", void 0);
r([ c(cc.Node) ], t.prototype, "m_HideParentTransform", void 0);
r([ c(cc.Prefab) ], t.prototype, "prefab", void 0);
return r([ l ], t);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"./dragontiger_Model_BigRoad": "dragontiger_Model_BigRoad"
} ],
dragontiger_Model_BigRoad: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "f7291ZYI1VAYrebas1gcILg", "dragontiger_Model_BigRoad");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, l = a.property, c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.typeNodes = [];
return t;
}
t.prototype.Init = function(e) {
-1 == e && (e = 2);
this.SetResult(e);
};
t.prototype.SetShowTIM = function(e) {
-1 == e && (e = 2);
for (var t = 0; t < this.typeNodes.length; t++) this.typeNodes[t].active = !1;
this.typeNodes[e].active = !0;
};
t.prototype.SetShowFirstRealValue = function(e) {
-1 == e && (e = 2);
for (var t = 0; t < this.typeNodes.length; t++) this.typeNodes[t].active = !1;
this.typeNodes[e].active = !0;
};
t.prototype.SetResult = function(e) {
for (var t = 0; t < this.typeNodes.length; t++) this.typeNodes[t].active = !1;
this.typeNodes[e].active = !0;
};
r([ l(cc.Node) ], t.prototype, "typeNodes", void 0);
return r([ s ], t);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
dragontiger_history_panel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3e22dQwyUpEYbO06dixveLh", "dragontiger_history_panel");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../scripts/other/dragontiger_BigRoad"), s = cc._decorator, l = s.ccclass, c = s.property, p = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.button_close = null;
t.bar_red = null;
t.bar_blue = null;
t.richtext_tips = null;
t.listbox2 = null;
t.listbox1_prefab = null;
t.listbox2_prefab = null;
t.bigRoad = null;
return t;
}
t.prototype.onLoad = function() {
this.button_close.node.on("click", this.onClickClose, this);
};
t.prototype.onClickClose = function() {
this.node.destroy();
};
t.prototype.load_record = function(e) {
e.length > 0 && this.bigRoad.InitData(e);
};
t.prototype.load_list = function(e) {
this.load_record(e);
this.listbox2.destroyAllChildren();
for (var t = 0, o = 0, i = 0, n = 0, r = 0; r < e.length; r++) {
var a = cc.instantiate(this.listbox2_prefab);
if (0 == e[r]) {
a.getChildByName("blue").active = !0;
o++;
} else if (1 == e[r]) {
a.getChildByName("green").active = !0;
i++;
} else if (2 == e[r]) {
a.getChildByName("yellow").active = !0;
n++;
} else {
a.getChildByName("red").active = !0;
t++;
}
this.listbox2.addChild(a);
}
if (e.length > 0) {
var s = e[0], l = [ [ s ] ];
for (r = 1; r < e.length; r++) if (e[r] == s) if (6 == l[l.length - 1].length) {
s = e[r];
l.push([ s ]);
} else l[l.length - 1].push(e[r]); else {
s = e[r];
l.push([ s ]);
}
if (t + o > 0) {
this.bar_red.progress = t / (t + o);
this.bar_blue.progress = 1 - t / (t + o);
0 == this.bar_red.progress ? this.bar_red.node.getComponentInChildren(cc.Label).string = "" : this.bar_red.node.getComponentInChildren(cc.Label).string = (100 * this.bar_red.progress).toFixed(2) + "%";
0 == this.bar_blue.progress ? this.bar_blue.node.getComponentInChildren(cc.Label).string = "" : this.bar_blue.node.getComponentInChildren(cc.Label).string = (100 * this.bar_blue.progress).toFixed(2) + "%";
} else {
this.bar_blue.node.getComponentInChildren(cc.Label).string = "";
this.bar_red.node.getComponentInChildren(cc.Label).string = "";
}
var c = "<color=#da403e>Tiger:" + t + "<color>   <color=#3072d7>Dragon:" + o + "</color>   <color=#2aad55>Tie:" + i + "</color>   <color=#FFD541>Suited Tie:" + n + "</color>";
this.richtext_tips.string = c;
}
};
r([ c(cc.Button) ], t.prototype, "button_close", void 0);
r([ c(cc.ProgressBar) ], t.prototype, "bar_red", void 0);
r([ c(cc.ProgressBar) ], t.prototype, "bar_blue", void 0);
r([ c(cc.RichText) ], t.prototype, "richtext_tips", void 0);
r([ c(cc.Node) ], t.prototype, "listbox2", void 0);
r([ c(cc.Prefab) ], t.prototype, "listbox1_prefab", void 0);
r([ c(cc.Prefab) ], t.prototype, "listbox2_prefab", void 0);
r([ c(a.default) ], t.prototype, "bigRoad", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../scripts/other/dragontiger_BigRoad": "dragontiger_BigRoad"
} ],
lhdCoin: [ function(e, t) {
"use strict";
cc._RF.push(t, "da18cPKXsFCeILiiDk4SQNP", "lhdCoin");
var o, i = (o = e("../../../scripts/common/utils/UIUtils")) && o.__esModule ? o : {
default: o
}, n = e("../../../scripts/framework/defines/Macros");
cc.Class({
extends: cc.Component,
properties: {
coinLabel: {
default: null,
displayName: "coinLabel",
type: cc.Label
},
areaIndex: 0,
posIndex: 0,
coinNums: 0,
numIndex: 0
},
setCoinLabel: function(e) {
0 != e ? this.coinLabel && (this.coinLabel.string = "" + Math.round(e / 10) / 10) : cc.isValid(this.node) && this.node.destroy();
},
setAreaIndex: function(e) {
this.areaIndex = e;
},
getAreaIndex: function() {
return this.areaIndex;
},
setPosIndex: function(e) {
this.posIndex = e;
},
getPosIndex: function() {
return this.posIndex;
},
setCoinNums: function(e) {
this.coinNums = e;
},
getCoinNums: function() {
return this.coinNums;
},
setCoinSprite: function(e) {
var t = "res/lhd/chiplittle" + e;
i.default.setSprite(this.node.getComponent(cc.Sprite), n.Macro.BUNDLE_dragontiger, t);
},
onLoad: function() {
if (this.coinLabel) {
this.coinLabel.node.setScale(1, 1);
this.coinLabel.node.setPosition(0, -6);
}
this.node.setScale(1, 1);
},
start: function() {}
});
cc._RF.pop();
}, {
"../../../scripts/common/utils/UIUtils": void 0,
"../../../scripts/framework/defines/Macros": void 0
} ],
lhdCountTime: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "5c13bfon5lAf4h02hADj9tR", "lhdCountTime");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = e("../../../scripts/common/utils/CmmAudio"), s = cc._decorator, l = s.ccclass, c = s.property, p = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.statusSprite = null;
t.cutTimeLabel = null;
t.cutDownTime = 0;
t.curNum = -1;
t.callBack = null;
return t;
}
t.prototype.setUpTimes = function(e, t) {
this.node.active = !0;
this.callBack = t;
this.cutDownTime = e;
var o = Math.floor(this.cutDownTime);
this.cutTimeLabel.string = o + "";
this.curNum = -1;
};
t.prototype.update = function(e) {
if (this.cutDownTime > 0) {
this.cutDownTime -= e;
if (this.cutTimeLabel) {
this.cutTimeLabel.node.active = !0;
var t = Math.floor(this.cutDownTime);
if (this.curNum != t) {
this.curNum = t;
if (t > 1 && t < 5) App.globalAudio.playHallEffect(a.CmmAudio.common_timer); else if (1 == t) App.globalAudio.playHallEffect(a.CmmAudio.common_lastTimer); else if (0 == t && this.callBack) {
this.callBack();
this.callBack = null;
this.cutDownTime = -1;
this.cutTimeLabel.string = "0";
return;
}
}
this.cutTimeLabel.string = "" + this.curNum;
}
} else this.statusSprite.node.active = !1;
};
r([ c(cc.Sprite) ], t.prototype, "statusSprite", void 0);
r([ c(cc.Label) ], t.prototype, "cutTimeLabel", void 0);
return r([ l ], t);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../scripts/common/utils/CmmAudio": void 0
} ],
lhdCutTime: [ function(e, t) {
"use strict";
cc._RF.push(t, "727f1IdDI9PGpaArWKT78kJ", "lhdCutTime");
(o = e("../../../scripts/common/utils/UIUtils")) && o.__esModule;
var o, i = e("../../../scripts/common/utils/CmmAudio");
e("../../../scripts/framework/defines/Macros");
cc.Class({
extends: cc.Component,
properties: {
statusSprite: {
default: null,
displayName: "statusSprite",
type: cc.Sprite
},
cutTimeLabel: {
default: null,
displayName: "cutTimeLabel",
type: cc.Label
},
cutDownTimes: 0,
fullTimes: 1,
curTimeNum: -1
},
onLoad: function() {},
setUpTimes: function(e) {
if (e > 0) {
this.fullTimes = 1;
this.cutDownTimes = e;
this.cutTimeLabel.string = "" + e;
this.curTimeNum = -1;
} else this.cutTimeLabel && (this.cutTimeLabel.node.active = !1);
},
resultStatue: function() {
this.stopCutSpriteCutDown();
this.cutTimeLabel;
},
stopCutSpriteCutDown: function() {
this.cutDownTimes = 0;
},
setCutLabel: function() {},
start: function() {},
update: function(e) {
if (this.cutDownTimes > 0) {
this.fullTimes -= e / this.cutDownTimes;
if (this.cutTimeLabel) {
this.cutTimeLabel.node.active = !0;
var t = Math.ceil(this.fullTimes * this.cutDownTimes);
this.cutTimeLabel.string = "" + t;
this.curTimeNum != t && (t > 1 && t < 5 ? App.globalAudio.playHallEffect(i.CmmAudio.common_timer) : 1 == t && App.globalAudio.playHallEffect(i.CmmAudio.common_lastTimer));
this.curTimeNum = t;
}
if (this.fullTimes <= 0) {
this.cutTimeLabel && (this.cutTimeLabel.string = "0");
this.statusSprite.node.active = !1;
this.node.active = !1;
this.cutDownTimes = 0;
this.fullTimes = 1;
}
} else {
this.statusSprite.node.active = !1;
this.fullTimes = 1;
}
}
});
cc._RF.pop();
}, {
"../../../scripts/common/utils/CmmAudio": void 0,
"../../../scripts/common/utils/UIUtils": void 0,
"../../../scripts/framework/defines/Macros": void 0
} ],
lhdHistoryPanel: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "83ad5zTHX9PxpFbbbCgQuFZ", "lhdHistoryPanel");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
i(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), r = this && this.__decorate || function(e, t, o, i) {
var n, r = arguments.length, a = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, i); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(t, o, a) : n(t, o)) || a);
return r > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, l = a.property, c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.item_prefab = null;
return t;
}
t.prototype.start = function() {};
t.prototype.load_list = function(e) {
this.node.destroyAllChildren();
var t = 0;
e.length > 25 && (t = e.length - 25);
for (var o = t; o < e.length; o++) {
var i = cc.instantiate(this.item_prefab), n = i.getChildByName("root");
this.node.addChild(i);
n.getChildByName("d").active = !1;
n.getChildByName("t").active = !1;
n.getChildByName("tie").active = !1;
0 == e[o] ? n.getChildByName("d").active = !0 : 1 == e[o] ? n.getChildByName("tie").active = !0 : 2 == e[o] ? n.getChildByName("st").active = !0 : n.getChildByName("t").active = !0;
}
};
t.prototype.load_one = function(e) {
var t = this.node.children;
t.length >= 25 && t[0].destroy();
var o = cc.instantiate(this.item_prefab);
this.node.addChild(o);
var i = o.getChildByName("root");
i.scale = 0;
cc.tween(i).to(.58, {
scale: 1
}, {
easing: "backOut"
}).start();
i.getChildByName("d").active = !1;
i.getChildByName("t").active = !1;
i.getChildByName("tie").active = !1;
0 == e ? i.getChildByName("d").active = !0 : 1 == e ? i.getChildByName("tie").active = !0 : 2 == e ? i.getChildByName("st").active = !0 : i.getChildByName("t").active = !0;
};
r([ l(cc.Prefab) ], t.prototype, "item_prefab", void 0);
return r([ s ], t);
}(cc.Component);
o.default = c;
cc._RF.pop();
}, {} ],
lhdTableInfo: [ function(e, t) {
"use strict";
cc._RF.push(t, "52304fv/JRLD4TcScOltoBo", "lhdTableInfo");
cc.Class({
extends: cc.Component,
properties: {
numsLabel0: {
default: null,
displayName: "numsLabel0",
type: cc.Label
},
numsLabel1: {
default: null,
displayName: "numsLabel1",
type: cc.Label
},
numsLabel2: {
default: null,
displayName: "numsLabel2",
type: cc.Label
},
numsLabel3: {
default: null,
displayName: "numsLabel3",
type: cc.Label
},
okeyBtn: {
default: null,
displayName: "okeyBtn",
type: cc.Button
}
},
onLoad: function() {
this.okeyBtn && this.okeyBtn.node.on("click", this.okeyBtnClicked, this);
},
okeyBtnClicked: function() {
App.globalAudio.playButtonClick();
this.node.destroy();
},
setTableInfoNums: function(e, t) {
this.numsLabel0 && (this.numsLabel0.string = e.toString() + "-" + t.toString());
this.numsLabel1 && (this.numsLabel1.string = t.toString());
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "DragonTigerEntry", "DragonTigerCmd", "DragonTigerEvent", "DragonTigerHandler", "DragonTigerSender", "DragonTigerService", "dragontiger_BigRoad", "dragontiger_Model_BigRoad", "DragonTigerView", "lhdCoin", "lhdCountTime", "lhdCutTime", "lhdTableInfo", "DragonGameController", "dragontiger_history_panel", "lhdHistoryPanel" ]);