/*! ISSUU Embed - v0.1.0 - 2017-04-03
Property of ISSUU: issuu.com  */

!function (a, b, c) {
  function d(a) {
    return a ? {
      pingbackProto: "https://",
      pingbackHost: "pingback.issuu.com/",
      staticProto: "https://",
      staticHost: "static.issuu.com/",
      configProto: "https://",
      configHost: "e.issuu.com/",
      configPath: "embed/",
      documentProto: "https://",
      documentHost: "document.issuu.com/",
      imgProto: "https://",
      imgHost: "image.isu.pub/",
      apiHost: "api.issuu.com/",
      apiPath: "query",
      exelate: { publisher: "536", website: "001", segment: "2372960" }
    } : {
      pingbackProto: "http://",
      pingbackHost: "pingback.issuu.com/",
      staticProto: "http://",
      staticHost: "static.issuu.com/",
      configProto: "http://",
      configHost: "e.issuu.com/",
      configPath: "embed/",
      documentProto: "http://",
      documentHost: "document.issuu.com/",
      imgProto: "http://",
      imgHost: "image.isu.pub/",
      apiHost: "api.issuu.com/",
      apiPath: "query",
      exelate: { publisher: "536", website: "001", segment: "2372960", enabled: !0 }
    }
  }

  function e() {
    return z
  }

  function f(a) {
    var b = /^([0-9]{1,8})\/([0-9]{1,8}).*$/, c = b.exec(a);
    return c && c.length > 2 ? c[1] + "/" + c[2] : v
  }

  function g(a) {
    var b = function (a) {
      "use strict";
      return e().hasOwnProperty(a) && e()[a].template ? e()[a].template.getReader(e()[a].elements[0]) : null
    }, c = function (a) {
      "use strict";
      var b;
      try {
        b = y(a)
      } catch (c) {
      }
      if (b && b.length > 0) {
        var d = b.attr(t);
        if (e().hasOwnProperty(d) && e()[d].template) return e()[d].template.getReader(b)
      }
      return null
    }, d = b(a);
    return null !== d ? d : c(a)
  }

  function h(b) {
    "use strict";
    var d = 0, g = 1, h = 2, i = 3, j = function () {
      a.IssuuReaders.loaded || (a.IssuuReaders.loaded = !0, "function" == typeof a.onIssuuReadersLoaded && a.onIssuuReadersLoaded.call({}, a.IssuuReaders))
    }, k = function () {
      var a = 0;
      return y.each(e(), function (b) {
        a += e()[b].elements.length
      }), a
    }, l = function (a) {
      var b;
      try {
        b = y(a)
      } catch (c) {
        return
      }
      b.each(function (a, b) {
        var c = "embedid", g = f(y(b).attr(t));
        g === v && (g = y(b).attr(u), c = "docurl"), e()[g] ? y.inArray(b, e()[g].elements) > -1 || e()[g].elements.push(b) : e()[g] = {
          state: d,
          elements: [b],
          embedSource: c,
          errorResponseText: null,
          template: null
        }
      })
    }, m = function (a) {
      var b = f(a);
      l(b === v ? a : "[" + t + "=" + b + " ]")
    }, o = function (a, b, d) {
      var e = a.config, f = 0;
      y.each(a.elements, function (g, h) {
        if (!y(h).hasClass(x)) {
          y(h).addClass(x);
          var i = y(h).attr("data-force-reader3") ? n.type.READER3 : c,
            l = "embedid" === a.embedSource || d ? b : 1,
            m = n.get(h.offsetWidth, h.offsetHeight, d ? n.type.ERROR : i);
          null === a.template && (a.template = m), m.render(h, e, l, function () {
            ++f >= k() && j()
          }, { responseText: a.errorResponseText })
        }
      })
    }, p = function (a) {
      if (e().hasOwnProperty(a)) {
        var b = e()[a];
        switch (b.state) {
          case h:
            o(b, a, !1);
            break;
          case i:
            o(b, a, !0);
            break;
          case g:
            break;
          case d:
            b.state = g, A.load(a, b.embedSource, function (c) {
              b.config = c, b.state = h, o(b, a, !1)
            }, function (c) {
              b.state = i, b.errorResponseText = c.responseText, o(b, a, !0)
            })
        }
      }
    }, q = function () {
      y.each(e(), function (a) {
        p(a)
      })
    };
    b === c ? l(w) : m(b), q()
  }

  var i = {};
  i.amd = !1;
  var j = (new Date).getTime(), k = "0.1.0-20170403";
  !function (a, b) {
    function c(a) {
      var b = pa[a] = {};
      return _.each(a.split(ca), function (a, c) {
        b[c] = !0
      }), b
    }

    function d(a, c, d) {
      if (d === b && 1 === a.nodeType) {
        var e = "data-" + c.replace(ra, "-$1").toLowerCase();
        if (d = a.getAttribute(e), "string" == typeof d) {
          try {
            d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : qa.test(d) ? _.parseJSON(d) : d
          } catch (f) {
          }
          _.data(a, c, d)
        } else d = b
      }
      return d
    }

    function e(a) {
      var b;
      for (b in a) if (("data" !== b || !_.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
      return !0
    }

    function f() {
      return !1
    }

    function g() {
      return !0
    }

    function h(a) {
      return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function j(a, b) {
      do {
        a = a[b];
      } while (a && 1 !== a.nodeType);
      return a
    }

    function k(a, b, c) {
      if (b = b || 0, _.isFunction(b)) return _.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c
      });
      if (b.nodeType) return _.grep(a, function (a, d) {
        return a === b === c
      });
      if ("string" == typeof b) {
        var d = _.grep(a, function (a) {
          return 1 === a.nodeType
        });
        if (La.test(b)) return _.filter(b, d, !c);
        b = _.filter(b, d)
      }
      return _.grep(a, function (a, d) {
        return _.inArray(a, b) >= 0 === c
      })
    }

    function l(a) {
      var b = Oa.split("|"), c = a.createDocumentFragment();
      if (c.createElement) for (; b.length;) c.createElement(b.pop());
      return c
    }

    function m(a, b) {
      return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }

    function n(a, b) {
      if (1 === b.nodeType && _.hasData(a)) {
        var c, d, e, f = _._data(a), g = _._data(b, f), h = f.events;
        if (h) {
          delete g.handle, g.events = {};
          for (c in h) for (d = 0, e = h[c].length; e > d; d++) _.event.add(b, c, h[c][d])
        }
        g.data && (g.data = _.extend({}, g.data))
      }
    }

    function o(a, b) {
      var c;
      1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), _.support.html5Clone && a.innerHTML && !_.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ya.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text), b.removeAttribute(_.expando))
    }

    function p(a) {
      return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function q(a) {
      Ya.test(a.type) && (a.defaultChecked = a.checked)
    }

    function r(a, b) {
      if (b in a) return b;
      for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = sb.length; e--;) if (b = sb[e] + c, b in a) return b;
      return d
    }

    function s(a, b) {
      return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
    }

    function t(a, b) {
      for (var c, d, e = [], f = 0, g = a.length; g > f; f++) c = a[f], c.style && (e[f] = _._data(c, "olddisplay"), b ? (e[f] || "none" !== c.style.display || (c.style.display = ""), "" === c.style.display && s(c) && (e[f] = _._data(c, "olddisplay", x(c.nodeName)))) : (d = db(c, "display"), e[f] || "none" === d || _._data(c, "olddisplay", d)));
      for (f = 0; g > f; f++) c = a[f], c.style && (b && "none" !== c.style.display && "" !== c.style.display || (c.style.display = b ? e[f] || "" : "none"));
      return a
    }

    function u(a, b, c) {
      var d = lb.exec(b);
      return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function v(a, b, c, d) {
      for (var e = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, f = 0; 4 > e; e += 2) "margin" === c && (f += _.css(a, c + rb[e], !0)), d ? ("content" === c && (f -= parseFloat(db(a, "padding" + rb[e])) || 0), "margin" !== c && (f -= parseFloat(db(a, "border" + rb[e] + "Width")) || 0)) : (f += parseFloat(db(a, "padding" + rb[e])) || 0, "padding" !== c && (f += parseFloat(db(a, "border" + rb[e] + "Width")) || 0));
      return f
    }

    function w(a, b, c) {
      var d = "width" === b ? a.offsetWidth : a.offsetHeight, e = !0,
        f = _.support.boxSizing && "border-box" === _.css(a, "boxSizing");
      if (0 >= d || null == d) {
        if (d = db(a, b), (0 > d || null == d) && (d = a.style[b]), mb.test(d)) return d;
        e = f && (_.support.boxSizingReliable || d === a.style[b]), d = parseFloat(d) || 0
      }
      return d + v(a, b, c || (f ? "border" : "content"), e) + "px"
    }

    function x(a) {
      if (ob[a]) return ob[a];
      var b = _("<" + a + ">").appendTo(Q.body), c = b.css("display");
      return b.remove(), ("none" === c || "" === c) && (eb = Q.body.appendChild(eb || _.extend(Q.createElement("iframe"), {
        frameBorder: 0,
        width: 0,
        height: 0
      })), fb && eb.createElement || (fb = (eb.contentWindow || eb.contentDocument).document, fb.write("<!doctype html><html><body>"), fb.close()), b = fb.body.appendChild(fb.createElement(a)), c = db(b, "display"), Q.body.removeChild(eb)), ob[a] = c, c
    }

    function y(a, b, c, d) {
      var e;
      if (_.isArray(b)) _.each(b, function (b, e) {
        c || vb.test(a) ? d(a, e) : y(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
      }); else if (c || "object" !== _.type(b)) d(a, b); else for (e in b) y(a + "[" + e + "]", b[e], c, d)
    }

    function z(a) {
      return function (b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e, f, g = b.toLowerCase().split(ca), h = 0, i = g.length;
        if (_.isFunction(c)) for (; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
      }
    }

    function A(a, c, d, e, f, g) {
      f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
      for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === Lb; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = A(a, c, d, e, h, g)));
      return !l && h || g["*"] || (h = A(a, c, d, e, "*", g)), h
    }

    function B(a, c) {
      var d, e, f = _.ajaxSettings.flatOptions || {};
      for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
      e && _.extend(!0, a, e)
    }

    function C(a, c, d) {
      var e, f, g, h, i = a.contents, j = a.dataTypes, k = a.responseFields;
      for (f in k) f in d && (c[k[f]] = d[f]);
      for (; "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
      if (e) for (f in i) if (i[f] && i[f].test(e)) {
        j.unshift(f);
        break
      }
      if (j[0] in d) g = j[0]; else {
        for (f in d) {
          if (!j[0] || a.converters[f + " " + j[0]]) {
            g = f;
            break
          }
          h || (h = f)
        }
        g = g || h
      }
      return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function D(a, b) {
      var c, d, e, f, g = a.dataTypes.slice(), h = g[0], i = {}, j = 0;
      if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
      for (; e = g[++j];) if ("*" !== e) {
        if ("*" !== h && h !== e) {
          if (c = i[h + " " + e] || i["* " + e], !c) for (d in i) if (f = d.split(" "), f[1] === e && (c = i[h + " " + f[0]] || i["* " + f[0]])) {
            c === !0 ? c = i[d] : i[d] !== !0 && (e = f[0], g.splice(j--, 0, e));
            break
          }
          if (c !== !0) if (c && a["throws"]) b = c(b); else try {
            b = c(b)
          } catch (k) {
            return { state: "parsererror", error: c ? k : "No conversion from " + h + " to " + e }
          }
        }
        h = e
      }
      return { state: "success", data: b }
    }

    function E() {
      try {
        return new a.XMLHttpRequest
      } catch (b) {
      }
    }

    function F() {
      try {
        return new a.ActiveXObject("Microsoft.XMLHTTP")
      } catch (b) {
      }
    }

    function G() {
      return setTimeout(function () {
        Wb = b
      }, 0), Wb = _.now()
    }

    function H(a, b) {
      _.each(b, function (b, c) {
        for (var d = (ac[b] || []).concat(ac["*"]), e = 0, f = d.length; f > e; e++) if (d[e].call(a, b, c)) return
      })
    }

    function I(a, b, c) {
      var d, e = 0, f = _b.length, g = _.Deferred().always(function () {
        delete h.elem
      }), h = function () {
        for (var b = Wb || G(), c = Math.max(0, i.startTime + i.duration - b), d = 1 - (c / i.duration || 0), e = 0, f = i.tweens.length; f > e; e++) i.tweens[e].run(d);
        return g.notifyWith(a, [i, d, c]), 1 > d && f ? c : (g.resolveWith(a, [i]), !1)
      }, i = g.promise({
        elem: a,
        props: _.extend({}, b),
        opts: _.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Wb || G(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = _.Tween(a, i.opts, b, c, i.opts.specialEasing[b] || i.opts.easing);
          return i.tweens.push(e), e
        },
        stop: function (b) {
          for (var c = 0, d = b ? i.tweens.length : 0; d > c; c++) i.tweens[c].run(1);
          return b ? g.resolveWith(a, [i, b]) : g.rejectWith(a, [i, b]), this
        }
      }), j = i.props;
      for (J(j, i.opts.specialEasing); f > e; e++) if (d = _b[e].call(i, a, j, i.opts)) return d;
      return H(i, j), _.isFunction(i.opts.start) && i.opts.start.call(a, i), _.fx.timer(_.extend(h, {
        anim: i,
        queue: i.opts.queue,
        elem: a
      })), i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always)
    }

    function J(a, b) {
      var c, d, e, f, g;
      for (c in a) if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
    }

    function K(a, b, c) {
      var d, e, f, g, h, i, j, k, l = this, m = a.style, n = {}, o = [], p = a.nodeType && s(a);
      c.queue || (j = _._queueHooks(a, "fx"), null == j.unqueued && (j.unqueued = 0, k = j.empty.fire, j.empty.fire = function () {
        j.unqueued || k()
      }), j.unqueued++, l.always(function () {
        l.always(function () {
          j.unqueued--, _.queue(a, "fx").length || j.empty.fire()
        })
      })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === _.css(a, "display") && "none" === _.css(a, "float") && (_.support.inlineBlockNeedsLayout && "inline" !== x(a.nodeName) ? m.zoom = 1 : m.display = "inline-block")), c.overflow && (m.overflow = "hidden", _.support.shrinkWrapBlocks || l.done(function () {
        m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
      }));
      for (d in b) if (f = b[d], Yb.exec(f)) {
        if (delete b[d], f === (p ? "hide" : "show")) continue;
        o.push(d)
      }
      if (g = o.length) for (h = _._data(a, "fxshow") || _._data(a, "fxshow", {}), p ? _(a).show() : l.done(function () {
        _(a).hide()
      }), l.done(function () {
        var b;
        _.removeData(a, "fxshow", !0);
        for (b in n) _.style(a, b, n[b])
      }), d = 0; g > d; d++) e = o[d], i = l.createTween(e, p ? h[e] : 0), n[e] = h[e] || _.style(a, e), e in h || (h[e] = i.start, p && (i.end = i.start, i.start = "width" === e || "height" === e ? 1 : 0))
    }

    function L(a, b, c, d, e) {
      return new L.prototype.init(a, b, c, d, e)
    }

    function M(a, b) {
      var c, d = { height: a }, e = 0;
      for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = rb[e], d["margin" + c] = d["padding" + c] = a;
      return b && (d.opacity = d.width = a), d
    }

    function N(a) {
      return _.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var O, P, Q = a.document, R = a.location, S = a.navigator, T = a.jQuery, U = a.$,
      V = Array.prototype.push, W = Array.prototype.slice, X = Array.prototype.indexOf,
      Y = Object.prototype.toString, Z = Object.prototype.hasOwnProperty, $ = String.prototype.trim,
      _ = function (a, b) {
        return new _.fn.init(a, b, O)
      }, aa = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, ba = /\S/, ca = /\s+/,
      da = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ea = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      fa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ga = /^[\],:{}\s]*$/, ha = /(?:^|:|,)(?:\s*\[)+/g,
      ia = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      ja = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ka = /^-ms-/,
      la = /-([\da-z])/gi, ma = function (a, b) {
        return (b + "").toUpperCase()
      }, na = function () {
        Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", na, !1), _.ready()) : "complete" === Q.readyState && (Q.detachEvent("onreadystatechange", na), _.ready())
      }, oa = {};
    _.fn = _.prototype = {
      constructor: _, init: function (a, c, d) {
        var e, f, g;
        if (!a) return this;
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if ("string" == typeof a) {
          if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ea.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
          if (e[1]) return c = c instanceof _ ? c[0] : c, g = c && c.nodeType ? c.ownerDocument || c : Q, a = _.parseHTML(e[1], g, !0), fa.test(e[1]) && _.isPlainObject(c) && this.attr.call(a, c, !0), _.merge(this, a);
          if (f = Q.getElementById(e[2]), f && f.parentNode) {
            if (f.id !== e[2]) return d.find(a);
            this.length = 1, this[0] = f
          }
          return this.context = Q, this.selector = a, this
        }
        return _.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
      }, selector: "", jquery: "1.8.2", length: 0, size: function () {
        return this.length
      }, toArray: function () {
        return W.call(this)
      }, get: function (a) {
        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
      }, pushStack: function (a, b, c) {
        var d = _.merge(this.constructor(), a);
        return d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
      }, each: function (a, b) {
        return _.each(this, a, b)
      }, ready: function (a) {
        return _.ready.promise().done(a), this
      }, eq: function (a) {
        return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, slice: function () {
        return this.pushStack(W.apply(this, arguments), "slice", W.call(arguments).join(","))
      }, map: function (a) {
        return this.pushStack(_.map(this, function (b, c) {
          return a.call(b, c, b)
        }))
      }, end: function () {
        return this.prevObject || this.constructor(null)
      }, push: V, sort: [].sort, splice: [].splice
    }, _.fn.init.prototype = _.fn, _.extend = _.fn.extend = function () {
      var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
      for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || _.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c], e = a[c], h !== e && (k && e && (_.isPlainObject(e) || (f = _.isArray(e))) ? (f ? (f = !1, g = d && _.isArray(d) ? d : []) : g = d && _.isPlainObject(d) ? d : {}, h[c] = _.extend(k, g, e)) : e !== b && (h[c] = e));
      return h
    }, _.extend({
      noConflict: function (b) {
        return a.$ === _ && (a.$ = U), b && a.jQuery === _ && (a.jQuery = T), _
      }, isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? _.readyWait++ : _.ready(!0)
      }, ready: function (a) {
        if (a === !0 ? !--_.readyWait : !_.isReady) {
          if (!Q.body) return setTimeout(_.ready, 1);
          _.isReady = !0, a !== !0 && --_.readyWait > 0 || (P.resolveWith(Q, [_]), _.fn.trigger && _(Q).trigger("ready").off("ready"))
        }
      }, isFunction: function (a) {
        return "function" === _.type(a)
      }, isArray: Array.isArray || function (a) {
        return "array" === _.type(a)
      }, isWindow: function (a) {
        return null != a && a == a.window
      }, isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
      }, type: function (a) {
        return null == a ? String(a) : oa[Y.call(a)] || "object"
      }, isPlainObject: function (a) {
        if (!a || "object" !== _.type(a) || a.nodeType || _.isWindow(a)) return !1;
        try {
          if (a.constructor && !Z.call(a, "constructor") && !Z.call(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
          return !1
        }
        var d;
        for (d in a) ;
        return d === b || Z.call(a, d)
      }, isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0
      }, error: function (a) {
        throw new Error(a)
      }, parseHTML: function (a, b, c) {
        var d;
        return a && "string" == typeof a ? ("boolean" == typeof b && (c = b, b = 0), b = b || Q, (d = fa.exec(a)) ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, c ? null : []), _.merge([], (d.cacheable ? _.clone(d.fragment) : d.fragment).childNodes))) : null
      }, parseJSON: function (b) {
        return b && "string" == typeof b ? (b = _.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : ga.test(b.replace(ia, "@").replace(ja, "]").replace(ha, "")) ? new Function("return " + b)() : void _.error("Invalid JSON: " + b)) : null
      }, parseXML: function (c) {
        var d, e;
        if (!c || "string" != typeof c) return null;
        try {
          a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
        } catch (f) {
          d = b
        }
        return d && d.documentElement && !d.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + c), d
      }, noop: function () {
      }, globalEval: function (b) {
        b && ba.test(b) && (a.execScript || function (b) {
          a.eval.call(a, b)
        })(b)
      }, camelCase: function (a) {
        return a.replace(ka, "ms-").replace(la, ma)
      }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      }, each: function (a, c, d) {
        var e, f = 0, g = a.length, h = g === b || _.isFunction(a);
        if (d) if (h) {
          for (e in a) if (c.apply(a[e], d) === !1) break
        } else for (; g > f && c.apply(a[f++], d) !== !1;) ; else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break
        } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;) ;
        return a
      }, trim: $ && !$.call("\ufeffÂ ") ? function (a) {
        return null == a ? "" : $.call(a)
      } : function (a) {
        return null == a ? "" : (a + "").replace(da, "")
      }, makeArray: function (a, b) {
        var c, d = b || [];
        return null != a && (c = _.type(a), null == a.length || "string" === c || "function" === c || "regexp" === c || _.isWindow(a) ? V.call(d, a) : _.merge(d, a)), d
      }, inArray: function (a, b, c) {
        var d;
        if (b) {
          if (X) return X.call(b, a, c);
          for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
        }
        return -1
      }, merge: function (a, c) {
        var d = c.length, e = a.length, f = 0;
        if ("number" == typeof d) for (; d > f; f++) a[e++] = c[f]; else for (; c[f] !== b;) a[e++] = c[f++];
        return a.length = e, a
      }, grep: function (a, b, c) {
        var d, e = [], f = 0, g = a.length;
        for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
        return e
      }, map: function (a, c, d) {
        var e, f, g = [], h = 0, i = a.length,
          j = a instanceof _ || i !== b && "number" == typeof i && (i > 0 && a[0] && a[i - 1] || 0 === i || _.isArray(a));
        if (j) for (; i > h; h++) e = c(a[h], h, d), null != e && (g[g.length] = e); else for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
        return g.concat.apply([], g)
      }, guid: 1, proxy: function (a, c) {
        var d, e, f;
        return "string" == typeof c && (d = a[c], c = a, a = d), _.isFunction(a) ? (e = W.call(arguments, 2), f = function () {
          return a.apply(c, e.concat(W.call(arguments)))
        }, f.guid = a.guid = a.guid || _.guid++, f) : b
      }, access: function (a, c, d, e, f, g, h) {
        var i, j = null == d, k = 0, l = a.length;
        if (d && "object" == typeof d) {
          for (k in d) _.access(a, c, k, d[k], 1, g, e);
          f = 1
        } else if (e !== b) {
          if (i = h === b && _.isFunction(e), j && (i ? (i = c, c = function (a, b, c) {
              return i.call(_(a), c)
            }) : (c.call(a, e), c = null)), c) for (; l > k; k++) c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g
      }, now: function () {
        return (new Date).getTime()
      }
    }), _.ready.promise = function (b) {
      if (!P) if (P = _.Deferred(), "complete" === Q.readyState) setTimeout(_.ready, 1); else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", _.ready, !1); else {
        Q.attachEvent("onreadystatechange", na), a.attachEvent("onload", _.ready);
        var c = !1;
        try {
          c = null == a.frameElement && Q.documentElement
        } catch (d) {
        }
        c && c.doScroll && !function e() {
          if (!_.isReady) {
            try {
              c.doScroll("left")
            } catch (a) {
              return setTimeout(e, 50)
            }
            _.ready()
          }
        }()
      }
      return P.promise(b)
    }, _.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
      oa["[object " + b + "]"] = b.toLowerCase()
    }), O = _(Q);
    var pa = {};
    _.Callbacks = function (a) {
      a = "string" == typeof a ? pa[a] || c(a) : _.extend({}, a);
      var d, e, f, g, h, i, j = [], k = !a.once && [], l = function (b) {
        for (d = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++) if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
          d = !1;
          break
        }
        f = !1, j && (k ? k.length && l(k.shift()) : d ? j = [] : m.disable())
      }, m = {
        add: function () {
          if (j) {
            var b = j.length;
            !function c(b) {
              _.each(b, function (b, d) {
                var e = _.type(d);
                "function" !== e || a.unique && m.has(d) ? d && d.length && "string" !== e && c(d) : j.push(d)
              })
            }(arguments), f ? h = j.length : d && (g = b, l(d))
          }
          return this
        }, remove: function () {
          return j && _.each(arguments, function (a, b) {
            for (var c; (c = _.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
          }), this
        }, has: function (a) {
          return _.inArray(a, j) > -1
        }, empty: function () {
          return j = [], this
        }, disable: function () {
          return j = k = d = b, this
        }, disabled: function () {
          return !j
        }, lock: function () {
          return k = b, d || m.disable(), this
        }, locked: function () {
          return !k
        }, fireWith: function (a, b) {
          return b = b || [], b = [a, b.slice ? b.slice() : b], !j || e && !k || (f ? k.push(b) : l(b)), this
        }, fire: function () {
          return m.fireWith(this, arguments), this
        }, fired: function () {
          return !!e
        }
      };
      return m
    }, _.extend({
      Deferred: function (a) {
        var b = [["resolve", "done", _.Callbacks("once memory"), "resolved"], ["reject", "fail", _.Callbacks("once memory"), "rejected"], ["notify", "progress", _.Callbacks("memory")]],
          c = "pending", d = {
            state: function () {
              return c
            }, always: function () {
              return e.done(arguments).fail(arguments), this
            }, then: function () {
              var a = arguments;
              return _.Deferred(function (c) {
                _.each(b, function (b, d) {
                  var f = d[0], g = a[b];
                  e[d[1]](_.isFunction(g) ? function () {
                    var a = g.apply(this, arguments);
                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === e ? c : this, [a])
                  } : c[f])
                }), a = null
              }).promise()
            }, promise: function (a) {
              return null != a ? _.extend(a, d) : d
            }
          }, e = {};
        return d.pipe = d.then, _.each(b, function (a, f) {
          var g = f[2], h = f[3];
          d[f[1]] = g.add, h && g.add(function () {
            c = h
          }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = g.fire, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
      }, when: function (a) {
        var b, c, d, e = 0, f = W.call(arguments), g = f.length,
          h = 1 !== g || a && _.isFunction(a.promise) ? g : 0, i = 1 === h ? a : _.Deferred(),
          j = function (a, c, d) {
            return function (e) {
              c[a] = this, d[a] = arguments.length > 1 ? W.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
            }
          };
        if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
        return h || i.resolveWith(d, f), i.promise()
      }
    }), _.support = function () {
      var b, c, d, e, f, g, h, i, j, k, l, m = Q.createElement("div");
      if (m.setAttribute("className", "t"), m.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], d.style.cssText = "top:1px;float:left;opacity:.5", !c || !c.length) return {};
      e = Q.createElement("select"), f = e.appendChild(Q.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
        leadingWhitespace: 3 === m.firstChild.nodeType,
        tbody: !m.getElementsByTagName("tbody").length,
        htmlSerialize: !!m.getElementsByTagName("link").length,
        style: /top/.test(d.getAttribute("style")),
        hrefNormalized: "/a" === d.getAttribute("href"),
        opacity: /^0.5/.test(d.style.opacity),
        cssFloat: !!d.style.cssFloat,
        checkOn: "on" === g.value,
        optSelected: f.selected,
        getSetAttribute: "t" !== m.className,
        enctype: !!Q.createElement("form").enctype,
        html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === Q.compatMode,
        submitBubbles: !0,
        changeBubbles: !0,
        focusinBubbles: !1,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
      try {
        delete m.test
      } catch (n) {
        b.deleteExpando = !1
      }
      if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", l = function () {
          b.noCloneEvent = !1
        }), m.cloneNode(!0).fireEvent("onclick"), m.detachEvent("onclick", l)), g = Q.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = Q.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent) for (j in{
        submit: !0,
        change: !0,
        focusin: !0
      }) i = "on" + j, k = i in m, k || (m.setAttribute(i, "return;"), k = "function" == typeof m[i]), b[j + "Bubbles"] = k;
      return _(function () {
        var c, d, e, f, g = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
          h = Q.getElementsByTagName("body")[0];
        h && (c = Q.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", h.insertBefore(c, h.firstChild), d = Q.createElement("div"), c.appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = d.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", k = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = k && 0 === e[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === d.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== h.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(d, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(d, null) || { width: "4px" }).width, f = Q.createElement("div"), f.style.cssText = d.style.cssText = g, f.style.marginRight = f.style.width = "0", d.style.width = "1px", d.appendChild(f), b.reliableMarginRight = !parseFloat((a.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = g + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== d.offsetWidth, c.style.zoom = 1), h.removeChild(c), c = d = e = f = null)
      }), h.removeChild(m), c = d = e = f = g = h = m = null, b
    }();
    var qa = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, ra = /([A-Z])/g;
    _.extend({
      cache: {},
      deletedIds: [],
      uuid: 0,
      expando: "jQuery" + (_.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
      hasData: function (a) {
        return a = a.nodeType ? _.cache[a[_.expando]] : a[_.expando], !!a && !e(a)
      },
      data: function (a, c, d, e) {
        if (_.acceptData(a)) {
          var f, g, h = _.expando, i = "string" == typeof c, j = a.nodeType, k = j ? _.cache : a,
            l = j ? a[h] : a[h] && h;
          if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.deletedIds.pop() || _.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = _.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = _.extend(k[l], c) : k[l].data = _.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[_.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[_.camelCase(c)])) : g = f, g
        }
      },
      removeData: function (a, b, c) {
        if (_.acceptData(a)) {
          var d, f, g, h = a.nodeType, i = h ? _.cache : a, j = h ? a[_.expando] : _.expando;
          if (i[j]) {
            if (b && (d = c ? i[j] : i[j].data)) {
              _.isArray(b) || (b in d ? b = [b] : (b = _.camelCase(b), b = b in d ? [b] : b.split(" ")));
              for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
              if (!(c ? e : _.isEmptyObject)(d)) return
            }
            (c || (delete i[j].data, e(i[j]))) && (h ? _.cleanData([a], !0) : _.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null)
          }
        }
      },
      _data: function (a, b, c) {
        return _.data(a, b, c, !0)
      },
      acceptData: function (a) {
        var b = a.nodeName && _.noData[a.nodeName.toLowerCase()];
        return !b || b !== !0 && a.getAttribute("classid") === b
      }
    }), _.fn.extend({
      data: function (a, c) {
        var e, f, g, h, i, j = this[0], k = 0, l = null;
        if (a === b) {
          if (this.length && (l = _.data(j), 1 === j.nodeType && !_._data(j, "parsedAttrs"))) {
            for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name, h.indexOf("data-") || (h = _.camelCase(h.substring(5)), d(j, h, l[h]));
            _._data(j, "parsedAttrs", !0)
          }
          return l
        }
        return "object" == typeof a ? this.each(function () {
          _.data(this, a)
        }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", _.access(this, function (c) {
          return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = _.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, void this.each(function () {
            var b = _(this);
            b.triggerHandler("setData" + f, e), _.data(this, a, c), b.triggerHandler("changeData" + f, e)
          }))
        }, null, c, arguments.length > 1, null, !1))
      }, removeData: function (a) {
        return this.each(function () {
          _.removeData(this, a)
        })
      }
    }), _.extend({
      queue: function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = _._data(a, b), c && (!d || _.isArray(c) ? d = _._data(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
      }, dequeue: function (a, b) {
        b = b || "fx";
        var c = _.queue(a, b), d = c.length, e = c.shift(), f = _._queueHooks(a, b),
          g = function () {
            _.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      }, _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return _._data(a, c) || _._data(a, c, {
          empty: _.Callbacks("once memory").add(function () {
            _.removeData(a, b + "queue", !0), _.removeData(a, c, !0)
          })
        })
      }
    }), _.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? _.queue(this[0], a) : c === b ? this : this.each(function () {
          var b = _.queue(this, a, c);
          _._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && _.dequeue(this, a)
        })
      }, dequeue: function (a) {
        return this.each(function () {
          _.dequeue(this, a)
        })
      }, delay: function (a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d)
          }
        })
      }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
      }, promise: function (a, c) {
        var d, e = 1, f = _.Deferred(), g = this, h = this.length, i = function () {
          --e || f.resolveWith(g, [g])
        };
        for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = _._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c)
      }
    });
    var sa, ta, ua, va = /[\t\r\n]/g, wa = /\r/g, xa = /^(?:button|input)$/i,
      ya = /^(?:button|input|object|select|textarea)$/i, za = /^a(?:rea|)$/i,
      Aa = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      Ba = _.support.getSetAttribute;
    _.fn.extend({
      attr: function (a, b) {
        return _.access(this, _.attr, a, b, arguments.length > 1)
      }, removeAttr: function (a) {
        return this.each(function () {
          _.removeAttr(this, a)
        })
      }, prop: function (a, b) {
        return _.access(this, _.prop, a, b, arguments.length > 1)
      }, removeProp: function (a) {
        return a = _.propFix[a] || a, this.each(function () {
          try {
            this[a] = b, delete this[a]
          } catch (c) {
          }
        })
      }, addClass: function (a) {
        var b, c, d, e, f, g, h;
        if (_.isFunction(a)) return this.each(function (b) {
          _(this).addClass(a.call(this, b, this.className))
        });
        if (a && "string" == typeof a) for (b = a.split(ca), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
          for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
          e.className = _.trim(f)
        } else e.className = a;
        return this
      }, removeClass: function (a) {
        var c, d, e, f, g, h, i;
        if (_.isFunction(a)) return this.each(function (b) {
          _(this).removeClass(a.call(this, b, this.className))
        });
        if (a && "string" == typeof a || a === b) for (c = (a || "").split(ca), h = 0, i = this.length; i > h; h++) if (e = this[h], 1 === e.nodeType && e.className) {
          for (d = (" " + e.className + " ").replace(va, " "), f = 0, g = c.length; g > f; f++) for (; d.indexOf(" " + c[f] + " ") >= 0;) d = d.replace(" " + c[f] + " ", " ");
          e.className = a ? _.trim(d) : ""
        }
        return this
      }, toggleClass: function (a, b) {
        var c = typeof a, d = "boolean" == typeof b;
        return _.isFunction(a) ? this.each(function (c) {
          _(this).toggleClass(a.call(this, c, this.className, b), b)
        }) : this.each(function () {
          if ("string" === c) for (var e, f = 0, g = _(this), h = b, i = a.split(ca); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e); else ("undefined" === c || "boolean" === c) && (this.className && _._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : _._data(this, "__className__") || "")
        })
      }, hasClass: function (a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(va, " ").indexOf(b) >= 0) return !0;
        return !1
      }, val: function (a) {
        var c, d, e, f = this[0];
        {
          if (arguments.length) return e = _.isFunction(a), this.each(function (d) {
            var f, g = _(this);
            1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : _.isArray(f) && (f = _.map(f, function (a) {
              return null == a ? "" : a + ""
            })), c = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
          });
          if (f) return c = _.valHooks[f.type] || _.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wa, "") : null == d ? "" : d)
        }
      }
    }), _.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text
          }
        }, select: {
          get: function (a) {
            var b, c, d, e, f = a.selectedIndex, g = [], h = a.options, i = "select-one" === a.type;
            if (0 > f) return null;
            for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++) if (e = h[c], e.selected && (_.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !_.nodeName(e.parentNode, "optgroup"))) {
              if (b = _(e).val(), i) return b;
              g.push(b)
            }
            return i && !g.length && h.length ? _(h[f]).val() : g
          }, set: function (a, b) {
            var c = _.makeArray(b);
            return _(a).find("option").each(function () {
              this.selected = _.inArray(_(this).val(), c) >= 0
            }), c.length || (a.selectedIndex = -1), c
          }
        }
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f, g, h, i = a.nodeType;
        if (a && 3 !== i && 8 !== i && 2 !== i) return e && _.isFunction(_.fn[c]) ? _(a)[c](d) : "undefined" == typeof a.getAttribute ? _.prop(a, c, d) : (h = 1 !== i || !_.isXMLDoc(a), h && (c = c.toLowerCase(), g = _.attrHooks[c] || (Aa.test(c) ? ta : sa)), d !== b ? null === d ? void _.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
      },
      removeAttr: function (a, b) {
        var c, d, e, f, g = 0;
        if (b && 1 === a.nodeType) for (d = b.split(ca); g < d.length; g++) e = d[g], e && (c = _.propFix[e] || e, f = Aa.test(e), f || _.attr(a, e, ""), a.removeAttribute(Ba ? e : c), f && c in a && (a[c] = !1))
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (xa.test(a.nodeName) && a.parentNode) _.error("type property can't be changed"); else if (!_.support.radioValue && "radio" === b && _.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }, value: {
          get: function (a, b) {
            return sa && _.nodeName(a, "button") ? sa.get(a, b) : b in a ? a.value : null
          }, set: function (a, b, c) {
            return sa && _.nodeName(a, "button") ? sa.set(a, b, c) : void(a.value = b)
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function (a, c, d) {
        var e, f, g, h = a.nodeType;
        if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !_.isXMLDoc(a), g && (c = _.propFix[c] || c, f = _.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified ? parseInt(c.value, 10) : ya.test(a.nodeName) || za.test(a.nodeName) && a.href ? 0 : b
          }
        }
      }
    }), ta = {
      get: function (a, c) {
        var d, e = _.prop(a, c);
        return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
      }, set: function (a, b, c) {
        var d;
        return b === !1 ? _.removeAttr(a, c) : (d = _.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
      }
    }, Ba || (ua = {
      name: !0,
      id: !0,
      coords: !0
    }, sa = _.valHooks.button = {
      get: function (a, c) {
        var d;
        return d = a.getAttributeNode(c), d && (ua[c] ? "" !== d.value : d.specified) ? d.value : b
      }, set: function (a, b, c) {
        var d = a.getAttributeNode(c);
        return d || (d = Q.createAttribute(c), a.setAttributeNode(d)), d.value = b + ""
      }
    }, _.each(["width", "height"], function (a, b) {
      _.attrHooks[b] = _.extend(_.attrHooks[b], {
        set: function (a, c) {
          return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
        }
      })
    }), _.attrHooks.contenteditable = {
      get: sa.get, set: function (a, b, c) {
        "" === b && (b = "false"), sa.set(a, b, c)
      }
    }), _.support.hrefNormalized || _.each(["href", "src", "width", "height"], function (a, c) {
      _.attrHooks[c] = _.extend(_.attrHooks[c], {
        get: function (a) {
          var d = a.getAttribute(c, 2);
          return null === d ? b : d
        }
      })
    }), _.support.style || (_.attrHooks.style = {
      get: function (a) {
        return a.style.cssText.toLowerCase() || b
      }, set: function (a, b) {
        return a.style.cssText = b + ""
      }
    }), _.support.optSelected || (_.propHooks.selected = _.extend(_.propHooks.selected, {
      get: function (a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
      }
    })), _.support.enctype || (_.propFix.enctype = "encoding"), _.support.checkOn || _.each(["radio", "checkbox"], function () {
      _.valHooks[this] = {
        get: function (a) {
          return null === a.getAttribute("value") ? "on" : a.value
        }
      }
    }), _.each(["radio", "checkbox"], function () {
      _.valHooks[this] = _.extend(_.valHooks[this], {
        set: function (a, b) {
          return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
        }
      })
    });
    var Ca = /^(?:textarea|input|select)$/i, Da = /^([^\.]*|)(?:\.(.+)|)$/,
      Ea = /(?:^|\s)hover(\.\S+|)\b/, Fa = /^key/, Ga = /^(?:mouse|contextmenu)|click/,
      Ha = /^(?:focusinfocus|focusoutblur)$/, Ia = function (a) {
        return _.event.special.hover ? a : a.replace(Ea, "mouseenter$1 mouseleave$1")
      };
    _.event = {
      add: function (a, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o, p, q;
        if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = _._data(a))) {
          for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = _.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function (a) {
            return "undefined" == typeof _ || a && _.event.triggered === a.type ? b : _.event.dispatch.apply(h.elem, arguments)
          }, h.elem = a), c = _.trim(Ia(c)).split(" "), j = 0; j < c.length; j++) k = Da.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = _.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = _.event.special[l] || {}, n = _.extend({
            type: l,
            origType: k[1],
            data: e,
            handler: d,
            guid: d.guid,
            selector: f,
            needsContext: f && _.expr.match.needsContext.test(f),
            namespace: m.join(".")
          }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), _.event.global[l] = !0;
          a = null
        }
      },
      global: {},
      remove: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = _.hasData(a) && _._data(a);
        if (q && (m = q.events)) {
          for (b = _.trim(Ia(b || "")).split(" "), f = 0; f < b.length; f++) if (g = Da.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
            for (n = _.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, o = m[h] || [], k = o.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = 0; l < o.length; l++) p = o[l], !e && i !== p.origType || c && c.guid !== p.guid || j && !j.test(p.namespace) || d && d !== p.selector && ("**" !== d || !p.selector) || (o.splice(l--, 1), p.selector && o.delegateCount--, n.remove && n.remove.call(a, p));
            0 === o.length && k !== o.length && (n.teardown && n.teardown.call(a, j, q.handle) !== !1 || _.removeEvent(a, h, q.handle), delete m[h])
          } else for (h in m) _.event.remove(a, h + b[f], c, d, !0);
          _.isEmptyObject(m) && (delete q.handle, _.removeData(a, "events", !0))
        }
      },
      customEvent: { getData: !0, setData: !0, changeData: !0 },
      trigger: function (c, d, e, f) {
        if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
          var g, h, i, j, k, l, m, n, o, p, q = c.type || c, r = [];
          if (!Ha.test(q + _.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !_.event.customEvent[q] || _.event.global[q])) if (c = "object" == typeof c ? c[_.expando] ? c : new _.Event(q, c) : new _.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
            if (c.result = b, c.target || (c.target = e), d = null != d ? _.makeArray(d) : [], d.unshift(c), m = _.event.special[q] || {}, !m.trigger || m.trigger.apply(e, d) !== !1) {
              if (o = [[e, m.bindType || q]], !f && !m.noBubble && !_.isWindow(e)) {
                for (p = m.delegateType || q, j = Ha.test(p + q) ? e : e.parentNode, k = e; j; j = j.parentNode) o.push([j, p]), k = j;
                k === (e.ownerDocument || Q) && o.push([k.defaultView || k.parentWindow || a, p])
              }
              for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (_._data(j, "events") || {})[c.type] && _._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && _.acceptData(j) && n.apply && n.apply(j, d) === !1 && c.preventDefault();
              return c.type = q, f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && _.nodeName(e, "a") || !_.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !_.isWindow(e) && (k = e[l], k && (e[l] = null), _.event.triggered = q, e[q](), _.event.triggered = b, k && (e[l] = k)), c.result
            }
          } else {
            g = _.cache;
            for (i in g) g[i].events && g[i].events[q] && _.event.trigger(c, d, g[i].handle.elem, !0)
          }
        }
      },
      dispatch: function (c) {
        c = _.event.fix(c || a.event);
        var d, e, f, g, h, i, j, k, l, m = (_._data(this, "events") || {})[c.type] || [],
          n = m.delegateCount, o = W.call(arguments), p = !c.exclusive && !c.namespace,
          q = _.event.special[c.type] || {}, r = [];
        if (o[0] = c, c.delegateTarget = this, !q.preDispatch || q.preDispatch.call(this, c) !== !1) {
          if (n && (!c.button || "click" !== c.type)) for (f = c.target; f != this; f = f.parentNode || this) if (f.disabled !== !0 || "click" !== c.type) {
            for (h = {}, j = [], d = 0; n > d; d++) k = m[d], l = k.selector, h[l] === b && (h[l] = k.needsContext ? _(l, this).index(f) >= 0 : _.find(l, this, null, [f]).length), h[l] && j.push(k);
            j.length && r.push({ elem: f, matches: j })
          }
          for (m.length > n && r.push({
            elem: this,
            matches: m.slice(n)
          }), d = 0; d < r.length && !c.isPropagationStopped(); d++) for (i = r[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) k = i.matches[e], (p || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = ((_.event.special[k.origType] || {}).handle || k.handler).apply(i.elem, o), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
          return q.postDispatch && q.postDispatch.call(this, c), c.result
        }
      },
      props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (a, b) {
          return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (a, c) {
          var d, e, f, g = c.button, h = c.fromElement;
          return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || Q, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
        }
      },
      fix: function (a) {
        if (a[_.expando]) return a;
        var b, c, d = a, e = _.event.fixHooks[a.type] || {},
          f = e.props ? this.props.concat(e.props) : this.props;
        for (a = _.Event(d), b = f.length; b;) c = f[--b], a[c] = d[c];
        return a.target || (a.target = d.srcElement || Q), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, e.filter ? e.filter(a, d) : a
      },
      special: {
        load: { noBubble: !0 },
        focus: { delegateType: "focusin" },
        blur: { delegateType: "focusout" },
        beforeunload: {
          setup: function (a, b, c) {
            _.isWindow(this) && (this.onbeforeunload = c)
          }, teardown: function (a, b) {
            this.onbeforeunload === b && (this.onbeforeunload = null)
          }
        }
      },
      simulate: function (a, b, c, d) {
        var e = _.extend(new _.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
        d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
      }
    }, _.event.handle = _.event.dispatch, _.removeEvent = Q.removeEventListener ? function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
      var d = "on" + b;
      a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, _.Event = function (a, b) {
      return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? g : f) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = g;
        var a = this.originalEvent;
        a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
      }, stopPropagation: function () {
        this.isPropagationStopped = g;
        var a = this.originalEvent;
        a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
      }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = g, this.stopPropagation()
      }, isDefaultPrevented: f, isPropagationStopped: f, isImmediatePropagationStopped: f
    }, _.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (a, b) {
      _.event.special[a] = {
        delegateType: b, bindType: b, handle: function (a) {
          var c, d = this, e = a.relatedTarget, f = a.handleObj;
          f.selector;
          return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }
      }
    }), _.support.submitBubbles || (_.event.special.submit = {
      setup: function () {
        return _.nodeName(this, "form") ? !1 : void _.event.add(this, "click._submit keypress._submit", function (a) {
          var c = a.target, d = _.nodeName(c, "input") || _.nodeName(c, "button") ? c.form : b;
          d && !_._data(d, "_submit_attached") && (_.event.add(d, "submit._submit", function (a) {
            a._submit_bubble = !0
          }), _._data(d, "_submit_attached", !0))
        })
      }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && _.event.simulate("submit", this.parentNode, a, !0))
      }, teardown: function () {
        return _.nodeName(this, "form") ? !1 : void _.event.remove(this, "._submit")
      }
    }), _.support.changeBubbles || (_.event.special.change = {
      setup: function () {
        return Ca.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (_.event.add(this, "propertychange._change", function (a) {
          "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), _.event.add(this, "click._change", function (a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1), _.event.simulate("change", this, a, !0)
        })), !1) : void _.event.add(this, "beforeactivate._change", function (a) {
          var b = a.target;
          Ca.test(b.nodeName) && !_._data(b, "_change_attached") && (_.event.add(b, "change._change", function (a) {
            !this.parentNode || a.isSimulated || a.isTrigger || _.event.simulate("change", this.parentNode, a, !0)
          }), _._data(b, "_change_attached", !0))
        })
      }, handle: function (a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
      }, teardown: function () {
        return _.event.remove(this, "._change"), !Ca.test(this.nodeName)
      }
    }), _.support.focusinBubbles || _.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
      var c = 0, d = function (a) {
        _.event.simulate(b, a.target, _.event.fix(a), !0)
      };
      _.event.special[b] = {
        setup: function () {
          0 === c++ && Q.addEventListener(a, d, !0)
        }, teardown: function () {
          0 === --c && Q.removeEventListener(a, d, !0)
        }
      }
    }), _.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i;
        if ("object" == typeof a) {
          "string" != typeof c && (d = d || c, c = b);
          for (i in a) this.on(i, c, d, a[i], g);
          return this
        }
        if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = f; else if (!e) return this;
        return 1 === g && (h = e, e = function (a) {
          return _().off(a), h.apply(this, arguments)
        }, e.guid = h.guid || (h.guid = _.guid++)), this.each(function () {
          _.event.add(this, a, e, d, c)
        })
      }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
      }, off: function (a, c, d) {
        var e, g;
        if (a && a.preventDefault && a.handleObj) return e = a.handleObj, _(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
        if ("object" == typeof a) {
          for (g in a) this.off(g, c, a[g]);
          return this
        }
        return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = f), this.each(function () {
          _.event.remove(this, a, d, c)
        })
      }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
      }, unbind: function (a, b) {
        return this.off(a, null, b)
      }, live: function (a, b, c) {
        return _(this.context).on(a, this.selector, b, c), this
      }, die: function (a, b) {
        return _(this.context).off(a, this.selector || "**", b), this
      }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
      }, undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }, trigger: function (a, b) {
        return this.each(function () {
          _.event.trigger(a, b, this)
        })
      }, triggerHandler: function (a, b) {
        return this[0] ? _.event.trigger(a, b, this[0], !0) : void 0
      }, toggle: function (a) {
        var b = arguments, c = a.guid || _.guid++, d = 0, e = function (c) {
          var e = (_._data(this, "lastToggle" + a.guid) || 0) % d;
          return _._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
        };
        for (e.guid = c; d < b.length;) b[d++].guid = c;
        return this.click(e)
      }, hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      }
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
      _.fn[b] = function (a, c) {
        return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }, Fa.test(b) && (_.event.fixHooks[b] = _.event.keyHooks), Ga.test(b) && (_.event.fixHooks[b] = _.event.mouseHooks)
    }), function (a, b) {
      function c(a, b, c, d) {
        c = c || [], b = b || F;
        var e, f, g, h, i = b.nodeType;
        if (!a || "string" != typeof a) return c;
        if (1 !== i && 9 !== i) return [];
        if (g = v(b), !g && !d && (e = ca.exec(a))) if (h = e[1]) {
          if (9 === i) {
            if (f = b.getElementById(h), !f || !f.parentNode) return c;
            if (f.id === h) return c.push(f), c
          } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(h)) && w(b, f) && f.id === h) return c.push(f), c
        } else {
          if (e[2]) return K.apply(c, L.call(b.getElementsByTagName(a), 0)), c;
          if ((h = e[3]) && ma && b.getElementsByClassName) return K.apply(c, L.call(b.getElementsByClassName(h), 0)), c
        }
        return p(a.replace(Z, "$1"), b, c, d, g)
      }

      function d(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a
        }
      }

      function e(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a
        }
      }

      function f(a) {
        return N(function (b) {
          return b = +b, N(function (c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          })
        })
      }

      function g(a, b, c) {
        if (a === b) return c;
        for (var d = a.nextSibling; d;) {
          if (d === b) return -1;
          d = d.nextSibling
        }
        return 1
      }

      function h(a, b) {
        var d, e, f, g, h, i, j, k = Q[D][a];
        if (k) return b ? 0 : k.slice(0);
        for (h = a, i = [], j = t.preFilter; h;) {
          (!d || (e = $.exec(h))) && (e && (h = h.slice(e[0].length)), i.push(f = [])), d = !1, (e = aa.exec(h)) && (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = e[0].replace(Z, " "));
          for (g in t.filter) !(e = ha[g].exec(h)) || j[g] && !(e = j[g](e, F, !0)) || (f.push(d = new E(e.shift())), h = h.slice(d.length), d.type = g, d.matches = e);
          if (!d) break
        }
        return b ? h.length : h ? c.error(a) : Q(a, i).slice(0)
      }

      function i(a, b, c) {
        var d = b.dir, e = c && "parentNode" === b.dir, f = I++;
        return b.first ? function (b, c, f) {
          for (; b = b[d];) if (e || 1 === b.nodeType) return a(b, c, f)
        } : function (b, c, g) {
          if (g) {
            for (; b = b[d];) if ((e || 1 === b.nodeType) && a(b, c, g)) return b
          } else for (var h, i = H + " " + f + " ", j = i + r; b = b[d];) if (e || 1 === b.nodeType) {
            if ((h = b[D]) === j) return b.sizset;
            if ("string" == typeof h && 0 === h.indexOf(i)) {
              if (b.sizset) return b
            } else {
              if (b[D] = j, a(b, c, g)) return b.sizset = !0, b;
              b.sizset = !1
            }
          }
        }
      }

      function j(a) {
        return a.length > 1 ? function (b, c, d) {
          for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
          return !0
        } : a[0]
      }

      function k(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
      }

      function l(a, b, c, d, e, f) {
        return d && !d[D] && (d = l(d)), e && !e[D] && (e = l(e, f)), N(function (f, g, h, i) {
          if (!f || !e) {
            var j, l, m, n = [], p = [], q = g.length,
              r = f || o(b || "*", h.nodeType ? [h] : h, [], f),
              s = !a || !f && b ? r : k(r, n, a, h, i), t = c ? e || (f ? a : q || d) ? [] : g : s;
            if (c && c(s, t, h, i), d) for (m = k(t, p), d(m, [], h, i), j = m.length; j--;) (l = m[j]) && (t[p[j]] = !(s[p[j]] = l));
            if (f) for (j = a && t.length; j--;) (l = t[j]) && (f[n[j]] = !(g[n[j]] = l)); else t = k(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, i) : K.apply(g, t)
          }
        })
      }

      function m(a) {
        for (var b, c, d, e = a.length, f = t.relative[a[0].type], g = f || t.relative[" "], h = f ? 1 : 0, k = i(function (a) {
          return a === b
        }, g, !0), n = i(function (a) {
          return M.call(b, a) > -1
        }, g, !0), o = [function (a, c, d) {
          return !f && (d || c !== A) || ((b = c).nodeType ? k(a, c, d) : n(a, c, d))
        }]; e > h; h++) if (c = t.relative[a[h].type]) o = [i(j(o), c)]; else {
          if (c = t.filter[a[h].type].apply(null, a[h].matches), c[D]) {
            for (d = ++h; e > d && !t.relative[a[d].type]; d++) ;
            return l(h > 1 && j(o), h > 1 && a.slice(0, h - 1).join("").replace(Z, "$1"), c, d > h && m(a.slice(h, d)), e > d && m(a = a.slice(d)), e > d && a.join(""))
          }
          o.push(c)
        }
        return j(o)
      }

      function n(a, b) {
        var d = b.length > 0, e = a.length > 0, f = function (g, h, i, j, l) {
          var m, n, o, p = [], q = 0, s = "0", u = g && [], v = null != l, w = A,
            x = g || e && t.find.TAG("*", l && h.parentNode || h), y = H += null == w ? 1 : Math.E;
          for (v && (A = h !== F && h, r = f.el); null != (m = x[s]); s++) {
            if (e && m) {
              for (n = 0; o = a[n]; n++) if (o(m, h, i)) {
                j.push(m);
                break
              }
              v && (H = y, r = ++f.el)
            }
            d && ((m = !o && m) && q--, g && u.push(m))
          }
          if (q += s, d && s !== q) {
            for (n = 0; o = b[n]; n++) o(u, p, h, i);
            if (g) {
              if (q > 0) for (; s--;) u[s] || p[s] || (p[s] = J.call(j));
              p = k(p)
            }
            K.apply(j, p), v && !g && p.length > 0 && q + b.length > 1 && c.uniqueSort(j)
          }
          return v && (H = y, A = w), u
        };
        return f.el = 0, d ? N(f) : f
      }

      function o(a, b, d, e) {
        for (var f = 0, g = b.length; g > f; f++) c(a, b[f], d, e);
        return d
      }

      function p(a, b, c, d, e) {
        var f, g, i, j, k, l = h(a);
        l.length;
        if (!d && 1 === l.length) {
          if (g = l[0] = l[0].slice(0), g.length > 2 && "ID" === (i = g[0]).type && 9 === b.nodeType && !e && t.relative[g[1].type]) {
            if (b = t.find.ID(i.matches[0].replace(ga, ""), b, e)[0], !b) return c;
            a = a.slice(g.shift().length)
          }
          for (f = ha.POS.test(a) ? -1 : g.length - 1; f >= 0 && (i = g[f], !t.relative[j = i.type]); f--) if ((k = t.find[j]) && (d = k(i.matches[0].replace(ga, ""), da.test(g[0].type) && b.parentNode || b, e))) {
            if (g.splice(f, 1), a = d.length && g.join(""), !a) return K.apply(c, L.call(d, 0)), c;
            break
          }
        }
        return x(a, l)(d, b, e, c, da.test(a)), c
      }

      function q() {
      }

      var r, s, t, u, v, w, x, y, z, A, B = !0, C = "undefined",
        D = ("sizcache" + Math.random()).replace(".", ""), E = String, F = a.document,
        G = F.documentElement, H = 0, I = 0, J = [].pop, K = [].push, L = [].slice,
        M = [].indexOf || function (a) {
          for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
          return -1
        }, N = function (a, b) {
          return a[D] = null == b || b, a
        }, O = function () {
          var a = {}, b = [];
          return N(function (c, d) {
            return b.push(c) > t.cacheLength && delete a[b.shift()], a[c] = d
          }, a)
        }, P = O(), Q = O(), R = O(), S = "[\\x20\\t\\r\\n\\f]",
        T = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", U = T.replace("w", "w#"), V = "([*^$|!~]?=)",
        W = "\\[" + S + "*(" + T + ")" + S + "*(?:" + V + S + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + U + ")|)|)" + S + "*\\]",
        X = ":(" + T + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + W + ")|[^:]|\\\\.)*|.*))\\)|)",
        Y = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + S + "*((?:-\\d)?\\d*)" + S + "*\\)|)(?=[^-]|$)",
        Z = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g"),
        $ = new RegExp("^" + S + "*," + S + "*"),
        aa = new RegExp("^" + S + "*([\\x20\\t\\r\\n\\f>+~])" + S + "*"), ba = new RegExp(X),
        ca = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, da = /[\x20\t\r\n\f]*[+~]/, ea = /h\d/i,
        fa = /input|select|textarea|button/i, ga = /\\(?!\\)/g, ha = {
          ID: new RegExp("^#(" + T + ")"),
          CLASS: new RegExp("^\\.(" + T + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + T + ")['\"]?\\]"),
          TAG: new RegExp("^(" + T.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + W),
          PSEUDO: new RegExp("^" + X),
          POS: new RegExp(Y, "i"),
          CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + S + "*(even|odd|(([+-]|)(\\d*)n|)" + S + "*(?:([+-]|)" + S + "*(\\d+)|))" + S + "*\\)|)", "i"),
          needsContext: new RegExp("^" + S + "*[>+~]|" + Y, "i")
        }, ia = function (a) {
          var b = F.createElement("div");
          try {
            return a(b)
          } catch (c) {
            return !1
          } finally {
            b = null
          }
        }, ja = ia(function (a) {
          return a.appendChild(F.createComment("")), !a.getElementsByTagName("*").length
        }), ka = ia(function (a) {
          return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== C && "#" === a.firstChild.getAttribute("href")
        }), la = ia(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return "boolean" !== b && "string" !== b
        }), ma = ia(function (a) {
          return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1
        }), na = ia(function (a) {
          a.id = D + 0, a.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", G.insertBefore(a, G.firstChild);
          var b = F.getElementsByName && F.getElementsByName(D).length === 2 + F.getElementsByName(D + 0).length;
          return s = !F.getElementById(D), G.removeChild(a), b
        });
      try {
        L.call(G.childNodes, 0)[0].nodeType
      } catch (oa) {
        L = function (a) {
          for (var b, c = []; b = this[a]; a++) c.push(b);
          return c
        }
      }
      c.matches = function (a, b) {
        return c(a, null, null, b)
      }, c.matchesSelector = function (a, b) {
        return c(b, null, null, [a]).length > 0
      }, u = c.getText = function (a) {
        var b, c = "", d = 0, e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += u(a)
          } else if (3 === e || 4 === e) return a.nodeValue
        } else for (; b = a[d]; d++) c += u(b);
        return c
      }, v = c.isXML = function (a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, w = c.contains = G.contains ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
        return a === d || !!(d && 1 === d.nodeType && c.contains && c.contains(d))
      } : G.compareDocumentPosition ? function (a, b) {
        return b && !!(16 & a.compareDocumentPosition(b))
      } : function (a, b) {
        for (; b = b.parentNode;) if (b === a) return !0;
        return !1
      }, c.attr = function (a, b) {
        var c, d = v(a);
        return d || (b = b.toLowerCase()), (c = t.attrHandle[b]) ? c(a) : d || la ? a.getAttribute(b) : (c = a.getAttributeNode(b), c ? "boolean" == typeof a[b] ? a[b] ? b : null : c.specified ? c.value : null : null)
      }, t = c.selectors = {
        cacheLength: 50,
        createPseudo: N,
        match: ha,
        attrHandle: ka ? {} : {
          href: function (a) {
            return a.getAttribute("href", 2)
          }, type: function (a) {
            return a.getAttribute("type")
          }
        },
        find: {
          ID: s ? function (a, b, c) {
            if (typeof b.getElementById !== C && !c) {
              var d = b.getElementById(a);
              return d && d.parentNode ? [d] : []
            }
          } : function (a, c, d) {
            if (typeof c.getElementById !== C && !d) {
              var e = c.getElementById(a);
              return e ? e.id === a || typeof e.getAttributeNode !== C && e.getAttributeNode("id").value === a ? [e] : b : []
            }
          }, TAG: ja ? function (a, b) {
            return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
          } : function (a, b) {
            var c = b.getElementsByTagName(a);
            if ("*" === a) {
              for (var d, e = [], f = 0; d = c[f]; f++) 1 === d.nodeType && e.push(d);
              return e
            }
            return c
          }, NAME: na && function (a, b) {
            return typeof b.getElementsByName !== C ? b.getElementsByName(name) : void 0
          }, CLASS: ma && function (a, b, c) {
            return typeof b.getElementsByClassName === C || c ? void 0 : b.getElementsByClassName(a)
          }
        },
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function (a) {
            return a[1] = a[1].replace(ga, ""), a[3] = (a[4] || a[5] || "").replace(ga, ""), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          }, CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1] ? (a[2] || c.error(a[0]), a[3] = +(a[3] ? a[4] + (a[5] || 1) : 2 * ("even" === a[2] || "odd" === a[2])), a[4] = +(a[6] + a[7] || "odd" === a[2])) : a[2] && c.error(a[0]), a
          }, PSEUDO: function (a) {
            var b, c;
            return ha.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[3] : (b = a[4]) && (ba.test(b) && (c = h(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length) && (b = b.slice(0, c), a[0] = a[0].slice(0, c)), a[2] = b), a.slice(0, 3))
          }
        },
        filter: {
          ID: s ? function (a) {
            return a = a.replace(ga, ""), function (b) {
              return b.getAttribute("id") === a
            }
          } : function (a) {
            return a = a.replace(ga, ""), function (b) {
              var c = typeof b.getAttributeNode !== C && b.getAttributeNode("id");
              return c && c.value === a
            }
          }, TAG: function (a) {
            return "*" === a ? function () {
              return !0
            } : (a = a.replace(ga, "").toLowerCase(), function (b) {
              return b.nodeName && b.nodeName.toLowerCase() === a
            })
          }, CLASS: function (a) {
            var b = P[D][a];
            return b || (b = P(a, new RegExp("(^|" + S + ")" + a + "(" + S + "|$)"))), function (a) {
              return b.test(a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
            }
          }, ATTR: function (a, b, d) {
            return function (e, f) {
              var g = c.attr(e, a);
              return null == g ? "!=" === b : b ? (g += "", "=" === b ? g === d : "!=" === b ? g !== d : "^=" === b ? d && 0 === g.indexOf(d) : "*=" === b ? d && g.indexOf(d) > -1 : "$=" === b ? d && g.substr(g.length - d.length) === d : "~=" === b ? (" " + g + " ").indexOf(d) > -1 : "|=" === b ? g === d || g.substr(0, d.length + 1) === d + "-" : !1) : !0
            }
          }, CHILD: function (a, b, c, d) {
            return "nth" === a ? function (a) {
              var b, e, f = a.parentNode;
              if (1 === c && 0 === d) return !0;
              if (f) for (e = 0, b = f.firstChild; b && (1 !== b.nodeType || (e++, a !== b)); b = b.nextSibling) ;
              return e -= d, e === c || e % c === 0 && e / c >= 0
            } : function (b) {
              var c = b;
              switch (a) {
                case"only":
                case"first":
                  for (; c = c.previousSibling;) if (1 === c.nodeType) return !1;
                  if ("first" === a) return !0;
                  c = b;
                case"last":
                  for (; c = c.nextSibling;) if (1 === c.nodeType) return !1;
                  return !0
              }
            }
          }, PSEUDO: function (a, b) {
            var d,
              e = t.pseudos[a] || t.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
            return e[D] ? e(b) : e.length > 1 ? (d = [a, a, "", b], t.setFilters.hasOwnProperty(a.toLowerCase()) ? N(function (a, c) {
              for (var d, f = e(a, b), g = f.length; g--;) d = M.call(a, f[g]), a[d] = !(c[d] = f[g])
            }) : function (a) {
              return e(a, 0, d)
            }) : e
          }
        },
        pseudos: {
          not: N(function (a) {
            var b = [], c = [], d = x(a.replace(Z, "$1"));
            return d[D] ? N(function (a, b, c, e) {
              for (var f, g = d(a, null, e, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
            }) : function (a, e, f) {
              return b[0] = a, d(b, null, f, c), !c.pop()
            }
          }),
          has: N(function (a) {
            return function (b) {
              return c(a, b).length > 0
            }
          }),
          contains: N(function (a) {
            return function (b) {
              return (b.textContent || b.innerText || u(b)).indexOf(a) > -1
            }
          }),
          enabled: function (a) {
            return a.disabled === !1
          },
          disabled: function (a) {
            return a.disabled === !0
          },
          checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          parent: function (a) {
            return !t.pseudos.empty(a)
          },
          empty: function (a) {
            var b;
            for (a = a.firstChild; a;) {
              if (a.nodeName > "@" || 3 === (b = a.nodeType) || 4 === b) return !1;
              a = a.nextSibling
            }
            return !0
          },
          header: function (a) {
            return ea.test(a.nodeName)
          },
          text: function (a) {
            var b, c;
            return "input" === a.nodeName.toLowerCase() && "text" === (b = a.type) && (null == (c = a.getAttribute("type")) || c.toLowerCase() === b)
          },
          radio: d("radio"),
          checkbox: d("checkbox"),
          file: d("file"),
          password: d("password"),
          image: d("image"),
          submit: e("submit"),
          reset: e("reset"),
          button: function (a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          input: function (a) {
            return fa.test(a.nodeName)
          },
          focus: function (a) {
            var b = a.ownerDocument;
            return a === b.activeElement && (!b.hasFocus || b.hasFocus()) && !(!a.type && !a.href)
          },
          active: function (a) {
            return a === a.ownerDocument.activeElement
          },
          first: f(function (a, b, c) {
            return [0]
          }),
          last: f(function (a, b, c) {
            return [b - 1]
          }),
          eq: f(function (a, b, c) {
            return [0 > c ? c + b : c]
          }),
          even: f(function (a, b, c) {
            for (var d = 0; b > d; d += 2) a.push(d);
            return a
          }),
          odd: f(function (a, b, c) {
            for (var d = 1; b > d; d += 2) a.push(d);
            return a
          }),
          lt: f(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a
          }),
          gt: f(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a
          })
        }
      }, y = G.compareDocumentPosition ? function (a, b) {
        return a === b ? (z = !0, 0) : (a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) : a.compareDocumentPosition) ? -1 : 1
      } : function (a, b) {
        if (a === b) return z = !0, 0;
        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
        var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
        if (h === i) return g(a, b);
        if (!h) return -1;
        if (!i) return 1;
        for (; j;) e.unshift(j), j = j.parentNode;
        for (j = i; j;) f.unshift(j), j = j.parentNode;
        c = e.length, d = f.length;
        for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return g(e[k], f[k]);
        return k === c ? g(a, f[k], -1) : g(e[k], b, 1)
      }, [0, 0].sort(y), B = !z, c.uniqueSort = function (a) {
        var b, c = 1;
        if (z = B, a.sort(y), z) for (; b = a[c]; c++) b === a[c - 1] && a.splice(c--, 1);
        return a
      }, c.error = function (a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, x = c.compile = function (a, b) {
        var c, d = [], e = [], f = R[D][a];
        if (!f) {
          for (b || (b = h(a)), c = b.length; c--;) f = m(b[c]), f[D] ? d.push(f) : e.push(f);
          f = R(a, n(e, d))
        }
        return f
      }, F.querySelectorAll && !function () {
        var a, b = p, d = /'|\\/g, e = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          f = [":focus"], g = [":active", ":focus"],
          i = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector;
        ia(function (a) {
          a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || f.push("\\[" + S + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || f.push(":checked")
        }), ia(function (a) {
          a.innerHTML = "<p test=''></p>", a.querySelectorAll("[test^='']").length && f.push("[*^$]=" + S + "*(?:\"\"|'')"), a.innerHTML = "<input type='hidden'/>", a.querySelectorAll(":enabled").length || f.push(":enabled", ":disabled")
        }), f = new RegExp(f.join("|")), p = function (a, c, e, g, i) {
          if (!(g || i || f && f.test(a))) {
            var j, k, l = !0, m = D, n = c, o = 9 === c.nodeType && a;
            if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
              for (j = h(a), (l = c.getAttribute("id")) ? m = l.replace(d, "\\$&") : c.setAttribute("id", m), m = "[id='" + m + "'] ", k = j.length; k--;) j[k] = m + j[k].join("");
              n = da.test(a) && c.parentNode || c, o = j.join(",")
            }
            if (o) try {
              return K.apply(e, L.call(n.querySelectorAll(o), 0)), e
            } catch (p) {
            } finally {
              l || c.removeAttribute("id")
            }
          }
          return b(a, c, e, g, i)
        }, i && (ia(function (b) {
          a = i.call(b, "div");
          try {
            i.call(b, "[test!='']:sizzle"), g.push("!=", X)
          } catch (c) {
          }
        }), g = new RegExp(g.join("|")), c.matchesSelector = function (b, d) {
          if (d = d.replace(e, "='$1']"), !(v(b) || g.test(d) || f && f.test(d))) try {
            var h = i.call(b, d);
            if (h || a || b.document && 11 !== b.document.nodeType) return h
          } catch (j) {
          }
          return c(d, null, null, [b]).length > 0
        })
      }(), t.pseudos.nth = t.pseudos.eq, t.filters = q.prototype = t.pseudos, t.setFilters = new q, c.attr = _.attr, _.find = c, _.expr = c.selectors, _.expr[":"] = _.expr.pseudos, _.unique = c.uniqueSort, _.text = c.getText, _.isXMLDoc = c.isXML, _.contains = c.contains
    }(a);
    var Ja = /Until$/, Ka = /^(?:parents|prev(?:Until|All))/, La = /^.[^:#\[\.,]*$/,
      Ma = _.expr.match.needsContext, Na = { children: !0, contents: !0, next: !0, prev: !0 };
    _.fn.extend({
      find: function (a) {
        var b, c, d, e, f, g, h = this;
        if ("string" != typeof a) return _(a).filter(function () {
          for (b = 0, c = h.length; c > b; b++) if (_.contains(h[b], this)) return !0
        });
        for (g = this.pushStack("", "find", a), b = 0, c = this.length; c > b; b++) if (d = g.length, _.find(a, this[b], g), b > 0) for (e = d; e < g.length; e++) for (f = 0; d > f; f++) if (g[f] === g[e]) {
          g.splice(e--, 1);
          break
        }
        return g
      }, has: function (a) {
        var b, c = _(a, this), d = c.length;
        return this.filter(function () {
          for (b = 0; d > b; b++) if (_.contains(this, c[b])) return !0;
        })
      }, not: function (a) {
        return this.pushStack(k(this, a, !1), "not", a)
      }, filter: function (a) {
        return this.pushStack(k(this, a, !0), "filter", a)
      }, is: function (a) {
        return !!a && ("string" == typeof a ? Ma.test(a) ? _(a, this.context).index(this[0]) >= 0 : _.filter(a, this).length > 0 : this.filter(a).length > 0)
      }, closest: function (a, b) {
        for (var c, d = 0, e = this.length, f = [], g = Ma.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
          if (g ? g.index(c) > -1 : _.find.matchesSelector(c, a)) {
            f.push(c);
            break
          }
          c = c.parentNode
        }
        return f = f.length > 1 ? _.unique(f) : f, this.pushStack(f, "closest", a)
      }, index: function (a) {
        return a ? "string" == typeof a ? _.inArray(this[0], _(a)) : _.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
      }, add: function (a, b) {
        var c = "string" == typeof a ? _(a, b) : _.makeArray(a && a.nodeType ? [a] : a),
          d = _.merge(this.get(), c);
        return this.pushStack(h(c[0]) || h(d[0]) ? d : _.unique(d))
      }, addBack: function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    }), _.fn.andSelf = _.fn.addBack, _.each({
      parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      }, parents: function (a) {
        return _.dir(a, "parentNode")
      }, parentsUntil: function (a, b, c) {
        return _.dir(a, "parentNode", c)
      }, next: function (a) {
        return j(a, "nextSibling")
      }, prev: function (a) {
        return j(a, "previousSibling")
      }, nextAll: function (a) {
        return _.dir(a, "nextSibling")
      }, prevAll: function (a) {
        return _.dir(a, "previousSibling")
      }, nextUntil: function (a, b, c) {
        return _.dir(a, "nextSibling", c)
      }, prevUntil: function (a, b, c) {
        return _.dir(a, "previousSibling", c)
      }, siblings: function (a) {
        return _.sibling((a.parentNode || {}).firstChild, a)
      }, children: function (a) {
        return _.sibling(a.firstChild)
      }, contents: function (a) {
        return _.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : _.merge([], a.childNodes)
      }
    }, function (a, b) {
      _.fn[a] = function (c, d) {
        var e = _.map(this, b, c);
        return Ja.test(a) || (d = c), d && "string" == typeof d && (e = _.filter(d, e)), e = this.length > 1 && !Na[a] ? _.unique(e) : e, this.length > 1 && Ka.test(a) && (e = e.reverse()), this.pushStack(e, a, W.call(arguments).join(","))
      }
    }), _.extend({
      filter: function (a, b, c) {
        return c && (a = ":not(" + a + ")"), 1 === b.length ? _.find.matchesSelector(b[0], a) ? [b[0]] : [] : _.find.matches(a, b)
      }, dir: function (a, c, d) {
        for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !_(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
        return e
      }, sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
      }
    });
    var Oa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Pa = / jQuery\d+="(?:null|\d+)"/g, Qa = /^\s+/,
      Ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Sa = /<([\w:]+)/, Ta = /<tbody/i, Ua = /<|&#?\w+;/, Va = /<(?:script|style|link)/i,
      Wa = /<(?:script|object|embed|option|style)/i, Xa = new RegExp("<(?:" + Oa + ")[\\s/>]", "i"),
      Ya = /^(?:checkbox|radio)$/, Za = /checked\s*(?:[^=]|=\s*.checked.)/i,
      $a = /\/(java|ecma)script/i, _a = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, ab = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
      }, bb = l(Q), cb = bb.appendChild(Q.createElement("div"));
    ab.optgroup = ab.option, ab.tbody = ab.tfoot = ab.colgroup = ab.caption = ab.thead, ab.th = ab.td, _.support.htmlSerialize || (ab._default = [1, "X<div>", "</div>"]), _.fn.extend({
      text: function (a) {
        return _.access(this, function (a) {
          return a === b ? _.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(a))
        }, null, a, arguments.length)
      }, wrapAll: function (a) {
        if (_.isFunction(a)) return this.each(function (b) {
          _(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
          var b = _(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
            for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
            return a
          }).append(this)
        }
        return this
      }, wrapInner: function (a) {
        return _.isFunction(a) ? this.each(function (b) {
          _(this).wrapInner(a.call(this, b))
        }) : this.each(function () {
          var b = _(this), c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      }, wrap: function (a) {
        var b = _.isFunction(a);
        return this.each(function (c) {
          _(this).wrapAll(b ? a.call(this, c) : a)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
        }).end()
      }, append: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(a)
        })
      }, prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(a, this.firstChild)
        })
      }, before: function () {
        if (!h(this[0])) return this.domManip(arguments, !1, function (a) {
          this.parentNode.insertBefore(a, this)
        });
        if (arguments.length) {
          var a = _.clean(arguments);
          return this.pushStack(_.merge(a, this), "before", this.selector)
        }
      }, after: function () {
        if (!h(this[0])) return this.domManip(arguments, !1, function (a) {
          this.parentNode.insertBefore(a, this.nextSibling)
        });
        if (arguments.length) {
          var a = _.clean(arguments);
          return this.pushStack(_.merge(this, a), "after", this.selector)
        }
      }, remove: function (a, b) {
        for (var c, d = 0; null != (c = this[d]); d++) (!a || _.filter(a, [c]).length) && (b || 1 !== c.nodeType || (_.cleanData(c.getElementsByTagName("*")), _.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
        return this
      }, empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && _.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
        return this
      }, clone: function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
          return _.clone(this, a, b)
        })
      }, html: function (a) {
        return _.access(this, function (a) {
          var c = this[0] || {}, d = 0, e = this.length;
          if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Pa, "") : b;
          if ("string" == typeof a && !Va.test(a) && (_.support.htmlSerialize || !Xa.test(a)) && (_.support.leadingWhitespace || !Qa.test(a)) && !ab[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = a.replace(Ra, "<$1></$2>");
            try {
              for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (_.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
              c = 0
            } catch (f) {
            }
          }
          c && this.empty().append(a)
        }, null, a, arguments.length)
      }, replaceWith: function (a) {
        return h(this[0]) ? this.length ? this.pushStack(_(_.isFunction(a) ? a() : a), "replaceWith", a) : this : _.isFunction(a) ? this.each(function (b) {
          var c = _(this), d = c.html();
          c.replaceWith(a.call(this, b, d))
        }) : ("string" != typeof a && (a = _(a).detach()), this.each(function () {
          var b = this.nextSibling, c = this.parentNode;
          _(this).remove(), b ? _(b).before(a) : _(c).append(a)
        }))
      }, detach: function (a) {
        return this.remove(a, !0)
      }, domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e, f, g, h, i = 0, j = a[0], k = [], l = this.length;
        if (!_.support.checkClone && l > 1 && "string" == typeof j && Za.test(j)) return this.each(function () {
          _(this).domManip(a, c, d)
        });
        if (_.isFunction(j)) return this.each(function (e) {
          var f = _(this);
          a[0] = j.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
        });
        if (this[0]) {
          if (e = _.buildFragment(a, this, k), g = e.fragment, f = g.firstChild, 1 === g.childNodes.length && (g = f), f) for (c = c && _.nodeName(f, "tr"), h = e.cacheable || l - 1; l > i; i++) d.call(c && _.nodeName(this[i], "table") ? m(this[i], "tbody") : this[i], i === h ? g : _.clone(g, !0, !0));
          g = f = null, k.length && _.each(k, function (a, b) {
            b.src ? _.ajax ? _.ajax({
              url: b.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              "throws": !0
            }) : _.error("no ajax") : _.globalEval((b.text || b.textContent || b.innerHTML || "").replace(_a, "")), b.parentNode && b.parentNode.removeChild(b)
          })
        }
        return this
      }
    }), _.buildFragment = function (a, c, d) {
      var e, f, g, h = a[0];
      return c = c || Q, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, !(1 === a.length && "string" == typeof h && h.length < 512 && c === Q && "<" === h.charAt(0)) || Wa.test(h) || !_.support.checkClone && Za.test(h) || !_.support.html5Clone && Xa.test(h) || (f = !0, e = _.fragments[h], g = e !== b), e || (e = c.createDocumentFragment(), _.clean(a, c, e, d), f && (_.fragments[h] = g && e)), {
        fragment: e,
        cacheable: f
      }
    }, _.fragments = {}, _.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (a, b) {
      _.fn[a] = function (c) {
        var d, e = 0, f = [], g = _(c), h = g.length, i = 1 === this.length && this[0].parentNode;
        if ((null == i || i && 11 === i.nodeType && 1 === i.childNodes.length) && 1 === h) return g[b](this[0]), this;
        for (; h > e; e++) d = (e > 0 ? this.clone(!0) : this).get(), _(g[e])[b](d), f = f.concat(d);
        return this.pushStack(f, a, g.selector)
      }
    }), _.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        if (_.support.html5Clone || _.isXMLDoc(a) || !Xa.test("<" + a.nodeName + ">") ? g = a.cloneNode(!0) : (cb.innerHTML = a.outerHTML, cb.removeChild(g = cb.firstChild)), !(_.support.noCloneEvent && _.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a))) for (o(a, g), d = p(a), e = p(g), f = 0; d[f]; ++f) e[f] && o(d[f], e[f]);
        if (b && (n(a, g), c)) for (d = p(a), e = p(g), f = 0; d[f]; ++f) n(d[f], e[f]);
        return d = e = null, g
      }, clean: function (a, b, c, d) {
        var e, f, g, h, i, j, k, m, n, o, p, r = b === Q && bb, s = [];
        for (b && "undefined" != typeof b.createDocumentFragment || (b = Q), e = 0; null != (g = a[e]); e++) if ("number" == typeof g && (g += ""), g) {
          if ("string" == typeof g) if (Ua.test(g)) {
            for (r = r || l(b), k = b.createElement("div"), r.appendChild(k), g = g.replace(Ra, "<$1></$2>"), h = (Sa.exec(g) || ["", ""])[1].toLowerCase(), i = ab[h] || ab._default, j = i[0], k.innerHTML = i[1] + g + i[2]; j--;) k = k.lastChild;
            if (!_.support.tbody) for (m = Ta.test(g), n = "table" !== h || m ? "<table>" !== i[1] || m ? [] : k.childNodes : k.firstChild && k.firstChild.childNodes, f = n.length - 1; f >= 0; --f) _.nodeName(n[f], "tbody") && !n[f].childNodes.length && n[f].parentNode.removeChild(n[f]);
            !_.support.leadingWhitespace && Qa.test(g) && k.insertBefore(b.createTextNode(Qa.exec(g)[0]), k.firstChild), g = k.childNodes, k.parentNode.removeChild(k)
          } else g = b.createTextNode(g);
          g.nodeType ? s.push(g) : _.merge(s, g)
        }
        if (k && (g = k = r = null), !_.support.appendChecked) for (e = 0; null != (g = s[e]); e++) _.nodeName(g, "input") ? q(g) : "undefined" != typeof g.getElementsByTagName && _.grep(g.getElementsByTagName("input"), q);
        if (c) for (o = function (a) {
          return !a.type || $a.test(a.type) ? d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild(a) : void 0
        }, e = 0; null != (g = s[e]); e++) _.nodeName(g, "script") && o(g) || (c.appendChild(g), "undefined" != typeof g.getElementsByTagName && (p = _.grep(_.merge([], g.getElementsByTagName("script")), o), s.splice.apply(s, [e + 1, 0].concat(p)), e += p.length));
        return s
      }, cleanData: function (a, b) {
        for (var c, d, e, f, g = 0, h = _.expando, i = _.cache, j = _.support.deleteExpando, k = _.event.special; null != (e = a[g]); g++) if ((b || _.acceptData(e)) && (d = e[h], c = d && i[d])) {
          if (c.events) for (f in c.events) k[f] ? _.event.remove(e, f) : _.removeEvent(e, f, c.handle);
          i[d] && (delete i[d], j ? delete e[h] : e.removeAttribute ? e.removeAttribute(h) : e[h] = null, _.deletedIds.push(d))
        }
      }
    }), function () {
      var a, b;
      _.uaMatch = function (a) {
        a = a.toLowerCase();
        var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return { browser: b[1] || "", version: b[2] || "0" }
      }, a = _.uaMatch(S.userAgent), b = {}, a.browser && (b[a.browser] = !0, b.version = a.version), b.chrome ? b.webkit = !0 : b.webkit && (b.safari = !0), _.browser = b, _.sub = function () {
        function a(b, c) {
          return new a.fn.init(b, c)
        }

        _.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (c, d) {
          return d && d instanceof _ && !(d instanceof a) && (d = a(d)), _.fn.init.call(this, c, d, b)
        }, a.fn.init.prototype = a.fn;
        var b = a(Q);
        return a
      }
    }();
    var db, eb, fb, gb = /alpha\([^)]*\)/i, hb = /opacity=([^)]*)/,
      ib = /^(top|right|bottom|left)$/, jb = /^(none|table(?!-c[ea]).+)/, kb = /^margin/,
      lb = new RegExp("^(" + aa + ")(.*)$", "i"),
      mb = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      nb = new RegExp("^([-+])=(" + aa + ")", "i"), ob = {},
      pb = { position: "absolute", visibility: "hidden", display: "block" },
      qb = { letterSpacing: 0, fontWeight: 400 }, rb = ["Top", "Right", "Bottom", "Left"],
      sb = ["Webkit", "O", "Moz", "ms"], tb = _.fn.toggle;
    _.fn.extend({
      css: function (a, c) {
        return _.access(this, function (a, c, d) {
          return d !== b ? _.style(a, c, d) : _.css(a, c)
        }, a, c, arguments.length > 1)
      }, show: function () {
        return t(this, !0)
      }, hide: function () {
        return t(this)
      }, toggle: function (a, b) {
        var c = "boolean" == typeof a;
        return _.isFunction(a) && _.isFunction(b) ? tb.apply(this, arguments) : this.each(function () {
          (c ? a : s(this)) ? _(this).show() : _(this).hide()
        })
      }
    }), _.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = db(a, "opacity");
              return "" === c ? "1" : c
            }
          }
        }
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: { "float": _.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (a, c, d, e) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var f, g, h, i = _.camelCase(c), j = a.style;
          if (c = _.cssProps[i] || (_.cssProps[i] = r(j, i)), h = _.cssHooks[c] || _.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
          if (g = typeof d, "string" === g && (f = nb.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(_.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || _.cssNumber[i] || (d += "px"), h && "set" in h && (d = h.set(a, d, e)) === b))) try {
            j[c] = d
          } catch (k) {
          }
        }
      },
      css: function (a, c, d, e) {
        var f, g, h, i = _.camelCase(c);
        return c = _.cssProps[i] || (_.cssProps[i] = r(a.style, i)), h = _.cssHooks[c] || _.cssHooks[i], h && "get" in h && (f = h.get(a, !0, e)), f === b && (f = db(a, c)), "normal" === f && c in qb && (f = qb[c]), d || e !== b ? (g = parseFloat(f), d || _.isNumeric(g) ? g || 0 : f) : f
      },
      swap: function (a, b, c) {
        var d, e, f = {};
        for (e in b) f[e] = a.style[e], a.style[e] = b[e];
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d
      }
    }), a.getComputedStyle ? db = function (b, c) {
      var d, e, f, g, h = a.getComputedStyle(b, null), i = b.style;
      return h && (d = h[c], "" !== d || _.contains(b.ownerDocument, b) || (d = _.style(b, c)), mb.test(d) && kb.test(c) && (e = i.width, f = i.minWidth, g = i.maxWidth, i.minWidth = i.maxWidth = i.width = d, d = h.width, i.width = e, i.minWidth = f, i.maxWidth = g)), d
    } : Q.documentElement.currentStyle && (db = function (a, b) {
      var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
      return null == e && f && f[b] && (e = f[b]), mb.test(e) && !ib.test(b) && (c = f.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), f.left = "fontSize" === b ? "1em" : e, e = f.pixelLeft + "px", f.left = c, d && (a.runtimeStyle.left = d)), "" === e ? "auto" : e
    }), _.each(["height", "width"], function (a, b) {
      _.cssHooks[b] = {
        get: function (a, c, d) {
          return c ? 0 === a.offsetWidth && jb.test(db(a, "display")) ? _.swap(a, pb, function () {
            return w(a, b, d)
          }) : w(a, b, d) : void 0
        }, set: function (a, c, d) {
          return u(a, c, d ? v(a, b, d, _.support.boxSizing && "border-box" === _.css(a, "boxSizing")) : 0)
        }
      }
    }), _.support.opacity || (_.cssHooks.opacity = {
      get: function (a, b) {
        return hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
      }, set: function (a, b) {
        var c = a.style, d = a.currentStyle,
          e = _.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
        c.zoom = 1, b >= 1 && "" === _.trim(f.replace(gb, "")) && c.removeAttribute && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = gb.test(f) ? f.replace(gb, e) : f + " " + e)
      }
    }), _(function () {
      _.support.reliableMarginRight || (_.cssHooks.marginRight = {
        get: function (a, b) {
          return _.swap(a, { display: "inline-block" }, function () {
            return b ? db(a, "marginRight") : void 0
          })
        }
      }), !_.support.pixelPosition && _.fn.position && _.each(["top", "left"], function (a, b) {
        _.cssHooks[b] = {
          get: function (a, c) {
            if (c) {
              var d = db(a, b);
              return mb.test(d) ? _(a).position()[b] + "px" : d
            }
          }
        }
      })
    }), _.expr && _.expr.filters && (_.expr.filters.hidden = function (a) {
      return 0 === a.offsetWidth && 0 === a.offsetHeight || !_.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || db(a, "display"))
    }, _.expr.filters.visible = function (a) {
      return !_.expr.filters.hidden(a)
    }), _.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      _.cssHooks[a + b] = {
        expand: function (c) {
          var d, e = "string" == typeof c ? c.split(" ") : [c], f = {};
          for (d = 0; 4 > d; d++) f[a + rb[d] + b] = e[d] || e[d - 2] || e[0];
          return f
        }
      }, kb.test(a) || (_.cssHooks[a + b].set = u)
    });
    var ub = /%20/g, vb = /\[\]$/, wb = /\r?\n/g,
      xb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      yb = /^(?:select|textarea)/i;
    _.fn.extend({
      serialize: function () {
        return _.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          return this.elements ? _.makeArray(this.elements) : this
        }).filter(function () {
          return this.name && !this.disabled && (this.checked || yb.test(this.nodeName) || xb.test(this.type))
        }).map(function (a, b) {
          var c = _(this).val();
          return null == c ? null : _.isArray(c) ? _.map(c, function (a, c) {
            return { name: b.name, value: a.replace(wb, "\r\n") }
          }) : { name: b.name, value: c.replace(wb, "\r\n") }
        }).get()
      }
    }), _.param = function (a, c) {
      var d, e = [], f = function (a, b) {
        b = _.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
      if (c === b && (c = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function () {
        f(this.name, this.value)
      }); else for (d in a) y(d, a[d], c, f);
      return e.join("&").replace(ub, "+")
    };
    var zb, Ab, Bb = /#.*$/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Db = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/,
      Fb = /^\/\//, Gb = /\?/, Hb = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      Ib = /([?&])_=[^&]*/, Jb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Kb = _.fn.load,
      Lb = {}, Mb = {}, Nb = ["*/"] + ["*"];
    try {
      Ab = R.href
    } catch (Ob) {
      Ab = Q.createElement("a"), Ab.href = "", Ab = Ab.href
    }
    zb = Jb.exec(Ab.toLowerCase()) || [], _.fn.load = function (a, c, d) {
      if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
      if (!this.length) return this;
      var e, f, g, h = this, i = a.indexOf(" ");
      return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), _.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), _.ajax({
        url: a,
        type: f,
        dataType: "html",
        data: c,
        complete: function (a, b) {
          d && h.each(d, g || [a.responseText, b, a])
        }
      }).done(function (a) {
        g = arguments, h.html(e ? _("<div>").append(a.replace(Hb, "")).find(e) : a)
      }), this
    }, _.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
      _.fn[b] = function (a) {
        return this.on(b, a)
      }
    }), _.each(["get", "post"], function (a, c) {
      _[c] = function (a, d, e, f) {
        return _.isFunction(d) && (f = f || e, e = d, d = b), _.ajax({
          type: c,
          url: a,
          data: d,
          success: e,
          dataType: f
        })
      }
    }), _.extend({
      getScript: function (a, c) {
        return _.get(a, b, c, "script")
      },
      getJSON: function (a, b, c) {
        return _.get(a, b, c, "json")
      },
      ajaxSetup: function (a, b) {
        return b ? B(a, _.ajaxSettings) : (b = a, a = _.ajaxSettings), B(a, b), a
      },
      ajaxSettings: {
        url: Ab,
        isLocal: Db.test(zb[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": Nb
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": _.parseJSON,
          "text xml": _.parseXML
        },
        flatOptions: { context: !0, url: !0 }
      },
      ajaxPrefilter: z(Lb),
      ajaxTransport: z(Mb),
      ajax: function (a, c) {
        function d(a, c, d, g) {
          var j, l, s, t, v, x = c;
          2 !== u && (u = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0, d && (t = C(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (_.lastModified[e] = v), v = w.getResponseHeader("Etag"), v && (_.etag[e] = v)), 304 === a ? (x = "notmodified", j = !0) : (j = D(m, t), x = j.state, l = j.data, s = j.error, j = !s)) : (s = x, (!x || a) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --_.active || _.event.trigger("ajaxStop")))
        }

        "object" == typeof a && (c = a, a = b), c = c || {};
        var e, f, g, h, i, j, k, l, m = _.ajaxSetup({}, c), n = m.context || m,
          o = n !== m && (n.nodeType || n instanceof _) ? _(n) : _.event, p = _.Deferred(),
          q = _.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0,
          v = "canceled", w = {
            readyState: 0, setRequestHeader: function (a, b) {
              if (!u) {
                var c = a.toLowerCase();
                a = t[c] = t[c] || a, s[a] = b
              }
              return this
            }, getAllResponseHeaders: function () {
              return 2 === u ? f : null
            }, getResponseHeader: function (a) {
              var c;
              if (2 === u) {
                if (!g) for (g = {}; c = Cb.exec(f);) g[c[1].toLowerCase()] = c[2];
                c = g[a.toLowerCase()]
              }
              return c === b ? null : c
            }, overrideMimeType: function (a) {
              return u || (m.mimeType = a), this
            }, abort: function (a) {
              return a = a || v, h && h.abort(a), d(0, a), this
            }
          };
        if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function (a) {
            if (a) {
              var b;
              if (2 > u) for (b in a) r[b] = [r[b], a[b]]; else b = a[w.status], w.always(b)
            }
            return this
          }, m.url = ((a || m.url) + "").replace(Bb, "").replace(Fb, zb[1] + "//"), m.dataTypes = _.trim(m.dataType || "*").toLowerCase().split(ca), null == m.crossDomain && (j = Jb.exec(m.url.toLowerCase()) || !1, m.crossDomain = j && j.join(":") + (j[3] ? "" : "http:" === j[1] ? 80 : 443) !== zb.join(":") + (zb[3] ? "" : "http:" === zb[1] ? 80 : 443)), m.data && m.processData && "string" != typeof m.data && (m.data = _.param(m.data, m.traditional)), A(Lb, m, c, w), 2 === u) return w;
        if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Eb.test(m.type), k && 0 === _.active++ && _.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Gb.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
          var x = _.now(), y = m.url.replace(Ib, "$1_=" + x);
          m.url = y + (y === m.url ? (Gb.test(m.url) ? "&" : "?") + "_=" + x : "")
        }
        (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, _.lastModified[e] && w.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && w.setRequestHeader("If-None-Match", _.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : m.accepts["*"]);
        for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
        if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
        v = "abort";
        for (l in{ success: 1, error: 1, complete: 1 }) w[l](m[l]);
        if (h = A(Mb, m, c, w)) {
          w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function () {
            w.abort("timeout")
          }, m.timeout));
          try {
            u = 1, h.send(s, d)
          } catch (z) {
            if (!(2 > u)) throw z;
            d(-1, z)
          }
        } else d(-1, "No Transport");
        return w
      },
      active: 0,
      lastModified: {},
      etag: {}
    });
    var Pb = [], Qb = /\?/, Rb = /(=)\?(?=&|$)|\?\?/, Sb = _.now();
    _.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var a = Pb.pop() || _.expando + "_" + Sb++;
        return this[a] = !0, a
      }
    }), _.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f, g, h, i = c.data, j = c.url, k = c.jsonp !== !1, l = k && Rb.test(j),
        m = k && !l && "string" == typeof i && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(i);
      return "jsonp" === c.dataTypes[0] || l || m ? (f = c.jsonpCallback = _.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, g = a[f], l ? c.url = j.replace(Rb, "$1" + f) : m ? c.data = i.replace(Rb, "$1" + f) : k && (c.url += (Qb.test(j) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
        return h || _.error(f + " was not called"), h[0]
      }, c.dataTypes[0] = "json", a[f] = function () {
        h = arguments
      }, e.always(function () {
        a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Pb.push(f)), h && _.isFunction(g) && g(h[0]), h = g = b
      }), "script") : void 0
    }), _.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (a) {
          return _.globalEval(a), a
        }
      }
    }), _.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), _.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c, d = Q.head || Q.getElementsByTagName("head")[0] || Q.documentElement;
        return {
          send: function (e, f) {
            c = Q.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function (a, e) {
              (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
            }, d.insertBefore(c, d.firstChild)
          }, abort: function () {
            c && c.onload(0, 1)
          }
        }
      }
    });
    var Tb, Ub = a.ActiveXObject ? function () {
      for (var a in Tb) Tb[a](0, 1)
    } : !1, Vb = 0;
    _.ajaxSettings.xhr = a.ActiveXObject ? function () {
      return !this.isLocal && E() || F()
    } : E, function (a) {
      _.extend(_.support, { ajax: !!a, cors: !!a && "withCredentials" in a })
    }(_.ajaxSettings.xhr()), _.support.ajax && _.ajaxTransport(function (c) {
      if (!c.crossDomain || _.support.cors) {
        var d;
        return {
          send: function (e, f) {
            var g, h, i = c.xhr();
            if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (h in e) i.setRequestHeader(h, e[h])
            } catch (j) {
            }
            i.send(c.hasContent && c.data || null), d = function (a, e) {
              var h, j, k, l, m;
              try {
                if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = _.noop, Ub && delete Tb[g]), e) 4 !== i.readyState && i.abort(); else {
                  h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                  try {
                    l.text = i.responseText
                  } catch (a) {
                  }
                  try {
                    j = i.statusText
                  } catch (n) {
                    j = ""
                  }
                  h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                }
              } catch (o) {
                e || f(-1, o)
              }
              l && f(h, j, l, k)
            }, c.async ? 4 === i.readyState ? setTimeout(d, 0) : (g = ++Vb, Ub && (Tb || (Tb = {}, _(a).unload(Ub)), Tb[g] = d), i.onreadystatechange = d) : d()
          }, abort: function () {
            d && d(0, 1)
          }
        }
      }
    });
    var Wb, Xb, Yb = /^(?:toggle|show|hide)$/,
      Zb = new RegExp("^(?:([-+])=|)(" + aa + ")([a-z%]*)$", "i"), $b = /queueHooks$/, _b = [K],
      ac = {
        "*": [function (a, b) {
          var c, d, e = this.createTween(a, b), f = Zb.exec(b), g = e.cur(), h = +g || 0, i = 1,
            j = 20;
          if (f) {
            if (c = +f[2], d = f[3] || (_.cssNumber[a] ? "" : "px"), "px" !== d && h) {
              h = _.css(e.elem, a, !0) || c || 1;
              do {
                i = i || ".5", h /= i, _.style(e.elem, a, h + d);
              } while (i !== (i = e.cur() / g) && 1 !== i && --j)
            }
            e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
          }
          return e
        }]
      };
    _.Animation = _.extend(I, {
      tweener: function (a, b) {
        _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ac[c] = ac[c] || [], ac[c].unshift(b)
      }, prefilter: function (a, b) {
        b ? _b.unshift(a) : _b.push(a)
      }
    }), _.Tween = L, L.prototype = {
      constructor: L, init: function (a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
      }, cur: function () {
        var a = L.propHooks[this.prop];
        return a && a.get ? a.get(this) : L.propHooks._default.get(this)
      }, run: function (a) {
        var b, c = L.propHooks[this.prop];
        return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
      }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, !1, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
        }, set: function (a) {
          _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
        }
      }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
      set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, _.each(["toggle", "show", "hide"], function (a, b) {
      var c = _.fn[b];
      _.fn[b] = function (d, e, f) {
        return null == d || "boolean" == typeof d || !a && _.isFunction(d) && _.isFunction(e) ? c.apply(this, arguments) : this.animate(M(b, !0), d, e, f)
      }
    }), _.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(s).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d)
      }, animate: function (a, b, c, d) {
        var e = _.isEmptyObject(a), f = _.speed(b, c, d), g = function () {
          var b = I(this, _.extend({}, a), f);
          e && b.stop(!0)
        };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      }, stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d)
        };
        return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function () {
          var b = !0, c = null != a && a + "queueHooks", f = _.timers, g = _._data(this);
          if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && $b.test(c) && e(g[c]);
          for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
          (b || !d) && _.dequeue(this, a)
        })
      }
    }), _.each({
      slideDown: M("show"),
      slideUp: M("hide"),
      slideToggle: M("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function (a, b) {
      _.fn[a] = function (a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), _.speed = function (a, b, c) {
      var d = a && "object" == typeof a ? _.extend({}, a) : {
        complete: c || !c && b || _.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !_.isFunction(b) && b
      };
      return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
        _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
      }, d
    }, _.easing = {
      linear: function (a) {
        return a
      }, swing: function (a) {
        return .5 - Math.cos(a * Math.PI) / 2
      }
    }, _.timers = [], _.fx = L.prototype.init, _.fx.tick = function () {
      for (var a, b = _.timers, c = 0; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || _.fx.stop()
    }, _.fx.timer = function (a) {
      a() && _.timers.push(a) && !Xb && (Xb = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.interval = 13, _.fx.stop = function () {
      clearInterval(Xb), Xb = null
    }, _.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, _.fx.step = {}, _.expr && _.expr.filters && (_.expr.filters.animated = function (a) {
      return _.grep(_.timers, function (b) {
        return a === b.elem
      }).length
    });
    var bc = /^(?:body|html)$/i;
    _.fn.offset = function (a) {
      if (arguments.length) return a === b ? this : this.each(function (b) {
        _.offset.setOffset(this, a, b)
      });
      var c, d, e, f, g, h, i, j = { top: 0, left: 0 }, k = this[0], l = k && k.ownerDocument;
      if (l) return (d = l.body) === k ? _.offset.bodyOffset(k) : (c = l.documentElement, _.contains(c, k) ? ("undefined" != typeof k.getBoundingClientRect && (j = k.getBoundingClientRect()), e = N(l), f = c.clientTop || d.clientTop || 0, g = c.clientLeft || d.clientLeft || 0, h = e.pageYOffset || c.scrollTop, i = e.pageXOffset || c.scrollLeft, {
        top: j.top + h - f,
        left: j.left + i - g
      }) : j)
    }, _.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop, c = a.offsetLeft;
        return _.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(_.css(a, "marginTop")) || 0, c += parseFloat(_.css(a, "marginLeft")) || 0), {
          top: b,
          left: c
        }
      }, setOffset: function (a, b, c) {
        var d = _.css(a, "position");
        "static" === d && (a.style.position = "relative");
        var e, f, g = _(a), h = g.offset(), i = _.css(a, "top"), j = _.css(a, "left"),
          k = ("absolute" === d || "fixed" === d) && _.inArray("auto", [i, j]) > -1, l = {}, m = {};
        k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
      }
    }, _.fn.extend({
      position: function () {
        if (this[0]) {
          var a = this[0], b = this.offsetParent(), c = this.offset(),
            d = bc.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
          return c.top -= parseFloat(_.css(a, "marginTop")) || 0, c.left -= parseFloat(_.css(a, "marginLeft")) || 0, d.top += parseFloat(_.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(_.css(b[0], "borderLeftWidth")) || 0, {
            top: c.top - d.top,
            left: c.left - d.left
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var a = this.offsetParent || Q.body; a && !bc.test(a.nodeName) && "static" === _.css(a, "position");) a = a.offsetParent;
          return a || Q.body
        })
      }
    }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, c) {
      var d = /Y/.test(c);
      _.fn[a] = function (e) {
        return _.access(this, function (a, e, f) {
          var g = N(a);
          return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : void(g ? g.scrollTo(d ? _(g).scrollLeft() : f, d ? f : _(g).scrollTop()) : a[e] = f)
        }, a, e, arguments.length, null)
      }
    }), _.each({ Height: "height", Width: "width" }, function (a, c) {
      _.each({ padding: "inner" + a, content: c, "": "outer" + a }, function (d, e) {
        _.fn[e] = function (e, f) {
          var g = arguments.length && (d || "boolean" != typeof e),
            h = d || (e === !0 || f === !0 ? "margin" : "border");
          return _.access(this, function (c, d, e) {
            var f;
            return _.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? _.css(c, d, e, h) : _.style(c, d, e, h)
          }, c, g ? e : b, g, null)
        }
      })
    }), a.jQuery = a.$ = _, "function" == typeof i && i.amd && i.amd.jQuery && i("jquery", [], function () {
      return _
    })
  }(a), jQuery.base64 = function (a) {
    function b(a, b) {
      var c = g.indexOf(a.charAt(b));
      if (-1 === c) throw"Cannot decode base64";
      return c
    }

    function c(a) {
      var c, d, e = 0, g = a.length, h = [];
      if (a = String(a), 0 === g) return a;
      if (g % 4 !== 0) throw"Cannot decode base64";
      for (a.charAt(g - 1) === f && (e = 1, a.charAt(g - 2) === f && (e = 2), g -= 4), c = 0; g > c; c += 4) d = b(a, c) << 18 | b(a, c + 1) << 12 | b(a, c + 2) << 6 | b(a, c + 3), h.push(String.fromCharCode(d >> 16, d >> 8 & 255, 255 & d));
      switch (e) {
        case 1:
          d = b(a, c) << 18 | b(a, c + 1) << 12 | b(a, c + 2) << 6, h.push(String.fromCharCode(d >> 16, d >> 8 & 255));
          break;
        case 2:
          d = b(a, c) << 18 | b(a, c + 1) << 12, h.push(String.fromCharCode(d >> 16))
      }
      return h.join("");
    }

    function d(a, b) {
      var c = a.charCodeAt(b);
      if (c > 255) throw"INVALID_CHARACTER_ERR: DOM Exception 5";
      return c
    }

    function e(a) {
      if (1 !== arguments.length) throw"SyntaxError: exactly one argument required";
      a = String(a);
      var b, c, e = [], h = a.length - a.length % 3;
      if (0 === a.length) return a;
      for (b = 0; h > b; b += 3) c = d(a, b) << 16 | d(a, b + 1) << 8 | d(a, b + 2), e.push(g.charAt(c >> 18)), e.push(g.charAt(c >> 12 & 63)), e.push(g.charAt(c >> 6 & 63)), e.push(g.charAt(63 & c));
      switch (a.length - h) {
        case 1:
          c = d(a, b) << 16, e.push(g.charAt(c >> 18) + g.charAt(c >> 12 & 63) + f + f);
          break;
        case 2:
          c = d(a, b) << 16 | d(a, b + 1) << 8, e.push(g.charAt(c >> 18) + g.charAt(c >> 12 & 63) + g.charAt(c >> 6 & 63) + f)
      }
      return e.join("")
    }

    var f = "=", g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = "1.0";
    return { decode: c, encode: e, VERSION: h }
  }(jQuery), function () {
    function b(a, c) {
      function e(a) {
        if (e[a] !== q) return e[a];
        var b;
        if ("bug-string-char-index" == a) b = "a" != "a"[0]; else if ("json" == a) b = e("json-stringify") && e("json-parse"); else {
          var d;
          if ("json-stringify" == a) {
            b = c.stringify;
            var f = "function" == typeof b && s;
            if (f) {
              (d = function () {
                return 1
              }).toJSON = d;
              try {
                f = "0" === b(0) && "0" === b(new g) && '""' == b(new h) && b(r) === q && b(q) === q && b() === q && "1" === b(d) && "[1]" == b([d]) && "[null]" == b([q]) && "null" == b(null) && "[null,null,null]" == b([q, r, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == b({ a: [d, !0, !1, null, "\x00\b\n\f\r	"] }) && "1" === b(null, d) && "[\n 1,\n 2\n]" == b([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == b(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == b(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == b(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == b(new j(-1))
              } catch (i) {
                f = !1
              }
            }
            b = f
          }
          if ("json-parse" == a) {
            if (b = c.parse, "function" == typeof b) try {
              if (0 === b("0") && !b(!1)) {
                d = b('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                var k = 5 == d.a.length && 1 === d.a[0];
                if (k) {
                  try {
                    k = !b('"	"')
                  } catch (l) {
                  }
                  if (k) try {
                    k = 1 !== b("01")
                  } catch (m) {
                  }
                  if (k) try {
                    k = 1 !== b("1.")
                  } catch (n) {
                  }
                }
              }
            } catch (o) {
              k = !1
            }
            b = k
          }
        }
        return e[a] = !!b
      }

      a || (a = f.Object()), c || (c = f.Object());
      var g = a.Number || f.Number, h = a.String || f.String, i = a.Object || f.Object,
        j = a.Date || f.Date, k = a.SyntaxError || f.SyntaxError, l = a.TypeError || f.TypeError,
        m = a.Math || f.Math, n = a.JSON || f.JSON;
      "object" == typeof n && n && (c.stringify = n.stringify, c.parse = n.parse);
      var o, p, q, i = i.prototype, r = i.toString, s = new j(-0xc782b5b800cec);
      try {
        s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() && 10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
      } catch (t) {
      }
      if (!e("json")) {
        var u = e("bug-string-char-index");
        if (!s) var v = m.floor, w = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
          x = function (a, b) {
            return w[b] + 365 * (a - 1970) + v((a - 1969 + (b = +(b > 1))) / 4) - v((a - 1901 + b) / 100) + v((a - 1601 + b) / 400)
          };
        if ((o = i.hasOwnProperty) || (o = function (a) {
            var b, c = {};
            return (c.__proto__ = null, c.__proto__ = { toString: 1 }, c).toString != r ? o = function (a) {
              var b = this.__proto__;
              return a = a in (this.__proto__ = null, this), this.__proto__ = b, a
            } : (b = c.constructor, o = function (a) {
              var c = (this.constructor || b).prototype;
              return a in this && !(a in c && this[a] === c[a])
            }), c = null, o.call(this, a)
          }), p = function (a, b) {
            var c, e, f, g = 0;
            (c = function () {
              this.valueOf = 0
            }).prototype.valueOf = 0, e = new c;
            for (f in e) o.call(e, f) && g++;
            return c = e = null, g ? p = 2 == g ? function (a, b) {
              var c, d = {}, e = "[object Function]" == r.call(a);
              for (c in a) e && "prototype" == c || o.call(d, c) || (d[c] = 1, !o.call(a, c)) || b(c)
            } : function (a, b) {
              var c, d, e = "[object Function]" == r.call(a);
              for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
              (d || o.call(a, c = "constructor")) && b(c)
            } : (e = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), p = function (a, b) {
              var c, f = "[object Function]" == r.call(a),
                g = !f && "function" != typeof a.constructor && d[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
              for (c in a) f && "prototype" == c || !g.call(a, c) || b(c);
              for (f = e.length; c = e[--f]; g.call(a, c) && b(c)) ;
            }), p(a, b)
          }, !e("json-stringify")) {
          var y = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
            z = function (a, b) {
              return ("000000" + (b || 0)).slice(-a)
            }, A = function (a) {
              for (var b = '"', c = 0, d = a.length, e = !u || d > 10, f = e && (u ? a.split("") : a); d > c; c++) {
                var g = a.charCodeAt(c);
                switch (g) {
                  case 8:
                  case 9:
                  case 10:
                  case 12:
                  case 13:
                  case 34:
                  case 92:
                    b += y[g];
                    break;
                  default:
                    if (32 > g) {
                      b += "\\u00" + z(2, g.toString(16));
                      break
                    }
                    b += e ? f[c] : a.charAt(c)
                }
              }
              return b + '"'
            }, B = function (a, b, c, d, e, f, g) {
              var h, i, j, k, m, n, s, t, u;
              try {
                h = b[a]
              } catch (w) {
              }
              if ("object" == typeof h && h) if (i = r.call(h), "[object Date]" != i || o.call(h, "toJSON")) "function" == typeof h.toJSON && ("[object Number]" != i && "[object String]" != i && "[object Array]" != i || o.call(h, "toJSON")) && (h = h.toJSON(a)); else if (h > -1 / 0 && 1 / 0 > h) {
                if (x) {
                  for (k = v(h / 864e5), i = v(k / 365.2425) + 1970 - 1; x(i + 1, 0) <= k; i++) ;
                  for (j = v((k - x(i, 0)) / 30.42); x(i, j + 1) <= k; j++) ;
                  k = 1 + k - x(i, j), m = (h % 864e5 + 864e5) % 864e5, n = v(m / 36e5) % 24, s = v(m / 6e4) % 60, t = v(m / 1e3) % 60, m %= 1e3
                } else i = h.getUTCFullYear(), j = h.getUTCMonth(), k = h.getUTCDate(), n = h.getUTCHours(), s = h.getUTCMinutes(), t = h.getUTCSeconds(), m = h.getUTCMilliseconds();
                h = (0 >= i || i >= 1e4 ? (0 > i ? "-" : "+") + z(6, 0 > i ? -i : i) : z(4, i)) + "-" + z(2, j + 1) + "-" + z(2, k) + "T" + z(2, n) + ":" + z(2, s) + ":" + z(2, t) + "." + z(3, m) + "Z"
              } else h = null;
              if (c && (h = c.call(b, a, h)), null === h) return "null";
              if (i = r.call(h), "[object Boolean]" == i) return "" + h;
              if ("[object Number]" == i) return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
              if ("[object String]" == i) return A("" + h);
              if ("object" == typeof h) {
                for (a = g.length; a--;) if (g[a] === h) throw l();
                if (g.push(h), u = [], b = f, f += e, "[object Array]" == i) {
                  for (j = 0, a = h.length; a > j; j++) i = B(j, h, c, d, e, f, g), u.push(i === q ? "null" : i);
                  a = u.length ? e ? "[\n" + f + u.join(",\n" + f) + "\n" + b + "]" : "[" + u.join(",") + "]" : "[]"
                } else p(d || h, function (a) {
                  var b = B(a, h, c, d, e, f, g);
                  b !== q && u.push(A(a) + ":" + (e ? " " : "") + b)
                }), a = u.length ? e ? "{\n" + f + u.join(",\n" + f) + "\n" + b + "}" : "{" + u.join(",") + "}" : "{}";
                return g.pop(), a
              }
            };
          c.stringify = function (a, b, c) {
            var e, f, g, h;
            if (d[typeof b] && b) if ("[object Function]" == (h = r.call(b))) f = b; else if ("[object Array]" == h) {
              g = {};
              for (var i, j = 0, k = b.length; k > j; i = b[j++], h = r.call(i), ("[object String]" == h || "[object Number]" == h) && (g[i] = 1)) ;
            }
            if (c) if ("[object Number]" == (h = r.call(c))) {
              if (0 < (c -= c % 1)) for (e = "", c > 10 && (c = 10); e.length < c; e += " ") ;
            } else "[object String]" == h && (e = 10 >= c.length ? c : c.slice(0, 10));
            return B("", (i = {}, i[""] = a, i), f, g, e, "", [])
          }
        }
        if (!e("json-parse")) {
          var C, D, E = h.fromCharCode, F = {
            92: "\\",
            34: '"',
            47: "/",
            98: "\b",
            116: "	",
            110: "\n",
            102: "\f",
            114: "\r"
          }, G = function () {
            throw C = D = null, k()
          }, H = function () {
            for (var a, b, c, d, e, f = D, g = f.length; g > C;) switch (e = f.charCodeAt(C)) {
              case 9:
              case 10:
              case 13:
              case 32:
                C++;
                break;
              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                return a = u ? f.charAt(C) : f[C], C++, a;
              case 34:
                for (a = "@", C++; g > C;) if (e = f.charCodeAt(C), 32 > e) G(); else if (92 == e) switch (e = f.charCodeAt(++C)) {
                  case 92:
                  case 34:
                  case 47:
                  case 98:
                  case 116:
                  case 110:
                  case 102:
                  case 114:
                    a += F[e], C++;
                    break;
                  case 117:
                    for (b = ++C, c = C + 4; c > C; C++) e = f.charCodeAt(C), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || G();
                    a += E("0x" + f.slice(b, C));
                    break;
                  default:
                    G()
                } else {
                  if (34 == e) break;
                  for (e = f.charCodeAt(C), b = C; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++C);
                  a += f.slice(b, C)
                }
                if (34 == f.charCodeAt(C)) return C++, a;
                G();
              default:
                if (b = C, 45 == e && (d = !0, e = f.charCodeAt(++C)), e >= 48 && 57 >= e) {
                  for (48 == e && (e = f.charCodeAt(C + 1), e >= 48 && 57 >= e) && G(); g > C && (e = f.charCodeAt(C), e >= 48 && 57 >= e); C++) ;
                  if (46 == f.charCodeAt(C)) {
                    for (c = ++C; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++) ;
                    c == C && G(), C = c
                  }
                  if (e = f.charCodeAt(C), 101 == e || 69 == e) {
                    for (e = f.charCodeAt(++C), 43 != e && 45 != e || C++, c = C; g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e); c++) ;
                    c == C && G(), C = c
                  }
                  return +f.slice(b, C)
                }
                if (d && G(), "true" == f.slice(C, C + 4)) return C += 4, !0;
                if ("false" == f.slice(C, C + 5)) return C += 5, !1;
                if ("null" == f.slice(C, C + 4)) return C += 4, null;
                G()
            }
            return "$"
          }, I = function (a) {
            var b, c;
            if ("$" == a && G(), "string" == typeof a) {
              if ("@" == (u ? a.charAt(0) : a[0])) return a.slice(1);
              if ("[" == a) {
                for (b = []; a = H(), "]" != a; c || (c = !0)) c && ("," == a ? (a = H(), "]" == a && G()) : G()), "," == a && G(), b.push(I(a));
                return b
              }
              if ("{" == a) {
                for (b = {}; a = H(), "}" != a; c || (c = !0)) c && ("," == a ? (a = H(), "}" == a && G()) : G()), "," != a && "string" == typeof a && "@" == (u ? a.charAt(0) : a[0]) && ":" == H() || G(), b[a.slice(1)] = I(H());
                return b
              }
              G()
            }
            return a
          }, J = function (a, b, c) {
            c = K(a, b, c), c === q ? delete a[b] : a[b] = c
          }, K = function (a, b, c) {
            var d, e = a[b];
            if ("object" == typeof e && e) if ("[object Array]" == r.call(e)) for (d = e.length; d--;) J(e, d, c); else p(e, function (a) {
              J(e, a, c)
            });
            return c.call(a, b, e)
          };
          c.parse = function (a, b) {
            var c, d;
            return C = 0, D = "" + a, c = I(H()), "$" != H() && G(), C = D = null, b && "[object Function]" == r.call(b) ? K((d = {}, d[""] = c, d), "", b) : c
          }
        }
      }
      return c.runInContext = b, c
    }

    var c = "function" == typeof i && i.amd, d = { "function": !0, object: !0 },
      e = d[typeof exports] && exports && !exports.nodeType && exports,
      f = d[typeof a] && a || this,
      g = e && d[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    if (!g || g.global !== g && g.window !== g && g.self !== g || (f = g), e && !c) b(f, e); else {
      var h = f.JSON, j = f.JSON3, k = !1, l = b(f, f.JSON3 = {
        noConflict: function () {
          return k || (k = !0, f.JSON = h, f.JSON3 = j, h = j = null), l
        }
      });
      f.JSON = { parse: l.parse, stringify: l.stringify }
    }
    c && i(function () {
      return l
    })
  }.call(this), function (a) {
    "function" == typeof i && i.amd ? i(["jquery"], a) : a(jQuery)
  }(function (b) {
    if (!b.support.cors && b.ajaxTransport && a.XDomainRequest) {
      var d = /^https?:\/\//i, e = /^get|post$/i, f = new RegExp("^" + location.protocol, "i");
      b.ajaxTransport("* text html xml json", function (a, g, h) {
        if (a.crossDomain && a.async && e.test(a.type) && d.test(a.url) && f.test(a.url)) {
          var i = null;
          return {
            send: function (d, e) {
              var f = "", h = (g.dataType || "").toLowerCase();
              i = new XDomainRequest, /^\d+$/.test(g.timeout) && (i.timeout = g.timeout), i.ontimeout = function () {
                e(500, "timeout")
              }, i.onload = function () {
                var a = "Content-Length: " + i.responseText.length + "\r\nContent-Type: " + i.contentType,
                  d = { code: 200, message: "success" }, f = { text: i.responseText };
                try {
                  if ("html" === h || /text\/html/i.test(i.contentType)) f.html = i.responseText; else if ("json" === h || "text" !== h && /\/json/i.test(i.contentType)) try {
                    f.json = b.parseJSON(i.responseText)
                  } catch (g) {
                    d.code = 500, d.message = "parseerror"
                  } else if ("xml" === h || "text" !== h && /\/xml/i.test(i.contentType)) {
                    var j = new ActiveXObject("Microsoft.XMLDOM");
                    j.async = !1;
                    try {
                      j.loadXML(i.responseText)
                    } catch (g) {
                      j = c
                    }
                    if (!j || !j.documentElement || j.getElementsByTagName("parsererror").length) throw d.code = 500, d.message = "parseerror", "Invalid XML: " + i.responseText;
                    f.xml = j
                  }
                } catch (k) {
                  throw k
                } finally {
                  e(d.code, d.message, f, a)
                }
              }, i.onprogress = function () {
              }, i.onerror = function () {
                e(500, "error", { text: i.responseText })
              }, g.data && (f = "string" === b.type(g.data) ? g.data : b.param(g.data)), i.open(a.type, a.url), i.send(f)
            }, abort: function () {
              i && i.abort()
            }
          }
        }
      })
    }
  }), function (a, b) {
    "object" == typeof exports ? module.exports = exports = b() : "function" == typeof i && i.amd ? i([], b) : a.CryptoJS = b()
  }(this, function () {
    var a = a || function (a, b) {
      var c = Object.create || function () {
        function a() {
        }

        return function (b) {
          var c;
          return a.prototype = b, c = new a, a.prototype = null, c
        }
      }(), d = {}, e = d.lib = {}, f = e.Base = function () {
        return {
          extend: function (a) {
            var b = c(this);
            return a && b.mixIn(a), b.hasOwnProperty("init") && this.init !== b.init || (b.init = function () {
              b.$super.init.apply(this, arguments)
            }), b.init.prototype = b, b.$super = this, b
          }, create: function () {
            var a = this.extend();
            return a.init.apply(a, arguments), a
          }, init: function () {
          }, mixIn: function (a) {
            for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
          }, clone: function () {
            return this.init.prototype.extend(this)
          }
        }
      }(), g = e.WordArray = f.extend({
        init: function (a, c) {
          a = this.words = a || [], c != b ? this.sigBytes = c : this.sigBytes = 4 * a.length
        }, toString: function (a) {
          return (a || i).stringify(this)
        }, concat: function (a) {
          var b = this.words, c = a.words, d = this.sigBytes, e = a.sigBytes;
          if (this.clamp(), d % 4) for (var f = 0; e > f; f++) {
            var g = c[f >>> 2] >>> 24 - f % 4 * 8 & 255;
            b[d + f >>> 2] |= g << 24 - (d + f) % 4 * 8
          } else for (var f = 0; e > f; f += 4) b[d + f >>> 2] = c[f >>> 2];
          return this.sigBytes += e, this
        }, clamp: function () {
          var b = this.words, c = this.sigBytes;
          b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8, b.length = a.ceil(c / 4)
        }, clone: function () {
          var a = f.clone.call(this);
          return a.words = this.words.slice(0), a
        }, random: function (b) {
          for (var c, d = [], e = function (b) {
            var b = b, c = 987654321, d = 4294967295;
            return function () {
              c = 36969 * (65535 & c) + (c >> 16) & d, b = 18e3 * (65535 & b) + (b >> 16) & d;
              var e = (c << 16) + b & d;
              return e /= 4294967296, e += .5, e * (a.random() > .5 ? 1 : -1)
            }
          }, f = 0; b > f; f += 4) {
            var h = e(4294967296 * (c || a.random()));
            c = 987654071 * h(), d.push(4294967296 * h() | 0)
          }
          return new g.init(d, b)
        }
      }), h = d.enc = {}, i = h.Hex = {
        stringify: function (a) {
          for (var b = a.words, c = a.sigBytes, d = [], e = 0; c > e; e++) {
            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
            d.push((f >>> 4).toString(16)), d.push((15 & f).toString(16))
          }
          return d.join("")
        }, parse: function (a) {
          for (var b = a.length, c = [], d = 0; b > d; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - d % 8 * 4;
          return new g.init(c, b / 2)
        }
      }, j = h.Latin1 = {
        stringify: function (a) {
          for (var b = a.words, c = a.sigBytes, d = [], e = 0; c > e; e++) {
            var f = b[e >>> 2] >>> 24 - e % 4 * 8 & 255;
            d.push(String.fromCharCode(f))
          }
          return d.join("")
        }, parse: function (a) {
          for (var b = a.length, c = [], d = 0; b > d; d++) c[d >>> 2] |= (255 & a.charCodeAt(d)) << 24 - d % 4 * 8;
          return new g.init(c, b)
        }
      }, k = h.Utf8 = {
        stringify: function (a) {
          try {
            return decodeURIComponent(escape(j.stringify(a)))
          } catch (b) {
            throw new Error("Malformed UTF-8 data")
          }
        }, parse: function (a) {
          return j.parse(unescape(encodeURIComponent(a)))
        }
      }, l = e.BufferedBlockAlgorithm = f.extend({
        reset: function () {
          this._data = new g.init, this._nDataBytes = 0
        }, _append: function (a) {
          "string" == typeof a && (a = k.parse(a)), this._data.concat(a), this._nDataBytes += a.sigBytes
        }, _process: function (b) {
          var c = this._data, d = c.words, e = c.sigBytes, f = this.blockSize, h = 4 * f, i = e / h;
          i = b ? a.ceil(i) : a.max((0 | i) - this._minBufferSize, 0);
          var j = i * f, k = a.min(4 * j, e);
          if (j) {
            for (var l = 0; j > l; l += f) this._doProcessBlock(d, l);
            var m = d.splice(0, j);
            c.sigBytes -= k
          }
          return new g.init(m, k)
        }, clone: function () {
          var a = f.clone.call(this);
          return a._data = this._data.clone(), a
        }, _minBufferSize: 0
      }), m = (e.Hasher = l.extend({
        cfg: f.extend(), init: function (a) {
          this.cfg = this.cfg.extend(a), this.reset()
        }, reset: function () {
          l.reset.call(this), this._doReset()
        }, update: function (a) {
          return this._append(a), this._process(), this
        }, finalize: function (a) {
          a && this._append(a);
          var b = this._doFinalize();
          return b
        }, blockSize: 16, _createHelper: function (a) {
          return function (b, c) {
            return new a.init(c).finalize(b)
          }
        }, _createHmacHelper: function (a) {
          return function (b, c) {
            return new m.HMAC.init(a, c).finalize(b)
          }
        }
      }), d.algo = {});
      return d
    }(Math);
    return a
  }), function (a, b) {
    "object" == typeof exports ? module.exports = exports = b(require("./core")) : "function" == typeof i && i.amd ? i(["./core"], b) : b(a.CryptoJS)
  }(this, function (a) {
    return function (b) {
      function c(a, b, c, d, e, f, g) {
        var h = a + (b & c | ~b & d) + e + g;
        return (h << f | h >>> 32 - f) + b
      }

      function d(a, b, c, d, e, f, g) {
        var h = a + (b & d | c & ~d) + e + g;
        return (h << f | h >>> 32 - f) + b
      }

      function e(a, b, c, d, e, f, g) {
        var h = a + (b ^ c ^ d) + e + g;
        return (h << f | h >>> 32 - f) + b
      }

      function f(a, b, c, d, e, f, g) {
        var h = a + (c ^ (b | ~d)) + e + g;
        return (h << f | h >>> 32 - f) + b
      }

      var g = a, h = g.lib, i = h.WordArray, j = h.Hasher, k = g.algo, l = [];
      !function () {
        for (var a = 0; 64 > a; a++) l[a] = 4294967296 * b.abs(b.sin(a + 1)) | 0
      }();
      var m = k.MD5 = j.extend({
        _doReset: function () {
          this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (a, b) {
          for (var g = 0; 16 > g; g++) {
            var h = b + g, i = a[h];
            a[h] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
          }
          var j = this._hash.words, k = a[b + 0], m = a[b + 1], n = a[b + 2], o = a[b + 3],
            p = a[b + 4], q = a[b + 5], r = a[b + 6], s = a[b + 7], t = a[b + 8], u = a[b + 9],
            v = a[b + 10], w = a[b + 11], x = a[b + 12], y = a[b + 13], z = a[b + 14],
            A = a[b + 15], B = j[0], C = j[1], D = j[2], E = j[3];
          B = c(B, C, D, E, k, 7, l[0]), E = c(E, B, C, D, m, 12, l[1]), D = c(D, E, B, C, n, 17, l[2]), C = c(C, D, E, B, o, 22, l[3]), B = c(B, C, D, E, p, 7, l[4]), E = c(E, B, C, D, q, 12, l[5]), D = c(D, E, B, C, r, 17, l[6]), C = c(C, D, E, B, s, 22, l[7]), B = c(B, C, D, E, t, 7, l[8]), E = c(E, B, C, D, u, 12, l[9]), D = c(D, E, B, C, v, 17, l[10]), C = c(C, D, E, B, w, 22, l[11]), B = c(B, C, D, E, x, 7, l[12]), E = c(E, B, C, D, y, 12, l[13]), D = c(D, E, B, C, z, 17, l[14]), C = c(C, D, E, B, A, 22, l[15]), B = d(B, C, D, E, m, 5, l[16]), E = d(E, B, C, D, r, 9, l[17]), D = d(D, E, B, C, w, 14, l[18]), C = d(C, D, E, B, k, 20, l[19]), B = d(B, C, D, E, q, 5, l[20]), E = d(E, B, C, D, v, 9, l[21]), D = d(D, E, B, C, A, 14, l[22]), C = d(C, D, E, B, p, 20, l[23]), B = d(B, C, D, E, u, 5, l[24]), E = d(E, B, C, D, z, 9, l[25]), D = d(D, E, B, C, o, 14, l[26]), C = d(C, D, E, B, t, 20, l[27]), B = d(B, C, D, E, y, 5, l[28]), E = d(E, B, C, D, n, 9, l[29]), D = d(D, E, B, C, s, 14, l[30]), C = d(C, D, E, B, x, 20, l[31]), B = e(B, C, D, E, q, 4, l[32]), E = e(E, B, C, D, t, 11, l[33]), D = e(D, E, B, C, w, 16, l[34]), C = e(C, D, E, B, z, 23, l[35]), B = e(B, C, D, E, m, 4, l[36]), E = e(E, B, C, D, p, 11, l[37]), D = e(D, E, B, C, s, 16, l[38]), C = e(C, D, E, B, v, 23, l[39]), B = e(B, C, D, E, y, 4, l[40]), E = e(E, B, C, D, k, 11, l[41]), D = e(D, E, B, C, o, 16, l[42]), C = e(C, D, E, B, r, 23, l[43]), B = e(B, C, D, E, u, 4, l[44]), E = e(E, B, C, D, x, 11, l[45]), D = e(D, E, B, C, A, 16, l[46]), C = e(C, D, E, B, n, 23, l[47]), B = f(B, C, D, E, k, 6, l[48]), E = f(E, B, C, D, s, 10, l[49]), D = f(D, E, B, C, z, 15, l[50]), C = f(C, D, E, B, q, 21, l[51]), B = f(B, C, D, E, x, 6, l[52]), E = f(E, B, C, D, o, 10, l[53]), D = f(D, E, B, C, v, 15, l[54]), C = f(C, D, E, B, m, 21, l[55]), B = f(B, C, D, E, t, 6, l[56]), E = f(E, B, C, D, A, 10, l[57]), D = f(D, E, B, C, r, 15, l[58]), C = f(C, D, E, B, y, 21, l[59]), B = f(B, C, D, E, p, 6, l[60]), E = f(E, B, C, D, w, 10, l[61]), D = f(D, E, B, C, n, 15, l[62]), C = f(C, D, E, B, u, 21, l[63]), j[0] = j[0] + B | 0, j[1] = j[1] + C | 0, j[2] = j[2] + D | 0, j[3] = j[3] + E | 0
        }, _doFinalize: function () {
          var a = this._data, c = a.words, d = 8 * this._nDataBytes, e = 8 * a.sigBytes;
          c[e >>> 5] |= 128 << 24 - e % 32;
          var f = b.floor(d / 4294967296), g = d;
          c[(e + 64 >>> 9 << 4) + 15] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8), c[(e + 64 >>> 9 << 4) + 14] = 16711935 & (g << 8 | g >>> 24) | 4278255360 & (g << 24 | g >>> 8), a.sigBytes = 4 * (c.length + 1), this._process();
          for (var h = this._hash, i = h.words, j = 0; 4 > j; j++) {
            var k = i[j];
            i[j] = 16711935 & (k << 8 | k >>> 24) | 4278255360 & (k << 24 | k >>> 8)
          }
          return h
        }, clone: function () {
          var a = j.clone.call(this);
          return a._hash = this._hash.clone(), a
        }
      });
      g.MD5 = j._createHelper(m), g.HmacMD5 = j._createHmacHelper(m)
    }(Math), a.MD5
  });
  var l = d(-1 !== location.protocol.indexOf("https"));
  if (l.retries = 3, l.host = "issuu.com", l.configVersion = "1.0.0", m === c) var m = {};
  if (m.compile = function (a) {
      var b = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
      return b
    }, m.render = function (a, b) {
      var c = m.strings[a], d = m.compile(c);
      return d(b)
    }, m === c) var m = {};
  if (m.strings = {
      "error.templ": '<p style="display:block; font:normal 16px Helvetica Neue, HelveticaNeue, Helvetica, Trebuchet, Trebuchet MS, Arial, sans-serif; text-align:center; background-color:rgb(0,0,0); padding:20px; color:white; text-decoration:none;">    <%=msg%><br><br>    <span style="font-size: 11px;">    	<%=id%> | <%=err%> | <%=browser%> | <%=date%>    </span></p>',
      "factory-fluid.templ": '<div style="width:100%; height:100%;">    <div style="height:-moz-calc(100% - 30px); height:-webkit-calc(100% - 30px); height:-o-calc(100% - 30px); height:calc(100% - 30px);"><%=embedCode%></div>    <div style="width: auto; height:30px; padding-left: 10px; padding-right: 10px; background-color: rgba(0,0,0,.7); display: flex; justify-content: space-between; align-items: center">        <div style="width: auto; display: flex; align-items: center;">            <span style="color: #fff; font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size:12px; font-style:normal; font-weight:400; height:auto; margin:0; padding:0; white-space: nowrap;" >                Powered by            </span>            <span style="width: 62px; height: 36px; padding-left: 5px;">                <a href="https://<%=host%>/explore" onclick=\'window.IssuuReaders.links.usage("<%=embedId%>", "ycpt");\' target="_blank">                    <svg width="100%" height="100%" viewBox="-2 0 60 14" style="fill: #fff">                        <g>                            <path d="M6.83590808,3.64127016 C5.02752664,3.6236996 3.54764132,5.11190524 3.53049341,6.96464718 C3.5133455,8.81760081 4.96575284,10.3339617 6.77413428,10.3515323 C8.58251571,10.3688911 10.0626076,8.88089718 10.0795489,7.02815524 C10.0966969,5.17520161 8.64428951,3.65862903 6.83590808,3.64127016 L6.83590808,3.64127016 Z M6.78942278,8.69524194 C5.87376569,8.68635081 5.13826495,7.91853831 5.14694221,6.9803125 C5.15561947,6.04208669 5.90496249,5.28845766 6.82061958,5.29734879 C7.73627667,5.30623992 8.4717774,6.07405242 8.46310015,7.01248992 C8.45442289,7.95050403 7.70507987,8.70413306 6.78942278,8.69524194 L6.78942278,8.69524194 Z"></path>                            <path d="M6.75843258,0.424375 C6.74830911,0.424375 6.73818565,0.424798387 6.72785558,0.424798387 L6.72785558,0.424163306 L0.856245804,0.424163306 C0.562045511,0.424163306 0.321148361,0.67078629 0.321148361,0.972449597 L0.321148361,7.02053427 C0.321148361,10.6633569 3.2032369,13.6164819 6.75843258,13.6164819 C10.3138349,13.6164819 13.1957168,10.6633569 13.1957168,7.02053427 C13.1957168,3.3775 10.3138349,0.424375 6.75843258,0.424375 L6.75843258,0.424375 Z M2.33592452,6.92929435 C2.35927047,4.40019153 4.37921167,2.36920363 6.84747775,2.39291331 C9.31574383,2.41683468 11.2980836,4.48677419 11.274531,7.01566532 C11.2513917,9.54455645 9.23124389,11.5755444 6.76318441,11.551623 C4.29491833,11.5277016 2.31257857,9.45797379 2.33592452,6.92929435 L2.33592452,6.92929435 Z"></path>                            <path d="M6.83590808,3.64127016 C5.02752664,3.6236996 3.54764132,5.11190524 3.53049341,6.96464718 C3.5133455,8.81760081 4.96575284,10.3339617 6.77413428,10.3515323 C8.58251571,10.3688911 10.0626076,8.88089718 10.0795489,7.02815524 C10.0966969,5.17520161 8.64428951,3.65862903 6.83590808,3.64127016 L6.83590808,3.64127016 Z M6.78942278,8.69524194 C5.87376569,8.68635081 5.13826495,7.91853831 5.14694221,6.9803125 C5.15561947,6.04208669 5.90496249,5.28845766 6.82061958,5.29734879 C7.73627667,5.30623992 8.4717774,6.07405242 8.46310015,7.01248992 C8.45442289,7.95050403 7.70507987,8.70413306 6.78942278,8.69524194 L6.78942278,8.69524194 Z"></path>                            <path d="M6.75843258,0.424375 C6.74830911,0.424375 6.73818565,0.424798387 6.72785558,0.424798387 L6.72785558,0.424163306 L0.856245804,0.424163306 C0.562045511,0.424163306 0.321148361,0.67078629 0.321148361,0.972449597 L0.321148361,7.02053427 C0.321148361,10.6633569 3.2032369,13.6164819 6.75843258,13.6164819 C10.3138349,13.6164819 13.1957168,10.6633569 13.1957168,7.02053427 C13.1957168,3.3775 10.3138349,0.424375 6.75843258,0.424375 L6.75843258,0.424375 Z M2.33592452,6.92929435 C2.35927047,4.40019153 4.37921167,2.36920363 6.84747775,2.39291331 C9.31574383,2.41683468 11.2980836,4.48677419 11.274531,7.01566532 C11.2513917,9.54455645 9.23124389,11.5755444 6.76318441,11.551623 C4.29491833,11.5277016 2.31257857,9.45797379 2.33592452,6.92929435 L2.33592452,6.92929435 Z"></path>                        </g>                        <g transform="translate(17.000000, 0.000000)">                            <path d="M1.18803132,0.461209677 C1.75267275,0.461209677 2.22289738,0.943235887 2.22289738,1.52137097 C2.22289738,2.09950605 1.75267275,2.58110887 1.18803132,2.58110887 C0.624009688,2.58110887 0.153578461,2.09950605 0.153578461,1.52137097 C0.153578461,0.943235887 0.624009688,0.461209677 1.18803132,0.461209677 L1.18803132,0.461209677 Z M1.18803132,12.5656351 C0.661197927,12.5656351 0.30419083,12.160877 0.30419083,11.6597984 L0.30419083,4.79775202 C0.30419083,4.29709677 0.680411851,3.89212702 1.18803132,3.89212702 C1.69627059,3.89212702 2.07228501,4.29709677 2.07228501,4.79775202 L2.07228501,11.6597984 C2.07228501,12.160877 1.71486471,12.5656351 1.18803132,12.5656351 L1.18803132,12.5656351 Z"></path>                            <path d="M7.56498795,12.6429032 C6.37971612,12.6429032 5.32646254,12.2574093 4.5742271,11.6597984 C4.31101701,11.4478931 4.19779948,11.1587198 4.19779948,10.9080746 C4.19779948,10.522369 4.49902422,10.2715121 4.87524524,10.2715121 C5.17585017,10.2715121 5.36427059,10.3877319 5.57107852,10.5420565 C6.07890458,10.9273387 6.79353858,11.2931452 7.69679959,11.2931452 C8.71265833,11.2931452 9.25808584,10.9080746 9.25808584,10.3104637 C9.25808584,9.65548387 8.73125245,9.40462702 7.41437558,9.03797379 C5.10085389,8.40268145 4.25440825,7.59231855 4.25440825,6.20509073 C4.25440825,4.75943548 5.5522778,3.81485887 7.58399527,3.81485887 C8.35503143,3.81485887 9.2200712,4.00771169 9.91631767,4.35446573 C10.4241437,4.60511089 10.781564,4.91333669 10.781564,5.29904234 C10.781564,5.64579637 10.5935568,5.97392137 10.1045315,5.97392137 C9.85991551,5.97392137 9.61529954,5.858125 9.33328872,5.70337702 C8.80624873,5.41462702 8.22321978,5.26114919 7.54639383,5.26114919 C6.60573797,5.26114919 5.96610026,5.51137097 5.96610026,6.18561492 C5.96610026,6.84144153 6.53053509,7.05292339 7.8848068,7.45789315 C9.91631767,8.05529234 10.9697779,8.61416331 10.9697779,10.1754032 C10.9697779,11.602006 9.80351335,12.6429032 7.56498795,12.6429032"></path>                            <path d="M16.0804749,12.6429032 C14.8952031,12.6429032 13.8415363,12.2574093 13.0893009,11.6597984 C12.8258842,11.4478931 12.7130799,11.1587198 12.7130799,10.9080746 C12.7130799,10.522369 13.014098,10.2715121 13.390319,10.2715121 C13.6913372,10.2715121 13.8791378,10.3877319 14.0863589,10.5420565 C14.5939784,10.9273387 15.3086124,11.2931452 16.2114602,11.2931452 C17.2275255,11.2931452 17.772953,10.9080746 17.772953,10.3104637 C17.772953,9.65548387 17.2465328,9.40462702 15.9298626,9.03797379 C13.6159277,8.40268145 12.7696886,7.59231855 12.7696886,6.20509073 C12.7696886,4.75943548 14.0677648,3.81485887 16.0990691,3.81485887 C16.8703118,3.81485887 17.7357648,4.00771169 18.4318047,4.35446573 C18.9392175,4.60511089 19.297051,4.91333669 19.297051,5.29904234 C19.297051,5.64579637 19.1088372,5.97392137 18.6193987,5.97392137 C18.3749893,5.97392137 18.1303733,5.858125 17.8485691,5.70337702 C17.3219423,5.41462702 16.7385002,5.26114919 16.0614676,5.26114919 C15.1208118,5.26114919 14.4813806,5.51137097 14.4813806,6.18561492 C14.4813806,6.84144153 15.0454023,7.05292339 16.4000872,7.45789315 C18.4318047,8.05529234 19.4850582,8.61416331 19.4850582,10.1754032 C19.4850582,11.602006 18.3185871,12.6429032 16.0804749,12.6429032"></path>                            <path d="M21.1926182,8.61416331 L21.1926182,4.79775202 C21.1926182,4.29709677 21.5878466,3.89212702 22.0768719,3.89212702 C22.5658973,3.89212702 22.9611256,4.29709677 22.9611256,4.79775202 L22.9611256,8.82606855 C22.9611256,10.0409778 23.8823609,10.9849194 25.1246547,10.9849194 C26.3659155,10.9849194 27.3063648,10.0409778 27.3063648,8.82606855 L27.3063648,4.79775202 C27.3063648,4.29709677 27.7015931,3.89212702 28.1902052,3.89212702 C28.679024,3.89212702 29.0740457,4.29709677 29.0740457,4.79775202 L29.0740457,8.61416331 C29.0740457,10.8697581 27.4001618,12.6429032 25.1246547,12.6429032 C22.8481147,12.6429032 21.1926182,10.8697581 21.1926182,8.61416331"></path>                            <path d="M31.0324197,8.61416331 L31.0324197,4.79775202 C31.0324197,4.29709677 31.4272349,3.89212702 31.9164668,3.89212702 C32.405079,3.89212702 32.8003073,4.29709677 32.8003073,4.79775202 L32.8003073,8.82606855 C32.8003073,10.0409778 33.7225756,10.9849194 34.9636298,10.9849194 C36.2048906,10.9849194 37.1455465,10.0409778 37.1455465,8.82606855 L37.1455465,4.79775202 C37.1455465,4.29709677 37.5407748,3.89212702 38.0298002,3.89212702 C38.5192387,3.89212702 38.9136406,4.29709677 38.9136406,4.79775202 L38.9136406,8.61416331 C38.9136406,10.8697581 37.2401699,12.6429032 34.9636298,12.6429032 C32.6872964,12.6429032 31.0324197,10.8697581 31.0324197,8.61416331"></path>                            <path d="M1.18803132,0.461209677 C1.75267275,0.461209677 2.22289738,0.943235887 2.22289738,1.52137097 C2.22289738,2.09950605 1.75267275,2.58110887 1.18803132,2.58110887 C0.624009688,2.58110887 0.153578461,2.09950605 0.153578461,1.52137097 C0.153578461,0.943235887 0.624009688,0.461209677 1.18803132,0.461209677 L1.18803132,0.461209677 Z M1.18803132,12.5656351 C0.661197927,12.5656351 0.30419083,12.160877 0.30419083,11.6597984 L0.30419083,4.79775202 C0.30419083,4.29709677 0.680411851,3.89212702 1.18803132,3.89212702 C1.69627059,3.89212702 2.07228501,4.29709677 2.07228501,4.79775202 L2.07228501,11.6597984 C2.07228501,12.160877 1.71486471,12.5656351 1.18803132,12.5656351 L1.18803132,12.5656351 Z"></path>                            <path d="M7.56498795,12.6429032 C6.37971612,12.6429032 5.32646254,12.2574093 4.5742271,11.6597984 C4.31101701,11.4478931 4.19779948,11.1587198 4.19779948,10.9080746 C4.19779948,10.522369 4.49902422,10.2715121 4.87524524,10.2715121 C5.17585017,10.2715121 5.36427059,10.3877319 5.57107852,10.5420565 C6.07890458,10.9273387 6.79353858,11.2931452 7.69679959,11.2931452 C8.71265833,11.2931452 9.25808584,10.9080746 9.25808584,10.3104637 C9.25808584,9.65548387 8.73125245,9.40462702 7.41437558,9.03797379 C5.10085389,8.40268145 4.25440825,7.59231855 4.25440825,6.20509073 C4.25440825,4.75943548 5.5522778,3.81485887 7.58399527,3.81485887 C8.35503143,3.81485887 9.2200712,4.00771169 9.91631767,4.35446573 C10.4241437,4.60511089 10.781564,4.91333669 10.781564,5.29904234 C10.781564,5.64579637 10.5935568,5.97392137 10.1045315,5.97392137 C9.85991551,5.97392137 9.61529954,5.858125 9.33328872,5.70337702 C8.80624873,5.41462702 8.22321978,5.26114919 7.54639383,5.26114919 C6.60573797,5.26114919 5.96610026,5.51137097 5.96610026,6.18561492 C5.96610026,6.84144153 6.53053509,7.05292339 7.8848068,7.45789315 C9.91631767,8.05529234 10.9697779,8.61416331 10.9697779,10.1754032 C10.9697779,11.602006 9.80351335,12.6429032 7.56498795,12.6429032"></path>                            <path d="M16.0804749,12.6429032 C14.8952031,12.6429032 13.8415363,12.2574093 13.0893009,11.6597984 C12.8258842,11.4478931 12.7130799,11.1587198 12.7130799,10.9080746 C12.7130799,10.522369 13.014098,10.2715121 13.390319,10.2715121 C13.6913372,10.2715121 13.8791378,10.3877319 14.0863589,10.5420565 C14.5939784,10.9273387 15.3086124,11.2931452 16.2114602,11.2931452 C17.2275255,11.2931452 17.772953,10.9080746 17.772953,10.3104637 C17.772953,9.65548387 17.2465328,9.40462702 15.9298626,9.03797379 C13.6159277,8.40268145 12.7696886,7.59231855 12.7696886,6.20509073 C12.7696886,4.75943548 14.0677648,3.81485887 16.0990691,3.81485887 C16.8703118,3.81485887 17.7357648,4.00771169 18.4318047,4.35446573 C18.9392175,4.60511089 19.297051,4.91333669 19.297051,5.29904234 C19.297051,5.64579637 19.1088372,5.97392137 18.6193987,5.97392137 C18.3749893,5.97392137 18.1303733,5.858125 17.8485691,5.70337702 C17.3219423,5.41462702 16.7385002,5.26114919 16.0614676,5.26114919 C15.1208118,5.26114919 14.4813806,5.51137097 14.4813806,6.18561492 C14.4813806,6.84144153 15.0454023,7.05292339 16.4000872,7.45789315 C18.4318047,8.05529234 19.4850582,8.61416331 19.4850582,10.1754032 C19.4850582,11.602006 18.3185871,12.6429032 16.0804749,12.6429032"></path>                            <path d="M21.1926182,8.61416331 L21.1926182,4.79775202 C21.1926182,4.29709677 21.5878466,3.89212702 22.0768719,3.89212702 C22.5658973,3.89212702 22.9611256,4.29709677 22.9611256,4.79775202 L22.9611256,8.82606855 C22.9611256,10.0409778 23.8823609,10.9849194 25.1246547,10.9849194 C26.3659155,10.9849194 27.3063648,10.0409778 27.3063648,8.82606855 L27.3063648,4.79775202 C27.3063648,4.29709677 27.7015931,3.89212702 28.1902052,3.89212702 C28.679024,3.89212702 29.0740457,4.29709677 29.0740457,4.79775202 L29.0740457,8.61416331 C29.0740457,10.8697581 27.4001618,12.6429032 25.1246547,12.6429032 C22.8481147,12.6429032 21.1926182,10.8697581 21.1926182,8.61416331"></path>                            <path d="M31.0324197,8.61416331 L31.0324197,4.79775202 C31.0324197,4.29709677 31.4272349,3.89212702 31.9164668,3.89212702 C32.405079,3.89212702 32.8003073,4.29709677 32.8003073,4.79775202 L32.8003073,8.82606855 C32.8003073,10.0409778 33.7225756,10.9849194 34.9636298,10.9849194 C36.2048906,10.9849194 37.1455465,10.0409778 37.1455465,8.82606855 L37.1455465,4.79775202 C37.1455465,4.29709677 37.5407748,3.89212702 38.0298002,3.89212702 C38.5192387,3.89212702 38.9136406,4.29709677 38.9136406,4.79775202 L38.9136406,8.61416331 C38.9136406,10.8697581 37.2401699,12.6429032 34.9636298,12.6429032 C32.6872964,12.6429032 31.0324197,10.8697581 31.0324197,8.61416331"></path>                        </g>                    </svg>                </a>            </span>        </div>        <span style="font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size:12px; font-style:normal; font-weight:400; height:auto; line-height:18px; margin:0; padding:0; white-space: nowrap;" >            <a style="color: #fff; text-decoration: underline;" href="https://<%=host%>/publishers?entryPoint=embed" onclick=\'window.IssuuReaders.links.usage("<%=embedId%>", "ycpt");\' target="_blank">Publish for Free</a>        </span>	</div></div>',
      "factory.templ": '    <div style="height:<%=topRatio%>%;"><%=embedCode%></div>    <div style="height:<%=bottomRatio%>%; width: auto; padding-left: 10px; padding-right: 10px; background-color: rgba(0,0,0,.7); display: flex; justify-content: space-between; align-items: center">        <div style="width: auto; display: flex; align-items: center;">            <span style="color: #fff; font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size:12px; font-style:normal; font-weight:400; height:auto; margin:0; padding:0; white-space: nowrap;" >                Powered by            </span>            <span style="width: 62px; height: 36px; padding-left: 5px;">                <a href="https://<%=host%>/explore" onclick=\'window.IssuuReaders.links.usage("<%=embedId%>", "ycpt");\' target="_blank">                    <svg width="100%" height="100%" viewBox="-2 0 60 14" style="fill: #fff">                        <g>                            <path d="M6.83590808,3.64127016 C5.02752664,3.6236996 3.54764132,5.11190524 3.53049341,6.96464718 C3.5133455,8.81760081 4.96575284,10.3339617 6.77413428,10.3515323 C8.58251571,10.3688911 10.0626076,8.88089718 10.0795489,7.02815524 C10.0966969,5.17520161 8.64428951,3.65862903 6.83590808,3.64127016 L6.83590808,3.64127016 Z M6.78942278,8.69524194 C5.87376569,8.68635081 5.13826495,7.91853831 5.14694221,6.9803125 C5.15561947,6.04208669 5.90496249,5.28845766 6.82061958,5.29734879 C7.73627667,5.30623992 8.4717774,6.07405242 8.46310015,7.01248992 C8.45442289,7.95050403 7.70507987,8.70413306 6.78942278,8.69524194 L6.78942278,8.69524194 Z"></path>                            <path d="M6.75843258,0.424375 C6.74830911,0.424375 6.73818565,0.424798387 6.72785558,0.424798387 L6.72785558,0.424163306 L0.856245804,0.424163306 C0.562045511,0.424163306 0.321148361,0.67078629 0.321148361,0.972449597 L0.321148361,7.02053427 C0.321148361,10.6633569 3.2032369,13.6164819 6.75843258,13.6164819 C10.3138349,13.6164819 13.1957168,10.6633569 13.1957168,7.02053427 C13.1957168,3.3775 10.3138349,0.424375 6.75843258,0.424375 L6.75843258,0.424375 Z M2.33592452,6.92929435 C2.35927047,4.40019153 4.37921167,2.36920363 6.84747775,2.39291331 C9.31574383,2.41683468 11.2980836,4.48677419 11.274531,7.01566532 C11.2513917,9.54455645 9.23124389,11.5755444 6.76318441,11.551623 C4.29491833,11.5277016 2.31257857,9.45797379 2.33592452,6.92929435 L2.33592452,6.92929435 Z"></path>                            <path d="M6.83590808,3.64127016 C5.02752664,3.6236996 3.54764132,5.11190524 3.53049341,6.96464718 C3.5133455,8.81760081 4.96575284,10.3339617 6.77413428,10.3515323 C8.58251571,10.3688911 10.0626076,8.88089718 10.0795489,7.02815524 C10.0966969,5.17520161 8.64428951,3.65862903 6.83590808,3.64127016 L6.83590808,3.64127016 Z M6.78942278,8.69524194 C5.87376569,8.68635081 5.13826495,7.91853831 5.14694221,6.9803125 C5.15561947,6.04208669 5.90496249,5.28845766 6.82061958,5.29734879 C7.73627667,5.30623992 8.4717774,6.07405242 8.46310015,7.01248992 C8.45442289,7.95050403 7.70507987,8.70413306 6.78942278,8.69524194 L6.78942278,8.69524194 Z"></path>                            <path d="M6.75843258,0.424375 C6.74830911,0.424375 6.73818565,0.424798387 6.72785558,0.424798387 L6.72785558,0.424163306 L0.856245804,0.424163306 C0.562045511,0.424163306 0.321148361,0.67078629 0.321148361,0.972449597 L0.321148361,7.02053427 C0.321148361,10.6633569 3.2032369,13.6164819 6.75843258,13.6164819 C10.3138349,13.6164819 13.1957168,10.6633569 13.1957168,7.02053427 C13.1957168,3.3775 10.3138349,0.424375 6.75843258,0.424375 L6.75843258,0.424375 Z M2.33592452,6.92929435 C2.35927047,4.40019153 4.37921167,2.36920363 6.84747775,2.39291331 C9.31574383,2.41683468 11.2980836,4.48677419 11.274531,7.01566532 C11.2513917,9.54455645 9.23124389,11.5755444 6.76318441,11.551623 C4.29491833,11.5277016 2.31257857,9.45797379 2.33592452,6.92929435 L2.33592452,6.92929435 Z"></path>                        </g>                        <g transform="translate(17.000000, 0.000000)">                            <path d="M1.18803132,0.461209677 C1.75267275,0.461209677 2.22289738,0.943235887 2.22289738,1.52137097 C2.22289738,2.09950605 1.75267275,2.58110887 1.18803132,2.58110887 C0.624009688,2.58110887 0.153578461,2.09950605 0.153578461,1.52137097 C0.153578461,0.943235887 0.624009688,0.461209677 1.18803132,0.461209677 L1.18803132,0.461209677 Z M1.18803132,12.5656351 C0.661197927,12.5656351 0.30419083,12.160877 0.30419083,11.6597984 L0.30419083,4.79775202 C0.30419083,4.29709677 0.680411851,3.89212702 1.18803132,3.89212702 C1.69627059,3.89212702 2.07228501,4.29709677 2.07228501,4.79775202 L2.07228501,11.6597984 C2.07228501,12.160877 1.71486471,12.5656351 1.18803132,12.5656351 L1.18803132,12.5656351 Z"></path>                            <path d="M7.56498795,12.6429032 C6.37971612,12.6429032 5.32646254,12.2574093 4.5742271,11.6597984 C4.31101701,11.4478931 4.19779948,11.1587198 4.19779948,10.9080746 C4.19779948,10.522369 4.49902422,10.2715121 4.87524524,10.2715121 C5.17585017,10.2715121 5.36427059,10.3877319 5.57107852,10.5420565 C6.07890458,10.9273387 6.79353858,11.2931452 7.69679959,11.2931452 C8.71265833,11.2931452 9.25808584,10.9080746 9.25808584,10.3104637 C9.25808584,9.65548387 8.73125245,9.40462702 7.41437558,9.03797379 C5.10085389,8.40268145 4.25440825,7.59231855 4.25440825,6.20509073 C4.25440825,4.75943548 5.5522778,3.81485887 7.58399527,3.81485887 C8.35503143,3.81485887 9.2200712,4.00771169 9.91631767,4.35446573 C10.4241437,4.60511089 10.781564,4.91333669 10.781564,5.29904234 C10.781564,5.64579637 10.5935568,5.97392137 10.1045315,5.97392137 C9.85991551,5.97392137 9.61529954,5.858125 9.33328872,5.70337702 C8.80624873,5.41462702 8.22321978,5.26114919 7.54639383,5.26114919 C6.60573797,5.26114919 5.96610026,5.51137097 5.96610026,6.18561492 C5.96610026,6.84144153 6.53053509,7.05292339 7.8848068,7.45789315 C9.91631767,8.05529234 10.9697779,8.61416331 10.9697779,10.1754032 C10.9697779,11.602006 9.80351335,12.6429032 7.56498795,12.6429032"></path>                            <path d="M16.0804749,12.6429032 C14.8952031,12.6429032 13.8415363,12.2574093 13.0893009,11.6597984 C12.8258842,11.4478931 12.7130799,11.1587198 12.7130799,10.9080746 C12.7130799,10.522369 13.014098,10.2715121 13.390319,10.2715121 C13.6913372,10.2715121 13.8791378,10.3877319 14.0863589,10.5420565 C14.5939784,10.9273387 15.3086124,11.2931452 16.2114602,11.2931452 C17.2275255,11.2931452 17.772953,10.9080746 17.772953,10.3104637 C17.772953,9.65548387 17.2465328,9.40462702 15.9298626,9.03797379 C13.6159277,8.40268145 12.7696886,7.59231855 12.7696886,6.20509073 C12.7696886,4.75943548 14.0677648,3.81485887 16.0990691,3.81485887 C16.8703118,3.81485887 17.7357648,4.00771169 18.4318047,4.35446573 C18.9392175,4.60511089 19.297051,4.91333669 19.297051,5.29904234 C19.297051,5.64579637 19.1088372,5.97392137 18.6193987,5.97392137 C18.3749893,5.97392137 18.1303733,5.858125 17.8485691,5.70337702 C17.3219423,5.41462702 16.7385002,5.26114919 16.0614676,5.26114919 C15.1208118,5.26114919 14.4813806,5.51137097 14.4813806,6.18561492 C14.4813806,6.84144153 15.0454023,7.05292339 16.4000872,7.45789315 C18.4318047,8.05529234 19.4850582,8.61416331 19.4850582,10.1754032 C19.4850582,11.602006 18.3185871,12.6429032 16.0804749,12.6429032"></path>                            <path d="M21.1926182,8.61416331 L21.1926182,4.79775202 C21.1926182,4.29709677 21.5878466,3.89212702 22.0768719,3.89212702 C22.5658973,3.89212702 22.9611256,4.29709677 22.9611256,4.79775202 L22.9611256,8.82606855 C22.9611256,10.0409778 23.8823609,10.9849194 25.1246547,10.9849194 C26.3659155,10.9849194 27.3063648,10.0409778 27.3063648,8.82606855 L27.3063648,4.79775202 C27.3063648,4.29709677 27.7015931,3.89212702 28.1902052,3.89212702 C28.679024,3.89212702 29.0740457,4.29709677 29.0740457,4.79775202 L29.0740457,8.61416331 C29.0740457,10.8697581 27.4001618,12.6429032 25.1246547,12.6429032 C22.8481147,12.6429032 21.1926182,10.8697581 21.1926182,8.61416331"></path>                            <path d="M31.0324197,8.61416331 L31.0324197,4.79775202 C31.0324197,4.29709677 31.4272349,3.89212702 31.9164668,3.89212702 C32.405079,3.89212702 32.8003073,4.29709677 32.8003073,4.79775202 L32.8003073,8.82606855 C32.8003073,10.0409778 33.7225756,10.9849194 34.9636298,10.9849194 C36.2048906,10.9849194 37.1455465,10.0409778 37.1455465,8.82606855 L37.1455465,4.79775202 C37.1455465,4.29709677 37.5407748,3.89212702 38.0298002,3.89212702 C38.5192387,3.89212702 38.9136406,4.29709677 38.9136406,4.79775202 L38.9136406,8.61416331 C38.9136406,10.8697581 37.2401699,12.6429032 34.9636298,12.6429032 C32.6872964,12.6429032 31.0324197,10.8697581 31.0324197,8.61416331"></path>                            <path d="M1.18803132,0.461209677 C1.75267275,0.461209677 2.22289738,0.943235887 2.22289738,1.52137097 C2.22289738,2.09950605 1.75267275,2.58110887 1.18803132,2.58110887 C0.624009688,2.58110887 0.153578461,2.09950605 0.153578461,1.52137097 C0.153578461,0.943235887 0.624009688,0.461209677 1.18803132,0.461209677 L1.18803132,0.461209677 Z M1.18803132,12.5656351 C0.661197927,12.5656351 0.30419083,12.160877 0.30419083,11.6597984 L0.30419083,4.79775202 C0.30419083,4.29709677 0.680411851,3.89212702 1.18803132,3.89212702 C1.69627059,3.89212702 2.07228501,4.29709677 2.07228501,4.79775202 L2.07228501,11.6597984 C2.07228501,12.160877 1.71486471,12.5656351 1.18803132,12.5656351 L1.18803132,12.5656351 Z"></path>                            <path d="M7.56498795,12.6429032 C6.37971612,12.6429032 5.32646254,12.2574093 4.5742271,11.6597984 C4.31101701,11.4478931 4.19779948,11.1587198 4.19779948,10.9080746 C4.19779948,10.522369 4.49902422,10.2715121 4.87524524,10.2715121 C5.17585017,10.2715121 5.36427059,10.3877319 5.57107852,10.5420565 C6.07890458,10.9273387 6.79353858,11.2931452 7.69679959,11.2931452 C8.71265833,11.2931452 9.25808584,10.9080746 9.25808584,10.3104637 C9.25808584,9.65548387 8.73125245,9.40462702 7.41437558,9.03797379 C5.10085389,8.40268145 4.25440825,7.59231855 4.25440825,6.20509073 C4.25440825,4.75943548 5.5522778,3.81485887 7.58399527,3.81485887 C8.35503143,3.81485887 9.2200712,4.00771169 9.91631767,4.35446573 C10.4241437,4.60511089 10.781564,4.91333669 10.781564,5.29904234 C10.781564,5.64579637 10.5935568,5.97392137 10.1045315,5.97392137 C9.85991551,5.97392137 9.61529954,5.858125 9.33328872,5.70337702 C8.80624873,5.41462702 8.22321978,5.26114919 7.54639383,5.26114919 C6.60573797,5.26114919 5.96610026,5.51137097 5.96610026,6.18561492 C5.96610026,6.84144153 6.53053509,7.05292339 7.8848068,7.45789315 C9.91631767,8.05529234 10.9697779,8.61416331 10.9697779,10.1754032 C10.9697779,11.602006 9.80351335,12.6429032 7.56498795,12.6429032"></path>                            <path d="M16.0804749,12.6429032 C14.8952031,12.6429032 13.8415363,12.2574093 13.0893009,11.6597984 C12.8258842,11.4478931 12.7130799,11.1587198 12.7130799,10.9080746 C12.7130799,10.522369 13.014098,10.2715121 13.390319,10.2715121 C13.6913372,10.2715121 13.8791378,10.3877319 14.0863589,10.5420565 C14.5939784,10.9273387 15.3086124,11.2931452 16.2114602,11.2931452 C17.2275255,11.2931452 17.772953,10.9080746 17.772953,10.3104637 C17.772953,9.65548387 17.2465328,9.40462702 15.9298626,9.03797379 C13.6159277,8.40268145 12.7696886,7.59231855 12.7696886,6.20509073 C12.7696886,4.75943548 14.0677648,3.81485887 16.0990691,3.81485887 C16.8703118,3.81485887 17.7357648,4.00771169 18.4318047,4.35446573 C18.9392175,4.60511089 19.297051,4.91333669 19.297051,5.29904234 C19.297051,5.64579637 19.1088372,5.97392137 18.6193987,5.97392137 C18.3749893,5.97392137 18.1303733,5.858125 17.8485691,5.70337702 C17.3219423,5.41462702 16.7385002,5.26114919 16.0614676,5.26114919 C15.1208118,5.26114919 14.4813806,5.51137097 14.4813806,6.18561492 C14.4813806,6.84144153 15.0454023,7.05292339 16.4000872,7.45789315 C18.4318047,8.05529234 19.4850582,8.61416331 19.4850582,10.1754032 C19.4850582,11.602006 18.3185871,12.6429032 16.0804749,12.6429032"></path>                            <path d="M21.1926182,8.61416331 L21.1926182,4.79775202 C21.1926182,4.29709677 21.5878466,3.89212702 22.0768719,3.89212702 C22.5658973,3.89212702 22.9611256,4.29709677 22.9611256,4.79775202 L22.9611256,8.82606855 C22.9611256,10.0409778 23.8823609,10.9849194 25.1246547,10.9849194 C26.3659155,10.9849194 27.3063648,10.0409778 27.3063648,8.82606855 L27.3063648,4.79775202 C27.3063648,4.29709677 27.7015931,3.89212702 28.1902052,3.89212702 C28.679024,3.89212702 29.0740457,4.29709677 29.0740457,4.79775202 L29.0740457,8.61416331 C29.0740457,10.8697581 27.4001618,12.6429032 25.1246547,12.6429032 C22.8481147,12.6429032 21.1926182,10.8697581 21.1926182,8.61416331"></path>                            <path d="M31.0324197,8.61416331 L31.0324197,4.79775202 C31.0324197,4.29709677 31.4272349,3.89212702 31.9164668,3.89212702 C32.405079,3.89212702 32.8003073,4.29709677 32.8003073,4.79775202 L32.8003073,8.82606855 C32.8003073,10.0409778 33.7225756,10.9849194 34.9636298,10.9849194 C36.2048906,10.9849194 37.1455465,10.0409778 37.1455465,8.82606855 L37.1455465,4.79775202 C37.1455465,4.29709677 37.5407748,3.89212702 38.0298002,3.89212702 C38.5192387,3.89212702 38.9136406,4.29709677 38.9136406,4.79775202 L38.9136406,8.61416331 C38.9136406,10.8697581 37.2401699,12.6429032 34.9636298,12.6429032 C32.6872964,12.6429032 31.0324197,10.8697581 31.0324197,8.61416331"></path>                        </g>                    </svg>                </a>            </span>        </div>        <span style="font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; font-size:12px; font-style:normal; font-weight:400; height:auto; line-height:18px; margin:0; padding:0; white-space: nowrap;" >            <a style="color: #fff; text-decoration: underline;" href="https://<%=host%>/publishers?entryPoint=embed" onclick=\'window.IssuuReaders.links.usage("<%=embedId%>", "ycpt");\' target="_blank">Publish for Free</a>        </span>    </div>',
      "htmlembed.templ": '<div class="pcover" href="<%=issuuPath+username%>/docs/<%=name%>?e=<%=embedId%>" style="width:100%; height:100%; display:block;    background-color:<%=embedBackgroundColor%>; position:relative; text-align:center; font:bold 18px Helvetica Neue, HelveticaNeue, Helvetica, Trebuchet, Trebuchet MS, Arial, sans-serif;">    <a href="<%=issuuPath+username%>/docs/<%=name%>?e=<%=embedId%>" class="read-link" style="display: initial;" target="_blank">        <img style="width:auto; height:auto; max-width:90%; max-height:90%; margin:0; position:absolute; top:50%; left:50%; margin-right:-50%; transform: translate(-50%, -50%); -webkit-box-shadow:0px 2px 8px rgba(50, 50, 50, 0.7); -moz-box-shadow:0px 2px 8px rgba(50, 50, 50, 0.7); box-shadow:0px 2px 8px rgba(50, 50, 50, 0.7);"            src="<%=imgPath+documentId%>/jpg/page_<%=pageNumber%>_thumb_large.jpg" alt="<%=imgAlt%>" >        <span style="position:absolute; top:50%; left:50%; z-index:2; display:block;            width:150px; height:50px; margin-top:-25px; margin-left:-75px;            line-height:48px; vertical-align:middle; text-align:center; background-color: rgb(0,0,0);            -moz-border-radius: 15px;            -webkit-border-radius: 15px;            -ms-border-radius: 15px;            -o-border-radius: 15px;            border-radius: 15px;            background-color: rgba(0,0,0, 0.7); border: 2px solid white; color: white; text-decoration: none;            text-indent: initial;">Read now        </span>    </a>    <a href="<%=issuuPath%>" target="_blank">        <img href="<%=issuuPath%>" alt="issuu is the world&#39;s largest collection of free-to-read publications including magazines, newspapers, portfolios, and catalogs. You can publish too." style="width:58px; display:block; position:absolute; bottom:10px; right:10px; opacity:0.3; border-width:0px;"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAaCAYAAAAOl/o1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTlGNEFEMTBBMTcxMUUyQUI1N0I0NkQ0RkNFMjg5MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTlGNEFEMjBBMTcxMUUyQUI1N0I0NkQ0RkNFMjg5MiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1OUY0QUNGMEExNzExRTJBQjU3QjQ2RDRGQ0UyODkyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1OUY0QUQwMEExNzExRTJBQjU3QjQ2RDRGQ0UyODkyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dJYXrgAABBRJREFUeNrsWF9IU2EU36YIU5YZ9hA+RCr5r5UwwZc096LUg+ReoubDXhQShPlkOF/1zVB8yD8PvWwW/dnCytoeWihEDYWVoQYpDlwFM8sNG2m5zm/cTz5u310aEub1wOH77vnOPfc7v3u+c8692kQioRFQNnGhZn9TmPiTXJjOzdOIrxHbVAAGIwDylNhOvAqBVoqQDGIf8TmNOgnRUolRJwkcKgYDlEd8k0UIouMj8RG5ViwW+xoMBt+Vl5cXGQyGwyoA5jQi5IQIDJDZbH5cXV0dwaiSSDHppPwhpFAolM6PKiB9Skf9fn/Z6Ojo+/r6+jK1JBPkECONbzQHBGrRpVqdmJh4VVFR4fJ4PH752vDw8JO6ujoX1hl3d3c/CIfDIVFyxhqvq6TP7IrsJOsjybEOPbkM9pR8wRqzC7/eEmH8TRERklAgk8nkJJWHGEVyJR4fH3/JdJeWlhZzc3Nvp9J3u93PmD6TdXV1eUR7gpzppJLJibc7LZHgGVd3nCzxZqamptDaa8jgj6qqqmOYLy8vfxsYGPjg8/my5+bmVkie1G9vb39Bawa9Xr/e19enLy4uTlY06AwODq7A1uzs7GpDQ8M/OxeniPhRqXXfFkUike/svo6Ojov8msgpcnwTY2lpabypqcnC5ACMrvdcEtHt9IaSkpJsNlfKLzxZLJYsjIiEtra2uzi7ezmr7hgQigKz1WqNMSfJ4TWtVvtInugYtba21uTn50cx7+3t1RuNxsXMzEx3Y2Pjrb0Iju5vbnI6nZcpcR6tra1dZTLkjubm5p8FBQUjvKNo+efn568MDQ2lMWDi8XiGy+UyABwA898DIuWASq/Xa41Go2fhLFWeJDgLCwuHbDbba7k+5YvzAIaqjhHJmCrPGuQARlQuKVdtKOSwjVT7QonfjmzXAeEjAM5OTk5a+aOk+FmZl3ccyZgcu8RAobK7xtZZ1FEUbsodwTXkvB6IOumt/zf9/f3P5c/kZbzurgCCPIGcgVCXN0/kZHKzzFEQcgtyBqKAd5CfUyne2kdnZ2ehVMaz6Ct7DEkbDRSeS0fOCznWe3p6zvBllAHkcDjSsTfcA8YcMgaiqNRuu3VHFcHbxnFABECGDVIkfEEewDXyQk5OTgIfgGyzOEKIGtYhsg0lPyelozUzM6OHDfQngUDgJL9ROI98pLRp3j4PMADEkRXdg30Gg8ELf/iN0YJOtUipu6MHj4m6RnSfdrv9Dj3ExTpAcuw+vQEn36UygoxAHOE7Vswhgy3Rs9FJwh7sMvvQhzyRgrBXfl+YK3W9ArIhQvR042d8+h5822kqcXbjxDcOsNAEiQP8T+ZJYqNKwVghriGeZtl9XfrrfF1aVAvB73v4lwowWJURKSr+Z91nYEzLhb8EGABnI1kQq06oHQAAAABJRU5ErkJggg==" >    </a></div>'
    }, n === c) var n = {};
  if (n.embederror = function () {
      return {
        render: function (a, b, c, d, e) {
          var f;
          if (e.responseText) f = e.responseText; else switch (e.status) {
            case 0:
            case 408:
              f = "Server not responding";
              break;
            case 404:
              f = "Data not found";
              break;
            default:
              f = "Error loading data"
          }
          y(a).html(m.render("error.templ", {
            msg: f,
            id: c.substr(c.indexOf("/") + 1),
            err: y.map(e, function (a, b) {
              return "responseText" !== b ? a : ""
            }).filter(function (a) {
              return "" !== a
            }).join(" | "),
            browser: y.map(y.browser, function (a, b) {
              return "webkit" === b ? "" : a === !0 ? b : a
            }).filter(function (a) {
              return "" !== a
            }).join(" "),
            date: parseInt((new Date).getTime() / 1e3, 10)
          })), d && d()
        }, getReader: function (a) {
          return c
        }
      }
    }(), n === c) var n = {};
  if (n.type = {
      HTML5: "html5",
      READER3: "reader3",
      ERROR: "error"
    }, n.browserPrefixes = ["-webkit-", "-o-", "-ms-", "-moz-"], n.testAllPrefixesForCalcCss = function () {
      var a, c = !1;
      for (a = 0; a < n.browserPrefixes.length; a++) {
        var d = b.createElement("div");
        d.style.cssText = "width:" + n.browserPrefixes[a] + "calc(10px);", d.style.length && (c = !0)
      }
      return c
    }, n.addLinks = function (b, c, d, e, f, g) {
      var h = 30, i = {
        embedId: g,
        embedCode: b,
        username: c,
        name: d,
        host: l.host,
        bottomRatio: h / e * 100,
        topRatio: (e - h) / e * 100
      };
      f && (f.sendMonitorPingback({
        type: "reader3-features.LINK_BELOW_EMBED_OPEN",
        opportunity: 1
      }), f.sendMonitorPingback({
        type: "reader3-features.LINK_BELOW_EMBED_YCPT",
        opportunity: 1
      }), a.IssuuReaders.links = {
        _firstUsage: {}, _tracker: f, usage: function (a, b) {
          var c = a + b, d = this._firstUsage[c] ? 0 : 1;
          "open" === b ? (this._tracker.sendMonitorPingback({
            type: "reader3-features.LINK_BELOW_EMBED_OPEN",
            usageRepeat: 1,
            usageFirst: d
          }), this._firstUsage[c] = !0) : "ycpt" === b && (this._tracker.sendMonitorPingback({
            type: "reader3-features.LINK_BELOW_EMBED_YCPT",
            usageRepeat: 1,
            usageFirst: d
          }), this._firstUsage[c] = !0)
        }
      });
      var j;
      j = n.testAllPrefixesForCalcCss() ? "factory-fluid.templ" : "factory.templ";
      var k = m.render(j, i);
      return k
    }, n.get = function () {
      var a = n.type, b = /Opera Mini/, d = /MSIE [1-9]\./;
      a.READER3;
      return function (e, f, g) {
        switch (g === c && (g = a.READER3), g === a.READER3 && d.test(navigator.userAgent) && (g = a.HTML5), g === a.READER3 && b.test(navigator.userAgent) && (g = a.HTML5), g) {
          case a.HTML5:
            return n.embedHtml;
          case a.READER3:
            return n.reader3;
          case a.ERROR:
            return n.embederror;
          default:
            throw new Error("Don't know the expected type: " + g)
        }
      }
    }(), n === c) var n = {};
  if (n.embedHtml = function () {
      function b(a) {
        return ("" + a).replace(/[&<>'"`]/g, function (a) {
          return f[a]
        })
      }

      function c(a, c) {
        "use strict";
        var f = {
          documentId: a.documentId,
          name: a.name,
          pageNumber: a.pageNumber ? a.pageNumber + "" : "1",
          embedId: c,
          username: a.username,
          issuuPath: e,
          embedBackgroundColor: a.embedBackground ? a.embedBackground : "none",
          imgPath: d,
          imgAlt: b((a.title || "") + (a.documentCreator ? " -- " + a.documentCreator : ""))
        }, g = m.render("htmlembed.templ", f);
        return g
      }

      var d = l.imgProto + l.imgHost, e = "http://" + l.host + "/",
        f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" };
      return {
        render: function (b, d, e, f) {
          var g = o.create(d, e);
          g.sendMonitorPingback({
            type: "READER3_EMBED_NOT_INJECTED",
            embedKind: a.issuuIframe ? "iframe" : "script"
          });
          var h = c(d, e);
          d.showHtmlLink !== !1 && (h = n.addLinks(h, d.username, d.name, y(b).height())), y(b).html(h), y(".read-link", b).click(function (b) {
            b.preventDefault();
            var c = this;
            g.docClick(), y(this).unbind("click"), a.setTimeout(function () {
              c.click()
            }, 1e3)
          }), g.docImpression(), f && f()
        }, getReader: function (a) {
          var b = function () {
            return 1
          };
          return {
            getPageNumber: b,
            setPageNumber: b,
            getPageCount: b,
            goToPreviousPage: b,
            goToNextPage: b,
            goToFirstPage: b,
            goToLastPage: b,
            addEventListener: b
          }
        }
      }
    }(), n === c) var n = {};
  if (n.reader3 = function () {
      function d(b) {
        var d = b.origin || b.originalEvent.origin;
        if (d === "https://e." + l.host) {
          var e = g[b.data.identifier];
          if (e) switch (b.data.type) {
            case"issuu.documentLoaded":
              e.pageCount = b.data.pageCount, e.pageNumber = b.data.pageNumbers[0], e.source = b.source, e.onDocumentLoadCallback && (e.onDocumentLoadCallback(), e.onDocumentLoadCallback = c);
              break;
            case"issuu.pageChanged":
              e.pageNumber = b.data.pageNumbers[0], "string" == typeof e.onPageChangeCallback ? a[e.onPageChangeCallback] && a[e.onPageChangeCallback](e.pageNumber) : "function" == typeof e.onPageChangeCallback && e.onPageChangeCallback(e.pageNumber)
          }
        }
      }

      function e(a, b) {
        if (a.source) {
          var c = "https://e." + l.host;
          a.source.postMessage(b, c)
        }
      }

      function f() {
        return h++
      }

      var g = {};
      a.addEventListener ? a.addEventListener("message", d) : a.attachEvent && a.attachEvent("onmessage", d);
      var h = 0;
      return {
        render: function (d, e, h, i) {
          var k = o.create(e, h);
          k.sendMonitorPingback({
            type: "READER3_EMBED_ATTEMPT_INJECT",
            embedKind: a.issuuIframe ? "iframe" : "script"
          });
          var m = CryptoJS.MD5(e.username + "|" + (new Date).getDay()),
            p = Math.abs(m.words[3] % 100), q = p > 90, r = e.documentId,
            s = e.pageNumber ? e.pageNumber + "" : "1", t = d.offsetWidth, u = d.offsetHeight, v = {
              hostUrl: a.issuuIframe ? "unknown" : b.location.toString(),
              hostReferrer: a.issuuIframe ? "unknown" : b.referrer.toString(),
              embedId: h.toString(),
              embedType: a.issuuIframe ? "iframe" : "script",
              viewMode: e.viewMode && "singlePage" === e.viewMode ? "SINGLE_PAGE_SPREAD" : "DOUBLE_PAGE_SPREAD",
              autoFlip: e.autoFlip !== c ? e.autoFlip : !1,
              backgroundColor: e.embedBackground || "rgba(0, 0, 0, 0.1)",
              fullscreenBackgroundColor: e.backgroundColor,
              logo: e.logo,
              backgroundImage: e.backgroundImage,
              backgroundStretch: e.backgroundStretch,
              backgroundTile: e.backgroundTile,
              titleBarEnabled: e.titleBarEnabled !== c ? e.titleBarEnabled : !1,
              shareMenuEnabled: e.shareMenuEnabled !== c ? e.shareMenuEnabled : !0,
              shareButtonEnabled: e.shareButtonEnabled !== c ? e.shareButtonEnabled : !0,
              proSidebarEnabled: e.proSidebarEnabled !== c ? e.proSidebarEnabled : !1
            }, w = {
              documentId: r,
              username: e.username.toLowerCase(),
              documentName: e.name.toLowerCase(),
              initialPageNumber: s,
              embedId: h.toString(),
              embedConfig: v,
              loadStartTimestamp: j,
              features: {
                showIssuuBranding: e.showHtmlLink !== c ? e.showHtmlLink : !0,
                forcePageFlip: y(d).attr("data-force-page-flip") !== c
              },
              identifier: h + "-" + f()
            }, x = new Image, z = 450 / Math.max(2, a.devicePixelRatio || 1), A = z >= t && z >= u,
            B = A ? "_thumb_large" : "";
          x.src = "https://" + l.imgHost + r + "/jpg/page_" + s + B + ".jpg";
          var C = "https://e." + l.host + "/issuu-reader3-embed-files/" + (q ? "latest" : "stable") + "/embed.html?t=" + Math.floor(new Date / 1e3 / 60 / 60 / 24) + "#iargs=" + a.btoa(JSON.stringify(w)),
            D = '<iframe src="' + C + '" style="border:none;width:100%;height:100%" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen />';
          e.showHtmlLink !== !1 && (D = n.addLinks(D, e.username, e.name, y(d).height(), k, h)), y(d).html(D), k.sendMonitorPingback({
            type: "READER3_EMBED_INJECTED",
            embedKind: a.issuuIframe ? "iframe" : "script"
          }), g[w.identifier] = {
            element: d,
            onDocumentLoadCallback: i
          }, a.parent.postMessage(JSON.stringify({
            src: a.location.toString(),
            context: "iframe.resize",
            height: 400
          }), "*")
        }, getReader: function (a) {
          var b = {};
          for (var c in g) if (g[c].element === a) {
            b = g[c];
            break
          }
          return {
            getPageNumber: function () {
              return b.pageNumber
            }, setPageNumber: function (a) {
              e(b, { type: "issuu.setPageNumber", pageNumber: a })
            }, getPageCount: function () {
              return b.pageCount
            }, goToPreviousPage: function () {
              e(b, { type: "issuu.goToPreviousPage" })
            }, goToNextPage: function () {
              e(b, { type: "issuu.goToNextPage" })
            }, goToFirstPage: function () {
              e(b, { type: "issuu.goToFirstPage" })
            }, goToLastPage: function () {
              e(b, { type: "issuu.goToLastPage" })
            }, addEventListener: function (a, c) {
              "change" === a && (b.onPageChangeCallback = c)
            }
          }
        }
      }
    }(), o === c) var o = {};
  if (o.PINGBACK_SEND_MODE = {
      JQUERY: "SEND_JQUERY",
      XDR: "SEND_XDR",
      IFRAME: "SEND_IFRAME",
      COOKIE: "SEND_COOKIE",
      LOG: "LOG",
      CALLBACKFN: "CALLBACKFN",
      ALL: "SEND_ALL"
    }, o.PingbackHelper = function () {
      function b() {
        return l.pingbackProto + l.pingbackHost + "ping"
      }

      function c(a) {
        console.log(JSON.parse(a), a)
      }

      function d(a) {
        var c = b();
        y.ajax({ type: "POST", url: c, data: a, crossDomain: !0 })
      }

      function e(c) {
        if (a.XDomainRequest) {
          var d = b(), e = new XDomainRequest;
          e.open("POST", d), e.send(c)
        }
      }

      function f(c) {
        var d = b(), e = "pingback", f = y.base64.encode(c), g = .04;
        r.setCookie(e, f, g);
        var h = new Image(1, 1);
        h.src = d + "?" + (new Date).getTime(), a.setTimeout(function () {
          r.clearCookie(e)
        }, 100)
      }

      function g(c) {
        function d(a) {
          var b = "post_frame" + a;
          y("body").append('<iframe id="' + b + '" style="width: 0; height: 0; border: none;"></iframe>'), g = y("iframe#" + b)
        }

        function e() {
          g.remove()
        }

        function f(a) {
          var c = b(), d = g.contents().find("body"), e = '<form method="post" action="' + c + '">';
          e += '<textarea name="data">' + a + "</textarea>", e += "</form>", y(e).appendTo(d);
          var f = y("form", d);
          f.length > 0 && f[0].submit()
        }

        var g;
        d(p++), a.setTimeout(function () {
          f(c), a.setTimeout(function () {
            e()
          }, 300)
        }, 1)
      }

      function h(a) {
        f(a), g(a), e(a), d(a)
      }

      function i() {
        return y.browser.msie ? a.XDomainRequest ? o.PINGBACK_SEND_MODE.XDR : o.PINGBACK_SEND_MODE.COOKIE : o.PINGBACK_SEND_MODE.JQUERY
      }

      function j(a) {
        switch (m || (m = i()), m) {
          case o.PINGBACK_SEND_MODE.LOG:
            c(a);
            break;
          case o.PINGBACK_SEND_MODE.JQUERY:
            d(a);
            break;
          case o.PINGBACK_SEND_MODE.XDR:
            e(a);
            break;
          case o.PINGBACK_SEND_MODE.IFRAME:
            g(a);
            break;
          case o.PINGBACK_SEND_MODE.COOKIE:
            f(a);
            break;
          case o.PINGBACK_SEND_MODE.ALL:
            h(a);
            break;
          case o.PINGBACK_SEND_MODE.CALLBACKFN:
            n(b(), a)
        }
      }

      function k(a, b) {
        m = a, b && (n = b)
      }

      var m, n, p = 0;
      return { setSendMode: k, send: j }
    }(), o === c) var o = {};
  if ("undefined" != typeof JSON3 && "undefined" != typeof JSON3.noConflict) var p = JSON3.noConflict();
  var q = p || JSON;
  o.create = function (d, e) {
    function f(c) {
      return {
        version: "1.2.0",
        origin: "embed:" + (a.issuuIframe ? "iframe" : "script") + ":build" + k,
        type: "signal",
        embed_id: e,
        username: r.getCookie("site.model.username") || "",
        location: a.issuuIframe ? b.referrer : location.href,
        source: "external",
        disco_contexts: [],
        contexts: [{
          doc_id: d.documentId,
          doc_creator: d.username,
          doc_name: d.name,
          ad_id: null,
          pages: [d.pageNumber || 1],
          display_size: y(a).width() + "x" + y(a).height(),
          events: c
        }]
      }
    }

    function g(a) {
      var b = f(a);
      b.disco_contexts.toJSON = c, b.contexts.toJSON = c, b.contexts[0].pages.toJSON = c, b.contexts[0].events.toJSON = c, "undefined" != typeof q.stringify && o.PingbackHelper.send(q.stringify(b))
    }

    function h() {
      return {
        version: "2.0.0",
        origin: "embed:" + (a.issuuIframe ? "iframe" : "script") + ":build" + k,
        type: "monitor",
        data: { embed_id: e, document_id: d.documentId, version: "1.0.0" }
      }
    }

    function i(a) {
      var b = h();
      y.extend(b.data, a), "undefined" != typeof q.stringify && o.PingbackHelper.send(q.stringify(b))
    }

    return {
      docClick: function () {
        g([{ type: "embed_click" }])
      }, docImpression: function () {
        g([{ type: "document_impression" }, { type: "page_impression", page: d.pageNumber || 1 }])
      }, sendMonitorPingback: i
    }
  };
  var r = function () {
    function a(a, c, d) {
      var e;
      if (d) {
        var f = new Date;
        f.setTime(f.getTime() + 24 * d * 60 * 60 * 1e3), e = "; expires=" + f.toGMTString()
      } else e = "";
      b.cookie = a + "=" + c + e + "; path=/; domain=" + l.host
    }

    function c(a) {
      var c, d, e, f;
      for (c = a + "=", d = b.cookie.split(";"), e = 0; e < d.length; e++) {
        for (f = d[e]; " " === f.charAt(0);) f = f.substring(1, f.length);
        if (0 === f.indexOf(c)) return f.substring(c.length, f.length)
      }
      return null
    }

    function d(b) {
      a(b, "", -1)
    }

    return {
      getCookie: function (a) {
        return c(a)
      }, setCookie: function (b, c, d) {
        a(b, c, d)
      }, clearCookie: function (a) {
        d(a)
      }
    }
  }(), s = {};
  !function () {
    function a(a, b, c) {
      "function" != typeof c && (c = function (a) {
        return a
      }), s[a] = function (a) {
        return { target: b, value: c(a) }
      }
    }

    function b(a) {
      return !!a
    }

    a("id", "documentId"), a("du", "username", function (a) {
      return a.toLowerCase()
    }), a("dn", "name"), a("dt", "title"), a("dc", "documentCreator"), a("pg", "pageNumber"), a("st", "titleBarEnabled", b), a("sa", "proSidebarEnabled", b), a("bc", "embedBackground"), a("bi", "backgroundImage"), a("fc", "backgroundColor"), a("ss", "shareMenuEnabled", b), a("pr", "printButtonEnabled", b), a("sh", "shareButtonEnabled", b), a("se", "searchButtonEnabled", b), a("sl", "showHtmlLink", b), a("af", "autoFlip", b), a("sc", "clippingEnabled", b), a("vm", "viewMode", function (a) {
      return "s" === a ? "singlePage" : "doublePage"
    }), a("lg", "logo"), a("th", "theme"), a("lo", "layout"), a("lt", "linkTarget", function (a) {
      return "n" === a ? "_blank" : "_self"
    }), s.bp = function (a) {
      switch (a) {
        case"s":
          return { target: "backgroundStretch", value: !0 };
        case"t":
          return { target: "backgroundTile", value: !0 };
        default:
          return { target: "backgroundTile", value: !1 }
      }
    }
  }();
  var t = "data-configid", u = "data-url", v = "invalid", w = ".issuuembed", x = "issuu-isrendered",
    y = jQuery.noConflict(!0), z = {};
  !function () {
    "use strict";
    "object" != typeof a.IssuuReaders && (a.IssuuReaders = {
      loaded: !1,
      get: g,
      add: h
    }), y(b).ready(function () {
      a.IssuuReaders.add()
    })
  }();
  var A = function () {
    function b(a) {
      var b = /(?:https?:\/\/)?(?:[a-zA-Z0-9_\-\.]+\.)?t?issuu\.com\/([a-zA-Z0-9_\-\.]{4,40})\/docs\/([a-z0-9_.\-]{1,100})(\/\d+)?/,
        c = b.exec(a), d = c && c.length > 3 && "undefined" != typeof c[3] ? c[3] : "";
      return c && c.length > 2 ? c[1] + "/" + c[2] + d : j
    }

    function c(a) {
      var c = b(a).split("/");
      return l.configProto + l.apiHost + l.apiPath + "?action=issuu.document.get_anonymous&documentUsername=" + c[0] + "&name=" + c[1] + "&format=json"
    }

    function d(a) {
      return l.configProto + l.configHost + l.configPath + a + ".json?v=" + l.configVersion
    }

    function e(a) {
      var b = {};
      return y.each(a, function (a, c) {
        if ("function" == typeof s[a]) {
          var d = s[a](c);
          b[d.target] = d.value
        }
      }), b
    }

    function f(a, c) {
      var d = a.rsp._content.document, e = b(c).split("/"), f = {
        documentId: d.documentId,
        username: d.username,
        name: d.name,
        title: d.title,
        pageNumber: "undefined" != typeof e[2] ? parseInt(e[2], 10) : 1
      };
      return f
    }

    function g(a, b, c, d, e) {
      i[a]++, i[a] < l.retries ? h(a, b, c, d) : d && d(e)
    }

    function h(b, h, i, j) {
      "use strict";
      var k, l = a.setTimeout(function () {
        g(b, h, i, j, { status: 0 })
      }, 5500), m = function () {
        a.clearTimeout(l)
      }, n = {
        cache: !0, dataType: "json", crossDomain: !0, timeout: 5e3, success: function (a) {
          m(), i && i(e(a))
        }, error: function (a, c, d) {
          m(), g(b, h, i, j, {
            status: a.status,
            "X-Served-By": a.getResponseHeader("X-Served-By")
          })
        }
      };
      "embedid" === h ? (k = d(b, h), y.ajax(k, n)) : (k = c(b, h), y.ajax(k, y.extend(n, {
        success: function (a) {
          m();
          var c = {};
          i && "undefined" != typeof a.rsp && "ok" === a.rsp.stat && a.rsp._content && a.rsp._content.document ? i(f(a, b)) : "undefined" != typeof a.rsp && "fail" === a.rsp.stat ? ("undefined" != typeof a.rsp._content && "undefined" != typeof a.rsp._content.error && (c = {
            code: a.rsp._content.error.code,
            responseText: a.rsp._content.error.message
          }), g(b, h, i, j, c)) : g(b, h, i, j, c)
        }
      })))
    }

    var i = {}, j = "invalid";
    return {
      load: function (a, b, c, d) {
        i[a] = 0, "invalid" === a ? d && d({ responseText: "Invalid embed id" }) : h(a, b, c, d)
      }
    }
  }()
}(window, document);