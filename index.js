(() => {
  var xl = Object.create;
  var Yr = Object.defineProperty;
  var yl = Object.getOwnPropertyDescriptor;
  var _l = Object.getOwnPropertyNames;
  var wl = Object.getPrototypeOf,
    vl = Object.prototype.hasOwnProperty;
  var bl = (i) => Yr(i, "__esModule", { value: !0 });
  var nt = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
  var Tl = (i, e, t) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let r of _l(e)) !vl.call(i, r) && r !== "default" && Yr(i, r, { get: () => e[r], enumerable: !(t = yl(e, r)) || t.enumerable });
      return i;
    },
    Bt = (i) =>
      Tl(
        bl(
          Yr(
            i != null ? xl(wl(i)) : {},
            "default",
            i && i.__esModule && "default" in i ? { get: () => i.default, enumerable: !0 } : { value: i, enumerable: !0 },
          ),
        ),
        i,
      );
  var hs = nt((ig, ua) => {
    var bu = [
      { bg: "#100F10", text: "#FFFFFF", textInactive: "#6d6d6d", textHover: "#cccccc", bgLight: "#2a282a", id: "black", index: 0 },
      { bg: "#DB7676", text: "#F0DEDE", textInactive: "#e39393", textHover: "#f3c6c6", bgLight: "#d55f5f", id: "pink", index: 1 },
      { bg: "#7FB9BC", text: "#FFFFFF", textInactive: "#56979b", textHover: "#b5d6d8", bgLight: "#66a2a5", id: "aquamarine", index: 2 },
      { bg: "#5963FA", text: "#F6F6F4", textInactive: "#7b82e7", textHover: "#c1c3e9", bgLight: "#424bd3", id: "blue", index: 3 },
      { bg: "#446091", text: "#E7E6E4", textInactive: "#6580ad", textHover: "#9fbae9", bgLight: "#2c4570", id: "darkblue", index: 4 },
      { bg: "#EBEBEB", text: "#122438", textInactive: "#7c8598", textHover: "#3c526a", bgLight: "#bcc2c9", id: "grey", index: 5 },
      { bg: "#FFFFFF", text: "#000000", textInactive: "#8d8d8d", textHover: "#333333", bgLight: "#dfdfdf", id: "white", index: 6 },
      { bg: "#f5e1ce", text: "#F04924", textInactive: "#ebaf92", textHover: "#fd6e4e", bgLight: "#f1d7c0", id: "orange", index: 7 },
    ];
    ua.exports = bu;
  });
  var xa = nt((bg, ga) => {
    var tr = 1e3,
      rr = tr * 60,
      ir = rr * 60,
      sr = ir * 24,
      Mu = sr * 365.25;
    ga.exports = function (i, e) {
      e = e || {};
      var t = typeof i;
      if (t === "string" && i.length > 0) return Au(i);
      if (t === "number" && isNaN(i) === !1) return e.long ? Su(i) : Pu(i);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i));
    };
    function Au(i) {
      if (((i = String(i)), !(i.length > 100))) {
        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(i);
        if (!!e) {
          var t = parseFloat(e[1]),
            r = (e[2] || "ms").toLowerCase();
          switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return t * Mu;
            case "days":
            case "day":
            case "d":
              return t * sr;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return t * ir;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return t * rr;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return t * tr;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return t;
            default:
              return;
          }
        }
      }
    }
    function Pu(i) {
      return i >= sr
        ? Math.round(i / sr) + "d"
        : i >= ir
        ? Math.round(i / ir) + "h"
        : i >= rr
        ? Math.round(i / rr) + "m"
        : i >= tr
        ? Math.round(i / tr) + "s"
        : i + "ms";
    }
    function Su(i) {
      return Ur(i, sr, "day") || Ur(i, ir, "hour") || Ur(i, rr, "minute") || Ur(i, tr, "second") || i + " ms";
    }
    function Ur(i, e, t) {
      if (!(i < e)) return i < e * 1.5 ? Math.floor(i / e) + " " + t : Math.ceil(i / e) + " " + t + "s";
    }
  });
  var _a = nt((D, ya) => {
    D = ya.exports = cs.debug = cs.default = cs;
    D.coerce = Ou;
    D.disable = Ru;
    D.enable = Fu;
    D.enabled = Lu;
    D.humanize = xa();
    D.names = [];
    D.skips = [];
    D.formatters = {};
    var us;
    function Cu(i) {
      var e = 0,
        t;
      for (t in i) (e = (e << 5) - e + i.charCodeAt(t)), (e |= 0);
      return D.colors[Math.abs(e) % D.colors.length];
    }
    function cs(i) {
      function e() {
        if (!!e.enabled) {
          var t = e,
            r = +new Date(),
            s = r - (us || r);
          (t.diff = s), (t.prev = us), (t.curr = r), (us = r);
          for (var n = new Array(arguments.length), o = 0; o < n.length; o++) n[o] = arguments[o];
          (n[0] = D.coerce(n[0])), typeof n[0] != "string" && n.unshift("%O");
          var a = 0;
          (n[0] = n[0].replace(/%([a-zA-Z%])/g, function (h, u) {
            if (h === "%%") return h;
            a++;
            var c = D.formatters[u];
            if (typeof c == "function") {
              var f = n[a];
              (h = c.call(t, f)), n.splice(a, 1), a--;
            }
            return h;
          })),
            D.formatArgs.call(t, n);
          var l = e.log || D.log || console.log.bind(console);
          l.apply(t, n);
        }
      }
      return (e.namespace = i), (e.enabled = D.enabled(i)), (e.useColors = D.useColors()), (e.color = Cu(i)), typeof D.init == "function" && D.init(e), e;
    }
    function Fu(i) {
      D.save(i), (D.names = []), (D.skips = []);
      for (var e = (typeof i == "string" ? i : "").split(/[\s,]+/), t = e.length, r = 0; r < t; r++)
        !e[r] || ((i = e[r].replace(/\*/g, ".*?")), i[0] === "-" ? D.skips.push(new RegExp("^" + i.substr(1) + "$")) : D.names.push(new RegExp("^" + i + "$")));
    }
    function Ru() {
      D.enable("");
    }
    function Lu(i) {
      var e, t;
      for (e = 0, t = D.skips.length; e < t; e++) if (D.skips[e].test(i)) return !1;
      for (e = 0, t = D.names.length; e < t; e++) if (D.names[e].test(i)) return !0;
      return !1;
    }
    function Ou(i) {
      return i instanceof Error ? i.stack || i.message : i;
    }
  });
  var ba = nt((ne, va) => {
    ne = va.exports = _a();
    ne.log = Du;
    ne.formatArgs = Iu;
    ne.save = zu;
    ne.load = wa;
    ne.useColors = ku;
    ne.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : Bu();
    ne.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
    function ku() {
      return typeof window != "undefined" && window.process && window.process.type === "renderer"
        ? !0
        : (typeof document != "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
            (typeof window != "undefined" && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
            (typeof navigator != "undefined" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            (typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    }
    ne.formatters.j = function (i) {
      try {
        return JSON.stringify(i);
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message;
      }
    };
    function Iu(i) {
      var e = this.useColors;
      if (((i[0] = (e ? "%c" : "") + this.namespace + (e ? " %c" : " ") + i[0] + (e ? "%c " : " ") + "+" + ne.humanize(this.diff)), !!e)) {
        var t = "color: " + this.color;
        i.splice(1, 0, t, "color: inherit");
        var r = 0,
          s = 0;
        i[0].replace(/%[a-zA-Z%]/g, function (n) {
          n !== "%%" && (r++, n === "%c" && (s = r));
        }),
          i.splice(s, 0, t);
      }
    }
    function Du() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function zu(i) {
      try {
        i == null ? ne.storage.removeItem("debug") : (ne.storage.debug = i);
      } catch (e) {}
    }
    function wa() {
      var i;
      try {
        i = ne.storage.debug;
      } catch (e) {}
      return !i && typeof process != "undefined" && "env" in process && (i = process.env.DEBUG), i;
    }
    ne.enable(wa());
    function Bu() {
      try {
        return window.localStorage;
      } catch (i) {}
    }
  });
  var Ma = nt((Tg, Ea) => {
    var Ta = ba()("jsonp");
    Ea.exports = Uu;
    var Nu = 0;
    function Vu() {}
    function Uu(i, e, t) {
      typeof e == "function" && ((t = e), (e = {})), e || (e = {});
      var r = e.prefix || "__jp",
        s = e.name || r + Nu++,
        n = e.param || "callback",
        o = e.timeout != null ? e.timeout : 6e4,
        a = encodeURIComponent,
        l = document.getElementsByTagName("script")[0] || document.head,
        h,
        u;
      o &&
        (u = setTimeout(function () {
          c(), t && t(new Error("Timeout"));
        }, o));
      function c() {
        h.parentNode && h.parentNode.removeChild(h), (window[s] = Vu), u && clearTimeout(u);
      }
      function f() {
        window[s] && c();
      }
      return (
        (window[s] = function (d) {
          Ta("jsonp got", d), c(), t && t(null, d);
        }),
        (i += (~i.indexOf("?") ? "&" : "?") + n + "=" + a(s)),
        (i = i.replace("?&", "?")),
        Ta('jsonp req "%s"', i),
        (h = document.createElement("script")),
        (h.src = i),
        l.parentNode.insertBefore(h, l),
        f
      );
    }
  });
  var Pa = nt((Aa) => {
    "use strict";
    var ju = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    Aa.validate = function (i) {
      if (!i || i.length > 254) return !1;
      var e = ju.test(i);
      if (!e) return !1;
      var t = i.split("@");
      if (t[0].length > 64) return !1;
      var r = t[1].split(".");
      return !r.some(function (s) {
        return s.length > 63;
      });
    };
  });
  var Ca = nt((Rg, Sa) => {
    function fs(i, e, t) {
      var r, s, n, o, a;
      e == null && (e = 100);
      function l() {
        var u = Date.now() - o;
        u < e && u >= 0 ? (r = setTimeout(l, e - u)) : ((r = null), t || ((a = i.apply(n, s)), (n = s = null)));
      }
      var h = function () {
        (n = this), (s = arguments), (o = Date.now());
        var u = t && !r;
        return r || (r = setTimeout(l, e)), u && ((a = i.apply(n, s)), (n = s = null)), a;
      };
      return (
        (h.clear = function () {
          r && (clearTimeout(r), (r = null));
        }),
        (h.flush = function () {
          r && ((a = i.apply(n, s)), (n = s = null), clearTimeout(r), (r = null));
        }),
        h
      );
    }
    fs.debounce = fs;
    Sa.exports = fs;
  });
  function Xr() {}
  Xr.prototype = {
    on: function (i, e, t) {
      var r = this.e || (this.e = {});
      return (r[i] || (r[i] = [])).push({ fn: e, ctx: t }), this;
    },
    once: function (i, e, t) {
      var r = this;
      function s() {
        r.off(i, s), e.apply(t, arguments);
      }
      return (s._ = e), this.on(i, s, t);
    },
    emit: function (i) {
      for (var e = [].slice.call(arguments, 1), t = ((this.e || (this.e = {}))[i] || []).slice(), r = 0, s = t.length; r < s; r++) t[r].fn.apply(t[r].ctx, e);
      return this;
    },
    off: function (i, e) {
      var t = this.e || (this.e = {}),
        r = t[i],
        s = [];
      if (r && e) for (var n = 0, o = r.length; n < o; n++) r[n].fn !== e && r[n].fn._ !== e && s.push(r[n]);
      return s.length ? (t[i] = s) : delete t[i], this;
    },
  };
  var bs = Xr;
  bs.TinyEmitter = Xr;
  var Oe = function (i) {
    (this.wrap = document.querySelector("[data-router-wrapper]")),
      (this.properties = i),
      (this.Transition = i.transition ? new i.transition.class(this.wrap, i.transition.name) : null);
  };
  (Oe.prototype.setup = function () {
    this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted();
  }),
    (Oe.prototype.add = function () {
      this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
    }),
    (Oe.prototype.update = function () {
      document.title = this.properties.page.title;
    }),
    (Oe.prototype.show = function (i) {
      var e = this;
      return new Promise(function (t) {
        try {
          let r = function (s) {
            e.onEnterCompleted && e.onEnterCompleted(), t();
          };
          return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(i)).then(r) : r());
        } catch (r) {
          return Promise.reject(r);
        }
      });
    }),
    (Oe.prototype.hide = function (i) {
      var e = this;
      return new Promise(function (t) {
        try {
          let r = function (s) {
            e.onLeaveCompleted && e.onLeaveCompleted(), t();
          };
          return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(i)).then(r) : r());
        } catch (r) {
          return Promise.reject(r);
        }
      });
    });
  var El = new window.DOMParser(),
    pe = function (i, e) {
      (this.renderers = i), (this.transitions = e);
    };
  (pe.prototype.getOrigin = function (i) {
    var e = i.match(/(https?:\/\/[\w\-.]+)/);
    return e ? e[1].replace(/https?:\/\//, "") : null;
  }),
    (pe.prototype.getPathname = function (i) {
      var e = i.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
      return e ? e[1] : "/";
    }),
    (pe.prototype.getAnchor = function (i) {
      var e = i.match(/(#.*)$/);
      return e ? e[1] : null;
    }),
    (pe.prototype.getParams = function (i) {
      var e = i.match(/\?([\w_\-.=&]+)/);
      if (!e) return null;
      for (var t = e[1].split("&"), r = {}, s = 0; s < t.length; s++) {
        var n = t[s].split("=");
        r[n[0]] = n[1];
      }
      return r;
    }),
    (pe.prototype.getDOM = function (i) {
      return typeof i == "string" ? El.parseFromString(i, "text/html") : i;
    }),
    (pe.prototype.getView = function (i) {
      return i.querySelector("[data-router-view]");
    }),
    (pe.prototype.getSlug = function (i) {
      return i.getAttribute("data-router-view");
    }),
    (pe.prototype.getRenderer = function (i) {
      if (!this.renderers) return Promise.resolve(Oe);
      if (i in this.renderers) {
        var e = this.renderers[i];
        return typeof e != "function" || Oe.isPrototypeOf(e)
          ? typeof e.then == "function"
            ? Promise.resolve(e).then(function (t) {
                return t.default;
              })
            : Promise.resolve(e)
          : Promise.resolve(e()).then(function (t) {
              return t.default;
            });
      }
      return Promise.resolve(Oe);
    }),
    (pe.prototype.getTransition = function (i) {
      return this.transitions
        ? i in this.transitions
          ? { class: this.transitions[i], name: i }
          : "default" in this.transitions
          ? { class: this.transitions.default, name: "default" }
          : null
        : null;
    }),
    (pe.prototype.getProperties = function (i) {
      var e = this.getDOM(i),
        t = this.getView(e),
        r = this.getSlug(t);
      return { page: e, view: t, slug: r, renderer: this.getRenderer(r, this.renderers), transition: this.getTransition(r, this.transitions) };
    }),
    (pe.prototype.getLocation = function (i) {
      return { href: i, anchor: this.getAnchor(i), origin: this.getOrigin(i), params: this.getParams(i), pathname: this.getPathname(i) };
    });
  var Ml = (function (i) {
      function e(t) {
        var r = this;
        t === void 0 && (t = {});
        var s = t.renderers,
          n = t.transitions;
        i.call(this),
          (this.Helpers = new pe(s, n)),
          (this.Transitions = n),
          (this.Contextual = !1),
          (this.location = this.Helpers.getLocation(window.location.href)),
          (this.properties = this.Helpers.getProperties(document.cloneNode(!0))),
          (this.popping = !1),
          (this.running = !1),
          (this.trigger = null),
          (this.cache = new Map()),
          this.cache.set(this.location.href, this.properties),
          this.properties.renderer.then(function (o) {
            (r.From = new o(r.properties)), r.From.setup();
          }),
          (this._navigate = this.navigate.bind(this)),
          window.addEventListener("popstate", this.popState.bind(this)),
          (this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])")),
          this.attach(this.links);
      }
      return (
        i && (e.__proto__ = i),
        ((e.prototype = Object.create(i && i.prototype)).constructor = e),
        (e.prototype.attach = function (t) {
          for (var r = 0, s = t; r < s.length; r += 1) s[r].addEventListener("click", this._navigate);
        }),
        (e.prototype.detach = function (t) {
          for (var r = 0, s = t; r < s.length; r += 1) s[r].removeEventListener("click", this._navigate);
        }),
        (e.prototype.navigate = function (t) {
          if (!t.metaKey && !t.ctrlKey) {
            t.preventDefault();
            var r = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
            this.redirect(t.currentTarget.href, r, t.currentTarget);
          }
        }),
        (e.prototype.redirect = function (t, r, s) {
          if ((r === void 0 && (r = !1), s === void 0 && (s = "script"), (this.trigger = s), !this.running && t !== this.location.href)) {
            var n = this.Helpers.getLocation(t);
            (this.Contextual = !1),
              r && ((this.Contextual = this.Transitions.contextual[r].prototype), (this.Contextual.name = r)),
              n.origin !== this.location.origin || (n.anchor && n.pathname === this.location.pathname)
                ? (window.location.href = t)
                : ((this.location = n), this.beforeFetch());
          }
        }),
        (e.prototype.popState = function () {
          (this.trigger = "popstate"), (this.Contextual = !1);
          var t = this.Helpers.getLocation(window.location.href);
          this.location.pathname !== t.pathname || (!this.location.anchor && !t.anchor)
            ? ((this.popping = !0), (this.location = t), this.beforeFetch())
            : (this.location = t);
        }),
        (e.prototype.pushState = function () {
          this.popping || window.history.pushState(this.location, "", this.location.href);
        }),
        (e.prototype.fetch = function () {
          try {
            var t = this;
            return Promise.resolve(
              fetch(t.location.href, { mode: "same-origin", method: "GET", headers: { "X-Requested-With": "Highway" }, credentials: "same-origin" }),
            ).then(function (r) {
              if (r.status >= 200 && r.status < 300) return r.text();
              window.location.href = t.location.href;
            });
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        (e.prototype.beforeFetch = function () {
          try {
            let n = function () {
              t.afterFetch();
            };
            var t = this;
            t.pushState(),
              (t.running = !0),
              t.emit("NAVIGATE_OUT", { from: { page: t.From.properties.page, view: t.From.properties.view }, trigger: t.trigger, location: t.location });
            var r = { trigger: t.trigger, contextual: t.Contextual },
              s = t.cache.has(t.location.href)
                ? Promise.resolve(t.From.hide(r)).then(function () {
                    t.properties = t.cache.get(t.location.href);
                  })
                : Promise.resolve(Promise.all([t.fetch(), t.From.hide(r)])).then(function (o) {
                    (t.properties = t.Helpers.getProperties(o[0])), t.cache.set(t.location.href, t.properties);
                  });
            return Promise.resolve(s && s.then ? s.then(n) : n());
          } catch (n) {
            return Promise.reject(n);
          }
        }),
        (e.prototype.afterFetch = function () {
          try {
            var t = this;
            return Promise.resolve(t.properties.renderer).then(function (r) {
              return (
                (t.To = new r(t.properties)),
                t.To.add(),
                t.emit("NAVIGATE_IN", { to: { page: t.To.properties.page, view: t.To.wrap.lastElementChild }, trigger: t.trigger, location: t.location }),
                Promise.resolve(t.To.show({ trigger: t.trigger, contextual: t.Contextual })).then(function () {
                  (t.popping = !1),
                    (t.running = !1),
                    t.detach(t.links),
                    (t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])")),
                    t.attach(t.links),
                    t.emit("NAVIGATE_END", {
                      to: { page: t.To.properties.page, view: t.To.wrap.lastElementChild },
                      from: { page: t.From.properties.page, view: t.From.properties.view },
                      trigger: t.trigger,
                      location: t.location,
                    }),
                    (t.From = t.To),
                    (t.trigger = null);
                })
              );
            });
          } catch (r) {
            return Promise.reject(r);
          }
        }),
        e
      );
    })(bs),
    Qr = function (i, e) {
      (this.wrap = i), (this.name = e);
    };
  (Qr.prototype.show = function (i) {
    var e = this,
      t = i.trigger,
      r = i.contextual,
      s = this.wrap.lastElementChild,
      n = this.wrap.firstElementChild;
    return new Promise(function (o) {
      r
        ? (s.setAttribute("data-transition-in", r.name),
          s.removeAttribute("data-transition-out", r.name),
          r.in && r.in({ to: s, from: n, trigger: t, done: o }))
        : (s.setAttribute("data-transition-in", e.name),
          s.removeAttribute("data-transition-out", e.name),
          e.in && e.in({ to: s, from: n, trigger: t, done: o }));
    });
  }),
    (Qr.prototype.hide = function (i) {
      var e = this,
        t = i.trigger,
        r = i.contextual,
        s = this.wrap.firstElementChild;
      return new Promise(function (n) {
        r
          ? (s.setAttribute("data-transition-out", r.name), s.removeAttribute("data-transition-in", r.name), r.out && r.out({ from: s, trigger: t, done: n }))
          : (s.setAttribute("data-transition-out", e.name), s.removeAttribute("data-transition-in", e.name), e.out && e.out({ from: s, trigger: t, done: n }));
      });
    }),
    console.log("Highway v2.2.0");
  var V = { Core: Ml, Helpers: pe, Renderer: Oe, Transition: Qr };
  function ke(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function Ts(i, e) {
    (i.prototype = Object.create(e.prototype)), (i.prototype.constructor = i), (i.__proto__ = e);
  }
  var ae = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    Tt = { duration: 0.5, overwrite: !1, delay: 0 },
    $r,
    ye = 1e8,
    z = 1 / ye,
    Zr = Math.PI * 2,
    Al = Zr / 4,
    Pl = 0,
    Es = Math.sqrt,
    Sl = Math.cos,
    Cl = Math.sin,
    Y = function (e) {
      return typeof e == "string";
    },
    Q = function (e) {
      return typeof e == "function";
    },
    Ie = function (e) {
      return typeof e == "number";
    },
    ur = function (e) {
      return typeof e == "undefined";
    },
    De = function (e) {
      return typeof e == "object";
    },
    le = function (e) {
      return e !== !1;
    },
    Ms = function () {
      return typeof window != "undefined";
    },
    cr = function (e) {
      return Q(e) || Y(e);
    },
    As = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
    J = Array.isArray,
    Kr = /(?:-?\.?\d|\.)+/gi,
    Jr = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    ot = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ei = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ti = /[+-]=-?[.\d]+/,
    Ps = /[^,'"\[\]\s]+/gi,
    Fl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    j,
    Se,
    ri,
    ii,
    me = {},
    fr = {},
    Ss,
    Cs = function (e) {
      return (fr = lt(e, me)) && re;
    },
    dr = function (e, t) {
      return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
    },
    pr = function (e, t) {
      return !t && console.warn(e);
    },
    Fs = function (e, t) {
      return (e && (me[e] = t) && fr && (fr[e] = t)) || me;
    },
    Nt = function () {
      return 0;
    },
    si = {},
    qe = [],
    ni = {},
    Rs,
    he = {},
    oi = {},
    Ls = 30,
    mr = [],
    ai = "",
    li = function (e) {
      var t = e[0],
        r,
        s;
      if ((De(t) || Q(t) || (e = [e]), !(r = (t._gsap || {}).harness))) {
        for (s = mr.length; s-- && !mr[s].targetTest(t); );
        r = mr[s];
      }
      for (s = e.length; s--; ) (e[s] && (e[s]._gsap || (e[s]._gsap = new yi(e[s], r)))) || e.splice(s, 1);
      return e;
    },
    Ge = function (e) {
      return e._gsap || li(ve(e))[0]._gsap;
    },
    hi = function (e, t, r) {
      return (r = e[t]) && Q(r) ? e[t]() : (ur(r) && e.getAttribute && e.getAttribute(t)) || r;
    },
    ie = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    q = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    ee = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    at = function (e, t) {
      var r = t.charAt(0),
        s = parseFloat(t.substr(2));
      return (e = parseFloat(e)), r === "+" ? e + s : r === "-" ? e - s : r === "*" ? e * s : e / s;
    },
    Rl = function (e, t) {
      for (var r = t.length, s = 0; e.indexOf(t[s]) < 0 && ++s < r; );
      return s < r;
    },
    gr = function () {
      var e = qe.length,
        t = qe.slice(0),
        r,
        s;
      for (ni = {}, qe.length = 0, r = 0; r < e; r++) (s = t[r]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
    },
    Os = function (e, t, r, s) {
      qe.length && gr(), e.render(t, r, s), qe.length && gr();
    },
    ks = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Ps).length < 2 ? t : Y(e) ? e.trim() : e;
    },
    Is = function (e) {
      return e;
    },
    _e = function (e, t) {
      for (var r in t) r in e || (e[r] = t[r]);
      return e;
    },
    Ll = function (e) {
      return function (t, r) {
        for (var s in r) s in t || (s === "duration" && e) || s === "ease" || (t[s] = r[s]);
      };
    },
    lt = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Ds = function i(e, t) {
      for (var r in t) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = De(t[r]) ? i(e[r] || (e[r] = {}), t[r]) : t[r]);
      return e;
    },
    xr = function (e, t) {
      var r = {},
        s;
      for (s in e) s in t || (r[s] = e[s]);
      return r;
    },
    Vt = function (e) {
      var t = e.parent || j,
        r = e.keyframes ? Ll(J(e.keyframes)) : _e;
      if (le(e.inherit)) for (; t; ) r(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    Ol = function (e, t) {
      for (var r = e.length, s = r === t.length; s && r-- && e[r] === t[r]; );
      return r < 0;
    },
    zs = function (e, t, r, s, n) {
      r === void 0 && (r = "_first"), s === void 0 && (s = "_last");
      var o = e[s],
        a;
      if (n) for (a = t[n]; o && o[n] > a; ) o = o._prev;
      return (
        o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[r]), (e[r] = t)),
        t._next ? (t._next._prev = t) : (e[s] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    yr = function (e, t, r, s) {
      r === void 0 && (r = "_first"), s === void 0 && (s = "_last");
      var n = t._prev,
        o = t._next;
      n ? (n._next = o) : e[r] === t && (e[r] = o), o ? (o._prev = n) : e[s] === t && (e[s] = n), (t._next = t._prev = t.parent = null);
    },
    ze = function (e, t) {
      e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), (e._act = 0);
    },
    ht = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0)) for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
      return e;
    },
    kl = function (e) {
      for (var t = e.parent; t && t.parent; ) (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    Il = function i(e) {
      return !e || (e._ts && i(e.parent));
    },
    Bs = function (e) {
      return e._repeat ? Et(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Et = function (e, t) {
      var r = Math.floor((e /= t));
      return e && r === e ? r - 1 : r;
    },
    _r = function (e, t) {
      return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
    },
    wr = function (e) {
      return (e._end = ee(e._start + (e._tDur / Math.abs(e._ts || e._rts || z) || 0)));
    },
    ui = function (e, t) {
      var r = e._dp;
      return (
        r &&
          r.smoothChildTiming &&
          e._ts &&
          ((e._start = ee(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts))), wr(e), r._dirty || ht(r, e)),
        e
      );
    },
    Ns = function (e, t) {
      var r;
      if (
        ((t._time || (t._initted && !t._dur)) && ((r = _r(e.rawTime(), t)), (!t._dur || jt(0, t.totalDuration(), r) - t._tTime > z) && t.render(r, !0)),
        ht(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration()) for (r = e; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        e._zTime = -z;
      }
    },
    Ce = function (e, t, r, s) {
      return (
        t.parent && ze(t),
        (t._start = ee((Ie(r) ? r : r || e !== j ? we(e, r, t) : e._time) + t._delay)),
        (t._end = ee(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
        zs(e, t, "_first", "_last", e._sort ? "_start" : 0),
        ci(t) || (e._recent = t),
        s || Ns(e, t),
        e
      );
    },
    Vs = function (e, t) {
      return (me.ScrollTrigger || dr("scrollTrigger", t)) && me.ScrollTrigger.create(t, e);
    },
    Us = function (e, t, r, s) {
      if ((bi(e, t), !e._initted)) return 1;
      if (!r && e._pt && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && Rs !== ue.frame) return qe.push(e), (e._lazy = [t, s]), 1;
    },
    Dl = function i(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || i(t));
    },
    ci = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    zl = function (e, t, r, s) {
      var n = e.ratio,
        o = t < 0 || (!t && ((!e._start && Dl(e) && !(!e._initted && ci(e))) || ((e._ts < 0 || e._dp._ts < 0) && !ci(e)))) ? 0 : 1,
        a = e._rDelay,
        l = 0,
        h,
        u,
        c;
      if (
        (a &&
          e._repeat &&
          ((l = jt(0, e._tDur, t)),
          (u = Et(l, a)),
          e._yoyo && u & 1 && (o = 1 - o),
          u !== Et(e._tTime, a) && ((n = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== n || s || e._zTime === z || (!t && e._zTime))
      ) {
        if (!e._initted && Us(e, t, s, r)) return;
        for (c = e._zTime, e._zTime = t || (r ? z : 0), r || (r = t && !c), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, h = e._pt; h; )
          h.r(o, h.d), (h = h._next);
        e._startAt && t < 0 && e._startAt.render(t, !0, !0),
          e._onUpdate && !r && be(e, "onUpdate"),
          l && e._repeat && !r && e.parent && be(e, "onRepeat"),
          (t >= e._tDur || t < 0) && e.ratio === o && (o && ze(e, 1), r || (be(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    Bl = function (e, t, r) {
      var s;
      if (r > t)
        for (s = e._first; s && s._start <= r; ) {
          if (s.data === "isPause" && s._start > t) return s;
          s = s._next;
        }
      else
        for (s = e._last; s && s._start >= r; ) {
          if (s.data === "isPause" && s._start < t) return s;
          s = s._prev;
        }
    },
    Mt = function (e, t, r, s) {
      var n = e._repeat,
        o = ee(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !s && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = n ? (n < 0 ? 1e10 : ee(o * (n + 1) + e._rDelay * n)) : o),
        a > 0 && !s ? ui(e, (e._tTime = e._tDur * a)) : e.parent && wr(e),
        r || ht(e.parent, e),
        e
      );
    },
    js = function (e) {
      return e instanceof te ? ht(e) : Mt(e, e._dur);
    },
    Nl = { _start: 0, endTime: Nt, totalDuration: Nt },
    we = function i(e, t, r) {
      var s = e.labels,
        n = e._recent || Nl,
        o = e.duration() >= ye ? n.endTime(!1) : e._dur,
        a,
        l,
        h;
      return Y(t) && (isNaN(t) || t in s)
        ? ((l = t.charAt(0)),
          (h = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (h ? (a < 0 ? n : r).totalDuration() / 100 : 1))
            : a < 0
            ? (t in s || (s[t] = o), s[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              h && r && (l = (l / 100) * (J(r) ? r[0] : r).totalDuration()),
              a > 1 ? i(e, t.substr(0, a - 1), r) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    Ut = function (e, t, r) {
      var s = Ie(t[1]),
        n = (s ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[n],
        a,
        l;
      if ((s && (o.duration = t[1]), (o.parent = r), e)) {
        for (a = o, l = r; l && !("immediateRender" in a); ) (a = l.vars.defaults || {}), (l = le(l.vars.inherit) && l.parent);
        (o.immediateRender = le(a.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
      }
      return new X(t[0], o, t[n + 1]);
    },
    He = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    jt = function (e, t, r) {
      return r < e ? e : r > t ? t : r;
    },
    $ = function (e, t) {
      return !Y(e) || !(t = Fl.exec(e)) ? "" : t[1];
    },
    Vl = function (e, t, r) {
      return He(r, function (s) {
        return jt(e, t, s);
      });
    },
    fi = [].slice,
    qs = function (e, t) {
      return e && De(e) && "length" in e && ((!t && !e.length) || (e.length - 1 in e && De(e[0]))) && !e.nodeType && e !== Se;
    },
    Ul = function (e, t, r) {
      return (
        r === void 0 && (r = []),
        e.forEach(function (s) {
          var n;
          return (Y(s) && !t) || qs(s, 1) ? (n = r).push.apply(n, ve(s)) : r.push(s);
        }) || r
      );
    },
    ve = function (e, t, r) {
      return Y(e) && !r && (ri || !St()) ? fi.call((t || ii).querySelectorAll(e), 0) : J(e) ? Ul(e, r) : qs(e) ? fi.call(e, 0) : e ? [e] : [];
    },
    jl = function (e) {
      return (
        (e = ve(e)[0] || pr("Invalid scope") || {}),
        function (t) {
          var r = e.current || e.nativeElement || e;
          return ve(t, r.querySelectorAll ? r : r === e ? pr("Invalid scope") || ii.createElement("div") : e);
        }
      );
    },
    Gs = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    Hs = function (e) {
      if (Q(e)) return e;
      var t = De(e) ? e : { each: e },
        r = ut(t.ease),
        s = t.from || 0,
        n = parseFloat(t.base) || 0,
        o = {},
        a = s > 0 && s < 1,
        l = isNaN(s) || a,
        h = t.axis,
        u = s,
        c = s;
      return (
        Y(s) ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !a && l && ((u = s[0]), (c = s[1])),
        function (f, d, m) {
          var p = (m || t).length,
            g = o[p],
            x,
            _,
            y,
            w,
            b,
            v,
            T,
            M,
            E;
          if (!g) {
            if (((E = t.grid === "auto" ? 0 : (t.grid || [1, ye])[1]), !E)) {
              for (T = -ye; T < (T = m[E++].getBoundingClientRect().left) && E < p; );
              E--;
            }
            for (
              g = o[p] = [], x = l ? Math.min(E, p) * u - 0.5 : s % E, _ = E === ye ? 0 : l ? (p * c) / E - 0.5 : (s / E) | 0, T = 0, M = ye, v = 0;
              v < p;
              v++
            )
              (y = (v % E) - x), (w = _ - ((v / E) | 0)), (g[v] = b = h ? Math.abs(h === "y" ? w : y) : Es(y * y + w * w)), b > T && (T = b), b < M && (M = b);
            s === "random" && Gs(g),
              (g.max = T - M),
              (g.min = M),
              (g.v = p =
                (parseFloat(t.amount) || parseFloat(t.each) * (E > p ? p - 1 : h ? (h === "y" ? p / E : E) : Math.max(E, p / E)) || 0) *
                (s === "edges" ? -1 : 1)),
              (g.b = p < 0 ? n - p : n),
              (g.u = $(t.amount || t.each) || 0),
              (r = r && p < 0 ? en(r) : r);
          }
          return (p = (g[f] - g.min) / g.max || 0), ee(g.b + (r ? r(p) : p) * g.v) + g.u;
        }
      );
    },
    di = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (r) {
        var s = Math.round(parseFloat(r) / e) * e * t;
        return (s - (s % 1)) / t + (Ie(r) ? 0 : $(r));
      };
    },
    Ws = function (e, t) {
      var r = J(e),
        s,
        n;
      return (
        !r && De(e) && ((s = r = e.radius || ye), e.values ? ((e = ve(e.values)), (n = !Ie(e[0])) && (s *= s)) : (e = di(e.increment))),
        He(
          t,
          r
            ? Q(e)
              ? function (o) {
                  return (n = e(o)), Math.abs(n - o) <= s ? n : o;
                }
              : function (o) {
                  for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), h = ye, u = 0, c = e.length, f, d; c--; )
                    n ? ((f = e[c].x - a), (d = e[c].y - l), (f = f * f + d * d)) : (f = Math.abs(e[c] - a)), f < h && ((h = f), (u = c));
                  return (u = !s || h <= s ? e[u] : o), n || u === o || Ie(o) ? u : u + $(o);
                }
            : di(e),
        )
      );
    },
    Ys = function (e, t, r, s) {
      return He(J(e) ? !t : r === !0 ? !!(r = 0) : !s, function () {
        return J(e)
          ? e[~~(Math.random() * e.length)]
          : (r = r || 1e-5) &&
              (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * s) / s;
      });
    },
    ql = function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function (s) {
        return t.reduce(function (n, o) {
          return o(n);
        }, s);
      };
    },
    Gl = function (e, t) {
      return function (r) {
        return e(parseFloat(r)) + (t || $(r));
      };
    },
    Hl = function (e, t, r) {
      return Qs(e, t, 0, 1, r);
    },
    Xs = function (e, t, r) {
      return He(r, function (s) {
        return e[~~t(s)];
      });
    },
    Wl = function i(e, t, r) {
      var s = t - e;
      return J(e)
        ? Xs(e, i(0, e.length), t)
        : He(r, function (n) {
            return ((s + ((n - e) % s)) % s) + e;
          });
    },
    Yl = function i(e, t, r) {
      var s = t - e,
        n = s * 2;
      return J(e)
        ? Xs(e, i(0, e.length - 1), t)
        : He(r, function (o) {
            return (o = (n + ((o - e) % n)) % n || 0), e + (o > s ? n - o : o);
          });
    },
    At = function (e) {
      for (var t = 0, r = "", s, n, o, a; ~(s = e.indexOf("random(", t)); )
        (o = e.indexOf(")", s)),
          (a = e.charAt(s + 7) === "["),
          (n = e.substr(s + 7, o - s - 7).match(a ? Ps : Kr)),
          (r += e.substr(t, s - t) + Ys(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
          (t = o + 1);
      return r + e.substr(t, e.length - t);
    },
    Qs = function (e, t, r, s, n) {
      var o = t - e,
        a = s - r;
      return He(n, function (l) {
        return r + (((l - e) / o) * a || 0);
      });
    },
    Xl = function i(e, t, r, s) {
      var n = isNaN(e + t)
        ? 0
        : function (d) {
            return (1 - d) * e + d * t;
          };
      if (!n) {
        var o = Y(e),
          a = {},
          l,
          h,
          u,
          c,
          f;
        if ((r === !0 && (s = 1) && (r = null), o)) (e = { p: e }), (t = { p: t });
        else if (J(e) && !J(t)) {
          for (u = [], c = e.length, f = c - 2, h = 1; h < c; h++) u.push(i(e[h - 1], e[h]));
          c--,
            (n = function (m) {
              m *= c;
              var p = Math.min(f, ~~m);
              return u[p](m - p);
            }),
            (r = t);
        } else s || (e = lt(J(e) ? [] : {}, e));
        if (!u) {
          for (l in t) _i.call(a, e, l, "get", t[l]);
          n = function (m) {
            return Mi(m, a) || (o ? e.p : e);
          };
        }
      }
      return He(r, n);
    },
    $s = function (e, t, r) {
      var s = e.labels,
        n = ye,
        o,
        a,
        l;
      for (o in s) (a = s[o] - t), a < 0 == !!r && a && n > (a = Math.abs(a)) && ((l = o), (n = a));
      return l;
    },
    be = function (e, t, r) {
      var s = e.vars,
        n = s[t],
        o,
        a;
      if (!!n) return (o = s[t + "Params"]), (a = s.callbackScope || e), r && qe.length && gr(), o ? n.apply(a, o) : n.call(a);
    },
    qt = function (e) {
      return ze(e), e.scrollTrigger && e.scrollTrigger.kill(!1), e.progress() < 1 && be(e, "onInterrupt"), e;
    },
    Pt,
    Ql = function (e) {
      e = (!e.name && e.default) || e;
      var t = e.name,
        r = Q(e),
        s =
          t && !r && e.init
            ? function () {
                this._props = [];
              }
            : e,
        n = { init: Nt, render: Mi, add: _i, kill: ch, modifier: uh, rawVars: 0 },
        o = { targetTest: 0, get: 0, getSetter: vr, aliases: {}, register: 0 };
      if ((St(), e !== s)) {
        if (he[t]) return;
        _e(s, _e(xr(e, n), o)),
          lt(s.prototype, lt(n, xr(e, o))),
          (he[(s.prop = t)] = s),
          e.targetTest && (mr.push(s), (si[t] = 1)),
          (t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
      }
      Fs(t, s), e.register && e.register(re, s, se);
    },
    B = 255,
    Gt = {
      aqua: [0, B, B],
      lime: [0, B, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, B],
      navy: [0, 0, 128],
      white: [B, B, B],
      olive: [128, 128, 0],
      yellow: [B, B, 0],
      orange: [B, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [B, 0, 0],
      pink: [B, 192, 203],
      cyan: [0, B, B],
      transparent: [B, B, B, 0],
    },
    pi = function (e, t, r) {
      return (e += e < 0 ? 1 : e > 1 ? -1 : 0), ((e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * B + 0.5) | 0;
    },
    Zs = function (e, t, r) {
      var s = e ? (Ie(e) ? [e >> 16, (e >> 8) & B, e & B] : 0) : Gt.black,
        n,
        o,
        a,
        l,
        h,
        u,
        c,
        f,
        d,
        m;
      if (!s) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Gt[e])) s = Gt[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((n = e.charAt(1)), (o = e.charAt(2)), (a = e.charAt(3)), (e = "#" + n + n + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (s = parseInt(e.substr(1, 6), 16)), [s >> 16, (s >> 8) & B, s & B, parseInt(e.substr(7), 16) / 255];
          (e = parseInt(e.substr(1), 16)), (s = [e >> 16, (e >> 8) & B, e & B]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((s = m = e.match(Kr)), !t))
            (l = (+s[0] % 360) / 360),
              (h = +s[1] / 100),
              (u = +s[2] / 100),
              (o = u <= 0.5 ? u * (h + 1) : u + h - u * h),
              (n = u * 2 - o),
              s.length > 3 && (s[3] *= 1),
              (s[0] = pi(l + 1 / 3, n, o)),
              (s[1] = pi(l, n, o)),
              (s[2] = pi(l - 1 / 3, n, o));
          else if (~e.indexOf("=")) return (s = e.match(Jr)), r && s.length < 4 && (s[3] = 1), s;
        } else s = e.match(Kr) || Gt.transparent;
        s = s.map(Number);
      }
      return (
        t &&
          !m &&
          ((n = s[0] / B),
          (o = s[1] / B),
          (a = s[2] / B),
          (c = Math.max(n, o, a)),
          (f = Math.min(n, o, a)),
          (u = (c + f) / 2),
          c === f
            ? (l = h = 0)
            : ((d = c - f),
              (h = u > 0.5 ? d / (2 - c - f) : d / (c + f)),
              (l = c === n ? (o - a) / d + (o < a ? 6 : 0) : c === o ? (a - n) / d + 2 : (n - o) / d + 4),
              (l *= 60)),
          (s[0] = ~~(l + 0.5)),
          (s[1] = ~~(h * 100 + 0.5)),
          (s[2] = ~~(u * 100 + 0.5))),
        r && s.length < 4 && (s[3] = 1),
        s
      );
    },
    Ks = function (e) {
      var t = [],
        r = [],
        s = -1;
      return (
        e.split(Be).forEach(function (n) {
          var o = n.match(ot) || [];
          t.push.apply(t, o), r.push((s += o.length + 1));
        }),
        (t.c = r),
        t
      );
    },
    Js = function (e, t, r) {
      var s = "",
        n = (e + s).match(Be),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        h,
        u,
        c;
      if (!n) return e;
      if (
        ((n = n.map(function (f) {
          return (f = Zs(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
        })),
        r && ((u = Ks(e)), (l = r.c), l.join(s) !== u.c.join(s)))
      )
        for (h = e.replace(Be, "1").split(ot), c = h.length - 1; a < c; a++)
          s += h[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
      if (!h) for (h = e.split(Be), c = h.length - 1; a < c; a++) s += h[a] + n[a];
      return s + h[c];
    },
    Be = (function () {
      var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Gt) i += "|" + e + "\\b";
      return new RegExp(i + ")", "gi");
    })(),
    $l = /hsl[a]?\(/,
    mi = function (e) {
      var t = e.join(" "),
        r;
      if (((Be.lastIndex = 0), Be.test(t))) return (r = $l.test(t)), (e[1] = Js(e[1], r)), (e[0] = Js(e[0], r, Ks(e[1]))), !0;
    },
    Ht,
    ue = (function () {
      var i = Date.now,
        e = 500,
        t = 33,
        r = i(),
        s = r,
        n = 1e3 / 240,
        o = n,
        a = [],
        l,
        h,
        u,
        c,
        f,
        d,
        m = function p(g) {
          var x = i() - s,
            _ = g === !0,
            y,
            w,
            b,
            v;
          if (
            (x > e && (r += x - t),
            (s += x),
            (b = s - r),
            (y = b - o),
            (y > 0 || _) && ((v = ++c.frame), (f = b - c.time * 1e3), (c.time = b = b / 1e3), (o += y + (y >= n ? 4 : n - y)), (w = 1)),
            _ || (l = h(p)),
            w)
          )
            for (d = 0; d < a.length; d++) a[d](b, f, v, g);
        };
      return (
        (c = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (g) {
            return f / (1e3 / (g || 60));
          },
          wake: function () {
            Ss &&
              (!ri &&
                Ms() &&
                ((Se = ri = window),
                (ii = Se.document || {}),
                (me.gsap = re),
                (Se.gsapVersions || (Se.gsapVersions = [])).push(re.version),
                Cs(fr || Se.GreenSockGlobals || (!Se.gsap && Se) || {}),
                (u = Se.requestAnimationFrame)),
              l && c.sleep(),
              (h =
                u ||
                function (g) {
                  return setTimeout(g, (o - c.time * 1e3 + 1) | 0);
                }),
              (Ht = 1),
              m(2));
          },
          sleep: function () {
            (u ? Se.cancelAnimationFrame : clearTimeout)(l), (Ht = 0), (h = Nt);
          },
          lagSmoothing: function (g, x) {
            (e = g || 1 / z), (t = Math.min(x, e, 0));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (o = c.time * 1e3 + n);
          },
          add: function (g, x, _) {
            var y = x
              ? function (w, b, v, T) {
                  g(w, b, v, T), c.remove(y);
                }
              : g;
            return c.remove(g), a[_ ? "unshift" : "push"](y), St(), y;
          },
          remove: function (g, x) {
            ~(x = a.indexOf(g)) && a.splice(x, 1) && d >= x && d--;
          },
          _listeners: a,
        }),
        c
      );
    })(),
    St = function () {
      return !Ht && ue.wake();
    },
    I = {},
    Zl = /^[\d.\-M][\d.\-,\s]/,
    Kl = /["']/g,
    Jl = function (e) {
      for (var t = {}, r = e.substr(1, e.length - 3).split(":"), s = r[0], n = 1, o = r.length, a, l, h; n < o; n++)
        (l = r[n]),
          (a = n !== o - 1 ? l.lastIndexOf(",") : l.length),
          (h = l.substr(0, a)),
          (t[s] = isNaN(h) ? h.replace(Kl, "").trim() : +h),
          (s = l.substr(a + 1).trim());
      return t;
    },
    eh = function (e) {
      var t = e.indexOf("(") + 1,
        r = e.indexOf(")"),
        s = e.indexOf("(", t);
      return e.substring(t, ~s && s < r ? e.indexOf(")", r + 1) : r);
    },
    th = function (e) {
      var t = (e + "").split("("),
        r = I[t[0]];
      return r && t.length > 1 && r.config
        ? r.config.apply(null, ~e.indexOf("{") ? [Jl(t[1])] : eh(e).split(",").map(ks))
        : I._CE && Zl.test(e)
        ? I._CE("", e)
        : r;
    },
    en = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    tn = function i(e, t) {
      for (var r = e._first, s; r; )
        r instanceof te
          ? i(r, t)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== t &&
            (r.timeline ? i(r.timeline, t) : ((s = r._ease), (r._ease = r._yEase), (r._yEase = s), (r._yoyo = t))),
          (r = r._next);
    },
    ut = function (e, t) {
      return (e && (Q(e) ? e : I[e] || th(e))) || t;
    },
    ct = function (e, t, r, s) {
      r === void 0 &&
        (r = function (l) {
          return 1 - t(1 - l);
        }),
        s === void 0 &&
          (s = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var n = { easeIn: t, easeOut: r, easeInOut: s },
        o;
      return (
        ie(e, function (a) {
          (I[a] = me[a] = n), (I[(o = a.toLowerCase())] = r);
          for (var l in n) I[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = I[a + "." + l] = n[l];
        }),
        n
      );
    },
    rn = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    gi = function i(e, t, r) {
      var s = t >= 1 ? t : 1,
        n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (n / Zr) * (Math.asin(1 / s) || 0),
        a = function (u) {
          return u === 1 ? 1 : s * Math.pow(2, -10 * u) * Cl((u - o) * n) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (h) {
                return 1 - a(1 - h);
              }
            : rn(a);
      return (
        (n = Zr / n),
        (l.config = function (h, u) {
          return i(e, h, u);
        }),
        l
      );
    },
    xi = function i(e, t) {
      t === void 0 && (t = 1.70158);
      var r = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        s =
          e === "out"
            ? r
            : e === "in"
            ? function (n) {
                return 1 - r(1 - n);
              }
            : rn(r);
      return (
        (s.config = function (n) {
          return i(e, n);
        }),
        s
      );
    };
  ie("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, e) {
    var t = e < 5 ? e + 1 : e;
    ct(
      i + ",Power" + (t - 1),
      e
        ? function (r) {
            return Math.pow(r, t);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, t);
      },
      function (r) {
        return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
      },
    );
  });
  I.Linear.easeNone = I.none = I.Linear.easeIn;
  ct("Elastic", gi("in"), gi("out"), gi());
  (function (i, e) {
    var t = 1 / e,
      r = 2 * t,
      s = 2.5 * t,
      n = function (a) {
        return a < t
          ? i * a * a
          : a < r
          ? i * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < s
          ? i * (a -= 2.25 / e) * a + 0.9375
          : i * Math.pow(a - 2.625 / e, 2) + 0.984375;
      };
    ct(
      "Bounce",
      function (o) {
        return 1 - n(1 - o);
      },
      n,
    );
  })(7.5625, 2.75);
  ct("Expo", function (i) {
    return i ? Math.pow(2, 10 * (i - 1)) : 0;
  });
  ct("Circ", function (i) {
    return -(Es(1 - i * i) - 1);
  });
  ct("Sine", function (i) {
    return i === 1 ? 1 : -Sl(i * Al) + 1;
  });
  ct("Back", xi("in"), xi("out"), xi());
  I.SteppedEase =
    I.steps =
    me.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var r = 1 / e,
            s = e + (t ? 0 : 1),
            n = t ? 1 : 0,
            o = 1 - z;
          return function (a) {
            return (((s * jt(0, o, a)) | 0) + n) * r;
          };
        },
      };
  Tt.ease = I["quad.out"];
  ie("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) {
    return (ai += i + "," + i + "Params,");
  });
  var yi = function (e, t) {
      (this.id = Pl++), (e._gsap = this), (this.target = e), (this.harness = t), (this.get = t ? t.get : hi), (this.set = t ? t.getSetter : vr);
    },
    Wt = (function () {
      function i(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Mt(this, +t.duration, 1, 1),
          (this.data = t.data),
          Ht || ue.wake();
      }
      var e = i.prototype;
      return (
        (e.delay = function (r) {
          return r || r === 0
            ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), (this._delay = r), this)
            : this._delay;
        }),
        (e.duration = function (r) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (r) {
          return arguments.length ? ((this._dirty = 0), Mt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
        }),
        (e.totalTime = function (r, s) {
          if ((St(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (ui(this, r), !n._dp || n.parent || Ns(n, this); n && n.parent; )
              n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) || (this._ts < 0 && r > 0) || (!this._tDur && !r)) &&
              Ce(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !s) ||
              (this._initted && Math.abs(this._zTime) === z) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Os(this, r, s)),
            this
          );
        }),
        (e.time = function (r, s) {
          return arguments.length
            ? this.totalTime(Math.min(this.totalDuration(), r + Bs(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s)
            : this._time;
        }),
        (e.totalProgress = function (r, s) {
          return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        }),
        (e.progress = function (r, s) {
          return arguments.length
            ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Bs(this), s)
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (e.iteration = function (r, s) {
          var n = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (r - 1) * n, s) : this._repeat ? Et(this._tTime, n) + 1 : 1;
        }),
        (e.timeScale = function (r) {
          if (!arguments.length) return this._rts === -z ? 0 : this._rts;
          if (this._rts === r) return this;
          var s = this.parent && this._ts ? _r(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0), (this._ts = this._ps || r === -z ? 0 : this._rts), this.totalTime(jt(-this._delay, this._tDur, s), !0), wr(this), kl(this)
          );
        }),
        (e.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                  : (St(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                      this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z),
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && Ce(s, this, r - this._delay), this;
          }
          return this._start;
        }),
        (e.endTime = function (r) {
          return this._start + (le(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        }),
        (e.rawTime = function (r) {
          var s = this.parent || this._dp;
          return s
            ? r && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? _r(s.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (e.globalTime = function (r) {
          for (var s = this, n = arguments.length ? r : s.rawTime(); s; ) (n = s._start + n / (s._ts || 1)), (s = s._dp);
          return n;
        }),
        (e.repeat = function (r) {
          return arguments.length ? ((this._repeat = r === 1 / 0 ? -2 : r), js(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
        }),
        (e.repeatDelay = function (r) {
          if (arguments.length) {
            var s = this._time;
            return (this._rDelay = r), js(this), s ? this.time(s) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (e.seek = function (r, s) {
          return this.totalTime(we(this, r), le(s));
        }),
        (e.restart = function (r, s) {
          return this.play().totalTime(r ? -this._delay : 0, le(s));
        }),
        (e.play = function (r, s) {
          return r != null && this.seek(r, s), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (r, s) {
          return r != null && this.seek(r || this.totalDuration(), s), this.reversed(!0).paused(!1);
        }),
        (e.pause = function (r, s) {
          return r != null && this.seek(r, s), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (r) {
          return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -z : 0)), this) : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -z), this;
        }),
        (e.isActive = function () {
          var r = this.parent || this._dp,
            s = this._start,
            n;
          return !!(!r || (this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= s && n < this.endTime(!0) - z));
        }),
        (e.eventCallback = function (r, s, n) {
          var o = this.vars;
          return arguments.length > 1 ? (s ? ((o[r] = s), n && (o[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = s)) : delete o[r], this) : o[r];
        }),
        (e.then = function (r) {
          var s = this;
          return new Promise(function (n) {
            var o = Q(r) ? r : Is,
              a = function () {
                var h = s.then;
                (s.then = null), Q(o) && (o = o(s)) && (o.then || o === s) && (s.then = h), n(o), (s.then = h);
              };
            (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0) ? a() : (s._prom = a);
          });
        }),
        (e.kill = function () {
          qt(this);
        }),
        i
      );
    })();
  _e(Wt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -z,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var te = (function (i) {
    Ts(e, i);
    function e(r, s) {
      var n;
      return (
        r === void 0 && (r = {}),
        (n = i.call(this, r) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!r.smoothChildTiming),
        (n.autoRemoveChildren = !!r.autoRemoveChildren),
        (n._sort = le(r.sortChildren)),
        j && Ce(r.parent || j, ke(n), s),
        r.reversed && n.reverse(),
        r.paused && n.paused(!0),
        r.scrollTrigger && Vs(ke(n), r.scrollTrigger),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (s, n, o) {
        return Ut(0, arguments, this), this;
      }),
      (t.from = function (s, n, o) {
        return Ut(1, arguments, this), this;
      }),
      (t.fromTo = function (s, n, o, a) {
        return Ut(2, arguments, this), this;
      }),
      (t.set = function (s, n, o) {
        return (
          (n.duration = 0), (n.parent = this), Vt(n).repeatDelay || (n.repeat = 0), (n.immediateRender = !!n.immediateRender), new X(s, n, we(this, o), 1), this
        );
      }),
      (t.call = function (s, n, o) {
        return Ce(this, X.delayedCall(0, s, n), o);
      }),
      (t.staggerTo = function (s, n, o, a, l, h, u) {
        return (o.duration = n), (o.stagger = o.stagger || a), (o.onComplete = h), (o.onCompleteParams = u), (o.parent = this), new X(s, o, we(this, l)), this;
      }),
      (t.staggerFrom = function (s, n, o, a, l, h, u) {
        return (o.runBackwards = 1), (Vt(o).immediateRender = le(o.immediateRender)), this.staggerTo(s, n, o, a, l, h, u);
      }),
      (t.staggerFromTo = function (s, n, o, a, l, h, u, c) {
        return (a.startAt = o), (Vt(a).immediateRender = le(a.immediateRender)), this.staggerTo(s, n, a, l, h, u, c);
      }),
      (t.render = function (s, n, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          h = this._dur,
          u = s <= 0 ? 0 : ee(s),
          c = this._zTime < 0 != s < 0 && (this._initted || !h),
          f,
          d,
          m,
          p,
          g,
          x,
          _,
          y,
          w,
          b,
          v,
          T;
        if ((this !== j && u > l && s >= 0 && (u = l), u !== this._tTime || o || c)) {
          if (
            (a !== this._time && h && ((u += this._time - a), (s += this._time - a)),
            (f = u),
            (w = this._start),
            (y = this._ts),
            (x = !y),
            c && (h || (a = this._zTime), (s || !n) && (this._zTime = s)),
            this._repeat)
          ) {
            if (((v = this._yoyo), (g = h + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(g * 100 + s, n, o);
            if (
              ((f = ee(u % g)),
              u === l ? ((p = this._repeat), (f = h)) : ((p = ~~(u / g)), p && p === u / g && ((f = h), p--), f > h && (f = h)),
              (b = Et(this._tTime, g)),
              !a && this._tTime && b !== p && (b = p),
              v && p & 1 && ((f = h - f), (T = 1)),
              p !== b && !this._lock)
            ) {
              var M = v && b & 1,
                E = M === (v && p & 1);
              if (
                (p < b && (M = !M),
                (a = M ? 0 : h),
                (this._lock = 1),
                (this.render(a || (T ? 0 : ee(p * g)), n, !h)._lock = 0),
                (this._tTime = u),
                !n && this.parent && be(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (a && a !== this._time) || x !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((h = this._dur),
                (l = this._tDur),
                E && ((this._lock = 2), (a = M ? h : -1e-4), this.render(a, !0), this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !x)
              )
                return this;
              tn(this, T);
            }
          }
          if (
            (this._hasPause && !this._forcing && this._lock < 2 && ((_ = Bl(this, ee(a), ee(f))), _ && (u -= f - (f = _._start))),
            (this._tTime = u),
            (this._time = f),
            (this._act = !y),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = s), (a = 0)),
            !a && f && !n && (be(this, "onStart"), this._tTime !== u))
          )
            return this;
          if (f >= a && s >= 0)
            for (d = this._first; d; ) {
              if (((m = d._next), (d._act || f >= d._start) && d._ts && _ !== d)) {
                if (d.parent !== this) return this.render(s, n, o);
                if (
                  (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, n, o),
                  f !== this._time || (!this._ts && !x))
                ) {
                  (_ = 0), m && (u += this._zTime = -z);
                  break;
                }
              }
              d = m;
            }
          else {
            d = this._last;
            for (var S = s < 0 ? s : f; d; ) {
              if (((m = d._prev), (d._act || S <= d._end) && d._ts && _ !== d)) {
                if (d.parent !== this) return this.render(s, n, o);
                if (
                  (d.render(d._ts > 0 ? (S - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (S - d._start) * d._ts, n, o),
                  f !== this._time || (!this._ts && !x))
                ) {
                  (_ = 0), m && (u += this._zTime = S ? -z : z);
                  break;
                }
              }
              d = m;
            }
          }
          if (_ && !n && (this.pause(), (_.render(f >= a ? 0 : -z)._zTime = f >= a ? 1 : -1), this._ts))
            return (this._start = w), wr(this), this.render(s, n, o);
          this._onUpdate && !n && be(this, "onUpdate", !0),
            ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
              (w === this._start || Math.abs(y) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((s || !h) && ((u === l && this._ts > 0) || (!u && this._ts < 0)) && ze(this, 1),
                !n &&
                  !(s < 0 && !a) &&
                  (u || a || !l) &&
                  (be(this, u === l && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
        }
        return this;
      }),
      (t.add = function (s, n) {
        var o = this;
        if ((Ie(n) || (n = we(this, n, s)), !(s instanceof Wt))) {
          if (J(s))
            return (
              s.forEach(function (a) {
                return o.add(a, n);
              }),
              this
            );
          if (Y(s)) return this.addLabel(s, n);
          if (Q(s)) s = X.delayedCall(0, s);
          else return this;
        }
        return this !== s ? Ce(this, s, n) : this;
      }),
      (t.getChildren = function (s, n, o, a) {
        s === void 0 && (s = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -ye);
        for (var l = [], h = this._first; h; )
          h._start >= a && (h instanceof X ? n && l.push(h) : (o && l.push(h), s && l.push.apply(l, h.getChildren(!0, n, o)))), (h = h._next);
        return l;
      }),
      (t.getById = function (s) {
        for (var n = this.getChildren(1, 1, 1), o = n.length; o--; ) if (n[o].vars.id === s) return n[o];
      }),
      (t.remove = function (s) {
        return Y(s) ? this.removeLabel(s) : Q(s) ? this.killTweensOf(s) : (yr(this, s), s === this._recent && (this._recent = this._last), ht(this));
      }),
      (t.totalTime = function (s, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp && this._ts && (this._start = ee(ue.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
            i.prototype.totalTime.call(this, s, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (s, n) {
        return (this.labels[s] = we(this, n)), this;
      }),
      (t.removeLabel = function (s) {
        return delete this.labels[s], this;
      }),
      (t.addPause = function (s, n, o) {
        var a = X.delayedCall(0, n || Nt, o);
        return (a.data = "isPause"), (this._hasPause = 1), Ce(this, a, we(this, s));
      }),
      (t.removePause = function (s) {
        var n = this._first;
        for (s = we(this, s); n; ) n._start === s && n.data === "isPause" && ze(n), (n = n._next);
      }),
      (t.killTweensOf = function (s, n, o) {
        for (var a = this.getTweensOf(s, o), l = a.length; l--; ) We !== a[l] && a[l].kill(s, n);
        return this;
      }),
      (t.getTweensOf = function (s, n) {
        for (var o = [], a = ve(s), l = this._first, h = Ie(n), u; l; )
          l instanceof X
            ? Rl(l._targets, a) &&
              (h ? (!We || (l._initted && l._ts)) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) &&
              o.push(l)
            : (u = l.getTweensOf(a, n)).length && o.push.apply(o, u),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (s, n) {
        n = n || {};
        var o = this,
          a = we(o, s),
          l = n,
          h = l.startAt,
          u = l.onStart,
          c = l.onStartParams,
          f = l.immediateRender,
          d,
          m = X.to(
            o,
            _e(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration: n.duration || Math.abs((a - (h && "time" in h ? h.time : o._time)) / o.timeScale()) || z,
                onStart: function () {
                  if ((o.pause(), !d)) {
                    var g = n.duration || Math.abs((a - (h && "time" in h ? h.time : o._time)) / o.timeScale());
                    m._dur !== g && Mt(m, g, 0, 1).render(m._time, !0, !0), (d = 1);
                  }
                  u && u.apply(m, c || []);
                },
              },
              n,
            ),
          );
        return f ? m.render(0) : m;
      }),
      (t.tweenFromTo = function (s, n, o) {
        return this.tweenTo(n, _e({ startAt: { time: we(this, s) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (s) {
        return s === void 0 && (s = this._time), $s(this, we(this, s));
      }),
      (t.previousLabel = function (s) {
        return s === void 0 && (s = this._time), $s(this, we(this, s), 1);
      }),
      (t.currentLabel = function (s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + z);
      }),
      (t.shiftChildren = function (s, n, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, h; a; ) a._start >= o && ((a._start += s), (a._end += s)), (a = a._next);
        if (n) for (h in l) l[h] >= o && (l[h] += s);
        return ht(this);
      }),
      (t.invalidate = function () {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(), (s = s._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function (s) {
        s === void 0 && (s = !0);
        for (var n = this._first, o; n; ) (o = n._next), this.remove(n), (n = o);
        return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), ht(this);
      }),
      (t.totalDuration = function (s) {
        var n = 0,
          o = this,
          a = o._last,
          l = ye,
          h,
          u,
          c;
        if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -s : s));
        if (o._dirty) {
          for (c = o.parent; a; )
            (h = a._prev),
              a._dirty && a.totalDuration(),
              (u = a._start),
              u > l && o._sort && a._ts && !o._lock ? ((o._lock = 1), (Ce(o, a, u - a._delay, 1)._lock = 0)) : (l = u),
              u < 0 &&
                a._ts &&
                ((n -= u),
                ((!c && !o._dp) || (c && c.smoothChildTiming)) && ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
                o.shiftChildren(-u, !1, -1 / 0),
                (l = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = h);
          Mt(o, o === j && o._time > n ? o._time : n, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (s) {
        if ((j._ts && (Os(j, _r(s, j)), (Rs = ue.frame)), ue.frame >= Ls)) {
          Ls += ae.autoSleep || 120;
          var n = j._first;
          if ((!n || !n._ts) && ae.autoSleep && ue._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || ue.sleep();
          }
        }
      }),
      e
    );
  })(Wt);
  _e(te.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var rh = function (e, t, r, s, n, o, a) {
      var l = new se(this._pt, e, t, 0, 1, Ei, null, n),
        h = 0,
        u = 0,
        c,
        f,
        d,
        m,
        p,
        g,
        x,
        _;
      for (
        l.b = r,
          l.e = s,
          r += "",
          s += "",
          (x = ~s.indexOf("random(")) && (s = At(s)),
          o && ((_ = [r, s]), o(_, e, t), (r = _[0]), (s = _[1])),
          f = r.match(ei) || [];
        (c = ei.exec(s));

      )
        (m = c[0]),
          (p = s.substring(h, c.index)),
          d ? (d = (d + 1) % 5) : p.substr(-5) === "rgba(" && (d = 1),
          m !== f[u++] &&
            ((g = parseFloat(f[u - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || u === 1 ? p : ",",
              s: g,
              c: m.charAt(1) === "=" ? at(g, m) - g : parseFloat(m) - g,
              m: d && d < 4 ? Math.round : 0,
            }),
            (h = ei.lastIndex));
      return (l.c = h < s.length ? s.substring(h, s.length) : ""), (l.fp = a), (ti.test(s) || x) && (l.e = 0), (this._pt = l), l;
    },
    _i = function (e, t, r, s, n, o, a, l, h) {
      Q(s) && (s = s(n || 0, e, o));
      var u = e[t],
        c = r !== "get" ? r : Q(u) ? (h ? e[t.indexOf("set") || !Q(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](h) : e[t]()) : u,
        f = Q(u) ? (h ? ah : on) : Ti,
        d;
      if ((Y(s) && (~s.indexOf("random(") && (s = At(s)), s.charAt(1) === "=" && ((d = at(c, s) + ($(c) || 0)), (d || d === 0) && (s = d))), c !== s || vi))
        return !isNaN(c * s) && s !== ""
          ? ((d = new se(this._pt, e, t, +c || 0, s - (c || 0), typeof u == "boolean" ? hh : an, 0, f)),
            h && (d.fp = h),
            a && d.modifier(a, this, e),
            (this._pt = d))
          : (!u && !(t in e) && dr(t, s), rh.call(this, e, t, c, s, f, l || ae.stringFilter, h));
    },
    ih = function (e, t, r, s, n) {
      if ((Q(e) && (e = Yt(e, n, t, r, s)), !De(e) || (e.style && e.nodeType) || J(e) || As(e))) return Y(e) ? Yt(e, n, t, r, s) : e;
      var o = {},
        a;
      for (a in e) o[a] = Yt(e[a], n, t, r, s);
      return o;
    },
    wi = function (e, t, r, s, n, o) {
      var a, l, h, u;
      if (
        he[e] &&
        (a = new he[e]()).init(n, a.rawVars ? t[e] : ih(t[e], s, n, o, r), r, s, o) !== !1 &&
        ((r._pt = l = new se(r._pt, n, e, 0, 1, a.render, a, 0, a.priority)), r !== Pt)
      )
        for (h = r._ptLookup[r._targets.indexOf(n)], u = a._props.length; u--; ) h[a._props[u]] = l;
      return a;
    },
    We,
    vi,
    bi = function i(e, t) {
      var r = e.vars,
        s = r.ease,
        n = r.startAt,
        o = r.immediateRender,
        a = r.lazy,
        l = r.onUpdate,
        h = r.onUpdateParams,
        u = r.callbackScope,
        c = r.runBackwards,
        f = r.yoyoEase,
        d = r.keyframes,
        m = r.autoRevert,
        p = e._dur,
        g = e._startAt,
        x = e._targets,
        _ = e.parent,
        y = _ && _.data === "nested" ? _.parent._targets : x,
        w = e._overwrite === "auto" && !$r,
        b = e.timeline,
        v,
        T,
        M,
        E,
        S,
        R,
        O,
        k,
        P,
        N,
        H,
        oe,
        tt;
      if (
        (b && (!d || !s) && (s = "none"),
        (e._ease = ut(s, Tt.ease)),
        (e._yEase = f ? en(ut(f === !0 ? s : f, Tt.ease)) : 0),
        f && e._yoyo && !e._repeat && ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
        (e._from = !b && !!r.runBackwards),
        !b || (d && !r.stagger))
      ) {
        if (((k = x[0] ? Ge(x[0]).harness : 0), (oe = k && r[k.prop]), (v = xr(r, si)), g && (ze(g.render(-1, !0)), (g._lazy = 0)), n))
          if (
            (ze(
              (e._startAt = X.set(
                x,
                _e(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: _,
                    immediateRender: !0,
                    lazy: le(a),
                    startAt: null,
                    delay: 0,
                    onUpdate: l,
                    onUpdateParams: h,
                    callbackScope: u,
                    stagger: 0,
                  },
                  n,
                ),
              )),
            ),
            t < 0 && !o && !m && e._startAt.render(-1, !0),
            o)
          ) {
            if ((t > 0 && !m && (e._startAt = 0), p && t <= 0)) {
              t && (e._zTime = t);
              return;
            }
          } else m === !1 && (e._startAt = 0);
        else if (c && p) {
          if (g) !m && (e._startAt = 0);
          else if (
            (t && (o = !1),
            (M = _e({ overwrite: !1, data: "isFromStart", lazy: o && le(a), immediateRender: o, stagger: 0, parent: _ }, v)),
            oe && (M[k.prop] = oe),
            ze((e._startAt = X.set(x, M))),
            t < 0 && e._startAt.render(-1, !0),
            (e._zTime = t),
            !o)
          )
            i(e._startAt, z);
          else if (!t) return;
        }
        for (e._pt = e._ptCache = 0, a = (p && le(a)) || (a && !p), T = 0; T < x.length; T++) {
          if (
            ((S = x[T]),
            (O = S._gsap || li(x)[T]._gsap),
            (e._ptLookup[T] = N = {}),
            ni[O.id] && qe.length && gr(),
            (H = y === x ? T : y.indexOf(S)),
            k &&
              (P = new k()).init(S, oe || v, e, H, y) !== !1 &&
              ((e._pt = E = new se(e._pt, S, P.name, 0, 1, P.render, P, 0, P.priority)),
              P._props.forEach(function (rt) {
                N[rt] = E;
              }),
              P.priority && (R = 1)),
            !k || oe)
          )
            for (M in v) he[M] && (P = wi(M, v, e, H, S, y)) ? P.priority && (R = 1) : (N[M] = E = _i.call(e, S, M, "get", v[M], H, y, 0, r.stringFilter));
          e._op && e._op[T] && e.kill(S, e._op[T]),
            w && e._pt && ((We = e), j.killTweensOf(S, N, e.globalTime(t)), (tt = !e.parent), (We = 0)),
            e._pt && a && (ni[O.id] = 1);
        }
        R && Ai(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = l), (e._initted = (!e._op || e._pt) && !tt), d && t <= 0 && b.render(ye, !0, !0);
    },
    sh = function (e, t, r, s, n, o, a) {
      var l = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        h,
        u,
        c;
      if (!l)
        for (l = e._ptCache[t] = [], u = e._ptLookup, c = e._targets.length; c--; ) {
          if (((h = u[c][t]), h && h.d && h.d._pt)) for (h = h.d._pt; h && h.p !== t; ) h = h._next;
          if (!h) return (vi = 1), (e.vars[t] = "+=0"), bi(e, a), (vi = 0), 1;
          l.push(h);
        }
      for (c = l.length; c--; )
        (h = l[c]), (h.s = (s || s === 0) && !n ? s : h.s + (s || 0) + o * h.c), (h.c = r - h.s), h.e && (h.e = q(r) + $(h.e)), h.b && (h.b = h.s + $(h.b));
    },
    nh = function (e, t) {
      var r = e[0] ? Ge(e[0]).harness : 0,
        s = r && r.aliases,
        n,
        o,
        a,
        l;
      if (!s) return t;
      n = lt({}, t);
      for (o in s) if (o in n) for (l = s[o].split(","), a = l.length; a--; ) n[l[a]] = n[o];
      return n;
    },
    oh = function (e, t, r, s) {
      var n = t.ease || s || "power1.inOut",
        o,
        a;
      if (J(t))
        (a = r[e] || (r[e] = [])),
          t.forEach(function (l, h) {
            return a.push({ t: (h / (t.length - 1)) * 100, v: l, e: n });
          });
      else for (o in t) (a = r[o] || (r[o] = [])), o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: n });
    },
    Yt = function (e, t, r, s, n) {
      return Q(e) ? e.call(t, r, s, n) : Y(e) && ~e.indexOf("random(") ? At(e) : e;
    },
    sn = ai + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    nn = {};
  ie(sn + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
    return (nn[i] = 1);
  });
  var X = (function (i) {
    Ts(e, i);
    function e(r, s, n, o) {
      var a;
      typeof s == "number" && ((n.duration = s), (s = n), (n = null)), (a = i.call(this, o ? s : Vt(s)) || this);
      var l = a.vars,
        h = l.duration,
        u = l.delay,
        c = l.immediateRender,
        f = l.stagger,
        d = l.overwrite,
        m = l.keyframes,
        p = l.defaults,
        g = l.scrollTrigger,
        x = l.yoyoEase,
        _ = s.parent || j,
        y = (J(r) || As(r) ? Ie(r[0]) : "length" in s) ? [r] : ve(r),
        w,
        b,
        v,
        T,
        M,
        E,
        S,
        R;
      if (
        ((a._targets = y.length ? li(y) : pr("GSAP target " + r + " not found. https://greensock.com", !ae.nullTargetWarn) || []),
        (a._ptLookup = []),
        (a._overwrite = d),
        m || f || cr(h) || cr(u))
      ) {
        if (
          ((s = a.vars),
          (w = a.timeline = new te({ data: "nested", defaults: p || {} })),
          w.kill(),
          (w.parent = w._dp = ke(a)),
          (w._start = 0),
          f || cr(h) || cr(u))
        ) {
          if (((T = y.length), (S = f && Hs(f)), De(f))) for (M in f) ~sn.indexOf(M) && (R || (R = {}), (R[M] = f[M]));
          for (b = 0; b < T; b++)
            (v = xr(s, nn)),
              (v.stagger = 0),
              x && (v.yoyoEase = x),
              R && lt(v, R),
              (E = y[b]),
              (v.duration = +Yt(h, ke(a), b, E, y)),
              (v.delay = (+Yt(u, ke(a), b, E, y) || 0) - a._delay),
              !f && T === 1 && v.delay && ((a._delay = u = v.delay), (a._start += u), (v.delay = 0)),
              w.to(E, v, S ? S(b, E, y) : 0),
              (w._ease = I.none);
          w.duration() ? (h = u = 0) : (a.timeline = 0);
        } else if (m) {
          Vt(_e(w.vars.defaults, { ease: "none" })), (w._ease = ut(m.ease || s.ease || "none"));
          var O = 0,
            k,
            P,
            N;
          if (J(m))
            m.forEach(function (H) {
              return w.to(y, H, ">");
            });
          else {
            v = {};
            for (M in m) M === "ease" || M === "easeEach" || oh(M, m[M], v, m.easeEach);
            for (M in v)
              for (
                k = v[M].sort(function (H, oe) {
                  return H.t - oe.t;
                }),
                  O = 0,
                  b = 0;
                b < k.length;
                b++
              )
                (P = k[b]), (N = { ease: P.e, duration: ((P.t - (b ? k[b - 1].t : 0)) / 100) * h }), (N[M] = P.v), w.to(y, N, O), (O += N.duration);
            w.duration() < h && w.to({}, { duration: h - w.duration() });
          }
        }
        h || a.duration((h = w.duration()));
      } else a.timeline = 0;
      return (
        d === !0 && !$r && ((We = ke(a)), j.killTweensOf(y), (We = 0)),
        Ce(_, ke(a), n),
        s.reversed && a.reverse(),
        s.paused && a.paused(!0),
        (c || (!h && !m && a._start === ee(_._time) && le(c) && Il(ke(a)) && _.data !== "nested")) && ((a._tTime = -z), a.render(Math.max(0, -u))),
        g && Vs(ke(a), g),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (s, n, o) {
        var a = this._time,
          l = this._tDur,
          h = this._dur,
          u = s > l - z && s >= 0 ? l : s < z ? 0 : s,
          c,
          f,
          d,
          m,
          p,
          g,
          x,
          _,
          y;
        if (!h) zl(this, s, n, o);
        else if (u !== this._tTime || !s || o || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != s < 0)) {
          if (((c = u), (_ = this.timeline), this._repeat)) {
            if (((m = h + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(m * 100 + s, n, o);
            if (
              ((c = ee(u % m)),
              u === l ? ((d = this._repeat), (c = h)) : ((d = ~~(u / m)), d && d === u / m && ((c = h), d--), c > h && (c = h)),
              (g = this._yoyo && d & 1),
              g && ((y = this._yEase), (c = h - c)),
              (p = Et(this._tTime, m)),
              c === a && !o && this._initted)
            )
              return (this._tTime = u), this;
            d !== p &&
              (_ && this._yEase && tn(_, g),
              this.vars.repeatRefresh && !g && !this._lock && ((this._lock = o = 1), (this.render(ee(m * d), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Us(this, s < 0 ? s : c, o, n)) return (this._tTime = 0), this;
            if (a !== this._time) return this;
            if (h !== this._dur) return this.render(s, n, o);
          }
          if (
            ((this._tTime = u),
            (this._time = c),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = x = (y || this._ease)(c / h)),
            this._from && (this.ratio = x = 1 - x),
            c && !a && !n && (be(this, "onStart"), this._tTime !== u))
          )
            return this;
          for (f = this._pt; f; ) f.r(x, f.d), (f = f._next);
          (_ && _.render(s < 0 ? s : !c && g ? -z : _._dur * _._ease(c / this._dur), n, o)) || (this._startAt && (this._zTime = s)),
            this._onUpdate && !n && (s < 0 && this._startAt && this._startAt.render(s, !0, o), be(this, "onUpdate")),
            this._repeat && d !== p && this.vars.onRepeat && !n && this.parent && be(this, "onRepeat"),
            (u === this._tDur || !u) &&
              this._tTime === u &&
              (s < 0 && this._startAt && !this._onUpdate && this._startAt.render(s, !0, !0),
              (s || !h) && ((u === this._tDur && this._ts > 0) || (!u && this._ts < 0)) && ze(this, 1),
              !n &&
                !(s < 0 && !a) &&
                (u || a) &&
                (be(this, u === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < l && this.timeScale() > 0) && this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function () {
        return (
          (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          i.prototype.invalidate.call(this)
        );
      }),
      (t.resetTo = function (s, n, o, a) {
        Ht || ue.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          h,
          u;
        return (
          this._initted || bi(this, l),
          (h = this._ease(l / this._dur)),
          sh(this, s, n, o, a, h, l)
            ? this.resetTo(s, n, o, a)
            : (ui(this, 0), this.parent || zs(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        );
      }),
      (t.kill = function (s, n) {
        if ((n === void 0 && (n = "all"), !s && (!n || n === "all"))) return (this._lazy = this._pt = 0), this.parent ? qt(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(s, n, We && We.vars.overwrite !== !0)._first || qt(this),
            this.parent && o !== this.timeline.totalDuration() && Mt(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = s ? ve(s) : a,
          h = this._ptLookup,
          u = this._pt,
          c,
          f,
          d,
          m,
          p,
          g,
          x;
        if ((!n || n === "all") && Ol(a, l)) return n === "all" && (this._pt = 0), qt(this);
        for (
          c = this._op = this._op || [],
            n !== "all" &&
              (Y(n) &&
                ((p = {}),
                ie(n, function (_) {
                  return (p[_] = 1);
                }),
                (n = p)),
              (n = nh(a, n))),
            x = a.length;
          x--;

        )
          if (~l.indexOf(a[x])) {
            (f = h[x]), n === "all" ? ((c[x] = n), (m = f), (d = {})) : ((d = c[x] = c[x] || {}), (m = n));
            for (p in m) (g = f && f[p]), g && ((!("kill" in g.d) || g.d.kill(p) === !0) && yr(this, g, "_pt"), delete f[p]), d !== "all" && (d[p] = 1);
          }
        return this._initted && !this._pt && u && qt(this), this;
      }),
      (e.to = function (s, n) {
        return new e(s, n, arguments[2]);
      }),
      (e.from = function (s, n) {
        return Ut(1, arguments);
      }),
      (e.delayedCall = function (s, n, o, a) {
        return new e(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: s,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (s, n, o) {
        return Ut(2, arguments);
      }),
      (e.set = function (s, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new e(s, n);
      }),
      (e.killTweensOf = function (s, n, o) {
        return j.killTweensOf(s, n, o);
      }),
      e
    );
  })(Wt);
  _e(X.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  ie("staggerTo,staggerFrom,staggerFromTo", function (i) {
    X[i] = function () {
      var e = new te(),
        t = fi.call(arguments, 0);
      return t.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), e[i].apply(e, t);
    };
  });
  var Ti = function (e, t, r) {
      return (e[t] = r);
    },
    on = function (e, t, r) {
      return e[t](r);
    },
    ah = function (e, t, r, s) {
      return e[t](s.fp, r);
    },
    lh = function (e, t, r) {
      return e.setAttribute(t, r);
    },
    vr = function (e, t) {
      return Q(e[t]) ? on : ur(e[t]) && e.setAttribute ? lh : Ti;
    },
    an = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    hh = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Ei = function (e, t) {
      var r = t._pt,
        s = "";
      if (!e && t.b) s = t.b;
      else if (e === 1 && t.e) s = t.e;
      else {
        for (; r; ) (s = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + s), (r = r._next);
        s += t.c;
      }
      t.set(t.t, t.p, s, t);
    },
    Mi = function (e, t) {
      for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
    },
    uh = function (e, t, r, s) {
      for (var n = this._pt, o; n; ) (o = n._next), n.p === s && n.modifier(e, t, r), (n = o);
    },
    ch = function (e) {
      for (var t = this._pt, r, s; t; ) (s = t._next), (t.p === e && !t.op) || t.op === e ? yr(this, t, "_pt") : t.dep || (r = 1), (t = s);
      return !r;
    },
    fh = function (e, t, r, s) {
      s.mSet(e, t, s.m.call(s.tween, r, s.mt), s);
    },
    Ai = function (e) {
      for (var t = e._pt, r, s, n, o; t; ) {
        for (r = t._next, s = n; s && s.pr > t.pr; ) s = s._next;
        (t._prev = s ? s._prev : o) ? (t._prev._next = t) : (n = t), (t._next = s) ? (s._prev = t) : (o = t), (t = r);
      }
      e._pt = n;
    },
    se = (function () {
      function i(t, r, s, n, o, a, l, h, u) {
        (this.t = r),
          (this.s = n),
          (this.c = o),
          (this.p = s),
          (this.r = a || an),
          (this.d = l || this),
          (this.set = h || Ti),
          (this.pr = u || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = i.prototype;
      return (
        (e.modifier = function (r, s, n) {
          (this.mSet = this.mSet || this.set), (this.set = fh), (this.m = r), (this.mt = n), (this.tween = s);
        }),
        i
      );
    })();
  ie(
    ai +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (i) {
      return (si[i] = 1);
    },
  );
  me.TweenMax = me.TweenLite = X;
  me.TimelineLite = me.TimelineMax = te;
  j = new te({ sortChildren: !1, defaults: Tt, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
  ae.stringFilter = mi;
  var br = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      t.forEach(function (s) {
        return Ql(s);
      });
    },
    timeline: function (e) {
      return new te(e);
    },
    getTweensOf: function (e, t) {
      return j.getTweensOf(e, t);
    },
    getProperty: function (e, t, r, s) {
      Y(e) && (e = ve(e)[0]);
      var n = Ge(e || {}).get,
        o = r ? Is : ks;
      return (
        r === "native" && (r = ""),
        e &&
          (t
            ? o(((he[t] && he[t].get) || n)(e, t, r, s))
            : function (a, l, h) {
                return o(((he[a] && he[a].get) || n)(e, a, l, h));
              })
      );
    },
    quickSetter: function (e, t, r) {
      if (((e = ve(e)), e.length > 1)) {
        var s = e.map(function (u) {
            return re.quickSetter(u, t, r);
          }),
          n = s.length;
        return function (u) {
          for (var c = n; c--; ) s[c](u);
        };
      }
      e = e[0] || {};
      var o = he[t],
        a = Ge(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        h = o
          ? function (u) {
              var c = new o();
              (Pt._pt = 0), c.init(e, r ? u + r : u, Pt, 0, [e]), c.render(1, c), Pt._pt && Mi(1, Pt);
            }
          : a.set(e, l);
      return o
        ? h
        : function (u) {
            return h(e, l, r ? u + r : u, a, 1);
          };
    },
    quickTo: function (e, t, r) {
      var s,
        n = re.to(e, lt(((s = {}), (s[t] = "+=0.1"), (s.paused = !0), s), r || {})),
        o = function (l, h, u) {
          return n.resetTo(t, l, h, u);
        };
      return (o.tween = n), o;
    },
    isTweening: function (e) {
      return j.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = ut(e.ease, Tt.ease)), Ds(Tt, e || {});
    },
    config: function (e) {
      return Ds(ae, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        r = e.effect,
        s = e.plugins,
        n = e.defaults,
        o = e.extendTimeline;
      (s || "").split(",").forEach(function (a) {
        return a && !he[a] && !me[a] && pr(t + " effect requires " + a + " plugin.");
      }),
        (oi[t] = function (a, l, h) {
          return r(ve(a), _e(l || {}, n), h);
        }),
        o &&
          (te.prototype[t] = function (a, l, h) {
            return this.add(oi[t](a, De(l) ? l : (h = l) && {}, this), h);
          });
    },
    registerEase: function (e, t) {
      I[e] = ut(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? ut(e, t) : I;
    },
    getById: function (e) {
      return j.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var r = new te(e),
        s,
        n;
      for (r.smoothChildTiming = le(e.smoothChildTiming), j.remove(r), r._dp = 0, r._time = r._tTime = j._time, s = j._first; s; )
        (n = s._next), (t || !(!s._dur && s instanceof X && s.vars.onComplete === s._targets[0])) && Ce(r, s, s._start - s._delay), (s = n);
      return Ce(j, r, 0), r;
    },
    utils: {
      wrap: Wl,
      wrapYoyo: Yl,
      distribute: Hs,
      random: Ys,
      snap: Ws,
      normalize: Hl,
      getUnit: $,
      clamp: Vl,
      splitColor: Zs,
      toArray: ve,
      selector: jl,
      mapRange: Qs,
      pipe: ql,
      unitize: Gl,
      interpolate: Xl,
      shuffle: Gs,
    },
    install: Cs,
    effects: oi,
    ticker: ue,
    updateRoot: te.updateRoot,
    plugins: he,
    globalTimeline: j,
    core: {
      PropTween: se,
      globals: Fs,
      Tween: X,
      Timeline: te,
      Animation: Wt,
      getCache: Ge,
      _removeLinkedListItem: yr,
      suppressOverwrites: function (e) {
        return ($r = e);
      },
    },
  };
  ie("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
    return (br[i] = X[i]);
  });
  ue.add(te.updateRoot);
  Pt = br.to({}, { duration: 0 });
  var dh = function (e, t) {
      for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; ) r = r._next;
      return r;
    },
    ph = function (e, t) {
      var r = e._targets,
        s,
        n,
        o;
      for (s in t)
        for (n = r.length; n--; ) (o = e._ptLookup[n][s]), o && (o = o.d) && (o._pt && (o = dh(o, s)), o && o.modifier && o.modifier(t[s], e, r[n], s));
    },
    Pi = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (s, n, o) {
          o._onInit = function (a) {
            var l, h;
            if (
              (Y(n) &&
                ((l = {}),
                ie(n, function (u) {
                  return (l[u] = 1);
                }),
                (n = l)),
              t)
            ) {
              l = {};
              for (h in n) l[h] = t(n[h]);
              n = l;
            }
            ph(a, n);
          };
        },
      };
    },
    re =
      br.registerPlugin(
        {
          name: "attr",
          init: function (e, t, r, s, n) {
            var o, a;
            for (o in t) (a = this.add(e, "setAttribute", (e.getAttribute(o) || 0) + "", t[o], s, n, 0, 0, o)), a && (a.op = o), this._props.push(o);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var r = t.length; r--; ) this.add(e, r, e[r] || 0, t[r]);
          },
        },
        Pi("roundProps", di),
        Pi("modifiers"),
        Pi("snap", Ws),
      ) || br;
  X.version = te.version = re.version = "3.10.2";
  Ss = 1;
  Ms() && St();
  var mh = I.Power0,
    gh = I.Power1,
    xh = I.Power2,
    yh = I.Power3,
    _h = I.Power4,
    wh = I.Linear,
    vh = I.Quad,
    bh = I.Cubic,
    Th = I.Quart,
    Eh = I.Quint,
    Mh = I.Strong,
    Ah = I.Elastic,
    Ph = I.Back,
    Sh = I.SteppedEase,
    Ch = I.Bounce,
    Fh = I.Sine,
    Rh = I.Expo,
    Lh = I.Circ;
  var ln,
    Ye,
    Ct,
    Si,
    ft,
    Oh,
    hn,
    kh = function () {
      return typeof window != "undefined";
    },
    Xe = {},
    dt = 180 / Math.PI,
    Ft = Math.PI / 180,
    Rt = Math.atan2,
    un = 1e8,
    cn = /([A-Z])/g,
    Ih = /(left|right|width|margin|padding|x)/i,
    Dh = /[\s,\(]\S/,
    Qe = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    fn = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    zh = function (e, t) {
      return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Bh = function (e, t) {
      return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
    },
    Nh = function (e, t) {
      var r = t.s + t.c * e;
      t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    dn = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    pn = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Vh = function (e, t, r) {
      return (e.style[t] = r);
    },
    Uh = function (e, t, r) {
      return e.style.setProperty(t, r);
    },
    jh = function (e, t, r) {
      return (e._gsap[t] = r);
    },
    qh = function (e, t, r) {
      return (e._gsap.scaleX = e._gsap.scaleY = r);
    },
    Gh = function (e, t, r, s, n) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = r), o.renderTransform(n, o);
    },
    Hh = function (e, t, r, s, n) {
      var o = e._gsap;
      (o[t] = r), o.renderTransform(n, o);
    },
    Z = "transform",
    $e = Z + "Origin",
    mn,
    Ci = function (e, t) {
      var r = Ye.createElementNS ? Ye.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ye.createElement(e);
      return r.style ? r : Ye.createElement(e);
    },
    Ne = function i(e, t, r) {
      var s = getComputedStyle(e);
      return s[t] || s.getPropertyValue(t.replace(cn, "-$1").toLowerCase()) || s.getPropertyValue(t) || (!r && i(e, Lt(t) || t, 1)) || "";
    },
    gn = "O,Moz,ms,Ms,Webkit".split(","),
    Lt = function (e, t, r) {
      var s = t || ft,
        n = s.style,
        o = 5;
      if (e in n && !r) return e;
      for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(gn[o] + e in n); );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? gn[o] : "") + e;
    },
    Fi = function () {
      kh() &&
        window.document &&
        ((ln = window),
        (Ye = ln.document),
        (Ct = Ye.documentElement),
        (ft = Ci("div") || { style: {} }),
        (Oh = Ci("div")),
        (Z = Lt(Z)),
        ($e = Z + "Origin"),
        (ft.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
        (mn = !!Lt("perspective")),
        (Si = 1));
    },
    Ri = function i(e) {
      var t = Ci("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
        r = this.parentNode,
        s = this.nextSibling,
        n = this.style.cssText,
        o;
      if ((Ct.appendChild(t), t.appendChild(this), (this.style.display = "block"), e))
        try {
          (o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = i);
        } catch (a) {}
      else this._gsapBBox && (o = this._gsapBBox());
      return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), Ct.removeChild(t), (this.style.cssText = n), o;
    },
    xn = function (e, t) {
      for (var r = t.length; r--; ) if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
    },
    yn = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch (r) {
        t = Ri.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) || e.getBBox === Ri || (t = Ri.call(e, !0)),
        t && !t.width && !t.x && !t.y ? { x: +xn(e, ["x", "cx", "x1"]) || 0, y: +xn(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : t
      );
    },
    _n = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && yn(e));
    },
    Xt = function (e, t) {
      if (t) {
        var r = e.style;
        t in Xe && t !== $e && (t = Z),
          r.removeProperty
            ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(t.replace(cn, "-$1").toLowerCase()))
            : r.removeAttribute(t);
      }
    },
    Ze = function (e, t, r, s, n, o) {
      var a = new se(e._pt, t, r, 0, 1, o ? pn : dn);
      return (e._pt = a), (a.b = s), (a.e = n), e._props.push(r), a;
    },
    wn = { deg: 1, rad: 1, turn: 1 },
    Ke = function i(e, t, r, s) {
      var n = parseFloat(r) || 0,
        o = (r + "").trim().substr((n + "").length) || "px",
        a = ft.style,
        l = Ih.test(t),
        h = e.tagName.toLowerCase() === "svg",
        u = (h ? "client" : "offset") + (l ? "Width" : "Height"),
        c = 100,
        f = s === "px",
        d = s === "%",
        m,
        p,
        g,
        x;
      return s === o || !n || wn[s] || wn[o]
        ? n
        : (o !== "px" && !f && (n = i(e, t, r, "px")),
          (x = e.getCTM && _n(e)),
          (d || o === "%") && (Xe[t] || ~t.indexOf("adius"))
            ? ((m = x ? e.getBBox()[l ? "width" : "height"] : e[u]), q(d ? (n / m) * c : (n / 100) * m))
            : ((a[l ? "width" : "height"] = c + (f ? o : s)),
              (p = ~t.indexOf("adius") || (s === "em" && e.appendChild && !h) ? e : e.parentNode),
              x && (p = (e.ownerSVGElement || {}).parentNode),
              (!p || p === Ye || !p.appendChild) && (p = Ye.body),
              (g = p._gsap),
              g && d && g.width && l && g.time === ue.time
                ? q((n / g.width) * c)
                : ((d || o === "%") && (a.position = Ne(e, "position")),
                  p === e && (a.position = "static"),
                  p.appendChild(ft),
                  (m = ft[u]),
                  p.removeChild(ft),
                  (a.position = "absolute"),
                  l && d && ((g = Ge(p)), (g.time = ue.time), (g.width = p[u])),
                  q(f ? (m * n) / c : m && n ? (c / m) * n : 0))));
    },
    pt = function (e, t, r, s) {
      var n;
      return (
        Si || Fi(),
        t in Qe && t !== "transform" && ((t = Qe[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Xe[t] && t !== "transform"
          ? ((n = $t(e, s)), (n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Er(Ne(e, $e)) + " " + n.zOrigin + "px"))
          : ((n = e.style[t]),
            (!n || n === "auto" || s || ~(n + "").indexOf("calc(")) && (n = (Tr[t] && Tr[t](e, t, r)) || Ne(e, t) || hi(e, t) || (t === "opacity" ? 1 : 0))),
        r && !~(n + "").trim().indexOf(" ") ? Ke(e, t, n, r) + r : n
      );
    },
    Wh = function (e, t, r, s) {
      if (!r || r === "none") {
        var n = Lt(t, e, 1),
          o = n && Ne(e, n, 1);
        o && o !== r ? ((t = n), (r = o)) : t === "borderColor" && (r = Ne(e, "borderTopColor"));
      }
      var a = new se(this._pt, e.style, t, 0, 1, Ei),
        l = 0,
        h = 0,
        u,
        c,
        f,
        d,
        m,
        p,
        g,
        x,
        _,
        y,
        w,
        b;
      if (
        ((a.b = r),
        (a.e = s),
        (r += ""),
        (s += ""),
        s === "auto" && ((e.style[t] = s), (s = Ne(e, t) || s), (e.style[t] = r)),
        (u = [r, s]),
        mi(u),
        (r = u[0]),
        (s = u[1]),
        (f = r.match(ot) || []),
        (b = s.match(ot) || []),
        b.length)
      ) {
        for (; (c = ot.exec(s)); )
          (g = c[0]),
            (_ = s.substring(l, c.index)),
            m ? (m = (m + 1) % 5) : (_.substr(-5) === "rgba(" || _.substr(-5) === "hsla(") && (m = 1),
            g !== (p = f[h++] || "") &&
              ((d = parseFloat(p) || 0),
              (w = p.substr((d + "").length)),
              g.charAt(1) === "=" && (g = at(d, g) + w),
              (x = parseFloat(g)),
              (y = g.substr((x + "").length)),
              (l = ot.lastIndex - y.length),
              y || ((y = y || ae.units[t] || w), l === s.length && ((s += y), (a.e += y))),
              w !== y && (d = Ke(e, t, p, y) || 0),
              (a._pt = { _next: a._pt, p: _ || h === 1 ? _ : ",", s: d, c: x - d, m: (m && m < 4) || t === "zIndex" ? Math.round : 0 }));
        a.c = l < s.length ? s.substring(l, s.length) : "";
      } else a.r = t === "display" && s === "none" ? pn : dn;
      return ti.test(s) && (a.e = 0), (this._pt = a), a;
    },
    vn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    Yh = function (e) {
      var t = e.split(" "),
        r = t[0],
        s = t[1] || "50%";
      return (
        (r === "top" || r === "bottom" || s === "left" || s === "right") && ((e = r), (r = s), (s = e)), (t[0] = vn[r] || r), (t[1] = vn[s] || s), t.join(" ")
      );
    },
    Xh = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var r = t.t,
          s = r.style,
          n = t.u,
          o = r._gsap,
          a,
          l,
          h;
        if (n === "all" || n === !0) (s.cssText = ""), (l = 1);
        else for (n = n.split(","), h = n.length; --h > -1; ) (a = n[h]), Xe[a] && ((l = 1), (a = a === "transformOrigin" ? $e : Z)), Xt(r, a);
        l && (Xt(r, Z), o && (o.svg && r.removeAttribute("transform"), $t(r, 1), (o.uncache = 1)));
      }
    },
    Tr = {
      clearProps: function (e, t, r, s, n) {
        if (n.data !== "isFromStart") {
          var o = (e._pt = new se(e._pt, t, r, 0, 0, Xh));
          return (o.u = s), (o.pr = -10), (o.tween = n), e._props.push(r), 1;
        }
      },
    },
    Qt = [1, 0, 0, 1, 0, 0],
    bn = {},
    Tn = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    En = function (e) {
      var t = Ne(e, Z);
      return Tn(t) ? Qt : t.substr(7).match(Jr).map(q);
    },
    Li = function (e, t) {
      var r = e._gsap || Ge(e),
        s = e.style,
        n = En(e),
        o,
        a,
        l,
        h;
      return r.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix), (n = [l.a, l.b, l.c, l.d, l.e, l.f]), n.join(",") === "1,0,0,1,0,0" ? Qt : n)
        : (n === Qt &&
            !e.offsetParent &&
            e !== Ct &&
            !r.svg &&
            ((l = s.display),
            (s.display = "block"),
            (o = e.parentNode),
            (!o || !e.offsetParent) && ((h = 1), (a = e.nextSibling), Ct.appendChild(e)),
            (n = En(e)),
            l ? (s.display = l) : Xt(e, "display"),
            h && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Ct.removeChild(e))),
          t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Oi = function (e, t, r, s, n, o) {
      var a = e._gsap,
        l = n || Li(e, !0),
        h = a.xOrigin || 0,
        u = a.yOrigin || 0,
        c = a.xOffset || 0,
        f = a.yOffset || 0,
        d = l[0],
        m = l[1],
        p = l[2],
        g = l[3],
        x = l[4],
        _ = l[5],
        y = t.split(" "),
        w = parseFloat(y[0]) || 0,
        b = parseFloat(y[1]) || 0,
        v,
        T,
        M,
        E;
      r
        ? l !== Qt &&
          (T = d * g - m * p) &&
          ((M = w * (g / T) + b * (-p / T) + (p * _ - g * x) / T), (E = w * (-m / T) + b * (d / T) - (d * _ - m * x) / T), (w = M), (b = E))
        : ((v = yn(e)), (w = v.x + (~y[0].indexOf("%") ? (w / 100) * v.width : w)), (b = v.y + (~(y[1] || y[0]).indexOf("%") ? (b / 100) * v.height : b))),
        s || (s !== !1 && a.smooth)
          ? ((x = w - h), (_ = b - u), (a.xOffset = c + (x * d + _ * p) - x), (a.yOffset = f + (x * m + _ * g) - _))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = w),
        (a.yOrigin = b),
        (a.smooth = !!s),
        (a.origin = t),
        (a.originIsAbsolute = !!r),
        (e.style[$e] = "0px 0px"),
        o && (Ze(o, a, "xOrigin", h, w), Ze(o, a, "yOrigin", u, b), Ze(o, a, "xOffset", c, a.xOffset), Ze(o, a, "yOffset", f, a.yOffset)),
        e.setAttribute("data-svg-origin", w + " " + b);
    },
    $t = function (e, t) {
      var r = e._gsap || new yi(e);
      if ("x" in r && !t && !r.uncache) return r;
      var s = e.style,
        n = r.scaleX < 0,
        o = "px",
        a = "deg",
        l = Ne(e, $e) || "0",
        h,
        u,
        c,
        f,
        d,
        m,
        p,
        g,
        x,
        _,
        y,
        w,
        b,
        v,
        T,
        M,
        E,
        S,
        R,
        O,
        k,
        P,
        N,
        H,
        oe,
        tt,
        rt,
        zt,
        it,
        vs,
        Le,
        st;
      return (
        (h = u = c = m = p = g = x = _ = y = 0),
        (f = d = 1),
        (r.svg = !!(e.getCTM && _n(e))),
        (v = Li(e, r.svg)),
        r.svg &&
          ((H = (!r.uncache || l === "0px 0px") && !t && e.getAttribute("data-svg-origin")), Oi(e, H || l, !!H || r.originIsAbsolute, r.smooth !== !1, v)),
        (w = r.xOrigin || 0),
        (b = r.yOrigin || 0),
        v !== Qt &&
          ((S = v[0]),
          (R = v[1]),
          (O = v[2]),
          (k = v[3]),
          (h = P = v[4]),
          (u = N = v[5]),
          v.length === 6
            ? ((f = Math.sqrt(S * S + R * R)),
              (d = Math.sqrt(k * k + O * O)),
              (m = S || R ? Rt(R, S) * dt : 0),
              (x = O || k ? Rt(O, k) * dt + m : 0),
              x && (d *= Math.abs(Math.cos(x * Ft))),
              r.svg && ((h -= w - (w * S + b * O)), (u -= b - (w * R + b * k))))
            : ((st = v[6]),
              (vs = v[7]),
              (rt = v[8]),
              (zt = v[9]),
              (it = v[10]),
              (Le = v[11]),
              (h = v[12]),
              (u = v[13]),
              (c = v[14]),
              (T = Rt(st, it)),
              (p = T * dt),
              T &&
                ((M = Math.cos(-T)),
                (E = Math.sin(-T)),
                (H = P * M + rt * E),
                (oe = N * M + zt * E),
                (tt = st * M + it * E),
                (rt = P * -E + rt * M),
                (zt = N * -E + zt * M),
                (it = st * -E + it * M),
                (Le = vs * -E + Le * M),
                (P = H),
                (N = oe),
                (st = tt)),
              (T = Rt(-O, it)),
              (g = T * dt),
              T &&
                ((M = Math.cos(-T)),
                (E = Math.sin(-T)),
                (H = S * M - rt * E),
                (oe = R * M - zt * E),
                (tt = O * M - it * E),
                (Le = k * E + Le * M),
                (S = H),
                (R = oe),
                (O = tt)),
              (T = Rt(R, S)),
              (m = T * dt),
              T &&
                ((M = Math.cos(T)), (E = Math.sin(T)), (H = S * M + R * E), (oe = P * M + N * E), (R = R * M - S * E), (N = N * M - P * E), (S = H), (P = oe)),
              p && Math.abs(p) + Math.abs(m) > 359.9 && ((p = m = 0), (g = 180 - g)),
              (f = q(Math.sqrt(S * S + R * R + O * O))),
              (d = q(Math.sqrt(N * N + st * st))),
              (T = Rt(P, N)),
              (x = Math.abs(T) > 2e-4 ? T * dt : 0),
              (y = Le ? 1 / (Le < 0 ? -Le : Le) : 0)),
          r.svg && ((H = e.getAttribute("transform")), (r.forceCSS = e.setAttribute("transform", "") || !Tn(Ne(e, Z))), H && e.setAttribute("transform", H))),
        Math.abs(x) > 90 &&
          Math.abs(x) < 270 &&
          (n ? ((f *= -1), (x += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180)) : ((d *= -1), (x += x <= 0 ? 180 : -180))),
        (t = t || r.uncache),
        (r.x =
          h -
          ((r.xPercent = h && ((!t && r.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? (e.offsetWidth * r.xPercent) / 100 : 0) +
          o),
        (r.y =
          u -
          ((r.yPercent = u && ((!t && r.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
            ? (e.offsetHeight * r.yPercent) / 100
            : 0) +
          o),
        (r.z = c + o),
        (r.scaleX = q(f)),
        (r.scaleY = q(d)),
        (r.rotation = q(m) + a),
        (r.rotationX = q(p) + a),
        (r.rotationY = q(g) + a),
        (r.skewX = x + a),
        (r.skewY = _ + a),
        (r.transformPerspective = y + o),
        (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (s[$e] = Er(l)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = ae.force3D),
        (r.renderTransform = r.svg ? $h : mn ? Mn : Qh),
        (r.uncache = 0),
        r
      );
    },
    Er = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    ki = function (e, t, r) {
      var s = $(t);
      return q(parseFloat(t) + parseFloat(Ke(e, "x", r + "px", s))) + s;
    },
    Qh = function (e, t) {
      (t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), Mn(e, t);
    },
    mt = "0deg",
    Zt = "0px",
    gt = ") ",
    Mn = function (e, t) {
      var r = t || this,
        s = r.xPercent,
        n = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.z,
        h = r.rotation,
        u = r.rotationY,
        c = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        m = r.scaleX,
        p = r.scaleY,
        g = r.transformPerspective,
        x = r.force3D,
        _ = r.target,
        y = r.zOrigin,
        w = "",
        b = (x === "auto" && e && e !== 1) || x === !0;
      if (y && (c !== mt || u !== mt)) {
        var v = parseFloat(u) * Ft,
          T = Math.sin(v),
          M = Math.cos(v),
          E;
        (v = parseFloat(c) * Ft), (E = Math.cos(v)), (o = ki(_, o, T * E * -y)), (a = ki(_, a, -Math.sin(v) * -y)), (l = ki(_, l, M * E * -y + y));
      }
      g !== Zt && (w += "perspective(" + g + gt),
        (s || n) && (w += "translate(" + s + "%, " + n + "%) "),
        (b || o !== Zt || a !== Zt || l !== Zt) && (w += l !== Zt || b ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + gt),
        h !== mt && (w += "rotate(" + h + gt),
        u !== mt && (w += "rotateY(" + u + gt),
        c !== mt && (w += "rotateX(" + c + gt),
        (f !== mt || d !== mt) && (w += "skew(" + f + ", " + d + gt),
        (m !== 1 || p !== 1) && (w += "scale(" + m + ", " + p + gt),
        (_.style[Z] = w || "translate(0, 0)");
    },
    $h = function (e, t) {
      var r = t || this,
        s = r.xPercent,
        n = r.yPercent,
        o = r.x,
        a = r.y,
        l = r.rotation,
        h = r.skewX,
        u = r.skewY,
        c = r.scaleX,
        f = r.scaleY,
        d = r.target,
        m = r.xOrigin,
        p = r.yOrigin,
        g = r.xOffset,
        x = r.yOffset,
        _ = r.forceCSS,
        y = parseFloat(o),
        w = parseFloat(a),
        b,
        v,
        T,
        M,
        E;
      (l = parseFloat(l)),
        (h = parseFloat(h)),
        (u = parseFloat(u)),
        u && ((u = parseFloat(u)), (h += u), (l += u)),
        l || h
          ? ((l *= Ft),
            (h *= Ft),
            (b = Math.cos(l) * c),
            (v = Math.sin(l) * c),
            (T = Math.sin(l - h) * -f),
            (M = Math.cos(l - h) * f),
            h &&
              ((u *= Ft),
              (E = Math.tan(h - u)),
              (E = Math.sqrt(1 + E * E)),
              (T *= E),
              (M *= E),
              u && ((E = Math.tan(u)), (E = Math.sqrt(1 + E * E)), (b *= E), (v *= E))),
            (b = q(b)),
            (v = q(v)),
            (T = q(T)),
            (M = q(M)))
          : ((b = c), (M = f), (v = T = 0)),
        ((y && !~(o + "").indexOf("px")) || (w && !~(a + "").indexOf("px"))) && ((y = Ke(d, "x", o, "px")), (w = Ke(d, "y", a, "px"))),
        (m || p || g || x) && ((y = q(y + m - (m * b + p * T) + g)), (w = q(w + p - (m * v + p * M) + x))),
        (s || n) && ((E = d.getBBox()), (y = q(y + (s / 100) * E.width)), (w = q(w + (n / 100) * E.height))),
        (E = "matrix(" + b + "," + v + "," + T + "," + M + "," + y + "," + w + ")"),
        d.setAttribute("transform", E),
        _ && (d.style[Z] = E);
    },
    Zh = function (e, t, r, s, n) {
      var o = 360,
        a = Y(n),
        l = parseFloat(n) * (a && ~n.indexOf("rad") ? dt : 1),
        h = l - s,
        u = s + h + "deg",
        c,
        f;
      return (
        a &&
          ((c = n.split("_")[1]),
          c === "short" && ((h %= o), h !== h % (o / 2) && (h += h < 0 ? o : -o)),
          c === "cw" && h < 0 ? (h = ((h + o * un) % o) - ~~(h / o) * o) : c === "ccw" && h > 0 && (h = ((h - o * un) % o) - ~~(h / o) * o)),
        (e._pt = f = new se(e._pt, t, r, s, h, zh)),
        (f.e = u),
        (f.u = "deg"),
        e._props.push(r),
        f
      );
    },
    An = function (e, t) {
      for (var r in t) e[r] = t[r];
      return e;
    },
    Kh = function (e, t, r) {
      var s = An({}, r._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        o = r.style,
        a,
        l,
        h,
        u,
        c,
        f,
        d,
        m;
      s.svg
        ? ((h = r.getAttribute("transform")), r.setAttribute("transform", ""), (o[Z] = t), (a = $t(r, 1)), Xt(r, Z), r.setAttribute("transform", h))
        : ((h = getComputedStyle(r)[Z]), (o[Z] = t), (a = $t(r, 1)), (o[Z] = h));
      for (l in Xe)
        (h = s[l]),
          (u = a[l]),
          h !== u &&
            n.indexOf(l) < 0 &&
            ((d = $(h)),
            (m = $(u)),
            (c = d !== m ? Ke(r, l, h, m) : parseFloat(h)),
            (f = parseFloat(u)),
            (e._pt = new se(e._pt, a, l, c, f - c, fn)),
            (e._pt.u = m || 0),
            e._props.push(l));
      An(a, s);
    };
  ie("padding,margin,Width,Radius", function (i, e) {
    var t = "Top",
      r = "Right",
      s = "Bottom",
      n = "Left",
      o = (e < 3 ? [t, r, s, n] : [t + n, t + r, s + r, s + n]).map(function (a) {
        return e < 2 ? i + a : "border" + a + i;
      });
    Tr[e > 1 ? "border" + i : i] = function (a, l, h, u, c) {
      var f, d;
      if (arguments.length < 4)
        return (
          (f = o.map(function (m) {
            return pt(a, m, h);
          })),
          (d = f.join(" ")),
          d.split(f[0]).length === 5 ? f[0] : d
        );
      (f = (u + "").split(" ")),
        (d = {}),
        o.forEach(function (m, p) {
          return (d[m] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
        }),
        a.init(l, d, c);
    };
  });
  var Kt = {
    name: "css",
    register: Fi,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, r, s, n) {
      var o = this._props,
        a = e.style,
        l = r.vars.startAt,
        h,
        u,
        c,
        f,
        d,
        m,
        p,
        g,
        x,
        _,
        y,
        w,
        b,
        v,
        T;
      Si || Fi();
      for (p in t)
        if (p !== "autoRound" && ((u = t[p]), !(he[p] && wi(p, t, r, s, e, n)))) {
          if (
            ((d = typeof u),
            (m = Tr[p]),
            d === "function" && ((u = u.call(r, s, e, n)), (d = typeof u)),
            d === "string" && ~u.indexOf("random(") && (u = At(u)),
            m)
          )
            m(this, e, p, u, r) && (T = 1);
          else if (p.substr(0, 2) === "--")
            (h = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (u += ""),
              (Be.lastIndex = 0),
              Be.test(h) || ((g = $(h)), (x = $(u))),
              x ? g !== x && (h = Ke(e, p, h, x) + x) : g && (u += g),
              this.add(a, "setProperty", h, u, s, n, 0, 0, p),
              o.push(p);
          else if (d !== "undefined") {
            if (
              (l && p in l
                ? ((h = typeof l[p] == "function" ? l[p].call(r, s, e, n) : l[p]),
                  Y(h) && ~h.indexOf("random(") && (h = At(h)),
                  $(h + "") || (h += ae.units[p] || $(pt(e, p)) || ""),
                  (h + "").charAt(1) === "=" && (h = pt(e, p)))
                : (h = pt(e, p)),
              (f = parseFloat(h)),
              (_ = d === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
              _ && (u = u.substr(2)),
              (c = parseFloat(u)),
              p in Qe &&
                (p === "autoAlpha" &&
                  (f === 1 && pt(e, "visibility") === "hidden" && c && (f = 0),
                  Ze(this, a, "visibility", f ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                p !== "scale" && p !== "transform" && ((p = Qe[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (y = p in Xe),
              y)
            ) {
              if (
                (w ||
                  ((b = e._gsap),
                  (b.renderTransform && !t.parseTransform) || $t(e, t.parseTransform),
                  (v = t.smoothOrigin !== !1 && b.smooth),
                  (w = this._pt = new se(this._pt, a, Z, 0, 1, b.renderTransform, b, 0, -1)),
                  (w.dep = 1)),
                p === "scale")
              )
                (this._pt = new se(this._pt, b, "scaleY", b.scaleY, (_ ? at(b.scaleY, _ + c) : c) - b.scaleY || 0)), o.push("scaleY", p), (p += "X");
              else if (p === "transformOrigin") {
                (u = Yh(u)),
                  b.svg
                    ? Oi(e, u, 0, v, 0, this)
                    : ((x = parseFloat(u.split(" ")[2]) || 0), x !== b.zOrigin && Ze(this, b, "zOrigin", b.zOrigin, x), Ze(this, a, p, Er(h), Er(u)));
                continue;
              } else if (p === "svgOrigin") {
                Oi(e, u, 1, v, 0, this);
                continue;
              } else if (p in bn) {
                Zh(this, b, p, f, _ ? at(f, _ + u) : u);
                continue;
              } else if (p === "smoothOrigin") {
                Ze(this, b, "smooth", b.smooth, u);
                continue;
              } else if (p === "force3D") {
                b[p] = u;
                continue;
              } else if (p === "transform") {
                Kh(this, u, e);
                continue;
              }
            } else p in a || (p = Lt(p) || p);
            if (y || ((c || c === 0) && (f || f === 0) && !Dh.test(u) && p in a))
              (g = (h + "").substr((f + "").length)),
                c || (c = 0),
                (x = $(u) || (p in ae.units ? ae.units[p] : g)),
                g !== x && (f = Ke(e, p, h, x)),
                (this._pt = new se(
                  this._pt,
                  y ? b : a,
                  p,
                  f,
                  (_ ? at(f, _ + c) : c) - f,
                  !y && (x === "px" || p === "zIndex") && t.autoRound !== !1 ? Nh : fn,
                )),
                (this._pt.u = x || 0),
                g !== x && x !== "%" && ((this._pt.b = h), (this._pt.r = Bh));
            else if (p in a) Wh.call(this, e, p, h, _ ? _ + u : u);
            else if (p in e) this.add(e, p, h || e[p], _ ? _ + u : u, s, n);
            else {
              dr(p, u);
              continue;
            }
            o.push(p);
          }
        }
      T && Ai(this);
    },
    get: pt,
    aliases: Qe,
    getSetter: function (e, t, r) {
      var s = Qe[t];
      return (
        s && s.indexOf(",") < 0 && (t = s),
        t in Xe && t !== $e && (e._gsap.x || pt(e, "x"))
          ? r && hn === r
            ? t === "scale"
              ? qh
              : jh
            : (hn = r || {}) && (t === "scale" ? Gh : Hh)
          : e.style && !ur(e.style[t])
          ? Vh
          : ~t.indexOf("-")
          ? Uh
          : vr(e, t)
      );
    },
    core: { _removeProperty: Xt, _getMatrix: Li },
  };
  re.utils.checkPrefix = Lt;
  (function (i, e, t, r) {
    var s = ie(i + "," + e + "," + t, function (n) {
      Xe[n] = 1;
    });
    ie(e, function (n) {
      (ae.units[n] = "deg"), (bn[n] = 1);
    }),
      (Qe[s[13]] = i + "," + e),
      ie(r, function (n) {
        var o = n.split(":");
        Qe[o[1]] = s[o[0]];
      });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
  );
  ie("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) {
    ae.units[i] = "px";
  });
  re.registerPlugin(Kt);
  var Fe = re.registerPlugin(Kt) || re,
    pc = Fe.core.Tween;
  var L = re.registerPlugin(Kt) || re,
    Fc = L.core.Tween;
  function Ii(i) {
    let e = i[0],
      t = i[1],
      r = i[2];
    return Math.sqrt(e * e + t * t + r * r);
  }
  function Mr(i, e) {
    return (i[0] = e[0]), (i[1] = e[1]), (i[2] = e[2]), i;
  }
  function Pn(i, e, t, r) {
    return (i[0] = e), (i[1] = t), (i[2] = r), i;
  }
  function Di(i, e, t) {
    return (i[0] = e[0] + t[0]), (i[1] = e[1] + t[1]), (i[2] = e[2] + t[2]), i;
  }
  function zi(i, e, t) {
    return (i[0] = e[0] - t[0]), (i[1] = e[1] - t[1]), (i[2] = e[2] - t[2]), i;
  }
  function Sn(i, e, t) {
    return (i[0] = e[0] * t[0]), (i[1] = e[1] * t[1]), (i[2] = e[2] * t[2]), i;
  }
  function Cn(i, e, t) {
    return (i[0] = e[0] / t[0]), (i[1] = e[1] / t[1]), (i[2] = e[2] / t[2]), i;
  }
  function Ar(i, e, t) {
    return (i[0] = e[0] * t), (i[1] = e[1] * t), (i[2] = e[2] * t), i;
  }
  function Fn(i, e) {
    let t = e[0] - i[0],
      r = e[1] - i[1],
      s = e[2] - i[2];
    return Math.sqrt(t * t + r * r + s * s);
  }
  function Rn(i, e) {
    let t = e[0] - i[0],
      r = e[1] - i[1],
      s = e[2] - i[2];
    return t * t + r * r + s * s;
  }
  function Bi(i) {
    let e = i[0],
      t = i[1],
      r = i[2];
    return e * e + t * t + r * r;
  }
  function Ln(i, e) {
    return (i[0] = -e[0]), (i[1] = -e[1]), (i[2] = -e[2]), i;
  }
  function On(i, e) {
    return (i[0] = 1 / e[0]), (i[1] = 1 / e[1]), (i[2] = 1 / e[2]), i;
  }
  function Pr(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = t * t + r * r + s * s;
    return n > 0 && (n = 1 / Math.sqrt(n)), (i[0] = e[0] * n), (i[1] = e[1] * n), (i[2] = e[2] * n), i;
  }
  function Ni(i, e) {
    return i[0] * e[0] + i[1] * e[1] + i[2] * e[2];
  }
  function Vi(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = t[0],
      a = t[1],
      l = t[2];
    return (i[0] = s * l - n * a), (i[1] = n * o - r * l), (i[2] = r * a - s * o), i;
  }
  function kn(i, e, t, r) {
    let s = e[0],
      n = e[1],
      o = e[2];
    return (i[0] = s + r * (t[0] - s)), (i[1] = n + r * (t[1] - n)), (i[2] = o + r * (t[2] - o)), i;
  }
  function In(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = t[3] * r + t[7] * s + t[11] * n + t[15];
    return (
      (o = o || 1),
      (i[0] = (t[0] * r + t[4] * s + t[8] * n + t[12]) / o),
      (i[1] = (t[1] * r + t[5] * s + t[9] * n + t[13]) / o),
      (i[2] = (t[2] * r + t[6] * s + t[10] * n + t[14]) / o),
      i
    );
  }
  function Dn(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = t[3] * r + t[7] * s + t[11] * n + t[15];
    return (
      (o = o || 1),
      (i[0] = (t[0] * r + t[4] * s + t[8] * n) / o),
      (i[1] = (t[1] * r + t[5] * s + t[9] * n) / o),
      (i[2] = (t[2] * r + t[6] * s + t[10] * n) / o),
      i
    );
  }
  function zn(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = t[0],
      a = t[1],
      l = t[2],
      h = t[3],
      u = a * n - l * s,
      c = l * r - o * n,
      f = o * s - a * r,
      d = a * f - l * c,
      m = l * u - o * f,
      p = o * c - a * u,
      g = h * 2;
    return (u *= g), (c *= g), (f *= g), (d *= 2), (m *= 2), (p *= 2), (i[0] = r + u + d), (i[1] = s + c + m), (i[2] = n + f + p), i;
  }
  var Bn = (function () {
    let i = [0, 0, 0],
      e = [0, 0, 0];
    return function (t, r) {
      Mr(i, t), Mr(e, r), Pr(i, i), Pr(e, e);
      let s = Ni(i, e);
      return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
    };
  })();
  function Nn(i, e) {
    return i[0] === e[0] && i[1] === e[1] && i[2] === e[2];
  }
  var A = class extends Array {
    constructor(e = 0, t = e, r = e) {
      super(e, t, r);
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    set x(e) {
      this[0] = e;
    }
    set y(e) {
      this[1] = e;
    }
    set z(e) {
      this[2] = e;
    }
    set(e, t = e, r = e) {
      return e.length ? this.copy(e) : (Pn(this, e, t, r), this);
    }
    copy(e) {
      return Mr(this, e), this;
    }
    add(e, t) {
      return t ? Di(this, e, t) : Di(this, this, e), this;
    }
    sub(e, t) {
      return t ? zi(this, e, t) : zi(this, this, e), this;
    }
    multiply(e) {
      return e.length ? Sn(this, this, e) : Ar(this, this, e), this;
    }
    divide(e) {
      return e.length ? Cn(this, this, e) : Ar(this, this, 1 / e), this;
    }
    inverse(e = this) {
      return On(this, e), this;
    }
    len() {
      return Ii(this);
    }
    distance(e) {
      return e ? Fn(this, e) : Ii(this);
    }
    squaredLen() {
      return Bi(this);
    }
    squaredDistance(e) {
      return e ? Rn(this, e) : Bi(this);
    }
    negate(e = this) {
      return Ln(this, e), this;
    }
    cross(e, t) {
      return t ? Vi(this, e, t) : Vi(this, this, e), this;
    }
    scale(e) {
      return Ar(this, this, e), this;
    }
    normalize() {
      return Pr(this, this), this;
    }
    dot(e) {
      return Ni(this, e);
    }
    equals(e) {
      return Nn(this, e);
    }
    applyMatrix4(e) {
      return In(this, this, e), this;
    }
    scaleRotateMatrix4(e) {
      return Dn(this, this, e), this;
    }
    applyQuaternion(e) {
      return zn(this, this, e), this;
    }
    angle(e) {
      return Bn(this, e);
    }
    lerp(e, t) {
      return kn(this, this, e, t), this;
    }
    clone() {
      return new A(this[0], this[1], this[2]);
    }
    fromArray(e, t = 0) {
      return (this[0] = e[t]), (this[1] = e[t + 1]), (this[2] = e[t + 2]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this[0]), (e[t + 1] = this[1]), (e[t + 2] = this[2]), e;
    }
    transformDirection(e) {
      let t = this[0],
        r = this[1],
        s = this[2];
      return (
        (this[0] = e[0] * t + e[4] * r + e[8] * s), (this[1] = e[1] * t + e[5] * r + e[9] * s), (this[2] = e[2] * t + e[6] * r + e[10] * s), this.normalize()
      );
    }
  };
  var Vn = new A();
  window.GEO_ID == null && (window.GEO_ID = 1);
  window.GEO_ATTR_ID == null && (window.GEO_ATTR_ID = 1);
  var Un = !1,
    ce = class {
      constructor(e, t = {}) {
        e.canvas || console.error("gl not passed as first argument to Geometry"),
          (this.gl = e),
          (this.attributes = t),
          (this.id = GEO_ID++),
          (this.VAOs = {}),
          (this.drawRange = { start: 0, count: 0 }),
          (this.instancedCount = 0),
          this.gl.renderer.bindVertexArray(null),
          (this.gl.renderer.currentGeometry = null),
          (this.glState = this.gl.renderer.state);
        for (let r in t) this.addAttribute(r, t[r]);
      }
      addAttribute(e, t) {
        if (
          ((this.attributes[e] = t),
          (t.id = GEO_ATTR_ID++),
          (t.size = t.size || 1),
          (t.type =
            t.type ||
            (t.data.constructor === Float32Array ? this.gl.FLOAT : t.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT)),
          (t.target = e === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
          (t.normalized = t.normalized || !1),
          (t.stride = t.stride || 0),
          (t.offset = t.offset || 0),
          (t.count = t.count || (t.stride ? t.data.byteLength / t.stride : t.data.length / t.size)),
          (t.divisor = t.instanced || 0),
          (t.needsUpdate = !1),
          t.buffer || ((t.buffer = this.gl.createBuffer()), this.updateAttribute(t)),
          t.divisor)
        ) {
          if (((this.isInstanced = !0), this.instancedCount && this.instancedCount !== t.count * t.divisor))
            return (
              console.warn("geometry has multiple instanced buffers of different length"),
              (this.instancedCount = Math.min(this.instancedCount, t.count * t.divisor))
            );
          this.instancedCount = t.count * t.divisor;
        } else e === "index" ? (this.drawRange.count = t.count) : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, t.count));
      }
      updateAttribute(e) {
        this.glState.boundBuffer !== e.buffer && (this.gl.bindBuffer(e.target, e.buffer), (this.glState.boundBuffer = e.buffer)),
          this.gl.bufferData(e.target, e.data, this.gl.STATIC_DRAW),
          (e.needsUpdate = !1);
      }
      setIndex(e) {
        this.addAttribute("index", e);
      }
      setDrawRange(e, t) {
        (this.drawRange.start = e), (this.drawRange.count = t);
      }
      setInstancedCount(e) {
        this.instancedCount = e;
      }
      createVAO(e) {
        (this.VAOs[e.attributeOrder] = this.gl.renderer.createVertexArray()),
          this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
          this.bindAttributes(e);
      }
      bindAttributes(e) {
        e.attributeLocations.forEach((t, { name: r, type: s }) => {
          if (!this.attributes[r]) {
            console.warn(`active attribute ${r} not being supplied`);
            return;
          }
          let n = this.attributes[r];
          this.gl.bindBuffer(n.target, n.buffer), (this.glState.boundBuffer = n.buffer);
          let o = 1;
          s === 35674 && (o = 2), s === 35675 && (o = 3), s === 35676 && (o = 4);
          let a = n.size / o,
            l = o === 1 ? 0 : o * o * o,
            h = o === 1 ? 0 : o * o;
          for (let u = 0; u < o; u++)
            this.gl.vertexAttribPointer(t + u, a, n.type, n.normalized, n.stride + l, n.offset + u * h),
              this.gl.enableVertexAttribArray(t + u),
              this.gl.renderer.vertexAttribDivisor(t + u, n.divisor);
        }),
          this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
      }
      draw({ program: e, mode: t = this.gl.TRIANGLES }) {
        this.gl.renderer.currentGeometry !== `${this.id}_${e.attributeOrder}` &&
          (this.VAOs[e.attributeOrder] || this.createVAO(e),
          this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),
          (this.gl.renderer.currentGeometry = `${this.id}_${e.attributeOrder}`)),
          e.attributeLocations.forEach((r, { name: s }) => {
            let n = this.attributes[s];
            n.needsUpdate && this.updateAttribute(n);
          }),
          this.isInstanced
            ? this.attributes.index
              ? this.gl.renderer.drawElementsInstanced(
                  t,
                  this.drawRange.count,
                  this.attributes.index.type,
                  this.attributes.index.offset + this.drawRange.start * 2,
                  this.instancedCount,
                )
              : this.gl.renderer.drawArraysInstanced(t, this.drawRange.start, this.drawRange.count, this.instancedCount)
            : this.attributes.index
            ? this.gl.drawElements(t, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2)
            : this.gl.drawArrays(t, this.drawRange.start, this.drawRange.count);
      }
      getPosition() {
        let e = this.attributes.position;
        if (e.data) return e;
        if (!Un) return console.warn("No position buffer data found to compute bounds"), (Un = !0);
      }
      computeBoundingBox(e) {
        e || (e = this.getPosition());
        let t = e.data,
          r = e.offset || 0,
          s = e.stride || e.size;
        this.bounds || (this.bounds = { min: new A(), max: new A(), center: new A(), scale: new A(), radius: 1 / 0 });
        let n = this.bounds.min,
          o = this.bounds.max,
          a = this.bounds.center,
          l = this.bounds.scale;
        n.set(1 / 0), o.set(-1 / 0);
        for (let h = r, u = t.length; h < u; h += s) {
          let c = t[h],
            f = t[h + 1],
            d = t[h + 2];
          (n.x = Math.min(c, n.x)),
            (n.y = Math.min(f, n.y)),
            (n.z = Math.min(d, n.z)),
            (o.x = Math.max(c, o.x)),
            (o.y = Math.max(f, o.y)),
            (o.z = Math.max(d, o.z));
        }
        l.sub(o, n), a.add(n, o).divide(2);
      }
      computeBoundingSphere(e) {
        e || (e = this.getPosition());
        let t = e.data,
          r = e.offset || 0,
          s = e.stride || e.size;
        this.bounds || this.computeBoundingBox(e);
        let n = 0;
        for (let o = r, a = t.length; o < a; o += s) Vn.fromArray(t, o), (n = Math.max(n, this.bounds.center.squaredDistance(Vn)));
        this.bounds.radius = Math.sqrt(n);
      }
      remove() {
        for (let e in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[e]), delete this.VAOs[e];
        for (let e in this.attributes) this.gl.deleteBuffer(this.attributes[e].buffer), delete this.attributes[e];
      }
    };
  window.PROGRAM_ID == null && (window.PROGRAM_ID = 1);
  var jn = {},
    ge = class {
      constructor(
        e,
        {
          vertex: t,
          fragment: r,
          uniforms: s = {},
          transparent: n = !1,
          cullFace: o = e.BACK,
          frontFace: a = e.CCW,
          depthTest: l = !0,
          depthWrite: h = !0,
          depthFunc: u = e.LEQUAL,
        } = {},
      ) {
        e.canvas || console.error("gl not passed as fist argument to Program"),
          (this.gl = e),
          (this.uniforms = s),
          (this.id = PROGRAM_ID++),
          t || console.warn("vertex shader not supplied"),
          r || console.warn("fragment shader not supplied"),
          (this.transparent = n),
          (this.cullFace = o),
          (this.frontFace = a),
          (this.depthTest = l),
          (this.depthWrite = h),
          (this.depthFunc = u),
          (this.blendFunc = {}),
          (this.blendEquation = {}),
          this.transparent &&
            !this.blendFunc.src &&
            (this.gl.renderer.premultipliedAlpha
              ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
              : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
          o == e.FRONT &&
            ((t =
              `#define FLIP_SIDED
` + t),
            (r =
              `#define FLIP_SIDED
` + r));
        let c = e.createShader(e.VERTEX_SHADER);
        if ((e.shaderSource(c, t), e.compileShader(c), e.getShaderInfoLog(c) !== "")) {
          let g = `${e.getShaderInfoLog(c)}`;
          console.log(g),
            console.warn(`${e.getShaderInfoLog(c)}
Vertex Shader
${Jh(t)}`);
        }
        let f = e.createShader(e.FRAGMENT_SHADER);
        if ((e.shaderSource(f, r), e.compileShader(f), e.getShaderInfoLog(f) !== "")) {
          let x = e.getShaderInfoLog(f).trim().split(`
`);
          console.log(x);
          let _ = r.split(`
`);
          x.forEach((y) => {
            let w = "";
            if (((y = y.trim()), y.length <= 1)) return;
            console.log(y, y.length);
            let b = y.match(/[0-9]+:[0-9]+/)[0],
              v = b.indexOf(":"),
              T = Number(b.substring(v + 1)) - 1;
            (w += `${y}
`),
              (w += `${T - 1}: ${_[T - 1].trim()}
`),
              (w += `%c ${T}: ${_[T].trim()}
`),
              (w += `%c ${T + 1}: ${_[T + 1].trim()}

`),
              console.warn(w, "background: red; color: white", "");
          });
        }
        if (
          ((this.program = e.createProgram()),
          e.attachShader(this.program, c),
          e.attachShader(this.program, f),
          e.linkProgram(this.program),
          !e.getProgramParameter(this.program, e.LINK_STATUS))
        )
          return console.warn(e.getProgramInfoLog(this.program));
        e.deleteShader(c), e.deleteShader(f), (this.uniformLocations = new Map());
        let d = e.getProgramParameter(this.program, e.ACTIVE_UNIFORMS);
        for (let g = 0; g < d; g++) {
          let x = e.getActiveUniform(this.program, g);
          this.uniformLocations.set(x, e.getUniformLocation(this.program, x.name));
          let _ = x.name.match(/(\w+)/g);
          (x.uniformName = _[0]),
            _.length === 3
              ? ((x.isStructArray = !0), (x.structIndex = Number(_[1])), (x.structProperty = _[2]))
              : _.length === 2 && isNaN(Number(_[1])) && ((x.isStruct = !0), (x.structProperty = _[1]));
        }
        this.attributeLocations = new Map();
        let m = [],
          p = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES);
        for (let g = 0; g < p; g++) {
          let x = e.getActiveAttrib(this.program, g),
            _ = e.getAttribLocation(this.program, x.name);
          (m[_] = x.name), this.attributeLocations.set(x, _);
        }
        this.attributeOrder = m.join("");
      }
      setBlendFunc(e, t, r, s) {
        (this.blendFunc.src = e), (this.blendFunc.dst = t), (this.blendFunc.srcAlpha = r), (this.blendFunc.dstAlpha = s), e && (this.transparent = !0);
      }
      setBlendEquation(e, t) {
        (this.blendEquation.modeRGB = e), (this.blendEquation.modeAlpha = t);
      }
      applyState() {
        this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
          this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
          this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
          this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
          this.gl.renderer.setFrontFace(this.frontFace),
          this.gl.renderer.setDepthMask(this.depthWrite),
          this.gl.renderer.setDepthFunc(this.depthFunc),
          this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
          this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
      }
      use({ flipFaces: e = !1 } = {}) {
        let t = -1;
        this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), (this.gl.renderer.currentProgram = this.id)),
          this.uniformLocations.forEach((s, n) => {
            let o = n.uniformName,
              a = this.uniforms[o];
            if (
              (n.isStruct && ((a = a[n.structProperty]), (o += `.${n.structProperty}`)),
              n.isStructArray && ((a = a[n.structIndex][n.structProperty]), (o += `[${n.structIndex}].${n.structProperty}`)),
              !a)
            )
              return qn(`Active uniform ${o} has not been supplied`);
            if (a && a.value === void 0) return qn(`${o} uniform is missing a value parameter`);
            if (a.value.texture) return (t = t + 1), a.value.update(t), Ui(this.gl, n.type, s, t);
            if (a.value.length && a.value[0].texture) {
              let l = [];
              return (
                a.value.forEach((h) => {
                  (t = t + 1), h.update(t), l.push(t);
                }),
                Ui(this.gl, n.type, s, l)
              );
            }
            Ui(this.gl, n.type, s, a.value);
          }),
          this.applyState(),
          e && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
      }
      remove() {
        this.gl.deleteProgram(this.program);
      }
    };
  function Ui(i, e, t, r) {
    r = r.length ? eu(r) : r;
    let s = i.renderer.state.uniformLocations.get(t);
    if (r.length)
      if (s === void 0 || s.length !== r.length) i.renderer.state.uniformLocations.set(t, r.slice(0));
      else {
        if (tu(s, r)) return;
        s.set ? s.set(r) : ru(s, r), i.renderer.state.uniformLocations.set(t, s);
      }
    else {
      if (s === r) return;
      i.renderer.state.uniformLocations.set(t, r);
    }
    switch (e) {
      case 5126:
        return r.length ? i.uniform1fv(t, r) : i.uniform1f(t, r);
      case 35664:
        return i.uniform2fv(t, r);
      case 35665:
        return i.uniform3fv(t, r);
      case 35666:
        return i.uniform4fv(t, r);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return r.length ? i.uniform1iv(t, r) : i.uniform1i(t, r);
      case 35671:
      case 35667:
        return i.uniform2iv(t, r);
      case 35672:
      case 35668:
        return i.uniform3iv(t, r);
      case 35673:
      case 35669:
        return i.uniform4iv(t, r);
      case 35674:
        return i.uniformMatrix2fv(t, !1, r);
      case 35675:
        return i.uniformMatrix3fv(t, !1, r);
      case 35676:
        return i.uniformMatrix4fv(t, !1, r);
    }
  }
  function Jh(i) {
    let e = i.split(`
`);
    for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
    return e.join(`
`);
  }
  function eu(i) {
    let e = i.length,
      t = i[0].length;
    if (t === void 0) return i;
    let r = e * t,
      s = jn[r];
    s || (jn[r] = s = new Float32Array(r));
    for (let n = 0; n < e; n++) s.set(i[n], n * t);
    return s;
  }
  function tu(i, e) {
    if (i.length !== e.length) return !1;
    for (let t = 0, r = i.length; t < r; t++) if (i[t] !== e[t]) return !1;
    return !0;
  }
  function ru(i, e) {
    for (let t = 0, r = i.length; t < r; t++) i[t] = e[t];
  }
  var ji = 0;
  function qn(i) {
    ji > 100 || (console.warn(i), ji++, ji > 100 && console.warn("More than 100 program warnings - stopping logs."));
  }
  var qi = new A(),
    iu = 1,
    Sr = class {
      constructor({
        canvas: e = document.createElement("canvas"),
        width: t = 300,
        height: r = 150,
        dpr: s = 1,
        alpha: n = !1,
        depth: o = !0,
        stencil: a = !1,
        antialias: l = !1,
        premultipliedAlpha: h = !1,
        preserveDrawingBuffer: u = !1,
        powerPreference: c = "default",
        autoClear: f = !0,
        webgl: d = 2,
      } = {}) {
        let m = { alpha: n, depth: o, stencil: a, antialias: l, premultipliedAlpha: h, preserveDrawingBuffer: u, powerPreference: c };
        (this.dpr = s),
          (this.alpha = n),
          (this.color = !0),
          (this.depth = o),
          (this.stencil = a),
          (this.premultipliedAlpha = h),
          (this.autoClear = f),
          (this.id = iu++),
          d === 2 && (this.gl = e.getContext("webgl2", m)),
          (this.isWebgl2 = !!this.gl),
          this.gl || (this.gl = e.getContext("webgl", m)),
          this.gl || console.error("unable to create webgl context"),
          (this.gl.renderer = this),
          this.setSize(t, r),
          (this.state = {}),
          (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
          (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
          (this.state.cullFace = null),
          (this.state.frontFace = this.gl.CCW),
          (this.state.depthMask = !0),
          (this.state.depthFunc = this.gl.LESS),
          (this.state.premultiplyAlpha = !1),
          (this.state.flipY = !1),
          (this.state.unpackAlignment = 4),
          (this.state.framebuffer = null),
          (this.state.viewport = { width: null, height: null }),
          (this.state.textureUnits = []),
          (this.state.activeTextureUnit = 0),
          (this.state.boundBuffer = null),
          (this.state.uniformLocations = new Map()),
          (this.extensions = {}),
          this.isWebgl2
            ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear"))
            : (this.getExtension("OES_texture_float"),
              this.getExtension("OES_texture_float_linear"),
              this.getExtension("OES_texture_half_float"),
              this.getExtension("OES_texture_half_float_linear"),
              this.getExtension("OES_element_index_uint"),
              this.getExtension("OES_standard_derivatives"),
              this.getExtension("EXT_sRGB"),
              this.getExtension("WEBGL_depth_texture"),
              this.getExtension("WEBGL_draw_buffers")),
          (this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE")),
          (this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE")),
          (this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE")),
          (this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES")),
          (this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES")),
          (this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES")),
          (this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL")),
          (this.parameters = {}),
          (this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
          (this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic")
            ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            : 0);
      }
      setSize(e, t) {
        (this.width = e),
          (this.height = t),
          (this.gl.canvas.width = e * this.dpr),
          (this.gl.canvas.height = t * this.dpr),
          Object.assign(this.gl.canvas.style, { width: e + "px", height: t + "px" });
      }
      setViewport(e, t) {
        (this.state.viewport.width === e && this.state.viewport.height === t) ||
          ((this.state.viewport.width = e), (this.state.viewport.height = t), this.gl.viewport(0, 0, e, t));
      }
      enable(e) {
        this.state[e] !== !0 && (this.gl.enable(e), (this.state[e] = !0));
      }
      disable(e) {
        this.state[e] !== !1 && (this.gl.disable(e), (this.state[e] = !1));
      }
      setBlendFunc(e, t, r, s) {
        (this.state.blendFunc.src === e && this.state.blendFunc.dst === t && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === s) ||
          ((this.state.blendFunc.src = e),
          (this.state.blendFunc.dst = t),
          (this.state.blendFunc.srcAlpha = r),
          (this.state.blendFunc.dstAlpha = s),
          r !== void 0 ? this.gl.blendFuncSeparate(e, t, r, s) : this.gl.blendFunc(e, t));
      }
      setBlendEquation(e, t) {
        (e = e || this.gl.FUNC_ADD),
          !(this.state.blendEquation.modeRGB === e && this.state.blendEquation.modeAlpha === t) &&
            ((this.state.blendEquation.modeRGB = e),
            (this.state.blendEquation.modeAlpha = t),
            t !== void 0 ? this.gl.blendEquationSeparate(e, t) : this.gl.blendEquation(e));
      }
      setCullFace(e) {
        this.state.cullFace !== e && ((this.state.cullFace = e), this.gl.cullFace(e));
      }
      setFrontFace(e) {
        this.state.frontFace !== e && ((this.state.frontFace = e), this.gl.frontFace(e));
      }
      setDepthMask(e) {
        this.state.depthMask !== e && ((this.state.depthMask = e), this.gl.depthMask(e));
      }
      setDepthFunc(e) {
        this.state.depthFunc !== e && ((this.state.depthFunc = e), this.gl.depthFunc(e));
      }
      activeTexture(e) {
        this.state.activeTextureUnit !== e && ((this.state.activeTextureUnit = e), this.gl.activeTexture(this.gl.TEXTURE0 + e));
      }
      bindFramebuffer({ target: e = this.gl.FRAMEBUFFER, buffer: t = null } = {}) {
        this.state.framebuffer !== t && ((this.state.framebuffer = t), this.gl.bindFramebuffer(e, t));
      }
      getExtension(e, t, r) {
        return t && this.gl[t]
          ? this.gl[t].bind(this.gl)
          : (this.extensions[e] || (this.extensions[e] = this.gl.getExtension(e)),
            t ? (this.extensions[e] ? this.extensions[e][r].bind(this.extensions[e]) : null) : this.extensions[e]);
      }
      sortOpaque(e, t) {
        return e.renderOrder !== t.renderOrder
          ? e.renderOrder - t.renderOrder
          : e.program.id !== t.program.id
          ? e.program.id - t.program.id
          : e.zDepth !== t.zDepth
          ? e.zDepth - t.zDepth
          : t.id - e.id;
      }
      sortTransparent(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.zDepth !== t.zDepth ? t.zDepth - e.zDepth : t.id - e.id;
      }
      sortUI(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.program.id !== t.program.id ? e.program.id - t.program.id : t.id - e.id;
      }
      getRenderList({ scene: e, camera: t, frustumCull: r, sort: s }) {
        let n = [];
        if (
          (t && r && t.updateFrustum(),
          e.traverse((o) => {
            if (!o.visible) return !0;
            !o.draw || (r && o.frustumCulled && t && !t.frustumIntersectsMesh(o)) || n.push(o);
          }),
          s)
        ) {
          let o = [],
            a = [],
            l = [];
          n.forEach((h) => {
            h.program.transparent ? (h.program.depthTest ? a.push(h) : l.push(h)) : o.push(h),
              (h.zDepth = 0),
              !(h.renderOrder !== 0 || !h.program.depthTest || !t) &&
                (h.worldMatrix.getTranslation(qi), qi.applyMatrix4(t.projectionViewMatrix), (h.zDepth = qi.z));
          }),
            o.sort(this.sortOpaque),
            a.sort(this.sortTransparent),
            l.sort(this.sortUI),
            (n = o.concat(a, l));
        }
        return n;
      }
      render({ scene: e, camera: t, target: r = null, update: s = !0, sort: n = !0, frustumCull: o = !0, clear: a }) {
        r === null
          ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr))
          : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)),
          (a || (this.autoClear && a !== !1)) &&
            (this.depth && (!r || r.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
            this.gl.clear(
              (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0),
            )),
          s && e.updateMatrixWorld(),
          t && t.updateMatrixWorld(),
          this.getRenderList({ scene: e, camera: t, frustumCull: o, sort: n }).forEach((h) => {
            h.draw({ camera: t });
          });
      }
    };
  function Gi(i, e) {
    return (i[0] = e[0]), (i[1] = e[1]), (i[2] = e[2]), (i[3] = e[3]), i;
  }
  function Hi(i, e, t, r, s) {
    return (i[0] = e), (i[1] = t), (i[2] = r), (i[3] = s), i;
  }
  function Wi(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = t * t + r * r + s * s + n * n;
    return o > 0 && (o = 1 / Math.sqrt(o)), (i[0] = t * o), (i[1] = r * o), (i[2] = s * o), (i[3] = n * o), i;
  }
  function Gn(i, e) {
    return i[0] * e[0] + i[1] * e[1] + i[2] * e[2] + i[3] * e[3];
  }
  function Hn(i) {
    return (i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 1), i;
  }
  function Wn(i, e, t) {
    t = t * 0.5;
    let r = Math.sin(t);
    return (i[0] = r * e[0]), (i[1] = r * e[1]), (i[2] = r * e[2]), (i[3] = Math.cos(t)), i;
  }
  function Yi(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = t[0],
      l = t[1],
      h = t[2],
      u = t[3];
    return (
      (i[0] = r * u + o * a + s * h - n * l),
      (i[1] = s * u + o * l + n * a - r * h),
      (i[2] = n * u + o * h + r * l - s * a),
      (i[3] = o * u - r * a - s * l - n * h),
      i
    );
  }
  function Yn(i, e, t) {
    t *= 0.5;
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = Math.sin(t),
      l = Math.cos(t);
    return (i[0] = r * l + o * a), (i[1] = s * l + n * a), (i[2] = n * l - s * a), (i[3] = o * l - r * a), i;
  }
  function Xn(i, e, t) {
    t *= 0.5;
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = Math.sin(t),
      l = Math.cos(t);
    return (i[0] = r * l - n * a), (i[1] = s * l + o * a), (i[2] = n * l + r * a), (i[3] = o * l - s * a), i;
  }
  function Qn(i, e, t) {
    t *= 0.5;
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = Math.sin(t),
      l = Math.cos(t);
    return (i[0] = r * l + s * a), (i[1] = s * l - r * a), (i[2] = n * l + o * a), (i[3] = o * l - n * a), i;
  }
  function $n(i, e, t, r) {
    let s = e[0],
      n = e[1],
      o = e[2],
      a = e[3],
      l = t[0],
      h = t[1],
      u = t[2],
      c = t[3],
      f,
      d,
      m,
      p,
      g;
    return (
      (d = s * l + n * h + o * u + a * c),
      d < 0 && ((d = -d), (l = -l), (h = -h), (u = -u), (c = -c)),
      1 - d > 1e-6 ? ((f = Math.acos(d)), (m = Math.sin(f)), (p = Math.sin((1 - r) * f) / m), (g = Math.sin(r * f) / m)) : ((p = 1 - r), (g = r)),
      (i[0] = p * s + g * l),
      (i[1] = p * n + g * h),
      (i[2] = p * o + g * u),
      (i[3] = p * a + g * c),
      i
    );
  }
  function Zn(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = t * t + r * r + s * s + n * n,
      a = o ? 1 / o : 0;
    return (i[0] = -t * a), (i[1] = -r * a), (i[2] = -s * a), (i[3] = n * a), i;
  }
  function Kn(i, e) {
    return (i[0] = -e[0]), (i[1] = -e[1]), (i[2] = -e[2]), (i[3] = e[3]), i;
  }
  function Jn(i, e) {
    let t = e[0] + e[4] + e[8],
      r;
    if (t > 0) (r = Math.sqrt(t + 1)), (i[3] = 0.5 * r), (r = 0.5 / r), (i[0] = (e[5] - e[7]) * r), (i[1] = (e[6] - e[2]) * r), (i[2] = (e[1] - e[3]) * r);
    else {
      let s = 0;
      e[4] > e[0] && (s = 1), e[8] > e[s * 3 + s] && (s = 2);
      let n = (s + 1) % 3,
        o = (s + 2) % 3;
      (r = Math.sqrt(e[s * 3 + s] - e[n * 3 + n] - e[o * 3 + o] + 1)),
        (i[s] = 0.5 * r),
        (r = 0.5 / r),
        (i[3] = (e[n * 3 + o] - e[o * 3 + n]) * r),
        (i[n] = (e[n * 3 + s] + e[s * 3 + n]) * r),
        (i[o] = (e[o * 3 + s] + e[s * 3 + o]) * r);
    }
    return i;
  }
  function eo(i, e, t = "YXZ") {
    let r = Math.sin(e[0] * 0.5),
      s = Math.cos(e[0] * 0.5),
      n = Math.sin(e[1] * 0.5),
      o = Math.cos(e[1] * 0.5),
      a = Math.sin(e[2] * 0.5),
      l = Math.cos(e[2] * 0.5);
    return (
      t === "XYZ"
        ? ((i[0] = r * o * l + s * n * a), (i[1] = s * n * l - r * o * a), (i[2] = s * o * a + r * n * l), (i[3] = s * o * l - r * n * a))
        : t === "YXZ"
        ? ((i[0] = r * o * l + s * n * a), (i[1] = s * n * l - r * o * a), (i[2] = s * o * a - r * n * l), (i[3] = s * o * l + r * n * a))
        : t === "ZXY"
        ? ((i[0] = r * o * l - s * n * a), (i[1] = s * n * l + r * o * a), (i[2] = s * o * a + r * n * l), (i[3] = s * o * l - r * n * a))
        : t === "ZYX"
        ? ((i[0] = r * o * l - s * n * a), (i[1] = s * n * l + r * o * a), (i[2] = s * o * a - r * n * l), (i[3] = s * o * l + r * n * a))
        : t === "YZX"
        ? ((i[0] = r * o * l + s * n * a), (i[1] = s * n * l + r * o * a), (i[2] = s * o * a - r * n * l), (i[3] = s * o * l - r * n * a))
        : t === "XZY" && ((i[0] = r * o * l - s * n * a), (i[1] = s * n * l - r * o * a), (i[2] = s * o * a + r * n * l), (i[3] = s * o * l + r * n * a)),
      i
    );
  }
  var to = Gi,
    ro = Hi;
  var io = Gn;
  var so = Wi;
  var Te = class extends Array {
    constructor(e = 0, t = 0, r = 0, s = 1) {
      super(e, t, r, s);
      return (this.onChange = () => {}), this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    get z() {
      return this[2];
    }
    get w() {
      return this[3];
    }
    set x(e) {
      (this[0] = e), this.onChange();
    }
    set y(e) {
      (this[1] = e), this.onChange();
    }
    set z(e) {
      (this[2] = e), this.onChange();
    }
    set w(e) {
      (this[3] = e), this.onChange();
    }
    identity() {
      return Hn(this), this.onChange(), this;
    }
    set(e, t, r, s) {
      return e.length ? this.copy(e) : (ro(this, e, t, r, s), this.onChange(), this);
    }
    rotateX(e) {
      return Yn(this, this, e), this.onChange(), this;
    }
    rotateY(e) {
      return Xn(this, this, e), this.onChange(), this;
    }
    rotateZ(e) {
      return Qn(this, this, e), this.onChange(), this;
    }
    inverse(e = this) {
      return Zn(this, e), this.onChange(), this;
    }
    conjugate(e = this) {
      return Kn(this, e), this.onChange(), this;
    }
    copy(e) {
      return to(this, e), this.onChange(), this;
    }
    normalize(e = this) {
      return so(this, e), this.onChange(), this;
    }
    multiply(e, t) {
      return t ? Yi(this, e, t) : Yi(this, this, e), this.onChange(), this;
    }
    dot(e) {
      return io(this, e);
    }
    fromMatrix3(e) {
      return Jn(this, e), this.onChange(), this;
    }
    fromEuler(e) {
      return eo(this, e, e.order), this;
    }
    fromAxisAngle(e, t) {
      return Wn(this, e, t), this;
    }
    slerp(e, t) {
      return $n(this, this, e, t), this;
    }
    fromArray(e, t = 0) {
      return (this[0] = e[t]), (this[1] = e[t + 1]), (this[2] = e[t + 2]), (this[3] = e[t + 3]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this[0]), (e[t + 1] = this[1]), (e[t + 2] = this[2]), (e[t + 3] = this[3]), e;
    }
  };
  var su = 1e-6;
  function no(i, e) {
    return (
      (i[0] = e[0]),
      (i[1] = e[1]),
      (i[2] = e[2]),
      (i[3] = e[3]),
      (i[4] = e[4]),
      (i[5] = e[5]),
      (i[6] = e[6]),
      (i[7] = e[7]),
      (i[8] = e[8]),
      (i[9] = e[9]),
      (i[10] = e[10]),
      (i[11] = e[11]),
      (i[12] = e[12]),
      (i[13] = e[13]),
      (i[14] = e[14]),
      (i[15] = e[15]),
      i
    );
  }
  function oo(i, e, t, r, s, n, o, a, l, h, u, c, f, d, m, p, g) {
    return (
      (i[0] = e),
      (i[1] = t),
      (i[2] = r),
      (i[3] = s),
      (i[4] = n),
      (i[5] = o),
      (i[6] = a),
      (i[7] = l),
      (i[8] = h),
      (i[9] = u),
      (i[10] = c),
      (i[11] = f),
      (i[12] = d),
      (i[13] = m),
      (i[14] = p),
      (i[15] = g),
      i
    );
  }
  function ao(i) {
    return (
      (i[0] = 1),
      (i[1] = 0),
      (i[2] = 0),
      (i[3] = 0),
      (i[4] = 0),
      (i[5] = 1),
      (i[6] = 0),
      (i[7] = 0),
      (i[8] = 0),
      (i[9] = 0),
      (i[10] = 1),
      (i[11] = 0),
      (i[12] = 0),
      (i[13] = 0),
      (i[14] = 0),
      (i[15] = 1),
      i
    );
  }
  function lo(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = e[9],
      f = e[10],
      d = e[11],
      m = e[12],
      p = e[13],
      g = e[14],
      x = e[15],
      _ = t * a - r * o,
      y = t * l - s * o,
      w = t * h - n * o,
      b = r * l - s * a,
      v = r * h - n * a,
      T = s * h - n * l,
      M = u * p - c * m,
      E = u * g - f * m,
      S = u * x - d * m,
      R = c * g - f * p,
      O = c * x - d * p,
      k = f * x - d * g,
      P = _ * k - y * O + w * R + b * S - v * E + T * M;
    return P
      ? ((P = 1 / P),
        (i[0] = (a * k - l * O + h * R) * P),
        (i[1] = (s * O - r * k - n * R) * P),
        (i[2] = (p * T - g * v + x * b) * P),
        (i[3] = (f * v - c * T - d * b) * P),
        (i[4] = (l * S - o * k - h * E) * P),
        (i[5] = (t * k - s * S + n * E) * P),
        (i[6] = (g * w - m * T - x * y) * P),
        (i[7] = (u * T - f * w + d * y) * P),
        (i[8] = (o * O - a * S + h * M) * P),
        (i[9] = (r * S - t * O - n * M) * P),
        (i[10] = (m * v - p * w + x * _) * P),
        (i[11] = (c * w - u * v - d * _) * P),
        (i[12] = (a * E - o * R - l * M) * P),
        (i[13] = (t * R - r * E + s * M) * P),
        (i[14] = (p * y - m * b - g * _) * P),
        (i[15] = (u * b - c * y + f * _) * P),
        i)
      : null;
  }
  function ho(i) {
    let e = i[0],
      t = i[1],
      r = i[2],
      s = i[3],
      n = i[4],
      o = i[5],
      a = i[6],
      l = i[7],
      h = i[8],
      u = i[9],
      c = i[10],
      f = i[11],
      d = i[12],
      m = i[13],
      p = i[14],
      g = i[15],
      x = e * o - t * n,
      _ = e * a - r * n,
      y = e * l - s * n,
      w = t * a - r * o,
      b = t * l - s * o,
      v = r * l - s * a,
      T = h * m - u * d,
      M = h * p - c * d,
      E = h * g - f * d,
      S = u * p - c * m,
      R = u * g - f * m,
      O = c * g - f * p;
    return x * O - _ * R + y * S + w * E - b * M + v * T;
  }
  function Xi(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      f = e[9],
      d = e[10],
      m = e[11],
      p = e[12],
      g = e[13],
      x = e[14],
      _ = e[15],
      y = t[0],
      w = t[1],
      b = t[2],
      v = t[3];
    return (
      (i[0] = y * r + w * a + b * c + v * p),
      (i[1] = y * s + w * l + b * f + v * g),
      (i[2] = y * n + w * h + b * d + v * x),
      (i[3] = y * o + w * u + b * m + v * _),
      (y = t[4]),
      (w = t[5]),
      (b = t[6]),
      (v = t[7]),
      (i[4] = y * r + w * a + b * c + v * p),
      (i[5] = y * s + w * l + b * f + v * g),
      (i[6] = y * n + w * h + b * d + v * x),
      (i[7] = y * o + w * u + b * m + v * _),
      (y = t[8]),
      (w = t[9]),
      (b = t[10]),
      (v = t[11]),
      (i[8] = y * r + w * a + b * c + v * p),
      (i[9] = y * s + w * l + b * f + v * g),
      (i[10] = y * n + w * h + b * d + v * x),
      (i[11] = y * o + w * u + b * m + v * _),
      (y = t[12]),
      (w = t[13]),
      (b = t[14]),
      (v = t[15]),
      (i[12] = y * r + w * a + b * c + v * p),
      (i[13] = y * s + w * l + b * f + v * g),
      (i[14] = y * n + w * h + b * d + v * x),
      (i[15] = y * o + w * u + b * m + v * _),
      i
    );
  }
  function uo(i, e, t) {
    let r = t[0],
      s = t[1],
      n = t[2],
      o,
      a,
      l,
      h,
      u,
      c,
      f,
      d,
      m,
      p,
      g,
      x;
    return (
      e === i
        ? ((i[12] = e[0] * r + e[4] * s + e[8] * n + e[12]),
          (i[13] = e[1] * r + e[5] * s + e[9] * n + e[13]),
          (i[14] = e[2] * r + e[6] * s + e[10] * n + e[14]),
          (i[15] = e[3] * r + e[7] * s + e[11] * n + e[15]))
        : ((o = e[0]),
          (a = e[1]),
          (l = e[2]),
          (h = e[3]),
          (u = e[4]),
          (c = e[5]),
          (f = e[6]),
          (d = e[7]),
          (m = e[8]),
          (p = e[9]),
          (g = e[10]),
          (x = e[11]),
          (i[0] = o),
          (i[1] = a),
          (i[2] = l),
          (i[3] = h),
          (i[4] = u),
          (i[5] = c),
          (i[6] = f),
          (i[7] = d),
          (i[8] = m),
          (i[9] = p),
          (i[10] = g),
          (i[11] = x),
          (i[12] = o * r + u * s + m * n + e[12]),
          (i[13] = a * r + c * s + p * n + e[13]),
          (i[14] = l * r + f * s + g * n + e[14]),
          (i[15] = h * r + d * s + x * n + e[15])),
      i
    );
  }
  function co(i, e, t) {
    let r = t[0],
      s = t[1],
      n = t[2];
    return (
      (i[0] = e[0] * r),
      (i[1] = e[1] * r),
      (i[2] = e[2] * r),
      (i[3] = e[3] * r),
      (i[4] = e[4] * s),
      (i[5] = e[5] * s),
      (i[6] = e[6] * s),
      (i[7] = e[7] * s),
      (i[8] = e[8] * n),
      (i[9] = e[9] * n),
      (i[10] = e[10] * n),
      (i[11] = e[11] * n),
      (i[12] = e[12]),
      (i[13] = e[13]),
      (i[14] = e[14]),
      (i[15] = e[15]),
      i
    );
  }
  function fo(i, e, t, r) {
    let s = r[0],
      n = r[1],
      o = r[2],
      a = Math.hypot(s, n, o),
      l,
      h,
      u,
      c,
      f,
      d,
      m,
      p,
      g,
      x,
      _,
      y,
      w,
      b,
      v,
      T,
      M,
      E,
      S,
      R,
      O,
      k,
      P,
      N;
    return Math.abs(a) < su
      ? null
      : ((a = 1 / a),
        (s *= a),
        (n *= a),
        (o *= a),
        (l = Math.sin(t)),
        (h = Math.cos(t)),
        (u = 1 - h),
        (c = e[0]),
        (f = e[1]),
        (d = e[2]),
        (m = e[3]),
        (p = e[4]),
        (g = e[5]),
        (x = e[6]),
        (_ = e[7]),
        (y = e[8]),
        (w = e[9]),
        (b = e[10]),
        (v = e[11]),
        (T = s * s * u + h),
        (M = n * s * u + o * l),
        (E = o * s * u - n * l),
        (S = s * n * u - o * l),
        (R = n * n * u + h),
        (O = o * n * u + s * l),
        (k = s * o * u + n * l),
        (P = n * o * u - s * l),
        (N = o * o * u + h),
        (i[0] = c * T + p * M + y * E),
        (i[1] = f * T + g * M + w * E),
        (i[2] = d * T + x * M + b * E),
        (i[3] = m * T + _ * M + v * E),
        (i[4] = c * S + p * R + y * O),
        (i[5] = f * S + g * R + w * O),
        (i[6] = d * S + x * R + b * O),
        (i[7] = m * S + _ * R + v * O),
        (i[8] = c * k + p * P + y * N),
        (i[9] = f * k + g * P + w * N),
        (i[10] = d * k + x * P + b * N),
        (i[11] = m * k + _ * P + v * N),
        e !== i && ((i[12] = e[12]), (i[13] = e[13]), (i[14] = e[14]), (i[15] = e[15])),
        i);
  }
  function po(i, e) {
    return (i[0] = e[12]), (i[1] = e[13]), (i[2] = e[14]), i;
  }
  function Qi(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[4],
      o = e[5],
      a = e[6],
      l = e[8],
      h = e[9],
      u = e[10];
    return (i[0] = Math.hypot(t, r, s)), (i[1] = Math.hypot(n, o, a)), (i[2] = Math.hypot(l, h, u)), i;
  }
  function mo(i) {
    let e = i[0],
      t = i[1],
      r = i[2],
      s = i[4],
      n = i[5],
      o = i[6],
      a = i[8],
      l = i[9],
      h = i[10],
      u = e * e + t * t + r * r,
      c = s * s + n * n + o * o,
      f = a * a + l * l + h * h;
    return Math.sqrt(Math.max(u, c, f));
  }
  var go = (function () {
    let i = [0, 0, 0];
    return function (e, t) {
      let r = i;
      Qi(r, t);
      let s = 1 / r[0],
        n = 1 / r[1],
        o = 1 / r[2],
        a = t[0] * s,
        l = t[1] * n,
        h = t[2] * o,
        u = t[4] * s,
        c = t[5] * n,
        f = t[6] * o,
        d = t[8] * s,
        m = t[9] * n,
        p = t[10] * o,
        g = a + c + p,
        x = 0;
      return (
        g > 0
          ? ((x = Math.sqrt(g + 1) * 2), (e[3] = 0.25 * x), (e[0] = (f - m) / x), (e[1] = (d - h) / x), (e[2] = (l - u) / x))
          : a > c && a > p
          ? ((x = Math.sqrt(1 + a - c - p) * 2), (e[3] = (f - m) / x), (e[0] = 0.25 * x), (e[1] = (l + u) / x), (e[2] = (d + h) / x))
          : c > p
          ? ((x = Math.sqrt(1 + c - a - p) * 2), (e[3] = (d - h) / x), (e[0] = (l + u) / x), (e[1] = 0.25 * x), (e[2] = (f + m) / x))
          : ((x = Math.sqrt(1 + p - a - c) * 2), (e[3] = (l - u) / x), (e[0] = (d + h) / x), (e[1] = (f + m) / x), (e[2] = 0.25 * x)),
        e
      );
    };
  })();
  function xo(i, e, t, r) {
    let s = e[0],
      n = e[1],
      o = e[2],
      a = e[3],
      l = s + s,
      h = n + n,
      u = o + o,
      c = s * l,
      f = s * h,
      d = s * u,
      m = n * h,
      p = n * u,
      g = o * u,
      x = a * l,
      _ = a * h,
      y = a * u,
      w = r[0],
      b = r[1],
      v = r[2];
    return (
      (i[0] = (1 - (m + g)) * w),
      (i[1] = (f + y) * w),
      (i[2] = (d - _) * w),
      (i[3] = 0),
      (i[4] = (f - y) * b),
      (i[5] = (1 - (c + g)) * b),
      (i[6] = (p + x) * b),
      (i[7] = 0),
      (i[8] = (d + _) * v),
      (i[9] = (p - x) * v),
      (i[10] = (1 - (c + m)) * v),
      (i[11] = 0),
      (i[12] = t[0]),
      (i[13] = t[1]),
      (i[14] = t[2]),
      (i[15] = 1),
      i
    );
  }
  function yo(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = t + t,
      a = r + r,
      l = s + s,
      h = t * o,
      u = r * o,
      c = r * a,
      f = s * o,
      d = s * a,
      m = s * l,
      p = n * o,
      g = n * a,
      x = n * l;
    return (
      (i[0] = 1 - c - m),
      (i[1] = u + x),
      (i[2] = f - g),
      (i[3] = 0),
      (i[4] = u - x),
      (i[5] = 1 - h - m),
      (i[6] = d + p),
      (i[7] = 0),
      (i[8] = f + g),
      (i[9] = d - p),
      (i[10] = 1 - h - c),
      (i[11] = 0),
      (i[12] = 0),
      (i[13] = 0),
      (i[14] = 0),
      (i[15] = 1),
      i
    );
  }
  function _o(i, e, t, r, s) {
    let n = 1 / Math.tan(e / 2),
      o = 1 / (r - s);
    return (
      (i[0] = n / t),
      (i[1] = 0),
      (i[2] = 0),
      (i[3] = 0),
      (i[4] = 0),
      (i[5] = n),
      (i[6] = 0),
      (i[7] = 0),
      (i[8] = 0),
      (i[9] = 0),
      (i[10] = (s + r) * o),
      (i[11] = -1),
      (i[12] = 0),
      (i[13] = 0),
      (i[14] = 2 * s * r * o),
      (i[15] = 0),
      i
    );
  }
  function wo(i, e, t, r, s, n, o) {
    let a = 1 / (e - t),
      l = 1 / (r - s),
      h = 1 / (n - o);
    return (
      (i[0] = -2 * a),
      (i[1] = 0),
      (i[2] = 0),
      (i[3] = 0),
      (i[4] = 0),
      (i[5] = -2 * l),
      (i[6] = 0),
      (i[7] = 0),
      (i[8] = 0),
      (i[9] = 0),
      (i[10] = 2 * h),
      (i[11] = 0),
      (i[12] = (e + t) * a),
      (i[13] = (s + r) * l),
      (i[14] = (o + n) * h),
      (i[15] = 1),
      i
    );
  }
  function vo(i, e, t, r) {
    let s = e[0],
      n = e[1],
      o = e[2],
      a = r[0],
      l = r[1],
      h = r[2],
      u = s - t[0],
      c = n - t[1],
      f = o - t[2],
      d = u * u + c * c + f * f;
    d === 0 ? (f = 1) : ((d = 1 / Math.sqrt(d)), (u *= d), (c *= d), (f *= d));
    let m = l * f - h * c,
      p = h * u - a * f,
      g = a * c - l * u;
    return (
      (d = m * m + p * p + g * g),
      d === 0 && (h ? (a += 1e-6) : l ? (h += 1e-6) : (l += 1e-6), (m = l * f - h * c), (p = h * u - a * f), (g = a * c - l * u), (d = m * m + p * p + g * g)),
      (d = 1 / Math.sqrt(d)),
      (m *= d),
      (p *= d),
      (g *= d),
      (i[0] = m),
      (i[1] = p),
      (i[2] = g),
      (i[3] = 0),
      (i[4] = c * g - f * p),
      (i[5] = f * m - u * g),
      (i[6] = u * p - c * m),
      (i[7] = 0),
      (i[8] = u),
      (i[9] = c),
      (i[10] = f),
      (i[11] = 0),
      (i[12] = s),
      (i[13] = n),
      (i[14] = o),
      (i[15] = 1),
      i
    );
  }
  var G = class extends Array {
    constructor(e = 1, t = 0, r = 0, s = 0, n = 0, o = 1, a = 0, l = 0, h = 0, u = 0, c = 1, f = 0, d = 0, m = 0, p = 0, g = 1) {
      super(e, t, r, s, n, o, a, l, h, u, c, f, d, m, p, g);
      return this;
    }
    get x() {
      return this[12];
    }
    get y() {
      return this[13];
    }
    get z() {
      return this[14];
    }
    get w() {
      return this[15];
    }
    set x(e) {
      this[12] = e;
    }
    set y(e) {
      this[13] = e;
    }
    set z(e) {
      this[14] = e;
    }
    set w(e) {
      this[15] = e;
    }
    set(e, t, r, s, n, o, a, l, h, u, c, f, d, m, p, g) {
      return e.length ? this.copy(e) : (oo(this, e, t, r, s, n, o, a, l, h, u, c, f, d, m, p, g), this);
    }
    translate(e, t = this) {
      return uo(this, t, e), this;
    }
    rotate(e, t, r = this) {
      return fo(this, r, e, t), this;
    }
    scale(e, t = this) {
      return co(this, t, typeof e == "number" ? [e, e, e] : e), this;
    }
    multiply(e, t) {
      return t ? Xi(this, e, t) : Xi(this, this, e), this;
    }
    identity() {
      return ao(this), this;
    }
    copy(e) {
      return no(this, e), this;
    }
    fromPerspective({ fov: e, aspect: t, near: r, far: s } = {}) {
      return _o(this, e, t, r, s), this;
    }
    fromOrthogonal({ left: e, right: t, bottom: r, top: s, near: n, far: o }) {
      return wo(this, e, t, r, s, n, o), this;
    }
    fromQuaternion(e) {
      return yo(this, e), this;
    }
    setPosition(e) {
      return (this.x = e[0]), (this.y = e[1]), (this.z = e[2]), this;
    }
    inverse(e = this) {
      return lo(this, e), this;
    }
    compose(e, t, r) {
      return xo(this, e, t, r), this;
    }
    getRotation(e) {
      return go(e, this), this;
    }
    getTranslation(e) {
      return po(e, this), this;
    }
    getScaling(e) {
      return Qi(e, this), this;
    }
    getMaxScaleOnAxis() {
      return mo(this);
    }
    lookAt(e, t, r) {
      return vo(this, e, t, r), this;
    }
    determinant() {
      return ho(this);
    }
    fromArray(e, t = 0) {
      return (
        (this[0] = e[t]),
        (this[1] = e[t + 1]),
        (this[2] = e[t + 2]),
        (this[3] = e[t + 3]),
        (this[4] = e[t + 4]),
        (this[5] = e[t + 5]),
        (this[6] = e[t + 6]),
        (this[7] = e[t + 7]),
        (this[8] = e[t + 8]),
        (this[9] = e[t + 9]),
        (this[10] = e[t + 10]),
        (this[11] = e[t + 11]),
        (this[12] = e[t + 12]),
        (this[13] = e[t + 13]),
        (this[14] = e[t + 14]),
        (this[15] = e[t + 15]),
        this
      );
    }
    toArray(e = [], t = 0) {
      return (
        (e[t] = this[0]),
        (e[t + 1] = this[1]),
        (e[t + 2] = this[2]),
        (e[t + 3] = this[3]),
        (e[t + 4] = this[4]),
        (e[t + 5] = this[5]),
        (e[t + 6] = this[6]),
        (e[t + 7] = this[7]),
        (e[t + 8] = this[8]),
        (e[t + 9] = this[9]),
        (e[t + 10] = this[10]),
        (e[t + 11] = this[11]),
        (e[t + 12] = this[12]),
        (e[t + 13] = this[13]),
        (e[t + 14] = this[14]),
        (e[t + 15] = this[15]),
        e
      );
    }
  };
  function bo(i, e, t = "YXZ") {
    return (
      t === "XYZ"
        ? ((i[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))),
          Math.abs(e[8]) < 0.99999 ? ((i[0] = Math.atan2(-e[9], e[10])), (i[2] = Math.atan2(-e[4], e[0]))) : ((i[0] = Math.atan2(e[6], e[5])), (i[2] = 0)))
        : t === "YXZ"
        ? ((i[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))),
          Math.abs(e[9]) < 0.99999 ? ((i[1] = Math.atan2(e[8], e[10])), (i[2] = Math.atan2(e[1], e[5]))) : ((i[1] = Math.atan2(-e[2], e[0])), (i[2] = 0)))
        : t === "ZXY"
        ? ((i[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))),
          Math.abs(e[6]) < 0.99999 ? ((i[1] = Math.atan2(-e[2], e[10])), (i[2] = Math.atan2(-e[4], e[5]))) : ((i[1] = 0), (i[2] = Math.atan2(e[1], e[0]))))
        : t === "ZYX"
        ? ((i[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))),
          Math.abs(e[2]) < 0.99999 ? ((i[0] = Math.atan2(e[6], e[10])), (i[2] = Math.atan2(e[1], e[0]))) : ((i[0] = 0), (i[2] = Math.atan2(-e[4], e[5]))))
        : t === "YZX"
        ? ((i[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))),
          Math.abs(e[1]) < 0.99999 ? ((i[0] = Math.atan2(-e[9], e[5])), (i[1] = Math.atan2(-e[2], e[0]))) : ((i[0] = 0), (i[1] = Math.atan2(e[8], e[10]))))
        : t === "XZY" &&
          ((i[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))),
          Math.abs(e[4]) < 0.99999 ? ((i[0] = Math.atan2(e[6], e[5])), (i[1] = Math.atan2(e[8], e[0]))) : ((i[0] = Math.atan2(-e[9], e[10])), (i[1] = 0))),
      i
    );
  }
  var To = new G(),
    Cr = class extends Array {
      constructor(e = 0, t = e, r = e, s = "YXZ") {
        super(e, t, r);
        return (this.order = s), (this.onChange = () => {}), this;
      }
      get x() {
        return this[0];
      }
      get y() {
        return this[1];
      }
      get z() {
        return this[2];
      }
      set x(e) {
        (this[0] = e), this.onChange();
      }
      set y(e) {
        (this[1] = e), this.onChange();
      }
      set z(e) {
        (this[2] = e), this.onChange();
      }
      set(e, t = e, r = e) {
        return e.length ? this.copy(e) : ((this[0] = e), (this[1] = t), (this[2] = r), this.onChange(), this);
      }
      copy(e) {
        return (this[0] = e[0]), (this[1] = e[1]), (this[2] = e[2]), this.onChange(), this;
      }
      reorder(e) {
        return (this.order = e), this.onChange(), this;
      }
      fromRotationMatrix(e, t = this.order) {
        return bo(this, e, t), this;
      }
      fromQuaternion(e, t = this.order) {
        return To.fromQuaternion(e), this.fromRotationMatrix(To, t);
      }
      toArray(e = [], t = 0) {
        return (e[t] = this[0]), (e[t + 1] = this[1]), (e[t + 2] = this[2]), e;
      }
    };
  var fe = class {
    constructor() {
      (this.parent = null),
        (this.children = []),
        (this.visible = !0),
        (this.matrix = new G()),
        (this.worldMatrix = new G()),
        (this.matrixAutoUpdate = !0),
        (this.position = new A()),
        (this.quaternion = new Te()),
        (this.scale = new A(1)),
        (this.rotation = new Cr()),
        (this.up = new A(0, 1, 0)),
        (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
        (this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion));
    }
    setParent(e, t = !0) {
      this.parent && e !== this.parent && this.parent.removeChild(this, !1), (this.parent = e), t && e && e.addChild(this, !1);
    }
    addChild(e, t = !0) {
      ~this.children.indexOf(e) || this.children.push(e), t && e.setParent(this, !1);
    }
    removeChild(e, t = !0) {
      ~this.children.indexOf(e) && this.children.splice(this.children.indexOf(e), 1), t && e.setParent(null, !1);
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || e) &&
          (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
          (this.worldMatrixNeedsUpdate = !1),
          (e = !0));
      for (let t = 0, r = this.children.length; t < r; t++) this.children[t].updateMatrixWorld(e);
    }
    updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0);
    }
    traverse(e) {
      if (!e(this)) for (let t = 0, r = this.children.length; t < r; t++) this.children[t].traverse(e);
    }
    decompose() {
      this.matrix.getTranslation(this.position),
        this.matrix.getRotation(this.quaternion),
        this.matrix.getScaling(this.scale),
        this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(e, t = !1) {
      t ? this.matrix.lookAt(this.position, e, this.up) : this.matrix.lookAt(e, this.position, this.up),
        this.matrix.getRotation(this.quaternion),
        this.rotation.fromQuaternion(this.quaternion);
    }
  };
  var nu = new G(),
    ou = new A(),
    au = new A(),
    xt = class extends fe {
      constructor(e, { near: t = 0.1, far: r = 100, fov: s = 45, aspect: n = 1, left: o, right: a, bottom: l, top: h, zoom: u = 1 } = {}) {
        super();
        Object.assign(this, { near: t, far: r, fov: s, aspect: n, left: o, right: a, bottom: l, top: h, zoom: u }),
          (this.projectionMatrix = new G()),
          (this.viewMatrix = new G()),
          (this.projectionViewMatrix = new G()),
          (this.worldPosition = new A()),
          (this.type = o || a ? "orthographic" : "perspective"),
          this.type === "orthographic" ? this.orthographic() : this.perspective();
      }
      perspective({ near: e = this.near, far: t = this.far, fov: r = this.fov, aspect: s = this.aspect } = {}) {
        return (
          Object.assign(this, { near: e, far: t, fov: r, aspect: s }),
          this.projectionMatrix.fromPerspective({ fov: r * (Math.PI / 180), aspect: s, near: e, far: t }),
          (this.type = "perspective"),
          this
        );
      }
      orthographic({
        near: e = this.near,
        far: t = this.far,
        left: r = this.left,
        right: s = this.right,
        bottom: n = this.bottom,
        top: o = this.top,
        zoom: a = this.zoom,
      } = {}) {
        return (
          Object.assign(this, { near: e, far: t, left: r, right: s, bottom: n, top: o, zoom: a }),
          (r /= a),
          (s /= a),
          (n /= a),
          (o /= a),
          this.projectionMatrix.fromOrthogonal({ left: r, right: s, bottom: n, top: o, near: e, far: t }),
          (this.type = "orthographic"),
          this
        );
      }
      updateMatrixWorld() {
        return (
          super.updateMatrixWorld(),
          this.viewMatrix.inverse(this.worldMatrix),
          this.worldMatrix.getTranslation(this.worldPosition),
          this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix),
          this
        );
      }
      lookAt(e) {
        return super.lookAt(e, !0), this;
      }
      project(e) {
        return e.applyMatrix4(this.viewMatrix), e.applyMatrix4(this.projectionMatrix), this;
      }
      unproject(e) {
        return e.applyMatrix4(nu.inverse(this.projectionMatrix)), e.applyMatrix4(this.worldMatrix), this;
      }
      updateFrustum() {
        this.frustum || (this.frustum = [new A(), new A(), new A(), new A(), new A(), new A()]);
        let e = this.projectionViewMatrix;
        (this.frustum[0].set(e[3] - e[0], e[7] - e[4], e[11] - e[8]).constant = e[15] - e[12]),
          (this.frustum[1].set(e[3] + e[0], e[7] + e[4], e[11] + e[8]).constant = e[15] + e[12]),
          (this.frustum[2].set(e[3] + e[1], e[7] + e[5], e[11] + e[9]).constant = e[15] + e[13]),
          (this.frustum[3].set(e[3] - e[1], e[7] - e[5], e[11] - e[9]).constant = e[15] - e[13]),
          (this.frustum[4].set(e[3] - e[2], e[7] - e[6], e[11] - e[10]).constant = e[15] - e[14]),
          (this.frustum[5].set(e[3] + e[2], e[7] + e[6], e[11] + e[10]).constant = e[15] + e[14]);
        for (let t = 0; t < 6; t++) {
          let r = 1 / this.frustum[t].distance();
          this.frustum[t].multiply(r), (this.frustum[t].constant *= r);
        }
      }
      frustumIntersectsMesh(e) {
        if (
          !e.geometry.attributes.position ||
          ((!e.geometry.bounds || e.geometry.bounds.radius === 1 / 0) && e.geometry.computeBoundingSphere(), !e.geometry.bounds)
        )
          return !0;
        let t = ou;
        t.copy(e.geometry.bounds.center), t.applyMatrix4(e.worldMatrix);
        let r = e.geometry.bounds.radius * e.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(t, r);
      }
      frustumIntersectsSphere(e, t) {
        let r = au;
        for (let s = 0; s < 6; s++) {
          let n = this.frustum[s];
          if (r.copy(n).dot(e) + n.constant < -t) return !1;
        }
        return !0;
      }
    };
  function Eo(i, e) {
    return (i[0] = e[0]), (i[1] = e[1]), (i[2] = e[2]), (i[3] = e[4]), (i[4] = e[5]), (i[5] = e[6]), (i[6] = e[8]), (i[7] = e[9]), (i[8] = e[10]), i;
  }
  function Mo(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = t + t,
      a = r + r,
      l = s + s,
      h = t * o,
      u = r * o,
      c = r * a,
      f = s * o,
      d = s * a,
      m = s * l,
      p = n * o,
      g = n * a,
      x = n * l;
    return (
      (i[0] = 1 - c - m),
      (i[3] = u - x),
      (i[6] = f + g),
      (i[1] = u + x),
      (i[4] = 1 - h - m),
      (i[7] = d - p),
      (i[2] = f - g),
      (i[5] = d + p),
      (i[8] = 1 - h - c),
      i
    );
  }
  function Ao(i, e) {
    return (i[0] = e[0]), (i[1] = e[1]), (i[2] = e[2]), (i[3] = e[3]), (i[4] = e[4]), (i[5] = e[5]), (i[6] = e[6]), (i[7] = e[7]), (i[8] = e[8]), i;
  }
  function Po(i, e, t, r, s, n, o, a, l, h) {
    return (i[0] = e), (i[1] = t), (i[2] = r), (i[3] = s), (i[4] = n), (i[5] = o), (i[6] = a), (i[7] = l), (i[8] = h), i;
  }
  function So(i) {
    return (i[0] = 1), (i[1] = 0), (i[2] = 0), (i[3] = 0), (i[4] = 1), (i[5] = 0), (i[6] = 0), (i[7] = 0), (i[8] = 1), i;
  }
  function Co(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = u * o - a * h,
      f = -u * n + a * l,
      d = h * n - o * l,
      m = t * c + r * f + s * d;
    return m
      ? ((m = 1 / m),
        (i[0] = c * m),
        (i[1] = (-u * r + s * h) * m),
        (i[2] = (a * r - s * o) * m),
        (i[3] = f * m),
        (i[4] = (u * t - s * l) * m),
        (i[5] = (-a * t + s * n) * m),
        (i[6] = d * m),
        (i[7] = (-h * t + r * l) * m),
        (i[8] = (o * t - r * n) * m),
        i)
      : null;
  }
  function $i(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      f = t[0],
      d = t[1],
      m = t[2],
      p = t[3],
      g = t[4],
      x = t[5],
      _ = t[6],
      y = t[7],
      w = t[8];
    return (
      (i[0] = f * r + d * o + m * h),
      (i[1] = f * s + d * a + m * u),
      (i[2] = f * n + d * l + m * c),
      (i[3] = p * r + g * o + x * h),
      (i[4] = p * s + g * a + x * u),
      (i[5] = p * n + g * l + x * c),
      (i[6] = _ * r + y * o + w * h),
      (i[7] = _ * s + y * a + w * u),
      (i[8] = _ * n + y * l + w * c),
      i
    );
  }
  function Fo(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      f = t[0],
      d = t[1];
    return (
      (i[0] = r),
      (i[1] = s),
      (i[2] = n),
      (i[3] = o),
      (i[4] = a),
      (i[5] = l),
      (i[6] = f * r + d * o + h),
      (i[7] = f * s + d * a + u),
      (i[8] = f * n + d * l + c),
      i
    );
  }
  function Ro(i, e, t) {
    let r = e[0],
      s = e[1],
      n = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      f = Math.sin(t),
      d = Math.cos(t);
    return (
      (i[0] = d * r + f * o),
      (i[1] = d * s + f * a),
      (i[2] = d * n + f * l),
      (i[3] = d * o - f * r),
      (i[4] = d * a - f * s),
      (i[5] = d * l - f * n),
      (i[6] = h),
      (i[7] = u),
      (i[8] = c),
      i
    );
  }
  function Lo(i, e, t) {
    let r = t[0],
      s = t[1];
    return (
      (i[0] = r * e[0]),
      (i[1] = r * e[1]),
      (i[2] = r * e[2]),
      (i[3] = s * e[3]),
      (i[4] = s * e[4]),
      (i[5] = s * e[5]),
      (i[6] = e[6]),
      (i[7] = e[7]),
      (i[8] = e[8]),
      i
    );
  }
  function Oo(i, e) {
    let t = e[0],
      r = e[1],
      s = e[2],
      n = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = e[9],
      f = e[10],
      d = e[11],
      m = e[12],
      p = e[13],
      g = e[14],
      x = e[15],
      _ = t * a - r * o,
      y = t * l - s * o,
      w = t * h - n * o,
      b = r * l - s * a,
      v = r * h - n * a,
      T = s * h - n * l,
      M = u * p - c * m,
      E = u * g - f * m,
      S = u * x - d * m,
      R = c * g - f * p,
      O = c * x - d * p,
      k = f * x - d * g,
      P = _ * k - y * O + w * R + b * S - v * E + T * M;
    return P
      ? ((P = 1 / P),
        (i[0] = (a * k - l * O + h * R) * P),
        (i[1] = (l * S - o * k - h * E) * P),
        (i[2] = (o * O - a * S + h * M) * P),
        (i[3] = (s * O - r * k - n * R) * P),
        (i[4] = (t * k - s * S + n * E) * P),
        (i[5] = (r * S - t * O - n * M) * P),
        (i[6] = (p * T - g * v + x * b) * P),
        (i[7] = (g * w - m * T - x * y) * P),
        (i[8] = (m * v - p * w + x * _) * P),
        i)
      : null;
  }
  var Fr = class extends Array {
    constructor(e = 1, t = 0, r = 0, s = 0, n = 1, o = 0, a = 0, l = 0, h = 1) {
      super(e, t, r, s, n, o, a, l, h);
      return this;
    }
    set(e, t, r, s, n, o, a, l, h) {
      return e.length ? this.copy(e) : (Po(this, e, t, r, s, n, o, a, l, h), this);
    }
    translate(e, t = this) {
      return Fo(this, t, e), this;
    }
    rotate(e, t = this) {
      return Ro(this, t, e), this;
    }
    scale(e, t = this) {
      return Lo(this, t, e), this;
    }
    multiply(e, t) {
      return t ? $i(this, e, t) : $i(this, this, e), this;
    }
    identity() {
      return So(this), this;
    }
    copy(e) {
      return Ao(this, e), this;
    }
    fromMatrix4(e) {
      return Eo(this, e), this;
    }
    fromQuaternion(e) {
      return Mo(this, e), this;
    }
    fromBasis(e, t, r) {
      return this.set(e[0], e[1], e[2], t[0], t[1], t[2], r[0], r[1], r[2]), this;
    }
    inverse(e = this) {
      return Co(this, e), this;
    }
    getNormalMatrix(e) {
      return Oo(this, e), this;
    }
  };
  window.MESH_ID == null && (window.MESH_ID = 1);
  var de = class extends fe {
    constructor(e, { geometry: t, program: r, mode: s = e.TRIANGLES, frustumCulled: n = !0, renderOrder: o = 0 } = {}) {
      super();
      e.canvas || console.error("gl not passed as first argument to Mesh"),
        (this.gl = e),
        (this.id = MESH_ID++),
        (this.geometry = t),
        (this.program = r),
        (this.mode = s),
        (this.frustumCulled = n),
        (this.renderOrder = o),
        (this.modelViewMatrix = new G()),
        (this.normalMatrix = new Fr()),
        (this.beforeRenderCallbacks = []),
        (this.afterRenderCallbacks = []);
    }
    onBeforeRender(e) {
      return this.beforeRenderCallbacks.push(e), this;
    }
    onAfterRender(e) {
      return this.afterRenderCallbacks.push(e), this;
    }
    draw({ camera: e } = {}) {
      this.beforeRenderCallbacks.forEach((r) => r && r({ mesh: this, camera: e })),
        e &&
          (this.program.uniforms.modelMatrix ||
            Object.assign(this.program.uniforms, {
              modelMatrix: { value: null },
              viewMatrix: { value: null },
              modelViewMatrix: { value: null },
              normalMatrix: { value: null },
              projectionMatrix: { value: null },
              cameraPosition: { value: null },
            }),
          (this.program.uniforms.projectionMatrix.value = e.projectionMatrix),
          (this.program.uniforms.cameraPosition.value = e.worldPosition),
          (this.program.uniforms.viewMatrix.value = e.viewMatrix),
          this.modelViewMatrix.multiply(e.viewMatrix, this.worldMatrix),
          this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
          (this.program.uniforms.modelMatrix.value = this.worldMatrix),
          (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
          (this.program.uniforms.normalMatrix.value = this.normalMatrix));
      let t = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({ flipFaces: t }),
        this.geometry.draw({ mode: this.mode, program: this.program }),
        this.afterRenderCallbacks.forEach((r) => r && r({ mesh: this, camera: e }));
    }
  };
  var ko = new Uint8Array(4);
  function Io(i) {
    return (i & (i - 1)) == 0;
  }
  window.TEX_ID == null && (window.TEX_ID = 1);
  var Ee = class {
    constructor(
      e,
      {
        image: t,
        target: r = e.TEXTURE_2D,
        type: s = e.UNSIGNED_BYTE,
        format: n = e.RGBA,
        internalFormat: o = n,
        wrapS: a = e.CLAMP_TO_EDGE,
        wrapT: l = e.CLAMP_TO_EDGE,
        generateMipmaps: h = !0,
        minFilter: u = h ? e.NEAREST_MIPMAP_LINEAR : e.LINEAR,
        magFilter: c = e.LINEAR,
        premultiplyAlpha: f = !1,
        unpackAlignment: d = 4,
        flipY: m = r == e.TEXTURE_2D,
        anisotropy: p = 0,
        level: g = 0,
        width: x,
        height: _ = x,
      } = {},
    ) {
      (this.gl = e),
        (this.id = window.TEX_ID++),
        (this.image = t),
        (this.target = r),
        (this.type = s),
        (this.format = n),
        (this.internalFormat = o),
        (this.minFilter = u),
        (this.magFilter = c),
        (this.wrapS = a),
        (this.wrapT = l),
        (this.generateMipmaps = h),
        (this.premultiplyAlpha = f),
        (this.unpackAlignment = d),
        (this.flipY = m),
        (this.anisotropy = Math.min(p, this.gl.renderer.parameters.maxAnisotropy)),
        (this.level = g),
        (this.width = x),
        (this.height = _),
        (this.texture = this.gl.createTexture()),
        (this.store = { image: null }),
        (this.glState = this.gl.renderer.state),
        (this.state = {}),
        (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
        (this.state.magFilter = this.gl.LINEAR),
        (this.state.wrapS = this.gl.REPEAT),
        (this.state.wrapT = this.gl.REPEAT),
        (this.state.anisotropy = 0);
    }
    bind() {
      this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id &&
        (this.gl.bindTexture(this.target, this.texture), (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
    }
    update(e = 0) {
      let t = !(this.image === this.store.image && !this.needsUpdate);
      if (((t || this.glState.textureUnits[e] !== this.id) && (this.gl.renderer.activeTexture(e), this.bind()), !!t)) {
        if (
          ((this.needsUpdate = !1),
          this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), (this.glState.flipY = this.flipY)),
          this.premultiplyAlpha !== this.glState.premultiplyAlpha &&
            (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
          this.unpackAlignment !== this.glState.unpackAlignment &&
            (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), (this.glState.unpackAlignment = this.unpackAlignment)),
          this.minFilter !== this.state.minFilter &&
            (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), (this.state.minFilter = this.minFilter)),
          this.magFilter !== this.state.magFilter &&
            (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), (this.state.magFilter = this.magFilter)),
          this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), (this.state.wrapS = this.wrapS)),
          this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), (this.state.wrapT = this.wrapT)),
          this.anisotropy &&
            this.anisotropy !== this.state.anisotropy &&
            (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy),
            (this.state.anisotropy = this.anisotropy)),
          this.image)
        ) {
          if ((this.image.width && ((this.width = this.image.width), (this.height = this.image.height)), this.target === this.gl.TEXTURE_CUBE_MAP))
            for (let r = 0; r < 6; r++)
              this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, this.level, this.internalFormat, this.format, this.type, this.image[r]);
          else if (ArrayBuffer.isView(this.image))
            this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
          else if (this.image.isCompressedTexture)
            for (let r = 0; r < this.image.length; r++)
              this.gl.compressedTexImage2D(this.target, r, this.internalFormat, this.image[r].width, this.image[r].height, 0, this.image[r].data);
          else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
          this.generateMipmaps &&
            (!this.gl.renderer.isWebgl2 && (!Io(this.image.width) || !Io(this.image.height))
              ? ((this.generateMipmaps = !1), (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE), (this.minFilter = this.gl.LINEAR))
              : this.gl.generateMipmap(this.target)),
            this.onUpdate && this.onUpdate();
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let r = 0; r < 6; r++)
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ko);
        else
          this.width
            ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null)
            : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, ko);
        this.store.image = this.image;
      }
    }
  };
  var Je = class {
    constructor(
      e,
      {
        width: t = e.canvas.width,
        height: r = e.canvas.height,
        target: s = e.FRAMEBUFFER,
        color: n = 1,
        depth: o = !0,
        stencil: a = !1,
        depthTexture: l = !1,
        wrapS: h = e.CLAMP_TO_EDGE,
        wrapT: u = e.CLAMP_TO_EDGE,
        minFilter: c = e.LINEAR,
        magFilter: f = c,
        type: d = e.UNSIGNED_BYTE,
        format: m = e.RGBA,
        internalFormat: p = m,
        unpackAlignment: g,
        premultiplyAlpha: x,
      } = {},
    ) {
      (this.gl = e),
        (this.width = t),
        (this.height = r),
        (this.depth = o),
        (this.buffer = this.gl.createFramebuffer()),
        (this.target = s),
        this.gl.bindFramebuffer(this.target, this.buffer),
        (this.textures = []);
      let _ = [];
      for (let y = 0; y < n; y++)
        this.textures.push(
          new Ee(e, {
            width: t,
            height: r,
            wrapS: h,
            wrapT: u,
            minFilter: c,
            magFilter: f,
            type: d,
            format: m,
            internalFormat: p,
            unpackAlignment: g,
            premultiplyAlpha: x,
            flipY: !1,
            generateMipmaps: !1,
          }),
        ),
          this.textures[y].update(),
          this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + y, this.gl.TEXTURE_2D, this.textures[y].texture, 0),
          _.push(this.gl.COLOR_ATTACHMENT0 + y);
      _.length > 1 && this.gl.renderer.drawBuffers(_),
        (this.texture = this.textures[0]),
        l && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture"))
          ? ((this.depthTexture = new Ee(e, {
              width: t,
              height: r,
              minFilter: this.gl.NEAREST,
              magFilter: this.gl.NEAREST,
              format: this.gl.DEPTH_COMPONENT,
              internalFormat: e.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
              type: this.gl.UNSIGNED_INT,
            })),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0))
          : (o &&
              !a &&
              ((this.depthBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
            a &&
              !o &&
              ((this.stencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
            o &&
              a &&
              ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
        this.gl.bindFramebuffer(this.target, null);
    }
    setSize(e, t) {
      if (!(this.width === e && this.height === t)) {
        (this.width = e), (this.height = t), this.gl.bindFramebuffer(this.target, this.buffer);
        for (let r = 0; r < this.textures.length; r++)
          (this.textures[r].width = e),
            (this.textures[r].height = t),
            (this.textures[r].needsUpdate = !0),
            this.textures[r].update(),
            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
        this.depthTexture
          ? ((this.depthTexture.width = e),
            (this.depthTexture.height = t),
            (this.depthTexture.needsUpdate = !0),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0))
          : (this.depthBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, t)),
            this.stencilBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, t)),
            this.depthStencilBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, t))),
          this.gl.bindFramebuffer(this.target, null);
      }
    }
  };
  var Do = {
    black: "#000000",
    white: "#ffffff",
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    cyan: "#00ffff",
    yellow: "#ffff00",
    orange: "#ff8000",
  };
  function zo(i) {
    i.length === 4 && (i = i[0] + i[1] + i[1] + i[2] + i[2] + i[3] + i[3]);
    let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);
    return e || console.warn(`Unable to convert hex string ${i} to rgb values`), [parseInt(e[1], 16) / 255, parseInt(e[2], 16) / 255, parseInt(e[3], 16) / 255];
  }
  function lu(i) {
    return (i = parseInt(i)), [((i >> 16) & 255) / 255, ((i >> 8) & 255) / 255, (i & 255) / 255];
  }
  function Zi(i) {
    return i === void 0
      ? [0, 0, 0]
      : arguments.length === 3
      ? arguments
      : isNaN(i)
      ? i[0] === "#"
        ? zo(i)
        : Do[i.toLowerCase()]
        ? zo(Do[i.toLowerCase()])
        : (console.warn("Color format not recognised"), [0, 0, 0])
      : lu(i);
  }
  var Me = class extends Array {
    constructor(e) {
      return Array.isArray(e) ? super(...e) : super(...Zi(...arguments));
    }
    get r() {
      return this[0];
    }
    get g() {
      return this[1];
    }
    get b() {
      return this[2];
    }
    set r(e) {
      this[0] = e;
    }
    set g(e) {
      this[1] = e;
    }
    set b(e) {
      this[2] = e;
    }
    set(e) {
      return Array.isArray(e) ? this.copy(e) : this.copy(Zi(...arguments));
    }
    scalar(e) {
      return (this[0] *= e), (this[1] *= e), (this[2] *= e), this;
    }
    copy(e) {
      return (this[0] = e[0]), (this[1] = e[1]), (this[2] = e[2]), this;
    }
  };
  function Bo(i, e) {
    return (i[0] = e[0]), (i[1] = e[1]), i;
  }
  function No(i, e, t) {
    return (i[0] = e), (i[1] = t), i;
  }
  function Ki(i, e, t) {
    return (i[0] = e[0] + t[0]), (i[1] = e[1] + t[1]), i;
  }
  function Ji(i, e, t) {
    return (i[0] = e[0] - t[0]), (i[1] = e[1] - t[1]), i;
  }
  function Vo(i, e, t) {
    return (i[0] = e[0] * t[0]), (i[1] = e[1] * t[1]), i;
  }
  function Uo(i, e, t) {
    return (i[0] = e[0] / t[0]), (i[1] = e[1] / t[1]), i;
  }
  function Rr(i, e, t) {
    return (i[0] = e[0] * t), (i[1] = e[1] * t), i;
  }
  function jo(i, e) {
    var t = e[0] - i[0],
      r = e[1] - i[1];
    return Math.sqrt(t * t + r * r);
  }
  function qo(i, e) {
    var t = e[0] - i[0],
      r = e[1] - i[1];
    return t * t + r * r;
  }
  function es(i) {
    var e = i[0],
      t = i[1];
    return Math.sqrt(e * e + t * t);
  }
  function Go(i) {
    var e = i[0],
      t = i[1];
    return e * e + t * t;
  }
  function Ho(i, e) {
    return (i[0] = -e[0]), (i[1] = -e[1]), i;
  }
  function Wo(i, e) {
    return (i[0] = 1 / e[0]), (i[1] = 1 / e[1]), i;
  }
  function Yo(i, e) {
    var t = e[0],
      r = e[1],
      s = t * t + r * r;
    return s > 0 && (s = 1 / Math.sqrt(s)), (i[0] = e[0] * s), (i[1] = e[1] * s), i;
  }
  function Xo(i, e) {
    return i[0] * e[0] + i[1] * e[1];
  }
  function ts(i, e) {
    return i[0] * e[1] - i[1] * e[0];
  }
  function Qo(i, e, t, r) {
    var s = e[0],
      n = e[1];
    return (i[0] = s + r * (t[0] - s)), (i[1] = n + r * (t[1] - n)), i;
  }
  function $o(i, e, t) {
    var r = e[0],
      s = e[1];
    return (i[0] = t[0] * r + t[3] * s + t[6]), (i[1] = t[1] * r + t[4] * s + t[7]), i;
  }
  function Zo(i, e, t) {
    let r = e[0],
      s = e[1];
    return (i[0] = t[0] * r + t[4] * s + t[12]), (i[1] = t[1] * r + t[5] * s + t[13]), i;
  }
  function Ko(i, e) {
    return i[0] === e[0] && i[1] === e[1];
  }
  var W = class extends Array {
    constructor(e = 0, t = e) {
      super(e, t);
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    set x(e) {
      this[0] = e;
    }
    set y(e) {
      this[1] = e;
    }
    set(e, t = e) {
      return e.length ? this.copy(e) : (No(this, e, t), this);
    }
    copy(e) {
      return Bo(this, e), this;
    }
    add(e, t) {
      return t ? Ki(this, e, t) : Ki(this, this, e), this;
    }
    sub(e, t) {
      return t ? Ji(this, e, t) : Ji(this, this, e), this;
    }
    multiply(e) {
      return e.length ? Vo(this, this, e) : Rr(this, this, e), this;
    }
    divide(e) {
      return e.length ? Uo(this, this, e) : Rr(this, this, 1 / e), this;
    }
    inverse(e = this) {
      return Wo(this, e), this;
    }
    len() {
      return es(this);
    }
    distance(e) {
      return e ? jo(this, e) : es(this);
    }
    squaredLen() {
      return this.squaredDistance();
    }
    squaredDistance(e) {
      return e ? qo(this, e) : Go(this);
    }
    negate(e = this) {
      return Ho(this, e), this;
    }
    cross(e, t) {
      return t ? ts(e, t) : ts(this, e);
    }
    scale(e) {
      return Rr(this, this, e), this;
    }
    normalize() {
      return Yo(this, this), this;
    }
    dot(e) {
      return Xo(this, e);
    }
    equals(e) {
      return Ko(this, e);
    }
    applyMatrix3(e) {
      return $o(this, this, e), this;
    }
    applyMatrix4(e) {
      return Zo(this, this, e), this;
    }
    lerp(e, t) {
      return Qo(this, this, e, t), this;
    }
    clone() {
      return new W(this[0], this[1]);
    }
    fromArray(e, t = 0) {
      return (this[0] = e[t]), (this[1] = e[t + 1]), this;
    }
    toArray(e = [], t = 0) {
      return (e[t] = this[0]), (e[t + 1] = this[1]), e;
    }
  };
  var yt = class extends ce {
    constructor(e, { width: t = 1, height: r = 1, widthSegments: s = 1, heightSegments: n = 1, attributes: o = {} } = {}) {
      let a = s,
        l = n,
        h = (a + 1) * (l + 1),
        u = a * l * 6,
        c = new Float32Array(h * 3),
        f = new Float32Array(h * 3),
        d = new Float32Array(h * 2),
        m = u > 65536 ? new Uint32Array(u) : new Uint16Array(u);
      yt.buildPlane(c, f, d, m, t, r, 0, a, l),
        Object.assign(o, { position: { size: 3, data: c }, normal: { size: 3, data: f }, uv: { size: 2, data: d }, index: { data: m } });
      super(e, o);
    }
    static buildPlane(e, t, r, s, n, o, a, l, h, u = 0, c = 1, f = 2, d = 1, m = -1, p = 0, g = 0) {
      let x = p,
        _ = n / l,
        y = o / h;
      for (let w = 0; w <= h; w++) {
        let b = w * y - o / 2;
        for (let v = 0; v <= l; v++, p++) {
          let T = v * _ - n / 2;
          if (
            ((e[p * 3 + u] = T * d),
            (e[p * 3 + c] = b * m),
            (e[p * 3 + f] = a / 2),
            (t[p * 3 + u] = 0),
            (t[p * 3 + c] = 0),
            (t[p * 3 + f] = a >= 0 ? 1 : -1),
            (r[p * 2] = v / l),
            (r[p * 2 + 1] = 1 - w / h),
            w === h || v === l)
          )
            continue;
          let M = x + v + w * (l + 1),
            E = x + v + (w + 1) * (l + 1),
            S = x + v + (w + 1) * (l + 1) + 1,
            R = x + v + w * (l + 1) + 1;
          (s[g * 6] = M), (s[g * 6 + 1] = E), (s[g * 6 + 2] = R), (s[g * 6 + 3] = E), (s[g * 6 + 4] = S), (s[g * 6 + 5] = R), g++;
        }
      }
    }
  };
  var Ot = class extends ce {
    constructor(e, { attributes: t = {} } = {}) {
      Object.assign(t, { position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) } });
      super(e, t);
    }
  };
  var Xf = new A(),
    Qf = new W(),
    $f = new W();
  var td = new W(),
    rd = new W(),
    id = new W(),
    sd = new A(),
    nd = new A(),
    od = new A(),
    ad = new A(),
    ld = new A(),
    hd = new A(),
    ud = new A(),
    cd = new A(),
    fd = new A(),
    dd = new A(),
    pd = new A(),
    md = new G();
  var rs = "catmullrom",
    is = "cubicbezier",
    Jo = "quadraticbezier",
    _t = new A(),
    wt = new A(),
    Lr = new A(),
    ea = new A();
  function hu(i, e, t = 0.168, r = 0.168) {
    if (
      (e < 1
        ? _t.sub(i[1], i[0]).scale(t).add(i[0])
        : _t
            .sub(i[e + 1], i[e - 1])
            .scale(t)
            .add(i[e]),
      e > i.length - 3)
    ) {
      let s = i.length - 1;
      wt.sub(i[s - 1], i[s])
        .scale(r)
        .add(i[s]);
    } else
      wt.sub(i[e], i[e + 2])
        .scale(r)
        .add(i[e + 1]);
    return [_t.clone(), wt.clone()];
  }
  function ta(i, e, t, r) {
    let s = 1 - i;
    _t.copy(e).scale(s ** 2), wt.copy(t).scale(2 * s * i), Lr.copy(r).scale(i ** 2);
    let n = new A();
    return n.add(_t, wt).add(Lr), n;
  }
  function ra(i, e, t, r, s) {
    let n = 1 - i;
    _t.copy(e).scale(n ** 3), wt.copy(t).scale(3 * n ** 2 * i), Lr.copy(r).scale(3 * n * i ** 2), ea.copy(s).scale(i ** 3);
    let o = new A();
    return o.add(_t, wt).add(Lr).add(ea), o;
  }
  var vt = class {
    constructor({ points: e = [new A(0, 0, 0), new A(0, 1, 0), new A(1, 1, 0), new A(1, 0, 0)], divisions: t = 12, type: r = rs } = {}) {
      (this.points = e), (this.divisions = t), (this.type = r);
    }
    _getQuadraticBezierPoints(e = this.divisions) {
      let t = [],
        r = this.points.length;
      if (r < 3) return console.warn("Not enough points provided."), [];
      let s = this.points[0],
        n = this.points[1],
        o = this.points[2];
      for (let l = 0; l <= e; l++) {
        let h = ta(l / e, s, n, o);
        t.push(h);
      }
      let a = 3;
      for (; r - a > 0; ) {
        s.copy(o), (n = o.scale(2).sub(n)), (o = this.points[a]);
        for (let l = 1; l <= e; l++) {
          let h = ta(l / e, s, n, o);
          t.push(h);
        }
        a++;
      }
      return t;
    }
    _getCubicBezierPoints(e = this.divisions) {
      let t = [],
        r = this.points.length;
      if (r < 4) return console.warn("Not enough points provided."), [];
      let s = this.points[0],
        n = this.points[1],
        o = this.points[2],
        a = this.points[3];
      for (let h = 0; h <= e; h++) {
        let u = ra(h / e, s, n, o, a);
        t.push(u);
      }
      let l = 4;
      for (; r - l > 1; ) {
        s.copy(a), (n = a.scale(2).sub(o)), (o = this.points[l]), (a = this.points[l + 1]);
        for (let h = 1; h <= e; h++) {
          let u = ra(h / e, s, n, o, a);
          t.push(u);
        }
        l += 2;
      }
      return t;
    }
    _getCatmullRomPoints(e = this.divisions, t = 0.168, r = 0.168) {
      let s = [];
      if (this.points.length <= 2) return this.points;
      let o;
      return (
        this.points.forEach((a, l) => {
          if (l === 0) o = a;
          else {
            let [h, u] = hu(this.points, l - 1, t, r),
              c = new vt({ points: [o, h, u, a], type: is });
            s.pop(), s.push(...c.getPoints(e)), (o = a);
          }
        }),
        s
      );
    }
    getPoints(e = this.divisions, t = 0.168, r = 0.168) {
      let s = this.type;
      return s === Jo
        ? this._getQuadraticBezierPoints(e)
        : s === is
        ? this._getCubicBezierPoints(e)
        : s === rs
        ? this._getCatmullRomPoints(e, t, r)
        : this.points;
    }
  };
  vt.CATMULLROM = rs;
  vt.CUBICBEZIER = is;
  vt.QUADRATICBEZIER = Jo;
  var Ad = new A(),
    Pd = new Te(),
    Sd = new A(),
    Cd = new A(),
    Fd = new Te(),
    Rd = new A();
  var Bd = new G();
  var Or = class {
      constructor(e, { data: t = new Float32Array(16), geometry: r = new Ot(e), type: s }) {
        this.gl = e;
        let n = t;
        (this.passes = []),
          (this.geometry = r),
          (this.dataLength = n.length / 4),
          (this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2))),
          (this.coords = new Float32Array(this.dataLength * 2));
        for (let l = 0; l < this.dataLength; l++) {
          let h = (l % this.size) / this.size,
            u = Math.floor(l / this.size) / this.size;
          this.coords.set([h, u], l * 2);
        }
        let o = (() => {
          if (n.length === this.size * this.size * 4) return n;
          {
            let l = new Float32Array(this.size * this.size * 4);
            return l.set(n), l;
          }
        })();
        this.uniform = {
          value: new Ee(e, {
            image: o,
            target: e.TEXTURE_2D,
            type: e.FLOAT,
            format: e.RGBA,
            internalFormat: e.renderer.isWebgl2 ? e.RGBA32F : e.RGBA,
            wrapS: e.CLAMP_TO_EDGE,
            wrapT: e.CLAMP_TO_EDGE,
            generateMipmaps: !1,
            minFilter: e.NEAREST,
            magFilter: e.NEAREST,
            width: this.size,
            flipY: !1,
          }),
        };
        let a = {
          width: this.size,
          height: this.size,
          type: s || e.HALF_FLOAT || e.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
          format: e.RGBA,
          internalFormat: e.renderer.isWebgl2 ? (s === e.FLOAT ? e.RGBA32F : e.RGBA16F) : e.RGBA,
          minFilter: e.NEAREST,
          depth: !1,
          unpackAlignment: 1,
        };
        this.fbo = {
          read: new Je(e, a),
          write: new Je(e, a),
          swap: () => {
            let l = this.fbo.read;
            (this.fbo.read = this.fbo.write), (this.fbo.write = l), (this.uniform.value = this.fbo.read.texture);
          },
        };
      }
      addPass({ vertex: e = cu, fragment: t = fu, uniforms: r = {}, textureUniform: s = "tMap", enabled: n = !0 } = {}) {
        r[s] = this.uniform;
        let o = new ge(this.gl, { vertex: e, fragment: t, uniforms: r }),
          l = { mesh: new de(this.gl, { geometry: this.geometry, program: o }), program: o, uniforms: r, enabled: n, textureUniform: s };
        return this.passes.push(l), l;
      }
      render() {
        this.passes
          .filter((t) => t.enabled)
          .forEach((t, r) => {
            this.gl.renderer.render({ scene: t.mesh, target: this.fbo.write, clear: !1 }), this.fbo.swap();
          });
      }
    },
    cu = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
    fu = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
  var ap = new A();
  var wp = new A(),
    vp = new A(),
    bp = new A(),
    Tp = new A(),
    Ep = new Te(),
    Mp = new Te(),
    Ap = new Te(),
    Pp = new Te();
  var Lp = new G(),
    Op = new G();
  var ss = class {
      constructor(e) {
        (this.responseType = null), (this.path = "");
      }
      setResponseType(e) {
        this.responseType = e;
      }
      setPath(e) {
        this.path = e;
      }
      load(e, t) {
        fetch(this.path + e)
          .then((r) => {
            switch (this.responseType) {
              case "arraybuffer":
                return r.arrayBuffer();
              case "json":
                return r.json();
            }
            return r.text();
          })
          .then((r) => t(r));
      }
    },
    Ve = function (i, e) {
      (this.gl = i),
        (this.decoderPath = ""),
        (this.decoderConfig = {}),
        (this.decoderBinary = null),
        (this.decoderPending = null),
        (this.workerLimit = 4),
        (this.workerPool = []),
        (this.workerNextTaskID = 1),
        (this.workerSourceURL = ""),
        (this.defaultAttributeIDs = { position: "POSITION", normal: "NORMAL", color: "COLOR", uv: "TEX_COORD" }),
        (this.defaultAttributeTypes = { position: "Float32Array", normal: "Float32Array", color: "Float32Array", uv: "Float32Array" });
    };
  Ve.prototype = Object.assign(Object.create({}), {
    constructor: Ve,
    setDecoderPath: function (i) {
      return (this.decoderPath = i), this;
    },
    setDecoderConfig: function (i) {
      return (this.decoderConfig = i), this;
    },
    setWorkerLimit: function (i) {
      return (this.workerLimit = i), this;
    },
    setVerbosity: function () {
      console.warn("THREE.DRACOLoader: The .setVerbosity() method has been removed.");
    },
    setDrawMode: function () {
      console.warn("THREE.DRACOLoader: The .setDrawMode() method has been removed.");
    },
    setSkipDequantization: function () {
      console.warn("THREE.DRACOLoader: The .setSkipDequantization() method has been removed.");
    },
    load: function (i, e, t, r) {
      var s = new ss(this.manager);
      s.setResponseType("arraybuffer"),
        s.load(
          i,
          (n) => {
            var o = { attributeIDs: this.defaultAttributeIDs, attributeTypes: this.defaultAttributeTypes, useUniqueIDs: !1 };
            this.decodeGeometry(n, o).then(e).catch(r);
          },
          t,
          r,
        );
    },
    decodeDracoFile: function (i, e, t, r) {
      var s = { attributeIDs: t || this.defaultAttributeIDs, attributeTypes: r || this.defaultAttributeTypes, useUniqueIDs: !!t };
      this.decodeGeometry(i, s).then(e);
    },
    decodeGeometry: function (i, e) {
      for (var t in e.attributeTypes) {
        var r = e.attributeTypes[t];
        r.BYTES_PER_ELEMENT !== void 0 && (e.attributeTypes[t] = r.name);
      }
      var s = JSON.stringify(e);
      if (Ve.taskCache.has(i)) {
        var n = Ve.taskCache.get(i);
        if (n.key === s) return n.promise;
        if (i.byteLength === 0)
          throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
      var o,
        a = this.workerNextTaskID++,
        l = i.byteLength,
        h = this._getWorker(a, l)
          .then(
            (u) => (
              (o = u),
              new Promise((c, f) => {
                (o._callbacks[a] = { resolve: c, reject: f }), o.postMessage({ type: "decode", id: a, taskConfig: e, buffer: i }, [i]);
              })
            ),
          )
          .then((u) => this._createGeometry(u.geometry));
      return (
        h
          .catch(() => !0)
          .then(() => {
            o && a && this._releaseTask(o, a);
          }),
        Ve.taskCache.set(i, { key: s, promise: h }),
        h
      );
    },
    _createGeometry: function (i) {
      var e = new ce(this.gl);
      i.index && e.setIndex({ data: i.index.array });
      for (var t = 0; t < i.attributes.length; t++) {
        var r = i.attributes[t],
          s = r.name,
          n = r.array,
          o = r.itemSize;
        e.addAttribute(s, { size: o, data: n });
      }
      return e;
    },
    _loadLibrary: function (i, e) {
      var t = new ss(this.manager);
      return (
        t.setPath(this.decoderPath),
        t.setResponseType(e),
        new Promise((r, s) => {
          t.load(i, r, void 0, s);
        })
      );
    },
    preload: function () {
      return this._initDecoder(), this;
    },
    _initDecoder: function () {
      if (this.decoderPending) return this.decoderPending;
      var i = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
        e = [];
      return (
        i
          ? e.push(this._loadLibrary("draco_decoder.js", "text"))
          : (e.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), e.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
        (this.decoderPending = Promise.all(e).then((t) => {
          var r = t[0];
          i || (this.decoderConfig.wasmBinary = t[1]);
          var s = Ve.DRACOWorker.toString(),
            n = ["/* draco decoder */", r, "", "/* worker */", s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))].join(`
`);
          this.workerSourceURL = URL.createObjectURL(new Blob([n]));
        })),
        this.decoderPending
      );
    },
    _getWorker: function (i, e) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          var t = new Worker(this.workerSourceURL);
          (t._callbacks = {}),
            (t._taskCosts = {}),
            (t._taskLoad = 0),
            t.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
            (t.onmessage = function (s) {
              var n = s.data;
              switch (n.type) {
                case "decode":
                  t._callbacks[n.id].resolve(n);
                  break;
                case "error":
                  t._callbacks[n.id].reject(n);
                  break;
                default:
                  console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"');
              }
            }),
            this.workerPool.push(t);
        } else
          this.workerPool.sort(function (r, s) {
            return r._taskLoad > s._taskLoad ? -1 : 1;
          });
        var t = this.workerPool[this.workerPool.length - 1];
        return (t._taskCosts[i] = e), (t._taskLoad += e), t;
      });
    },
    _releaseTask: function (i, e) {
      (i._taskLoad -= i._taskCosts[e]), delete i._callbacks[e], delete i._taskCosts[e];
    },
    debug: function () {
      console.log(
        "Task load: ",
        this.workerPool.map((i) => i._taskLoad),
      );
    },
    dispose: function () {
      for (var i = 0; i < this.workerPool.length; ++i) this.workerPool[i].terminate();
      return (this.workerPool.length = 0), this;
    },
  });
  Ve.DRACOWorker = function () {
    var i, e;
    onmessage = function (o) {
      var a = o.data;
      switch (a.type) {
        case "init":
          (i = a.decoderConfig),
            (e = new Promise(function (u) {
              (i.onModuleLoaded = function (c) {
                u({ draco: c });
              }),
                DracoDecoderModule(i);
            }));
          break;
        case "decode":
          var l = a.buffer,
            h = a.taskConfig;
          e.then((u) => {
            var c = u.draco,
              f = new c.Decoder(),
              d = new c.DecoderBuffer();
            d.Init(new Int8Array(l), l.byteLength);
            try {
              var m = t(c, f, d, h),
                p = m.attributes.map((g) => g.array.buffer);
              m.index && p.push(m.index.array.buffer), self.postMessage({ type: "decode", id: a.id, geometry: m }, p);
            } catch (g) {
              console.error(g), self.postMessage({ type: "error", id: a.id, error: g.message });
            } finally {
              c.destroy(d), c.destroy(f);
            }
          });
          break;
      }
    };
    function t(o, a, l, h) {
      var u = h.attributeIDs,
        c = h.attributeTypes,
        f,
        d,
        m = a.GetEncodedGeometryType(l);
      if (m === o.TRIANGULAR_MESH) (f = new o.Mesh()), (d = a.DecodeBufferToMesh(l, f));
      else if (m === o.POINT_CLOUD) (f = new o.PointCloud()), (d = a.DecodeBufferToPointCloud(l, f));
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!d.ok() || f.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
      var p = { index: null, attributes: [] };
      for (var g in u) {
        var x = self[c[g]],
          _,
          y;
        if (h.useUniqueIDs) (y = u[g]), (_ = a.GetAttributeByUniqueId(f, y));
        else {
          if (((y = a.GetAttributeId(f, o[u[g]])), y === -1)) continue;
          _ = a.GetAttribute(f, y);
        }
        p.attributes.push(s(o, a, f, g, x, _));
      }
      return m === o.TRIANGULAR_MESH && (p.index = r(o, a, f)), o.destroy(f), p;
    }
    function r(o, a, l) {
      var h = l.num_faces(),
        u = h * 3,
        c = u * 4,
        f = o._malloc(c);
      a.GetTrianglesUInt32Array(l, c, f);
      var d = new Uint32Array(o.HEAPF32.buffer, f, u).slice();
      return o._free(f), { array: d, itemSize: 1 };
    }
    function s(o, a, l, h, u, c) {
      var f = c.num_components(),
        d = l.num_points(),
        m = d * f,
        p = m * u.BYTES_PER_ELEMENT,
        g = n(o, u),
        x = o._malloc(p);
      a.GetAttributeDataArrayForAllPoints(l, c, g, p, x);
      var _ = new u(o.HEAPF32.buffer, x, m).slice();
      return o._free(x), { name: h, array: _, itemSize: f };
    }
    function n(o, a) {
      switch (a) {
        case Float32Array:
          return o.DT_FLOAT32;
        case Int8Array:
          return o.DT_INT8;
        case Int16Array:
          return o.DT_INT16;
        case Int32Array:
          return o.DT_INT32;
        case Uint8Array:
          return o.DT_UINT8;
        case Uint16Array:
          return o.DT_UINT16;
        case Uint32Array:
          return o.DT_UINT32;
      }
    }
  };
  Ve.taskCache = new WeakMap();
  var ia = Ve;
  function K() {
    if (!(this instanceof K)) return new K();
    (this.size = 0),
      (this.uid = 0),
      (this.selectors = []),
      (this.selectorObjects = {}),
      (this.indexes = Object.create(this.indexes)),
      (this.activeIndexes = []);
  }
  var Jt = window.document.documentElement,
    gu = Jt.matches || Jt.webkitMatchesSelector || Jt.mozMatchesSelector || Jt.oMatchesSelector || Jt.msMatchesSelector;
  K.prototype.matchesSelector = function (i, e) {
    return gu.call(i, e);
  };
  K.prototype.querySelectorAll = function (i, e) {
    return e.querySelectorAll(i);
  };
  K.prototype.indexes = [];
  var xu = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  K.prototype.indexes.push({
    name: "ID",
    selector: function (e) {
      var t;
      if ((t = e.match(xu))) return t[0].slice(1);
    },
    element: function (e) {
      if (e.id) return [e.id];
    },
  });
  var yu = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  K.prototype.indexes.push({
    name: "CLASS",
    selector: function (e) {
      var t;
      if ((t = e.match(yu))) return t[0].slice(1);
    },
    element: function (e) {
      var t = e.className;
      if (t) {
        if (typeof t == "string") return t.split(/\s/);
        if (typeof t == "object" && "baseVal" in t) return t.baseVal.split(/\s/);
      }
    },
  });
  var _u = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  K.prototype.indexes.push({
    name: "TAG",
    selector: function (e) {
      var t;
      if ((t = e.match(_u))) return t[0].toUpperCase();
    },
    element: function (e) {
      return [e.nodeName.toUpperCase()];
    },
  });
  K.prototype.indexes.default = {
    name: "UNIVERSAL",
    selector: function () {
      return !0;
    },
    element: function () {
      return [!0];
    },
  };
  var ns;
  typeof window.Map == "function"
    ? (ns = window.Map)
    : (ns = (function () {
        function i() {
          this.map = {};
        }
        return (
          (i.prototype.get = function (e) {
            return this.map[e + " "];
          }),
          (i.prototype.set = function (e, t) {
            this.map[e + " "] = t;
          }),
          i
        );
      })());
  var sa = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  function na(i, e) {
    i = i.slice(0).concat(i.default);
    var t = i.length,
      r,
      s,
      n,
      o,
      a = e,
      l,
      h,
      u = [];
    do
      if ((sa.exec(""), (n = sa.exec(a)) && ((a = n[3]), n[2] || !a))) {
        for (r = 0; r < t; r++)
          if (((h = i[r]), (l = h.selector(n[1])))) {
            for (s = u.length, o = !1; s--; )
              if (u[s].index === h && u[s].key === l) {
                o = !0;
                break;
              }
            o || u.push({ index: h, key: l });
            break;
          }
      }
    while (n);
    return u;
  }
  function wu(i, e) {
    var t, r, s;
    for (t = 0, r = i.length; t < r; t++) if (((s = i[t]), e.isPrototypeOf(s))) return s;
  }
  K.prototype.logDefaultIndexUsed = function () {};
  K.prototype.add = function (i, e) {
    var t,
      r,
      s,
      n,
      o,
      a,
      l,
      h,
      u = this.activeIndexes,
      c = this.selectors,
      f = this.selectorObjects;
    if (typeof i == "string") {
      for (t = { id: this.uid++, selector: i, data: e }, f[t.id] = t, l = na(this.indexes, i), r = 0; r < l.length; r++)
        (h = l[r]),
          (n = h.key),
          (s = h.index),
          (o = wu(u, s)),
          o || ((o = Object.create(s)), (o.map = new ns()), u.push(o)),
          s === this.indexes.default && this.logDefaultIndexUsed(t),
          (a = o.map.get(n)),
          a || ((a = []), o.map.set(n, a)),
          a.push(t);
      this.size++, c.push(i);
    }
  };
  K.prototype.remove = function (i, e) {
    if (typeof i == "string") {
      var t,
        r,
        s,
        n,
        o,
        a,
        l,
        h,
        u = this.activeIndexes,
        c = (this.selectors = []),
        f = this.selectorObjects,
        d = {},
        m = arguments.length === 1;
      for (t = na(this.indexes, i), s = 0; s < t.length; s++)
        for (r = t[s], n = u.length; n--; )
          if (((a = u[n]), r.index.isPrototypeOf(a))) {
            if (((l = a.map.get(r.key)), l)) for (o = l.length; o--; ) (h = l[o]), h.selector === i && (m || h.data === e) && (l.splice(o, 1), (d[h.id] = !0));
            break;
          }
      for (s in d) delete f[s], this.size--;
      for (s in f) c.push(f[s].selector);
    }
  };
  function oa(i, e) {
    return i.id - e.id;
  }
  K.prototype.queryAll = function (i) {
    if (!this.selectors.length) return [];
    var e = {},
      t = [],
      r = this.querySelectorAll(this.selectors.join(", "), i),
      s,
      n,
      o,
      a,
      l,
      h,
      u,
      c;
    for (s = 0, o = r.length; s < o; s++)
      for (l = r[s], h = this.matches(l), n = 0, a = h.length; n < a; n++)
        (c = h[n]),
          e[c.id] ? (u = e[c.id]) : ((u = { id: c.id, selector: c.selector, data: c.data, elements: [] }), (e[c.id] = u), t.push(u)),
          u.elements.push(l);
    return t.sort(oa);
  };
  K.prototype.matches = function (i) {
    if (!i) return [];
    var e,
      t,
      r,
      s,
      n,
      o,
      a,
      l,
      h,
      u,
      c,
      f = this.activeIndexes,
      d = {},
      m = [];
    for (e = 0, s = f.length; e < s; e++)
      if (((a = f[e]), (l = a.element(i)), l)) {
        for (t = 0, n = l.length; t < n; t++)
          if ((h = a.map.get(l[t])))
            for (r = 0, o = h.length; r < o; r++) (u = h[r]), (c = u.id), !d[c] && this.matchesSelector(i, u.selector) && ((d[c] = !0), m.push(u));
      }
    return m.sort(oa);
  };
  var bt = {},
    Ae = {},
    kr = ["mouseenter", "mouseleave", "pointerenter", "pointerleave"];
  function os(i) {
    Ae[i] === void 0 && (Ae[i] = []);
  }
  function aa(i, e) {
    if (Ae[i]) for (let t = 0; t < Ae[i].length; t++) Ae[i][t](...e);
  }
  function as(i) {
    return typeof i == "string" ? document.querySelectorAll(i) : i;
  }
  function er(i) {
    let e = vu(bt[i.type], i.target);
    if (e.length)
      for (let t = 0; t < e.length; t++)
        for (let r = 0; r < e[t].stack.length; r++)
          kr.indexOf(i.type) !== -1
            ? (la(i, e[t].delegatedTarget), i.target === e[t].delegatedTarget && e[t].stack[r].data(i))
            : (la(i, e[t].delegatedTarget), e[t].stack[r].data(i));
  }
  function vu(i, e) {
    let t = [],
      r = e;
    do {
      if (r.nodeType !== 1) break;
      let s = i.matches(r);
      s.length && t.push({ delegatedTarget: r, stack: s });
    } while ((r = r.parentElement));
    return t;
  }
  function la(i, e) {
    Object.defineProperty(i, "currentTarget", { configurable: !0, enumerable: !0, get: () => e });
  }
  function ls(i) {
    return JSON.parse(JSON.stringify(i));
  }
  var Ir = class {
    bindAll(e, t) {
      t === void 0 && (t = Object.getOwnPropertyNames(Object.getPrototypeOf(e)));
      for (let r = 0; r < t.length; r++) e[t[r]] = e[t[r]].bind(e);
    }
    on(e, t, r, s) {
      let n = e.split(" ");
      for (let o = 0; o < n.length; o++) {
        if (typeof t == "function" && r === void 0) {
          os(n[o]), Ae[n[o]].push(t);
          continue;
        }
        if ((t.nodeType && t.nodeType === 1) || t === window || t === document) {
          t.addEventListener(n[o], r, s);
          continue;
        }
        t = as(t);
        for (let a = 0; a < t.length; a++) t[a].addEventListener(n[o], r, s);
      }
    }
    delegate(e, t, r) {
      let s = e.split(" ");
      for (let n = 0; n < s.length; n++) {
        let o = bt[s[n]];
        o === void 0 &&
          ((o = new K()), (bt[s[n]] = o), kr.indexOf(s[n]) !== -1 ? document.addEventListener(s[n], er, !0) : document.addEventListener(s[n], er)),
          o.add(t, r);
      }
    }
    off(e, t, r, s) {
      let n = e.split(" ");
      for (let o = 0; o < n.length; o++) {
        if (t === void 0) {
          Ae[n[o]] = [];
          continue;
        }
        if (typeof t == "function") {
          os(n[o]);
          for (let l = 0; l < Ae[n[o]].length; l++) Ae[n[o]][l] === t && Ae[n[o]].splice(l, 1);
          continue;
        }
        let a = bt[n[o]];
        if (a !== void 0 && (a.remove(t, r), a.size === 0)) {
          delete bt[n[o]], kr.indexOf(n[o]) !== -1 ? document.removeEventListener(n[o], er, !0) : document.removeEventListener(n[o], er);
          continue;
        }
        if (t.removeEventListener !== void 0) {
          t.removeEventListener(n[o], r, s);
          continue;
        }
        t = as(t);
        for (let l = 0; l < t.length; l++) t[l].removeEventListener(n[o], r, s);
      }
    }
    emit(e, ...t) {
      aa(e, t);
    }
    debugDelegated() {
      return ls(bt);
    }
    debugBus() {
      return ls(Ae);
    }
  };
  var ha = class extends Ir {
      constructor() {
        super();
        (this.currentSection = null), (this.sections = {});
      }
      begin(e) {
        (this.sections[e] = []), (this.currentSection = e);
      }
      end() {
        this.currentSection = null;
      }
      offSection(e) {
        let t = this.sections[e];
        t != null &&
          (t.forEach((r) => {
            this.off(...r);
          }),
          (this.sections[e] = null));
      }
      on(...e) {
        this.currentSection && this.sections[this.currentSection].push([...e]), super.on(...e);
      }
    },
    Dr = window.evt;
  Dr == null && (Dr = new ha());
  window.evt = Dr;
  var F = Dr;
  var kt = Bt(hs());
  var zr = window.store;
  zr == null &&
    ((zr = {
      width: window.innerWidth,
      height: window.innerHeight,
      gl: null,
      homeText: null,
      dom: { root: document.getElementById("root"), transitionWrapper: document.getElementById("transitionWrapper") },
      isSmall: window.innerWidth <= 767,
      isMedium: window.innerWidth <= 1023,
      isLarge: window.innerWidth >= 1024,
      isMenuOpen: !1,
      isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
    }),
    (window.store = zr));
  var C = zr;
  var xe = document.documentElement,
    ca = class {
      constructor() {
        this.index = 0;
        let e = window.localStorage.getItem("color-mode");
        e != null && (this.index = Number(e));
        let t = kt.default[this.index];
        this.setPalette(t),
          xe.style.setProperty("--bg", t.bg),
          xe.style.setProperty("--color", t.text),
          xe.style.setProperty("--colorInactive", t.textInactive),
          xe.style.setProperty("--colorHover", t.textHover),
          (this.hidden = !1),
          (this.rightWrapper = document.getElementsByClassName("palette-list--right")[0]),
          (this.leftWrapper = document.getElementsByClassName("palette-list--left")[0]),
          (this.eles = Array.from(document.getElementsByClassName("palette-item")));
      }
      setPalette(e) {
        (this.currentPallete = e), (window.currentPallete = e);
      }
      init(e) {
        let t = this.currentPallete;
        xe.style.setProperty("--bg", t.bg),
          xe.style.setProperty("--color", t.text),
          xe.style.setProperty("--colorInactive", t.textInactive),
          xe.style.setProperty("--colorHover", t.textHover),
          this.addEvents();
      }
      hide() {
        (this.hidden = !0), !C.isSmall && (this.rightWrapper.classList.add("hidden"), this.leftWrapper.classList.add("hidden"));
      }
      show() {
        if (C.isSmall) {
          this.hidden = !0;
          return;
        }
        (this.hidden = !1), this.rightWrapper.classList.remove("hidden"), this.leftWrapper.classList.remove("hidden");
      }
      onResize = () => {
        if (C.isSmall) {
          this.hidden = !0;
          return;
        }
        this.hidden = !1;
      };
      onItemClick = (e) => {
        if ((e.preventDefault(), this.hidden)) return;
        let t = e.target,
          r = Number(t.dataset.palette);
        this.swap(r);
      };
      saveToStorage(e) {
        window.localStorage.setItem("color-mode", e);
      }
      addEvents() {
        F.on("resize", this.onResize),
          this.eles.forEach((e) => {
            F.on("click", e, this.onItemClick), F.on("tap", e, this.onItemClick);
          });
      }
      swapNext = () => {
        this.swap(this.index + 1);
      };
      swapPrev = () => {
        let e = this.index - 1;
        e < 0 && (e = kt.default.length - 1), this.swap(e);
      };
      swap(e) {
        if (this.isAnimating || e === this.index) return;
        (this.isAnimating = !0), (e = e % kt.default.length), this.eles[e].classList.add("active"), this.eles[this.index].classList.remove("active");
        let t = kt.default[e],
          r = kt.default[this.index];
        xe.style.setProperty("--bg", t.bg),
          xe.style.setProperty("--color", t.text),
          xe.style.setProperty("--colorInactive", t.textInactive),
          xe.style.setProperty("--colorHover", t.textHover),
          xe.style.setProperty("--bgLight", t.bgLight),
          this.setPalette(t),
          (this.isAnimating = !1),
          F.emit("PALLETE_CHANGE", this.currentPallete, r),
          (this.index = e),
          this.saveToStorage(this.index);
      }
    },
    Br = window.palleteChanger;
  Br == null && (Br = new ca());
  window.palleteChanger = Br;
  var U = Br;
  var fa = class extends de {
      constructor(e, t, r = "r") {
        super(e);
        (this.gl = e), (this.geometry = new yt(e, { width: 1, height: 1 }));
        let s = `vec4(vec3(t.${r}),1.0);`;
        switch (r.length) {
          case 2:
            s = `vec4(t.${r},0., 1.0);`;
            break;
          case 3:
            s = `vec4(t.${r},1.0);`;
            break;
        }
        this.program = new ge(e, {
          vertex: `
				  precision lowp float;
				  attribute vec2 uv;
				  uniform mat4 modelMatrix;
				  attribute vec3 position;
				  varying vec2 vUv;
				  void main() {
					  vec3 transformed = position;
					//   transformed.x += 1. - 0.25/2.;
					//   transformed.y += uY;
					  vUv = uv;
					  gl_Position =  modelMatrix * vec4(transformed, 1.);
				  }
			  `,
          fragment: `
				  precision lowp float;
				  varying vec2 vUv;
				  uniform sampler2D tMap;
  const float PI = 3.1415926535897932384626433832795028841971693993751058209749;
  
				  void main() {
					  vec3 color = vec3(1.);
					  vec4 t = texture2D(tMap, vUv);
					  gl_FragColor = ${s};
					//   gl_FragColor = vec4(vec3(t.a),1.0);
				  }
			  `,
          uniforms: { tMap: t },
        });
      }
    },
    Nr = class extends fe {
      constructor() {
        super();
      }
      init(e) {
        this.gl = e;
      }
      add(e, t = "r") {
        new fa(this.gl, e, t).setParent(this), this.updateChildren();
      }
      updateChildren() {
        let e = this.children.length;
        this.children.forEach((t, r) => {
          let s = 0.5 / e;
          t.scale.set(s), (t.position.x = 1 - s / 2), (t.position.y = 0 + s * r - (s * (e - 1)) / 2);
        });
      }
      remove() {
        (this.gl = null),
          this.children.slice().forEach((e) => {
            e.geometry.remove(), e.program.remove(), e.setParent(null);
          });
      }
    };
  function da(i, e) {
    e.textures.forEach((t) => {
      i.deleteTexture(t.texture);
    }),
      i.deleteFramebuffer(e.buffer);
  }
  function pa(i, e) {
    da(i, e.fbo.read),
      da(i, e.fbo.write),
      e.geometry.remove(),
      e.passes.forEach((t) => {
        t.program.remove();
      });
  }
  function Tu(i) {
    switch (i.tagName) {
      case "A":
      case "INPUT":
      case "BUTTON":
        return !0;
    }
    return !1;
  }
  var Eu = { LOW: 0, MEDIUM: 1, HIGH: 2 },
    ma = class {
      constructor(e) {
        let t = e.gl;
        this.core = e;
        let r = t.quality == Eu.LOW ? 16 : 32,
          s = r * r;
        (this.gpupu = new Or(e.gl, { data: new Float32Array(s * 4) })),
          (e.camera = new xt(e.gl, { aspect: e.vp.width / e.vp.height })),
          (e.camera.position.z = 10),
          (this.uMouse = { value: new W() }),
          (this.uRatio = { value: 1 }),
          (this.uIsExplotion = { value: !1 }),
          (this.uForceDone = { value: !1 }),
          (this.uForceReset = { value: !1 }),
          (this.isInputDisabled = !1),
          (this.resetProxy = 1),
          (this.shouldRemove = !1),
          (this.clicks = 0);
      }
      init() {
        let e = `
		precision highp float;
		uniform sampler2D tMap;
		varying vec2 vUv;
		uniform vec2 uMouse;
		uniform float uRatio;
		uniform bool uIsExplotion;
		uniform bool uForceDone;
		uniform bool uForceReset;
		uniform float uTimeDelta;
		void main() {
			vec2 uv = vUv;
			vec2 mouse = uMouse;
			// Keep the aspect ratio so explotion is circular
			uv.x = (uv.x - 0.5) * uRatio + 0.5;
			mouse.x *= uRatio;

			float toMouse = distance(mouse, uv * 2. -1. );
			float mouseToCenter = length(mouse * vec2(0.25, 1.));
			// As the mouse gets away from the center, make the circle bigger
			float within = step(toMouse, 0.2 + mouseToCenter * mouseToCenter * 0.75 );

			vec3 color = vec3(0.);

			vec4 lastTouch = texture2D(tMap, vUv);

			float initialJump = 0.;
			if(uIsExplotion && within > 0.) {
				color.r = uMouse.x;
				color.g = uMouse.y;
				initialJump = 0.3 * step(lastTouch.b, 0.001);
			} else {
				color.rg = lastTouch.rg;
			}
			

			float isActive = step(0.001,lastTouch.b);
			// The initial jump is used to kickStart the "isActive" check top here
			color.b = lastTouch.b + (isActive * (0.01)) * uTimeDelta * 0.1  + initialJump;
			color.b = clamp(color.b, 0., 1.);

			if(uForceDone){
				color.b = 1.;
				// For animation in.
				lastTouch.b = 1.;
			}
			if(uForceReset){
				color.rgb = vec3(0.);
			}

			gl_FragColor = vec4(color,1.);
			// gl_FragColor = vec4(0.,0.,0.,1.);
		}
	`,
          t = this.gpupu.addPass({
            fragment: e,
            uniforms: {
              uMouse: this.uMouse,
              uRatio: this.uRatio,
              uIsExplotion: this.uIsExplotion,
              uForceDone: this.uForceDone,
              uForceReset: this.uForceReset,
              uTimeDelta: this.core.uTimeDelta,
            },
          });
        this.addEvents();
      }
      forceReset = () => {
        this.uForceReset.value = !0;
      };
      onRestore = () => {
        U.swapNext();
      };
      onDown = (e) => {
        if (!(this.isInputDisabled || Tu(e.target) || C.isMenuOpen)) {
          if ((this.clicks++, this.clicks > 3)) {
            if (((this.clicks = 0), this.supressEvents)) return;
            F.emit("text-restore", e);
            return;
          }
          (this.uIsExplotion.value = !0), !this.supressEvents && F.emit("text-break");
        }
      };
      render() {
        this.disposed || (this.gpupu.render(), (this.uIsExplotion.value = !1), (this.uForceDone.value = !1), (this.uForceReset.value = !1));
      }
      onMouseMove = (e) => {
        this.uMouse.value.set((e.x / C.width) * 2 - 1, -(e.y / C.height) * 2 + 1);
      };
      onResize = () => {
        this.uRatio.value = C.width / C.height;
      };
      addEvents() {
        F.on("mousemove", this.onMouseMove), F.on("mousedown", this.onDown), F.on("resize", this.onResize), this.onResize();
      }
      removeEvents() {
        F.off("mousemove", this.onMouseMove), F.off("mousedown", this.onDown), F.off("resize", this.onResize);
      }
      remove() {
        (this.disposed = !0), this.removeEvents();
        let e = this.core.gl;
        pa(e, this.gpupu),
          (this.core = null),
          (this.gpupu = null),
          (this.uMouse = null),
          (this.uRatio = null),
          (this.uIsExplotion = null),
          (this.uForceDone = null);
      }
    },
    Vr = class extends fe {
      constructor(e) {
        super();
        (this.core = e),
          (this.gpuBreakCurrent = new ma(e)),
          (this.geometries = new Map()),
          (this.order = ["webgl", "websites", "cc", "renders"]),
          (this.index = 0),
          (this.uColor = { value: new Me(U.currentPallete.text) }),
          (this.uColorTarget = { value: new Me(U.currentPallete.text) }),
          (this.uColorProgress = { value: 0 }),
          (this.ele = document.getElementsByClassName("blackHoleText")[0]);
      }
      onPalleteChange = (e, t) => {
        this.uColorTarget.value = new Me(e.text);
        let r = new Me(e.bg);
        L.killTweensOf(this.uColorProgress),
          L.to(this.uColorProgress, {
            value: 1,
            duration: 0.4,
            ease: "power1.out",
            onComplete: () => {
              this.disposed ||
                ((this.isAnimating = !1), (this.uColor.value = new Me(e.text)), (this.uColorTarget.value = new Me(t.text)), (this.uColorProgress.value = 0));
            },
          });
      };
      load(e, t, r) {
        return new Promise((s) => {
          e.load(t, (n) => {
            this.geometries.set(r, n), s();
          });
        });
      }
      loadAssets() {
        let e = this.core.gl;
        if (C.homeText == null) C.homeText = this.geometries;
        else return (this.geometries = C.homeText), Promise.resolve();
        let t = this.core.draco;
        return Promise.all([
          this.load(t, "./models/websites.drc", "websites"),
          this.load(t, "./models/cc.drc", "cc"),
          this.load(t, "./models/webgl.drc", "webgl"),
          this.load(t, "./models/renders.drc", "renders"),
        ]);
      }
      createProgram() {
        return new ge(this.core.gl, {
          cullFace: null,
          vertex: `
	  precision lowp float;
		  attribute vec3 position;
		  attribute vec4 color; // centroid data
		  uniform mat4 modelViewMatrix;
		  uniform mat4 viewMatrix;
		  uniform mat4 modelMatrix;
		  uniform mat4 projectionMatrix;
  
		  uniform sampler2D tBreak;
		  uniform vec2 uMouse;
		  uniform vec2 uViewSize;
		  uniform float uTime;
		  uniform float uBreakProgress;
		  uniform bool uIsIntroIn;
  
		  vec3 cubicBezier(vec3 p0, vec3 c0, vec3 c1, vec3 p1, float t) {
			  float tn = 1.0 - t;
	  
			  return tn * tn * tn * p0 + 3.0 * tn * tn * t * c0 + 3.0 * tn * t * t * c1 + t * t * t * p1;
		  }
		  float cubicOut(float t) {
			  float f = t - 1.0;
			  return f * f * f + 1.0;
			}
			float cubicIn(float t) {
			  return t * t * t;
			}
			highp float random(vec2 co)
			{
				highp float a = 12.9898;
				highp float b = 78.233;
				highp float c = 43758.5453;
				highp float dt= dot(co.xy ,vec2(a,b));
				highp float sn= mod(dt,3.14);
				return fract(sin(sn) * c);
			}
		  void main() {
			  vec3 transformed = position;
			  // float progress = sin(uTime) * 0.5 + 0.5;
			  // progress = 1.;
			  vec3 centroid = color.rgb *12. - 6.;
			  
			  vec4 worldCentroid = modelViewMatrix * vec4(centroid, 1.);
			  vec3 worldMouse = vec3((uMouse * 0.5) * uViewSize,0.);
			  vec2 screenUV = worldCentroid.xy / uViewSize + 0.5;
  
			  vec4 mPos = modelMatrix * vec4(transformed, 1.);
			  vec4 mCentroid = modelMatrix * vec4(centroid, 1.);
  
			  vec4 touched = texture2D(tBreak, screenUV);
			  vec2 touchPos = touched.rg/ 2. + 0.5;
			  float breakProgress = uBreakProgress;
			  float progress = touched.b;

			  if(uIsIntroIn){
				progress = uBreakProgress;
				// progress = uMouse.x * 0.5 + 0.5;
				touchPos = vec2(0.5);
				breakProgress = 0.;
			  }
  
			  vec2 toMouse = normalize(screenUV.xy - touchPos );
			  float dist = distance(screenUV.xy, touchPos );
			  
			  progress = smoothstep(0., random(worldCentroid.xy * 100.) * 0.35 + 0.6 + random(mPos.xy * 100.) * 0.05, progress);
			  float vertexProgress = progress;
			  progress = cubicIn(progress);
  
			  mCentroid.z = 0.;
			  vec3 control0 = mCentroid.xyz;
			  vec3 control1 = mCentroid.xyz;
  
			  control0.xy += toMouse.xy * 3.;
			  control1 = control0;
  
  
			  mPos.xyz += -(mCentroid.xyz) ;
			  mPos.xyz *= 1. - breakProgress;
  
			  vec2 uvToMouse = normalize(screenUV.xy - (uMouse*0.5+0.5) );
  
  
			  mPos.xy *= 1.-cubicIn(smoothstep(0.95,1.,vertexProgress));
			  mPos.xy += uvToMouse.xy * 1.2 * breakProgress ;
  
			  mPos.xyz += cubicBezier(mCentroid.xyz, control0, control1, worldMouse, progress);
			  // mPos.xy += (mCentroid.xy);
  
			  gl_Position = projectionMatrix * viewMatrix * mPos;
		  }
	  `,
          uniforms: {
            uTime: { value: 0 },
            tBreak: this.gpuBreakCurrent.gpupu.uniform,
            uMouse: this.gpuBreakCurrent.uMouse,
            uColor: this.uColor,
            uColorTarget: this.uColorTarget,
            uColorProgress: this.uColorProgress,
            uIsIntroIn: { value: !1 },
            uBreakProgress: { value: 0 },
            uViewSize: this.core.uViewSize,
          },
          fragment: `
		precision lowp float;
		uniform vec3 uColor;
		uniform vec3 uColorTarget;
		uniform float uColorProgress;
					  void main() {
						  vec3 color = mix(uColor, uColorTarget, uColorProgress);
						  gl_FragColor = vec4(color,1.0);
					  }
				  `,
        });
      }
      init() {
        let e = this.core.gl;
        this.core.disposeDraco(), this.gpuBreakCurrent.init();
        let t = this.createProgram();
        (this.program = t),
          (this.meshes = new Map()),
          this.geometries.forEach((s, n, o) => {
            s.computeBoundingBox();
            let a = new de(e, { geometry: s, program: this.createProgram() });
            this.setMeshViewSize(a),
              a.rotation.set(-Math.PI / 2, 0, 0),
              a.setParent(this),
              n !== this.order[this.index] && (a.visible = !1),
              this.meshes.set(n, a);
          });
        let r = new Nr();
        r.init(e), (r.visible = !1), r.add(this.gpuBreakCurrent.gpupu.uniform, "rgb"), r.setParent(this.core.scene), (this.texDebug = r), this.addEvents();
      }
      setMeshViewSize(e) {
        let t = e.geometry,
          r = t.bounds.max[0] - t.bounds.min[0],
          s = t.bounds.max[2] - t.bounds.min[2],
          n = this.ele.getBoundingClientRect(),
          o = n.width,
          a = n.height,
          l = n.top,
          h = (o / this.core.vp.width) * this.core.viewSize.width,
          u = (a / this.core.vp.height) * this.core.viewSize.height,
          c = (l / this.core.vp.height) * this.core.viewSize.height,
          f = h / r,
          d = u / s,
          m = Math.min(f, d);
        e.scale.set(m, m, m), e.position.set(-t.bounds.center[0] * m, -(this.core.viewSize.height / 2) * -1 - c - u / 2, 0);
      }
      resizeMeshes() {
        this.geometries.forEach((e, t) => {
          let r = this.meshes.get(t);
          this.setMeshViewSize(r);
        });
      }
      onResize = () => {
        this.resizeMeshes();
      };
      update() {
        this.disposed || this.gpuBreakCurrent.render();
      }
      onRestore = () => {
        let e = (this.index + 1) % this.order.length,
          t = this.meshes.get(this.order[this.index]),
          r = this.meshes.get(this.order[e]);
        this.gpuBreakCurrent.isInputDisabled = !0;
        let s = L.timeline();
        s.fromTo(
          t.program.uniforms.uBreakProgress,
          { value: 0 },
          {
            value: 1,
            ease: "power3.out",
            duration: 0.5,
            onComplete: () => {
              (t.visible = !1), this.gpuBreakCurrent.forceReset();
            },
          },
        ),
          (r.visible = !0),
          (r.program.uniforms.uIsIntroIn.value = !0),
          s.fromTo(
            r.program.uniforms.uBreakProgress,
            { value: 1 },
            {
              value: 0,
              ease: "power1.inOut",
              duration: 1,
              onComplete: () => {
                (r.program.uniforms.uIsIntroIn.value = !1), (this.gpuBreakCurrent.isInputDisabled = !1);
              },
            },
            -0.1,
          ),
          U.swapNext(),
          (this.index = e);
      };
      animateIn() {
        let e = this.meshes.get(this.order[this.index]);
        (e.program.uniforms.uIsIntroIn.value = !0),
          (this.gpuBreakCurrent.isInputDisabled = !0),
          L.fromTo(
            e.program.uniforms.uBreakProgress,
            { value: 1 },
            {
              value: 0,
              ease: "power1.inOut",
              duration: 1,
              onComplete: () => {
                (e.program.uniforms.uIsIntroIn.value = !1), (this.gpuBreakCurrent.isInputDisabled = !1);
              },
            },
          );
      }
      animateOut() {
        if (this.isAnimatingOut || this.disposed) return;
        this.isAnimatingOut = !0;
        let e = this.meshes.get(this.order[this.index]);
        (this.gpuBreakCurrent.isInputDisabled = !0),
          (e.program.uniforms.uMouse = { value: new W(0, 0) }),
          L.fromTo(
            e.program.uniforms.uBreakProgress,
            { value: 0 },
            {
              value: 1,
              ease: "power3.inOut",
              duration: 0.5,
              onComplete: () => {
                (this.isAnimatingOut = !1), (e.visible = !1), this.shouldRemove && this.remove();
              },
            },
          );
      }
      addEvents() {
        F.on("PALLETE_CHANGE", this.onPalleteChange), F.on("text-restore", this.onRestore), F.on("resize", this.onResize);
      }
      removeEvents() {
        F.off("PALLETE_CHANGE", this.onPalleteChange), F.off("text-restore", this.onRestore), F.off("resize", this.onResize);
      }
      remove() {
        if (this.isAnimatingOut) {
          this.shouldRemove = !0;
          return;
        }
        (this.disposed = !0),
          this.removeEvents(),
          this.texDebug.remove(),
          (this.ele = null),
          (this.core = null),
          this.gpuBreakCurrent.remove(),
          (this.gpuBreakCurrent = null),
          (this.uColor = null),
          (this.uColorTarget = null),
          (this.uColorProgress = null),
          this.meshes.forEach((e, t) => {
            e.program.remove(), e.setParent(null);
          }),
          this.meshes.clear(),
          (this.meshes = null),
          (this.geometries = null);
      }
    };
  var qu = Bt(Ma()),
    Gu = Bt(Pa());
  function Hu(i) {
    let t = Array.from(document.getElementsByTagName("input"))
        .filter((s) => (s.name == "csrf" ? !0 : !!s.classList.contains("fd-form-control")))
        .map((s) => ({ name: s.name, value: s.value }))
        .reduce((s, n) => (n.name == "" || (s[n.name] = n.value), s), {}),
      r = Array.from(document.querySelectorAll(".fd-form-group"))
        .filter((s) => s.getAttribute("style") == "")[0]
        .querySelector("input").name;
    return (t[r] = i), t;
  }
  function Wu(i, e = 1, t = 0.05) {
    i.style.transition = "background-color .1s ease-out,color .1s ease-out";
    let r = L.timeline({
        onComplete: () => {
          i.style.transition = "";
        },
      }),
      s = Math.random() > 0.5 ? -1 : 1,
      n = Math.random() > 0.5 ? -1 : 1,
      o = 50 * e;
    r.fromTo(i, { x: 0, y: 0 }, { x: 0.2 + Math.random() * 0.2 * s * o, y: 0.2 + Math.random() * 0.2 * n * o, duration: t, ease: "power2.in" }),
      r.to(i, { x: 1 * Math.random() * 0.6 * -s * o, y: 1 * Math.random() * 0.6 * -n * o, duration: t, ease: "power0.in" }),
      r.to(i, { x: 0.6 * Math.random() * 0.4 * s * o, y: 0.6 * Math.random() * 0.4 * n * o, duration: t, ease: "power0.in" }),
      r.to(i, { x: 0, y: 0, duration: t, ease: "power2.out" });
  }
  function It(i) {
    let e = i.querySelector(".signup-input"),
      t = i.querySelector(".btn"),
      r = i.querySelector(".signup-success"),
      s = i.querySelector(".signup-error"),
      n = i.querySelector(".signup-alreadySubscribed"),
      o = i.querySelector(".signup-invalidEmail"),
      a = null;
    function l(u) {
      r.classList.remove("visible");
      let c = s;
      a && (a.classList.remove("visible"), a.classList.add("out")), c.classList.add("visible"), (a = c), Wu(t);
    }
    function h(u) {
      if (u.status !== "success") {
        l(u);
        return;
      }
      a && (a.classList.remove("visible"), a.classList.add("out")), r.classList.add("visible"), (a = r);
    }
    i.addEventListener("submit", function (u) {
      u.preventDefault();
      let c = e.value,
        f = Hu(c);
      fetch("https://form.flodesk.com/forms/620cc721e0eda1a0d870af34/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(f),
      })
        .then((d) => d.json())
        .then(h);
    });
  }
  function jr(i, e) {
    let t = e.length;
    for (let r = 0; r < t; r += 1) i[e[r]] = i[e[r]].bind(i);
  }
  var Fa = Bt(Ca()),
    Ra = class {
      constructor() {
        let e = this;
        (this._firstUpdate = !1), window.visualViewport.addEventListener("resize", (0, Fa.default)(e.onResize, 200)), this.update();
      }
      update() {
        (C.width = window.innerWidth),
          (C.height = window.innerHeight),
          (C.visualWidth = window.visualViewport.width),
          (C.visualHeight = window.visualViewport.height),
          this._firstUpdate ||
            (document.documentElement.style.setProperty("--vhi", `${C.height}px`),
            document.documentElement.style.setProperty("--vvhi", `${C.visualHeight}px`),
            (this._firstUpdate = !0)),
          (C.isSmall = C.width <= 767),
          (C.isMedium = C.width <= 1023),
          (C.isLarge = C.width >= 1024),
          document.documentElement.style.setProperty("--vh", `${C.height}px`),
          document.documentElement.style.setProperty("--vvh", `${C.visualHeight}px`),
          "" + C.height;
      }
      onResize = () => {
        this.update(), F.emit("resize");
      };
    },
    ds = window.globalResizer;
  ds == null && ((ds = new Ra()), (window.globalResizer = ds));
  var nr = { LOW: 0, MEDIUM: 1, HIGH: 2 };
  function La(i) {
    return i == nr.LOW ? 1 : i == nr.MEDIUM ? 1.5 : (i == nr.LOW, 1);
  }
  function et(i, e, t) {
    return i * (1 - t) + e * t;
  }
  Me.prototype.mix = function (i, e, t = this) {
    return (t.r = et(this.r, i.r, e)), (t.g = et(this.g, i.g, e)), (t.b = et(this.b, i.b, e)), t;
  };
  A.prototype.mix = function (i, e, t = this) {
    return (t.x = et(this.x, i.x, e)), (t.y = et(this.y, i.y, e)), (t.z = et(this.z, i.z, e)), t;
  };
  W.prototype.mix = function (i, e, t = this) {
    return (t.x = et(this.x, i.x, e)), (t.y = et(this.y, i.y, e)), t;
  };
  var Oa = class {
      constructor() {
        (this.container = document.getElementById("app-wrapper")),
          (this.quality = nr.HIGH),
          (this.vp = { width: this.container.offsetWidth, height: this.container.offsetHeight, dpr: Math.min(window.devicePixelRatio, La(this.quality)) }),
          (this.canvas = document.getElementById("app-canvas")),
          (this.renderer = new Sr({
            canvas: this.canvas,
            antialias: this.quality >= nr.MEDIUM,
            alpha: !0,
            premultipliedAlpha: !0,
            dpr: this.vp.dpr,
            preserveDrawingBuffer: !1,
          })),
          this.renderer.setSize(this.vp.width, this.vp.height);
        let e = this.renderer.gl;
        (this.camera = new xt(e, { aspect: this.vp.width / this.vp.height })),
          (this.camera.position.z = 10),
          (this.scene = new fe()),
          (this.gl = e),
          (this.viewSize = this.getViewSizeAtDepth()),
          (this.uViewSize = { value: new W(this.viewSize.width, this.viewSize.height) }),
          (this.uResolution = { value: new W(this.vp.width, this.vp.height) }),
          (this.shouldDownload = !1),
          (this.uTime = { value: 0 }),
          (this.uTimeDelta = { value: 0 });
        let t = new ia(e);
        t.setDecoderPath("/draco/"), t.preload(), (this.draco = t), (this.lastTime = 0), jr(this, ["init", "tick", "resize"]);
      }
      setQuality(e) {
        (this.quality = e), F.emit("gl-quality");
      }
      disposeDraco() {
        this.draco != null && (this.draco.dispose(), (this.draco = null));
      }
      getViewSizeAtDepth(e = 0) {
        let t = (this.camera.fov * Math.PI) / 180,
          r = Math.abs((this.camera.position.z - e) * Math.tan(t / 2) * 2);
        return { width: r * this.camera.aspect, height: r };
      }
      loadAssets() {
        return new Promise((e) => {
          e();
        });
      }
      init() {
        this.addEvents();
      }
      addEvents() {
        F.on("resize", this.resize), this.tick(0);
      }
      resize() {
        (this.vp.width = this.container.offsetWidth),
          (this.vp.height = this.container.offsetHeight),
          (this.vp.dpr = Math.min(window.devicePixelRatio, La(this.quality))),
          this.camera.perspective({ aspect: this.vp.width / this.vp.height }),
          this.renderer.setSize(this.vp.width, this.vp.height),
          (this.viewSize = this.getViewSizeAtDepth()),
          (this.uResolution.value.x = this.vp.width),
          (this.uResolution.value.y = this.vp.height),
          (this.uViewSize.value.x = this.viewSize.width),
          (this.uViewSize.value.y = this.viewSize.height),
          F.emit("gl-resize");
      }
      update(e, t) {
        (this.uTime.value = e), (this.uTimeDelta.value = t), F.emit("gl-update", e, t);
      }
      render() {
        this.renderer.render({ scene: this.scene, camera: this.camera });
      }
      tick(e) {
        let t = e - this.lastTime;
        this.lastTime = e;
        let r = window.stats;
        r && r.begin(), this.update(e, t), this.render(e, t), r && r.end(), requestAnimationFrame(this.tick);
      }
    },
    qr = window.gl;
  qr == null && ((qr = new Oa()), (window.gl = qr));
  var Re = qr;
  var Yu = new (class {
    constructor() {
      (this.on = 0),
        (this.off = 0),
        (this.events = { move: "mousemove", down: "mousedown", up: "mouseup" }),
        jr(this, ["onMove", "onDown", "onUp"]),
        this.addEvents();
    }
    addEvents() {
      let { move: i, down: e, up: t } = this.events;
      F.on(i, window, this.onMove), F.on(e, window, this.onDown), F.on(t, window, this.onUp), F.on("click", window, (r) => F.emit("click", r));
    }
    getPos(i) {
      let e = i.changedTouches ? i.changedTouches[0].clientX : i.clientX,
        t = i.changedTouches ? i.changedTouches[0].clientY : i.clientY,
        r = i.target;
      return { x: e, y: t, target: r };
    }
    onMove(i) {
      let { x: e, y: t, target: r } = this.getPos(i);
      F.emit("mousemove", { x: e, y: t, target: r, e: i });
    }
    onDown(i) {
      let { x: e, y: t, target: r } = this.getPos(i);
      (this.on = e), F.emit("mousedown", { x: e, y: t, target: r });
    }
    onUp(i) {
      let { x: e, y: t, target: r } = this.getPos(i);
      this.off = e;
      let s = Math.abs(this.off - this.on) < 10;
      F.emit("mouseup", { x: e, y: t, target: r, click: s });
    }
  })();
  var ka = class {
      constructor() {
        (this.wrapper = document.getElementById("cursor")),
          (this.smallCursor = document.getElementById("cursor--small")),
          (this.smallCursorWrapper = document.getElementById("cursor-wrapper--small")),
          (this.bigCursor = document.getElementById("cursor--big")),
          this.addEvents(),
          (this.count = 0),
          (this.anim = null);
      }
      addEvents() {
        F.on("mousemove", this.onMove), F.on("text-break", this.onTextBreak), F.on("text-restore", this.onTextRestore);
      }
      onTextBreak = () => {
        L.set(this.smallCursorWrapper, { scale: this.count + 1, transformOrigin: "center center" }), this.count++, this.onDown();
      };
      restart() {
        (this.count = 0), L.to(this.smallCursorWrapper, { scale: 1, ease: "expo.out", transformOrigin: "center center", duration: 1.5 });
      }
      onTextRestore = () => {
        this.restart();
      };
      onMove = (e) => {
        this.wrapper.style.transform = `translate(${e.x}px, ${e.y}px)`;
      };
      onDown = () => {
        this.anim && (this.anim.kill(), (this.anim = null)),
          L.set(this.bigCursor, { transformOrigin: "50% 50%" }),
          L.set(this.smallCursor, { transformOrigin: "50% 50%" });
        let e = L.timeline();
        e.fromTo(this.bigCursor, { scale: 1, opacity: 1 }, { scale: 10, opacity: 0, ease: "power4.out", duration: 0.5 }),
          e.fromTo(this.smallCursor, { scale: 1 }, { scale: 2, ease: "power2.out", duration: 0.1 }, 0),
          e.fromTo(this.smallCursor, { scale: 2 }, { scale: 1, ease: "power2.out", duration: 0.2 }, 0.1);
      };
    },
    Gr = window.cursorManager;
  Gr == null && ((Gr = new ka()), (window.cursorManager = Gr));
  var ps = Gr;
  var Ia = class {
      constructor() {}
      init() {
        this.addEvents();
      }
      addEvents() {
        F.on("text-break", this.breakShake), F.on("text-restore", this.restoreShake);
      }
      removeEvents() {
        F.off("text-break", this.breakShake), F.off("text-restore", this.restoreShake), L.killTweensOf(C.dom.root), L.set(C.dom.root, { x: 0, y: 0 });
      }
      remove() {
        this.removeEvents();
      }
      breakShake = () => {
        this.shake(1);
      };
      restoreShake = () => {
        this.shake(3, 0.05);
      };
      shake(e = 1, t = 0.05) {
        let r = L.timeline(),
          s = Math.random() > 0.5 ? -1 : 1,
          n = Math.random() > 0.5 ? -1 : 1,
          o = 50 * e;
        r.fromTo(C.dom.root, { x: 0, y: 0 }, { x: 0.2 + Math.random() * 0.2 * s * o, y: 0.2 + Math.random() * 0.2 * n * o, duration: t, ease: "power2.in" }),
          r.to(C.dom.root, { x: 1 * Math.random() * 0.6 * -s * o, y: 1 * Math.random() * 0.6 * -n * o, duration: t, ease: "power0.in" }),
          r.to(C.dom.root, { x: 0.6 * Math.random() * 0.4 * s * o, y: 0.6 * Math.random() * 0.4 * n * o, duration: t, ease: "power0.in" }),
          r.to(C.dom.root, { x: 0, y: 0, duration: t, ease: "power2.out" });
      }
    },
    Da = Ia;
  var za = class {
      constructor(e) {
        (this.blackHoleText = new Vr(Re)), this.loadAssets().then(this.init), (this.shaker = new Da(Re)), (this.el = e);
      }
      startPage() {}
      loadAssets() {
        return Promise.all([this.blackHoleText.loadAssets()]);
      }
      init = () => {
        this.blackHoleText.init(),
          this.blackHoleText.setParent(Re.scene),
          this.blackHoleText.animateIn(),
          this.shaker.init(),
          Fe.ticker.add(this.update),
          It(this.el.querySelector(".signup"));
      };
      update = () => {
        this.blackHoleText.update();
      };
      stopPage() {
        this.blackHoleText.remove(), this.shaker.remove(), (this.el = null);
      }
      onLeave() {
        this.blackHoleText.animateOut(), ps.restart();
      }
    },
    Ba = za;
  var or,
    Na = class extends V.Renderer {
      onEnter() {
        (or = new Ba(this.wrap)), U.show();
      }
      onLeave() {
        or.onLeave(), (C.dom.root.style.transform = "");
      }
      onEnterCompleted() {
        or.startPage();
      }
      onLeaveCompleted() {
        or.stopPage(), (C.dom.root.style.transform = ""), (or = null);
      }
    },
    ms = Na;
  var Va = class {
      constructor(e) {
        (this.isControlsOpened = !1), (this.el = e);
      }
      toggleControls() {
        this.isControlsOpened
          ? (this.controlsWrapper.classList.remove("opened"),
            (this.indexEle.style.transform = "translateY(0px)"),
            (this.titleEle.style.transform = "translateY(0px)"))
          : (this.controlsWrapper.classList.add("opened"),
            (this.indexEle.style.transform = `translateY(${-this.measurements.controlsHeight + this.measurements.indexBottom - 36}px)`),
            (this.titleEle.style.transform = `translateY(${-this.measurements.controlsHeight + this.measurements.titleBottom - 36}px)`)),
          (this.isControlsOpened = !this.isControlsOpened);
      }
      startPage() {
        let e = document.querySelectorAll(".openControls"),
          t = document.querySelector(".controls"),
          r = document.querySelector(".issueUI-index"),
          s = document.querySelector(".renderInfo-titles"),
          n = r.getBoundingClientRect(),
          o = window.innerHeight - (n.top + n.height),
          a = s.getBoundingClientRect(),
          l = window.innerHeight - (a.top + a.height),
          h = t.offsetHeight;
        (this.controlsWrapper = t),
          (this.indexEle = r),
          (this.titleEle = s),
          (this.measurements = { controlsHeight: h, indexBottom: o, titleBottom: l }),
          (this.toggleControls = this.toggleControls.bind(this));
        for (let c = e.length - 1; c >= 0; c--) e[c].addEventListener("click", this.toggleControls);
        this.startDemo();
        let u = document.querySelector(".render-loading");
        Fe.to(u, { opacity: 0, duration: 0.8, ease: "power2.inOut" }), It(this.el.querySelector(".signup")), this.setupControls();
      }
      setupControls() {
        let t = document.querySelector(".quality-radios").querySelectorAll(".radio-input");
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          s.addEventListener("click", () => {
            s.checked && Re.setQuality(s.value);
          });
        }
      }
      stopDemo() {
        (window.startDemo = !1), F.emit("stop-demo"), (this.el = null);
      }
      animateOut() {
        F.emit("renderAnimateOut");
      }
      startDemo() {
        (window.startDemo = !0), F.emit("start-demo");
      }
    },
    Ua = Va;
  var Hr,
    ja = class extends V.Renderer {
      onEnter() {
        (Hr = new Ua(this.wrap)), U.show();
      }
      onLeave() {
        Hr.animateOut();
      }
      onEnterCompleted() {
        Hr.startPage();
      }
      onLeaveCompleted() {
        Hr.stopDemo();
      }
    },
    gs = ja;
  var qa = class {
      constructor() {}
      startPage() {}
    },
    Ga = qa;
  var ar = Bt(hs()),
    Ha;
  var Wa = class extends V.Renderer {
      onEnter() {
        Ha = new Ga();
        let e = document.getElementsByClassName("issues");
        e = e[e.length - 1];
        let t = e.getElementsByClassName("issueItem"),
          r = U.index;
        for (let o = 0; o < t.length; o++) {
          let a = t[o],
            l = ar.default[(r + o) % ar.default.length];
          a.style.setProperty("--lineBG", `var(--${l.id}BG)`),
            a.style.setProperty("--lineText", `var(--${l.id}Text)`),
            a.style.setProperty("--colorInactive", `var(--${l.id}Inactive)`),
            a.style.setProperty("--colorHover", `var(--${l.id}Hover)`);
        }
        let s = ar.default[(r + t.length - 1) % ar.default.length],
          n = e.querySelector(".footer-wrapper");
        (n.style.background = `var(--${s.id}BG)`), n.style.setProperty("--color", `var(--${s.id}Text)`), U.hide();
      }
      onLeave() {}
      onEnterCompleted() {
        Ha.startPage();
      }
      onLeaveCompleted() {}
    },
    Ya = Wa;
  var Xa = class extends V.Transition {
      in({ from: e, to: t, done: r, ...s }) {
        window.scrollTo(0, 0);
        let n = t.querySelector(".render-script");
        if (n) {
          let o = document.createElement("script");
          for (let a = 0; a < n.attributes.length; a++) {
            let l = n.attributes[a];
            o.setAttribute(l.nodeName, l.nodeValue);
          }
          document.head.appendChild(o);
        }
        L.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power1.inOut" }), r();
      }
      out({ from: e, done: t }) {
        L.fromTo(
          e,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              e.remove();
            },
          },
        ),
          t();
      }
    },
    lr = Xa;
  var Qa = class extends V.Transition {
      in({ from: e, to: t, done: r, ...s }) {
        window.scrollTo(0, 0);
        let n = t.querySelector(".render-script");
        if (n) {
          let o = document.createElement("script");
          for (let a = 0; a < n.attributes.length; a++) {
            let l = n.attributes[a];
            o.setAttribute(l.nodeName, l.nodeValue);
          }
          document.head.appendChild(o);
        }
        L.fromTo(t, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power1.inOut", onComplete: r });
      }
      out({ from: e, done: t }) {
        L.fromTo(
          e,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              e.remove(), t();
            },
          },
        );
      }
    },
    xs = Qa;
  var Pe = {},
    ys = !0,
    $a = class extends V.Transition {
      letterTransition(e, t, r = null) {
        let s = r ?? this.getDirection(e, t);
        t.classList.add("instant"),
          s ? (t.classList.add("anim-top"), e && e.classList.add("anim-bottom")) : (t.classList.add("anim-bottom"), e && e.classList.add("anim-top"));
        let n = 10,
          o = 300;
        requestAnimationFrame(() => {
          t.classList.remove("instant"), t.classList.remove("anim-top"), t.classList.remove("anim-bottom");
        });
      }
      getDirection(e, t) {
        return t.getBoundingClientRect().y > e.getBoundingClientRect().y;
      }
      in(e) {
        if (ys) lr.prototype.in(e);
        else {
          let { from: t, to: r, done: s } = e,
            n = L.timeline({ onComplete: () => {} }),
            o = t.querySelector(".issue-content");
          L.timeline().fromTo(
            o,
            { opacity: 1 },
            {
              duration: 0.2,
              opacity: 0,
              ease: "power1.in",
              onComplete: () => {
                t.remove(), s();
              },
            },
          );
          let l = t.dataset.index,
            h = Number(l),
            u = r.querySelector(`.issueItem[data-index="${l}"]`),
            c = u.getBoundingClientRect(),
            f = c.y + c.height - window.innerHeight;
          f > 0 && (window.scrollTo(0, f), L.set(t, { y: f }));
          let d = u.querySelector(".issueItem-number"),
            m = u.querySelector(".issueItem-button"),
            p = u.querySelector(".issue-title"),
            g = C.isLarge ? null : this.getDirection(Pe.title, p);
          this.letterTransition(Pe.title, p, g),
            setTimeout(() => {
              Pe.title.remove(), (Pe.title = null);
            }, 300 + Pe.title.innerText.length * 10),
            this.letterTransition(Pe.index, d, g),
            C.isLarge &&
              setTimeout(() => {
                Pe.index.remove(), (Pe.index = null);
              }, 300 + 30),
            this.letterTransition(Pe.button, m, g),
            C.isLarge &&
              setTimeout(() => {
                Pe.button.remove(), (Pe.button = null);
              }, 600),
            n.fromTo(u.querySelector(".issueItem-excrept"), { opacity: 0 }, { opacity: 1, ease: "power2", duration: 0.8, onComplete: () => {} }, 0.4),
            h < 3 ? this.animateTopLines(n, r, 1, 2, 3, h) : this.animateTopLines(n, r, h - 2, h - 1, h, h);
        }
      }
      animateTopLines(e, t, r, s, n, o) {
        let a = t.querySelector(`.issueItem[data-index="00${r}"]`),
          l = t.querySelector(`.issueItem[data-index="00${s}"]`),
          h = t.querySelector(`.issueItem[data-index="00${n}"]`);
        this.backgroundAnimation(e, a, 0),
          this.imageAnimation(e, a, 0),
          this.backgroundAnimation(e, l, 0),
          this.imageAnimation(e, l, 0),
          this.backgroundAnimation(e, h, 0),
          this.imageAnimation(e, h, 0),
          r != o && this.contentAnimation(e, a, 0),
          s != o && this.contentAnimation(e, l, 0),
          n != o && this.contentAnimation(e, h, 0);
      }
      contentAnimation(e, t, r) {
        e.fromTo(t.querySelector(".issueItem-wrapper"), { opacity: 0 }, { opacity: 1, ease: "power2.out", duration: 1.3 }, 0.4 + r);
      }
      backgroundAnimation(e, t, r) {
        let s = t.querySelector(".issueItem-bg");
        e.fromTo(s, { x: "-100%" }, { x: "0%", ease: "power4.inOut", duration: 0.8 }, 0 + r);
      }
      imageAnimation(e, t, r) {
        let s = t.querySelector(".issueItem-image");
        e.fromTo(s, { y: "20%" }, { y: "0%", ease: "power2.out", duration: 1 }, 0 + r),
          e.fromTo(s, { opacity: 0 }, { opacity: 1, ease: "power2.inOut", duration: 0.7 }, 0.3 + r);
      }
      out(e) {
        let t = e.from;
        (ys = !t.classList.contains("issue")), ys ? lr.prototype.out(e) : (this.createTransitionEles(t), e.done());
      }
      position(e, t, r = "") {
        let s = e.cloneNode(!0),
          n = e.getBoundingClientRect();
        return L.set(s, { position: "fixed", top: 0, left: 0, x: n.left, y: n.top, width: n.width }), document.body.append(s), (Pe[r] = s), s;
      }
      createTransitionEles(e) {
        let t = e.querySelector(".issueUI-index"),
          r = e.querySelector(".issueUI-changeView").parentElement,
          s = e.querySelector(".issue-header");
        C.isLarge && (this.position(t, e, "index"), this.position(r, e, "button")),
          this.position(s, e, "title"),
          (s.style.opacity = 0),
          (r.style.opacity = 0),
          (t.style.opacity = 0);
      }
    },
    Za = $a;
  var Ue = {},
    Ka = class extends V.Transition {
      animateTransitionEles(e, t, r) {}
      animateItem(e, t, r) {
        let s = r.getBoundingClientRect();
        L.set(t, { transition: "none" }), e.to(t, { y: s.top, ease: "power4.inOut", duration: 1 }, 0);
      }
      getDirection(e, t) {
        return t.getBoundingClientRect().y > e.getBoundingClientRect().y;
      }
      letterTransition(e, t, r, s = null) {
        let n = s ?? this.getDirection(t, r);
        r?.classList.add("instant"),
          n ? (r?.classList.add("anim-top"), t.classList.add("anim-bottom")) : (r?.classList.add("anim-bottom"), t.classList.add("anim-top")),
          r &&
            requestAnimationFrame(() => {
              r.classList.remove("instant"), r.classList.remove("anim-top"), r.classList.remove("anim-bottom");
            });
      }
      in({ from: e, to: t, done: r }) {
        let s = t.querySelector(".issue-content-inner"),
          n = t.querySelector(".issueUI-index"),
          o = t.querySelector(".issueUI-changeView").parentElement,
          a = t.querySelector(".issue-header"),
          l = L.timeline({
            onComplete: () => {
              (u.style.opacity = 1), Ue.title.remove(), Ue.index.remove(), Ue.button.remove();
            },
          }),
          h = e.querySelector(".issueList");
        L.fromTo(
          h,
          { opacity: 1 },
          {
            duration: 0.2,
            opacity: 0,
            ease: "power1.in",
            onComplete: () => {
              e.remove(), r();
            },
          },
        );
        let u = t.querySelector(".cover-wrapper");
        l.fromTo(u, { x: "50%" }, { x: "30%", ease: "power2.out", duration: 1 }, 0),
          l.fromTo(u, { opacity: 0 }, { opacity: 1, ease: "power2.inOut", duration: 0.7 }, 0.3);
        let c = C.isLarge ? null : this.getDirection(Ue.title, a);
        this.letterTransition(l, Ue.title, a, c),
          this.letterTransition(l, Ue.index, n, c),
          this.letterTransition(l, Ue.button, o, c),
          l.fromTo(s, { opacity: 0 }, { opacity: 1, ease: "power2.out", duration: 1.3 }, 0.4);
      }
      position(e, t, r = "") {
        let s = e.cloneNode(!0),
          n = e.getBoundingClientRect();
        return L.set(s, { position: "fixed", top: 0, left: 0, x: n.left, y: n.top, width: n.width }), C.dom.transitionWrapper.append(s), (Ue[r] = s), s;
      }
      createTransitionEles(e, t, r) {
        let s = r;
        s.tagName == "A" && (s = s.parentElement.parentElement.parentElement);
        let n = s.querySelector(".issueItem-number"),
          o = s.querySelector(".issueItem-button"),
          a = s.querySelector(".issue-title");
        this.position(n, t, "index"),
          this.position(o, t, "button"),
          this.position(a, t, "title"),
          (a.style.opacity = 0),
          (o.style.opacity = 0),
          (o.style.margin = 0),
          (n.style.opacity = 0),
          (Ue.title.className = "issueItem-title issue-title issue-header");
      }
      out({ from: e, done: t, trigger: r }) {
        let s = L.timeline(),
          n = e.querySelector(".issueList");
        this.createTransitionEles(s, e, r);
        let o = window.scrollY;
        window.scrollTo(0, 0), L.set(n, { y: -o }), t();
      }
    },
    Ja = Ka;
  var Xu = {},
    el = class extends V.Transition {
      letterTransition(e, t, r = null) {
        let s = r ?? this.getDirection(e, t);
        t?.classList.add("instant"),
          s ? (t?.classList.add("anim-top"), e?.classList.add("anim-bottom")) : (t?.classList.add("anim-bottom"), e?.classList.add("anim-top")),
          t &&
            requestAnimationFrame(() => {
              t.classList.remove("instant"), t.classList.remove("anim-top"), t.classList.remove("anim-bottom");
            });
      }
      in({ from: e, to: t, done: r }) {
        window.scrollTo(0, 0);
        let s = t.querySelector(".render-script"),
          n = document.createElement("script");
        for (let f = 0; f < s.attributes.length; f++) {
          let d = s.attributes[f];
          n.setAttribute(d.nodeName, d.nodeValue);
        }
        document.head.appendChild(n);
        let o = t.querySelector(".render-title"),
          a = t.querySelector(".render-subtitle"),
          l = t.querySelector(".render-prev"),
          h = t.querySelector(".render-next"),
          u = t.querySelector(".openControls");
        this.letterTransition(Xu.title, o, 1),
          L.timeline({
            onComplete: () => {
              e.remove(), r();
            },
          }).fromTo([a, l, h, u], { opacity: 0 }, { opacity: 1, ease: "power2", duration: 0.8 }, 0.5);
      }
      out({ from: e, done: t, trigger: r }) {
        let s = document.querySelector(".issue-content"),
          n = e.querySelector("footer"),
          o = e.querySelector(".cover-wrapper");
        L.to(o, { x: -o.offsetLeft + window.innerWidth / 2 - o.offsetWidth / 2, duration: 1, ease: "power2.inOut" }),
          L.fromTo(
            [s, n],
            { opacity: 1 },
            {
              duration: 0.5,
              opacity: 0,
              ease: "power2.inOut",
              onComplete: () => {
                t();
              },
            },
          );
      }
    },
    tl = el;
  var Qu = { next: "002", prev: "", index: "001", title: "Webgl Particle Systems", description: "A bunch of particles with curl noise and interaction." },
    $u = { next: "003", prev: "001", index: "002", title: "Shaders and Gradients", description: "Cylinders with a gradient for height and color." },
    Zu = { next: "004", prev: "002", index: "003", title: "Points, Lines and People", description: "Planes pushed forwards/backwards based on image color." },
    Ku = { next: "005", prev: "003", index: "004", title: "Ripples, waves and fakes.", description: "A vector field pulling color around." },
    Ju = { next: "006", prev: "004", index: "005", title: "Grid Tile Patterns", description: "Quarter circles drawn over grid cells." },
    ec = { next: "007", prev: "005", index: "006", title: "In circles and spheres", description: "A bunch of squares positioned like a torus." },
    tc = { next: "008", prev: "006", index: "007", title: "Vertex Shader Displacement", description: "Cylinders in spiral displaced in the vertex" },
    rc = { next: "", prev: "007", index: "008", title: "Webgl Glass and Refraction", description: "A hexagon taking previous renders to refract" },
    Dt = { "001": Qu, "002": $u, "003": Zu, "004": Ku, "005": Ju, "006": ec, "007": tc, "008": rc };
  function rl() {
    let i = document.createElement("span");
    return (i.className = "split-word"), i;
  }
  function il(i, e, t = 15) {
    let r = rl();
    for (let s = 0; s < e.length; s++) {
      let n = e.substring(s, s + 1),
        o = n === " ",
        a = document.createElement("span"),
        l = "split-letter";
      o && (l += " space"), (a.className = l);
      let h = document.createElement("span");
      (h.style = `transition-delay: ${s * t}ms`), (h.innerText = n), a.append(h), r.append(a), (o || s == e.length - 1) && i.append(r), o && (r = rl());
    }
  }
  var hr = null,
    sl = class extends V.Transition {
      in({ from: e, to: t, done: r }) {
        window.scrollTo(0, 0);
        let s = t.querySelector(".render-script"),
          n = document.createElement("script");
        for (let o = 0; o < s.attributes.length; o++) {
          let a = s.attributes[o];
          n.setAttribute(a.nodeName, a.nodeValue);
        }
        document.head.appendChild(n), r(), t.remove();
      }
      animateButtonState(e, t, r) {
        let s = t.classList.contains("disabled"),
          n = r.classList.contains("disabled");
        if (n !== s) {
          let o = { background: U.currentPallete.text },
            a = { background: U.currentPallete.textInactive };
          if (!n) {
            let l = o;
            (o = a), (a = l);
          }
          Fe.set(r, { transition: "none" }), e.fromTo(r, o, { ...a, ease: "power3.inOut", duration: 0.5 }, 0);
        }
      }
      animateButton(e, t, r, s) {
        let n = s == "";
        if (((t.href = "/renders/" + s), (t.dataset.index = s), n !== r)) {
          let o = { background: U.currentPallete.text },
            a = { background: U.currentPallete.textInactive };
          if (!n) {
            let l = o;
            (o = a), (a = l);
          }
          Fe.set(t, { transition: "none" }),
            e.fromTo(
              t,
              o,
              {
                ...a,
                ease: "power3.inOut",
                duration: 0.5,
                onComplete: () => {
                  n ? t.classList.add("disabled") : t.classList.remove("disabled");
                },
              },
              0,
            );
        }
      }
      out({ from: e, done: t, trigger: r }) {
        hr && (hr.seek(1, !1), hr.kill(), (hr = null));
        let s = document.querySelector(".render-script");
        s.parentNode.removeChild(s);
        let n = r.dataset.index,
          o = e.querySelector(".renderInfo"),
          a = e.querySelector(".issueUI"),
          l = e.querySelector(".renderInfo-titles"),
          h = l.querySelector(".render-title"),
          u = l.querySelector(".render-subtitle"),
          c = e.querySelector(".issueUI-index"),
          f = l.cloneNode(),
          d = h.cloneNode(),
          m = u.cloneNode(),
          p = c.cloneNode();
        il(p, Dt[n].index, 120),
          a.append(p),
          f.append(m),
          f.append(d),
          o.append(f),
          il(d, Dt[n].title),
          (m.innerText = Dt[n].description),
          p.classList.add("anim-bottom"),
          d.classList.add("anim-bottom"),
          Fe.set(m, { opacity: 0 });
        let g = Fe.timeline(),
          x = e.querySelector(".render-prev"),
          _ = e.querySelector(".render-next");
        this.animateButton(g, _, _.classList.contains("disabled"), Dt[n].next),
          this.animateButton(g, x, x.classList.contains("disabled"), Dt[n].prev),
          g.set(h, { className: "render-title anim-top" }, 0.05),
          g.set(d, { className: "render-title" }, 0.05),
          g.set(c, { className: "issueUI-index anim-top" }, 0.05),
          g.set(p, { className: "issueUI-index" }, 0.05),
          g.fromTo([u], { opacity: 1 }, { opacity: 0, ease: "power1.out", duration: 0.2 }, 0),
          g.fromTo([m], { opacity: 0 }, { opacity: 1, ease: "power1.out", onComplete: t, duration: 0.2 }),
          g.set(
            { test: 0 },
            {
              test: 1,
              onComplete: () => {
                l.remove(), c.remove();
              },
            },
            0.85,
          ),
          (hr = g);
      }
    },
    nl = sl;
  var ol = class {
      constructor() {
        this.init();
      }
      startPage() {}
      loadAssets() {}
      init = () => {};
      stopPage() {}
      onLeave() {}
    },
    al = ol;
  var _s,
    ll = class extends V.Renderer {
      onEnter() {
        (_s = new al()), U.show();
      }
      onLeave() {
        _s.onLeave();
      }
      onEnterCompleted() {
        _s.startPage();
      }
      onLeaveCompleted() {}
    },
    hl = ll;
  var ul = class {
      constructor(e) {
        (this.el = e), this.init();
      }
      startPage() {
        It(this.el.querySelector(".signup"));
      }
      loadAssets() {}
      init = () => {};
      stopPage() {
        this.el = null;
      }
      onLeave() {}
    },
    cl = ul;
  var Wr,
    fl = class extends V.Renderer {
      onEnter() {
        (Wr = new cl(this.wrap)), U.show();
      }
      onLeave() {
        Wr.onLeave();
      }
      onEnterCompleted() {
        Wr.startPage();
      }
      onLeaveCompleted() {
        Wr.stopPage();
      }
    },
    dl = fl;
  function pl() {
    let i = document.querySelector(".mobileMenu"),
      e = document.querySelector(".mobileMenu-button"),
      t = !1;
    C.isMenuOpen = !1;
    function r() {
      // (t = !1), i.classList.remove("visible"), (C.isMenuOpen = t);
    }
    return (
      e.addEventListener("click", () => {
        (t = !t), (C.isMenuOpen = t), t ? i.classList.add("visible") : i.classList.remove("visible");
      }),
      { close: r }
    );
  }
  var ic = new V.Core({
      renderers: { home: ms, issueList: Ya, issue: hl, renders: gs, render: gs, about: dl, defaultPage: ms },
      transitions: { default: lr, render: xs, home: xs, contextual: { toIssue: Ja, issueToRender: tl, renderToRender: nl, issueListTransition: Za } },
    }),
    ws = null;
  function ml(i) {
    return i.replace(/\/(\?.+)?$/, "");
  }
  var gl = document.querySelectorAll("nav a");
  window.firstLoad = !1;
  function sc(i) {
    for (let e = 0; e < gl.length; e++) {
      let t = gl[e];
      t.classList.remove("is-active"), ml(t.href) === ml(i.href) && t.classList.add("is-active");
    }
  }
  ic.on("NAVIGATE_OUT", ({ trigger: i, location: e }) => {
    sc(e), ws && ws.close();
  });
  document.addEventListener("DOMContentLoaded", function (i) {
    window.ApplePaySession && document.body.classList.add("isSafari"),
      (this.isAndroid = /android/i.test(navigator.userAgent.toLowerCase())),
      (this.isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase())),
      (this.isiPad = /ipad/i.test(navigator.userAgent.toLowerCase())),
      (this.isChrome = /chrome/i.test(navigator.userAgent.toLowerCase()) && /google inc/i.test(navigator.vendor.toLowerCase())),
      (this.isIE = /(msie|trident)/i.test(navigator.userAgent.toLowerCase())),
      this.isAndroid && this.body.classList.add("isAndroid"),
      (this.isiPhone || this.isiPad) && this.body.classList.add("isIOS"),
      this.isChrome && this.body.classList.add("isChrome"),
      this.isIE && this.body.classList.add("isIE"),
      (ws = pl()),
      U.init(),
      (window.gl = Re),
      (C.gl = Re),
      Re.init();
  });
})();
/*!
 * CSSPlugin 3.10.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
