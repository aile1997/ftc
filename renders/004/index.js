(() => {
  var Va = Object.create;
  var Tr = Object.defineProperty;
  var ja = Object.getOwnPropertyDescriptor;
  var Ga = Object.getOwnPropertyNames;
  var qa = Object.getPrototypeOf,
    Xa = Object.prototype.hasOwnProperty;
  var Ya = (i) => Tr(i, "__esModule", { value: !0 });
  var Wa = (i, t) => () => (t || i((t = { exports: {} }).exports, t), t.exports);
  var Ha = (i, t, e) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of Ga(t)) !Xa.call(i, r) && r !== "default" && Tr(i, r, { get: () => t[r], enumerable: !(e = ja(t, r)) || e.enumerable });
      return i;
    },
    Qa = (i) =>
      Ha(
        Ya(
          Tr(
            i != null ? Va(qa(i)) : {},
            "default",
            i && i.__esModule && "default" in i ? { get: () => i.default, enumerable: !0 } : { value: i, enumerable: !0 },
          ),
        ),
        i,
      );
  var An = Wa((bd, En) => {
    function Qr(i, t, e) {
      var r, s, n, a, o;
      t == null && (t = 100);
      function h() {
        var c = Date.now() - a;
        c < t && c >= 0 ? (r = setTimeout(h, t - c)) : ((r = null), e || ((o = i.apply(n, s)), (n = s = null)));
      }
      var l = function () {
        (n = this), (s = arguments), (a = Date.now());
        var c = e && !r;
        return r || (r = setTimeout(h, t)), c && ((o = i.apply(n, s)), (n = s = null)), o;
      };
      return (
        (l.clear = function () {
          r && (clearTimeout(r), (r = null));
        }),
        (l.flush = function () {
          r && ((o = i.apply(n, s)), (n = s = null), clearTimeout(r), (r = null));
        }),
        l
      );
    }
    Qr.debounce = Qr;
    En.exports = Qr;
  });
  function br(i) {
    let t = i[0],
      e = i[1],
      r = i[2];
    return Math.sqrt(t * t + e * e + r * r);
  }
  function Ue(i, t) {
    return (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), i;
  }
  function Ui(i, t, e, r) {
    return (i[0] = t), (i[1] = e), (i[2] = r), i;
  }
  function Er(i, t, e) {
    return (i[0] = t[0] + e[0]), (i[1] = t[1] + e[1]), (i[2] = t[2] + e[2]), i;
  }
  function Ar(i, t, e) {
    return (i[0] = t[0] - e[0]), (i[1] = t[1] - e[1]), (i[2] = t[2] - e[2]), i;
  }
  function Vi(i, t, e) {
    return (i[0] = t[0] * e[0]), (i[1] = t[1] * e[1]), (i[2] = t[2] * e[2]), i;
  }
  function ji(i, t, e) {
    return (i[0] = t[0] / e[0]), (i[1] = t[1] / e[1]), (i[2] = t[2] / e[2]), i;
  }
  function Ve(i, t, e) {
    return (i[0] = t[0] * e), (i[1] = t[1] * e), (i[2] = t[2] * e), i;
  }
  function Gi(i, t) {
    let e = t[0] - i[0],
      r = t[1] - i[1],
      s = t[2] - i[2];
    return Math.sqrt(e * e + r * r + s * s);
  }
  function qi(i, t) {
    let e = t[0] - i[0],
      r = t[1] - i[1],
      s = t[2] - i[2];
    return e * e + r * r + s * s;
  }
  function Pr(i) {
    let t = i[0],
      e = i[1],
      r = i[2];
    return t * t + e * e + r * r;
  }
  function Xi(i, t) {
    return (i[0] = -t[0]), (i[1] = -t[1]), (i[2] = -t[2]), i;
  }
  function Yi(i, t) {
    return (i[0] = 1 / t[0]), (i[1] = 1 / t[1]), (i[2] = 1 / t[2]), i;
  }
  function je(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = e * e + r * r + s * s;
    return n > 0 && (n = 1 / Math.sqrt(n)), (i[0] = t[0] * n), (i[1] = t[1] * n), (i[2] = t[2] * n), i;
  }
  function Fr(i, t) {
    return i[0] * t[0] + i[1] * t[1] + i[2] * t[2];
  }
  function Rr(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = e[0],
      o = e[1],
      h = e[2];
    return (i[0] = s * h - n * o), (i[1] = n * a - r * h), (i[2] = r * o - s * a), i;
  }
  function Wi(i, t, e, r) {
    let s = t[0],
      n = t[1],
      a = t[2];
    return (i[0] = s + r * (e[0] - s)), (i[1] = n + r * (e[1] - n)), (i[2] = a + r * (e[2] - a)), i;
  }
  function Hi(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = e[3] * r + e[7] * s + e[11] * n + e[15];
    return (
      (a = a || 1),
      (i[0] = (e[0] * r + e[4] * s + e[8] * n + e[12]) / a),
      (i[1] = (e[1] * r + e[5] * s + e[9] * n + e[13]) / a),
      (i[2] = (e[2] * r + e[6] * s + e[10] * n + e[14]) / a),
      i
    );
  }
  function Qi(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = e[3] * r + e[7] * s + e[11] * n + e[15];
    return (
      (a = a || 1),
      (i[0] = (e[0] * r + e[4] * s + e[8] * n) / a),
      (i[1] = (e[1] * r + e[5] * s + e[9] * n) / a),
      (i[2] = (e[2] * r + e[6] * s + e[10] * n) / a),
      i
    );
  }
  function $i(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = e[0],
      o = e[1],
      h = e[2],
      l = e[3],
      c = o * n - h * s,
      u = h * r - a * n,
      f = a * s - o * r,
      d = o * f - h * u,
      m = h * c - a * f,
      p = a * u - o * c,
      g = l * 2;
    return (c *= g), (u *= g), (f *= g), (d *= 2), (m *= 2), (p *= 2), (i[0] = r + c + d), (i[1] = s + u + m), (i[2] = n + f + p), i;
  }
  var Ki = (function () {
    let i = [0, 0, 0],
      t = [0, 0, 0];
    return function (e, r) {
      Ue(i, e), Ue(t, r), je(i, i), je(t, t);
      let s = Fr(i, t);
      return s > 1 ? 0 : s < -1 ? Math.PI : Math.acos(s);
    };
  })();
  function Zi(i, t) {
    return i[0] === t[0] && i[1] === t[1] && i[2] === t[2];
  }
  var A = class extends Array {
    constructor(t = 0, e = t, r = t) {
      super(t, e, r);
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
    set x(t) {
      this[0] = t;
    }
    set y(t) {
      this[1] = t;
    }
    set z(t) {
      this[2] = t;
    }
    set(t, e = t, r = t) {
      return t.length ? this.copy(t) : (Ui(this, t, e, r), this);
    }
    copy(t) {
      return Ue(this, t), this;
    }
    add(t, e) {
      return e ? Er(this, t, e) : Er(this, this, t), this;
    }
    sub(t, e) {
      return e ? Ar(this, t, e) : Ar(this, this, t), this;
    }
    multiply(t) {
      return t.length ? Vi(this, this, t) : Ve(this, this, t), this;
    }
    divide(t) {
      return t.length ? ji(this, this, t) : Ve(this, this, 1 / t), this;
    }
    inverse(t = this) {
      return Yi(this, t), this;
    }
    len() {
      return br(this);
    }
    distance(t) {
      return t ? Gi(this, t) : br(this);
    }
    squaredLen() {
      return Pr(this);
    }
    squaredDistance(t) {
      return t ? qi(this, t) : Pr(this);
    }
    negate(t = this) {
      return Xi(this, t), this;
    }
    cross(t, e) {
      return e ? Rr(this, t, e) : Rr(this, this, t), this;
    }
    scale(t) {
      return Ve(this, this, t), this;
    }
    normalize() {
      return je(this, this), this;
    }
    dot(t) {
      return Fr(this, t);
    }
    equals(t) {
      return Zi(this, t);
    }
    applyMatrix4(t) {
      return Hi(this, this, t), this;
    }
    scaleRotateMatrix4(t) {
      return Qi(this, this, t), this;
    }
    applyQuaternion(t) {
      return $i(this, this, t), this;
    }
    angle(t) {
      return Ki(this, t);
    }
    lerp(t, e) {
      return Wi(this, this, t, e), this;
    }
    clone() {
      return new A(this[0], this[1], this[2]);
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
    }
    transformDirection(t) {
      let e = this[0],
        r = this[1],
        s = this[2];
      return (
        (this[0] = t[0] * e + t[4] * r + t[8] * s), (this[1] = t[1] * e + t[5] * r + t[9] * s), (this[2] = t[2] * e + t[6] * r + t[10] * s), this.normalize()
      );
    }
  };
  var Ji = new A();
  window.GEO_ID == null && (window.GEO_ID = 1);
  window.GEO_ATTR_ID == null && (window.GEO_ATTR_ID = 1);
  var ts = !1,
    it = class {
      constructor(t, e = {}) {
        t.canvas || console.error("gl not passed as first argument to Geometry"),
          (this.gl = t),
          (this.attributes = e),
          (this.id = GEO_ID++),
          (this.VAOs = {}),
          (this.drawRange = { start: 0, count: 0 }),
          (this.instancedCount = 0),
          this.gl.renderer.bindVertexArray(null),
          (this.gl.renderer.currentGeometry = null),
          (this.glState = this.gl.renderer.state);
        for (let r in e) this.addAttribute(r, e[r]);
      }
      addAttribute(t, e) {
        if (
          ((this.attributes[t] = e),
          (e.id = GEO_ATTR_ID++),
          (e.size = e.size || 1),
          (e.type =
            e.type ||
            (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT)),
          (e.target = t === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
          (e.normalized = e.normalized || !1),
          (e.stride = e.stride || 0),
          (e.offset = e.offset || 0),
          (e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size)),
          (e.divisor = e.instanced || 0),
          (e.needsUpdate = !1),
          e.buffer || ((e.buffer = this.gl.createBuffer()), this.updateAttribute(e)),
          e.divisor)
        ) {
          if (((this.isInstanced = !0), this.instancedCount && this.instancedCount !== e.count * e.divisor))
            return (
              console.warn("geometry has multiple instanced buffers of different length"),
              (this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor))
            );
          this.instancedCount = e.count * e.divisor;
        } else t === "index" ? (this.drawRange.count = e.count) : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
      }
      updateAttribute(t) {
        this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), (this.glState.boundBuffer = t.buffer)),
          this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW),
          (t.needsUpdate = !1);
      }
      setIndex(t) {
        this.addAttribute("index", t);
      }
      setDrawRange(t, e) {
        (this.drawRange.start = t), (this.drawRange.count = e);
      }
      setInstancedCount(t) {
        this.instancedCount = t;
      }
      createVAO(t) {
        (this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()),
          this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
          this.bindAttributes(t);
      }
      bindAttributes(t) {
        t.attributeLocations.forEach((e, { name: r, type: s }) => {
          if (!this.attributes[r]) {
            console.warn(`active attribute ${r} not being supplied`);
            return;
          }
          let n = this.attributes[r];
          this.gl.bindBuffer(n.target, n.buffer), (this.glState.boundBuffer = n.buffer);
          let a = 1;
          s === 35674 && (a = 2), s === 35675 && (a = 3), s === 35676 && (a = 4);
          let o = n.size / a,
            h = a === 1 ? 0 : a * a * a,
            l = a === 1 ? 0 : a * a;
          for (let c = 0; c < a; c++)
            this.gl.vertexAttribPointer(e + c, o, n.type, n.normalized, n.stride + h, n.offset + c * l),
              this.gl.enableVertexAttribArray(e + c),
              this.gl.renderer.vertexAttribDivisor(e + c, n.divisor);
        }),
          this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
      }
      draw({ program: t, mode: e = this.gl.TRIANGLES }) {
        this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
          (this.VAOs[t.attributeOrder] || this.createVAO(t),
          this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),
          (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
          t.attributeLocations.forEach((r, { name: s }) => {
            let n = this.attributes[s];
            n.needsUpdate && this.updateAttribute(n);
          }),
          this.isInstanced
            ? this.attributes.index
              ? this.gl.renderer.drawElementsInstanced(
                  e,
                  this.drawRange.count,
                  this.attributes.index.type,
                  this.attributes.index.offset + this.drawRange.start * 2,
                  this.instancedCount,
                )
              : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount)
            : this.attributes.index
            ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2)
            : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
      }
      getPosition() {
        let t = this.attributes.position;
        if (t.data) return t;
        if (!ts) return console.warn("No position buffer data found to compute bounds"), (ts = !0);
      }
      computeBoundingBox(t) {
        t || (t = this.getPosition());
        let e = t.data,
          r = t.offset || 0,
          s = t.stride || t.size;
        this.bounds || (this.bounds = { min: new A(), max: new A(), center: new A(), scale: new A(), radius: 1 / 0 });
        let n = this.bounds.min,
          a = this.bounds.max,
          o = this.bounds.center,
          h = this.bounds.scale;
        n.set(1 / 0), a.set(-1 / 0);
        for (let l = r, c = e.length; l < c; l += s) {
          let u = e[l],
            f = e[l + 1],
            d = e[l + 2];
          (n.x = Math.min(u, n.x)),
            (n.y = Math.min(f, n.y)),
            (n.z = Math.min(d, n.z)),
            (a.x = Math.max(u, a.x)),
            (a.y = Math.max(f, a.y)),
            (a.z = Math.max(d, a.z));
        }
        h.sub(a, n), o.add(n, a).divide(2);
      }
      computeBoundingSphere(t) {
        t || (t = this.getPosition());
        let e = t.data,
          r = t.offset || 0,
          s = t.stride || t.size;
        this.bounds || this.computeBoundingBox(t);
        let n = 0;
        for (let a = r, o = e.length; a < o; a += s) Ji.fromArray(e, a), (n = Math.max(n, this.bounds.center.squaredDistance(Ji)));
        this.bounds.radius = Math.sqrt(n);
      }
      remove() {
        for (let t in this.VAOs) this.gl.renderer.deleteVertexArray(this.VAOs[t]), delete this.VAOs[t];
        for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
      }
    };
  window.PROGRAM_ID == null && (window.PROGRAM_ID = 1);
  var es = {},
    ut = class {
      constructor(
        t,
        {
          vertex: e,
          fragment: r,
          uniforms: s = {},
          transparent: n = !1,
          cullFace: a = t.BACK,
          frontFace: o = t.CCW,
          depthTest: h = !0,
          depthWrite: l = !0,
          depthFunc: c = t.LEQUAL,
        } = {},
      ) {
        t.canvas || console.error("gl not passed as fist argument to Program"),
          (this.gl = t),
          (this.uniforms = s),
          (this.id = PROGRAM_ID++),
          e || console.warn("vertex shader not supplied"),
          r || console.warn("fragment shader not supplied"),
          (this.transparent = n),
          (this.cullFace = a),
          (this.frontFace = o),
          (this.depthTest = h),
          (this.depthWrite = l),
          (this.depthFunc = c),
          (this.blendFunc = {}),
          (this.blendEquation = {}),
          this.transparent &&
            !this.blendFunc.src &&
            (this.gl.renderer.premultipliedAlpha
              ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
              : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)),
          a == t.FRONT &&
            ((e =
              `#define FLIP_SIDED
` + e),
            (r =
              `#define FLIP_SIDED
` + r));
        let u = t.createShader(t.VERTEX_SHADER);
        if ((t.shaderSource(u, e), t.compileShader(u), t.getShaderInfoLog(u) !== "")) {
          let g = `${t.getShaderInfoLog(u)}`;
          console.log(g),
            console.warn(`${t.getShaderInfoLog(u)}
Vertex Shader
${$a(e)}`);
        }
        let f = t.createShader(t.FRAGMENT_SHADER);
        if ((t.shaderSource(f, r), t.compileShader(f), t.getShaderInfoLog(f) !== "")) {
          let _ = t.getShaderInfoLog(f).trim().split(`
`);
          console.log(_);
          let y = r.split(`
`);
          _.forEach((x) => {
            let w = "";
            if (((x = x.trim()), x.length <= 1)) return;
            console.log(x, x.length);
            let M = x.match(/[0-9]+:[0-9]+/)[0],
              v = M.indexOf(":"),
              T = Number(M.substring(v + 1)) - 1;
            (w += `${x}
`),
              (w += `${T - 1}: ${y[T - 1].trim()}
`),
              (w += `%c ${T}: ${y[T].trim()}
`),
              (w += `%c ${T + 1}: ${y[T + 1].trim()}

`),
              console.warn(w, "background: red; color: white", "");
          });
        }
        if (
          ((this.program = t.createProgram()),
          t.attachShader(this.program, u),
          t.attachShader(this.program, f),
          t.linkProgram(this.program),
          !t.getProgramParameter(this.program, t.LINK_STATUS))
        )
          return console.warn(t.getProgramInfoLog(this.program));
        t.deleteShader(u), t.deleteShader(f), (this.uniformLocations = new Map());
        let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
        for (let g = 0; g < d; g++) {
          let _ = t.getActiveUniform(this.program, g);
          this.uniformLocations.set(_, t.getUniformLocation(this.program, _.name));
          let y = _.name.match(/(\w+)/g);
          (_.uniformName = y[0]),
            y.length === 3
              ? ((_.isStructArray = !0), (_.structIndex = Number(y[1])), (_.structProperty = y[2]))
              : y.length === 2 && isNaN(Number(y[1])) && ((_.isStruct = !0), (_.structProperty = y[1]));
        }
        this.attributeLocations = new Map();
        let m = [],
          p = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
        for (let g = 0; g < p; g++) {
          let _ = t.getActiveAttrib(this.program, g),
            y = t.getAttribLocation(this.program, _.name);
          (m[y] = _.name), this.attributeLocations.set(_, y);
        }
        this.attributeOrder = m.join("");
      }
      setBlendFunc(t, e, r, s) {
        (this.blendFunc.src = t), (this.blendFunc.dst = e), (this.blendFunc.srcAlpha = r), (this.blendFunc.dstAlpha = s), t && (this.transparent = !0);
      }
      setBlendEquation(t, e) {
        (this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
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
      use({ flipFaces: t = !1 } = {}) {
        let e = -1;
        this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), (this.gl.renderer.currentProgram = this.id)),
          this.uniformLocations.forEach((s, n) => {
            let a = n.uniformName,
              o = this.uniforms[a];
            if (
              (n.isStruct && ((o = o[n.structProperty]), (a += `.${n.structProperty}`)),
              n.isStructArray && ((o = o[n.structIndex][n.structProperty]), (a += `[${n.structIndex}].${n.structProperty}`)),
              !o)
            )
              return rs(`Active uniform ${a} has not been supplied`);
            if (o && o.value === void 0) return rs(`${a} uniform is missing a value parameter`);
            if (o.value.texture) return (e = e + 1), o.value.update(e), Sr(this.gl, n.type, s, e);
            if (o.value.length && o.value[0].texture) {
              let h = [];
              return (
                o.value.forEach((l) => {
                  (e = e + 1), l.update(e), h.push(e);
                }),
                Sr(this.gl, n.type, s, h)
              );
            }
            Sr(this.gl, n.type, s, o.value);
          }),
          this.applyState(),
          t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
      }
      remove() {
        this.gl.deleteProgram(this.program);
      }
    };
  function Sr(i, t, e, r) {
    r = r.length ? Ka(r) : r;
    let s = i.renderer.state.uniformLocations.get(e);
    if (r.length)
      if (s === void 0 || s.length !== r.length) i.renderer.state.uniformLocations.set(e, r.slice(0));
      else {
        if (Za(s, r)) return;
        s.set ? s.set(r) : Ja(s, r), i.renderer.state.uniformLocations.set(e, s);
      }
    else {
      if (s === r) return;
      i.renderer.state.uniformLocations.set(e, r);
    }
    switch (t) {
      case 5126:
        return r.length ? i.uniform1fv(e, r) : i.uniform1f(e, r);
      case 35664:
        return i.uniform2fv(e, r);
      case 35665:
        return i.uniform3fv(e, r);
      case 35666:
        return i.uniform4fv(e, r);
      case 35670:
      case 5124:
      case 35678:
      case 35680:
        return r.length ? i.uniform1iv(e, r) : i.uniform1i(e, r);
      case 35671:
      case 35667:
        return i.uniform2iv(e, r);
      case 35672:
      case 35668:
        return i.uniform3iv(e, r);
      case 35673:
      case 35669:
        return i.uniform4iv(e, r);
      case 35674:
        return i.uniformMatrix2fv(e, !1, r);
      case 35675:
        return i.uniformMatrix3fv(e, !1, r);
      case 35676:
        return i.uniformMatrix4fv(e, !1, r);
    }
  }
  function $a(i) {
    let t = i.split(`
`);
    for (let e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
    return t.join(`
`);
  }
  function Ka(i) {
    let t = i.length,
      e = i[0].length;
    if (e === void 0) return i;
    let r = t * e,
      s = es[r];
    s || (es[r] = s = new Float32Array(r));
    for (let n = 0; n < t; n++) s.set(i[n], n * e);
    return s;
  }
  function Za(i, t) {
    if (i.length !== t.length) return !1;
    for (let e = 0, r = i.length; e < r; e++) if (i[e] !== t[e]) return !1;
    return !0;
  }
  function Ja(i, t) {
    for (let e = 0, r = i.length; e < r; e++) i[e] = t[e];
  }
  var Cr = 0;
  function rs(i) {
    Cr > 100 || (console.warn(i), Cr++, Cr > 100 && console.warn("More than 100 program warnings - stopping logs."));
  }
  var Or = new A(),
    to = 1,
    Ge = class {
      constructor({
        canvas: t = document.createElement("canvas"),
        width: e = 300,
        height: r = 150,
        dpr: s = 1,
        alpha: n = !1,
        depth: a = !0,
        stencil: o = !1,
        antialias: h = !1,
        premultipliedAlpha: l = !1,
        preserveDrawingBuffer: c = !1,
        powerPreference: u = "default",
        autoClear: f = !0,
        webgl: d = 2,
      } = {}) {
        let m = { alpha: n, depth: a, stencil: o, antialias: h, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u };
        (this.dpr = s),
          (this.alpha = n),
          (this.color = !0),
          (this.depth = a),
          (this.stencil = o),
          (this.premultipliedAlpha = l),
          (this.autoClear = f),
          (this.id = to++),
          d === 2 && (this.gl = t.getContext("webgl2", m)),
          (this.isWebgl2 = !!this.gl),
          this.gl || (this.gl = t.getContext("webgl", m)),
          this.gl || console.error("unable to create webgl context"),
          (this.gl.renderer = this),
          this.setSize(e, r),
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
      setSize(t, e) {
        (this.width = t),
          (this.height = e),
          (this.gl.canvas.width = t * this.dpr),
          (this.gl.canvas.height = e * this.dpr),
          Object.assign(this.gl.canvas.style, { width: t + "px", height: e + "px" });
      }
      setViewport(t, e) {
        (this.state.viewport.width === t && this.state.viewport.height === e) ||
          ((this.state.viewport.width = t), (this.state.viewport.height = e), this.gl.viewport(0, 0, t, e));
      }
      enable(t) {
        this.state[t] !== !0 && (this.gl.enable(t), (this.state[t] = !0));
      }
      disable(t) {
        this.state[t] !== !1 && (this.gl.disable(t), (this.state[t] = !1));
      }
      setBlendFunc(t, e, r, s) {
        (this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === r && this.state.blendFunc.dstAlpha === s) ||
          ((this.state.blendFunc.src = t),
          (this.state.blendFunc.dst = e),
          (this.state.blendFunc.srcAlpha = r),
          (this.state.blendFunc.dstAlpha = s),
          r !== void 0 ? this.gl.blendFuncSeparate(t, e, r, s) : this.gl.blendFunc(t, e));
      }
      setBlendEquation(t, e) {
        (t = t || this.gl.FUNC_ADD),
          !(this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) &&
            ((this.state.blendEquation.modeRGB = t),
            (this.state.blendEquation.modeAlpha = e),
            e !== void 0 ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t));
      }
      setCullFace(t) {
        this.state.cullFace !== t && ((this.state.cullFace = t), this.gl.cullFace(t));
      }
      setFrontFace(t) {
        this.state.frontFace !== t && ((this.state.frontFace = t), this.gl.frontFace(t));
      }
      setDepthMask(t) {
        this.state.depthMask !== t && ((this.state.depthMask = t), this.gl.depthMask(t));
      }
      setDepthFunc(t) {
        this.state.depthFunc !== t && ((this.state.depthFunc = t), this.gl.depthFunc(t));
      }
      activeTexture(t) {
        this.state.activeTextureUnit !== t && ((this.state.activeTextureUnit = t), this.gl.activeTexture(this.gl.TEXTURE0 + t));
      }
      bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
        this.state.framebuffer !== e && ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
      }
      getExtension(t, e, r) {
        return e && this.gl[e]
          ? this.gl[e].bind(this.gl)
          : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)),
            e ? (this.extensions[t] ? this.extensions[t][r].bind(this.extensions[t]) : null) : this.extensions[t]);
      }
      sortOpaque(t, e) {
        return t.renderOrder !== e.renderOrder
          ? t.renderOrder - e.renderOrder
          : t.program.id !== e.program.id
          ? t.program.id - e.program.id
          : t.zDepth !== e.zDepth
          ? t.zDepth - e.zDepth
          : e.id - t.id;
      }
      sortTransparent(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id;
      }
      sortUI(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id;
      }
      getRenderList({ scene: t, camera: e, frustumCull: r, sort: s }) {
        let n = [];
        if (
          (e && r && e.updateFrustum(),
          t.traverse((a) => {
            if (!a.visible) return !0;
            !a.draw || (r && a.frustumCulled && e && !e.frustumIntersectsMesh(a)) || n.push(a);
          }),
          s)
        ) {
          let a = [],
            o = [],
            h = [];
          n.forEach((l) => {
            l.program.transparent ? (l.program.depthTest ? o.push(l) : h.push(l)) : a.push(l),
              (l.zDepth = 0),
              !(l.renderOrder !== 0 || !l.program.depthTest || !e) &&
                (l.worldMatrix.getTranslation(Or), Or.applyMatrix4(e.projectionViewMatrix), (l.zDepth = Or.z));
          }),
            a.sort(this.sortOpaque),
            o.sort(this.sortTransparent),
            h.sort(this.sortUI),
            (n = a.concat(o, h));
        }
        return n;
      }
      render({ scene: t, camera: e, target: r = null, update: s = !0, sort: n = !0, frustumCull: a = !0, clear: o }) {
        r === null
          ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr))
          : (this.bindFramebuffer(r), this.setViewport(r.width, r.height)),
          (o || (this.autoClear && o !== !1)) &&
            (this.depth && (!r || r.depth) && (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
            this.gl.clear(
              (this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0),
            )),
          s && t.updateMatrixWorld(),
          e && e.updateMatrixWorld(),
          this.getRenderList({ scene: t, camera: e, frustumCull: a, sort: n }).forEach((l) => {
            l.draw({ camera: e });
          });
      }
    };
  function qe(i, t) {
    return (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[3]), i;
  }
  function Xe(i, t, e, r, s) {
    return (i[0] = t), (i[1] = e), (i[2] = r), (i[3] = s), i;
  }
  function Ye(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = e * e + r * r + s * s + n * n;
    return a > 0 && (a = 1 / Math.sqrt(a)), (i[0] = e * a), (i[1] = r * a), (i[2] = s * a), (i[3] = n * a), i;
  }
  function is(i, t) {
    return i[0] * t[0] + i[1] * t[1] + i[2] * t[2] + i[3] * t[3];
  }
  function ss(i) {
    return (i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 1), i;
  }
  function ns(i, t, e) {
    e = e * 0.5;
    let r = Math.sin(e);
    return (i[0] = r * t[0]), (i[1] = r * t[1]), (i[2] = r * t[2]), (i[3] = Math.cos(e)), i;
  }
  function Dr(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = e[0],
      h = e[1],
      l = e[2],
      c = e[3];
    return (
      (i[0] = r * c + a * o + s * l - n * h),
      (i[1] = s * c + a * h + n * o - r * l),
      (i[2] = n * c + a * l + r * h - s * o),
      (i[3] = a * c - r * o - s * h - n * l),
      i
    );
  }
  function as(i, t, e) {
    e *= 0.5;
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = Math.sin(e),
      h = Math.cos(e);
    return (i[0] = r * h + a * o), (i[1] = s * h + n * o), (i[2] = n * h - s * o), (i[3] = a * h - r * o), i;
  }
  function os(i, t, e) {
    e *= 0.5;
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = Math.sin(e),
      h = Math.cos(e);
    return (i[0] = r * h - n * o), (i[1] = s * h + a * o), (i[2] = n * h + r * o), (i[3] = a * h - s * o), i;
  }
  function hs(i, t, e) {
    e *= 0.5;
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = Math.sin(e),
      h = Math.cos(e);
    return (i[0] = r * h + s * o), (i[1] = s * h - r * o), (i[2] = n * h + a * o), (i[3] = a * h - n * o), i;
  }
  function ls(i, t, e, r) {
    let s = t[0],
      n = t[1],
      a = t[2],
      o = t[3],
      h = e[0],
      l = e[1],
      c = e[2],
      u = e[3],
      f,
      d,
      m,
      p,
      g;
    return (
      (d = s * h + n * l + a * c + o * u),
      d < 0 && ((d = -d), (h = -h), (l = -l), (c = -c), (u = -u)),
      1 - d > 1e-6 ? ((f = Math.acos(d)), (m = Math.sin(f)), (p = Math.sin((1 - r) * f) / m), (g = Math.sin(r * f) / m)) : ((p = 1 - r), (g = r)),
      (i[0] = p * s + g * h),
      (i[1] = p * n + g * l),
      (i[2] = p * a + g * c),
      (i[3] = p * o + g * u),
      i
    );
  }
  function cs(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = e * e + r * r + s * s + n * n,
      o = a ? 1 / a : 0;
    return (i[0] = -e * o), (i[1] = -r * o), (i[2] = -s * o), (i[3] = n * o), i;
  }
  function us(i, t) {
    return (i[0] = -t[0]), (i[1] = -t[1]), (i[2] = -t[2]), (i[3] = t[3]), i;
  }
  function fs(i, t) {
    let e = t[0] + t[4] + t[8],
      r;
    if (e > 0) (r = Math.sqrt(e + 1)), (i[3] = 0.5 * r), (r = 0.5 / r), (i[0] = (t[5] - t[7]) * r), (i[1] = (t[6] - t[2]) * r), (i[2] = (t[1] - t[3]) * r);
    else {
      let s = 0;
      t[4] > t[0] && (s = 1), t[8] > t[s * 3 + s] && (s = 2);
      let n = (s + 1) % 3,
        a = (s + 2) % 3;
      (r = Math.sqrt(t[s * 3 + s] - t[n * 3 + n] - t[a * 3 + a] + 1)),
        (i[s] = 0.5 * r),
        (r = 0.5 / r),
        (i[3] = (t[n * 3 + a] - t[a * 3 + n]) * r),
        (i[n] = (t[n * 3 + s] + t[s * 3 + n]) * r),
        (i[a] = (t[a * 3 + s] + t[s * 3 + a]) * r);
    }
    return i;
  }
  function ds(i, t, e = "YXZ") {
    let r = Math.sin(t[0] * 0.5),
      s = Math.cos(t[0] * 0.5),
      n = Math.sin(t[1] * 0.5),
      a = Math.cos(t[1] * 0.5),
      o = Math.sin(t[2] * 0.5),
      h = Math.cos(t[2] * 0.5);
    return (
      e === "XYZ"
        ? ((i[0] = r * a * h + s * n * o), (i[1] = s * n * h - r * a * o), (i[2] = s * a * o + r * n * h), (i[3] = s * a * h - r * n * o))
        : e === "YXZ"
        ? ((i[0] = r * a * h + s * n * o), (i[1] = s * n * h - r * a * o), (i[2] = s * a * o - r * n * h), (i[3] = s * a * h + r * n * o))
        : e === "ZXY"
        ? ((i[0] = r * a * h - s * n * o), (i[1] = s * n * h + r * a * o), (i[2] = s * a * o + r * n * h), (i[3] = s * a * h - r * n * o))
        : e === "ZYX"
        ? ((i[0] = r * a * h - s * n * o), (i[1] = s * n * h + r * a * o), (i[2] = s * a * o - r * n * h), (i[3] = s * a * h + r * n * o))
        : e === "YZX"
        ? ((i[0] = r * a * h + s * n * o), (i[1] = s * n * h + r * a * o), (i[2] = s * a * o - r * n * h), (i[3] = s * a * h - r * n * o))
        : e === "XZY" && ((i[0] = r * a * h - s * n * o), (i[1] = s * n * h - r * a * o), (i[2] = s * a * o + r * n * h), (i[3] = s * a * h + r * n * o)),
      i
    );
  }
  var ps = qe,
    ms = Xe;
  var gs = is;
  var _s = Ye;
  var ft = class extends Array {
    constructor(t = 0, e = 0, r = 0, s = 1) {
      super(t, e, r, s);
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
    set x(t) {
      (this[0] = t), this.onChange();
    }
    set y(t) {
      (this[1] = t), this.onChange();
    }
    set z(t) {
      (this[2] = t), this.onChange();
    }
    set w(t) {
      (this[3] = t), this.onChange();
    }
    identity() {
      return ss(this), this.onChange(), this;
    }
    set(t, e, r, s) {
      return t.length ? this.copy(t) : (ms(this, t, e, r, s), this.onChange(), this);
    }
    rotateX(t) {
      return as(this, this, t), this.onChange(), this;
    }
    rotateY(t) {
      return os(this, this, t), this.onChange(), this;
    }
    rotateZ(t) {
      return hs(this, this, t), this.onChange(), this;
    }
    inverse(t = this) {
      return cs(this, t), this.onChange(), this;
    }
    conjugate(t = this) {
      return us(this, t), this.onChange(), this;
    }
    copy(t) {
      return ps(this, t), this.onChange(), this;
    }
    normalize(t = this) {
      return _s(this, t), this.onChange(), this;
    }
    multiply(t, e) {
      return e ? Dr(this, t, e) : Dr(this, this, t), this.onChange(), this;
    }
    dot(t) {
      return gs(this, t);
    }
    fromMatrix3(t) {
      return fs(this, t), this.onChange(), this;
    }
    fromEuler(t) {
      return ds(this, t, t.order), this;
    }
    fromAxisAngle(t, e) {
      return ns(this, t, e), this;
    }
    slerp(t, e) {
      return ls(this, this, t, e), this;
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), (this[3] = t[e + 3]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t;
    }
  };
  var eo = 1e-6;
  function xs(i, t) {
    return (
      (i[0] = t[0]),
      (i[1] = t[1]),
      (i[2] = t[2]),
      (i[3] = t[3]),
      (i[4] = t[4]),
      (i[5] = t[5]),
      (i[6] = t[6]),
      (i[7] = t[7]),
      (i[8] = t[8]),
      (i[9] = t[9]),
      (i[10] = t[10]),
      (i[11] = t[11]),
      (i[12] = t[12]),
      (i[13] = t[13]),
      (i[14] = t[14]),
      (i[15] = t[15]),
      i
    );
  }
  function ys(i, t, e, r, s, n, a, o, h, l, c, u, f, d, m, p, g) {
    return (
      (i[0] = t),
      (i[1] = e),
      (i[2] = r),
      (i[3] = s),
      (i[4] = n),
      (i[5] = a),
      (i[6] = o),
      (i[7] = h),
      (i[8] = l),
      (i[9] = c),
      (i[10] = u),
      (i[11] = f),
      (i[12] = d),
      (i[13] = m),
      (i[14] = p),
      (i[15] = g),
      i
    );
  }
  function ws(i) {
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
  function vs(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      c = t[8],
      u = t[9],
      f = t[10],
      d = t[11],
      m = t[12],
      p = t[13],
      g = t[14],
      _ = t[15],
      y = e * o - r * a,
      x = e * h - s * a,
      w = e * l - n * a,
      M = r * h - s * o,
      v = r * l - n * o,
      T = s * l - n * h,
      E = c * p - u * m,
      b = c * g - f * m,
      F = c * _ - d * m,
      R = u * g - f * p,
      S = u * _ - d * p,
      C = f * _ - d * g,
      P = y * C - x * S + w * R + M * F - v * b + T * E;
    return P
      ? ((P = 1 / P),
        (i[0] = (o * C - h * S + l * R) * P),
        (i[1] = (s * S - r * C - n * R) * P),
        (i[2] = (p * T - g * v + _ * M) * P),
        (i[3] = (f * v - u * T - d * M) * P),
        (i[4] = (h * F - a * C - l * b) * P),
        (i[5] = (e * C - s * F + n * b) * P),
        (i[6] = (g * w - m * T - _ * x) * P),
        (i[7] = (c * T - f * w + d * x) * P),
        (i[8] = (a * S - o * F + l * E) * P),
        (i[9] = (r * F - e * S - n * E) * P),
        (i[10] = (m * v - p * w + _ * y) * P),
        (i[11] = (u * w - c * v - d * y) * P),
        (i[12] = (o * b - a * R - h * E) * P),
        (i[13] = (e * R - r * b + s * E) * P),
        (i[14] = (p * x - m * M - g * y) * P),
        (i[15] = (c * M - u * x + f * y) * P),
        i)
      : null;
  }
  function Ms(i) {
    let t = i[0],
      e = i[1],
      r = i[2],
      s = i[3],
      n = i[4],
      a = i[5],
      o = i[6],
      h = i[7],
      l = i[8],
      c = i[9],
      u = i[10],
      f = i[11],
      d = i[12],
      m = i[13],
      p = i[14],
      g = i[15],
      _ = t * a - e * n,
      y = t * o - r * n,
      x = t * h - s * n,
      w = e * o - r * a,
      M = e * h - s * a,
      v = r * h - s * o,
      T = l * m - c * d,
      E = l * p - u * d,
      b = l * g - f * d,
      F = c * p - u * m,
      R = c * g - f * m,
      S = u * g - f * p;
    return _ * S - y * R + x * F + w * b - M * E + v * T;
  }
  function zr(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      f = t[9],
      d = t[10],
      m = t[11],
      p = t[12],
      g = t[13],
      _ = t[14],
      y = t[15],
      x = e[0],
      w = e[1],
      M = e[2],
      v = e[3];
    return (
      (i[0] = x * r + w * o + M * u + v * p),
      (i[1] = x * s + w * h + M * f + v * g),
      (i[2] = x * n + w * l + M * d + v * _),
      (i[3] = x * a + w * c + M * m + v * y),
      (x = e[4]),
      (w = e[5]),
      (M = e[6]),
      (v = e[7]),
      (i[4] = x * r + w * o + M * u + v * p),
      (i[5] = x * s + w * h + M * f + v * g),
      (i[6] = x * n + w * l + M * d + v * _),
      (i[7] = x * a + w * c + M * m + v * y),
      (x = e[8]),
      (w = e[9]),
      (M = e[10]),
      (v = e[11]),
      (i[8] = x * r + w * o + M * u + v * p),
      (i[9] = x * s + w * h + M * f + v * g),
      (i[10] = x * n + w * l + M * d + v * _),
      (i[11] = x * a + w * c + M * m + v * y),
      (x = e[12]),
      (w = e[13]),
      (M = e[14]),
      (v = e[15]),
      (i[12] = x * r + w * o + M * u + v * p),
      (i[13] = x * s + w * h + M * f + v * g),
      (i[14] = x * n + w * l + M * d + v * _),
      (i[15] = x * a + w * c + M * m + v * y),
      i
    );
  }
  function Ts(i, t, e) {
    let r = e[0],
      s = e[1],
      n = e[2],
      a,
      o,
      h,
      l,
      c,
      u,
      f,
      d,
      m,
      p,
      g,
      _;
    return (
      t === i
        ? ((i[12] = t[0] * r + t[4] * s + t[8] * n + t[12]),
          (i[13] = t[1] * r + t[5] * s + t[9] * n + t[13]),
          (i[14] = t[2] * r + t[6] * s + t[10] * n + t[14]),
          (i[15] = t[3] * r + t[7] * s + t[11] * n + t[15]))
        : ((a = t[0]),
          (o = t[1]),
          (h = t[2]),
          (l = t[3]),
          (c = t[4]),
          (u = t[5]),
          (f = t[6]),
          (d = t[7]),
          (m = t[8]),
          (p = t[9]),
          (g = t[10]),
          (_ = t[11]),
          (i[0] = a),
          (i[1] = o),
          (i[2] = h),
          (i[3] = l),
          (i[4] = c),
          (i[5] = u),
          (i[6] = f),
          (i[7] = d),
          (i[8] = m),
          (i[9] = p),
          (i[10] = g),
          (i[11] = _),
          (i[12] = a * r + c * s + m * n + t[12]),
          (i[13] = o * r + u * s + p * n + t[13]),
          (i[14] = h * r + f * s + g * n + t[14]),
          (i[15] = l * r + d * s + _ * n + t[15])),
      i
    );
  }
  function bs(i, t, e) {
    let r = e[0],
      s = e[1],
      n = e[2];
    return (
      (i[0] = t[0] * r),
      (i[1] = t[1] * r),
      (i[2] = t[2] * r),
      (i[3] = t[3] * r),
      (i[4] = t[4] * s),
      (i[5] = t[5] * s),
      (i[6] = t[6] * s),
      (i[7] = t[7] * s),
      (i[8] = t[8] * n),
      (i[9] = t[9] * n),
      (i[10] = t[10] * n),
      (i[11] = t[11] * n),
      (i[12] = t[12]),
      (i[13] = t[13]),
      (i[14] = t[14]),
      (i[15] = t[15]),
      i
    );
  }
  function Es(i, t, e, r) {
    let s = r[0],
      n = r[1],
      a = r[2],
      o = Math.hypot(s, n, a),
      h,
      l,
      c,
      u,
      f,
      d,
      m,
      p,
      g,
      _,
      y,
      x,
      w,
      M,
      v,
      T,
      E,
      b,
      F,
      R,
      S,
      C,
      P,
      L;
    return Math.abs(o) < eo
      ? null
      : ((o = 1 / o),
        (s *= o),
        (n *= o),
        (a *= o),
        (h = Math.sin(e)),
        (l = Math.cos(e)),
        (c = 1 - l),
        (u = t[0]),
        (f = t[1]),
        (d = t[2]),
        (m = t[3]),
        (p = t[4]),
        (g = t[5]),
        (_ = t[6]),
        (y = t[7]),
        (x = t[8]),
        (w = t[9]),
        (M = t[10]),
        (v = t[11]),
        (T = s * s * c + l),
        (E = n * s * c + a * h),
        (b = a * s * c - n * h),
        (F = s * n * c - a * h),
        (R = n * n * c + l),
        (S = a * n * c + s * h),
        (C = s * a * c + n * h),
        (P = n * a * c - s * h),
        (L = a * a * c + l),
        (i[0] = u * T + p * E + x * b),
        (i[1] = f * T + g * E + w * b),
        (i[2] = d * T + _ * E + M * b),
        (i[3] = m * T + y * E + v * b),
        (i[4] = u * F + p * R + x * S),
        (i[5] = f * F + g * R + w * S),
        (i[6] = d * F + _ * R + M * S),
        (i[7] = m * F + y * R + v * S),
        (i[8] = u * C + p * P + x * L),
        (i[9] = f * C + g * P + w * L),
        (i[10] = d * C + _ * P + M * L),
        (i[11] = m * C + y * P + v * L),
        t !== i && ((i[12] = t[12]), (i[13] = t[13]), (i[14] = t[14]), (i[15] = t[15])),
        i);
  }
  function As(i, t) {
    return (i[0] = t[12]), (i[1] = t[13]), (i[2] = t[14]), i;
  }
  function Lr(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[4],
      a = t[5],
      o = t[6],
      h = t[8],
      l = t[9],
      c = t[10];
    return (i[0] = Math.hypot(e, r, s)), (i[1] = Math.hypot(n, a, o)), (i[2] = Math.hypot(h, l, c)), i;
  }
  function Ps(i) {
    let t = i[0],
      e = i[1],
      r = i[2],
      s = i[4],
      n = i[5],
      a = i[6],
      o = i[8],
      h = i[9],
      l = i[10],
      c = t * t + e * e + r * r,
      u = s * s + n * n + a * a,
      f = o * o + h * h + l * l;
    return Math.sqrt(Math.max(c, u, f));
  }
  var Fs = (function () {
    let i = [0, 0, 0];
    return function (t, e) {
      let r = i;
      Lr(r, e);
      let s = 1 / r[0],
        n = 1 / r[1],
        a = 1 / r[2],
        o = e[0] * s,
        h = e[1] * n,
        l = e[2] * a,
        c = e[4] * s,
        u = e[5] * n,
        f = e[6] * a,
        d = e[8] * s,
        m = e[9] * n,
        p = e[10] * a,
        g = o + u + p,
        _ = 0;
      return (
        g > 0
          ? ((_ = Math.sqrt(g + 1) * 2), (t[3] = 0.25 * _), (t[0] = (f - m) / _), (t[1] = (d - l) / _), (t[2] = (h - c) / _))
          : o > u && o > p
          ? ((_ = Math.sqrt(1 + o - u - p) * 2), (t[3] = (f - m) / _), (t[0] = 0.25 * _), (t[1] = (h + c) / _), (t[2] = (d + l) / _))
          : u > p
          ? ((_ = Math.sqrt(1 + u - o - p) * 2), (t[3] = (d - l) / _), (t[0] = (h + c) / _), (t[1] = 0.25 * _), (t[2] = (f + m) / _))
          : ((_ = Math.sqrt(1 + p - o - u) * 2), (t[3] = (h - c) / _), (t[0] = (d + l) / _), (t[1] = (f + m) / _), (t[2] = 0.25 * _)),
        t
      );
    };
  })();
  function Rs(i, t, e, r) {
    let s = t[0],
      n = t[1],
      a = t[2],
      o = t[3],
      h = s + s,
      l = n + n,
      c = a + a,
      u = s * h,
      f = s * l,
      d = s * c,
      m = n * l,
      p = n * c,
      g = a * c,
      _ = o * h,
      y = o * l,
      x = o * c,
      w = r[0],
      M = r[1],
      v = r[2];
    return (
      (i[0] = (1 - (m + g)) * w),
      (i[1] = (f + x) * w),
      (i[2] = (d - y) * w),
      (i[3] = 0),
      (i[4] = (f - x) * M),
      (i[5] = (1 - (u + g)) * M),
      (i[6] = (p + _) * M),
      (i[7] = 0),
      (i[8] = (d + y) * v),
      (i[9] = (p - _) * v),
      (i[10] = (1 - (u + m)) * v),
      (i[11] = 0),
      (i[12] = e[0]),
      (i[13] = e[1]),
      (i[14] = e[2]),
      (i[15] = 1),
      i
    );
  }
  function Ss(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = e + e,
      o = r + r,
      h = s + s,
      l = e * a,
      c = r * a,
      u = r * o,
      f = s * a,
      d = s * o,
      m = s * h,
      p = n * a,
      g = n * o,
      _ = n * h;
    return (
      (i[0] = 1 - u - m),
      (i[1] = c + _),
      (i[2] = f - g),
      (i[3] = 0),
      (i[4] = c - _),
      (i[5] = 1 - l - m),
      (i[6] = d + p),
      (i[7] = 0),
      (i[8] = f + g),
      (i[9] = d - p),
      (i[10] = 1 - l - u),
      (i[11] = 0),
      (i[12] = 0),
      (i[13] = 0),
      (i[14] = 0),
      (i[15] = 1),
      i
    );
  }
  function Cs(i, t, e, r, s) {
    let n = 1 / Math.tan(t / 2),
      a = 1 / (r - s);
    return (
      (i[0] = n / e),
      (i[1] = 0),
      (i[2] = 0),
      (i[3] = 0),
      (i[4] = 0),
      (i[5] = n),
      (i[6] = 0),
      (i[7] = 0),
      (i[8] = 0),
      (i[9] = 0),
      (i[10] = (s + r) * a),
      (i[11] = -1),
      (i[12] = 0),
      (i[13] = 0),
      (i[14] = 2 * s * r * a),
      (i[15] = 0),
      i
    );
  }
  function Os(i, t, e, r, s, n, a) {
    let o = 1 / (t - e),
      h = 1 / (r - s),
      l = 1 / (n - a);
    return (
      (i[0] = -2 * o),
      (i[1] = 0),
      (i[2] = 0),
      (i[3] = 0),
      (i[4] = 0),
      (i[5] = -2 * h),
      (i[6] = 0),
      (i[7] = 0),
      (i[8] = 0),
      (i[9] = 0),
      (i[10] = 2 * l),
      (i[11] = 0),
      (i[12] = (t + e) * o),
      (i[13] = (s + r) * h),
      (i[14] = (a + n) * l),
      (i[15] = 1),
      i
    );
  }
  function Ds(i, t, e, r) {
    let s = t[0],
      n = t[1],
      a = t[2],
      o = r[0],
      h = r[1],
      l = r[2],
      c = s - e[0],
      u = n - e[1],
      f = a - e[2],
      d = c * c + u * u + f * f;
    d === 0 ? (f = 1) : ((d = 1 / Math.sqrt(d)), (c *= d), (u *= d), (f *= d));
    let m = h * f - l * u,
      p = l * c - o * f,
      g = o * u - h * c;
    return (
      (d = m * m + p * p + g * g),
      d === 0 && (l ? (o += 1e-6) : h ? (l += 1e-6) : (h += 1e-6), (m = h * f - l * u), (p = l * c - o * f), (g = o * u - h * c), (d = m * m + p * p + g * g)),
      (d = 1 / Math.sqrt(d)),
      (m *= d),
      (p *= d),
      (g *= d),
      (i[0] = m),
      (i[1] = p),
      (i[2] = g),
      (i[3] = 0),
      (i[4] = u * g - f * p),
      (i[5] = f * m - c * g),
      (i[6] = c * p - u * m),
      (i[7] = 0),
      (i[8] = c),
      (i[9] = u),
      (i[10] = f),
      (i[11] = 0),
      (i[12] = s),
      (i[13] = n),
      (i[14] = a),
      (i[15] = 1),
      i
    );
  }
  var N = class extends Array {
    constructor(t = 1, e = 0, r = 0, s = 0, n = 0, a = 1, o = 0, h = 0, l = 0, c = 0, u = 1, f = 0, d = 0, m = 0, p = 0, g = 1) {
      super(t, e, r, s, n, a, o, h, l, c, u, f, d, m, p, g);
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
    set x(t) {
      this[12] = t;
    }
    set y(t) {
      this[13] = t;
    }
    set z(t) {
      this[14] = t;
    }
    set w(t) {
      this[15] = t;
    }
    set(t, e, r, s, n, a, o, h, l, c, u, f, d, m, p, g) {
      return t.length ? this.copy(t) : (ys(this, t, e, r, s, n, a, o, h, l, c, u, f, d, m, p, g), this);
    }
    translate(t, e = this) {
      return Ts(this, e, t), this;
    }
    rotate(t, e, r = this) {
      return Es(this, r, t, e), this;
    }
    scale(t, e = this) {
      return bs(this, e, typeof t == "number" ? [t, t, t] : t), this;
    }
    multiply(t, e) {
      return e ? zr(this, t, e) : zr(this, this, t), this;
    }
    identity() {
      return ws(this), this;
    }
    copy(t) {
      return xs(this, t), this;
    }
    fromPerspective({ fov: t, aspect: e, near: r, far: s } = {}) {
      return Cs(this, t, e, r, s), this;
    }
    fromOrthogonal({ left: t, right: e, bottom: r, top: s, near: n, far: a }) {
      return Os(this, t, e, r, s, n, a), this;
    }
    fromQuaternion(t) {
      return Ss(this, t), this;
    }
    setPosition(t) {
      return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
    }
    inverse(t = this) {
      return vs(this, t), this;
    }
    compose(t, e, r) {
      return Rs(this, t, e, r), this;
    }
    getRotation(t) {
      return Fs(t, this), this;
    }
    getTranslation(t) {
      return As(t, this), this;
    }
    getScaling(t) {
      return Lr(t, this), this;
    }
    getMaxScaleOnAxis() {
      return Ps(this);
    }
    lookAt(t, e, r) {
      return Ds(this, t, e, r), this;
    }
    determinant() {
      return Ms(this);
    }
    fromArray(t, e = 0) {
      return (
        (this[0] = t[e]),
        (this[1] = t[e + 1]),
        (this[2] = t[e + 2]),
        (this[3] = t[e + 3]),
        (this[4] = t[e + 4]),
        (this[5] = t[e + 5]),
        (this[6] = t[e + 6]),
        (this[7] = t[e + 7]),
        (this[8] = t[e + 8]),
        (this[9] = t[e + 9]),
        (this[10] = t[e + 10]),
        (this[11] = t[e + 11]),
        (this[12] = t[e + 12]),
        (this[13] = t[e + 13]),
        (this[14] = t[e + 14]),
        (this[15] = t[e + 15]),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this[0]),
        (t[e + 1] = this[1]),
        (t[e + 2] = this[2]),
        (t[e + 3] = this[3]),
        (t[e + 4] = this[4]),
        (t[e + 5] = this[5]),
        (t[e + 6] = this[6]),
        (t[e + 7] = this[7]),
        (t[e + 8] = this[8]),
        (t[e + 9] = this[9]),
        (t[e + 10] = this[10]),
        (t[e + 11] = this[11]),
        (t[e + 12] = this[12]),
        (t[e + 13] = this[13]),
        (t[e + 14] = this[14]),
        (t[e + 15] = this[15]),
        t
      );
    }
  };
  function zs(i, t, e = "YXZ") {
    return (
      e === "XYZ"
        ? ((i[1] = Math.asin(Math.min(Math.max(t[8], -1), 1))),
          Math.abs(t[8]) < 0.99999 ? ((i[0] = Math.atan2(-t[9], t[10])), (i[2] = Math.atan2(-t[4], t[0]))) : ((i[0] = Math.atan2(t[6], t[5])), (i[2] = 0)))
        : e === "YXZ"
        ? ((i[0] = Math.asin(-Math.min(Math.max(t[9], -1), 1))),
          Math.abs(t[9]) < 0.99999 ? ((i[1] = Math.atan2(t[8], t[10])), (i[2] = Math.atan2(t[1], t[5]))) : ((i[1] = Math.atan2(-t[2], t[0])), (i[2] = 0)))
        : e === "ZXY"
        ? ((i[0] = Math.asin(Math.min(Math.max(t[6], -1), 1))),
          Math.abs(t[6]) < 0.99999 ? ((i[1] = Math.atan2(-t[2], t[10])), (i[2] = Math.atan2(-t[4], t[5]))) : ((i[1] = 0), (i[2] = Math.atan2(t[1], t[0]))))
        : e === "ZYX"
        ? ((i[1] = Math.asin(-Math.min(Math.max(t[2], -1), 1))),
          Math.abs(t[2]) < 0.99999 ? ((i[0] = Math.atan2(t[6], t[10])), (i[2] = Math.atan2(t[1], t[0]))) : ((i[0] = 0), (i[2] = Math.atan2(-t[4], t[5]))))
        : e === "YZX"
        ? ((i[2] = Math.asin(Math.min(Math.max(t[1], -1), 1))),
          Math.abs(t[1]) < 0.99999 ? ((i[0] = Math.atan2(-t[9], t[5])), (i[1] = Math.atan2(-t[2], t[0]))) : ((i[0] = 0), (i[1] = Math.atan2(t[8], t[10]))))
        : e === "XZY" &&
          ((i[2] = Math.asin(-Math.min(Math.max(t[4], -1), 1))),
          Math.abs(t[4]) < 0.99999 ? ((i[0] = Math.atan2(t[6], t[5])), (i[1] = Math.atan2(t[8], t[0]))) : ((i[0] = Math.atan2(-t[9], t[10])), (i[1] = 0))),
      i
    );
  }
  var Ls = new N(),
    We = class extends Array {
      constructor(t = 0, e = t, r = t, s = "YXZ") {
        super(t, e, r);
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
      set x(t) {
        (this[0] = t), this.onChange();
      }
      set y(t) {
        (this[1] = t), this.onChange();
      }
      set z(t) {
        (this[2] = t), this.onChange();
      }
      set(t, e = t, r = t) {
        return t.length ? this.copy(t) : ((this[0] = t), (this[1] = e), (this[2] = r), this.onChange(), this);
      }
      copy(t) {
        return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this.onChange(), this;
      }
      reorder(t) {
        return (this.order = t), this.onChange(), this;
      }
      fromRotationMatrix(t, e = this.order) {
        return zs(this, t, e), this;
      }
      fromQuaternion(t, e = this.order) {
        return Ls.fromQuaternion(t), this.fromRotationMatrix(Ls, e);
      }
      toArray(t = [], e = 0) {
        return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
      }
    };
  var wt = class {
    constructor() {
      (this.parent = null),
        (this.children = []),
        (this.visible = !0),
        (this.matrix = new N()),
        (this.worldMatrix = new N()),
        (this.matrixAutoUpdate = !0),
        (this.position = new A()),
        (this.quaternion = new ft()),
        (this.scale = new A(1)),
        (this.rotation = new We()),
        (this.up = new A(0, 1, 0)),
        (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
        (this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion));
    }
    setParent(t, e = !0) {
      this.parent && t !== this.parent && this.parent.removeChild(this, !1), (this.parent = t), e && t && t.addChild(this, !1);
    }
    addChild(t, e = !0) {
      ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1);
    }
    removeChild(t, e = !0) {
      ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1);
    }
    updateMatrixWorld(t) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.worldMatrixNeedsUpdate || t) &&
          (this.parent === null ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix),
          (this.worldMatrixNeedsUpdate = !1),
          (t = !0));
      for (let e = 0, r = this.children.length; e < r; e++) this.children[e].updateMatrixWorld(t);
    }
    updateMatrix() {
      this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0);
    }
    traverse(t) {
      if (!t(this)) for (let e = 0, r = this.children.length; e < r; e++) this.children[e].traverse(t);
    }
    decompose() {
      this.matrix.getTranslation(this.position),
        this.matrix.getRotation(this.quaternion),
        this.matrix.getScaling(this.scale),
        this.rotation.fromQuaternion(this.quaternion);
    }
    lookAt(t, e = !1) {
      e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up),
        this.matrix.getRotation(this.quaternion),
        this.rotation.fromQuaternion(this.quaternion);
    }
  };
  var ro = new N(),
    io = new A(),
    so = new A(),
    Wt = class extends wt {
      constructor(t, { near: e = 0.1, far: r = 100, fov: s = 45, aspect: n = 1, left: a, right: o, bottom: h, top: l, zoom: c = 1 } = {}) {
        super();
        Object.assign(this, { near: e, far: r, fov: s, aspect: n, left: a, right: o, bottom: h, top: l, zoom: c }),
          (this.projectionMatrix = new N()),
          (this.viewMatrix = new N()),
          (this.projectionViewMatrix = new N()),
          (this.worldPosition = new A()),
          (this.type = a || o ? "orthographic" : "perspective"),
          this.type === "orthographic" ? this.orthographic() : this.perspective();
      }
      perspective({ near: t = this.near, far: e = this.far, fov: r = this.fov, aspect: s = this.aspect } = {}) {
        return (
          Object.assign(this, { near: t, far: e, fov: r, aspect: s }),
          this.projectionMatrix.fromPerspective({ fov: r * (Math.PI / 180), aspect: s, near: t, far: e }),
          (this.type = "perspective"),
          this
        );
      }
      orthographic({
        near: t = this.near,
        far: e = this.far,
        left: r = this.left,
        right: s = this.right,
        bottom: n = this.bottom,
        top: a = this.top,
        zoom: o = this.zoom,
      } = {}) {
        return (
          Object.assign(this, { near: t, far: e, left: r, right: s, bottom: n, top: a, zoom: o }),
          (r /= o),
          (s /= o),
          (n /= o),
          (a /= o),
          this.projectionMatrix.fromOrthogonal({ left: r, right: s, bottom: n, top: a, near: t, far: e }),
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
      lookAt(t) {
        return super.lookAt(t, !0), this;
      }
      project(t) {
        return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this;
      }
      unproject(t) {
        return t.applyMatrix4(ro.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this;
      }
      updateFrustum() {
        this.frustum || (this.frustum = [new A(), new A(), new A(), new A(), new A(), new A()]);
        let t = this.projectionViewMatrix;
        (this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12]),
          (this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12]),
          (this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13]),
          (this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13]),
          (this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14]),
          (this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14]);
        for (let e = 0; e < 6; e++) {
          let r = 1 / this.frustum[e].distance();
          this.frustum[e].multiply(r), (this.frustum[e].constant *= r);
        }
      }
      frustumIntersectsMesh(t) {
        if (
          !t.geometry.attributes.position ||
          ((!t.geometry.bounds || t.geometry.bounds.radius === 1 / 0) && t.geometry.computeBoundingSphere(), !t.geometry.bounds)
        )
          return !0;
        let e = io;
        e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
        let r = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
        return this.frustumIntersectsSphere(e, r);
      }
      frustumIntersectsSphere(t, e) {
        let r = so;
        for (let s = 0; s < 6; s++) {
          let n = this.frustum[s];
          if (r.copy(n).dot(t) + n.constant < -e) return !1;
        }
        return !0;
      }
    };
  function Is(i, t) {
    return (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[4]), (i[4] = t[5]), (i[5] = t[6]), (i[6] = t[8]), (i[7] = t[9]), (i[8] = t[10]), i;
  }
  function ks(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = e + e,
      o = r + r,
      h = s + s,
      l = e * a,
      c = r * a,
      u = r * o,
      f = s * a,
      d = s * o,
      m = s * h,
      p = n * a,
      g = n * o,
      _ = n * h;
    return (
      (i[0] = 1 - u - m),
      (i[3] = c - _),
      (i[6] = f + g),
      (i[1] = c + _),
      (i[4] = 1 - l - m),
      (i[7] = d - p),
      (i[2] = f - g),
      (i[5] = d + p),
      (i[8] = 1 - l - u),
      i
    );
  }
  function Ns(i, t) {
    return (i[0] = t[0]), (i[1] = t[1]), (i[2] = t[2]), (i[3] = t[3]), (i[4] = t[4]), (i[5] = t[5]), (i[6] = t[6]), (i[7] = t[7]), (i[8] = t[8]), i;
  }
  function Bs(i, t, e, r, s, n, a, o, h, l) {
    return (i[0] = t), (i[1] = e), (i[2] = r), (i[3] = s), (i[4] = n), (i[5] = a), (i[6] = o), (i[7] = h), (i[8] = l), i;
  }
  function Us(i) {
    return (i[0] = 1), (i[1] = 0), (i[2] = 0), (i[3] = 0), (i[4] = 1), (i[5] = 0), (i[6] = 0), (i[7] = 0), (i[8] = 1), i;
  }
  function Vs(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      c = t[8],
      u = c * a - o * l,
      f = -c * n + o * h,
      d = l * n - a * h,
      m = e * u + r * f + s * d;
    return m
      ? ((m = 1 / m),
        (i[0] = u * m),
        (i[1] = (-c * r + s * l) * m),
        (i[2] = (o * r - s * a) * m),
        (i[3] = f * m),
        (i[4] = (c * e - s * h) * m),
        (i[5] = (-o * e + s * n) * m),
        (i[6] = d * m),
        (i[7] = (-l * e + r * h) * m),
        (i[8] = (a * e - r * n) * m),
        i)
      : null;
  }
  function Ir(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      f = e[0],
      d = e[1],
      m = e[2],
      p = e[3],
      g = e[4],
      _ = e[5],
      y = e[6],
      x = e[7],
      w = e[8];
    return (
      (i[0] = f * r + d * a + m * l),
      (i[1] = f * s + d * o + m * c),
      (i[2] = f * n + d * h + m * u),
      (i[3] = p * r + g * a + _ * l),
      (i[4] = p * s + g * o + _ * c),
      (i[5] = p * n + g * h + _ * u),
      (i[6] = y * r + x * a + w * l),
      (i[7] = y * s + x * o + w * c),
      (i[8] = y * n + x * h + w * u),
      i
    );
  }
  function js(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      f = e[0],
      d = e[1];
    return (
      (i[0] = r),
      (i[1] = s),
      (i[2] = n),
      (i[3] = a),
      (i[4] = o),
      (i[5] = h),
      (i[6] = f * r + d * a + l),
      (i[7] = f * s + d * o + c),
      (i[8] = f * n + d * h + u),
      i
    );
  }
  function Gs(i, t, e) {
    let r = t[0],
      s = t[1],
      n = t[2],
      a = t[3],
      o = t[4],
      h = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      f = Math.sin(e),
      d = Math.cos(e);
    return (
      (i[0] = d * r + f * a),
      (i[1] = d * s + f * o),
      (i[2] = d * n + f * h),
      (i[3] = d * a - f * r),
      (i[4] = d * o - f * s),
      (i[5] = d * h - f * n),
      (i[6] = l),
      (i[7] = c),
      (i[8] = u),
      i
    );
  }
  function qs(i, t, e) {
    let r = e[0],
      s = e[1];
    return (
      (i[0] = r * t[0]),
      (i[1] = r * t[1]),
      (i[2] = r * t[2]),
      (i[3] = s * t[3]),
      (i[4] = s * t[4]),
      (i[5] = s * t[5]),
      (i[6] = t[6]),
      (i[7] = t[7]),
      (i[8] = t[8]),
      i
    );
  }
  function Xs(i, t) {
    let e = t[0],
      r = t[1],
      s = t[2],
      n = t[3],
      a = t[4],
      o = t[5],
      h = t[6],
      l = t[7],
      c = t[8],
      u = t[9],
      f = t[10],
      d = t[11],
      m = t[12],
      p = t[13],
      g = t[14],
      _ = t[15],
      y = e * o - r * a,
      x = e * h - s * a,
      w = e * l - n * a,
      M = r * h - s * o,
      v = r * l - n * o,
      T = s * l - n * h,
      E = c * p - u * m,
      b = c * g - f * m,
      F = c * _ - d * m,
      R = u * g - f * p,
      S = u * _ - d * p,
      C = f * _ - d * g,
      P = y * C - x * S + w * R + M * F - v * b + T * E;
    return P
      ? ((P = 1 / P),
        (i[0] = (o * C - h * S + l * R) * P),
        (i[1] = (h * F - a * C - l * b) * P),
        (i[2] = (a * S - o * F + l * E) * P),
        (i[3] = (s * S - r * C - n * R) * P),
        (i[4] = (e * C - s * F + n * b) * P),
        (i[5] = (r * F - e * S - n * E) * P),
        (i[6] = (p * T - g * v + _ * M) * P),
        (i[7] = (g * w - m * T - _ * x) * P),
        (i[8] = (m * v - p * w + _ * y) * P),
        i)
      : null;
  }
  var He = class extends Array {
    constructor(t = 1, e = 0, r = 0, s = 0, n = 1, a = 0, o = 0, h = 0, l = 1) {
      super(t, e, r, s, n, a, o, h, l);
      return this;
    }
    set(t, e, r, s, n, a, o, h, l) {
      return t.length ? this.copy(t) : (Bs(this, t, e, r, s, n, a, o, h, l), this);
    }
    translate(t, e = this) {
      return js(this, e, t), this;
    }
    rotate(t, e = this) {
      return Gs(this, e, t), this;
    }
    scale(t, e = this) {
      return qs(this, e, t), this;
    }
    multiply(t, e) {
      return e ? Ir(this, t, e) : Ir(this, this, t), this;
    }
    identity() {
      return Us(this), this;
    }
    copy(t) {
      return Ns(this, t), this;
    }
    fromMatrix4(t) {
      return Is(this, t), this;
    }
    fromQuaternion(t) {
      return ks(this, t), this;
    }
    fromBasis(t, e, r) {
      return this.set(t[0], t[1], t[2], e[0], e[1], e[2], r[0], r[1], r[2]), this;
    }
    inverse(t = this) {
      return Vs(this, t), this;
    }
    getNormalMatrix(t) {
      return Xs(this, t), this;
    }
  };
  window.MESH_ID == null && (window.MESH_ID = 1);
  var ht = class extends wt {
    constructor(t, { geometry: e, program: r, mode: s = t.TRIANGLES, frustumCulled: n = !0, renderOrder: a = 0 } = {}) {
      super();
      t.canvas || console.error("gl not passed as first argument to Mesh"),
        (this.gl = t),
        (this.id = MESH_ID++),
        (this.geometry = e),
        (this.program = r),
        (this.mode = s),
        (this.frustumCulled = n),
        (this.renderOrder = a),
        (this.modelViewMatrix = new N()),
        (this.normalMatrix = new He()),
        (this.beforeRenderCallbacks = []),
        (this.afterRenderCallbacks = []);
    }
    onBeforeRender(t) {
      return this.beforeRenderCallbacks.push(t), this;
    }
    onAfterRender(t) {
      return this.afterRenderCallbacks.push(t), this;
    }
    draw({ camera: t } = {}) {
      this.beforeRenderCallbacks.forEach((r) => r && r({ mesh: this, camera: t })),
        t &&
          (this.program.uniforms.modelMatrix ||
            Object.assign(this.program.uniforms, {
              modelMatrix: { value: null },
              viewMatrix: { value: null },
              modelViewMatrix: { value: null },
              normalMatrix: { value: null },
              projectionMatrix: { value: null },
              cameraPosition: { value: null },
            }),
          (this.program.uniforms.projectionMatrix.value = t.projectionMatrix),
          (this.program.uniforms.cameraPosition.value = t.worldPosition),
          (this.program.uniforms.viewMatrix.value = t.viewMatrix),
          this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
          this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
          (this.program.uniforms.modelMatrix.value = this.worldMatrix),
          (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
          (this.program.uniforms.normalMatrix.value = this.normalMatrix));
      let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
      this.program.use({ flipFaces: e }),
        this.geometry.draw({ mode: this.mode, program: this.program }),
        this.afterRenderCallbacks.forEach((r) => r && r({ mesh: this, camera: t }));
    }
  };
  var Ys = new Uint8Array(4);
  function Ws(i) {
    return (i & (i - 1)) == 0;
  }
  window.TEX_ID == null && (window.TEX_ID = 1);
  var $ = class {
    constructor(
      t,
      {
        image: e,
        target: r = t.TEXTURE_2D,
        type: s = t.UNSIGNED_BYTE,
        format: n = t.RGBA,
        internalFormat: a = n,
        wrapS: o = t.CLAMP_TO_EDGE,
        wrapT: h = t.CLAMP_TO_EDGE,
        generateMipmaps: l = !0,
        minFilter: c = l ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
        magFilter: u = t.LINEAR,
        premultiplyAlpha: f = !1,
        unpackAlignment: d = 4,
        flipY: m = r == t.TEXTURE_2D,
        anisotropy: p = 0,
        level: g = 0,
        width: _,
        height: y = _,
      } = {},
    ) {
      (this.gl = t),
        (this.id = window.TEX_ID++),
        (this.image = e),
        (this.target = r),
        (this.type = s),
        (this.format = n),
        (this.internalFormat = a),
        (this.minFilter = c),
        (this.magFilter = u),
        (this.wrapS = o),
        (this.wrapT = h),
        (this.generateMipmaps = l),
        (this.premultiplyAlpha = f),
        (this.unpackAlignment = d),
        (this.flipY = m),
        (this.anisotropy = Math.min(p, this.gl.renderer.parameters.maxAnisotropy)),
        (this.level = g),
        (this.width = _),
        (this.height = y),
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
    update(t = 0) {
      let e = !(this.image === this.store.image && !this.needsUpdate);
      if (((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), !!e)) {
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
            (!this.gl.renderer.isWebgl2 && (!Ws(this.image.width) || !Ws(this.image.height))
              ? ((this.generateMipmaps = !1), (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE), (this.minFilter = this.gl.LINEAR))
              : this.gl.generateMipmap(this.target)),
            this.onUpdate && this.onUpdate();
        } else if (this.target === this.gl.TEXTURE_CUBE_MAP)
          for (let r = 0; r < 6; r++)
            this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Ys);
        else
          this.width
            ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null)
            : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Ys);
        this.store.image = this.image;
      }
    }
  };
  var bt = class {
    constructor(
      t,
      {
        width: e = t.canvas.width,
        height: r = t.canvas.height,
        target: s = t.FRAMEBUFFER,
        color: n = 1,
        depth: a = !0,
        stencil: o = !1,
        depthTexture: h = !1,
        wrapS: l = t.CLAMP_TO_EDGE,
        wrapT: c = t.CLAMP_TO_EDGE,
        minFilter: u = t.LINEAR,
        magFilter: f = u,
        type: d = t.UNSIGNED_BYTE,
        format: m = t.RGBA,
        internalFormat: p = m,
        unpackAlignment: g,
        premultiplyAlpha: _,
      } = {},
    ) {
      (this.gl = t),
        (this.width = e),
        (this.height = r),
        (this.depth = a),
        (this.buffer = this.gl.createFramebuffer()),
        (this.target = s),
        this.gl.bindFramebuffer(this.target, this.buffer),
        (this.textures = []);
      let y = [];
      for (let x = 0; x < n; x++)
        this.textures.push(
          new $(t, {
            width: e,
            height: r,
            wrapS: l,
            wrapT: c,
            minFilter: u,
            magFilter: f,
            type: d,
            format: m,
            internalFormat: p,
            unpackAlignment: g,
            premultiplyAlpha: _,
            flipY: !1,
            generateMipmaps: !1,
          }),
        ),
          this.textures[x].update(),
          this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + x, this.gl.TEXTURE_2D, this.textures[x].texture, 0),
          y.push(this.gl.COLOR_ATTACHMENT0 + x);
      y.length > 1 && this.gl.renderer.drawBuffers(y),
        (this.texture = this.textures[0]),
        h && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture"))
          ? ((this.depthTexture = new $(t, {
              width: e,
              height: r,
              minFilter: this.gl.NEAREST,
              magFilter: this.gl.NEAREST,
              format: this.gl.DEPTH_COMPONENT,
              internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
              type: this.gl.UNSIGNED_INT,
            })),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0))
          : (a &&
              !o &&
              ((this.depthBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
            o &&
              !a &&
              ((this.stencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
            a &&
              o &&
              ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, r),
              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
        this.gl.bindFramebuffer(this.target, null);
    }
    setSize(t, e) {
      if (!(this.width === t && this.height === e)) {
        (this.width = t), (this.height = e), this.gl.bindFramebuffer(this.target, this.buffer);
        for (let r = 0; r < this.textures.length; r++)
          (this.textures[r].width = t),
            (this.textures[r].height = e),
            (this.textures[r].needsUpdate = !0),
            this.textures[r].update(),
            this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + r, this.gl.TEXTURE_2D, this.textures[r].texture, 0);
        this.depthTexture
          ? ((this.depthTexture.width = t),
            (this.depthTexture.height = e),
            (this.depthTexture.needsUpdate = !0),
            this.depthTexture.update(),
            this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0))
          : (this.depthBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, t, e)),
            this.stencilBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, t, e)),
            this.depthStencilBuffer &&
              (this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, t, e))),
          this.gl.bindFramebuffer(this.target, null);
      }
    }
  };
  var Hs = {
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
  function Qs(i) {
    i.length === 4 && (i = i[0] + i[1] + i[1] + i[2] + i[2] + i[3] + i[3]);
    let t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);
    return t || console.warn(`Unable to convert hex string ${i} to rgb values`), [parseInt(t[1], 16) / 255, parseInt(t[2], 16) / 255, parseInt(t[3], 16) / 255];
  }
  function no(i) {
    return (i = parseInt(i)), [((i >> 16) & 255) / 255, ((i >> 8) & 255) / 255, (i & 255) / 255];
  }
  function kr(i) {
    return i === void 0
      ? [0, 0, 0]
      : arguments.length === 3
      ? arguments
      : isNaN(i)
      ? i[0] === "#"
        ? Qs(i)
        : Hs[i.toLowerCase()]
        ? Qs(Hs[i.toLowerCase()])
        : (console.warn("Color format not recognised"), [0, 0, 0])
      : no(i);
  }
  var dt = class extends Array {
    constructor(t) {
      return Array.isArray(t) ? super(...t) : super(...kr(...arguments));
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
    set r(t) {
      this[0] = t;
    }
    set g(t) {
      this[1] = t;
    }
    set b(t) {
      this[2] = t;
    }
    set(t) {
      return Array.isArray(t) ? this.copy(t) : this.copy(kr(...arguments));
    }
    scalar(t) {
      return (this[0] *= t), (this[1] *= t), (this[2] *= t), this;
    }
    copy(t) {
      return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this;
    }
  };
  function $s(i, t) {
    return (i[0] = t[0]), (i[1] = t[1]), i;
  }
  function Ks(i, t, e) {
    return (i[0] = t), (i[1] = e), i;
  }
  function Nr(i, t, e) {
    return (i[0] = t[0] + e[0]), (i[1] = t[1] + e[1]), i;
  }
  function Br(i, t, e) {
    return (i[0] = t[0] - e[0]), (i[1] = t[1] - e[1]), i;
  }
  function Zs(i, t, e) {
    return (i[0] = t[0] * e[0]), (i[1] = t[1] * e[1]), i;
  }
  function Js(i, t, e) {
    return (i[0] = t[0] / e[0]), (i[1] = t[1] / e[1]), i;
  }
  function Qe(i, t, e) {
    return (i[0] = t[0] * e), (i[1] = t[1] * e), i;
  }
  function tn(i, t) {
    var e = t[0] - i[0],
      r = t[1] - i[1];
    return Math.sqrt(e * e + r * r);
  }
  function en(i, t) {
    var e = t[0] - i[0],
      r = t[1] - i[1];
    return e * e + r * r;
  }
  function Ur(i) {
    var t = i[0],
      e = i[1];
    return Math.sqrt(t * t + e * e);
  }
  function rn(i) {
    var t = i[0],
      e = i[1];
    return t * t + e * e;
  }
  function sn(i, t) {
    return (i[0] = -t[0]), (i[1] = -t[1]), i;
  }
  function nn(i, t) {
    return (i[0] = 1 / t[0]), (i[1] = 1 / t[1]), i;
  }
  function an(i, t) {
    var e = t[0],
      r = t[1],
      s = e * e + r * r;
    return s > 0 && (s = 1 / Math.sqrt(s)), (i[0] = t[0] * s), (i[1] = t[1] * s), i;
  }
  function on(i, t) {
    return i[0] * t[0] + i[1] * t[1];
  }
  function Vr(i, t) {
    return i[0] * t[1] - i[1] * t[0];
  }
  function hn(i, t, e, r) {
    var s = t[0],
      n = t[1];
    return (i[0] = s + r * (e[0] - s)), (i[1] = n + r * (e[1] - n)), i;
  }
  function ln(i, t, e) {
    var r = t[0],
      s = t[1];
    return (i[0] = e[0] * r + e[3] * s + e[6]), (i[1] = e[1] * r + e[4] * s + e[7]), i;
  }
  function cn(i, t, e) {
    let r = t[0],
      s = t[1];
    return (i[0] = e[0] * r + e[4] * s + e[12]), (i[1] = e[1] * r + e[5] * s + e[13]), i;
  }
  function un(i, t) {
    return i[0] === t[0] && i[1] === t[1];
  }
  var B = class extends Array {
    constructor(t = 0, e = t) {
      super(t, e);
      return this;
    }
    get x() {
      return this[0];
    }
    get y() {
      return this[1];
    }
    set x(t) {
      this[0] = t;
    }
    set y(t) {
      this[1] = t;
    }
    set(t, e = t) {
      return t.length ? this.copy(t) : (Ks(this, t, e), this);
    }
    copy(t) {
      return $s(this, t), this;
    }
    add(t, e) {
      return e ? Nr(this, t, e) : Nr(this, this, t), this;
    }
    sub(t, e) {
      return e ? Br(this, t, e) : Br(this, this, t), this;
    }
    multiply(t) {
      return t.length ? Zs(this, this, t) : Qe(this, this, t), this;
    }
    divide(t) {
      return t.length ? Js(this, this, t) : Qe(this, this, 1 / t), this;
    }
    inverse(t = this) {
      return nn(this, t), this;
    }
    len() {
      return Ur(this);
    }
    distance(t) {
      return t ? tn(this, t) : Ur(this);
    }
    squaredLen() {
      return this.squaredDistance();
    }
    squaredDistance(t) {
      return t ? en(this, t) : rn(this);
    }
    negate(t = this) {
      return sn(this, t), this;
    }
    cross(t, e) {
      return e ? Vr(t, e) : Vr(this, t);
    }
    scale(t) {
      return Qe(this, this, t), this;
    }
    normalize() {
      return an(this, this), this;
    }
    dot(t) {
      return on(this, t);
    }
    equals(t) {
      return un(this, t);
    }
    applyMatrix3(t) {
      return ln(this, this, t), this;
    }
    applyMatrix4(t) {
      return cn(this, this, t), this;
    }
    lerp(t, e) {
      return hn(this, this, t, e), this;
    }
    clone() {
      return new B(this[0], this[1]);
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), t;
    }
  };
  var $e = class extends Array {
    constructor(t = 0, e = t, r = t, s = t) {
      super(t, e, r, s);
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
    get w() {
      return this[3];
    }
    set x(t) {
      this[0] = t;
    }
    set y(t) {
      this[1] = t;
    }
    set z(t) {
      this[2] = t;
    }
    set w(t) {
      this[3] = t;
    }
    set(t, e, r, s) {
      return t.length ? this.copy(t) : (Xe(this, t, e, r, s), this);
    }
    copy(t) {
      return qe(this, t), this;
    }
    normalize() {
      return Ye(this, this), this;
    }
    fromArray(t, e = 0) {
      return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), (this[3] = t[e + 3]), this;
    }
    toArray(t = [], e = 0) {
      return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t;
    }
  };
  var Ht = class extends it {
    constructor(t, { width: e = 1, height: r = 1, widthSegments: s = 1, heightSegments: n = 1, attributes: a = {} } = {}) {
      let o = s,
        h = n,
        l = (o + 1) * (h + 1),
        c = o * h * 6,
        u = new Float32Array(l * 3),
        f = new Float32Array(l * 3),
        d = new Float32Array(l * 2),
        m = c > 65536 ? new Uint32Array(c) : new Uint16Array(c);
      Ht.buildPlane(u, f, d, m, e, r, 0, o, h),
        Object.assign(a, { position: { size: 3, data: u }, normal: { size: 3, data: f }, uv: { size: 2, data: d }, index: { data: m } });
      super(t, a);
    }
    static buildPlane(t, e, r, s, n, a, o, h, l, c = 0, u = 1, f = 2, d = 1, m = -1, p = 0, g = 0) {
      let _ = p,
        y = n / h,
        x = a / l;
      for (let w = 0; w <= l; w++) {
        let M = w * x - a / 2;
        for (let v = 0; v <= h; v++, p++) {
          let T = v * y - n / 2;
          if (
            ((t[p * 3 + c] = T * d),
            (t[p * 3 + u] = M * m),
            (t[p * 3 + f] = o / 2),
            (e[p * 3 + c] = 0),
            (e[p * 3 + u] = 0),
            (e[p * 3 + f] = o >= 0 ? 1 : -1),
            (r[p * 2] = v / h),
            (r[p * 2 + 1] = 1 - w / l),
            w === l || v === h)
          )
            continue;
          let E = _ + v + w * (h + 1),
            b = _ + v + (w + 1) * (h + 1),
            F = _ + v + (w + 1) * (h + 1) + 1,
            R = _ + v + w * (h + 1) + 1;
          (s[g * 6] = E), (s[g * 6 + 1] = b), (s[g * 6 + 2] = R), (s[g * 6 + 3] = b), (s[g * 6 + 4] = F), (s[g * 6 + 5] = R), g++;
        }
      }
    }
  };
  var Qt = class extends it {
    constructor(t, { attributes: e = {} } = {}) {
      Object.assign(e, { position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) } });
      super(t, e);
    }
  };
  var dc = new A(),
    pc = new B(),
    mc = new B();
  var wc = new B(),
    vc = new B(),
    Mc = new B(),
    Tc = new A(),
    bc = new A(),
    Ec = new A(),
    Ac = new A(),
    Pc = new A(),
    Fc = new A(),
    Rc = new A(),
    Sc = new A(),
    Cc = new A(),
    Oc = new A(),
    Dc = new A(),
    zc = new N();
  var jr = "catmullrom",
    Gr = "cubicbezier",
    fn = "quadraticbezier",
    $t = new A(),
    Kt = new A(),
    Ke = new A(),
    dn = new A();
  function ao(i, t, e = 0.168, r = 0.168) {
    if (
      (t < 1
        ? $t.sub(i[1], i[0]).scale(e).add(i[0])
        : $t
            .sub(i[t + 1], i[t - 1])
            .scale(e)
            .add(i[t]),
      t > i.length - 3)
    ) {
      let s = i.length - 1;
      Kt.sub(i[s - 1], i[s])
        .scale(r)
        .add(i[s]);
    } else
      Kt.sub(i[t], i[t + 2])
        .scale(r)
        .add(i[t + 1]);
    return [$t.clone(), Kt.clone()];
  }
  function pn(i, t, e, r) {
    let s = 1 - i;
    $t.copy(t).scale(s ** 2), Kt.copy(e).scale(2 * s * i), Ke.copy(r).scale(i ** 2);
    let n = new A();
    return n.add($t, Kt).add(Ke), n;
  }
  function mn(i, t, e, r, s) {
    let n = 1 - i;
    $t.copy(t).scale(n ** 3), Kt.copy(e).scale(3 * n ** 2 * i), Ke.copy(r).scale(3 * n * i ** 2), dn.copy(s).scale(i ** 3);
    let a = new A();
    return a.add($t, Kt).add(Ke).add(dn), a;
  }
  var Zt = class {
    constructor({ points: t = [new A(0, 0, 0), new A(0, 1, 0), new A(1, 1, 0), new A(1, 0, 0)], divisions: e = 12, type: r = jr } = {}) {
      (this.points = t), (this.divisions = e), (this.type = r);
    }
    _getQuadraticBezierPoints(t = this.divisions) {
      let e = [],
        r = this.points.length;
      if (r < 3) return console.warn("Not enough points provided."), [];
      let s = this.points[0],
        n = this.points[1],
        a = this.points[2];
      for (let h = 0; h <= t; h++) {
        let l = pn(h / t, s, n, a);
        e.push(l);
      }
      let o = 3;
      for (; r - o > 0; ) {
        s.copy(a), (n = a.scale(2).sub(n)), (a = this.points[o]);
        for (let h = 1; h <= t; h++) {
          let l = pn(h / t, s, n, a);
          e.push(l);
        }
        o++;
      }
      return e;
    }
    _getCubicBezierPoints(t = this.divisions) {
      let e = [],
        r = this.points.length;
      if (r < 4) return console.warn("Not enough points provided."), [];
      let s = this.points[0],
        n = this.points[1],
        a = this.points[2],
        o = this.points[3];
      for (let l = 0; l <= t; l++) {
        let c = mn(l / t, s, n, a, o);
        e.push(c);
      }
      let h = 4;
      for (; r - h > 1; ) {
        s.copy(o), (n = o.scale(2).sub(a)), (a = this.points[h]), (o = this.points[h + 1]);
        for (let l = 1; l <= t; l++) {
          let c = mn(l / t, s, n, a, o);
          e.push(c);
        }
        h += 2;
      }
      return e;
    }
    _getCatmullRomPoints(t = this.divisions, e = 0.168, r = 0.168) {
      let s = [];
      if (this.points.length <= 2) return this.points;
      let a;
      return (
        this.points.forEach((o, h) => {
          if (h === 0) a = o;
          else {
            let [l, c] = ao(this.points, h - 1, e, r),
              u = new Zt({ points: [a, l, c, o], type: Gr });
            s.pop(), s.push(...u.getPoints(t)), (a = o);
          }
        }),
        s
      );
    }
    getPoints(t = this.divisions, e = 0.168, r = 0.168) {
      let s = this.type;
      return s === fn
        ? this._getQuadraticBezierPoints(t)
        : s === Gr
        ? this._getCubicBezierPoints(t)
        : s === jr
        ? this._getCatmullRomPoints(t, e, r)
        : this.points;
    }
  };
  Zt.CATMULLROM = jr;
  Zt.CUBICBEZIER = Gr;
  Zt.QUADRATICBEZIER = fn;
  var Xc = new A(),
    Yc = new ft(),
    Wc = new A(),
    Hc = new A(),
    Qc = new ft(),
    $c = new A();
  var iu = new N();
  var Au = new A();
  var Ze = class extends $ {
    constructor(t, { buffer: e, wrapS: r = t.CLAMP_TO_EDGE, wrapT: s = t.CLAMP_TO_EDGE, anisotropy: n = 0, minFilter: a, magFilter: o } = {}) {
      super(t, { generateMipmaps: !1, wrapS: r, wrapT: s, anisotropy: n, minFilter: a, magFilter: o });
      if (e) return this.parseBuffer(e);
    }
    parseBuffer(t) {
      let e = new ho(t);
      (e.mipmaps.isCompressedTexture = !0),
        (this.image = e.mipmaps),
        (this.internalFormat = e.glInternalFormat),
        e.numberOfMipmapLevels > 1
          ? this.minFilter === this.gl.LINEAR && (this.minFilter = this.gl.NEAREST_MIPMAP_LINEAR)
          : this.minFilter === this.gl.NEAREST_MIPMAP_LINEAR && (this.minFilter = this.gl.LINEAR);
    }
  };
  function ho(i) {
    let t = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
      e = new Uint8Array(i, 0, 12);
    for (let u = 0; u < e.length; u++) if (e[u] !== t[u]) return console.error("File missing KTX identifier");
    let r = Uint32Array.BYTES_PER_ELEMENT,
      s = new DataView(i, 12, 13 * r),
      n = s.getUint32(0, !0) === 67305985;
    if (s.getUint32(1 * r, n) !== 0) return console.warn("only compressed formats currently supported");
    this.glInternalFormat = s.getUint32(4 * r, n);
    let o = s.getUint32(6 * r, n),
      h = s.getUint32(7 * r, n);
    (this.numberOfFaces = s.getUint32(10 * r, n)), (this.numberOfMipmapLevels = Math.max(1, s.getUint32(11 * r, n)));
    let l = s.getUint32(12 * r, n);
    this.mipmaps = [];
    let c = 12 + 13 * 4 + l;
    for (let u = 0; u < this.numberOfMipmapLevels; u++) {
      let f = new Int32Array(i, c, 1)[0];
      c += 4;
      for (let d = 0; d < this.numberOfFaces; d++) {
        let m = new Uint8Array(i, c, f);
        this.mipmaps.push({ data: m, width: o, height: h }), (c += f), (c += 3 - ((f + 3) % 4));
      }
      (o = o >> 1), (h = h >> 1);
    }
  }
  var Je = {},
    ue = [],
    tr = class {
      static load(
        t,
        {
          src: e,
          wrapS: r = t.CLAMP_TO_EDGE,
          wrapT: s = t.CLAMP_TO_EDGE,
          anisotropy: n = 0,
          format: a = t.RGBA,
          internalFormat: o = a,
          generateMipmaps: h = !0,
          minFilter: l = h ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
          magFilter: c = t.LINEAR,
          premultiplyAlpha: u = !1,
          unpackAlignment: f = 4,
          flipY: d = !0,
        } = {},
      ) {
        let m = this.getSupportedExtensions(t),
          p = "none";
        if ((typeof e == "string" && (p = e.split(".").pop().split("?")[0].toLowerCase()), typeof e == "object")) {
          for (let y in e)
            if (m.includes(y.toLowerCase())) {
              (p = y.toLowerCase()), (e = e[y]);
              break;
            }
        }
        let g = e + r + s + n + a + o + h + l + c + u + f + d + t.renderer.id;
        if (Je[g]) return Je[g];
        let _;
        switch (p) {
          case "ktx":
          case "pvrtc":
          case "s3tc":
          case "etc":
          case "etc1":
          case "astc":
            (_ = new Ze(t, { src: e, wrapS: r, wrapT: s, anisotropy: n, minFilter: l, magFilter: c })), (_.loaded = this.loadKTX(e, _));
            break;
          case "webp":
          case "jpg":
          case "jpeg":
          case "png":
            (_ = new $(t, {
              wrapS: r,
              wrapT: s,
              anisotropy: n,
              format: a,
              internalFormat: o,
              generateMipmaps: h,
              minFilter: l,
              magFilter: c,
              premultiplyAlpha: u,
              unpackAlignment: f,
              flipY: d,
            })),
              (_.loaded = this.loadImage(t, e, _));
            break;
          default:
            console.warn("No supported format supplied"), (_ = new $(t));
        }
        return (_.ext = p), (Je[g] = _), _;
      }
      static getSupportedExtensions(t) {
        if (ue.length) return ue;
        let e = {
          pvrtc: t.renderer.getExtension("WEBGL_compressed_texture_pvrtc") || t.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          s3tc: t.renderer.getExtension("WEBGL_compressed_texture_s3tc"),
          etc1: t.renderer.getExtension("WEBGL_compressed_texture_etc1"),
          astc: t.renderer.getExtension("WEBGL_compressed_texture_astc"),
          bc7: t.renderer.getExtension("EXT_texture_compression_bptc"),
        };
        for (let r in e) e[r] && ue.push(r);
        return lo() && ue.push("webp"), ue.push("png", "jpg"), ue;
      }
      static loadKTX(t, e) {
        return fetch(t)
          .then((r) => r.arrayBuffer())
          .then((r) => e.parseBuffer(r));
      }
      static loadImage(t, e, r) {
        return co(e).then(
          (s) => (
            (!gn(s.width) || !gn(s.height)) &&
              (r.generateMipmaps && (r.generateMipmaps = !1),
              r.minFilter === t.NEAREST_MIPMAP_LINEAR && (r.minFilter = t.LINEAR),
              r.wrapS === t.REPEAT && (r.wrapS = r.wrapT = t.CLAMP_TO_EDGE)),
            (r.image = s),
            (r.onUpdate = () => {
              s.close && s.close(), (r.onUpdate = null);
            }),
            s
          ),
        );
      }
      static clearCache() {
        Je = {};
      }
    };
  function lo() {
    return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp") == 0;
  }
  function gn(i) {
    return Math.log2(i) % 1 == 0;
  }
  function co(i) {
    return new Promise((t) => {
      let e = navigator.userAgent.toLowerCase().includes("chrome");
      if (!!window.createImageBitmap && e)
        fetch(i, { mode: "cors" })
          .then((r) => r.blob())
          .then((r) => createImageBitmap(r, { imageOrientation: "flipY", premultiplyAlpha: "none" }))
          .then(t);
      else {
        let r = new Image();
        (r.crossOrigin = ""), (r.src = i), (r.onload = () => t(r));
      }
    });
  }
  var Bu = new A(),
    Uu = new A(),
    Vu = new A(),
    ju = new A(),
    Gu = new ft(),
    qu = new ft(),
    Xu = new ft(),
    Yu = new ft();
  var Ku = new N(),
    Zu = new N();
  function er(i, t) {
    let e = t.length;
    for (let r = 0; r < e; r += 1) i[t[r]] = i[t[r]].bind(i);
  }
  function _n(i) {
    switch (i.tagName) {
      case "A":
      case "INPUT":
      case "BUTTON":
        return !0;
    }
    return !1;
  }
  function W() {
    if (!(this instanceof W)) return new W();
    (this.size = 0),
      (this.uid = 0),
      (this.selectors = []),
      (this.selectorObjects = {}),
      (this.indexes = Object.create(this.indexes)),
      (this.activeIndexes = []);
  }
  var be = window.document.documentElement,
    po = be.matches || be.webkitMatchesSelector || be.mozMatchesSelector || be.oMatchesSelector || be.msMatchesSelector;
  W.prototype.matchesSelector = function (i, t) {
    return po.call(i, t);
  };
  W.prototype.querySelectorAll = function (i, t) {
    return t.querySelectorAll(i);
  };
  W.prototype.indexes = [];
  var mo = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  W.prototype.indexes.push({
    name: "ID",
    selector: function (t) {
      var e;
      if ((e = t.match(mo))) return e[0].slice(1);
    },
    element: function (t) {
      if (t.id) return [t.id];
    },
  });
  var go = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  W.prototype.indexes.push({
    name: "CLASS",
    selector: function (t) {
      var e;
      if ((e = t.match(go))) return e[0].slice(1);
    },
    element: function (t) {
      var e = t.className;
      if (e) {
        if (typeof e == "string") return e.split(/\s/);
        if (typeof e == "object" && "baseVal" in e) return e.baseVal.split(/\s/);
      }
    },
  });
  var _o = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
  W.prototype.indexes.push({
    name: "TAG",
    selector: function (t) {
      var e;
      if ((e = t.match(_o))) return e[0].toUpperCase();
    },
    element: function (t) {
      return [t.nodeName.toUpperCase()];
    },
  });
  W.prototype.indexes.default = {
    name: "UNIVERSAL",
    selector: function () {
      return !0;
    },
    element: function () {
      return [!0];
    },
  };
  var qr;
  typeof window.Map == "function"
    ? (qr = window.Map)
    : (qr = (function () {
        function i() {
          this.map = {};
        }
        return (
          (i.prototype.get = function (t) {
            return this.map[t + " "];
          }),
          (i.prototype.set = function (t, e) {
            this.map[t + " "] = e;
          }),
          i
        );
      })());
  var xn = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;
  function yn(i, t) {
    i = i.slice(0).concat(i.default);
    var e = i.length,
      r,
      s,
      n,
      a,
      o = t,
      h,
      l,
      c = [];
    do
      if ((xn.exec(""), (n = xn.exec(o)) && ((o = n[3]), n[2] || !o))) {
        for (r = 0; r < e; r++)
          if (((l = i[r]), (h = l.selector(n[1])))) {
            for (s = c.length, a = !1; s--; )
              if (c[s].index === l && c[s].key === h) {
                a = !0;
                break;
              }
            a || c.push({ index: l, key: h });
            break;
          }
      }
    while (n);
    return c;
  }
  function xo(i, t) {
    var e, r, s;
    for (e = 0, r = i.length; e < r; e++) if (((s = i[e]), t.isPrototypeOf(s))) return s;
  }
  W.prototype.logDefaultIndexUsed = function () {};
  W.prototype.add = function (i, t) {
    var e,
      r,
      s,
      n,
      a,
      o,
      h,
      l,
      c = this.activeIndexes,
      u = this.selectors,
      f = this.selectorObjects;
    if (typeof i == "string") {
      for (e = { id: this.uid++, selector: i, data: t }, f[e.id] = e, h = yn(this.indexes, i), r = 0; r < h.length; r++)
        (l = h[r]),
          (n = l.key),
          (s = l.index),
          (a = xo(c, s)),
          a || ((a = Object.create(s)), (a.map = new qr()), c.push(a)),
          s === this.indexes.default && this.logDefaultIndexUsed(e),
          (o = a.map.get(n)),
          o || ((o = []), a.map.set(n, o)),
          o.push(e);
      this.size++, u.push(i);
    }
  };
  W.prototype.remove = function (i, t) {
    if (typeof i == "string") {
      var e,
        r,
        s,
        n,
        a,
        o,
        h,
        l,
        c = this.activeIndexes,
        u = (this.selectors = []),
        f = this.selectorObjects,
        d = {},
        m = arguments.length === 1;
      for (e = yn(this.indexes, i), s = 0; s < e.length; s++)
        for (r = e[s], n = c.length; n--; )
          if (((o = c[n]), r.index.isPrototypeOf(o))) {
            if (((h = o.map.get(r.key)), h)) for (a = h.length; a--; ) (l = h[a]), l.selector === i && (m || l.data === t) && (h.splice(a, 1), (d[l.id] = !0));
            break;
          }
      for (s in d) delete f[s], this.size--;
      for (s in f) u.push(f[s].selector);
    }
  };
  function wn(i, t) {
    return i.id - t.id;
  }
  W.prototype.queryAll = function (i) {
    if (!this.selectors.length) return [];
    var t = {},
      e = [],
      r = this.querySelectorAll(this.selectors.join(", "), i),
      s,
      n,
      a,
      o,
      h,
      l,
      c,
      u;
    for (s = 0, a = r.length; s < a; s++)
      for (h = r[s], l = this.matches(h), n = 0, o = l.length; n < o; n++)
        (u = l[n]),
          t[u.id] ? (c = t[u.id]) : ((c = { id: u.id, selector: u.selector, data: u.data, elements: [] }), (t[u.id] = c), e.push(c)),
          c.elements.push(h);
    return e.sort(wn);
  };
  W.prototype.matches = function (i) {
    if (!i) return [];
    var t,
      e,
      r,
      s,
      n,
      a,
      o,
      h,
      l,
      c,
      u,
      f = this.activeIndexes,
      d = {},
      m = [];
    for (t = 0, s = f.length; t < s; t++)
      if (((o = f[t]), (h = o.element(i)), h)) {
        for (e = 0, n = h.length; e < n; e++)
          if ((l = o.map.get(h[e])))
            for (r = 0, a = l.length; r < a; r++) (c = l[r]), (u = c.id), !d[u] && this.matchesSelector(i, c.selector) && ((d[u] = !0), m.push(c));
      }
    return m.sort(wn);
  };
  var Jt = {},
    pt = {},
    rr = ["mouseenter", "mouseleave", "pointerenter", "pointerleave"];
  function Xr(i) {
    pt[i] === void 0 && (pt[i] = []);
  }
  function vn(i, t) {
    if (pt[i]) for (let e = 0; e < pt[i].length; e++) pt[i][e](...t);
  }
  function Yr(i) {
    return typeof i == "string" ? document.querySelectorAll(i) : i;
  }
  function Ee(i) {
    let t = yo(Jt[i.type], i.target);
    if (t.length)
      for (let e = 0; e < t.length; e++)
        for (let r = 0; r < t[e].stack.length; r++)
          rr.indexOf(i.type) !== -1
            ? (Mn(i, t[e].delegatedTarget), i.target === t[e].delegatedTarget && t[e].stack[r].data(i))
            : (Mn(i, t[e].delegatedTarget), t[e].stack[r].data(i));
  }
  function yo(i, t) {
    let e = [],
      r = t;
    do {
      if (r.nodeType !== 1) break;
      let s = i.matches(r);
      s.length && e.push({ delegatedTarget: r, stack: s });
    } while ((r = r.parentElement));
    return e;
  }
  function Mn(i, t) {
    Object.defineProperty(i, "currentTarget", { configurable: !0, enumerable: !0, get: () => t });
  }
  function Wr(i) {
    return JSON.parse(JSON.stringify(i));
  }
  var ir = class {
    bindAll(t, e) {
      e === void 0 && (e = Object.getOwnPropertyNames(Object.getPrototypeOf(t)));
      for (let r = 0; r < e.length; r++) t[e[r]] = t[e[r]].bind(t);
    }
    on(t, e, r, s) {
      let n = t.split(" ");
      for (let a = 0; a < n.length; a++) {
        if (typeof e == "function" && r === void 0) {
          Xr(n[a]), pt[n[a]].push(e);
          continue;
        }
        if ((e.nodeType && e.nodeType === 1) || e === window || e === document) {
          e.addEventListener(n[a], r, s);
          continue;
        }
        e = Yr(e);
        for (let o = 0; o < e.length; o++) e[o].addEventListener(n[a], r, s);
      }
    }
    delegate(t, e, r) {
      let s = t.split(" ");
      for (let n = 0; n < s.length; n++) {
        let a = Jt[s[n]];
        a === void 0 &&
          ((a = new W()), (Jt[s[n]] = a), rr.indexOf(s[n]) !== -1 ? document.addEventListener(s[n], Ee, !0) : document.addEventListener(s[n], Ee)),
          a.add(e, r);
      }
    }
    off(t, e, r, s) {
      let n = t.split(" ");
      for (let a = 0; a < n.length; a++) {
        if (e === void 0) {
          pt[n[a]] = [];
          continue;
        }
        if (typeof e == "function") {
          Xr(n[a]);
          for (let h = 0; h < pt[n[a]].length; h++) pt[n[a]][h] === e && pt[n[a]].splice(h, 1);
          continue;
        }
        let o = Jt[n[a]];
        if (o !== void 0 && (o.remove(e, r), o.size === 0)) {
          delete Jt[n[a]], rr.indexOf(n[a]) !== -1 ? document.removeEventListener(n[a], Ee, !0) : document.removeEventListener(n[a], Ee);
          continue;
        }
        if (e.removeEventListener !== void 0) {
          e.removeEventListener(n[a], r, s);
          continue;
        }
        e = Yr(e);
        for (let h = 0; h < e.length; h++) e[h].removeEventListener(n[a], r, s);
      }
    }
    emit(t, ...e) {
      vn(t, e);
    }
    debugDelegated() {
      return Wr(Jt);
    }
    debugBus() {
      return Wr(pt);
    }
  };
  var Tn = class extends ir {
      constructor() {
        super();
        (this.currentSection = null), (this.sections = {});
      }
      begin(t) {
        (this.sections[t] = []), (this.currentSection = t);
      }
      end() {
        this.currentSection = null;
      }
      offSection(t) {
        let e = this.sections[t];
        e != null &&
          (e.forEach((r) => {
            this.off(...r);
          }),
          (this.sections[t] = null));
      }
      on(...t) {
        this.currentSection && this.sections[this.currentSection].push([...t]), super.on(...t);
      }
    },
    sr = window.evt;
  sr == null && (sr = new Tn());
  window.evt = sr;
  var I = sr;
  var Hr = class {
      constructor(t) {
        (this.responseType = null), (this.path = "");
      }
      setResponseType(t) {
        this.responseType = t;
      }
      setPath(t) {
        this.path = t;
      }
      load(t, e) {
        fetch(this.path + t)
          .then((r) => {
            switch (this.responseType) {
              case "arraybuffer":
                return r.arrayBuffer();
              case "json":
                return r.json();
            }
            return r.text();
          })
          .then((r) => e(r));
      }
    },
    Et = function (i, t) {
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
  Et.prototype = Object.assign(Object.create({}), {
    constructor: Et,
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
    load: function (i, t, e, r) {
      var s = new Hr(this.manager);
      s.setResponseType("arraybuffer"),
        s.load(
          i,
          (n) => {
            var a = { attributeIDs: this.defaultAttributeIDs, attributeTypes: this.defaultAttributeTypes, useUniqueIDs: !1 };
            this.decodeGeometry(n, a).then(t).catch(r);
          },
          e,
          r,
        );
    },
    decodeDracoFile: function (i, t, e, r) {
      var s = { attributeIDs: e || this.defaultAttributeIDs, attributeTypes: r || this.defaultAttributeTypes, useUniqueIDs: !!e };
      this.decodeGeometry(i, s).then(t);
    },
    decodeGeometry: function (i, t) {
      for (var e in t.attributeTypes) {
        var r = t.attributeTypes[e];
        r.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[e] = r.name);
      }
      var s = JSON.stringify(t);
      if (Et.taskCache.has(i)) {
        var n = Et.taskCache.get(i);
        if (n.key === s) return n.promise;
        if (i.byteLength === 0)
          throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
      }
      var a,
        o = this.workerNextTaskID++,
        h = i.byteLength,
        l = this._getWorker(o, h)
          .then(
            (c) => (
              (a = c),
              new Promise((u, f) => {
                (a._callbacks[o] = { resolve: u, reject: f }), a.postMessage({ type: "decode", id: o, taskConfig: t, buffer: i }, [i]);
              })
            ),
          )
          .then((c) => this._createGeometry(c.geometry));
      return (
        l
          .catch(() => !0)
          .then(() => {
            a && o && this._releaseTask(a, o);
          }),
        Et.taskCache.set(i, { key: s, promise: l }),
        l
      );
    },
    _createGeometry: function (i) {
      var t = new it(this.gl);
      i.index && t.setIndex({ data: i.index.array });
      for (var e = 0; e < i.attributes.length; e++) {
        var r = i.attributes[e],
          s = r.name,
          n = r.array,
          a = r.itemSize;
        t.addAttribute(s, { size: a, data: n });
      }
      return t;
    },
    _loadLibrary: function (i, t) {
      var e = new Hr(this.manager);
      return (
        e.setPath(this.decoderPath),
        e.setResponseType(t),
        new Promise((r, s) => {
          e.load(i, r, void 0, s);
        })
      );
    },
    preload: function () {
      return this._initDecoder(), this;
    },
    _initDecoder: function () {
      if (this.decoderPending) return this.decoderPending;
      var i = typeof WebAssembly != "object" || this.decoderConfig.type === "js",
        t = [];
      return (
        i
          ? t.push(this._loadLibrary("draco_decoder.js", "text"))
          : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
        (this.decoderPending = Promise.all(t).then((e) => {
          var r = e[0];
          i || (this.decoderConfig.wasmBinary = e[1]);
          var s = Et.DRACOWorker.toString(),
            n = ["/* draco decoder */", r, "", "/* worker */", s.substring(s.indexOf("{") + 1, s.lastIndexOf("}"))].join(`
`);
          this.workerSourceURL = URL.createObjectURL(new Blob([n]));
        })),
        this.decoderPending
      );
    },
    _getWorker: function (i, t) {
      return this._initDecoder().then(() => {
        if (this.workerPool.length < this.workerLimit) {
          var e = new Worker(this.workerSourceURL);
          (e._callbacks = {}),
            (e._taskCosts = {}),
            (e._taskLoad = 0),
            e.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
            (e.onmessage = function (s) {
              var n = s.data;
              switch (n.type) {
                case "decode":
                  e._callbacks[n.id].resolve(n);
                  break;
                case "error":
                  e._callbacks[n.id].reject(n);
                  break;
                default:
                  console.error('THREE.DRACOLoader: Unexpected message, "' + n.type + '"');
              }
            }),
            this.workerPool.push(e);
        } else
          this.workerPool.sort(function (r, s) {
            return r._taskLoad > s._taskLoad ? -1 : 1;
          });
        var e = this.workerPool[this.workerPool.length - 1];
        return (e._taskCosts[i] = t), (e._taskLoad += t), e;
      });
    },
    _releaseTask: function (i, t) {
      (i._taskLoad -= i._taskCosts[t]), delete i._callbacks[t], delete i._taskCosts[t];
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
  Et.DRACOWorker = function () {
    var i, t;
    onmessage = function (a) {
      var o = a.data;
      switch (o.type) {
        case "init":
          (i = o.decoderConfig),
            (t = new Promise(function (c) {
              (i.onModuleLoaded = function (u) {
                c({ draco: u });
              }),
                DracoDecoderModule(i);
            }));
          break;
        case "decode":
          var h = o.buffer,
            l = o.taskConfig;
          t.then((c) => {
            var u = c.draco,
              f = new u.Decoder(),
              d = new u.DecoderBuffer();
            d.Init(new Int8Array(h), h.byteLength);
            try {
              var m = e(u, f, d, l),
                p = m.attributes.map((g) => g.array.buffer);
              m.index && p.push(m.index.array.buffer), self.postMessage({ type: "decode", id: o.id, geometry: m }, p);
            } catch (g) {
              console.error(g), self.postMessage({ type: "error", id: o.id, error: g.message });
            } finally {
              u.destroy(d), u.destroy(f);
            }
          });
          break;
      }
    };
    function e(a, o, h, l) {
      var c = l.attributeIDs,
        u = l.attributeTypes,
        f,
        d,
        m = o.GetEncodedGeometryType(h);
      if (m === a.TRIANGULAR_MESH) (f = new a.Mesh()), (d = o.DecodeBufferToMesh(h, f));
      else if (m === a.POINT_CLOUD) (f = new a.PointCloud()), (d = o.DecodeBufferToPointCloud(h, f));
      else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
      if (!d.ok() || f.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + d.error_msg());
      var p = { index: null, attributes: [] };
      for (var g in c) {
        var _ = self[u[g]],
          y,
          x;
        if (l.useUniqueIDs) (x = c[g]), (y = o.GetAttributeByUniqueId(f, x));
        else {
          if (((x = o.GetAttributeId(f, a[c[g]])), x === -1)) continue;
          y = o.GetAttribute(f, x);
        }
        p.attributes.push(s(a, o, f, g, _, y));
      }
      return m === a.TRIANGULAR_MESH && (p.index = r(a, o, f)), a.destroy(f), p;
    }
    function r(a, o, h) {
      var l = h.num_faces(),
        c = l * 3,
        u = c * 4,
        f = a._malloc(u);
      o.GetTrianglesUInt32Array(h, u, f);
      var d = new Uint32Array(a.HEAPF32.buffer, f, c).slice();
      return a._free(f), { array: d, itemSize: 1 };
    }
    function s(a, o, h, l, c, u) {
      var f = u.num_components(),
        d = h.num_points(),
        m = d * f,
        p = m * c.BYTES_PER_ELEMENT,
        g = n(a, c),
        _ = a._malloc(p);
      o.GetAttributeDataArrayForAllPoints(h, u, g, p, _);
      var y = new c(a.HEAPF32.buffer, _, m).slice();
      return a._free(_), { name: l, array: y, itemSize: f };
    }
    function n(a, o) {
      switch (o) {
        case Float32Array:
          return a.DT_FLOAT32;
        case Int8Array:
          return a.DT_INT8;
        case Int16Array:
          return a.DT_INT16;
        case Int32Array:
          return a.DT_INT32;
        case Uint8Array:
          return a.DT_UINT8;
        case Uint16Array:
          return a.DT_UINT16;
        case Uint32Array:
          return a.DT_UINT32;
      }
    }
  };
  Et.taskCache = new WeakMap();
  var bn = Et;
  var nr = window.store;
  nr == null &&
    ((nr = {
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
    (window.store = nr));
  var j = nr;
  var Pn = Qa(An()),
    Fn = class {
      constructor() {
        let t = this;
        (this._firstUpdate = !1), window.visualViewport.addEventListener("resize", (0, Pn.default)(t.onResize, 200)), this.update();
      }
      update() {
        (j.width = window.innerWidth),
          (j.height = window.innerHeight),
          (j.visualWidth = window.visualViewport.width),
          (j.visualHeight = window.visualViewport.height),
          this._firstUpdate ||
            (document.documentElement.style.setProperty("--vhi", `${j.height}px`),
            document.documentElement.style.setProperty("--vvhi", `${j.visualHeight}px`),
            (this._firstUpdate = !0)),
          (j.isSmall = j.width <= 767),
          (j.isMedium = j.width <= 1023),
          (j.isLarge = j.width >= 1024),
          document.documentElement.style.setProperty("--vh", `${j.height}px`),
          document.documentElement.style.setProperty("--vvh", `${j.visualHeight}px`),
          "" + j.height;
      }
      onResize = () => {
        this.update(), I.emit("resize");
      };
    },
    $r = window.globalResizer;
  $r == null && (($r = new Fn()), (window.globalResizer = $r));
  var Ae = { LOW: 0, MEDIUM: 1, HIGH: 2 };
  function Rn(i) {
    return i == Ae.LOW ? 1 : i == Ae.MEDIUM ? 1.5 : (i == Ae.LOW, 1);
  }
  function Ot(i, t, e) {
    return i * (1 - e) + t * e;
  }
  dt.prototype.mix = function (i, t, e = this) {
    return (e.r = Ot(this.r, i.r, t)), (e.g = Ot(this.g, i.g, t)), (e.b = Ot(this.b, i.b, t)), e;
  };
  A.prototype.mix = function (i, t, e = this) {
    return (e.x = Ot(this.x, i.x, t)), (e.y = Ot(this.y, i.y, t)), (e.z = Ot(this.z, i.z, t)), e;
  };
  B.prototype.mix = function (i, t, e = this) {
    return (e.x = Ot(this.x, i.x, t)), (e.y = Ot(this.y, i.y, t)), e;
  };
  var Sn = class {
      constructor() {
        (this.container = document.getElementById("app-wrapper")),
          (this.quality = Ae.HIGH),
          (this.vp = { width: this.container.offsetWidth, height: this.container.offsetHeight, dpr: Math.min(window.devicePixelRatio, Rn(this.quality)) }),
          (this.canvas = document.getElementById("app-canvas")),
          (this.renderer = new Ge({
            canvas: this.canvas,
            antialias: this.quality >= Ae.MEDIUM,
            alpha: !0,
            premultipliedAlpha: !0,
            dpr: this.vp.dpr,
            preserveDrawingBuffer: !1,
          })),
          this.renderer.setSize(this.vp.width, this.vp.height);
        let t = this.renderer.gl;
        (this.camera = new Wt(t, { aspect: this.vp.width / this.vp.height })),
          (this.camera.position.z = 10),
          (this.scene = new wt()),
          (this.gl = t),
          (this.viewSize = this.getViewSizeAtDepth()),
          (this.uViewSize = { value: new B(this.viewSize.width, this.viewSize.height) }),
          (this.uResolution = { value: new B(this.vp.width, this.vp.height) }),
          (this.shouldDownload = !1),
          (this.uTime = { value: 0 }),
          (this.uTimeDelta = { value: 0 });
        let e = new bn(t);
        e.setDecoderPath("/draco/"), e.preload(), (this.draco = e), (this.lastTime = 0), er(this, ["init", "tick", "resize"]);
      }
      setQuality(t) {
        (this.quality = t), I.emit("gl-quality");
      }
      disposeDraco() {
        this.draco != null && (this.draco.dispose(), (this.draco = null));
      }
      getViewSizeAtDepth(t = 0) {
        let e = (this.camera.fov * Math.PI) / 180,
          r = Math.abs((this.camera.position.z - t) * Math.tan(e / 2) * 2);
        return { width: r * this.camera.aspect, height: r };
      }
      loadAssets() {
        return new Promise((t) => {
          t();
        });
      }
      init() {
        this.addEvents();
      }
      addEvents() {
        I.on("resize", this.resize), this.tick(0);
      }
      resize() {
        (this.vp.width = this.container.offsetWidth),
          (this.vp.height = this.container.offsetHeight),
          (this.vp.dpr = Math.min(window.devicePixelRatio, Rn(this.quality))),
          this.camera.perspective({ aspect: this.vp.width / this.vp.height }),
          this.renderer.setSize(this.vp.width, this.vp.height),
          (this.viewSize = this.getViewSizeAtDepth()),
          (this.uResolution.value.x = this.vp.width),
          (this.uResolution.value.y = this.vp.height),
          (this.uViewSize.value.x = this.viewSize.width),
          (this.uViewSize.value.y = this.viewSize.height),
          I.emit("gl-resize");
      }
      update(t, e) {
        (this.uTime.value = t), (this.uTimeDelta.value = e), I.emit("gl-update", t, e);
      }
      render() {
        this.renderer.render({ scene: this.scene, camera: this.camera });
      }
      tick(t) {
        let e = t - this.lastTime;
        this.lastTime = t;
        let r = window.stats;
        r && r.begin(), this.update(t, e), this.render(t, e), r && r.end(), requestAnimationFrame(this.tick);
      }
    },
    ar = window.gl;
  ar == null && ((ar = new Sn()), (window.gl = ar));
  var G = ar;
  var Cn = class {
      constructor(t) {
        (this.index = t),
          (this.stopDemo = this.stopDemo.bind(this)),
          (this.startDemo = this.startDemo.bind(this)),
          (this.animateOut = this.animateOut.bind(this));
      }
      addEvents() {
        I.on("stop-demo", this.stopDemo), I.on("renderAnimateOut", this.animateOut);
      }
      stopDemo() {
        this.removeEvents();
      }
      animateOut() {}
      removeEvents() {
        I.off("stop-demo", this.stopDemo), I.off("start-demo", this.startDemo), I.off("renderAnimateOut", this.animateOut);
      }
      startDemo() {
        this.addEvents();
      }
    },
    On = Cn;
  var Kr = class {
      constructor(t, { data: e = new Float32Array(16), geometry: r = new Qt(t), type: s, filter: n = t.NEAREST }) {
        this.gl = t;
        let a = e;
        (this.passes = []),
          (this.geometry = r),
          (this.dataLength = a.length / 4),
          (this.size = Math.pow(2, Math.ceil(Math.log(Math.ceil(Math.sqrt(this.dataLength))) / Math.LN2))),
          (this.coords = new Float32Array(this.dataLength * 2));
        for (let l = 0; l < this.dataLength; l++) {
          let c = (l % this.size) / this.size,
            u = Math.floor(l / this.size) / this.size;
          this.coords.set([c, u], l * 2);
        }
        let o = (() => {
          if (a.length === this.size * this.size * 4) return a;
          {
            let l = new Float32Array(this.size * this.size * 4);
            return l.set(a), l;
          }
        })();
        this.uniform = {
          value: new $(t, {
            image: o,
            target: t.TEXTURE_2D,
            type: t.FLOAT,
            format: t.RGBA,
            internalFormat: t.renderer.isWebgl2 ? t.RGBA32F : t.RGBA,
            wrapS: t.CLAMP_TO_EDGE,
            wrapT: t.CLAMP_TO_EDGE,
            generateMipmaps: !1,
            minFilter: n,
            magFilter: n,
            width: this.size,
            flipY: !1,
          }),
        };
        let h = {
          width: this.size,
          height: this.size,
          type: s || t.HALF_FLOAT || t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES,
          format: t.RGBA,
          internalFormat: t.renderer.isWebgl2 ? (s === t.FLOAT ? t.RGBA32F : t.RGBA16F) : t.RGBA,
          minFilter: n,
          depth: !1,
          unpackAlignment: 1,
        };
        this.fbo = {
          read: new bt(t, h),
          write: new bt(t, h),
          swap: () => {
            let l = this.fbo.read;
            (this.fbo.read = this.fbo.write), (this.fbo.write = l), (this.uniform.value = this.fbo.read.texture);
          },
        };
      }
      addPass({ vertex: t = wo, fragment: e = vo, uniforms: r = {}, textureUniform: s = "tMap", enabled: n = !0 } = {}) {
        r[s] = this.uniform;
        let a = new ut(this.gl, { vertex: t, fragment: e, uniforms: r }),
          h = { mesh: new ht(this.gl, { geometry: this.geometry, program: a }), program: a, uniforms: r, enabled: n, textureUniform: s };
        return this.passes.push(h), h;
      }
      render() {
        this.passes
          .filter((e) => e.enabled)
          .forEach((e, r) => {
            this.gl.renderer.render({ scene: e.mesh, target: this.fbo.write, clear: !1 }), this.fbo.swap();
          });
      }
    },
    wo = `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,
    vo = `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;
  function At(i) {
    if (i === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i;
  }
  function Dn(i, t) {
    (i.prototype = Object.create(t.prototype)), (i.prototype.constructor = i), (i.__proto__ = t);
  }
  var st = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    fe = { duration: 0.5, overwrite: !1, delay: 0 },
    Zr,
    mt = 1e8,
    D = 1 / mt,
    Jr = Math.PI * 2,
    Mo = Jr / 4,
    To = 0,
    zn = Math.sqrt,
    bo = Math.cos,
    Eo = Math.sin,
    q = function (t) {
      return typeof t == "string";
    },
    Y = function (t) {
      return typeof t == "function";
    },
    Pt = function (t) {
      return typeof t == "number";
    },
    or = function (t) {
      return typeof t == "undefined";
    },
    Ft = function (t) {
      return typeof t == "object";
    },
    nt = function (t) {
      return t !== !1;
    },
    Ln = function () {
      return typeof window != "undefined";
    },
    hr = function (t) {
      return Y(t) || q(t);
    },
    In = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
    K = Array.isArray,
    ti = /(?:-?\.?\d|\.)+/gi,
    ei = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ri = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ii = /[+-]=-?[.\d]+/,
    kn = /[^,'"\[\]\s]+/gi,
    Ao = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    k,
    vt,
    si,
    ni,
    lt = {},
    lr = {},
    Nn,
    Bn = function (t) {
      return (lr = re(t, lt)) && ct;
    },
    cr = function (t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    },
    ur = function (t, e) {
      return !e && console.warn(t);
    },
    Un = function (t, e) {
      return (t && (lt[t] = e) && lr && (lr[t] = e)) || lt;
    },
    Pe = function () {
      return 0;
    },
    ai = {},
    Dt = [],
    oi = {},
    Vn,
    at = {},
    hi = {},
    jn = 30,
    fr = [],
    li = "",
    ci = function (t) {
      var e = t[0],
        r,
        s;
      if ((Ft(e) || Y(e) || (t = [t]), !(r = (e._gsap || {}).harness))) {
        for (s = fr.length; s-- && !fr[s].targetTest(e); );
        r = fr[s];
      }
      for (s = t.length; s--; ) (t[s] && (t[s]._gsap || (t[s]._gsap = new wi(t[s], r)))) || t.splice(s, 1);
      return t;
    },
    zt = function (t) {
      return t._gsap || ci(xt(t))[0]._gsap;
    },
    ui = function (t, e, r) {
      return (r = t[e]) && Y(r) ? t[e]() : (or(r) && t.getAttribute && t.getAttribute(e)) || r;
    },
    tt = function (t, e) {
      return (t = t.split(",")).forEach(e) || t;
    },
    U = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    Z = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    ee = function (t, e) {
      var r = e.charAt(0),
        s = parseFloat(e.substr(2));
      return (t = parseFloat(t)), r === "+" ? t + s : r === "-" ? t - s : r === "*" ? t * s : t / s;
    },
    Po = function (t, e) {
      for (var r = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < r; );
      return s < r;
    },
    dr = function () {
      var t = Dt.length,
        e = Dt.slice(0),
        r,
        s;
      for (oi = {}, Dt.length = 0, r = 0; r < t; r++) (s = e[r]), s && s._lazy && (s.render(s._lazy[0], s._lazy[1], !0)._lazy = 0);
    },
    Gn = function (t, e, r, s) {
      Dt.length && dr(), t.render(e, r, s), Dt.length && dr();
    },
    qn = function (t) {
      var e = parseFloat(t);
      return (e || e === 0) && (t + "").match(kn).length < 2 ? e : q(t) ? t.trim() : t;
    },
    Xn = function (t) {
      return t;
    },
    gt = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    },
    Fo = function (t) {
      return function (e, r) {
        for (var s in r) s in e || (s === "duration" && t) || s === "ease" || (e[s] = r[s]);
      };
    },
    re = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Yn = function i(t, e) {
      for (var r in e) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Ft(e[r]) ? i(t[r] || (t[r] = {}), e[r]) : e[r]);
      return t;
    },
    pr = function (t, e) {
      var r = {},
        s;
      for (s in t) s in e || (r[s] = t[s]);
      return r;
    },
    Fe = function (t) {
      var e = t.parent || k,
        r = t.keyframes ? Fo(K(t.keyframes)) : gt;
      if (nt(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
      return t;
    },
    Ro = function (t, e) {
      for (var r = t.length, s = r === e.length; s && r-- && t[r] === e[r]; );
      return r < 0;
    },
    Wn = function (t, e, r, s, n) {
      r === void 0 && (r = "_first"), s === void 0 && (s = "_last");
      var a = t[s],
        o;
      if (n) for (o = e[n]; a && a[n] > o; ) a = a._prev;
      return (
        a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[r]), (t[r] = e)),
        e._next ? (e._next._prev = e) : (t[s] = e),
        (e._prev = a),
        (e.parent = e._dp = t),
        e
      );
    },
    mr = function (t, e, r, s) {
      r === void 0 && (r = "_first"), s === void 0 && (s = "_last");
      var n = e._prev,
        a = e._next;
      n ? (n._next = a) : t[r] === e && (t[r] = a), a ? (a._prev = n) : t[s] === e && (t[s] = n), (e._next = e._prev = e.parent = null);
    },
    Rt = function (t, e) {
      t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), (t._act = 0);
    },
    ie = function (t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
      return t;
    },
    So = function (t) {
      for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
      return t;
    },
    Co = function i(t) {
      return !t || (t._ts && i(t.parent));
    },
    Hn = function (t) {
      return t._repeat ? de(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    de = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    gr = function (t, e) {
      return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    },
    _r = function (t) {
      return (t._end = Z(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0)));
    },
    fi = function (t, e) {
      var r = t._dp;
      return (
        r &&
          r.smoothChildTiming &&
          t._ts &&
          ((t._start = Z(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))), _r(t), r._dirty || ie(r, t)),
        t
      );
    },
    Qn = function (t, e) {
      var r;
      if (
        ((e._time || (e._initted && !e._dur)) && ((r = gr(t.rawTime(), e)), (!e._dur || Se(0, e.totalDuration(), r) - e._tTime > D) && e.render(r, !0)),
        ie(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration()) for (r = t; r._dp; ) r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
        t._zTime = -D;
      }
    },
    Mt = function (t, e, r, s) {
      return (
        e.parent && Rt(e),
        (e._start = Z((Pt(r) ? r : r || t !== k ? _t(t, r, e) : t._time) + e._delay)),
        (e._end = Z(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
        Wn(t, e, "_first", "_last", t._sort ? "_start" : 0),
        di(e) || (t._recent = e),
        s || Qn(t, e),
        t
      );
    },
    $n = function (t, e) {
      return (lt.ScrollTrigger || cr("scrollTrigger", e)) && lt.ScrollTrigger.create(e, t);
    },
    Kn = function (t, e, r, s) {
      if ((bi(t, e), !t._initted)) return 1;
      if (!r && t._pt && ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) && Vn !== ot.frame) return Dt.push(t), (t._lazy = [e, s]), 1;
    },
    Oo = function i(t) {
      var e = t.parent;
      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || i(e));
    },
    di = function (t) {
      var e = t.data;
      return e === "isFromStart" || e === "isStart";
    },
    Do = function (t, e, r, s) {
      var n = t.ratio,
        a = e < 0 || (!e && ((!t._start && Oo(t) && !(!t._initted && di(t))) || ((t._ts < 0 || t._dp._ts < 0) && !di(t)))) ? 0 : 1,
        o = t._rDelay,
        h = 0,
        l,
        c,
        u;
      if (
        (o &&
          t._repeat &&
          ((h = Se(0, t._tDur, e)),
          (c = de(h, o)),
          t._yoyo && c & 1 && (a = 1 - a),
          c !== de(t._tTime, o) && ((n = 1 - a), t.vars.repeatRefresh && t._initted && t.invalidate())),
        a !== n || s || t._zTime === D || (!e && t._zTime))
      ) {
        if (!t._initted && Kn(t, e, s, r)) return;
        for (u = t._zTime, t._zTime = e || (r ? D : 0), r || (r = e && !u), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = h, l = t._pt; l; )
          l.r(a, l.d), (l = l._next);
        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
          t._onUpdate && !r && yt(t, "onUpdate"),
          h && t._repeat && !r && t.parent && yt(t, "onRepeat"),
          (e >= t._tDur || e < 0) && t.ratio === a && (a && Rt(t, 1), r || (yt(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
      } else t._zTime || (t._zTime = e);
    },
    zo = function (t, e, r) {
      var s;
      if (r > e)
        for (s = t._first; s && s._start <= r; ) {
          if (s.data === "isPause" && s._start > e) return s;
          s = s._next;
        }
      else
        for (s = t._last; s && s._start >= r; ) {
          if (s.data === "isPause" && s._start < e) return s;
          s = s._prev;
        }
    },
    pe = function (t, e, r, s) {
      var n = t._repeat,
        a = Z(e) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !s && (t._time *= a / t._dur),
        (t._dur = a),
        (t._tDur = n ? (n < 0 ? 1e10 : Z(a * (n + 1) + t._rDelay * n)) : a),
        o > 0 && !s ? fi(t, (t._tTime = t._tDur * o)) : t.parent && _r(t),
        r || ie(t.parent, t),
        t
      );
    },
    Zn = function (t) {
      return t instanceof J ? ie(t) : pe(t, t._dur);
    },
    Lo = { _start: 0, endTime: Pe, totalDuration: Pe },
    _t = function i(t, e, r) {
      var s = t.labels,
        n = t._recent || Lo,
        a = t.duration() >= mt ? n.endTime(!1) : t._dur,
        o,
        h,
        l;
      return q(e) && (isNaN(e) || e in s)
        ? ((h = e.charAt(0)),
          (l = e.substr(-1) === "%"),
          (o = e.indexOf("=")),
          h === "<" || h === ">"
            ? (o >= 0 && (e = e.replace(/=/, "")),
              (h === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1))
            : o < 0
            ? (e in s || (s[e] = a), s[e])
            : ((h = parseFloat(e.charAt(o - 1) + e.substr(o + 1))),
              l && r && (h = (h / 100) * (K(r) ? r[0] : r).totalDuration()),
              o > 1 ? i(t, e.substr(0, o - 1), r) + h : a + h))
        : e == null
        ? a
        : +e;
    },
    Re = function (t, e, r) {
      var s = Pt(e[1]),
        n = (s ? 2 : 1) + (t < 2 ? 0 : 1),
        a = e[n],
        o,
        h;
      if ((s && (a.duration = e[1]), (a.parent = r), t)) {
        for (o = a, h = r; h && !("immediateRender" in o); ) (o = h.vars.defaults || {}), (h = nt(h.vars.inherit) && h.parent);
        (a.immediateRender = nt(o.immediateRender)), t < 2 ? (a.runBackwards = 1) : (a.startAt = e[n - 1]);
      }
      return new X(e[0], a, e[n + 1]);
    },
    Lt = function (t, e) {
      return t || t === 0 ? e(t) : e;
    },
    Se = function (t, e, r) {
      return r < t ? t : r > e ? e : r;
    },
    H = function (t, e) {
      return !q(t) || !(e = Ao.exec(t)) ? "" : e[1];
    },
    Io = function (t, e, r) {
      return Lt(r, function (s) {
        return Se(t, e, s);
      });
    },
    pi = [].slice,
    Jn = function (t, e) {
      return t && Ft(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && Ft(t[0]))) && !t.nodeType && t !== vt;
    },
    ko = function (t, e, r) {
      return (
        r === void 0 && (r = []),
        t.forEach(function (s) {
          var n;
          return (q(s) && !e) || Jn(s, 1) ? (n = r).push.apply(n, xt(s)) : r.push(s);
        }) || r
      );
    },
    xt = function (t, e, r) {
      return q(t) && !r && (si || !_e()) ? pi.call((e || ni).querySelectorAll(t), 0) : K(t) ? ko(t, r) : Jn(t) ? pi.call(t, 0) : t ? [t] : [];
    },
    No = function (t) {
      return (
        (t = xt(t)[0] || ur("Invalid scope") || {}),
        function (e) {
          var r = t.current || t.nativeElement || t;
          return xt(e, r.querySelectorAll ? r : r === t ? ur("Invalid scope") || ni.createElement("div") : t);
        }
      );
    },
    ta = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    ea = function (t) {
      if (Y(t)) return t;
      var e = Ft(t) ? t : { each: t },
        r = se(e.ease),
        s = e.from || 0,
        n = parseFloat(e.base) || 0,
        a = {},
        o = s > 0 && s < 1,
        h = isNaN(s) || o,
        l = e.axis,
        c = s,
        u = s;
      return (
        q(s) ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !o && h && ((c = s[0]), (u = s[1])),
        function (f, d, m) {
          var p = (m || e).length,
            g = a[p],
            _,
            y,
            x,
            w,
            M,
            v,
            T,
            E,
            b;
          if (!g) {
            if (((b = e.grid === "auto" ? 0 : (e.grid || [1, mt])[1]), !b)) {
              for (T = -mt; T < (T = m[b++].getBoundingClientRect().left) && b < p; );
              b--;
            }
            for (
              g = a[p] = [], _ = h ? Math.min(b, p) * c - 0.5 : s % b, y = b === mt ? 0 : h ? (p * u) / b - 0.5 : (s / b) | 0, T = 0, E = mt, v = 0;
              v < p;
              v++
            )
              (x = (v % b) - _), (w = y - ((v / b) | 0)), (g[v] = M = l ? Math.abs(l === "y" ? w : x) : zn(x * x + w * w)), M > T && (T = M), M < E && (E = M);
            s === "random" && ta(g),
              (g.max = T - E),
              (g.min = E),
              (g.v = p =
                (parseFloat(e.amount) || parseFloat(e.each) * (b > p ? p - 1 : l ? (l === "y" ? p / b : b) : Math.max(b, p / b)) || 0) *
                (s === "edges" ? -1 : 1)),
              (g.b = p < 0 ? n - p : n),
              (g.u = H(e.amount || e.each) || 0),
              (r = r && p < 0 ? ca(r) : r);
          }
          return (p = (g[f] - g.min) / g.max || 0), Z(g.b + (r ? r(p) : p) * g.v) + g.u;
        }
      );
    },
    mi = function (t) {
      var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (r) {
        var s = Math.round(parseFloat(r) / t) * t * e;
        return (s - (s % 1)) / e + (Pt(r) ? 0 : H(r));
      };
    },
    ra = function (t, e) {
      var r = K(t),
        s,
        n;
      return (
        !r && Ft(t) && ((s = r = t.radius || mt), t.values ? ((t = xt(t.values)), (n = !Pt(t[0])) && (s *= s)) : (t = mi(t.increment))),
        Lt(
          e,
          r
            ? Y(t)
              ? function (a) {
                  return (n = t(a)), Math.abs(n - a) <= s ? n : a;
                }
              : function (a) {
                  for (var o = parseFloat(n ? a.x : a), h = parseFloat(n ? a.y : 0), l = mt, c = 0, u = t.length, f, d; u--; )
                    n ? ((f = t[u].x - o), (d = t[u].y - h), (f = f * f + d * d)) : (f = Math.abs(t[u] - o)), f < l && ((l = f), (c = u));
                  return (c = !s || l <= s ? t[c] : a), n || c === a || Pt(a) ? c : c + H(a);
                }
            : mi(t),
        )
      );
    },
    ia = function (t, e, r, s) {
      return Lt(K(t) ? !e : r === !0 ? !!(r = 0) : !s, function () {
        return K(t)
          ? t[~~(Math.random() * t.length)]
          : (r = r || 1e-5) &&
              (s = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
              Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * s) / s;
      });
    },
    Bo = function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      return function (s) {
        return e.reduce(function (n, a) {
          return a(n);
        }, s);
      };
    },
    Uo = function (t, e) {
      return function (r) {
        return t(parseFloat(r)) + (e || H(r));
      };
    },
    Vo = function (t, e, r) {
      return na(t, e, 0, 1, r);
    },
    sa = function (t, e, r) {
      return Lt(r, function (s) {
        return t[~~e(s)];
      });
    },
    jo = function i(t, e, r) {
      var s = e - t;
      return K(t)
        ? sa(t, i(0, t.length), e)
        : Lt(r, function (n) {
            return ((s + ((n - t) % s)) % s) + t;
          });
    },
    Go = function i(t, e, r) {
      var s = e - t,
        n = s * 2;
      return K(t)
        ? sa(t, i(0, t.length - 1), e)
        : Lt(r, function (a) {
            return (a = (n + ((a - t) % n)) % n || 0), t + (a > s ? n - a : a);
          });
    },
    me = function (t) {
      for (var e = 0, r = "", s, n, a, o; ~(s = t.indexOf("random(", e)); )
        (a = t.indexOf(")", s)),
          (o = t.charAt(s + 7) === "["),
          (n = t.substr(s + 7, a - s - 7).match(o ? kn : ti)),
          (r += t.substr(e, s - e) + ia(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (e = a + 1);
      return r + t.substr(e, t.length - e);
    },
    na = function (t, e, r, s, n) {
      var a = e - t,
        o = s - r;
      return Lt(n, function (h) {
        return r + (((h - t) / a) * o || 0);
      });
    },
    qo = function i(t, e, r, s) {
      var n = isNaN(t + e)
        ? 0
        : function (d) {
            return (1 - d) * t + d * e;
          };
      if (!n) {
        var a = q(t),
          o = {},
          h,
          l,
          c,
          u,
          f;
        if ((r === !0 && (s = 1) && (r = null), a)) (t = { p: t }), (e = { p: e });
        else if (K(t) && !K(e)) {
          for (c = [], u = t.length, f = u - 2, l = 1; l < u; l++) c.push(i(t[l - 1], t[l]));
          u--,
            (n = function (m) {
              m *= u;
              var p = Math.min(f, ~~m);
              return c[p](m - p);
            }),
            (r = e);
        } else s || (t = re(K(t) ? [] : {}, t));
        if (!c) {
          for (h in e) vi.call(o, t, h, "get", e[h]);
          n = function (m) {
            return Pi(m, o) || (a ? t.p : t);
          };
        }
      }
      return Lt(r, n);
    },
    aa = function (t, e, r) {
      var s = t.labels,
        n = mt,
        a,
        o,
        h;
      for (a in s) (o = s[a] - e), o < 0 == !!r && o && n > (o = Math.abs(o)) && ((h = a), (n = o));
      return h;
    },
    yt = function (t, e, r) {
      var s = t.vars,
        n = s[e],
        a,
        o;
      if (!!n) return (a = s[e + "Params"]), (o = s.callbackScope || t), r && Dt.length && dr(), a ? n.apply(o, a) : n.call(o);
    },
    Ce = function (t) {
      return Rt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && yt(t, "onInterrupt"), t;
    },
    ge,
    Xo = function (t) {
      t = (!t.name && t.default) || t;
      var e = t.name,
        r = Y(t),
        s =
          e && !r && t.init
            ? function () {
                this._props = [];
              }
            : t,
        n = { init: Pe, render: Pi, add: vi, kill: oh, modifier: ah, rawVars: 0 },
        a = { targetTest: 0, get: 0, getSetter: xr, aliases: {}, register: 0 };
      if ((_e(), t !== s)) {
        if (at[e]) return;
        gt(s, gt(pr(t, n), a)),
          re(s.prototype, re(n, pr(t, a))),
          (at[(s.prop = e)] = s),
          t.targetTest && (fr.push(s), (ai[e] = 1)),
          (e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
      }
      Un(e, s), t.register && t.register(ct, s, et);
    },
    z = 255,
    Oe = {
      aqua: [0, z, z],
      lime: [0, z, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, z],
      navy: [0, 0, 128],
      white: [z, z, z],
      olive: [128, 128, 0],
      yellow: [z, z, 0],
      orange: [z, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [z, 0, 0],
      pink: [z, 192, 203],
      cyan: [0, z, z],
      transparent: [z, z, z, 0],
    },
    gi = function (t, e, r) {
      return (t += t < 0 ? 1 : t > 1 ? -1 : 0), ((t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * z + 0.5) | 0;
    },
    oa = function (t, e, r) {
      var s = t ? (Pt(t) ? [t >> 16, (t >> 8) & z, t & z] : 0) : Oe.black,
        n,
        a,
        o,
        h,
        l,
        c,
        u,
        f,
        d,
        m;
      if (!s) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Oe[t])) s = Oe[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)), (a = t.charAt(2)), (o = t.charAt(3)), (t = "#" + n + n + a + a + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (s = parseInt(t.substr(1, 6), 16)), [s >> 16, (s >> 8) & z, s & z, parseInt(t.substr(7), 16) / 255];
          (t = parseInt(t.substr(1), 16)), (s = [t >> 16, (t >> 8) & z, t & z]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((s = m = t.match(ti)), !e))
            (h = (+s[0] % 360) / 360),
              (l = +s[1] / 100),
              (c = +s[2] / 100),
              (a = c <= 0.5 ? c * (l + 1) : c + l - c * l),
              (n = c * 2 - a),
              s.length > 3 && (s[3] *= 1),
              (s[0] = gi(h + 1 / 3, n, a)),
              (s[1] = gi(h, n, a)),
              (s[2] = gi(h - 1 / 3, n, a));
          else if (~t.indexOf("=")) return (s = t.match(ei)), r && s.length < 4 && (s[3] = 1), s;
        } else s = t.match(ti) || Oe.transparent;
        s = s.map(Number);
      }
      return (
        e &&
          !m &&
          ((n = s[0] / z),
          (a = s[1] / z),
          (o = s[2] / z),
          (u = Math.max(n, a, o)),
          (f = Math.min(n, a, o)),
          (c = (u + f) / 2),
          u === f
            ? (h = l = 0)
            : ((d = u - f),
              (l = c > 0.5 ? d / (2 - u - f) : d / (u + f)),
              (h = u === n ? (a - o) / d + (a < o ? 6 : 0) : u === a ? (o - n) / d + 2 : (n - a) / d + 4),
              (h *= 60)),
          (s[0] = ~~(h + 0.5)),
          (s[1] = ~~(l * 100 + 0.5)),
          (s[2] = ~~(c * 100 + 0.5))),
        r && s.length < 4 && (s[3] = 1),
        s
      );
    },
    ha = function (t) {
      var e = [],
        r = [],
        s = -1;
      return (
        t.split(St).forEach(function (n) {
          var a = n.match(te) || [];
          e.push.apply(e, a), r.push((s += a.length + 1));
        }),
        (e.c = r),
        e
      );
    },
    la = function (t, e, r) {
      var s = "",
        n = (t + s).match(St),
        a = e ? "hsla(" : "rgba(",
        o = 0,
        h,
        l,
        c,
        u;
      if (!n) return t;
      if (
        ((n = n.map(function (f) {
          return (f = oa(f, e, 1)) && a + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
        })),
        r && ((c = ha(t)), (h = r.c), h.join(s) !== c.c.join(s)))
      )
        for (l = t.replace(St, "1").split(te), u = l.length - 1; o < u; o++)
          s += l[o] + (~h.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (c.length ? c : n.length ? n : r).shift());
      if (!l) for (l = t.split(St), u = l.length - 1; o < u; o++) s += l[o] + n[o];
      return s + l[u];
    },
    St = (function () {
      var i = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Oe) i += "|" + t + "\\b";
      return new RegExp(i + ")", "gi");
    })(),
    Yo = /hsl[a]?\(/,
    _i = function (t) {
      var e = t.join(" "),
        r;
      if (((St.lastIndex = 0), St.test(e))) return (r = Yo.test(e)), (t[1] = la(t[1], r)), (t[0] = la(t[0], r, ha(t[1]))), !0;
    },
    De,
    ot = (function () {
      var i = Date.now,
        t = 500,
        e = 33,
        r = i(),
        s = r,
        n = 1e3 / 240,
        a = n,
        o = [],
        h,
        l,
        c,
        u,
        f,
        d,
        m = function p(g) {
          var _ = i() - s,
            y = g === !0,
            x,
            w,
            M,
            v;
          if (
            (_ > t && (r += _ - e),
            (s += _),
            (M = s - r),
            (x = M - a),
            (x > 0 || y) && ((v = ++u.frame), (f = M - u.time * 1e3), (u.time = M = M / 1e3), (a += x + (x >= n ? 4 : n - x)), (w = 1)),
            y || (h = l(p)),
            w)
          )
            for (d = 0; d < o.length; d++) o[d](M, f, v, g);
        };
      return (
        (u = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (g) {
            return f / (1e3 / (g || 60));
          },
          wake: function () {
            Nn &&
              (!si &&
                Ln() &&
                ((vt = si = window),
                (ni = vt.document || {}),
                (lt.gsap = ct),
                (vt.gsapVersions || (vt.gsapVersions = [])).push(ct.version),
                Bn(lr || vt.GreenSockGlobals || (!vt.gsap && vt) || {}),
                (c = vt.requestAnimationFrame)),
              h && u.sleep(),
              (l =
                c ||
                function (g) {
                  return setTimeout(g, (a - u.time * 1e3 + 1) | 0);
                }),
              (De = 1),
              m(2));
          },
          sleep: function () {
            (c ? vt.cancelAnimationFrame : clearTimeout)(h), (De = 0), (l = Pe);
          },
          lagSmoothing: function (g, _) {
            (t = g || 1 / D), (e = Math.min(_, t, 0));
          },
          fps: function (g) {
            (n = 1e3 / (g || 240)), (a = u.time * 1e3 + n);
          },
          add: function (g, _, y) {
            var x = _
              ? function (w, M, v, T) {
                  g(w, M, v, T), u.remove(x);
                }
              : g;
            return u.remove(g), o[y ? "unshift" : "push"](x), _e(), x;
          },
          remove: function (g, _) {
            ~(_ = o.indexOf(g)) && o.splice(_, 1) && d >= _ && d--;
          },
          _listeners: o,
        }),
        u
      );
    })(),
    _e = function () {
      return !De && ot.wake();
    },
    O = {},
    Wo = /^[\d.\-M][\d.\-,\s]/,
    Ho = /["']/g,
    Qo = function (t) {
      for (var e = {}, r = t.substr(1, t.length - 3).split(":"), s = r[0], n = 1, a = r.length, o, h, l; n < a; n++)
        (h = r[n]),
          (o = n !== a - 1 ? h.lastIndexOf(",") : h.length),
          (l = h.substr(0, o)),
          (e[s] = isNaN(l) ? l.replace(Ho, "").trim() : +l),
          (s = h.substr(o + 1).trim());
      return e;
    },
    $o = function (t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        s = t.indexOf("(", e);
      return t.substring(e, ~s && s < r ? t.indexOf(")", r + 1) : r);
    },
    Ko = function (t) {
      var e = (t + "").split("("),
        r = O[e[0]];
      return r && e.length > 1 && r.config
        ? r.config.apply(null, ~t.indexOf("{") ? [Qo(e[1])] : $o(t).split(",").map(qn))
        : O._CE && Wo.test(t)
        ? O._CE("", t)
        : r;
    },
    ca = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    ua = function i(t, e) {
      for (var r = t._first, s; r; )
        r instanceof J
          ? i(r, e)
          : r.vars.yoyoEase &&
            (!r._yoyo || !r._repeat) &&
            r._yoyo !== e &&
            (r.timeline ? i(r.timeline, e) : ((s = r._ease), (r._ease = r._yEase), (r._yEase = s), (r._yoyo = e))),
          (r = r._next);
    },
    se = function (t, e) {
      return (t && (Y(t) ? t : O[t] || Ko(t))) || e;
    },
    ne = function (t, e, r, s) {
      r === void 0 &&
        (r = function (h) {
          return 1 - e(1 - h);
        }),
        s === void 0 &&
          (s = function (h) {
            return h < 0.5 ? e(h * 2) / 2 : 1 - e((1 - h) * 2) / 2;
          });
      var n = { easeIn: e, easeOut: r, easeInOut: s },
        a;
      return (
        tt(t, function (o) {
          (O[o] = lt[o] = n), (O[(a = o.toLowerCase())] = r);
          for (var h in n) O[a + (h === "easeIn" ? ".in" : h === "easeOut" ? ".out" : ".inOut")] = O[o + "." + h] = n[h];
        }),
        n
      );
    },
    fa = function (t) {
      return function (e) {
        return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
      };
    },
    xi = function i(t, e, r) {
      var s = e >= 1 ? e : 1,
        n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
        a = (n / Jr) * (Math.asin(1 / s) || 0),
        o = function (c) {
          return c === 1 ? 1 : s * Math.pow(2, -10 * c) * Eo((c - a) * n) + 1;
        },
        h =
          t === "out"
            ? o
            : t === "in"
            ? function (l) {
                return 1 - o(1 - l);
              }
            : fa(o);
      return (
        (n = Jr / n),
        (h.config = function (l, c) {
          return i(t, l, c);
        }),
        h
      );
    },
    yi = function i(t, e) {
      e === void 0 && (e = 1.70158);
      var r = function (a) {
          return a ? --a * a * ((e + 1) * a + e) + 1 : 0;
        },
        s =
          t === "out"
            ? r
            : t === "in"
            ? function (n) {
                return 1 - r(1 - n);
              }
            : fa(r);
      return (
        (s.config = function (n) {
          return i(t, n);
        }),
        s
      );
    };
  tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (i, t) {
    var e = t < 5 ? t + 1 : t;
    ne(
      i + ",Power" + (e - 1),
      t
        ? function (r) {
            return Math.pow(r, e);
          }
        : function (r) {
            return r;
          },
      function (r) {
        return 1 - Math.pow(1 - r, e);
      },
      function (r) {
        return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
      },
    );
  });
  O.Linear.easeNone = O.none = O.Linear.easeIn;
  ne("Elastic", xi("in"), xi("out"), xi());
  (function (i, t) {
    var e = 1 / t,
      r = 2 * e,
      s = 2.5 * e,
      n = function (o) {
        return o < e
          ? i * o * o
          : o < r
          ? i * Math.pow(o - 1.5 / t, 2) + 0.75
          : o < s
          ? i * (o -= 2.25 / t) * o + 0.9375
          : i * Math.pow(o - 2.625 / t, 2) + 0.984375;
      };
    ne(
      "Bounce",
      function (a) {
        return 1 - n(1 - a);
      },
      n,
    );
  })(7.5625, 2.75);
  ne("Expo", function (i) {
    return i ? Math.pow(2, 10 * (i - 1)) : 0;
  });
  ne("Circ", function (i) {
    return -(zn(1 - i * i) - 1);
  });
  ne("Sine", function (i) {
    return i === 1 ? 1 : -bo(i * Mo) + 1;
  });
  ne("Back", yi("in"), yi("out"), yi());
  O.SteppedEase =
    O.steps =
    lt.SteppedEase =
      {
        config: function (t, e) {
          t === void 0 && (t = 1);
          var r = 1 / t,
            s = t + (e ? 0 : 1),
            n = e ? 1 : 0,
            a = 1 - D;
          return function (o) {
            return (((s * Se(0, a, o)) | 0) + n) * r;
          };
        },
      };
  fe.ease = O["quad.out"];
  tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (i) {
    return (li += i + "," + i + "Params,");
  });
  var wi = function (t, e) {
      (this.id = To++), (t._gsap = this), (this.target = t), (this.harness = e), (this.get = e ? e.get : ui), (this.set = e ? e.getSetter : xr);
    },
    ze = (function () {
      function i(e) {
        (this.vars = e),
          (this._delay = +e.delay || 0),
          (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
          (this._ts = 1),
          pe(this, +e.duration, 1, 1),
          (this.data = e.data),
          De || ot.wake();
      }
      var t = i.prototype;
      return (
        (t.delay = function (r) {
          return r || r === 0
            ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), (this._delay = r), this)
            : this._delay;
        }),
        (t.duration = function (r) {
          return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (r) {
          return arguments.length ? ((this._dirty = 0), pe(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
        }),
        (t.totalTime = function (r, s) {
          if ((_e(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (fi(this, r), !n._dp || n.parent || Qn(n, this); n && n.parent; )
              n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && r < this._tDur) || (this._ts < 0 && r > 0) || (!this._tDur && !r)) &&
              Mt(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== r ||
              (!this._dur && !s) ||
              (this._initted && Math.abs(this._zTime) === D) ||
              (!r && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = r), Gn(this, r, s)),
            this
          );
        }),
        (t.time = function (r, s) {
          return arguments.length
            ? this.totalTime(Math.min(this.totalDuration(), r + Hn(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), s)
            : this._time;
        }),
        (t.totalProgress = function (r, s) {
          return arguments.length ? this.totalTime(this.totalDuration() * r, s) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
        }),
        (t.progress = function (r, s) {
          return arguments.length
            ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Hn(this), s)
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (t.iteration = function (r, s) {
          var n = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (r - 1) * n, s) : this._repeat ? de(this._tTime, n) + 1 : 1;
        }),
        (t.timeScale = function (r) {
          if (!arguments.length) return this._rts === -D ? 0 : this._rts;
          if (this._rts === r) return this;
          var s = this.parent && this._ts ? gr(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +r || 0), (this._ts = this._ps || r === -D ? 0 : this._rts), this.totalTime(Se(-this._delay, this._tDur, s), !0), _r(this), So(this)
          );
        }),
        (t.paused = function (r) {
          return arguments.length
            ? (this._ps !== r &&
                ((this._ps = r),
                r
                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                  : (_e(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                      this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D),
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (r) {
          if (arguments.length) {
            this._start = r;
            var s = this.parent || this._dp;
            return s && (s._sort || !this.parent) && Mt(s, this, r - this._delay), this;
          }
          return this._start;
        }),
        (t.endTime = function (r) {
          return this._start + (nt(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
        }),
        (t.rawTime = function (r) {
          var s = this.parent || this._dp;
          return s
            ? r && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? gr(s.rawTime(r), this)
              : this._tTime
            : this._tTime;
        }),
        (t.globalTime = function (r) {
          for (var s = this, n = arguments.length ? r : s.rawTime(); s; ) (n = s._start + n / (s._ts || 1)), (s = s._dp);
          return n;
        }),
        (t.repeat = function (r) {
          return arguments.length ? ((this._repeat = r === 1 / 0 ? -2 : r), Zn(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
        }),
        (t.repeatDelay = function (r) {
          if (arguments.length) {
            var s = this._time;
            return (this._rDelay = r), Zn(this), s ? this.time(s) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (r) {
          return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
        }),
        (t.seek = function (r, s) {
          return this.totalTime(_t(this, r), nt(s));
        }),
        (t.restart = function (r, s) {
          return this.play().totalTime(r ? -this._delay : 0, nt(s));
        }),
        (t.play = function (r, s) {
          return r != null && this.seek(r, s), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (r, s) {
          return r != null && this.seek(r || this.totalDuration(), s), this.reversed(!0).paused(!1);
        }),
        (t.pause = function (r, s) {
          return r != null && this.seek(r, s), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (r) {
          return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -D : 0)), this) : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -D), this;
        }),
        (t.isActive = function () {
          var r = this.parent || this._dp,
            s = this._start,
            n;
          return !!(!r || (this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= s && n < this.endTime(!0) - D));
        }),
        (t.eventCallback = function (r, s, n) {
          var a = this.vars;
          return arguments.length > 1 ? (s ? ((a[r] = s), n && (a[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = s)) : delete a[r], this) : a[r];
        }),
        (t.then = function (r) {
          var s = this;
          return new Promise(function (n) {
            var a = Y(r) ? r : Xn,
              o = function () {
                var l = s.then;
                (s.then = null), Y(a) && (a = a(s)) && (a.then || a === s) && (s.then = l), n(a), (s.then = l);
              };
            (s._initted && s.totalProgress() === 1 && s._ts >= 0) || (!s._tTime && s._ts < 0) ? o() : (s._prom = o);
          });
        }),
        (t.kill = function () {
          Ce(this);
        }),
        i
      );
    })();
  gt(ze.prototype, {
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
    _zTime: -D,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var J = (function (i) {
    Dn(t, i);
    function t(r, s) {
      var n;
      return (
        r === void 0 && (r = {}),
        (n = i.call(this, r) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!r.smoothChildTiming),
        (n.autoRemoveChildren = !!r.autoRemoveChildren),
        (n._sort = nt(r.sortChildren)),
        k && Mt(r.parent || k, At(n), s),
        r.reversed && n.reverse(),
        r.paused && n.paused(!0),
        r.scrollTrigger && $n(At(n), r.scrollTrigger),
        n
      );
    }
    var e = t.prototype;
    return (
      (e.to = function (s, n, a) {
        return Re(0, arguments, this), this;
      }),
      (e.from = function (s, n, a) {
        return Re(1, arguments, this), this;
      }),
      (e.fromTo = function (s, n, a, o) {
        return Re(2, arguments, this), this;
      }),
      (e.set = function (s, n, a) {
        return (
          (n.duration = 0), (n.parent = this), Fe(n).repeatDelay || (n.repeat = 0), (n.immediateRender = !!n.immediateRender), new X(s, n, _t(this, a), 1), this
        );
      }),
      (e.call = function (s, n, a) {
        return Mt(this, X.delayedCall(0, s, n), a);
      }),
      (e.staggerTo = function (s, n, a, o, h, l, c) {
        return (a.duration = n), (a.stagger = a.stagger || o), (a.onComplete = l), (a.onCompleteParams = c), (a.parent = this), new X(s, a, _t(this, h)), this;
      }),
      (e.staggerFrom = function (s, n, a, o, h, l, c) {
        return (a.runBackwards = 1), (Fe(a).immediateRender = nt(a.immediateRender)), this.staggerTo(s, n, a, o, h, l, c);
      }),
      (e.staggerFromTo = function (s, n, a, o, h, l, c, u) {
        return (o.startAt = a), (Fe(o).immediateRender = nt(o.immediateRender)), this.staggerTo(s, n, o, h, l, c, u);
      }),
      (e.render = function (s, n, a) {
        var o = this._time,
          h = this._dirty ? this.totalDuration() : this._tDur,
          l = this._dur,
          c = s <= 0 ? 0 : Z(s),
          u = this._zTime < 0 != s < 0 && (this._initted || !l),
          f,
          d,
          m,
          p,
          g,
          _,
          y,
          x,
          w,
          M,
          v,
          T;
        if ((this !== k && c > h && s >= 0 && (c = h), c !== this._tTime || a || u)) {
          if (
            (o !== this._time && l && ((c += this._time - o), (s += this._time - o)),
            (f = c),
            (w = this._start),
            (x = this._ts),
            (_ = !x),
            u && (l || (o = this._zTime), (s || !n) && (this._zTime = s)),
            this._repeat)
          ) {
            if (((v = this._yoyo), (g = l + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(g * 100 + s, n, a);
            if (
              ((f = Z(c % g)),
              c === h ? ((p = this._repeat), (f = l)) : ((p = ~~(c / g)), p && p === c / g && ((f = l), p--), f > l && (f = l)),
              (M = de(this._tTime, g)),
              !o && this._tTime && M !== p && (M = p),
              v && p & 1 && ((f = l - f), (T = 1)),
              p !== M && !this._lock)
            ) {
              var E = v && M & 1,
                b = E === (v && p & 1);
              if (
                (p < M && (E = !E),
                (o = E ? 0 : l),
                (this._lock = 1),
                (this.render(o || (T ? 0 : Z(p * g)), n, !l)._lock = 0),
                (this._tTime = c),
                !n && this.parent && yt(this, "onRepeat"),
                this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
                (o && o !== this._time) || _ !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((l = this._dur),
                (h = this._tDur),
                b && ((this._lock = 2), (o = E ? l : -1e-4), this.render(o, !0), this.vars.repeatRefresh && !T && this.invalidate()),
                (this._lock = 0),
                !this._ts && !_)
              )
                return this;
              ua(this, T);
            }
          }
          if (
            (this._hasPause && !this._forcing && this._lock < 2 && ((y = zo(this, Z(o), Z(f))), y && (c -= f - (f = y._start))),
            (this._tTime = c),
            (this._time = f),
            (this._act = !x),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = s), (o = 0)),
            !o && f && !n && (yt(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (f >= o && s >= 0)
            for (d = this._first; d; ) {
              if (((m = d._next), (d._act || f >= d._start) && d._ts && y !== d)) {
                if (d.parent !== this) return this.render(s, n, a);
                if (
                  (d.render(d._ts > 0 ? (f - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (f - d._start) * d._ts, n, a),
                  f !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), m && (c += this._zTime = -D);
                  break;
                }
              }
              d = m;
            }
          else {
            d = this._last;
            for (var F = s < 0 ? s : f; d; ) {
              if (((m = d._prev), (d._act || F <= d._end) && d._ts && y !== d)) {
                if (d.parent !== this) return this.render(s, n, a);
                if (
                  (d.render(d._ts > 0 ? (F - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (F - d._start) * d._ts, n, a),
                  f !== this._time || (!this._ts && !_))
                ) {
                  (y = 0), m && (c += this._zTime = F ? -D : D);
                  break;
                }
              }
              d = m;
            }
          }
          if (y && !n && (this.pause(), (y.render(f >= o ? 0 : -D)._zTime = f >= o ? 1 : -1), this._ts))
            return (this._start = w), _r(this), this.render(s, n, a);
          this._onUpdate && !n && yt(this, "onUpdate", !0),
            ((c === h && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (w === this._start || Math.abs(x) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((s || !l) && ((c === h && this._ts > 0) || (!c && this._ts < 0)) && Rt(this, 1),
                !n &&
                  !(s < 0 && !o) &&
                  (c || o || !h) &&
                  (yt(this, c === h && s >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < h && this.timeScale() > 0) && this._prom())));
        }
        return this;
      }),
      (e.add = function (s, n) {
        var a = this;
        if ((Pt(n) || (n = _t(this, n, s)), !(s instanceof ze))) {
          if (K(s))
            return (
              s.forEach(function (o) {
                return a.add(o, n);
              }),
              this
            );
          if (q(s)) return this.addLabel(s, n);
          if (Y(s)) s = X.delayedCall(0, s);
          else return this;
        }
        return this !== s ? Mt(this, s, n) : this;
      }),
      (e.getChildren = function (s, n, a, o) {
        s === void 0 && (s = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), o === void 0 && (o = -mt);
        for (var h = [], l = this._first; l; )
          l._start >= o && (l instanceof X ? n && h.push(l) : (a && h.push(l), s && h.push.apply(h, l.getChildren(!0, n, a)))), (l = l._next);
        return h;
      }),
      (e.getById = function (s) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; ) if (n[a].vars.id === s) return n[a];
      }),
      (e.remove = function (s) {
        return q(s) ? this.removeLabel(s) : Y(s) ? this.killTweensOf(s) : (mr(this, s), s === this._recent && (this._recent = this._last), ie(this));
      }),
      (e.totalTime = function (s, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp && this._ts && (this._start = Z(ot.time - (this._ts > 0 ? s / this._ts : (this.totalDuration() - s) / -this._ts))),
            i.prototype.totalTime.call(this, s, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (e.addLabel = function (s, n) {
        return (this.labels[s] = _t(this, n)), this;
      }),
      (e.removeLabel = function (s) {
        return delete this.labels[s], this;
      }),
      (e.addPause = function (s, n, a) {
        var o = X.delayedCall(0, n || Pe, a);
        return (o.data = "isPause"), (this._hasPause = 1), Mt(this, o, _t(this, s));
      }),
      (e.removePause = function (s) {
        var n = this._first;
        for (s = _t(this, s); n; ) n._start === s && n.data === "isPause" && Rt(n), (n = n._next);
      }),
      (e.killTweensOf = function (s, n, a) {
        for (var o = this.getTweensOf(s, a), h = o.length; h--; ) It !== o[h] && o[h].kill(s, n);
        return this;
      }),
      (e.getTweensOf = function (s, n) {
        for (var a = [], o = xt(s), h = this._first, l = Pt(n), c; h; )
          h instanceof X
            ? Po(h._targets, o) &&
              (l ? (!It || (h._initted && h._ts)) && h.globalTime(0) <= n && h.globalTime(h.totalDuration()) > n : !n || h.isActive()) &&
              a.push(h)
            : (c = h.getTweensOf(o, n)).length && a.push.apply(a, c),
            (h = h._next);
        return a;
      }),
      (e.tweenTo = function (s, n) {
        n = n || {};
        var a = this,
          o = _t(a, s),
          h = n,
          l = h.startAt,
          c = h.onStart,
          u = h.onStartParams,
          f = h.immediateRender,
          d,
          m = X.to(
            a,
            gt(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || D,
                onStart: function () {
                  if ((a.pause(), !d)) {
                    var g = n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
                    m._dur !== g && pe(m, g, 0, 1).render(m._time, !0, !0), (d = 1);
                  }
                  c && c.apply(m, u || []);
                },
              },
              n,
            ),
          );
        return f ? m.render(0) : m;
      }),
      (e.tweenFromTo = function (s, n, a) {
        return this.tweenTo(n, gt({ startAt: { time: _t(this, s) } }, a));
      }),
      (e.recent = function () {
        return this._recent;
      }),
      (e.nextLabel = function (s) {
        return s === void 0 && (s = this._time), aa(this, _t(this, s));
      }),
      (e.previousLabel = function (s) {
        return s === void 0 && (s = this._time), aa(this, _t(this, s), 1);
      }),
      (e.currentLabel = function (s) {
        return arguments.length ? this.seek(s, !0) : this.previousLabel(this._time + D);
      }),
      (e.shiftChildren = function (s, n, a) {
        a === void 0 && (a = 0);
        for (var o = this._first, h = this.labels, l; o; ) o._start >= a && ((o._start += s), (o._end += s)), (o = o._next);
        if (n) for (l in h) h[l] >= a && (h[l] += s);
        return ie(this);
      }),
      (e.invalidate = function () {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(), (s = s._next);
        return i.prototype.invalidate.call(this);
      }),
      (e.clear = function (s) {
        s === void 0 && (s = !0);
        for (var n = this._first, a; n; ) (a = n._next), this.remove(n), (n = a);
        return this._dp && (this._time = this._tTime = this._pTime = 0), s && (this.labels = {}), ie(this);
      }),
      (e.totalDuration = function (s) {
        var n = 0,
          a = this,
          o = a._last,
          h = mt,
          l,
          c,
          u;
        if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -s : s));
        if (a._dirty) {
          for (u = a.parent; o; )
            (l = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > h && a._sort && o._ts && !a._lock ? ((a._lock = 1), (Mt(a, o, c - o._delay, 1)._lock = 0)) : (h = c),
              c < 0 &&
                o._ts &&
                ((n -= c),
                ((!u && !a._dp) || (u && u.smoothChildTiming)) && ((a._start += c / a._ts), (a._time -= c), (a._tTime -= c)),
                a.shiftChildren(-c, !1, -1 / 0),
                (h = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = l);
          pe(a, a === k && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (t.updateRoot = function (s) {
        if ((k._ts && (Gn(k, gr(s, k)), (Vn = ot.frame)), ot.frame >= jn)) {
          jn += st.autoSleep || 120;
          var n = k._first;
          if ((!n || !n._ts) && st.autoSleep && ot._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || ot.sleep();
          }
        }
      }),
      t
    );
  })(ze);
  gt(J.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Zo = function (t, e, r, s, n, a, o) {
      var h = new et(this._pt, t, e, 0, 1, Ai, null, n),
        l = 0,
        c = 0,
        u,
        f,
        d,
        m,
        p,
        g,
        _,
        y;
      for (
        h.b = r,
          h.e = s,
          r += "",
          s += "",
          (_ = ~s.indexOf("random(")) && (s = me(s)),
          a && ((y = [r, s]), a(y, t, e), (r = y[0]), (s = y[1])),
          f = r.match(ri) || [];
        (u = ri.exec(s));

      )
        (m = u[0]),
          (p = s.substring(l, u.index)),
          d ? (d = (d + 1) % 5) : p.substr(-5) === "rgba(" && (d = 1),
          m !== f[c++] &&
            ((g = parseFloat(f[c - 1]) || 0),
            (h._pt = {
              _next: h._pt,
              p: p || c === 1 ? p : ",",
              s: g,
              c: m.charAt(1) === "=" ? ee(g, m) - g : parseFloat(m) - g,
              m: d && d < 4 ? Math.round : 0,
            }),
            (l = ri.lastIndex));
      return (h.c = l < s.length ? s.substring(l, s.length) : ""), (h.fp = o), (ii.test(s) || _) && (h.e = 0), (this._pt = h), h;
    },
    vi = function (t, e, r, s, n, a, o, h, l) {
      Y(s) && (s = s(n || 0, t, a));
      var c = t[e],
        u = r !== "get" ? r : Y(c) ? (l ? t[e.indexOf("set") || !Y(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]()) : c,
        f = Y(c) ? (l ? ih : ma) : Ei,
        d;
      if ((q(s) && (~s.indexOf("random(") && (s = me(s)), s.charAt(1) === "=" && ((d = ee(u, s) + (H(u) || 0)), (d || d === 0) && (s = d))), u !== s || Ti))
        return !isNaN(u * s) && s !== ""
          ? ((d = new et(this._pt, t, e, +u || 0, s - (u || 0), typeof c == "boolean" ? nh : ga, 0, f)),
            l && (d.fp = l),
            o && d.modifier(o, this, t),
            (this._pt = d))
          : (!c && !(e in t) && cr(e, s), Zo.call(this, t, e, u, s, f, h || st.stringFilter, l));
    },
    Jo = function (t, e, r, s, n) {
      if ((Y(t) && (t = Le(t, n, e, r, s)), !Ft(t) || (t.style && t.nodeType) || K(t) || In(t))) return q(t) ? Le(t, n, e, r, s) : t;
      var a = {},
        o;
      for (o in t) a[o] = Le(t[o], n, e, r, s);
      return a;
    },
    Mi = function (t, e, r, s, n, a) {
      var o, h, l, c;
      if (
        at[t] &&
        (o = new at[t]()).init(n, o.rawVars ? e[t] : Jo(e[t], s, n, a, r), r, s, a) !== !1 &&
        ((r._pt = h = new et(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)), r !== ge)
      )
        for (l = r._ptLookup[r._targets.indexOf(n)], c = o._props.length; c--; ) l[o._props[c]] = h;
      return o;
    },
    It,
    Ti,
    bi = function i(t, e) {
      var r = t.vars,
        s = r.ease,
        n = r.startAt,
        a = r.immediateRender,
        o = r.lazy,
        h = r.onUpdate,
        l = r.onUpdateParams,
        c = r.callbackScope,
        u = r.runBackwards,
        f = r.yoyoEase,
        d = r.keyframes,
        m = r.autoRevert,
        p = t._dur,
        g = t._startAt,
        _ = t._targets,
        y = t.parent,
        x = y && y.data === "nested" ? y.parent._targets : _,
        w = t._overwrite === "auto" && !Zr,
        M = t.timeline,
        v,
        T,
        E,
        b,
        F,
        R,
        S,
        C,
        P,
        L,
        V,
        rt,
        Gt;
      if (
        (M && (!d || !s) && (s = "none"),
        (t._ease = se(s, fe.ease)),
        (t._yEase = f ? ca(se(f === !0 ? s : f, fe.ease)) : 0),
        f && t._yoyo && !t._repeat && ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !M && !!r.runBackwards),
        !M || (d && !r.stagger))
      ) {
        if (((C = _[0] ? zt(_[0]).harness : 0), (rt = C && r[C.prop]), (v = pr(r, ai)), g && (Rt(g.render(-1, !0)), (g._lazy = 0)), n))
          if (
            (Rt(
              (t._startAt = X.set(
                _,
                gt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: y,
                    immediateRender: !0,
                    lazy: nt(o),
                    startAt: null,
                    delay: 0,
                    onUpdate: h,
                    onUpdateParams: l,
                    callbackScope: c,
                    stagger: 0,
                  },
                  n,
                ),
              )),
            ),
            e < 0 && !a && !m && t._startAt.render(-1, !0),
            a)
          ) {
            if ((e > 0 && !m && (t._startAt = 0), p && e <= 0)) {
              e && (t._zTime = e);
              return;
            }
          } else m === !1 && (t._startAt = 0);
        else if (u && p) {
          if (g) !m && (t._startAt = 0);
          else if (
            (e && (a = !1),
            (E = gt({ overwrite: !1, data: "isFromStart", lazy: a && nt(o), immediateRender: a, stagger: 0, parent: y }, v)),
            rt && (E[C.prop] = rt),
            Rt((t._startAt = X.set(_, E))),
            e < 0 && t._startAt.render(-1, !0),
            (t._zTime = e),
            !a)
          )
            i(t._startAt, D);
          else if (!e) return;
        }
        for (t._pt = t._ptCache = 0, o = (p && nt(o)) || (o && !p), T = 0; T < _.length; T++) {
          if (
            ((F = _[T]),
            (S = F._gsap || ci(_)[T]._gsap),
            (t._ptLookup[T] = L = {}),
            oi[S.id] && Dt.length && dr(),
            (V = x === _ ? T : x.indexOf(F)),
            C &&
              (P = new C()).init(F, rt || v, t, V, x) !== !1 &&
              ((t._pt = b = new et(t._pt, F, P.name, 0, 1, P.render, P, 0, P.priority)),
              P._props.forEach(function (qt) {
                L[qt] = b;
              }),
              P.priority && (R = 1)),
            !C || rt)
          )
            for (E in v) at[E] && (P = Mi(E, v, t, V, F, x)) ? P.priority && (R = 1) : (L[E] = b = vi.call(t, F, E, "get", v[E], V, x, 0, r.stringFilter));
          t._op && t._op[T] && t.kill(F, t._op[T]),
            w && t._pt && ((It = t), k.killTweensOf(F, L, t.globalTime(e)), (Gt = !t.parent), (It = 0)),
            t._pt && o && (oi[S.id] = 1);
        }
        R && Fi(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = h), (t._initted = (!t._op || t._pt) && !Gt), d && e <= 0 && M.render(mt, !0, !0);
    },
    th = function (t, e, r, s, n, a, o) {
      var h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
        l,
        c,
        u;
      if (!h)
        for (h = t._ptCache[e] = [], c = t._ptLookup, u = t._targets.length; u--; ) {
          if (((l = c[u][e]), l && l.d && l.d._pt)) for (l = l.d._pt; l && l.p !== e; ) l = l._next;
          if (!l) return (Ti = 1), (t.vars[e] = "+=0"), bi(t, o), (Ti = 0), 1;
          h.push(l);
        }
      for (u = h.length; u--; )
        (l = h[u]), (l.s = (s || s === 0) && !n ? s : l.s + (s || 0) + a * l.c), (l.c = r - l.s), l.e && (l.e = U(r) + H(l.e)), l.b && (l.b = l.s + H(l.b));
    },
    eh = function (t, e) {
      var r = t[0] ? zt(t[0]).harness : 0,
        s = r && r.aliases,
        n,
        a,
        o,
        h;
      if (!s) return e;
      n = re({}, e);
      for (a in s) if (a in n) for (h = s[a].split(","), o = h.length; o--; ) n[h[o]] = n[a];
      return n;
    },
    rh = function (t, e, r, s) {
      var n = e.ease || s || "power1.inOut",
        a,
        o;
      if (K(e))
        (o = r[t] || (r[t] = [])),
          e.forEach(function (h, l) {
            return o.push({ t: (l / (e.length - 1)) * 100, v: h, e: n });
          });
      else for (a in e) (o = r[a] || (r[a] = [])), a === "ease" || o.push({ t: parseFloat(t), v: e[a], e: n });
    },
    Le = function (t, e, r, s, n) {
      return Y(t) ? t.call(e, r, s, n) : q(t) && ~t.indexOf("random(") ? me(t) : t;
    },
    da = li + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    pa = {};
  tt(da + ",id,stagger,delay,duration,paused,scrollTrigger", function (i) {
    return (pa[i] = 1);
  });
  var X = (function (i) {
    Dn(t, i);
    function t(r, s, n, a) {
      var o;
      typeof s == "number" && ((n.duration = s), (s = n), (n = null)), (o = i.call(this, a ? s : Fe(s)) || this);
      var h = o.vars,
        l = h.duration,
        c = h.delay,
        u = h.immediateRender,
        f = h.stagger,
        d = h.overwrite,
        m = h.keyframes,
        p = h.defaults,
        g = h.scrollTrigger,
        _ = h.yoyoEase,
        y = s.parent || k,
        x = (K(r) || In(r) ? Pt(r[0]) : "length" in s) ? [r] : xt(r),
        w,
        M,
        v,
        T,
        E,
        b,
        F,
        R;
      if (
        ((o._targets = x.length ? ci(x) : ur("GSAP target " + r + " not found. https://greensock.com", !st.nullTargetWarn) || []),
        (o._ptLookup = []),
        (o._overwrite = d),
        m || f || hr(l) || hr(c))
      ) {
        if (
          ((s = o.vars),
          (w = o.timeline = new J({ data: "nested", defaults: p || {} })),
          w.kill(),
          (w.parent = w._dp = At(o)),
          (w._start = 0),
          f || hr(l) || hr(c))
        ) {
          if (((T = x.length), (F = f && ea(f)), Ft(f))) for (E in f) ~da.indexOf(E) && (R || (R = {}), (R[E] = f[E]));
          for (M = 0; M < T; M++)
            (v = pr(s, pa)),
              (v.stagger = 0),
              _ && (v.yoyoEase = _),
              R && re(v, R),
              (b = x[M]),
              (v.duration = +Le(l, At(o), M, b, x)),
              (v.delay = (+Le(c, At(o), M, b, x) || 0) - o._delay),
              !f && T === 1 && v.delay && ((o._delay = c = v.delay), (o._start += c), (v.delay = 0)),
              w.to(b, v, F ? F(M, b, x) : 0),
              (w._ease = O.none);
          w.duration() ? (l = c = 0) : (o.timeline = 0);
        } else if (m) {
          Fe(gt(w.vars.defaults, { ease: "none" })), (w._ease = se(m.ease || s.ease || "none"));
          var S = 0,
            C,
            P,
            L;
          if (K(m))
            m.forEach(function (V) {
              return w.to(x, V, ">");
            });
          else {
            v = {};
            for (E in m) E === "ease" || E === "easeEach" || rh(E, m[E], v, m.easeEach);
            for (E in v)
              for (
                C = v[E].sort(function (V, rt) {
                  return V.t - rt.t;
                }),
                  S = 0,
                  M = 0;
                M < C.length;
                M++
              )
                (P = C[M]), (L = { ease: P.e, duration: ((P.t - (M ? C[M - 1].t : 0)) / 100) * l }), (L[E] = P.v), w.to(x, L, S), (S += L.duration);
            w.duration() < l && w.to({}, { duration: l - w.duration() });
          }
        }
        l || o.duration((l = w.duration()));
      } else o.timeline = 0;
      return (
        d === !0 && !Zr && ((It = At(o)), k.killTweensOf(x), (It = 0)),
        Mt(y, At(o), n),
        s.reversed && o.reverse(),
        s.paused && o.paused(!0),
        (u || (!l && !m && o._start === Z(y._time) && nt(u) && Co(At(o)) && y.data !== "nested")) && ((o._tTime = -D), o.render(Math.max(0, -c))),
        g && $n(At(o), g),
        o
      );
    }
    var e = t.prototype;
    return (
      (e.render = function (s, n, a) {
        var o = this._time,
          h = this._tDur,
          l = this._dur,
          c = s > h - D && s >= 0 ? h : s < D ? 0 : s,
          u,
          f,
          d,
          m,
          p,
          g,
          _,
          y,
          x;
        if (!l) Do(this, s, n, a);
        else if (c !== this._tTime || !s || a || (!this._initted && this._tTime) || (this._startAt && this._zTime < 0 != s < 0)) {
          if (((u = c), (y = this.timeline), this._repeat)) {
            if (((m = l + this._rDelay), this._repeat < -1 && s < 0)) return this.totalTime(m * 100 + s, n, a);
            if (
              ((u = Z(c % m)),
              c === h ? ((d = this._repeat), (u = l)) : ((d = ~~(c / m)), d && d === c / m && ((u = l), d--), u > l && (u = l)),
              (g = this._yoyo && d & 1),
              g && ((x = this._yEase), (u = l - u)),
              (p = de(this._tTime, m)),
              u === o && !a && this._initted)
            )
              return (this._tTime = c), this;
            d !== p &&
              (y && this._yEase && ua(y, g),
              this.vars.repeatRefresh && !g && !this._lock && ((this._lock = a = 1), (this.render(Z(m * d), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Kn(this, s < 0 ? s : u, a, n)) return (this._tTime = 0), this;
            if (o !== this._time) return this;
            if (l !== this._dur) return this.render(s, n, a);
          }
          if (
            ((this._tTime = c),
            (this._time = u),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = _ = (x || this._ease)(u / l)),
            this._from && (this.ratio = _ = 1 - _),
            u && !o && !n && (yt(this, "onStart"), this._tTime !== c))
          )
            return this;
          for (f = this._pt; f; ) f.r(_, f.d), (f = f._next);
          (y && y.render(s < 0 ? s : !u && g ? -D : y._dur * y._ease(u / this._dur), n, a)) || (this._startAt && (this._zTime = s)),
            this._onUpdate && !n && (s < 0 && this._startAt && this._startAt.render(s, !0, a), yt(this, "onUpdate")),
            this._repeat && d !== p && this.vars.onRepeat && !n && this.parent && yt(this, "onRepeat"),
            (c === this._tDur || !c) &&
              this._tTime === c &&
              (s < 0 && this._startAt && !this._onUpdate && this._startAt.render(s, !0, !0),
              (s || !l) && ((c === this._tDur && this._ts > 0) || (!c && this._ts < 0)) && Rt(this, 1),
              !n &&
                !(s < 0 && !o) &&
                (c || o) &&
                (yt(this, c === h ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < h && this.timeScale() > 0) && this._prom()));
        }
        return this;
      }),
      (e.targets = function () {
        return this._targets;
      }),
      (e.invalidate = function () {
        return (
          (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          i.prototype.invalidate.call(this)
        );
      }),
      (e.resetTo = function (s, n, a, o) {
        De || ot.wake(), this._ts || this.play();
        var h = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          l,
          c;
        return (
          this._initted || bi(this, h),
          (l = this._ease(h / this._dur)),
          th(this, s, n, a, o, l, h)
            ? this.resetTo(s, n, a, o)
            : (fi(this, 0), this.parent || Wn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        );
      }),
      (e.kill = function (s, n) {
        if ((n === void 0 && (n = "all"), !s && (!n || n === "all"))) return (this._lazy = this._pt = 0), this.parent ? Ce(this) : this;
        if (this.timeline) {
          var a = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(s, n, It && It.vars.overwrite !== !0)._first || Ce(this),
            this.parent && a !== this.timeline.totalDuration() && pe(this, (this._dur * this.timeline._tDur) / a, 0, 1),
            this
          );
        }
        var o = this._targets,
          h = s ? xt(s) : o,
          l = this._ptLookup,
          c = this._pt,
          u,
          f,
          d,
          m,
          p,
          g,
          _;
        if ((!n || n === "all") && Ro(o, h)) return n === "all" && (this._pt = 0), Ce(this);
        for (
          u = this._op = this._op || [],
            n !== "all" &&
              (q(n) &&
                ((p = {}),
                tt(n, function (y) {
                  return (p[y] = 1);
                }),
                (n = p)),
              (n = eh(o, n))),
            _ = o.length;
          _--;

        )
          if (~h.indexOf(o[_])) {
            (f = l[_]), n === "all" ? ((u[_] = n), (m = f), (d = {})) : ((d = u[_] = u[_] || {}), (m = n));
            for (p in m) (g = f && f[p]), g && ((!("kill" in g.d) || g.d.kill(p) === !0) && mr(this, g, "_pt"), delete f[p]), d !== "all" && (d[p] = 1);
          }
        return this._initted && !this._pt && c && Ce(this), this;
      }),
      (t.to = function (s, n) {
        return new t(s, n, arguments[2]);
      }),
      (t.from = function (s, n) {
        return Re(1, arguments);
      }),
      (t.delayedCall = function (s, n, a, o) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: s,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: a,
          onReverseCompleteParams: a,
          callbackScope: o,
        });
      }),
      (t.fromTo = function (s, n, a) {
        return Re(2, arguments);
      }),
      (t.set = function (s, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(s, n);
      }),
      (t.killTweensOf = function (s, n, a) {
        return k.killTweensOf(s, n, a);
      }),
      t
    );
  })(ze);
  gt(X.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  tt("staggerTo,staggerFrom,staggerFromTo", function (i) {
    X[i] = function () {
      var t = new J(),
        e = pi.call(arguments, 0);
      return e.splice(i === "staggerFromTo" ? 5 : 4, 0, 0), t[i].apply(t, e);
    };
  });
  var Ei = function (t, e, r) {
      return (t[e] = r);
    },
    ma = function (t, e, r) {
      return t[e](r);
    },
    ih = function (t, e, r, s) {
      return t[e](s.fp, r);
    },
    sh = function (t, e, r) {
      return t.setAttribute(e, r);
    },
    xr = function (t, e) {
      return Y(t[e]) ? ma : or(t[e]) && t.setAttribute ? sh : Ei;
    },
    ga = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
    },
    nh = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Ai = function (t, e) {
      var r = e._pt,
        s = "";
      if (!t && e.b) s = e.b;
      else if (t === 1 && e.e) s = e.e;
      else {
        for (; r; ) (s = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + s), (r = r._next);
        s += e.c;
      }
      e.set(e.t, e.p, s, e);
    },
    Pi = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    ah = function (t, e, r, s) {
      for (var n = this._pt, a; n; ) (a = n._next), n.p === s && n.modifier(t, e, r), (n = a);
    },
    oh = function (t) {
      for (var e = this._pt, r, s; e; ) (s = e._next), (e.p === t && !e.op) || e.op === t ? mr(this, e, "_pt") : e.dep || (r = 1), (e = s);
      return !r;
    },
    hh = function (t, e, r, s) {
      s.mSet(t, e, s.m.call(s.tween, r, s.mt), s);
    },
    Fi = function (t) {
      for (var e = t._pt, r, s, n, a; e; ) {
        for (r = e._next, s = n; s && s.pr > e.pr; ) s = s._next;
        (e._prev = s ? s._prev : a) ? (e._prev._next = e) : (n = e), (e._next = s) ? (s._prev = e) : (a = e), (e = r);
      }
      t._pt = n;
    },
    et = (function () {
      function i(e, r, s, n, a, o, h, l, c) {
        (this.t = r),
          (this.s = n),
          (this.c = a),
          (this.p = s),
          (this.r = o || ga),
          (this.d = h || this),
          (this.set = l || Ei),
          (this.pr = c || 0),
          (this._next = e),
          e && (e._prev = this);
      }
      var t = i.prototype;
      return (
        (t.modifier = function (r, s, n) {
          (this.mSet = this.mSet || this.set), (this.set = hh), (this.m = r), (this.mt = n), (this.tween = s);
        }),
        i
      );
    })();
  tt(
    li +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (i) {
      return (ai[i] = 1);
    },
  );
  lt.TweenMax = lt.TweenLite = X;
  lt.TimelineLite = lt.TimelineMax = J;
  k = new J({ sortChildren: !1, defaults: fe, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
  st.stringFilter = _i;
  var yr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (s) {
        return Xo(s);
      });
    },
    timeline: function (t) {
      return new J(t);
    },
    getTweensOf: function (t, e) {
      return k.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, s) {
      q(t) && (t = xt(t)[0]);
      var n = zt(t || {}).get,
        a = r ? Xn : qn;
      return (
        r === "native" && (r = ""),
        t &&
          (e
            ? a(((at[e] && at[e].get) || n)(t, e, r, s))
            : function (o, h, l) {
                return a(((at[o] && at[o].get) || n)(t, o, h, l));
              })
      );
    },
    quickSetter: function (t, e, r) {
      if (((t = xt(t)), t.length > 1)) {
        var s = t.map(function (c) {
            return ct.quickSetter(c, e, r);
          }),
          n = s.length;
        return function (c) {
          for (var u = n; u--; ) s[u](c);
        };
      }
      t = t[0] || {};
      var a = at[e],
        o = zt(t),
        h = (o.harness && (o.harness.aliases || {})[e]) || e,
        l = a
          ? function (c) {
              var u = new a();
              (ge._pt = 0), u.init(t, r ? c + r : c, ge, 0, [t]), u.render(1, u), ge._pt && Pi(1, ge);
            }
          : o.set(t, h);
      return a
        ? l
        : function (c) {
            return l(t, h, r ? c + r : c, o, 1);
          };
    },
    quickTo: function (t, e, r) {
      var s,
        n = ct.to(t, re(((s = {}), (s[e] = "+=0.1"), (s.paused = !0), s), r || {})),
        a = function (h, l, c) {
          return n.resetTo(e, h, l, c);
        };
      return (a.tween = n), a;
    },
    isTweening: function (t) {
      return k.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = se(t.ease, fe.ease)), Yn(fe, t || {});
    },
    config: function (t) {
      return Yn(st, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        s = t.plugins,
        n = t.defaults,
        a = t.extendTimeline;
      (s || "").split(",").forEach(function (o) {
        return o && !at[o] && !lt[o] && ur(e + " effect requires " + o + " plugin.");
      }),
        (hi[e] = function (o, h, l) {
          return r(xt(o), gt(h || {}, n), l);
        }),
        a &&
          (J.prototype[e] = function (o, h, l) {
            return this.add(hi[e](o, Ft(h) ? h : (l = h) && {}, this), l);
          });
    },
    registerEase: function (t, e) {
      O[t] = se(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? se(t, e) : O;
    },
    getById: function (t) {
      return k.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var r = new J(t),
        s,
        n;
      for (r.smoothChildTiming = nt(t.smoothChildTiming), k.remove(r), r._dp = 0, r._time = r._tTime = k._time, s = k._first; s; )
        (n = s._next), (e || !(!s._dur && s instanceof X && s.vars.onComplete === s._targets[0])) && Mt(r, s, s._start - s._delay), (s = n);
      return Mt(k, r, 0), r;
    },
    utils: {
      wrap: jo,
      wrapYoyo: Go,
      distribute: ea,
      random: ia,
      snap: ra,
      normalize: Vo,
      getUnit: H,
      clamp: Io,
      splitColor: oa,
      toArray: xt,
      selector: No,
      mapRange: na,
      pipe: Bo,
      unitize: Uo,
      interpolate: qo,
      shuffle: ta,
    },
    install: Bn,
    effects: hi,
    ticker: ot,
    updateRoot: J.updateRoot,
    plugins: at,
    globalTimeline: k,
    core: {
      PropTween: et,
      globals: Un,
      Tween: X,
      Timeline: J,
      Animation: ze,
      getCache: zt,
      _removeLinkedListItem: mr,
      suppressOverwrites: function (t) {
        return (Zr = t);
      },
    },
  };
  tt("to,from,fromTo,delayedCall,set,killTweensOf", function (i) {
    return (yr[i] = X[i]);
  });
  ot.add(J.updateRoot);
  ge = yr.to({}, { duration: 0 });
  var lh = function (t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
      return r;
    },
    ch = function (t, e) {
      var r = t._targets,
        s,
        n,
        a;
      for (s in e)
        for (n = r.length; n--; ) (a = t._ptLookup[n][s]), a && (a = a.d) && (a._pt && (a = lh(a, s)), a && a.modifier && a.modifier(e[s], t, r[n], s));
    },
    Ri = function (t, e) {
      return {
        name: t,
        rawVars: 1,
        init: function (s, n, a) {
          a._onInit = function (o) {
            var h, l;
            if (
              (q(n) &&
                ((h = {}),
                tt(n, function (c) {
                  return (h[c] = 1);
                }),
                (n = h)),
              e)
            ) {
              h = {};
              for (l in n) h[l] = e(n[l]);
              n = h;
            }
            ch(o, n);
          };
        },
      };
    },
    ct =
      yr.registerPlugin(
        {
          name: "attr",
          init: function (t, e, r, s, n) {
            var a, o;
            for (a in e) (o = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], s, n, 0, 0, a)), o && (o.op = a), this._props.push(a);
          },
        },
        {
          name: "endArray",
          init: function (t, e) {
            for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
          },
        },
        Ri("roundProps", mi),
        Ri("modifiers"),
        Ri("snap", ra),
      ) || yr;
  X.version = J.version = ct.version = "3.10.2";
  Nn = 1;
  Ln() && _e();
  var uh = O.Power0,
    fh = O.Power1,
    dh = O.Power2,
    ph = O.Power3,
    mh = O.Power4,
    gh = O.Linear,
    _h = O.Quad,
    xh = O.Cubic,
    yh = O.Quart,
    wh = O.Quint,
    vh = O.Strong,
    Mh = O.Elastic,
    Th = O.Back,
    bh = O.SteppedEase,
    Eh = O.Bounce,
    Ah = O.Sine,
    Ph = O.Expo,
    Fh = O.Circ;
  var _a,
    kt,
    xe,
    Si,
    ae,
    Rh,
    xa,
    Sh = function () {
      return typeof window != "undefined";
    },
    Nt = {},
    oe = 180 / Math.PI,
    ye = Math.PI / 180,
    we = Math.atan2,
    ya = 1e8,
    wa = /([A-Z])/g,
    Ch = /(left|right|width|margin|padding|x)/i,
    Oh = /[\s,\(]\S/,
    Bt = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    va = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    Dh = function (t, e) {
      return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    zh = function (t, e) {
      return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
    },
    Lh = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    Ma = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    Ta = function (t, e) {
      return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
    },
    Ih = function (t, e, r) {
      return (t.style[e] = r);
    },
    kh = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    Nh = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    Bh = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    Uh = function (t, e, r, s, n) {
      var a = t._gsap;
      (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
    },
    Vh = function (t, e, r, s, n) {
      var a = t._gsap;
      (a[e] = r), a.renderTransform(n, a);
    },
    Q = "transform",
    Ut = Q + "Origin",
    ba,
    Ci = function (t, e) {
      var r = kt.createElementNS ? kt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : kt.createElement(t);
      return r.style ? r : kt.createElement(t);
    },
    Ct = function i(t, e, r) {
      var s = getComputedStyle(t);
      return s[e] || s.getPropertyValue(e.replace(wa, "-$1").toLowerCase()) || s.getPropertyValue(e) || (!r && i(t, ve(e) || e, 1)) || "";
    },
    Ea = "O,Moz,ms,Ms,Webkit".split(","),
    ve = function (t, e, r) {
      var s = e || ae,
        n = s.style,
        a = 5;
      if (t in n && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(Ea[a] + t in n); );
      return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Ea[a] : "") + t;
    },
    Oi = function () {
      Sh() &&
        window.document &&
        ((_a = window),
        (kt = _a.document),
        (xe = kt.documentElement),
        (ae = Ci("div") || { style: {} }),
        (Rh = Ci("div")),
        (Q = ve(Q)),
        (Ut = Q + "Origin"),
        (ae.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
        (ba = !!ve("perspective")),
        (Si = 1));
    },
    Di = function i(t) {
      var e = Ci("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
        r = this.parentNode,
        s = this.nextSibling,
        n = this.style.cssText,
        a;
      if ((xe.appendChild(e), e.appendChild(this), (this.style.display = "block"), t))
        try {
          (a = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = i);
        } catch (o) {}
      else this._gsapBBox && (a = this._gsapBBox());
      return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), xe.removeChild(e), (this.style.cssText = n), a;
    },
    Aa = function (t, e) {
      for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    Pa = function (t) {
      var e;
      try {
        e = t.getBBox();
      } catch (r) {
        e = Di.call(t, !0);
      }
      return (
        (e && (e.width || e.height)) || t.getBBox === Di || (e = Di.call(t, !0)),
        e && !e.width && !e.x && !e.y ? { x: +Aa(t, ["x", "cx", "x1"]) || 0, y: +Aa(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 } : e
      );
    },
    Fa = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Pa(t));
    },
    Ie = function (t, e) {
      if (e) {
        var r = t.style;
        e in Nt && e !== Ut && (e = Q),
          r.removeProperty
            ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(e.replace(wa, "-$1").toLowerCase()))
            : r.removeAttribute(e);
      }
    },
    Vt = function (t, e, r, s, n, a) {
      var o = new et(t._pt, e, r, 0, 1, a ? Ta : Ma);
      return (t._pt = o), (o.b = s), (o.e = n), t._props.push(r), o;
    },
    Ra = { deg: 1, rad: 1, turn: 1 },
    jt = function i(t, e, r, s) {
      var n = parseFloat(r) || 0,
        a = (r + "").trim().substr((n + "").length) || "px",
        o = ae.style,
        h = Ch.test(e),
        l = t.tagName.toLowerCase() === "svg",
        c = (l ? "client" : "offset") + (h ? "Width" : "Height"),
        u = 100,
        f = s === "px",
        d = s === "%",
        m,
        p,
        g,
        _;
      return s === a || !n || Ra[s] || Ra[a]
        ? n
        : (a !== "px" && !f && (n = i(t, e, r, "px")),
          (_ = t.getCTM && Fa(t)),
          (d || a === "%") && (Nt[e] || ~e.indexOf("adius"))
            ? ((m = _ ? t.getBBox()[h ? "width" : "height"] : t[c]), U(d ? (n / m) * u : (n / 100) * m))
            : ((o[h ? "width" : "height"] = u + (f ? a : s)),
              (p = ~e.indexOf("adius") || (s === "em" && t.appendChild && !l) ? t : t.parentNode),
              _ && (p = (t.ownerSVGElement || {}).parentNode),
              (!p || p === kt || !p.appendChild) && (p = kt.body),
              (g = p._gsap),
              g && d && g.width && h && g.time === ot.time
                ? U((n / g.width) * u)
                : ((d || a === "%") && (o.position = Ct(t, "position")),
                  p === t && (o.position = "static"),
                  p.appendChild(ae),
                  (m = ae[c]),
                  p.removeChild(ae),
                  (o.position = "absolute"),
                  h && d && ((g = zt(p)), (g.time = ot.time), (g.width = p[c])),
                  U(f ? (m * n) / u : m && n ? (u / m) * n : 0))));
    },
    he = function (t, e, r, s) {
      var n;
      return (
        Si || Oi(),
        e in Bt && e !== "transform" && ((e = Bt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
        Nt[e] && e !== "transform"
          ? ((n = Ne(t, s)), (n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : vr(Ct(t, Ut)) + " " + n.zOrigin + "px"))
          : ((n = t.style[e]),
            (!n || n === "auto" || s || ~(n + "").indexOf("calc(")) && (n = (wr[e] && wr[e](t, e, r)) || Ct(t, e) || ui(t, e) || (e === "opacity" ? 1 : 0))),
        r && !~(n + "").trim().indexOf(" ") ? jt(t, e, n, r) + r : n
      );
    },
    jh = function (t, e, r, s) {
      if (!r || r === "none") {
        var n = ve(e, t, 1),
          a = n && Ct(t, n, 1);
        a && a !== r ? ((e = n), (r = a)) : e === "borderColor" && (r = Ct(t, "borderTopColor"));
      }
      var o = new et(this._pt, t.style, e, 0, 1, Ai),
        h = 0,
        l = 0,
        c,
        u,
        f,
        d,
        m,
        p,
        g,
        _,
        y,
        x,
        w,
        M;
      if (
        ((o.b = r),
        (o.e = s),
        (r += ""),
        (s += ""),
        s === "auto" && ((t.style[e] = s), (s = Ct(t, e) || s), (t.style[e] = r)),
        (c = [r, s]),
        _i(c),
        (r = c[0]),
        (s = c[1]),
        (f = r.match(te) || []),
        (M = s.match(te) || []),
        M.length)
      ) {
        for (; (u = te.exec(s)); )
          (g = u[0]),
            (y = s.substring(h, u.index)),
            m ? (m = (m + 1) % 5) : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1),
            g !== (p = f[l++] || "") &&
              ((d = parseFloat(p) || 0),
              (w = p.substr((d + "").length)),
              g.charAt(1) === "=" && (g = ee(d, g) + w),
              (_ = parseFloat(g)),
              (x = g.substr((_ + "").length)),
              (h = te.lastIndex - x.length),
              x || ((x = x || st.units[e] || w), h === s.length && ((s += x), (o.e += x))),
              w !== x && (d = jt(t, e, p, x) || 0),
              (o._pt = { _next: o._pt, p: y || l === 1 ? y : ",", s: d, c: _ - d, m: (m && m < 4) || e === "zIndex" ? Math.round : 0 }));
        o.c = h < s.length ? s.substring(h, s.length) : "";
      } else o.r = e === "display" && s === "none" ? Ta : Ma;
      return ii.test(s) && (o.e = 0), (this._pt = o), o;
    },
    Sa = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    Gh = function (t) {
      var e = t.split(" "),
        r = e[0],
        s = e[1] || "50%";
      return (
        (r === "top" || r === "bottom" || s === "left" || s === "right") && ((t = r), (r = s), (s = t)), (e[0] = Sa[r] || r), (e[1] = Sa[s] || s), e.join(" ")
      );
    },
    qh = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r = e.t,
          s = r.style,
          n = e.u,
          a = r._gsap,
          o,
          h,
          l;
        if (n === "all" || n === !0) (s.cssText = ""), (h = 1);
        else for (n = n.split(","), l = n.length; --l > -1; ) (o = n[l]), Nt[o] && ((h = 1), (o = o === "transformOrigin" ? Ut : Q)), Ie(r, o);
        h && (Ie(r, Q), a && (a.svg && r.removeAttribute("transform"), Ne(r, 1), (a.uncache = 1)));
      }
    },
    wr = {
      clearProps: function (t, e, r, s, n) {
        if (n.data !== "isFromStart") {
          var a = (t._pt = new et(t._pt, e, r, 0, 0, qh));
          return (a.u = s), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    ke = [1, 0, 0, 1, 0, 0],
    Ca = {},
    Oa = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Da = function (t) {
      var e = Ct(t, Q);
      return Oa(e) ? ke : e.substr(7).match(ei).map(U);
    },
    zi = function (t, e) {
      var r = t._gsap || zt(t),
        s = t.style,
        n = Da(t),
        a,
        o,
        h,
        l;
      return r.svg && t.getAttribute("transform")
        ? ((h = t.transform.baseVal.consolidate().matrix), (n = [h.a, h.b, h.c, h.d, h.e, h.f]), n.join(",") === "1,0,0,1,0,0" ? ke : n)
        : (n === ke &&
            !t.offsetParent &&
            t !== xe &&
            !r.svg &&
            ((h = s.display),
            (s.display = "block"),
            (a = t.parentNode),
            (!a || !t.offsetParent) && ((l = 1), (o = t.nextSibling), xe.appendChild(t)),
            (n = Da(t)),
            h ? (s.display = h) : Ie(t, "display"),
            l && (o ? a.insertBefore(t, o) : a ? a.appendChild(t) : xe.removeChild(t))),
          e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Li = function (t, e, r, s, n, a) {
      var o = t._gsap,
        h = n || zi(t, !0),
        l = o.xOrigin || 0,
        c = o.yOrigin || 0,
        u = o.xOffset || 0,
        f = o.yOffset || 0,
        d = h[0],
        m = h[1],
        p = h[2],
        g = h[3],
        _ = h[4],
        y = h[5],
        x = e.split(" "),
        w = parseFloat(x[0]) || 0,
        M = parseFloat(x[1]) || 0,
        v,
        T,
        E,
        b;
      r
        ? h !== ke &&
          (T = d * g - m * p) &&
          ((E = w * (g / T) + M * (-p / T) + (p * y - g * _) / T), (b = w * (-m / T) + M * (d / T) - (d * y - m * _) / T), (w = E), (M = b))
        : ((v = Pa(t)), (w = v.x + (~x[0].indexOf("%") ? (w / 100) * v.width : w)), (M = v.y + (~(x[1] || x[0]).indexOf("%") ? (M / 100) * v.height : M))),
        s || (s !== !1 && o.smooth)
          ? ((_ = w - l), (y = M - c), (o.xOffset = u + (_ * d + y * p) - _), (o.yOffset = f + (_ * m + y * g) - y))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = w),
        (o.yOrigin = M),
        (o.smooth = !!s),
        (o.origin = e),
        (o.originIsAbsolute = !!r),
        (t.style[Ut] = "0px 0px"),
        a && (Vt(a, o, "xOrigin", l, w), Vt(a, o, "yOrigin", c, M), Vt(a, o, "xOffset", u, o.xOffset), Vt(a, o, "yOffset", f, o.yOffset)),
        t.setAttribute("data-svg-origin", w + " " + M);
    },
    Ne = function (t, e) {
      var r = t._gsap || new wi(t);
      if ("x" in r && !e && !r.uncache) return r;
      var s = t.style,
        n = r.scaleX < 0,
        a = "px",
        o = "deg",
        h = Ct(t, Ut) || "0",
        l,
        c,
        u,
        f,
        d,
        m,
        p,
        g,
        _,
        y,
        x,
        w,
        M,
        v,
        T,
        E,
        b,
        F,
        R,
        S,
        C,
        P,
        L,
        V,
        rt,
        Gt,
        qt,
        Te,
        Xt,
        Bi,
        Tt,
        Yt;
      return (
        (l = c = u = m = p = g = _ = y = x = 0),
        (f = d = 1),
        (r.svg = !!(t.getCTM && Fa(t))),
        (v = zi(t, r.svg)),
        r.svg &&
          ((V = (!r.uncache || h === "0px 0px") && !e && t.getAttribute("data-svg-origin")), Li(t, V || h, !!V || r.originIsAbsolute, r.smooth !== !1, v)),
        (w = r.xOrigin || 0),
        (M = r.yOrigin || 0),
        v !== ke &&
          ((F = v[0]),
          (R = v[1]),
          (S = v[2]),
          (C = v[3]),
          (l = P = v[4]),
          (c = L = v[5]),
          v.length === 6
            ? ((f = Math.sqrt(F * F + R * R)),
              (d = Math.sqrt(C * C + S * S)),
              (m = F || R ? we(R, F) * oe : 0),
              (_ = S || C ? we(S, C) * oe + m : 0),
              _ && (d *= Math.abs(Math.cos(_ * ye))),
              r.svg && ((l -= w - (w * F + M * S)), (c -= M - (w * R + M * C))))
            : ((Yt = v[6]),
              (Bi = v[7]),
              (qt = v[8]),
              (Te = v[9]),
              (Xt = v[10]),
              (Tt = v[11]),
              (l = v[12]),
              (c = v[13]),
              (u = v[14]),
              (T = we(Yt, Xt)),
              (p = T * oe),
              T &&
                ((E = Math.cos(-T)),
                (b = Math.sin(-T)),
                (V = P * E + qt * b),
                (rt = L * E + Te * b),
                (Gt = Yt * E + Xt * b),
                (qt = P * -b + qt * E),
                (Te = L * -b + Te * E),
                (Xt = Yt * -b + Xt * E),
                (Tt = Bi * -b + Tt * E),
                (P = V),
                (L = rt),
                (Yt = Gt)),
              (T = we(-S, Xt)),
              (g = T * oe),
              T &&
                ((E = Math.cos(-T)),
                (b = Math.sin(-T)),
                (V = F * E - qt * b),
                (rt = R * E - Te * b),
                (Gt = S * E - Xt * b),
                (Tt = C * b + Tt * E),
                (F = V),
                (R = rt),
                (S = Gt)),
              (T = we(R, F)),
              (m = T * oe),
              T &&
                ((E = Math.cos(T)), (b = Math.sin(T)), (V = F * E + R * b), (rt = P * E + L * b), (R = R * E - F * b), (L = L * E - P * b), (F = V), (P = rt)),
              p && Math.abs(p) + Math.abs(m) > 359.9 && ((p = m = 0), (g = 180 - g)),
              (f = U(Math.sqrt(F * F + R * R + S * S))),
              (d = U(Math.sqrt(L * L + Yt * Yt))),
              (T = we(P, L)),
              (_ = Math.abs(T) > 2e-4 ? T * oe : 0),
              (x = Tt ? 1 / (Tt < 0 ? -Tt : Tt) : 0)),
          r.svg && ((V = t.getAttribute("transform")), (r.forceCSS = t.setAttribute("transform", "") || !Oa(Ct(t, Q))), V && t.setAttribute("transform", V))),
        Math.abs(_) > 90 &&
          Math.abs(_) < 270 &&
          (n ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180)) : ((d *= -1), (_ += _ <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          l -
          ((r.xPercent = l && ((!e && r.xPercent) || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? (t.offsetWidth * r.xPercent) / 100 : 0) +
          a),
        (r.y =
          c -
          ((r.yPercent = c && ((!e && r.yPercent) || (Math.round(t.offsetHeight / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          a),
        (r.z = u + a),
        (r.scaleX = U(f)),
        (r.scaleY = U(d)),
        (r.rotation = U(m) + o),
        (r.rotationX = U(p) + o),
        (r.rotationY = U(g) + o),
        (r.skewX = _ + o),
        (r.skewY = y + o),
        (r.transformPerspective = x + a),
        (r.zOrigin = parseFloat(h.split(" ")[2]) || 0) && (s[Ut] = vr(h)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = st.force3D),
        (r.renderTransform = r.svg ? Yh : ba ? za : Xh),
        (r.uncache = 0),
        r
      );
    },
    vr = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Ii = function (t, e, r) {
      var s = H(e);
      return U(parseFloat(e) + parseFloat(jt(t, "x", r + "px", s))) + s;
    },
    Xh = function (t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), za(t, e);
    },
    le = "0deg",
    Be = "0px",
    ce = ") ",
    za = function (t, e) {
      var r = e || this,
        s = r.xPercent,
        n = r.yPercent,
        a = r.x,
        o = r.y,
        h = r.z,
        l = r.rotation,
        c = r.rotationY,
        u = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        m = r.scaleX,
        p = r.scaleY,
        g = r.transformPerspective,
        _ = r.force3D,
        y = r.target,
        x = r.zOrigin,
        w = "",
        M = (_ === "auto" && t && t !== 1) || _ === !0;
      if (x && (u !== le || c !== le)) {
        var v = parseFloat(c) * ye,
          T = Math.sin(v),
          E = Math.cos(v),
          b;
        (v = parseFloat(u) * ye), (b = Math.cos(v)), (a = Ii(y, a, T * b * -x)), (o = Ii(y, o, -Math.sin(v) * -x)), (h = Ii(y, h, E * b * -x + x));
      }
      g !== Be && (w += "perspective(" + g + ce),
        (s || n) && (w += "translate(" + s + "%, " + n + "%) "),
        (M || a !== Be || o !== Be || h !== Be) && (w += h !== Be || M ? "translate3d(" + a + ", " + o + ", " + h + ") " : "translate(" + a + ", " + o + ce),
        l !== le && (w += "rotate(" + l + ce),
        c !== le && (w += "rotateY(" + c + ce),
        u !== le && (w += "rotateX(" + u + ce),
        (f !== le || d !== le) && (w += "skew(" + f + ", " + d + ce),
        (m !== 1 || p !== 1) && (w += "scale(" + m + ", " + p + ce),
        (y.style[Q] = w || "translate(0, 0)");
    },
    Yh = function (t, e) {
      var r = e || this,
        s = r.xPercent,
        n = r.yPercent,
        a = r.x,
        o = r.y,
        h = r.rotation,
        l = r.skewX,
        c = r.skewY,
        u = r.scaleX,
        f = r.scaleY,
        d = r.target,
        m = r.xOrigin,
        p = r.yOrigin,
        g = r.xOffset,
        _ = r.yOffset,
        y = r.forceCSS,
        x = parseFloat(a),
        w = parseFloat(o),
        M,
        v,
        T,
        E,
        b;
      (h = parseFloat(h)),
        (l = parseFloat(l)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (l += c), (h += c)),
        h || l
          ? ((h *= ye),
            (l *= ye),
            (M = Math.cos(h) * u),
            (v = Math.sin(h) * u),
            (T = Math.sin(h - l) * -f),
            (E = Math.cos(h - l) * f),
            l &&
              ((c *= ye),
              (b = Math.tan(l - c)),
              (b = Math.sqrt(1 + b * b)),
              (T *= b),
              (E *= b),
              c && ((b = Math.tan(c)), (b = Math.sqrt(1 + b * b)), (M *= b), (v *= b))),
            (M = U(M)),
            (v = U(v)),
            (T = U(T)),
            (E = U(E)))
          : ((M = u), (E = f), (v = T = 0)),
        ((x && !~(a + "").indexOf("px")) || (w && !~(o + "").indexOf("px"))) && ((x = jt(d, "x", a, "px")), (w = jt(d, "y", o, "px"))),
        (m || p || g || _) && ((x = U(x + m - (m * M + p * T) + g)), (w = U(w + p - (m * v + p * E) + _))),
        (s || n) && ((b = d.getBBox()), (x = U(x + (s / 100) * b.width)), (w = U(w + (n / 100) * b.height))),
        (b = "matrix(" + M + "," + v + "," + T + "," + E + "," + x + "," + w + ")"),
        d.setAttribute("transform", b),
        y && (d.style[Q] = b);
    },
    Wh = function (t, e, r, s, n) {
      var a = 360,
        o = q(n),
        h = parseFloat(n) * (o && ~n.indexOf("rad") ? oe : 1),
        l = h - s,
        c = s + l + "deg",
        u,
        f;
      return (
        o &&
          ((u = n.split("_")[1]),
          u === "short" && ((l %= a), l !== l % (a / 2) && (l += l < 0 ? a : -a)),
          u === "cw" && l < 0 ? (l = ((l + a * ya) % a) - ~~(l / a) * a) : u === "ccw" && l > 0 && (l = ((l - a * ya) % a) - ~~(l / a) * a)),
        (t._pt = f = new et(t._pt, e, r, s, l, Dh)),
        (f.e = c),
        (f.u = "deg"),
        t._props.push(r),
        f
      );
    },
    La = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    Hh = function (t, e, r) {
      var s = La({}, r._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        a = r.style,
        o,
        h,
        l,
        c,
        u,
        f,
        d,
        m;
      s.svg
        ? ((l = r.getAttribute("transform")), r.setAttribute("transform", ""), (a[Q] = e), (o = Ne(r, 1)), Ie(r, Q), r.setAttribute("transform", l))
        : ((l = getComputedStyle(r)[Q]), (a[Q] = e), (o = Ne(r, 1)), (a[Q] = l));
      for (h in Nt)
        (l = s[h]),
          (c = o[h]),
          l !== c &&
            n.indexOf(h) < 0 &&
            ((d = H(l)),
            (m = H(c)),
            (u = d !== m ? jt(r, h, l, m) : parseFloat(l)),
            (f = parseFloat(c)),
            (t._pt = new et(t._pt, o, h, u, f - u, va)),
            (t._pt.u = m || 0),
            t._props.push(h));
      La(o, s);
    };
  tt("padding,margin,Width,Radius", function (i, t) {
    var e = "Top",
      r = "Right",
      s = "Bottom",
      n = "Left",
      a = (t < 3 ? [e, r, s, n] : [e + n, e + r, s + r, s + n]).map(function (o) {
        return t < 2 ? i + o : "border" + o + i;
      });
    wr[t > 1 ? "border" + i : i] = function (o, h, l, c, u) {
      var f, d;
      if (arguments.length < 4)
        return (
          (f = a.map(function (m) {
            return he(o, m, l);
          })),
          (d = f.join(" ")),
          d.split(f[0]).length === 5 ? f[0] : d
        );
      (f = (c + "").split(" ")),
        (d = {}),
        a.forEach(function (m, p) {
          return (d[m] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
        }),
        o.init(h, d, u);
    };
  });
  var ki = {
    name: "css",
    register: Oi,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, s, n) {
      var a = this._props,
        o = t.style,
        h = r.vars.startAt,
        l,
        c,
        u,
        f,
        d,
        m,
        p,
        g,
        _,
        y,
        x,
        w,
        M,
        v,
        T;
      Si || Oi();
      for (p in e)
        if (p !== "autoRound" && ((c = e[p]), !(at[p] && Mi(p, e, r, s, t, n)))) {
          if (
            ((d = typeof c),
            (m = wr[p]),
            d === "function" && ((c = c.call(r, s, t, n)), (d = typeof c)),
            d === "string" && ~c.indexOf("random(") && (c = me(c)),
            m)
          )
            m(this, t, p, c, r) && (T = 1);
          else if (p.substr(0, 2) === "--")
            (l = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
              (c += ""),
              (St.lastIndex = 0),
              St.test(l) || ((g = H(l)), (_ = H(c))),
              _ ? g !== _ && (l = jt(t, p, l, _) + _) : g && (c += g),
              this.add(o, "setProperty", l, c, s, n, 0, 0, p),
              a.push(p);
          else if (d !== "undefined") {
            if (
              (h && p in h
                ? ((l = typeof h[p] == "function" ? h[p].call(r, s, t, n) : h[p]),
                  q(l) && ~l.indexOf("random(") && (l = me(l)),
                  H(l + "") || (l += st.units[p] || H(he(t, p)) || ""),
                  (l + "").charAt(1) === "=" && (l = he(t, p)))
                : (l = he(t, p)),
              (f = parseFloat(l)),
              (y = d === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              y && (c = c.substr(2)),
              (u = parseFloat(c)),
              p in Bt &&
                (p === "autoAlpha" &&
                  (f === 1 && he(t, "visibility") === "hidden" && u && (f = 0),
                  Vt(this, o, "visibility", f ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                p !== "scale" && p !== "transform" && ((p = Bt[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (x = p in Nt),
              x)
            ) {
              if (
                (w ||
                  ((M = t._gsap),
                  (M.renderTransform && !e.parseTransform) || Ne(t, e.parseTransform),
                  (v = e.smoothOrigin !== !1 && M.smooth),
                  (w = this._pt = new et(this._pt, o, Q, 0, 1, M.renderTransform, M, 0, -1)),
                  (w.dep = 1)),
                p === "scale")
              )
                (this._pt = new et(this._pt, M, "scaleY", M.scaleY, (y ? ee(M.scaleY, y + u) : u) - M.scaleY || 0)), a.push("scaleY", p), (p += "X");
              else if (p === "transformOrigin") {
                (c = Gh(c)),
                  M.svg
                    ? Li(t, c, 0, v, 0, this)
                    : ((_ = parseFloat(c.split(" ")[2]) || 0), _ !== M.zOrigin && Vt(this, M, "zOrigin", M.zOrigin, _), Vt(this, o, p, vr(l), vr(c)));
                continue;
              } else if (p === "svgOrigin") {
                Li(t, c, 1, v, 0, this);
                continue;
              } else if (p in Ca) {
                Wh(this, M, p, f, y ? ee(f, y + c) : c);
                continue;
              } else if (p === "smoothOrigin") {
                Vt(this, M, "smooth", M.smooth, c);
                continue;
              } else if (p === "force3D") {
                M[p] = c;
                continue;
              } else if (p === "transform") {
                Hh(this, c, t);
                continue;
              }
            } else p in o || (p = ve(p) || p);
            if (x || ((u || u === 0) && (f || f === 0) && !Oh.test(c) && p in o))
              (g = (l + "").substr((f + "").length)),
                u || (u = 0),
                (_ = H(c) || (p in st.units ? st.units[p] : g)),
                g !== _ && (f = jt(t, p, l, _)),
                (this._pt = new et(
                  this._pt,
                  x ? M : o,
                  p,
                  f,
                  (y ? ee(f, y + u) : u) - f,
                  !x && (_ === "px" || p === "zIndex") && e.autoRound !== !1 ? Lh : va,
                )),
                (this._pt.u = _ || 0),
                g !== _ && _ !== "%" && ((this._pt.b = l), (this._pt.r = zh));
            else if (p in o) jh.call(this, t, p, l, y ? y + c : c);
            else if (p in t) this.add(t, p, l || t[p], y ? y + c : c, s, n);
            else {
              cr(p, c);
              continue;
            }
            a.push(p);
          }
        }
      T && Fi(this);
    },
    get: he,
    aliases: Bt,
    getSetter: function (t, e, r) {
      var s = Bt[e];
      return (
        s && s.indexOf(",") < 0 && (e = s),
        e in Nt && e !== Ut && (t._gsap.x || he(t, "x"))
          ? r && xa === r
            ? e === "scale"
              ? Bh
              : Nh
            : (xa = r || {}) && (e === "scale" ? Uh : Vh)
          : t.style && !or(t.style[e])
          ? Ih
          : ~e.indexOf("-")
          ? kh
          : xr(t, e)
      );
    },
    core: { _removeProperty: Ie, _getMatrix: zi },
  };
  ct.utils.checkPrefix = ve;
  (function (i, t, e, r) {
    var s = tt(i + "," + t + "," + e, function (n) {
      Nt[n] = 1;
    });
    tt(t, function (n) {
      (st.units[n] = "deg"), (Ca[n] = 1);
    }),
      (Bt[s[13]] = i + "," + t),
      tt(r, function (n) {
        var a = n.split(":");
        Bt[a[1]] = s[a[0]];
      });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
  );
  tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (i) {
    st.units[i] = "px";
  });
  ct.registerPlugin(ki);
  var Me = ct.registerPlugin(ki) || ct,
    Jd = Me.core.Tween;
  var Qh = `//	Simplex 3D Noise 
//	by Ian McEwan, Ashima Arts
//
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400459 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}`,
    Mr = { simplex3D: Qh };
  var Ia = `
precision highp float;
uniform sampler2D tMap;
varying vec2 vUv;
uniform float uTime;
uniform float uDelta;
uniform vec2 uPointer;

uniform vec4 uConfig;
${Mr.simplex3D}
void main(){

	float timeSpeed = uConfig.r;
	float frequency = uConfig.g;
	float speed = uConfig.b;
	float size = uConfig.a;

	float n = snoise(vec3(vUv * frequency, uTime * timeSpeed)) * 3.14 * 2.;
	float angle = n;

	float circle = smoothstep(size, size-.01, length(vUv - uPointer));

	vec2 displacement = vec2(
		cos(angle) * speed,
		sin(angle) * speed
	);
	displacement += -normalize(vUv - uPointer) * 0.003;
	vec4 average = vec4(0.);

	float texel = 1. / 512.;
	vec4 current = texture2D(tMap, vUv + displacement);
	average += current;
	average += texture2D(tMap, vUv + displacement + vec2(0., texel));
	average += texture2D(tMap, vUv + displacement + vec2(0., -texel));
	average += texture2D(tMap, vUv + displacement + vec2( texel, 0.));
	average += texture2D(tMap, vUv + displacement + vec2( -texel, 0.));
	average /= 5.;

	current = average;

	// 0.3
	current.r += -(0.3 ) * (uDelta/144.);
	current.r += (circle);
	current.r = clamp( current.r, 0., 1.);

	current.gb = displacement * current.r;

	current.a += 0.004 * (uDelta/144.);
	current.a *= step(0.1, current.r);
		// current.a = 0.;
	// current.rgb = vec3(1.);
	gl_FragColor = current;
}
`;
  function $h(i, t, e, r) {
    e === void 0 && (e = 0.1), r === void 0 && (r = 0.004);
    var s = (t - i) * e;
    return Math.abs(s) < r && (s = t - i), s;
  }
  var Ni = $h;
  function ka(i, t) {
    t.textures.forEach((e) => {
      i.deleteTexture(e.texture);
    }),
      i.deleteFramebuffer(t.buffer);
  }
  function Na(i, t) {
    ka(i, t.fbo.read),
      ka(i, t.fbo.write),
      t.geometry.remove(),
      t.passes.forEach((e) => {
        e.program.remove();
      });
  }
  var Ba = class extends On {
      constructor() {
        super("004");
        er(this, ["update", "onMouseMove", "onResize", "onPaletteChange", "onMouseDown"]),
          (G.camera = new Wt(G.gl, { aspect: G.vp.width / G.vp.height, far: 200 })),
          (G.camera.position.z = 1),
          (this.mouse = new B()),
          (this.uPointer = { value: new B(0.5, 0.5) }),
          (this.uPointerTarget = new B(0.5, 0.5)),
          (this.uAspect = { value: 1 }),
          (this.uAspect2 = { value: new B(1, 1) }),
          (this.uConfig = { value: new $e(1e-4, 2, 0.005, 0.1) }),
          (this.uBG = { value: new dt() }),
          (this.uColor = { value: new dt() }),
          (this.uVisibility = { value: 0 }),
          window.startDemo ? this.startDemo() : I.on("start-demo", this.startDemo);
      }
      startDemo() {
        let t = tr.load(G.gl, { src: "/images/issues/004/texture.jpg" });
        (this.texture = t), (this.texture.needsUpdate = !0);
        let e = 256 * 2,
          r = new Kr(G.gl, { data: new Float32Array(e * e * 4), type: G.gl.FLOAT });
        (this.fluidGPU = r), r.addPass({ fragment: Ia, uniforms: { uTime: G.uTime, uPointer: this.uPointer, uConfig: this.uConfig, uDelta: G.uTimeDelta } });
        let s = `
			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;
			attribute vec2 uv;
			attribute vec3 position;
			varying vec2 vUv;
			uniform sampler2D uMap;
			void main() {
				vec3 transformed = position;
				vUv = uv;
				vec3 fluid =  texture2D(uMap, uv).rgb;
				// transformed.z += fluid.r * 100.;
				gl_Position =  projectionMatrix * modelViewMatrix * vec4(transformed, 1.);
			}
		`,
          n = `
			precision highp float;
			varying vec2 vUv;
			uniform sampler2D uMap;
			uniform vec3 uColor;
			uniform vec3 uBG;
			uniform vec2 uAspect;
			uniform sampler2D uTexture;
			uniform float uVisibility;
			${Mr.simplex3D}
			
			void main() {
				float circle = smoothstep( 0.5, 0.4975, length(vUv - 0.5) );

				vec2 uv = vUv;
				uv =  vUv * uAspect + (1.-uAspect)/2.;
				vec3 color = vec3(0.); 
				vec3 fluid =  texture2D(uMap, uv).rgb;
				color = mix(uBG, uColor, fluid.r * uVisibility);

				// Need to mutiply by opacity to account for premultiply.
				gl_FragColor = vec4(color, 1.);
			}
		`,
          a = new Ht(G.gl, { widthSegments: 1, heightSegments: 1 }),
          o = new ut(G.gl, {
            vertex: s,
            fragment: n,
            transparent: !0,
            uniforms: {
              uMap: r.uniform,
              uTime: G.uTime,
              uBG: this.uBG,
              uColor: this.uColor,
              uAspect: this.uAspect2,
              uTexture: { value: this.texture },
              uVisibility: this.uVisibility,
            },
          }),
          h = new ht(G.gl, { geometry: a, program: o });
        h.setParent(G.scene), (this.mesh = h), this.updatePalette(palleteChanger.currentPallete, !0), this.addEvents(), this.animateIn();
      }
      onResize() {
        let t = G.getViewSizeAtDepth();
        this.mesh.scale.set(t.width, t.height, 1),
          (this.uAspect.value = t.height / t.width),
          t.width > t.height ? this.uAspect2.value.set(1, t.height / t.width) : this.uAspect2.value.set(t.width / t.height, 1);
      }
      onMouseMove(t) {
        this.mouse.set(t.x / j.width, 1 - t.y / j.height),
          this.uPointerTarget.copy(this.mouse),
          (this.uPointerTarget.y = this.uPointerTarget.y * this.uAspect2.value.y + (1 - this.uAspect2.value.y) / 2),
          (this.uPointerTarget.x = this.uPointerTarget.x * this.uAspect2.value.x + (1 - this.uAspect2.value.x) / 2);
      }
      animateIn() {
        Me.fromTo(this.uVisibility, { value: 0 }, { value: 1, duration: 0.8, ease: "power2.inOut" });
      }
      animateOut() {
        Me.killTweensOf(this.uVisibility), Me.to(this.uVisibility, { value: 0, duration: 0.5, ease: "power1.inOut" });
      }
      onMouseDown({ target: t }) {
        if (_n(t)) return;
        let e = Math.random() * 2e-4 + 5e-5,
          r = Math.random() * 0.1 + 0.05,
          s = Math.random() * 0.005 + 0.004,
          n = Math.random() * 4 + 0.5;
        this.uConfig.value.set(e, n, s, r);
      }
      update() {
        let t = 0.05;
        (this.uPointer.value.x += Ni(this.uPointer.value.x, this.uPointerTarget.x, t, 1e-7)),
          (this.uPointer.value.y += Ni(this.uPointer.value.y, this.uPointerTarget.y, t, 1e-7)),
          this.fluidGPU.render();
      }
      onPaletteChange(t) {
        this.updatePalette(t, !1);
      }
      updatePalette(t = palleteChanger.currentPallete, e = !1) {
        let r = new dt(t.bg),
          s = new dt(t.textInactive),
          n = new dt();
        n.copy(this.uBG.value);
        let a = new dt();
        if ((a.copy(this.uColor.value), e)) {
          this.uBG.value.copy(r), this.uColor.value.copy(s);
          return;
        }
        let o = { progress: 0 };
        Me.to(o, {
          progress: 1,
          duration: 0.41,
          ease: "power1.out",
          onUpdate: () => {
            n.mix(r, o.progress, this.uBG.value), a.mix(s, o.progress, this.uColor.value);
          },
        });
      }
      addEvents() {
        super.addEvents(),
          I.on("mousemove", this.onMouseMove),
          I.on("mousedown", this.onMouseDown),
          I.on("PALLETE_CHANGE", this.onPaletteChange),
          I.on("gl-update", this.update),
          I.on("gl-resize", this.onResize),
          this.onResize();
      }
      removeEvents() {
        super.removeEvents(),
          I.off("mousemove", this.onMouseMove),
          I.off("mousedown", this.onMouseDown),
          I.off("PALLETE_CHANGE", this.onPaletteChange),
          I.off("gl-update", this.update),
          I.off("gl-resize", this.onResize),
          Na(G.gl, this.fluidGPU),
          (this.fluidGPU = null),
          this.texture && this.texture.texture && (G.gl.deleteTexture(this.texture.texture), (this.texture = null)),
          (this.uVisibility = null),
          this.mesh.geometry.remove(),
          this.mesh.program.remove(),
          this.mesh.setParent(null),
          (this.mesh = null),
          (this.mouse = null),
          (this.uPointer = null),
          (this.uPointerTarget = null),
          (this.uAspect = null),
          (this.uAspect2 = null),
          (this.uConfig = null),
          (this.uBG = null),
          (this.uColor = null),
          (this.uVisibility = null);
      }
    },
    Ua = Ba;
  var bp = new Ua();
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
