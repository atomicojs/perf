// ../../node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c;
var s;
var a;
var h = {};
var p = [];
var v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var y = Array.isArray;
function d(n2, l4) {
  for (var u5 in l4)
    n2[u5] = l4[u5];
  return n2;
}
function w(n2) {
  var l4 = n2.parentNode;
  l4 && l4.removeChild(n2);
}
function _(l4, u5, t3) {
  var i5, o3, r4, f4 = {};
  for (r4 in u5)
    "key" == r4 ? i5 = u5[r4] : "ref" == r4 ? o3 = u5[r4] : f4[r4] = u5[r4];
  if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l4 && null != l4.defaultProps)
    for (r4 in l4.defaultProps)
      void 0 === f4[r4] && (f4[r4] = l4.defaultProps[r4]);
  return g(l4, f4, i5, o3, null);
}
function g(n2, t3, i5, o3, r4) {
  var f4 = { type: n2, props: t3, key: i5, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: null == r4 ? ++u : r4, __i: -1, __u: 0 };
  return null == r4 && null != l.vnode && l.vnode(f4), f4;
}
function k(n2) {
  return n2.children;
}
function b(n2, l4) {
  this.props = n2, this.context = l4;
}
function x(n2, l4) {
  if (null == l4)
    return n2.__ ? x(n2.__, n2.__i + 1) : null;
  for (var u5; l4 < n2.__k.length; l4++)
    if (null != (u5 = n2.__k[l4]) && null != u5.__e)
      return u5.__e;
  return "function" == typeof n2.type ? x(n2) : null;
}
function C(n2) {
  var l4, u5;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
      if (null != (u5 = n2.__k[l4]) && null != u5.__e) {
        n2.__e = n2.__c.base = u5.__e;
        break;
      }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !P.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(P);
}
function P() {
  var n2, u5, t3, o3, r4, e3, c4, s4;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (u5 = i.length, o3 = void 0, e3 = (r4 = (t3 = n2).__v).__e, c4 = [], s4 = [], t3.__P && ((o3 = d({}, r4)).__v = r4.__v + 1, l.vnode && l.vnode(o3), O(t3.__P, o3, r4, t3.__n, t3.__P.namespaceURI, 32 & r4.__u ? [e3] : null, c4, null == e3 ? x(r4) : e3, !!(32 & r4.__u), s4), o3.__v = r4.__v, o3.__.__k[o3.__i] = o3, j(c4, o3, s4), o3.__e != e3 && C(o3)), i.length > u5 && i.sort(f));
  P.__r = 0;
}
function S(n2, l4, u5, t3, i5, o3, r4, f4, e3, c4, s4) {
  var a4, v3, y2, d3, w3, _2 = t3 && t3.__k || p, g2 = l4.length;
  for (u5.__d = e3, $(u5, l4, _2), e3 = u5.__d, a4 = 0; a4 < g2; a4++)
    null != (y2 = u5.__k[a4]) && "boolean" != typeof y2 && "function" != typeof y2 && (v3 = -1 === y2.__i ? h : _2[y2.__i] || h, y2.__i = a4, O(n2, y2, v3, i5, o3, r4, f4, e3, c4, s4), d3 = y2.__e, y2.ref && v3.ref != y2.ref && (v3.ref && N(v3.ref, null, y2), s4.push(y2.ref, y2.__c || d3, y2)), null == w3 && null != d3 && (w3 = d3), 65536 & y2.__u || v3.__k === y2.__k ? e3 = I(y2, e3, n2) : "function" == typeof y2.type && void 0 !== y2.__d ? e3 = y2.__d : d3 && (e3 = d3.nextSibling), y2.__d = void 0, y2.__u &= -196609);
  u5.__d = e3, u5.__e = w3;
}
function $(n2, l4, u5) {
  var t3, i5, o3, r4, f4, e3 = l4.length, c4 = u5.length, s4 = c4, a4 = 0;
  for (n2.__k = [], t3 = 0; t3 < e3; t3++)
    r4 = t3 + a4, null != (i5 = n2.__k[t3] = null == (i5 = l4[t3]) || "boolean" == typeof i5 || "function" == typeof i5 ? null : "string" == typeof i5 || "number" == typeof i5 || "bigint" == typeof i5 || i5.constructor == String ? g(null, i5, null, null, null) : y(i5) ? g(k, { children: i5 }, null, null, null) : void 0 === i5.constructor && i5.__b > 0 ? g(i5.type, i5.props, i5.key, i5.ref ? i5.ref : null, i5.__v) : i5) ? (i5.__ = n2, i5.__b = n2.__b + 1, f4 = L(i5, u5, r4, s4), i5.__i = f4, o3 = null, -1 !== f4 && (s4--, (o3 = u5[f4]) && (o3.__u |= 131072)), null == o3 || null === o3.__v ? (-1 == f4 && a4--, "function" != typeof i5.type && (i5.__u |= 65536)) : f4 !== r4 && (f4 == r4 - 1 ? a4-- : f4 == r4 + 1 ? a4++ : f4 > r4 ? s4 > e3 - r4 ? a4 += f4 - r4 : a4-- : f4 < r4 && (f4 == r4 - a4 ? a4 -= f4 - r4 : a4++), f4 !== t3 + a4 && (i5.__u |= 65536))) : (o3 = u5[r4]) && null == o3.key && o3.__e && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3, false), u5[r4] = null, s4--);
  if (s4)
    for (t3 = 0; t3 < c4; t3++)
      null != (o3 = u5[t3]) && 0 == (131072 & o3.__u) && (o3.__e == n2.__d && (n2.__d = x(o3)), V(o3, o3));
}
function I(n2, l4, u5) {
  var t3, i5;
  if ("function" == typeof n2.type) {
    for (t3 = n2.__k, i5 = 0; t3 && i5 < t3.length; i5++)
      t3[i5] && (t3[i5].__ = n2, l4 = I(t3[i5], l4, u5));
    return l4;
  }
  n2.__e != l4 && (l4 && n2.type && !u5.contains(l4) && (l4 = x(n2)), u5.insertBefore(n2.__e, l4 || null), l4 = n2.__e);
  do {
    l4 = l4 && l4.nextSibling;
  } while (null != l4 && 8 === l4.nodeType);
  return l4;
}
function L(n2, l4, u5, t3) {
  var i5 = n2.key, o3 = n2.type, r4 = u5 - 1, f4 = u5 + 1, e3 = l4[u5];
  if (null === e3 || e3 && i5 == e3.key && o3 === e3.type && 0 == (131072 & e3.__u))
    return u5;
  if (t3 > (null != e3 && 0 == (131072 & e3.__u) ? 1 : 0))
    for (; r4 >= 0 || f4 < l4.length; ) {
      if (r4 >= 0) {
        if ((e3 = l4[r4]) && 0 == (131072 & e3.__u) && i5 == e3.key && o3 === e3.type)
          return r4;
        r4--;
      }
      if (f4 < l4.length) {
        if ((e3 = l4[f4]) && 0 == (131072 & e3.__u) && i5 == e3.key && o3 === e3.type)
          return f4;
        f4++;
      }
    }
  return -1;
}
function T(n2, l4, u5) {
  "-" === l4[0] ? n2.setProperty(l4, null == u5 ? "" : u5) : n2[l4] = null == u5 ? "" : "number" != typeof u5 || v.test(l4) ? u5 : u5 + "px";
}
function A(n2, l4, u5, t3, i5) {
  var o3;
  n:
    if ("style" === l4)
      if ("string" == typeof u5)
        n2.style.cssText = u5;
      else {
        if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3)
          for (l4 in t3)
            u5 && l4 in u5 || T(n2.style, l4, "");
        if (u5)
          for (l4 in u5)
            t3 && u5[l4] === t3[l4] || T(n2.style, l4, u5[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o3 = l4 !== (l4 = l4.replace(/(PointerCapture)$|Capture$/i, "$1")), l4 = l4.toLowerCase() in n2 || "onFocusOut" === l4 || "onFocusIn" === l4 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o3] = u5, u5 ? t3 ? u5.u = t3.u : (u5.u = e, n2.addEventListener(l4, o3 ? s : c, o3)) : n2.removeEventListener(l4, o3 ? s : c, o3);
    else {
      if ("http://www.w3.org/2000/svg" == i5)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l4 && "height" != l4 && "href" != l4 && "list" != l4 && "form" != l4 && "tabIndex" != l4 && "download" != l4 && "rowSpan" != l4 && "colSpan" != l4 && "role" != l4 && "popover" != l4 && l4 in n2)
        try {
          n2[l4] = null == u5 ? "" : u5;
          break n;
        } catch (n3) {
        }
      "function" == typeof u5 || (null == u5 || false === u5 && "-" !== l4[4] ? n2.removeAttribute(l4) : n2.setAttribute(l4, "popover" == l4 && 1 == u5 ? "" : u5));
    }
}
function F(n2) {
  return function(u5) {
    if (this.l) {
      var t3 = this.l[u5.type + n2];
      if (null == u5.t)
        u5.t = e++;
      else if (u5.t < t3.u)
        return;
      return t3(l.event ? l.event(u5) : u5);
    }
  };
}
function O(n2, u5, t3, i5, o3, r4, f4, e3, c4, s4) {
  var a4, h3, p4, v3, w3, _2, g2, m2, x2, C2, M2, P2, $2, I2, H, L2, T2 = u5.type;
  if (void 0 !== u5.constructor)
    return null;
  128 & t3.__u && (c4 = !!(32 & t3.__u), r4 = [e3 = u5.__e = t3.__e]), (a4 = l.__b) && a4(u5);
  n:
    if ("function" == typeof T2)
      try {
        if (m2 = u5.props, x2 = "prototype" in T2 && T2.prototype.render, C2 = (a4 = T2.contextType) && i5[a4.__c], M2 = a4 ? C2 ? C2.props.value : a4.__ : i5, t3.__c ? g2 = (h3 = u5.__c = t3.__c).__ = h3.__E : (x2 ? u5.__c = h3 = new T2(m2, M2) : (u5.__c = h3 = new b(m2, M2), h3.constructor = T2, h3.render = q), C2 && C2.sub(h3), h3.props = m2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i5, p4 = h3.__d = true, h3.__h = [], h3._sb = []), x2 && null == h3.__s && (h3.__s = h3.state), x2 && null != T2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, T2.getDerivedStateFromProps(m2, h3.__s))), v3 = h3.props, w3 = h3.state, h3.__v = u5, p4)
          x2 && null == T2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), x2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
        else {
          if (x2 && null == T2.getDerivedStateFromProps && m2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(m2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(m2, h3.__s, M2) || u5.__v === t3.__v)) {
            for (u5.__v !== t3.__v && (h3.props = m2, h3.state = h3.__s, h3.__d = false), u5.__e = t3.__e, u5.__k = t3.__k, u5.__k.forEach(function(n3) {
              n3 && (n3.__ = u5);
            }), P2 = 0; P2 < h3._sb.length; P2++)
              h3.__h.push(h3._sb[P2]);
            h3._sb = [], h3.__h.length && f4.push(h3);
            break n;
          }
          null != h3.componentWillUpdate && h3.componentWillUpdate(m2, h3.__s, M2), x2 && null != h3.componentDidUpdate && h3.__h.push(function() {
            h3.componentDidUpdate(v3, w3, _2);
          });
        }
        if (h3.context = M2, h3.props = m2, h3.__P = n2, h3.__e = false, $2 = l.__r, I2 = 0, x2) {
          for (h3.state = h3.__s, h3.__d = false, $2 && $2(u5), a4 = h3.render(h3.props, h3.state, h3.context), H = 0; H < h3._sb.length; H++)
            h3.__h.push(h3._sb[H]);
          h3._sb = [];
        } else
          do {
            h3.__d = false, $2 && $2(u5), a4 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
          } while (h3.__d && ++I2 < 25);
        h3.state = h3.__s, null != h3.getChildContext && (i5 = d(d({}, i5), h3.getChildContext())), x2 && !p4 && null != h3.getSnapshotBeforeUpdate && (_2 = h3.getSnapshotBeforeUpdate(v3, w3)), S(n2, y(L2 = null != a4 && a4.type === k && null == a4.key ? a4.props.children : a4) ? L2 : [L2], u5, t3, i5, o3, r4, f4, e3, c4, s4), h3.base = u5.__e, u5.__u &= -161, h3.__h.length && f4.push(h3), g2 && (h3.__E = h3.__ = null);
      } catch (n3) {
        if (u5.__v = null, c4 || null != r4) {
          for (u5.__u |= c4 ? 160 : 32; e3 && 8 === e3.nodeType && e3.nextSibling; )
            e3 = e3.nextSibling;
          r4[r4.indexOf(e3)] = null, u5.__e = e3;
        } else
          u5.__e = t3.__e, u5.__k = t3.__k;
        l.__e(n3, u5, t3);
      }
    else
      null == r4 && u5.__v === t3.__v ? (u5.__k = t3.__k, u5.__e = t3.__e) : u5.__e = z(t3.__e, u5, t3, i5, o3, r4, f4, c4, s4);
  (a4 = l.diffed) && a4(u5);
}
function j(n2, u5, t3) {
  u5.__d = void 0;
  for (var i5 = 0; i5 < t3.length; i5++)
    N(t3[i5], t3[++i5], t3[++i5]);
  l.__c && l.__c(u5, n2), n2.some(function(u6) {
    try {
      n2 = u6.__h, u6.__h = [], n2.some(function(n3) {
        n3.call(u6);
      });
    } catch (n3) {
      l.__e(n3, u6.__v);
    }
  });
}
function z(l4, u5, t3, i5, o3, r4, f4, e3, c4) {
  var s4, a4, p4, v3, d3, _2, g2, m2 = t3.props, k3 = u5.props, b2 = u5.type;
  if ("svg" === b2 ? o3 = "http://www.w3.org/2000/svg" : "math" === b2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != r4) {
    for (s4 = 0; s4 < r4.length; s4++)
      if ((d3 = r4[s4]) && "setAttribute" in d3 == !!b2 && (b2 ? d3.localName === b2 : 3 === d3.nodeType)) {
        l4 = d3, r4[s4] = null;
        break;
      }
  }
  if (null == l4) {
    if (null === b2)
      return document.createTextNode(k3);
    l4 = document.createElementNS(o3, b2, k3.is && k3), r4 = null, e3 = false;
  }
  if (null === b2)
    m2 === k3 || e3 && l4.data === k3 || (l4.data = k3);
  else {
    if (r4 = r4 && n.call(l4.childNodes), m2 = t3.props || h, !e3 && null != r4)
      for (m2 = {}, s4 = 0; s4 < l4.attributes.length; s4++)
        m2[(d3 = l4.attributes[s4]).name] = d3.value;
    for (s4 in m2)
      if (d3 = m2[s4], "children" == s4)
        ;
      else if ("dangerouslySetInnerHTML" == s4)
        p4 = d3;
      else if ("key" !== s4 && !(s4 in k3)) {
        if ("value" == s4 && "defaultValue" in k3 || "checked" == s4 && "defaultChecked" in k3)
          continue;
        A(l4, s4, null, d3, o3);
      }
    for (s4 in k3)
      d3 = k3[s4], "children" == s4 ? v3 = d3 : "dangerouslySetInnerHTML" == s4 ? a4 = d3 : "value" == s4 ? _2 = d3 : "checked" == s4 ? g2 = d3 : "key" === s4 || e3 && "function" != typeof d3 || m2[s4] === d3 || A(l4, s4, d3, m2[s4], o3);
    if (a4)
      e3 || p4 && (a4.__html === p4.__html || a4.__html === l4.innerHTML) || (l4.innerHTML = a4.__html), u5.__k = [];
    else if (p4 && (l4.innerHTML = ""), S(l4, y(v3) ? v3 : [v3], u5, t3, i5, "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : o3, r4, f4, r4 ? r4[0] : t3.__k && x(t3, 0), e3, c4), null != r4)
      for (s4 = r4.length; s4--; )
        null != r4[s4] && w(r4[s4]);
    e3 || (s4 = "value", void 0 !== _2 && (_2 !== l4[s4] || "progress" === b2 && !_2 || "option" === b2 && _2 !== m2[s4]) && A(l4, s4, _2, m2[s4], o3), s4 = "checked", void 0 !== g2 && g2 !== l4[s4] && A(l4, s4, g2, m2[s4], o3));
  }
  return l4;
}
function N(n2, u5, t3) {
  try {
    if ("function" == typeof n2) {
      var i5 = "function" == typeof n2.__u;
      i5 && n2.__u(), i5 && null == u5 || (n2.__u = n2(u5));
    } else
      n2.current = u5;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function V(n2, u5, t3) {
  var i5, o3;
  if (l.unmount && l.unmount(n2), (i5 = n2.ref) && (i5.current && i5.current !== n2.__e || N(i5, null, u5)), null != (i5 = n2.__c)) {
    if (i5.componentWillUnmount)
      try {
        i5.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u5);
      }
    i5.base = i5.__P = null;
  }
  if (i5 = n2.__k)
    for (o3 = 0; o3 < i5.length; o3++)
      i5[o3] && V(i5[o3], u5, t3 || "function" != typeof n2.type);
  t3 || null == n2.__e || w(n2.__e), n2.__c = n2.__ = n2.__e = n2.__d = void 0;
}
function q(n2, l4, u5) {
  return this.constructor(n2, u5);
}
function B(u5, t3, i5) {
  var o3, r4, f4, e3;
  l.__ && l.__(u5, t3), r4 = (o3 = "function" == typeof i5) ? null : i5 && i5.__k || t3.__k, f4 = [], e3 = [], O(t3, u5 = (!o3 && i5 || t3).__k = _(k, null, [u5]), r4 || h, h, t3.namespaceURI, !o3 && i5 ? [i5] : r4 ? null : t3.firstChild ? n.call(t3.childNodes) : null, f4, !o3 && i5 ? i5 : r4 ? r4.__e : t3.firstChild, o3, e3), j(f4, u5, e3);
}
function D(n2, l4) {
  B(n2, l4, D);
}
function E(l4, u5, t3) {
  var i5, o3, r4, f4, e3 = d({}, l4.props);
  for (r4 in l4.type && l4.type.defaultProps && (f4 = l4.type.defaultProps), u5)
    "key" == r4 ? i5 = u5[r4] : "ref" == r4 ? o3 = u5[r4] : e3[r4] = void 0 === u5[r4] && void 0 !== f4 ? f4[r4] : u5[r4];
  return arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), g(l4.type, e3, i5 || l4.key, o3 || l4.ref, null);
}
n = p.slice, l = { __e: function(n2, l4, u5, t3) {
  for (var i5, o3, r4; l4 = l4.__; )
    if ((i5 = l4.__c) && !i5.__)
      try {
        if ((o3 = i5.constructor) && null != o3.getDerivedStateFromError && (i5.setState(o3.getDerivedStateFromError(n2)), r4 = i5.__d), null != i5.componentDidCatch && (i5.componentDidCatch(n2, t3 || {}), r4 = i5.__d), r4)
          return i5.__E = i5;
      } catch (l5) {
        n2 = l5;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, b.prototype.setState = function(n2, l4) {
  var u5;
  u5 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u5), this.props)), n2 && d(u5, n2), null != n2 && this.__v && (l4 && this._sb.push(l4), M(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l4) {
  return n2.__v.__b - l4.__v.__b;
}, P.__r = 0, e = 0, c = F(false), s = F(true), a = 0;

// ../../node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function r2() {
  return (r2 = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var n2 = arguments[e3];
      for (var o3 in n2)
        Object.prototype.hasOwnProperty.call(n2, o3) && (t3[o3] = n2[o3]);
    }
    return t3;
  }).apply(this, arguments);
}
var i2 = ["context", "children"];
function a2(t3) {
  this.getChildContext = function() {
    return t3.context;
  };
  var e3 = t3.children, n2 = function(t4, e4) {
    if (null == t4)
      return {};
    var n3, o3, r4 = {}, i5 = Object.keys(t4);
    for (o3 = 0; o3 < i5.length; o3++)
      e4.indexOf(n3 = i5[o3]) >= 0 || (r4[n3] = t4[n3]);
    return r4;
  }(t3, i2);
  return E(e3, n2);
}
function s2() {
  var o3 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
  this.dispatchEvent(o3), this._vdom = _(a2, r2({}, this._props, { context: o3.detail.context }), function e3(n2, o4) {
    if (3 === n2.nodeType)
      return n2.data;
    if (1 !== n2.nodeType)
      return null;
    var r4 = [], i5 = {}, a4 = 0, s4 = n2.attributes, l4 = n2.childNodes;
    for (a4 = s4.length; a4--; )
      "slot" !== s4[a4].name && (i5[s4[a4].name] = s4[a4].value, i5[c2(s4[a4].name)] = s4[a4].value);
    for (a4 = l4.length; a4--; ) {
      var u5 = e3(l4[a4], null), d3 = l4[a4].slot;
      d3 ? i5[d3] = _(p2, { name: d3 }, u5) : r4[a4] = u5;
    }
    var h3 = o4 ? _(p2, null, r4) : r4;
    return _(o4 || n2.nodeName.toLowerCase(), i5, h3);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? D : B)(this._vdom, this._root);
}
function c2(t3) {
  return t3.replace(/-(\w)/g, function(t4, e3) {
    return e3 ? e3.toUpperCase() : "";
  });
}
function l2(t3, e3, r4) {
  if (this._vdom) {
    var i5 = {};
    i5[t3] = r4 = null == r4 ? void 0 : r4, i5[c2(t3)] = r4, this._vdom = E(this._vdom, i5), B(this._vdom, this._root);
  }
}
function u2() {
  B(this._vdom = null, this._root);
}
function p2(e3, n2) {
  var o3 = this;
  return _("slot", r2({}, e3, { ref: function(t3) {
    t3 ? (o3.ref = t3, o3._listener || (o3._listener = function(t4) {
      t4.stopPropagation(), t4.detail.context = n2;
    }, t3.addEventListener("_preact", o3._listener))) : o3.ref.removeEventListener("_preact", o3._listener);
  } }));
}
function preact_custom_element_esm_default(t3, e3, n2, o3) {
  function r4() {
    var e4 = Reflect.construct(HTMLElement, [], r4);
    return e4._vdomComponent = t3, e4._root = o3 && o3.shadow ? e4.attachShadow({ mode: o3.mode || "open" }) : e4, e4;
  }
  return (r4.prototype = Object.create(HTMLElement.prototype)).constructor = r4, r4.prototype.connectedCallback = s2, r4.prototype.attributeChangedCallback = l2, r4.prototype.disconnectedCallback = u2, n2 = n2 || t3.observedAttributes || Object.keys(t3.propTypes || {}), r4.observedAttributes = n2, n2.forEach(function(t4) {
    Object.defineProperty(r4.prototype, t4, { get: function() {
      return this._vdom.props[t4];
    }, set: function(e4) {
      this._vdom ? this.attributeChangedCallback(t4, null, e4) : (this._props || (this._props = {}), this._props[t4] = e4, this.connectedCallback());
      var n3 = typeof e4;
      null != e4 && "string" !== n3 && "boolean" !== n3 && "number" !== n3 || this.setAttribute(t4, e4);
    } });
  }), customElements.define(e3 || t3.tagName || t3.displayName || t3.name, r4);
}

// ../../node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r3;
var u3;
var i3;
var o2 = 0;
var f2 = [];
var c3 = l;
var e2 = c3.__b;
var a3 = c3.__r;
var v2 = c3.diffed;
var l3 = c3.__c;
var m = c3.unmount;
var s3 = c3.__;
function d2(n2, t3) {
  c3.__h && c3.__h(r3, n2, o2 || t3), o2 = 0;
  var u5 = r3.__H || (r3.__H = { __: [], __h: [] });
  return n2 >= u5.__.length && u5.__.push({}), u5.__[n2];
}
function h2(n2) {
  return o2 = 1, p3(D2, n2);
}
function p3(n2, u5, i5) {
  var o3 = d2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i5 ? i5(u5) : D2(void 0, u5), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r4 = o3.t(t3, n3);
    t3 !== r4 && (o3.__N = [r4, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r3, !r3.u)) {
    var f4 = function(n3, t3, r4) {
      if (!o3.__c.__H)
        return true;
      var u6 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u6.every(function(n4) {
        return !n4.__N;
      }))
        return !c4 || c4.call(this, n3, t3, r4);
      var i6 = false;
      return u6.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i6 = true);
        }
      }), !(!i6 && o3.__c.props === n3) && (!c4 || c4.call(this, n3, t3, r4));
    };
    r3.u = true;
    var c4 = r3.shouldComponentUpdate, e3 = r3.componentWillUpdate;
    r3.componentWillUpdate = function(n3, t3, r4) {
      if (this.__e) {
        var u6 = c4;
        c4 = void 0, f4(n3, t3, r4), c4 = u6;
      }
      e3 && e3.call(this, n3, t3, r4);
    }, r3.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], c3.__e(t3, n2.__v);
      }
}
c3.__b = function(n2) {
  r3 = null, e2 && e2(n2);
}, c3.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s3 && s3(n2, t3);
}, c3.__r = function(n2) {
  a3 && a3(n2), t2 = 0;
  var i5 = (r3 = n2.__c).__H;
  i5 && (u3 === r3 ? (i5.__h = [], r3.__h = [], i5.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.i = n3.__N = void 0;
  })) : (i5.__h.forEach(z2), i5.__h.forEach(B2), i5.__h = [], t2 = 0)), u3 = r3;
}, c3.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i3 === c3.requestAnimationFrame || ((i3 = c3.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.i && (n3.__H = n3.i), n3.i = void 0;
  })), u3 = r3 = null;
}, c3.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r4) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c3.__e(r4, n3.__v);
    }
  }), l3 && l3(n2, t3);
}, c3.unmount = function(n2) {
  m && m(n2);
  var t3, r4 = n2.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r4.__H = void 0, t3 && c3.__e(t3, r4.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r4 = function() {
    clearTimeout(u5), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u5 = setTimeout(r4, 100);
  k2 && (t3 = requestAnimationFrame(r4));
}
function z2(n2) {
  var t3 = r3, u5 = n2.__c;
  "function" == typeof u5 && (n2.__c = void 0, u5()), r3 = t3;
}
function B2(n2) {
  var t3 = r3;
  n2.__c = n2.__(), r3 = t3;
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// ../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
var i4 = Array.isArray;
function u4(e3, t3, n2, o3, i5, u5) {
  t3 || (t3 = {});
  var a4, c4, p4 = t3;
  if ("ref" in p4)
    for (c4 in p4 = {}, t3)
      "ref" == c4 ? a4 = t3[c4] : p4[c4] = t3[c4];
  var l4 = { type: e3, props: p4, key: n2, ref: a4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i5, __self: u5 };
  if ("function" == typeof e3 && (a4 = e3.defaultProps))
    for (c4 in a4)
      void 0 === p4[c4] && (p4[c4] = a4[c4]);
  return l.vnode && l.vnode(l4), l4;
}

// src/counter.tsx
function MyCounter() {
  const [state, setState] = h2(0);
  const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;
  return /* @__PURE__ */ u4("div", {
    className: "my-counter",
    children: [
      /* @__PURE__ */ u4("style", {
        children: styles
      }),
      /* @__PURE__ */ u4("button", {
        onClick: () => setState(state - 1),
        children: "-"
      }),
      /* @__PURE__ */ u4("span", {
        children: state
      }),
      /* @__PURE__ */ u4("button", {
        onClick: () => setState(state + 1),
        children: "+"
      })
    ]
  });
}
preact_custom_element_esm_default(MyCounter, "my-counter", [], { shadow: true });
