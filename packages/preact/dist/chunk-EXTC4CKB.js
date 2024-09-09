// ../../node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f = {};
var e = [];
var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l4) {
  for (var u4 in l4)
    n2[u4] = l4[u4];
  return n2;
}
function a(n2) {
  var l4 = n2.parentNode;
  l4 && l4.removeChild(n2);
}
function h(l4, u4, i4) {
  var t3, o4, r4, f3 = {};
  for (r4 in u4)
    "key" == r4 ? t3 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f3[r4] = u4[r4];
  if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i4), "function" == typeof l4 && null != l4.defaultProps)
    for (r4 in l4.defaultProps)
      void 0 === f3[r4] && (f3[r4] = l4.defaultProps[r4]);
  return v(l4, f3, t3, o4, null);
}
function v(n2, i4, t3, o4, r4) {
  var f3 = { type: n2, props: i4, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
  return null == r4 && null != l.vnode && l.vnode(f3), f3;
}
function p(n2) {
  return n2.children;
}
function d(n2, l4) {
  this.props = n2, this.context = l4;
}
function _(n2, l4) {
  if (null == l4)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u4; l4 < n2.__k.length; l4++)
    if (null != (u4 = n2.__k[l4]) && null != u4.__e)
      return u4.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l4, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
      if (null != (u4 = n2.__k[l4]) && null != u4.__e) {
        n2.__e = n2.__c.base = u4.__e;
        break;
      }
    return k(n2);
  }
}
function b(n2) {
  (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
function g() {
  for (var n2; g.__r = t.length; )
    n2 = t.sort(function(n3, l4) {
      return n3.__v.__b - l4.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l4, u4, i4, t3, o4, r4;
      n3.__d && (o4 = (t3 = (l4 = n3).__v).__e, (r4 = l4.__P) && (u4 = [], (i4 = s({}, t3)).__v = t3.__v + 1, j(r4, t3, i4, l4.__n, void 0 !== r4.ownerSVGElement, null != t3.__h ? [o4] : null, u4, null == o4 ? _(t3) : o4, t3.__h), z(u4, t3), t3.__e != o4 && k(t3)));
    });
}
function w(n2, l4, u4, i4, t3, o4, r4, c4, s3, a4) {
  var h2, y2, d3, k3, b3, g3, w2, x = i4 && i4.__k || e, C2 = x.length;
  for (u4.__k = [], h2 = 0; h2 < l4.length; h2++)
    if (null != (k3 = u4.__k[h2] = null == (k3 = l4[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, null, k3.__v) : k3)) {
      if (k3.__ = u4, k3.__b = u4.__b + 1, null === (d3 = x[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x[h2] = void 0;
      else
        for (y2 = 0; y2 < C2; y2++) {
          if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
            x[y2] = void 0;
            break;
          }
          d3 = null;
        }
      j(n2, k3, d3 = d3 || f, t3, o4, r4, c4, s3, a4), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w2 || (w2 = []), d3.ref && w2.push(d3.ref, null, k3), w2.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s3 = m(k3, s3, n2) : s3 = A(n2, k3, d3, x, b3, s3), "function" == typeof u4.type && (u4.__d = s3)) : s3 && d3.__e == s3 && s3.parentNode != n2 && (s3 = _(d3));
    }
  for (u4.__e = g3, h2 = C2; h2--; )
    null != x[h2] && ("function" == typeof u4.type && null != x[h2].__e && x[h2].__e == u4.__d && (u4.__d = _(i4, h2 + 1)), N(x[h2], x[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
function m(n2, l4, u4) {
  for (var i4, t3 = n2.__k, o4 = 0; t3 && o4 < t3.length; o4++)
    (i4 = t3[o4]) && (i4.__ = n2, l4 = "function" == typeof i4.type ? m(i4, l4, u4) : A(u4, i4, i4, t3, i4.__e, l4));
  return l4;
}
function A(n2, l4, u4, i4, t3, o4) {
  var r4, f3, e4;
  if (void 0 !== l4.__d)
    r4 = l4.__d, l4.__d = void 0;
  else if (null == u4 || t3 != o4 || null == t3.parentNode)
    n:
      if (null == o4 || o4.parentNode !== n2)
        n2.appendChild(t3), r4 = null;
      else {
        for (f3 = o4, e4 = 0; (f3 = f3.nextSibling) && e4 < i4.length; e4 += 2)
          if (f3 == t3)
            break n;
        n2.insertBefore(t3, o4), r4 = o4;
      }
  return void 0 !== r4 ? r4 : t3.nextSibling;
}
function C(n2, l4, u4, i4, t3) {
  var o4;
  for (o4 in u4)
    "children" === o4 || "key" === o4 || o4 in l4 || H(n2, o4, null, u4[o4], i4);
  for (o4 in l4)
    t3 && "function" != typeof l4[o4] || "children" === o4 || "key" === o4 || "value" === o4 || "checked" === o4 || u4[o4] === l4[o4] || H(n2, o4, l4[o4], u4[o4], i4);
}
function $(n2, l4, u4) {
  "-" === l4[0] ? n2.setProperty(l4, u4) : n2[l4] = null == u4 ? "" : "number" != typeof u4 || c.test(l4) ? u4 : u4 + "px";
}
function H(n2, l4, u4, i4, t3) {
  var o4;
  n:
    if ("style" === l4)
      if ("string" == typeof u4)
        n2.style.cssText = u4;
      else {
        if ("string" == typeof i4 && (n2.style.cssText = i4 = ""), i4)
          for (l4 in i4)
            u4 && l4 in u4 || $(n2.style, l4, "");
        if (u4)
          for (l4 in u4)
            i4 && u4[l4] === i4[l4] || $(n2.style, l4, u4[l4]);
      }
    else if ("o" === l4[0] && "n" === l4[1])
      o4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o4] = u4, u4 ? i4 || n2.addEventListener(l4, o4 ? T : I, o4) : n2.removeEventListener(l4, o4 ? T : I, o4);
    else if ("dangerouslySetInnerHTML" !== l4) {
      if (t3)
        l4 = l4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l4 && "list" !== l4 && "form" !== l4 && "tabIndex" !== l4 && "download" !== l4 && l4 in n2)
        try {
          n2[l4] = null == u4 ? "" : u4;
          break n;
        } catch (n3) {
        }
      "function" == typeof u4 || (null != u4 && (false !== u4 || "a" === l4[0] && "r" === l4[1]) ? n2.setAttribute(l4, u4) : n2.removeAttribute(l4));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u4, i4, t3, o4, r4, f3, e4, c4) {
  var a4, h2, v3, y2, _2, k3, b3, g3, m3, x, A2, C2, $2, H2 = u4.type;
  if (void 0 !== u4.constructor)
    return null;
  null != i4.__h && (c4 = i4.__h, e4 = u4.__e = i4.__e, u4.__h = null, r4 = [e4]), (a4 = l.__b) && a4(u4);
  try {
    n:
      if ("function" == typeof H2) {
        if (g3 = u4.props, m3 = (a4 = H2.contextType) && t3[a4.__c], x = a4 ? m3 ? m3.props.value : a4.__ : t3, i4.__c ? b3 = (h2 = u4.__c = i4.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u4.__c = h2 = new H2(g3, x) : (u4.__c = h2 = new d(g3, x), h2.constructor = H2, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x, h2.__n = t3, v3 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _2 = h2.state, v3)
          null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x) || u4.__v === i4.__v) {
            h2.props = g3, h2.state = h2.__s, u4.__v !== i4.__v && (h2.__d = false), h2.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n3) {
              n3 && (n3.__ = u4);
            }), h2.__h.length && f3.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _2, k3);
          });
        }
        if (h2.context = x, h2.props = g3, h2.__v = u4, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u4), a4 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u4), a4 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a4 && a4.type === p && null == a4.key ? a4.props.children : a4, w(n2, Array.isArray($2) ? $2 : [$2], u4, i4, t3, o4, r4, f3, e4, c4), h2.base = u4.__e, u4.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r4 && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t3, o4, r4, f3, c4);
    (a4 = l.diffed) && a4(u4);
  } catch (n3) {
    u4.__v = null, (c4 || null != r4) && (u4.__e = e4, u4.__h = !!c4, r4[r4.indexOf(e4)] = null), l.__e(n3, u4, i4);
  }
}
function z(n2, u4) {
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function L(l4, u4, i4, t3, o4, r4, e4, c4) {
  var s3, h2, v3, y2 = i4.props, p3 = u4.props, d3 = u4.type, k3 = 0;
  if ("svg" === d3 && (o4 = true), null != r4) {
    for (; k3 < r4.length; k3++)
      if ((s3 = r4[k3]) && "setAttribute" in s3 == !!d3 && (d3 ? s3.localName === d3 : 3 === s3.nodeType)) {
        l4 = s3, r4[k3] = null;
        break;
      }
  }
  if (null == l4) {
    if (null === d3)
      return document.createTextNode(p3);
    l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r4 = null, c4 = false;
  }
  if (null === d3)
    y2 === p3 || c4 && l4.data === p3 || (l4.data = p3);
  else {
    if (r4 = r4 && n.call(l4.childNodes), h2 = (y2 = i4.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c4) {
      if (null != r4)
        for (y2 = {}, k3 = 0; k3 < l4.attributes.length; k3++)
          y2[l4.attributes[k3].name] = l4.attributes[k3].value;
      (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l4.innerHTML) || (l4.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l4, p3, y2, o4, c4), v3)
      u4.__k = [];
    else if (k3 = u4.props.children, w(l4, Array.isArray(k3) ? k3 : [k3], u4, i4, t3, o4 && "foreignObject" !== d3, r4, e4, r4 ? r4[0] : i4.__k && _(i4, 0), c4), null != r4)
      for (k3 = r4.length; k3--; )
        null != r4[k3] && a(r4[k3]);
    c4 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l4.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l4, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l4.checked && H(l4, "checked", k3, y2.checked, false));
  }
  return l4;
}
function M(n2, u4, i4) {
  try {
    "function" == typeof n2 ? n2(u4) : n2.current = u4;
  } catch (n3) {
    l.__e(n3, i4);
  }
}
function N(n2, u4, i4) {
  var t3, o4;
  if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u4)), null != (t3 = n2.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u4);
      }
    t3.base = t3.__P = null;
  }
  if (t3 = n2.__k)
    for (o4 = 0; o4 < t3.length; o4++)
      t3[o4] && N(t3[o4], u4, "function" != typeof n2.type);
  i4 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l4, u4) {
  return this.constructor(n2, u4);
}
function P(u4, i4, t3) {
  var o4, r4, e4;
  l.__ && l.__(u4, i4), r4 = (o4 = "function" == typeof t3) ? null : t3 && t3.__k || i4.__k, e4 = [], j(i4, u4 = (!o4 && t3 || i4).__k = h(p, null, [u4]), r4 || f, f, void 0 !== i4.ownerSVGElement, !o4 && t3 ? [t3] : r4 ? null : i4.firstChild ? n.call(i4.childNodes) : null, e4, !o4 && t3 ? t3 : r4 ? r4.__e : i4.firstChild, o4), z(e4, u4);
}
function S(n2, l4) {
  P(n2, l4, S);
}
function q(l4, u4, i4) {
  var t3, o4, r4, f3 = s({}, l4.props);
  for (r4 in u4)
    "key" == r4 ? t3 = u4[r4] : "ref" == r4 ? o4 = u4[r4] : f3[r4] = u4[r4];
  return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i4), v(l4.type, f3, t3 || l4.key, o4 || l4.ref, null);
}
n = e.slice, l = { __e: function(n2, l4, u4, i4) {
  for (var t3, o4, r4; l4 = l4.__; )
    if ((t3 = l4.__c) && !t3.__)
      try {
        if ((o4 = t3.constructor) && null != o4.getDerivedStateFromError && (t3.setState(o4.getDerivedStateFromError(n2)), r4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i4 || {}), r4 = t3.__d), r4)
          return t3.__E = t3;
      } catch (l5) {
        n2 = l5;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l4) {
  var u4;
  u4 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u4), this.props)), n2 && s(u4, n2), null != n2 && this.__v && (l4 && this.__h.push(l4), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// ../../node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function r2() {
  return (r2 = Object.assign || function(t3) {
    for (var e4 = 1; e4 < arguments.length; e4++) {
      var n2 = arguments[e4];
      for (var o4 in n2)
        Object.prototype.hasOwnProperty.call(n2, o4) && (t3[o4] = n2[o4]);
    }
    return t3;
  }).apply(this, arguments);
}
function i2(t3) {
  this.getChildContext = function() {
    return t3.context;
  };
  var e4 = t3.children, n2 = function(t4, e5) {
    if (null == t4)
      return {};
    var n3, o4, r4 = {}, i4 = Object.keys(t4);
    for (o4 = 0; o4 < i4.length; o4++)
      e5.indexOf(n3 = i4[o4]) >= 0 || (r4[n3] = t4[n3]);
    return r4;
  }(t3, ["context", "children"]);
  return q(e4, n2);
}
function a2() {
  var o4 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
  this.dispatchEvent(o4), this._vdom = h(i2, r2({}, this._props, { context: o4.detail.context }), function e4(n2, o5) {
    if (3 === n2.nodeType)
      return n2.data;
    if (1 !== n2.nodeType)
      return null;
    var r4 = [], i4 = {}, a4 = 0, c4 = n2.attributes, l4 = n2.childNodes;
    for (a4 = c4.length; a4--; )
      "slot" !== c4[a4].name && (i4[c4[a4].name] = c4[a4].value, i4[s2(c4[a4].name)] = c4[a4].value);
    for (a4 = l4.length; a4--; ) {
      var p3 = e4(l4[a4], null), d3 = l4[a4].slot;
      d3 ? i4[d3] = h(u2, { name: d3 }, p3) : r4[a4] = p3;
    }
    var h2 = o5 ? h(u2, null, r4) : r4;
    return h(o5 || n2.nodeName.toLowerCase(), i4, h2);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? S : P)(this._vdom, this._root);
}
function s2(t3) {
  return t3.replace(/-(\w)/g, function(t4, e4) {
    return e4 ? e4.toUpperCase() : "";
  });
}
function c2(t3, e4, r4) {
  if (this._vdom) {
    var i4 = {};
    i4[t3] = r4 = null == r4 ? void 0 : r4, i4[s2(t3)] = r4, this._vdom = q(this._vdom, i4), P(this._vdom, this._root);
  }
}
function l2() {
  P(this._vdom = null, this._root);
}
function u2(e4, n2) {
  var o4 = this;
  return h("slot", r2({}, e4, { ref: function(t3) {
    t3 ? (o4.ref = t3, o4._listener || (o4._listener = function(t4) {
      t4.stopPropagation(), t4.detail.context = n2;
    }, t3.addEventListener("_preact", o4._listener))) : o4.ref.removeEventListener("_preact", o4._listener);
  } }));
}
function preact_custom_element_esm_default(t3, e4, n2, o4) {
  function r4() {
    var e5 = Reflect.construct(HTMLElement, [], r4);
    return e5._vdomComponent = t3, e5._root = o4 && o4.shadow ? e5.attachShadow({ mode: "open" }) : e5, e5;
  }
  return (r4.prototype = Object.create(HTMLElement.prototype)).constructor = r4, r4.prototype.connectedCallback = a2, r4.prototype.attributeChangedCallback = c2, r4.prototype.disconnectedCallback = l2, n2 = n2 || t3.observedAttributes || Object.keys(t3.propTypes || {}), r4.observedAttributes = n2, n2.forEach(function(t4) {
    Object.defineProperty(r4.prototype, t4, { get: function() {
      return this._vdom.props[t4];
    }, set: function(e5) {
      this._vdom ? this.attributeChangedCallback(t4, null, e5) : (this._props || (this._props = {}), this._props[t4] = e5, this.connectedCallback());
      var n3 = typeof e5;
      null != e5 && "string" !== n3 && "boolean" !== n3 && "number" !== n3 || this.setAttribute(t4, e5);
    } });
  }), customElements.define(e4 || t3.tagName || t3.displayName || t3.name, r4);
}

// ../../node_modules/preact/hooks/dist/hooks.module.js
var t2;
var u3;
var r3;
var o2;
var i3 = 0;
var c3 = [];
var f2 = [];
var e2 = l.__b;
var a3 = l.__r;
var v2 = l.diffed;
var l3 = l.__c;
var m2 = l.unmount;
function p2(t3, r4) {
  l.__h && l.__h(u3, t3, i3 || r4), i3 = 0;
  var o4 = u3.__H || (u3.__H = { __: [], __h: [] });
  return t3 >= o4.__.length && o4.__.push({ __V: f2 }), o4.__[t3];
}
function y(n2) {
  return i3 = 1, d2(z2, n2);
}
function d2(n2, r4, o4) {
  var i4 = p2(t2++, 2);
  return i4.t = n2, i4.__c || (i4.__ = [o4 ? o4(r4) : z2(void 0, r4), function(n3) {
    var t3 = i4.t(i4.__[0], n3);
    i4.__[0] !== t3 && (i4.__ = [t3, i4.__[1]], i4.__c.setState({}));
  }], i4.__c = u3), i4.__;
}
function b2() {
  for (var t3; t3 = c3.shift(); )
    if (t3.__P)
      try {
        t3.__H.__h.forEach(j2), t3.__H.__h.forEach(k2), t3.__H.__h = [];
      } catch (u4) {
        t3.__H.__h = [], l.__e(u4, t3.__v);
      }
}
l.__b = function(n2) {
  u3 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a3 && a3(n2), t2 = 0;
  var o4 = (u3 = n2.__c).__H;
  o4 && (r3 === u3 ? (o4.__h = [], u3.__h = [], o4.__.forEach(function(n3) {
    n3.__V = f2, n3.u = void 0;
  })) : (o4.__h.forEach(j2), o4.__h.forEach(k2), o4.__h = [])), r3 = u3;
}, l.diffed = function(t3) {
  v2 && v2(t3);
  var i4 = t3.__c;
  i4 && i4.__H && (i4.__H.__h.length && (1 !== c3.push(i4) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || function(n2) {
    var t4, u4 = function() {
      clearTimeout(r4), g2 && cancelAnimationFrame(t4), setTimeout(n2);
    }, r4 = setTimeout(u4, 100);
    g2 && (t4 = requestAnimationFrame(u4));
  })(b2)), i4.__H.__.forEach(function(n2) {
    n2.u && (n2.__H = n2.u), n2.__V !== f2 && (n2.__ = n2.__V), n2.u = void 0, n2.__V = f2;
  })), r3 = u3 = null;
}, l.__c = function(t3, u4) {
  u4.some(function(t4) {
    try {
      t4.__h.forEach(j2), t4.__h = t4.__h.filter(function(n2) {
        return !n2.__ || k2(n2);
      });
    } catch (r4) {
      u4.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u4 = [], l.__e(r4, t4.__v);
    }
  }), l3 && l3(t3, u4);
}, l.unmount = function(t3) {
  m2 && m2(t3);
  var u4, r4 = t3.__c;
  r4 && r4.__H && (r4.__H.__.forEach(function(n2) {
    try {
      j2(n2);
    } catch (n3) {
      u4 = n3;
    }
  }), u4 && l.__e(u4, r4.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t3 = u3, r4 = n2.__c;
  "function" == typeof r4 && (n2.__c = void 0, r4()), u3 = t3;
}
function k2(n2) {
  var t3 = u3;
  n2.__c = n2.__(), u3 = t3;
}
function z2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// ../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var o3 = 0;
function e3(_2, e4, n2, t3, f3) {
  var l4, s3, u4 = {};
  for (s3 in e4)
    "ref" == s3 ? l4 = e4[s3] : u4[s3] = e4[s3];
  var a4 = { type: _2, props: u4, key: n2, ref: l4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o3, __source: f3, __self: t3 };
  if ("function" == typeof _2 && (l4 = _2.defaultProps))
    for (s3 in l4)
      void 0 === u4[s3] && (u4[s3] = l4[s3]);
  return l.vnode && l.vnode(a4), a4;
}

// src/counter.tsx
function MyCounter() {
  const [state, setState] = y(0);
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
  return /* @__PURE__ */ e3("div", {
    className: "my-counter",
    children: [
      /* @__PURE__ */ e3("style", {
        children: styles
      }),
      /* @__PURE__ */ e3("button", {
        onClick: () => setState(state - 1),
        children: "-"
      }),
      /* @__PURE__ */ e3("span", {
        children: state
      }),
      /* @__PURE__ */ e3("button", {
        onClick: () => setState(state + 1),
        children: "+"
      })
    ]
  });
}
preact_custom_element_esm_default(MyCounter, "my-counter", [], { shadow: true });
