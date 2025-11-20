window.md5 = function(t) {
return CryptoJS.MD5(t);
};

Date.prototype.format = function(t) {
let n = this, o = {
"M+": n.getMonth() + 1,
"d+": n.getDate(),
"h+": n.getHours(),
"m+": n.getMinutes(),
"s+": n.getSeconds(),
"q+": Math.floor((n.getMonth() + 3) / 3),
"S+": n.getMilliseconds()
};
t = t.replace(/(y+)/i, function() {
return n.getFullYear().toString();
});
let r = function() {
let t = arguments[2], n = o[arguments[0]], r = 1 == t.length ? `${n}` : `00${n}`.substring(n.toString().length);
return r;
};
for (let n in o) t = t.replace(new RegExp(`(${n})`), r.bind(null, n));
return t;
};

Date.timeNow = function() {
return Math.floor(Date.now() / 1e3);
};

Date.format = function(t, n) {
return n ? n.format(t) : new Date().format(t);
};

String.format = function() {
for (var t = [], n = 0, o = arguments.length; n < o; n++) t.push(arguments[n]);
var r = t[0];
if ("string" != typeof r) {
EDITOR || console.error("String.format error,first param is not a string");
return "";
}
t.shift();
Array.isArray(t[0]) && 1 == t.length && (t = t[0]);
return r.replace(/\{(\d+)\}/g, function(n, o) {
return t[o];
});
};

window.Log = console;

window.Log.e = console.error;

window.Log.d = console.log;

window.Log.w = console.warn;

window.Log.dump = console.debug;