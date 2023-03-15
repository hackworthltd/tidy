var $C = Object.defineProperty;
var AQ = (I, A, g) => A in I ? $C(I, A, { enumerable: !0, configurable: !0, writable: !0, value: g }) : I[A] = g;
var AA = (I, A, g) => (AQ(I, typeof A != "symbol" ? A + "" : A, g), g);
import JB, { useRef as ti, useLayoutEffect as Ft, useEffect as IQ } from "react";
var gQ = function() {
  function I() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return I;
}(), iQ = function() {
  function I() {
    this.browser = new gQ(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return I;
}(), CI = new iQ();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (CI.wxa = !0, CI.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? CI.worker = !0 : typeof navigator > "u" ? (CI.node = !0, CI.svgSupported = !0) : tQ(navigator.userAgent, CI);
function tQ(I, A) {
  var g = A.browser, i = I.match(/Firefox\/([\d.]+)/), t = I.match(/MSIE\s([\d.]+)/) || I.match(/Trident\/.+?rv:(([\d.]+))/), B = I.match(/Edge?\/([\d.]+)/), C = /micromessenger/i.test(I);
  i && (g.firefox = !0, g.version = i[1]), t && (g.ie = !0, g.version = t[1]), B && (g.edge = !0, g.version = B[1], g.newEdge = +B[1].split(".")[0] > 18), C && (g.weChat = !0), A.svgSupported = typeof SVGRect < "u", A.touchEventsSupported = "ontouchstart" in window && !g.ie && !g.edge, A.pointerEventsSupported = "onpointerdown" in window && (g.edge || g.ie && +g.version >= 11), A.domSupported = typeof document < "u";
  var Q = document.documentElement.style;
  A.transform3dSupported = (g.ie && "transition" in Q || g.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in Q) && !("OTransition" in Q), A.transformSupported = A.transform3dSupported || g.ie && +g.version >= 9;
}
const V = CI;
var UB = 12, BQ = "sans-serif", $I = UB + "px " + BQ, CQ = 20, QQ = 100, rQ = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function EQ(I) {
  var A = {};
  if (typeof JSON > "u")
    return A;
  for (var g = 0; g < I.length; g++) {
    var i = String.fromCharCode(g + 32), t = (I.charCodeAt(g) - CQ) / QQ;
    A[i] = t;
  }
  return A;
}
var eQ = EQ(rQ), ig = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: function() {
    var I, A;
    return function(g, i) {
      if (!I) {
        var t = ig.createCanvas();
        I = t && t.getContext("2d");
      }
      if (I)
        return A !== i && (A = I.font = i || $I), I.measureText(g);
      g = g || "", i = i || $I;
      var B = /^([0-9]*?)px$/.exec(i), C = +(B && B[1]) || UB, Q = 0;
      if (i.indexOf("mono") >= 0)
        Q = C * g.length;
      else
        for (var r = 0; r < g.length; r++) {
          var E = eQ[g[r]];
          Q += E == null ? C : E * C;
        }
      return { width: Q };
    };
  }(),
  loadImage: function(I, A, g) {
    var i = new Image();
    return i.onload = A, i.onerror = g, i.src = I, i;
  }
}, _B = Ct([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(I, A) {
  return I["[object " + A + "]"] = !0, I;
}, {}), mB = Ct([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(I, A) {
  return I["[object " + A + "Array]"] = !0, I;
}, {}), zg = Object.prototype.toString, Vg = Array.prototype, aQ = Vg.forEach, oQ = Vg.filter, HB = Vg.slice, nQ = Vg.map, kt = function() {
}.constructor, Eg = kt ? kt.prototype : null, Bt = "__proto__", sQ = 2311;
function bB() {
  return sQ++;
}
function EI() {
  for (var I = [], A = 0; A < arguments.length; A++)
    I[A] = arguments[A];
  typeof console < "u" && console.error.apply(console, I);
}
function RI(I) {
  if (I == null || typeof I != "object")
    return I;
  var A = I, g = zg.call(I);
  if (g === "[object Array]") {
    if (!XI(I)) {
      A = [];
      for (var i = 0, t = I.length; i < t; i++)
        A[i] = RI(I[i]);
    }
  } else if (mB[g]) {
    if (!XI(I)) {
      var B = I.constructor;
      if (B.from)
        A = B.from(I);
      else {
        A = new B(I.length);
        for (var i = 0, t = I.length; i < t; i++)
          A[i] = I[i];
      }
    }
  } else if (!_B[g] && !XI(I) && !Ki(I)) {
    A = {};
    for (var C in I)
      I.hasOwnProperty(C) && C !== Bt && (A[C] = RI(I[C]));
  }
  return A;
}
function xI(I, A, g) {
  if (!HA(A) || !HA(I))
    return g ? RI(A) : I;
  for (var i in A)
    if (A.hasOwnProperty(i) && i !== Bt) {
      var t = I[i], B = A[i];
      HA(B) && HA(t) && !Hi(B) && !Hi(t) && !Ki(B) && !Ki(t) && !Yt(B) && !Yt(t) && !XI(B) && !XI(t) ? xI(t, B, g) : (g || !(i in I)) && (I[i] = RI(A[i]));
    }
  return I;
}
function x(I, A) {
  if (Object.assign)
    Object.assign(I, A);
  else
    for (var g in A)
      A.hasOwnProperty(g) && g !== Bt && (I[g] = A[g]);
  return I;
}
function SI(I, A, g) {
  for (var i = fA(A), t = 0; t < i.length; t++) {
    var B = i[t];
    (g ? A[B] != null : I[B] == null) && (I[B] = A[B]);
  }
  return I;
}
ig.createCanvas;
function wA(I, A) {
  if (I) {
    if (I.indexOf)
      return I.indexOf(A);
    for (var g = 0, i = I.length; g < i; g++)
      if (I[g] === A)
        return g;
  }
  return -1;
}
function KB(I, A, g) {
  if (I = "prototype" in I ? I.prototype : I, A = "prototype" in A ? A.prototype : A, Object.getOwnPropertyNames)
    for (var i = Object.getOwnPropertyNames(A), t = 0; t < i.length; t++) {
      var B = i[t];
      B !== "constructor" && (g ? A[B] != null : I[B] == null) && (I[B] = A[B]);
    }
  else
    SI(I, A, g);
}
function yA(I) {
  return !I || typeof I == "string" ? !1 : typeof I.length == "number";
}
function hA(I, A, g) {
  if (!!(I && A))
    if (I.forEach && I.forEach === aQ)
      I.forEach(A, g);
    else if (I.length === +I.length)
      for (var i = 0, t = I.length; i < t; i++)
        A.call(g, I[i], i, I);
    else
      for (var B in I)
        I.hasOwnProperty(B) && A.call(g, I[B], B, I);
}
function Ag(I, A, g) {
  if (!I)
    return [];
  if (!A)
    return qB(I);
  if (I.map && I.map === nQ)
    return I.map(A, g);
  for (var i = [], t = 0, B = I.length; t < B; t++)
    i.push(A.call(g, I[t], t, I));
  return i;
}
function Ct(I, A, g, i) {
  if (!!(I && A)) {
    for (var t = 0, B = I.length; t < B; t++)
      g = A.call(i, g, I[t], t, I);
    return g;
  }
}
function Mt(I, A, g) {
  if (!I)
    return [];
  if (!A)
    return qB(I);
  if (I.filter && I.filter === oQ)
    return I.filter(A, g);
  for (var i = [], t = 0, B = I.length; t < B; t++)
    A.call(g, I[t], t, I) && i.push(I[t]);
  return i;
}
function fA(I) {
  if (!I)
    return [];
  if (Object.keys)
    return Object.keys(I);
  var A = [];
  for (var g in I)
    I.hasOwnProperty(g) && A.push(g);
  return A;
}
function hQ(I, A) {
  for (var g = [], i = 2; i < arguments.length; i++)
    g[i - 2] = arguments[i];
  return function() {
    return I.apply(A, g.concat(HB.call(arguments)));
  };
}
Eg && Og(Eg.bind) && Eg.call.bind(Eg.bind);
function Hi(I) {
  return Array.isArray ? Array.isArray(I) : zg.call(I) === "[object Array]";
}
function Og(I) {
  return typeof I == "function";
}
function bi(I) {
  return typeof I == "string";
}
function Mg(I) {
  return typeof I == "number";
}
function HA(I) {
  var A = typeof I;
  return A === "function" || !!I && A === "object";
}
function Yt(I) {
  return !!_B[zg.call(I)];
}
function fQ(I) {
  return !!mB[zg.call(I)];
}
function Ki(I) {
  return typeof I == "object" && typeof I.nodeType == "number" && typeof I.ownerDocument == "object";
}
function Qt(I) {
  return I.colorStops != null;
}
function cQ(I) {
  return I.image != null;
}
function uQ(I) {
  return I !== I;
}
function lQ(I, A) {
  return I != null ? I : A;
}
function qB(I) {
  for (var A = [], g = 1; g < arguments.length; g++)
    A[g - 1] = arguments[g];
  return HB.apply(I, A);
}
function eg(I) {
  return I == null ? null : typeof I.trim == "function" ? I.trim() : I.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var DQ = "__ec_primitive__";
function XI(I) {
  return I[DQ];
}
function jg(I, A) {
  var g;
  if (Object.create)
    g = Object.create(I);
  else {
    var i = function() {
    };
    i.prototype = I, g = new i();
  }
  return A && x(g, A), g;
}
function TB(I) {
  var A = I.style;
  A.webkitUserSelect = "none", A.userSelect = "none", A.webkitTapHighlightColor = "rgba(0,0,0,0)", A["-webkit-touch-callout"] = "none";
}
function pI() {
}
var wQ = 180 / Math.PI;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var qi = function(I, A) {
  return qi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(g, i) {
    g.__proto__ = i;
  } || function(g, i) {
    for (var t in i)
      Object.prototype.hasOwnProperty.call(i, t) && (g[t] = i[t]);
  }, qi(I, A);
};
function BA(I, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  qi(I, A);
  function g() {
    this.constructor = I;
  }
  I.prototype = A === null ? Object.create(A) : (g.prototype = A.prototype, new g());
}
function FI(I, A) {
  return I == null && (I = 0), A == null && (A = 0), [I, A];
}
function dQ(I) {
  return Math.sqrt(yQ(I));
}
function yQ(I) {
  return I[0] * I[0] + I[1] * I[1];
}
function vQ(I, A) {
  var g = dQ(A);
  return g === 0 ? (I[0] = 0, I[1] = 0) : (I[0] = A[0] / g, I[1] = A[1] / g), I;
}
function pQ(I, A) {
  return Math.sqrt((I[0] - A[0]) * (I[0] - A[0]) + (I[1] - A[1]) * (I[1] - A[1]));
}
var GQ = pQ;
function NQ(I, A) {
  return (I[0] - A[0]) * (I[0] - A[0]) + (I[1] - A[1]) * (I[1] - A[1]);
}
var GI = NQ;
function Lt(I, A, g) {
  var i = A[0], t = A[1];
  return I[0] = g[0] * i + g[2] * t + g[4], I[1] = g[1] * i + g[3] * t + g[5], I;
}
function xB(I, A, g) {
  return I[0] = Math.min(A[0], g[0]), I[1] = Math.min(A[1], g[1]), I;
}
function ZB(I, A, g) {
  return I[0] = Math.max(A[0], g[0]), I[1] = Math.max(A[1], g[1]), I;
}
var cI = function() {
  function I(A, g) {
    this.target = A, this.topTarget = g && g.topTarget;
  }
  return I;
}(), RQ = function() {
  function I(A) {
    this.handler = A, A.on("mousedown", this._dragStart, this), A.on("mousemove", this._drag, this), A.on("mouseup", this._dragEnd, this);
  }
  return I.prototype._dragStart = function(A) {
    for (var g = A.target; g && !g.draggable; )
      g = g.parent || g.__hostTarget;
    g && (this._draggingTarget = g, g.dragging = !0, this._x = A.offsetX, this._y = A.offsetY, this.handler.dispatchToElement(new cI(g, A), "dragstart", A.event));
  }, I.prototype._drag = function(A) {
    var g = this._draggingTarget;
    if (g) {
      var i = A.offsetX, t = A.offsetY, B = i - this._x, C = t - this._y;
      this._x = i, this._y = t, g.drift(B, C, A), this.handler.dispatchToElement(new cI(g, A), "drag", A.event);
      var Q = this.handler.findHover(i, t, g).target, r = this._dropTarget;
      this._dropTarget = Q, g !== Q && (r && Q !== r && this.handler.dispatchToElement(new cI(r, A), "dragleave", A.event), Q && Q !== r && this.handler.dispatchToElement(new cI(Q, A), "dragenter", A.event));
    }
  }, I.prototype._dragEnd = function(A) {
    var g = this._draggingTarget;
    g && (g.dragging = !1), this.handler.dispatchToElement(new cI(g, A), "dragend", A.event), this._dropTarget && this.handler.dispatchToElement(new cI(this._dropTarget, A), "drop", A.event), this._draggingTarget = null, this._dropTarget = null;
  }, I;
}();
const SQ = RQ;
var FQ = function() {
  function I(A) {
    A && (this._$eventProcessor = A);
  }
  return I.prototype.on = function(A, g, i, t) {
    this._$handlers || (this._$handlers = {});
    var B = this._$handlers;
    if (typeof g == "function" && (t = i, i = g, g = null), !i || !A)
      return this;
    var C = this._$eventProcessor;
    g != null && C && C.normalizeQuery && (g = C.normalizeQuery(g)), B[A] || (B[A] = []);
    for (var Q = 0; Q < B[A].length; Q++)
      if (B[A][Q].h === i)
        return this;
    var r = {
      h: i,
      query: g,
      ctx: t || this,
      callAtLast: i.zrEventfulCallAtLast
    }, E = B[A].length - 1, e = B[A][E];
    return e && e.callAtLast ? B[A].splice(E, 0, r) : B[A].push(r), this;
  }, I.prototype.isSilent = function(A) {
    var g = this._$handlers;
    return !g || !g[A] || !g[A].length;
  }, I.prototype.off = function(A, g) {
    var i = this._$handlers;
    if (!i)
      return this;
    if (!A)
      return this._$handlers = {}, this;
    if (g) {
      if (i[A]) {
        for (var t = [], B = 0, C = i[A].length; B < C; B++)
          i[A][B].h !== g && t.push(i[A][B]);
        i[A] = t;
      }
      i[A] && i[A].length === 0 && delete i[A];
    } else
      delete i[A];
    return this;
  }, I.prototype.trigger = function(A) {
    for (var g = [], i = 1; i < arguments.length; i++)
      g[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var t = this._$handlers[A], B = this._$eventProcessor;
    if (t)
      for (var C = g.length, Q = t.length, r = 0; r < Q; r++) {
        var E = t[r];
        if (!(B && B.filter && E.query != null && !B.filter(A, E.query)))
          switch (C) {
            case 0:
              E.h.call(E.ctx);
              break;
            case 1:
              E.h.call(E.ctx, g[0]);
              break;
            case 2:
              E.h.call(E.ctx, g[0], g[1]);
              break;
            default:
              E.h.apply(E.ctx, g);
              break;
          }
      }
    return B && B.afterTrigger && B.afterTrigger(A), this;
  }, I.prototype.triggerWithContext = function(A) {
    for (var g = [], i = 1; i < arguments.length; i++)
      g[i - 1] = arguments[i];
    if (!this._$handlers)
      return this;
    var t = this._$handlers[A], B = this._$eventProcessor;
    if (t)
      for (var C = g.length, Q = g[C - 1], r = t.length, E = 0; E < r; E++) {
        var e = t[E];
        if (!(B && B.filter && e.query != null && !B.filter(A, e.query)))
          switch (C) {
            case 0:
              e.h.call(Q);
              break;
            case 1:
              e.h.call(Q, g[0]);
              break;
            case 2:
              e.h.call(Q, g[0], g[1]);
              break;
            default:
              e.h.apply(Q, g.slice(1, C - 1));
              break;
          }
      }
    return B && B.afterTrigger && B.afterTrigger(A), this;
  }, I;
}();
const kI = FQ;
var kQ = Math.log(2);
function Ti(I, A, g, i, t, B) {
  var C = i + "-" + t, Q = I.length;
  if (B.hasOwnProperty(C))
    return B[C];
  if (A === 1) {
    var r = Math.round(Math.log((1 << Q) - 1 & ~t) / kQ);
    return I[g][r];
  }
  for (var E = i | 1 << g, e = g + 1; i & 1 << e; )
    e++;
  for (var a = 0, o = 0, n = 0; o < Q; o++) {
    var h = 1 << o;
    h & t || (a += (n % 2 ? -1 : 1) * I[g][o] * Ti(I, A - 1, e, E, t | h, B), n++);
  }
  return B[C] = a, a;
}
function Jt(I, A) {
  var g = [
    [I[0], I[1], 1, 0, 0, 0, -A[0] * I[0], -A[0] * I[1]],
    [0, 0, 0, I[0], I[1], 1, -A[1] * I[0], -A[1] * I[1]],
    [I[2], I[3], 1, 0, 0, 0, -A[2] * I[2], -A[2] * I[3]],
    [0, 0, 0, I[2], I[3], 1, -A[3] * I[2], -A[3] * I[3]],
    [I[4], I[5], 1, 0, 0, 0, -A[4] * I[4], -A[4] * I[5]],
    [0, 0, 0, I[4], I[5], 1, -A[5] * I[4], -A[5] * I[5]],
    [I[6], I[7], 1, 0, 0, 0, -A[6] * I[6], -A[6] * I[7]],
    [0, 0, 0, I[6], I[7], 1, -A[7] * I[6], -A[7] * I[7]]
  ], i = {}, t = Ti(g, 8, 0, 0, 0, i);
  if (t !== 0) {
    for (var B = [], C = 0; C < 8; C++)
      for (var Q = 0; Q < 8; Q++)
        B[Q] == null && (B[Q] = 0), B[Q] += ((C + Q) % 2 ? -1 : 1) * Ti(g, 7, C === 0 ? 1 : 0, 1 << C, 1 << Q, i) / t * A[C];
    return function(r, E, e) {
      var a = E * B[6] + e * B[7] + 1;
      r[0] = (E * B[0] + e * B[1] + B[2]) / a, r[1] = (E * B[3] + e * B[4] + B[5]) / a;
    };
  }
}
var Ut = "___zrEVENTSAVED";
function MQ(I, A, g, i, t) {
  if (A.getBoundingClientRect && V.domSupported && !PB(A)) {
    var B = A[Ut] || (A[Ut] = {}), C = YQ(A, B), Q = LQ(C, B, t);
    if (Q)
      return Q(I, g, i), !0;
  }
  return !1;
}
function YQ(I, A) {
  var g = A.markers;
  if (g)
    return g;
  g = A.markers = [];
  for (var i = ["left", "right"], t = ["top", "bottom"], B = 0; B < 4; B++) {
    var C = document.createElement("div"), Q = C.style, r = B % 2, E = (B >> 1) % 2;
    Q.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      i[r] + ":0",
      t[E] + ":0",
      i[1 - r] + ":auto",
      t[1 - E] + ":auto",
      ""
    ].join("!important;"), I.appendChild(C), g.push(C);
  }
  return g;
}
function LQ(I, A, g) {
  for (var i = g ? "invTrans" : "trans", t = A[i], B = A.srcCoords, C = [], Q = [], r = !0, E = 0; E < 4; E++) {
    var e = I[E].getBoundingClientRect(), a = 2 * E, o = e.left, n = e.top;
    C.push(o, n), r = r && B && o === B[a] && n === B[a + 1], Q.push(I[E].offsetLeft, I[E].offsetTop);
  }
  return r && t ? t : (A.srcCoords = C, A[i] = g ? Jt(Q, C) : Jt(C, Q));
}
function PB(I) {
  return I.nodeName.toUpperCase() === "CANVAS";
}
var JQ = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Bi = [], UQ = V.browser.firefox && +V.browser.version.split(".")[0] < 39;
function xi(I, A, g, i) {
  return g = g || {}, i ? _t(I, A, g) : UQ && A.layerX != null && A.layerX !== A.offsetX ? (g.zrX = A.layerX, g.zrY = A.layerY) : A.offsetX != null ? (g.zrX = A.offsetX, g.zrY = A.offsetY) : _t(I, A, g), g;
}
function _t(I, A, g) {
  if (V.domSupported && I.getBoundingClientRect) {
    var i = A.clientX, t = A.clientY;
    if (PB(I)) {
      var B = I.getBoundingClientRect();
      g.zrX = i - B.left, g.zrY = t - B.top;
      return;
    } else if (MQ(Bi, I, i, t)) {
      g.zrX = Bi[0], g.zrY = Bi[1];
      return;
    }
  }
  g.zrX = g.zrY = 0;
}
function rt(I) {
  return I || window.event;
}
function nA(I, A, g) {
  if (A = rt(A), A.zrX != null)
    return A;
  var i = A.type, t = i && i.indexOf("touch") >= 0;
  if (t) {
    var C = i !== "touchend" ? A.targetTouches[0] : A.changedTouches[0];
    C && xi(I, C, A, g);
  } else {
    xi(I, A, A, g);
    var B = _Q(A);
    A.zrDelta = B ? B / 120 : -(A.detail || 0) / 3;
  }
  var Q = A.button;
  return A.which == null && Q !== void 0 && JQ.test(A.type) && (A.which = Q & 1 ? 1 : Q & 2 ? 3 : Q & 4 ? 2 : 0), A;
}
function _Q(I) {
  var A = I.wheelDelta;
  if (A)
    return A;
  var g = I.deltaX, i = I.deltaY;
  if (g == null || i == null)
    return A;
  var t = Math.abs(i !== 0 ? i : g), B = i > 0 ? -1 : i < 0 ? 1 : g > 0 ? -1 : 1;
  return 3 * t * B;
}
function mQ(I, A, g, i) {
  I.addEventListener(A, g, i);
}
function HQ(I, A, g, i) {
  I.removeEventListener(A, g, i);
}
var bQ = function(I) {
  I.preventDefault(), I.stopPropagation(), I.cancelBubble = !0;
}, KQ = function() {
  function I() {
    this._track = [];
  }
  return I.prototype.recognize = function(A, g, i) {
    return this._doTrack(A, g, i), this._recognize(A);
  }, I.prototype.clear = function() {
    return this._track.length = 0, this;
  }, I.prototype._doTrack = function(A, g, i) {
    var t = A.touches;
    if (!!t) {
      for (var B = {
        points: [],
        touches: [],
        target: g,
        event: A
      }, C = 0, Q = t.length; C < Q; C++) {
        var r = t[C], E = xi(i, r, {});
        B.points.push([E.zrX, E.zrY]), B.touches.push(r);
      }
      this._track.push(B);
    }
  }, I.prototype._recognize = function(A) {
    for (var g in Ci)
      if (Ci.hasOwnProperty(g)) {
        var i = Ci[g](this._track, A);
        if (i)
          return i;
      }
  }, I;
}();
function mt(I) {
  var A = I[1][0] - I[0][0], g = I[1][1] - I[0][1];
  return Math.sqrt(A * A + g * g);
}
function qQ(I) {
  return [
    (I[0][0] + I[1][0]) / 2,
    (I[0][1] + I[1][1]) / 2
  ];
}
var Ci = {
  pinch: function(I, A) {
    var g = I.length;
    if (!!g) {
      var i = (I[g - 1] || {}).points, t = (I[g - 2] || {}).points || i;
      if (t && t.length > 1 && i && i.length > 1) {
        var B = mt(i) / mt(t);
        !isFinite(B) && (B = 1), A.pinchScale = B;
        var C = qQ(i);
        return A.pinchX = C[0], A.pinchY = C[1], {
          type: "pinch",
          target: I[0].target,
          event: A
        };
      }
    }
  }
};
function mg() {
  return [1, 0, 0, 1, 0, 0];
}
function TQ(I) {
  return I[0] = 1, I[1] = 0, I[2] = 0, I[3] = 1, I[4] = 0, I[5] = 0, I;
}
function xQ(I, A) {
  return I[0] = A[0], I[1] = A[1], I[2] = A[2], I[3] = A[3], I[4] = A[4], I[5] = A[5], I;
}
function Qi(I, A, g) {
  var i = A[0] * g[0] + A[2] * g[1], t = A[1] * g[0] + A[3] * g[1], B = A[0] * g[2] + A[2] * g[3], C = A[1] * g[2] + A[3] * g[3], Q = A[0] * g[4] + A[2] * g[5] + A[4], r = A[1] * g[4] + A[3] * g[5] + A[5];
  return I[0] = i, I[1] = t, I[2] = B, I[3] = C, I[4] = Q, I[5] = r, I;
}
function Ht(I, A, g) {
  return I[0] = A[0], I[1] = A[1], I[2] = A[2], I[3] = A[3], I[4] = A[4] + g[0], I[5] = A[5] + g[1], I;
}
function ZQ(I, A, g) {
  var i = A[0], t = A[2], B = A[4], C = A[1], Q = A[3], r = A[5], E = Math.sin(g), e = Math.cos(g);
  return I[0] = i * e + C * E, I[1] = -i * E + C * e, I[2] = t * e + Q * E, I[3] = -t * E + e * Q, I[4] = e * B + E * r, I[5] = e * r - E * B, I;
}
function PQ(I, A, g) {
  var i = g[0], t = g[1];
  return I[0] = A[0] * i, I[1] = A[1] * t, I[2] = A[2] * i, I[3] = A[3] * t, I[4] = A[4] * i, I[5] = A[5] * t, I;
}
function WQ(I, A) {
  var g = A[0], i = A[2], t = A[4], B = A[1], C = A[3], Q = A[5], r = g * C - B * i;
  return r ? (r = 1 / r, I[0] = C * r, I[1] = -B * r, I[2] = -i * r, I[3] = g * r, I[4] = (i * Q - C * t) * r, I[5] = (B * t - g * Q) * r, I) : null;
}
var XQ = function() {
  function I(A, g) {
    this.x = A || 0, this.y = g || 0;
  }
  return I.prototype.copy = function(A) {
    return this.x = A.x, this.y = A.y, this;
  }, I.prototype.clone = function() {
    return new I(this.x, this.y);
  }, I.prototype.set = function(A, g) {
    return this.x = A, this.y = g, this;
  }, I.prototype.equal = function(A) {
    return A.x === this.x && A.y === this.y;
  }, I.prototype.add = function(A) {
    return this.x += A.x, this.y += A.y, this;
  }, I.prototype.scale = function(A) {
    this.x *= A, this.y *= A;
  }, I.prototype.scaleAndAdd = function(A, g) {
    this.x += A.x * g, this.y += A.y * g;
  }, I.prototype.sub = function(A) {
    return this.x -= A.x, this.y -= A.y, this;
  }, I.prototype.dot = function(A) {
    return this.x * A.x + this.y * A.y;
  }, I.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, I.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, I.prototype.normalize = function() {
    var A = this.len();
    return this.x /= A, this.y /= A, this;
  }, I.prototype.distance = function(A) {
    var g = this.x - A.x, i = this.y - A.y;
    return Math.sqrt(g * g + i * i);
  }, I.prototype.distanceSquare = function(A) {
    var g = this.x - A.x, i = this.y - A.y;
    return g * g + i * i;
  }, I.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, I.prototype.transform = function(A) {
    if (!!A) {
      var g = this.x, i = this.y;
      return this.x = A[0] * g + A[2] * i + A[4], this.y = A[1] * g + A[3] * i + A[5], this;
    }
  }, I.prototype.toArray = function(A) {
    return A[0] = this.x, A[1] = this.y, A;
  }, I.prototype.fromArray = function(A) {
    this.x = A[0], this.y = A[1];
  }, I.set = function(A, g, i) {
    A.x = g, A.y = i;
  }, I.copy = function(A, g) {
    A.x = g.x, A.y = g.y;
  }, I.len = function(A) {
    return Math.sqrt(A.x * A.x + A.y * A.y);
  }, I.lenSquare = function(A) {
    return A.x * A.x + A.y * A.y;
  }, I.dot = function(A, g) {
    return A.x * g.x + A.y * g.y;
  }, I.add = function(A, g, i) {
    A.x = g.x + i.x, A.y = g.y + i.y;
  }, I.sub = function(A, g, i) {
    A.x = g.x - i.x, A.y = g.y - i.y;
  }, I.scale = function(A, g, i) {
    A.x = g.x * i, A.y = g.y * i;
  }, I.scaleAndAdd = function(A, g, i, t) {
    A.x = g.x + i.x * t, A.y = g.y + i.y * t;
  }, I.lerp = function(A, g, i, t) {
    var B = 1 - t;
    A.x = B * g.x + t * i.x, A.y = B * g.y + t * i.y;
  }, I;
}();
const j = XQ;
var ag = Math.min, og = Math.max, PA = new j(), WA = new j(), XA = new j(), zA = new j(), JI = new j(), UI = new j(), zQ = function() {
  function I(A, g, i, t) {
    i < 0 && (A = A + i, i = -i), t < 0 && (g = g + t, t = -t), this.x = A, this.y = g, this.width = i, this.height = t;
  }
  return I.prototype.union = function(A) {
    var g = ag(A.x, this.x), i = ag(A.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = og(A.x + A.width, this.x + this.width) - g : this.width = A.width, isFinite(this.y) && isFinite(this.height) ? this.height = og(A.y + A.height, this.y + this.height) - i : this.height = A.height, this.x = g, this.y = i;
  }, I.prototype.applyTransform = function(A) {
    I.applyTransform(this, this, A);
  }, I.prototype.calculateTransform = function(A) {
    var g = this, i = A.width / g.width, t = A.height / g.height, B = mg();
    return Ht(B, B, [-g.x, -g.y]), PQ(B, B, [i, t]), Ht(B, B, [A.x, A.y]), B;
  }, I.prototype.intersect = function(A, g) {
    if (!A)
      return !1;
    A instanceof I || (A = I.create(A));
    var i = this, t = i.x, B = i.x + i.width, C = i.y, Q = i.y + i.height, r = A.x, E = A.x + A.width, e = A.y, a = A.y + A.height, o = !(B < r || E < t || Q < e || a < C);
    if (g) {
      var n = 1 / 0, h = 0, l = Math.abs(B - r), c = Math.abs(E - t), s = Math.abs(Q - e), u = Math.abs(a - C), D = Math.min(l, c), d = Math.min(s, u);
      B < r || E < t ? D > h && (h = D, l < c ? j.set(UI, -l, 0) : j.set(UI, c, 0)) : D < n && (n = D, l < c ? j.set(JI, l, 0) : j.set(JI, -c, 0)), Q < e || a < C ? d > h && (h = d, s < u ? j.set(UI, 0, -s) : j.set(UI, 0, u)) : D < n && (n = D, s < u ? j.set(JI, 0, s) : j.set(JI, 0, -u));
    }
    return g && j.copy(g, o ? JI : UI), o;
  }, I.prototype.contain = function(A, g) {
    var i = this;
    return A >= i.x && A <= i.x + i.width && g >= i.y && g <= i.y + i.height;
  }, I.prototype.clone = function() {
    return new I(this.x, this.y, this.width, this.height);
  }, I.prototype.copy = function(A) {
    I.copy(this, A);
  }, I.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, I.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, I.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, I.create = function(A) {
    return new I(A.x, A.y, A.width, A.height);
  }, I.copy = function(A, g) {
    A.x = g.x, A.y = g.y, A.width = g.width, A.height = g.height;
  }, I.applyTransform = function(A, g, i) {
    if (!i) {
      A !== g && I.copy(A, g);
      return;
    }
    if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
      var t = i[0], B = i[3], C = i[4], Q = i[5];
      A.x = g.x * t + C, A.y = g.y * B + Q, A.width = g.width * t, A.height = g.height * B, A.width < 0 && (A.x += A.width, A.width = -A.width), A.height < 0 && (A.y += A.height, A.height = -A.height);
      return;
    }
    PA.x = XA.x = g.x, PA.y = zA.y = g.y, WA.x = zA.x = g.x + g.width, WA.y = XA.y = g.y + g.height, PA.transform(i), zA.transform(i), WA.transform(i), XA.transform(i), A.x = ag(PA.x, WA.x, XA.x, zA.x), A.y = ag(PA.y, WA.y, XA.y, zA.y);
    var r = og(PA.x, WA.x, XA.x, zA.x), E = og(PA.y, WA.y, XA.y, zA.y);
    A.width = r - A.x, A.height = E - A.y;
  }, I;
}();
const P = zQ;
var WB = "silent";
function VQ(I, A, g) {
  return {
    type: I,
    event: g,
    target: A.target,
    topTarget: A.topTarget,
    cancelBubble: !1,
    offsetX: g.zrX,
    offsetY: g.zrY,
    gestureEvent: g.gestureEvent,
    pinchX: g.pinchX,
    pinchY: g.pinchY,
    pinchScale: g.pinchScale,
    wheelDelta: g.zrDelta,
    zrByTouch: g.zrByTouch,
    which: g.which,
    stop: OQ
  };
}
function OQ() {
  bQ(this.event);
}
var jQ = function(I) {
  BA(A, I);
  function A() {
    var g = I !== null && I.apply(this, arguments) || this;
    return g.handler = null, g;
  }
  return A.prototype.dispose = function() {
  }, A.prototype.setCursor = function() {
  }, A;
}(kI), _I = function() {
  function I(A, g) {
    this.x = A, this.y = g;
  }
  return I;
}(), $Q = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], ri = new P(0, 0, 0, 0), XB = function(I) {
  BA(A, I);
  function A(g, i, t, B, C) {
    var Q = I.call(this) || this;
    return Q._hovered = new _I(0, 0), Q.storage = g, Q.painter = i, Q.painterRoot = B, Q._pointerSize = C, t = t || new jQ(), Q.proxy = null, Q.setHandlerProxy(t), Q._draggingMgr = new SQ(Q), Q;
  }
  return A.prototype.setHandlerProxy = function(g) {
    this.proxy && this.proxy.dispose(), g && (hA($Q, function(i) {
      g.on && g.on(i, this[i], this);
    }, this), g.handler = this), this.proxy = g;
  }, A.prototype.mousemove = function(g) {
    var i = g.zrX, t = g.zrY, B = zB(this, i, t), C = this._hovered, Q = C.target;
    Q && !Q.__zr && (C = this.findHover(C.x, C.y), Q = C.target);
    var r = this._hovered = B ? new _I(i, t) : this.findHover(i, t), E = r.target, e = this.proxy;
    e.setCursor && e.setCursor(E ? E.cursor : "default"), Q && E !== Q && this.dispatchToElement(C, "mouseout", g), this.dispatchToElement(r, "mousemove", g), E && E !== Q && this.dispatchToElement(r, "mouseover", g);
  }, A.prototype.mouseout = function(g) {
    var i = g.zrEventControl;
    i !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", g), i !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: g });
  }, A.prototype.resize = function() {
    this._hovered = new _I(0, 0);
  }, A.prototype.dispatch = function(g, i) {
    var t = this[g];
    t && t.call(this, i);
  }, A.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, A.prototype.setCursorStyle = function(g) {
    var i = this.proxy;
    i.setCursor && i.setCursor(g);
  }, A.prototype.dispatchToElement = function(g, i, t) {
    g = g || {};
    var B = g.target;
    if (!(B && B.silent)) {
      for (var C = "on" + i, Q = VQ(i, g, t); B && (B[C] && (Q.cancelBubble = !!B[C].call(B, Q)), B.trigger(i, Q), B = B.__hostTarget ? B.__hostTarget : B.parent, !Q.cancelBubble); )
        ;
      Q.cancelBubble || (this.trigger(i, Q), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(r) {
        typeof r[C] == "function" && r[C].call(r, Q), r.trigger && r.trigger(i, Q);
      }));
    }
  }, A.prototype.findHover = function(g, i, t) {
    var B = this.storage.getDisplayList(), C = new _I(g, i);
    if (bt(B, C, g, i, t), this._pointerSize && !C.target) {
      for (var Q = [], r = this._pointerSize, E = r / 2, e = new P(g - E, i - E, r, r), a = B.length - 1; a >= 0; a--) {
        var o = B[a];
        o !== t && !o.ignore && !o.ignoreCoarsePointer && (!o.parent || !o.parent.ignoreCoarsePointer) && (ri.copy(o.getBoundingRect()), o.transform && ri.applyTransform(o.transform), ri.intersect(e) && Q.push(o));
      }
      if (Q.length)
        for (var n = 4, h = Math.PI / 12, l = Math.PI * 2, c = 0; c < E; c += n)
          for (var s = 0; s < l; s += h) {
            var u = g + c * Math.cos(s), D = i + c * Math.sin(s);
            if (bt(Q, C, u, D, t), C.target)
              return C;
          }
    }
    return C;
  }, A.prototype.processGesture = function(g, i) {
    this._gestureMgr || (this._gestureMgr = new KQ());
    var t = this._gestureMgr;
    i === "start" && t.clear();
    var B = t.recognize(g, this.findHover(g.zrX, g.zrY, null).target, this.proxy.dom);
    if (i === "end" && t.clear(), B) {
      var C = B.type;
      g.gestureEvent = C;
      var Q = new _I();
      Q.target = B.target, this.dispatchToElement(Q, C, B.event);
    }
  }, A;
}(kI);
hA(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(I) {
  XB.prototype[I] = function(A) {
    var g = A.zrX, i = A.zrY, t = zB(this, g, i), B, C;
    if ((I !== "mouseup" || !t) && (B = this.findHover(g, i), C = B.target), I === "mousedown")
      this._downEl = C, this._downPoint = [A.zrX, A.zrY], this._upEl = C;
    else if (I === "mouseup")
      this._upEl = C;
    else if (I === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || GQ(this._downPoint, [A.zrX, A.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(B, I, A);
  };
});
function Ar(I, A, g) {
  if (I[I.rectHover ? "rectContain" : "contain"](A, g)) {
    for (var i = I, t = void 0, B = !1; i; ) {
      if (i.ignoreClip && (B = !0), !B) {
        var C = i.getClipPath();
        if (C && !C.contain(A, g))
          return !1;
        i.silent && (t = !0);
      }
      var Q = i.__hostTarget;
      i = Q || i.parent;
    }
    return t ? WB : !0;
  }
  return !1;
}
function bt(I, A, g, i, t) {
  for (var B = I.length - 1; B >= 0; B--) {
    var C = I[B], Q = void 0;
    if (C !== t && !C.ignore && (Q = Ar(C, g, i)) && (!A.topTarget && (A.topTarget = C), Q !== WB)) {
      A.target = C;
      break;
    }
  }
}
function zB(I, A, g) {
  var i = I.painter;
  return A < 0 || A > i.getWidth() || g < 0 || g > i.getHeight();
}
const Ir = XB;
var VB = 32, mI = 7;
function gr(I) {
  for (var A = 0; I >= VB; )
    A |= I & 1, I >>= 1;
  return I + A;
}
function Kt(I, A, g, i) {
  var t = A + 1;
  if (t === g)
    return 1;
  if (i(I[t++], I[A]) < 0) {
    for (; t < g && i(I[t], I[t - 1]) < 0; )
      t++;
    ir(I, A, t);
  } else
    for (; t < g && i(I[t], I[t - 1]) >= 0; )
      t++;
  return t - A;
}
function ir(I, A, g) {
  for (g--; A < g; ) {
    var i = I[A];
    I[A++] = I[g], I[g--] = i;
  }
}
function qt(I, A, g, i, t) {
  for (i === A && i++; i < g; i++) {
    for (var B = I[i], C = A, Q = i, r; C < Q; )
      r = C + Q >>> 1, t(B, I[r]) < 0 ? Q = r : C = r + 1;
    var E = i - C;
    switch (E) {
      case 3:
        I[C + 3] = I[C + 2];
      case 2:
        I[C + 2] = I[C + 1];
      case 1:
        I[C + 1] = I[C];
        break;
      default:
        for (; E > 0; )
          I[C + E] = I[C + E - 1], E--;
    }
    I[C] = B;
  }
}
function Ei(I, A, g, i, t, B) {
  var C = 0, Q = 0, r = 1;
  if (B(I, A[g + t]) > 0) {
    for (Q = i - t; r < Q && B(I, A[g + t + r]) > 0; )
      C = r, r = (r << 1) + 1, r <= 0 && (r = Q);
    r > Q && (r = Q), C += t, r += t;
  } else {
    for (Q = t + 1; r < Q && B(I, A[g + t - r]) <= 0; )
      C = r, r = (r << 1) + 1, r <= 0 && (r = Q);
    r > Q && (r = Q);
    var E = C;
    C = t - r, r = t - E;
  }
  for (C++; C < r; ) {
    var e = C + (r - C >>> 1);
    B(I, A[g + e]) > 0 ? C = e + 1 : r = e;
  }
  return r;
}
function ei(I, A, g, i, t, B) {
  var C = 0, Q = 0, r = 1;
  if (B(I, A[g + t]) < 0) {
    for (Q = t + 1; r < Q && B(I, A[g + t - r]) < 0; )
      C = r, r = (r << 1) + 1, r <= 0 && (r = Q);
    r > Q && (r = Q);
    var E = C;
    C = t - r, r = t - E;
  } else {
    for (Q = i - t; r < Q && B(I, A[g + t + r]) >= 0; )
      C = r, r = (r << 1) + 1, r <= 0 && (r = Q);
    r > Q && (r = Q), C += t, r += t;
  }
  for (C++; C < r; ) {
    var e = C + (r - C >>> 1);
    B(I, A[g + e]) < 0 ? r = e : C = e + 1;
  }
  return r;
}
function tr(I, A) {
  var g = mI, i, t, B = 0;
  I.length;
  var C = [];
  i = [], t = [];
  function Q(n, h) {
    i[B] = n, t[B] = h, B += 1;
  }
  function r() {
    for (; B > 1; ) {
      var n = B - 2;
      if (n >= 1 && t[n - 1] <= t[n] + t[n + 1] || n >= 2 && t[n - 2] <= t[n] + t[n - 1])
        t[n - 1] < t[n + 1] && n--;
      else if (t[n] > t[n + 1])
        break;
      e(n);
    }
  }
  function E() {
    for (; B > 1; ) {
      var n = B - 2;
      n > 0 && t[n - 1] < t[n + 1] && n--, e(n);
    }
  }
  function e(n) {
    var h = i[n], l = t[n], c = i[n + 1], s = t[n + 1];
    t[n] = l + s, n === B - 3 && (i[n + 1] = i[n + 2], t[n + 1] = t[n + 2]), B--;
    var u = ei(I[c], I, h, l, 0, A);
    h += u, l -= u, l !== 0 && (s = Ei(I[h + l - 1], I, c, s, s - 1, A), s !== 0 && (l <= s ? a(h, l, c, s) : o(h, l, c, s)));
  }
  function a(n, h, l, c) {
    var s = 0;
    for (s = 0; s < h; s++)
      C[s] = I[n + s];
    var u = 0, D = l, d = n;
    if (I[d++] = I[D++], --c === 0) {
      for (s = 0; s < h; s++)
        I[d + s] = C[u + s];
      return;
    }
    if (h === 1) {
      for (s = 0; s < c; s++)
        I[d + s] = I[D + s];
      I[d + c] = C[u];
      return;
    }
    for (var p = g, y, N, G; ; ) {
      y = 0, N = 0, G = !1;
      do
        if (A(I[D], C[u]) < 0) {
          if (I[d++] = I[D++], N++, y = 0, --c === 0) {
            G = !0;
            break;
          }
        } else if (I[d++] = C[u++], y++, N = 0, --h === 1) {
          G = !0;
          break;
        }
      while ((y | N) < p);
      if (G)
        break;
      do {
        if (y = ei(I[D], C, u, h, 0, A), y !== 0) {
          for (s = 0; s < y; s++)
            I[d + s] = C[u + s];
          if (d += y, u += y, h -= y, h <= 1) {
            G = !0;
            break;
          }
        }
        if (I[d++] = I[D++], --c === 0) {
          G = !0;
          break;
        }
        if (N = Ei(C[u], I, D, c, 0, A), N !== 0) {
          for (s = 0; s < N; s++)
            I[d + s] = I[D + s];
          if (d += N, D += N, c -= N, c === 0) {
            G = !0;
            break;
          }
        }
        if (I[d++] = C[u++], --h === 1) {
          G = !0;
          break;
        }
        p--;
      } while (y >= mI || N >= mI);
      if (G)
        break;
      p < 0 && (p = 0), p += 2;
    }
    if (g = p, g < 1 && (g = 1), h === 1) {
      for (s = 0; s < c; s++)
        I[d + s] = I[D + s];
      I[d + c] = C[u];
    } else {
      if (h === 0)
        throw new Error();
      for (s = 0; s < h; s++)
        I[d + s] = C[u + s];
    }
  }
  function o(n, h, l, c) {
    var s = 0;
    for (s = 0; s < c; s++)
      C[s] = I[l + s];
    var u = n + h - 1, D = c - 1, d = l + c - 1, p = 0, y = 0;
    if (I[d--] = I[u--], --h === 0) {
      for (p = d - (c - 1), s = 0; s < c; s++)
        I[p + s] = C[s];
      return;
    }
    if (c === 1) {
      for (d -= h, u -= h, y = d + 1, p = u + 1, s = h - 1; s >= 0; s--)
        I[y + s] = I[p + s];
      I[d] = C[D];
      return;
    }
    for (var N = g; ; ) {
      var G = 0, S = 0, M = !1;
      do
        if (A(C[D], I[u]) < 0) {
          if (I[d--] = I[u--], G++, S = 0, --h === 0) {
            M = !0;
            break;
          }
        } else if (I[d--] = C[D--], S++, G = 0, --c === 1) {
          M = !0;
          break;
        }
      while ((G | S) < N);
      if (M)
        break;
      do {
        if (G = h - ei(C[D], I, n, h, h - 1, A), G !== 0) {
          for (d -= G, u -= G, h -= G, y = d + 1, p = u + 1, s = G - 1; s >= 0; s--)
            I[y + s] = I[p + s];
          if (h === 0) {
            M = !0;
            break;
          }
        }
        if (I[d--] = C[D--], --c === 1) {
          M = !0;
          break;
        }
        if (S = c - Ei(I[u], C, 0, c, c - 1, A), S !== 0) {
          for (d -= S, D -= S, c -= S, y = d + 1, p = D + 1, s = 0; s < S; s++)
            I[y + s] = C[p + s];
          if (c <= 1) {
            M = !0;
            break;
          }
        }
        if (I[d--] = I[u--], --h === 0) {
          M = !0;
          break;
        }
        N--;
      } while (G >= mI || S >= mI);
      if (M)
        break;
      N < 0 && (N = 0), N += 2;
    }
    if (g = N, g < 1 && (g = 1), c === 1) {
      for (d -= h, u -= h, y = d + 1, p = u + 1, s = h - 1; s >= 0; s--)
        I[y + s] = I[p + s];
      I[d] = C[D];
    } else {
      if (c === 0)
        throw new Error();
      for (p = d - (c - 1), s = 0; s < c; s++)
        I[p + s] = C[s];
    }
  }
  return {
    mergeRuns: r,
    forceMergeRuns: E,
    pushRun: Q
  };
}
function Br(I, A, g, i) {
  g || (g = 0), i || (i = I.length);
  var t = i - g;
  if (!(t < 2)) {
    var B = 0;
    if (t < VB) {
      B = Kt(I, g, i, A), qt(I, g, i, g + B, A);
      return;
    }
    var C = tr(I, A), Q = gr(t);
    do {
      if (B = Kt(I, g, i, A), B < Q) {
        var r = t;
        r > Q && (r = Q), qt(I, g, g + r, g + B, A), B = r;
      }
      C.pushRun(g, B), C.mergeRuns(), t -= B, g += B;
    } while (t !== 0);
    C.forceMergeRuns();
  }
}
var tA = 1, ZI = 2, dI = 4, Tt = !1;
function ai() {
  Tt || (Tt = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function xt(I, A) {
  return I.zlevel === A.zlevel ? I.z === A.z ? I.z2 - A.z2 : I.z - A.z : I.zlevel - A.zlevel;
}
var Cr = function() {
  function I() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = xt;
  }
  return I.prototype.traverse = function(A, g) {
    for (var i = 0; i < this._roots.length; i++)
      this._roots[i].traverse(A, g);
  }, I.prototype.getDisplayList = function(A, g) {
    g = g || !1;
    var i = this._displayList;
    return (A || !i.length) && this.updateDisplayList(g), i;
  }, I.prototype.updateDisplayList = function(A) {
    this._displayListLen = 0;
    for (var g = this._roots, i = this._displayList, t = 0, B = g.length; t < B; t++)
      this._updateAndAddDisplayable(g[t], null, A);
    i.length = this._displayListLen, Br(i, xt);
  }, I.prototype._updateAndAddDisplayable = function(A, g, i) {
    if (!(A.ignore && !i)) {
      A.beforeUpdate(), A.update(), A.afterUpdate();
      var t = A.getClipPath();
      if (A.ignoreClip)
        g = null;
      else if (t) {
        g ? g = g.slice() : g = [];
        for (var B = t, C = A; B; )
          B.parent = C, B.updateTransform(), g.push(B), C = B, B = B.getClipPath();
      }
      if (A.childrenRef) {
        for (var Q = A.childrenRef(), r = 0; r < Q.length; r++) {
          var E = Q[r];
          A.__dirty && (E.__dirty |= tA), this._updateAndAddDisplayable(E, g, i);
        }
        A.__dirty = 0;
      } else {
        var e = A;
        g && g.length ? e.__clipPaths = g : e.__clipPaths && e.__clipPaths.length > 0 && (e.__clipPaths = []), isNaN(e.z) && (ai(), e.z = 0), isNaN(e.z2) && (ai(), e.z2 = 0), isNaN(e.zlevel) && (ai(), e.zlevel = 0), this._displayList[this._displayListLen++] = e;
      }
      var a = A.getDecalElement && A.getDecalElement();
      a && this._updateAndAddDisplayable(a, g, i);
      var o = A.getTextGuideLine();
      o && this._updateAndAddDisplayable(o, g, i);
      var n = A.getTextContent();
      n && this._updateAndAddDisplayable(n, g, i);
    }
  }, I.prototype.addRoot = function(A) {
    A.__zr && A.__zr.storage === this || this._roots.push(A);
  }, I.prototype.delRoot = function(A) {
    if (A instanceof Array) {
      for (var g = 0, i = A.length; g < i; g++)
        this.delRoot(A[g]);
      return;
    }
    var t = wA(this._roots, A);
    t >= 0 && this._roots.splice(t, 1);
  }, I.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, I.prototype.getRoots = function() {
    return this._roots;
  }, I.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, I;
}();
const Qr = Cr;
var OB;
OB = V.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(I) {
  return setTimeout(I, 16);
};
const Zi = OB;
var Yg = {
  linear: function(I) {
    return I;
  },
  quadraticIn: function(I) {
    return I * I;
  },
  quadraticOut: function(I) {
    return I * (2 - I);
  },
  quadraticInOut: function(I) {
    return (I *= 2) < 1 ? 0.5 * I * I : -0.5 * (--I * (I - 2) - 1);
  },
  cubicIn: function(I) {
    return I * I * I;
  },
  cubicOut: function(I) {
    return --I * I * I + 1;
  },
  cubicInOut: function(I) {
    return (I *= 2) < 1 ? 0.5 * I * I * I : 0.5 * ((I -= 2) * I * I + 2);
  },
  quarticIn: function(I) {
    return I * I * I * I;
  },
  quarticOut: function(I) {
    return 1 - --I * I * I * I;
  },
  quarticInOut: function(I) {
    return (I *= 2) < 1 ? 0.5 * I * I * I * I : -0.5 * ((I -= 2) * I * I * I - 2);
  },
  quinticIn: function(I) {
    return I * I * I * I * I;
  },
  quinticOut: function(I) {
    return --I * I * I * I * I + 1;
  },
  quinticInOut: function(I) {
    return (I *= 2) < 1 ? 0.5 * I * I * I * I * I : 0.5 * ((I -= 2) * I * I * I * I + 2);
  },
  sinusoidalIn: function(I) {
    return 1 - Math.cos(I * Math.PI / 2);
  },
  sinusoidalOut: function(I) {
    return Math.sin(I * Math.PI / 2);
  },
  sinusoidalInOut: function(I) {
    return 0.5 * (1 - Math.cos(Math.PI * I));
  },
  exponentialIn: function(I) {
    return I === 0 ? 0 : Math.pow(1024, I - 1);
  },
  exponentialOut: function(I) {
    return I === 1 ? 1 : 1 - Math.pow(2, -10 * I);
  },
  exponentialInOut: function(I) {
    return I === 0 ? 0 : I === 1 ? 1 : (I *= 2) < 1 ? 0.5 * Math.pow(1024, I - 1) : 0.5 * (-Math.pow(2, -10 * (I - 1)) + 2);
  },
  circularIn: function(I) {
    return 1 - Math.sqrt(1 - I * I);
  },
  circularOut: function(I) {
    return Math.sqrt(1 - --I * I);
  },
  circularInOut: function(I) {
    return (I *= 2) < 1 ? -0.5 * (Math.sqrt(1 - I * I) - 1) : 0.5 * (Math.sqrt(1 - (I -= 2) * I) + 1);
  },
  elasticIn: function(I) {
    var A, g = 0.1, i = 0.4;
    return I === 0 ? 0 : I === 1 ? 1 : (!g || g < 1 ? (g = 1, A = i / 4) : A = i * Math.asin(1 / g) / (2 * Math.PI), -(g * Math.pow(2, 10 * (I -= 1)) * Math.sin((I - A) * (2 * Math.PI) / i)));
  },
  elasticOut: function(I) {
    var A, g = 0.1, i = 0.4;
    return I === 0 ? 0 : I === 1 ? 1 : (!g || g < 1 ? (g = 1, A = i / 4) : A = i * Math.asin(1 / g) / (2 * Math.PI), g * Math.pow(2, -10 * I) * Math.sin((I - A) * (2 * Math.PI) / i) + 1);
  },
  elasticInOut: function(I) {
    var A, g = 0.1, i = 0.4;
    return I === 0 ? 0 : I === 1 ? 1 : (!g || g < 1 ? (g = 1, A = i / 4) : A = i * Math.asin(1 / g) / (2 * Math.PI), (I *= 2) < 1 ? -0.5 * (g * Math.pow(2, 10 * (I -= 1)) * Math.sin((I - A) * (2 * Math.PI) / i)) : g * Math.pow(2, -10 * (I -= 1)) * Math.sin((I - A) * (2 * Math.PI) / i) * 0.5 + 1);
  },
  backIn: function(I) {
    var A = 1.70158;
    return I * I * ((A + 1) * I - A);
  },
  backOut: function(I) {
    var A = 1.70158;
    return --I * I * ((A + 1) * I + A) + 1;
  },
  backInOut: function(I) {
    var A = 2.5949095;
    return (I *= 2) < 1 ? 0.5 * (I * I * ((A + 1) * I - A)) : 0.5 * ((I -= 2) * I * ((A + 1) * I + A) + 2);
  },
  bounceIn: function(I) {
    return 1 - Yg.bounceOut(1 - I);
  },
  bounceOut: function(I) {
    return I < 1 / 2.75 ? 7.5625 * I * I : I < 2 / 2.75 ? 7.5625 * (I -= 1.5 / 2.75) * I + 0.75 : I < 2.5 / 2.75 ? 7.5625 * (I -= 2.25 / 2.75) * I + 0.9375 : 7.5625 * (I -= 2.625 / 2.75) * I + 0.984375;
  },
  bounceInOut: function(I) {
    return I < 0.5 ? Yg.bounceIn(I * 2) * 0.5 : Yg.bounceOut(I * 2 - 1) * 0.5 + 0.5;
  }
};
const jB = Yg;
var ng = Math.pow, KA = Math.sqrt, Hg = 1e-8, $B = 1e-4, Zt = KA(3), sg = 1 / 3, dA = FI(), eA = FI(), NI = FI();
function bA(I) {
  return I > -Hg && I < Hg;
}
function AC(I) {
  return I > Hg || I < -Hg;
}
function W(I, A, g, i, t) {
  var B = 1 - t;
  return B * B * (B * I + 3 * t * A) + t * t * (t * i + 3 * B * g);
}
function Pt(I, A, g, i, t) {
  var B = 1 - t;
  return 3 * (((A - I) * B + 2 * (g - A) * t) * B + (i - g) * t * t);
}
function IC(I, A, g, i, t, B) {
  var C = i + 3 * (A - g) - I, Q = 3 * (g - A * 2 + I), r = 3 * (A - I), E = I - t, e = Q * Q - 3 * C * r, a = Q * r - 9 * C * E, o = r * r - 3 * Q * E, n = 0;
  if (bA(e) && bA(a))
    if (bA(Q))
      B[0] = 0;
    else {
      var h = -r / Q;
      h >= 0 && h <= 1 && (B[n++] = h);
    }
  else {
    var l = a * a - 4 * e * o;
    if (bA(l)) {
      var c = a / e, h = -Q / C + c, s = -c / 2;
      h >= 0 && h <= 1 && (B[n++] = h), s >= 0 && s <= 1 && (B[n++] = s);
    } else if (l > 0) {
      var u = KA(l), D = e * Q + 1.5 * C * (-a + u), d = e * Q + 1.5 * C * (-a - u);
      D < 0 ? D = -ng(-D, sg) : D = ng(D, sg), d < 0 ? d = -ng(-d, sg) : d = ng(d, sg);
      var h = (-Q - (D + d)) / (3 * C);
      h >= 0 && h <= 1 && (B[n++] = h);
    } else {
      var p = (2 * e * Q - 3 * C * a) / (2 * KA(e * e * e)), y = Math.acos(p) / 3, N = KA(e), G = Math.cos(y), h = (-Q - 2 * N * G) / (3 * C), s = (-Q + N * (G + Zt * Math.sin(y))) / (3 * C), S = (-Q + N * (G - Zt * Math.sin(y))) / (3 * C);
      h >= 0 && h <= 1 && (B[n++] = h), s >= 0 && s <= 1 && (B[n++] = s), S >= 0 && S <= 1 && (B[n++] = S);
    }
  }
  return n;
}
function gC(I, A, g, i, t) {
  var B = 6 * g - 12 * A + 6 * I, C = 9 * A + 3 * i - 3 * I - 9 * g, Q = 3 * A - 3 * I, r = 0;
  if (bA(C)) {
    if (AC(B)) {
      var E = -Q / B;
      E >= 0 && E <= 1 && (t[r++] = E);
    }
  } else {
    var e = B * B - 4 * C * Q;
    if (bA(e))
      t[0] = -B / (2 * C);
    else if (e > 0) {
      var a = KA(e), E = (-B + a) / (2 * C), o = (-B - a) / (2 * C);
      E >= 0 && E <= 1 && (t[r++] = E), o >= 0 && o <= 1 && (t[r++] = o);
    }
  }
  return r;
}
function bg(I, A, g, i, t, B) {
  var C = (A - I) * t + I, Q = (g - A) * t + A, r = (i - g) * t + g, E = (Q - C) * t + C, e = (r - Q) * t + Q, a = (e - E) * t + E;
  B[0] = I, B[1] = C, B[2] = E, B[3] = a, B[4] = a, B[5] = e, B[6] = r, B[7] = i;
}
function rr(I, A, g, i, t, B, C, Q, r, E, e) {
  var a, o = 5e-3, n = 1 / 0, h, l, c, s;
  dA[0] = r, dA[1] = E;
  for (var u = 0; u < 1; u += 0.05)
    eA[0] = W(I, g, t, C, u), eA[1] = W(A, i, B, Q, u), c = GI(dA, eA), c < n && (a = u, n = c);
  n = 1 / 0;
  for (var D = 0; D < 32 && !(o < $B); D++)
    h = a - o, l = a + o, eA[0] = W(I, g, t, C, h), eA[1] = W(A, i, B, Q, h), c = GI(eA, dA), h >= 0 && c < n ? (a = h, n = c) : (NI[0] = W(I, g, t, C, l), NI[1] = W(A, i, B, Q, l), s = GI(NI, dA), l <= 1 && s < n ? (a = l, n = s) : o *= 0.5);
  return e && (e[0] = W(I, g, t, C, a), e[1] = W(A, i, B, Q, a)), KA(n);
}
function Er(I, A, g, i, t, B, C, Q, r) {
  for (var E = I, e = A, a = 0, o = 1 / r, n = 1; n <= r; n++) {
    var h = n * o, l = W(I, g, t, C, h), c = W(A, i, B, Q, h), s = l - E, u = c - e;
    a += Math.sqrt(s * s + u * u), E = l, e = c;
  }
  return a;
}
function z(I, A, g, i) {
  var t = 1 - i;
  return t * (t * I + 2 * i * A) + i * i * g;
}
function Wt(I, A, g, i) {
  return 2 * ((1 - i) * (A - I) + i * (g - A));
}
function er(I, A, g, i, t) {
  var B = I - 2 * A + g, C = 2 * (A - I), Q = I - i, r = 0;
  if (bA(B)) {
    if (AC(C)) {
      var E = -Q / C;
      E >= 0 && E <= 1 && (t[r++] = E);
    }
  } else {
    var e = C * C - 4 * B * Q;
    if (bA(e)) {
      var E = -C / (2 * B);
      E >= 0 && E <= 1 && (t[r++] = E);
    } else if (e > 0) {
      var a = KA(e), E = (-C + a) / (2 * B), o = (-C - a) / (2 * B);
      E >= 0 && E <= 1 && (t[r++] = E), o >= 0 && o <= 1 && (t[r++] = o);
    }
  }
  return r;
}
function iC(I, A, g) {
  var i = I + g - 2 * A;
  return i === 0 ? 0.5 : (I - A) / i;
}
function Kg(I, A, g, i, t) {
  var B = (A - I) * i + I, C = (g - A) * i + A, Q = (C - B) * i + B;
  t[0] = I, t[1] = B, t[2] = Q, t[3] = Q, t[4] = C, t[5] = g;
}
function ar(I, A, g, i, t, B, C, Q, r) {
  var E, e = 5e-3, a = 1 / 0;
  dA[0] = C, dA[1] = Q;
  for (var o = 0; o < 1; o += 0.05) {
    eA[0] = z(I, g, t, o), eA[1] = z(A, i, B, o);
    var n = GI(dA, eA);
    n < a && (E = o, a = n);
  }
  a = 1 / 0;
  for (var h = 0; h < 32 && !(e < $B); h++) {
    var l = E - e, c = E + e;
    eA[0] = z(I, g, t, l), eA[1] = z(A, i, B, l);
    var n = GI(eA, dA);
    if (l >= 0 && n < a)
      E = l, a = n;
    else {
      NI[0] = z(I, g, t, c), NI[1] = z(A, i, B, c);
      var s = GI(NI, dA);
      c <= 1 && s < a ? (E = c, a = s) : e *= 0.5;
    }
  }
  return r && (r[0] = z(I, g, t, E), r[1] = z(A, i, B, E)), KA(a);
}
function or(I, A, g, i, t, B, C) {
  for (var Q = I, r = A, E = 0, e = 1 / C, a = 1; a <= C; a++) {
    var o = a * e, n = z(I, g, t, o), h = z(A, i, B, o), l = n - Q, c = h - r;
    E += Math.sqrt(l * l + c * c), Q = n, r = h;
  }
  return E;
}
var nr = /cubic-bezier\(([0-9,\.e ]+)\)/;
function tC(I) {
  var A = I && nr.exec(I);
  if (A) {
    var g = A[1].split(","), i = +eg(g[0]), t = +eg(g[1]), B = +eg(g[2]), C = +eg(g[3]);
    if (isNaN(i + t + B + C))
      return;
    var Q = [];
    return function(r) {
      return r <= 0 ? 0 : r >= 1 ? 1 : IC(0, i, B, 1, r, Q) && W(0, t, C, 1, Q[0]);
    };
  }
}
var sr = function() {
  function I(A) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = A.life || 1e3, this._delay = A.delay || 0, this.loop = A.loop || !1, this.onframe = A.onframe || pI, this.ondestroy = A.ondestroy || pI, this.onrestart = A.onrestart || pI, A.easing && this.setEasing(A.easing);
  }
  return I.prototype.step = function(A, g) {
    if (this._inited || (this._startTime = A + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += g;
      return;
    }
    var i = this._life, t = A - this._startTime - this._pausedTime, B = t / i;
    B < 0 && (B = 0), B = Math.min(B, 1);
    var C = this.easingFunc, Q = C ? C(B) : B;
    if (this.onframe(Q), B === 1)
      if (this.loop) {
        var r = t % i;
        this._startTime = A - r, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, I.prototype.pause = function() {
    this._paused = !0;
  }, I.prototype.resume = function() {
    this._paused = !1;
  }, I.prototype.setEasing = function(A) {
    this.easing = A, this.easingFunc = Og(A) ? A : jB[A] || tC(A);
  }, I;
}();
const hr = sr;
var BC = function() {
  function I(A) {
    this.value = A;
  }
  return I;
}(), fr = function() {
  function I() {
    this._len = 0;
  }
  return I.prototype.insert = function(A) {
    var g = new BC(A);
    return this.insertEntry(g), g;
  }, I.prototype.insertEntry = function(A) {
    this.head ? (this.tail.next = A, A.prev = this.tail, A.next = null, this.tail = A) : this.head = this.tail = A, this._len++;
  }, I.prototype.remove = function(A) {
    var g = A.prev, i = A.next;
    g ? g.next = i : this.head = i, i ? i.prev = g : this.tail = g, A.next = A.prev = null, this._len--;
  }, I.prototype.len = function() {
    return this._len;
  }, I.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, I;
}(), cr = function() {
  function I(A) {
    this._list = new fr(), this._maxSize = 10, this._map = {}, this._maxSize = A;
  }
  return I.prototype.put = function(A, g) {
    var i = this._list, t = this._map, B = null;
    if (t[A] == null) {
      var C = i.len(), Q = this._lastRemovedEntry;
      if (C >= this._maxSize && C > 0) {
        var r = i.head;
        i.remove(r), delete t[r.key], B = r.value, this._lastRemovedEntry = r;
      }
      Q ? Q.value = g : Q = new BC(g), Q.key = A, i.insertEntry(Q), t[A] = Q;
    }
    return B;
  }, I.prototype.get = function(A) {
    var g = this._map[A], i = this._list;
    if (g != null)
      return g !== i.tail && (i.remove(g), i.insertEntry(g)), g.value;
  }, I.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, I.prototype.len = function() {
    return this._list.len();
  }, I;
}();
const Et = cr;
var Xt = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function zI(I) {
  return I = Math.round(I), I < 0 ? 0 : I > 255 ? 255 : I;
}
function zt(I) {
  return I < 0 ? 0 : I > 1 ? 1 : I;
}
function oi(I) {
  var A = I;
  return A.length && A.charAt(A.length - 1) === "%" ? zI(parseFloat(A) / 100 * 255) : zI(parseInt(A, 10));
}
function VI(I) {
  var A = I;
  return A.length && A.charAt(A.length - 1) === "%" ? zt(parseFloat(A) / 100) : zt(parseFloat(A));
}
function ni(I, A, g) {
  return g < 0 ? g += 1 : g > 1 && (g -= 1), g * 6 < 1 ? I + (A - I) * g * 6 : g * 2 < 1 ? A : g * 3 < 2 ? I + (A - I) * (2 / 3 - g) * 6 : I;
}
function rA(I, A, g, i, t) {
  return I[0] = A, I[1] = g, I[2] = i, I[3] = t, I;
}
function Pi(I, A) {
  return I[0] = A[0], I[1] = A[1], I[2] = A[2], I[3] = A[3], I;
}
var CC = new Et(20), hg = null;
function uI(I, A) {
  hg && Pi(hg, A), hg = CC.put(I, hg || A.slice());
}
function OI(I, A) {
  if (!!I) {
    A = A || [];
    var g = CC.get(I);
    if (g)
      return Pi(A, g);
    I = I + "";
    var i = I.replace(/ /g, "").toLowerCase();
    if (i in Xt)
      return Pi(A, Xt[i]), uI(I, A), A;
    var t = i.length;
    if (i.charAt(0) === "#") {
      if (t === 4 || t === 5) {
        var B = parseInt(i.slice(1, 4), 16);
        if (!(B >= 0 && B <= 4095)) {
          rA(A, 0, 0, 0, 1);
          return;
        }
        return rA(A, (B & 3840) >> 4 | (B & 3840) >> 8, B & 240 | (B & 240) >> 4, B & 15 | (B & 15) << 4, t === 5 ? parseInt(i.slice(4), 16) / 15 : 1), uI(I, A), A;
      } else if (t === 7 || t === 9) {
        var B = parseInt(i.slice(1, 7), 16);
        if (!(B >= 0 && B <= 16777215)) {
          rA(A, 0, 0, 0, 1);
          return;
        }
        return rA(A, (B & 16711680) >> 16, (B & 65280) >> 8, B & 255, t === 9 ? parseInt(i.slice(7), 16) / 255 : 1), uI(I, A), A;
      }
      return;
    }
    var C = i.indexOf("("), Q = i.indexOf(")");
    if (C !== -1 && Q + 1 === t) {
      var r = i.substr(0, C), E = i.substr(C + 1, Q - (C + 1)).split(","), e = 1;
      switch (r) {
        case "rgba":
          if (E.length !== 4)
            return E.length === 3 ? rA(A, +E[0], +E[1], +E[2], 1) : rA(A, 0, 0, 0, 1);
          e = VI(E.pop());
        case "rgb":
          if (E.length >= 3)
            return rA(A, oi(E[0]), oi(E[1]), oi(E[2]), E.length === 3 ? e : VI(E[3])), uI(I, A), A;
          rA(A, 0, 0, 0, 1);
          return;
        case "hsla":
          if (E.length !== 4) {
            rA(A, 0, 0, 0, 1);
            return;
          }
          return E[3] = VI(E[3]), Vt(E, A), uI(I, A), A;
        case "hsl":
          if (E.length !== 3) {
            rA(A, 0, 0, 0, 1);
            return;
          }
          return Vt(E, A), uI(I, A), A;
        default:
          return;
      }
    }
    rA(A, 0, 0, 0, 1);
  }
}
function Vt(I, A) {
  var g = (parseFloat(I[0]) % 360 + 360) % 360 / 360, i = VI(I[1]), t = VI(I[2]), B = t <= 0.5 ? t * (i + 1) : t + i - t * i, C = t * 2 - B;
  return A = A || [], rA(A, zI(ni(C, B, g + 1 / 3) * 255), zI(ni(C, B, g) * 255), zI(ni(C, B, g - 1 / 3) * 255), 1), I.length === 4 && (A[3] = I[3]), A;
}
function ur(I, A) {
  if (!(!I || !I.length)) {
    var g = I[0] + "," + I[1] + "," + I[2];
    return (A === "rgba" || A === "hsva" || A === "hsla") && (g += "," + I[3]), A + "(" + g + ")";
  }
}
function qg(I, A) {
  var g = OI(I);
  return g ? (0.299 * g[0] + 0.587 * g[1] + 0.114 * g[2]) * g[3] / 255 + (1 - g[3]) * A : 0;
}
function lr(I) {
  return I.type === "linear";
}
function Dr(I) {
  return I.type === "radial";
}
(function() {
  return V.hasGlobalWindow && Og(window.btoa) ? function(I) {
    return window.btoa(unescape(I));
  } : typeof Buffer < "u" ? function(I) {
    return Buffer.from(I).toString("base64");
  } : function(I) {
    return process.env.NODE_ENV !== "production" && EI("Base64 isn't natively supported in the current environment."), null;
  };
})();
var Wi = Array.prototype.slice;
function FA(I, A, g) {
  return (A - I) * g + I;
}
function si(I, A, g, i) {
  for (var t = A.length, B = 0; B < t; B++)
    I[B] = FA(A[B], g[B], i);
  return I;
}
function wr(I, A, g, i) {
  for (var t = A.length, B = t && A[0].length, C = 0; C < t; C++) {
    I[C] || (I[C] = []);
    for (var Q = 0; Q < B; Q++)
      I[C][Q] = FA(A[C][Q], g[C][Q], i);
  }
  return I;
}
function fg(I, A, g, i) {
  for (var t = A.length, B = 0; B < t; B++)
    I[B] = A[B] + g[B] * i;
  return I;
}
function Ot(I, A, g, i) {
  for (var t = A.length, B = t && A[0].length, C = 0; C < t; C++) {
    I[C] || (I[C] = []);
    for (var Q = 0; Q < B; Q++)
      I[C][Q] = A[C][Q] + g[C][Q] * i;
  }
  return I;
}
function dr(I, A) {
  for (var g = I.length, i = A.length, t = g > i ? A : I, B = Math.min(g, i), C = t[B - 1] || { color: [0, 0, 0, 0], offset: 0 }, Q = B; Q < Math.max(g, i); Q++)
    t.push({
      offset: C.offset,
      color: C.color.slice()
    });
}
function yr(I, A, g) {
  var i = I, t = A;
  if (!(!i.push || !t.push)) {
    var B = i.length, C = t.length;
    if (B !== C) {
      var Q = B > C;
      if (Q)
        i.length = C;
      else
        for (var r = B; r < C; r++)
          i.push(g === 1 ? t[r] : Wi.call(t[r]));
    }
    for (var E = i[0] && i[0].length, r = 0; r < i.length; r++)
      if (g === 1)
        isNaN(i[r]) && (i[r] = t[r]);
      else
        for (var e = 0; e < E; e++)
          isNaN(i[r][e]) && (i[r][e] = t[r][e]);
  }
}
function Lg(I) {
  if (yA(I)) {
    var A = I.length;
    if (yA(I[0])) {
      for (var g = [], i = 0; i < A; i++)
        g.push(Wi.call(I[i]));
      return g;
    }
    return Wi.call(I);
  }
  return I;
}
function Jg(I) {
  return I[0] = Math.floor(I[0]) || 0, I[1] = Math.floor(I[1]) || 0, I[2] = Math.floor(I[2]) || 0, I[3] = I[3] == null ? 1 : I[3], "rgba(" + I.join(",") + ")";
}
function vr(I) {
  return yA(I && I[0]) ? 2 : 1;
}
var cg = 0, Ug = 1, QC = 2, PI = 3, Xi = 4, zi = 5, jt = 6;
function $t(I) {
  return I === Xi || I === zi;
}
function ug(I) {
  return I === Ug || I === QC;
}
var HI = [0, 0, 0, 0], pr = function() {
  function I(A) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = A;
  }
  return I.prototype.isFinished = function() {
    return this._finished;
  }, I.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, I.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, I.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, I.prototype.addKeyframe = function(A, g, i) {
    this._needsSort = !0;
    var t = this.keyframes, B = t.length, C = !1, Q = jt, r = g;
    if (yA(g)) {
      var E = vr(g);
      Q = E, (E === 1 && !Mg(g[0]) || E === 2 && !Mg(g[0][0])) && (C = !0);
    } else if (Mg(g) && !uQ(g))
      Q = cg;
    else if (bi(g))
      if (!isNaN(+g))
        Q = cg;
      else {
        var e = OI(g);
        e && (r = e, Q = PI);
      }
    else if (Qt(g)) {
      var a = x({}, r);
      a.colorStops = Ag(g.colorStops, function(n) {
        return {
          offset: n.offset,
          color: OI(n.color)
        };
      }), lr(g) ? Q = Xi : Dr(g) && (Q = zi), r = a;
    }
    B === 0 ? this.valType = Q : (Q !== this.valType || Q === jt) && (C = !0), this.discrete = this.discrete || C;
    var o = {
      time: A,
      value: r,
      rawValue: g,
      percent: 0
    };
    return i && (o.easing = i, o.easingFunc = Og(i) ? i : jB[i] || tC(i)), t.push(o), o;
  }, I.prototype.prepare = function(A, g) {
    var i = this.keyframes;
    this._needsSort && i.sort(function(l, c) {
      return l.time - c.time;
    });
    for (var t = this.valType, B = i.length, C = i[B - 1], Q = this.discrete, r = ug(t), E = $t(t), e = 0; e < B; e++) {
      var a = i[e], o = a.value, n = C.value;
      a.percent = a.time / A, Q || (r && e !== B - 1 ? yr(o, n, t) : E && dr(o.colorStops, n.colorStops));
    }
    if (!Q && t !== zi && g && this.needsAnimate() && g.needsAnimate() && t === g.valType && !g._finished) {
      this._additiveTrack = g;
      for (var h = i[0].value, e = 0; e < B; e++)
        t === cg ? i[e].additiveValue = i[e].value - h : t === PI ? i[e].additiveValue = fg([], i[e].value, h, -1) : ug(t) && (i[e].additiveValue = t === Ug ? fg([], i[e].value, h, -1) : Ot([], i[e].value, h, -1));
    }
  }, I.prototype.step = function(A, g) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var i = this._additiveTrack != null, t = i ? "additiveValue" : "value", B = this.valType, C = this.keyframes, Q = C.length, r = this.propName, E = B === PI, e, a = this._lastFr, o = Math.min, n, h;
      if (Q === 1)
        n = h = C[0];
      else {
        if (g < 0)
          e = 0;
        else if (g < this._lastFrP) {
          var l = o(a + 1, Q - 1);
          for (e = l; e >= 0 && !(C[e].percent <= g); e--)
            ;
          e = o(e, Q - 2);
        } else {
          for (e = a; e < Q && !(C[e].percent > g); e++)
            ;
          e = o(e - 1, Q - 2);
        }
        h = C[e + 1], n = C[e];
      }
      if (!!(n && h)) {
        this._lastFr = e, this._lastFrP = g;
        var c = h.percent - n.percent, s = c === 0 ? 1 : o((g - n.percent) / c, 1);
        h.easingFunc && (s = h.easingFunc(s));
        var u = i ? this._additiveValue : E ? HI : A[r];
        if ((ug(B) || E) && !u && (u = this._additiveValue = []), this.discrete)
          A[r] = s < 1 ? n.rawValue : h.rawValue;
        else if (ug(B))
          B === Ug ? si(u, n[t], h[t], s) : wr(u, n[t], h[t], s);
        else if ($t(B)) {
          var D = n[t], d = h[t], p = B === Xi;
          A[r] = {
            type: p ? "linear" : "radial",
            x: FA(D.x, d.x, s),
            y: FA(D.y, d.y, s),
            colorStops: Ag(D.colorStops, function(N, G) {
              var S = d.colorStops[G];
              return {
                offset: FA(N.offset, S.offset, s),
                color: Jg(si([], N.color, S.color, s))
              };
            }),
            global: d.global
          }, p ? (A[r].x2 = FA(D.x2, d.x2, s), A[r].y2 = FA(D.y2, d.y2, s)) : A[r].r = FA(D.r, d.r, s);
        } else if (E)
          si(u, n[t], h[t], s), i || (A[r] = Jg(u));
        else {
          var y = FA(n[t], h[t], s);
          i ? this._additiveValue = y : A[r] = y;
        }
        i && this._addToTarget(A);
      }
    }
  }, I.prototype._addToTarget = function(A) {
    var g = this.valType, i = this.propName, t = this._additiveValue;
    g === cg ? A[i] = A[i] + t : g === PI ? (OI(A[i], HI), fg(HI, HI, t, 1), A[i] = Jg(HI)) : g === Ug ? fg(A[i], A[i], t, 1) : g === QC && Ot(A[i], A[i], t, 1);
  }, I;
}(), Gr = function() {
  function I(A, g, i, t) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = A, this._loop = g, g && t) {
      EI("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = t, this._allowDiscrete = i;
  }
  return I.prototype.getMaxTime = function() {
    return this._maxTime;
  }, I.prototype.getDelay = function() {
    return this._delay;
  }, I.prototype.getLoop = function() {
    return this._loop;
  }, I.prototype.getTarget = function() {
    return this._target;
  }, I.prototype.changeTarget = function(A) {
    this._target = A;
  }, I.prototype.when = function(A, g, i) {
    return this.whenWithKeys(A, g, fA(g), i);
  }, I.prototype.whenWithKeys = function(A, g, i, t) {
    for (var B = this._tracks, C = 0; C < i.length; C++) {
      var Q = i[C], r = B[Q];
      if (!r) {
        r = B[Q] = new pr(Q);
        var E = void 0, e = this._getAdditiveTrack(Q);
        if (e) {
          var a = e.keyframes, o = a[a.length - 1];
          E = o && o.value, e.valType === PI && E && (E = Jg(E));
        } else
          E = this._target[Q];
        if (E == null)
          continue;
        A > 0 && r.addKeyframe(0, Lg(E), t), this._trackKeys.push(Q);
      }
      r.addKeyframe(A, Lg(g[Q]), t);
    }
    return this._maxTime = Math.max(this._maxTime, A), this;
  }, I.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, I.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, I.prototype.isPaused = function() {
    return !!this._paused;
  }, I.prototype.duration = function(A) {
    return this._maxTime = A, this._force = !0, this;
  }, I.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var A = this._doneCbs;
    if (A)
      for (var g = A.length, i = 0; i < g; i++)
        A[i].call(this);
  }, I.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var A = this.animation, g = this._abortedCbs;
    if (A && A.removeClip(this._clip), this._clip = null, g)
      for (var i = 0; i < g.length; i++)
        g[i].call(this);
  }, I.prototype._setTracksFinished = function() {
    for (var A = this._tracks, g = this._trackKeys, i = 0; i < g.length; i++)
      A[g[i]].setFinished();
  }, I.prototype._getAdditiveTrack = function(A) {
    var g, i = this._additiveAnimators;
    if (i)
      for (var t = 0; t < i.length; t++) {
        var B = i[t].getTrack(A);
        B && (g = B);
      }
    return g;
  }, I.prototype.start = function(A) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var g = this, i = [], t = this._maxTime || 0, B = 0; B < this._trackKeys.length; B++) {
        var C = this._trackKeys[B], Q = this._tracks[C], r = this._getAdditiveTrack(C), E = Q.keyframes, e = E.length;
        if (Q.prepare(t, r), Q.needsAnimate())
          if (!this._allowDiscrete && Q.discrete) {
            var a = E[e - 1];
            a && (g._target[Q.propName] = a.rawValue), Q.setFinished();
          } else
            i.push(Q);
      }
      if (i.length || this._force) {
        var o = new hr({
          life: t,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(n) {
            g._started = 2;
            var h = g._additiveAnimators;
            if (h) {
              for (var l = !1, c = 0; c < h.length; c++)
                if (h[c]._clip) {
                  l = !0;
                  break;
                }
              l || (g._additiveAnimators = null);
            }
            for (var c = 0; c < i.length; c++)
              i[c].step(g._target, n);
            var s = g._onframeCbs;
            if (s)
              for (var c = 0; c < s.length; c++)
                s[c](g._target, n);
          },
          ondestroy: function() {
            g._doneCallback();
          }
        });
        this._clip = o, this.animation && this.animation.addClip(o), A && o.setEasing(A);
      } else
        this._doneCallback();
      return this;
    }
  }, I.prototype.stop = function(A) {
    if (!!this._clip) {
      var g = this._clip;
      A && g.onframe(1), this._abortedCallback();
    }
  }, I.prototype.delay = function(A) {
    return this._delay = A, this;
  }, I.prototype.during = function(A) {
    return A && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(A)), this;
  }, I.prototype.done = function(A) {
    return A && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(A)), this;
  }, I.prototype.aborted = function(A) {
    return A && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(A)), this;
  }, I.prototype.getClip = function() {
    return this._clip;
  }, I.prototype.getTrack = function(A) {
    return this._tracks[A];
  }, I.prototype.getTracks = function() {
    var A = this;
    return Ag(this._trackKeys, function(g) {
      return A._tracks[g];
    });
  }, I.prototype.stopTracks = function(A, g) {
    if (!A.length || !this._clip)
      return !0;
    for (var i = this._tracks, t = this._trackKeys, B = 0; B < A.length; B++) {
      var C = i[A[B]];
      C && !C.isFinished() && (g ? C.step(this._target, 1) : this._started === 1 && C.step(this._target, 0), C.setFinished());
    }
    for (var Q = !0, B = 0; B < t.length; B++)
      if (!i[t[B]].isFinished()) {
        Q = !1;
        break;
      }
    return Q && this._abortedCallback(), Q;
  }, I.prototype.saveTo = function(A, g, i) {
    if (!!A) {
      g = g || this._trackKeys;
      for (var t = 0; t < g.length; t++) {
        var B = g[t], C = this._tracks[B];
        if (!(!C || C.isFinished())) {
          var Q = C.keyframes, r = Q[i ? 0 : Q.length - 1];
          r && (A[B] = Lg(r.rawValue));
        }
      }
    }
  }, I.prototype.__changeFinalValue = function(A, g) {
    g = g || fA(A);
    for (var i = 0; i < g.length; i++) {
      var t = g[i], B = this._tracks[t];
      if (!!B) {
        var C = B.keyframes;
        if (C.length > 1) {
          var Q = C.pop();
          B.addKeyframe(Q.time, A[t]), B.prepare(this._maxTime, B.getAdditiveTrack());
        }
      }
    }
  }, I;
}();
const et = Gr;
function yI() {
  return new Date().getTime();
}
var Nr = function(I) {
  BA(A, I);
  function A(g) {
    var i = I.call(this) || this;
    return i._running = !1, i._time = 0, i._pausedTime = 0, i._pauseStart = 0, i._paused = !1, g = g || {}, i.stage = g.stage || {}, i;
  }
  return A.prototype.addClip = function(g) {
    g.animation && this.removeClip(g), this._head ? (this._tail.next = g, g.prev = this._tail, g.next = null, this._tail = g) : this._head = this._tail = g, g.animation = this;
  }, A.prototype.addAnimator = function(g) {
    g.animation = this;
    var i = g.getClip();
    i && this.addClip(i);
  }, A.prototype.removeClip = function(g) {
    if (!!g.animation) {
      var i = g.prev, t = g.next;
      i ? i.next = t : this._head = t, t ? t.prev = i : this._tail = i, g.next = g.prev = g.animation = null;
    }
  }, A.prototype.removeAnimator = function(g) {
    var i = g.getClip();
    i && this.removeClip(i), g.animation = null;
  }, A.prototype.update = function(g) {
    for (var i = yI() - this._pausedTime, t = i - this._time, B = this._head; B; ) {
      var C = B.next, Q = B.step(i, t);
      Q && (B.ondestroy(), this.removeClip(B)), B = C;
    }
    this._time = i, g || (this.trigger("frame", t), this.stage.update && this.stage.update());
  }, A.prototype._startLoop = function() {
    var g = this;
    this._running = !0;
    function i() {
      g._running && (Zi(i), !g._paused && g.update());
    }
    Zi(i);
  }, A.prototype.start = function() {
    this._running || (this._time = yI(), this._pausedTime = 0, this._startLoop());
  }, A.prototype.stop = function() {
    this._running = !1;
  }, A.prototype.pause = function() {
    this._paused || (this._pauseStart = yI(), this._paused = !0);
  }, A.prototype.resume = function() {
    this._paused && (this._pausedTime += yI() - this._pauseStart, this._paused = !1);
  }, A.prototype.clear = function() {
    for (var g = this._head; g; ) {
      var i = g.next;
      g.prev = g.next = g.animation = null, g = i;
    }
    this._head = this._tail = null;
  }, A.prototype.isFinished = function() {
    return this._head == null;
  }, A.prototype.animate = function(g, i) {
    i = i || {}, this.start();
    var t = new et(g, i.loop);
    return this.addAnimator(t), t;
  }, A;
}(kI);
const Rr = Nr;
var Sr = 300, hi = V.domSupported, fi = function() {
  var I = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], A = [
    "touchstart",
    "touchend",
    "touchmove"
  ], g = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, i = Ag(I, function(t) {
    var B = t.replace("mouse", "pointer");
    return g.hasOwnProperty(B) ? B : t;
  });
  return {
    mouse: I,
    touch: A,
    pointer: i
  };
}(), AB = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, IB = !1;
function Vi(I) {
  var A = I.pointerType;
  return A === "pen" || A === "touch";
}
function Fr(I) {
  I.touching = !0, I.touchTimer != null && (clearTimeout(I.touchTimer), I.touchTimer = null), I.touchTimer = setTimeout(function() {
    I.touching = !1, I.touchTimer = null;
  }, 700);
}
function ci(I) {
  I && (I.zrByTouch = !0);
}
function kr(I, A) {
  return nA(I.dom, new Mr(I, A), !0);
}
function rC(I, A) {
  for (var g = A, i = !1; g && g.nodeType !== 9 && !(i = g.domBelongToZr || g !== A && g === I.painterRoot); )
    g = g.parentNode;
  return i;
}
var Mr = function() {
  function I(A, g) {
    this.stopPropagation = pI, this.stopImmediatePropagation = pI, this.preventDefault = pI, this.type = g.type, this.target = this.currentTarget = A.dom, this.pointerType = g.pointerType, this.clientX = g.clientX, this.clientY = g.clientY;
  }
  return I;
}(), sA = {
  mousedown: function(I) {
    I = nA(this.dom, I), this.__mayPointerCapture = [I.zrX, I.zrY], this.trigger("mousedown", I);
  },
  mousemove: function(I) {
    I = nA(this.dom, I);
    var A = this.__mayPointerCapture;
    A && (I.zrX !== A[0] || I.zrY !== A[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", I);
  },
  mouseup: function(I) {
    I = nA(this.dom, I), this.__togglePointerCapture(!1), this.trigger("mouseup", I);
  },
  mouseout: function(I) {
    I = nA(this.dom, I);
    var A = I.toElement || I.relatedTarget;
    rC(this, A) || (this.__pointerCapturing && (I.zrEventControl = "no_globalout"), this.trigger("mouseout", I));
  },
  wheel: function(I) {
    IB = !0, I = nA(this.dom, I), this.trigger("mousewheel", I);
  },
  mousewheel: function(I) {
    IB || (I = nA(this.dom, I), this.trigger("mousewheel", I));
  },
  touchstart: function(I) {
    I = nA(this.dom, I), ci(I), this.__lastTouchMoment = new Date(), this.handler.processGesture(I, "start"), sA.mousemove.call(this, I), sA.mousedown.call(this, I);
  },
  touchmove: function(I) {
    I = nA(this.dom, I), ci(I), this.handler.processGesture(I, "change"), sA.mousemove.call(this, I);
  },
  touchend: function(I) {
    I = nA(this.dom, I), ci(I), this.handler.processGesture(I, "end"), sA.mouseup.call(this, I), +new Date() - +this.__lastTouchMoment < Sr && sA.click.call(this, I);
  },
  pointerdown: function(I) {
    sA.mousedown.call(this, I);
  },
  pointermove: function(I) {
    Vi(I) || sA.mousemove.call(this, I);
  },
  pointerup: function(I) {
    sA.mouseup.call(this, I);
  },
  pointerout: function(I) {
    Vi(I) || sA.mouseout.call(this, I);
  }
};
hA(["click", "dblclick", "contextmenu"], function(I) {
  sA[I] = function(A) {
    A = nA(this.dom, A), this.trigger(I, A);
  };
});
var Oi = {
  pointermove: function(I) {
    Vi(I) || Oi.mousemove.call(this, I);
  },
  pointerup: function(I) {
    Oi.mouseup.call(this, I);
  },
  mousemove: function(I) {
    this.trigger("mousemove", I);
  },
  mouseup: function(I) {
    var A = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", I), A && (I.zrEventControl = "only_globalout", this.trigger("mouseout", I));
  }
};
function Yr(I, A) {
  var g = A.domHandlers;
  V.pointerEventsSupported ? hA(fi.pointer, function(i) {
    _g(A, i, function(t) {
      g[i].call(I, t);
    });
  }) : (V.touchEventsSupported && hA(fi.touch, function(i) {
    _g(A, i, function(t) {
      g[i].call(I, t), Fr(A);
    });
  }), hA(fi.mouse, function(i) {
    _g(A, i, function(t) {
      t = rt(t), A.touching || g[i].call(I, t);
    });
  }));
}
function Lr(I, A) {
  V.pointerEventsSupported ? hA(AB.pointer, g) : V.touchEventsSupported || hA(AB.mouse, g);
  function g(i) {
    function t(B) {
      B = rt(B), rC(I, B.target) || (B = kr(I, B), A.domHandlers[i].call(I, B));
    }
    _g(A, i, t, { capture: !0 });
  }
}
function _g(I, A, g, i) {
  I.mounted[A] = g, I.listenerOpts[A] = i, mQ(I.domTarget, A, g, i);
}
function ui(I) {
  var A = I.mounted;
  for (var g in A)
    A.hasOwnProperty(g) && HQ(I.domTarget, g, A[g], I.listenerOpts[g]);
  I.mounted = {};
}
var gB = function() {
  function I(A, g) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = A, this.domHandlers = g;
  }
  return I;
}(), Jr = function(I) {
  BA(A, I);
  function A(g, i) {
    var t = I.call(this) || this;
    return t.__pointerCapturing = !1, t.dom = g, t.painterRoot = i, t._localHandlerScope = new gB(g, sA), hi && (t._globalHandlerScope = new gB(document, Oi)), Yr(t, t._localHandlerScope), t;
  }
  return A.prototype.dispose = function() {
    ui(this._localHandlerScope), hi && ui(this._globalHandlerScope);
  }, A.prototype.setCursor = function(g) {
    this.dom.style && (this.dom.style.cursor = g || "default");
  }, A.prototype.__togglePointerCapture = function(g) {
    if (this.__mayPointerCapture = null, hi && +this.__pointerCapturing ^ +g) {
      this.__pointerCapturing = g;
      var i = this._globalHandlerScope;
      g ? Lr(this, i) : ui(i);
    }
  }, A;
}(kI);
const Ur = Jr;
var EC = 1;
V.hasGlobalWindow && (EC = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Tg = EC, ji = 0.4, $i = "#333", At = "#ccc", _r = "#eee", iB = TQ, tB = 5e-5;
function VA(I) {
  return I > tB || I < -tB;
}
var OA = [], lI = [], li = mg(), Di = Math.abs, mr = function() {
  function I() {
  }
  return I.prototype.getLocalTransform = function(A) {
    return I.getLocalTransform(this, A);
  }, I.prototype.setPosition = function(A) {
    this.x = A[0], this.y = A[1];
  }, I.prototype.setScale = function(A) {
    this.scaleX = A[0], this.scaleY = A[1];
  }, I.prototype.setSkew = function(A) {
    this.skewX = A[0], this.skewY = A[1];
  }, I.prototype.setOrigin = function(A) {
    this.originX = A[0], this.originY = A[1];
  }, I.prototype.needLocalTransform = function() {
    return VA(this.rotation) || VA(this.x) || VA(this.y) || VA(this.scaleX - 1) || VA(this.scaleY - 1) || VA(this.skewX) || VA(this.skewY);
  }, I.prototype.updateTransform = function() {
    var A = this.parent && this.parent.transform, g = this.needLocalTransform(), i = this.transform;
    if (!(g || A)) {
      i && iB(i);
      return;
    }
    i = i || mg(), g ? this.getLocalTransform(i) : iB(i), A && (g ? Qi(i, A, i) : xQ(i, A)), this.transform = i, this._resolveGlobalScaleRatio(i);
  }, I.prototype._resolveGlobalScaleRatio = function(A) {
    var g = this.globalScaleRatio;
    if (g != null && g !== 1) {
      this.getGlobalScale(OA);
      var i = OA[0] < 0 ? -1 : 1, t = OA[1] < 0 ? -1 : 1, B = ((OA[0] - i) * g + i) / OA[0] || 0, C = ((OA[1] - t) * g + t) / OA[1] || 0;
      A[0] *= B, A[1] *= B, A[2] *= C, A[3] *= C;
    }
    this.invTransform = this.invTransform || mg(), WQ(this.invTransform, A);
  }, I.prototype.getComputedTransform = function() {
    for (var A = this, g = []; A; )
      g.push(A), A = A.parent;
    for (; A = g.pop(); )
      A.updateTransform();
    return this.transform;
  }, I.prototype.setLocalTransform = function(A) {
    if (!!A) {
      var g = A[0] * A[0] + A[1] * A[1], i = A[2] * A[2] + A[3] * A[3], t = Math.atan2(A[1], A[0]), B = Math.PI / 2 + t - Math.atan2(A[3], A[2]);
      i = Math.sqrt(i) * Math.cos(B), g = Math.sqrt(g), this.skewX = B, this.skewY = 0, this.rotation = -t, this.x = +A[4], this.y = +A[5], this.scaleX = g, this.scaleY = i, this.originX = 0, this.originY = 0;
    }
  }, I.prototype.decomposeTransform = function() {
    if (!!this.transform) {
      var A = this.parent, g = this.transform;
      A && A.transform && (Qi(lI, A.invTransform, g), g = lI);
      var i = this.originX, t = this.originY;
      (i || t) && (li[4] = i, li[5] = t, Qi(lI, g, li), lI[4] -= i, lI[5] -= t, g = lI), this.setLocalTransform(g);
    }
  }, I.prototype.getGlobalScale = function(A) {
    var g = this.transform;
    return A = A || [], g ? (A[0] = Math.sqrt(g[0] * g[0] + g[1] * g[1]), A[1] = Math.sqrt(g[2] * g[2] + g[3] * g[3]), g[0] < 0 && (A[0] = -A[0]), g[3] < 0 && (A[1] = -A[1]), A) : (A[0] = 1, A[1] = 1, A);
  }, I.prototype.transformCoordToLocal = function(A, g) {
    var i = [A, g], t = this.invTransform;
    return t && Lt(i, i, t), i;
  }, I.prototype.transformCoordToGlobal = function(A, g) {
    var i = [A, g], t = this.transform;
    return t && Lt(i, i, t), i;
  }, I.prototype.getLineScale = function() {
    var A = this.transform;
    return A && Di(A[0] - 1) > 1e-10 && Di(A[3] - 1) > 1e-10 ? Math.sqrt(Di(A[0] * A[3] - A[2] * A[1])) : 1;
  }, I.prototype.copyTransform = function(A) {
    Hr(this, A);
  }, I.getLocalTransform = function(A, g) {
    g = g || [];
    var i = A.originX || 0, t = A.originY || 0, B = A.scaleX, C = A.scaleY, Q = A.anchorX, r = A.anchorY, E = A.rotation || 0, e = A.x, a = A.y, o = A.skewX ? Math.tan(A.skewX) : 0, n = A.skewY ? Math.tan(-A.skewY) : 0;
    if (i || t || Q || r) {
      var h = i + Q, l = t + r;
      g[4] = -h * B - o * l * C, g[5] = -l * C - n * h * B;
    } else
      g[4] = g[5] = 0;
    return g[0] = B, g[3] = C, g[1] = n * B, g[2] = o * C, E && ZQ(g, g, E), g[4] += i + e, g[5] += t + a, g;
  }, I.initDefaultProps = function() {
    var A = I.prototype;
    A.scaleX = A.scaleY = A.globalScaleRatio = 1, A.x = A.y = A.originX = A.originY = A.skewX = A.skewY = A.rotation = A.anchorX = A.anchorY = 0;
  }(), I;
}(), Ig = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function Hr(I, A) {
  for (var g = 0; g < Ig.length; g++) {
    var i = Ig[g];
    I[i] = A[i];
  }
}
const eC = mr;
var BB = {};
function aC(I, A) {
  A = A || $I;
  var g = BB[A];
  g || (g = BB[A] = new Et(500));
  var i = g.get(I);
  return i == null && (i = ig.measureText(I, A).width, g.put(I, i)), i;
}
function CB(I, A, g, i) {
  var t = aC(I, A), B = Tr(A), C = Kr(0, t, g), Q = qr(0, B, i), r = new P(C, Q, t, B);
  return r;
}
function br(I, A, g, i) {
  var t = ((I || "") + "").split(`
`), B = t.length;
  if (B === 1)
    return CB(t[0], A, g, i);
  for (var C = new P(0, 0, 0, 0), Q = 0; Q < t.length; Q++) {
    var r = CB(t[Q], A, g, i);
    Q === 0 ? C.copy(r) : C.union(r);
  }
  return C;
}
function Kr(I, A, g) {
  return g === "right" ? I -= A : g === "center" && (I -= A / 2), I;
}
function qr(I, A, g) {
  return g === "middle" ? I -= A / 2 : g === "bottom" && (I -= A), I;
}
function Tr(I) {
  return aC("\u56FD", I);
}
function xg(I, A) {
  return typeof I == "string" ? I.lastIndexOf("%") >= 0 ? parseFloat(I) / 100 * A : parseFloat(I) : I;
}
function xr(I, A, g) {
  var i = A.position || "inside", t = A.distance != null ? A.distance : 5, B = g.height, C = g.width, Q = B / 2, r = g.x, E = g.y, e = "left", a = "top";
  if (i instanceof Array)
    r += xg(i[0], g.width), E += xg(i[1], g.height), e = null, a = null;
  else
    switch (i) {
      case "left":
        r -= t, E += Q, e = "right", a = "middle";
        break;
      case "right":
        r += t + C, E += Q, a = "middle";
        break;
      case "top":
        r += C / 2, E -= t, e = "center", a = "bottom";
        break;
      case "bottom":
        r += C / 2, E += B + t, e = "center";
        break;
      case "inside":
        r += C / 2, E += Q, e = "center", a = "middle";
        break;
      case "insideLeft":
        r += t, E += Q, a = "middle";
        break;
      case "insideRight":
        r += C - t, E += Q, e = "right", a = "middle";
        break;
      case "insideTop":
        r += C / 2, E += t, e = "center";
        break;
      case "insideBottom":
        r += C / 2, E += B - t, e = "center", a = "bottom";
        break;
      case "insideTopLeft":
        r += t, E += t;
        break;
      case "insideTopRight":
        r += C - t, E += t, e = "right";
        break;
      case "insideBottomLeft":
        r += t, E += B - t, a = "bottom";
        break;
      case "insideBottomRight":
        r += C - t, E += B - t, e = "right", a = "bottom";
        break;
    }
  return I = I || {}, I.x = r, I.y = E, I.align = e, I.verticalAlign = a, I;
}
var wi = "__zr_normal__", di = Ig.concat(["ignore"]), Zr = Ct(Ig, function(I, A) {
  return I[A] = !0, I;
}, { ignore: !1 }), DI = {}, Pr = new P(0, 0, 0, 0), at = function() {
  function I(A) {
    this.id = bB(), this.animators = [], this.currentStates = [], this.states = {}, this._init(A);
  }
  return I.prototype._init = function(A) {
    this.attr(A);
  }, I.prototype.drift = function(A, g, i) {
    switch (this.draggable) {
      case "horizontal":
        g = 0;
        break;
      case "vertical":
        A = 0;
        break;
    }
    var t = this.transform;
    t || (t = this.transform = [1, 0, 0, 1, 0, 0]), t[4] += A, t[5] += g, this.decomposeTransform(), this.markRedraw();
  }, I.prototype.beforeUpdate = function() {
  }, I.prototype.afterUpdate = function() {
  }, I.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, I.prototype.updateInnerText = function(A) {
    var g = this._textContent;
    if (g && (!g.ignore || A)) {
      this.textConfig || (this.textConfig = {});
      var i = this.textConfig, t = i.local, B = g.innerTransformable, C = void 0, Q = void 0, r = !1;
      B.parent = t ? this : null;
      var E = !1;
      if (B.copyTransform(g), i.position != null) {
        var e = Pr;
        i.layoutRect ? e.copy(i.layoutRect) : e.copy(this.getBoundingRect()), t || e.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(DI, i, e) : xr(DI, i, e), B.x = DI.x, B.y = DI.y, C = DI.align, Q = DI.verticalAlign;
        var a = i.origin;
        if (a && i.rotation != null) {
          var o = void 0, n = void 0;
          a === "center" ? (o = e.width * 0.5, n = e.height * 0.5) : (o = xg(a[0], e.width), n = xg(a[1], e.height)), E = !0, B.originX = -B.x + o + (t ? 0 : e.x), B.originY = -B.y + n + (t ? 0 : e.y);
        }
      }
      i.rotation != null && (B.rotation = i.rotation);
      var h = i.offset;
      h && (B.x += h[0], B.y += h[1], E || (B.originX = -h[0], B.originY = -h[1]));
      var l = i.inside == null ? typeof i.position == "string" && i.position.indexOf("inside") >= 0 : i.inside, c = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), s = void 0, u = void 0, D = void 0;
      l && this.canBeInsideText() ? (s = i.insideFill, u = i.insideStroke, (s == null || s === "auto") && (s = this.getInsideTextFill()), (u == null || u === "auto") && (u = this.getInsideTextStroke(s), D = !0)) : (s = i.outsideFill, u = i.outsideStroke, (s == null || s === "auto") && (s = this.getOutsideFill()), (u == null || u === "auto") && (u = this.getOutsideStroke(s), D = !0)), s = s || "#000", (s !== c.fill || u !== c.stroke || D !== c.autoStroke || C !== c.align || Q !== c.verticalAlign) && (r = !0, c.fill = s, c.stroke = u, c.autoStroke = D, c.align = C, c.verticalAlign = Q, g.setDefaultTextStyle(c)), g.__dirty |= tA, r && g.dirtyStyle(!0);
    }
  }, I.prototype.canBeInsideText = function() {
    return !0;
  }, I.prototype.getInsideTextFill = function() {
    return "#fff";
  }, I.prototype.getInsideTextStroke = function(A) {
    return "#000";
  }, I.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? At : $i;
  }, I.prototype.getOutsideStroke = function(A) {
    var g = this.__zr && this.__zr.getBackgroundColor(), i = typeof g == "string" && OI(g);
    i || (i = [255, 255, 255, 1]);
    for (var t = i[3], B = this.__zr.isDarkMode(), C = 0; C < 3; C++)
      i[C] = i[C] * t + (B ? 0 : 255) * (1 - t);
    return i[3] = 1, ur(i, "rgba");
  }, I.prototype.traverse = function(A, g) {
  }, I.prototype.attrKV = function(A, g) {
    A === "textConfig" ? this.setTextConfig(g) : A === "textContent" ? this.setTextContent(g) : A === "clipPath" ? this.setClipPath(g) : A === "extra" ? (this.extra = this.extra || {}, x(this.extra, g)) : this[A] = g;
  }, I.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, I.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, I.prototype.attr = function(A, g) {
    if (typeof A == "string")
      this.attrKV(A, g);
    else if (HA(A))
      for (var i = A, t = fA(i), B = 0; B < t.length; B++) {
        var C = t[B];
        this.attrKV(C, A[C]);
      }
    return this.markRedraw(), this;
  }, I.prototype.saveCurrentToNormalState = function(A) {
    this._innerSaveToNormal(A);
    for (var g = this._normalState, i = 0; i < this.animators.length; i++) {
      var t = this.animators[i], B = t.__fromStateTransition;
      if (!(t.getLoop() || B && B !== wi)) {
        var C = t.targetName, Q = C ? g[C] : g;
        t.saveTo(Q);
      }
    }
  }, I.prototype._innerSaveToNormal = function(A) {
    var g = this._normalState;
    g || (g = this._normalState = {}), A.textConfig && !g.textConfig && (g.textConfig = this.textConfig), this._savePrimaryToNormal(A, g, di);
  }, I.prototype._savePrimaryToNormal = function(A, g, i) {
    for (var t = 0; t < i.length; t++) {
      var B = i[t];
      A[B] != null && !(B in g) && (g[B] = this[B]);
    }
  }, I.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, I.prototype.getState = function(A) {
    return this.states[A];
  }, I.prototype.ensureState = function(A) {
    var g = this.states;
    return g[A] || (g[A] = {}), g[A];
  }, I.prototype.clearStates = function(A) {
    this.useState(wi, !1, A);
  }, I.prototype.useState = function(A, g, i, t) {
    var B = A === wi, C = this.hasState();
    if (!(!C && B)) {
      var Q = this.currentStates, r = this.stateTransition;
      if (!(wA(Q, A) >= 0 && (g || Q.length === 1))) {
        var E;
        if (this.stateProxy && !B && (E = this.stateProxy(A)), E || (E = this.states && this.states[A]), !E && !B) {
          EI("State " + A + " not exists.");
          return;
        }
        B || this.saveCurrentToNormalState(E);
        var e = !!(E && E.hoverLayer || t);
        e && this._toggleHoverLayerFlag(!0), this._applyStateObj(A, E, this._normalState, g, !i && !this.__inHover && r && r.duration > 0, r);
        var a = this._textContent, o = this._textGuide;
        return a && a.useState(A, g, i, e), o && o.useState(A, g, i, e), B ? (this.currentStates = [], this._normalState = {}) : g ? this.currentStates.push(A) : this.currentStates = [A], this._updateAnimationTargets(), this.markRedraw(), !e && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~tA), E;
      }
    }
  }, I.prototype.useStates = function(A, g, i) {
    if (!A.length)
      this.clearStates();
    else {
      var t = [], B = this.currentStates, C = A.length, Q = C === B.length;
      if (Q) {
        for (var r = 0; r < C; r++)
          if (A[r] !== B[r]) {
            Q = !1;
            break;
          }
      }
      if (Q)
        return;
      for (var r = 0; r < C; r++) {
        var E = A[r], e = void 0;
        this.stateProxy && (e = this.stateProxy(E, A)), e || (e = this.states[E]), e && t.push(e);
      }
      var a = t[C - 1], o = !!(a && a.hoverLayer || i);
      o && this._toggleHoverLayerFlag(!0);
      var n = this._mergeStates(t), h = this.stateTransition;
      this.saveCurrentToNormalState(n), this._applyStateObj(A.join(","), n, this._normalState, !1, !g && !this.__inHover && h && h.duration > 0, h);
      var l = this._textContent, c = this._textGuide;
      l && l.useStates(A, g, o), c && c.useStates(A, g, o), this._updateAnimationTargets(), this.currentStates = A.slice(), this.markRedraw(), !o && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~tA);
    }
  }, I.prototype._updateAnimationTargets = function() {
    for (var A = 0; A < this.animators.length; A++) {
      var g = this.animators[A];
      g.targetName && g.changeTarget(this[g.targetName]);
    }
  }, I.prototype.removeState = function(A) {
    var g = wA(this.currentStates, A);
    if (g >= 0) {
      var i = this.currentStates.slice();
      i.splice(g, 1), this.useStates(i);
    }
  }, I.prototype.replaceState = function(A, g, i) {
    var t = this.currentStates.slice(), B = wA(t, A), C = wA(t, g) >= 0;
    B >= 0 ? C ? t.splice(B, 1) : t[B] = g : i && !C && t.push(g), this.useStates(t);
  }, I.prototype.toggleState = function(A, g) {
    g ? this.useState(A, !0) : this.removeState(A);
  }, I.prototype._mergeStates = function(A) {
    for (var g = {}, i, t = 0; t < A.length; t++) {
      var B = A[t];
      x(g, B), B.textConfig && (i = i || {}, x(i, B.textConfig));
    }
    return i && (g.textConfig = i), g;
  }, I.prototype._applyStateObj = function(A, g, i, t, B, C) {
    var Q = !(g && t);
    g && g.textConfig ? (this.textConfig = x({}, t ? this.textConfig : i.textConfig), x(this.textConfig, g.textConfig)) : Q && i.textConfig && (this.textConfig = i.textConfig);
    for (var r = {}, E = !1, e = 0; e < di.length; e++) {
      var a = di[e], o = B && Zr[a];
      g && g[a] != null ? o ? (E = !0, r[a] = g[a]) : this[a] = g[a] : Q && i[a] != null && (o ? (E = !0, r[a] = i[a]) : this[a] = i[a]);
    }
    if (!B)
      for (var e = 0; e < this.animators.length; e++) {
        var n = this.animators[e], h = n.targetName;
        n.getLoop() || n.__changeFinalValue(h ? (g || i)[h] : g || i);
      }
    E && this._transitionState(A, r, C);
  }, I.prototype._attachComponent = function(A) {
    if (A.__zr && !A.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (A === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var g = this.__zr;
    g && A.addSelfToZr(g), A.__zr = g, A.__hostTarget = this;
  }, I.prototype._detachComponent = function(A) {
    A.__zr && A.removeSelfFromZr(A.__zr), A.__zr = null, A.__hostTarget = null;
  }, I.prototype.getClipPath = function() {
    return this._clipPath;
  }, I.prototype.setClipPath = function(A) {
    this._clipPath && this._clipPath !== A && this.removeClipPath(), this._attachComponent(A), this._clipPath = A, this.markRedraw();
  }, I.prototype.removeClipPath = function() {
    var A = this._clipPath;
    A && (this._detachComponent(A), this._clipPath = null, this.markRedraw());
  }, I.prototype.getTextContent = function() {
    return this._textContent;
  }, I.prototype.setTextContent = function(A) {
    var g = this._textContent;
    if (g !== A) {
      if (g && g !== A && this.removeTextContent(), process.env.NODE_ENV !== "production" && A.__zr && !A.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      A.innerTransformable = new eC(), this._attachComponent(A), this._textContent = A, this.markRedraw();
    }
  }, I.prototype.setTextConfig = function(A) {
    this.textConfig || (this.textConfig = {}), x(this.textConfig, A), this.markRedraw();
  }, I.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, I.prototype.removeTextContent = function() {
    var A = this._textContent;
    A && (A.innerTransformable = null, this._detachComponent(A), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, I.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, I.prototype.setTextGuideLine = function(A) {
    this._textGuide && this._textGuide !== A && this.removeTextGuideLine(), this._attachComponent(A), this._textGuide = A, this.markRedraw();
  }, I.prototype.removeTextGuideLine = function() {
    var A = this._textGuide;
    A && (this._detachComponent(A), this._textGuide = null, this.markRedraw());
  }, I.prototype.markRedraw = function() {
    this.__dirty |= tA;
    var A = this.__zr;
    A && (this.__inHover ? A.refreshHover() : A.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, I.prototype.dirty = function() {
    this.markRedraw();
  }, I.prototype._toggleHoverLayerFlag = function(A) {
    this.__inHover = A;
    var g = this._textContent, i = this._textGuide;
    g && (g.__inHover = A), i && (i.__inHover = A);
  }, I.prototype.addSelfToZr = function(A) {
    if (this.__zr !== A) {
      this.__zr = A;
      var g = this.animators;
      if (g)
        for (var i = 0; i < g.length; i++)
          A.animation.addAnimator(g[i]);
      this._clipPath && this._clipPath.addSelfToZr(A), this._textContent && this._textContent.addSelfToZr(A), this._textGuide && this._textGuide.addSelfToZr(A);
    }
  }, I.prototype.removeSelfFromZr = function(A) {
    if (!!this.__zr) {
      this.__zr = null;
      var g = this.animators;
      if (g)
        for (var i = 0; i < g.length; i++)
          A.animation.removeAnimator(g[i]);
      this._clipPath && this._clipPath.removeSelfFromZr(A), this._textContent && this._textContent.removeSelfFromZr(A), this._textGuide && this._textGuide.removeSelfFromZr(A);
    }
  }, I.prototype.animate = function(A, g, i) {
    var t = A ? this[A] : this;
    if (process.env.NODE_ENV !== "production" && !t) {
      EI('Property "' + A + '" is not existed in element ' + this.id);
      return;
    }
    var B = new et(t, g, i);
    return A && (B.targetName = A), this.addAnimator(B, A), B;
  }, I.prototype.addAnimator = function(A, g) {
    var i = this.__zr, t = this;
    A.during(function() {
      t.updateDuringAnimation(g);
    }).done(function() {
      var B = t.animators, C = wA(B, A);
      C >= 0 && B.splice(C, 1);
    }), this.animators.push(A), i && i.animation.addAnimator(A), i && i.wakeUp();
  }, I.prototype.updateDuringAnimation = function(A) {
    this.markRedraw();
  }, I.prototype.stopAnimation = function(A, g) {
    for (var i = this.animators, t = i.length, B = [], C = 0; C < t; C++) {
      var Q = i[C];
      !A || A === Q.scope ? Q.stop(g) : B.push(Q);
    }
    return this.animators = B, this;
  }, I.prototype.animateTo = function(A, g, i) {
    yi(this, A, g, i);
  }, I.prototype.animateFrom = function(A, g, i) {
    yi(this, A, g, i, !0);
  }, I.prototype._transitionState = function(A, g, i, t) {
    for (var B = yi(this, g, i, t), C = 0; C < B.length; C++)
      B[C].__fromStateTransition = A;
  }, I.prototype.getBoundingRect = function() {
    return null;
  }, I.prototype.getPaintRect = function() {
    return null;
  }, I.initDefaultProps = function() {
    var A = I.prototype;
    A.type = "element", A.name = "", A.ignore = A.silent = A.isGroup = A.draggable = A.dragging = A.ignoreClip = A.__inHover = !1, A.__dirty = tA;
    var g = {};
    function i(B, C, Q) {
      g[B + C + Q] || (console.warn("DEPRECATED: '" + B + "' has been deprecated. use '" + C + "', '" + Q + "' instead"), g[B + C + Q] = !0);
    }
    function t(B, C, Q, r) {
      Object.defineProperty(A, B, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && i(B, Q, r), !this[C]) {
            var e = this[C] = [];
            E(this, e);
          }
          return this[C];
        },
        set: function(e) {
          process.env.NODE_ENV !== "production" && i(B, Q, r), this[Q] = e[0], this[r] = e[1], this[C] = e, E(this, e);
        }
      });
      function E(e, a) {
        Object.defineProperty(a, 0, {
          get: function() {
            return e[Q];
          },
          set: function(o) {
            e[Q] = o;
          }
        }), Object.defineProperty(a, 1, {
          get: function() {
            return e[r];
          },
          set: function(o) {
            e[r] = o;
          }
        });
      }
    }
    Object.defineProperty && (t("position", "_legacyPos", "x", "y"), t("scale", "_legacyScale", "scaleX", "scaleY"), t("origin", "_legacyOrigin", "originX", "originY"));
  }(), I;
}();
KB(at, kI);
KB(at, eC);
function yi(I, A, g, i, t) {
  g = g || {};
  var B = [];
  oC(I, "", I, A, g, i, B, t);
  var C = B.length, Q = !1, r = g.done, E = g.aborted, e = function() {
    Q = !0, C--, C <= 0 && (Q ? r && r() : E && E());
  }, a = function() {
    C--, C <= 0 && (Q ? r && r() : E && E());
  };
  C || r && r(), B.length > 0 && g.during && B[0].during(function(h, l) {
    g.during(l);
  });
  for (var o = 0; o < B.length; o++) {
    var n = B[o];
    e && n.done(e), a && n.aborted(a), g.force && n.duration(g.duration), n.start(g.easing);
  }
  return B;
}
function vi(I, A, g) {
  for (var i = 0; i < g; i++)
    I[i] = A[i];
}
function Wr(I) {
  return yA(I[0]);
}
function Xr(I, A, g) {
  if (yA(A[g]))
    if (yA(I[g]) || (I[g] = []), fQ(A[g])) {
      var i = A[g].length;
      I[g].length !== i && (I[g] = new A[g].constructor(i), vi(I[g], A[g], i));
    } else {
      var t = A[g], B = I[g], C = t.length;
      if (Wr(t))
        for (var Q = t[0].length, r = 0; r < C; r++)
          B[r] ? vi(B[r], t[r], Q) : B[r] = Array.prototype.slice.call(t[r]);
      else
        vi(B, t, C);
      B.length = t.length;
    }
  else
    I[g] = A[g];
}
function zr(I, A) {
  return I === A || yA(I) && yA(A) && Vr(I, A);
}
function Vr(I, A) {
  var g = I.length;
  if (g !== A.length)
    return !1;
  for (var i = 0; i < g; i++)
    if (I[i] !== A[i])
      return !1;
  return !0;
}
function oC(I, A, g, i, t, B, C, Q) {
  for (var r = fA(i), E = t.duration, e = t.delay, a = t.additive, o = t.setToFinal, n = !HA(B), h = I.animators, l = [], c = 0; c < r.length; c++) {
    var s = r[c], u = i[s];
    if (u != null && g[s] != null && (n || B[s]))
      if (HA(u) && !yA(u) && !Qt(u)) {
        if (A) {
          Q || (g[s] = u, I.updateDuringAnimation(A));
          continue;
        }
        oC(I, s, g[s], u, t, B && B[s], C, Q);
      } else
        l.push(s);
    else
      Q || (g[s] = u, I.updateDuringAnimation(A), l.push(s));
  }
  var D = l.length;
  if (!a && D)
    for (var d = 0; d < h.length; d++) {
      var p = h[d];
      if (p.targetName === A) {
        var y = p.stopTracks(l);
        if (y) {
          var N = wA(h, p);
          h.splice(N, 1);
        }
      }
    }
  if (t.force || (l = Mt(l, function(F) {
    return !zr(i[F], g[F]);
  }), D = l.length), D > 0 || t.force && !C.length) {
    var G = void 0, S = void 0, M = void 0;
    if (Q) {
      S = {}, o && (G = {});
      for (var d = 0; d < D; d++) {
        var s = l[d];
        S[s] = g[s], o ? G[s] = i[s] : g[s] = i[s];
      }
    } else if (o) {
      M = {};
      for (var d = 0; d < D; d++) {
        var s = l[d];
        M[s] = Lg(g[s]), Xr(g, i, s);
      }
    }
    var p = new et(g, !1, !1, a ? Mt(h, function(L) {
      return L.targetName === A;
    }) : null);
    p.targetName = A, t.scope && (p.scope = t.scope), o && G && p.whenWithKeys(0, G, l), M && p.whenWithKeys(0, M, l), p.whenWithKeys(E == null ? 500 : E, Q ? S : i, l).delay(e || 0), I.addAnimator(p, A), C.push(p);
  }
}
const nC = at;
var sC = function(I) {
  BA(A, I);
  function A(g) {
    var i = I.call(this) || this;
    return i.isGroup = !0, i._children = [], i.attr(g), i;
  }
  return A.prototype.childrenRef = function() {
    return this._children;
  }, A.prototype.children = function() {
    return this._children.slice();
  }, A.prototype.childAt = function(g) {
    return this._children[g];
  }, A.prototype.childOfName = function(g) {
    for (var i = this._children, t = 0; t < i.length; t++)
      if (i[t].name === g)
        return i[t];
  }, A.prototype.childCount = function() {
    return this._children.length;
  }, A.prototype.add = function(g) {
    if (g && (g !== this && g.parent !== this && (this._children.push(g), this._doAdd(g)), process.env.NODE_ENV !== "production" && g.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, A.prototype.addBefore = function(g, i) {
    if (g && g !== this && g.parent !== this && i && i.parent === this) {
      var t = this._children, B = t.indexOf(i);
      B >= 0 && (t.splice(B, 0, g), this._doAdd(g));
    }
    return this;
  }, A.prototype.replace = function(g, i) {
    var t = wA(this._children, g);
    return t >= 0 && this.replaceAt(i, t), this;
  }, A.prototype.replaceAt = function(g, i) {
    var t = this._children, B = t[i];
    if (g && g !== this && g.parent !== this && g !== B) {
      t[i] = g, B.parent = null;
      var C = this.__zr;
      C && B.removeSelfFromZr(C), this._doAdd(g);
    }
    return this;
  }, A.prototype._doAdd = function(g) {
    g.parent && g.parent.remove(g), g.parent = this;
    var i = this.__zr;
    i && i !== g.__zr && g.addSelfToZr(i), i && i.refresh();
  }, A.prototype.remove = function(g) {
    var i = this.__zr, t = this._children, B = wA(t, g);
    return B < 0 ? this : (t.splice(B, 1), g.parent = null, i && g.removeSelfFromZr(i), i && i.refresh(), this);
  }, A.prototype.removeAll = function() {
    for (var g = this._children, i = this.__zr, t = 0; t < g.length; t++) {
      var B = g[t];
      i && B.removeSelfFromZr(i), B.parent = null;
    }
    return g.length = 0, this;
  }, A.prototype.eachChild = function(g, i) {
    for (var t = this._children, B = 0; B < t.length; B++) {
      var C = t[B];
      g.call(i, C, B);
    }
    return this;
  }, A.prototype.traverse = function(g, i) {
    for (var t = 0; t < this._children.length; t++) {
      var B = this._children[t], C = g.call(i, B);
      B.isGroup && !C && B.traverse(g, i);
    }
    return this;
  }, A.prototype.addSelfToZr = function(g) {
    I.prototype.addSelfToZr.call(this, g);
    for (var i = 0; i < this._children.length; i++) {
      var t = this._children[i];
      t.addSelfToZr(g);
    }
  }, A.prototype.removeSelfFromZr = function(g) {
    I.prototype.removeSelfFromZr.call(this, g);
    for (var i = 0; i < this._children.length; i++) {
      var t = this._children[i];
      t.removeSelfFromZr(g);
    }
  }, A.prototype.getBoundingRect = function(g) {
    for (var i = new P(0, 0, 0, 0), t = g || this._children, B = [], C = null, Q = 0; Q < t.length; Q++) {
      var r = t[Q];
      if (!(r.ignore || r.invisible)) {
        var E = r.getBoundingRect(), e = r.getLocalTransform(B);
        e ? (P.applyTransform(i, E, e), C = C || i.clone(), C.union(i)) : (C = C || E.clone(), C.union(E));
      }
    }
    return C || i;
  }, A;
}(nC);
sC.prototype.type = "group";
const hC = sC;
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var WI = {}, fC = {};
function Or(I) {
  delete fC[I];
}
function jr(I) {
  if (!I)
    return !1;
  if (typeof I == "string")
    return qg(I, 1) < ji;
  if (I.colorStops) {
    for (var A = I.colorStops, g = 0, i = A.length, t = 0; t < i; t++)
      g += qg(A[t].color, 1);
    return g /= i, g < ji;
  }
  return !1;
}
var $r = function() {
  function I(A, g, i) {
    var t = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, i = i || {}, this.dom = g, this.id = A;
    var B = new Qr(), C = i.renderer || "canvas";
    if (WI[C] || (C = fA(WI)[0]), process.env.NODE_ENV !== "production" && !WI[C])
      throw new Error("Renderer '" + C + "' is not imported. Please import it first.");
    i.useDirtyRect = i.useDirtyRect == null ? !1 : i.useDirtyRect;
    var Q = new WI[C](g, B, i, A), r = i.ssr || Q.ssrOnly;
    this.storage = B, this.painter = Q;
    var E = !V.node && !V.worker && !r ? new Ur(Q.getViewportRoot(), Q.root) : null, e = i.useCoarsePointer, a = e == null || e === "auto" ? V.touchEventsSupported : !!e, o = 44, n;
    a && (n = lQ(i.pointerSize, o)), this.handler = new Ir(B, Q, E, Q.root, n), this.animation = new Rr({
      stage: {
        update: r ? null : function() {
          return t._flush(!0);
        }
      }
    }), r || this.animation.start();
  }
  return I.prototype.add = function(A) {
    !A || (this.storage.addRoot(A), A.addSelfToZr(this), this.refresh());
  }, I.prototype.remove = function(A) {
    !A || (this.storage.delRoot(A), A.removeSelfFromZr(this), this.refresh());
  }, I.prototype.configLayer = function(A, g) {
    this.painter.configLayer && this.painter.configLayer(A, g), this.refresh();
  }, I.prototype.setBackgroundColor = function(A) {
    this.painter.setBackgroundColor && this.painter.setBackgroundColor(A), this.refresh(), this._backgroundColor = A, this._darkMode = jr(A);
  }, I.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, I.prototype.setDarkMode = function(A) {
    this._darkMode = A;
  }, I.prototype.isDarkMode = function() {
    return this._darkMode;
  }, I.prototype.refreshImmediately = function(A) {
    A || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
  }, I.prototype.refresh = function() {
    this._needsRefresh = !0, this.animation.start();
  }, I.prototype.flush = function() {
    this._flush(!1);
  }, I.prototype._flush = function(A) {
    var g, i = yI();
    this._needsRefresh && (g = !0, this.refreshImmediately(A)), this._needsRefreshHover && (g = !0, this.refreshHoverImmediately());
    var t = yI();
    g ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: t - i
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, I.prototype.setSleepAfterStill = function(A) {
    this._sleepAfterStill = A;
  }, I.prototype.wakeUp = function() {
    this.animation.start(), this._stillFrameAccum = 0;
  }, I.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, I.prototype.refreshHoverImmediately = function() {
    this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover();
  }, I.prototype.resize = function(A) {
    A = A || {}, this.painter.resize(A.width, A.height), this.handler.resize();
  }, I.prototype.clearAnimation = function() {
    this.animation.clear();
  }, I.prototype.getWidth = function() {
    return this.painter.getWidth();
  }, I.prototype.getHeight = function() {
    return this.painter.getHeight();
  }, I.prototype.setCursorStyle = function(A) {
    this.handler.setCursorStyle(A);
  }, I.prototype.findHover = function(A, g) {
    return this.handler.findHover(A, g);
  }, I.prototype.on = function(A, g, i) {
    return this.handler.on(A, g, i), this;
  }, I.prototype.off = function(A, g) {
    this.handler.off(A, g);
  }, I.prototype.trigger = function(A, g) {
    this.handler.trigger(A, g);
  }, I.prototype.clear = function() {
    for (var A = this.storage.getRoots(), g = 0; g < A.length; g++)
      A[g] instanceof hC && A[g].removeSelfFromZr(this);
    this.storage.delAllRoots(), this.painter.clear();
  }, I.prototype.dispose = function() {
    this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Or(this.id);
  }, I;
}();
function AE(I, A) {
  var g = new $r(bB(), I, A);
  return fC[g.id] = g, g;
}
function IE(I) {
  I.dispose();
}
function gE(I, A) {
  WI[I] = A;
}
var It = "__zr_style_" + Math.round(Math.random() * 10), eI = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, ot = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
eI[It] = !0;
var QB = ["z", "z2", "invisible"], iE = ["invisible"], tE = function(I) {
  BA(A, I);
  function A(g) {
    return I.call(this, g) || this;
  }
  return A.prototype._init = function(g) {
    for (var i = fA(g), t = 0; t < i.length; t++) {
      var B = i[t];
      B === "style" ? this.useStyle(g[B]) : I.prototype.attrKV.call(this, B, g[B]);
    }
    this.style || this.useStyle({});
  }, A.prototype.beforeBrush = function() {
  }, A.prototype.afterBrush = function() {
  }, A.prototype.innerBeforeBrush = function() {
  }, A.prototype.innerAfterBrush = function() {
  }, A.prototype.shouldBePainted = function(g, i, t, B) {
    var C = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && BE(this, g, i) || C && !C[0] && !C[3])
      return !1;
    if (t && this.__clipPaths) {
      for (var Q = 0; Q < this.__clipPaths.length; ++Q)
        if (this.__clipPaths[Q].isZeroArea())
          return !1;
    }
    if (B && this.parent)
      for (var r = this.parent; r; ) {
        if (r.ignore)
          return !1;
        r = r.parent;
      }
    return !0;
  }, A.prototype.contain = function(g, i) {
    return this.rectContain(g, i);
  }, A.prototype.traverse = function(g, i) {
    g.call(i, this);
  }, A.prototype.rectContain = function(g, i) {
    var t = this.transformCoordToLocal(g, i), B = this.getBoundingRect();
    return B.contain(t[0], t[1]);
  }, A.prototype.getPaintRect = function() {
    var g = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var i = this.transform, t = this.getBoundingRect(), B = this.style, C = B.shadowBlur || 0, Q = B.shadowOffsetX || 0, r = B.shadowOffsetY || 0;
      g = this._paintRect || (this._paintRect = new P(0, 0, 0, 0)), i ? P.applyTransform(g, t, i) : g.copy(t), (C || Q || r) && (g.width += C * 2 + Math.abs(Q), g.height += C * 2 + Math.abs(r), g.x = Math.min(g.x, g.x + Q - C), g.y = Math.min(g.y, g.y + r - C));
      var E = this.dirtyRectTolerance;
      g.isZero() || (g.x = Math.floor(g.x - E), g.y = Math.floor(g.y - E), g.width = Math.ceil(g.width + 1 + E * 2), g.height = Math.ceil(g.height + 1 + E * 2));
    }
    return g;
  }, A.prototype.setPrevPaintRect = function(g) {
    g ? (this._prevPaintRect = this._prevPaintRect || new P(0, 0, 0, 0), this._prevPaintRect.copy(g)) : this._prevPaintRect = null;
  }, A.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, A.prototype.animateStyle = function(g) {
    return this.animate("style", g);
  }, A.prototype.updateDuringAnimation = function(g) {
    g === "style" ? this.dirtyStyle() : this.markRedraw();
  }, A.prototype.attrKV = function(g, i) {
    g !== "style" ? I.prototype.attrKV.call(this, g, i) : this.style ? this.setStyle(i) : this.useStyle(i);
  }, A.prototype.setStyle = function(g, i) {
    return typeof g == "string" ? this.style[g] = i : x(this.style, g), this.dirtyStyle(), this;
  }, A.prototype.dirtyStyle = function(g) {
    g || this.markRedraw(), this.__dirty |= ZI, this._rect && (this._rect = null);
  }, A.prototype.dirty = function() {
    this.dirtyStyle();
  }, A.prototype.styleChanged = function() {
    return !!(this.__dirty & ZI);
  }, A.prototype.styleUpdated = function() {
    this.__dirty &= ~ZI;
  }, A.prototype.createStyle = function(g) {
    return jg(eI, g);
  }, A.prototype.useStyle = function(g) {
    g[It] || (g = this.createStyle(g)), this.__inHover ? this.__hoverStyle = g : this.style = g, this.dirtyStyle();
  }, A.prototype.isStyleObject = function(g) {
    return g[It];
  }, A.prototype._innerSaveToNormal = function(g) {
    I.prototype._innerSaveToNormal.call(this, g);
    var i = this._normalState;
    g.style && !i.style && (i.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(g, i, QB);
  }, A.prototype._applyStateObj = function(g, i, t, B, C, Q) {
    I.prototype._applyStateObj.call(this, g, i, t, B, C, Q);
    var r = !(i && B), E;
    if (i && i.style ? C ? B ? E = i.style : (E = this._mergeStyle(this.createStyle(), t.style), this._mergeStyle(E, i.style)) : (E = this._mergeStyle(this.createStyle(), B ? this.style : t.style), this._mergeStyle(E, i.style)) : r && (E = t.style), E)
      if (C) {
        var e = this.style;
        if (this.style = this.createStyle(r ? {} : e), r)
          for (var a = fA(e), o = 0; o < a.length; o++) {
            var n = a[o];
            n in E && (E[n] = E[n], this.style[n] = e[n]);
          }
        for (var h = fA(E), o = 0; o < h.length; o++) {
          var n = h[o];
          this.style[n] = this.style[n];
        }
        this._transitionState(g, {
          style: E
        }, Q, this.getAnimationStyleProps());
      } else
        this.useStyle(E);
    for (var l = this.__inHover ? iE : QB, o = 0; o < l.length; o++) {
      var n = l[o];
      i && i[n] != null ? this[n] = i[n] : r && t[n] != null && (this[n] = t[n]);
    }
  }, A.prototype._mergeStates = function(g) {
    for (var i = I.prototype._mergeStates.call(this, g), t, B = 0; B < g.length; B++) {
      var C = g[B];
      C.style && (t = t || {}, this._mergeStyle(t, C.style));
    }
    return t && (i.style = t), i;
  }, A.prototype._mergeStyle = function(g, i) {
    return x(g, i), g;
  }, A.prototype.getAnimationStyleProps = function() {
    return ot;
  }, A.initDefaultProps = function() {
    var g = A.prototype;
    g.type = "displayable", g.invisible = !1, g.z = 0, g.z2 = 0, g.zlevel = 0, g.culling = !1, g.cursor = "pointer", g.rectHover = !1, g.incremental = !1, g._rect = null, g.dirtyRectTolerance = 0, g.__dirty = tA | ZI;
  }(), A;
}(nC), pi = new P(0, 0, 0, 0), Gi = new P(0, 0, 0, 0);
function BE(I, A, g) {
  return pi.copy(I.getBoundingRect()), I.transform && pi.applyTransform(I.transform), Gi.width = A, Gi.height = g, !pi.intersect(Gi);
}
const nt = tE;
var aA = Math.min, oA = Math.max, Ni = Math.sin, Ri = Math.cos, jA = Math.PI * 2, lg = FI(), Dg = FI(), wg = FI();
function rB(I, A, g, i, t, B) {
  t[0] = aA(I, g), t[1] = aA(A, i), B[0] = oA(I, g), B[1] = oA(A, i);
}
var EB = [], eB = [];
function CE(I, A, g, i, t, B, C, Q, r, E) {
  var e = gC, a = W, o = e(I, g, t, C, EB);
  r[0] = 1 / 0, r[1] = 1 / 0, E[0] = -1 / 0, E[1] = -1 / 0;
  for (var n = 0; n < o; n++) {
    var h = a(I, g, t, C, EB[n]);
    r[0] = aA(h, r[0]), E[0] = oA(h, E[0]);
  }
  o = e(A, i, B, Q, eB);
  for (var n = 0; n < o; n++) {
    var l = a(A, i, B, Q, eB[n]);
    r[1] = aA(l, r[1]), E[1] = oA(l, E[1]);
  }
  r[0] = aA(I, r[0]), E[0] = oA(I, E[0]), r[0] = aA(C, r[0]), E[0] = oA(C, E[0]), r[1] = aA(A, r[1]), E[1] = oA(A, E[1]), r[1] = aA(Q, r[1]), E[1] = oA(Q, E[1]);
}
function QE(I, A, g, i, t, B, C, Q) {
  var r = iC, E = z, e = oA(aA(r(I, g, t), 1), 0), a = oA(aA(r(A, i, B), 1), 0), o = E(I, g, t, e), n = E(A, i, B, a);
  C[0] = aA(I, t, o), C[1] = aA(A, B, n), Q[0] = oA(I, t, o), Q[1] = oA(A, B, n);
}
function rE(I, A, g, i, t, B, C, Q, r) {
  var E = xB, e = ZB, a = Math.abs(t - B);
  if (a % jA < 1e-4 && a > 1e-4) {
    Q[0] = I - g, Q[1] = A - i, r[0] = I + g, r[1] = A + i;
    return;
  }
  if (lg[0] = Ri(t) * g + I, lg[1] = Ni(t) * i + A, Dg[0] = Ri(B) * g + I, Dg[1] = Ni(B) * i + A, E(Q, lg, Dg), e(r, lg, Dg), t = t % jA, t < 0 && (t = t + jA), B = B % jA, B < 0 && (B = B + jA), t > B && !C ? B += jA : t < B && C && (t += jA), C) {
    var o = B;
    B = t, t = o;
  }
  for (var n = 0; n < B; n += Math.PI / 2)
    n > t && (wg[0] = Ri(n) * g + I, wg[1] = Ni(n) * i + A, E(Q, wg, Q), e(r, wg, r));
}
var _ = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, $A = [], AI = [], uA = [], JA = [], lA = [], DA = [], Si = Math.min, Fi = Math.max, II = Math.cos, gI = Math.sin, SA = Math.abs, gt = Math.PI, mA = gt * 2, ki = typeof Float32Array < "u", bI = [];
function Mi(I) {
  var A = Math.round(I / gt * 1e8) / 1e8;
  return A % 2 * gt;
}
function EE(I, A) {
  var g = Mi(I[0]);
  g < 0 && (g += mA);
  var i = g - I[0], t = I[1];
  t += i, !A && t - g >= mA ? t = g + mA : A && g - t >= mA ? t = g - mA : !A && g > t ? t = g + (mA - Mi(g - t)) : A && g < t && (t = g - (mA - Mi(t - g))), I[0] = g, I[1] = t;
}
var eE = function() {
  function I(A) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, A && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return I.prototype.increaseVersion = function() {
    this._version++;
  }, I.prototype.getVersion = function() {
    return this._version;
  }, I.prototype.setScale = function(A, g, i) {
    i = i || 0, i > 0 && (this._ux = SA(i / Tg / A) || 0, this._uy = SA(i / Tg / g) || 0);
  }, I.prototype.setDPR = function(A) {
    this.dpr = A;
  }, I.prototype.setContext = function(A) {
    this._ctx = A;
  }, I.prototype.getContext = function() {
    return this._ctx;
  }, I.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, I.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, I.prototype.moveTo = function(A, g) {
    return this._drawPendingPt(), this.addData(_.M, A, g), this._ctx && this._ctx.moveTo(A, g), this._x0 = A, this._y0 = g, this._xi = A, this._yi = g, this;
  }, I.prototype.lineTo = function(A, g) {
    var i = SA(A - this._xi), t = SA(g - this._yi), B = i > this._ux || t > this._uy;
    if (this.addData(_.L, A, g), this._ctx && B && this._ctx.lineTo(A, g), B)
      this._xi = A, this._yi = g, this._pendingPtDist = 0;
    else {
      var C = i * i + t * t;
      C > this._pendingPtDist && (this._pendingPtX = A, this._pendingPtY = g, this._pendingPtDist = C);
    }
    return this;
  }, I.prototype.bezierCurveTo = function(A, g, i, t, B, C) {
    return this._drawPendingPt(), this.addData(_.C, A, g, i, t, B, C), this._ctx && this._ctx.bezierCurveTo(A, g, i, t, B, C), this._xi = B, this._yi = C, this;
  }, I.prototype.quadraticCurveTo = function(A, g, i, t) {
    return this._drawPendingPt(), this.addData(_.Q, A, g, i, t), this._ctx && this._ctx.quadraticCurveTo(A, g, i, t), this._xi = i, this._yi = t, this;
  }, I.prototype.arc = function(A, g, i, t, B, C) {
    this._drawPendingPt(), bI[0] = t, bI[1] = B, EE(bI, C), t = bI[0], B = bI[1];
    var Q = B - t;
    return this.addData(_.A, A, g, i, i, t, Q, 0, C ? 0 : 1), this._ctx && this._ctx.arc(A, g, i, t, B, C), this._xi = II(B) * i + A, this._yi = gI(B) * i + g, this;
  }, I.prototype.arcTo = function(A, g, i, t, B) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(A, g, i, t, B), this;
  }, I.prototype.rect = function(A, g, i, t) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(A, g, i, t), this.addData(_.R, A, g, i, t), this;
  }, I.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(_.Z);
    var A = this._ctx, g = this._x0, i = this._y0;
    return A && A.closePath(), this._xi = g, this._yi = i, this;
  }, I.prototype.fill = function(A) {
    A && A.fill(), this.toStatic();
  }, I.prototype.stroke = function(A) {
    A && A.stroke(), this.toStatic();
  }, I.prototype.len = function() {
    return this._len;
  }, I.prototype.setData = function(A) {
    var g = A.length;
    !(this.data && this.data.length === g) && ki && (this.data = new Float32Array(g));
    for (var i = 0; i < g; i++)
      this.data[i] = A[i];
    this._len = g;
  }, I.prototype.appendPath = function(A) {
    A instanceof Array || (A = [A]);
    for (var g = A.length, i = 0, t = this._len, B = 0; B < g; B++)
      i += A[B].len();
    ki && this.data instanceof Float32Array && (this.data = new Float32Array(t + i));
    for (var B = 0; B < g; B++)
      for (var C = A[B].data, Q = 0; Q < C.length; Q++)
        this.data[t++] = C[Q];
    this._len = t;
  }, I.prototype.addData = function(A, g, i, t, B, C, Q, r, E) {
    if (!!this._saveData) {
      var e = this.data;
      this._len + arguments.length > e.length && (this._expandData(), e = this.data);
      for (var a = 0; a < arguments.length; a++)
        e[this._len++] = arguments[a];
    }
  }, I.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, I.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var A = [], g = 0; g < this._len; g++)
        A[g] = this.data[g];
      this.data = A;
    }
  }, I.prototype.toStatic = function() {
    if (!!this._saveData) {
      this._drawPendingPt();
      var A = this.data;
      A instanceof Array && (A.length = this._len, ki && this._len > 11 && (this.data = new Float32Array(A)));
    }
  }, I.prototype.getBoundingRect = function() {
    uA[0] = uA[1] = lA[0] = lA[1] = Number.MAX_VALUE, JA[0] = JA[1] = DA[0] = DA[1] = -Number.MAX_VALUE;
    var A = this.data, g = 0, i = 0, t = 0, B = 0, C;
    for (C = 0; C < this._len; ) {
      var Q = A[C++], r = C === 1;
      switch (r && (g = A[C], i = A[C + 1], t = g, B = i), Q) {
        case _.M:
          g = t = A[C++], i = B = A[C++], lA[0] = t, lA[1] = B, DA[0] = t, DA[1] = B;
          break;
        case _.L:
          rB(g, i, A[C], A[C + 1], lA, DA), g = A[C++], i = A[C++];
          break;
        case _.C:
          CE(g, i, A[C++], A[C++], A[C++], A[C++], A[C], A[C + 1], lA, DA), g = A[C++], i = A[C++];
          break;
        case _.Q:
          QE(g, i, A[C++], A[C++], A[C], A[C + 1], lA, DA), g = A[C++], i = A[C++];
          break;
        case _.A:
          var E = A[C++], e = A[C++], a = A[C++], o = A[C++], n = A[C++], h = A[C++] + n;
          C += 1;
          var l = !A[C++];
          r && (t = II(n) * a + E, B = gI(n) * o + e), rE(E, e, a, o, n, h, l, lA, DA), g = II(h) * a + E, i = gI(h) * o + e;
          break;
        case _.R:
          t = g = A[C++], B = i = A[C++];
          var c = A[C++], s = A[C++];
          rB(t, B, t + c, B + s, lA, DA);
          break;
        case _.Z:
          g = t, i = B;
          break;
      }
      xB(uA, uA, lA), ZB(JA, JA, DA);
    }
    return C === 0 && (uA[0] = uA[1] = JA[0] = JA[1] = 0), new P(uA[0], uA[1], JA[0] - uA[0], JA[1] - uA[1]);
  }, I.prototype._calculateLength = function() {
    var A = this.data, g = this._len, i = this._ux, t = this._uy, B = 0, C = 0, Q = 0, r = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var E = this._pathSegLen, e = 0, a = 0, o = 0; o < g; ) {
      var n = A[o++], h = o === 1;
      h && (B = A[o], C = A[o + 1], Q = B, r = C);
      var l = -1;
      switch (n) {
        case _.M:
          B = Q = A[o++], C = r = A[o++];
          break;
        case _.L: {
          var c = A[o++], s = A[o++], u = c - B, D = s - C;
          (SA(u) > i || SA(D) > t || o === g - 1) && (l = Math.sqrt(u * u + D * D), B = c, C = s);
          break;
        }
        case _.C: {
          var d = A[o++], p = A[o++], c = A[o++], s = A[o++], y = A[o++], N = A[o++];
          l = Er(B, C, d, p, c, s, y, N, 10), B = y, C = N;
          break;
        }
        case _.Q: {
          var d = A[o++], p = A[o++], c = A[o++], s = A[o++];
          l = or(B, C, d, p, c, s, 10), B = c, C = s;
          break;
        }
        case _.A:
          var G = A[o++], S = A[o++], M = A[o++], F = A[o++], L = A[o++], K = A[o++], Z = K + L;
          o += 1, A[o++], h && (Q = II(L) * M + G, r = gI(L) * F + S), l = Fi(M, F) * Si(mA, Math.abs(K)), B = II(Z) * M + G, C = gI(Z) * F + S;
          break;
        case _.R: {
          Q = B = A[o++], r = C = A[o++];
          var X = A[o++], iA = A[o++];
          l = X * 2 + iA * 2;
          break;
        }
        case _.Z: {
          var u = Q - B, D = r - C;
          l = Math.sqrt(u * u + D * D), B = Q, C = r;
          break;
        }
      }
      l >= 0 && (E[a++] = l, e += l);
    }
    return this._pathLen = e, e;
  }, I.prototype.rebuildPath = function(A, g) {
    var i = this.data, t = this._ux, B = this._uy, C = this._len, Q, r, E, e, a, o, n = g < 1, h, l, c = 0, s = 0, u, D = 0, d, p;
    if (n && (this._pathSegLen || this._calculateLength(), h = this._pathSegLen, l = this._pathLen, u = g * l, !u))
      return;
    A:
      for (var y = 0; y < C; ) {
        var N = i[y++], G = y === 1;
        switch (G && (E = i[y], e = i[y + 1], Q = E, r = e), N !== _.L && D > 0 && (A.lineTo(d, p), D = 0), N) {
          case _.M:
            Q = E = i[y++], r = e = i[y++], A.moveTo(E, e);
            break;
          case _.L: {
            a = i[y++], o = i[y++];
            var S = SA(a - E), M = SA(o - e);
            if (S > t || M > B) {
              if (n) {
                var F = h[s++];
                if (c + F > u) {
                  var L = (u - c) / F;
                  A.lineTo(E * (1 - L) + a * L, e * (1 - L) + o * L);
                  break A;
                }
                c += F;
              }
              A.lineTo(a, o), E = a, e = o, D = 0;
            } else {
              var K = S * S + M * M;
              K > D && (d = a, p = o, D = K);
            }
            break;
          }
          case _.C: {
            var Z = i[y++], X = i[y++], iA = i[y++], vA = i[y++], aI = i[y++], oI = i[y++];
            if (n) {
              var F = h[s++];
              if (c + F > u) {
                var L = (u - c) / F;
                bg(E, Z, iA, aI, L, $A), bg(e, X, vA, oI, L, AI), A.bezierCurveTo($A[1], AI[1], $A[2], AI[2], $A[3], AI[3]);
                break A;
              }
              c += F;
            }
            A.bezierCurveTo(Z, X, iA, vA, aI, oI), E = aI, e = oI;
            break;
          }
          case _.Q: {
            var Z = i[y++], X = i[y++], iA = i[y++], vA = i[y++];
            if (n) {
              var F = h[s++];
              if (c + F > u) {
                var L = (u - c) / F;
                Kg(E, Z, iA, L, $A), Kg(e, X, vA, L, AI), A.quadraticCurveTo($A[1], AI[1], $A[2], AI[2]);
                break A;
              }
              c += F;
            }
            A.quadraticCurveTo(Z, X, iA, vA), E = iA, e = vA;
            break;
          }
          case _.A:
            var TA = i[y++], xA = i[y++], pA = i[y++], GA = i[y++], LA = i[y++], tg = i[y++], MI = i[y++], nI = !i[y++], sI = pA > GA ? pA : GA, YI = SA(pA - GA) > 1e-3, cA = LA + tg, Bg = !1;
            if (n) {
              var F = h[s++];
              c + F > u && (cA = LA + tg * (u - c) / F, Bg = !0), c += F;
            }
            if (YI && A.ellipse ? A.ellipse(TA, xA, pA, GA, MI, LA, cA, nI) : A.arc(TA, xA, sI, LA, cA, nI), Bg)
              break A;
            G && (Q = II(LA) * pA + TA, r = gI(LA) * GA + xA), E = II(cA) * pA + TA, e = gI(cA) * GA + xA;
            break;
          case _.R:
            Q = E = i[y], r = e = i[y + 1], a = i[y++], o = i[y++];
            var NA = i[y++], ZA = i[y++];
            if (n) {
              var F = h[s++];
              if (c + F > u) {
                var CA = u - c;
                A.moveTo(a, o), A.lineTo(a + Si(CA, NA), o), CA -= NA, CA > 0 && A.lineTo(a + NA, o + Si(CA, ZA)), CA -= ZA, CA > 0 && A.lineTo(a + Fi(NA - CA, 0), o + ZA), CA -= NA, CA > 0 && A.lineTo(a, o + Fi(ZA - CA, 0));
                break A;
              }
              c += F;
            }
            A.rect(a, o, NA, ZA);
            break;
          case _.Z:
            if (n) {
              var F = h[s++];
              if (c + F > u) {
                var L = (u - c) / F;
                A.lineTo(E * (1 - L) + Q * L, e * (1 - L) + r * L);
                break A;
              }
              c += F;
            }
            A.closePath(), E = Q, e = r;
        }
      }
  }, I.prototype.clone = function() {
    var A = new I(), g = this.data;
    return A.data = g.slice ? g.slice() : Array.prototype.slice.call(g), A._len = this._len, A;
  }, I.CMD = _, I.initDefaultProps = function() {
    var A = I.prototype;
    A._saveData = !0, A._ux = 0, A._uy = 0, A._pendingPtDist = 0, A._version = 0;
  }(), I;
}();
const st = eE;
function wI(I, A, g, i, t, B, C) {
  if (t === 0)
    return !1;
  var Q = t, r = 0, E = I;
  if (C > A + Q && C > i + Q || C < A - Q && C < i - Q || B > I + Q && B > g + Q || B < I - Q && B < g - Q)
    return !1;
  if (I !== g)
    r = (A - i) / (I - g), E = (I * i - g * A) / (I - g);
  else
    return Math.abs(B - I) <= Q / 2;
  var e = r * B - C + E, a = e * e / (r * r + 1);
  return a <= Q / 2 * Q / 2;
}
function aE(I, A, g, i, t, B, C, Q, r, E, e) {
  if (r === 0)
    return !1;
  var a = r;
  if (e > A + a && e > i + a && e > B + a && e > Q + a || e < A - a && e < i - a && e < B - a && e < Q - a || E > I + a && E > g + a && E > t + a && E > C + a || E < I - a && E < g - a && E < t - a && E < C - a)
    return !1;
  var o = rr(I, A, g, i, t, B, C, Q, E, e, null);
  return o <= a / 2;
}
function oE(I, A, g, i, t, B, C, Q, r) {
  if (C === 0)
    return !1;
  var E = C;
  if (r > A + E && r > i + E && r > B + E || r < A - E && r < i - E && r < B - E || Q > I + E && Q > g + E && Q > t + E || Q < I - E && Q < g - E && Q < t - E)
    return !1;
  var e = ar(I, A, g, i, t, B, Q, r, null);
  return e <= E / 2;
}
var aB = Math.PI * 2;
function dg(I) {
  return I %= aB, I < 0 && (I += aB), I;
}
var KI = Math.PI * 2;
function nE(I, A, g, i, t, B, C, Q, r) {
  if (C === 0)
    return !1;
  var E = C;
  Q -= I, r -= A;
  var e = Math.sqrt(Q * Q + r * r);
  if (e - E > g || e + E < g)
    return !1;
  if (Math.abs(i - t) % KI < 1e-4)
    return !0;
  if (B) {
    var a = i;
    i = dg(t), t = dg(a);
  } else
    i = dg(i), t = dg(t);
  i > t && (t += KI);
  var o = Math.atan2(r, Q);
  return o < 0 && (o += KI), o >= i && o <= t || o + KI >= i && o + KI <= t;
}
function iI(I, A, g, i, t, B) {
  if (B > A && B > i || B < A && B < i || i === A)
    return 0;
  var C = (B - A) / (i - A), Q = i < A ? 1 : -1;
  (C === 1 || C === 0) && (Q = i < A ? 0.5 : -0.5);
  var r = C * (g - I) + I;
  return r === t ? 1 / 0 : r > t ? Q : 0;
}
var UA = st.CMD, tI = Math.PI * 2, sE = 1e-4;
function hE(I, A) {
  return Math.abs(I - A) < sE;
}
var $ = [-1, -1, -1], EA = [-1, -1];
function fE() {
  var I = EA[0];
  EA[0] = EA[1], EA[1] = I;
}
function cE(I, A, g, i, t, B, C, Q, r, E) {
  if (E > A && E > i && E > B && E > Q || E < A && E < i && E < B && E < Q)
    return 0;
  var e = IC(A, i, B, Q, E, $);
  if (e === 0)
    return 0;
  for (var a = 0, o = -1, n = void 0, h = void 0, l = 0; l < e; l++) {
    var c = $[l], s = c === 0 || c === 1 ? 0.5 : 1, u = W(I, g, t, C, c);
    u < r || (o < 0 && (o = gC(A, i, B, Q, EA), EA[1] < EA[0] && o > 1 && fE(), n = W(A, i, B, Q, EA[0]), o > 1 && (h = W(A, i, B, Q, EA[1]))), o === 2 ? c < EA[0] ? a += n < A ? s : -s : c < EA[1] ? a += h < n ? s : -s : a += Q < h ? s : -s : c < EA[0] ? a += n < A ? s : -s : a += Q < n ? s : -s);
  }
  return a;
}
function uE(I, A, g, i, t, B, C, Q) {
  if (Q > A && Q > i && Q > B || Q < A && Q < i && Q < B)
    return 0;
  var r = er(A, i, B, Q, $);
  if (r === 0)
    return 0;
  var E = iC(A, i, B);
  if (E >= 0 && E <= 1) {
    for (var e = 0, a = z(A, i, B, E), o = 0; o < r; o++) {
      var n = $[o] === 0 || $[o] === 1 ? 0.5 : 1, h = z(I, g, t, $[o]);
      h < C || ($[o] < E ? e += a < A ? n : -n : e += B < a ? n : -n);
    }
    return e;
  } else {
    var n = $[0] === 0 || $[0] === 1 ? 0.5 : 1, h = z(I, g, t, $[0]);
    return h < C ? 0 : B < A ? n : -n;
  }
}
function lE(I, A, g, i, t, B, C, Q) {
  if (Q -= A, Q > g || Q < -g)
    return 0;
  var r = Math.sqrt(g * g - Q * Q);
  $[0] = -r, $[1] = r;
  var E = Math.abs(i - t);
  if (E < 1e-4)
    return 0;
  if (E >= tI - 1e-4) {
    i = 0, t = tI;
    var e = B ? 1 : -1;
    return C >= $[0] + I && C <= $[1] + I ? e : 0;
  }
  if (i > t) {
    var a = i;
    i = t, t = a;
  }
  i < 0 && (i += tI, t += tI);
  for (var o = 0, n = 0; n < 2; n++) {
    var h = $[n];
    if (h + I > C) {
      var l = Math.atan2(Q, h), e = B ? 1 : -1;
      l < 0 && (l = tI + l), (l >= i && l <= t || l + tI >= i && l + tI <= t) && (l > Math.PI / 2 && l < Math.PI * 1.5 && (e = -e), o += e);
    }
  }
  return o;
}
function cC(I, A, g, i, t) {
  for (var B = I.data, C = I.len(), Q = 0, r = 0, E = 0, e = 0, a = 0, o, n, h = 0; h < C; ) {
    var l = B[h++], c = h === 1;
    switch (l === UA.M && h > 1 && (g || (Q += iI(r, E, e, a, i, t))), c && (r = B[h], E = B[h + 1], e = r, a = E), l) {
      case UA.M:
        e = B[h++], a = B[h++], r = e, E = a;
        break;
      case UA.L:
        if (g) {
          if (wI(r, E, B[h], B[h + 1], A, i, t))
            return !0;
        } else
          Q += iI(r, E, B[h], B[h + 1], i, t) || 0;
        r = B[h++], E = B[h++];
        break;
      case UA.C:
        if (g) {
          if (aE(r, E, B[h++], B[h++], B[h++], B[h++], B[h], B[h + 1], A, i, t))
            return !0;
        } else
          Q += cE(r, E, B[h++], B[h++], B[h++], B[h++], B[h], B[h + 1], i, t) || 0;
        r = B[h++], E = B[h++];
        break;
      case UA.Q:
        if (g) {
          if (oE(r, E, B[h++], B[h++], B[h], B[h + 1], A, i, t))
            return !0;
        } else
          Q += uE(r, E, B[h++], B[h++], B[h], B[h + 1], i, t) || 0;
        r = B[h++], E = B[h++];
        break;
      case UA.A:
        var s = B[h++], u = B[h++], D = B[h++], d = B[h++], p = B[h++], y = B[h++];
        h += 1;
        var N = !!(1 - B[h++]);
        o = Math.cos(p) * D + s, n = Math.sin(p) * d + u, c ? (e = o, a = n) : Q += iI(r, E, o, n, i, t);
        var G = (i - s) * d / D + s;
        if (g) {
          if (nE(s, u, d, p, p + y, N, A, G, t))
            return !0;
        } else
          Q += lE(s, u, d, p, p + y, N, G, t);
        r = Math.cos(p + y) * D + s, E = Math.sin(p + y) * d + u;
        break;
      case UA.R:
        e = r = B[h++], a = E = B[h++];
        var S = B[h++], M = B[h++];
        if (o = e + S, n = a + M, g) {
          if (wI(e, a, o, a, A, i, t) || wI(o, a, o, n, A, i, t) || wI(o, n, e, n, A, i, t) || wI(e, n, e, a, A, i, t))
            return !0;
        } else
          Q += iI(o, a, o, n, i, t), Q += iI(e, n, e, a, i, t);
        break;
      case UA.Z:
        if (g) {
          if (wI(r, E, e, a, A, i, t))
            return !0;
        } else
          Q += iI(r, E, e, a, i, t);
        r = e, E = a;
        break;
    }
  }
  return !g && !hE(E, a) && (Q += iI(r, E, e, a, i, t) || 0), Q !== 0;
}
function DE(I, A, g) {
  return cC(I, 0, !1, A, g);
}
function wE(I, A, g, i) {
  return cC(I, A, !0, g, i);
}
var uC = SI({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, eI), dE = {
  style: SI({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, ot.style)
}, Yi = Ig.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), yE = function(I) {
  BA(A, I);
  function A(g) {
    return I.call(this, g) || this;
  }
  return A.prototype.update = function() {
    var g = this;
    I.prototype.update.call(this);
    var i = this.style;
    if (i.decal) {
      var t = this._decalEl = this._decalEl || new A();
      t.buildPath === A.prototype.buildPath && (t.buildPath = function(r) {
        g.buildPath(r, g.shape);
      }), t.silent = !0;
      var B = t.style;
      for (var C in i)
        B[C] !== i[C] && (B[C] = i[C]);
      B.fill = i.fill ? i.decal : null, B.decal = null, B.shadowColor = null, i.strokeFirst && (B.stroke = null);
      for (var Q = 0; Q < Yi.length; ++Q)
        t[Yi[Q]] = this[Yi[Q]];
      t.__dirty |= tA;
    } else
      this._decalEl && (this._decalEl = null);
  }, A.prototype.getDecalElement = function() {
    return this._decalEl;
  }, A.prototype._init = function(g) {
    var i = fA(g);
    this.shape = this.getDefaultShape();
    var t = this.getDefaultStyle();
    t && this.useStyle(t);
    for (var B = 0; B < i.length; B++) {
      var C = i[B], Q = g[C];
      C === "style" ? this.style ? x(this.style, Q) : this.useStyle(Q) : C === "shape" ? x(this.shape, Q) : I.prototype.attrKV.call(this, C, Q);
    }
    this.style || this.useStyle({});
  }, A.prototype.getDefaultStyle = function() {
    return null;
  }, A.prototype.getDefaultShape = function() {
    return {};
  }, A.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, A.prototype.getInsideTextFill = function() {
    var g = this.style.fill;
    if (g !== "none") {
      if (bi(g)) {
        var i = qg(g, 0);
        return i > 0.5 ? $i : i > 0.2 ? _r : At;
      } else if (g)
        return At;
    }
    return $i;
  }, A.prototype.getInsideTextStroke = function(g) {
    var i = this.style.fill;
    if (bi(i)) {
      var t = this.__zr, B = !!(t && t.isDarkMode()), C = qg(g, 0) < ji;
      if (B === C)
        return i;
    }
  }, A.prototype.buildPath = function(g, i, t) {
  }, A.prototype.pathUpdated = function() {
    this.__dirty &= ~dI;
  }, A.prototype.getUpdatedPathProxy = function(g) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, g), this.path;
  }, A.prototype.createPathProxy = function() {
    this.path = new st(!1);
  }, A.prototype.hasStroke = function() {
    var g = this.style, i = g.stroke;
    return !(i == null || i === "none" || !(g.lineWidth > 0));
  }, A.prototype.hasFill = function() {
    var g = this.style, i = g.fill;
    return i != null && i !== "none";
  }, A.prototype.getBoundingRect = function() {
    var g = this._rect, i = this.style, t = !g;
    if (t) {
      var B = !1;
      this.path || (B = !0, this.createPathProxy());
      var C = this.path;
      (B || this.__dirty & dI) && (C.beginPath(), this.buildPath(C, this.shape, !1), this.pathUpdated()), g = C.getBoundingRect();
    }
    if (this._rect = g, this.hasStroke() && this.path && this.path.len() > 0) {
      var Q = this._rectStroke || (this._rectStroke = g.clone());
      if (this.__dirty || t) {
        Q.copy(g);
        var r = i.strokeNoScale ? this.getLineScale() : 1, E = i.lineWidth;
        if (!this.hasFill()) {
          var e = this.strokeContainThreshold;
          E = Math.max(E, e == null ? 4 : e);
        }
        r > 1e-10 && (Q.width += E / r, Q.height += E / r, Q.x -= E / r / 2, Q.y -= E / r / 2);
      }
      return Q;
    }
    return g;
  }, A.prototype.contain = function(g, i) {
    var t = this.transformCoordToLocal(g, i), B = this.getBoundingRect(), C = this.style;
    if (g = t[0], i = t[1], B.contain(g, i)) {
      var Q = this.path;
      if (this.hasStroke()) {
        var r = C.lineWidth, E = C.strokeNoScale ? this.getLineScale() : 1;
        if (E > 1e-10 && (this.hasFill() || (r = Math.max(r, this.strokeContainThreshold)), wE(Q, r / E, g, i)))
          return !0;
      }
      if (this.hasFill())
        return DE(Q, g, i);
    }
    return !1;
  }, A.prototype.dirtyShape = function() {
    this.__dirty |= dI, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, A.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, A.prototype.animateShape = function(g) {
    return this.animate("shape", g);
  }, A.prototype.updateDuringAnimation = function(g) {
    g === "style" ? this.dirtyStyle() : g === "shape" ? this.dirtyShape() : this.markRedraw();
  }, A.prototype.attrKV = function(g, i) {
    g === "shape" ? this.setShape(i) : I.prototype.attrKV.call(this, g, i);
  }, A.prototype.setShape = function(g, i) {
    var t = this.shape;
    return t || (t = this.shape = {}), typeof g == "string" ? t[g] = i : x(t, g), this.dirtyShape(), this;
  }, A.prototype.shapeChanged = function() {
    return !!(this.__dirty & dI);
  }, A.prototype.createStyle = function(g) {
    return jg(uC, g);
  }, A.prototype._innerSaveToNormal = function(g) {
    I.prototype._innerSaveToNormal.call(this, g);
    var i = this._normalState;
    g.shape && !i.shape && (i.shape = x({}, this.shape));
  }, A.prototype._applyStateObj = function(g, i, t, B, C, Q) {
    I.prototype._applyStateObj.call(this, g, i, t, B, C, Q);
    var r = !(i && B), E;
    if (i && i.shape ? C ? B ? E = i.shape : (E = x({}, t.shape), x(E, i.shape)) : (E = x({}, B ? this.shape : t.shape), x(E, i.shape)) : r && (E = t.shape), E)
      if (C) {
        this.shape = x({}, this.shape);
        for (var e = {}, a = fA(E), o = 0; o < a.length; o++) {
          var n = a[o];
          typeof E[n] == "object" ? this.shape[n] = E[n] : e[n] = E[n];
        }
        this._transitionState(g, {
          shape: e
        }, Q);
      } else
        this.shape = E, this.dirtyShape();
  }, A.prototype._mergeStates = function(g) {
    for (var i = I.prototype._mergeStates.call(this, g), t, B = 0; B < g.length; B++) {
      var C = g[B];
      C.shape && (t = t || {}, this._mergeStyle(t, C.shape));
    }
    return t && (i.shape = t), i;
  }, A.prototype.getAnimationStyleProps = function() {
    return dE;
  }, A.prototype.isZeroArea = function() {
    return !1;
  }, A.extend = function(g) {
    var i = function(B) {
      BA(C, B);
      function C(Q) {
        var r = B.call(this, Q) || this;
        return g.init && g.init.call(r, Q), r;
      }
      return C.prototype.getDefaultStyle = function() {
        return RI(g.style);
      }, C.prototype.getDefaultShape = function() {
        return RI(g.shape);
      }, C;
    }(A);
    for (var t in g)
      typeof g[t] == "function" && (i.prototype[t] = g[t]);
    return i;
  }, A.initDefaultProps = function() {
    var g = A.prototype;
    g.type = "path", g.strokeContainThreshold = 5, g.segmentIgnoreThreshold = 0, g.subPixelOptimize = !1, g.autoBatch = !1, g.__dirty = tA | ZI | dI;
  }(), A;
}(nt);
const Zg = yE;
var vE = SI({
  x: 0,
  y: 0
}, eI), pE = {
  style: SI({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, ot.style)
};
function GE(I) {
  return !!(I && typeof I != "string" && I.width && I.height);
}
var lC = function(I) {
  BA(A, I);
  function A() {
    return I !== null && I.apply(this, arguments) || this;
  }
  return A.prototype.createStyle = function(g) {
    return jg(vE, g);
  }, A.prototype._getSize = function(g) {
    var i = this.style, t = i[g];
    if (t != null)
      return t;
    var B = GE(i.image) ? i.image : this.__image;
    if (!B)
      return 0;
    var C = g === "width" ? "height" : "width", Q = i[C];
    return Q == null ? B[g] : B[g] / B[C] * Q;
  }, A.prototype.getWidth = function() {
    return this._getSize("width");
  }, A.prototype.getHeight = function() {
    return this._getSize("height");
  }, A.prototype.getAnimationStyleProps = function() {
    return pE;
  }, A.prototype.getBoundingRect = function() {
    var g = this.style;
    return this._rect || (this._rect = new P(g.x || 0, g.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, A;
}(nt);
lC.prototype.type = "image";
const NE = lC;
function RE(I, A) {
  var g = A.x, i = A.y, t = A.width, B = A.height, C = A.r, Q, r, E, e;
  t < 0 && (g = g + t, t = -t), B < 0 && (i = i + B, B = -B), typeof C == "number" ? Q = r = E = e = C : C instanceof Array ? C.length === 1 ? Q = r = E = e = C[0] : C.length === 2 ? (Q = E = C[0], r = e = C[1]) : C.length === 3 ? (Q = C[0], r = e = C[1], E = C[2]) : (Q = C[0], r = C[1], E = C[2], e = C[3]) : Q = r = E = e = 0;
  var a;
  Q + r > t && (a = Q + r, Q *= t / a, r *= t / a), E + e > t && (a = E + e, E *= t / a, e *= t / a), r + E > B && (a = r + E, r *= B / a, E *= B / a), Q + e > B && (a = Q + e, Q *= B / a, e *= B / a), I.moveTo(g + Q, i), I.lineTo(g + t - r, i), r !== 0 && I.arc(g + t - r, i + r, r, -Math.PI / 2, 0), I.lineTo(g + t, i + B - E), E !== 0 && I.arc(g + t - E, i + B - E, E, 0, Math.PI / 2), I.lineTo(g + e, i + B), e !== 0 && I.arc(g + e, i + B - e, e, Math.PI / 2, Math.PI), I.lineTo(g, i + Q), Q !== 0 && I.arc(g + Q, i + Q, Q, Math.PI, Math.PI * 1.5);
}
var oB = Math.round;
function SE(I, A, g) {
  if (!!A) {
    var i = A.x, t = A.y, B = A.width, C = A.height;
    I.x = i, I.y = t, I.width = B, I.height = C;
    var Q = g && g.lineWidth;
    return Q && (I.x = yg(i, Q, !0), I.y = yg(t, Q, !0), I.width = Math.max(yg(i + B, Q, !1) - I.x, B === 0 ? 0 : 1), I.height = Math.max(yg(t + C, Q, !1) - I.y, C === 0 ? 0 : 1)), I;
  }
}
function yg(I, A, g) {
  if (!A)
    return I;
  var i = oB(I * 2);
  return (i + oB(A)) % 2 === 0 ? i / 2 : (i + (g ? 1 : -1)) / 2;
}
var FE = function() {
  function I() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return I;
}(), kE = {}, DC = function(I) {
  BA(A, I);
  function A(g) {
    return I.call(this, g) || this;
  }
  return A.prototype.getDefaultShape = function() {
    return new FE();
  }, A.prototype.buildPath = function(g, i) {
    var t, B, C, Q;
    if (this.subPixelOptimize) {
      var r = SE(kE, i, this.style);
      t = r.x, B = r.y, C = r.width, Q = r.height, r.r = i.r, i = r;
    } else
      t = i.x, B = i.y, C = i.width, Q = i.height;
    i.r ? RE(g, i) : g.rect(t, B, C, Q);
  }, A.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, A;
}(Zg);
DC.prototype.type = "rect";
const ME = DC;
var YE = SI({
  strokeFirst: !0,
  font: $I,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, uC), wC = function(I) {
  BA(A, I);
  function A() {
    return I !== null && I.apply(this, arguments) || this;
  }
  return A.prototype.hasStroke = function() {
    var g = this.style, i = g.stroke;
    return i != null && i !== "none" && g.lineWidth > 0;
  }, A.prototype.hasFill = function() {
    var g = this.style, i = g.fill;
    return i != null && i !== "none";
  }, A.prototype.createStyle = function(g) {
    return jg(YE, g);
  }, A.prototype.setBoundingRect = function(g) {
    this._rect = g;
  }, A.prototype.getBoundingRect = function() {
    var g = this.style;
    if (!this._rect) {
      var i = g.text;
      i != null ? i += "" : i = "";
      var t = br(i, g.font, g.textAlign, g.textBaseline);
      if (t.x += g.x || 0, t.y += g.y || 0, this.hasStroke()) {
        var B = g.lineWidth;
        t.x -= B / 2, t.y -= B / 2, t.width += B, t.height += B;
      }
      this._rect = t;
    }
    return this._rect;
  }, A.initDefaultProps = function() {
    var g = A.prototype;
    g.dirtyRectTolerance = 10;
  }(), A;
}(nt);
wC.prototype.type = "tspan";
const LE = wC;
var nB = new Et(50);
function dC(I, A, g, i, t) {
  if (I)
    if (typeof I == "string") {
      if (A && A.__zrImageSrc === I || !g)
        return A;
      var B = nB.get(I), C = { hostEl: g, cb: i, cbPayload: t };
      return B ? (A = B.image, !ht(A) && B.pending.push(C)) : (A = ig.loadImage(I, sB, sB), A.__zrImageSrc = I, nB.put(I, A.__cachedImgObj = {
        image: A,
        pending: [C]
      })), A;
    } else
      return I;
  else
    return A;
}
function sB() {
  var I = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var A = 0; A < I.pending.length; A++) {
    var g = I.pending[A], i = g.cb;
    i && i(this, g.cbPayload), g.hostEl.dirty();
  }
  I.pending.length = 0;
}
function ht(I) {
  return I && I.width && I.height;
}
var IA = [], JE = function() {
  function I() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return I;
}();
function hB(I, A, g) {
  var i = I.cpx2, t = I.cpy2;
  return i != null || t != null ? [
    (g ? Pt : W)(I.x1, I.cpx1, I.cpx2, I.x2, A),
    (g ? Pt : W)(I.y1, I.cpy1, I.cpy2, I.y2, A)
  ] : [
    (g ? Wt : z)(I.x1, I.cpx1, I.x2, A),
    (g ? Wt : z)(I.y1, I.cpy1, I.y2, A)
  ];
}
var yC = function(I) {
  BA(A, I);
  function A(g) {
    return I.call(this, g) || this;
  }
  return A.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, A.prototype.getDefaultShape = function() {
    return new JE();
  }, A.prototype.buildPath = function(g, i) {
    var t = i.x1, B = i.y1, C = i.x2, Q = i.y2, r = i.cpx1, E = i.cpy1, e = i.cpx2, a = i.cpy2, o = i.percent;
    o !== 0 && (g.moveTo(t, B), e == null || a == null ? (o < 1 && (Kg(t, r, C, o, IA), r = IA[1], C = IA[2], Kg(B, E, Q, o, IA), E = IA[1], Q = IA[2]), g.quadraticCurveTo(r, E, C, Q)) : (o < 1 && (bg(t, r, e, C, o, IA), r = IA[1], e = IA[2], C = IA[3], bg(B, E, a, Q, o, IA), E = IA[1], a = IA[2], Q = IA[3]), g.bezierCurveTo(r, E, e, a, C, Q)));
  }, A.prototype.pointAt = function(g) {
    return hB(this.shape, g, !1);
  }, A.prototype.tangentAt = function(g) {
    var i = hB(this.shape, g, !0);
    return vQ(i, i);
  }, A;
}(Zg);
yC.prototype.type = "bezier-curve";
const UE = yC;
function QI(I) {
  return isFinite(I);
}
function _E(I, A, g) {
  var i = A.x == null ? 0 : A.x, t = A.x2 == null ? 1 : A.x2, B = A.y == null ? 0 : A.y, C = A.y2 == null ? 0 : A.y2;
  A.global || (i = i * g.width + g.x, t = t * g.width + g.x, B = B * g.height + g.y, C = C * g.height + g.y), i = QI(i) ? i : 0, t = QI(t) ? t : 1, B = QI(B) ? B : 0, C = QI(C) ? C : 0;
  var Q = I.createLinearGradient(i, B, t, C);
  return Q;
}
function mE(I, A, g) {
  var i = g.width, t = g.height, B = Math.min(i, t), C = A.x == null ? 0.5 : A.x, Q = A.y == null ? 0.5 : A.y, r = A.r == null ? 0.5 : A.r;
  A.global || (C = C * i + g.x, Q = Q * t + g.y, r = r * B), C = QI(C) ? C : 0.5, Q = QI(Q) ? Q : 0.5, r = r >= 0 && QI(r) ? r : 0.5;
  var E = I.createRadialGradient(C, Q, 0, C, Q, r);
  return E;
}
function it(I, A, g) {
  for (var i = A.type === "radial" ? mE(I, A, g) : _E(I, A, g), t = A.colorStops, B = 0; B < t.length; B++)
    i.addColorStop(t[B].offset, t[B].color);
  return i;
}
function HE(I, A) {
  if (I === A || !I && !A)
    return !1;
  if (!I || !A || I.length !== A.length)
    return !0;
  for (var g = 0; g < I.length; g++)
    if (I[g] !== A[g])
      return !0;
  return !1;
}
function vg(I) {
  return parseInt(I, 10);
}
function pg(I, A, g) {
  var i = ["width", "height"][A], t = ["clientWidth", "clientHeight"][A], B = ["paddingLeft", "paddingTop"][A], C = ["paddingRight", "paddingBottom"][A];
  if (g[i] != null && g[i] !== "auto")
    return parseFloat(g[i]);
  var Q = document.defaultView.getComputedStyle(I);
  return (I[t] || vg(Q[i]) || vg(I.style[i])) - (vg(Q[B]) || 0) - (vg(Q[C]) || 0) | 0;
}
function bE(I, A) {
  return !I || I === "solid" || !(A > 0) ? null : I === "dashed" ? [4 * A, 2 * A] : I === "dotted" ? [A] : Mg(I) ? [I] : Hi(I) ? I : null;
}
function vC(I) {
  var A = I.style, g = A.lineDash && A.lineWidth > 0 && bE(A.lineDash, A.lineWidth), i = A.lineDashOffset;
  if (g) {
    var t = A.strokeNoScale && I.getLineScale ? I.getLineScale() : 1;
    t && t !== 1 && (g = Ag(g, function(B) {
      return B / t;
    }), i /= t);
  }
  return [g, i];
}
var KE = new st(!0);
function Pg(I) {
  var A = I.stroke;
  return !(A == null || A === "none" || !(I.lineWidth > 0));
}
function fB(I) {
  return typeof I == "string" && I !== "none";
}
function Wg(I) {
  var A = I.fill;
  return A != null && A !== "none";
}
function cB(I, A) {
  if (A.fillOpacity != null && A.fillOpacity !== 1) {
    var g = I.globalAlpha;
    I.globalAlpha = A.fillOpacity * A.opacity, I.fill(), I.globalAlpha = g;
  } else
    I.fill();
}
function uB(I, A) {
  if (A.strokeOpacity != null && A.strokeOpacity !== 1) {
    var g = I.globalAlpha;
    I.globalAlpha = A.strokeOpacity * A.opacity, I.stroke(), I.globalAlpha = g;
  } else
    I.stroke();
}
function tt(I, A, g) {
  var i = dC(A.image, A.__image, g);
  if (ht(i)) {
    var t = I.createPattern(i, A.repeat || "repeat");
    if (typeof DOMMatrix == "function" && t && t.setTransform) {
      var B = new DOMMatrix();
      B.translateSelf(A.x || 0, A.y || 0), B.rotateSelf(0, 0, (A.rotation || 0) * wQ), B.scaleSelf(A.scaleX || 1, A.scaleY || 1), t.setTransform(B);
    }
    return t;
  }
}
function qE(I, A, g, i) {
  var t, B = Pg(g), C = Wg(g), Q = g.strokePercent, r = Q < 1, E = !A.path;
  (!A.silent || r) && E && A.createPathProxy();
  var e = A.path || KE, a = A.__dirty;
  if (!i) {
    var o = g.fill, n = g.stroke, h = C && !!o.colorStops, l = B && !!n.colorStops, c = C && !!o.image, s = B && !!n.image, u = void 0, D = void 0, d = void 0, p = void 0, y = void 0;
    (h || l) && (y = A.getBoundingRect()), h && (u = a ? it(I, o, y) : A.__canvasFillGradient, A.__canvasFillGradient = u), l && (D = a ? it(I, n, y) : A.__canvasStrokeGradient, A.__canvasStrokeGradient = D), c && (d = a || !A.__canvasFillPattern ? tt(I, o, A) : A.__canvasFillPattern, A.__canvasFillPattern = d), s && (p = a || !A.__canvasStrokePattern ? tt(I, n, A) : A.__canvasStrokePattern, A.__canvasStrokePattern = d), h ? I.fillStyle = u : c && (d ? I.fillStyle = d : C = !1), l ? I.strokeStyle = D : s && (p ? I.strokeStyle = p : B = !1);
  }
  var N = A.getGlobalScale();
  e.setScale(N[0], N[1], A.segmentIgnoreThreshold);
  var G, S;
  I.setLineDash && g.lineDash && (t = vC(A), G = t[0], S = t[1]);
  var M = !0;
  (E || a & dI) && (e.setDPR(I.dpr), r ? e.setContext(null) : (e.setContext(I), M = !1), e.reset(), A.buildPath(e, A.shape, i), e.toStatic(), A.pathUpdated()), M && e.rebuildPath(I, r ? Q : 1), G && (I.setLineDash(G), I.lineDashOffset = S), i || (g.strokeFirst ? (B && uB(I, g), C && cB(I, g)) : (C && cB(I, g), B && uB(I, g))), G && I.setLineDash([]);
}
function TE(I, A, g) {
  var i = A.__image = dC(g.image, A.__image, A, A.onload);
  if (!(!i || !ht(i))) {
    var t = g.x || 0, B = g.y || 0, C = A.getWidth(), Q = A.getHeight(), r = i.width / i.height;
    if (C == null && Q != null ? C = Q * r : Q == null && C != null ? Q = C / r : C == null && Q == null && (C = i.width, Q = i.height), g.sWidth && g.sHeight) {
      var E = g.sx || 0, e = g.sy || 0;
      I.drawImage(i, E, e, g.sWidth, g.sHeight, t, B, C, Q);
    } else if (g.sx && g.sy) {
      var E = g.sx, e = g.sy, a = C - E, o = Q - e;
      I.drawImage(i, E, e, a, o, t, B, C, Q);
    } else
      I.drawImage(i, t, B, C, Q);
  }
}
function xE(I, A, g) {
  var i, t = g.text;
  if (t != null && (t += ""), t) {
    I.font = g.font || $I, I.textAlign = g.textAlign, I.textBaseline = g.textBaseline;
    var B = void 0, C = void 0;
    I.setLineDash && g.lineDash && (i = vC(A), B = i[0], C = i[1]), B && (I.setLineDash(B), I.lineDashOffset = C), g.strokeFirst ? (Pg(g) && I.strokeText(t, g.x, g.y), Wg(g) && I.fillText(t, g.x, g.y)) : (Wg(g) && I.fillText(t, g.x, g.y), Pg(g) && I.strokeText(t, g.x, g.y)), B && I.setLineDash([]);
  }
}
var lB = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], DB = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function pC(I, A, g, i, t) {
  var B = !1;
  if (!i && (g = g || {}, A === g))
    return !1;
  if (i || A.opacity !== g.opacity) {
    gA(I, t), B = !0;
    var C = Math.max(Math.min(A.opacity, 1), 0);
    I.globalAlpha = isNaN(C) ? eI.opacity : C;
  }
  (i || A.blend !== g.blend) && (B || (gA(I, t), B = !0), I.globalCompositeOperation = A.blend || eI.blend);
  for (var Q = 0; Q < lB.length; Q++) {
    var r = lB[Q];
    (i || A[r] !== g[r]) && (B || (gA(I, t), B = !0), I[r] = I.dpr * (A[r] || 0));
  }
  return (i || A.shadowColor !== g.shadowColor) && (B || (gA(I, t), B = !0), I.shadowColor = A.shadowColor || eI.shadowColor), B;
}
function wB(I, A, g, i, t) {
  var B = gg(A, t.inHover), C = i ? null : g && gg(g, t.inHover) || {};
  if (B === C)
    return !1;
  var Q = pC(I, B, C, i, t);
  if ((i || B.fill !== C.fill) && (Q || (gA(I, t), Q = !0), fB(B.fill) && (I.fillStyle = B.fill)), (i || B.stroke !== C.stroke) && (Q || (gA(I, t), Q = !0), fB(B.stroke) && (I.strokeStyle = B.stroke)), (i || B.opacity !== C.opacity) && (Q || (gA(I, t), Q = !0), I.globalAlpha = B.opacity == null ? 1 : B.opacity), A.hasStroke()) {
    var r = B.lineWidth, E = r / (B.strokeNoScale && A.getLineScale ? A.getLineScale() : 1);
    I.lineWidth !== E && (Q || (gA(I, t), Q = !0), I.lineWidth = E);
  }
  for (var e = 0; e < DB.length; e++) {
    var a = DB[e], o = a[0];
    (i || B[o] !== C[o]) && (Q || (gA(I, t), Q = !0), I[o] = B[o] || a[1]);
  }
  return Q;
}
function ZE(I, A, g, i, t) {
  return pC(I, gg(A, t.inHover), g && gg(g, t.inHover), i, t);
}
function GC(I, A) {
  var g = A.transform, i = I.dpr || 1;
  g ? I.setTransform(i * g[0], i * g[1], i * g[2], i * g[3], i * g[4], i * g[5]) : I.setTransform(i, 0, 0, i, 0, 0);
}
function PE(I, A, g) {
  for (var i = !1, t = 0; t < I.length; t++) {
    var B = I[t];
    i = i || B.isZeroArea(), GC(A, B), A.beginPath(), B.buildPath(A, B.shape), A.clip();
  }
  g.allClipped = i;
}
function WE(I, A) {
  return I && A ? I[0] !== A[0] || I[1] !== A[1] || I[2] !== A[2] || I[3] !== A[3] || I[4] !== A[4] || I[5] !== A[5] : !(!I && !A);
}
var dB = 1, yB = 2, vB = 3, pB = 4;
function XE(I) {
  var A = Wg(I), g = Pg(I);
  return !(I.lineDash || !(+A ^ +g) || A && typeof I.fill != "string" || g && typeof I.stroke != "string" || I.strokePercent < 1 || I.strokeOpacity < 1 || I.fillOpacity < 1);
}
function gA(I, A) {
  A.batchFill && I.fill(), A.batchStroke && I.stroke(), A.batchFill = "", A.batchStroke = "";
}
function gg(I, A) {
  return A && I.__hoverStyle || I.style;
}
function zE(I, A) {
  rI(I, A, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function rI(I, A, g, i) {
  var t = A.transform;
  if (!A.shouldBePainted(g.viewWidth, g.viewHeight, !1, !1)) {
    A.__dirty &= ~tA, A.__isRendered = !1;
    return;
  }
  var B = A.__clipPaths, C = g.prevElClipPaths, Q = !1, r = !1;
  if ((!C || HE(B, C)) && (C && C.length && (gA(I, g), I.restore(), r = Q = !0, g.prevElClipPaths = null, g.allClipped = !1, g.prevEl = null), B && B.length && (gA(I, g), I.save(), PE(B, I, g), Q = !0), g.prevElClipPaths = B), g.allClipped) {
    A.__isRendered = !1;
    return;
  }
  A.beforeBrush && A.beforeBrush(), A.innerBeforeBrush();
  var E = g.prevEl;
  E || (r = Q = !0);
  var e = A instanceof Zg && A.autoBatch && XE(A.style);
  Q || WE(t, E.transform) ? (gA(I, g), GC(I, A)) : e || gA(I, g);
  var a = gg(A, g.inHover);
  A instanceof Zg ? (g.lastDrawType !== dB && (r = !0, g.lastDrawType = dB), wB(I, A, E, r, g), (!e || !g.batchFill && !g.batchStroke) && I.beginPath(), qE(I, A, a, e), e && (g.batchFill = a.fill || "", g.batchStroke = a.stroke || "")) : A instanceof LE ? (g.lastDrawType !== vB && (r = !0, g.lastDrawType = vB), wB(I, A, E, r, g), xE(I, A, a)) : A instanceof NE ? (g.lastDrawType !== yB && (r = !0, g.lastDrawType = yB), ZE(I, A, E, r, g), TE(I, A, a)) : A.getTemporalDisplayables && (g.lastDrawType !== pB && (r = !0, g.lastDrawType = pB), VE(I, A, g)), e && i && gA(I, g), A.innerAfterBrush(), A.afterBrush && A.afterBrush(), g.prevEl = A, A.__dirty = 0, A.__isRendered = !0;
}
function VE(I, A, g) {
  var i = A.getDisplayables(), t = A.getTemporalDisplayables();
  I.save();
  var B = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: g.viewWidth,
    viewHeight: g.viewHeight,
    inHover: g.inHover
  }, C, Q;
  for (C = A.getCursor(), Q = i.length; C < Q; C++) {
    var r = i[C];
    r.beforeBrush && r.beforeBrush(), r.innerBeforeBrush(), rI(I, r, B, C === Q - 1), r.innerAfterBrush(), r.afterBrush && r.afterBrush(), B.prevEl = r;
  }
  for (var E = 0, e = t.length; E < e; E++) {
    var r = t[E];
    r.beforeBrush && r.beforeBrush(), r.innerBeforeBrush(), rI(I, r, B, E === e - 1), r.innerAfterBrush(), r.afterBrush && r.afterBrush(), B.prevEl = r;
  }
  A.clearTemporalDisplayables(), A.notClear = !0, I.restore();
}
function GB(I, A, g) {
  var i = ig.createCanvas(), t = A.getWidth(), B = A.getHeight(), C = i.style;
  return C && (C.position = "absolute", C.left = "0", C.top = "0", C.width = t + "px", C.height = B + "px", i.setAttribute("data-zr-dom-id", I)), i.width = t * g, i.height = B * g, i;
}
var OE = function(I) {
  BA(A, I);
  function A(g, i, t) {
    var B = I.call(this) || this;
    B.motionBlur = !1, B.lastFrameAlpha = 0.7, B.dpr = 1, B.virtual = !1, B.config = {}, B.incremental = !1, B.zlevel = 0, B.maxRepaintRectCount = 5, B.__dirty = !0, B.__firstTimePaint = !0, B.__used = !1, B.__drawIndex = 0, B.__startIndex = 0, B.__endIndex = 0, B.__prevStartIndex = null, B.__prevEndIndex = null;
    var C;
    t = t || Tg, typeof g == "string" ? C = GB(g, i, t) : HA(g) && (C = g, g = C.id), B.id = g, B.dom = C;
    var Q = C.style;
    return Q && (TB(C), C.onselectstart = function() {
      return !1;
    }, Q.padding = "0", Q.margin = "0", Q.borderWidth = "0"), B.painter = i, B.dpr = t, B;
  }
  return A.prototype.getElementCount = function() {
    return this.__endIndex - this.__startIndex;
  }, A.prototype.afterBrush = function() {
    this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
  }, A.prototype.initContext = function() {
    this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
  }, A.prototype.setUnpainted = function() {
    this.__firstTimePaint = !0;
  }, A.prototype.createBackBuffer = function() {
    var g = this.dpr;
    this.domBack = GB("back-" + this.id, this.painter, g), this.ctxBack = this.domBack.getContext("2d"), g !== 1 && this.ctxBack.scale(g, g);
  }, A.prototype.createRepaintRects = function(g, i, t, B) {
    if (this.__firstTimePaint)
      return this.__firstTimePaint = !1, null;
    var C = [], Q = this.maxRepaintRectCount, r = !1, E = new P(0, 0, 0, 0);
    function e(u) {
      if (!(!u.isFinite() || u.isZero()))
        if (C.length === 0) {
          var D = new P(0, 0, 0, 0);
          D.copy(u), C.push(D);
        } else {
          for (var d = !1, p = 1 / 0, y = 0, N = 0; N < C.length; ++N) {
            var G = C[N];
            if (G.intersect(u)) {
              var S = new P(0, 0, 0, 0);
              S.copy(G), S.union(u), C[N] = S, d = !0;
              break;
            } else if (r) {
              E.copy(u), E.union(G);
              var M = u.width * u.height, F = G.width * G.height, L = E.width * E.height, K = L - M - F;
              K < p && (p = K, y = N);
            }
          }
          if (r && (C[y].union(u), d = !0), !d) {
            var D = new P(0, 0, 0, 0);
            D.copy(u), C.push(D);
          }
          r || (r = C.length >= Q);
        }
    }
    for (var a = this.__startIndex; a < this.__endIndex; ++a) {
      var o = g[a];
      if (o) {
        var n = o.shouldBePainted(t, B, !0, !0), h = o.__isRendered && (o.__dirty & tA || !n) ? o.getPrevPaintRect() : null;
        h && e(h);
        var l = n && (o.__dirty & tA || !o.__isRendered) ? o.getPaintRect() : null;
        l && e(l);
      }
    }
    for (var a = this.__prevStartIndex; a < this.__prevEndIndex; ++a) {
      var o = i[a], n = o.shouldBePainted(t, B, !0, !0);
      if (o && (!n || !o.__zr) && o.__isRendered) {
        var h = o.getPrevPaintRect();
        h && e(h);
      }
    }
    var c;
    do {
      c = !1;
      for (var a = 0; a < C.length; ) {
        if (C[a].isZero()) {
          C.splice(a, 1);
          continue;
        }
        for (var s = a + 1; s < C.length; )
          C[a].intersect(C[s]) ? (c = !0, C[a].union(C[s]), C.splice(s, 1)) : s++;
        a++;
      }
    } while (c);
    return this._paintRects = C, C;
  }, A.prototype.debugGetPaintRects = function() {
    return (this._paintRects || []).slice();
  }, A.prototype.resize = function(g, i) {
    var t = this.dpr, B = this.dom, C = B.style, Q = this.domBack;
    C && (C.width = g + "px", C.height = i + "px"), B.width = g * t, B.height = i * t, Q && (Q.width = g * t, Q.height = i * t, t !== 1 && this.ctxBack.scale(t, t));
  }, A.prototype.clear = function(g, i, t) {
    var B = this.dom, C = this.ctx, Q = B.width, r = B.height;
    i = i || this.clearColor;
    var E = this.motionBlur && !g, e = this.lastFrameAlpha, a = this.dpr, o = this;
    E && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(B, 0, 0, Q / a, r / a));
    var n = this.domBack;
    function h(l, c, s, u) {
      if (C.clearRect(l, c, s, u), i && i !== "transparent") {
        var D = void 0;
        Qt(i) ? (D = i.__canvasGradient || it(C, i, {
          x: 0,
          y: 0,
          width: s,
          height: u
        }), i.__canvasGradient = D) : cQ(i) && (i.scaleX = i.scaleX || a, i.scaleY = i.scaleY || a, D = tt(C, i, {
          dirty: function() {
            o.setUnpainted(), o.__painter.refresh();
          }
        })), C.save(), C.fillStyle = D || i, C.fillRect(l, c, s, u), C.restore();
      }
      E && (C.save(), C.globalAlpha = e, C.drawImage(n, l, c, s, u), C.restore());
    }
    !t || E ? h(0, 0, Q, r) : t.length && hA(t, function(l) {
      h(l.x * a, l.y * a, l.width * a, l.height * a);
    });
  }, A;
}(kI);
const Li = OE;
var NB = 1e5, BI = 314159, Gg = 0.01, jE = 1e-3;
function $E(I) {
  return I ? I.__builtin__ ? !0 : !(typeof I.resize != "function" || typeof I.refresh != "function") : !1;
}
function Ae(I, A) {
  var g = document.createElement("div");
  return g.style.cssText = [
    "position:relative",
    "width:" + I + "px",
    "height:" + A + "px",
    "padding:0",
    "margin:0",
    "border-width:0"
  ].join(";") + ";", g;
}
var Ie = function() {
  function I(A, g, i, t) {
    this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
    var B = !A.nodeName || A.nodeName.toUpperCase() === "CANVAS";
    this._opts = i = x({}, i || {}), this.dpr = i.devicePixelRatio || Tg, this._singleCanvas = B, this.root = A;
    var C = A.style;
    C && (TB(A), A.innerHTML = ""), this.storage = g;
    var Q = this._zlevelList;
    this._prevDisplayList = [];
    var r = this._layers;
    if (B) {
      var e = A, a = e.width, o = e.height;
      i.width != null && (a = i.width), i.height != null && (o = i.height), this.dpr = i.devicePixelRatio || 1, e.width = a * this.dpr, e.height = o * this.dpr, this._width = a, this._height = o;
      var n = new Li(e, this, this.dpr);
      n.__builtin__ = !0, n.initContext(), r[BI] = n, n.zlevel = BI, Q.push(BI), this._domRoot = A;
    } else {
      this._width = pg(A, 0, i), this._height = pg(A, 1, i);
      var E = this._domRoot = Ae(this._width, this._height);
      A.appendChild(E);
    }
  }
  return I.prototype.getType = function() {
    return "canvas";
  }, I.prototype.isSingleCanvas = function() {
    return this._singleCanvas;
  }, I.prototype.getViewportRoot = function() {
    return this._domRoot;
  }, I.prototype.getViewportRootOffset = function() {
    var A = this.getViewportRoot();
    if (A)
      return {
        offsetLeft: A.offsetLeft || 0,
        offsetTop: A.offsetTop || 0
      };
  }, I.prototype.refresh = function(A) {
    var g = this.storage.getDisplayList(!0), i = this._prevDisplayList, t = this._zlevelList;
    this._redrawId = Math.random(), this._paintList(g, i, A, this._redrawId);
    for (var B = 0; B < t.length; B++) {
      var C = t[B], Q = this._layers[C];
      if (!Q.__builtin__ && Q.refresh) {
        var r = B === 0 ? this._backgroundColor : null;
        Q.refresh(r);
      }
    }
    return this._opts.useDirtyRect && (this._prevDisplayList = g.slice()), this;
  }, I.prototype.refreshHover = function() {
    this._paintHoverList(this.storage.getDisplayList(!1));
  }, I.prototype._paintHoverList = function(A) {
    var g = A.length, i = this._hoverlayer;
    if (i && i.clear(), !!g) {
      for (var t = {
        inHover: !0,
        viewWidth: this._width,
        viewHeight: this._height
      }, B, C = 0; C < g; C++) {
        var Q = A[C];
        Q.__inHover && (i || (i = this._hoverlayer = this.getLayer(NB)), B || (B = i.ctx, B.save()), rI(B, Q, t, C === g - 1));
      }
      B && B.restore();
    }
  }, I.prototype.getHoverLayer = function() {
    return this.getLayer(NB);
  }, I.prototype.paintOne = function(A, g) {
    zE(A, g);
  }, I.prototype._paintList = function(A, g, i, t) {
    if (this._redrawId === t) {
      i = i || !1, this._updateLayerStatus(A);
      var B = this._doPaintList(A, g, i), C = B.finished, Q = B.needsRefreshHover;
      if (this._needsManuallyCompositing && this._compositeManually(), Q && this._paintHoverList(A), C)
        this.eachLayer(function(E) {
          E.afterBrush && E.afterBrush();
        });
      else {
        var r = this;
        Zi(function() {
          r._paintList(A, g, i, t);
        });
      }
    }
  }, I.prototype._compositeManually = function() {
    var A = this.getLayer(BI).ctx, g = this._domRoot.width, i = this._domRoot.height;
    A.clearRect(0, 0, g, i), this.eachBuiltinLayer(function(t) {
      t.virtual && A.drawImage(t.dom, 0, 0, g, i);
    });
  }, I.prototype._doPaintList = function(A, g, i) {
    for (var t = this, B = [], C = this._opts.useDirtyRect, Q = 0; Q < this._zlevelList.length; Q++) {
      var r = this._zlevelList[Q], E = this._layers[r];
      E.__builtin__ && E !== this._hoverlayer && (E.__dirty || i) && B.push(E);
    }
    for (var e = !0, a = !1, o = function(l) {
      var c = B[l], s = c.ctx, u = C && c.createRepaintRects(A, g, n._width, n._height), D = i ? c.__startIndex : c.__drawIndex, d = !i && c.incremental && Date.now, p = d && Date.now(), y = c.zlevel === n._zlevelList[0] ? n._backgroundColor : null;
      if (c.__startIndex === c.__endIndex)
        c.clear(!1, y, u);
      else if (D === c.__startIndex) {
        var N = A[D];
        (!N.incremental || !N.notClear || i) && c.clear(!1, y, u);
      }
      D === -1 && (console.error("For some unknown reason. drawIndex is -1"), D = c.__startIndex);
      var G, S = function(K) {
        var Z = {
          inHover: !1,
          allClipped: !1,
          prevEl: null,
          viewWidth: t._width,
          viewHeight: t._height
        };
        for (G = D; G < c.__endIndex; G++) {
          var X = A[G];
          if (X.__inHover && (a = !0), t._doPaintEl(X, c, C, K, Z, G === c.__endIndex - 1), d) {
            var iA = Date.now() - p;
            if (iA > 15)
              break;
          }
        }
        Z.prevElClipPaths && s.restore();
      };
      if (u)
        if (u.length === 0)
          G = c.__endIndex;
        else
          for (var M = n.dpr, F = 0; F < u.length; ++F) {
            var L = u[F];
            s.save(), s.beginPath(), s.rect(L.x * M, L.y * M, L.width * M, L.height * M), s.clip(), S(L), s.restore();
          }
      else
        s.save(), S(), s.restore();
      c.__drawIndex = G, c.__drawIndex < c.__endIndex && (e = !1);
    }, n = this, h = 0; h < B.length; h++)
      o(h);
    return V.wxa && hA(this._layers, function(l) {
      l && l.ctx && l.ctx.draw && l.ctx.draw();
    }), {
      finished: e,
      needsRefreshHover: a
    };
  }, I.prototype._doPaintEl = function(A, g, i, t, B, C) {
    var Q = g.ctx;
    if (i) {
      var r = A.getPaintRect();
      (!t || r && r.intersect(t)) && (rI(Q, A, B, C), A.setPrevPaintRect(r));
    } else
      rI(Q, A, B, C);
  }, I.prototype.getLayer = function(A, g) {
    this._singleCanvas && !this._needsManuallyCompositing && (A = BI);
    var i = this._layers[A];
    return i || (i = new Li("zr_" + A, this, this.dpr), i.zlevel = A, i.__builtin__ = !0, this._layerConfig[A] ? xI(i, this._layerConfig[A], !0) : this._layerConfig[A - Gg] && xI(i, this._layerConfig[A - Gg], !0), g && (i.virtual = g), this.insertLayer(A, i), i.initContext()), i;
  }, I.prototype.insertLayer = function(A, g) {
    var i = this._layers, t = this._zlevelList, B = t.length, C = this._domRoot, Q = null, r = -1;
    if (i[A]) {
      process.env.NODE_ENV !== "production" && EI("ZLevel " + A + " has been used already");
      return;
    }
    if (!$E(g)) {
      process.env.NODE_ENV !== "production" && EI("Layer of zlevel " + A + " is not valid");
      return;
    }
    if (B > 0 && A > t[0]) {
      for (r = 0; r < B - 1 && !(t[r] < A && t[r + 1] > A); r++)
        ;
      Q = i[t[r]];
    }
    if (t.splice(r + 1, 0, A), i[A] = g, !g.virtual)
      if (Q) {
        var E = Q.dom;
        E.nextSibling ? C.insertBefore(g.dom, E.nextSibling) : C.appendChild(g.dom);
      } else
        C.firstChild ? C.insertBefore(g.dom, C.firstChild) : C.appendChild(g.dom);
    g.__painter = this;
  }, I.prototype.eachLayer = function(A, g) {
    for (var i = this._zlevelList, t = 0; t < i.length; t++) {
      var B = i[t];
      A.call(g, this._layers[B], B);
    }
  }, I.prototype.eachBuiltinLayer = function(A, g) {
    for (var i = this._zlevelList, t = 0; t < i.length; t++) {
      var B = i[t], C = this._layers[B];
      C.__builtin__ && A.call(g, C, B);
    }
  }, I.prototype.eachOtherLayer = function(A, g) {
    for (var i = this._zlevelList, t = 0; t < i.length; t++) {
      var B = i[t], C = this._layers[B];
      C.__builtin__ || A.call(g, C, B);
    }
  }, I.prototype.getLayers = function() {
    return this._layers;
  }, I.prototype._updateLayerStatus = function(A) {
    this.eachBuiltinLayer(function(a, o) {
      a.__dirty = a.__used = !1;
    });
    function g(a) {
      B && (B.__endIndex !== a && (B.__dirty = !0), B.__endIndex = a);
    }
    if (this._singleCanvas)
      for (var i = 1; i < A.length; i++) {
        var t = A[i];
        if (t.zlevel !== A[i - 1].zlevel || t.incremental) {
          this._needsManuallyCompositing = !0;
          break;
        }
      }
    var B = null, C = 0, Q, r;
    for (r = 0; r < A.length; r++) {
      var t = A[r], E = t.zlevel, e = void 0;
      Q !== E && (Q = E, C = 0), t.incremental ? (e = this.getLayer(E + jE, this._needsManuallyCompositing), e.incremental = !0, C = 1) : e = this.getLayer(E + (C > 0 ? Gg : 0), this._needsManuallyCompositing), e.__builtin__ || EI("ZLevel " + E + " has been used by unkown layer " + e.id), e !== B && (e.__used = !0, e.__startIndex !== r && (e.__dirty = !0), e.__startIndex = r, e.incremental ? e.__drawIndex = -1 : e.__drawIndex = r, g(r), B = e), t.__dirty & tA && !t.__inHover && (e.__dirty = !0, e.incremental && e.__drawIndex < 0 && (e.__drawIndex = r));
    }
    g(r), this.eachBuiltinLayer(function(a, o) {
      !a.__used && a.getElementCount() > 0 && (a.__dirty = !0, a.__startIndex = a.__endIndex = a.__drawIndex = 0), a.__dirty && a.__drawIndex < 0 && (a.__drawIndex = a.__startIndex);
    });
  }, I.prototype.clear = function() {
    return this.eachBuiltinLayer(this._clearLayer), this;
  }, I.prototype._clearLayer = function(A) {
    A.clear();
  }, I.prototype.setBackgroundColor = function(A) {
    this._backgroundColor = A, hA(this._layers, function(g) {
      g.setUnpainted();
    });
  }, I.prototype.configLayer = function(A, g) {
    if (g) {
      var i = this._layerConfig;
      i[A] ? xI(i[A], g, !0) : i[A] = g;
      for (var t = 0; t < this._zlevelList.length; t++) {
        var B = this._zlevelList[t];
        if (B === A || B === A + Gg) {
          var C = this._layers[B];
          xI(C, i[A], !0);
        }
      }
    }
  }, I.prototype.delLayer = function(A) {
    var g = this._layers, i = this._zlevelList, t = g[A];
    !t || (t.dom.parentNode.removeChild(t.dom), delete g[A], i.splice(wA(i, A), 1));
  }, I.prototype.resize = function(A, g) {
    if (this._domRoot.style) {
      var i = this._domRoot;
      i.style.display = "none";
      var t = this._opts, B = this.root;
      if (A != null && (t.width = A), g != null && (t.height = g), A = pg(B, 0, t), g = pg(B, 1, t), i.style.display = "", this._width !== A || g !== this._height) {
        i.style.width = A + "px", i.style.height = g + "px";
        for (var C in this._layers)
          this._layers.hasOwnProperty(C) && this._layers[C].resize(A, g);
        this.refresh(!0);
      }
      this._width = A, this._height = g;
    } else {
      if (A == null || g == null)
        return;
      this._width = A, this._height = g, this.getLayer(BI).resize(A, g);
    }
    return this;
  }, I.prototype.clearLayer = function(A) {
    var g = this._layers[A];
    g && g.clear();
  }, I.prototype.dispose = function() {
    this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
  }, I.prototype.getRenderedCanvas = function(A) {
    if (A = A || {}, this._singleCanvas && !this._compositeManually)
      return this._layers[BI].dom;
    var g = new Li("image", this, A.pixelRatio || this.dpr);
    g.initContext(), g.clear(!1, A.backgroundColor || this._backgroundColor);
    var i = g.ctx;
    if (A.pixelRatio <= this.dpr) {
      this.refresh();
      var t = g.dom.width, B = g.dom.height;
      this.eachLayer(function(a) {
        a.__builtin__ ? i.drawImage(a.dom, 0, 0, t, B) : a.renderToCanvas && (i.save(), a.renderToCanvas(i), i.restore());
      });
    } else
      for (var C = {
        inHover: !1,
        viewWidth: this._width,
        viewHeight: this._height
      }, Q = this.storage.getDisplayList(!0), r = 0, E = Q.length; r < E; r++) {
        var e = Q[r];
        rI(i, e, C, r === E - 1);
      }
    return g.dom;
  }, I.prototype.getWidth = function() {
    return this._width;
  }, I.prototype.getHeight = function() {
    return this._height;
  }, I;
}();
const ge = Ie;
function ie(I) {
  for (; I.length; ) {
    const A = I.pop();
    A && A.dispose();
  }
}
class NC {
  constructor() {
    AA(this, "_isDisposed", !1);
    AA(this, "_disposables", []);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = !0, ie(this._disposables));
  }
  _register(A) {
    return this._isDisposed ? A.dispose() : this._disposables.push(A), A;
  }
  get isDisposed() {
    return this._isDisposed;
  }
}
function qA(I, A, g = 0) {
  A(I, g);
  for (const i of I.children)
    qA(i, A, g + 1);
}
function te() {
  return Math.random() * 2147483647 | 0;
}
function Xg() {
  let I = 1, A = 1;
  return Math.random() < 0.1 ? I = 50 * Math.random() + 50 | 0 : I = 10 * Math.random() + 10 | 0, Math.random() < 0.1 ? A = 50 * Math.random() + 50 | 0 : A = 10 * Math.random() + 10 | 0, Math.random() < 0.03 && (I = A = 50 * Math.random() + 50 | 0), {
    id: te(),
    height: A,
    width: I,
    x: 0,
    y: 0,
    children: []
  };
}
function we(I) {
  const A = Xg(), g = [A];
  for (let i = 0; i < I; i++) {
    let t = 0;
    t = g.length * Math.random() | 0;
    const B = g[t], C = Xg();
    B.children.push(C), C.parentId = B.id, g.push(C);
  }
  return A;
}
function de(I, A) {
  for (; A > 0 && I.children.length > 0; ) {
    let g = [];
    qA(I, (i, t) => {
      if (A !== 0)
        for (let B = 0; B < i.children.length; B++)
          g.push({
            node: i.children[B],
            parent: i,
            depth: t + 1
          });
    }), g.sort((i, t) => i.depth - t.depth), g = g.slice(-A);
    for (const { parent: i, node: t } of g)
      if (i.children.splice(i.children.indexOf(t), 1), A -= Be(t), A <= 0)
        break;
  }
}
function ye(I, A = 1) {
  let g = [];
  qA(I, (t, B) => {
    g.push([t, B]);
  });
  function i() {
    g.sort((t, B) => Math.random() * 2 - 1), g.sort((t, B) => -t[1] + B[1]), g = g.filter(([t, B]) => t.children.length < 4), g = g.slice(0, 20).concat(g.filter(([t, B]) => B < 2));
  }
  i();
  for (let t = 0; t < A; t++) {
    const [B, C] = g[Math.random() * g.length | 0], Q = Xg();
    Q.parentId = B.id, B.children.push(Q), g.push([Q, C + 1]), g.length % 40 === 0 && i();
  }
}
function ve(I, A = 1) {
  const g = [];
  qA(I, (i, t) => {
    g.push([i, t]);
  });
  for (let i = 0; i < A; i++) {
    const [t, B] = g[Math.random() * g.length | 0], C = Xg();
    C.parentId = t.id, t.children.push(C), g.push([C, B + 1]);
  }
}
function pe(I, A, g = []) {
  return {
    x: 0,
    y: 0,
    width: I,
    height: A,
    children: g
  };
}
function Be(I) {
  let A = 0;
  return qA(I, () => A++), A;
}
gE("canvas", ge);
class Ce extends NC {
  constructor(g, i = {}) {
    var t, B, C, Q, r, E;
    super();
    AA(this, "render");
    AA(this, "root");
    AA(this, "group");
    AA(this, "nodeMap", /* @__PURE__ */ new Map());
    AA(this, "rectMap", /* @__PURE__ */ new Map());
    AA(this, "lineSourceMap", /* @__PURE__ */ new Map());
    AA(this, "lineTargetMap", /* @__PURE__ */ new Map());
    this.theme = i, this.render = AE(g), this._register({
      dispose: () => {
        IE(this.render);
      }
    }), i.dark ? (i.blockColor = (t = i.blockColor) != null ? t : "#4a4bd2", i.lineColor = (B = i.lineColor) != null ? B : "#eee", i.borderColor = (C = i.borderColor) != null ? C : "#eee") : (i.blockColor = (Q = i.blockColor) != null ? Q : "#5d72b1", i.lineColor = (r = i.lineColor) != null ? r : "#a8bbf0", i.borderColor = (E = i.borderColor) != null ? E : "#5d72b1");
  }
  init(g) {
    this.root = g;
    const i = new hC();
    this.group = i, this.render.add(i), i.setPosition([this.render.getWidth() / 2, 12]), qA(g, (t) => {
      this.addNode(t, i);
    }), this.rescale();
  }
  clear() {
    this.render.clear(), this.group && (this.group.removeAll(), this.render.remove(this.group)), this.nodeMap.clear(), this.rectMap.clear();
  }
  rescale() {
    if (!this.root || !this.group)
      return;
    const g = this.group, i = g.getBoundingRect(), t = this.render.getWidth(), B = this.render.getHeight(), C = Math.min(
      Math.abs(t / -i.x / 2),
      Math.abs(t / (i.width + i.x) / 2),
      t / (i.width + 20),
      B / (i.height + 50),
      5
    );
    g.animateTo({ scaleX: C, scaleY: C });
  }
  addNode(g, i, t = !1) {
    const B = new ME({
      shape: {
        x: g.x - g.width / 2,
        y: g.y,
        width: g.width,
        height: g.height,
        r: 4
      },
      style: {
        stroke: this.theme.borderColor,
        fill: this.theme.blockColor
      }
    });
    this.rectMap.set(g.id, B), this.nodeMap.set(g.id, g), i.add(B);
    for (const C of g.children)
      this.addLine(g, C, i);
    t && g.parentId && this.addLine(this.nodeMap.get(g.parentId), g, i);
  }
  addLine(g, i, t) {
    const B = new UE({
      shape: Ji(g, i),
      style: {
        stroke: this.theme.lineColor
      }
    });
    t.add(B), Ng(this.lineSourceMap, g.id, []).push({ line: B, id: i.id }), Ng(this.lineTargetMap, i.id, []).push({ line: B, id: g.id });
  }
  update() {
    var t, B;
    if (!this.root || !this.group)
      return;
    const g = this.group, i = new Set(this.rectMap.keys());
    qA(this.root, (C) => {
      if (i.delete(C.id), !this.rectMap.has(C.id)) {
        this.addNode(C, g, !0);
        return;
      }
      const Q = this.rectMap.get(C.id);
      if (RB(Q.x, C.x - C.width / 2) && RB(Q.y, C.y))
        return;
      Q.animateTo({ shape: { x: C.x - C.width / 2, y: C.y } });
      const r = Ng(this.lineSourceMap, C.id, []);
      for (const { id: e, line: a } of r) {
        const o = this.nodeMap.get(e);
        a.animateTo({
          shape: Ji(C, o)
        });
      }
      const E = Ng(this.lineTargetMap, C.id, []);
      for (const { id: e, line: a } of E) {
        const o = C, n = this.nodeMap.get(e);
        a.animateTo({
          shape: Ji(n, o)
        });
      }
    });
    for (const C of i) {
      const Q = this.rectMap.get(C);
      this.group.remove(Q), this.rectMap.delete(C);
      const r = ((t = this.lineSourceMap.get(C)) != null ? t : []).concat(
        (B = this.lineTargetMap.get(C)) != null ? B : []
      );
      for (const E of r)
        this.group.remove(E.line);
      this.lineSourceMap.delete(C), this.lineTargetMap.delete(C);
    }
    for (let C = 0; C <= 1e3; C += 500)
      setTimeout(() => {
        this.rescale();
      }, C);
  }
}
function Ji(I, A) {
  return {
    x1: I.x,
    y1: I.y + I.height,
    x2: A.x,
    y2: A.y,
    cpx1: I.x,
    cpy1: (A.y + I.y + I.height) / 2,
    cpx2: A.x,
    cpy2: (A.y + I.y + I.height) / 2
  };
}
function RB(I, A) {
  return Math.abs(I - A) < 1e-6;
}
function Ng(I, A, g) {
  return I.has(A) ? I.get(A) : (I.set(A, g), g);
}
let U;
const kA = new Array(32).fill(void 0);
kA.push(void 0, null, !0, !1);
function H(I) {
  return kA[I];
}
let jI = kA.length;
function Qe(I) {
  I < 36 || (kA[I] = jI, jI = I);
}
function re(I) {
  const A = H(I);
  return Qe(I), A;
}
function T(I) {
  jI === kA.length && kA.push(kA.length + 1);
  const A = jI;
  return jI = kA[A], kA[A] = I, A;
}
const RC = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
RC.decode();
let Rg = null;
function SC() {
  return (Rg === null || Rg.buffer !== U.memory.buffer) && (Rg = new Uint8Array(U.memory.buffer)), Rg;
}
function Ui(I, A) {
  return RC.decode(SC().subarray(I, I + A));
}
let Sg = null;
function Ee() {
  return (Sg === null || Sg.buffer !== U.memory.buffer) && (Sg = new Uint32Array(U.memory.buffer)), Sg;
}
let vI = 0;
function SB(I, A) {
  const g = A(I.length * 4);
  return Ee().set(I, g / 4), vI = I.length, g;
}
let Fg = null;
function FC() {
  return (Fg === null || Fg.buffer !== U.memory.buffer) && (Fg = new Float64Array(U.memory.buffer)), Fg;
}
function FB(I, A) {
  const g = A(I.length * 8);
  return FC().set(I, g / 8), vI = I.length, g;
}
let kg = null;
function kB() {
  return (kg === null || kg.buffer !== U.memory.buffer) && (kg = new Int32Array(U.memory.buffer)), kg;
}
function ee(I, A) {
  return FC().subarray(I / 8, I / 8 + A);
}
function _A(I, A) {
  try {
    return I.apply(this, A);
  } catch (g) {
    U.__wbindgen_exn_store(T(g));
  }
}
function ae(I, A) {
  return SC().subarray(I / 1, I / 1 + A);
}
const MA = Object.freeze({ Basic: 0, 0: "Basic", Tidy: 1, 1: "Tidy", LayeredTidy: 2, 2: "LayeredTidy" });
class YA {
  static __wrap(A) {
    const g = Object.create(YA.prototype);
    return g.ptr = A, g;
  }
  __destroy_into_raw() {
    const A = this.ptr;
    return this.ptr = 0, A;
  }
  free() {
    const A = this.__destroy_into_raw();
    U.__wbg_tidy_free(A);
  }
  static null_id() {
    return U.tidy_null_id() >>> 0;
  }
  static with_basic_layout(A, g) {
    const i = U.tidy_with_basic_layout(A, g);
    return YA.__wrap(i);
  }
  static with_tidy_layout(A, g) {
    const i = U.tidy_with_tidy_layout(A, g);
    return YA.__wrap(i);
  }
  static with_layered_tidy(A, g) {
    const i = U.tidy_with_layered_tidy(A, g);
    return YA.__wrap(i);
  }
  change_layout(A) {
    U.tidy_change_layout(this.ptr, A);
  }
  remove_node(A) {
    U.tidy_remove_node(this.ptr, A);
  }
  is_empty() {
    return U.tidy_is_empty(this.ptr) !== 0;
  }
  add_node(A, g, i, t) {
    U.tidy_add_node(this.ptr, A, g, i, t);
  }
  data(A, g, i, t) {
    const B = SB(A, U.__wbindgen_malloc), C = vI, Q = FB(g, U.__wbindgen_malloc), r = vI, E = FB(i, U.__wbindgen_malloc), e = vI, a = SB(t, U.__wbindgen_malloc), o = vI;
    U.tidy_data(this.ptr, B, C, Q, r, E, e, a, o);
  }
  layout() {
    U.tidy_layout(this.ptr);
  }
  get_pos() {
    try {
      const t = U.__wbindgen_add_to_stack_pointer(-16);
      U.tidy_get_pos(t, this.ptr);
      var A = kB()[t / 4 + 0], g = kB()[t / 4 + 1], i = ee(A, g).slice();
      return U.__wbindgen_free(A, g * 8), i;
    } finally {
      U.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
async function oe(I, A) {
  if (typeof Response == "function" && I instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(I, A);
      } catch (i) {
        if (I.headers.get("Content-Type") != "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", i);
        else
          throw i;
      }
    const g = await I.arrayBuffer();
    return await WebAssembly.instantiate(g, A);
  } else {
    const g = await WebAssembly.instantiate(I, A);
    return g instanceof WebAssembly.Instance ? { instance: g, module: I } : g;
  }
}
async function kC(I) {
  typeof I > "u" && (I = new URL("data:application/wasm;base64,AGFzbQEAAAAB1QEeYAJ/fwF/YAN/f38Bf2ACf38AYAF/AX9gAX8AYAN/f38AYAABf2AEf39/fwBgBX9/f39/AGAAAGABfwF8YAF/AX5gBn9/f39/fwBgAnx8AX9gBX9/f39/AX9gBX9/fHx/AGAGf39/f39/AX9gBH9/f38Bf2AFf3x/f38AYAl/f39/f39+fn4AYAd/f39/f39/AX9gA35/fwF/YAN/fH8AYAJ/fABgCX9/f39/f39/fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgAnx8AXwC6wccA3diZx5fX3diZ19wcm9jZXNzXzcwMjUxZWQxMjkxNzU0ZDUAAwN3YmcUX193YmluZGdlbl9pc19vYmplY3QAAwN3YmcfX193YmdfdmVyc2lvbnNfYjIzZjI1ODhjZGIyZGRiYgADA3diZxtfX3diZ19ub2RlXzYxYjhjOWE4MjQ5OTg5NWQAAwN3YmcUX193YmluZGdlbl9pc19zdHJpbmcAAwN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcdX193YmdfY3J5cHRvXzJmNTYyNTdhMzgyNzVkYmQAAwN3YmcfX193YmdfbXNDcnlwdG9fZDA3NjU1YmY2MjM2MWYyMQADA3diZzJfX3diZ19zdGF0aWNfYWNjZXNzb3JfTk9ERV9NT0RVTEVfMzNiNDUyNDdjNTUwNDViMAAGA3diZx5fX3diZ19yZXF1aXJlXzJhOTNiYzA5ZmVlNDVhY2EAAQN3YmcmX193YmdfZ2V0UmFuZG9tVmFsdWVzX2ZiNmIwODhlZmI2YmVhZDIAAgN3YmclX193YmdfcmFuZG9tRmlsbFN5bmNfNjU0YTc3OTc5OTBmYjhkYgAFA3diZyBfX3diZ19uZXdub2FyZ3NfZTIzYjQ1OGUzNzI4MzBkZQAAA3diZxtfX3diZ19jYWxsX2FlNzgzNDJhZGMzMzczMGEAAAN3YmcbX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAMDd2JnG19fd2JnX3NlbGZfOTk3MzdiNGRjZGY2ZjBkOAAGA3diZx1fX3diZ193aW5kb3dfOWI2MWZiYmYzNTY0YzRmYgAGA3diZyFfX3diZ19nbG9iYWxUaGlzXzhlMjc1ZWY0MGNhZWEzYTMABgN3YmcdX193YmdfZ2xvYmFsXzVkZTFlMGY4MmJkZGNkMjcABgN3YmcXX193YmluZGdlbl9pc191bmRlZmluZWQAAwN3YmcdX193YmdfYnVmZmVyXzdhZjIzZjY1ZjZjNjQ1NDgAAwN3YmcaX193YmdfbmV3X2NjOTAxOGJkNmYyODNiNmYAAwN3YmcaX193Ymdfc2V0X2YyNWU4NjllNDU2NWQyYTIABQN3YmcdX193YmdfbGVuZ3RoXzBhY2IxY2Y5YmJhZjg1MTkAAwN3YmckX193YmdfbmV3d2l0aGxlbmd0aF84ZjA2NTdmYWNhOWYxNDIyAAMDd2JnH19fd2JnX3N1YmFycmF5X2RhNTI3ZGJkMjRlYWZiNmIAAQN3YmcQX193YmluZGdlbl90aHJvdwACA3diZxFfX3diaW5kZ2VuX21lbW9yeQAGA+gB5gECAgMCEgAEAA8BBQICBxAFAQUBAAUCAAICBwEMABMADAAUAwgABAACFQACBAACBhYCBAACAAQEAAMAFwICAgUDBQUIBgcCBwQCDAAAGAEBBAgEBAUHAAIDAA0NDQIFAgAAAAAAAAAAAAAABAkCBAMFAQIDAgEBAQIJCQIADw4CAgMEBAAAAAMEAAACBAQHCQQFAAQQGQgOGwIEBwIBAx0AAwIAEQIDAAAAAgAACAADAAIABAIEAwADAwcDAwIDAAAFBQUABQEAAwIJCQAAAAMDAwMCAQEFAQIGAAADAwoKBgsLCwsEBQQFAXABcXEFAwEAEQYJAX8BQYCAwAALB88CEQZtZW1vcnkCAA9fX3diZ190aWR5X2ZyZWUAURZ0aWR5X3dpdGhfYmFzaWNfbGF5b3V0AHUVdGlkeV93aXRoX3RpZHlfbGF5b3V0AHYWdGlkeV93aXRoX2xheWVyZWRfdGlkeQB3EnRpZHlfY2hhbmdlX2xheW91dACNARB0aWR5X3JlbW92ZV9ub2RlAJsBDXRpZHlfaXNfZW1wdHkAjgENdGlkeV9hZGRfbm9kZQCYAQl0aWR5X2RhdGEAaAt0aWR5X2xheW91dACdAQx0aWR5X2dldF9wb3MAYQx0aWR5X251bGxfaWQA+wERX193YmluZGdlbl9tYWxsb2MAnAEfX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcgDjAQ9fX3diaW5kZ2VuX2ZyZWUA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ACADKAIAIgMgA0ECRiIDGzYCACADRQRAIAJBFGoiAy0AACEHIANBAToAACAAIAdBAXEiBzoABCAHDQJBACEHQdT2wAAoAgBB/////wdxBEAQ9AFBAXMhBwsgAi0AFQ0DIAIgAigCECIIQQEgCBs2AhAgCEUNBiAIQQJHDQQgAigCECEIIAJBADYCECAAIAg2AgQgCEECRw0FAkAgBw0AQdT2wAAoAgBB/////wdxRQ0AEPQBDQAgAkEBOgAVCyADQQA6AAALIAIgAigCACIDQQFrNgIAIANBAUYEQCACEIYBCyAAQSBqJAAMBgtBvqPAAEHeAEG8pMAAEOABAAsgAEEANgIcIABBpKLAADYCGCAAQQE2AhQgAEHgssAANgIQIABBADYCCCAAQQRqIABBCGoQeAALIAAgBzoADCAAIAM2AghBnKXAAEErIABBCGpB9LTAAEG4tcAAEGwACyAAQRRqQQE2AgAgAEEcakEANgIAIABB4LXAADYCECAAQaSiwAA2AhggAEEANgIIIABBCGpB6LXAABCaAQALIABBADYCHCAAQaSiwAA2AhggAEEBNgIUIABBmLbAADYCECAAQQA2AgggAEEEaiAAQQhqQaC2wAAQeQALIABBFGpBATYCACAAQRxqQQA2AgAgAEHwscAANgIQIABBpKLAADYCGCAAQQA2AgggAEEIakGwssAAEJoBAAsgBS0AIEUNAAsMAgsgBUEANgIgIAVBEGogBUEYakHUtMAAEHkAC0GIo8AAQStB5LTAABCLAQALIAUoAhgiAEUNACAAIAAoAgAiAEEBazYCACAAQQFHDQAgBSgCGBCGAUG89sAAKAIAIQAMAgtBvPbAACgCACEADAELCwsgBkEgaiQACyAEQZz2wAA2AiwgBCAEQSxqNgI4IARB2ABqIARBEGopAwA3AwAgBEHQAGogBEEIaikDADcDACAEIAQpAwA3A0ggBEEgaiEDIARByABqIQUjAEEwayICJAACQAJAAkAgBEE4aigCACgCACIAKAIAQcT6wABHBEAgAC0AHCEGIABBAToAHCACIAZBAXEiBjoACCAGDRYgAEEBNgIEIABBxPrAADYCAAwBCyAAKAIEQQFqIgZFDQEgACAGNgIECyACIAA2AgQgAkEEOgAIIAIgAkEEajYCECACQShqIAVBEGopAgA3AwAgAkEgaiAF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QdD2wAAoAgAoAhQRAgBBxPbAACgCAAUgAgtBAWs2AgAgBkEBSw0AIAQNAQsACyMAQRBrIgIkACACIAE2AgwgAiAANgIIAAv2BwINfwR+IwBBEGsiAyQAAkACfyMAQUBqIgAkAAJAAkACQEHk9cAAKAIADQAgAEE4akIANwMAIABBMGpCADcDACAAQShqQgA3AwAgAEIANwMgIABBCGogAEEgahCTASAAKAIIIgENASAAKAI8IQIgACgCOCEEIAAoAjQhBSAAKAIwIQYgACgCLCEHIAAoAighCCAAKAIkIQkgACgCICEKQciWwAAQigEhC0HMlsAAEIoBIQxB2AJBCBDJASIBRQ0CIAFCgYCAgBA3AwAgAUEIakEAQYACEPABGiABQQA2AtACIAFCgIAENwPIAiABQoCABDcDwAIgASAMNgK8AiABIAs2ArgCIAFCADcDsAIgASACNgKsAiABIAQ2AqgCIAEgBTYCpAIgASAGNgKgAiABIAc2ApwCIAEgCDYCmAIgASAJNgKUAiABIAo2ApACIAFBwAA2AogCQeT1wAAoAgAhAkHk9cAAIAE2AgAgAkUNACACIAIoAgBBAWsiATYCACABDQAgAkEEaiIBIAEoAgBBAWsiATYCACABDQAgAhAiCyAAQUBrJABB5PXAAAwCCyAAIAAoAgw2AhQgACABNgIQIABBLGpBATYCACAAQTRqQQE2AgAgAEGglMAANgIoIABBADYCICAAQRU2AhwgACAAQRhqNgIwIAAgAEEQajYCGCAAQSBqQYCVwAAQmgEAC0HYAkEIEO4BAAsiAARAIAAoAgAiAiACKAIAQQFqIgA2AgAgAA0BAAtBkJXAAEHGACADQQhqQdiVwABBuJbAABBsAAsgA0EQaiQAIAJBCGohASACQYgCaigCACIAQcAATwRAIAJBkAJqIQACQAJAIAJByAJqKQMAIg1CAFcNACACQdACaigCAEEASA0AIAIgDUKAAn03A8gCIAAgARAdDAELIwBBMGsiAyQAIANBKGpCADcDACADQSBqQgA3AwAgA0EYakIANwMAIANCADcDECADQQhqIANBEGoQkwECQCADKAIIIgRFBEAgAykDECENIAMpAxghDiADKQMgIQ8gAykDKCEQQcCTwAAQigEhBCAAQcSTwAAQigE2AiwgACAENgIoIABCADcDICAAIBA3AxggACAPNwMQIAAgDjcDCCAAIA03AwAMAQsgBCADKAIMIgUoAgARBAAgBUEEaigCAEUNACAFQQhqKAIAGiAEECILIABBADYCQCAAIAApAzBCgAJ9NwM4IAAgARAdIANBMGokAAsgAkEANgKIAkEAIQALIAEgAEECdGooAgAgAiAAQQFqNgKIAiACIAIoAgBBAWsiADYCAAJAIAANACACQQRqIgAgACgCAEEBayIANgIAIAANACACECILC7oBAAJAIAIEQAJAAkACfwJAAkAgAUEATgRAIAMoAggNASABDQJBASECDAQLDAYLIAMoAgQiAkUEQCABRQRAQQEhAgwECyABQQEQyQEMAgsgAygCACACQQEgARC/AQwBCyABQQEQyQELIgJFDQELIAAgAjYCBCAAQQhqIAE2AgAgAEEANgIADwsgACABNgIEIABBCGpBATYCACAAQQE2AgAPCyAAIAE2AgQLIABBCGpBADYCACAAQQE2AgALrwQDB38CfgF8IwBBEGsiAiQAAkACQCABBEAgASgCACIEQX9GDQEgASAEQQFqNgIAIAJBADYCCCACQoCAgICAATcCAAJAIAFBCGoiBEEYaigCACIHRQ0AIARBHGooAgAiBUEIaiEEIAUpAwBCf4VCgIGChIiQoMCAf4MhCQNAAn4gCVAEQCAEIQMDQCAFQUBqIQUgAykDACADQQhqIgQhA0J/hUKAgYKEiJCgwIB/gyIJUA0ACyAJQgF9IAmDDAELIAVFDQIgCUIBfSAJgwsgBSAJeqdB+ABxa0EIayIDKAIAuCELIANBBGooAgAhCCACKAIAIAZGBEAgAiAGEFkgAigCCCEGCyACKAIEIAZBA3RqIAs5AwAgAiACKAIIQQFqIgM2AgggCCsDICELIAIoAgAgA0YEQCACIAMQWSACKAIIIQMLIAdBAWshByACKAIEIANBA3RqIAs5AwAgAiACKAIIQQFqIgM2AgggCCsDKCELIAIoAgAgA0YEQCACIAMQWSACKAIIIQMLIAIoAgQgA0EDdGogCzkDACACIAIoAghBAWoiBjYCCCEJIAcNAAsLIAEgASgCAEEBazYCACACKAIEIQQCQCACKAIAIgEgAigCCCIDTQRAIAQhAQwBCyADRQRAQQghASAEECIMAQsgBCABQQN0QQggA0EDdCIEEL8BIgFFDQMLIAAgAzYC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QeD2wABCATcDAEHw9sAAIAUpAwgiBjcDACAFKQMACyEHIAJCADcDICACQgA3AxAgAiAGNwMIIAIgBzcDACACQQE6AIABIAJBHGpBoIDAADYCACACQRhqQQA2AgBB6PbAACAHQgF8NwMAIAJBKGpCADcDACACQTBqQgA3AwAgAkE4akIANwMAIAJBQGtCADcDACACQcgAakIANwMAIAJB0ABqQgA3AwAgAkHYAGpCADcDACACQfAAakIENwMAIAJB6ABqQgA3AwAgAkHgAGpC/////w83AwAgAkH8AGpB/InAADYCACACIAM2AnggBUEQaiQADAELQSBBCBDuAQALIARBmAFqIAJBiAEQ8gEaQZABQQgQyQEiAkUEQEGQAUEIEO4BAAsgAkEANgIAIAJBBGogBEGUAWpBjAEQ8gEaIARBoAJqJAAgAgvFAwIEfwJ+IwBBoAJrIgQkACAEQQhqIQIjAEEQayIFJAACQEEgQQgQyQEiAwRAIANBAToAHCADQQA2AhggA0KAgICAgAE3AxAgAyABOQMIIAMgADkDAAJ+QeD2wAApAwBQRQRAQfD2wAApAwAhBkHo9sAAKQMADAELIAUQ0AFB4PbAAEIBNwMAQfD2wAAgBSkDCCIGNwMAIAUpAwALIQcgAkIANwMgIAJCADcDECACIAY3AwggAiAHNwMAIAJBAToAgAEgAkEcakGggMAANgIAIAJBGGpBADYCAEHo9sAAIAdCAXw3AwAgAkEoakIANwMAIAJBMGpCADcDACACQThqQgA3AwAgAkFAa0IANwMAIAJByABqQgA3AwAgAkHQAGpCADcDACACQdgAakIANwMAIAJB8ABqQgQ3AwAgAkHoAGpCADcDACACQeAAakL/////DzcDACACQfwAakH8icAANgIAIAIgAzYCeCAFQRBqJAAMAQtBIEEIEO4BAAsgBEGYAWogAkGIARDyARpBkAFBCBDJASICRQRAQZABQQgQ7gEACyACQQA2AgAgAkEEaiAEQZQBakGMARDyARogBEGgAmokACACC2YBAX8jAEEgayICJAAgAkHEosAANgIEIAIgADYCACACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCACQfiiwAAgAkEEakH4osAAIAJBCGpBoLPAABA3AAtjAQF/IwBBIGsiAyQAIANBpLTAADYCBCADIAA2AgAgA0EYaiABQRBqKQIANwMAIANBEGogAUEIaikCADcDACADIAEpAgA3AwggA0HoosAAIANBBGpB6KLAACADQQhqIAIQNwALdAAgACgCACIBKAIAIQAgAUEANgIAAkAgAARAQYAIQQEQyQEiAUUNASAAQQA6ABwgAEEAOgAYIABBADYCFCAAIAE2AhAgAEKAgICAgIABNwIIIABCADcCAA8LQYijwABBK0GcrsAAEIsBAAtBgAhBARDuAQALWQEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakHcocAAIAJBCGoQLiACQSBqJAALWQEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakH0ocAAIAJBCGoQLiACQSBqJAALWQEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakGMosAAIAJBCGoQLiACQSBqJAALWQEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakH4u8AAIAJBCGoQLiACQSBqJAALUwECfyMAQSBrIgIkACABKAIEIQMgASgCACACQRhqIABBEGopAgA3AwAgAkEQaiAAQQhqKQIANwMAIAIgACkCADcDCCADIAJBCGoQLiACQSBqJAALWQEBfyMAQSBrIgIkACACIAAoAgA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakG028AAIAJBCGoQLiACQSBqJAALUwECfyMAQSBrIgIkACAAKAIEIQMgACgCACACQRhqIAFBEGopAgA3AwAgAkEQaiABQQhqKQIANwMAIAIgASkCADcDCCADIAJBCGoQLiACQSBqJAALVgEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakHcocAAIAJBCGoQLiACQSBqJAALVgEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakGMosAAIAJBCGoQLiACQSBqJAALVgEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakG028AAIAJBCGoQLiACQSBqJAALWAEBfyMAQSBrIgIkACACQQxqQQE2AgAgAkEUakEBNgIAIAJBzJfAADYCCCACQQA2AgAgAkEaNgIcIAIgADYCGCACIAJBGGo2AhAgASACEIEBIAJBIGokAAtOAQF/AkAgACgCCCIBRQ0AIAFBADoAACAAQQxqKAIARQ0AIAAoAggQIgsCQCAAQX9GDQAgACAAKAIEIgFBAWs2AgQgAUEBRw0AIAAQIgsLSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABBkLvAADYCECAAQfS6wAA2AhggAEEANgIIIABBCGpB6LvAABCaAQALVgECfyABKAIAIQIgAUEANgIAAkAgAgRAIAEoAgQhA0EIQQQQyQEiAUUNASABIAM2AgQgASACNgIAIABB7JPAADYCBCAAIAE2AgAPCwALQQhBBBDuAQALSwECfyAALQAAQQNGBEAgACgCBCIBKAIAIAEoAgQoAgARBAAgASgCBCICQQRqKAIABEAgAkEIaigCABogASgCABAiCyAAKAIEECILCyABAX8jAEEgayIBJAAgAUEENgIEIAAoAAAgAUEgaiQAC1IBAX8jAEEgayIDJAAgA0EMakEBNgIAIANBFGpBADYCACADQay+wAA2AhAgA0EANgIAIAMgATYCHCADIAA2AhggAyADQRhqNgIIIAMgAhCaAQALSgEBfyACIAAoAgAoAggiACgCACAAKAIIIgNrSwRAIAAgAyACEFwgACgCCCEDCyAAKAIEIANqIAEgAhDyARogACACIANqNgIIQQAL0QMCBX8CfAJAAkAgAARAIAAoAgANASAAQX82AgAgAUEDTw0CAkACQAJAAkAgAUH/AXEiAiAAQQhqIgUtAIABRwRAIAUoAngiBCAFQfwAaigCACIDKAIUEQoAIQcgBCADKAIYEQoAIQgCQAJAAkACQCACQQFrDgIBAgALQRBBCBDJASICRQ0EIAIgCDkDCCACIAc5AwAgBCADKAIAEQQAQeCJwAAhBiADQQRqKAIARQ0CIANBCGooAgAaIAQQIgwCC0EgQQgQyQEiAkUNBCACQQA6ABwgAkEANgIYIAJCgICAgIABNwMQIAIgCDkDCCACIAc5AwAgBCADKAIAEQQAQfyJwAAhBiADQQRqKAIARQ0BIANBCGooAgAaIAQQIgwBC0EgQQgQyQEiAkUNBCACQQE6ABwgAkEANgIYIAJCgICAgIABNwMQIAIgCDkDCCACIAc5AwAgBCADKAIAEQQAQfyJwAAhBiADQQRqKAIARQ0AIANBCGooAgAaIAQQIgsgBSABOgCAASAFIAY2AnwgBSACNgJ4CwwDC0EQQQgQ7gEAC0EgQQgQ7gEAC0EgQQgQ7gEACyAAQQA2AgAPCxDlAQALEOYBAAtBgIDAAEEZEOQBAAtEAQF/AkAgAARAIAAoAgAiAUF/Rg0BIAAgAUEBajYCACAAQegAaigCAEF/RiAAIAAoAgBBAWs2AgAPCxDlAQALEOYBAAtLAQF/IAEQQQJAIAAtABwEQCAAQRhqQQA2AgAgASAAQRBqIgIgABAtIAEgAhBDDAELIAEgABBJCyAAIAEQMyABRAAAAAAAAAAAEFYLRwEBfyACIAAoAgAiACgCACAAKAIIIgNrSwRAIAAgAyACEFwgACgCCCEDCyAAKAIEIANqIAEgAhDyARogACACIANqNgIIQQALRwEBfyACIAAoAggiACgCACAAKAIIIgNrSwRAIAAgAyACEFwgACgCCCEDCyAAKAIEIANqIAEgAhDyARogACACIANqNgIIQQALRwEBfyACIAAoAgAiACgCACAAKAIIIgNrSwRAIAAgAyACEF0gACgCCCEDCyAAKAIEIANqIAEgAhDyARogACACIANqNgIIQQALkgUBC38jAEEQayIHJAAgB0EgNgIMIAcgATYCCAJ/IwBBIGsiAiQAIAdBCGoiAUEEaigCACEEIAEoAgAhCEEAQYSewAAoAgARAwAiBgRAAn8CQAJAAkAgBigCAA4DAQIAAgsgBigCBAwCCyAGKAIEIAggBBALIAJBCGoQqAECQCACKAIIIgNFDQAgAigCDCIBQSRJDQAgARAFC0GNgICAeEEAIAMbDAELQQAgBEUNABogBkEIaiEMAkADQCACIAwoAgBBACAEQYACIARBgAJJGyIJEBkiATYCFCAGKAIEIAEQCiACEKgBAkAgAigCACIDRQ0AIAIoAgQiAUEkSQ0AIAEQBQsgAw0BIAQgCWshBCMAQSBrIgUkACAFIAJBFGooAgAiAxAXIgE2AgAgBSAJNgIEAkAgASAJRgRAEBsiCxAUIgEQFSEKIAFBJE8EQCABEAULIAogAyAIEBYgCkEkTwRAIAoQBQsgC0EkTwRAIAsQBQsgBUEgaiQADAELIAVBADYCECMAQSBrIgEkACABIAVBBGo2AgQgASAFNgIAIAFBGGogBUEIaiIAQRBqKQIANwMAIAFBEGogAEEIaikCADcDACABIAApAgA3AwggAUGwoMAAIAFBBGpBsKDAACABQQhqQaCgwAAQNwALIAIoAhQiAUEkTwRAIAEQBQsgCCAJaiEIIAQNAAtBAAwBCyACKAIUIgFBJE8EQCABEAULQYiAgIB4CyACQSBqJAAMAQtBjp7AAEHGACACQRhqQdSewABBtJ/AABBsAAshAyAHQRBqJAACQAJAIANFBEBBACEBDAELQQRBBBDJASIBRQ0BIAEgAzYCAAsgAEGMmMAANgIEIAAgATYCAA8LQQRBBBDuAQALSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABBhKXAADYCECAAQaSiwAA2AhggAEEANgIIIABBCGpBjKXAABCaAQALSgEBfyMAQSBrIgAkACAAQRRqQQE2AgAgAEEcakEANgIAIABBwLzAADYCECAAQZC8wAA2AhggAEEANgIIIABBCGpByLzAABCaAQALRgECfyABKAIEIQIgASgCACEDQQhBBBDJASIBRQRAQQhBBBDuAQALIAEgAjYCBCABIAM2AgAgAEH4sMAANgIEIAAgATYCAAvZdwMWfiJ/AXwgASgCGEEBcSEYIAArAwAhOgJAAkACQCABKAIQQQFGBEACfyABISQgAUEUaigCACEnIwBB8AhrIh8kACA6vSEDAkAgOiA6YgRAQQIhAQwBCyADQv////////8HgyIGQoCAgICAgIAIhCADQgGGQv7///////8PgyADQjSIp0H/D3EiABsiBEIBgyEFQQMhAQJAAkACQEEBQQJBBCADQoCAgICAgID4/wCDIgdQIhkbIAdCgICAgICAgPj/AFEbQQNBBCAZGyAGUBtB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ICc2AgAgH0EAOwGcCCAfQQI2ApgIIB9BmNbAADYClAggH0GQCGoMBAtBASEAIB9BATYCmAggH0Gd1sAANgKUCCAfQZAIagwDC0ECIQAgH0ECOwGQCCAnBEAgH0GgCGogJzYCACAfQQA7AZwIIB9BAjYCmAggH0GY1sAANgKUCCAfQZAIagwDC0EBIQAgH0EBNgKYCCAfQZ3WwAA2ApQIIB9BkAhqDAILIB9BAzYCmAggH0Ge1sAANgKUCCAfQQI7AZAIIB9BkAhqDAELIB9BAzYCmAggH0Gh1sAANgKUCCAfQQI7AZAIIB9BkAhqCyEBIB9BzAhqIAA2AgAgHyABNgLICCAfIC02AsQIIB8gMjYCwAggJCAfQcAIahAvIB9B8AhqJAAMAgtBpNbAAEElQczWwAAQiwEACyAAQShB9O3AABDdAQALDwsgAUEAIQEjAEGAAWsiICQAIDq9IQICQCA6IDpiBEBBAiEADAELIAJC/////////weDIgZCgICAgICAgAiEIAJCAYZC/v///////w+DIAJCNIinQf8PcSIZGyIDQgGDIQVBAyEAAkACQAJAQQFBAkEEIAJCgICAgICAgPj/AIMiB1AiHBsgB0KAgICAgICA+P8AURtBA0EEIBwbIAZQG0ECaw4DAAECAwtBBCEADAILIBlBswhrIQEgBVAhAEIBIQQMAQtCgICAgICAgCAgA0IBhiADQoCAgICAgIAIUSIBGyEDQgJCASABGyEEIAVQIQBBy3dBzHcgARsgGWohAQsgICABOwF4ICAgBDcDcCAgQgE3A2ggICADNwNgICAgADoAegJ/IABBAkYEQEGsvsAAISlBAAwBCyAYRQRAQZvWwABBrL7AACACQgBTGyEpIAJCP4inDAELQZvWwABBnNbAACACQgBTGyEpQQELITJBASEBAn8CQAJAAkACQCAAQQJrQQMgAEEBSxtBAWsOAwIBAAMLICBBIGohGSAgQQ9qIRojAEEwayIYJAACQAJAAkACQAJAAkACQCAgQeAAaiIAKQMAIgJQRQRAIAApAwgiBFBFBEAgACkDECIDUEUEQCACIAIgA3wiA1gEQCACIARaBEACQAJAIANC//////////8fWARAIBggAC8BGCIAOwEIIBggAiAEfSIENwMAIAAgAEEgayAAIANCgICAgBBUIgEbIhxBEGsgHCAD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QQRrIg4NAAsLIAoNAQsLIAgoAhAEQCAIKAIUECILIAhBIGokAAwBC0EEQQQQ7gEACyATKAJEIgkEQEEAIQoCQCAJQdQAaigCACIMRQ0AIAlB0ABqKAIAIQggDEECdEEEayELA0AgASAIKAIAKAJARwRAIApBAWohCiAIQQRqIQggC0EEayILQXxHDQEMAgsLIAgoAgAhASAIIAhBBGogCxDxASAJQdQAaiAMQQFrNgIAIAFB1ABqKAIAIgsEQCABQdAAaigCACEIIAtBAnQhCwNAIAgQbiAIQQRqIQggC0EEayILDQALCyABKAJMBEAgAUHQAGooAgAQIgsgASgCSCILBEAgCxAiCyABECILDAELQZiKwABBK0HwisAAEIsBAAsgAEEANgIADwsQ5QEACxDmAQALMwACQCAAQfz///8HSw0AIABFBEBBBA8LIAAgAEH9////B0lBAnQQyQEiAEUNACAADwsAC1cBAX8CQCAABEAgACgCAA0BIABBfzYCACAAQQhqIgFB4ABqKAIAQX9HBEAgASgCeCABQSBqIAFB/ABqKAIAKAIMEQIACyAAQQA2AgAPCxDlAQALEOYBAAs9AQF/IAAoAgAhAQJAIABBBGotAAANAEHU9sAAKAIAQf////8HcUUNABD0AQ0AIAFBAToAAQsgAUEAOgAACzAAIAAoAgAhACABENMBRQRAIAEQ1AFFBEAgACABEN8BDwsgACABEGcPCyAAIAEQZgsrAQF/IwBBEGsiACQAIABBCGoiAiABQbOjwABBCxCpASACEHMgAEEQaiQAC+ABAQJ/IwBBEGsiACQAIABBCGoiAyABQayuwABBCxCpASMAQRBrIgIkACADAn9BASADLQAEDQAaIAMoAgAhASADQQVqLQAARQRAIAEoAgBBsNnAAEEHIAEoAgQoAgwRAQAMAQsgAS0AGEEEcUUEQCABKAIAQarZwABBBiABKAIEKAIMEQEADAELIAJBAToADyACIAEpAgA3AwAgAiACQQ9qNgIIQQEgAkGm2cAAQQMQNg0AGiABKAIAQanZwABBASABKAIEKAIMEQEACyIBOgAEIAJBEGokACAAQRBqJAAgAQsoAQF/AkAgAEEEEDgiAUUNACABEPgBENcBDQAgAUEAIAAQ8AEaCyABCxwAAkAgAEUgAEEDcXINACAAKAIERQ0AIAAQIgsL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JCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQmgEAC3cBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQQI2AgAgA0EcakECNgIAIANBLGpBATYCACADQZjewAA2AhAgA0EANgIIIANBATYCJCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQmgEAC3cBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQQI2AgAgA0EcakECNgIAIANBLGpBATYCACADQczewAA2AhAgA0EANgIIIANBATYCJCADIANBIGo2AhggAyADQQRqNgIoIAMgAzYCICADQQhqIAIQmgEACw0AIAA1AgBBASABEEQLbQEBfyMAQRBrIgMkACADIAE2AgwgAyAANgIIIwBBIGsiACQAIABBDGpBATYCACAAQRRqQQE2AgAgAEHI18AANgIIIABBADYCACAAQeMANgIcIAAgA0EIajYCGCAAIABBGGo2AhAgACACEJoBAAsNACAAKAIAIAEgAhA2C8cDAgF+BH8gACgCACkDACECIwBBgAFrIgUkAAJAAkACQAJAIAEoAhgiAEEQcUUEQCAAQSBxDQEgAkEBIAEQRCEADAQLQYABIQAgBUGAAWohBAJAAkADQCAARQRAQQAhAAwDCyAEQQFrQTBB1wAgAqciA0EPcSIGQQpJGyAGajoAACACQhBaBEAgBEECayIEQTBB1wAgA0H/AXEiA0GgAUkbIANBBHZqOgAAIABBAmshACACQoACVCACQgiIIQJFDQEMAgsLIABBAWshAAsgAEGBAU8NAgsgAUEBQejZwABBAiAAIAVqQYABIABrECohAAwDC0GAASEAIAVBgAFqIQQCQAJAA0AgAEUEQEEAIQAMAwsgBEEBa0EwQTcgAqciA0EPcSIGQQpJGyAGajoAACACQhBaBEAgBEECayIEQTBBNyADQf8BcSIDQaABSRsgA0EEdmo6AAAgAEECayEAIAJCgAJUIAJCCIghAkUNAQwCCwsgAEEBayEACyAAQYEBTw0CCyABQQFB6NnAAEECIAAgBWpBgAEgAGsQKiEADAILIABBgAFB2NnAABDcAQALIABBgAFB2NnAABDcAQALIAVBgAFqJAAgAAsLACAAIwBqJAAjAAsJACAAIAEQGgALDQBB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b24oKSBpcyBkZXByZWNhdGVkOyB1c2UgRGlzcGxheRsAAAAEAAAABAAAABwAAAAbAAAABAAAAAQAAAAdAAAAHAAAAPwLEAAeAAAAHwAAACAAAAAhAAAAIgAAAEVycm9ydW5rbm93bl9jb2RlAAAAJAAAAAQAAAAEAAAAJQAAAGludGVybmFsX2NvZGVkZXNjcmlwdGlvbiQAAAAIAAAABAAAACYAAABvc19lcnJvciQAAAAEAAAABAAAACcAAABVbmtub3duIEVycm9yOiAAnAwQAA8AAABPUyBFcnJvcjogAAC0DBAACgAAAE5vZGUuanMgQVBJIGNyeXB0by5yYW5kb21GaWxsU3luYyBpcyB1bmF2YWlsYWJsZU5vZGUuanMgY3J5cHRvIG1vZHVsZSBpcyB1bmF2YWlsYWJsZXJhbmRTZWN1cmU6IFZ4V29ya3MgUk5HIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWRXZWIgQVBJIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgaXMgdW5hdmFpbGFibGVXZWIgQ3J5cHRvIEFQSSBpcyB1bmF2YWlsYWJsZVJEUkFORDogaW5zdHJ1Y3Rpb24gbm90IHN1cHBvcnRlZFJEUkFORDogZmFpbGVkIG11bHRpcGxlIHRpbWVzOiBDUFUgaXNzdWUgbGlrZWx5UnRsR2VuUmFuZG9tOiBXaW5kb3dzIHN5c3RlbSBmdW5jdGlvbiBmYWlsdXJlU2VjUmFuZG9tQ29weUJ5dGVzOiBpT1MgU2VjdXJpdHkgZnJhbWV3b3JrIGZhaWx1cmVlcnJubzogZGlkIG5vdCByZXR1cm4gYSBwb3NpdGl2ZSB2YWx1ZWdldHJhbmRvbTogdGhpcyB0YXJnZXQgaXMgbm90IHN1cHBvcnRlZAAnAAAAJgAAACcAAAAyAAAALQAAAC8AAAAhAAAAHQAAAC0AAAAnAAAAJwAAADEAAAAkAAAAMAAAAGwOEABGDhAAbA4QABQOEADnDRAAuA0QAJcNEAB6DRAATQ0QAGwOEABsDhAAHA0QAPgMEADIDBAAKAAAAGNyeXB0b2Nhbm5vdCBhY2Nlc3MgYSBUaHJlYWQgTG9jYWwgU3RvcmFnZSB2YWx1ZSBkdXJpbmcgb3IgYWZ0ZXIgZGVzdHJ1Y3Rpb24pAAAAAAAAAAEAAAAXAAAAL3J1c3RjLzgwYTk2NDY3ZWM1Njc1ZTlmNjk2ODNiNWMwNzVhOGIxNTk1MGMzNDEvbGlicmFyeS9zdGQvc3JjL3RocmVhZC9sb2NhbC5ycwBkDxAATwAAAKYBAAAJAAAAcmV0dXJuIHRoaXMvcHJpdmF0ZS90bXAvbml4LWJ1aWxkLXRpZHktd2FzbS1wa2dzLTAuMC4yLmRydi0wL3ZlbmRvci9qcy1zeXMtMC4zLjU3L3NyYy9saWIucnPPDxAAUQAAALAWAAABAAAANQAAAAQAAAAEAAAANgAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBkZXN0cm95ZWQgYWxyZWFkeW51bGwgcG9pbnRlciBwYXNzZWQgdG8gcnVzdHJlY3Vyc2l2ZSB1c2Ugb2YgYW4gb2JqZWN0IGRldGVjdGVkIHdoaWNoIHdvdWxkIGxlYWQgdG8gdW5zYWZlIGFsaWFzaW5nIGluIHJ1c3QAADsAAAAEAAAABAAAADwAAAA9AAAAPgAAADsAAAAEAAAABAAAAD8AAABAAAAAQQAAADsAAAAEAAAABAAAAEIAAABDAAAARAAAAGFscmVhZHkgYm9ycm93ZWQ7AAAAAAAAAAEAAABFAAAAAGFzc2VydGlvbiBmYWlsZWQ6IG1pZCA8PSBzZWxmLmxlbigpOwAAAAQAAAAEAAAARgAAADsAAAAEAAAABAAAAEcAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlQWNjZXNzRXJyb3J1c2Ugb2Ygc3RkOjp0aHJlYWQ6OmN1cnJlbnQoKSBpcyBub3QgcG9zc2libGUgYWZ0ZXIgdGhlIHRocmVhZCdzIGxvY2FsIGRhdGEgaGFzIGJlZW4gZGVzdHJveWVkbGlicmFyeS9zdGQvc3JjL3RocmVhZC9tb2QucnMAAAAcEhAAHQAAANwCAAAFAAAAZmFpbGVkIHRvIGdlbmVyYXRlIHVuaXF1ZSB0aHJlYWQgSUQ6IGJpdHNwYWNlIGV4aGF1c3RlZABMEhAANwAAABwSEAAdAAAAVQQAAA0AAABjYWxsZWQgYFJlc3VsdDo6dW53cmFwKClgIG9uIGFuIGBFcnJgIHZhbHVlACQREAAAAAAAbGlicmFyeS9zdGQvc3JjL2lvL2J1ZmZlcmVkL2xpbmV3cml0ZXJzaGltLnJzAAAA0BIQAC0AAAABAQAAKQAAAHVuY2F0ZWdvcml6ZWQgZXJyb3JvdGhlciBlcnJvcm91dCBvZiBtZW1vcnl1bmV4cGVjdGVkIGVuZCBvZiBmaWxldW5zdXBwb3J0ZWRvcGVyYXRpb24gaW50ZXJydXB0ZWRhcmd1bWVudCBsaXN0IHRvbyBsb25naW52YWxpZCBmaWxlbmFtZXRvbyBtYW55IGxpbmtzY3Jvc3MtZGV2aWNlIGxpbmsgb3IgcmVuYW1lZGVhZGxvY2tleGVjdXRhYmxlIGZpbGUgYnVzeXJlc291cmNlIGJ1c3lmaWxlIHRvbyBsYXJnZWZpbGVzeXN0ZW0gcXVvdGEgZXhjZWVkZWRzZWVrIG9uIHVuc2Vla2FibGUgZmlsZW5vIHN0b3JhZ2Ugc3BhY2V3cml0ZSB6ZXJvdGltZWQgb3V0aW52YWxpZCBkYXRhaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClyZWFkLW9ubHkgZmlsZXN5c3RlbSBvciBzdG9yYWdlIG1lZGl1bWRpcmVjdG9yeSBub3QgZW1wdHlpcyBhIGRpcmVjdG9yeW5vdCBhIGRpcmVjdG9yeW9wZXJhdGlvbiB3b3VsZCBibG9ja2VudGl0eSBhbHJlYWR5IGV4aXN0c2Jyb2tlbiBwaXBlbmV0d29yayBkb3duYWRkcmVzcyBub3QgYXZhaWxhYmxlYWRkcmVzcyBpbiB1c2Vub3QgY29ubmVjdGVkY29ubmVjdGlvbiBhYm9ydGVkbmV0d29yayB1bnJlYWNoYWJsZWhvc3QgdW5yZWFjaGFibGVjb25uZWN0aW9uIHJlc2V0Y29ubmVjdGlvbiByZWZ1c2VkcGVybWlzc2lvbiBkZW5pZWRlbnRpdHkgbm90IGZvdW5kIChvcyBlcnJvciApAAAAJBEQAAAAAAD9FRAACwAAAAgWEAABAAAAbGlicmFyeS9zdGQvc3JjL2lvL3N0ZGlvLnJzACQWEAAbAAAA4AIAABQAAABmYWlsZWQgcHJpbnRpbmcgdG8gOiAAAABQFhAAEwAAAGMWEAACAAAAJBYQABsAAADxAwAACQAAAHN0ZG91dAAASAAAAAwAAAAEAAAASQAAAEoAAABLAAAAZm9ybWF0dGVyIGVycm9yAKgWEAAPAAAAKAAAAEgAAAAMAAAABAAAAEwAAABNAAAATgAAAGxpYnJhcnkvc3RkL3NyYy9zeW5jL29uY2UucnM7AAAABAAAAAQAAABPAAAAUAAAANwWEAAcAAAAygAAABQAAADcFhAAHAAAAMoAAAAoAAAAUG9pc29uRXJyb3Jsb2NrIGNvdW50IG92ZXJmbG93IGluIHJlZW50cmFudCBtdXRleGxpYnJhcnkvc3RkL3NyYy9zeXNfY29tbW9uL3JlbXV0ZXgucnMAAF0XEAAlAAAAjwAAACIAAABsaWJyYXJ5L3N0ZC9zcmMvc3lzX2NvbW1vbi90aHJlYWRfaW5mby5ycwAAAJQXEAApAAAAFgAAADMAAABtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkCgDQFxAAFQAAAOUXEAAOAAAAbGlicmFyeS9zdGQvc3JjL2FsbG9jLnJzBBgQABgAAABVAQAACQAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnMsGBAAHAAAAD4CAAAPAAAALBgQABwAAAA9AgAADwAAAFEAAAAMAAAABAAAAFIAAAA7AAAACAAAAAQAAABTAAAAVAAAABAAAAAEAAAAVQAAAFYAAAA7AAAACAAAAAQAAABXAAAAWAAAADsAAAAAAAAAAQAAAFkAAABvcGVyYXRpb24gc3VjY2Vzc2Z1bGNvbmR2YXIgd2FpdCBub3Qgc3VwcG9ydGVkAADUGBAAGgAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9sb2Nrcy9jb25kdmFyLnJz+BgQADgAAAAUAAAACQAAAGNhbm5vdCByZWN1cnNpdmVseSBhY3F1aXJlIG11dGV4QBkQACAAAABsaWJyYXJ5L3N0ZC9zcmMvc3lzL3dhc20vLi4vdW5zdXBwb3J0ZWQvbG9ja3MvbXV0ZXgucnMAAGgZEAA2AAAAFAAAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzdGF0ZV9hbmRfcXVldWUuYWRkcigpICYgU1RBVEVfTUFTSyA9PSBSVU5O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", self.location));
  const A = {};
  A.wbg = {}, A.wbg.__wbg_process_70251ed1291754d5 = function(t) {
    const B = H(t).process;
    return T(B);
  }, A.wbg.__wbindgen_is_object = function(t) {
    const B = H(t);
    return typeof B == "object" && B !== null;
  }, A.wbg.__wbg_versions_b23f2588cdb2ddbb = function(t) {
    const B = H(t).versions;
    return T(B);
  }, A.wbg.__wbg_node_61b8c9a82499895d = function(t) {
    const B = H(t).node;
    return T(B);
  }, A.wbg.__wbindgen_is_string = function(t) {
    return typeof H(t) == "string";
  }, A.wbg.__wbindgen_object_drop_ref = function(t) {
    re(t);
  }, A.wbg.__wbg_crypto_2f56257a38275dbd = function(t) {
    const B = H(t).crypto;
    return T(B);
  }, A.wbg.__wbg_msCrypto_d07655bf62361f21 = function(t) {
    const B = H(t).msCrypto;
    return T(B);
  }, A.wbg.__wbg_static_accessor_NODE_MODULE_33b45247c55045b0 = function() {
    return T(i);
  }, A.wbg.__wbg_require_2a93bc09fee45aca = function() {
    return _A(function(t, B, C) {
      const Q = H(t).require(Ui(B, C));
      return T(Q);
    }, arguments);
  }, A.wbg.__wbg_getRandomValues_fb6b088efb6bead2 = function() {
    return _A(function(t, B) {
      H(t).getRandomValues(H(B));
    }, arguments);
  }, A.wbg.__wbg_randomFillSync_654a7797990fb8db = function() {
    return _A(function(t, B, C) {
      H(t).randomFillSync(ae(B, C));
    }, arguments);
  }, A.wbg.__wbg_newnoargs_e23b458e372830de = function(t, B) {
    const C = new Function(Ui(t, B));
    return T(C);
  }, A.wbg.__wbg_call_ae78342adc33730a = function() {
    return _A(function(t, B) {
      const C = H(t).call(H(B));
      return T(C);
    }, arguments);
  }, A.wbg.__wbindgen_object_clone_ref = function(t) {
    const B = H(t);
    return T(B);
  }, A.wbg.__wbg_self_99737b4dcdf6f0d8 = function() {
    return _A(function() {
      const t = self.self;
      return T(t);
    }, arguments);
  }, A.wbg.__wbg_window_9b61fbbf3564c4fb = function() {
    return _A(function() {
      const t = window.window;
      return T(t);
    }, arguments);
  }, A.wbg.__wbg_globalThis_8e275ef40caea3a3 = function() {
    return _A(function() {
      const t = globalThis.globalThis;
      return T(t);
    }, arguments);
  }, A.wbg.__wbg_global_5de1e0f82bddcd27 = function() {
    return _A(function() {
      const t = global.global;
      return T(t);
    }, arguments);
  }, A.wbg.__wbindgen_is_undefined = function(t) {
    return H(t) === void 0;
  }, A.wbg.__wbg_buffer_7af23f65f6c64548 = function(t) {
    const B = H(t).buffer;
    return T(B);
  }, A.wbg.__wbg_new_cc9018bd6f283b6f = function(t) {
    const B = new Uint8Array(H(t));
    return T(B);
  }, A.wbg.__wbg_set_f25e869e4565d2a2 = function(t, B, C) {
    H(t).set(H(B), C >>> 0);
  }, A.wbg.__wbg_length_0acb1cf9bbaf8519 = function(t) {
    return H(t).length;
  }, A.wbg.__wbg_newwithlength_8f0657faca9f1422 = function(t) {
    const B = new Uint8Array(t >>> 0);
    return T(B);
  }, A.wbg.__wbg_subarray_da527dbd24eafb6b = function(t, B, C) {
    const Q = H(t).subarray(B >>> 0, C >>> 0);
    return T(Q);
  }, A.wbg.__wbindgen_throw = function(t, B) {
    throw new Error(Ui(t, B));
  }, A.wbg.__wbindgen_memory = function() {
    const t = U.memory;
    return T(t);
  }, (typeof I == "string" || typeof Request == "function" && I instanceof Request || typeof URL == "function" && I instanceof URL) && (I = fetch(I));
  const { instance: g, module: i } = await oe(await I, A);
  return U = g.exports, kC.__wbindgen_wasm_module = i, U;
}
let _i;
function ne(I) {
  return _i || (_i = kC(I)), _i;
}
let mi = -1;
const MB = () => (mi === -1 && (mi = YA.null_id()), mi);
class ft extends NC {
  constructor(g = MA.Tidy) {
    super();
    AA(this, "tidy");
    AA(this, "nextId", 1);
    AA(this, "root");
    AA(this, "idToNode", /* @__PURE__ */ new Map());
    if (g === MA.Basic)
      this.tidy = YA.with_basic_layout(15, 15);
    else if (g === MA.Tidy)
      this.tidy = YA.with_tidy_layout(15, 15);
    else if (g === MA.LayeredTidy)
      this.tidy = YA.with_layered_tidy(15, 15);
    else
      throw new Error("not implemented");
    this._register({
      dispose: () => {
        this.tidy.free();
      }
    });
  }
  static async create(g = MA.Tidy) {
    return await ne(), new ft(g);
  }
  changeLayoutType(g) {
    this.tidy.change_layout(g);
  }
  layout(g = !1) {
    g && this.update(), this.tidy.layout();
    const i = this.tidy.get_pos();
    for (let t = 0; t < i.length; t += 3) {
      const B = i[t] | 0, C = this.idToNode.get(B);
      C.x = i[t + 1], C.y = i[t + 2];
    }
  }
  update() {
    const g = new Set(this.idToNode.keys());
    qA(this.root, (i) => {
      var t;
      g.delete(i.id), !this.idToNode.has(i.id) && (this.idToNode.set(i.id, i), this.tidy.add_node(
        i.id,
        i.width,
        i.height,
        (t = i.parentId) != null ? t : MB()
      ));
    });
    for (const i of g)
      this.tidy.remove_node(i), this.idToNode.delete(i);
  }
  set_root(g) {
    var r;
    const i = [g], t = [], B = [], C = [], Q = [];
    for (; i.length; ) {
      const E = i.pop();
      E.id == null && (E.id = this.nextId++), t.push(E.id), B.push(E.width), C.push(E.height), Q.push((r = E.parentId) != null ? r : MB()), this.idToNode.set(E.id, E);
      for (const e of E.children.concat().reverse())
        e.parentId == null && (e.parentId = E.id), i.push(e);
    }
    return this.root = g, this.tidy.data(
      new Uint32Array(t),
      new Float64Array(B),
      new Float64Array(C),
      new Uint32Array(Q)
    ), this.root;
  }
}
var MC = { exports: {} }, qI = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YB;
function se() {
  if (YB)
    return qI;
  YB = 1;
  var I = JB, A = Symbol.for("react.element"), g = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, t = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(Q, r, E) {
    var e, a = {}, o = null, n = null;
    E !== void 0 && (o = "" + E), r.key !== void 0 && (o = "" + r.key), r.ref !== void 0 && (n = r.ref);
    for (e in r)
      i.call(r, e) && !B.hasOwnProperty(e) && (a[e] = r[e]);
    if (Q && Q.defaultProps)
      for (e in r = Q.defaultProps, r)
        a[e] === void 0 && (a[e] = r[e]);
    return { $$typeof: A, type: Q, key: o, ref: n, props: a, _owner: t.current };
  }
  return qI.Fragment = g, qI.jsx = C, qI.jsxs = C, qI;
}
var TI = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LB;
function he() {
  return LB || (LB = 1, process.env.NODE_ENV !== "production" && function() {
    var I = JB, A = Symbol.for("react.element"), g = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), Q = Symbol.for("react.context"), r = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), e = Symbol.for("react.suspense_list"), a = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), n = Symbol.for("react.offscreen"), h = Symbol.iterator, l = "@@iterator";
    function c(f) {
      if (f === null || typeof f != "object")
        return null;
      var w = h && f[h] || f[l];
      return typeof w == "function" ? w : null;
    }
    var s = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(f) {
      {
        for (var w = arguments.length, v = new Array(w > 1 ? w - 1 : 0), R = 1; R < w; R++)
          v[R - 1] = arguments[R];
        D("error", f, v);
      }
    }
    function D(f, w, v) {
      {
        var R = s.ReactDebugCurrentFrame, J = R.getStackAddendum();
        J !== "" && (w += "%s", v = v.concat([J]));
        var m = v.map(function(Y) {
          return String(Y);
        });
        m.unshift("Warning: " + w), Function.prototype.apply.call(console[f], console, m);
      }
    }
    var d = !1, p = !1, y = !1, N = !1, G = !1, S;
    S = Symbol.for("react.module.reference");
    function M(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === i || f === B || G || f === t || f === E || f === e || N || f === n || d || p || y || typeof f == "object" && f !== null && (f.$$typeof === o || f.$$typeof === a || f.$$typeof === C || f.$$typeof === Q || f.$$typeof === r || f.$$typeof === S || f.getModuleId !== void 0));
    }
    function F(f, w, v) {
      var R = f.displayName;
      if (R)
        return R;
      var J = w.displayName || w.name || "";
      return J !== "" ? v + "(" + J + ")" : v;
    }
    function L(f) {
      return f.displayName || "Context";
    }
    function K(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case i:
          return "Fragment";
        case g:
          return "Portal";
        case B:
          return "Profiler";
        case t:
          return "StrictMode";
        case E:
          return "Suspense";
        case e:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case Q:
            var w = f;
            return L(w) + ".Consumer";
          case C:
            var v = f;
            return L(v._context) + ".Provider";
          case r:
            return F(f, f.render, "ForwardRef");
          case a:
            var R = f.displayName || null;
            return R !== null ? R : K(f.type) || "Memo";
          case o: {
            var J = f, m = J._payload, Y = J._init;
            try {
              return K(Y(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, X = 0, iA, vA, aI, oI, TA, xA, pA;
    function GA() {
    }
    GA.__reactDisabledLog = !0;
    function LA() {
      {
        if (X === 0) {
          iA = console.log, vA = console.info, aI = console.warn, oI = console.error, TA = console.group, xA = console.groupCollapsed, pA = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: GA,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        X++;
      }
    }
    function tg() {
      {
        if (X--, X === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, f, {
              value: iA
            }),
            info: Z({}, f, {
              value: vA
            }),
            warn: Z({}, f, {
              value: aI
            }),
            error: Z({}, f, {
              value: oI
            }),
            group: Z({}, f, {
              value: TA
            }),
            groupCollapsed: Z({}, f, {
              value: xA
            }),
            groupEnd: Z({}, f, {
              value: pA
            })
          });
        }
        X < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var MI = s.ReactCurrentDispatcher, nI;
    function sI(f, w, v) {
      {
        if (nI === void 0)
          try {
            throw Error();
          } catch (J) {
            var R = J.stack.trim().match(/\n( *(at )?)/);
            nI = R && R[1] || "";
          }
        return `
` + nI + f;
      }
    }
    var YI = !1, cA;
    {
      var Bg = typeof WeakMap == "function" ? WeakMap : Map;
      cA = new Bg();
    }
    function NA(f, w) {
      if (!f || YI)
        return "";
      {
        var v = cA.get(f);
        if (v !== void 0)
          return v;
      }
      var R;
      YI = !0;
      var J = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = MI.current, MI.current = null, LA();
      try {
        if (w) {
          var Y = function() {
            throw Error();
          };
          if (Object.defineProperty(Y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Y, []);
            } catch (RA) {
              R = RA;
            }
            Reflect.construct(f, [], Y);
          } else {
            try {
              Y.call();
            } catch (RA) {
              R = RA;
            }
            f.call(Y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (RA) {
            R = RA;
          }
          f();
        }
      } catch (RA) {
        if (RA && R && typeof RA.stack == "string") {
          for (var k = RA.stack.split(`
`), O = R.stack.split(`
`), b = k.length - 1, q = O.length - 1; b >= 1 && q >= 0 && k[b] !== O[q]; )
            q--;
          for (; b >= 1 && q >= 0; b--, q--)
            if (k[b] !== O[q]) {
              if (b !== 1 || q !== 1)
                do
                  if (b--, q--, q < 0 || k[b] !== O[q]) {
                    var QA = `
` + k[b].replace(" at new ", " at ");
                    return f.displayName && QA.includes("<anonymous>") && (QA = QA.replace("<anonymous>", f.displayName)), typeof f == "function" && cA.set(f, QA), QA;
                  }
                while (b >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        YI = !1, MI.current = m, tg(), Error.prepareStackTrace = J;
      }
      var fI = f ? f.displayName || f.name : "", St = fI ? sI(fI) : "";
      return typeof f == "function" && cA.set(f, St), St;
    }
    function ZA(f, w, v) {
      return NA(f, !1);
    }
    function CA(f) {
      var w = f.prototype;
      return !!(w && w.isReactComponent);
    }
    function Cg(f, w, v) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return NA(f, CA(f));
      if (typeof f == "string")
        return sI(f);
      switch (f) {
        case E:
          return sI("Suspense");
        case e:
          return sI("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case r:
            return ZA(f.render);
          case a:
            return Cg(f.type, w, v);
          case o: {
            var R = f, J = R._payload, m = R._init;
            try {
              return Cg(m(J), w, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Qg = Object.prototype.hasOwnProperty, ct = {}, ut = s.ReactDebugCurrentFrame;
    function rg(f) {
      if (f) {
        var w = f._owner, v = Cg(f.type, f._source, w ? w.type : null);
        ut.setExtraStackFrame(v);
      } else
        ut.setExtraStackFrame(null);
    }
    function YC(f, w, v, R, J) {
      {
        var m = Function.call.bind(Qg);
        for (var Y in f)
          if (m(f, Y)) {
            var k = void 0;
            try {
              if (typeof f[Y] != "function") {
                var O = Error((R || "React class") + ": " + v + " type `" + Y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[Y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              k = f[Y](w, Y, R, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              k = b;
            }
            k && !(k instanceof Error) && (rg(J), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", v, Y, typeof k), rg(null)), k instanceof Error && !(k.message in ct) && (ct[k.message] = !0, rg(J), u("Failed %s type: %s", v, k.message), rg(null));
          }
      }
    }
    var LC = Array.isArray;
    function $g(f) {
      return LC(f);
    }
    function JC(f) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, v = w && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return v;
      }
    }
    function UC(f) {
      try {
        return lt(f), !1;
      } catch {
        return !0;
      }
    }
    function lt(f) {
      return "" + f;
    }
    function Dt(f) {
      if (UC(f))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", JC(f)), lt(f);
    }
    var LI = s.ReactCurrentOwner, _C = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, dt, Ai;
    Ai = {};
    function mC(f) {
      if (Qg.call(f, "ref")) {
        var w = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function HC(f) {
      if (Qg.call(f, "key")) {
        var w = Object.getOwnPropertyDescriptor(f, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function bC(f, w) {
      if (typeof f.ref == "string" && LI.current && w && LI.current.stateNode !== w) {
        var v = K(LI.current.type);
        Ai[v] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(LI.current.type), f.ref), Ai[v] = !0);
      }
    }
    function KC(f, w) {
      {
        var v = function() {
          wt || (wt = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function qC(f, w) {
      {
        var v = function() {
          dt || (dt = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        v.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var TC = function(f, w, v, R, J, m, Y) {
      var k = {
        $$typeof: A,
        type: f,
        key: w,
        ref: v,
        props: Y,
        _owner: m
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: J
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function xC(f, w, v, R, J) {
      {
        var m, Y = {}, k = null, O = null;
        v !== void 0 && (Dt(v), k = "" + v), HC(w) && (Dt(w.key), k = "" + w.key), mC(w) && (O = w.ref, bC(w, J));
        for (m in w)
          Qg.call(w, m) && !_C.hasOwnProperty(m) && (Y[m] = w[m]);
        if (f && f.defaultProps) {
          var b = f.defaultProps;
          for (m in b)
            Y[m] === void 0 && (Y[m] = b[m]);
        }
        if (k || O) {
          var q = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          k && KC(Y, q), O && qC(Y, q);
        }
        return TC(f, k, O, J, R, LI.current, Y);
      }
    }
    var Ii = s.ReactCurrentOwner, yt = s.ReactDebugCurrentFrame;
    function hI(f) {
      if (f) {
        var w = f._owner, v = Cg(f.type, f._source, w ? w.type : null);
        yt.setExtraStackFrame(v);
      } else
        yt.setExtraStackFrame(null);
    }
    var gi;
    gi = !1;
    function ii(f) {
      return typeof f == "object" && f !== null && f.$$typeof === A;
    }
    function vt() {
      {
        if (Ii.current) {
          var f = K(Ii.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function ZC(f) {
      {
        if (f !== void 0) {
          var w = f.fileName.replace(/^.*[\\\/]/, ""), v = f.lineNumber;
          return `

Check your code at ` + w + ":" + v + ".";
        }
        return "";
      }
    }
    var pt = {};
    function PC(f) {
      {
        var w = vt();
        if (!w) {
          var v = typeof f == "string" ? f : f.displayName || f.name;
          v && (w = `

Check the top-level render call using <` + v + ">.");
        }
        return w;
      }
    }
    function Gt(f, w) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var v = PC(w);
        if (pt[v])
          return;
        pt[v] = !0;
        var R = "";
        f && f._owner && f._owner !== Ii.current && (R = " It was passed a child from " + K(f._owner.type) + "."), hI(f), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, R), hI(null);
      }
    }
    function Nt(f, w) {
      {
        if (typeof f != "object")
          return;
        if ($g(f))
          for (var v = 0; v < f.length; v++) {
            var R = f[v];
            ii(R) && Gt(R, w);
          }
        else if (ii(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var J = c(f);
          if (typeof J == "function" && J !== f.entries)
            for (var m = J.call(f), Y; !(Y = m.next()).done; )
              ii(Y.value) && Gt(Y.value, w);
        }
      }
    }
    function WC(f) {
      {
        var w = f.type;
        if (w == null || typeof w == "string")
          return;
        var v;
        if (typeof w == "function")
          v = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === r || w.$$typeof === a))
          v = w.propTypes;
        else
          return;
        if (v) {
          var R = K(w);
          YC(v, f.props, "prop", R, f);
        } else if (w.PropTypes !== void 0 && !gi) {
          gi = !0;
          var J = K(w);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", J || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function XC(f) {
      {
        for (var w = Object.keys(f.props), v = 0; v < w.length; v++) {
          var R = w[v];
          if (R !== "children" && R !== "key") {
            hI(f), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), hI(null);
            break;
          }
        }
        f.ref !== null && (hI(f), u("Invalid attribute `ref` supplied to `React.Fragment`."), hI(null));
      }
    }
    function Rt(f, w, v, R, J, m) {
      {
        var Y = M(f);
        if (!Y) {
          var k = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = ZC(J);
          O ? k += O : k += vt();
          var b;
          f === null ? b = "null" : $g(f) ? b = "array" : f !== void 0 && f.$$typeof === A ? (b = "<" + (K(f.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : b = typeof f, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, k);
        }
        var q = xC(f, w, v, J, m);
        if (q == null)
          return q;
        if (Y) {
          var QA = w.children;
          if (QA !== void 0)
            if (R)
              if ($g(QA)) {
                for (var fI = 0; fI < QA.length; fI++)
                  Nt(QA[fI], f);
                Object.freeze && Object.freeze(QA);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(QA, f);
        }
        return f === i ? XC(q) : WC(q), q;
      }
    }
    function zC(f, w, v) {
      return Rt(f, w, v, !0);
    }
    function VC(f, w, v) {
      return Rt(f, w, v, !1);
    }
    var OC = VC, jC = zC;
    TI.Fragment = i, TI.jsx = OC, TI.jsxs = jC;
  }()), TI;
}
(function(I) {
  process.env.NODE_ENV === "production" ? I.exports = se() : I.exports = he();
})(MC);
const fe = MC.exports.jsx;
var ce = /* @__PURE__ */ ((I) => (I.Tidy = "tidy", I.Basic = "basic", I.LayeredTidy = "layeredTidy", I))(ce || {});
function ue(I) {
  if (I == null)
    return MA.Tidy;
  switch (I) {
    case "basic":
      return MA.Basic;
    case "tidy":
      return MA.Tidy;
    case "layeredTidy":
      return MA.LayeredTidy;
    default:
      throw new Error();
  }
}
const Ge = ({
  root: I,
  layoutType: A,
  updateTrigger: g,
  theme: i,
  style: t
}) => {
  const B = ti(), C = ti(null), Q = ti(), r = ue(A);
  return Ft(() => {
    !Q.current || !B.current || (Q.current.changeLayoutType(r), Q.current.layout(!0), B.current.update());
  }, [g, r]), Ft(() => {
    let E = !1;
    return (async () => {
      if (B.current = new Ce(C.current, i), Q.current = await ft.create(r), E)
        return;
      const a = Q.current.set_root(I);
      Q.current.layout(), B.current.init(a);
    })(), () => {
      var a, o;
      E = !0, (a = Q.current) == null || a.dispose(), Q.current = void 0, (o = B.current) == null || o.clear();
    };
  }, [I]), IQ(() => () => {
    var E;
    (E = B.current) == null || E.dispose(), B.current = void 0;
  }, []), /* @__PURE__ */ fe("div", {
    ref: C,
    style: {
      width: "100%",
      height: "100%",
      ...t
    }
  });
};
export {
  MA as LayoutType,
  ce as LayoutTypeStr,
  Ce as Renderer,
  Ge as TidyComponent,
  ft as TidyLayout,
  Xg as createNode,
  we as createTree,
  de as deleteRandomNode,
  ne as initWasm,
  ve as insertRandomNodeBreadthFirst,
  ye as insertRandomNodeDepthFirst,
  pe as node,
  Be as nodeNum,
  qA as visit
};
