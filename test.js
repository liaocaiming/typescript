"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var list = [1, 2, 3];
var arr = [1, 2, 3];
var x;
x = ['vvv', 66, 888, 9999];
var color;
(function (color) {
    color[color["Red"] = 1] = "Red";
    color[color["Green"] = 2] = "Green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
;
var c = color.Green;
var colorName = color[2];
console.log(color[1]);
console.log(colorName);
var notsure = 9999;
notsure.toFixed(2);
function test() {
    console.log(666);
}
var aa = undefined;
function error() {
    throw new Error('6666');
}
var aaa = 'liaocaiming';
var len = aaa.length;
var leng = aaa.length;
var a = 10;
var _a = [1, 2, 3, 4], second = _a[1], fourth = _a[3];
console.log(second, fourth, '666');
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({ food: "rich" }, defaults);
console.log(search, 'search');
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var target = extend({ a: 1 }, { b: 2 });
function padLeft(value, padding) {
    if (typeof padding === "number") {
        console.log(Array(padding + 1), 11);
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var a1 = padLeft("Hello world", 4);
console.log(a1);
