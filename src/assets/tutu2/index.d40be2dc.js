var So = (e, t) =
>
() =
>
(t || e((t = {exports: {}}).exports, t), t.exports);
var Bu = So((Ve, Ye) = > {(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver(s = > {for(const o of s
)
    if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
}).
    observe(document, {childList: !0, subtree: !0});

    function n(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity), s.referrerpolicy && (o.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? o.credentials = "include" : s.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const o = n(s);
        fetch(s.href, o)
    }
})();

function Qn(e, t) {
    const n = Object.create(null), r = e.split(",");
    for (let s = 0; s < r.length; s++) n[r[s]] = !0;
    return t ? s =
>
    !!n[s.toLowerCase()]
:
    s =
>
    !!n[s]
}

const Ro = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lo = Qn(Ro);

function bs(e) {
    return !!e || e === ""
}

function un(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n], s = pe(r) ? Bo(r) : un(r);
            if (s) for (const o in s) t[o] = s[o]
        }
        return t
    } else {
        if (pe(e)) return e;
        if (le(e)) return e
    }
}

const $o = /;(?![^(]*\))/g, ko = /:(.+)/;

function Bo(e) {
    const t = {};
    return e.split($o).forEach(n = > {
        if(n) {
            const r = n.split(ko);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
),
    t
}

function Gn(e) {
    let t = "";
    if (pe(e)) t = e; else if (B(e)) for (let n = 0; n < e.length; n++) {
        const r = Gn(e[n]);
        r && (t += r + " ")
    } else if (le(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

const Do = e =
>
pe(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === xs || !z(e.toString)) ? JSON.stringify(e, _s, 2) : String(e), _s = (e, t) =
>
t && t.__v_isRef ? _s(e, t.value) : Ct(t) ? {[`Map(${t.size})`]: [...t.entries()
].
reduce((n, [r, s]) = > (n[`${r} =>`] = s, n), {}
)
}:
ys(t) ? {[`Set(${t.size})`]: [...t.values()
]
}:
le(t) && !B(t) && !Ts(t) ? String(t) : t, se = {}, Tt = [], $e = () =
>
{
}
,
Ho = () =
>
!1, Uo = /^on[^a-z]/, an = e =
>
Uo.test(e), er = e =
>
e.startsWith("onUpdate:"), me = Object.assign, tr = (e, t) =
>
{
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
,
Ko = Object.prototype.hasOwnProperty, X = (e, t) =
>
Ko.call(e, t), B = Array.isArray, Ct = e =
>
dn(e) === "[object Map]", ys = e =
>
dn(e) === "[object Set]", z = e =
>
typeof e == "function", pe = e =
>
typeof e == "string", nr = e =
>
typeof e == "symbol", le = e =
>
e !== null && typeof e == "object", vs = e =
>
le(e) && z(e.then) && z(e.catch), xs = Object.prototype.toString, dn = e =
>
xs.call(e), Wo = e =
>
dn(e).slice(8, -1), Ts = e =
>
dn(e) === "[object Object]", rr = e =
>
pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = Qn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), hn = e =
>
{
    const t = Object.create(null);
    return n =
>
    t[n] || (t[n] = e(n))
}
,
zo = /-(\w)/g, At = hn(e = > e.replace(zo, (t, n) = > n ? n.toUpperCase() : ""
)),
qo = /\B([A-Z])/g, Ot = hn(e = > e.replace(qo, "-$1").toLowerCase()
),
Cs = hn(e = > e.charAt(0).toUpperCase() + e.slice(1)
),
Tn = hn(e = > e ? `on${Cs(e)}` : ""
),
Ht = (e, t) =
>
!Object.is(e, t), Cn = (e, t) =
>
{
    for (let n = 0; n < e.length; n++) e[n](t)
}
,
rn = (e, t, n) =
>
{
    Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
}
,
ws = e =
>
{
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;let Ar;
const Vo = () =
>
Ar || (Ar = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let Ue;

class Yo {
    constructor(t = !1) {
        this.active = !0, this.effects = [], this.cleanups = [], !t && Ue && (this.parent = Ue, this.index = (Ue.scopes || (Ue.scopes = [])).push(this) - 1)
    }

    run(t) {
        if (this.active) {
            const n = Ue;
            try {
                return Ue = this, t()
            } finally {
                Ue = n
            }
        }
    }

    on() {
        Ue = this
    }

    off() {
        Ue = this.parent
    }

    stop(t) {
        if (this.active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.active = !1
        }
    }
}

function Xo(e, t=Ue) {
    t && t.active && t.effects.push(e)
}

const sr = e =
>
{
    const t = new Set(e);
    return t.w = 0, t.n = 0, t
}
,
Es = e =
>
(e.w & it) > 0, As = e =
>
(e.n & it) > 0, Jo = ({deps: e}) =
>
{
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= it
}
,
Zo = e =
>
{
    const {deps: t} = e;
    if (t.length) {
        let n = 0;
        for (let r = 0; r < t.length; r++) {
            const s = t[r];
            Es(s) && !As(s) ? s.delete(e) : t[n++] = s, s.w &= ~it, s.n &= ~it
        }
        t.length = n
    }
}
,
Sn = new WeakMap;
let Lt = 0, it = 1;
const Rn = 30;
let Re;
const mt = Symbol(""), Ln = Symbol("");

class or {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Xo(this, r)
    }

    run() {
        if (!this.active) return this.fn();
        let t = Re, n = st;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = Re, Re = this, st = !0, it = 1 << ++Lt, Lt <= Rn ? Jo(this) : Mr(this), this.fn()
        } finally {
            Lt <= Rn && Zo(this), it = 1 << --Lt, Re = this.parent, st = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }

    stop() {
        Re === this ? this.deferStop = !0 : this.active && (Mr(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Mr(e) {
    const {deps: t} = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}

let st = !0;
const Ms = [];

function Nt() {
    Ms.push(st), st = !1
}

function Pt() {
    const e = Ms.pop();
    st = e === void 0 ? !0 : e
}

function Fe(e, t, n) {
    if (st && Re) {
        let r = Sn.get(e);
        r || Sn.set(e, r = new Map);
        let s = r.get(n);
        s || r.set(n, s = sr()), Is(s)
    }
}

function Is(e, t) {
    let n = !1;
    Lt <= Rn ? As(e) || (e.n |= it, n = !Es(e)) : n = !e.has(Re), n && (e.add(Re), Re.deps.push(e))
}

function Xe(e, t, n, r, s, o) {
    const i = Sn.get(e);
    if (!i) return;
    let l = [];
    if (t === "clear") l = [...i.values()
]
    ;
else
    if (n === "length" && B(e)) i.forEach((f, a) = > {(a === "length" || a >= r) && l.push(f)
})
    ;
else
    switch (n !== void 0 && l.push(i.get(n)), t) {
        case"add":
            B(e) ? rr(n) && l.push(i.get("length")) : (l.push(i.get(mt)), Ct(e) && l.push(i.get(Ln)));
            break;
        case"delete":
            B(e) || (l.push(i.get(mt)), Ct(e) && l.push(i.get(Ln)));
            break;
        case"set":
            Ct(e) && l.push(i.get(mt));
            break
    }
    if (l.length === 1) l[0] && $n(l[0]); else {
        const f = [];
        for (const a of l) a && f.push(...a
    )
        ;$n(sr(f))
    }
}

function $n(e, t) {
    const n = B(e) ? e : [...e
]
    ;
    for (const r of n) r.computed && Ir(r);
    for (const r of n) r.computed || Ir(r)
}

function Ir(e, t) {
    (e !== Re || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

const Qo = Qn("__proto__,__v_isRef,__isVue"),
    Fs = new Set(Object.getOwnPropertyNames(Symbol).filter(e = > e !== "arguments" && e !== "caller").map(e = > Symbol[e]
).
filter(nr)
),
Go = ir(), ei = ir(!1, !0), ti = ir(!0), Fr = ni();

function ni() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t = > {e[t] = function (...n
)
    {
        const r = Z(this);
        for (let o = 0, i = this.length; o < i; o++) Fe(r, "get", o + "");
        const s = r[t](...n
    )
        ;
        return s === -1 || s === !1 ? r[t](...n.map(Z)
    ):
        s
    }
}),
    ["push", "pop", "shift", "unshift", "splice"].forEach(t = > {e[t] = function (...n
)
    {
        Nt();
        const r = Z(this)[t].apply(this, n);
        return Pt(), r
    }
}),
    e
}

function ir(e=!1, t=!1) {
    return function (r, s, o) {
        if (s === "__v_isReactive") return !e;
        if (s === "__v_isReadonly") return e;
        if (s === "__v_isShallow") return t;
        if (s === "__v_raw" && o === (e ? t ? _i : Ss : t ? js : Ps).get(r)) return r;
        const i = B(r);
        if (!e && i && X(Fr, s)) return Reflect.get(Fr, s, o);
        const l = Reflect.get(r, s, o);
        return (nr(s) ? Fs.has(s) : Qo(s)) || (e || Fe(r, "get", s), t) ? l : _e(l) ? i && rr(s) ? l : l.value : le(l) ? e ? Rs(l) : fr(l) : l
    }
}

const ri = Os(), si = Os(!0);

function Os(e=!1) {
    return function (n, r, s, o) {
        let i = n[r];
        if (Mt(i) && _e(i) && !_e(s)) return !1;
        if (!e && (!sn(s) && !Mt(s) && (i = Z(i), s = Z(s)), !B(n) && _e(i) && !_e(s))) return i.value = s, !0;
        const l = B(n) && rr(r) ? Number(r) < n.length : X(n, r), f = Reflect.set(n, r, s, o);
        return n === Z(o) && (l ? Ht(s, i) && Xe(n, "set", r, s) : Xe(n, "add", r, s)), f
    }
}

function oi(e, t) {
    const n = X(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && Xe(e, "delete", t, void 0), r
}

function ii(e, t) {
    const n = Reflect.has(e, t);
    return (!nr(t) || !Fs.has(t)) && Fe(e, "has", t), n
}

function li(e) {
    return Fe(e, "iterate", B(e) ? "length" : mt), Reflect.ownKeys(e)
}

const Ns = {get: Go, set: ri, deleteProperty: oi, has: ii, ownKeys: li}, ci = {
    get: ti, set(e, t) {
        return !0
    }, deleteProperty(e, t) {
        return !0
    }
}, fi = me({}, Ns, {get: ei, set: si}), lr = e =
>
e, pn = e =
>
Reflect.getPrototypeOf(e);

function Vt(e, t, n=!1, r=!1) {
    e = e.__v_raw;
    const s = Z(e), o = Z(t);
    n || (t !== o && Fe(s, "get", t), Fe(s, "get", o));
    const {has: i} = pn(s), l = r ? lr : n ? ar : Ut;
    if (i.call(s, t)) return l(e.get(t));
    if (i.call(s, o)) return l(e.get(o));
    e !== s && e.get(t)
}

function Yt(e, t=!1) {
    const n = this.__v_raw, r = Z(n), s = Z(e);
    return t || (e !== s && Fe(r, "has", e), Fe(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s)
}

function Xt(e, t=!1) {
    return e = e.__v_raw, !t && Fe(Z(e), "iterate", mt), Reflect.get(e, "size", e)
}

function Or(e) {
    e = Z(e);
    const t = Z(this);
    return pn(t).has.call(t, e) || (t.add(e), Xe(t, "add", e, e)), this
}

function Nr(e, t) {
    t = Z(t);
    const n = Z(this), {has: r, get: s} = pn(n);
    let o = r.call(n, e);
    o || (e = Z(e), o = r.call(n, e));
    const i = s.call(n, e);
    return n.set(e, t), o ? Ht(t, i) && Xe(n, "set", e, t) : Xe(n, "add", e, t), this
}

function Pr(e) {
    const t = Z(this), {has: n, get: r} = pn(t);
    let s = n.call(t, e);
    s || (e = Z(e), s = n.call(t, e)), r && r.call(t, e);
    const o = t.delete(e);
    return s && Xe(t, "delete", e, void 0), o
}

function jr() {
    const e = Z(this), t = e.size !== 0, n = e.clear();
    return t && Xe(e, "clear", void 0, void 0), n
}

function Jt(e, t) {
    return function (r, s) {
        const o = this, i = o.__v_raw, l = Z(i), f = t ? lr : e ? ar : Ut;
        return !e && Fe(l, "iterate", mt), i.forEach((a, g) = > r.call(s, f(a), f(g), o)
    )
    }
}

function Zt(e, t, n) {
    return function (...r
)
    {
        const s = this.__v_raw, o = Z(s), i = Ct(o), l = e === "entries" || e === Symbol.iterator && i,
            f = e === "keys" && i, a = s[e](...r
    ),
        g = n ? lr : t ? ar : Ut;
        return !t && Fe(o, "iterate", f ? Ln : mt), {
            next() {
                const {value: y, done: x} = a.next();
                return x ? {value: y, done: x} : {value: l ? [g(y[0]), g(y[1])] : g(y), done: x}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Ge(e) {
    return function (...t
)
    {
        return e === "delete" ? !1 : this
    }
}

function ui() {
    const e = {
        get(o) {
            return Vt(this, o)
        }, get size() {
            return Xt(this)
        }, has: Yt, add: Or, set: Nr, delete: Pr, clear: jr, forEach: Jt(!1, !1)
    }, t = {
        get(o) {
            return Vt(this, o, !1, !0)
        }, get size() {
            return Xt(this)
        }, has: Yt, add: Or, set: Nr, delete: Pr, clear: jr, forEach: Jt(!1, !0)
    }, n = {
        get(o) {
            return Vt(this, o, !0)
        }, get size() {
            return Xt(this, !0)
        }, has(o) {
            return Yt.call(this, o, !0)
        }, add: Ge("add"), set: Ge("set"), delete: Ge("delete"), clear: Ge("clear"), forEach: Jt(!0, !1)
    }, r = {
        get(o) {
            return Vt(this, o, !0, !0)
        }, get size() {
            return Xt(this, !0)
        }, has(o) {
            return Yt.call(this, o, !0)
        }, add: Ge("add"), set: Ge("set"), delete: Ge("delete"), clear: Ge("clear"), forEach: Jt(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o = > {
        e[o] = Zt(o, !1, !1),
        n[o] = Zt(o, !0, !1),
        t[o] = Zt(o, !1, !0),
        r[o] = Zt(o, !0, !0)
    }
),
    [e, n, t, r]
}

const [ai, di, hi, pi] = ui();

function cr(e, t) {
    const n = t ? e ? pi : hi : e ? di : ai;
    return (r, s, o) =
>
    s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(X(n, s) && s in r ? n : r, s, o)
}

const gi = {get: cr(!1, !1)}, mi = {get: cr(!1, !0)}, bi = {get: cr(!0, !1)}, Ps = new WeakMap, js = new WeakMap,
    Ss = new WeakMap, _i = new WeakMap;

function yi(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function vi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : yi(Wo(e))
}

function fr(e) {
    return Mt(e) ? e : ur(e, !1, Ns, gi, Ps)
}

function xi(e) {
    return ur(e, !1, fi, mi, js)
}

function Rs(e) {
    return ur(e, !0, ci, bi, Ss)
}

function ur(e, t, n, r, s) {
    if (!le(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = s.get(e);
    if (o) return o;
    const i = vi(e);
    if (i === 0) return e;
    const l = new Proxy(e, i === 2 ? r : n);
    return s.set(e, l), l
}

function wt(e) {
    return Mt(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Mt(e) {
    return !!(e && e.__v_isReadonly)
}

function sn(e) {
    return !!(e && e.__v_isShallow)
}

function Ls(e) {
    return wt(e) || Mt(e)
}

function Z(e) {
    const t = e && e.__v_raw;
    return t ? Z(t) : e
}

function $s(e) {
    return rn(e, "__v_skip", !0), e
}

const Ut = e =
>
le(e) ? fr(e) : e, ar = e =
>
le(e) ? Rs(e) : e;

function ks(e) {
    st && Re && (e = Z(e), Is(e.dep || (e.dep = sr())))
}

function Bs(e, t) {
    e = Z(e), e.dep && $n(e.dep)
}

function _e(e) {
    return !!(e && e.__v_isRef === !0)
}

function ve(e) {
    return Ti(e, !1)
}

function Ti(e, t) {
    return _e(e) ? e : new Ci(e, t)
}

class Ci {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Z(t), this._value = n ? t : Ut(t)
    }

    get value() {
        return ks(this), this._value
    }

    set value(t) {
        const n = this.__v_isShallow || sn(t) || Mt(t);
        t = n ? t : Z(t), Ht(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Ut(t), Bs(this))
    }
}

function Ce(e) {
    return _e(e) ? e.value : e
}

const wi = {get: (e, t, n) = > Ce(Reflect.get(e, t, n)), set
:
(e, t, n, r) =
>
{
    const s = e[t];
    return _e(s) && !_e(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
}
}
;

function Ds(e) {
    return wt(e) ? e : new Proxy(e, wi)
}

var Hs;

class Ei {
    constructor(t, n, r, s) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hs] = !1, this._dirty = !0, this.effect = new or(t, () = > {
            this
            ._dirty || (this._dirty = !0, Bs(this))
        }
    ),
        this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r
    }

    get value() {
        const t = Z(this);
        return ks(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }

    set value(t) {
        this._setter(t)
    }
}

Hs = "__v_isReadonly";

function Ai(e, t, n=!1) {
    let r, s;
    const o = z(e);
    return o ? (r = e, s = $e) : (r = e.get, s = e.set), new Ei(r, s, o || !s, n)
}

function ot(e, t, n, r) {
    let s;
    try {
        s = r ? e(...r
    ):
        e()
    } catch (o) {
        gn(o, t, n)
    }
    return s
}

function Ne(e, t, n, r) {
    if (z(e)) {
        const o = ot(e, t, n, r);
        return o && vs(o) && o.catch(i = > {gn(i, t, n)}
    ),
        o
    }
    const s = [];
    for (let o = 0; o < e.length; o++) s.push(Ne(e[o], t, n, r));
    return s
}

function gn(e, t, n, r=!0) {
    const s = t ? t.vnode : null;
    if (t) {
        let o = t.parent;
        const i = t.proxy, l = n;
        for (; o;) {
            const a = o.ec;
            if (a) {
                for (let g = 0; g < a.length; g++) if (a[g](e, i, l) === !1) return
            }
            o = o.parent
        }
        const f = t.appContext.config.errorHandler;
        if (f) {
            ot(f, null, 10, [e, i, l]);
            return
        }
    }
    Mi(e, n, s, r)
}

function Mi(e, t, n, r=!0) {
    console.error(e)
}

let Kt = !1, kn = !1;
const be = [];
let We = 0;
const Et = [];
let qe = null, ht = 0;
const Us = Promise.resolve();
let dr = null;

function Ii(e) {
    const t = dr || Us;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Fi(e) {
    let t = We + 1, n = be.length;
    for (; t < n;) {
        const r = t + n >>> 1;
        Wt(be[r]) < e ? t = r + 1 : n = r
    }
    return t
}

function hr(e) {
    (!be.length || !be.includes(e, Kt && e.allowRecurse ? We + 1 : We)) && (e.id == null ? be.push(e) : be.splice(Fi(e.id), 0, e), Ks())
}

function Ks() {
    !Kt && !kn && (kn = !0, dr = Us.then(zs))
}

function Oi(e) {
    const t = be.indexOf(e);
    t > We && be.splice(t, 1)
}

function Ni(e) {
    B(e) ? Et.push(...e
):
    (!qe || !qe.includes(e, e.allowRecurse ? ht + 1 : ht)) && Et.push(e), Ks()
}

function Sr(e, t=Kt ? We + 1 : 0) {
    for (; t < be.length; t++) {
        const n = be[t];
        n && n.pre && (be.splice(t, 1), t--, n())
    }
}

function Ws(e) {
    if (Et.length) {
        const t = [...new
        Set(Et)
    ]
        ;
        if (Et.length = 0, qe) {
            qe.push(...t
        )
            ;
            return
        }
        for (qe = t, qe.sort((n, r) = > Wt(n) - Wt(r)),
        ht = 0;
        ht < qe.length;
        ht++
    )
        qe[ht]();
        qe = null, ht = 0
    }
}

const Wt = e =
>
e.id == null ? 1 / 0 : e.id, Pi = (e, t) =
>
{
    const n = Wt(e) - Wt(t);
    if (n === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1
    }
    return n
}
;

function zs(e) {
    kn = !1, Kt = !0, be.sort(Pi);
    const t = $e;
    try {
        for (We = 0; We < be.length; We++) {
            const n = be[We];
            n && n.active !== !1 && ot(n, null, 14)
        }
    } finally {
        We = 0, be.length = 0, Ws(), Kt = !1, dr = null, (be.length || Et.length) && zs()
    }
}

function ji(e, t,

...
n
)
{
    if (e.isUnmounted) return;
    const r = e.vnode.props || se;
    let s = n;
    const o = t.startsWith("update:"), i = o && t.slice(7);
    if (i && i in r) {
        const g = `${i === "modelValue" ? "model" : i}Modifiers`, {number: y, trim: x} = r[g] || se;
        x && (s = n.map(v = > v.trim())
    ),
        y && (s = n.map(ws))
    }
    let l, f = r[l = Tn(t)] || r[l = Tn(At(t))];
    !f && o && (f = r[l = Tn(Ot(t))]), f && Ne(f, e, 6, s);
    const a = r[l + "Once"];
    if (a) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[l]) return;
        e.emitted[l] = !0, Ne(a, e, 6, s)
    }
}

function qs(e, t, n=!1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let i = {}, l = !1;
    if (!z(e)) {
        const f = a =
    >
        {
            const g = qs(a, t, !0);
            g && (l = !0, me(i, g))
        }
        ;!n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
    }
    return !o && !l ? (le(e) && r.set(e, null), null) : (B(o) ? o.forEach(f = > i[f] = null)
:
    me(i, o), le(e) && r.set(e, i), i
)
}

function mn(e, t) {
    return !e || !an(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, Ot(t)) || X(e, t))
}

let ze = null, Vs = null;

function on(e) {
    const t = ze;
    return ze = e, Vs = e && e.type.__scopeId || null, t
}

function $t(e, t=ze, n) {
    if (!t || e._n) return e;
    const r = (...s
)
    =
>
    {
        r._d && Wr(-1);
        const o = on(t), i = e(...s
    )
        ;
        return on(o), r._d && Wr(1), i
    }
    ;
    return r._n = !0, r._c = !0, r._d = !0, r
}

function wn(e) {
    const {type: t, vnode: n, proxy: r, withProxy: s, props: o, propsOptions: [i], slots: l, attrs: f, emit: a, render: g, renderCache: y, data: x, setupState: v, ctx: R, inheritAttrs: K} = e;
    let L, D;
    const ae = on(e);
    try {
        if (n.shapeFlag & 4) {
            const G = s || r;
            L = Ke(g.call(G, G, y, o, v, x, R)), D = f
        } else {
            const G = t;
            L = Ke(G.length > 1 ? G(o, {attrs: f, slots: l, emit: a}) : G(o, null)), D = t.props ? f : Si(f)
        }
    } catch (G) {
        Bt.length = 0, gn(G, e, 1), L = xe(ke)
    }
    let Q = L;
    if (D && K !== !1) {
        const G = Object.keys(D), {shapeFlag: fe} = Q;
        G.length && fe & 7 && (i && G.some(er) && (D = Ri(D, i)), Q = lt(Q, D))
    }
    return n.dirs && (Q = lt(Q), Q.dirs = Q.dirs ? Q.dirs.concat(n.dirs) : n.dirs), n.transition && (Q.transition = n.transition), L = Q, on(ae), L
}

const Si = e =
>
{
    let t;
    for (const n in e) (n === "class" || n === "style" || an(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
,
Ri = (e, t) =
>
{
    const n = {};
    for (const r in e) (!er(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
}
;

function Li(e, t, n) {
    const {props: r, children: s, component: o} = e, {props: i, children: l, patchFlag: f} = t, a = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && f >= 0) {
        if (f & 1024) return !0;
        if (f & 16) return r ? Rr(r, i, a) : !!i;
        if (f & 8) {
            const g = t.dynamicProps;
            for (let y = 0; y < g.length; y++) {
                const x = g[y];
                if (i[x] !== r[x] && !mn(a, x)) return !0
            }
        }
    } else return (s || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Rr(r, i, a) : !0 : !!i;
    return !1
}

function Rr(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !mn(n, o)) return !0
    }
    return !1
}

function $i({vnode: e, parent: t}, n) {
    for (; t && t.subTree === e;) (e = t.vnode).el = n, t = t.parent
}

const ki = e =
>
e.__isSuspense;

function Bi(e, t) {
    t && t.pendingBranch ? B(e) ? t.effects.push(...e
):
    t.effects.push(e)
:
    Ni(e)
}

function Di(e, t) {
    if (ge) {
        let n = ge.provides;
        const r = ge.parent && ge.parent.provides;
        r === n && (n = ge.provides = Object.create(r)), n[e] = t
    }
}

function En(e, t, n=!1) {
    const r = ge || ze;
    if (r) {
        const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && z(t) ? t.call(r.proxy) : t
    }
}

const Lr = {};

function An(e, t, n) {
    return Ys(e, t, n)
}

function Ys(e, t, {immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i} = se) {
    const l = ge;
    let f, a = !1, g = !1;
    if (_e(e) ? (f = () = > e.value, a = sn(e)):
    wt(e) ? (f = () = > e, r = !0
):
    B(e) ? (g = !0, a = e.some(D = > wt(D) || sn(D)), f = () =
>
    e.map(D = > {if(_e(D)
)
    return D.value;
    if (wt(D)) return vt(D);
    if (z(D)) return ot(D, l, 2)
})):
    z(e) ? t ? f = () =
>
    ot(e, l, 2)
:
    f = () =
>
    {
        if (!(l && l.isUnmounted)) return y && y(), Ne(e, l, 3, [x])
    }
:
    f = $e, t && r
)
    {
        const D = f;
        f = () =
    >
        vt(D())
    }
    let y, x = D =
>
    {
        y = L.onStop = () =
    >
        {
            ot(D, l, 4)
        }
    }
    ;
    if (qt) return x = $e, t ? n && Ne(t, l, 3, [f(), g ? [] : void 0, x]) : f(), $e;
    let v = g ? [] : Lr;
    const R = () =
>
    {
        if (!!L.active) if (t) {
            const D = L.run();
            (r || a || (g ? D.some((ae, Q) = > Ht(ae, v[Q]))
        :
            Ht(D, v)
        ))&&
            (y && y(), Ne(t, l, 3, [D, v === Lr ? void 0 : v, x]), v = D)
        } else L.run()
    }
    ;R.allowRecurse = !!t;
    let K;
    s === "sync" ? K = R : s === "post" ? K = () =
>
    we(R, l && l.suspense)
:
    (R.pre = !0, l && (R.id = l.uid), K = () = > hr(R)
)
    ;const L = new or(f, K);
    return t ? n ? R() : v = L.run() : s === "post" ? we(L.run.bind(L), l && l.suspense) : L.run(), () =
>
    {
        L.stop(), l && l.scope && tr(l.scope.effects, L)
    }
}

function Hi(e, t, n) {
    const r = this.proxy, s = pe(e) ? e.includes(".") ? Xs(r, e) : () =
>
    r[e]
:
    e.bind(r, r);
    let o;
    z(t) ? o = t : (o = t.handler, n = t);
    const i = ge;
    It(this);
    const l = Ys(s, o.bind(r), n);
    return i ? It(i) : bt(), l
}

function Xs(e, t) {
    const n = t.split(".");
    return () =
>
    {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}

function vt(e, t) {
    if (!le(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), _e(e)) vt(e.value, t); else if (B(e)) for (let n = 0; n < e.length; n++) vt(e[n], t); else if (ys(e) || Ct(e)) e.forEach(n = > {vt(n, t)}
)
    ;
else
    if (Ts(e)) for (const n in e) vt(e[n], t);
    return e
}

function Ui() {
    const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
    return pr(() = > {e.isMounted = !0}
),
    to(() = > {e.isUnmounting = !0}
),
    e
}

const Oe = [Function, Array], Ki = {
    name: "BaseTransition",
    props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Oe,
        onEnter: Oe,
        onAfterEnter: Oe,
        onEnterCancelled: Oe,
        onBeforeLeave: Oe,
        onLeave: Oe,
        onAfterLeave: Oe,
        onLeaveCancelled: Oe,
        onBeforeAppear: Oe,
        onAppear: Oe,
        onAfterAppear: Oe,
        onAppearCancelled: Oe
    },
    setup(e, {slots: t}) {
        const n = El(), r = Ui();
        let s;
        return () =
    >
        {
            const o = t.default && Qs(t.default(), !0);
            if (!o || !o.length) return;
            let i = o[0];
            if (o.length > 1) {
                for (const K of o) if (K.type !== ke) {
                    i = K;
                    break
                }
            }
            const l = Z(e), {mode: f} = l;
            if (r.isLeaving) return Mn(i);
            const a = $r(i);
            if (!a) return Mn(i);
            const g = Bn(a, l, r, n);
            Dn(a, g);
            const y = n.subTree, x = y && $r(y);
            let v = !1;
            const {getTransitionKey: R} = a.type;
            if (R) {
                const K = R();
                s === void 0 ? s = K : K !== s && (s = K, v = !0)
            }
            if (x && x.type !== ke && (!pt(a, x) || v)) {
                const K = Bn(x, l, r, n);
                if (Dn(x, K), f === "out-in") return r.isLeaving = !0, K.afterLeave = () =
            >
                {
                    r.isLeaving = !1, n.update()
                }
            ,
                Mn(i);
                f === "in-out" && a.type !== ke && (K.delayLeave = (L, D, ae) = > {const Q = Zs(r, x);
                Q[String(x.key)] = x, L._leaveCb = () =
            >
                {
                    D(), L._leaveCb = void 0, delete g.delayedLeave
                }
            ,
                g.delayedLeave = ae
            })
            }
            return i
        }
    }
}, Js = Ki;

function Zs(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Bn(e, t, n, r) {
    const {appear: s, mode: o, persisted: i = !1, onBeforeEnter: l, onEnter: f, onAfterEnter: a, onEnterCancelled: g, onBeforeLeave: y, onLeave: x, onAfterLeave: v, onLeaveCancelled: R, onBeforeAppear: K, onAppear: L, onAfterAppear: D, onAppearCancelled: ae} = t,
        Q = String(e.key), G = Zs(n, e), fe = (I, k) =
>
    {
        I && Ne(I, r, 9, k)
    }
,
    q = (I, k) =
>
    {
        const j = k[1];
        fe(I, k), B(I) ? I.every(ue = > ue.length <= 1
    )&&
        j()
    :
        I.length <= 1 && j()
    }
,
    ee = {
        mode: o, persisted: i, beforeEnter(I) {
            let k = l;
            if (!n.isMounted) if (s) k = K || l; else return;
            I._leaveCb && I._leaveCb(!0);
            const j = G[Q];
            j && pt(e, j) && j.el._leaveCb && j.el._leaveCb(), fe(k, [I])
        }, enter(I) {
            let k = f, j = a, ue = g;
            if (!n.isMounted) if (s) k = L || f, j = D || a, ue = ae || g; else return;
            let A = !1;
            const te = I._enterCb = p =
        >
            {
                A || (A = !0, p ? fe(ue, [I]) : fe(j, [I]), ee.delayedLeave && ee.delayedLeave(), I._enterCb = void 0)
            }
            ;k ? q(k, [I, te]) : te()
        }, leave(I, k) {
            const j = String(e.key);
            if (I._enterCb && I._enterCb(!0), n.isUnmounting) return k();
            fe(y, [I]);
            let ue = !1;
            const A = I._leaveCb = te =
        >
            {
                ue || (ue = !0, k(), te ? fe(R, [I]) : fe(v, [I]), I._leaveCb = void 0, G[j] === e && delete G[j])
            }
            ;G[j] = e, x ? q(x, [I, A]) : A()
        }, clone(I) {
            return Bn(I, t, n, r)
        }
    };
    return ee
}

function Mn(e) {
    if (bn(e)) return e = lt(e), e.children = null, e
}

function $r(e) {
    return bn(e) ? e.children ? e.children[0] : void 0 : e
}

function Dn(e, t) {
    e.shapeFlag & 6 && e.component ? Dn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Qs(e, t=!1, n) {
    let r = [], s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === Ie ? (i.patchFlag & 128 && s++, r = r.concat(Qs(i.children, t, l))) : (t || i.type !== ke) && r.push(l != null ? lt(i, {key: l}) : i)
    }
    if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r
}

function Gs(e) {
    return z(e) ? {setup: e, name: e.name} : e
}

const tn = e =
>
!!e.type.__asyncLoader, bn = e =
>
e.type.__isKeepAlive;

function Wi(e, t) {
    eo(e, "a", t)
}

function zi(e, t) {
    eo(e, "da", t)
}

function eo(e, t, n=ge) {
    const r = e.__wdc || (e.__wdc = () = > {let s = n;
    for (; s;) {
        if (s.isDeactivated) return;
        s = s.parent
    }
    return e()
})
    ;
    if (_n(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) bn(s.parent.vnode) && qi(r, t, n, s), s = s.parent
    }
}

function qi(e, t, n, r) {
    const s = _n(t, e, r, !0);
    no(() = > {tr(r[t], s
)
},
    n
)
}

function _n(e, t, n=ge, r=!1) {
    if (n) {
        const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) =
    >
        {
            if (n.isUnmounted) return;
            Nt(), It(n);
            const l = Ne(t, n, e, i);
            return bt(), Pt(), l
        }
    )
        ;
        return r ? s.unshift(o) : s.push(o), o
    }
}

const Je = e =
>
(t, n = ge) =
>
(!qt || e === "sp") && _n(e, t, n), Vi = Je("bm"), pr = Je("m"), Yi = Je("bu"), Xi = Je("u"), to = Je("bum"), no = Je("um"), Ji = Je("sp"), Zi = Je("rtg"), Qi = Je("rtc");

function Gi(e, t=ge) {
    _n("ec", e, t)
}

function ct(e, t, n, r) {
    const s = e.dirs, o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const l = s[i];
        o && (l.oldValue = o[i].value);
        let f = l.dir[r];
        f && (Nt(), Ne(f, n, 8, [e.el, l, e, t]), Pt())
    }
}

const el = Symbol();

function In(e, t, n, r) {
    let s;
    const o = n && n[r];
    if (B(e) || pe(e)) {
        s = new Array(e.length);
        for (let i = 0, l = e.length; i < l; i++) s[i] = t(e[i], i, void 0, o && o[i])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let i = 0; i < e; i++) s[i] = t(i + 1, i, void 0, o && o[i])
    } else if (le(e)) if (e[Symbol.iterator]) s = Array.from(e, (i, l) = > t(i, l, void 0, o && o[l])
)
    ;
else
    {
        const i = Object.keys(e);
        s = new Array(i.length);
        for (let l = 0, f = i.length; l < f; l++) {
            const a = i[l];
            s[l] = t(e[a], a, l, o && o[l])
        }
    }
else
    s = [];
    return n && (n[r] = s), s
}

const Hn = e =
>
e ? po(e) ? yr(e) || e.proxy : Hn(e.parent) : null, ln = me(Object.create(null), {$: e = > e, $el
:
e =
>
e.vnode.el, $data
:
e =
>
e.data, $props
:
e =
>
e.props, $attrs
:
e =
>
e.attrs, $slots
:
e =
>
e.slots, $refs
:
e =
>
e.refs, $parent
:
e =
>
Hn(e.parent), $root
:
e =
>
Hn(e.root), $emit
:
e =
>
e.emit, $options
:
e =
>
gr(e), $forceUpdate
:
e =
>
e.f || (e.f = () = > hr(e.update)
),
$nextTick:e =
>
e.n || (e.n = Ii.bind(e.proxy)), $watch
:
e =
>
Hi.bind(e)
}),
tl = {
    get({_: e}, t) {
        const {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: f} = e;
        let a;
        if (t[0] !== "$") {
            const v = i[t];
            if (v !== void 0) switch (v) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
            } else {
                if (r !== se && X(r, t)) return i[t] = 1, r[t];
                if (s !== se && X(s, t)) return i[t] = 2, s[t];
                if ((a = e.propsOptions[0]) && X(a, t)) return i[t] = 3, o[t];
                if (n !== se && X(n, t)) return i[t] = 4, n[t];
                Un && (i[t] = 0)
            }
        }
        const g = ln[t];
        let y, x;
        if (g) return t === "$attrs" && Fe(e, "get", t), g(e);
        if ((y = l.__cssModules) && (y = y[t])) return y;
        if (n !== se && X(n, t)) return i[t] = 4, n[t];
        if (x = f.config.globalProperties, X(x, t)) return x[t]
    }, set({_: e}, t, n) {
        const {data: r, setupState: s, ctx: o} = e;
        return s !== se && X(s, t) ? (s[t] = n, !0) : r !== se && X(r, t) ? (r[t] = n, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o}}, i) {
        let l;
        return !!n[i] || e !== se && X(e, i) || t !== se && X(t, i) || (l = o[0]) && X(l, i) || X(r, i) || X(ln, i) || X(s.config.globalProperties, i)
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};
let Un = !0;

function nl(e) {
    const t = gr(e), n = e.proxy, r = e.ctx;
    Un = !1, t.beforeCreate && kr(t.beforeCreate, e, "bc");
    const {data: s, computed: o, methods: i, watch: l, provide: f, inject: a, created: g, beforeMount: y, mounted: x, beforeUpdate: v, updated: R, activated: K, deactivated: L, beforeDestroy: D, beforeUnmount: ae, destroyed: Q, unmounted: G, render: fe, renderTracked: q, renderTriggered: ee, errorCaptured: I, serverPrefetch: k, expose: j, inheritAttrs: ue, components: A, directives: te, filters: p} = t;
    if (a && rl(a, r, null, e.appContext.config.unwrapInjectedRef), i) for (const O in i) {
        const P = i[O];
        z(P) && (r[O] = P.bind(n))
    }
    if (s) {
        const O = s.call(n, n);
        le(O) && (e.data = fr(O))
    }
    if (Un = !0, o) for (const O in o) {
        const P = o[O], W = z(P) ? P.bind(n, n) : z(P.get) ? P.get.bind(n, n) : $e,
            $ = !z(P) && z(P.set) ? P.set.bind(n) : $e, H = mo({get: W, set: $});
        Object.defineProperty(r, O, {enumerable: !0, configurable: !0, get: () = > H.value, set
    :
        Y =
    >
        H.value = Y
    })
    }
    if (l) for (const O in l) ro(l[O], r, n, O);
    if (f) {
        const O = z(f) ? f.call(n) : f;
        Reflect.ownKeys(O).forEach(P = > {Di(P, O[P]
    )
    })
    }
    g && kr(g, e, "c");

    function S(O, P) {
        B(P) ? P.forEach(W = > O(W.bind(n))
    ):
        P && O(P.bind(n))
    }

    if (S(Vi, y), S(pr, x), S(Yi, v), S(Xi, R), S(Wi, K), S(zi, L), S(Gi, I), S(Qi, q), S(Zi, ee), S(to, ae), S(no, G), S(Ji, k), B(j)) if (j.length) {
        const O = e.exposed || (e.exposed = {});
        j.forEach(P = > {Object.defineProperty(O, P, {get: () = > n[P], set
    :
        W =
    >
        n[P] = W
    })
    })
    } else e.exposed || (e.exposed = {});
    fe && e.render === $e && (e.render = fe), ue != null && (e.inheritAttrs = ue), A && (e.components = A), te && (e.directives = te)
}

function rl(e, t, n=$e, r=!1) {
    B(e) && (e = Kn(e));
    for (const s in e) {
        const o = e[s];
        let i;
        le(o) ? "default" in o ? i = En(o.from || s, o.default, !0) : i = En(o.from || s) : i = En(o), _e(i) && r ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () = > i.value, set : l =
    >
        i.value = l
    }):
        t[s] = i
    }
}

function kr(e, t, n) {
    Ne(B(e) ? e.map(r = > r.bind(t.proxy))
:
    e.bind(t.proxy), t, n
)
}

function ro(e, t, n, r) {
    const s = r.includes(".") ? Xs(n, r) : () =
>
    n[r];
    if (pe(e)) {
        const o = t[e];
        z(o) && An(s, o)
    } else if (z(e)) An(s, e.bind(n)); else if (le(e)) if (B(e)) e.forEach(o = > ro(o, t, n, r)
)
    ;
else
    {
        const o = z(e.handler) ? e.handler.bind(n) : t[e.handler];
        z(o) && An(s, o, e)
    }
}

function gr(e) {
    const t = e.type, {mixins: n, extends: r} = t, {mixins: s, optionsCache: o, config: {optionMergeStrategies: i}} = e.appContext,
        l = o.get(t);
    let f;
    return l ? f = l : !s.length && !n && !r ? f = t : (f = {}, s.length && s.forEach(a = > cn(f, a, i, !0)), cn(f, t, i)
),
    le(t) && o.set(t, f), f
}

function cn(e, t, n, r=!1) {
    const {mixins: s, extends: o} = t;
    o && cn(e, o, n, !0), s && s.forEach(i = > cn(e, i, n, !0)
)
    ;
    for (const i in t) if (!(r && i === "expose")) {
        const l = sl[i] || n && n[i];
        e[i] = l ? l(e[i], t[i]) : t[i]
    }
    return e
}

const sl = {
    data: Br,
    props: dt,
    emits: dt,
    methods: dt,
    computed: dt,
    beforeCreate: ye,
    created: ye,
    beforeMount: ye,
    mounted: ye,
    beforeUpdate: ye,
    updated: ye,
    beforeDestroy: ye,
    beforeUnmount: ye,
    destroyed: ye,
    unmounted: ye,
    activated: ye,
    deactivated: ye,
    errorCaptured: ye,
    serverPrefetch: ye,
    components: dt,
    directives: dt,
    watch: il,
    provide: Br,
    inject: ol
};

function Br(e, t) {
    return t ? e ? function () {
        return me(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t)
    } : t : e
}

function ol(e, t) {
    return dt(Kn(e), Kn(t))
}

function Kn(e) {
    if (B(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function ye(e, t) {
    return e ? [...new Set([].concat(e, t))
]:
    t
}

function dt(e, t) {
    return e ? me(me(Object.create(null), e), t) : t
}

function il(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = me(Object.create(null), e);
    for (const r in t) n[r] = ye(e[r], t[r]);
    return n
}

function ll(e, t, n, r=!1) {
    const s = {}, o = {};
    rn(o, yn, 1), e.propsDefaults = Object.create(null), so(e, t, s, o);
    for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
    n ? e.props = r ? s : xi(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function cl(e, t, n, r) {
    const {props: s, attrs: o, vnode: {patchFlag: i}} = e, l = Z(s), [f] = e.propsOptions;
    let a = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const g = e.vnode.dynamicProps;
            for (let y = 0; y < g.length; y++) {
                let x = g[y];
                if (mn(e.emitsOptions, x)) continue;
                const v = t[x];
                if (f) if (X(o, x)) v !== o[x] && (o[x] = v, a = !0); else {
                    const R = At(x);
                    s[R] = Wn(f, l, R, v, e, !1)
                } else v !== o[x] && (o[x] = v, a = !0)
            }
        }
    } else {
        so(e, t, s, o) && (a = !0);
        let g;
        for (const y in l) (!t || !X(t, y) && ((g = Ot(y)) === y || !X(t, g))) && (f ? n && (n[y] !== void 0 || n[g] !== void 0) && (s[y] = Wn(f, l, y, void 0, e, !0)) : delete s[y]);
        if (o !== l) for (const y in o) (!t || !X(t, y) && !0) && (delete o[y], a = !0)
    }
    a && Xe(e, "set", "$attrs")
}

function so(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let i = !1, l;
    if (t) for (let f in t) {
        if (en(f)) continue;
        const a = t[f];
        let g;
        s && X(s, g = At(f)) ? !o || !o.includes(g) ? n[g] = a : (l || (l = {}))[g] = a : mn(e.emitsOptions, f) || (!(f in r) || a !== r[f]) && (r[f] = a, i = !0)
    }
    if (o) {
        const f = Z(n), a = l || se;
        for (let g = 0; g < o.length; g++) {
            const y = o[g];
            n[y] = Wn(s, f, y, a[y], e, !X(a, y))
        }
    }
    return i
}

function Wn(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const l = X(i, "default");
        if (l && r === void 0) {
            const f = i.default;
            if (i.type !== Function && z(f)) {
                const {propsDefaults: a} = s;
                n in a ? r = a[n] : (It(s), r = a[n] = f.call(null, t), bt())
            } else r = f
        }
        i[0] && (o && !l ? r = !1 : i[1] && (r === "" || r === Ot(n)) && (r = !0))
    }
    return r
}

function oo(e, t, n=!1) {
    const r = t.propsCache, s = r.get(e);
    if (s) return s;
    const o = e.props, i = {}, l = [];
    let f = !1;
    if (!z(e)) {
        const g = y =
    >
        {
            f = !0;
            const [x, v] = oo(y, t, !0);
            me(i, x), v && l.push(...v
        )
        }
        ;!n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g)
    }
    if (!o && !f) return le(e) && r.set(e, Tt), Tt;
    if (B(o)) for (let g = 0; g < o.length; g++) {
        const y = At(o[g]);
        Dr(y) && (i[y] = se)
    } else if (o) for (const g in o) {
        const y = At(g);
        if (Dr(y)) {
            const x = o[g], v = i[y] = B(x) || z(x) ? {type: x} : x;
            if (v) {
                const R = Kr(Boolean, v.type), K = Kr(String, v.type);
                v[0] = R > -1, v[1] = K < 0 || R < K, (R > -1 || X(v, "default")) && l.push(y)
            }
        }
    }
    const a = [i, l];
    return le(e) && r.set(e, a), a
}

function Dr(e) {
    return e[0] !== "$"
}

function Hr(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : e === null ? "null" : ""
}

function Ur(e, t) {
    return Hr(e) === Hr(t)
}

function Kr(e, t) {
    return B(t) ? t.findIndex(n = > Ur(n, e)
):
    z(t) && Ur(t, e) ? 0 : -1
}

const io = e =
>
e[0] === "_" || e === "$stable", mr = e =
>
B(e) ? e.map(Ke) : [Ke(e)], fl = (e, t, n) =
>
{
    if (t._n) return t;
    const r = $t((...s) =
>
    mr(t(...s)
),
    n
)
    ;
    return r._c = !1, r
}
,
lo = (e, t, n) =
>
{
    const r = e._ctx;
    for (const s in e) {
        if (io(s)) continue;
        const o = e[s];
        if (z(o)) t[s] = fl(s, o, r); else if (o != null) {
            const i = mr(o);
            t[s] = () =
        >
            i
        }
    }
}
,
co = (e, t) =
>
{
    const n = mr(t);
    e.slots.default = () =
>
    n
}
,
ul = (e, t) =
>
{
    if (e.vnode.shapeFlag & 32) {
        const n = t._;
        n ? (e.slots = Z(t), rn(t, "_", n)) : lo(t, e.slots = {})
    } else e.slots = {}, t && co(e, t);
    rn(e.slots, yn, 1)
}
,
al = (e, t, n) =
>
{
    const {vnode: r, slots: s} = e;
    let o = !0, i = se;
    if (r.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? o = !1 : (me(s, t), !n && l === 1 && delete s._) : (o = !t.$stable, lo(t, s)), i = t
    } else t && (co(e, t), i = {default: 1});
    if (o) for (const l in s) !io(l) && !(l in i) && delete s[l]
}
;

function fo() {
    return {
        app: null,
        config: {
            isNativeTag: Ho,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let dl = 0;

function hl(e, t) {
    return function (r, s=null) {
        z(r) || (r = Object.assign({}, r)), s != null && !le(s) && (s = null);
        const o = fo(), i = new Set;
        let l = !1;
        const f = o.app = {
            _uid: dl++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Pl,
            get config() {
                return o.config
            },
            set config(a) {
            },
            use(a,
            .
            .
            .g
    )
        {
            return i.has(a) || (a && z(a.install) ? (i.add(a), a.install(f,...g))
        :
            z(a) && (i.add(a), a(f,...g)
        )),
            f
        }
    ,
        mixin(a)
        {
            return o.mixins.includes(a) || o.mixins.push(a), f
        }
    ,
        component(a, g)
        {
            return g ? (o.components[a] = g, f) : o.components[a]
        }
    ,
        directive(a, g)
        {
            return g ? (o.directives[a] = g, f) : o.directives[a]
        }
    ,
        mount(a, g, y)
        {
            if (!l) {
                const x = xe(r, s);
                return x.appContext = o, g && t ? t(x, a) : e(x, a, y), l = !0, f._container = a, a.__vue_app__ = f, yr(x.component) || x.component.proxy
            }
        }
    ,
        unmount()
        {
            l && (e(null, f._container), delete f._container.__vue_app__)
        }
    ,
        provide(a, g)
        {
            return o.provides[a] = g, f
        }
    }
        ;
        return f
    }
}

function zn(e, t, n, r, s=!1) {
    if (B(e)) {
        e.forEach((x, v) = > zn(x, t && (B(t) ? t[v] : t), n, r, s)
    )
        ;
        return
    }
    if (tn(r) && !s) return;
    const o = r.shapeFlag & 4 ? yr(r.component) || r.component.proxy : r.el, i = s ? null : o, {i: l, r: f} = e,
        a = t && t.r, g = l.refs === se ? l.refs = {} : l.refs, y = l.setupState;
    if (a != null && a !== f && (pe(a) ? (g[a] = null, X(y, a) && (y[a] = null)) : _e(a) && (a.value = null)), z(f)) ot(f, l, 12, [i, g]); else {
        const x = pe(f), v = _e(f);
        if (x || v) {
            const R = () =
        >
            {
                if (e.f) {
                    const K = x ? g[f] : f.value;
                    s ? B(K) && tr(K, o) : B(K) ? K.includes(o) || K.push(o) : x ? (g[f] = [o], X(y, f) && (y[f] = g[f])) : (f.value = [o], e.k && (g[e.k] = f.value))
                } else x ? (g[f] = i, X(y, f) && (y[f] = i)) : v && (f.value = i, e.k && (g[e.k] = i))
            }
            ;i ? (R.id = -1, we(R, n)) : R()
        }
    }
}

const we = Bi;

function pl(e) {
    return gl(e)
}

function gl(e, t) {
    const n = Vo();
    n.__VUE__ = !0;
    const {insert: r, remove: s, patchProp: o, createElement: i, createText: l, createComment: f, setText: a, setElementText: g, parentNode: y, nextSibling: x, setScopeId: v = $e, cloneNode: R, insertStaticContent: K} = e,
        L = (c, u, h, b = null, m = null, C = null, E = !1, T = null, w = !!u.dynamicChildren) =
>
    {
        if (c === u) return;
        c && !pt(c, u) && (b = je(c), he(c, m, C, !0), c = null), u.patchFlag === -2 && (w = !1, u.dynamicChildren = null);
        const {type: _, ref: F, shapeFlag: M} = u;
        switch (_) {
            case br:
                D(c, u, h, b);
                break;
            case ke:
                ae(c, u, h, b);
                break;
            case Fn:
                c == null && Q(u, h, b, E);
                break;
            case Ie:
                te(c, u, h, b, m, C, E, T, w);
                break;
            default:
                M & 1 ? q(c, u, h, b, m, C, E, T, w) : M & 6 ? p(c, u, h, b, m, C, E, T, w) : (M & 64 || M & 128) && _.process(c, u, h, b, m, C, E, T, w, Ae)
        }
        F != null && m && zn(F, c && c.ref, C, u || c, !u)
    }
,
    D = (c, u, h, b) =
>
    {
        if (c == null) r(u.el = l(u.children), h, b); else {
            const m = u.el = c.el;
            u.children !== c.children && a(m, u.children)
        }
    }
,
    ae = (c, u, h, b) =
>
    {
        c == null ? r(u.el = f(u.children || ""), h, b) : u.el = c.el
    }
,
    Q = (c, u, h, b) =
>
    {
        [c.el, c.anchor] = K(c.children, u, h, b, c.el, c.anchor)
    }
,
    G = ({el: c, anchor: u}, h, b) =
>
    {
        let m;
        for (; c && c !== u;) m = x(c), r(c, h, b), c = m;
        r(u, h, b)
    }
,
    fe = ({el: c, anchor: u}) =
>
    {
        let h;
        for (; c && c !== u;) h = x(c), s(c), c = h;
        s(u)
    }
,
    q = (c, u, h, b, m, C, E, T, w) =
>
    {
        E = E || u.type === "svg", c == null ? ee(u, h, b, m, C, E, T, w) : j(c, u, m, C, E, T, w)
    }
,
    ee = (c, u, h, b, m, C, E, T) =
>
    {
        let w, _;
        const {type: F, props: M, shapeFlag: N, transition: U, patchFlag: J, dirs: ne} = c;
        if (c.el && R !== void 0 && J === -1) w = c.el = R(c.el); else {
            if (w = c.el = i(c.type, C, M && M.is, M), N & 8 ? g(w, c.children) : N & 16 && k(c.children, w, null, b, m, C && F !== "foreignObject", E, T), ne && ct(c, null, b, "created"), M) {
                for (const oe in M) oe !== "value" && !en(oe) && o(w, oe, null, M[oe], C, c.children, b, m, V);
                "value" in M && o(w, "value", null, M.value), (_ = M.onVnodeBeforeMount) && He(_, b, c)
            }
            I(w, c, c.scopeId, E, b)
        }
        ne && ct(c, null, b, "beforeMount");
        const re = (!m || m && !m.pendingBranch) && U && !U.persisted;
        re && U.beforeEnter(w), r(w, u, h), ((_ = M && M.onVnodeMounted) || re || ne) && we(() = > {_ && He(_, b, c), re && U.enter(w), ne && ct(c, null, b, "mounted")
    },
        m
    )
    }
,
    I = (c, u, h, b, m) =
>
    {
        if (h && v(c, h), b) for (let C = 0; C < b.length; C++) v(c, b[C]);
        if (m) {
            let C = m.subTree;
            if (u === C) {
                const E = m.vnode;
                I(c, E, E.scopeId, E.slotScopeIds, m.parent)
            }
        }
    }
,
    k = (c, u, h, b, m, C, E, T, w = 0) =
>
    {
        for (let _ = w; _ < c.length; _++) {
            const F = c[_] = T ? rt(c[_]) : Ke(c[_]);
            L(null, F, u, h, b, m, C, E, T)
        }
    }
,
    j = (c, u, h, b, m, C, E) =
>
    {
        const T = u.el = c.el;
        let {patchFlag: w, dynamicChildren: _, dirs: F} = u;
        w |= c.patchFlag & 16;
        const M = c.props || se, N = u.props || se;
        let U;
        h && ft(h, !1), (U = N.onVnodeBeforeUpdate) && He(U, h, u, c), F && ct(u, c, h, "beforeUpdate"), h && ft(h, !0);
        const J = m && u.type !== "foreignObject";
        if (_ ? ue(c.dynamicChildren, _, T, h, b, J, C) : E || W(c, u, T, null, h, b, J, C, !1), w > 0) {
            if (w & 16) A(T, u, M, N, h, b, m); else if (w & 2 && M.class !== N.class && o(T, "class", null, N.class, m), w & 4 && o(T, "style", M.style, N.style, m), w & 8) {
                const ne = u.dynamicProps;
                for (let re = 0; re < ne.length; re++) {
                    const oe = ne[re], Se = M[oe], _t = N[oe];
                    (_t !== Se || oe === "value") && o(T, oe, Se, _t, m, c.children, h, b, V)
                }
            }
            w & 1 && c.children !== u.children && g(T, u.children)
        } else !E && _ == null && A(T, u, M, N, h, b, m);
        ((U = N.onVnodeUpdated) || F) && we(() = > {U && He(U, h, u, c), F && ct(u, c, h, "updated")
    },
        b
    )
    }
,
    ue = (c, u, h, b, m, C, E) =
>
    {
        for (let T = 0; T < u.length; T++) {
            const w = c[T], _ = u[T], F = w.el && (w.type === Ie || !pt(w, _) || w.shapeFlag & 70) ? y(w.el) : h;
            L(w, _, F, null, b, m, C, E, !0)
        }
    }
,
    A = (c, u, h, b, m, C, E) =
>
    {
        if (h !== b) {
            for (const T in b) {
                if (en(T)) continue;
                const w = b[T], _ = h[T];
                w !== _ && T !== "value" && o(c, T, _, w, E, u.children, m, C, V)
            }
            if (h !== se) for (const T in h) !en(T) && !(T in b) && o(c, T, h[T], null, E, u.children, m, C, V);
            "value" in b && o(c, "value", h.value, b.value)
        }
    }
,
    te = (c, u, h, b, m, C, E, T, w) =
>
    {
        const _ = u.el = c ? c.el : l(""), F = u.anchor = c ? c.anchor : l("");
        let {patchFlag: M, dynamicChildren: N, slotScopeIds: U} = u;
        U && (T = T ? T.concat(U) : U), c == null ? (r(_, h, b), r(F, h, b), k(u.children, h, F, m, C, E, T, w)) : M > 0 && M & 64 && N && c.dynamicChildren ? (ue(c.dynamicChildren, N, h, m, C, E, T), (u.key != null || m && u === m.subTree) && uo(c, u, !0)) : W(c, u, h, F, m, C, E, T, w)
    }
,
    p = (c, u, h, b, m, C, E, T, w) =
>
    {
        u.slotScopeIds = T, c == null ? u.shapeFlag & 512 ? m.ctx.activate(u, h, b, E, w) : d(u, h, b, m, C, E, w) : S(c, u, w)
    }
,
    d = (c, u, h, b, m, C, E) =
>
    {
        const T = c.component = wl(c, b, m);
        if (bn(c) && (T.ctx.renderer = Ae), Al(T), T.asyncDep) {
            if (m && m.registerDep(T, O), !c.el) {
                const w = T.subTree = xe(ke);
                ae(null, w, u, h)
            }
            return
        }
        O(T, c, u, h, m, C, E)
    }
,
    S = (c, u, h) =
>
    {
        const b = u.component = c.component;
        if (Li(c, u, h)) if (b.asyncDep && !b.asyncResolved) {
            P(b, u, h);
            return
        } else b.next = u, Oi(b.update), b.update(); else u.el = c.el, b.vnode = u
    }
,
    O = (c, u, h, b, m, C, E) =
>
    {
        const T = () =
    >
        {
            if (c.isMounted) {
                let {next: F, bu: M, u: N, parent: U, vnode: J} = c, ne = F, re;
                ft(c, !1), F ? (F.el = J.el, P(c, F, E)) : F = J, M && Cn(M), (re = F.props && F.props.onVnodeBeforeUpdate) && He(re, U, F, J), ft(c, !0);
                const oe = wn(c), Se = c.subTree;
                c.subTree = oe, L(Se, oe, y(Se.el), je(Se), c, m, C), F.el = oe.el, ne === null && $i(c, oe.el), N && we(N, m), (re = F.props && F.props.onVnodeUpdated) && we(() = > He(re, U, F, J), m
            )
            } else {
                let F;
                const {el: M, props: N} = u, {bm: U, m: J, parent: ne} = c, re = tn(u);
                if (ft(c, !1), U && Cn(U), !re && (F = N && N.onVnodeBeforeMount) && He(F, ne, u), ft(c, !0), M && Qe) {
                    const oe = () =
                >
                    {
                        c.subTree = wn(c), Qe(M, c.subTree, c, m, null)
                    }
                    ;re ? u.type.__asyncLoader().then(() = > !c.isUnmounted && oe()
                ):
                    oe()
                } else {
                    const oe = c.subTree = wn(c);
                    L(null, oe, h, b, c, m, C), u.el = oe.el
                }
                if (J && we(J, m), !re && (F = N && N.onVnodeMounted)) {
                    const oe = u;
                    we(() = > He(F, ne, oe), m
                )
                }
                (u.shapeFlag & 256 || ne && tn(ne.vnode) && ne.vnode.shapeFlag & 256) && c.a && we(c.a, m), c.isMounted = !0, u = h = b = null
            }
        }
    ,
        w = c.effect = new or(T, () = > hr(_), c.scope
    ),
        _ = c.update = () =
    >
        w.run();
        _.id = c.uid, ft(c, !0), _()
    }
,
    P = (c, u, h) =
>
    {
        u.component = c;
        const b = c.vnode.props;
        c.vnode = u, c.next = null, cl(c, u.props, b, h), al(c, u.children, h), Nt(), Sr(), Pt()
    }
,
    W = (c, u, h, b, m, C, E, T, w = !1) =
>
    {
        const _ = c && c.children, F = c ? c.shapeFlag : 0, M = u.children, {patchFlag: N, shapeFlag: U} = u;
        if (N > 0) {
            if (N & 128) {
                H(_, M, h, b, m, C, E, T, w);
                return
            } else if (N & 256) {
                $(_, M, h, b, m, C, E, T, w);
                return
            }
        }
        U & 8 ? (F & 16 && V(_, m, C), M !== _ && g(h, M)) : F & 16 ? U & 16 ? H(_, M, h, b, m, C, E, T, w) : V(_, m, C, !0) : (F & 8 && g(h, ""), U & 16 && k(M, h, b, m, C, E, T, w))
    }
,
    $ = (c, u, h, b, m, C, E, T, w) =
>
    {
        c = c || Tt, u = u || Tt;
        const _ = c.length, F = u.length, M = Math.min(_, F);
        let N;
        for (N = 0; N < M; N++) {
            const U = u[N] = w ? rt(u[N]) : Ke(u[N]);
            L(c[N], U, h, null, m, C, E, T, w)
        }
        _ > F ? V(c, m, C, !0, !1, M) : k(u, h, b, m, C, E, T, w, M)
    }
,
    H = (c, u, h, b, m, C, E, T, w) =
>
    {
        let _ = 0;
        const F = u.length;
        let M = c.length - 1, N = F - 1;
        for (; _ <= M && _ <= N;) {
            const U = c[_], J = u[_] = w ? rt(u[_]) : Ke(u[_]);
            if (pt(U, J)) L(U, J, h, null, m, C, E, T, w); else break;
            _++
        }
        for (; _ <= M && _ <= N;) {
            const U = c[M], J = u[N] = w ? rt(u[N]) : Ke(u[N]);
            if (pt(U, J)) L(U, J, h, null, m, C, E, T, w); else break;
            M--, N--
        }
        if (_ > M) {
            if (_ <= N) {
                const U = N + 1, J = U < F ? u[U].el : b;
                for (; _ <= N;) L(null, u[_] = w ? rt(u[_]) : Ke(u[_]), h, J, m, C, E, T, w), _++
            }
        } else if (_ > N) for (; _ <= M;) he(c[_], m, C, !0), _++; else {
            const U = _, J = _, ne = new Map;
            for (_ = J; _ <= N; _++) {
                const Me = u[_] = w ? rt(u[_]) : Ke(u[_]);
                Me.key != null && ne.set(Me.key, _)
            }
            let re, oe = 0;
            const Se = N - J + 1;
            let _t = !1, Cr = 0;
            const jt = new Array(Se);
            for (_ = 0; _ < Se; _++) jt[_] = 0;
            for (_ = U; _ <= M; _++) {
                const Me = c[_];
                if (oe >= Se) {
                    he(Me, m, C, !0);
                    continue
                }
                let De;
                if (Me.key != null) De = ne.get(Me.key); else for (re = J; re <= N; re++) if (jt[re - J] === 0 && pt(Me, u[re])) {
                    De = re;
                    break
                }
                De === void 0 ? he(Me, m, C, !0) : (jt[De - J] = _ + 1, De >= Cr ? Cr = De : _t = !0, L(Me, u[De], h, null, m, C, E, T, w), oe++)
            }
            const wr = _t ? ml(jt) : Tt;
            for (re = wr.length - 1, _ = Se - 1; _ >= 0; _--) {
                const Me = J + _, De = u[Me], Er = Me + 1 < F ? u[Me + 1].el : b;
                jt[_] === 0 ? L(null, De, h, Er, m, C, E, T, w) : _t && (re < 0 || _ !== wr[re] ? Y(De, h, Er, 2) : re--)
            }
        }
    }
,
    Y = (c, u, h, b, m = null) =
>
    {
        const {el: C, type: E, transition: T, children: w, shapeFlag: _} = c;
        if (_ & 6) {
            Y(c.component.subTree, u, h, b);
            return
        }
        if (_ & 128) {
            c.suspense.move(u, h, b);
            return
        }
        if (_ & 64) {
            E.move(c, u, h, Ae);
            return
        }
        if (E === Ie) {
            r(C, u, h);
            for (let M = 0; M < w.length; M++) Y(w[M], u, h, b);
            r(c.anchor, u, h);
            return
        }
        if (E === Fn) {
            G(c, u, h);
            return
        }
        if (b !== 2 && _ & 1 && T) if (b === 0) T.beforeEnter(C), r(C, u, h), we(() = > T.enter(C), m
    )
        ;
    else
        {
            const {leave: M, delayLeave: N, afterLeave: U} = T, J = () =
        >
            r(C, u, h), ne = () =
        >
            {
                M(C, () = > {J(), U && U()
            })
            }
            ;N ? N(C, J, ne) : ne()
        }
    else
        r(C, u, h)
    }
,
    he = (c, u, h, b = !1, m = !1) =
>
    {
        const {type: C, props: E, ref: T, children: w, dynamicChildren: _, shapeFlag: F, patchFlag: M, dirs: N} = c;
        if (T != null && zn(T, null, h, c, !0), F & 256) {
            u.ctx.deactivate(c);
            return
        }
        const U = F & 1 && N, J = !tn(c);
        let ne;
        if (J && (ne = E && E.onVnodeBeforeUnmount) && He(ne, u, c), F & 6) Te(c.component, h, b); else {
            if (F & 128) {
                c.suspense.unmount(h, b);
                return
            }
            U && ct(c, null, u, "beforeUnmount"), F & 64 ? c.type.remove(c, u, h, m, Ae, b) : _ && (C !== Ie || M > 0 && M & 64) ? V(_, u, h, !1, !0) : (C === Ie && M & 384 || !m && F & 16) && V(w, u, h), b && ce(c)
        }
        (J && (ne = E && E.onVnodeUnmounted) || U) && we(() = > {ne && He(ne, u, c), U && ct(c, null, u, "unmounted")
    },
        h
    )
    }
,
    ce = c =
>
    {
        const {type: u, el: h, anchor: b, transition: m} = c;
        if (u === Ie) {
            Pe(h, b);
            return
        }
        if (u === Fn) {
            fe(c);
            return
        }
        const C = () =
    >
        {
            s(h), m && !m.persisted && m.afterLeave && m.afterLeave()
        }
        ;
        if (c.shapeFlag & 1 && m && !m.persisted) {
            const {leave: E, delayLeave: T} = m, w = () =
        >
            E(h, C);
            T ? T(c.el, C, w) : w()
        } else C()
    }
,
    Pe = (c, u) =
>
    {
        let h;
        for (; c !== u;) h = x(c), s(c), c = h;
        s(u)
    }
,
    Te = (c, u, h) =
>
    {
        const {bum: b, scope: m, update: C, subTree: E, um: T} = c;
        b && Cn(b), m.stop(), C && (C.active = !1, he(E, c, u, h)), T && we(T, u), we(() = > {c.isUnmounted = !0}, u
    ),
        u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve())
    }
,
    V = (c, u, h, b = !1, m = !1, C = 0) =
>
    {
        for (let E = C; E < c.length; E++) he(c[E], u, h, b, m)
    }
,
    je = c =
>
    c.shapeFlag & 6 ? je(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : x(c.anchor || c.el), Be = (c, u, h) =
>
    {
        c == null ? u._vnode && he(u._vnode, null, null, !0) : L(u._vnode || null, c, u, null, null, null, h), Sr(), Ws(), u._vnode = c
    }
,
    Ae = {p: L, um: he, m: Y, r: ce, mt: d, mc: k, pc: W, pbc: ue, n: je, o: e};
    let Ze, Qe;
    return t && ([Ze, Qe] = t(Ae)), {render: Be, hydrate: Ze, createApp: hl(Be, Ze)}
}

function ft({effect: e, update: t}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function uo(e, t, n=!1) {
    const r = e.children, s = t.children;
    if (B(r) && B(s)) for (let o = 0; o < r.length; o++) {
        const i = r[o];
        let l = s[o];
        l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[o] = rt(s[o]), l.el = i.el), n || uo(i, l))
    }
}

function ml(e) {
    const t = e.slice(), n = [0];
    let r, s, o, i, l;
    const f = e.length;
    for (r = 0; r < f; r++) {
        const a = e[r];
        if (a !== 0) {
            if (s = n[n.length - 1], e[s] < a) {
                t[r] = s, n.push(r);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) l = o + i >> 1, e[n[l]] < a ? o = l + 1 : i = l;
            a < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

const bl = e =
>
e.__isTeleport, Ie = Symbol(void 0), br = Symbol(void 0), ke = Symbol(void 0), Fn = Symbol(void 0), Bt = [];
let Le = null;

function Ee(e=!1) {
    Bt.push(Le = e ? null : [])
}

function _l() {
    Bt.pop(), Le = Bt[Bt.length - 1] || null
}

let zt = 1;

function Wr(e) {
    zt += e
}

function ao(e) {
    return e.dynamicChildren = zt > 0 ? Le || Tt : null, _l(), zt > 0 && Le && Le.push(e), e
}

function nt(e, t, n, r, s, o) {
    return ao(de(e, t, n, r, s, o, !0))
}

function yt(e, t, n, r, s) {
    return ao(xe(e, t, n, r, s, !0))
}

function qn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function pt(e, t) {
    return e.type === t.type && e.key === t.key
}

const yn = "__vInternal", ho = ({key: e}) =
>
e != null ? e : null, nn = ({ref: e, ref_key: t, ref_for: n}) =
>
e != null ? pe(e) || _e(e) || z(e) ? {i: ze, r: e, k: t, f: !!n} : e : null;

function de(e, t=null, n=null, r=0, s=null, o=e === Ie ? 0 : 1, i=!1, l=!1) {
    const f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && ho(t),
        ref: t && nn(t),
        scopeId: Vs,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null
    };
    return l ? (_r(f, n), o & 128 && e.normalize(f)) : n && (f.shapeFlag |= pe(n) ? 8 : 16), zt > 0 && !i && Le && (f.patchFlag > 0 || o & 6) && f.patchFlag !== 32 && Le.push(f), f
}

const xe = yl;

function yl(e, t=null, n=null, r=0, s=null, o=!1) {
    if ((!e || e === el) && (e = ke), qn(e)) {
        const l = lt(e, t, !0);
        return n && _r(l, n), zt > 0 && !o && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag |= -2, l
    }
    if (Ol(e) && (e = e.__vccOpts), t) {
        t = vl(t);
        let {class: l, style: f} = t;
        l && !pe(l) && (t.class = Gn(l)), le(f) && (Ls(f) && !B(f) && (f = me({}, f)), t.style = un(f))
    }
    const i = pe(e) ? 1 : ki(e) ? 128 : bl(e) ? 64 : le(e) ? 4 : z(e) ? 2 : 0;
    return de(e, t, n, r, s, i, o, !0)
}

function vl(e) {
    return e ? Ls(e) || yn in e ? me({}, e) : e : null
}

function lt(e, t, n=!1) {
    const {props: r, ref: s, patchFlag: o, children: i} = e, l = t ? xl(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: l,
        key: l && ho(l),
        ref: t && t.ref ? n && s ? B(s) ? s.concat(nn(t)) : [s, nn(t)] : nn(t) : s,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ie ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && lt(e.ssContent),
        ssFallback: e.ssFallback && lt(e.ssFallback),
        el: e.el,
        anchor: e.anchor
    }
}

function Vn(e=" ", t=0) {
    return xe(br, null, e, t)
}

function kt(e="", t=!1) {
    return t ? (Ee(), yt(ke, null, e)) : xe(ke, null, e)
}

function Ke(e) {
    return e == null || typeof e == "boolean" ? xe(ke) : B(e) ? xe(Ie, null, e.slice()) : typeof e == "object" ? rt(e) : xe(br, null, String(e))
}

function rt(e) {
    return e.el === null || e.memo ? e : lt(e)
}

function _r(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null) t = null; else if (B(t)) n = 16; else if (typeof t == "object") if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), _r(e, s()), s._c && (s._d = !0));
        return
    } else {
        n = 32;
        const s = t._;
        !s && !(yn in t) ? t._ctx = ze : s === 3 && ze && (ze.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else z(t) ? (t = {default: t, _ctx: ze}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Vn(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function xl(

...
e
)
{
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r) if (s === "class") t.class !== r.class && (t.class = Gn([t.class, r.class])); else if (s === "style") t.style = un([t.style, r.style]); else if (an(s)) {
            const o = t[s], i = r[s];
            i && o !== i && !(B(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function He(e, t, n, r=null) {
    Ne(e, t, 7, [n, r])
}

const Tl = fo();
let Cl = 0;

function wl(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || Tl, o = {
        uid: Cl++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new Yo(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: oo(r, s),
        emitsOptions: qs(r, s),
        emit: null,
        emitted: null,
        propsDefaults: se,
        inheritAttrs: r.inheritAttrs,
        ctx: se,
        data: se,
        props: se,
        attrs: se,
        slots: se,
        refs: se,
        setupState: se,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {_: o}, o.root = t ? t.root : o, o.emit = ji.bind(null, o), e.ce && e.ce(o), o
}

let ge = null;
const El = () =
>
ge || ze, It = e =
>
{
    ge = e, e.scope.on()
}
,
bt = () =
>
{
    ge && ge.scope.off(), ge = null
}
;

function po(e) {
    return e.vnode.shapeFlag & 4
}

let qt = !1;

function Al(e, t=!1) {
    qt = t;
    const {props: n, children: r} = e.vnode, s = po(e);
    ll(e, n, s, t), ul(e, r);
    const o = s ? Ml(e, t) : void 0;
    return qt = !1, o
}

function Ml(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = $s(new Proxy(e.ctx, tl));
    const {setup: r} = n;
    if (r) {
        const s = e.setupContext = r.length > 1 ? Fl(e) : null;
        It(e), Nt();
        const o = ot(r, e, 0, [e.props, s]);
        if (Pt(), bt(), vs(o)) {
            if (o.then(bt, bt), t) return o.then(i = > {zr(e, i, t)}
        ).
            catch(i = > {gn(i, e,0
        )
        })
            ;e.asyncDep = o
        } else zr(e, o, t)
    } else go(e, t)
}

function zr(e, t, n) {
    z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Ds(t)), go(e, n)
}

let qr;

function go(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && qr && !r.render) {
            const s = r.template || gr(e).template;
            if (s) {
                const {isCustomElement: o, compilerOptions: i} = e.appContext.config, {delimiters: l, compilerOptions: f} = r,
                    a = me(me({isCustomElement: o, delimiters: l}, i), f);
                r.render = qr(s, a)
            }
        }
        e.render = r.render || $e
    }
    It(e), Nt(), nl(e), Pt(), bt()
}

function Il(e) {
    return new Proxy(e.attrs, {
        get(t, n) {
            return Fe(e, "get", "$attrs"), t[n]
        }
    })
}

function Fl(e) {
    const t = r =
>
    {
        e.exposed = r || {}
    }
    ;let n;
    return {
        get attrs() {
            return n || (n = Il(e))
        }, slots: e.slots, emit: e.emit, expose: t
    }
}

function yr(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Ds($s(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in ln) return ln[n](e)
        }
    }))
}

function Ol(e) {
    return z(e) && "__vccOpts" in e
}

const mo = (e, t) =
>
Ai(e, t, qt);

function Nl(e, t, n) {
    const r = arguments.length;
    return r === 2 ? le(t) && !B(t) ? qn(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && qn(n) && (n = [n]), xe(e, t, n))
}

const Pl = "3.2.39", jl = "http://www.w3.org/2000/svg", gt = typeof document < "u" ? document : null,
    Vr = gt && gt.createElement("template"), Sl = {insert: (e, t, n) = > {t.insertBefore(e, n || null)}, remove
:
e =
>
{
    const t = e.parentNode;
    t && t.removeChild(e)
}
,
createElement:(e, t, n, r) =
>
{
    const s = t ? gt.createElementNS(jl, e) : gt.createElement(e, n ? {is: n} : void 0);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
}
,
createText:e =
>
gt.createTextNode(e), createComment
:
e =
>
gt.createComment(e), setText
:
(e, t) =
>
{
    e.nodeValue = t
}
,
setElementText:(e, t) =
>
{
    e.textContent = t
}
,
parentNode:e =
>
e.parentNode, nextSibling
:
e =
>
e.nextSibling, querySelector
:
e =
>
gt.querySelector(e), setScopeId(e, t)
{
    e.setAttribute(t, "")
}
,
cloneNode(e)
{
    const t = e.cloneNode(!0);
    return "_value" in e && (t._value = e._value), t
}
,
insertStaticContent(e, t, n, r, s, o)
{
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling));) ; else {
        Vr.innerHTML = r ? `<svg>${e}</svg>` : e;
        const l = Vr.content;
        if (r) {
            const f = l.firstChild;
            for (; f.firstChild;) l.appendChild(f.firstChild);
            l.removeChild(f)
        }
        t.insertBefore(l, n)
    }
    return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
}
}
;

function Rl(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t,...r
]:
    [...r
]).
    join(" ")
),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function Ll(e, t, n) {
    const r = e.style, s = pe(n);
    if (n && !s) {
        for (const o in n) Yn(r, o, n[o]);
        if (t && !pe(t)) for (const o in t) n[o] == null && Yn(r, o, "")
    } else {
        const o = r.display;
        s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = o)
    }
}

const Yr = /\s*!important$/;

function Yn(e, t, n) {
    if (B(n)) n.forEach(r = > Yn(e, t, r)
)
    ;
else
    if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        const r = $l(e, t);
        Yr.test(n) ? e.setProperty(Ot(r), n.replace(Yr, ""), "important") : e[r] = n
    }
}

const Xr = ["Webkit", "Moz", "ms"], On = {};

function $l(e, t) {
    const n = On[t];
    if (n) return n;
    let r = At(t);
    if (r !== "filter" && r in e) return On[t] = r;
    r = Cs(r);
    for (let s = 0; s < Xr.length; s++) {
        const o = Xr[s] + r;
        if (o in e) return On[t] = o
    }
    return t
}

const Jr = "http://www.w3.org/1999/xlink";

function kl(e, t, n, r, s) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(Jr, t.slice(6, t.length)) : e.setAttributeNS(Jr, t, n); else {
        const o = Lo(t);
        n == null || o && !bs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n)
    }
}

function Bl(e, t, n, r, s, o, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, s, o), e[t] = n == null ? "" : n;
        return
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
        e._value = n;
        const f = n == null ? "" : n;
        (e.value !== f || e.tagName === "OPTION") && (e.value = f), n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const f = typeof e[t];
        f === "boolean" ? n = bs(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    l && e.removeAttribute(t)
}

const [bo, Dl] = (() = > {let e = Date.now, t = !1;
if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (e = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    t = !!(n && Number(n[1]) <= 53)
}
return [e, t]
})
();
let Xn = 0;
const Hl = Promise.resolve(), Ul = () =
>
{
    Xn = 0
}
,
Kl = () =
>
Xn || (Hl.then(Ul), Xn = bo());

function Wl(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function zl(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

function ql(e, t, n, r, s=null) {
    const o = e._vei || (e._vei = {}), i = o[t];
    if (r && i) i.value = r; else {
        const [l, f] = Vl(t);
        if (r) {
            const a = o[t] = Yl(r, s);
            Wl(e, l, a, f)
        } else i && (zl(e, l, i, f), o[t] = void 0)
    }
}

const Zr = /(?:Once|Passive|Capture)$/;

function Vl(e) {
    let t;
    if (Zr.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Zr);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ot(e.slice(2)), t]
}

function Yl(e, t) {
    const n = r =
>
    {
        const s = r.timeStamp || bo();
        (Dl || s >= n.attached - 1) && Ne(Xl(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e, n.attached = Kl(), n
}

function Xl(e, t) {
    if (B(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () =
    >
        {
            n.call(e), e._stopped = !0
        }
    ,
        t.map(r = > s =
    >
        !s._stopped && r && r(s)
    )
    } else return t
}

const Qr = /^on[a-z]/, Jl = (e, t, n, r, s = !1, o, i, l, f) =
>
{
    t === "class" ? Rl(e, r, s) : t === "style" ? Ll(e, n, r) : an(t) ? er(t) || ql(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zl(e, t, r, s)) ? Bl(e, t, r, o, i, l, f) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), kl(e, t, r, s))
}
;

function Zl(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Qr.test(t) && z(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Qr.test(t) && pe(n) ? !1 : t in e
}

const et = "transition", St = "animation", xt = (e, {slots: t}) =
>
Nl(Js, Ql(e), t);
xt.displayName = "Transition";
const _o = {
    name: String,
    type: String,
    css: {type: Boolean, default: !0},
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
xt.props = me({}, Js.props, _o);
const ut = (e, t = []) =
>
{
    B(e) ? e.forEach(n = > n(...t
)):
    e && e(...t
)
}
,
Gr = e =
>
e ? B(e) ? e.some(t = > t.length > 1
):
e.length > 1
:
!1;

function Ql(e) {
    const t = {};
    for (const A in e) A in _o || (t[A] = e[A]);
    if (e.css === !1) return t;
    const {name: n = "v", type: r, duration: s, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: l = `${n}-enter-to`, appearFromClass: f = o, appearActiveClass: a = i, appearToClass: g = l, leaveFromClass: y = `${n}-leave-from`, leaveActiveClass: x = `${n}-leave-active`, leaveToClass: v = `${n}-leave-to`} = e,
        R = Gl(s), K = R && R[0],
        L = R && R[1], {onBeforeEnter: D, onEnter: ae, onEnterCancelled: Q, onLeave: G, onLeaveCancelled: fe, onBeforeAppear: q = D, onAppear: ee = ae, onAppearCancelled: I = Q} = t,
        k = (A, te, p) =
>
    {
        at(A, te ? g : l), at(A, te ? a : i), p && p()
    }
,
    j = (A, te) =
>
    {
        A._isLeaving = !1, at(A, y), at(A, v), at(A, x), te && te()
    }
,
    ue = A =
>
    (te, p) =
>
    {
        const d = A ? ee : ae, S = () =
    >
        k(te, A, p);
        ut(d, [te, S]), es(() = > {at(te, A ? f : o
    ),
        tt(te, A ? g : l), Gr(d) || ts(te, r, K, S)
    })
    }
    ;
    return me(t, {
        onBeforeEnter(A) {
            ut(D, [A]), tt(A, o), tt(A, i)
        }, onBeforeAppear(A) {
            ut(q, [A]), tt(A, f), tt(A, a)
        }, onEnter: ue(!1), onAppear: ue(!0), onLeave(A, te) {
            A._isLeaving = !0;
            const p = () =
        >
            j(A, te);
            tt(A, y), nc(), tt(A, x), es(() = > {
            !A._isLeaving || (at(A, y), tt(A, v), Gr(G) || ts(A, r, L, p))
        }),
            ut(G, [A, p])
        }, onEnterCancelled(A) {
            k(A, !1), ut(Q, [A])
        }, onAppearCancelled(A) {
            k(A, !0), ut(I, [A])
        }, onLeaveCancelled(A) {
            j(A), ut(fe, [A])
        }
    })
}

function Gl(e) {
    if (e == null) return null;
    if (le(e)) return [Nn(e.enter), Nn(e.leave)];
    {
        const t = Nn(e);
        return [t, t]
    }
}

function Nn(e) {
    return ws(e)
}

function tt(e, t) {
    t.split(/\s+/).forEach(n = > n && e.classList.add(n)
),
    (e._vtc || (e._vtc = new Set)).add(t)
}

function at(e, t) {
    t.split(/\s+/).forEach(r = > r && e.classList.remove(r)
)
    ;const {_vtc: n} = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function es(e) {
    requestAnimationFrame(() = > {requestAnimationFrame(e)}
)
}

let ec = 0;

function ts(e, t, n, r) {
    const s = e._endId = ++ec, o = () =
>
    {
        s === e._endId && r()
    }
    ;
    if (n) return setTimeout(o, n);
    const {type: i, timeout: l, propCount: f} = tc(e, t);
    if (!i) return r();
    const a = i + "end";
    let g = 0;
    const y = () =
>
    {
        e.removeEventListener(a, x), o()
    }
,
    x = v =
>
    {
        v.target === e && ++g >= f && y()
    }
    ;setTimeout(() = > {g < f && y()
},
    l + 1
),
    e.addEventListener(a, x)
}

function tc(e, t) {
    const n = window.getComputedStyle(e), r = R =
>
    (n[R] || "").split(", "), s = r(et + "Delay"), o = r(et + "Duration"), i = ns(s, o), l = r(St + "Delay"), f = r(St + "Duration"), a = ns(l, f);
    let g = null, y = 0, x = 0;
    t === et ? i > 0 && (g = et, y = i, x = o.length) : t === St ? a > 0 && (g = St, y = a, x = f.length) : (y = Math.max(i, a), g = y > 0 ? i > a ? et : St : null, x = g ? g === et ? o.length : f.length : 0);
    const v = g === et && /\b(transform|all)(,|$)/.test(n[et + "Property"]);
    return {type: g, timeout: y, propCount: x, hasTransform: v}
}

function ns(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) = > rs(n) + rs(e[r])
))
}

function rs(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function nc() {
    return document.body.offsetHeight
}

const rc = me({patchProp: Jl}, Sl);
let ss;

function sc() {
    return ss || (ss = pl(rc))
}

const oc = (...e
)
=
>
{
    const t = sc().createApp(...e
),
    {
        mount:n
    }
    = t;
    return t.mount = r =
>
    {
        const s = ic(r);
        if (!s) return;
        const o = t._component;
        !z(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
        const i = n(s, !1, s instanceof SVGElement);
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
    }
,
    t
}
;

function ic(e) {
    return pe(e) ? document.querySelector(e) : e
}

const lc = "https://451444336.github.io/xlegex/assets/1.c2d37b6c.png",
    cc = "https://451444336.github.io/xlegex/assets/10.16f53fe4.png",
    fc = "https://451444336.github.io/xlegex/assets/11.2e4a54bb.png",
    uc = "https://451444336.github.io/xlegex/assets/12.5b74aec2.png",
    ac = "https://451444336.github.io/xlegex/assets/13.b2635009.png",
    dc = "https://451444336.github.io/xlegex/assets/14.26821821.png",
    hc = "https://451444336.github.io/xlegex/assets/15.6d0ea0b4.png",
    pc = "https://451444336.github.io/xlegex/assets/2.03cb3b4c.png",
    gc = "https://451444336.github.io/xlegex/assets/3.aafbb419.png",
    mc = "https://451444336.github.io/xlegex/assets/4.ecb4ccc3.png",
    bc = "https://451444336.github.io/xlegex/assets/5.8815abdb.png",
    _c = "https://451444336.github.io/xlegex/assets/6.78512e60.png",
    yc = "https://451444336.github.io/xlegex/assets/7.cfacdfa6.png",
    vc = "https://451444336.github.io/xlegex/assets/8.58d9ca22.png",
    xc = "https://451444336.github.io/xlegex/assets/9.54ec0e4b.png", Tc = ["src", "alt"], Cc = {key: 0, class: "mask"},
    wc = Gs({
        __name: "card", props: {node: null, isDock: {type: Boolean}}, emits: ["clickCard"], setup(e, {emit: t}) {
            const n = e, r = Object.assign({
                "../assets/tutu2/1.png": lc,
                "../assets/tutu2/10.png": cc,
                "../assets/tutu2/11.png": fc,
                "../assets/tutu2/12.png": uc,
                "../assets/tutu2/13.png": ac,
                "../assets/tutu2/14.png": dc,
                "../assets/tutu2/15.png": hc,
                "../assets/tutu2/2.png": pc,
                "../assets/tutu2/3.png": gc,
                "../assets/tutu2/4.png": mc,
                "../assets/tutu2/5.png": bc,
                "../assets/tutu2/6.png": _c,
                "../assets/tutu2/7.png": yc,
                "../assets/tutu2/8.png": vc,
                "../assets/tutu2/9.png": xc
            }), s = Object.keys(r).reduce((l, f) = > {const a = f.replace("../assets/tutu2/", "").replace(".png", "");
            return l[a] = r[f], l
        },
            {
            }
        ),
            o = mo(() = > n.node.parents.length > 0 ? n.node.parents.some(l = > l.state < 2
        ):
            !1
        )
            ;

            function i() {
                o.value || t("clickCard", n.node)
            }

            return (l, f) =
        >
            (Ee(), nt("div", {
                class: "card",
                style: un(e.isDock ? {} : {
                    position: "absolute",
                    zIndex: e.node.zIndex,
                    top: `${e.node.top}px`,
                    left: `${e.node.left}px`
                }),
                onClick: i
            }, [de("img", {
                src: Ce(s)[e.node.type],
                width: "40",
                height: "40",
                alt: `${e.node.type}`
            }, null, 8, Tc), Ce(o) ? (Ee(), nt("div", Cc)) : kt("", !0)], 4))
        }
    }), Ec = (e, t) =
>
{
    const n = e.__vccOpts || e;
    for (const [r, s]of t) n[r] = s;
    return n
}
,
Pn = Ec(wc, [["__scopeId", "data-v-a0e0f0b7"]]);
var Ac = typeof global == "object" && global && global.Object === Object && global;
const yo = Ac;
var Mc = typeof self == "object" && self && self.Object === Object && self, Ic = yo || Mc || Function("return this")();
const vr = Ic;
var Fc = vr.Symbol;
const Ft = Fc;
var vo = Object.prototype, Oc = vo.hasOwnProperty, Nc = vo.toString, Rt = Ft ? Ft.toStringTag : void 0;

function Pc(e) {
    var t = Oc.call(e, Rt), n = e[Rt];
    try {
        e[Rt] = void 0;
        var r = !0
    } catch {
    }
    var s = Nc.call(e);
    return r && (t ? e[Rt] = n : delete e[Rt]), s
}

var jc = Object.prototype, Sc = jc.toString;

function Rc(e) {
    return Sc.call(e)
}

var Lc = "[object Null]", $c = "[object Undefined]", os = Ft ? Ft.toStringTag : void 0;

function vn(e) {
    return e == null ? e === void 0 ? $c : Lc : os && os in Object(e) ? Pc(e) : Rc(e)
}

function xn(e) {
    return e != null && typeof e == "object"
}

var kc = "[object Symbol]";

function xo(e) {
    return typeof e == "symbol" || xn(e) && vn(e) == kc
}

function To(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r;) s[n] = t(e[n], n, e);
    return s
}

var Bc = Array.isArray;
const xr = Bc;
var Dc = 1 / 0, is = Ft ? Ft.prototype : void 0, ls = is ? is.toString : void 0;

function Co(e) {
    if (typeof e == "string") return e;
    if (xr(e)) return To(e, Co) + "";
    if (xo(e)) return ls ? ls.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -Dc ? "-0" : t
}

var Hc = /\s/;

function Uc(e) {
    for (var t = e.length; t-- && Hc.test(e.charAt(t));) ;
    return t
}

var Kc = /^\s+/;

function Wc(e) {
    return e && e.slice(0, Uc(e) + 1).replace(Kc, "")
}

function fn(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}

var cs = 0 / 0, zc = /^[-+]0x[0-9a-f]+$/i, qc = /^0b[01]+$/i, Vc = /^0o[0-7]+$/i, Yc = parseInt;

function wo(e) {
    if (typeof e == "number") return e;
    if (xo(e)) return cs;
    if (fn(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = fn(t) ? t + "" : t
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = Wc(e);
    var n = qc.test(e);
    return n || Vc.test(e) ? Yc(e.slice(2), n ? 2 : 8) : zc.test(e) ? cs : +e
}

var fs = 1 / 0, Xc = 17976931348623157e292;

function Jn(e) {
    if (!e) return e === 0 ? e : 0;
    if (e = wo(e), e === fs || e === -fs) {
        var t = e < 0 ? -1 : 1;
        return t * Xc
    }
    return e === e ? e : 0
}

function Jc(e) {
    var t = Jn(e), n = t % 1;
    return t === t ? n ? t - n : t : 0
}

var Zc = "[object AsyncFunction]", Qc = "[object Function]", Gc = "[object GeneratorFunction]", ef = "[object Proxy]";

function tf(e) {
    if (!fn(e)) return !1;
    var t = vn(e);
    return t == Qc || t == Gc || t == Zc || t == ef
}

function nf(e, t) {
    var n = -1, r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

var rf = 9007199254740991, sf = /^(?:0|[1-9]\d*)$/;

function Eo(e, t) {
    var n = typeof e;
    return t = t == null ? rf : t, !!t && (n == "number" || n != "symbol" && sf.test(e)) && e > -1 && e % 1 == 0 && e < t
}

function of(e, t) {
    return e === t || e !== e && t !== t
}

var lf = 9007199254740991;

function Ao(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lf
}

function Mo(e) {
    return e != null && Ao(e.length) && !tf(e)
}

function cf(e, t, n) {
    if (!fn(n)) return !1;
    var r = typeof t;
    return (r == "number" ? Mo(n) && Eo(t, n.length) : r == "string" && t in n) ? of(n[t], e) : !1
}

var ff = Object.prototype;

function uf(e) {
    var t = e && e.constructor, n = typeof t == "function" && t.prototype || ff;
    return e === n
}

function af(e, t) {
    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
    return r
}

var df = "[object Arguments]";

function us(e) {
    return xn(e) && vn(e) == df
}

var Io = Object.prototype, hf = Io.hasOwnProperty, pf = Io.propertyIsEnumerable, gf = us(function () {
    return arguments
}()) ? us : function (e) {
    return xn(e) && hf.call(e, "callee") && !pf.call(e, "callee")
};
const mf = gf;

function bf() {
    return !1
}

var Fo = typeof Ve == "object" && Ve && !Ve.nodeType && Ve,
    as = Fo && typeof Ye == "object" && Ye && !Ye.nodeType && Ye, _f = as && as.exports === Fo,
    ds = _f ? vr.Buffer : void 0, yf = ds ? ds.isBuffer : void 0, vf = yf || bf;
const xf = vf;
var Tf = "[object Arguments]", Cf = "[object Array]", wf = "[object Boolean]", Ef = "[object Date]",
    Af = "[object Error]", Mf = "[object Function]", If = "[object Map]", Ff = "[object Number]",
    Of = "[object Object]", Nf = "[object RegExp]", Pf = "[object Set]", jf = "[object String]",
    Sf = "[object WeakMap]", Rf = "[object ArrayBuffer]", Lf = "[object DataView]", $f = "[object Float32Array]",
    kf = "[object Float64Array]", Bf = "[object Int8Array]", Df = "[object Int16Array]", Hf = "[object Int32Array]",
    Uf = "[object Uint8Array]", Kf = "[object Uint8ClampedArray]", Wf = "[object Uint16Array]",
    zf = "[object Uint32Array]", ie = {};
ie[$f] = ie[kf] = ie[Bf] = ie[Df] = ie[Hf] = ie[Uf] = ie[Kf] = ie[Wf] = ie[zf] = !0;
ie[Tf] = ie[Cf] = ie[Rf] = ie[wf] = ie[Lf] = ie[Ef] = ie[Af] = ie[Mf] = ie[If] = ie[Ff] = ie[Of] = ie[Nf] = ie[Pf] = ie[jf] = ie[Sf] = !1;

function qf(e) {
    return xn(e) && Ao(e.length) && !!ie[vn(e)]
}

function Vf(e) {
    return function (t) {
        return e(t)
    }
}

var Oo = typeof Ve == "object" && Ve && !Ve.nodeType && Ve,
    Dt = Oo && typeof Ye == "object" && Ye && !Ye.nodeType && Ye, Yf = Dt && Dt.exports === Oo, jn = Yf && yo.process,
    Xf = function () {
        try {
            var e = Dt && Dt.require && Dt.require("util").types;
            return e || jn && jn.binding && jn.binding("util")
        } catch {
        }
    }();
const hs = Xf;
var ps = hs && hs.isTypedArray, Jf = ps ? Vf(ps) : qf;
const Zf = Jf;
var Qf = Object.prototype, Gf = Qf.hasOwnProperty;

function eu(e, t) {
    var n = xr(e), r = !n && mf(e), s = !n && !r && xf(e), o = !n && !r && !s && Zf(e), i = n || r || s || o,
        l = i ? af(e.length, String) : [], f = l.length;
    for (var a in e) (t || Gf.call(e, a)) && !(i && (a == "length" || s && (a == "offset" || a == "parent") || o && (a == "buffer" || a == "byteLength" || a == "byteOffset") || Eo(a, f))) && l.push(a);
    return l
}

function tu(e, t) {
    return function (n) {
        return e(t(n))
    }
}

var nu = tu(Object.keys, Object);
const ru = nu;
var su = Object.prototype, ou = su.hasOwnProperty;

function iu(e) {
    if (!uf(e)) return ru(e);
    var t = [];
    for (var n in Object(e)) ou.call(e, n) && n != "constructor" && t.push(n);
    return t
}

function lu(e) {
    return Mo(e) ? eu(e) : iu(e)
}

function gs(e) {
    return e == null ? "" : Co(e)
}

var cu = vr.isFinite, fu = Math.min;

function No(e) {
    var t = Math[e];
    return function (n, r) {
        if (n = wo(n), r = r == null ? 0 : fu(Jc(r), 292), r && cu(n)) {
            var s = (gs(n) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
            return s = (gs(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r))
        }
        return t(n)
    }
}

var uu = No("ceil");
const au = uu;
var du = No("floor");
const Qt = du;

function hu(e, t) {
    return To(t, function (n) {
        return e[n]
    })
}

function pu(e) {
    return e == null ? [] : hu(e, lu(e))
}

var gu = Math.floor, mu = Math.random;

function Po(e, t) {
    return e + gu(mu() * (t - e + 1))
}

var bu = parseFloat, _u = Math.min, yu = Math.random;

function Gt(e, t, n) {
    if (n && typeof n != "boolean" && cf(e, t, n) && (t = n = void 0), n === void 0 && (typeof t == "boolean" ? (n = t, t = void 0) : typeof e == "boolean" && (n = e, e = void 0)), e === void 0 && t === void 0 ? (e = 0, t = 1) : (e = Jn(e), t === void 0 ? (t = e, e = 0) : t = Jn(t)), e > t) {
        var r = e;
        e = t, t = r
    }
    if (n || e % 1 || t % 1) {
        var s = yu();
        return _u(e + s * (t - e + bu("1e-" + ((s + "").length - 1))), t)
    }
    return Po(e, t)
}

function jo(e, t) {
    var n = -1, r = e.length, s = r - 1;
    for (t = t === void 0 ? r : t; ++n < t;) {
        var o = Po(n, s), i = e[o];
        e[o] = e[n], e[n] = i
    }
    return e.length = t, e
}

function vu(e) {
    return jo(nf(e))
}

function xu(e) {
    return jo(pu(e))
}

function ms(e) {
    var t = xr(e) ? vu : xu;
    return t(e)
}

const Tu = {cardNum: 4, layerNum: 2, trap: !0, delNode: !1};

function Cu(e) {
    const {container: t, delNode: n, events: r = {}, ...s} = {...Tu, ...e}, o = ve([]), i = ve(!1), l = ve(!1),
        f = ve([]), a = ve(null), g = ve([]), y = new Set;
    let x = [];
    const v = ve([]), R = 40;
    let K = [];

    function L() {
        g.value.forEach(q = > {q.state = q.parents.every(ee = > ee.state > 0
    )
            ? 1 : 0
    })
    }

    function D(q) {
        if (v.value.length === 7) return;
        q.state = 2, o.value.push(q), a.value = q;
        const ee = g.value.findIndex(k = > k.id === q.id
    )
        ;ee > -1 && n && g.value.splice(ee, 1);
        const I = v.value.filter(k = > k.type === q.type
    )
        ;
        if (I.length === 2) {
            const k = v.value.findIndex(j = > j.id === I[1].id
        )
            ;v.value.splice(k + 1, 0, q), setTimeout(() = > {for(let j = 0;
            j < 3;
            j++
        )
            v.value.splice(k - 1, 1);
            a.value = null, (n ? g.value.length === 0 : g.value.every(j = > j.state > 0) && f.value.length === 0 && v.value.length === 0
        )
                ? (l.value = !0, i.value = !0, r.winCallback && r.winCallback()) : r.dropCallback && r.dropCallback()
        },
            100
        )
        } else {
            r.clickCallback && r.clickCallback();
            const k = v.value.findIndex(j = > j.type === q.type
        )
            ;k > -1 ? v.value.splice(k + 1, 0, q) : v.value.push(q), v.value.length === 7 && (l.value = !0, i.value = !0, r.loseCallback && r.loseCallback())
        }
    }

    function ae(q) {
        const ee = f.value.findIndex(I = > I.id === q.id
    )
        ;ee > -1 && f.value.splice(ee, 1), D(q)
    }

    function Q() {
        const q = a.value;
        if (!q) return;
        a.value = null, i.value = !0, q.state = 0, n && g.value.push(q);
        const ee = v.value.findIndex(I = > I.id === q.id
    )
        ;v.value.splice(ee, 1)
    }

    function G() {
        if (!(v.value.length < 3)) {
            l.value = !0, a.value = null;
            for (let q = 0; q < 3; q++) {
                const ee = v.value.shift();
                if (!ee) return;
                f.value.push(ee)
            }
        }
    }

    function fe(q) {
        const {cardNum: ee, layerNum: I, trap: k} = {...s, ...q};
        o.value = [], i.value = !1, l.value = !1, f.value = [], a.value = null, g.value = [], y.clear(), x = [], v.value = [], K = [];
        const j = k && Qt(Gt(0, 100)) !== 50, ue = new Array(ee).fill(0).map(($, H) = > H + 1
    )
        ;let A = [];
        for (let $ = 0; $ < 3 * I; $++) A = [...A,
    ...
        ue
    ]
        ;
        if (j) {
            const $ = A.length;
            A.splice($ - ee, $)
        }
        A = ms(ms(A));
        let te = 0, p = 1;
        const d = A.length;
        for (; te <= d;) {
            const $ = p * p, H = au(Gt($ / 2, $));
            K.push(A.splice(0, H)), te += H, p++
        }
        const S = t.value.clientWidth, O = t.value.clientHeight, P = S / 2, W = O / 2 - 60;
        K.forEach(($, H) = > {y.clear();
        let Y = 0;
        const he = [];
        $.forEach(ce = > {for(Y=Qt(Gt(0, (H + 1) * * 2));
        y.has(Y);
    )
        Y = Qt(Gt(0, (H + 1) * * 2));
        const Pe = Qt(Y / (H + 1)), Te = H ? Y % H : 0, V = {
            id: `${H}-${Y}`,
            type: ce,
            zIndex: H,
            index: Y,
            row: Pe,
            column: Te,
            top: W + (R * Pe - R / 2 * H),
            left: P + (R * Te - R / 2 * H),
            parents: [],
            state: 0
        }, je = [V.top, V.left];
        x.forEach(Be = > {Math.abs(Be.top - je[0]) <= R && Math.abs(Be.left - je[1]) <= R && Be.parents.push(V)}
    ),
        he.push(V), y.add(Y)
    }),
        g.value = g.value.concat(he), x = he
    }),
        L()
    }

    return {
        nodes: g,
        selectedNodes: v,
        removeFlag: l,
        removeList: f,
        backFlag: i,
        handleSelect: D,
        handleBack: Q,
        handleRemove: G,
        handleSelectRemove: ae,
        initData: fe
    }
}

var Tr = {};
(function e(t, n, r, s) {
    var o = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL);

    function i() {
    }

    function l(p) {
        var d = n.exports.Promise, S = d !== void 0 ? d : t.Promise;
        return typeof S == "function" ? new S(p) : (p(i, i), null)
    }

    var f = function () {
        var p = Math.floor(16.666666666666668), d, S, O = {}, P = 0;
        return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (d = function (W) {
            var $ = Math.random();
            return O[$] = requestAnimationFrame(function H(Y) {
                P === Y || P + p - 1 < Y ? (P = Y, delete O[$], W()) : O[$] = requestAnimationFrame(H)
            }), $
        }, S = function (W) {
            O[W] && cancelAnimationFrame(O[W])
        }) : (d = function (W) {
            return setTimeout(W, p)
        }, S = function (W) {
            return clearTimeout(W)
        }), {frame: d, cancel: S}
    }(), a = function () {
        var p, d, S = {};

        function O(P) {
            function W($, H) {
                P.postMessage({options: $ || {}, callback: H})
            }

            P.init = function (H) {
                var Y = H.transferControlToOffscreen();
                P.postMessage({canvas: Y}, [Y])
            }, P.fire = function (H, Y, he) {
                if (d) return W(H, null), d;
                var ce = Math.random().toString(36).slice(2);
                return d = l(function (Pe) {
                    function Te(V) {
                        V.data.callback === ce && (delete S[ce], P.removeEventListener("message", Te), d = null, he(), Pe())
                    }

                    P.addEventListener("message", Te), W(H, ce), S[ce] = Te.bind(null, {data: {callback: ce}})
                }), d
            }, P.reset = function () {
                P.postMessage({reset: !0});
                for (var H in S) S[H](), delete S[H]
            }
        }

        return function () {
            if (p) return p;
            if (!r && o) {
                var P = ["var CONFETTI, SIZE = {}, module = {};", "(" + e.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join(`
`);
                try {
                    p = new Worker(URL.createObjectURL(new Blob([P])))
                } catch (W) {
                    return typeof console !== void 0 && typeof console.warn == "function" && console.warn("\u{1F38A} Could not load worker", W), null
                }
                O(p)
            }
            return p
        }
    }(), g = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: .9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: .5,
        y: .5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
        disableForReducedMotion: !1,
        scalar: 1
    };

    function y(p, d) {
        return d ? d(p) : p
    }

    function x(p) {
        return p != null
    }

    function v(p, d, S) {
        return y(p && x(p[d]) ? p[d] : g[d], S)
    }

    function R(p) {
        return p < 0 ? 0 : Math.floor(p)
    }

    function K(p, d) {
        return Math.floor(Math.random() * (d - p)) + p
    }

    function L(p) {
        return parseInt(p, 16)
    }

    function D(p) {
        return p.map(ae)
    }

    function ae(p) {
        var d = String(p).replace(/[^0-9a-f]/gi, "");
        return d.length < 6 && (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]), {
            r: L(d.substring(0, 2)),
            g: L(d.substring(2, 4)),
            b: L(d.substring(4, 6))
        }
    }

    function Q(p) {
        var d = v(p, "origin", Object);
        return d.x = v(d, "x", Number), d.y = v(d, "y", Number), d
    }

    function G(p) {
        p.width = document.documentElement.clientWidth, p.height = document.documentElement.clientHeight
    }

    function fe(p) {
        var d = p.getBoundingClientRect();
        p.width = d.width, p.height = d.height
    }

    function q(p) {
        var d = document.createElement("canvas");
        return d.style.position = "fixed", d.style.top = "0px", d.style.left = "0px", d.style.pointerEvents = "none", d.style.zIndex = p, d
    }

    function ee(p, d, S, O, P, W, $, H, Y) {
        p.save(), p.translate(d, S), p.rotate(W), p.scale(O, P), p.arc(0, 0, 1, $, H, Y), p.restore()
    }

    function I(p) {
        var d = p.angle * (Math.PI / 180), S = p.spread * (Math.PI / 180);
        return {
            x: p.x,
            y: p.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
            velocity: p.startVelocity * .5 + Math.random() * p.startVelocity,
            angle2D: -d + (.5 * S - Math.random() * S),
            tiltAngle: (Math.random() * (.75 - .25) + .25) * Math.PI,
            color: p.color,
            shape: p.shape,
            tick: 0,
            totalTicks: p.ticks,
            decay: p.decay,
            drift: p.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: p.gravity * 3,
            ovalScalar: .6,
            scalar: p.scalar
        }
    }

    function k(p, d) {
        d.x += Math.cos(d.angle2D) * d.velocity + d.drift, d.y += Math.sin(d.angle2D) * d.velocity + d.gravity, d.wobble += d.wobbleSpeed, d.velocity *= d.decay, d.tiltAngle += .1, d.tiltSin = Math.sin(d.tiltAngle), d.tiltCos = Math.cos(d.tiltAngle), d.random = Math.random() + 2, d.wobbleX = d.x + 10 * d.scalar * Math.cos(d.wobble), d.wobbleY = d.y + 10 * d.scalar * Math.sin(d.wobble);
        var S = d.tick++ / d.totalTicks, O = d.x + d.random * d.tiltCos, P = d.y + d.random * d.tiltSin,
            W = d.wobbleX + d.random * d.tiltCos, $ = d.wobbleY + d.random * d.tiltSin;
        return p.fillStyle = "rgba(" + d.color.r + ", " + d.color.g + ", " + d.color.b + ", " + (1 - S) + ")", p.beginPath(), d.shape === "circle" ? p.ellipse ? p.ellipse(d.x, d.y, Math.abs(W - O) * d.ovalScalar, Math.abs($ - P) * d.ovalScalar, Math.PI / 10 * d.wobble, 0, 2 * Math.PI) : ee(p, d.x, d.y, Math.abs(W - O) * d.ovalScalar, Math.abs($ - P) * d.ovalScalar, Math.PI / 10 * d.wobble, 0, 2 * Math.PI) : (p.moveTo(Math.floor(d.x), Math.floor(d.y)), p.lineTo(Math.floor(d.wobbleX), Math.floor(P)), p.lineTo(Math.floor(W), Math.floor($)), p.lineTo(Math.floor(O), Math.floor(d.wobbleY))), p.closePath(), p.fill(), d.tick < d.totalTicks
    }

    function j(p, d, S, O, P) {
        var W = d.slice(), $ = p.getContext("2d"), H, Y, he = l(function (ce) {
            function Pe() {
                H = Y = null, $.clearRect(0, 0, O.width, O.height), P(), ce()
            }

            function Te() {
                r && !(O.width === s.width && O.height === s.height) && (O.width = p.width = s.width, O.height = p.height = s.height), !O.width && !O.height && (S(p), O.width = p.width, O.height = p.height), $.clearRect(0, 0, O.width, O.height), W = W.filter(function (V) {
                    return k($, V)
                }), W.length ? H = f.frame(Te) : Pe()
            }

            H = f.frame(Te), Y = Pe
        });
        return {
            addFettis: function (ce) {
                return W = W.concat(ce), he
            }, canvas: p, promise: he, reset: function () {
                H && f.cancel(H), Y && Y()
            }
        }
    }

    function ue(p, d) {
        var S = !p, O = !!v(d || {}, "resize"), P = v(d, "disableForReducedMotion", Boolean),
            W = o && !!v(d || {}, "useWorker"), $ = W ? a() : null, H = S ? G : fe,
            Y = p && $ ? !!p.__confetti_initialized : !1,
            he = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, ce;

        function Pe(V, je, Be) {
            for (var Ae = v(V, "particleCount", R), Ze = v(V, "angle", Number), Qe = v(V, "spread", Number), c = v(V, "startVelocity", Number), u = v(V, "decay", Number), h = v(V, "gravity", Number), b = v(V, "drift", Number), m = v(V, "colors", D), C = v(V, "ticks", Number), E = v(V, "shapes"), T = v(V, "scalar"), w = Q(V), _ = Ae, F = [], M = p.width * w.x, N = p.height * w.y; _--;) F.push(I({
                x: M,
                y: N,
                angle: Ze,
                spread: Qe,
                startVelocity: c,
                color: m[_ % m.length],
                shape: E[K(0, E.length)],
                ticks: C,
                decay: u,
                gravity: h,
                drift: b,
                scalar: T
            }));
            return ce ? ce.addFettis(F) : (ce = j(p, F, H, je, Be), ce.promise)
        }

        function Te(V) {
            var je = P || v(V, "disableForReducedMotion", Boolean), Be = v(V, "zIndex", Number);
            if (je && he) return l(function (c) {
                c()
            });
            S && ce ? p = ce.canvas : S && !p && (p = q(Be), document.body.appendChild(p)), O && !Y && H(p);
            var Ae = {width: p.width, height: p.height};
            $ && !Y && $.init(p), Y = !0, $ && (p.__confetti_initialized = !0);

            function Ze() {
                if ($) {
                    var c = {
                        getBoundingClientRect: function () {
                            if (!S) return p.getBoundingClientRect()
                        }
                    };
                    H(c), $.postMessage({resize: {width: c.width, height: c.height}});
                    return
                }
                Ae.width = Ae.height = null
            }

            function Qe() {
                ce = null, O && t.removeEventListener("resize", Ze), S && p && (document.body.removeChild(p), p = null, Y = !1)
            }

            return O && t.addEventListener("resize", Ze, !1), $ ? $.fire(V, Ae, Qe) : Pe(V, Ae, Qe)
        }

        return Te.reset = function () {
            $ && $.reset(), ce && ce.reset()
        }, Te
    }

    var A;

    function te() {
        return A || (A = ue(null, {useWorker: !0, resize: !0})), A
    }

    n.exports = function () {
        return te().apply(this, arguments)
    }, n.exports.reset = function () {
        te().reset()
    }, n.exports.create = ue
})(function () {
    return typeof window < "u" ? window : typeof self < "u" ? self : this || {}
}(), Tr, !1);
const Zn = Tr.exports;
Tr.exports.create;

function wu() {
    const e = Date.now() + 15e3, t = ["#ffa62d", "#ff5e7e", "#26ccff", "#a25afd", "#88ff5a", "#fcff42", "#ff36ff"];
    (function n() {
        Zn({particleCount: 2, angle: 60, spread: 55, origin: {x: 0}, colors: t}), Zn({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: {x: 1},
            colors: t
        }), Date.now() < e && requestAnimationFrame(n)
    })()
}

function Eu() {
    Zn({particleCount: 100, spread: 100, origin: {y: .6}})
}

const Au = {flex: "", "flex-col": "", "w-full": "", "h-full": ""}, Mu = de("div", {
        "text-44px": "",
        "text-center": "",
        "w-full": "",
        color: "#000",
        "fw-600": "",
        "h-60px": "",
        flex: "",
        "items-center": "",
        "justify-center": "",
        "mt-10px": ""
    }, " \u5154\u4E86\u4E2A\u5154 ", -1), Iu = {"w-full": "", relative: "", "flex-1": ""}, Fu = {
        key: 0,
        color: "#000",
        flex: "",
        "items-center": "",
        "justify-center": "",
        "w-full": "",
        "text-28px": "",
        "fw-bold": ""
    }, Ou = {
        key: 0,
        color: "#000",
        flex: "",
        "items-center": "",
        "justify-center": "",
        "w-full": "",
        "text-28px": "",
        "fw-bold": ""
    }, Nu = {"text-center": "", "h-50px": "", flex: "", "items-center": "", "justify-center": ""},
    Pu = {"w-full": "", flex: "", "items-center": "", "justify-center": ""},
    ju = {border: "~ 4px dashed #000", "w-450px": "", "h-60px": "", flex: ""},
    Su = {"h-50px": "", flex: "", "items-center": "", "w-full": "", "justify-center": ""}, Ru = ["disabled"],
    Lu = ["disabled"], $u = de("div", {
        "w-full": "",
        color: "#000",
        "fw-600": "",
        "text-center": "",
        "pb-10px": ""
    }, [de("span", {"mr-20px": ""}, "designer: Teacher Face"), Vn(" by: Xc "), de("a", {
        class: "icon-btn",
        color: "#000",
        "i-carbon-logo-github": "",
        rel: "noreferrer",
        href: "https://github.com/451444336",
        target: "_blank",
        title: "GitHub"
    }), de("span", {"text-12px": "", color: "#00000018"}, [de("span", {
        class: "icon-btn",
        "text-2": "",
        "i-carbon:arrow-up-left": ""
    }), Vn(" star buff")])], -1), ku = Gs({
        __name: "App", setup(e) {
            const t = ve(), n = ve(), r = ve(), s = ve(), o = ve(), i = ve(1), l = ve(!1),
                f = [{cardNum: 4, layerNum: 2, trap: !1}, {cardNum: 9, layerNum: 3, trap: !1}, {
                    cardNum: 15,
                    layerNum: 6,
                    trap: !1
                }],
                a = ve(!1), {nodes: g, selectedNodes: y, handleSelect: x, handleBack: v, backFlag: R, handleRemove: K, removeFlag: L, removeList: D, handleSelectRemove: ae, initData: Q} = Cu({
                    container: t,
                    cardNum: 4,
                    layerNum: 2,
                    trap: !1,
                    events: {clickCallback: G, dropCallback: fe, winCallback: q, loseCallback: ee}
                });

            function G() {
                var I;
                (I = n.value) != null && I.paused ? n.value.play() : n.value && (n.value.load(), n.value.play())
            }

            function fe() {
                var I;
                (I = r.value) == null || I.play()
            }

            function q() {
                var I;
                (I = s.value) == null || I.play(), i.value < f.length ? (Eu(), l.value = !0, setTimeout(() = > {
                    l
                    .value = !1
                }, 1500), setTimeout(() = > {Q(f[i.value]
            ),
                i.value++
            },
                2e3
            )):
                (a.value = !0, wu())
            }

            function ee() {
                var I;
                (I = o.value) == null || I.play(), setTimeout(() = > {
                    alert(
                    "\u69FD\u4F4D\u5DF2\u6EE1\uFF0C\u518D\u63A5\u518D\u5389~"
            ),
                g.value = [], D.value = [], y.value = [], i.value = 0, l.value = !0, setTimeout(() = > {l.value = !1}, 1500
            ),
                setTimeout(() = > {Q(f[i.value]
            ),
                i.value++
            },
                2e3
            )
            },
                500
            )
            }

            return pr(() = > {Q()}
        ),
            (I, k) =
        >
            (Ee(), nt("div", Au, [Mu, de("div", {
                ref_key: "containerRef",
                ref: t,
                "flex-1": "",
                flex: ""
            }, [de("div", Iu, [(Ee(!0), nt(Ie, null, In(Ce(g), j = > (Ee(), yt(xt, {
                key: j.id,
                name: "slide-fade"
            }, {
                default: $t(() = > [[0, 1].includes(j.state) ? (Ee(), yt(Pn, {
                    key: 0,
                    node: j,
                    onClickCard: Ce(x)
                }, null, 8, ["node", "onClickCard"])) : kt("", !0)]), _
        :
            2
        },
            1024
        ))),
            128
        ))]),
            xe(xt, {name: "bounce"}, {default: $t(() = > [a.value ? (Ee(), nt("div", Fu, " \u6210\u529F\u52A0\u5165\u5154\u5708~ ")) : kt("", !0)]), _
        :
            1
        }),
            xe(xt, {name: "bounce"}, {default: $t(() = > [l.value ? (Ee(), nt("div", Ou, " \u7B2C" + Do(i.value + 1) + "\u5173 ", 1)) : kt("", !0)]), _
        :
            1
        })],
            512
        ),
            de("div", Nu, [(Ee(!0), nt(Ie, null, In(Ce(D), j = > (Ee(), yt(Pn, {
                key: j.id,
                node: j,
                "is-dock": "",
                onClickCard: Ce(ae)
            }, null, 8, ["node", "onClickCard"]))), 128))
        ]),
            de("div", Pu, [de("div", ju, [(Ee(!0), nt(Ie, null, In(Ce(y), j = > (Ee(), yt(xt, {
                key: j.id,
                name: "bounce"
            }, {
                default: $t(() = > [j.state === 2 ? (Ee(), yt(Pn, {
                    key: 0,
                    node: j,
                    "is-dock": ""
                }, null, 8, ["node"])) : kt("", !0)]), _
        :
            2
        },
            1024
        ))),
            128
        ))])]),
            de("div", Su, [de("button", {
                disabled: Ce(L),
                "mr-10px": "",
                onClick: k[0] || (k[0] = (...j) = > Ce(K) && Ce(K)(...j))
        },
            " \u79FB\u51FA\u524D\u4E09\u4E2A ", 8, Ru
        ),
            de("button", {disabled: Ce(R), onClick: k[1] || (k[1] = (...j) = > Ce(v) && Ce(v)(...j)
        )
        },
            " \u56DE\u9000 ", 8, Lu
        )]),
            $u, de("audio", {
                ref_key: "clickAudioRef",
                ref: n,
                style: {display: "none"},
                controls: "",
                src: "./audio/click.mp3"
            }, null, 512), de("audio", {
                ref_key: "dropAudioRef",
                ref: r,
                style: {display: "none"},
                controls: "",
                src: "./audio/drop.mp3"
            }, null, 512), de("audio", {
                ref_key: "winAudioRef",
                ref: s,
                style: {display: "none"},
                controls: "",
                src: "./audio/win.mp3"
            }, null, 512), de("audio", {
                ref_key: "loseAudioRef",
                ref: o,
                style: {display: "none"},
                controls: "",
                src: "./audio/lose.mp3"
            }, null, 512)
        ]))
        }
    });
oc(ku).mount("#app")
})
;
export default Bu();
