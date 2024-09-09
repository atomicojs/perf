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
function s(n2, l3) {
  for (var u3 in l3)
    n2[u3] = l3[u3];
  return n2;
}
function a(n2) {
  var l3 = n2.parentNode;
  l3 && l3.removeChild(n2);
}
function h(l3, u3, i3) {
  var t2, o3, r3, f2 = {};
  for (r3 in u3)
    "key" == r3 ? t2 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f2[r3] = u3[r3];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
    for (r3 in l3.defaultProps)
      void 0 === f2[r3] && (f2[r3] = l3.defaultProps[r3]);
  return v(l3, f2, t2, o3, null);
}
function v(n2, i3, t2, o3, r3) {
  var f2 = { type: n2, props: i3, key: t2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
  return null == r3 && null != l.vnode && l.vnode(f2), f2;
}
function p(n2) {
  return n2.children;
}
function d(n2, l3) {
  this.props = n2, this.context = l3;
}
function _(n2, l3) {
  if (null == l3)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++)
    if (null != (u3 = n2.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n2.type ? _(n2) : null;
}
function k(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
        n2.__e = n2.__c.base = u3.__e;
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
    n2 = t.sort(function(n3, l3) {
      return n3.__v.__b - l3.__v.__b;
    }), t = [], n2.some(function(n3) {
      var l3, u3, i3, t2, o3, r3;
      n3.__d && (o3 = (t2 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t2)).__v = t2.__v + 1, j(r3, t2, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t2.__h ? [o3] : null, u3, null == o3 ? _(t2) : o3, t2.__h), z(u3, t2), t2.__e != o3 && k(t2)));
    });
}
function w(n2, l3, u3, i3, t2, o3, r3, c3, s3, a3) {
  var h2, y, d2, k2, b2, g2, w2, x = i3 && i3.__k || e, C2 = x.length;
  for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
    if (null != (k2 = u3.__k[h2] = null == (k2 = l3[h2]) || "boolean" == typeof k2 ? null : "string" == typeof k2 || "number" == typeof k2 || "bigint" == typeof k2 ? v(null, k2, null, null, k2) : Array.isArray(k2) ? v(p, { children: k2 }, null, null, null) : k2.__b > 0 ? v(k2.type, k2.props, k2.key, null, k2.__v) : k2)) {
      if (k2.__ = u3, k2.__b = u3.__b + 1, null === (d2 = x[h2]) || d2 && k2.key == d2.key && k2.type === d2.type)
        x[h2] = void 0;
      else
        for (y = 0; y < C2; y++) {
          if ((d2 = x[y]) && k2.key == d2.key && k2.type === d2.type) {
            x[y] = void 0;
            break;
          }
          d2 = null;
        }
      j(n2, k2, d2 = d2 || f, t2, o3, r3, c3, s3, a3), b2 = k2.__e, (y = k2.ref) && d2.ref != y && (w2 || (w2 = []), d2.ref && w2.push(d2.ref, null, k2), w2.push(y, k2.__c || b2, k2)), null != b2 ? (null == g2 && (g2 = b2), "function" == typeof k2.type && k2.__k === d2.__k ? k2.__d = s3 = m(k2, s3, n2) : s3 = A(n2, k2, d2, x, b2, s3), "function" == typeof u3.type && (u3.__d = s3)) : s3 && d2.__e == s3 && s3.parentNode != n2 && (s3 = _(d2));
    }
  for (u3.__e = g2, h2 = C2; h2--; )
    null != x[h2] && ("function" == typeof u3.type && null != x[h2].__e && x[h2].__e == u3.__d && (u3.__d = _(i3, h2 + 1)), N(x[h2], x[h2]));
  if (w2)
    for (h2 = 0; h2 < w2.length; h2++)
      M(w2[h2], w2[++h2], w2[++h2]);
}
function m(n2, l3, u3) {
  for (var i3, t2 = n2.__k, o3 = 0; t2 && o3 < t2.length; o3++)
    (i3 = t2[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t2, i3.__e, l3));
  return l3;
}
function A(n2, l3, u3, i3, t2, o3) {
  var r3, f2, e3;
  if (void 0 !== l3.__d)
    r3 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t2 != o3 || null == t2.parentNode)
    n:
      if (null == o3 || o3.parentNode !== n2)
        n2.appendChild(t2), r3 = null;
      else {
        for (f2 = o3, e3 = 0; (f2 = f2.nextSibling) && e3 < i3.length; e3 += 2)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, o3), r3 = o3;
      }
  return void 0 !== r3 ? r3 : t2.nextSibling;
}
function C(n2, l3, u3, i3, t2) {
  var o3;
  for (o3 in u3)
    "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
  for (o3 in l3)
    t2 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
}
function $(n2, l3, u3) {
  "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
function H(n2, l3, u3, i3, t2) {
  var o3;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n2.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n2.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t2)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
        try {
          n2[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n3) {
        }
      "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u3, i3, t2, o3, r3, f2, e3, c3) {
  var a3, h2, v2, y, _2, k2, b2, g2, m2, x, A2, C2, $2, H2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof H2) {
        if (g2 = u3.props, m2 = (a3 = H2.contextType) && t2[a3.__c], x = a3 ? m2 ? m2.props.value : a3.__ : t2, i3.__c ? b2 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h2 = new H2(g2, x) : (u3.__c = h2 = new d(g2, x), h2.constructor = H2, h2.render = O), m2 && m2.sub(h2), h2.props = g2, h2.state || (h2.state = {}), h2.context = x, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != H2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, H2.getDerivedStateFromProps(g2, h2.__s))), y = h2.props, _2 = h2.state, v2)
          null == H2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == H2.getDerivedStateFromProps && g2 !== y && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g2, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g2, h2.__s, x) || u3.__v === i3.__v) {
            h2.props = g2, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
              n3 && (n3.__ = u3);
            }), h2.__h.length && f2.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g2, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y, _2, k2);
          });
        }
        if (h2.context = x, h2.props = g2, h2.__v = u3, h2.__P = n2, A2 = l.__r, C2 = 0, "prototype" in H2 && H2.prototype.render)
          h2.state = h2.__s, h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context);
        else
          do {
            h2.__d = false, A2 && A2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++C2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t2 = s(s({}, t2), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k2 = h2.getSnapshotBeforeUpdate(y, _2)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray($2) ? $2 : [$2], u3, i3, t2, o3, r3, f2, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f2.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, o3, r3, f2, c3);
    (a3 = l.diffed) && a3(u3);
  } catch (n3) {
    u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
  }
}
function z(n2, u3) {
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function L(l3, u3, i3, t2, o3, r3, e3, c3) {
  var s3, h2, v2, y = i3.props, p2 = u3.props, d2 = u3.type, k2 = 0;
  if ("svg" === d2 && (o3 = true), null != r3) {
    for (; k2 < r3.length; k2++)
      if ((s3 = r3[k2]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
        l3 = s3, r3[k2] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d2)
      return document.createTextNode(p2);
    l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), r3 = null, c3 = false;
  }
  if (null === d2)
    y === p2 || c3 && l3.data === p2 || (l3.data = p2);
  else {
    if (r3 = r3 && n.call(l3.childNodes), h2 = (y = i3.props || f).dangerouslySetInnerHTML, v2 = p2.dangerouslySetInnerHTML, !c3) {
      if (null != r3)
        for (y = {}, k2 = 0; k2 < l3.attributes.length; k2++)
          y[l3.attributes[k2].name] = l3.attributes[k2].value;
      (v2 || h2) && (v2 && (h2 && v2.__html == h2.__html || v2.__html === l3.innerHTML) || (l3.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l3, p2, y, o3, c3), v2)
      u3.__k = [];
    else if (k2 = u3.props.children, w(l3, Array.isArray(k2) ? k2 : [k2], u3, i3, t2, o3 && "foreignObject" !== d2, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
      for (k2 = r3.length; k2--; )
        null != r3[k2] && a(r3[k2]);
    c3 || ("value" in p2 && void 0 !== (k2 = p2.value) && (k2 !== l3.value || "progress" === d2 && !k2 || "option" === d2 && k2 !== y.value) && H(l3, "value", k2, y.value, false), "checked" in p2 && void 0 !== (k2 = p2.checked) && k2 !== l3.checked && H(l3, "checked", k2, y.checked, false));
  }
  return l3;
}
function M(n2, u3, i3) {
  try {
    "function" == typeof n2 ? n2(u3) : n2.current = u3;
  } catch (n3) {
    l.__e(n3, i3);
  }
}
function N(n2, u3, i3) {
  var t2, o3;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u3)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u3);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o3 = 0; o3 < t2.length; o3++)
      t2[o3] && N(t2[o3], u3, "function" != typeof n2.type);
  i3 || null == n2.__e || a(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function P(u3, i3, t2) {
  var o3, r3, e3;
  l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t2) ? null : t2 && t2.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t2 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t2 ? [t2] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t2 ? t2 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
}
function S(n2, l3) {
  P(n2, l3, S);
}
function q(l3, u3, i3) {
  var t2, o3, r3, f2 = s({}, l3.props);
  for (r3 in u3)
    "key" == r3 ? t2 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f2[r3] = u3[r3];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i3), v(l3.type, f2, t2 || l3.key, o3 || l3.ref, null);
}
n = e.slice, l = { __e: function(n2, l3, u3, i3) {
  for (var t2, o3, r3; l3 = l3.__; )
    if ((t2 = l3.__c) && !t2.__)
      try {
        if ((o3 = t2.constructor) && null != o3.getDerivedStateFromError && (t2.setState(o3.getDerivedStateFromError(n2)), r3 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i3 || {}), r3 = t2.__d), r3)
          return t2.__E = t2;
      } catch (l4) {
        n2 = l4;
      }
  throw n2;
} }, u = 0, i = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, d.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), b(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
}, d.prototype.render = p, t = [], g.__r = 0, r = 0;

