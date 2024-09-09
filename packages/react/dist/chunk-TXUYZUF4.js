var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l2 = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p2 = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w2 = Symbol.for("react.suspense");
    var x2 = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A2(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C2 = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C2(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J2 = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d2, c = {}, k = null, h2 = null;
      if (null != b)
        for (d2 in void 0 !== b.ref && (h2 = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J2.call(b, d2) && !L.hasOwnProperty(d2) && (c[d2] = b[d2]);
      var g2 = arguments.length - 2;
      if (1 === g2)
        c.children = e;
      else if (1 < g2) {
        for (var f = Array(g2), m = 0; m < g2; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d2 in g2 = a.defaultProps, g2)
          void 0 === c[d2] && (c[d2] = g2[d2]);
      return { $$typeof: l2, type: a, key: k, ref: h2, props: c, _owner: K.current };
    }
    function N2(a, b) {
      return { $$typeof: l2, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l2;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P2 = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d2, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h2 = false;
      if (null === a)
        h2 = true;
      else
        switch (k) {
          case "string":
          case "number":
            h2 = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l2:
              case n:
                h2 = true;
            }
        }
      if (h2)
        return h2 = a, c = c(h2), a = "" === d2 ? "." + Q(h2, 0) : d2, I(c) ? (e = "", null != a && (e = a.replace(P2, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N2(c, e + (!c.key || h2 && h2.key === c.key ? "" : ("" + c.key).replace(P2, "$&/") + "/") + a)), b.push(c)), 1;
      h2 = 0;
      d2 = "" === d2 ? "." : d2 + ":";
      if (I(a))
        for (var g2 = 0; g2 < a.length; g2++) {
          k = a[g2];
          var f = d2 + Q(k, g2);
          h2 += R(k, b, e, f, c);
        }
      else if (f = A2(a), "function" === typeof f)
        for (a = f.call(a), g2 = 0; !(k = a.next()).done; )
          k = k.value, f = d2 + Q(k, g2++), h2 += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d2 = [], c = 0;
      R(a, d2, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d2;
    }
    function T2(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V2 = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K };
    function X() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p2;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.act = X;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d2 = C2({}, a.props), c = a.key, k = a.ref, h2 = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h2 = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g2 = a.type.defaultProps;
        for (f in b)
          J2.call(b, f) && !L.hasOwnProperty(f) && (d2[f] = void 0 === b[f] && void 0 !== g2 ? g2[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d2.children = e;
      else if (1 < f) {
        g2 = Array(f);
        for (var m = 0; m < f; m++)
          g2[m] = arguments[m + 2];
        d2.children = g2;
      }
      return { $$typeof: l2, type: a.type, key: c, ref: k, props: d2, _owner: h2 };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T2 };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x2, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V2.transition;
      V2.transition = {};
      try {
        a();
      } finally {
        V2.transition = b;
      }
    };
    exports.unstable_act = X;
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// ../../node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../../node_modules/scheduler/cjs/scheduler.production.min.js
var require_scheduler_production_min = __commonJS({
  "../../node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
    "use strict";
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; 0 < c; ) {
          var d2 = c - 1 >>> 1, e = a[d2];
          if (0 < g2(e, b))
            a[d2] = b, a[c] = e, c = d2;
          else
            break a;
        }
    }
    function h2(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length)
        return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d2 = 0, e = a.length, w2 = e >>> 1; d2 < w2; ) {
            var m = 2 * (d2 + 1) - 1, C2 = a[m], n = m + 1, x2 = a[n];
            if (0 > g2(C2, c))
              n < e && 0 > g2(x2, C2) ? (a[d2] = x2, a[n] = c, d2 = n) : (a[d2] = C2, a[m] = c, d2 = m);
            else if (n < e && 0 > g2(x2, c))
              a[d2] = x2, a[n] = c, d2 = n;
            else
              break a;
          }
      }
      return b;
    }
    function g2(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      l2 = performance;
      exports.unstable_now = function() {
        return l2.now();
      };
    } else {
      p2 = Date, q = p2.now();
      exports.unstable_now = function() {
        return p2.now() - q;
      };
    }
    var l2;
    var p2;
    var q;
    var r = [];
    var t = [];
    var u = 1;
    var v = null;
    var y = 3;
    var z = false;
    var A2 = false;
    var B = false;
    var D = "function" === typeof setTimeout ? setTimeout : null;
    var E = "function" === typeof clearTimeout ? clearTimeout : null;
    var F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h2(t); null !== b; ) {
        if (null === b.callback)
          k(t);
        else if (b.startTime <= a)
          k(t), b.sortIndex = b.expirationTime, f(r, b);
        else
          break;
        b = h2(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A2)
        if (null !== h2(r))
          A2 = true, I(J2);
        else {
          var b = h2(t);
          null !== b && K(H, b.startTime - a);
        }
    }
    function J2(a, b) {
      A2 = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h2(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d2 = v.callback;
          if ("function" === typeof d2) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d2(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h2(r) && k(r);
            G(b);
          } else
            k(r);
          v = h2(r);
        }
        if (null !== v)
          var w2 = true;
        else {
          var m = h2(t);
          null !== m && K(H, m.startTime - b);
          w2 = false;
        }
        return w2;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N2 = false;
    var O = null;
    var L = -1;
    var P2 = 5;
    var Q = -1;
    function M() {
      return exports.unstable_now() - Q < P2 ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N2 = false, O = null);
        }
      } else
        N2 = false;
    }
    var S;
    if ("function" === typeof F)
      S = function() {
        F(R);
      };
    else if ("undefined" !== typeof MessageChannel) {
      T2 = new MessageChannel(), U = T2.port2;
      T2.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else
      S = function() {
        D(R, 0);
      };
    var T2;
    var U;
    function I(a) {
      O = a;
      N2 || (N2 = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A2 || z || (A2 = true, I(J2));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h2(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d2 = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d2 + c : d2) : c = d2;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d2 ? (a.sortIndex = c, f(t, a), null === h2(r) && a === h2(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d2))) : (a.sortIndex = e, f(r, a), A2 || z || (A2 = true, I(J2)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  }
});

// ../../node_modules/scheduler/index.js
var require_scheduler = __commonJS({
  "../../node_modules/scheduler/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_scheduler_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../../node_modules/react-dom/cjs/react-dom.production.min.js
var require_react_dom_production_min = __commonJS({
  "../../node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
    "use strict";
    var aa = require_react();
    var ca = require_scheduler();
    function p2(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
        b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set();
    var ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++)
        da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
    var ja = Object.prototype.hasOwnProperty;
    var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var la = {};
    var ma = {};
    function oa(a) {
      if (ja.call(ma, a))
        return true;
      if (ja.call(la, a))
        return false;
      if (ka.test(a))
        return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d2) {
      if (null !== c && 0 === c.type)
        return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d2)
            return false;
          if (null !== c)
            return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d2) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d2))
        return true;
      if (d2)
        return false;
      if (null !== c)
        switch (c.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
      return false;
    }
    function v(a, b, c, d2, e, f, g2) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d2;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f;
      this.removeEmptyString = g2;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d2) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d2 || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
        qa(b, c, e, d2) && (c = null), d2 || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d2 = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d2 ? a.setAttributeNS(d2, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    var va = Symbol.for("react.element");
    var wa = Symbol.for("react.portal");
    var ya = Symbol.for("react.fragment");
    var za = Symbol.for("react.strict_mode");
    var Aa = Symbol.for("react.profiler");
    var Ba = Symbol.for("react.provider");
    var Ca = Symbol.for("react.context");
    var Da = Symbol.for("react.forward_ref");
    var Ea = Symbol.for("react.suspense");
    var Fa = Symbol.for("react.suspense_list");
    var Ga = Symbol.for("react.memo");
    var Ha = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var Ia = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A2 = Object.assign;
    var La;
    function Ma(a) {
      if (void 0 === La)
        try {
          throw Error();
        } catch (c) {
          var b = c.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na)
        return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b)
          if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l2) {
              var d2 = l2;
            }
            Reflect.construct(a, [], b);
          } else {
            try {
              b.call();
            } catch (l2) {
              d2 = l2;
            }
            a.call(b.prototype);
          }
        else {
          try {
            throw Error();
          } catch (l2) {
            d2 = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d2 && "string" === typeof l2.stack) {
          for (var e = l2.stack.split("\n"), f = d2.stack.split("\n"), g2 = e.length - 1, h2 = f.length - 1; 1 <= g2 && 0 <= h2 && e[g2] !== f[h2]; )
            h2--;
          for (; 1 <= g2 && 0 <= h2; g2--, h2--)
            if (e[g2] !== f[h2]) {
              if (1 !== g2 || 1 !== h2) {
                do
                  if (g2--, h2--, 0 > h2 || e[g2] !== f[h2]) {
                    var k = "\n" + e[g2].replace(" at new ", " at ");
                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                    return k;
                  }
                while (1 <= g2 && 0 <= h2);
              }
              break;
            }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a)
        return null;
      if ("function" === typeof a)
        return a.displayName || a.name || null;
      if ("string" === typeof a)
        return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a)
        switch (a.$$typeof) {
          case Ca:
            return (a.displayName || "Context") + ".Consumer";
          case Ba:
            return (a._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a.render;
            a = a.displayName;
            a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
            return a;
          case Ga:
            return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
          case Ha:
            b = a._payload;
            a = a._init;
            try {
              return Qa(a(b));
            } catch (c) {
            }
        }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b)
            return b.displayName || b.name || null;
          if ("string" === typeof b)
            return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d2 = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f = c.set;
        Object.defineProperty(a, b, { configurable: true, get: function() {
          return e.call(this);
        }, set: function(a2) {
          d2 = "" + a2;
          f.call(this, a2);
        } });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return { getValue: function() {
          return d2;
        }, setValue: function(a2) {
          d2 = "" + a2;
        }, stopTracking: function() {
          a._valueTracker = null;
          delete a[b];
        } };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a)
        return false;
      var b = a._valueTracker;
      if (!b)
        return true;
      var c = b.getValue();
      var d2 = "";
      a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d2;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a)
        return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A2({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d2 = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d2, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d2 = b.type;
      if (null != c)
        if ("number" === d2) {
          if (0 === c && "" === a.value || a.value != c)
            a.value = "" + c;
        } else
          a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d2 || "reset" === d2) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d2 = b.type;
        if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b.value && null !== b.value))
          return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a)
        null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d2) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++)
          b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++)
          e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d2 && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d2 && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML)
        throw Error(p2(91));
      return A2({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b)
            throw Error(p2(92));
          if (eb(c)) {
            if (1 < c.length)
              throw Error(p2(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d2 = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d2 && (a.defaultValue = "" + d2);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb;
    var nb = function(a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d2, e) {
        MSApp.execUnsafeLocalFunction(function() {
          return a(b, c, d2, e);
        });
      } : a;
    }(function(a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
        a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild; )
          a.removeChild(a.firstChild);
        for (; b.firstChild; )
          a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function(a) {
      qb.forEach(function(b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b)
        if (b.hasOwnProperty(c)) {
          var d2 = 0 === c.indexOf("--"), e = rb(c, b[c], d2);
          "float" === c && (c = "cssFloat");
          d2 ? a.setProperty(c, e) : a[c] = e;
        }
    }
    var tb = A2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
          throw Error(p2(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children)
            throw Error(p2(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
            throw Error(p2(61));
        }
        if (null != b.style && "object" !== typeof b.style)
          throw Error(p2(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-"))
        return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null;
    var zb = null;
    var Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb)
          throw Error(p2(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b)
          for (a = 0; a < b.length; a++)
            Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib)
        return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab)
          Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c)
        return null;
      var d2 = Db(c);
      if (null === d2)
        return null;
      c = d2[b];
      a:
        switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
            a = !d2;
            break a;
          default:
            a = false;
        }
      if (a)
        return null;
      if (c && "function" !== typeof c)
        throw Error(p2(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia)
      try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a) {
        Lb = false;
      }
    var Mb;
    function Nb(a, b, c, d2, e, f, g2, h2, k) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l2);
      } catch (m) {
        this.onError(m);
      }
    }
    var Ob = false;
    var Pb = null;
    var Qb = false;
    var Rb = null;
    var Sb = { onError: function(a) {
      Ob = true;
      Pb = a;
    } };
    function Tb(a, b, c, d2, e, f, g2, h2, k) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d2, e, f, g2, h2, k) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else
          throw Error(p2(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate)
        for (; b.return; )
          b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b)
          return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a)
        throw Error(p2(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b)
          throw Error(p2(188));
        return b !== a ? null : a;
      }
      for (var c = a, d2 = b; ; ) {
        var e = c.return;
        if (null === e)
          break;
        var f = e.alternate;
        if (null === f) {
          d2 = e.return;
          if (null !== d2) {
            c = d2;
            continue;
          }
          break;
        }
        if (e.child === f.child) {
          for (f = e.child; f; ) {
            if (f === c)
              return Xb(e), a;
            if (f === d2)
              return Xb(e), b;
            f = f.sibling;
          }
          throw Error(p2(188));
        }
        if (c.return !== d2.return)
          c = e, d2 = f;
        else {
          for (var g2 = false, h2 = e.child; h2; ) {
            if (h2 === c) {
              g2 = true;
              c = e;
              d2 = f;
              break;
            }
            if (h2 === d2) {
              g2 = true;
              d2 = e;
              c = f;
              break;
            }
            h2 = h2.sibling;
          }
          if (!g2) {
            for (h2 = f.child; h2; ) {
              if (h2 === c) {
                g2 = true;
                c = f;
                d2 = e;
                break;
              }
              if (h2 === d2) {
                g2 = true;
                d2 = f;
                c = e;
                break;
              }
              h2 = h2.sibling;
            }
            if (!g2)
              throw Error(p2(189));
          }
        }
        if (c.alternate !== d2)
          throw Error(p2(190));
      }
      if (3 !== c.tag)
        throw Error(p2(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag)
        return a;
      for (a = a.child; null !== a; ) {
        var b = $b(a);
        if (null !== b)
          return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback;
    var bc = ca.unstable_cancelCallback;
    var cc = ca.unstable_shouldYield;
    var dc = ca.unstable_requestPaint;
    var B = ca.unstable_now;
    var ec = ca.unstable_getCurrentPriorityLevel;
    var fc = ca.unstable_ImmediatePriority;
    var gc = ca.unstable_UserBlockingPriority;
    var hc = ca.unstable_NormalPriority;
    var ic = ca.unstable_LowPriority;
    var jc = ca.unstable_IdlePriority;
    var kc = null;
    var lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot)
        try {
          lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
        } catch (b) {
        }
    }
    var oc = Math.clz32 ? Math.clz32 : nc;
    var pc = Math.log;
    var qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64;
    var sc = 4194304;
    function tc(a) {
      switch (a & -a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c)
        return 0;
      var d2 = 0, e = a.suspendedLanes, f = a.pingedLanes, g2 = c & 268435455;
      if (0 !== g2) {
        var h2 = g2 & ~e;
        0 !== h2 ? d2 = tc(h2) : (f &= g2, 0 !== f && (d2 = tc(f)));
      } else
        g2 = c & ~e, 0 !== g2 ? d2 = tc(g2) : 0 !== f && (d2 = tc(f));
      if (0 === d2)
        return 0;
      if (0 !== b && b !== d2 && 0 === (b & e) && (e = d2 & -d2, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240)))
        return b;
      0 !== (d2 & 4) && (d2 |= c & 16);
      b = a.entangledLanes;
      if (0 !== b)
        for (a = a.entanglements, b &= d2; 0 < b; )
          c = 31 - oc(b), e = 1 << c, d2 |= a[c], b &= ~e;
      return d2;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d2 = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
        var g2 = 31 - oc(f), h2 = 1 << g2, k = e[g2];
        if (-1 === k) {
          if (0 === (h2 & c) || 0 !== (h2 & d2))
            e[g2] = vc(h2, b);
        } else
          k <= b && (a.expiredLanes |= h2);
        f &= ~h2;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++)
        b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d2 = a.eventTimes;
      for (a = a.expirationTimes; 0 < c; ) {
        var e = 31 - oc(c), f = 1 << e;
        b[e] = 0;
        d2[e] = -1;
        a[e] = -1;
        c &= ~f;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c; ) {
        var d2 = 31 - oc(c), e = 1 << d2;
        e & b | a[d2] & b && (a[d2] |= b);
        c &= ~e;
      }
    }
    var C2 = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec;
    var Fc;
    var Gc;
    var Hc;
    var Ic;
    var Jc = false;
    var Kc = [];
    var Lc = null;
    var Mc = null;
    var Nc = null;
    var Oc = /* @__PURE__ */ new Map();
    var Pc = /* @__PURE__ */ new Map();
    var Qc = [];
    var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d2, e, f) {
      if (null === a || a.nativeEvent !== f)
        return a = { blockedOn: b, domEventName: c, eventSystemFlags: d2, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d2;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d2, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d2, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d2, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d2, e), true;
        case "pointerover":
          var f = e.pointerId;
          Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d2, e));
          return true;
        case "gotpointercapture":
          return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d2, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function() {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn)
        return false;
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d2 = new c.constructor(c.type, c);
          wb = d2;
          c.target.dispatchEvent(d2);
          wb = null;
        } else
          return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d2 = Kc[c];
          d2.blockedOn === a && (d2.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++)
        d2 = Qc[c], d2.blockedOn === a && (d2.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
        Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig;
    var dd = true;
    function ed(a, b, c, d2) {
      var e = C2, f = cd.transition;
      cd.transition = null;
      try {
        C2 = 1, fd(a, b, c, d2);
      } finally {
        C2 = e, cd.transition = f;
      }
    }
    function gd(a, b, c, d2) {
      var e = C2, f = cd.transition;
      cd.transition = null;
      try {
        C2 = 4, fd(a, b, c, d2);
      } finally {
        C2 = e, cd.transition = f;
      }
    }
    function fd(a, b, c, d2) {
      if (dd) {
        var e = Yc(a, b, c, d2);
        if (null === e)
          hd(a, b, d2, id, c), Sc(a, d2);
        else if (Uc(e, a, b, c, d2))
          d2.stopPropagation();
        else if (Sc(a, d2), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e; ) {
            var f = Cb(e);
            null !== f && Ec(f);
            f = Yc(a, b, c, d2);
            null === f && hd(a, b, d2, id, c);
            if (f === e)
              break;
            e = f;
          }
          null !== e && d2.stopPropagation();
        } else
          hd(a, b, d2, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d2) {
      id = null;
      a = xb(d2);
      a = Wc(a);
      if (null !== a)
        if (b = Vb(a), null === b)
          a = null;
        else if (c = b.tag, 13 === c) {
          a = Wb(b);
          if (null !== a)
            return a;
          a = null;
        } else if (3 === c) {
          if (b.stateNode.current.memoizedState.isDehydrated)
            return 3 === b.tag ? b.stateNode.containerInfo : null;
          a = null;
        } else
          b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null;
    var ld = null;
    var md = null;
    function nd() {
      if (md)
        return md;
      var a, b = ld, c = b.length, d2, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++)
        ;
      var g2 = c - a;
      for (d2 = 1; d2 <= g2 && b[c - d2] === e[f - d2]; d2++)
        ;
      return md = e.slice(a, 1 < d2 ? 1 - d2 : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d2, e, f, g2) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d2;
        this.nativeEvent = f;
        this.target = g2;
        this.currentTarget = null;
        for (var c in a)
          a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
        this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A2(b.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var a2 = this.nativeEvent;
        a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
      }, stopPropagation: function() {
        var a2 = this.nativeEvent;
        a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
      }, persist: function() {
      }, isPersistent: pd });
      return b;
    }
    var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
      return a.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 };
    var td = rd(sd);
    var ud = A2({}, sd, { view: 0, detail: 0 });
    var vd = rd(ud);
    var wd;
    var xd;
    var yd;
    var Ad = A2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    }, movementX: function(a) {
      if ("movementX" in a)
        return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    }, movementY: function(a) {
      return "movementY" in a ? a.movementY : xd;
    } });
    var Bd = rd(Ad);
    var Cd = A2({}, Ad, { dataTransfer: 0 });
    var Dd = rd(Cd);
    var Ed = A2({}, ud, { relatedTarget: 0 });
    var Fd = rd(Ed);
    var Gd = A2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Hd = rd(Gd);
    var Id = A2({}, sd, { clipboardData: function(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    } });
    var Jd = rd(Id);
    var Kd = A2({}, sd, { data: 0 });
    var Ld = rd(Kd);
    var Md = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    };
    var Nd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A2({}, ud, { key: function(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b)
          return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
      return "keypress" === a.type ? od(a) : 0;
    }, keyCode: function(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }, which: function(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    } });
    var Rd = rd(Qd);
    var Sd = A2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
    var Td = rd(Sd);
    var Ud = A2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
    var Vd = rd(Ud);
    var Wd = A2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
    var Xd = rd(Wd);
    var Yd = A2({}, Ad, {
      deltaX: function(a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function(a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    });
    var Zd = rd(Yd);
    var $d = [9, 13, 27, 32];
    var ae = ia && "CompositionEvent" in window;
    var be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be;
    var de = ia && (!ae || be && 8 < be && 11 >= be);
    var ee = String.fromCharCode(32);
    var fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which)
            return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie)
        return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length)
              return b.char;
            if (b.which)
              return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d2) {
      Eb(d2);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d2), a.push({ event: c, listeners: b }));
    }
    var pe = null;
    var qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b))
        return a;
    }
    function ve(a, b) {
      if ("change" === a)
        return b;
    }
    var we = false;
    if (ia) {
      if (ia) {
        ye = "oninput" in document;
        if (!ye) {
          ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else
        xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    var xe;
    var ye;
    var ze;
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a)
        return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a)
        return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a)
        return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b))
        return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
        return false;
      var c = Object.keys(a), d2 = Object.keys(b);
      if (c.length !== d2.length)
        return false;
      for (d2 = 0; d2 < c.length; d2++) {
        var e = c[d2];
        if (!ja.call(b, e) || !He(a[e], b[e]))
          return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild; )
        a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d2; c; ) {
        if (3 === c.nodeType) {
          d2 = a + c.textContent.length;
          if (a <= b && d2 >= b)
            return { node: c, offset: b - a };
          a = d2;
        }
        a: {
          for (; c; ) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d2) {
          c = false;
        }
        if (c)
          a = b.contentWindow;
        else
          break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d2 = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d2 && Ne(c)) {
          if (b = d2.start, a = d2.end, void 0 === a && (a = b), "selectionStart" in c)
            c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f = Math.min(d2.start, e);
            d2 = void 0 === d2.end ? f : Math.min(d2.end, e);
            !a.extend && f > d2 && (e = d2, d2 = f, f = e);
            e = Ke(c, f);
            var g2 = Ke(
              c,
              d2
            );
            e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d2 ? (a.addRange(b), a.extend(g2.node, g2.offset)) : (b.setEnd(g2.node, g2.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode; )
          1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++)
          a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
    var Qe = null;
    var Re = null;
    var Se = null;
    var Te = false;
    function Ue(a, b, c) {
      var d2 = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d2 }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
    var Xe = {};
    var Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a])
        return Xe[a];
      if (!We[a])
        return a;
      var b = We[a], c;
      for (c in b)
        if (b.hasOwnProperty(c) && c in Ye)
          return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend");
    var af = Ze("animationiteration");
    var bf = Ze("animationstart");
    var cf = Ze("transitionend");
    var df = /* @__PURE__ */ new Map();
    var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (gf = 0; gf < ef.length; gf++) {
      hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    var hf;
    var jf;
    var kf;
    var gf;
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
    var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d2 = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d2, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d2 = a[c], e = d2.event;
        d2 = d2.listeners;
        a: {
          var f = void 0;
          if (b)
            for (var g2 = d2.length - 1; 0 <= g2; g2--) {
              var h2 = d2[g2], k = h2.instance, l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              nf(e, h2, l2);
              f = k;
            }
          else
            for (g2 = 0; g2 < d2.length; g2++) {
              h2 = d2[g2];
              k = h2.instance;
              l2 = h2.currentTarget;
              h2 = h2.listener;
              if (k !== f && e.isPropagationStopped())
                break a;
              nf(e, h2, l2);
              f = k;
            }
        }
      }
      if (Qb)
        throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d2 = a + "__bubble";
      c.has(d2) || (pf(b, a, 2, false), c.add(d2));
    }
    function qf(a, b, c) {
      var d2 = 0;
      b && (d2 |= 4);
      pf(c, a, d2, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function(b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d2) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d2 ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d2, e) {
      var f = d2;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d2)
        a:
          for (; ; ) {
            if (null === d2)
              return;
            var g2 = d2.tag;
            if (3 === g2 || 4 === g2) {
              var h2 = d2.stateNode.containerInfo;
              if (h2 === e || 8 === h2.nodeType && h2.parentNode === e)
                break;
              if (4 === g2)
                for (g2 = d2.return; null !== g2; ) {
                  var k = g2.tag;
                  if (3 === k || 4 === k) {
                    if (k = g2.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e)
                      return;
                  }
                  g2 = g2.return;
                }
              for (; null !== h2; ) {
                g2 = Wc(h2);
                if (null === g2)
                  return;
                k = g2.tag;
                if (5 === k || 6 === k) {
                  d2 = f = g2;
                  continue a;
                }
                h2 = h2.parentNode;
              }
            }
            d2 = d2.return;
          }
      Jb(function() {
        var d3 = f, e2 = xb(c), g3 = [];
        a: {
          var h3 = df.get(a);
          if (void 0 !== h3) {
            var k2 = td, n = a;
            switch (a) {
              case "keypress":
                if (0 === od(c))
                  break a;
              case "keydown":
              case "keyup":
                k2 = Rd;
                break;
              case "focusin":
                n = "focus";
                k2 = Fd;
                break;
              case "focusout":
                n = "blur";
                k2 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k2 = Fd;
                break;
              case "click":
                if (2 === c.button)
                  break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k2 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k2 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k2 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k2 = Hd;
                break;
              case cf:
                k2 = Xd;
                break;
              case "scroll":
                k2 = vd;
                break;
              case "wheel":
                k2 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k2 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k2 = Td;
            }
            var t = 0 !== (b & 4), J2 = !t && "scroll" === a, x2 = t ? null !== h3 ? h3 + "Capture" : null : h3;
            t = [];
            for (var w2 = d3, u; null !== w2; ) {
              u = w2;
              var F = u.stateNode;
              5 === u.tag && null !== F && (u = F, null !== x2 && (F = Kb(w2, x2), null != F && t.push(tf(w2, F, u))));
              if (J2)
                break;
              w2 = w2.return;
            }
            0 < t.length && (h3 = new k2(h3, n, null, c, e2), g3.push({ event: h3, listeners: t }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h3 = "mouseover" === a || "pointerover" === a;
            k2 = "mouseout" === a || "pointerout" === a;
            if (h3 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf]))
              break a;
            if (k2 || h3) {
              h3 = e2.window === e2 ? e2 : (h3 = e2.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
              if (k2) {
                if (n = c.relatedTarget || c.toElement, k2 = d3, n = n ? Wc(n) : null, null !== n && (J2 = Vb(n), n !== J2 || 5 !== n.tag && 6 !== n.tag))
                  n = null;
              } else
                k2 = null, n = d3;
              if (k2 !== n) {
                t = Bd;
                F = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a)
                  t = Td, F = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k2 ? h3 : ue(k2);
                u = null == n ? h3 : ue(n);
                h3 = new t(F, w2 + "leave", k2, c, e2);
                h3.target = J2;
                h3.relatedTarget = u;
                F = null;
                Wc(e2) === d3 && (t = new t(x2, w2 + "enter", n, c, e2), t.target = u, t.relatedTarget = J2, F = t);
                J2 = F;
                if (k2 && n)
                  b: {
                    t = k2;
                    x2 = n;
                    w2 = 0;
                    for (u = t; u; u = vf(u))
                      w2++;
                    u = 0;
                    for (F = x2; F; F = vf(F))
                      u++;
                    for (; 0 < w2 - u; )
                      t = vf(t), w2--;
                    for (; 0 < u - w2; )
                      x2 = vf(x2), u--;
                    for (; w2--; ) {
                      if (t === x2 || null !== x2 && t === x2.alternate)
                        break b;
                      t = vf(t);
                      x2 = vf(x2);
                    }
                    t = null;
                  }
                else
                  t = null;
                null !== k2 && wf(g3, h3, k2, t, false);
                null !== n && null !== J2 && wf(g3, J2, n, t, true);
              }
            }
          }
          a: {
            h3 = d3 ? ue(d3) : window;
            k2 = h3.nodeName && h3.nodeName.toLowerCase();
            if ("select" === k2 || "input" === k2 && "file" === h3.type)
              var na = ve;
            else if (me(h3))
              if (we)
                na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
            else
              (k2 = h3.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
            if (na && (na = na(a, d3))) {
              ne(g3, na, c, e2);
              break a;
            }
            xa && xa(a, h3, d3);
            "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
          }
          xa = d3 ? ue(d3) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable)
                Qe = xa, Re = d3, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g3, c, e2);
              break;
            case "selectionchange":
              if (Pe)
                break;
            case "keydown":
            case "keyup":
              Ue(g3, c, e2);
          }
          var $a;
          if (ae)
            b: {
              switch (a) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
          else
            ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c))
            d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g3.push({ event: e2, listeners: d3 }), e2.data = $a);
        }
        se(g3, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d2 = []; null !== a; ) {
        var e = a, f = e.stateNode;
        5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d2.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d2.push(tf(a, f, e)));
        a = a.return;
      }
      return d2;
    }
    function vf(a) {
      if (null === a)
        return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d2, e) {
      for (var f = b._reactName, g2 = []; null !== c && c !== d2; ) {
        var h2 = c, k = h2.alternate, l2 = h2.stateNode;
        if (null !== k && k === d2)
          break;
        5 === h2.tag && null !== l2 && (h2 = l2, e ? (k = Kb(c, f), null != k && g2.unshift(tf(c, k, h2))) : e || (k = Kb(c, f), null != k && g2.push(tf(c, k, h2))));
        c = c.return;
      }
      0 !== g2.length && a.push({ event: b, listeners: g2 });
    }
    var xf = /\r\n?/g;
    var yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c)
        throw Error(p2(425));
    }
    function Bf() {
    }
    var Cf = null;
    var Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
    var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
    var Hf = "function" === typeof Promise ? Promise : void 0;
    var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function() {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d2 = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType)
          if (c = e.data, "/$" === c) {
            if (0 === d2) {
              a.removeChild(e);
              bd(b);
              return;
            }
            d2--;
          } else
            "$" !== c && "$?" !== c && "$!" !== c || d2++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b)
          break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b)
            break;
          if ("/$" === b)
            return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b)
              return a;
            b--;
          } else
            "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2);
    var Of = "__reactFiber$" + Nf;
    var Pf = "__reactProps$" + Nf;
    var uf = "__reactContainer$" + Nf;
    var of = "__reactEvents$" + Nf;
    var Qf = "__reactListeners$" + Nf;
    var Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b)
        return b;
      for (var c = a.parentNode; c; ) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child)
            for (a = Mf(a); null !== a; ) {
              if (c = a[Of])
                return c;
              a = Mf(a);
            }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag)
        return a.stateNode;
      throw Error(p2(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [];
    var Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {};
    var H = Uf(Vf);
    var Wf = Uf(false);
    var Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c)
        return Vf;
      var d2 = a.stateNode;
      if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b)
        return d2.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f;
      for (f in c)
        e[f] = b[f];
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf)
        throw Error(p2(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d2 = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d2.getChildContext)
        return c;
      d2 = d2.getChildContext();
      for (var e in d2)
        if (!(e in b))
          throw Error(p2(108, Ra(a) || "Unknown", e));
      return A2({}, c, d2);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d2 = a.stateNode;
      if (!d2)
        throw Error(p2(169));
      c ? (a = bg(a, b, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null;
    var fg = false;
    var gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C2;
        try {
          var c = eg;
          for (C2 = 1; a < c.length; a++) {
            var d2 = c[a];
            do
              d2 = d2(true);
            while (null !== d2);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C2 = b, gg = false;
        }
      }
      return null;
    }
    var kg = [];
    var lg = 0;
    var mg = null;
    var ng = 0;
    var og = [];
    var pg = 0;
    var qg = null;
    var rg = 1;
    var sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d2 = rg;
      a = sg;
      var e = 32 - oc(d2) - 1;
      d2 &= ~(1 << e);
      c += 1;
      var f = 32 - oc(b) + e;
      if (30 < f) {
        var g2 = e - e % 5;
        f = (d2 & (1 << g2) - 1).toString(32);
        d2 >>= g2;
        e -= g2;
        rg = 1 << 32 - oc(b) + e | c << e | d2;
        sg = f + a;
      } else
        rg = 1 << f | c << e | d2, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg; )
        mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg; )
        qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null;
    var yg = null;
    var I = false;
    var zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a))
              throw Error(p2(418));
            b = Lf(c.nextSibling);
            var d2 = xg;
            b && Cg(a, b) ? Ag(d2, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a))
            throw Error(p2(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
        a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg)
        return false;
      if (!I)
        return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a))
          throw Hg(), Error(p2(418));
        for (; b; )
          Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a)
          throw Error(p2(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a; ) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else
                "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else
        yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a; )
        a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag)
              throw Error(p2(309));
            var d2 = c.stateNode;
          }
          if (!d2)
            throw Error(p2(147, a));
          var e = d2, f = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f)
            return b.ref;
          b = function(a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f] : b2[f] = a2;
          };
          b._stringRef = f;
          return b;
        }
        if ("string" !== typeof a)
          throw Error(p2(284));
        if (!c._owner)
          throw Error(p2(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d3 = b2.deletions;
          null === d3 ? (b2.deletions = [c2], b2.flags |= 16) : d3.push(c2);
        }
      }
      function c(c2, d3) {
        if (!a)
          return null;
        for (; null !== d3; )
          b(c2, d3), d3 = d3.sibling;
        return null;
      }
      function d2(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
          null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f(b2, c2, d3) {
        b2.index = d3;
        if (!a)
          return b2.flags |= 1048576, c2;
        d3 = b2.alternate;
        if (null !== d3)
          return d3 = d3.index, d3 < c2 ? (b2.flags |= 2, c2) : d3;
        b2.flags |= 2;
        return c2;
      }
      function g2(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h2(a2, b2, c2, d3) {
        if (null === b2 || 6 !== b2.tag)
          return b2 = Qg(c2, a2.mode, d3), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k(a2, b2, c2, d3) {
        var f2 = c2.type;
        if (f2 === ya)
          return m(a2, b2, c2.props.children, d3, c2.key);
        if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type))
          return d3 = e(b2, c2.props), d3.ref = Lg(a2, b2, c2), d3.return = a2, d3;
        d3 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d3);
        d3.ref = Lg(a2, b2, c2);
        d3.return = a2;
        return d3;
      }
      function l2(a2, b2, c2, d3) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
          return b2 = Sg(c2, a2.mode, d3), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m(a2, b2, c2, d3, f2) {
        if (null === b2 || 7 !== b2.tag)
          return b2 = Tg(c2, a2.mode, d3, f2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
          return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d3 = b2._init;
              return q(a2, d3(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2))
            return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r(a2, b2, c2, d3) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
          return null !== e2 ? null : h2(a2, b2, "" + c2, d3);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k(a2, b2, c2, d3) : null;
            case wa:
              return c2.key === e2 ? l2(a2, b2, c2, d3) : null;
            case Ha:
              return e2 = c2._init, r(
                a2,
                b2,
                e2(c2._payload),
                d3
              );
          }
          if (eb(c2) || Ka(c2))
            return null !== e2 ? null : m(a2, b2, c2, d3, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y(a2, b2, c2, d3, e2) {
        if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
          return a2 = a2.get(c2) || null, h2(b2, a2, "" + d3, e2);
        if ("object" === typeof d3 && null !== d3) {
          switch (d3.$$typeof) {
            case va:
              return a2 = a2.get(null === d3.key ? c2 : d3.key) || null, k(b2, a2, d3, e2);
            case wa:
              return a2 = a2.get(null === d3.key ? c2 : d3.key) || null, l2(b2, a2, d3, e2);
            case Ha:
              var f2 = d3._init;
              return y(a2, b2, c2, f2(d3._payload), e2);
          }
          if (eb(d3) || Ka(d3))
            return a2 = a2.get(c2) || null, m(b2, a2, d3, e2, null);
          Mg(b2, d3);
        }
        return null;
      }
      function n(e2, g3, h3, k2) {
        for (var l3 = null, m2 = null, u = g3, w2 = g3 = 0, x2 = null; null !== u && w2 < h3.length; w2++) {
          u.index > w2 ? (x2 = u, u = null) : x2 = u.sibling;
          var n2 = r(e2, u, h3[w2], k2);
          if (null === n2) {
            null === u && (u = x2);
            break;
          }
          a && u && null === n2.alternate && b(e2, u);
          g3 = f(n2, g3, w2);
          null === m2 ? l3 = n2 : m2.sibling = n2;
          m2 = n2;
          u = x2;
        }
        if (w2 === h3.length)
          return c(e2, u), I && tg(e2, w2), l3;
        if (null === u) {
          for (; w2 < h3.length; w2++)
            u = q(e2, h3[w2], k2), null !== u && (g3 = f(u, g3, w2), null === m2 ? l3 = u : m2.sibling = u, m2 = u);
          I && tg(e2, w2);
          return l3;
        }
        for (u = d2(e2, u); w2 < h3.length; w2++)
          x2 = y(u, e2, w2, h3[w2], k2), null !== x2 && (a && null !== x2.alternate && u.delete(null === x2.key ? w2 : x2.key), g3 = f(x2, g3, w2), null === m2 ? l3 = x2 : m2.sibling = x2, m2 = x2);
        a && u.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function t(e2, g3, h3, k2) {
        var l3 = Ka(h3);
        if ("function" !== typeof l3)
          throw Error(p2(150));
        h3 = l3.call(h3);
        if (null == h3)
          throw Error(p2(151));
        for (var u = l3 = null, m2 = g3, w2 = g3 = 0, x2 = null, n2 = h3.next(); null !== m2 && !n2.done; w2++, n2 = h3.next()) {
          m2.index > w2 ? (x2 = m2, m2 = null) : x2 = m2.sibling;
          var t2 = r(e2, m2, n2.value, k2);
          if (null === t2) {
            null === m2 && (m2 = x2);
            break;
          }
          a && m2 && null === t2.alternate && b(e2, m2);
          g3 = f(t2, g3, w2);
          null === u ? l3 = t2 : u.sibling = t2;
          u = t2;
          m2 = x2;
        }
        if (n2.done)
          return c(
            e2,
            m2
          ), I && tg(e2, w2), l3;
        if (null === m2) {
          for (; !n2.done; w2++, n2 = h3.next())
            n2 = q(e2, n2.value, k2), null !== n2 && (g3 = f(n2, g3, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
          I && tg(e2, w2);
          return l3;
        }
        for (m2 = d2(e2, m2); !n2.done; w2++, n2 = h3.next())
          n2 = y(m2, e2, w2, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w2 : n2.key), g3 = f(n2, g3, w2), null === u ? l3 = n2 : u.sibling = n2, u = n2);
        a && m2.forEach(function(a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function J2(a2, d3, f2, h3) {
        "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
        if ("object" === typeof f2 && null !== f2) {
          switch (f2.$$typeof) {
            case va:
              a: {
                for (var k2 = f2.key, l3 = d3; null !== l3; ) {
                  if (l3.key === k2) {
                    k2 = f2.type;
                    if (k2 === ya) {
                      if (7 === l3.tag) {
                        c(a2, l3.sibling);
                        d3 = e(l3, f2.props.children);
                        d3.return = a2;
                        a2 = d3;
                        break a;
                      }
                    } else if (l3.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l3.type) {
                      c(a2, l3.sibling);
                      d3 = e(l3, f2.props);
                      d3.ref = Lg(a2, l3, f2);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                    c(a2, l3);
                    break;
                  } else
                    b(a2, l3);
                  l3 = l3.sibling;
                }
                f2.type === ya ? (d3 = Tg(f2.props.children, a2.mode, h3, f2.key), d3.return = a2, a2 = d3) : (h3 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h3), h3.ref = Lg(a2, d3, f2), h3.return = a2, a2 = h3);
              }
              return g2(a2);
            case wa:
              a: {
                for (l3 = f2.key; null !== d3; ) {
                  if (d3.key === l3)
                    if (4 === d3.tag && d3.stateNode.containerInfo === f2.containerInfo && d3.stateNode.implementation === f2.implementation) {
                      c(a2, d3.sibling);
                      d3 = e(d3, f2.children || []);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    } else {
                      c(a2, d3);
                      break;
                    }
                  else
                    b(a2, d3);
                  d3 = d3.sibling;
                }
                d3 = Sg(f2, a2.mode, h3);
                d3.return = a2;
                a2 = d3;
              }
              return g2(a2);
            case Ha:
              return l3 = f2._init, J2(a2, d3, l3(f2._payload), h3);
          }
          if (eb(f2))
            return n(a2, d3, f2, h3);
          if (Ka(f2))
            return t(a2, d3, f2, h3);
          Mg(a2, f2);
        }
        return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d3 && 6 === d3.tag ? (c(a2, d3.sibling), d3 = e(d3, f2), d3.return = a2, a2 = d3) : (c(a2, d3), d3 = Qg(f2, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c(a2, d3);
      }
      return J2;
    }
    var Ug = Og(true);
    var Vg = Og(false);
    var Wg = Uf(null);
    var Xg = null;
    var Yg = null;
    var Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a; ) {
        var d2 = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d2 && (d2.childLanes |= b)) : null !== d2 && (d2.childLanes & b) !== b && (d2.childLanes |= b);
        if (a === c)
          break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a)
        if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg)
            throw Error(p2(308));
          Yg = a;
          Xg.dependencies = { lanes: 0, firstContext: a };
        } else
          Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d2) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d2);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a; )
        a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d2 = a.updateQueue;
      if (null === d2)
        return null;
      d2 = d2.shared;
      if (0 !== (K & 2)) {
        var e = d2.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d2.pending = b;
        return ih(a, c);
      }
      e = d2.interleaved;
      null === e ? (b.next = b, gh(d2)) : (b.next = e.next, e.next = b);
      d2.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d2 = b.lanes;
        d2 &= a.pendingLanes;
        c |= d2;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d2 = a.alternate;
      if (null !== d2 && (d2 = d2.updateQueue, c === d2)) {
        var e = null, f = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g2 = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f ? e = f = g2 : f = f.next = g2;
            c = c.next;
          } while (null !== c);
          null === f ? e = f = b : f = f.next = b;
        } else
          e = f = b;
        c = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d2.shared, effects: d2.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d2) {
      var e = a.updateQueue;
      jh = false;
      var f = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h2 = e.shared.pending;
      if (null !== h2) {
        e.shared.pending = null;
        var k = h2, l2 = k.next;
        k.next = null;
        null === g2 ? f = l2 : g2.next = l2;
        g2 = k;
        var m = a.alternate;
        null !== m && (m = m.updateQueue, h2 = m.lastBaseUpdate, h2 !== g2 && (null === h2 ? m.firstBaseUpdate = l2 : h2.next = l2, m.lastBaseUpdate = k));
      }
      if (null !== f) {
        var q = e.baseState;
        g2 = 0;
        m = l2 = k = null;
        h2 = f;
        do {
          var r = h2.lane, y = h2.eventTime;
          if ((d2 & r) === r) {
            null !== m && (m = m.next = {
              eventTime: y,
              lane: 0,
              tag: h2.tag,
              payload: h2.payload,
              callback: h2.callback,
              next: null
            });
            a: {
              var n = a, t = h2;
              r = b;
              y = c;
              switch (t.tag) {
                case 1:
                  n = t.payload;
                  if ("function" === typeof n) {
                    q = n.call(y, q, r);
                    break a;
                  }
                  q = n;
                  break a;
                case 3:
                  n.flags = n.flags & -65537 | 128;
                case 0:
                  n = t.payload;
                  r = "function" === typeof n ? n.call(y, q, r) : n;
                  if (null === r || void 0 === r)
                    break a;
                  q = A2({}, q, r);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h2] : r.push(h2));
          } else
            y = { eventTime: y, lane: r, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m ? (l2 = m = y, k = q) : m = m.next = y, g2 |= r;
          h2 = h2.next;
          if (null === h2)
            if (h2 = e.shared.pending, null === h2)
              break;
            else
              r = h2, h2 = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
        } while (1);
        null === m && (k = q);
        e.baseState = k;
        e.firstBaseUpdate = l2;
        e.lastBaseUpdate = m;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g2 |= e.lane, e = e.next;
          while (e !== b);
        } else
          null === f && (e.shared.lanes = 0);
        rh |= g2;
        a.lanes = g2;
        a.memoizedState = q;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a)
        for (b = 0; b < a.length; b++) {
          var d2 = a[b], e = d2.callback;
          if (null !== e) {
            d2.callback = null;
            d2 = c;
            if ("function" !== typeof e)
              throw Error(p2(191, e));
            e.call(d2);
          }
        }
    }
    var th = {};
    var uh = Uf(th);
    var vh = Uf(th);
    var wh = Uf(th);
    function xh(a) {
      if (a === th)
        throw Error(p2(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b; ) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
            return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128))
            return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a)
          break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++)
        Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher;
    var Gh = ua.ReactCurrentBatchConfig;
    var Hh = 0;
    var M = null;
    var N2 = null;
    var O = null;
    var Ih = false;
    var Jh = false;
    var Kh = 0;
    var Lh = 0;
    function P2() {
      throw Error(p2(321));
    }
    function Mh(a, b) {
      if (null === b)
        return false;
      for (var c = 0; c < b.length && c < a.length; c++)
        if (!He(a[c], b[c]))
          return false;
      return true;
    }
    function Nh(a, b, c, d2, e, f) {
      Hh = f;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d2, e);
      if (Jh) {
        f = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f)
            throw Error(p2(301));
          f += 1;
          O = N2 = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d2, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N2 && null !== N2.next;
      Hh = 0;
      O = N2 = M = null;
      Ih = false;
      if (b)
        throw Error(p2(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N2) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else
        a = N2.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b)
        O = b, N2 = a;
      else {
        if (null === a)
          throw Error(p2(310));
        N2 = a;
        a = { memoizedState: N2.memoizedState, baseState: N2.baseState, baseQueue: N2.baseQueue, queue: N2.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c)
        throw Error(p2(311));
      c.lastRenderedReducer = a;
      var d2 = N2, e = d2.baseQueue, f = c.pending;
      if (null !== f) {
        if (null !== e) {
          var g2 = e.next;
          e.next = f.next;
          f.next = g2;
        }
        d2.baseQueue = e = f;
        c.pending = null;
      }
      if (null !== e) {
        f = e.next;
        d2 = d2.baseState;
        var h2 = g2 = null, k = null, l2 = f;
        do {
          var m = l2.lane;
          if ((Hh & m) === m)
            null !== k && (k = k.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
          else {
            var q = {
              lane: m,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k ? (h2 = k = q, g2 = d2) : k = k.next = q;
            M.lanes |= m;
            rh |= m;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f);
        null === k ? g2 = d2 : k.next = h2;
        He(d2, b.memoizedState) || (dh = true);
        b.memoizedState = d2;
        b.baseState = g2;
        b.baseQueue = k;
        c.lastRenderedState = d2;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f = e.lane, M.lanes |= f, rh |= f, e = e.next;
        while (e !== a);
      } else
        null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c)
        throw Error(p2(311));
      c.lastRenderedReducer = a;
      var d2 = c.dispatch, e = c.pending, f = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g2 = e = e.next;
        do
          f = a(f, g2.action), g2 = g2.next;
        while (g2 !== e);
        He(f, b.memoizedState) || (dh = true);
        b.memoizedState = f;
        null === b.baseQueue && (b.baseState = f);
        c.lastRenderedState = f;
      }
      return [f, d2];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d2 = Uh(), e = b(), f = !He(d2.memoizedState, e);
      f && (d2.memoizedState = e, dh = true);
      d2 = d2.queue;
      $h(ai.bind(null, c, d2, a), [a]);
      if (d2.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d2, e, b), void 0, null);
        if (null === Q)
          throw Error(p2(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d2) {
      b.value = c;
      b.getSnapshot = d2;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function() {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d2) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d2) {
      a = { tag: a, create: b, destroy: c, deps: d2, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d2 = c.next, c.next = a, a.next = d2, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d2) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d2 ? null : d2);
    }
    function li(a, b, c, d2) {
      var e = Uh();
      d2 = void 0 === d2 ? null : d2;
      var f = void 0;
      if (null !== N2) {
        var g2 = N2.memoizedState;
        f = g2.destroy;
        if (null !== d2 && Mh(d2, g2.deps)) {
          e.memoizedState = bi(b, c, f, d2);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f, d2);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b)
        return a = a(), b(a), function() {
          b(null);
        };
      if (null !== b && void 0 !== b)
        return a = a(), b.current = a, function() {
          b.current = null;
        };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d2 = c.memoizedState;
      if (null !== d2 && null !== b && Mh(b, d2[1]))
        return d2[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d2 = c.memoizedState;
      if (null !== d2 && null !== b && Mh(b, d2[1]))
        return d2[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21))
        return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C2;
      C2 = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d2 = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C2 = c, Gh.transition = d2;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d2 = yi(a);
      c = { lane: d2, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a))
        Ai(b, c);
      else if (c = hh(a, b, c, d2), null !== c) {
        var e = R();
        gi(c, a, d2, e);
        Bi(c, b, d2);
      }
    }
    function ii(a, b, c) {
      var d2 = yi(a), e = { lane: d2, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a))
        Ai(b, e);
      else {
        var f = a.alternate;
        if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f))
          try {
            var g2 = b.lastRenderedState, h2 = f(g2, c);
            e.hasEagerState = true;
            e.eagerState = h2;
            if (He(h2, g2)) {
              var k = b.interleaved;
              null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
              b.interleaved = e;
              return;
            }
          } catch (l2) {
          } finally {
          }
        c = hh(a, b, e, d2);
        null !== c && (e = R(), gi(c, a, d2, e), Bi(c, b, d2));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d2 = b.lanes;
        d2 &= a.pendingLanes;
        c |= d2;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P2, useContext: P2, useEffect: P2, useImperativeHandle: P2, useInsertionEffect: P2, useLayoutEffect: P2, useMemo: P2, useReducer: P2, useRef: P2, useState: P2, useDebugValue: P2, useDeferredValue: P2, useTransition: P2, useMutableSource: P2, useSyncExternalStore: P2, useId: P2, unstable_isNewReconciler: false };
    var Oh = { readContext: eh, useCallback: function(a, b) {
      Th().memoizedState = [a, void 0 === b ? null : b];
      return a;
    }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ki(
        4194308,
        4,
        pi.bind(null, b, a),
        c
      );
    }, useLayoutEffect: function(a, b) {
      return ki(4194308, 4, a, b);
    }, useInsertionEffect: function(a, b) {
      return ki(4, 2, a, b);
    }, useMemo: function(a, b) {
      var c = Th();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    }, useReducer: function(a, b, c) {
      var d2 = Th();
      b = void 0 !== c ? c(b) : b;
      d2.memoizedState = d2.baseState = b;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
      d2.queue = a;
      a = a.dispatch = xi.bind(null, M, a);
      return [d2.memoizedState, a];
    }, useRef: function(a) {
      var b = Th();
      a = { current: a };
      return b.memoizedState = a;
    }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
      return Th().memoizedState = a;
    }, useTransition: function() {
      var a = hi(false), b = a[0];
      a = vi.bind(null, a[1]);
      Th().memoizedState = a;
      return [b, a];
    }, useMutableSource: function() {
    }, useSyncExternalStore: function(a, b, c) {
      var d2 = M, e = Th();
      if (I) {
        if (void 0 === c)
          throw Error(p2(407));
        c = c();
      } else {
        c = b();
        if (null === Q)
          throw Error(p2(349));
        0 !== (Hh & 30) || di(d2, b, c);
      }
      e.memoizedState = c;
      var f = { value: c, getSnapshot: b };
      e.queue = f;
      mi(ai.bind(
        null,
        d2,
        f,
        a
      ), [a]);
      d2.flags |= 2048;
      bi(9, ci.bind(null, d2, f, c, b), void 0, null);
      return c;
    }, useId: function() {
      var a = Th(), b = Q.identifierPrefix;
      if (I) {
        var c = sg;
        var d2 = rg;
        c = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Kh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else
        c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    }, unstable_isNewReconciler: false };
    var Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function() {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function(a) {
        var b = Uh();
        return ui(b, N2.memoizedState, a);
      },
      useTransition: function() {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    };
    var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
      return Xh(Vh);
    }, useDebugValue: ri, useDeferredValue: function(a) {
      var b = Uh();
      return null === N2 ? b.memoizedState = a : ui(b, N2.memoizedState, a);
    }, useTransition: function() {
      var a = Xh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A2({}, b);
        a = a.defaultProps;
        for (var c in a)
          void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d2) {
      b = a.memoizedState;
      c = c(d2, b);
      c = null === c || void 0 === c ? b : A2({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = { isMounted: function(a) {
      return (a = a._reactInternals) ? Vb(a) === a : false;
    }, enqueueSetState: function(a, b, c) {
      a = a._reactInternals;
      var d2 = R(), e = yi(a), f = mh(d2, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d2), oh(b, a, e));
    }, enqueueReplaceState: function(a, b, c) {
      a = a._reactInternals;
      var d2 = R(), e = yi(a), f = mh(d2, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = nh(a, f, e);
      null !== b && (gi(b, a, e, d2), oh(b, a, e));
    }, enqueueForceUpdate: function(a, b) {
      a = a._reactInternals;
      var c = R(), d2 = yi(a), e = mh(c, d2);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = nh(a, e, d2);
      null !== b && (gi(b, a, d2, c), oh(b, a, d2));
    } };
    function Fi(a, b, c, d2, e, f, g2) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f, g2) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d2) || !Ie(e, f) : true;
    }
    function Gi(a, b, c) {
      var d2 = false, e = Vf;
      var f = b.contextType;
      "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d2 = b.contextTypes, f = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e) : Vf);
      b = new b(c, f);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
      return b;
    }
    function Hi(a, b, c, d2) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d2);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d2);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d2) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f = b.contextType;
      "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
      e.state = a.memoizedState;
      f = b.getDerivedStateFromProps;
      "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d2), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d2 = b;
        do
          c += Pa(d2), d2 = d2.return;
        while (d2);
        var e = c;
      } catch (f) {
        e = "\nError generating stack: " + f.message + "\n" + f.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function() {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d2 = b.value;
      c.callback = function() {
        Oi || (Oi = true, Pi = d2);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d2 = a.type.getDerivedStateFromError;
      if ("function" === typeof d2) {
        var e = b.value;
        c.payload = function() {
          return d2(e);
        };
        c.callback = function() {
          Li(a, b);
        };
      }
      var f = a.stateNode;
      null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
        Li(a, b);
        "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d2 = a.pingCache;
      if (null === d2) {
        d2 = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d2.set(b, e);
      } else
        e = d2.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d2.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag)
          b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b)
          return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d2, e) {
      if (0 === (a.mode & 1))
        return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner;
    var dh = false;
    function Xi(a, b, c, d2) {
      b.child = null === a ? Vg(b, null, c, d2) : Ug(b, a.child, c, d2);
    }
    function Yi(a, b, c, d2, e) {
      c = c.render;
      var f = b.ref;
      ch(b, e);
      d2 = Nh(a, b, c, d2, f, e);
      c = Sh();
      if (null !== a && !dh)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d2, e);
      return b.child;
    }
    function $i(a, b, c, d2, e) {
      if (null === a) {
        var f = c.type;
        if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps)
          return b.tag = 15, b.type = f, bj(a, b, f, d2, e);
        a = Rg(c.type, null, d2, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f = a.child;
      if (0 === (a.lanes & e)) {
        var g2 = f.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g2, d2) && a.ref === b.ref)
          return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f, d2);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d2, e) {
      if (null !== a) {
        var f = a.memoizedProps;
        if (Ie(f, d2) && a.ref === b.ref)
          if (dh = false, b.pendingProps = d2 = f, 0 !== (a.lanes & e))
            0 !== (a.flags & 131072) && (dh = true);
          else
            return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d2, e);
    }
    function dj(a, b, c) {
      var d2 = b.pendingProps, e = d2.children, f = null !== a ? a.memoizedState : null;
      if ("hidden" === d2.mode)
        if (0 === (b.mode & 1))
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
        else {
          if (0 === (c & 1073741824))
            return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d2 = null !== f ? f.baseLanes : c;
          G(ej, fj);
          fj |= d2;
        }
      else
        null !== f ? (d2 = f.baseLanes | c, b.memoizedState = null) : d2 = c, G(ej, fj), fj |= d2;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c)
        b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d2, e) {
      var f = Zf(c) ? Xf : H.current;
      f = Yf(b, f);
      ch(b, e);
      c = Nh(a, b, c, d2, f, e);
      d2 = Sh();
      if (null !== a && !dh)
        return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d2 && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d2, e) {
      if (Zf(c)) {
        var f = true;
        cg(b);
      } else
        f = false;
      ch(b, e);
      if (null === b.stateNode)
        ij(a, b), Gi(b, c, d2), Ii(b, c, d2, e), d2 = true;
      else if (null === a) {
        var g2 = b.stateNode, h2 = b.memoizedProps;
        g2.props = h2;
        var k = g2.context, l2 = c.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
        var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g2.getSnapshotBeforeUpdate;
        q || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k !== l2) && Hi(b, g2, d2, l2);
        jh = false;
        var r = b.memoizedState;
        g2.state = r;
        qh(b, d2, g2, e);
        k = b.memoizedState;
        h2 !== d2 || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d2), k = b.memoizedState), (h2 = jh || Fi(b, c, h2, d2, r, k, l2)) ? (q || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d2, b.memoizedState = k), g2.props = d2, g2.state = k, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b.flags |= 4194308), d2 = false);
      } else {
        g2 = b.stateNode;
        lh(a, b);
        h2 = b.memoizedProps;
        l2 = b.type === b.elementType ? h2 : Ci(b.type, h2);
        g2.props = l2;
        q = b.pendingProps;
        r = g2.context;
        k = c.contextType;
        "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
        var y = c.getDerivedStateFromProps;
        (m = "function" === typeof y || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q || r !== k) && Hi(b, g2, d2, k);
        jh = false;
        r = b.memoizedState;
        g2.state = r;
        qh(b, d2, g2, e);
        var n = b.memoizedState;
        h2 !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d2), n = b.memoizedState), (l2 = jh || Fi(b, c, l2, d2, r, n, k) || false) ? (m || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n, k), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n, k)), "function" === typeof g2.componentDidUpdate && (b.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d2, b.memoizedState = n), g2.props = d2, g2.state = n, g2.context = k, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d2 = false);
      }
      return jj(a, b, c, d2, f, e);
    }
    function jj(a, b, c, d2, e, f) {
      gj(a, b);
      var g2 = 0 !== (b.flags & 128);
      if (!d2 && !g2)
        return e && dg(b, c, false), Zi(a, b, f);
      d2 = b.stateNode;
      Wi.current = b;
      var h2 = g2 && "function" !== typeof c.getDerivedStateFromError ? null : d2.render();
      b.flags |= 1;
      null !== a && g2 ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h2, f)) : Xi(a, b, h2, f);
      b.memoizedState = d2.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d2, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d2);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d2 = b.pendingProps, e = L.current, f = false, g2 = 0 !== (b.flags & 128), h2;
      (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h2)
        f = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState)
        e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a))
          return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g2 = d2.children;
        a = d2.fallback;
        return f ? (d2 = b.mode, f = b.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g2) : f = pj(g2, d2, 0, null), a = Tg(a, d2, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g2);
      }
      e = a.memoizedState;
      if (null !== e && (h2 = e.dehydrated, null !== h2))
        return rj(a, b, g2, d2, h2, e, c);
      if (f) {
        f = d2.fallback;
        g2 = b.mode;
        e = a.child;
        h2 = e.sibling;
        var k = { mode: "hidden", children: d2.children };
        0 === (g2 & 1) && b.child !== e ? (d2 = b.child, d2.childLanes = 0, d2.pendingProps = k, b.deletions = null) : (d2 = Pg(e, k), d2.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h2 ? f = Pg(h2, f) : (f = Tg(f, g2, c, null), f.flags |= 2);
        f.return = b;
        d2.return = b;
        d2.sibling = f;
        b.child = d2;
        d2 = f;
        f = b.child;
        g2 = a.child.memoizedState;
        g2 = null === g2 ? nj(c) : { baseLanes: g2.baseLanes | c, cachePool: null, transitions: g2.transitions };
        f.memoizedState = g2;
        f.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d2;
      }
      f = a.child;
      a = f.sibling;
      d2 = Pg(f, { mode: "visible", children: d2.children });
      0 === (b.mode & 1) && (d2.lanes = c);
      d2.return = b;
      d2.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d2;
      b.memoizedState = null;
      return d2;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d2) {
      null !== d2 && Jg(d2);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d2, e, f, g2) {
      if (c) {
        if (b.flags & 256)
          return b.flags &= -257, d2 = Ki(Error(p2(422))), sj(a, b, g2, d2);
        if (null !== b.memoizedState)
          return b.child = a.child, b.flags |= 128, null;
        f = d2.fallback;
        e = b.mode;
        d2 = pj({ mode: "visible", children: d2.children }, e, 0, null);
        f = Tg(f, e, g2, null);
        f.flags |= 2;
        d2.return = b;
        f.return = b;
        d2.sibling = f;
        b.child = d2;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g2);
        b.child.memoizedState = nj(g2);
        b.memoizedState = mj;
        return f;
      }
      if (0 === (b.mode & 1))
        return sj(a, b, g2, null);
      if ("$!" === e.data) {
        d2 = e.nextSibling && e.nextSibling.dataset;
        if (d2)
          var h2 = d2.dgst;
        d2 = h2;
        f = Error(p2(419));
        d2 = Ki(f, d2, void 0);
        return sj(a, b, g2, d2);
      }
      h2 = 0 !== (g2 & a.childLanes);
      if (dh || h2) {
        d2 = Q;
        if (null !== d2) {
          switch (g2 & -g2) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d2.suspendedLanes | g2)) ? 0 : e;
          0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d2, a, e, -1));
        }
        tj();
        d2 = Ki(Error(p2(421)));
        return sj(a, b, g2, d2);
      }
      if ("$?" === e.data)
        return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d2.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d2 = a.alternate;
      null !== d2 && (d2.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d2, e) {
      var f = a.memoizedState;
      null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d2, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d2, f.tail = c, f.tailMode = e);
    }
    function xj(a, b, c) {
      var d2 = b.pendingProps, e = d2.revealOrder, f = d2.tail;
      Xi(a, b, d2.children, c);
      d2 = L.current;
      if (0 !== (d2 & 2))
        d2 = d2 & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128))
          a:
            for (a = b.child; null !== a; ) {
              if (13 === a.tag)
                null !== a.memoizedState && vj(a, c, b);
              else if (19 === a.tag)
                vj(a, c, b);
              else if (null !== a.child) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === b)
                break a;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === b)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        d2 &= 1;
      }
      G(L, d2);
      if (0 === (b.mode & 1))
        b.memoizedState = null;
      else
        switch (e) {
          case "forwards":
            c = b.child;
            for (e = null; null !== c; )
              a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
            c = e;
            null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
            wj(b, false, e, c, f);
            break;
          case "backwards":
            c = null;
            e = b.child;
            for (b.child = null; null !== e; ) {
              a = e.alternate;
              if (null !== a && null === Ch(a)) {
                b.child = e;
                break;
              }
              a = e.sibling;
              e.sibling = c;
              c = e;
              e = a;
            }
            wj(b, true, c, null, f);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes))
        return null;
      if (null !== a && b.child !== a.child)
        throw Error(p2(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; )
          a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d2 = b.type._context, e = b.memoizedProps.value;
          G(Wg, d2._currentValue);
          d2._currentValue = e;
          break;
        case 13:
          d2 = b.memoizedState;
          if (null !== d2) {
            if (null !== d2.dehydrated)
              return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes))
              return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d2 = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d2)
              return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d2)
            break;
          else
            return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj;
    var Aj;
    var Bj;
    var Cj;
    zj = function(a, b) {
      for (var c = b.child; null !== c; ) {
        if (5 === c.tag || 6 === c.tag)
          a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b)
          break;
        for (; null === c.sibling; ) {
          if (null === c.return || c.return === b)
            return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function() {
    };
    Bj = function(a, b, c, d2) {
      var e = a.memoizedProps;
      if (e !== d2) {
        a = b.stateNode;
        xh(uh.current);
        var f = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d2 = Ya(a, d2);
            f = [];
            break;
          case "select":
            e = A2({}, e, { value: void 0 });
            d2 = A2({}, d2, { value: void 0 });
            f = [];
            break;
          case "textarea":
            e = gb(a, e);
            d2 = gb(a, d2);
            f = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
        }
        ub(c, d2);
        var g2;
        c = null;
        for (l2 in e)
          if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
            if ("style" === l2) {
              var h2 = e[l2];
              for (g2 in h2)
                h2.hasOwnProperty(g2) && (c || (c = {}), c[g2] = "");
            } else
              "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f || (f = []) : (f = f || []).push(l2, null));
        for (l2 in d2) {
          var k = d2[l2];
          h2 = null != e ? e[l2] : void 0;
          if (d2.hasOwnProperty(l2) && k !== h2 && (null != k || null != h2))
            if ("style" === l2)
              if (h2) {
                for (g2 in h2)
                  !h2.hasOwnProperty(g2) || k && k.hasOwnProperty(g2) || (c || (c = {}), c[g2] = "");
                for (g2 in k)
                  k.hasOwnProperty(g2) && h2[g2] !== k[g2] && (c || (c = {}), c[g2] = k[g2]);
              } else
                c || (f || (f = []), f.push(
                  l2,
                  c
                )), c = k;
            else
              "dangerouslySetInnerHTML" === l2 ? (k = k ? k.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k && h2 !== k && (f = f || []).push(l2, k)) : "children" === l2 ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l2, "" + k) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k && "onScroll" === l2 && D("scroll", a), f || h2 === k || (f = [])) : (f = f || []).push(l2, k));
        }
        c && (f = f || []).push("style", c);
        var l2 = f;
        if (b.updateQueue = l2)
          b.flags |= 4;
      }
    };
    Cj = function(a, b, c, d2) {
      c !== d2 && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I)
        switch (a.tailMode) {
          case "hidden":
            b = a.tail;
            for (var c = null; null !== b; )
              null !== b.alternate && (c = b), b = b.sibling;
            null === c ? a.tail = null : c.sibling = null;
            break;
          case "collapsed":
            c = a.tail;
            for (var d2 = null; null !== c; )
              null !== c.alternate && (d2 = c), c = c.sibling;
            null === d2 ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
        }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d2 = 0;
      if (b)
        for (var e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d2 |= e.subtreeFlags & 14680064, d2 |= e.flags & 14680064, e.return = a, e = e.sibling;
      else
        for (e = a.child; null !== e; )
          c |= e.lanes | e.childLanes, d2 |= e.subtreeFlags, d2 |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d2;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d2 = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d2 = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
          if (null === a || null === a.child)
            Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode)
            Bj(a, b, c, d2, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d2) {
              if (null === b.stateNode)
                throw Error(p2(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d2 = b.stateNode;
              c = b.type;
              var f = b.memoizedProps;
              d2[Of] = b;
              d2[Pf] = f;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d2);
                  D("close", d2);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d2);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++)
                    D(lf[e], d2);
                  break;
                case "source":
                  D("error", d2);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d2
                  );
                  D("load", d2);
                  break;
                case "details":
                  D("toggle", d2);
                  break;
                case "input":
                  Za(d2, f);
                  D("invalid", d2);
                  break;
                case "select":
                  d2._wrapperState = { wasMultiple: !!f.multiple };
                  D("invalid", d2);
                  break;
                case "textarea":
                  hb(d2, f), D("invalid", d2);
              }
              ub(c, f);
              e = null;
              for (var g2 in f)
                if (f.hasOwnProperty(g2)) {
                  var h2 = f[g2];
                  "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f.suppressHydrationWarning && Af(d2.textContent, h2, a), e = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f.suppressHydrationWarning && Af(
                    d2.textContent,
                    h2,
                    a
                  ), e = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
                }
              switch (c) {
                case "input":
                  Va(d2);
                  db(d2, f, true);
                  break;
                case "textarea":
                  Va(d2);
                  jb(d2);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f.onClick && (d2.onclick = Bf);
              }
              d2 = e;
              b.updateQueue = d2;
              null !== d2 && (b.flags |= 4);
            } else {
              g2 = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c, { is: d2.is }) : (a = g2.createElement(c), "select" === c && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d2;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g2 = vb(c, d2);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d2;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d2;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++)
                      D(lf[e], a);
                    e = d2;
                    break;
                  case "source":
                    D("error", a);
                    e = d2;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d2;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d2;
                    break;
                  case "input":
                    Za(a, d2);
                    e = Ya(a, d2);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d2;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d2.multiple };
                    e = A2({}, d2, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d2);
                    e = gb(a, d2);
                    D("invalid", a);
                    break;
                  default:
                    e = d2;
                }
                ub(c, e);
                h2 = e;
                for (f in h2)
                  if (h2.hasOwnProperty(f)) {
                    var k = h2[f];
                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g2));
                  }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d2, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                    break;
                  case "select":
                    a.multiple = !!d2.multiple;
                    f = d2.value;
                    null != f ? fb(a, !!d2.multiple, f, false) : null != d2.defaultValue && fb(
                      a,
                      !!d2.multiple,
                      d2.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d2 = !!d2.autoFocus;
                    break a;
                  case "img":
                    d2 = true;
                    break a;
                  default:
                    d2 = false;
                }
              }
              d2 && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode)
            Cj(a, b, a.memoizedProps, d2);
          else {
            if ("string" !== typeof d2 && null === b.stateNode)
              throw Error(p2(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d2 = b.stateNode;
              c = b.memoizedProps;
              d2[Of] = b;
              if (f = d2.nodeValue !== c) {
                if (a = xg, null !== a)
                  switch (a.tag) {
                    case 3:
                      Af(d2.nodeValue, c, 0 !== (a.mode & 1));
                      break;
                    case 5:
                      true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c, 0 !== (a.mode & 1));
                  }
              }
              f && (b.flags |= 4);
            } else
              d2 = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d2), d2[Of] = b, b.stateNode = d2;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d2 = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
              Hg(), Ig(), b.flags |= 98560, f = false;
            else if (f = Gg(b), null !== d2 && null !== d2.dehydrated) {
              if (null === a) {
                if (!f)
                  throw Error(p2(318));
                f = b.memoizedState;
                f = null !== f ? f.dehydrated : null;
                if (!f)
                  throw Error(p2(317));
                f[Of] = b;
              } else
                Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f = false;
            } else
              null !== zg && (Fj(zg), zg = null), f = true;
            if (!f)
              return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128))
            return b.lanes = c, b;
          d2 = null !== d2;
          d2 !== (null !== a && null !== a.memoizedState) && d2 && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T2 && (T2 = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f = b.memoizedState;
          if (null === f)
            return S(b), null;
          d2 = 0 !== (b.flags & 128);
          g2 = f.rendering;
          if (null === g2)
            if (d2)
              Dj(f, false);
            else {
              if (0 !== T2 || null !== a && 0 !== (a.flags & 128))
                for (a = b.child; null !== a; ) {
                  g2 = Ch(a);
                  if (null !== g2) {
                    b.flags |= 128;
                    Dj(f, false);
                    d2 = g2.updateQueue;
                    null !== d2 && (b.updateQueue = d2, b.flags |= 4);
                    b.subtreeFlags = 0;
                    d2 = c;
                    for (c = b.child; null !== c; )
                      f = c, a = d2, f.flags &= 14680066, g2 = f.alternate, null === g2 ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g2.childLanes, f.lanes = g2.lanes, f.child = g2.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g2.memoizedProps, f.memoizedState = g2.memoizedState, f.updateQueue = g2.updateQueue, f.type = g2.type, a = g2.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                    G(L, L.current & 1 | 2);
                    return b.child;
                  }
                  a = a.sibling;
                }
              null !== f.tail && B() > Gj && (b.flags |= 128, d2 = true, Dj(f, false), b.lanes = 4194304);
            }
          else {
            if (!d2)
              if (a = Ch(g2), null !== a) {
                if (b.flags |= 128, d2 = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g2.alternate && !I)
                  return S(b), null;
              } else
                2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d2 = true, Dj(f, false), b.lanes = 4194304);
            f.isBackwards ? (g2.sibling = b.child, b.child = g2) : (c = f.last, null !== c ? c.sibling = g2 : b.child = g2, f.last = g2);
          }
          if (null !== f.tail)
            return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d2 ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d2 = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b.flags |= 8192), d2 && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p2(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate)
              throw Error(p2(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false;
    var U = false;
    var Kj = "function" === typeof WeakSet ? WeakSet : Set;
    var V2 = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c)
        if ("function" === typeof c)
          try {
            c(null);
          } catch (d2) {
            W(a, b, d2);
          }
        else
          c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d2) {
        W(a, b, d2);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a)
          var c = { start: a.selectionStart, end: a.selectionEnd };
        else
          a: {
            c = (c = a.ownerDocument) && c.defaultView || window;
            var d2 = c.getSelection && c.getSelection();
            if (d2 && 0 !== d2.rangeCount) {
              c = d2.anchorNode;
              var e = d2.anchorOffset, f = d2.focusNode;
              d2 = d2.focusOffset;
              try {
                c.nodeType, f.nodeType;
              } catch (F) {
                c = null;
                break a;
              }
              var g2 = 0, h2 = -1, k = -1, l2 = 0, m = 0, q = a, r = null;
              b:
                for (; ; ) {
                  for (var y; ; ) {
                    q !== c || 0 !== e && 3 !== q.nodeType || (h2 = g2 + e);
                    q !== f || 0 !== d2 && 3 !== q.nodeType || (k = g2 + d2);
                    3 === q.nodeType && (g2 += q.nodeValue.length);
                    if (null === (y = q.firstChild))
                      break;
                    r = q;
                    q = y;
                  }
                  for (; ; ) {
                    if (q === a)
                      break b;
                    r === c && ++l2 === e && (h2 = g2);
                    r === f && ++m === d2 && (k = g2);
                    if (null !== (y = q.nextSibling))
                      break;
                    q = r;
                    r = q.parentNode;
                  }
                  q = y;
                }
              c = -1 === h2 || -1 === k ? null : { start: h2, end: k };
            } else
              c = null;
          }
        c = c || { start: 0, end: 0 };
      } else
        c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V2 = b; null !== V2; )
        if (b = V2, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
          a.return = b, V2 = a;
        else
          for (; null !== V2; ) {
            b = V2;
            try {
              var n = b.alternate;
              if (0 !== (b.flags & 1024))
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (null !== n) {
                      var t = n.memoizedProps, J2 = n.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J2);
                      x2.__reactInternalSnapshotBeforeUpdate = w2;
                    }
                    break;
                  case 3:
                    var u = b.stateNode.containerInfo;
                    1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(p2(163));
                }
            } catch (F) {
              W(b, b.return, F);
            }
            a = b.sibling;
            if (null !== a) {
              a.return = b.return;
              V2 = a;
              break;
            }
            V2 = b.return;
          }
      n = Nj;
      Nj = false;
      return n;
    }
    function Pj(a, b, c) {
      var d2 = b.updateQueue;
      d2 = null !== d2 ? d2.lastEffect : null;
      if (null !== d2) {
        var e = d2 = d2.next;
        do {
          if ((e.tag & a) === a) {
            var f = e.destroy;
            e.destroy = void 0;
            void 0 !== f && Mj(b, c, f);
          }
          e = e.next;
        } while (e !== d2);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d2 = c.create;
            c.destroy = d2();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a:
        for (; ; ) {
          for (; null === a.sibling; ) {
            if (null === a.return || Tj(a.return))
              return null;
            a = a.return;
          }
          a.sibling.return = a.return;
          for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
            if (a.flags & 2)
              continue a;
            if (null === a.child || 4 === a.tag)
              continue a;
            else
              a.child.return = a, a = a.child;
          }
          if (!(a.flags & 2))
            return a.stateNode;
        }
    }
    function Vj(a, b, c) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Vj(a, b, c), a = a.sibling; null !== a; )
          Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d2 = a.tag;
      if (5 === d2 || 6 === d2)
        a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d2 && (a = a.child, null !== a))
        for (Wj(a, b, c), a = a.sibling; null !== a; )
          Wj(a, b, c), a = a.sibling;
    }
    var X = null;
    var Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c; )
        Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount)
        try {
          lc.onCommitFiberUnmount(kc, c);
        } catch (h2) {
        }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d2 = X, e = Xj;
          X = null;
          Yj(a, b, c);
          X = d2;
          Xj = e;
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
          break;
        case 18:
          null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
          break;
        case 4:
          d2 = X;
          e = Xj;
          X = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X = d2;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d2 = c.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
            e = d2 = d2.next;
            do {
              var f = e, g2 = f.destroy;
              f = f.tag;
              void 0 !== g2 && (0 !== (f & 2) ? Mj(c, b, g2) : 0 !== (f & 4) && Mj(c, b, g2));
              e = e.next;
            } while (e !== d2);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d2 = c.stateNode, "function" === typeof d2.componentWillUnmount))
            try {
              d2.props = c.memoizedProps, d2.state = c.memoizedState, d2.componentWillUnmount();
            } catch (h2) {
              W(c, b, h2);
            }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d2 = U) || null !== c.memoizedState, Yj(a, b, c), U = d2) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function(b2) {
          var d2 = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d2, d2));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c)
        for (var d2 = 0; d2 < c.length; d2++) {
          var e = c[d2];
          try {
            var f = a, g2 = b, h2 = g2;
            a:
              for (; null !== h2; ) {
                switch (h2.tag) {
                  case 5:
                    X = h2.stateNode;
                    Xj = false;
                    break a;
                  case 3:
                    X = h2.stateNode.containerInfo;
                    Xj = true;
                    break a;
                  case 4:
                    X = h2.stateNode.containerInfo;
                    Xj = true;
                    break a;
                }
                h2 = h2.return;
              }
            if (null === X)
              throw Error(p2(160));
            Zj(f, g2, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l2) {
            W(e, b, l2);
          }
        }
      if (b.subtreeFlags & 12854)
        for (b = b.child; null !== b; )
          dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d2 = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d2 & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t) {
              W(a, a.return, t);
            }
            try {
              Pj(5, a, a.return);
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d2 & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d2 & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t) {
              W(a, a.return, t);
            }
          }
          if (d2 & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps, g2 = null !== c ? c.memoizedProps : f, h2 = a.type, k = a.updateQueue;
            a.updateQueue = null;
            if (null !== k)
              try {
                "input" === h2 && "radio" === f.type && null != f.name && ab(e, f);
                vb(h2, g2);
                var l2 = vb(h2, f);
                for (g2 = 0; g2 < k.length; g2 += 2) {
                  var m = k[g2], q = k[g2 + 1];
                  "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l2);
                }
                switch (h2) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a, a.return, t);
              }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d2 & 4) {
            if (null === a.stateNode)
              throw Error(p2(162));
            e = a.stateNode;
            f = a.memoizedProps;
            try {
              e.nodeValue = f;
            } catch (t) {
              W(a, a.return, t);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d2 & 4 && null !== c && c.memoizedState.isDehydrated)
            try {
              bd(b.containerInfo);
            } catch (t) {
              W(a, a.return, t);
            }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d2 & 4 && ak(a);
          break;
        case 22:
          m = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m, ck(b, a), U = l2) : ck(b, a);
          ek(a);
          if (d2 & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m && 0 !== (a.mode & 1))
              for (V2 = a, m = a.child; null !== m; ) {
                for (q = V2 = m; null !== V2; ) {
                  r = V2;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d2 = r;
                        c = r.return;
                        try {
                          b = d2, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d2, c, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V2 = y) : gk(q);
                }
                m = m.sibling;
              }
            a:
              for (m = null, q = a; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e = q.stateNode, l2 ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h2 = q.stateNode, k = q.memoizedProps.style, g2 = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h2.style.display = rb("display", g2));
                    } catch (t) {
                      W(a, a.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m)
                    try {
                      q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
                    } catch (t) {
                      W(a, a.return, t);
                    }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a)
                  break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a)
                    break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d2 & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c; ) {
              if (Tj(c)) {
                var d2 = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p2(160));
          }
          switch (d2.tag) {
            case 5:
              var e = d2.stateNode;
              d2.flags & 32 && (ob(e, ""), d2.flags &= -33);
              var f = Uj(a);
              Wj(a, f, e);
              break;
            case 3:
            case 4:
              var g2 = d2.stateNode.containerInfo, h2 = Uj(a);
              Vj(a, h2, g2);
              break;
            default:
              throw Error(p2(161));
          }
        } catch (k) {
          W(a, a.return, k);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V2 = a;
      ik(a, b, c);
    }
    function ik(a, b, c) {
      for (var d2 = 0 !== (a.mode & 1); null !== V2; ) {
        var e = V2, f = e.child;
        if (22 === e.tag && d2) {
          var g2 = null !== e.memoizedState || Jj;
          if (!g2) {
            var h2 = e.alternate, k = null !== h2 && null !== h2.memoizedState || U;
            h2 = Jj;
            var l2 = U;
            Jj = g2;
            if ((U = k) && !l2)
              for (V2 = e; null !== V2; )
                g2 = V2, k = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e) : null !== k ? (k.return = g2, V2 = k) : jk(e);
            for (; null !== f; )
              V2 = f, ik(f, b, c), f = f.sibling;
            V2 = e;
            Jj = h2;
            U = l2;
          }
          kk(a, b, c);
        } else
          0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V2 = f) : kk(a, b, c);
      }
    }
    function kk(a) {
      for (; null !== V2; ) {
        var b = V2;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772))
              switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d2 = b.stateNode;
                  if (b.flags & 4 && !U)
                    if (null === c)
                      d2.componentDidMount();
                    else {
                      var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                      d2.componentDidUpdate(e, c.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                    }
                  var f = b.updateQueue;
                  null !== f && sh(b, f, d2);
                  break;
                case 3:
                  var g2 = b.updateQueue;
                  if (null !== g2) {
                    c = null;
                    if (null !== b.child)
                      switch (b.child.tag) {
                        case 5:
                          c = b.child.stateNode;
                          break;
                        case 1:
                          c = b.child.stateNode;
                      }
                    sh(b, g2, c);
                  }
                  break;
                case 5:
                  var h2 = b.stateNode;
                  if (null === c && b.flags & 4) {
                    c = h2;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c.focus();
                        break;
                      case "img":
                        k.src && (c.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l2 = b.alternate;
                    if (null !== l2) {
                      var m = l2.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p2(163));
              }
            U || b.flags & 512 && Rj(b);
          } catch (r) {
            W(b, b.return, r);
          }
        }
        if (b === a) {
          V2 = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V2 = c;
          break;
        }
        V2 = b.return;
      }
    }
    function gk(a) {
      for (; null !== V2; ) {
        var b = V2;
        if (b === a) {
          V2 = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V2 = c;
          break;
        }
        V2 = b.return;
      }
    }
    function jk(a) {
      for (; null !== V2; ) {
        var b = V2;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k) {
                W(b, c, k);
              }
              break;
            case 1:
              var d2 = b.stateNode;
              if ("function" === typeof d2.componentDidMount) {
                var e = b.return;
                try {
                  d2.componentDidMount();
                } catch (k) {
                  W(b, e, k);
                }
              }
              var f = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, f, k);
              }
              break;
            case 5:
              var g2 = b.return;
              try {
                Rj(b);
              } catch (k) {
                W(b, g2, k);
              }
          }
        } catch (k) {
          W(b, b.return, k);
        }
        if (b === a) {
          V2 = null;
          break;
        }
        var h2 = b.sibling;
        if (null !== h2) {
          h2.return = b.return;
          V2 = h2;
          break;
        }
        V2 = b.return;
      }
    }
    var lk = Math.ceil;
    var mk = ua.ReactCurrentDispatcher;
    var nk = ua.ReactCurrentOwner;
    var ok = ua.ReactCurrentBatchConfig;
    var K = 0;
    var Q = null;
    var Y = null;
    var Z = 0;
    var fj = 0;
    var ej = Uf(0);
    var T2 = 0;
    var pk = null;
    var rh = 0;
    var qk = 0;
    var rk = 0;
    var sk = null;
    var tk = null;
    var fk = 0;
    var Gj = Infinity;
    var uk = null;
    var Oi = false;
    var Pi = null;
    var Ri = null;
    var vk = false;
    var wk = null;
    var xk = 0;
    var yk = 0;
    var zk = null;
    var Ak = -1;
    var Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1))
        return 1;
      if (0 !== (K & 2) && 0 !== Z)
        return Z & -Z;
      if (null !== Kg.transition)
        return 0 === Bk && (Bk = yc()), Bk;
      a = C2;
      if (0 !== a)
        return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d2) {
      if (50 < yk)
        throw yk = 0, zk = null, Error(p2(185));
      Ac(a, c, d2);
      if (0 === (K & 2) || a !== Q)
        a === Q && (0 === (K & 2) && (qk |= c), 4 === T2 && Ck(a, Z)), Dk(a, d2), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d2 = uc(a, a === Q ? Z : 0);
      if (0 === d2)
        null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d2 & -d2, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b)
          0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
            0 === (K & 6) && jg();
          }), c = null;
        else {
          switch (Dc(d2)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6))
        throw Error(p2(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c)
        return null;
      var d2 = uc(a, a === Q ? Z : 0);
      if (0 === d2)
        return null;
      if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b)
        b = Ik(a, d2);
      else {
        b = d2;
        var e = K;
        K |= 2;
        var f = Jk();
        if (Q !== a || Z !== b)
          uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h2) {
            Mk(a, h2);
          }
        while (1);
        $g();
        mk.current = f;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T2);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d2 = e, b = Nk(a, e)));
        if (1 === b)
          throw c = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c;
        if (6 === b)
          Ck(a, d2);
        else {
          e = a.current.alternate;
          if (0 === (d2 & 30) && !Ok(e) && (b = Ik(a, d2), 2 === b && (f = xc(a), 0 !== f && (d2 = f, b = Nk(a, f))), 1 === b))
            throw c = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d2;
          switch (b) {
            case 0:
            case 1:
              throw Error(p2(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d2);
              if ((d2 & 130023424) === d2 && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0))
                  break;
                e = a.suspendedLanes;
                if ((e & d2) !== d2) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d2);
              if ((d2 & 4194240) === d2)
                break;
              b = a.eventTimes;
              for (e = -1; 0 < d2; ) {
                var g2 = 31 - oc(d2);
                f = 1 << g2;
                g2 = b[g2];
                g2 > e && (e = g2);
                d2 &= ~f;
              }
              d2 = e;
              d2 = B() - d2;
              d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
              if (10 < d2) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p2(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ; ) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c))
            for (var d2 = 0; d2 < c.length; d2++) {
              var e = c[d2], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e))
                  return false;
              } catch (g2) {
                return false;
              }
            }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c)
          c.return = b, b = c;
        else {
          if (b === a)
            break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a)
              return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b; ) {
        var c = 31 - oc(b), d2 = 1 << c;
        a[c] = -1;
        b &= ~d2;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6))
        throw Error(p2(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1))
        return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d2 = xc(a);
        0 !== d2 && (b = d2, c = Nk(a, d2));
      }
      if (1 === c)
        throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c)
        throw Error(p2(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d2 = C2;
      try {
        if (ok.transition = null, C2 = 1, a)
          return a();
      } finally {
        C2 = d2, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y)
        for (c = Y.return; null !== c; ) {
          var d2 = c;
          wg(d2);
          switch (d2.tag) {
            case 1:
              d2 = d2.type.childContextTypes;
              null !== d2 && void 0 !== d2 && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d2);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d2.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c = c.return;
        }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T2 = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++)
          if (c = fh[b], d2 = c.interleaved, null !== d2) {
            c.interleaved = null;
            var e = d2.next, f = c.pending;
            if (null !== f) {
              var g2 = f.next;
              f.next = e;
              d2.next = g2;
            }
            c.pending = d2;
          }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d2 = M.memoizedState; null !== d2; ) {
              var e = d2.queue;
              null !== e && (e.pending = null);
              d2 = d2.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N2 = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T2 = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f = a, g2 = c.return, h2 = c, k = b;
            b = Z;
            h2.flags |= 32768;
            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
              var l2 = k, m = h2, q = m.tag;
              if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                var r = m.alternate;
                r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
              }
              var y = Ui(g2);
              if (null !== y) {
                y.flags &= -257;
                Vi(y, g2, h2, f, b);
                y.mode & 1 && Si(f, l2, b);
                b = y;
                k = l2;
                var n = b.updateQueue;
                if (null === n) {
                  var t = /* @__PURE__ */ new Set();
                  t.add(k);
                  b.updateQueue = t;
                } else
                  n.add(k);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f, l2, b);
                  tj();
                  break a;
                }
                k = Error(p2(426));
              }
            } else if (I && h2.mode & 1) {
              var J2 = Ui(g2);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g2, h2, f, b);
                Jg(Ji(k, h2));
                break a;
              }
            }
            f = k = Ji(k, h2);
            4 !== T2 && (T2 = 2);
            null === sk ? sk = [f] : sk.push(f);
            f = g2;
            do {
              switch (f.tag) {
                case 3:
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var x2 = Ni(f, k, b);
                  ph(f, x2);
                  break a;
                case 1:
                  h2 = k;
                  var w2 = f.type, u = f.stateNode;
                  if (0 === (f.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                    f.flags |= 65536;
                    b &= -b;
                    f.lanes |= b;
                    var F = Qi(f, h2, b);
                    ph(f, F);
                    break a;
                  }
              }
              f = f.return;
            } while (null !== f);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T2 || 3 === T2 || 2 === T2)
        T2 = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d2 = Jk();
      if (Q !== a || Z !== b)
        uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d2;
      if (null !== Y)
        throw Error(p2(261));
      Q = null;
      Z = 0;
      return T2;
    }
    function Tk() {
      for (; null !== Y; )
        Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc(); )
        Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a)
            a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T2 = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T2 && (T2 = 5);
    }
    function Pk(a, b, c) {
      var d2 = C2, e = ok.transition;
      try {
        ok.transition = null, C2 = 1, Wk(a, b, c, d2);
      } finally {
        ok.transition = e, C2 = d2;
      }
      return null;
    }
    function Wk(a, b, c, d2) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6))
        throw Error(p2(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c)
        return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current)
        throw Error(p2(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f = c.lanes | c.childLanes;
      Bc(a, f);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
        Hk();
        return null;
      }));
      f = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f) {
        f = ok.transition;
        ok.transition = null;
        var g2 = C2;
        C2 = 1;
        var h2 = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c, a, e);
        dc();
        K = h2;
        C2 = g2;
        ok.transition = f;
      } else
        a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f = a.pendingLanes;
      0 === f && (Ri = null);
      mc(c.stateNode, d2);
      Dk(a, B());
      if (null !== b)
        for (d2 = a.onRecoverableError, c = 0; c < b.length; c++)
          e = b[c], d2(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi)
        throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f = a.pendingLanes;
      0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C2;
        try {
          ok.transition = null;
          C2 = 16 > a ? 16 : a;
          if (null === wk)
            var d2 = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6))
              throw Error(p2(331));
            var e = K;
            K |= 4;
            for (V2 = a.current; null !== V2; ) {
              var f = V2, g2 = f.child;
              if (0 !== (V2.flags & 16)) {
                var h2 = f.deletions;
                if (null !== h2) {
                  for (var k = 0; k < h2.length; k++) {
                    var l2 = h2[k];
                    for (V2 = l2; null !== V2; ) {
                      var m = V2;
                      switch (m.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m, f);
                      }
                      var q = m.child;
                      if (null !== q)
                        q.return = m, V2 = q;
                      else
                        for (; null !== V2; ) {
                          m = V2;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l2) {
                            V2 = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V2 = r;
                            break;
                          }
                          V2 = y;
                        }
                    }
                  }
                  var n = f.alternate;
                  if (null !== n) {
                    var t = n.child;
                    if (null !== t) {
                      n.child = null;
                      do {
                        var J2 = t.sibling;
                        t.sibling = null;
                        t = J2;
                      } while (null !== t);
                    }
                  }
                  V2 = f;
                }
              }
              if (0 !== (f.subtreeFlags & 2064) && null !== g2)
                g2.return = f, V2 = g2;
              else
                b:
                  for (; null !== V2; ) {
                    f = V2;
                    if (0 !== (f.flags & 2048))
                      switch (f.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(9, f, f.return);
                      }
                    var x2 = f.sibling;
                    if (null !== x2) {
                      x2.return = f.return;
                      V2 = x2;
                      break b;
                    }
                    V2 = f.return;
                  }
            }
            var w2 = a.current;
            for (V2 = w2; null !== V2; ) {
              g2 = V2;
              var u = g2.child;
              if (0 !== (g2.subtreeFlags & 2064) && null !== u)
                u.return = g2, V2 = u;
              else
                b:
                  for (g2 = w2; null !== V2; ) {
                    h2 = V2;
                    if (0 !== (h2.flags & 2048))
                      try {
                        switch (h2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qj(9, h2);
                        }
                      } catch (na) {
                        W(h2, h2.return, na);
                      }
                    if (h2 === g2) {
                      V2 = null;
                      break b;
                    }
                    var F = h2.sibling;
                    if (null !== F) {
                      F.return = h2.return;
                      V2 = F;
                      break b;
                    }
                    V2 = h2.return;
                  }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot)
              try {
                lc.onPostCommitFiberRoot(kc, a);
              } catch (na) {
              }
            d2 = true;
          }
          return d2;
        } finally {
          C2 = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag)
        Xk(a, a, c);
      else
        for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a, c);
            break;
          } else if (1 === b.tag) {
            var d2 = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
              a = Ji(c, a);
              a = Qi(b, a, 1);
              b = nh(b, a, 1);
              a = R();
              null !== b && (Ac(b, 1, a), Dk(b, a));
              break;
            }
          }
          b = b.return;
        }
    }
    function Ti(a, b, c) {
      var d2 = a.pingCache;
      null !== d2 && d2.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T2 || 3 === T2 && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d2 = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d2 = a.stateNode;
          break;
        default:
          throw Error(p2(314));
      }
      null !== d2 && d2.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function(a, b, c) {
      if (null !== a)
        if (a.memoizedProps !== b.pendingProps || Wf.current)
          dh = true;
        else {
          if (0 === (a.lanes & c) && 0 === (b.flags & 128))
            return dh = false, yj(a, b, c);
          dh = 0 !== (a.flags & 131072) ? true : false;
        }
      else
        dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d2 = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d2, a, e, c);
          var f = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d2) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d2, a, c), b = jj(null, b, d2, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d2 = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d2._init;
            d2 = e(d2._payload);
            b.type = d2;
            e = b.tag = Zk(d2);
            a = Ci(d2, a);
            switch (e) {
              case 0:
                b = cj(null, b, d2, a, c);
                break a;
              case 1:
                b = hj(null, b, d2, a, c);
                break a;
              case 11:
                b = Yi(null, b, d2, a, c);
                break a;
              case 14:
                b = $i(null, b, d2, Ci(d2.type, a), c);
                break a;
            }
            throw Error(p2(
              306,
              d2,
              ""
            ));
          }
          return b;
        case 0:
          return d2 = b.type, e = b.pendingProps, e = b.elementType === d2 ? e : Ci(d2, e), cj(a, b, d2, e, c);
        case 1:
          return d2 = b.type, e = b.pendingProps, e = b.elementType === d2 ? e : Ci(d2, e), hj(a, b, d2, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a)
              throw Error(p2(387));
            d2 = b.pendingProps;
            f = b.memoizedState;
            e = f.element;
            lh(a, b);
            qh(b, d2, null, c);
            var g2 = b.memoizedState;
            d2 = g2.element;
            if (f.isDehydrated)
              if (f = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                e = Ji(Error(p2(423)), b);
                b = lj(a, b, d2, c, e);
                break a;
              } else if (d2 !== e) {
                e = Ji(Error(p2(424)), b);
                b = lj(a, b, d2, c, e);
                break a;
              } else
                for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d2, c), b.child = c; c; )
                  c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d2 === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d2, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d2 = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d2, e) ? g2 = null : null !== f && Ef(d2, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g2, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d2 = b.pendingProps, null === a ? b.child = Ug(b, null, d2, c) : Xi(a, b, d2, c), b.child;
        case 11:
          return d2 = b.type, e = b.pendingProps, e = b.elementType === d2 ? e : Ci(d2, e), Yi(a, b, d2, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d2 = b.type._context;
            e = b.pendingProps;
            f = b.memoizedProps;
            g2 = e.value;
            G(Wg, d2._currentValue);
            d2._currentValue = g2;
            if (null !== f)
              if (He(f.value, g2)) {
                if (f.children === e.children && !Wf.current) {
                  b = Zi(a, b, c);
                  break a;
                }
              } else
                for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                  var h2 = f.dependencies;
                  if (null !== h2) {
                    g2 = f.child;
                    for (var k = h2.firstContext; null !== k; ) {
                      if (k.context === d2) {
                        if (1 === f.tag) {
                          k = mh(-1, c & -c);
                          k.tag = 2;
                          var l2 = f.updateQueue;
                          if (null !== l2) {
                            l2 = l2.shared;
                            var m = l2.pending;
                            null === m ? k.next = k : (k.next = m.next, m.next = k);
                            l2.pending = k;
                          }
                        }
                        f.lanes |= c;
                        k = f.alternate;
                        null !== k && (k.lanes |= c);
                        bh(
                          f.return,
                          c,
                          b
                        );
                        h2.lanes |= c;
                        break;
                      }
                      k = k.next;
                    }
                  } else if (10 === f.tag)
                    g2 = f.type === b.type ? null : f.child;
                  else if (18 === f.tag) {
                    g2 = f.return;
                    if (null === g2)
                      throw Error(p2(341));
                    g2.lanes |= c;
                    h2 = g2.alternate;
                    null !== h2 && (h2.lanes |= c);
                    bh(g2, c, b);
                    g2 = f.sibling;
                  } else
                    g2 = f.child;
                  if (null !== g2)
                    g2.return = f;
                  else
                    for (g2 = f; null !== g2; ) {
                      if (g2 === b) {
                        g2 = null;
                        break;
                      }
                      f = g2.sibling;
                      if (null !== f) {
                        f.return = g2.return;
                        g2 = f;
                        break;
                      }
                      g2 = g2.return;
                    }
                  f = g2;
                }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d2 = b.pendingProps.children, ch(b, c), e = eh(e), d2 = d2(e), b.flags |= 1, Xi(a, b, d2, c), b.child;
        case 14:
          return d2 = b.type, e = Ci(d2, b.pendingProps), e = Ci(d2.type, e), $i(a, b, d2, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d2 = b.type, e = b.pendingProps, e = b.elementType === d2 ? e : Ci(d2, e), ij(a, b), b.tag = 1, Zf(d2) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d2, e), Ii(b, d2, e, c), jj(null, b, d2, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p2(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d2) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d2;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d2) {
      return new $k(a, b, c, d2);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a)
        return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da)
          return 11;
        if (a === Ga)
          return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d2, e, f) {
      var g2 = 2;
      d2 = a;
      if ("function" === typeof a)
        aj(a) && (g2 = 1);
      else if ("string" === typeof a)
        g2 = 5;
      else
        a:
          switch (a) {
            case ya:
              return Tg(c.children, e, f, b);
            case za:
              g2 = 8;
              e |= 8;
              break;
            case Aa:
              return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
            case Ea:
              return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
            case Fa:
              return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
            case Ia:
              return pj(c, e, f, b);
            default:
              if ("object" === typeof a && null !== a)
                switch (a.$$typeof) {
                  case Ba:
                    g2 = 10;
                    break a;
                  case Ca:
                    g2 = 9;
                    break a;
                  case Da:
                    g2 = 11;
                    break a;
                  case Ga:
                    g2 = 14;
                    break a;
                  case Ha:
                    g2 = 16;
                    d2 = null;
                    break a;
                }
              throw Error(p2(130, null == a ? a : typeof a, ""));
          }
      b = Bg(g2, c, b, e);
      b.elementType = a;
      b.type = d2;
      b.lanes = f;
      return b;
    }
    function Tg(a, b, c, d2) {
      a = Bg(7, a, d2, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d2) {
      a = Bg(22, a, d2, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d2, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d2;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d2, e, f, g2, h2, k) {
      a = new al(a, b, c, h2, k);
      1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
      f = Bg(3, null, null, b);
      a.current = f;
      f.stateNode = a;
      f.memoizedState = { element: d2, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f);
      return a;
    }
    function cl(a, b, c) {
      var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a)
        return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag)
          throw Error(p2(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p2(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c))
          return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d2, e, f, g2, h2, k) {
      a = bl(c, d2, true, a, e, f, g2, h2, k);
      a.context = dl(null);
      c = a.current;
      d2 = R();
      e = yi(c);
      f = mh(d2, e);
      f.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f, e);
      a.current.lanes = e;
      Ac(a, e, d2);
      Dk(a, d2);
      return a;
    }
    function fl(a, b, c, d2) {
      var e = b.current, f = R(), g2 = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f, g2);
      b.payload = { element: a };
      d2 = void 0 === d2 ? null : d2;
      null !== d2 && (b.callback = d2);
      a = nh(e, b, g2);
      null !== a && (gi(a, e, g2, f), oh(a, e, g2));
      return g2;
    }
    function gl(a) {
      a = a.current;
      if (!a.child)
        return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function(a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function(a) {
      var b = this._internalRoot;
      if (null === b)
        throw Error(p2(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function() {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function() {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function(a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
          ;
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d2, e) {
      if (e) {
        if ("function" === typeof d2) {
          var f = d2;
          d2 = function() {
            var a2 = gl(g2);
            f.call(a2);
          };
        }
        var g2 = el(b, d2, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g2;
        a[uf] = g2.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g2;
      }
      for (; e = a.lastChild; )
        a.removeChild(e);
      if ("function" === typeof d2) {
        var h2 = d2;
        d2 = function() {
          var a2 = gl(k);
          h2.call(a2);
        };
      }
      var k = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k;
      a[uf] = k.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function() {
        fl(b, k, c, d2);
      });
      return k;
    }
    function rl(a, b, c, d2, e) {
      var f = c._reactRootContainer;
      if (f) {
        var g2 = f;
        if ("function" === typeof e) {
          var h2 = e;
          e = function() {
            var a2 = gl(g2);
            h2.call(a2);
          };
        }
        fl(b, g2, a, e);
      } else
        g2 = ql(c, b, a, e, d2);
      return gl(g2);
    }
    Ec = function(a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function() {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function(a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function(a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d2 = R();
          gi(c, a, b, d2);
        }
        il(a, b);
      }
    };
    Hc = function() {
      return C2;
    };
    Ic = function(a, b) {
      var c = C2;
      try {
        return C2 = a, b();
      } finally {
        C2 = c;
      }
    };
    yb = function(a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode; )
              c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d2 = c[b];
              if (d2 !== a && d2.form === a.form) {
                var e = Db(d2);
                if (!e)
                  throw Error(p2(90));
                Wa(d2);
                bb(d2, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
    var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
      a = Zb(a);
      return null === a ? null : a.stateNode;
    }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber)
        try {
          kc = vl.inject(ul), lc = vl;
        } catch (a) {
        }
    }
    var vl;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    exports.createPortal = function(a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b))
        throw Error(p2(200));
      return cl(a, b, null, c);
    };
    exports.createRoot = function(a, b) {
      if (!nl(a))
        throw Error(p2(299));
      var c = false, d2 = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d2 = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d2, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    exports.findDOMNode = function(a) {
      if (null == a)
        return null;
      if (1 === a.nodeType)
        return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render)
          throw Error(p2(188));
        a = Object.keys(a).join(",");
        throw Error(p2(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    exports.flushSync = function(a) {
      return Rk(a);
    };
    exports.hydrate = function(a, b, c) {
      if (!ol(b))
        throw Error(p2(200));
      return rl(null, a, b, true, c);
    };
    exports.hydrateRoot = function(a, b, c) {
      if (!nl(a))
        throw Error(p2(405));
      var d2 = null != c && c.hydratedSources || null, e = false, f = "", g2 = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g2 = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f, g2);
      a[uf] = b.current;
      sf(a);
      if (d2)
        for (a = 0; a < d2.length; a++)
          c = d2[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
            c,
            e
          );
      return new ml(b);
    };
    exports.render = function(a, b, c) {
      if (!ol(b))
        throw Error(p2(200));
      return rl(null, a, b, false, c);
    };
    exports.unmountComponentAtNode = function(a) {
      if (!ol(a))
        throw Error(p2(40));
      return a._reactRootContainer ? (Rk(function() {
        rl(null, null, a, false, function() {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    exports.unstable_batchedUpdates = Qk;
    exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d2) {
      if (!ol(c))
        throw Error(p2(200));
      if (null == a || void 0 === a._reactInternals)
        throw Error(p2(38));
      return rl(a, b, c, false, d2);
    };
    exports.version = "18.3.1-next-f1338f8080-20240426";
  }
});

// ../../node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "../../node_modules/react-dom/index.js"(exports, module) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (false) {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (true) {
      checkDCE();
      module.exports = require_react_dom_production_min();
    } else {
      module.exports = null;
    }
  }
});

// ../../node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "../../node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k = Symbol.for("react.element");
    var l2 = Symbol.for("react.fragment");
    var m = Object.prototype.hasOwnProperty;
    var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p2 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g2) {
      var b, d2 = {}, e = null, h2 = null;
      void 0 !== g2 && (e = "" + g2);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b in a)
        m.call(a, b) && !p2.hasOwnProperty(b) && (d2[b] = a[b]);
      if (c && c.defaultProps)
        for (b in a = c.defaultProps, a)
          void 0 === d2[b] && (d2[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h2, props: d2, _owner: n.current };
    }
    exports.Fragment = l2;
    exports.jsx = q;
    exports.jsxs = q;
  }
});

// ../../node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "../../node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production_min();
    } else {
      module.exports = null;
    }
  }
});