// ../../node_modules/preact-custom-element/dist/preact-custom-element.esm.js
function r2() {
  return (r2 = Object.assign || function(t2) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var n2 = arguments[e3];
      for (var o3 in n2)
        Object.prototype.hasOwnProperty.call(n2, o3) && (t2[o3] = n2[o3]);
    }
    return t2;
  }).apply(this, arguments);
}
function i2(t2) {
  this.getChildContext = function() {
    return t2.context;
  };
  var e3 = t2.children, n2 = function(t3, e4) {
    if (null == t3)
      return {};
    var n3, o3, r3 = {}, i3 = Object.keys(t3);
    for (o3 = 0; o3 < i3.length; o3++)
      e4.indexOf(n3 = i3[o3]) >= 0 || (r3[n3] = t3[n3]);
    return r3;
  }(t2, ["context", "children"]);
  return q(e3, n2);
}
function a2() {
  var o3 = new CustomEvent("_preact", { detail: {}, bubbles: true, cancelable: true });
  this.dispatchEvent(o3), this._vdom = h(i2, r2({}, this._props, { context: o3.detail.context }), function e3(n2, o4) {
    if (3 === n2.nodeType)
      return n2.data;
    if (1 !== n2.nodeType)
      return null;
    var r3 = [], i3 = {}, a3 = 0, c3 = n2.attributes, l3 = n2.childNodes;
    for (a3 = c3.length; a3--; )
      "slot" !== c3[a3].name && (i3[c3[a3].name] = c3[a3].value, i3[s2(c3[a3].name)] = c3[a3].value);
    for (a3 = l3.length; a3--; ) {
      var p2 = e3(l3[a3], null), d2 = l3[a3].slot;
      d2 ? i3[d2] = h(u2, { name: d2 }, p2) : r3[a3] = p2;
    }
    var h2 = o4 ? h(u2, null, r3) : r3;
    return h(o4 || n2.nodeName.toLowerCase(), i3, h2);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? S : P)(this._vdom, this._root);
}
function s2(t2) {
  return t2.replace(/-(\w)/g, function(t3, e3) {
    return e3 ? e3.toUpperCase() : "";
  });
}
function c2(t2, e3, r3) {
  if (this._vdom) {
    var i3 = {};
    i3[t2] = r3 = null == r3 ? void 0 : r3, i3[s2(t2)] = r3, this._vdom = q(this._vdom, i3), P(this._vdom, this._root);
  }
}
function l2() {
  P(this._vdom = null, this._root);
}
function u2(e3, n2) {
  var o3 = this;
  return h("slot", r2({}, e3, { ref: function(t2) {
    t2 ? (o3.ref = t2, o3._listener || (o3._listener = function(t3) {
      t3.stopPropagation(), t3.detail.context = n2;
    }, t2.addEventListener("_preact", o3._listener))) : o3.ref.removeEventListener("_preact", o3._listener);
  } }));
}
function preact_custom_element_esm_default(t2, e3, n2, o3) {
  function r3() {
    var e4 = Reflect.construct(HTMLElement, [], r3);
    return e4._vdomComponent = t2, e4._root = o3 && o3.shadow ? e4.attachShadow({ mode: "open" }) : e4, e4;
  }
  return (r3.prototype = Object.create(HTMLElement.prototype)).constructor = r3, r3.prototype.connectedCallback = a2, r3.prototype.attributeChangedCallback = c2, r3.prototype.disconnectedCallback = l2, n2 = n2 || t2.observedAttributes || Object.keys(t2.propTypes || {}), r3.observedAttributes = n2, n2.forEach(function(t3) {
    Object.defineProperty(r3.prototype, t3, { get: function() {
      return this._vdom.props[t3];
    }, set: function(e4) {
      this._vdom ? this.attributeChangedCallback(t3, null, e4) : (this._props || (this._props = {}), this._props[t3] = e4, this.connectedCallback());
      var n3 = typeof e4;
      null != e4 && "string" !== n3 && "boolean" !== n3 && "number" !== n3 || this.setAttribute(t3, e4);
    } });
  }), customElements.define(e3 || t2.tagName || t2.displayName || t2.name, r3);
}

// ../../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var o2 = 0;
function e2(_2, e3, n2, t2, f2) {
  var l3, s3, u3 = {};
  for (s3 in e3)
    "ref" == s3 ? l3 = e3[s3] : u3[s3] = e3[s3];
  var a3 = { type: _2, props: u3, key: n2, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --o2, __source: f2, __self: t2 };
  if ("function" == typeof _2 && (l3 = _2.defaultProps))
    for (s3 in l3)
      void 0 === u3[s3] && (u3[s3] = l3[s3]);
  return l.vnode && l.vnode(a3), a3;
}

// src/counter.tsx
var MyCounter = class extends d {
  state = {
    count: 0
  };
  inc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };
  dec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };
  render(props, state) {
    return /* @__PURE__ */ e2("div", {
      children: [
        /* @__PURE__ */ e2("style", {
          children: `* {
                    font-size: 200%;
                }
                span {
                    width: 4rem;
                    display: inline-block;
                    text-align: center;
                }
                button {
                    width: 4rem;
                    height: 4rem;
                    border: none;
                    border-radius: 10px;
                    background-color: seagreen;
                    color: white;
                }`
        }),
        /* @__PURE__ */ e2("button", {
          onClick: this.dec,
          children: "-"
        }),
        /* @__PURE__ */ e2("span", {
          children: state.count
        }),
        /* @__PURE__ */ e2("button", {
          onClick: this.inc,
          children: "+"
        })
      ]
    });
  }
};
preact_custom_element_esm_default(MyCounter, "my-counter", ["count"], { shadow: true });