// src/counter.tsx
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// ../../node_modules/@r2wc/core/dist/core.js
var C = Object.defineProperty;
var x = (t, e, s) => e in t ? C(t, e, { enumerable: true, configurable: true, writable: true, value: s }) : t[e] = s;
var h = (t, e, s) => (x(t, typeof e != "symbol" ? e + "" : e, s), s);
var T = {
  stringify: (t) => t,
  parse: (t) => t
};
var V = {
  stringify: (t) => `${t}`,
  parse: (t) => parseFloat(t)
};
var N = {
  stringify: (t) => t ? "true" : "false",
  parse: (t) => /^[ty1-9]/i.test(t)
};
var P = {
  stringify: (t) => t.name,
  parse: (t, e, s) => {
    const c = (() => {
      if (typeof window < "u" && t in window)
        return window[t];
      if (typeof global < "u" && t in global)
        return global[t];
    })();
    return typeof c == "function" ? c.bind(s) : void 0;
  }
};
var $ = {
  stringify: (t) => JSON.stringify(t),
  parse: (t) => JSON.parse(t)
};
var A = {
  string: T,
  number: V,
  boolean: N,
  function: P,
  json: $
};
function J(t) {
  return t.replace(
    /([a-z0-9])([A-Z])/g,
    (e, s, c) => `${s}-${c.toLowerCase()}`
  );
}
var d = Symbol.for("r2wc.render");
var g = Symbol.for("r2wc.connected");
var l = Symbol.for("r2wc.context");
var p = Symbol.for("r2wc.props");
function _(t, e, s) {
  var k, O, j;
  e.props || (e.props = t.propTypes ? Object.keys(t.propTypes) : []);
  const c = Array.isArray(e.props) ? e.props.slice() : Object.keys(e.props), b = {}, m = {}, w2 = {};
  for (const r of c) {
    b[r] = Array.isArray(e.props) ? "string" : e.props[r];
    const u = J(r);
    m[r] = u, w2[u] = r;
  }
  class S extends HTMLElement {
    constructor() {
      super();
      h(this, k, true);
      h(this, O);
      h(this, j, {});
      h(this, "container");
      e.shadow ? this.container = this.attachShadow({
        mode: e.shadow
      }) : this.container = this, this[p].container = this.container;
      for (const n of c) {
        const f = m[n], o = this.getAttribute(f), i = b[n], a = i ? A[i] : null;
        a != null && a.parse && o && (this[p][n] = a.parse(o, f, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(w2);
    }
    connectedCallback() {
      this[g] = true, this[d]();
    }
    disconnectedCallback() {
      this[g] = false, this[l] && s.unmount(this[l]), delete this[l];
    }
    attributeChangedCallback(n, f, o) {
      const i = w2[n], a = b[i], y = a ? A[a] : null;
      i in b && (y != null && y.parse) && o && (this[p][i] = y.parse(o, n, this), this[d]());
    }
    [(k = g, O = l, j = p, d)]() {
      this[g] && (this[l] ? s.update(this[l], this[p]) : this[l] = s.mount(
        this.container,
        t,
        this[p]
      ));
    }
  }
  for (const r of c) {
    const u = m[r], n = b[r];
    Object.defineProperty(S.prototype, r, {
      enumerable: true,
      configurable: true,
      get() {
        return this[p][r];
      },
      set(f) {
        this[p][r] = f;
        const o = n ? A[n] : null;
        if (o != null && o.stringify) {
          const i = o.stringify(f, u, this);
          this.getAttribute(u) !== i && this.setAttribute(u, i);
        } else
          this[d]();
      }
    });
  }
  return S;
}

// node_modules/react-to-webcomponent/dist/react-to-webcomponent.js
function w(m, i, e, d2 = {}) {
  function f(r, n, u) {
    const o = i.createElement(n, u);
    if ("createRoot" in e) {
      const t = e.createRoot(r);
      return t.render(o), {
        container: r,
        root: t,
        ReactComponent: n
      };
    }
    if ("render" in e)
      return e.render(o, r), {
        container: r,
        ReactComponent: n
      };
    throw new Error("Invalid ReactDOM instance provided.");
  }
  function p2({ container: r, root: n, ReactComponent: u }, o) {
    const t = i.createElement(u, o);
    if (n) {
      n.render(t);
      return;
    }
    if ("render" in e) {
      e.render(t, r);
      return;
    }
  }
  function l2({ container: r, root: n }) {
    if (n) {
      n.unmount();
      return;
    }
    if ("unmountComponentAtNode" in e) {
      e.unmountComponentAtNode(r);
      return;
    }
  }
  return _(m, d2, { mount: f, unmount: l2, update: p2 });
}

// src/counter.tsx
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function MyCounter() {
  const [state, setState] = (0, import_react.useState)(0);
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "my-counter",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
        children: styles
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        onClick: () => setState(state - 1),
        children: "-"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        children: state
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        onClick: () => setState(state + 1),
        children: "+"
      })
    ]
  });
}
customElements.define(
  "my-counter",
  w(MyCounter, import_react.default, import_react_dom.default)
);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
