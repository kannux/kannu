(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    67423,
    (e, t, r) => {
        "use strict";
        function a({
            widthInt: e,
            heightInt: t,
            blurWidth: r,
            blurHeight: a,
            blurDataURL: s,
            objectFit: n
        }) {
            let i = r ? 40 * r : e,
                l = a ? 40 * a : t,
                o = i && l ? `viewBox='0 0 ${i} ${l}'` : "";
            return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${o}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
                o
                    ? "none"
                    : "contain" === n
                    ? "xMidYMid"
                    : "cover" === n
                    ? "xMidYMid slice"
                    : "none"
            }' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`;
        }
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "getImageBlurSvg", {
                enumerable: !0,
                get: function () {
                    return a;
                }
            });
    },
    87690,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var a = {
            VALID_LOADERS: function () {
                return n;
            },
            imageConfigDefault: function () {
                return i;
            }
        };
        for (var s in a)
            Object.defineProperty(r, s, { enumerable: !0, get: a[s] });
        let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
            i = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                loaderFile: "",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 14400,
                formats: ["image/webp"],
                maximumRedirects: 3,
                dangerouslyAllowLocalIP: !1,
                dangerouslyAllowSVG: !1,
                contentSecurityPolicy:
                    "script-src 'none'; frame-src 'none'; sandbox;",
                contentDispositionType: "attachment",
                localPatterns: void 0,
                remotePatterns: [],
                qualities: [75],
                unoptimized: !1
            };
    },
    8927,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "getImgProps", {
                enumerable: !0,
                get: function () {
                    return d;
                }
            }),
            e.r(33525);
        let a = e.r(43369),
            s = e.r(67423),
            n = e.r(87690),
            i = ["-moz-initial", "fill", "none", "scale-down", void 0];
        function l(e) {
            return void 0 !== e.default;
        }
        function o(e) {
            return void 0 === e
                ? e
                : "number" == typeof e
                ? Number.isFinite(e)
                    ? e
                    : NaN
                : "string" == typeof e && /^[0-9]+$/.test(e)
                ? parseInt(e, 10)
                : NaN;
        }
        function d(
            {
                src: e,
                sizes: t,
                unoptimized: r = !1,
                priority: d = !1,
                preload: c = !1,
                loading: u,
                className: m,
                quality: h,
                width: p,
                height: f,
                fill: x = !1,
                style: v,
                overrideSrc: g,
                onLoad: y,
                onLoadingComplete: b,
                placeholder: w = "empty",
                blurDataURL: j,
                fetchPriority: N,
                decoding: k = "async",
                layout: S,
                objectFit: _,
                objectPosition: C,
                lazyBoundary: P,
                lazyRoot: z,
                ...M
            },
            R
        ) {
            var I;
            let E,
                O,
                F,
                {
                    imgConf: A,
                    showAltText: T,
                    blurComplete: U,
                    defaultLoader: D
                } = R,
                $ = A || n.imageConfigDefault;
            if ("allSizes" in $) E = $;
            else {
                let e = [...$.deviceSizes, ...$.imageSizes].sort(
                        (e, t) => e - t
                    ),
                    t = $.deviceSizes.sort((e, t) => e - t),
                    r = $.qualities?.sort((e, t) => e - t);
                E = { ...$, allSizes: e, deviceSizes: t, qualities: r };
            }
            if (void 0 === D)
                throw Object.defineProperty(
                    Error(
                        "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
                    ),
                    "__NEXT_ERROR_CODE",
                    { value: "E163", enumerable: !1, configurable: !0 }
                );
            let L = M.loader || D;
            delete M.loader, delete M.srcSet;
            let Y = "__next_img_default" in L;
            if (Y) {
                if ("custom" === E.loader)
                    throw Object.defineProperty(
                        Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
                        "__NEXT_ERROR_CODE",
                        { value: "E252", enumerable: !1, configurable: !0 }
                    );
            } else {
                let e = L;
                L = t => {
                    let { config: r, ...a } = t;
                    return e(a);
                };
            }
            if (S) {
                "fill" === S && (x = !0);
                let e = {
                    intrinsic: { maxWidth: "100%", height: "auto" },
                    responsive: { width: "100%", height: "auto" }
                }[S];
                e && (v = { ...v, ...e });
                let r = { responsive: "100vw", fill: "100vw" }[S];
                r && !t && (t = r);
            }
            let H = "",
                B = o(p),
                W = o(f);
            if ((I = e) && "object" == typeof I && (l(I) || void 0 !== I.src)) {
                let t = l(e) ? e.default : e;
                if (!t.src)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                                t
                            )}`
                        ),
                        "__NEXT_ERROR_CODE",
                        { value: "E460", enumerable: !1, configurable: !0 }
                    );
                if (!t.height || !t.width)
                    throw Object.defineProperty(
                        Error(
                            `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                                t
                            )}`
                        ),
                        "__NEXT_ERROR_CODE",
                        { value: "E48", enumerable: !1, configurable: !0 }
                    );
                if (
                    ((O = t.blurWidth),
                    (F = t.blurHeight),
                    (j = j || t.blurDataURL),
                    (H = t.src),
                    !x)
                )
                    if (B || W) {
                        if (B && !W) {
                            let e = B / t.width;
                            W = Math.round(t.height * e);
                        } else if (!B && W) {
                            let e = W / t.height;
                            B = Math.round(t.width * e);
                        }
                    } else (B = t.width), (W = t.height);
            }
            let V = !d && !c && ("lazy" === u || void 0 === u);
            (!(e = "string" == typeof e ? e : H) ||
                e.startsWith("data:") ||
                e.startsWith("blob:")) &&
                ((r = !0), (V = !1)),
                E.unoptimized && (r = !0),
                Y &&
                    !E.dangerouslyAllowSVG &&
                    e.split("?", 1)[0].endsWith(".svg") &&
                    (r = !0);
            let q = o(h),
                G = Object.assign(
                    x
                        ? {
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              objectFit: _,
                              objectPosition: C
                          }
                        : {},
                    T ? {} : { color: "transparent" },
                    v
                ),
                X =
                    U || "empty" === w
                        ? null
                        : "blur" === w
                        ? `url("data:image/svg+xml;charset=utf-8,${(0,
                          s.getImageBlurSvg)({
                              widthInt: B,
                              heightInt: W,
                              blurWidth: O,
                              blurHeight: F,
                              blurDataURL: j || "",
                              objectFit: G.objectFit
                          })}")`
                        : `url("${w}")`,
                J = i.includes(G.objectFit)
                    ? "fill" === G.objectFit
                        ? "100% 100%"
                        : "cover"
                    : G.objectFit,
                Q = X
                    ? {
                          backgroundSize: J,
                          backgroundPosition: G.objectPosition || "50% 50%",
                          backgroundRepeat: "no-repeat",
                          backgroundImage: X
                      }
                    : {},
                K = (function ({
                    config: e,
                    src: t,
                    unoptimized: r,
                    width: s,
                    quality: n,
                    sizes: i,
                    loader: l
                }) {
                    if (r) {
                        let e = (0, a.getDeploymentId)();
                        if (t.startsWith("/") && !t.startsWith("//") && e) {
                            let r = t.includes("?") ? "&" : "?";
                            t = `${t}${r}dpl=${e}`;
                        }
                        return { src: t, srcSet: void 0, sizes: void 0 };
                    }
                    let { widths: o, kind: d } = (function (
                            { deviceSizes: e, allSizes: t },
                            r,
                            a
                        ) {
                            if (a) {
                                let r = /(^|\s)(1?\d?\d)vw/g,
                                    s = [];
                                for (let e; (e = r.exec(a)); )
                                    s.push(parseInt(e[2]));
                                if (s.length) {
                                    let r = 0.01 * Math.min(...s);
                                    return {
                                        widths: t.filter(t => t >= e[0] * r),
                                        kind: "w"
                                    };
                                }
                                return { widths: t, kind: "w" };
                            }
                            return "number" != typeof r
                                ? { widths: e, kind: "w" }
                                : {
                                      widths: [
                                          ...new Set(
                                              [r, 2 * r].map(
                                                  e =>
                                                      t.find(t => t >= e) ||
                                                      t[t.length - 1]
                                              )
                                          )
                                      ],
                                      kind: "x"
                                  };
                        })(e, s, i),
                        c = o.length - 1;
                    return {
                        sizes: i || "w" !== d ? i : "100vw",
                        srcSet: o
                            .map(
                                (r, a) =>
                                    `${l({
                                        config: e,
                                        src: t,
                                        quality: n,
                                        width: r
                                    })} ${"w" === d ? r : a + 1}${d}`
                            )
                            .join(", "),
                        src: l({ config: e, src: t, quality: n, width: o[c] })
                    };
                })({
                    config: E,
                    src: e,
                    unoptimized: r,
                    width: B,
                    quality: q,
                    sizes: t,
                    loader: L
                }),
                Z = V ? "lazy" : u;
            return {
                props: {
                    ...M,
                    loading: Z,
                    fetchPriority: N,
                    width: B,
                    height: W,
                    decoding: k,
                    className: m,
                    style: { ...G, ...Q },
                    sizes: K.sizes,
                    srcSet: K.srcSet,
                    src: g || K.src
                },
                meta: {
                    unoptimized: r,
                    preload: c || d,
                    placeholder: w,
                    fill: x
                }
            };
        }
    },
    98879,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return l;
                }
            });
        let a = e.r(71645),
            s = "u" < typeof window,
            n = s ? () => {} : a.useLayoutEffect,
            i = s ? () => {} : a.useEffect;
        function l(e) {
            let { headManager: t, reduceComponentsToState: r } = e;
            function l() {
                if (t && t.mountedInstances) {
                    let e = a.Children.toArray(
                        Array.from(t.mountedInstances).filter(Boolean)
                    );
                    t.updateHead(r(e));
                }
            }
            return (
                s && (t?.mountedInstances?.add(e.children), l()),
                n(
                    () => (
                        t?.mountedInstances?.add(e.children),
                        () => {
                            t?.mountedInstances?.delete(e.children);
                        }
                    )
                ),
                n(
                    () => (
                        t && (t._pendingUpdate = l),
                        () => {
                            t && (t._pendingUpdate = l);
                        }
                    )
                ),
                i(
                    () => (
                        t &&
                            t._pendingUpdate &&
                            (t._pendingUpdate(), (t._pendingUpdate = null)),
                        () => {
                            t &&
                                t._pendingUpdate &&
                                (t._pendingUpdate(), (t._pendingUpdate = null));
                        }
                    )
                ),
                null
            );
        }
    },
    25633,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var a = {
            default: function () {
                return f;
            },
            defaultHead: function () {
                return u;
            }
        };
        for (var s in a)
            Object.defineProperty(r, s, { enumerable: !0, get: a[s] });
        let n = e.r(55682),
            i = e.r(90809),
            l = e.r(43476),
            o = i._(e.r(71645)),
            d = n._(e.r(98879)),
            c = e.r(42732);
        function u() {
            return [
                (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
                (0, l.jsx)(
                    "meta",
                    { name: "viewport", content: "width=device-width" },
                    "viewport"
                )
            ];
        }
        function m(e, t) {
            return "string" == typeof t || "number" == typeof t
                ? e
                : t.type === o.default.Fragment
                ? e.concat(
                      o.default.Children.toArray(t.props.children).reduce(
                          (e, t) =>
                              "string" == typeof t || "number" == typeof t
                                  ? e
                                  : e.concat(t),
                          []
                      )
                  )
                : e.concat(t);
        }
        e.r(33525);
        let h = ["name", "httpEquiv", "charSet", "itemProp"];
        function p(e) {
            let t, r, a, s;
            return e
                .reduce(m, [])
                .reverse()
                .concat(u().reverse())
                .filter(
                    ((t = new Set()),
                    (r = new Set()),
                    (a = new Set()),
                    (s = {}),
                    e => {
                        let n = !0,
                            i = !1;
                        if (
                            e.key &&
                            "number" != typeof e.key &&
                            e.key.indexOf("$") > 0
                        ) {
                            i = !0;
                            let r = e.key.slice(e.key.indexOf("$") + 1);
                            t.has(r) ? (n = !1) : t.add(r);
                        }
                        switch (e.type) {
                            case "title":
                            case "base":
                                r.has(e.type) ? (n = !1) : r.add(e.type);
                                break;
                            case "meta":
                                for (let t = 0, r = h.length; t < r; t++) {
                                    let r = h[t];
                                    if (e.props.hasOwnProperty(r))
                                        if ("charSet" === r)
                                            a.has(r) ? (n = !1) : a.add(r);
                                        else {
                                            let t = e.props[r],
                                                a = s[r] || new Set();
                                            ("name" !== r || !i) && a.has(t)
                                                ? (n = !1)
                                                : (a.add(t), (s[r] = a));
                                        }
                                }
                        }
                        return n;
                    })
                )
                .reverse()
                .map((e, t) => {
                    let r = e.key || t;
                    return o.default.cloneElement(e, { key: r });
                });
        }
        let f = function ({ children: e }) {
            let t = (0, o.useContext)(c.HeadManagerContext);
            return (0, l.jsx)(d.default, {
                reduceComponentsToState: p,
                headManager: t,
                children: e
            });
        };
        ("function" == typeof r.default ||
            ("object" == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, "__esModule", { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    18556,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "ImageConfigContext", {
                enumerable: !0,
                get: function () {
                    return n;
                }
            });
        let a = e.r(55682)._(e.r(71645)),
            s = e.r(87690),
            n = a.default.createContext(s.imageConfigDefault);
    },
    65856,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "RouterContext", {
                enumerable: !0,
                get: function () {
                    return a;
                }
            });
        let a = e.r(55682)._(e.r(71645)).default.createContext(null);
    },
    70965,
    (e, t, r) => {
        "use strict";
        function a(e, t) {
            let r = e || 75;
            return t?.qualities?.length
                ? t.qualities.reduce(
                      (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
                      0
                  )
                : r;
        }
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "findClosestQuality", {
                enumerable: !0,
                get: function () {
                    return a;
                }
            });
    },
    1948,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                get: function () {
                    return i;
                }
            });
        let a = e.r(70965),
            s = e.r(43369);
        function n({ config: e, src: t, width: r, quality: n }) {
            if (
                t.startsWith("/") &&
                t.includes("?") &&
                e.localPatterns?.length === 1 &&
                "**" === e.localPatterns[0].pathname &&
                "" === e.localPatterns[0].search
            )
                throw Object.defineProperty(
                    Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
                    "__NEXT_ERROR_CODE",
                    { value: "E871", enumerable: !1, configurable: !0 }
                );
            let i = (0, a.findClosestQuality)(n, e),
                l = (0, s.getDeploymentId)();
            return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${i}${
                t.startsWith("/") && l ? `&dpl=${l}` : ""
            }`;
        }
        n.__next_img_default = !0;
        let i = n;
    },
    85437,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 }),
            Object.defineProperty(r, "Image", {
                enumerable: !0,
                get: function () {
                    return b;
                }
            });
        let a = e.r(55682),
            s = e.r(90809),
            n = e.r(43476),
            i = s._(e.r(71645)),
            l = a._(e.r(74080)),
            o = a._(e.r(25633)),
            d = e.r(8927),
            c = e.r(87690),
            u = e.r(18556);
        e.r(33525);
        let m = e.r(65856),
            h = a._(e.r(1948)),
            p = e.r(18581),
            f = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            };
        function x(e, t, r, a, s, n, i) {
            let l = e?.src;
            e &&
                e["data-loaded-src"] !== l &&
                ((e["data-loaded-src"] = l),
                ("decode" in e ? e.decode() : Promise.resolve())
                    .catch(() => {})
                    .then(() => {
                        if (e.parentElement && e.isConnected) {
                            if (("empty" !== t && s(!0), r?.current)) {
                                let t = new Event("load");
                                Object.defineProperty(t, "target", {
                                    writable: !1,
                                    value: e
                                });
                                let a = !1,
                                    s = !1;
                                r.current({
                                    ...t,
                                    nativeEvent: t,
                                    currentTarget: e,
                                    target: e,
                                    isDefaultPrevented: () => a,
                                    isPropagationStopped: () => s,
                                    persist: () => {},
                                    preventDefault: () => {
                                        (a = !0), t.preventDefault();
                                    },
                                    stopPropagation: () => {
                                        (s = !0), t.stopPropagation();
                                    }
                                });
                            }
                            a?.current && a.current(e);
                        }
                    }));
        }
        function v(e) {
            return i.use ? { fetchPriority: e } : { fetchpriority: e };
        }
        "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let g = (0, i.forwardRef)(
            (
                {
                    src: e,
                    srcSet: t,
                    sizes: r,
                    height: a,
                    width: s,
                    decoding: l,
                    className: o,
                    style: d,
                    fetchPriority: c,
                    placeholder: u,
                    loading: m,
                    unoptimized: h,
                    fill: f,
                    onLoadRef: g,
                    onLoadingCompleteRef: y,
                    setBlurComplete: b,
                    setShowAltText: w,
                    sizesInput: j,
                    onLoad: N,
                    onError: k,
                    ...S
                },
                _
            ) => {
                let C = (0, i.useCallback)(
                        e => {
                            e &&
                                (k && (e.src = e.src),
                                e.complete && x(e, u, g, y, b, h, j));
                        },
                        [e, u, g, y, b, k, h, j]
                    ),
                    P = (0, p.useMergedRef)(_, C);
                return (0, n.jsx)("img", {
                    ...S,
                    ...v(c),
                    loading: m,
                    width: s,
                    height: a,
                    decoding: l,
                    "data-nimg": f ? "fill" : "1",
                    className: o,
                    style: d,
                    sizes: r,
                    srcSet: t,
                    src: e,
                    ref: P,
                    onLoad: e => {
                        x(e.currentTarget, u, g, y, b, h, j);
                    },
                    onError: e => {
                        w(!0), "empty" !== u && b(!0), k && k(e);
                    }
                });
            }
        );
        function y({ isAppRouter: e, imgAttributes: t }) {
            let r = {
                as: "image",
                imageSrcSet: t.srcSet,
                imageSizes: t.sizes,
                crossOrigin: t.crossOrigin,
                referrerPolicy: t.referrerPolicy,
                ...v(t.fetchPriority)
            };
            return e && l.default.preload
                ? (l.default.preload(t.src, r), null)
                : (0, n.jsx)(o.default, {
                      children: (0, n.jsx)(
                          "link",
                          {
                              rel: "preload",
                              href: t.srcSet ? void 0 : t.src,
                              ...r
                          },
                          "__nimg-" + t.src + t.srcSet + t.sizes
                      )
                  });
        }
        let b = (0, i.forwardRef)((e, t) => {
            let r = (0, i.useContext)(m.RouterContext),
                a = (0, i.useContext)(u.ImageConfigContext),
                s = (0, i.useMemo)(() => {
                    let e = f || a || c.imageConfigDefault,
                        t = [...e.deviceSizes, ...e.imageSizes].sort(
                            (e, t) => e - t
                        ),
                        r = e.deviceSizes.sort((e, t) => e - t),
                        s = e.qualities?.sort((e, t) => e - t);
                    return {
                        ...e,
                        allSizes: t,
                        deviceSizes: r,
                        qualities: s,
                        localPatterns:
                            "u" < typeof window
                                ? a?.localPatterns
                                : e.localPatterns
                    };
                }, [a]),
                { onLoad: l, onLoadingComplete: o } = e,
                p = (0, i.useRef)(l);
            (0, i.useEffect)(() => {
                p.current = l;
            }, [l]);
            let x = (0, i.useRef)(o);
            (0, i.useEffect)(() => {
                x.current = o;
            }, [o]);
            let [v, b] = (0, i.useState)(!1),
                [w, j] = (0, i.useState)(!1),
                { props: N, meta: k } = (0, d.getImgProps)(e, {
                    defaultLoader: h.default,
                    imgConf: s,
                    blurComplete: v,
                    showAltText: w
                });
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(g, {
                        ...N,
                        unoptimized: k.unoptimized,
                        placeholder: k.placeholder,
                        fill: k.fill,
                        onLoadRef: p,
                        onLoadingCompleteRef: x,
                        setBlurComplete: b,
                        setShowAltText: j,
                        sizesInput: e.sizes,
                        ref: t
                    }),
                    k.preload
                        ? (0, n.jsx)(y, { isAppRouter: !r, imgAttributes: N })
                        : null
                ]
            });
        });
        ("function" == typeof r.default ||
            ("object" == typeof r.default && null !== r.default)) &&
            void 0 === r.default.__esModule &&
            (Object.defineProperty(r.default, "__esModule", { value: !0 }),
            Object.assign(r.default, r),
            (t.exports = r.default));
    },
    94909,
    (e, t, r) => {
        "use strict";
        Object.defineProperty(r, "__esModule", { value: !0 });
        var a = {
            default: function () {
                return c;
            },
            getImageProps: function () {
                return d;
            }
        };
        for (var s in a)
            Object.defineProperty(r, s, { enumerable: !0, get: a[s] });
        let n = e.r(55682),
            i = e.r(8927),
            l = e.r(85437),
            o = n._(e.r(1948));
        function d(e) {
            let { props: t } = (0, i.getImgProps)(e, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [32, 48, 64, 96, 128, 256, 384],
                    qualities: [75],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
            return { props: t };
        }
        let c = l.Image;
    },
    57688,
    (e, t, r) => {
        t.exports = e.r(94909);
    },
    16015,
    (e, t, r) => {},
    98547,
    (e, t, r) => {
        var a = e.i(47167);
        e.r(16015);
        var s = e.r(71645),
            n =
                s && "object" == typeof s && "default" in s
                    ? s
                    : { default: s },
            i = void 0 !== a.default && a.default.env && !0,
            l = function (e) {
                return "[object String]" === Object.prototype.toString.call(e);
            },
            o = (function () {
                function e(e) {
                    var t = void 0 === e ? {} : e,
                        r = t.name,
                        a = void 0 === r ? "stylesheet" : r,
                        s = t.optimizeForSpeed,
                        n = void 0 === s ? i : s;
                    d(l(a), "`name` must be a string"),
                        (this._name = a),
                        (this._deletedRulePlaceholder =
                            "#" + a + "-deleted-rule____{}"),
                        d(
                            "boolean" == typeof n,
                            "`optimizeForSpeed` must be a boolean"
                        ),
                        (this._optimizeForSpeed = n),
                        (this._serverSheet = void 0),
                        (this._tags = []),
                        (this._injected = !1),
                        (this._rulesCount = 0);
                    var o =
                        "u" > typeof window &&
                        document.querySelector('meta[property="csp-nonce"]');
                    this._nonce = o ? o.getAttribute("content") : null;
                }
                var t,
                    r = e.prototype;
                return (
                    (r.setOptimizeForSpeed = function (e) {
                        d(
                            "boolean" == typeof e,
                            "`setOptimizeForSpeed` accepts a boolean"
                        ),
                            d(
                                0 === this._rulesCount,
                                "optimizeForSpeed cannot be when rules have already been inserted"
                            ),
                            this.flush(),
                            (this._optimizeForSpeed = e),
                            this.inject();
                    }),
                    (r.isOptimizeForSpeed = function () {
                        return this._optimizeForSpeed;
                    }),
                    (r.inject = function () {
                        var e = this;
                        if (
                            (d(!this._injected, "sheet already injected"),
                            (this._injected = !0),
                            "u" > typeof window && this._optimizeForSpeed)
                        ) {
                            (this._tags[0] = this.makeStyleTag(this._name)),
                                (this._optimizeForSpeed =
                                    "insertRule" in this.getSheet()),
                                this._optimizeForSpeed ||
                                    (i ||
                                        console.warn(
                                            "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                                        ),
                                    this.flush(),
                                    (this._injected = !0));
                            return;
                        }
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function (t, r) {
                                return (
                                    "number" == typeof r
                                        ? (e._serverSheet.cssRules[r] = {
                                              cssText: t
                                          })
                                        : e._serverSheet.cssRules.push({
                                              cssText: t
                                          }),
                                    r
                                );
                            },
                            deleteRule: function (t) {
                                e._serverSheet.cssRules[t] = null;
                            }
                        };
                    }),
                    (r.getSheetForTag = function (e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e)
                                return document.styleSheets[t];
                    }),
                    (r.getSheet = function () {
                        return this.getSheetForTag(
                            this._tags[this._tags.length - 1]
                        );
                    }),
                    (r.insertRule = function (e, t) {
                        if (
                            (d(l(e), "`insertRule` accepts only strings"),
                            "u" < typeof window)
                        )
                            return (
                                "number" != typeof t &&
                                    (t = this._serverSheet.cssRules.length),
                                this._serverSheet.insertRule(e, t),
                                this._rulesCount++
                            );
                        if (this._optimizeForSpeed) {
                            var r = this.getSheet();
                            "number" != typeof t && (t = r.cssRules.length);
                            try {
                                r.insertRule(e, t);
                            } catch (t) {
                                return (
                                    i ||
                                        console.warn(
                                            "StyleSheet: illegal rule: \n\n" +
                                                e +
                                                "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                                        ),
                                    -1
                                );
                            }
                        } else {
                            var a = this._tags[t];
                            this._tags.push(
                                this.makeStyleTag(this._name, e, a)
                            );
                        }
                        return this._rulesCount++;
                    }),
                    (r.replaceRule = function (e, t) {
                        if (this._optimizeForSpeed || "u" < typeof window) {
                            var r =
                                "u" > typeof window
                                    ? this.getSheet()
                                    : this._serverSheet;
                            if (
                                (t.trim() || (t = this._deletedRulePlaceholder),
                                !r.cssRules[e])
                            )
                                return e;
                            r.deleteRule(e);
                            try {
                                r.insertRule(t, e);
                            } catch (a) {
                                i ||
                                    console.warn(
                                        "StyleSheet: illegal rule: \n\n" +
                                            t +
                                            "\n\nSee https://stackoverflow.com/q/20007992 for more info"
                                    ),
                                    r.insertRule(
                                        this._deletedRulePlaceholder,
                                        e
                                    );
                            }
                        } else {
                            var a = this._tags[e];
                            d(a, "old rule at index `" + e + "` not found"),
                                (a.textContent = t);
                        }
                        return e;
                    }),
                    (r.deleteRule = function (e) {
                        if ("u" < typeof window)
                            return void this._serverSheet.deleteRule(e);
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            d(t, "rule at index `" + e + "` not found"),
                                t.parentNode.removeChild(t),
                                (this._tags[e] = null);
                        }
                    }),
                    (r.flush = function () {
                        (this._injected = !1),
                            (this._rulesCount = 0),
                            "u" > typeof window
                                ? (this._tags.forEach(function (e) {
                                      return e && e.parentNode.removeChild(e);
                                  }),
                                  (this._tags = []))
                                : (this._serverSheet.cssRules = []);
                    }),
                    (r.cssRules = function () {
                        var e = this;
                        return "u" < typeof window
                            ? this._serverSheet.cssRules
                            : this._tags.reduce(function (t, r) {
                                  return (
                                      r
                                          ? (t = t.concat(
                                                Array.prototype.map.call(
                                                    e.getSheetForTag(r)
                                                        .cssRules,
                                                    function (t) {
                                                        return t.cssText ===
                                                            e._deletedRulePlaceholder
                                                            ? null
                                                            : t;
                                                    }
                                                )
                                            ))
                                          : t.push(null),
                                      t
                                  );
                              }, []);
                    }),
                    (r.makeStyleTag = function (e, t, r) {
                        t &&
                            d(
                                l(t),
                                "makeStyleTag accepts only strings as second parameter"
                            );
                        var a = document.createElement("style");
                        this._nonce && a.setAttribute("nonce", this._nonce),
                            (a.type = "text/css"),
                            a.setAttribute("data-" + e, ""),
                            t && a.appendChild(document.createTextNode(t));
                        var s =
                            document.head ||
                            document.getElementsByTagName("head")[0];
                        return r ? s.insertBefore(a, r) : s.appendChild(a), a;
                    }),
                    (t = [
                        {
                            key: "length",
                            get: function () {
                                return this._rulesCount;
                            }
                        }
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            (a.enumerable = a.enumerable || !1),
                                (a.configurable = !0),
                                "value" in a && (a.writable = !0),
                                Object.defineProperty(e, a.key, a);
                        }
                    })(e.prototype, t),
                    e
                );
            })();
        function d(e, t) {
            if (!e) throw Error("StyleSheet: " + t + ".");
        }
        var c = function (e) {
                for (var t = 5381, r = e.length; r; )
                    t = (33 * t) ^ e.charCodeAt(--r);
                return t >>> 0;
            },
            u = {};
        function m(e, t) {
            if (!t) return "jsx-" + e;
            var r = String(t),
                a = e + r;
            return u[a] || (u[a] = "jsx-" + c(e + "-" + r)), u[a];
        }
        function h(e, t) {
            "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
            var r = e + t;
            return (
                u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
                u[r]
            );
        }
        var p = (function () {
                function e(e) {
                    var t = void 0 === e ? {} : e,
                        r = t.styleSheet,
                        a = void 0 === r ? null : r,
                        s = t.optimizeForSpeed,
                        n = void 0 !== s && s;
                    (this._sheet =
                        a ||
                        new o({ name: "styled-jsx", optimizeForSpeed: n })),
                        this._sheet.inject(),
                        a &&
                            "boolean" == typeof n &&
                            (this._sheet.setOptimizeForSpeed(n),
                            (this._optimizeForSpeed =
                                this._sheet.isOptimizeForSpeed())),
                        (this._fromServer = void 0),
                        (this._indices = {}),
                        (this._instancesCounts = {});
                }
                var t = e.prototype;
                return (
                    (t.add = function (e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed &&
                            ((this._optimizeForSpeed = Array.isArray(
                                e.children
                            )),
                            this._sheet.setOptimizeForSpeed(
                                this._optimizeForSpeed
                            ),
                            (this._optimizeForSpeed =
                                this._sheet.isOptimizeForSpeed())),
                            "u" > typeof window &&
                                !this._fromServer &&
                                ((this._fromServer = this.selectFromServer()),
                                (this._instancesCounts = Object.keys(
                                    this._fromServer
                                ).reduce(function (e, t) {
                                    return (e[t] = 0), e;
                                }, {})));
                        var r = this.getIdAndRules(e),
                            a = r.styleId,
                            s = r.rules;
                        if (a in this._instancesCounts) {
                            this._instancesCounts[a] += 1;
                            return;
                        }
                        var n = s
                            .map(function (e) {
                                return t._sheet.insertRule(e);
                            })
                            .filter(function (e) {
                                return -1 !== e;
                            });
                        (this._indices[a] = n), (this._instancesCounts[a] = 1);
                    }),
                    (t.remove = function (e) {
                        var t = this,
                            r = this.getIdAndRules(e).styleId;
                        if (
                            ((function (e, t) {
                                if (!e)
                                    throw Error(
                                        "StyleSheetRegistry: " + t + "."
                                    );
                            })(
                                r in this._instancesCounts,
                                "styleId: `" + r + "` not found"
                            ),
                            (this._instancesCounts[r] -= 1),
                            this._instancesCounts[r] < 1)
                        ) {
                            var a = this._fromServer && this._fromServer[r];
                            a
                                ? (a.parentNode.removeChild(a),
                                  delete this._fromServer[r])
                                : (this._indices[r].forEach(function (e) {
                                      return t._sheet.deleteRule(e);
                                  }),
                                  delete this._indices[r]),
                                delete this._instancesCounts[r];
                        }
                    }),
                    (t.update = function (e, t) {
                        this.add(t), this.remove(e);
                    }),
                    (t.flush = function () {
                        this._sheet.flush(),
                            this._sheet.inject(),
                            (this._fromServer = void 0),
                            (this._indices = {}),
                            (this._instancesCounts = {});
                    }),
                    (t.cssRules = function () {
                        var e = this,
                            t = this._fromServer
                                ? Object.keys(this._fromServer).map(
                                      function (t) {
                                          return [t, e._fromServer[t]];
                                      }
                                  )
                                : [],
                            r = this._sheet.cssRules();
                        return t.concat(
                            Object.keys(this._indices)
                                .map(function (t) {
                                    return [
                                        t,
                                        e._indices[t]
                                            .map(function (e) {
                                                return r[e].cssText;
                                            })
                                            .join(
                                                e._optimizeForSpeed ? "" : "\n"
                                            )
                                    ];
                                })
                                .filter(function (e) {
                                    return !!e[1];
                                })
                        );
                    }),
                    (t.styles = function (e) {
                        var t, r;
                        return (
                            (t = this.cssRules()),
                            void 0 === (r = e) && (r = {}),
                            t.map(function (e) {
                                var t = e[0],
                                    a = e[1];
                                return n.default.createElement("style", {
                                    id: "__" + t,
                                    key: "__" + t,
                                    nonce: r.nonce ? r.nonce : void 0,
                                    dangerouslySetInnerHTML: { __html: a }
                                });
                            })
                        );
                    }),
                    (t.getIdAndRules = function (e) {
                        var t = e.children,
                            r = e.dynamic,
                            a = e.id;
                        if (r) {
                            var s = m(a, r);
                            return {
                                styleId: s,
                                rules: Array.isArray(t)
                                    ? t.map(function (e) {
                                          return h(s, e);
                                      })
                                    : [h(s, t)]
                            };
                        }
                        return {
                            styleId: m(a),
                            rules: Array.isArray(t) ? t : [t]
                        };
                    }),
                    (t.selectFromServer = function () {
                        return Array.prototype.slice
                            .call(document.querySelectorAll('[id^="__jsx-"]'))
                            .reduce(function (e, t) {
                                return (e[t.id.slice(2)] = t), e;
                            }, {});
                    }),
                    e
                );
            })(),
            f = s.createContext(null);
        function x() {
            return new p();
        }
        function v() {
            return s.useContext(f);
        }
        f.displayName = "StyleSheetContext";
        var g = n.default.useInsertionEffect || n.default.useLayoutEffect,
            y = "u" > typeof window ? x() : void 0;
        function b(e) {
            var t = y || v();
            return (
                t &&
                    ("u" < typeof window
                        ? t.add(e)
                        : g(
                              function () {
                                  return (
                                      t.add(e),
                                      function () {
                                          t.remove(e);
                                      }
                                  );
                              },
                              [e.id, String(e.dynamic)]
                          )),
                null
            );
        }
        (b.dynamic = function (e) {
            return e
                .map(function (e) {
                    return m(e[0], e[1]);
                })
                .join(" ");
        }),
            (r.StyleRegistry = function (e) {
                var t = e.registry,
                    r = e.children,
                    a = s.useContext(f),
                    i = s.useState(function () {
                        return a || t || x();
                    })[0];
                return n.default.createElement(f.Provider, { value: i }, r);
            }),
            (r.createStyleRegistry = x),
            (r.style = b),
            (r.useStyleRegistry = v);
    },
    37902,
    (e, t, r) => {
        t.exports = e.r(98547).style;
    },
    66698,
    (e, t, r) => {
        var a;
        e.e,
            (a = e.r(71645)),
            (t.exports = (function (e) {
                var t = {};
                function r(a) {
                    if (t[a]) return t[a].exports;
                    var s = (t[a] = { i: a, l: !1, exports: {} });
                    return (
                        e[a].call(s.exports, s, s.exports, r),
                        (s.l = !0),
                        s.exports
                    );
                }
                return (
                    (r.m = e),
                    (r.c = t),
                    (r.d = function (e, t, a) {
                        r.o(e, t) ||
                            Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: a
                            });
                    }),
                    (r.r = function (e) {
                        "u" > typeof Symbol &&
                            Symbol.toStringTag &&
                            Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }),
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                    }),
                    (r.t = function (e, t) {
                        if (
                            (1 & t && (e = r(e)),
                            8 & t ||
                                (4 & t &&
                                    "object" == typeof e &&
                                    e &&
                                    e.__esModule))
                        )
                            return e;
                        var a = Object.create(null);
                        if (
                            (r.r(a),
                            Object.defineProperty(a, "default", {
                                enumerable: !0,
                                value: e
                            }),
                            2 & t && "string" != typeof e)
                        )
                            for (var s in e)
                                r.d(
                                    a,
                                    s,
                                    function (t) {
                                        return e[t];
                                    }.bind(null, s)
                                );
                        return a;
                    }),
                    (r.n = function (e) {
                        var t =
                            e && e.__esModule
                                ? function () {
                                      return e.default;
                                  }
                                : function () {
                                      return e;
                                  };
                        return r.d(t, "a", t), t;
                    }),
                    (r.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }),
                    (r.p = ""),
                    r((r.s = "./src/react-webcam.tsx"))
                );
            })({
                "./src/react-webcam.tsx": function (e, t, r) {
                    "use strict";
                    r.r(t);
                    var a,
                        s = r("react"),
                        n =
                            ((a = function (e, t) {
                                return (a =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (e, t) {
                                            e.__proto__ = t;
                                        }) ||
                                    function (e, t) {
                                        for (var r in t)
                                            t.hasOwnProperty(r) &&
                                                (e[r] = t[r]);
                                    })(e, t);
                            }),
                            function (e, t) {
                                function r() {
                                    this.constructor = e;
                                }
                                a(e, t),
                                    (e.prototype =
                                        null === t
                                            ? Object.create(t)
                                            : ((r.prototype = t.prototype),
                                              new r()));
                            }),
                        i = function () {
                            return (i =
                                Object.assign ||
                                function (e) {
                                    for (
                                        var t, r = 1, a = arguments.length;
                                        r < a;
                                        r++
                                    )
                                        for (var s in (t = arguments[r]))
                                            Object.prototype.hasOwnProperty.call(
                                                t,
                                                s
                                            ) && (e[s] = t[s]);
                                    return e;
                                }).apply(this, arguments);
                        },
                        l = function (e, t) {
                            var r = {};
                            for (var a in e)
                                Object.prototype.hasOwnProperty.call(e, a) &&
                                    0 > t.indexOf(a) &&
                                    (r[a] = e[a]);
                            if (
                                null != e &&
                                "function" ==
                                    typeof Object.getOwnPropertySymbols
                            )
                                for (
                                    var s = 0,
                                        a = Object.getOwnPropertySymbols(e);
                                    s < a.length;
                                    s++
                                )
                                    0 > t.indexOf(a[s]) &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            a[s]
                                        ) &&
                                        (r[a[s]] = e[a[s]]);
                            return r;
                        };
                    function o() {
                        return !!(
                            navigator.mediaDevices &&
                            navigator.mediaDevices.getUserMedia
                        );
                    }
                    "u" > typeof window &&
                        (void 0 === navigator.mediaDevices &&
                            (navigator.mediaDevices = {}),
                        void 0 === navigator.mediaDevices.getUserMedia &&
                            (navigator.mediaDevices.getUserMedia = function (
                                e
                            ) {
                                var t =
                                    navigator.getUserMedia ||
                                    navigator.webkitGetUserMedia ||
                                    navigator.mozGetUserMedia ||
                                    navigator.msGetUserMedia;
                                return t
                                    ? new Promise(function (r, a) {
                                          t.call(navigator, e, r, a);
                                      })
                                    : Promise.reject(
                                          Error(
                                              "getUserMedia is not implemented in this browser"
                                          )
                                      );
                            })),
                        (t.default = (function (e) {
                            function t(t) {
                                var r = e.call(this, t) || this;
                                return (
                                    (r.canvas = null),
                                    (r.ctx = null),
                                    (r.requestUserMediaId = 0),
                                    (r.unmounted = !1),
                                    (r.state = { hasUserMedia: !1 }),
                                    r
                                );
                            }
                            return (
                                n(t, e),
                                (t.prototype.componentDidMount = function () {
                                    var e = this.state,
                                        t = this.props;
                                    ((this.unmounted = !1), o())
                                        ? (e.hasUserMedia ||
                                              this.requestUserMedia(),
                                          t.children &&
                                              "function" != typeof t.children &&
                                              console.warn(
                                                  "children must be a function"
                                              ))
                                        : t.onUserMediaError(
                                              "getUserMedia not supported"
                                          );
                                }),
                                (t.prototype.componentDidUpdate = function (e) {
                                    var t = this.props;
                                    if (!o())
                                        return void t.onUserMediaError(
                                            "getUserMedia not supported"
                                        );
                                    var r =
                                            JSON.stringify(
                                                e.audioConstraints
                                            ) !==
                                            JSON.stringify(t.audioConstraints),
                                        a =
                                            JSON.stringify(
                                                e.videoConstraints
                                            ) !==
                                            JSON.stringify(t.videoConstraints),
                                        s =
                                            e.minScreenshotWidth !==
                                            t.minScreenshotWidth,
                                        n =
                                            e.minScreenshotHeight !==
                                            t.minScreenshotHeight;
                                    (a || s || n) &&
                                        ((this.canvas = null),
                                        (this.ctx = null)),
                                        (r || a) &&
                                            (this.stopAndCleanup(),
                                            this.requestUserMedia());
                                }),
                                (t.prototype.componentWillUnmount =
                                    function () {
                                        (this.unmounted = !0),
                                            this.stopAndCleanup();
                                    }),
                                (t.stopMediaStream = function (e) {
                                    e &&
                                        (e.getVideoTracks && e.getAudioTracks
                                            ? (e
                                                  .getVideoTracks()
                                                  .map(function (t) {
                                                      e.removeTrack(t),
                                                          t.stop();
                                                  }),
                                              e
                                                  .getAudioTracks()
                                                  .map(function (t) {
                                                      e.removeTrack(t),
                                                          t.stop();
                                                  }))
                                            : e.stop());
                                }),
                                (t.prototype.stopAndCleanup = function () {
                                    var e = this.state;
                                    e.hasUserMedia &&
                                        (t.stopMediaStream(this.stream),
                                        e.src &&
                                            window.URL.revokeObjectURL(e.src));
                                }),
                                (t.prototype.getScreenshot = function (e) {
                                    var t = this.state,
                                        r = this.props;
                                    if (!t.hasUserMedia) return null;
                                    var a = this.getCanvas(e);
                                    return (
                                        a &&
                                        a.toDataURL(
                                            r.screenshotFormat,
                                            r.screenshotQuality
                                        )
                                    );
                                }),
                                (t.prototype.getCanvas = function (e) {
                                    var t = this.state,
                                        r = this.props;
                                    if (
                                        !this.video ||
                                        !t.hasUserMedia ||
                                        !this.video.videoHeight
                                    )
                                        return null;
                                    if (!this.ctx) {
                                        var a = this.video.videoWidth,
                                            s = this.video.videoHeight;
                                        if (
                                            !this.props
                                                .forceScreenshotSourceSize
                                        ) {
                                            var n = a / s;
                                            (s =
                                                (a =
                                                    r.minScreenshotWidth ||
                                                    this.video.clientWidth) /
                                                n),
                                                r.minScreenshotHeight &&
                                                    s < r.minScreenshotHeight &&
                                                    (a =
                                                        (s =
                                                            r.minScreenshotHeight) *
                                                        n);
                                        }
                                        (this.canvas =
                                            document.createElement("canvas")),
                                            (this.canvas.width =
                                                (null == e
                                                    ? void 0
                                                    : e.width) || a),
                                            (this.canvas.height =
                                                (null == e
                                                    ? void 0
                                                    : e.height) || s),
                                            (this.ctx =
                                                this.canvas.getContext("2d"));
                                    }
                                    var i = this.ctx,
                                        l = this.canvas;
                                    return (
                                        i &&
                                            l &&
                                            ((l.width =
                                                (null == e
                                                    ? void 0
                                                    : e.width) || l.width),
                                            (l.height =
                                                (null == e
                                                    ? void 0
                                                    : e.height) || l.height),
                                            r.mirrored &&
                                                (i.translate(l.width, 0),
                                                i.scale(-1, 1)),
                                            (i.imageSmoothingEnabled =
                                                r.imageSmoothing),
                                            i.drawImage(
                                                this.video,
                                                0,
                                                0,
                                                (null == e
                                                    ? void 0
                                                    : e.width) || l.width,
                                                (null == e
                                                    ? void 0
                                                    : e.height) || l.height
                                            ),
                                            r.mirrored &&
                                                (i.scale(-1, 1),
                                                i.translate(-l.width, 0))),
                                        l
                                    );
                                }),
                                (t.prototype.requestUserMedia = function () {
                                    var e = this,
                                        r = this.props,
                                        a = function (a, s) {
                                            var n = {
                                                video: void 0 === s || s
                                            };
                                            r.audio &&
                                                (n.audio = void 0 === a || a),
                                                e.requestUserMediaId++;
                                            var i = e.requestUserMediaId;
                                            navigator.mediaDevices
                                                .getUserMedia(n)
                                                .then(function (r) {
                                                    e.unmounted ||
                                                    i !== e.requestUserMediaId
                                                        ? t.stopMediaStream(r)
                                                        : e.handleUserMedia(
                                                              null,
                                                              r
                                                          );
                                                })
                                                .catch(function (t) {
                                                    e.handleUserMedia(t);
                                                });
                                        };
                                    if ("mediaDevices" in navigator)
                                        a(
                                            r.audioConstraints,
                                            r.videoConstraints
                                        );
                                    else {
                                        var s = function (e) {
                                                return {
                                                    optional: [{ sourceId: e }]
                                                };
                                            },
                                            n = function (e) {
                                                var t = e.deviceId;
                                                return "string" == typeof t
                                                    ? t
                                                    : Array.isArray(t) &&
                                                      t.length > 0
                                                    ? t[0]
                                                    : "object" == typeof t &&
                                                      t.ideal
                                                    ? t.ideal
                                                    : null;
                                            };
                                        MediaStreamTrack.getSources(
                                            function (e) {
                                                var t = null,
                                                    i = null;
                                                e.forEach(function (e) {
                                                    "audio" === e.kind
                                                        ? (t = e.id)
                                                        : "video" === e.kind &&
                                                          (i = e.id);
                                                });
                                                var l = n(r.audioConstraints);
                                                l && (t = l);
                                                var o = n(r.videoConstraints);
                                                o && (i = o), a(s(t), s(i));
                                            }
                                        );
                                    }
                                }),
                                (t.prototype.handleUserMedia = function (e, t) {
                                    var r = this.props;
                                    if (e || !t) {
                                        this.setState({ hasUserMedia: !1 }),
                                            r.onUserMediaError(e);
                                        return;
                                    }
                                    this.stream = t;
                                    try {
                                        this.video &&
                                            (this.video.srcObject = t),
                                            this.setState({ hasUserMedia: !0 });
                                    } catch (e) {
                                        this.setState({
                                            hasUserMedia: !0,
                                            src: window.URL.createObjectURL(t)
                                        });
                                    }
                                    r.onUserMedia(t);
                                }),
                                (t.prototype.render = function () {
                                    var e = this,
                                        t = this.state,
                                        r = this.props,
                                        a = r.audio,
                                        n =
                                            (r.forceScreenshotSourceSize,
                                            r.disablePictureInPicture),
                                        o =
                                            (r.onUserMedia,
                                            r.onUserMediaError,
                                            r.screenshotFormat,
                                            r.screenshotQuality,
                                            r.minScreenshotWidth,
                                            r.minScreenshotHeight,
                                            r.audioConstraints,
                                            r.videoConstraints,
                                            r.imageSmoothing,
                                            r.mirrored),
                                        d = r.style,
                                        c = void 0 === d ? {} : d,
                                        u = r.children,
                                        m = l(r, [
                                            "audio",
                                            "forceScreenshotSourceSize",
                                            "disablePictureInPicture",
                                            "onUserMedia",
                                            "onUserMediaError",
                                            "screenshotFormat",
                                            "screenshotQuality",
                                            "minScreenshotWidth",
                                            "minScreenshotHeight",
                                            "audioConstraints",
                                            "videoConstraints",
                                            "imageSmoothing",
                                            "mirrored",
                                            "style",
                                            "children"
                                        ]),
                                        h = o
                                            ? i(i({}, c), {
                                                  transform:
                                                      (c.transform || "") +
                                                      " scaleX(-1)"
                                              })
                                            : c,
                                        p = {
                                            getScreenshot:
                                                this.getScreenshot.bind(this)
                                        };
                                    return s.createElement(
                                        s.Fragment,
                                        null,
                                        s.createElement(
                                            "video",
                                            i(
                                                {
                                                    autoPlay: !0,
                                                    disablePictureInPicture: n,
                                                    src: t.src,
                                                    muted: !a,
                                                    playsInline: !0,
                                                    ref: function (t) {
                                                        e.video = t;
                                                    },
                                                    style: h
                                                },
                                                m
                                            )
                                        ),
                                        u && u(p)
                                    );
                                }),
                                (t.defaultProps = {
                                    audio: !1,
                                    disablePictureInPicture: !1,
                                    forceScreenshotSourceSize: !1,
                                    imageSmoothing: !0,
                                    mirrored: !1,
                                    onUserMedia: function () {},
                                    onUserMediaError: function () {},
                                    screenshotFormat: "image/webp",
                                    screenshotQuality: 0.92
                                }),
                                t
                            );
                        })(s.Component));
                },
                react: function (e, t) {
                    e.exports = a;
                }
            }).default);
    },
    63268,
    e => {
        "use strict";
        let t;
        e.i(47167);
        var r = e.i(43476),
            a = e.i(71645),
            s = e.i(46932),
            n = e.i(88653),
            i = e.i(70756);
        let l =
                /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
            o = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
            d = /\.(m3u8)($|\?)/i,
            c = /\.(mpd)($|\?)/i,
            u = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,
            m =
                /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,
            h = /vimeo\.com\/(?!progressive_redirect).+/,
            p =
                /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,
            f = /open\.spotify\.com\/(\w+)\/(\w+)/i,
            x =
                /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+|(videos?\/|\?video=)\d+)($|\?)/,
            v =
                /tiktok\.com\/(?:player\/v1\/|share\/video\/|@[^/]+\/video\/)([0-9]+)/,
            g = (e, t) => {
                if (Array.isArray(e)) {
                    for (let r of e)
                        if (("string" == typeof r && g(r, t)) || g(r.src, t))
                            return !0;
                    return !1;
                }
                return t(e);
            },
            y = a.default.forwardRef((e, t) => {
                let r = l.test(`${e.src}`) ? "audio" : "video";
                return a.default.createElement(r, { ...e, ref: t }, e.children);
            }),
            b = [
                {
                    key: "hls",
                    name: "hls.js",
                    canPlay: e => g(e, e => d.test(e)),
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => e.A(52953))
                },
                {
                    key: "dash",
                    name: "dash.js",
                    canPlay: e => g(e, e => c.test(e)),
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => e.A(64594))
                },
                {
                    key: "mux",
                    name: "Mux",
                    canPlay: e => u.test(e),
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => e.A(94375))
                },
                {
                    key: "youtube",
                    name: "YouTube",
                    canPlay: e => m.test(e),
                    player: (0, a.lazy)(() => e.A(41554))
                },
                {
                    key: "vimeo",
                    name: "Vimeo",
                    canPlay: e => h.test(e) && !o.test(e) && !d.test(e),
                    player: (0, a.lazy)(() => e.A(9705))
                },
                {
                    key: "wistia",
                    name: "Wistia",
                    canPlay: e => p.test(e),
                    canEnablePIP: () => !0,
                    player: (0, a.lazy)(() => e.A(27544))
                },
                {
                    key: "spotify",
                    name: "Spotify",
                    canPlay: e => f.test(e),
                    canEnablePIP: () => !1,
                    player: (0, a.lazy)(() => e.A(99195))
                },
                {
                    key: "twitch",
                    name: "Twitch",
                    canPlay: e => x.test(e),
                    canEnablePIP: () => !1,
                    player: (0, a.lazy)(() => e.A(78449))
                },
                {
                    key: "tiktok",
                    name: "TikTok",
                    canPlay: e => v.test(e),
                    canEnablePIP: () => !1,
                    player: (0, a.lazy)(() => e.A(96152))
                },
                {
                    key: "html",
                    name: "html",
                    canPlay: e => g(e, e => l.test(e) || o.test(e)),
                    canEnablePIP: () => !0,
                    player: y
                }
            ],
            w = {
                width: "320px",
                height: "180px",
                volume: 1,
                playbackRate: 1,
                previewTabIndex: 0,
                previewAriaLabel: "",
                oEmbedUrl: "https://noembed.com/embed?url={url}"
            },
            j = a.default.forwardRef((e, t) => {
                let { playing: r, pip: s } = e,
                    n = e.activePlayer,
                    i = (0, a.useRef)(null),
                    l = (0, a.useRef)(!0);
                if (
                    ((0, a.useEffect)(() => {
                        var t, a;
                        i.current &&
                            (i.current.paused && !0 === r && i.current.play(),
                            i.current.paused || !1 !== r || i.current.pause(),
                            (i.current.playbackRate =
                                null != (t = e.playbackRate) ? t : 1),
                            (i.current.volume =
                                null != (a = e.volume) ? a : 1));
                    }),
                    (0, a.useEffect)(() => {
                        var e, t, r, a, n;
                        if (i.current && globalThis.document) {
                            if (s && !document.pictureInPictureElement)
                                try {
                                    null ==
                                        (t = (e = i.current)
                                            .requestPictureInPicture) ||
                                        t.call(e);
                                } catch (e) {}
                            if (!s && document.pictureInPictureElement)
                                try {
                                    null ==
                                        (a = (r = i.current)
                                            .exitPictureInPicture) || a.call(r),
                                        null ==
                                            (n =
                                                document.exitPictureInPicture) ||
                                            n.call(document);
                                } catch (e) {}
                        }
                    }, [s]),
                    !n)
                )
                    return null;
                let o = {},
                    d = ["onReady", "onStart"];
                for (let t in e)
                    t.startsWith("on") && !d.includes(t) && (o[t] = e[t]);
                return a.default.createElement(
                    n,
                    {
                        ...o,
                        style: e.style,
                        className: e.className,
                        slot: e.slot,
                        ref: (0, a.useCallback)(
                            e => {
                                (i.current = e),
                                    "function" == typeof t
                                        ? t(e)
                                        : null !== t && (t.current = e);
                            },
                            [t]
                        ),
                        src: e.src,
                        crossOrigin: e.crossOrigin,
                        preload: e.preload,
                        controls: e.controls,
                        muted: e.muted,
                        autoPlay: e.autoPlay,
                        loop: e.loop,
                        playsInline: e.playsInline,
                        disableRemotePlayback: e.disableRemotePlayback,
                        config: e.config,
                        onLoadStart: t => {
                            var r, a;
                            (l.current = !0),
                                null == (r = e.onReady) || r.call(e),
                                null == (a = e.onLoadStart) || a.call(e, t);
                        },
                        onPlay: t => {
                            var r, a;
                            l.current &&
                                ((l.current = !1),
                                null == (r = e.onStart) || r.call(e, t)),
                                null == (a = e.onPlay) || a.call(e, t);
                        }
                    },
                    e.children
                );
            });
        j.displayName = "Player";
        let N = (0, a.lazy)(() => e.A(43801)),
            k = [],
            S = ({ children: e }) => e,
            _ = b[b.length - 1];
        var C =
                (((t = a.default.forwardRef((e, t) => {
                    let r = { ...w, ...e },
                        {
                            src: s,
                            slot: n,
                            className: i,
                            style: l,
                            width: o,
                            height: d,
                            fallback: c,
                            wrapper: u
                        } = r,
                        [m, h] = (0, a.useState)(!!r.light);
                    (0, a.useEffect)(() => {
                        r.light ? h(!0) : h(!1);
                    }, [r.light]);
                    let p = e => {
                            var t;
                            h(!1),
                                null == (t = r.onClickPreview) || t.call(r, e);
                        },
                        f = null == u ? S : u,
                        x = !1 === c ? S : a.Suspense;
                    return a.default.createElement(
                        f,
                        {
                            slot: n,
                            className: i,
                            style: { width: o, height: d, ...l }
                        },
                        a.default.createElement(
                            x,
                            { fallback: c },
                            m
                                ? (e => {
                                      if (!e) return null;
                                      let {
                                          light: t,
                                          playIcon: s,
                                          previewTabIndex: n,
                                          oEmbedUrl: i,
                                          previewAriaLabel: l
                                      } = r;
                                      return a.default.createElement(N, {
                                          src: e,
                                          light: t,
                                          playIcon: s,
                                          previewTabIndex: n,
                                          previewAriaLabel: l,
                                          oEmbedUrl: i,
                                          onClickPreview: p
                                      });
                                  })(s)
                                : (e => {
                                      var s, l;
                                      let o = (e => {
                                          for (let t of [...k, ...b])
                                              if (e && t.canPlay(e)) return t;
                                          return _ || null;
                                      })(e);
                                      if (!o) return null;
                                      let {
                                              style: d,
                                              width: c,
                                              height: u,
                                              wrapper: m
                                          } = r,
                                          h =
                                              null == (s = r.config)
                                                  ? void 0
                                                  : s[o.key];
                                      return a.default.createElement(j, {
                                          ...r,
                                          ref: t,
                                          activePlayer:
                                              null != (l = o.player) ? l : o,
                                          slot: m ? void 0 : n,
                                          className: m ? void 0 : i,
                                          style: m
                                              ? {
                                                    display: "block",
                                                    width: "100%",
                                                    height: "100%"
                                                }
                                              : {
                                                    display: "block",
                                                    width: c,
                                                    height: u,
                                                    ...d
                                                },
                                          config: h
                                      });
                                  })(s)
                        )
                    );
                })).displayName = "ReactPlayer"),
                (t.addCustomPlayer = e => {
                    k.push(e);
                }),
                (t.removeCustomPlayers = () => {
                    k.length = 0;
                }),
                (t.canPlay = e => {
                    if (e) {
                        for (let t of [...k, ...b]) if (t.canPlay(e)) return !0;
                    }
                    return !1;
                }),
                (t.canEnablePIP = e => {
                    var t;
                    if (e) {
                        for (let r of [...k, ...b])
                            if (
                                r.canPlay(e) &&
                                (null == (t = r.canEnablePIP)
                                    ? void 0
                                    : t.call(r))
                            )
                                return !0;
                    }
                    return !1;
                }),
                t),
            P = e.i(46696),
            z = e.i(10542),
            M = e.i(95420),
            R = e.i(59133),
            I = e.i(83086),
            E = e.i(90597),
            O = e.i(57688),
            F = e.i(31278);
        function A({
            src: t,
            useNextImage: s = !1,
            alt: n,
            className: i,
            ...l
        }) {
            let [o, d] = (0, a.useState)(t),
                [c, u] = (0, a.useState)(!1),
                [m, h] = (0, a.useState)(!1);
            (0, a.useEffect)(() => {
                d(t),
                    h(!1),
                    (t?.toLowerCase().endsWith(".heic") ||
                        t?.toLowerCase().endsWith(".heif")) &&
                        p(t);
            }, [t]);
            let p = async t => {
                try {
                    u(!0);
                    let r = await fetch(t),
                        a = await r.blob(),
                        s = (await e.A(208)).default,
                        n = await s({
                            blob: a,
                            toType: "image/jpeg",
                            quality: 0.8
                        }),
                        i = Array.isArray(n) ? n[0] : n,
                        l = URL.createObjectURL(i);
                    d(l);
                } catch (e) {
                    console.error("Error converting HEIC for display:", e),
                        h(!0);
                } finally {
                    u(!1);
                }
            };
            if (c)
                return (0, r.jsxs)("div", {
                    className: `flex items-center justify-center bg-gray-100 ${i}`,
                    children: [
                        (0, r.jsx)(F.Loader2, {
                            className:
                                "w-6 h-6 animate-spin text-valentine-pink"
                        }),
                        (0, r.jsx)("span", {
                            className: "sr-only",
                            children: "Processing image..."
                        })
                    ]
                });
            if (s)
                return (0, r.jsx)(O.default, {
                    src: o,
                    alt: n,
                    className: i,
                    ...l
                });
            let {
                fill: f,
                priority: x,
                quality: v,
                placeholder: g,
                blurDataURL: y,
                ...b
            } = l;
            return (0, r.jsx)("img", { src: o, alt: n, className: i, ...b });
        }
        function T({ delay: e = 0 }) {
            let t = 100 * Math.random(),
                a = 3 + 4 * Math.random(),
                n = 10 + 30 * Math.random();
            return (0, r.jsx)(s.motion.div, {
                initial: { y: "-10vh", x: `${t}vw`, opacity: 0, rotate: 0 },
                animate: { y: "110vh", opacity: [0, 1, 1, 0], rotate: 360 },
                transition: {
                    duration: a,
                    repeat: 1 / 0,
                    delay: e,
                    ease: "linear"
                },
                className:
                    "absolute text-valentine-red/40 pointer-events-none z-0",
                style: { fontSize: n },
                children: "❤️"
            });
        }
        function U({ partnerName: e, heroImage: t, startDate: n }) {
            let i = (0, a.useRef)(null),
                [l, o] = (0, a.useState)([]),
                [d, c] = (0, a.useState)("");
            (0, a.useEffect)(() => {
                let e = Date.now() + 3e3,
                    t = {
                        startVelocity: 30,
                        spread: 360,
                        ticks: 60,
                        zIndex: 0
                    },
                    r = (e, t) => Math.random() * (t - e) + e,
                    a = setInterval(function () {
                        let s = e - Date.now();
                        if (s <= 0) return clearInterval(a);
                        let n = (s / 3e3) * 50;
                        (0, R.default)({
                            ...t,
                            particleCount: n,
                            origin: { x: r(0.1, 0.3), y: Math.random() - 0.2 }
                        }),
                            (0, R.default)({
                                ...t,
                                particleCount: n,
                                origin: {
                                    x: r(0.7, 0.9),
                                    y: Math.random() - 0.2
                                }
                            });
                    }, 250);
                return () => clearInterval(a);
            }, []),
                (0, a.useEffect)(() => {
                    if ((o(Array.from({ length: 30 }, (e, t) => t)), n)) {
                        let e = new Date(n),
                            t = () => {
                                let t = new Date().getTime() - e.getTime(),
                                    r = Math.floor(t / 864e5),
                                    a = Math.floor((t % 864e5) / 36e5),
                                    s = Math.floor((t % 36e5) / 6e4),
                                    n = Math.floor((t % 6e4) / 1e3);
                                c(`${r}d ${a}h ${s}m ${n}s`);
                            },
                            r = setInterval(t, 1e3);
                        return t(), () => clearInterval(r);
                    }
                }, [n]);
            let { scrollYProgress: u } = (0, z.useScroll)({
                    target: i,
                    offset: ["start start", "end start"]
                }),
                m = (0, M.useTransform)(u, [0, 1], ["0%", "50%"]),
                h = (0, M.useTransform)(u, [0, 1], ["0%", "50%"]),
                p = (0, M.useTransform)(u, [0, 0.5], [1, 0]);
            return (0, r.jsxs)("section", {
                ref: i,
                className:
                    "h-screen w-full relative flex items-center justify-center overflow-hidden bg-valentine-dark",
                children: [
                    l.map(e => (0, r.jsx)(T, { delay: 0.3 * e }, e)),
                    (0, r.jsxs)(s.motion.div, {
                        style: { y: m },
                        className: "absolute inset-0 z-0 opacity-60",
                        children: [
                            t
                                ? (0, r.jsx)(A, {
                                      src: t,
                                      alt: "Us",
                                      fill: !0,
                                      useNextImage: !0,
                                      className:
                                          "object-cover grayscale hover:grayscale-0 transition-all duration-1000",
                                      priority: !0
                                  })
                                : (0, r.jsx)("div", {
                                      className:
                                          "w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-valentine-rose/30 via-valentine-dark to-black"
                                  }),
                            (0, r.jsx)("div", {
                                className: "absolute inset-0 bg-black/50"
                            })
                        ]
                    }),
                    (0, r.jsxs)("div", {
                        className:
                            "z-10 text-center px-4 relative w-full max-w-4xl",
                        children: [
                            (0, r.jsxs)(s.motion.div, {
                                initial: { opacity: 0, scale: 0.8, y: 50 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                transition: { duration: 1, ease: "easeOut" },
                                style: { y: h, opacity: p },
                                className:
                                    "backdrop-blur-md bg-white/10 p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-[0_0_50px_rgba(255,23,68,0.3)] relative overflow-hidden group",
                                children: [
                                    (0, r.jsx)("div", {
                                        className:
                                            "absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"
                                    }),
                                    (0, r.jsx)("div", {
                                        className:
                                            "absolute -top-10 -left-10 w-32 h-32 bg-valentine-red/30 rounded-full blur-3xl animate-pulse"
                                    }),
                                    (0, r.jsx)("div", {
                                        className:
                                            "absolute -bottom-10 -right-10 w-32 h-32 bg-valentine-pink/30 rounded-full blur-3xl animate-pulse delay-700"
                                    }),
                                    (0, r.jsxs)(s.motion.div, {
                                        initial: { y: -20, opacity: 0 },
                                        animate: { y: 0, opacity: 1 },
                                        transition: { delay: 0.5 },
                                        className:
                                            "flex items-center justify-center gap-2 mb-4",
                                        children: [
                                            (0, r.jsx)(I.Sparkles, {
                                                className:
                                                    "text-yellow-300 w-6 h-6 animate-spin-slow"
                                            }),
                                            (0, r.jsx)("span", {
                                                className:
                                                    "font-heading text-valentine-pink text-2xl md:text-3xl  ",
                                                children:
                                                    "Happy Valentine's Day"
                                            }),
                                            (0, r.jsx)(I.Sparkles, {
                                                className:
                                                    "text-yellow-300 w-6 h-6 animate-spin-slow"
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)("h1", {
                                        className:
                                            "font-heading text-6xl md:text-8xl lg:text-9xl text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] mb-2 leading-tight",
                                        children: e
                                    }),
                                    (0, r.jsx)("p", {
                                        className:
                                            "font-body text-xl md:text-2xl text-gray-200 tracking-wide max-w-2xl mx-auto leading-relaxed mb-8 italic",
                                        children:
                                            '"My heart beats only for you."'
                                    }),
                                    (0, r.jsxs)(s.motion.button, {
                                        whileHover: { scale: 1.05 },
                                        whileTap: { scale: 0.95 },
                                        onClick: () => {
                                            (0, R.default)({
                                                particleCount: 100,
                                                spread: 70,
                                                origin: { y: 0.6 },
                                                colors: [
                                                    "#FF1744",
                                                    "#FF80AB",
                                                    "#FFCDD2"
                                                ]
                                            });
                                        },
                                        className:
                                            "bg-valentine-red hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 mx-auto transition-all mb-8 border-2 border-white/20",
                                        children: [
                                            (0, r.jsx)(E.Heart, {
                                                className:
                                                    "w-5 h-5 fill-current animate-beat"
                                            }),
                                            "Shower me with Love"
                                        ]
                                    }),
                                    n &&
                                        (0, r.jsx)(s.motion.div, {
                                            initial: { opacity: 0, y: 20 },
                                            animate: { opacity: 1, y: 0 },
                                            transition: {
                                                delay: 1.5,
                                                duration: 1
                                            },
                                            className:
                                                "inline-flex items-center gap-4 bg-black/40 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 hover:border-valentine-pink/50 transition-colors",
                                            children: (0, r.jsxs)("div", {
                                                className: "text-right",
                                                children: [
                                                    (0, r.jsx)("p", {
                                                        className:
                                                            "text-gray-400 text-xs uppercase tracking-widest mb-1",
                                                        children:
                                                            "We've been in love for"
                                                    }),
                                                    (0, r.jsx)("p", {
                                                        className:
                                                            "text-white font-mono text-xl md:text-2xl font-bold tracking-wider tabular-nums bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400",
                                                        children: d
                                                    })
                                                ]
                                            })
                                        })
                                ]
                            }),
                            (0, r.jsx)(s.motion.div, {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: 3, duration: 1 },
                                className:
                                    "absolute bottom-10 left-0 right-0 mx-auto w-full pointer-events-none",
                                children: (0, r.jsx)("div", {
                                    className:
                                        "animate-bounce text-white/50 flex flex-col items-center gap-2",
                                    children: (0, r.jsx)("span", {
                                        className: "text-xl",
                                        children: "↓"
                                    })
                                })
                            })
                        ]
                    })
                ]
            });
        }
        function D({ events: e }) {
            return e && 0 !== e.length
                ? (0, r.jsxs)("section", {
                      className:
                          "py-20 px-4 md:px-0 relative max-w-4xl mx-auto",
                      children: [
                          (0, r.jsxs)("div", {
                              className: "text-center mb-16",
                              children: [
                                  (0, r.jsx)("h2", {
                                      className:
                                          "font-heading text-5xl text-valentine-red mb-4",
                                      children: "Our Story"
                                  }),
                                  (0, r.jsx)("p", {
                                      className: "text-valentine-dark/60",
                                      children: "How it all began..."
                                  })
                              ]
                          }),
                          (0, r.jsxs)("div", {
                              className: "relative",
                              children: [
                                  (0, r.jsx)("div", {
                                      className:
                                          "absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-valentine-red/20 -translate-x-1/2"
                                  }),
                                  (0, r.jsx)("div", {
                                      className: "space-y-12",
                                      children: e.map((e, t) =>
                                          (0, r.jsx)(
                                              $,
                                              { event: e, index: t },
                                              t
                                          )
                                      )
                                  })
                              ]
                          })
                      ]
                  })
                : null;
        }
        function $({ event: e, index: t }) {
            return (0, r.jsxs)(s.motion.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0, margin: "-100px" },
                transition: { duration: 0.6 },
                className: `relative flex flex-col md:flex-row items-center md:justify-between ${
                    t % 2 == 0 ? "md:flex-row-reverse" : ""
                }`,
                children: [
                    (0, r.jsxs)("div", {
                        className:
                            "w-full md:w-5/12 ml-12 md:ml-0 p-6 bg-white rounded-2xl shadow-sm border border-valentine-pink/20 hover:shadow-md transition-shadow",
                        children: [
                            (0, r.jsx)("span", {
                                className:
                                    "text-sm font-bold text-valentine-red mb-1 block",
                                children: e.date
                            }),
                            (0, r.jsxs)("h3", {
                                className:
                                    "text-xl font-bold text-valentine-dark mb-2 flex items-center gap-2",
                                children: [
                                    (0, r.jsx)("span", { children: e.emoji }),
                                    " ",
                                    e.title
                                ]
                            }),
                            (0, r.jsx)("p", {
                                className:
                                    "text-valentine-dark/70 text-sm leading-relaxed",
                                children: e.description
                            })
                        ]
                    }),
                    (0, r.jsx)("div", {
                        className:
                            "absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-valentine-red text-white flex items-center justify-center rounded-full shadow-lg z-10",
                        children: (0, r.jsx)(E.Heart, {
                            className: "w-4 h-4 fill-current"
                        })
                    }),
                    (0, r.jsx)("div", { className: "hidden md:block w-5/12" })
                ]
            });
        }
        var L = e.i(37902);
        let Y = [
                "You make my heart skip a beat every single day ❤️",
                "Your smile is my favorite view in the world 🌟",
                "Every moment with you feels like a beautiful dream ✨",
                "You're the reason I believe in magic 💫",
                "Your laugh is my favorite sound in the universe 🎵",
                "Being with you feels like coming home 🏡",
                "You're my today and all of my tomorrows 💕",
                "Your eyes hold galaxies I could get lost in forever 🌌",
                "You're the missing piece I never knew I needed 🧩",
                "Every love song suddenly makes sense with you 🎶",
                "You're my favorite notification 📱",
                "Your presence turns ordinary moments into memories 📸",
                "You're the plot twist I never saw coming 📖",
                "My heart does a little dance when I see you 💃",
                "You're the reason I wake up smiling ☀️",
                "You make me want to be a better person every day 🌱",
                "Your happiness is my favorite mission 🎯",
                "You're my favorite kind of chaos 🎨",
                "Every day with you is my new favorite day 📅",
                "You're the best decision I never knew I was making 💝"
            ],
            H = [
                {
                    name: "Valentine Special 1",
                    overlayUrl: "/frames/frame1.png",
                    type: "single",
                    photoCount: 1,
                    aspectRatio: 1
                },
                {
                    name: "Valentine Special 2",
                    overlayUrl: "/frames/frame2.png",
                    type: "single",
                    photoCount: 1,
                    aspectRatio: 1
                },
                {
                    name: "Love Strip",
                    border: "border-8 border-valentine-rose",
                    type: "strip",
                    aspectRatio: 0.33,
                    photoCount: 3
                }
            ];
        function B(e) {
            return (0, a.useCallback)(() => {
                let t = new Audio(`/sounds/${e}.mp3`);
                (t.volume = 0.5),
                    t.play().catch(t => {
                        console.warn(
                            `Sound file /sounds/${e}.mp3 not found or blocked.`
                        );
                    });
            }, [e]);
        }
        function W({ images: e }) {
            let t = B("flip"),
                n = (0, a.useRef)(null),
                { scrollYProgress: i } = (0, z.useScroll)({
                    target: n,
                    offset: ["start end", "end start"]
                }),
                l = (0, M.useTransform)(i, [0, 1], [100, -100]);
            return e && 0 !== e.length
                ? (0, r.jsxs)("section", {
                      ref: n,
                      className:
                          "jsx-f18043e47ee49dd4 py-24 relative overflow-hidden bg-[#fff5f5]",
                      children: [
                          (0, r.jsxs)("div", {
                              className:
                                  "jsx-f18043e47ee49dd4 absolute inset-0 pointer-events-none opacity-40",
                              children: [
                                  (0, r.jsx)("div", {
                                      className:
                                          "jsx-f18043e47ee49dd4 absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ffdde1_1px,transparent_1px)] bg-[length:20px_20px]"
                                  }),
                                  (0, r.jsx)(s.motion.div, {
                                      style: { y: l },
                                      className:
                                          "absolute top-20 right-10 text-valentine-pink/20",
                                      children: (0, r.jsx)(E.Heart, {
                                          size: 120,
                                          fill: "currentColor"
                                      })
                                  }),
                                  (0, r.jsx)(s.motion.div, {
                                      style: {
                                          y: (0, M.useTransform)(
                                              i,
                                              [0, 1],
                                              [-50, 50]
                                          )
                                      },
                                      className:
                                          "absolute bottom-40 left-10 text-valentine-pink/20",
                                      children: (0, r.jsx)(E.Heart, {
                                          size: 80,
                                          fill: "currentColor"
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsxs)("div", {
                              className:
                                  "jsx-f18043e47ee49dd4 container mx-auto px-4 relative z-10",
                              children: [
                                  (0, r.jsxs)(s.motion.div, {
                                      initial: { opacity: 0, y: 30 },
                                      whileInView: { opacity: 1, y: 0 },
                                      viewport: { once: !0 },
                                      className: "text-center mb-16",
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className:
                                                  "jsx-f18043e47ee49dd4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-4 text-valentine-rose border border-rose-100",
                                              children: [
                                                  (0, r.jsx)(I.Sparkles, {
                                                      size: 16
                                                  }),
                                                  (0, r.jsx)("span", {
                                                      className:
                                                          "jsx-f18043e47ee49dd4 text-sm font-medium uppercase tracking-wider",
                                                      children: "Our Memories"
                                                  }),
                                                  (0, r.jsx)(I.Sparkles, {
                                                      size: 16
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)("h2", {
                                              className:
                                                  "jsx-f18043e47ee49dd4 font-heading text-5xl md:text-6xl text-valentine-red drop-shadow-sm",
                                              children: "Captured Moments"
                                          }),
                                          (0, r.jsx)("p", {
                                              className:
                                                  "jsx-f18043e47ee49dd4 mt-4 text-valentine-dark/60 font-handwriting text-2xl rotate-[-2deg]",
                                              children:
                                                  "Every picture tells a story of us..."
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)("div", {
                                      className:
                                          "jsx-f18043e47ee49dd4 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 mx-auto max-w-6xl p-4",
                                      children: e.map((e, a) => {
                                          let n,
                                              i = (n = [-3, 2, -4, 3, -2, 4])[
                                                  a % n.length
                                              ];
                                          return (0, r.jsx)(
                                              s.motion.div,
                                              {
                                                  initial: {
                                                      opacity: 0,
                                                      scale: 0.8,
                                                      rotate: 0
                                                  },
                                                  whileInView: {
                                                      opacity: 1,
                                                      scale: 1,
                                                      rotate: i
                                                  },
                                                  viewport: {
                                                      once: !0,
                                                      margin: "-50px"
                                                  },
                                                  transition: {
                                                      type: "spring",
                                                      bounce: 0.4,
                                                      duration: 0.8,
                                                      delay: 0.1 * a
                                                  },
                                                  whileHover: {
                                                      scale: 1.05,
                                                      rotate: 0,
                                                      zIndex: 10,
                                                      transition: {
                                                          duration: 0.3
                                                      }
                                                  },
                                                  onMouseEnter: () => t(),
                                                  className:
                                                      "relative break-inside-avoid flip-card group cursor-pointer perspective-1000 aspect-[4/5]",
                                                  children: (0, r.jsxs)("div", {
                                                      className:
                                                          "jsx-f18043e47ee49dd4 flip-card-inner relative w-full h-full duration-700 transform-style-3d",
                                                      children: [
                                                          (0, r.jsxs)("div", {
                                                              className:
                                                                  "jsx-f18043e47ee49dd4 flip-card-front absolute w-full h-full bg-white p-4 pb-16 shadow-lg rounded-sm backface-hidden flex flex-col items-center",
                                                              children: [
                                                                  (0, r.jsx)(
                                                                      "div",
                                                                      {
                                                                          style: {
                                                                              transform: `translateX(-50%) rotate(${
                                                                                  4 *
                                                                                      Math.random() -
                                                                                  2
                                                                              }deg)`,
                                                                              clipPath:
                                                                                  "polygon(2% 0, 98% 0, 100% 100%, 0% 100%)"
                                                                          },
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-rose-100/80 backdrop-blur-sm shadow-sm z-20"
                                                                      }
                                                                  ),
                                                                  (0, r.jsxs)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 relative w-full flex-1 overflow-hidden bg-gray-50 border border-gray-100",
                                                                          children:
                                                                              [
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      A,
                                                                                      {
                                                                                          src: e,
                                                                                          alt: `Memory ${
                                                                                              a +
                                                                                              1
                                                                                          }`,
                                                                                          className:
                                                                                              "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700",
                                                                                          loading:
                                                                                              "lazy"
                                                                                      }
                                                                                  ),
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "jsx-f18043e47ee49dd4 absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 pointer-events-none"
                                                                                      }
                                                                                  )
                                                                              ]
                                                                      }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 absolute bottom-4 left-0 right-0 text-center",
                                                                          children:
                                                                              (0,
                                                                              r.jsxs)(
                                                                                  "p",
                                                                                  {
                                                                                      className:
                                                                                          "jsx-f18043e47ee49dd4 font-handwriting text-gray-500 text-xl transform -rotate-1",
                                                                                      children:
                                                                                          [
                                                                                              "Memory #",
                                                                                              a +
                                                                                                  1
                                                                                          ]
                                                                                  }
                                                                              )
                                                                      }
                                                                  )
                                                              ]
                                                          }),
                                                          (0, r.jsxs)("div", {
                                                              className:
                                                                  "jsx-f18043e47ee49dd4 flip-card-back absolute w-full h-full bg-[#fffbf0] rounded-sm shadow-lg backface-hidden rotate-y-180 flex items-center justify-center p-8 text-center border-8 border-white overflow-hidden",
                                                              children: [
                                                                  (0, r.jsx)(
                                                                      "div",
                                                                      {
                                                                          style: {
                                                                              backgroundImage:
                                                                                  "radial-gradient(#ff99aa 2px, transparent 2px)",
                                                                              backgroundSize:
                                                                                  "16px 16px"
                                                                          },
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 absolute inset-0 opacity-10"
                                                                      }
                                                                  ),
                                                                  (0, r.jsxs)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 relative z-10 flex flex-col items-center",
                                                                          children:
                                                                              [
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      E.Heart,
                                                                                      {
                                                                                          className:
                                                                                              "w-12 h-12 text-valentine-red mb-6 animate-pulse",
                                                                                          fill: "currentColor"
                                                                                      }
                                                                                  ),
                                                                                  (0,
                                                                                  r.jsxs)(
                                                                                      "p",
                                                                                      {
                                                                                          className:
                                                                                              "jsx-f18043e47ee49dd4 font-handwriting text-2xl md:text-3xl text-valentine-dark leading-relaxed",
                                                                                          children:
                                                                                              [
                                                                                                  '"',
                                                                                                  Y[
                                                                                                      a %
                                                                                                          Y.length
                                                                                                  ],
                                                                                                  '"'
                                                                                              ]
                                                                                      }
                                                                                  ),
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      "div",
                                                                                      {
                                                                                          className:
                                                                                              "jsx-f18043e47ee49dd4 mt-8 w-16 h-1 bg-valentine-red/20 rounded-full"
                                                                                      }
                                                                                  )
                                                                              ]
                                                                      }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-valentine-pink/30 rounded-tl-3xl"
                                                                      }
                                                                  ),
                                                                  (0, r.jsx)(
                                                                      "div",
                                                                      {
                                                                          className:
                                                                              "jsx-f18043e47ee49dd4 absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-valentine-pink/30 rounded-br-3xl"
                                                                      }
                                                                  )
                                                              ]
                                                          })
                                                      ]
                                                  })
                                              },
                                              a
                                          );
                                      })
                                  })
                              ]
                          }),
                          (0, r.jsx)(L.default, {
                              id: "f18043e47ee49dd4",
                              children:
                                  ".perspective-1000{perspective:1000px}.transform-style-3d{transform-style:preserve-3d}.backface-hidden{backface-visibility:hidden}.rotate-y-180,.flip-card:hover .flip-card-inner{transform:rotateY(180deg)}"
                          })
                      ]
                  })
                : null;
        }
        function V({ reasons: e }) {
            let [t, i] = (0, a.useState)(null),
                l = B("click"),
                o = B("pop");
            return (0, r.jsxs)("section", {
                className: "py-24 bg-valentine-pink/10 text-center px-4",
                children: [
                    (0, r.jsx)("h2", {
                        className:
                            "font-heading text-5xl text-valentine-red mb-8",
                        children: "Why I Love You"
                    }),
                    (0, r.jsxs)("div", {
                        className:
                            "min-h-[200px] flex flex-col items-center justify-center",
                        children: [
                            (0, r.jsx)(n.AnimatePresence, {
                                mode: "wait",
                                children: t
                                    ? (0, r.jsx)(
                                          s.motion.div,
                                          {
                                              initial: {
                                                  scale: 0.8,
                                                  opacity: 0
                                              },
                                              animate: { scale: 1, opacity: 1 },
                                              exit: { scale: 0.8, opacity: 0 },
                                              className:
                                                  "mb-8 p-6 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto border-2 border-valentine-pink",
                                              children: (0, r.jsxs)("p", {
                                                  className:
                                                      "text-2xl font-body text-valentine-red font-bold",
                                                  children: ['"', t, '"']
                                              })
                                          },
                                          t
                                      )
                                    : (0, r.jsx)("div", {
                                          className:
                                              "mb-8 text-valentine-dark/50 italic",
                                          children: "Click below to find out..."
                                      })
                            }),
                            (0, r.jsxs)(s.motion.button, {
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.95 },
                                onClick: () => {
                                    l(),
                                        (0, R.default)({
                                            particleCount: 100,
                                            spread: 70,
                                            origin: { y: 0.6 },
                                            colors: [
                                                "#FFD1DC",
                                                "#990000",
                                                "#FFFFFF"
                                            ]
                                        }),
                                        o(),
                                        e && e.length > 0
                                            ? i(
                                                  e[
                                                      Math.floor(
                                                          Math.random() *
                                                              e.length
                                                      )
                                                  ]
                                              )
                                            : i("Because you are you! ❤️");
                                },
                                className:
                                    "bg-rose-600 hover:bg-rose-700 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 border-4 border-white/50 backdrop-blur-sm transition-all",
                                children: [
                                    (0, r.jsx)(E.Heart, {
                                        className:
                                            "w-6 h-6 fill-current animate-pulse"
                                    }),
                                    "Click to Feel Loved"
                                ]
                            })
                        ]
                    })
                ]
            });
        }
        var q = e.i(63488),
            G = e.i(75254);
        let X = (0, G.default)("x", [
                ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
                ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
            ]),
            J = [
                {
                    label: "You Miss Me",
                    message:
                        "Remember that I am always with you in spirit. Close your eyes and feel my hug. I love you! ❤️"
                },
                {
                    label: "You're Sad",
                    message:
                        "It's okay to be sad sometimes. I'm here for you. Take a deep breath, and know that this too shall pass. You are strong and loved."
                },
                {
                    label: "You're Happy",
                    message:
                        "Yay! I'm so happy that you're happy! Keep smiling, it looks beautiful on you. 😊"
                },
                {
                    label: "You Can't Sleep",
                    message:
                        "Count our memories instead of sheep. Think of our best dates and how much fun we have. Sweet dreams my love. 🌙"
                }
            ];
        function Q({ letters: e }) {
            let t = e && e.length > 0 ? e : J,
                [i, l] = (0, a.useState)(null);
            return t && 0 !== t.length
                ? (0, r.jsxs)("section", {
                      className:
                          "py-24 container mx-auto px-4 bg-[#fdf6f6] relative overflow-hidden",
                      children: [
                          (0, r.jsx)("div", {
                              className:
                                  "absolute inset-0 opacity-30 pointer-events-none",
                              style: {
                                  backgroundImage:
                                      "radial-gradient(#ffcad4 1px, transparent 1px)",
                                  backgroundSize: "24px 24px"
                              }
                          }),
                          (0, r.jsxs)("div", {
                              className: "relative z-10 max-w-6xl mx-auto",
                              children: [
                                  (0, r.jsxs)(s.motion.div, {
                                      initial: { opacity: 0, y: 20 },
                                      whileInView: { opacity: 1, y: 0 },
                                      viewport: { once: !0 },
                                      className: "text-center mb-16",
                                      children: [
                                          (0, r.jsx)("div", {
                                              className:
                                                  "inline-block p-3 rounded-full bg-white shadow-md mb-6 animate-bounce",
                                              children: (0, r.jsx)(q.Mail, {
                                                  className:
                                                      "w-8 h-8 text-valentine-red"
                                              })
                                          }),
                                          (0, r.jsx)("h2", {
                                              className:
                                                  "font-heading text-6xl text-valentine-red drop-shadow-sm mb-4",
                                              children: "Open When..."
                                          }),
                                          (0, r.jsx)("p", {
                                              className:
                                                  "text-xl text-valentine-dark/60 font-handwriting",
                                              children:
                                                  "Little reminders of my love for every mood"
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)("div", {
                                      className:
                                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4",
                                      children: t.map((e, t) =>
                                          (0, r.jsx)(
                                              K,
                                              {
                                                  letter: e,
                                                  index: t,
                                                  onClick: () => l(e)
                                              },
                                              t
                                          )
                                      )
                                  })
                              ]
                          }),
                          (0, r.jsx)(n.AnimatePresence, {
                              children:
                                  i &&
                                  (0, r.jsx)(Z, {
                                      letter: i,
                                      onClose: () => l(null)
                                  })
                          })
                      ]
                  })
                : null;
        }
        function K({ letter: e, index: t, onClick: a }) {
            return (0, r.jsx)(s.motion.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { delay: 0.1 * t, type: "spring" },
                whileHover: { y: -10, scale: 1.05, rotate: 0, zIndex: 10 },
                whileTap: { scale: 0.95 },
                onClick: a,
                className: "cursor-pointer group relative perspective-1000",
                style: { transform: `rotate(${t % 2 == 0 ? 2 : -2}deg)` },
                children: (0, r.jsxs)("div", {
                    className:
                        "bg-white aspect-[1.4/1] rounded-sm shadow-xl relative overflow-hidden flex flex-col items-center justify-center p-6 border-b-4 border-r-4 border-gray-200 transition-all duration-300 group-hover:shadow-2xl",
                    children: [
                        (0, r.jsx)("div", {
                            className:
                                "absolute inset-0 border-[6px] border-transparent",
                            style: {
                                borderImage:
                                    "repeating-linear-gradient(45deg, #ef4444 0, #ef4444 10px, transparent 10px, transparent 20px, #3b82f6 20px, #3b82f6 30px, transparent 30px, transparent 40px) 1"
                            }
                        }),
                        (0, r.jsx)("div", {
                            className:
                                "absolute inset-0 bg-stone-50 opacity-50",
                            style: {
                                backgroundImage:
                                    "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
                            }
                        }),
                        (0, r.jsxs)("div", {
                            className:
                                "absolute top-4 right-4 w-12 h-14 bg-rose-50 border border-rose-200 shadow-sm flex flex-col items-center justify-center p-1 transform rotate-6 group-hover:rotate-12 transition-transform",
                            children: [
                                (0, r.jsx)(E.Heart, {
                                    className:
                                        "w-6 h-6 text-rose-400 fill-rose-100"
                                }),
                                (0, r.jsx)("span", {
                                    className:
                                        "text-[0.4rem] font-bold text-rose-400 uppercase mt-1",
                                    children: "Love"
                                })
                            ]
                        }),
                        (0, r.jsx)("div", {
                            className:
                                "absolute top-4 right-12 w-16 h-16 rounded-full border-2 border-gray-300/60 flex items-center justify-center -rotate-12 opacity-70 pointer-events-none",
                            children: (0, r.jsxs)("div", {
                                className:
                                    "text-[0.5rem] text-center font-mono text-gray-400 leading-tight",
                                children: [
                                    "FEB 14",
                                    (0, r.jsx)("br", {}),
                                    "EXPRESS",
                                    (0, r.jsx)("br", {}),
                                    "DELIVERY"
                                ]
                            })
                        }),
                        (0, r.jsxs)("div", {
                            className: "z-10 text-center w-full",
                            children: [
                                (0, r.jsx)("p", {
                                    className:
                                        "font-handwriting text-gray-400 text-lg mb-1 -rotate-3 self-start text-left pl-4",
                                    children: "To: My Love"
                                }),
                                (0, r.jsx)("div", {
                                    className: "h-px w-full bg-gray-100 mb-4"
                                }),
                                (0, r.jsx)("span", {
                                    className:
                                        "font-heading text-2xl md:text-3xl text-valentine-dark leading-tight block px-2 group-hover:scale-105 transition-transform text-balance",
                                    children: e.label
                                }),
                                (0, r.jsx)("div", {
                                    className: "mt-4 flex justify-center",
                                    children: (0, r.jsx)("span", {
                                        className:
                                            "text-xs font-bold tracking-widest text-valentine-red/50 uppercase border border-valentine-red/20 px-2 py-0.5 rounded",
                                        children: "Open When"
                                    })
                                })
                            ]
                        })
                    ]
                })
            });
        }
        function Z({ letter: e, onClose: t }) {
            return (0, r.jsx)("div", {
                className:
                    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md",
                onClick: t,
                children: (0, r.jsxs)(s.motion.div, {
                    initial: { opacity: 0, scale: 0.8, rotateX: 20 },
                    animate: { opacity: 1, scale: 1, rotateX: 0 },
                    exit: { opacity: 0, scale: 0.8, rotateX: -20 },
                    transition: { type: "spring", damping: 25, stiffness: 300 },
                    onClick: e => e.stopPropagation(),
                    className:
                        "bg-[#fffdf7] max-w-lg w-full p-8 md:p-12 rounded-sm shadow-2xl relative",
                    style: {
                        boxShadow:
                            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)"
                    },
                    children: [
                        (0, r.jsx)("div", {
                            className:
                                "absolute inset-0 rounded-sm pointer-events-none opacity-30",
                            style: {
                                backgroundImage:
                                    "linear-gradient(#e5e5e5 1px, transparent 1px)",
                                backgroundSize: "100% 2rem",
                                marginTop: "4rem"
                            }
                        }),
                        (0, r.jsx)("button", {
                            onClick: t,
                            className:
                                "absolute -top-4 -right-4 bg-white text-valentine-red p-2 rounded-full shadow-lg hover:bg-valentine-red hover:text-white transition-all z-20 border border-red-100",
                            children: (0, r.jsx)(X, { size: 24 })
                        }),
                        (0, r.jsxs)("div", {
                            className: "relative z-10 h-full flex flex-col",
                            children: [
                                (0, r.jsxs)("div", {
                                    className:
                                        "text-center mb-8 pb-4 border-b-2 border-valentine-pink/20",
                                    children: [
                                        (0, r.jsx)("span", {
                                            className:
                                                "font-handwriting text-2xl text-valentine-rose block mb-2",
                                            children: "My Dearest,"
                                        }),
                                        (0, r.jsxs)("span", {
                                            className:
                                                "font-heading text-3xl text-valentine-dark",
                                            children: [
                                                "Open when ",
                                                e.label.toLowerCase()
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsx)("div", {
                                    className:
                                        "flex-1 overflow-y-auto max-h-[60vh] custom-scrollbar",
                                    children: (0, r.jsx)("p", {
                                        className:
                                            "font-handwriting text-2xl md:text-3xl text-gray-700 leading-loose whitespace-pre-wrap",
                                        children: e.message
                                    })
                                }),
                                (0, r.jsx)("div", {
                                    className: "mt-10 text-right",
                                    children: (0, r.jsxs)("div", {
                                        className:
                                            "inline-block transform -rotate-2",
                                        children: [
                                            (0, r.jsx)("p", {
                                                className:
                                                    "font-handwriting text-xl text-gray-500 mb-1",
                                                children: "With all my love,"
                                            }),
                                            (0, r.jsx)("p", {
                                                className:
                                                    "font-heading text-3xl text-valentine-red",
                                                children: "Your Valentine ❤️"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        (0, r.jsx)("div", {
                            className:
                                "absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-gray-200/50 to-transparent pointer-events-none rounded-br-sm"
                        })
                    ]
                })
            });
        }
        function ee({ bucketList: e }) {
            let [t, n] = (0, a.useState)({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            });
            return (
                (0, a.useEffect)(() => {
                    let e = new Date("2026-02-14T00:00:00"),
                        t = setInterval(() => {
                            let t = new Date(),
                                r = e.getTime() - t.getTime();
                            r > 0 &&
                                n({
                                    days: Math.floor(r / 864e5),
                                    hours: Math.floor((r / 36e5) % 24),
                                    minutes: Math.floor((r / 1e3 / 60) % 60),
                                    seconds: Math.floor((r / 1e3) % 60)
                                });
                        }, 1e3);
                    return () => clearInterval(t);
                }, []),
                (0, r.jsxs)("section", {
                    className:
                        "py-24 bg-valentine-dark text-valentine-cream relative overflow-hidden",
                    children: [
                        (0, r.jsxs)("div", {
                            className:
                                "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                            children: [
                                (0, r.jsx)("div", {
                                    className:
                                        "absolute top-20 left-20 w-64 h-64 bg-valentine-red rounded-full blur-3xl"
                                }),
                                (0, r.jsx)("div", {
                                    className:
                                        "absolute bottom-20 right-20 w-80 h-80 bg-valentine-pink rounded-full blur-3xl"
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "container mx-auto px-4 relative z-10",
                            children: [
                                (0, r.jsxs)("div", {
                                    className: "text-center mb-16",
                                    children: [
                                        (0, r.jsx)("h2", {
                                            className:
                                                "font-heading text-5xl text-valentine-pink mb-6",
                                            children: "Countdown to Valentine's"
                                        }),
                                        (0, r.jsxs)("div", {
                                            className:
                                                "flex justify-center gap-8 text-center",
                                            children: [
                                                (0, r.jsx)(et, {
                                                    val: t.days,
                                                    label: "Days"
                                                }),
                                                (0, r.jsx)(et, {
                                                    val: t.hours,
                                                    label: "Hours"
                                                }),
                                                (0, r.jsx)(et, {
                                                    val: t.minutes,
                                                    label: "Mins"
                                                }),
                                                (0, r.jsx)(et, {
                                                    val: t.seconds,
                                                    label: "Secs"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                e &&
                                    e.length > 0 &&
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)("h3", {
                                                className:
                                                    "text-center font-bold text-2xl mb-8 uppercase tracking-widest opacity-80",
                                                children: "Our Future Plans"
                                            }),
                                            (0, r.jsx)("div", {
                                                className:
                                                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                                children: e.map((e, t) =>
                                                    (0, r.jsx)(
                                                        s.motion.div,
                                                        {
                                                            initial: {
                                                                opacity: 0,
                                                                y: 20
                                                            },
                                                            whileInView: {
                                                                opacity: 1,
                                                                y: 0
                                                            },
                                                            viewport: {
                                                                once: !0
                                                            },
                                                            transition: {
                                                                delay: 0.1 * t
                                                            },
                                                            className:
                                                                "bg-white/5 backdrop-blur border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors",
                                                            children: (0,
                                                            r.jsxs)("p", {
                                                                className:
                                                                    "text-lg font-medium",
                                                                children: [
                                                                    "✨ ",
                                                                    e
                                                                ]
                                                            })
                                                        },
                                                        t
                                                    )
                                                )
                                            })
                                        ]
                                    })
                            ]
                        })
                    ]
                })
            );
        }
        function et({ val: e, label: t }) {
            return (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", {
                        className: "text-4xl md:text-6xl font-bold font-mono",
                        children: e.toString().padStart(2, "0")
                    }),
                    (0, r.jsx)("div", {
                        className:
                            "text-xs uppercase tracking-wider opacity-60 mt-2",
                        children: t
                    })
                ]
            });
        }
        function er({ message: e }) {
            let [t, i] = (0, a.useState)(0),
                [l, o] = (0, a.useState)(!1);
            return (0, r.jsxs)("footer", {
                className: "py-12 bg-white text-center relative",
                children: [
                    (0, r.jsx)("p", {
                        className: "text-valentine-dark/40 text-sm mb-4",
                        children: "Made with all my heart."
                    }),
                    (0, r.jsx)("button", {
                        onClick: () => {
                            let e = t + 1;
                            i(e),
                                5 === e &&
                                    (o(!0),
                                    P.toast.success("You found the secret! 💍"),
                                    i(0));
                        },
                        className:
                            "text-valentine-pink hover:text-valentine-red transition-colors opacity-50 hover:opacity-100",
                        children: (0, r.jsx)(E.Heart, {
                            className: "w-4 h-4 color-valentine-pink"
                        })
                    }),
                    (0, r.jsx)(n.AnimatePresence, {
                        children:
                            l &&
                            (0, r.jsx)(s.motion.div, {
                                initial: { opacity: 0, y: 50 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 50 },
                                className:
                                    "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                                onClick: () => o(!1),
                                children: (0, r.jsxs)("div", {
                                    className:
                                        "bg-white p-8 rounded-2xl max-w-md w-full text-center",
                                    onClick: e => e.stopPropagation(),
                                    children: [
                                        (0, r.jsx)("h3", {
                                            className:
                                                "font-heading text-4xl text-valentine-red mb-4",
                                            children: "Surprise! ❤️"
                                        }),
                                        (0, r.jsx)("p", {
                                            className:
                                                "text-gray-600 mb-6 text-xl",
                                            children: e || "Will you marry me?"
                                        }),
                                        (0, r.jsx)("button", {
                                            onClick: () => o(!1),
                                            className:
                                                "bg-valentine-red text-white px-6 py-2 rounded-full font-bold",
                                            children: "Yes! (Close)"
                                        })
                                    ]
                                })
                            })
                    })
                ]
            });
        }
        var ea = e.i(66698),
            es = e.i(68553),
            en = e.i(33651);
        let ei = (0, G.default)("refresh-cw", [
                [
                    "path",
                    {
                        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
                        key: "v9h5vc"
                    }
                ],
                ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
                [
                    "path",
                    {
                        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
                        key: "3uifl3"
                    }
                ],
                ["path", { d: "M8 16H3v5", key: "1cv678" }]
            ]),
            el = (0, G.default)("image", [
                [
                    "rect",
                    {
                        width: "18",
                        height: "18",
                        x: "3",
                        y: "3",
                        rx: "2",
                        ry: "2",
                        key: "1m3agn"
                    }
                ],
                ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
                [
                    "path",
                    {
                        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
                        key: "1xmnt7"
                    }
                ]
            ]),
            eo = (0, G.default)("video", [
                [
                    "path",
                    {
                        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
                        key: "ftymec"
                    }
                ],
                [
                    "rect",
                    {
                        x: "2",
                        y: "6",
                        width: "14",
                        height: "12",
                        rx: "2",
                        key: "158x01"
                    }
                ]
            ]);
        var ed = e.i(67881);
        function ec({ partnerName: t, creatorInitials: i, photos: l }) {
            let [o, d] = (0, a.useState)("camera"),
                [c, u] = (0, a.useState)(0),
                [m, h] = (0, a.useState)([]),
                [p, f] = (0, a.useState)(0),
                [x, v] = (0, a.useState)(0),
                [g, y] = (0, a.useState)(null),
                [b, w] = (0, a.useState)(!0),
                [j, N] = (0, a.useState)(null),
                k = (0, a.useRef)(null),
                S = (0, a.useRef)(null),
                _ = B("click"),
                C = B("camera"),
                P = B("success"),
                z = ((e, t = 2026) => `${e} • Valentine's ${t}`)(i);
            (0, a.useEffect)(() => {
                let e = H.findIndex(e =>
                    "strip" === o ? "strip" === e.type : "strip" !== e.type
                );
                -1 !== e && v(e);
            }, [o]);
            let M = (0, a.useCallback)(() => {
                let e = k.current?.getScreenshot(),
                    t = H[x].photoCount || 1;
                e &&
                    (h(t => [...t, e]),
                    C(),
                    t > 1
                        ? p < t - 1
                            ? (f(e => e + 1), setTimeout(() => y(3), 1500))
                            : (w(!1),
                              (0, R.default)({
                                  particleCount: 150,
                                  spread: 70,
                                  origin: { y: 0.6 },
                                  colors: ["#FF1744", "#FFD1DC", "#FFF"]
                              }))
                        : (w(!1),
                          (0, R.default)({
                              particleCount: 100,
                              spread: 70,
                              origin: { y: 0.6 }
                          })));
            }, [o, p, C, x]);
            (0, a.useEffect)(() => {
                if (null !== g) {
                    if (g > 0) {
                        let e = setTimeout(() => y(g - 1), 1e3);
                        return () => clearTimeout(e);
                    }
                    0 === g && (M(), y(null));
                }
            }, [g, M]),
                (0, a.useEffect)(() => {
                    let t = H[x],
                        r = t.photoCount || 1;
                    if (
                        (0 === m.length && "gallery" !== o) ||
                        ("strip" === o && m.length < r)
                    )
                        return;
                    let a = S.current;
                    if (!a) return;
                    let s = a.getContext("2d");
                    s &&
                        (async () => {
                            let n = [];
                            if (
                                0 ===
                                    (n = "gallery" === o ? [l[c]] : m).length ||
                                !n[0]
                            )
                                return;
                            let i = 1080,
                                d = 1080;
                            "strip" === o
                                ? ((i = 800),
                                  (d = t.aspectRatio
                                      ? i / t.aspectRatio
                                      : 2400))
                                : t.aspectRatio && (d = i / t.aspectRatio),
                                (a.width = i),
                                (a.height = d);
                            let u = s.createLinearGradient(0, 0, i, d);
                            u.addColorStop(0, "#880e4f"),
                                u.addColorStop(1, "#b71c1c"),
                                (s.fillStyle = u),
                                s.fillRect(0, 0, i, d);
                            for (let e = 0; e < i * d * 0.05; e++) {
                                let e = Math.random() * i,
                                    t = Math.random() * d;
                                (s.fillStyle = `rgba(255, 255, 255, ${
                                    0.1 * Math.random()
                                })`),
                                    s.fillRect(e, t, 2, 2);
                            }
                            s.fillStyle = "rgba(255, 255, 255, 0.08)";
                            let h = (e, t, r) => {
                                s.save(),
                                    s.translate(e, t),
                                    s.beginPath(),
                                    s.moveTo(0, 0),
                                    s.bezierCurveTo(
                                        -r / 2,
                                        -r / 2,
                                        -r,
                                        r / 3,
                                        0,
                                        r
                                    ),
                                    s.bezierCurveTo(
                                        r,
                                        r / 3,
                                        r / 2,
                                        -r / 2,
                                        0,
                                        0
                                    ),
                                    s.fill(),
                                    s.restore();
                            };
                            for (let e = 0; e < 60; e++)
                                h(
                                    Math.random() * i,
                                    Math.random() * d,
                                    60 * Math.random() + 20
                                );
                            let p = null;
                            t.overlayUrl &&
                                (((p = new Image()).crossOrigin = "anonymous"),
                                (p.src = t.overlayUrl),
                                await new Promise(e => {
                                    p
                                        ? ((p.onload = e),
                                          (p.onerror = () => {
                                              console.error(
                                                  "Failed to load overlay image:",
                                                  t.overlayUrl
                                              ),
                                                  e(null);
                                          }))
                                        : e(null);
                                }));
                            let f = "strip" === o ? 700 : 980,
                                x = "strip" === o ? 525 : 980;
                            for (let a = 0; a < n.length; a++) {
                                let l = n[a];
                                if (
                                    l.toLowerCase().endsWith(".heic") ||
                                    l.toLowerCase().endsWith(".heif")
                                )
                                    try {
                                        let t = (await e.A(208)).default,
                                            r = await fetch(l),
                                            a = await r.blob(),
                                            s = await t({
                                                blob: a,
                                                toType: "image/jpeg"
                                            }),
                                            n = Array.isArray(s) ? s[0] : s;
                                        l = URL.createObjectURL(n);
                                    } catch (e) {
                                        console.error(
                                            "HEIC conversion failed inside PhotoBooth",
                                            e
                                        );
                                    }
                                let c = new Image();
                                (c.crossOrigin = "anonymous"),
                                    (c.src = l),
                                    await new Promise(e => {
                                        (c.onload = e), (c.onerror = e);
                                    });
                                let u = (i - f) / 2,
                                    m = 50;
                                (m = r > 1 ? 300 + a * (x + 60) : (d - x) / 2),
                                    t.overlayUrl ||
                                        ((s.fillStyle = "#fff"),
                                        (s.shadowColor = "rgba(0,0,0,0.3)"),
                                        (s.shadowBlur = 20),
                                        (s.shadowOffsetX = 0),
                                        (s.shadowOffsetY = 10),
                                        s.fillRect(
                                            u - 25,
                                            m - 25,
                                            f + 50,
                                            x + 80
                                        ),
                                        (s.shadowColor = "transparent"));
                                let h = c.width,
                                    p = c.height,
                                    v = 0,
                                    g = 0,
                                    y = h,
                                    b = p,
                                    w = f / x;
                                h / p > w
                                    ? (v = (h - (y = p * w)) / 2)
                                    : (g = (p - (b = h / w)) / 2),
                                    "gallery" !== o
                                        ? (s.save(),
                                          s.translate(u + f, m),
                                          s.scale(-1, 1),
                                          s.drawImage(
                                              c,
                                              v,
                                              g,
                                              y,
                                              b,
                                              0,
                                              0,
                                              f,
                                              x
                                          ),
                                          s.restore())
                                        : s.drawImage(
                                              c,
                                              v,
                                              g,
                                              y,
                                              b,
                                              u,
                                              m,
                                              f,
                                              x
                                          ),
                                    t.overlayUrl ||
                                        ((s.strokeStyle = "rgba(0,0,0,0.1)"),
                                        (s.lineWidth = 2),
                                        s.strokeRect(u, m, f, x));
                            }
                            if (
                                (p && s.drawImage(p, 0, 0, i, d), !t.overlayUrl)
                            ) {
                                (s.fillStyle = "#FFD1DC"),
                                    (s.font = "bold 90px 'Great Vibes'"),
                                    (s.textAlign = "center"),
                                    (s.shadowColor = "rgba(0,0,0,0.5)"),
                                    (s.shadowBlur = 10),
                                    "strip" === o &&
                                        (s.fillText(
                                            "Happy Valentine's Day",
                                            i / 2,
                                            140
                                        ),
                                        (s.font = "bold 50px Arial"),
                                        (s.fillStyle = "white"),
                                        s.fillText(
                                            "LOVE IN FOCUS",
                                            i / 2,
                                            220
                                        )),
                                    (s.fillStyle = "rgba(255, 255, 255, 0.9)"),
                                    (s.font = "bold 30px Arial");
                                let e = `${z} • ${new Date().toLocaleDateString()}`;
                                s.fillText(e, i / 2, d - 60),
                                    (s.font = "70px Arial"),
                                    (s.shadowBlur = 0),
                                    s.fillText("❤️", 80, 100),
                                    s.fillText("🌹", i - 80, 100),
                                    s.fillText("💋", 80, d - 100),
                                    s.fillText("💌", i - 80, d - 100);
                            }
                            !b && "gallery" !== o && m.length >= r
                                ? N(a.toDataURL("image/png"))
                                : "gallery" === o &&
                                  N(a.toDataURL("image/png"));
                        })();
                }, [m, o, z, c, l, x, b]);
            let I = () => {
                if ((P(), !j)) return;
                let e = document.createElement("a");
                (e.download = `valentine-${t}-${Date.now()}.png`),
                    (e.href = j),
                    e.click();
            };
            return (0, r.jsx)("section", {
                className:
                    "py-20 px-4 bg-gradient-to-b from-valentine-cream to-white",
                children: (0, r.jsxs)("div", {
                    className: "max-w-6xl mx-auto",
                    children: [
                        (0, r.jsxs)(s.motion.div, {
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: !0 },
                            className: "text-center mb-12",
                            children: [
                                (0, r.jsx)("h2", {
                                    className:
                                        "text-5xl md:text-6xl font-heading text-valentine-rose mb-4",
                                    children: "Love Booth 📸"
                                }),
                                (0, r.jsx)("p", {
                                    className:
                                        "text-valentine-dark/70 max-w-2xl mx-auto",
                                    children:
                                        "Capture our love or pick a memory!"
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className:
                                "flex justify-center gap-4 mb-8 flex-wrap",
                            children: [
                                (0, r.jsxs)(ed.Button, {
                                    variant:
                                        "camera" === o ? "primary" : "outline",
                                    onClick: () => {
                                        _(), d("camera"), h([]), N(null), w(!0);
                                    },
                                    className:
                                        "camera" === o
                                            ? "bg-valentine-rose"
                                            : "",
                                    children: [
                                        (0, r.jsx)(eo, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        "Single Shot"
                                    ]
                                }),
                                (0, r.jsxs)(ed.Button, {
                                    variant:
                                        "strip" === o ? "primary" : "outline",
                                    onClick: () => {
                                        _(), d("strip"), h([]), N(null), w(!0);
                                    },
                                    className:
                                        "strip" === o
                                            ? "bg-valentine-rose"
                                            : "",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: "flex gap-1 mr-2",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "w-2 h-3 bg-current border border-current"
                                                }),
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "w-2 h-3 bg-current border border-current"
                                                }),
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "w-2 h-3 bg-current border border-current"
                                                })
                                            ]
                                        }),
                                        "Photo Strip"
                                    ]
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(ed.Button, {
                                        variant:
                                            "gallery" === o
                                                ? "primary"
                                                : "outline",
                                        onClick: () => {
                                            _(), d("gallery"), h([]), N(null);
                                        },
                                        className:
                                            "gallery" === o
                                                ? "bg-valentine-rose"
                                                : "",
                                        children: [
                                            (0, r.jsx)(el, {
                                                className: "w-4 h-4 mr-2"
                                            }),
                                            "From Gallery"
                                        ]
                                    })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "grid md:grid-cols-2 gap-8 items-start",
                            children: [
                                (0, r.jsxs)("div", {
                                    className:
                                        "relative mx-auto w-full max-w-[500px]",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: `relative aspect-square ${
                                                H[x].border
                                            } ${
                                                H[x].decoration
                                            } rounded-2xl overflow-hidden bg-black shadow-2xl transition-all duration-300 ${
                                                "strip" === o
                                                    ? "aspect-[1/3]"
                                                    : "aspect-square"
                                            }`,
                                            children: [
                                                "gallery" !== o
                                                    ? !b && m.length > 0
                                                        ? (0, r.jsx)("div", {
                                                              className:
                                                                  "w-full h-full relative flex items-center justify-center bg-valentine-cream/20",
                                                              children: j
                                                                  ? (0, r.jsx)(
                                                                        "img",
                                                                        {
                                                                            src: j,
                                                                            alt: "Final Result",
                                                                            className:
                                                                                "w-full h-full object-contain shadow-2xl"
                                                                        }
                                                                    )
                                                                  : (0, r.jsx)(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "text-valentine-rose animate-pulse font-heading text-2xl",
                                                                            children:
                                                                                "Developing Photo..."
                                                                        }
                                                                    )
                                                          })
                                                        : (0, r.jsxs)("div", {
                                                              className:
                                                                  "w-full h-full relative",
                                                              children: [
                                                                  (0, r.jsx)(
                                                                      ea.default,
                                                                      {
                                                                          audio: !1,
                                                                          ref: k,
                                                                          screenshotFormat:
                                                                              "image/jpeg",
                                                                          videoConstraints:
                                                                              {
                                                                                  facingMode:
                                                                                      "user",
                                                                                  aspectRatio: 1
                                                                              },
                                                                          className:
                                                                              "w-full h-full object-cover transform -scale-x-100"
                                                                      }
                                                                  ),
                                                                  H[x]
                                                                      .overlayUrl &&
                                                                      (0,
                                                                      r.jsx)(
                                                                          "img",
                                                                          {
                                                                              src: H[
                                                                                  x
                                                                              ]
                                                                                  .overlayUrl,
                                                                              alt: "Frame Overlay",
                                                                              className:
                                                                                  "absolute inset-0 w-full h-full object-fill pointer-events-none z-20"
                                                                          }
                                                                      ),
                                                                  "strip" ===
                                                                      o &&
                                                                      (0,
                                                                      r.jsxs)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md",
                                                                              children:
                                                                                  [
                                                                                      "Photo ",
                                                                                      p +
                                                                                          1,
                                                                                      " / 3"
                                                                                  ]
                                                                          }
                                                                      )
                                                              ]
                                                          })
                                                    : j
                                                    ? (0, r.jsx)("img", {
                                                          src: j,
                                                          alt: "Gallery Final",
                                                          className:
                                                              "w-full h-full object-contain"
                                                      })
                                                    : (0, r.jsx)("img", {
                                                          src: l[c],
                                                          alt: "Gallery selection",
                                                          className:
                                                              "w-full h-full object-cover"
                                                      }),
                                                (0, r.jsx)(n.AnimatePresence, {
                                                    children:
                                                        null !== g &&
                                                        (0, r.jsx)(
                                                            s.motion.div,
                                                            {
                                                                initial: {
                                                                    scale: 0.5,
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    scale: 1.5,
                                                                    opacity: 1
                                                                },
                                                                exit: {
                                                                    scale: 2,
                                                                    opacity: 0
                                                                },
                                                                className:
                                                                    "absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-20",
                                                                children: (0,
                                                                r.jsx)("span", {
                                                                    className:
                                                                        "text-9xl font-bold text-white drop-shadow-lg",
                                                                    children:
                                                                        g > 0
                                                                            ? g
                                                                            : "❤️"
                                                                })
                                                            },
                                                            g
                                                        )
                                                }),
                                                "strip" !== o &&
                                                    (0, r.jsx)("div", {
                                                        className:
                                                            "absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm z-10",
                                                        children: z
                                                    })
                                            ]
                                        }),
                                        (0, r.jsxs)("div", {
                                            className:
                                                "mt-6 flex flex-col gap-3",
                                            children: [
                                                "gallery" !== o &&
                                                    b &&
                                                    (0, r.jsxs)(ed.Button, {
                                                        onClick: () => {
                                                            _(),
                                                                h([]),
                                                                N(null),
                                                                f(0),
                                                                w(!0),
                                                                y(3);
                                                        },
                                                        className:
                                                            "w-full h-14 text-lg bg-valentine-deep-rose hover:bg-valentine-red rounded-full shadow-lg transform transition-transform active:scale-95",
                                                        disabled: null !== g,
                                                        children: [
                                                            (0, r.jsx)(
                                                                es.Camera,
                                                                {
                                                                    className:
                                                                        "w-6 h-6 mr-2"
                                                                }
                                                            ),
                                                            null !== g
                                                                ? "Get Ready..."
                                                                : "strip" === o
                                                                ? "Start Booth Strip"
                                                                : "❤️ Capture Moment"
                                                        ]
                                                    }),
                                                "gallery" !== o &&
                                                    !b &&
                                                    (0, r.jsxs)("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            (0, r.jsxs)(
                                                                ed.Button,
                                                                {
                                                                    onClick:
                                                                        () => {
                                                                            _(),
                                                                                h(
                                                                                    []
                                                                                ),
                                                                                N(
                                                                                    null
                                                                                ),
                                                                                w(
                                                                                    !0
                                                                                ),
                                                                                "strip" ===
                                                                                    o &&
                                                                                    f(
                                                                                        0
                                                                                    );
                                                                        },
                                                                    variant:
                                                                        "outline",
                                                                    className:
                                                                        " bg-valentine-rose flex-1",
                                                                    children: [
                                                                        (0,
                                                                        r.jsx)(
                                                                            ei,
                                                                            {
                                                                                className:
                                                                                    "w-4 h-4 mr-2"
                                                                            }
                                                                        ),
                                                                        "Retake"
                                                                    ]
                                                                }
                                                            ),
                                                            (0, r.jsxs)(
                                                                ed.Button,
                                                                {
                                                                    onClick: I,
                                                                    className:
                                                                        "flex-1 bg-valentine-rose text-white",
                                                                    children: [
                                                                        (0,
                                                                        r.jsx)(
                                                                            en.Download,
                                                                            {
                                                                                className:
                                                                                    "w-4 h-4 mr-2"
                                                                            }
                                                                        ),
                                                                        "Save"
                                                                    ]
                                                                }
                                                            )
                                                        ]
                                                    }),
                                                "gallery" === o &&
                                                    (0, r.jsxs)(ed.Button, {
                                                        onClick: I,
                                                        className:
                                                            "w-full bg-valentine-rose text-white",
                                                        children: [
                                                            (0, r.jsx)(
                                                                en.Download,
                                                                {
                                                                    className:
                                                                        "w-4 h-4 mr-2"
                                                                }
                                                            ),
                                                            "Save Frame"
                                                        ]
                                                    })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)("div", {
                                    className:
                                        "space-y-8 bg-white p-6 rounded-2xl shadow-xl border border-valentine-pink/20",
                                    children: [
                                        "gallery" === o &&
                                            (0, r.jsxs)("div", {
                                                children: [
                                                    (0, r.jsxs)("h3", {
                                                        className:
                                                            "text-xl font-bold text-valentine-dark mb-4 flex items-center gap-2",
                                                        children: [
                                                            (0, r.jsx)(el, {
                                                                className:
                                                                    "w-5 h-5 text-valentine-rose"
                                                            }),
                                                            "Choose Memory"
                                                        ]
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className:
                                                            "grid grid-cols-4 gap-3 max-h-60 overflow-y-auto p-2",
                                                        children: l.map(
                                                            (e, t) =>
                                                                (0, r.jsx)(
                                                                    "button",
                                                                    {
                                                                        onClick:
                                                                            () => {
                                                                                _(),
                                                                                    u(
                                                                                        t
                                                                                    );
                                                                            },
                                                                        className: `aspect-square rounded-lg overflow-hidden border-4 transition-all ${
                                                                            c ===
                                                                            t
                                                                                ? "border-valentine-rose scale-105 shadow-md"
                                                                                : "border-transparent hover:border-valentine-pink"
                                                                        }`,
                                                                        children:
                                                                            (0,
                                                                            r.jsx)(
                                                                                "img",
                                                                                {
                                                                                    src: e,
                                                                                    alt: `Photo ${
                                                                                        t +
                                                                                        1
                                                                                    }`,
                                                                                    className:
                                                                                        "w-full h-full object-cover"
                                                                                }
                                                                            )
                                                                    },
                                                                    t
                                                                )
                                                        )
                                                    })
                                                ]
                                            }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)("h3", {
                                                    className:
                                                        "text-xl font-bold text-valentine-dark mb-4 flex items-center gap-2",
                                                    children: [
                                                        (0, r.jsx)("span", {
                                                            className:
                                                                "text-2xl",
                                                            children: "🖼️"
                                                        }),
                                                        "Choose Frame"
                                                    ]
                                                }),
                                                (0, r.jsx)("div", {
                                                    className:
                                                        "space-y-3 max-h-[400px] overflow-y-auto pr-2",
                                                    children: H.map((e, t) =>
                                                        ("strip" === o &&
                                                            "strip" !==
                                                                e.type) ||
                                                        ("strip" !== o &&
                                                            "strip" === e.type)
                                                            ? null
                                                            : (0, r.jsx)(
                                                                  "button",
                                                                  {
                                                                      onClick:
                                                                          () => {
                                                                              _(),
                                                                                  v(
                                                                                      t
                                                                                  );
                                                                          },
                                                                      className: `w-full p-4 rounded-xl border-2 transition-all text-left relative overflow-hidden group ${
                                                                          x ===
                                                                          t
                                                                              ? "border-valentine-rose bg-valentine-rose/5"
                                                                              : "border-valentine-pink/30 hover:border-valentine-rose/50"
                                                                      }`,
                                                                      children:
                                                                          (0,
                                                                          r.jsxs)(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "flex items-center justify-between relative z-10",
                                                                                  children:
                                                                                      [
                                                                                          (0,
                                                                                          r.jsx)(
                                                                                              "span",
                                                                                              {
                                                                                                  className: `font-medium ${
                                                                                                      x ===
                                                                                                      t
                                                                                                          ? "text-valentine-rose"
                                                                                                          : "text-valentine-dark"
                                                                                                  }`,
                                                                                                  children:
                                                                                                      e.name
                                                                                              }
                                                                                          ),
                                                                                          x ===
                                                                                              t &&
                                                                                              (0,
                                                                                              r.jsx)(
                                                                                                  s
                                                                                                      .motion
                                                                                                      .div,
                                                                                                  {
                                                                                                      layoutId:
                                                                                                          "check",
                                                                                                      children:
                                                                                                          (0,
                                                                                                          r.jsx)(
                                                                                                              es.Camera,
                                                                                                              {
                                                                                                                  className:
                                                                                                                      "w-5 h-5 text-valentine-rose"
                                                                                                              }
                                                                                                          )
                                                                                                  }
                                                                                              )
                                                                                      ]
                                                                              }
                                                                          )
                                                                  },
                                                                  t
                                                              )
                                                    )
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsx)("canvas", {
                            ref: S,
                            className: "hidden",
                            width: 1080,
                            height: 1080
                        })
                    ]
                })
            });
        }
        let eu = (0, G.default)("play", [
                [
                    "path",
                    {
                        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
                        key: "10ikf1"
                    }
                ]
            ]),
            em = (0, G.default)("pause", [
                [
                    "rect",
                    {
                        x: "14",
                        y: "3",
                        width: "5",
                        height: "18",
                        rx: "1",
                        key: "kaeet6"
                    }
                ],
                [
                    "rect",
                    {
                        x: "5",
                        y: "3",
                        width: "5",
                        height: "18",
                        rx: "1",
                        key: "1wsw3u"
                    }
                ]
            ]),
            eh = (0, G.default)("volume-2", [
                [
                    "path",
                    {
                        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                        key: "uqj9uw"
                    }
                ],
                ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
                [
                    "path",
                    { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }
                ]
            ]),
            ep = (0, G.default)("volume-x", [
                [
                    "path",
                    {
                        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                        key: "uqj9uw"
                    }
                ],
                [
                    "line",
                    { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }
                ],
                [
                    "line",
                    { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }
                ]
            ]);
        function ef({ url: e }) {
            let [t, n] = (0, a.useState)(!1),
                [i, l] = (0, a.useState)(!1),
                o = (0, a.useRef)(null);
            return (
                (0, a.useEffect)(() => {
                    if (o.current) {
                        o.current.volume = 0.4;
                        let e = o.current.play();
                        void 0 !== e &&
                            e.catch(() => {
                                n(!1);
                            });
                    }
                }, []),
                (0, r.jsxs)("div", {
                    className: "fixed bottom-6 left-6 z-50",
                    children: [
                        (0, r.jsx)("audio", {
                            ref: o,
                            src: e || "/sounds/romantic.mp3",
                            loop: !0
                        }),
                        (0, r.jsxs)(s.motion.div, {
                            layout: !0,
                            initial: { y: 100, opacity: 0 },
                            animate: { y: 0, opacity: 1 },
                            className:
                                "bg-white/90 backdrop-blur-md p-2 rounded-full shadow-xl border border-valentine-pink/50 flex items-center gap-2",
                            children: [
                                (0, r.jsx)("button", {
                                    onClick: () => {
                                        o.current &&
                                            (t
                                                ? o.current.pause()
                                                : o.current.play(),
                                            n(!t));
                                    },
                                    className: `w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all ${
                                        t
                                            ? "bg-valentine-rose animate-pulse-slow"
                                            : "bg-valentine-dark"
                                    }`,
                                    children: t
                                        ? (0, r.jsx)(em, { size: 20 })
                                        : (0, r.jsx)(eu, {
                                              size: 20,
                                              className: "ml-1"
                                          })
                                }),
                                (0, r.jsxs)("div", {
                                    className: "flex items-center gap-2 px-2",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                                (0, r.jsx)("span", {
                                                    className:
                                                        "text-xs font-bold text-valentine-dark",
                                                    children: "Love Song"
                                                }),
                                                (0, r.jsx)("span", {
                                                    className:
                                                        "text-[10px] text-valentine-dark/60",
                                                    children: "Playing for you"
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)("button", {
                                            onClick: () => {
                                                o.current &&
                                                    ((o.current.muted = !i),
                                                    l(!i));
                                            },
                                            className:
                                                "p-2 text-valentine-dark hover:text-valentine-rose transition-colors rounded-full hover:bg-valentine-pink/20",
                                            children: i
                                                ? (0, r.jsx)(ep, { size: 18 })
                                                : (0, r.jsx)(eh, { size: 18 })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            );
        }
        let ex = (0, G.default)("chevron-left", [
                ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
            ]),
            ev = (0, G.default)("chevron-right", [
                ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
            ]);
        function eg({ letter: e }) {
            let [t, i] = (0, a.useState)(!1),
                [l, o] = (0, a.useState)(0),
                d = B("success");
            if (!e || !e.pages || 0 === e.pages.length) return null;
            let c = e.pages.length,
                u =
                    "string" == typeof e.pages[l]
                        ? e.pages[l]
                        : e.pages[l].content;
            return (0, r.jsx)("section", {
                className:
                    "py-20 px-4 bg-gradient-to-b from-white to-valentine-cream min-h-[600px] flex items-center justify-center",
                children: (0, r.jsx)("div", {
                    className: "max-w-4xl w-full mx-auto",
                    children: (0, r.jsx)(n.AnimatePresence, {
                        mode: "wait",
                        children: t
                            ? (0, r.jsxs)(
                                  s.motion.div,
                                  {
                                      initial: { opacity: 0, y: 50 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                          duration: 0.8,
                                          ease: "easeOut"
                                      },
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: "text-center mb-8",
                                              children: [
                                                  (0, r.jsx)("h2", {
                                                      className:
                                                          "text-4xl md:text-5xl font-heading text-valentine-rose mb-2",
                                                      children:
                                                          "A Letter From My Heart 💌"
                                                  }),
                                                  (0, r.jsxs)("p", {
                                                      className:
                                                          "text-valentine-dark/70",
                                                      children: [
                                                          "Page ",
                                                          l + 1,
                                                          " of ",
                                                          c
                                                      ]
                                                  })
                                              ]
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: "relative",
                                              children: [
                                                  (0, r.jsx)(
                                                      n.AnimatePresence,
                                                      {
                                                          mode: "wait",
                                                          children: (0, r.jsxs)(
                                                              s.motion.div,
                                                              {
                                                                  initial: {
                                                                      opacity: 0,
                                                                      rotateY:
                                                                          -90
                                                                  },
                                                                  animate: {
                                                                      opacity: 1,
                                                                      rotateY: 0
                                                                  },
                                                                  exit: {
                                                                      opacity: 0,
                                                                      rotateY: 90
                                                                  },
                                                                  transition: {
                                                                      duration: 0.4
                                                                  },
                                                                  className:
                                                                      "bg-amber-50 rounded-sm shadow-xl p-8 md:p-12 border border-amber-200 min-h-[500px] relative max-w-2xl mx-auto",
                                                                  style: {
                                                                      backgroundImage:
                                                                          "linear-gradient(#e5e5e5 1px, transparent 1px)",
                                                                      backgroundSize:
                                                                          "100% 32px",
                                                                      lineHeight:
                                                                          "32px"
                                                                  },
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "font-handwriting text-2xl md:text-3xl text-valentine-dark/90 whitespace-pre-wrap leading-[32px]",
                                                                              children:
                                                                                  u
                                                                          }
                                                                      ),
                                                                      l ===
                                                                          c -
                                                                              1 &&
                                                                          e.signature &&
                                                                          (0,
                                                                          r.jsxs)(
                                                                              "div",
                                                                              {
                                                                                  className:
                                                                                      "mt-12 text-right",
                                                                                  children:
                                                                                      [
                                                                                          (0,
                                                                                          r.jsx)(
                                                                                              "p",
                                                                                              {
                                                                                                  className:
                                                                                                      "font-heading text-3xl text-valentine-rose",
                                                                                                  children:
                                                                                                      e.signature
                                                                                              }
                                                                                          ),
                                                                                          (0,
                                                                                          r.jsx)(
                                                                                              E.Heart,
                                                                                              {
                                                                                                  className:
                                                                                                      "inline-block w-6 h-6 text-valentine-rose ml-2",
                                                                                                  fill: "currentColor"
                                                                                              }
                                                                                          )
                                                                                      ]
                                                                              }
                                                                          ),
                                                                      (0,
                                                                      r.jsx)(
                                                                          "div",
                                                                          {
                                                                              className:
                                                                                  "absolute top-4 right-4 text-valentine-red/10",
                                                                              children:
                                                                                  (0,
                                                                                  r.jsx)(
                                                                                      E.Heart,
                                                                                      {
                                                                                          className:
                                                                                              "w-20 h-20"
                                                                                      }
                                                                                  )
                                                                          }
                                                                      )
                                                                  ]
                                                              },
                                                              l
                                                          )
                                                      }
                                                  ),
                                                  (0, r.jsxs)("div", {
                                                      className:
                                                          "flex justify-between items-center mt-8 max-w-2xl mx-auto",
                                                      children: [
                                                          (0, r.jsxs)(
                                                              ed.Button,
                                                              {
                                                                  onClick:
                                                                      () => {
                                                                          d(),
                                                                              l >
                                                                                  0 &&
                                                                                  o(
                                                                                      l -
                                                                                          1
                                                                                  );
                                                                      },
                                                                  disabled:
                                                                      0 === l,
                                                                  variant:
                                                                      "ghost",
                                                                  className:
                                                                      "text-valentine-dark hover:text-valentine-rose",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          ex,
                                                                          {
                                                                              className:
                                                                                  "w-6 h-6 mr-1"
                                                                          }
                                                                      ),
                                                                      "Prev"
                                                                  ]
                                                              }
                                                          ),
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "flex gap-2",
                                                              children:
                                                                  Array.from({
                                                                      length: c
                                                                  }).map(
                                                                      (e, t) =>
                                                                          (0,
                                                                          r.jsx)(
                                                                              "button",
                                                                              {
                                                                                  onClick:
                                                                                      () =>
                                                                                          o(
                                                                                              t
                                                                                          ),
                                                                                  className: `w-2 h-2 rounded-full transition-all ${
                                                                                      t ===
                                                                                      l
                                                                                          ? "bg-valentine-rose w-6"
                                                                                          : "bg-valentine-pink/40"
                                                                                  }`
                                                                              },
                                                                              t
                                                                          )
                                                                  )
                                                          }),
                                                          (0, r.jsxs)(
                                                              ed.Button,
                                                              {
                                                                  onClick:
                                                                      () => {
                                                                          d(),
                                                                              l <
                                                                                  c -
                                                                                      1 &&
                                                                                  o(
                                                                                      l +
                                                                                          1
                                                                                  );
                                                                      },
                                                                  disabled:
                                                                      l ===
                                                                      c - 1,
                                                                  variant:
                                                                      "ghost",
                                                                  className:
                                                                      "text-valentine-dark hover:text-valentine-rose",
                                                                  children: [
                                                                      "Next",
                                                                      (0,
                                                                      r.jsx)(
                                                                          ev,
                                                                          {
                                                                              className:
                                                                                  "w-6 h-6 ml-1"
                                                                          }
                                                                      )
                                                                  ]
                                                              }
                                                          )
                                                      ]
                                                  })
                                              ]
                                          })
                                      ]
                                  },
                                  "letter"
                              )
                            : (0, r.jsx)(
                                  s.motion.div,
                                  {
                                      initial: { scale: 0.8, opacity: 0 },
                                      whileInView: { scale: 1, opacity: 1 },
                                      exit: {
                                          scale: 1.5,
                                          opacity: 0,
                                          rotate: -10
                                      },
                                      className:
                                          "flex flex-col items-center justify-center cursor-pointer group",
                                      onClick: () => {
                                          d(), i(!0);
                                      },
                                      children: (0, r.jsxs)("div", {
                                          className:
                                              "relative w-80 h-56 bg-valentine-rose shadow-2xl rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105 group-hover:-rotate-2",
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className:
                                                      "absolute top-0 left-0 w-full h-0 border-l-[160px] border-r-[160px] border-t-[100px] border-l-transparent border-r-transparent border-t-valentine-deep-rose rounded-t-lg origin-top z-10"
                                              }),
                                              (0, r.jsx)("div", {
                                                  className:
                                                      "z-20 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center shadow-md border-2 border-red-800",
                                                  children: (0, r.jsx)(
                                                      E.Heart,
                                                      {
                                                          className:
                                                              "w-6 h-6 text-red-200 fill-red-200"
                                                      }
                                                  )
                                              }),
                                              (0, r.jsx)("p", {
                                                  className:
                                                      "absolute -bottom-12 text-valentine-dark font-heading text-2xl animate-bounce",
                                                  children: "Read my heart..."
                                              })
                                          ]
                                      })
                                  },
                                  "envelope"
                              )
                    })
                })
            });
        }
        function ey() {
            let [e, t] = (0, a.useState)([]);
            return (
                (0, a.useEffect)(() => {
                    t(Array.from({ length: 15 }, (e, t) => t));
                }, []),
                (0, r.jsx)("div", {
                    className:
                        "fixed inset-0 pointer-events-none z-0 overflow-hidden",
                    children: e.map(e =>
                        (0, r.jsx)(
                            s.motion.div,
                            {
                                initial: {
                                    opacity: 0,
                                    y: "110vh",
                                    x: `${100 * Math.random()}vw`,
                                    scale: 0.5 + +Math.random()
                                },
                                animate: {
                                    opacity: [0, 0.8, 0],
                                    y: "-10vh",
                                    rotate: [0, 180, 360]
                                },
                                transition: {
                                    duration: 10 + 20 * Math.random(),
                                    repeat: 1 / 0,
                                    delay: 10 * Math.random(),
                                    ease: "linear"
                                },
                                className:
                                    "absolute text-valentine-pink/20 text-4xl",
                                children: Math.random() > 0.5 ? "❤️" : "💖"
                            },
                            e
                        )
                    )
                })
            );
        }
        var eb = e.i(20695);
        function ew() {
            let [e, t] = (0, a.useState)(!1),
                i = B("click"),
                l = B("success");
            return (0, r.jsxs)("section", {
                className:
                    "py-32 bg-valentine-cream flex flex-col items-center justify-center overflow-hidden",
                children: [
                    (0, r.jsxs)("div", {
                        className: "text-center mb-20 relative z-10",
                        children: [
                            (0, r.jsx)("h2", {
                                className:
                                    "font-heading text-4xl text-valentine-dark mb-4",
                                children: "One Last Surprise..."
                            }),
                            (0, r.jsx)("p", {
                                className: "text-valentine-rose",
                                children: "Click the box to open"
                            })
                        ]
                    }),
                    (0, r.jsx)("div", {
                        className:
                            "relative w-64 h-64 perspective-1000 cursor-pointer",
                        onClick: () => {
                            e ||
                                (i(),
                                setTimeout(() => {
                                    l(),
                                        (0, R.default)({
                                            particleCount: 200,
                                            spread: 100,
                                            origin: { y: 0.8 },
                                            colors: [
                                                "#FFD700",
                                                "#FFA500",
                                                "#FFFFFF"
                                            ]
                                        });
                                }, 500),
                                t(!0));
                        },
                        children: (0, r.jsxs)(s.motion.div, {
                            className:
                                "relative w-full h-full preserve-3d transition-transform duration-1000",
                            animate: { rotateX: 20, rotateY: 0 },
                            children: [
                                (0, r.jsxs)("div", {
                                    className:
                                        "absolute bottom-0 w-48 h-32 left-8 bg-red-900 rounded-b-xl shadow-2xl flex items-center justify-center transform-style-3d",
                                    children: [
                                        (0, r.jsx)("div", {
                                            className:
                                                "absolute inset-0 bg-gradient-to-b from-red-800 to-red-950 rounded-b-xl"
                                        }),
                                        (0, r.jsxs)(s.motion.div, {
                                            className: "relative z-10 -mt-10",
                                            initial: {
                                                scale: 0,
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: e
                                                ? {
                                                      scale: 1,
                                                      opacity: 1,
                                                      y: -40
                                                  }
                                                : {},
                                            transition: {
                                                delay: 0.5,
                                                type: "spring",
                                                stiffness: 100
                                            },
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "w-16 h-16 rounded-full border-4 border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] relative flex items-center justify-center bg-gradient-to-tr from-yellow-300 to-yellow-600",
                                                    children: [
                                                        (0, r.jsx)("div", {
                                                            className:
                                                                "w-14 h-14 rounded-full bg-red-900/50"
                                                        }),
                                                        " "
                                                    ]
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className:
                                                        "absolute -top-6 left-1/2 transform -translate-x-1/2",
                                                    children: [
                                                        (0, r.jsx)(
                                                            s.motion.div,
                                                            {
                                                                animate: {
                                                                    rotate: [
                                                                        0, 10,
                                                                        -10, 0
                                                                    ]
                                                                },
                                                                transition: {
                                                                    repeat:
                                                                        1 / 0,
                                                                    duration: 2,
                                                                    repeatDelay: 3
                                                                },
                                                                className:
                                                                    "w-8 h-8 bg-blue-100 rotate-45 shadow-[0_0_20px_rgba(255,255,255,0.8)] border border-white"
                                                            }
                                                        ),
                                                        (0, r.jsx)(I.Sparkles, {
                                                            className:
                                                                "absolute -top-4 -right-4 text-yellow-200 w-6 h-6 animate-pulse"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(s.motion.div, {
                                    className:
                                        "absolute bottom-[128px] w-48 h-12 left-8 bg-red-800 rounded-t-xl origin-bottom transform-style-3d shadow-xl z-20",
                                    initial: { rotateX: 0 },
                                    animate: { rotateX: e ? -110 : 0 },
                                    transition: {
                                        duration: 1.5,
                                        type: "spring",
                                        bounce: 0.2
                                    },
                                    children: [
                                        (0, r.jsx)("div", {
                                            className:
                                                "absolute inset-0 bg-gradient-to-t from-red-800 to-red-700 rounded-t-xl border-b border-red-900"
                                        }),
                                        (0, r.jsx)("div", {
                                            className:
                                                "absolute inset-0 bg-red-950 rounded-t-xl transform rotateX-180 translate-z-[-1px]"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)(n.AnimatePresence, {
                        children:
                            e &&
                            (0, r.jsxs)(s.motion.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 1.5 },
                                className: "mt-12 text-center",
                                children: [
                                    (0, r.jsx)("h3", {
                                        className:
                                            "font-heading text-5xl text-valentine-red mb-4",
                                        children: "Will you be my Valentine?"
                                    }),
                                    (0, r.jsx)("div", {
                                        className: "flex gap-4 justify-center",
                                        children: (0, r.jsx)(s.motion.button, {
                                            whileHover: { scale: 1.1 },
                                            whileTap: { scale: 0.9 },
                                            className:
                                                "bg-valentine-deep-rose text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg",
                                            onClick: () => {
                                                (0, R.default)({
                                                    particleCount: 300,
                                                    spread: 100,
                                                    startVelocity: 45
                                                }),
                                                    l();
                                            },
                                            children: "YES! 💖"
                                        })
                                    })
                                ]
                            })
                    })
                ]
            });
        }
        function ej() {
            let [e, t] = (0, a.useState)("idle"),
                [i, l] = (0, a.useState)(0),
                o = B("success"),
                d = () => {
                    o(),
                        t("success"),
                        (0, R.default)({
                            particleCount: 150,
                            spread: 70,
                            origin: { y: 0.6 },
                            colors: ["#FF1744", "#FF80AB", "#FFFFFF"]
                        });
                },
                c = () => {
                    t("angry"), l(e => e + 1);
                },
                u = i % 2 == 0;
            return (0, r.jsx)("section", {
                className: "py-20 px-4 bg-white/50 backdrop-blur-sm",
                children: (0, r.jsx)("div", {
                    className: "max-w-2xl mx-auto text-center",
                    children: (0, r.jsxs)(n.AnimatePresence, {
                        mode: "wait",
                        children: [
                            "idle" === e &&
                                (0, r.jsxs)(
                                    s.motion.div,
                                    {
                                        initial: { opacity: 0, scale: 0.9 },
                                        animate: { opacity: 1, scale: 1 },
                                        exit: { opacity: 0, scale: 0.9 },
                                        className: "flex flex-col items-center",
                                        children: [
                                            (0, r.jsx)("h2", {
                                                className:
                                                    "text-4xl md:text-5xl font-heading text-valentine-rose mb-8",
                                                children:
                                                    "Will you be my Valentine? 🌹"
                                            }),
                                            (0, r.jsx)("div", {
                                                className:
                                                    "w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-valentine-pink/20 bg-white",
                                                children: (0, r.jsx)("iframe", {
                                                    src: "https://tenor.com/embed/8582185015401102169",
                                                    className:
                                                        "w-full h-full border-0 pointer-events-none",
                                                    allowFullScreen: !0
                                                })
                                            }),
                                            (0, r.jsxs)("div", {
                                                className:
                                                    "flex gap-4 justify-center",
                                                children: [
                                                    (0, r.jsx)(ed.Button, {
                                                        onClick: c,
                                                        className:
                                                            "bg-gray-400 hover:bg-gray-500 text-white px-8 py-6 text-xl rounded-full transition-transform hover:scale-105",
                                                        children: "No 😢"
                                                    }),
                                                    (0, r.jsx)(ed.Button, {
                                                        onClick: d,
                                                        className:
                                                            "bg-valentine-deep-rose hover:bg-valentine-deep-rose text-white px-10 py-6 text-xl rounded-full shadow-lg transition-transform hover:scale-110 animate-pulse",
                                                        children: "Yes! ❤️"
                                                    })
                                                ]
                                            })
                                        ]
                                    },
                                    "idle"
                                ),
                            "angry" === e &&
                                (0, r.jsxs)(
                                    s.motion.div,
                                    {
                                        initial: { opacity: 0, x: 50 },
                                        animate: { opacity: 1, x: 0 },
                                        exit: { opacity: 0, x: -50 },
                                        className: "flex flex-col items-center",
                                        children: [
                                            (0, r.jsx)("h2", {
                                                className:
                                                    "text-4xl md:text-5xl font-heading text-red-600 mb-4",
                                                children: u
                                                    ? "Really? Again?! 🐻"
                                                    : "How could you?! 😡"
                                            }),
                                            (0, r.jsx)("p", {
                                                className:
                                                    "text-xl text-gray-600 mb-8",
                                                children: u
                                                    ? "You're breaking my heart... 💔"
                                                    : "Wrong answer! Try again before I cry..."
                                            }),
                                            (0, r.jsx)("div", {
                                                className:
                                                    "w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-red-200 bg-white",
                                                children: (0, r.jsx)("iframe", {
                                                    src: `https://tenor.com/embed/${
                                                        u
                                                            ? "564946691775133937"
                                                            : "2232603094824498482"
                                                    }`,
                                                    className:
                                                        "w-full h-full border-0 pointer-events-none",
                                                    allowFullScreen: !0
                                                })
                                            }),
                                            (0, r.jsxs)("div", {
                                                className:
                                                    "flex gap-4 justify-center",
                                                children: [
                                                    (0, r.jsx)(
                                                        s.motion.button,
                                                        {
                                                            onClick: c,
                                                            whileTap: {
                                                                x: [
                                                                    0, 10, -10,
                                                                    10, -10, 0
                                                                ]
                                                            },
                                                            className:
                                                                "bg-red-100 hover:bg-red-200 text-red-600 px-8 py-6 text-xl rounded-full font-bold border-2 border-red-200",
                                                            children: "No 😠"
                                                        }
                                                    ),
                                                    (0, r.jsx)(ed.Button, {
                                                        onClick: d,
                                                        className:
                                                            "bg-valentine-deep-rose hover:bg-valentine-deep-rose text-white px-10 py-6 text-xl rounded-full shadow-lg transition-transform hover:scale-110",
                                                        children:
                                                            "Okay, YES! 💖"
                                                    })
                                                ]
                                            })
                                        ]
                                    },
                                    "angry"
                                ),
                            "success" === e &&
                                (0, r.jsxs)(
                                    s.motion.div,
                                    {
                                        initial: { opacity: 0, scale: 0.5 },
                                        animate: { opacity: 1, scale: 1 },
                                        className: "flex flex-col items-center",
                                        children: [
                                            (0, r.jsxs)("h2", {
                                                className:
                                                    "text-5xl md:text-6xl font-heading text-valentine-rose mb-4 flex items-center gap-3",
                                                children: [
                                                    (0, r.jsx)(I.Sparkles, {
                                                        className:
                                                            "text-yellow-400 animate-spin-slow"
                                                    }),
                                                    "Yayyyyyy!",
                                                    (0, r.jsx)(I.Sparkles, {
                                                        className:
                                                            "text-yellow-400 animate-spin-slow"
                                                    })
                                                ]
                                            }),
                                            (0, r.jsx)("p", {
                                                className:
                                                    "text-2xl text-valentine-dark mb-8 font-body itaic",
                                                children:
                                                    '"I knew you\'d say yes! I love you! ❤️"'
                                            }),
                                            (0, r.jsx)("div", {
                                                className:
                                                    "w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-valentine-rose bg-white",
                                                children: (0, r.jsx)("iframe", {
                                                    src: "https://tenor.com/embed/13697198850853500144",
                                                    className:
                                                        "w-full h-full border-0 pointer-events-none",
                                                    allowFullScreen: !0
                                                })
                                            })
                                        ]
                                    },
                                    "success"
                                )
                        ]
                    })
                })
            });
        }
        function eN({ page: e }) {
            let t = e.content.sender_name
                ? e.content.sender_name
                      .split(" ")
                      .map(e => e[0])
                      .join("")
                      .substring(0, 2)
                      .toUpperCase()
                : "❤️";
            return (0, r.jsxs)("div", {
                className: "bg-valentine-cream min-h-screen overflow-x-hidden",
                children: [
                    (0, r.jsx)(eb.default, {}),
                    (0, r.jsx)(ey, {}),
                    (0, r.jsx)(ef, { url: e.content.music_url }),
                    (0, r.jsx)(U, {
                        partnerName: e.content.partner_name,
                        heroImage: e.hero_image,
                        startDate: e.content.timeline?.[0]?.date
                    }),
                    e.content.love_letter &&
                        (0, r.jsx)(eg, { letter: e.content.love_letter }),
                    (0, r.jsx)(D, { events: e.content.timeline }),
                    (0, r.jsx)(W, { images: e.gallery_images }),
                    (0, r.jsx)(V, { reasons: e.content.reasons }),
                    (0, r.jsx)(Q, { letters: e.content.open_when }),
                    (0, r.jsx)(ec, {
                        partnerName: e.content.partner_name,
                        creatorInitials: t,
                        photos: e.gallery_images
                    }),
                    (0, r.jsx)(ee, { bucketList: e.content.bucket_list }),
                    (0, r.jsx)(ej, {}),
                    (0, r.jsx)(ew, {}),
                    (0, r.jsx)(er, { message: e.content.easter_egg })
                ]
            });
        }
        let ek = (0, G.default)("credit-card", [
            [
                "rect",
                {
                    width: "20",
                    height: "14",
                    x: "2",
                    y: "5",
                    rx: "2",
                    key: "ynyp8z"
                }
            ],
            ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
        ]);
        function eS({ page: e, onPayNow: t }) {
            return (0, r.jsxs)("div", {
                className: "relative min-h-screen bg-valentine-cream/50",
                children: [
                    (0, r.jsx)("div", {
                        className:
                            "fixed top-0 left-0 right-0 bg-valentine-rose text-white text-center py-2 z-50 font-bold shadow-md animate-pulse",
                        children: "👀 Preview Mode - Only you can see this page"
                    }),
                    (0, r.jsx)("div", {
                        className: "locked-overlay pt-10",
                        children: (0, r.jsx)(eN, { page: e })
                    }),
                    (0, r.jsx)(s.motion.div, {
                        initial: { opacity: 0, y: 50 },
                        animate: { opacity: 1, y: 0 },
                        transition: { delay: 0.5 },
                        className:
                            "fixed bottom-6 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 z-50 w-auto md:w-full md:max-w-xl",
                        children: (0, r.jsxs)("div", {
                            className:
                                "bg-white/95 backdrop-blur-sm border-2 border-valentine-rose p-4 md:p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6",
                            children: [
                                (0, r.jsx)("div", {
                                    className:
                                        "bg-valentine-rose/10 p-3 rounded-full hidden md:block",
                                    children: (0, r.jsx)(i.Lock, {
                                        className: "w-8 h-8 text-valentine-rose"
                                    })
                                }),
                                (0, r.jsxs)("div", {
                                    className:
                                        "flex-1 text-center md:text-left",
                                    children: [
                                        (0, r.jsx)("h3", {
                                            className:
                                                "font-bold text-xl text-gray-900 mb-1",
                                            children: "Unlock Full Access"
                                        }),
                                        (0, r.jsxs)("p", {
                                            className:
                                                "text-gray-600 text-sm md:text-base leading-snug",
                                            children: [
                                                "Pay ",
                                                (0, r.jsx)("span", {
                                                    className:
                                                        "font-bold text-valentine-rose",
                                                    children: "₹199"
                                                }),
                                                " to remove the blur, get your shareable link, and surprise your partner!"
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)("button", {
                                    onClick: t,
                                    className:
                                        "w-full md:w-auto bg-valentine-rose hover:bg-valentine-deep-rose text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap",
                                    children: [
                                        (0, r.jsx)(ek, {
                                            className: "w-5 h-5"
                                        }),
                                        "Pay Now"
                                    ]
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)("div", {
                        className:
                            "fixed inset-0 pointer-events-none z-40 overflow-hidden opacity-20 flex flex-wrap content-center justify-center gap-12 rotate-[-15deg]",
                        children: Array.from({ length: 12 }).map((e, t) =>
                            (0, r.jsx)(
                                "div",
                                {
                                    className:
                                        "text-6xl font-black text-gray-400 select-none",
                                    children: "PREVIEW"
                                },
                                t
                            )
                        )
                    })
                ]
            });
        }
        var e_ = e.i(43531),
            eC = e.i(62031),
            eP = e.i(74886),
            ez = e.i(78917),
            eM = e.i(15833),
            eR = e.i(55749);
        function eI({ slug: e, password: t, email: a }) {
            let n = `https://valentinegift.site/love/${e}`,
                i =
                    encodeURIComponent(`Hey! I made something special for you... ❤️

Open this: ${n}
Password: ${t}

Hope you love it! 🥰`),
                l = async () => {
                    try {
                        let e = document.getElementById("credential-card");
                        if (!e) return;
                        let t = e.style.cssText;
                        (e.style.padding = "40px"),
                            (e.style.backgroundColor = "#ffffff");
                        let r = await (0, eM.default)(e, {
                            scale: 2,
                            useCORS: !0,
                            logging: !1,
                            backgroundColor: "#ffffff"
                        });
                        e.style.cssText = t;
                        let a = r.toDataURL("image/png"),
                            s = new eR.default("p", "mm", "a4"),
                            n = s.internal.pageSize.getWidth(),
                            i = (r.height * n) / r.width;
                        s.addImage(a, "PNG", 0, 0, n, i),
                            s.save("valentine-gift-credentials.pdf"),
                            P.toast.success("Credentials downloaded!");
                    } catch (e) {
                        console.error("PDF generation failed:", e),
                            P.toast.error(
                                "Failed to download PDF. Please try checking browser permissions."
                            );
                    }
                };
            return (0, r.jsx)("main", {
                className:
                    "min-h-screen bg-valentine-cream py-12 px-4 flex items-center justify-center",
                children: (0, r.jsxs)(s.motion.div, {
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    className:
                        "max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-8 text-center",
                    children: [
                        (0, r.jsx)("div", {
                            className:
                                "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: (0, r.jsx)(e_.Check, {
                                className: "w-10 h-10 text-green-600"
                            })
                        }),
                        (0, r.jsx)("h1", {
                            className:
                                "text-3xl font-heading font-bold text-valentine-dark mb-2",
                            children: "Payment Successful! 🎉"
                        }),
                        (0, r.jsx)("p", {
                            className: "text-gray-600 mb-4",
                            children:
                                "Your Valentine's website is now unlocked and ready to share."
                        }),
                        (0, r.jsx)("div", {
                            className: "mb-8 animate-fade-in-up",
                            children: (0, r.jsxs)("span", {
                                className:
                                    "inline-flex items-center gap-2 text-sm text-rose-700 font-medium bg-rose-50 px-4 py-2 rounded-full border border-rose-100 shadow-sm",
                                children: [
                                    (0, r.jsx)(q.Mail, {
                                        className: "w-4 h-4"
                                    }),
                                    "Credentials sent to ",
                                    a
                                ]
                            })
                        }),
                        (0, r.jsxs)("div", {
                            id: "credential-card",
                            className:
                                "rounded-xl p-8 mb-8 relative border-2 border-dashed",
                            style: {
                                backgroundColor: "#f8fafc",
                                borderColor: "#e2e8f0"
                            },
                            children: [
                                (0, r.jsx)("div", {
                                    className:
                                        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-sm font-bold border rounded-full",
                                    style: {
                                        backgroundColor: "#ffffff",
                                        color: "#64748b",
                                        borderColor: "#e2e8f0"
                                    },
                                    children: "CREDENTIALS"
                                }),
                                (0, r.jsxs)("div", {
                                    className: "mb-6",
                                    children: [
                                        (0, r.jsx)("p", {
                                            className:
                                                "text-sm font-bold uppercase tracking-wider mb-1",
                                            style: { color: "#6b7280" },
                                            children: "Website Link"
                                        }),
                                        (0, r.jsx)("a", {
                                            href: n,
                                            target: "_blank",
                                            className:
                                                "text-2xl md:text-3xl font-bold hover:underline break-all",
                                            style: { color: "#e11d48" },
                                            children: n
                                        })
                                    ]
                                }),
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)("p", {
                                            className:
                                                "text-sm font-bold uppercase tracking-wider mb-1",
                                            style: { color: "#6b7280" },
                                            children: "Password"
                                        }),
                                        (0, r.jsx)("div", {
                                            className:
                                                "text-4xl font-mono font-bold tracking-widest",
                                            style: { color: "#1e293b" },
                                            children: t
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className:
                                "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8",
                            children: [
                                (0, r.jsxs)(ed.Button, {
                                    onClick: () =>
                                        window.open(
                                            `https://wa.me/?text=${i}`,
                                            "_blank"
                                        ),
                                    className:
                                        "bg-[#25D366] hover:bg-[#128C7E] text-white h-14 text-lg",
                                    children: [
                                        (0, r.jsx)(eC.Share2, {
                                            className: "w-5 h-5 mr-2"
                                        }),
                                        "Share on WhatsApp"
                                    ]
                                }),
                                (0, r.jsxs)(ed.Button, {
                                    onClick: l,
                                    variant: "outline",
                                    className: "border-slate-300 h-14 text-lg",
                                    children: [
                                        (0, r.jsx)(en.Download, {
                                            className: "w-5 h-5 mr-2"
                                        }),
                                        "Download Credentials"
                                    ]
                                })
                            ]
                        }),
                        (0, r.jsxs)("div", {
                            className: "flex justify-center gap-4",
                            children: [
                                (0, r.jsxs)(ed.Button, {
                                    variant: "ghost",
                                    onClick: () => {
                                        navigator.clipboard
                                            .writeText(`Link: ${n}
Password: ${t}`),
                                            P.toast.success(
                                                "Copied to clipboard!"
                                            );
                                    },
                                    children: [
                                        (0, r.jsx)(eP.Copy, {
                                            className: "w-4 h-4 mr-2"
                                        }),
                                        " Copy Details"
                                    ]
                                }),
                                (0, r.jsxs)(ed.Button, {
                                    variant: "ghost",
                                    onClick: () => window.open(n, "_blank"),
                                    className:
                                        "text-rose-600 hover:underline hover:bg-rose-50",
                                    children: [
                                        "Open Website ",
                                        (0, r.jsx)(ez.ExternalLink, {
                                            className: "w-4 h-4 ml-1"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            });
        }
        function eE({ page: e }) {
            let [t, l] = (0, a.useState)(!1),
                [o, d] = (0, a.useState)(""),
                [c, u] = (0, a.useState)(!1),
                [m, h] = (0, a.useState)(0),
                [p, f] = (0, a.useState)(!1);
            if (!e.is_paid && !p) {
                let t = async () => {
                    let t = P.toast.loading("Initiating payment...");
                    try {
                        let r = await fetch("/api/create-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({})
                        });
                        if (!r.ok) throw Error("Failed to create order");
                        let a = await r.json();
                        if (void 0 === window.Razorpay)
                            throw Error("Razorpay not loaded. Please refresh.");
                        P.toast.dismiss(t);
                        let s = {
                                key: "rzp_live_S0GESimfYBZEJD",
                                amount: a.amount,
                                currency: a.currency,
                                name: "ValentineWeek",
                                description: "Unlock your Love Page",
                                order_id: a.id,
                                handler: async function (t) {
                                    let r = P.toast.loading(
                                        "Verifying payment..."
                                    );
                                    try {
                                        let a = await fetch(
                                                "/api/verify-payment",
                                                {
                                                    method: "POST",
                                                    body: JSON.stringify({
                                                        razorpay_order_id:
                                                            t.razorpay_order_id,
                                                        razorpay_payment_id:
                                                            t.razorpay_payment_id,
                                                        razorpay_signature:
                                                            t.razorpay_signature,
                                                        slug: e.slug
                                                    })
                                                }
                                            ),
                                            s = await a.json();
                                        P.toast.dismiss(r),
                                            s.success
                                                ? (P.toast.success(
                                                      "Payment Successful! Check your email for details."
                                                  ),
                                                  f(!0))
                                                : P.toast.error(
                                                      "Payment verification failed."
                                                  );
                                    } catch (e) {
                                        P.toast.dismiss(r),
                                            P.toast.error(
                                                "Verification error occurred."
                                            );
                                    }
                                },
                                prefill: {
                                    name: e.content?.sender_name || "Creator",
                                    email: e.content?.email || "",
                                    contact: e.content?.phone_number || ""
                                },
                                theme: { color: "#990000" }
                            },
                            n = new window.Razorpay(s);
                        n.on("payment.failed", function (e) {
                            P.toast.dismiss(t),
                                P.toast.error(e.error.description);
                        }),
                            n.open();
                    } catch (e) {
                        console.error("Payment error:", e),
                            P.toast.dismiss(t),
                            P.toast.error(
                                "Something went wrong. Please try again."
                            );
                    }
                };
                return (0, r.jsx)(eS, { page: e, onPayNow: t });
            }
            if (p)
                return (0, r.jsx)(eI, {
                    slug: e.slug,
                    password: e.password_hash,
                    email: e.content?.email || ""
                });
            let x = e => {
                o.length < 8 && d(o + e);
            };
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(P.Toaster, { position: "top-center" }),
                    e.content.music_url &&
                        (0, r.jsx)("div", {
                            className: "hidden",
                            children: (0, r.jsx)(C, {
                                url: e.content.music_url,
                                playing: c,
                                volume: 0.5,
                                loop: !0
                            })
                        }),
                    (0, r.jsx)(n.AnimatePresence, {
                        children: t
                            ? (0, r.jsx)(
                                  s.motion.div,
                                  {
                                      initial: { opacity: 0 },
                                      animate: { opacity: 1 },
                                      transition: { duration: 1, delay: 0.5 },
                                      children: (0, r.jsx)(eN, { page: e })
                                  },
                                  "main-content"
                              )
                            : (0, r.jsx)(
                                  s.motion.div,
                                  {
                                      exit: {
                                          scale: 1.5,
                                          opacity: 0,
                                          rotateY: -90,
                                          transition: { duration: 1.5 }
                                      },
                                      className:
                                          "fixed inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-100 flex items-center justify-center z-50 perspective-1000",
                                      children: (0, r.jsxs)(s.motion.div, {
                                          initial: { scale: 0.9, opacity: 0 },
                                          animate: { scale: 1, opacity: 1 },
                                          className:
                                              "relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-rose-200 w-full max-w-sm",
                                          style: {
                                              transformStyle: "preserve-3d"
                                          },
                                          children: [
                                              (0, r.jsxs)("div", {
                                                  className: "text-center mb-6",
                                                  children: [
                                                      (0, r.jsx)(i.Lock, {
                                                          className:
                                                              "w-8 h-8 text-rose-500 mx-auto mb-2"
                                                      }),
                                                      (0, r.jsx)("h1", {
                                                          className:
                                                              "text-2xl font-heading text-rose-600",
                                                          children: "The Vault"
                                                      }),
                                                      (0, r.jsx)("p", {
                                                          className:
                                                              "text-xs text-slate-400 uppercase tracking-widest mt-1",
                                                          children:
                                                              "Enter Secret Date"
                                                      }),
                                                      "jenilia-526" ===
                                                          e.slug &&
                                                          (0, r.jsx)("div", {
                                                              className:
                                                                  "mt-2 bg-yellow-50 border border-yellow-200 rounded px-2 py-1 inline-block",
                                                              children: (0,
                                                              r.jsxs)("p", {
                                                                  className:
                                                                      "text-xs text-yellow-600",
                                                                  children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                          "span",
                                                                          {
                                                                              className:
                                                                                  "font-bold",
                                                                              children:
                                                                                  "DEMO PASS:"
                                                                          }
                                                                      ),
                                                                      " 123"
                                                                  ]
                                                              })
                                                          })
                                                  ]
                                              }),
                                              (0, r.jsx)(s.motion.div, {
                                                  animate: {
                                                      x:
                                                          m % 2 == 0
                                                              ? 0
                                                              : [
                                                                    0, -10, 10,
                                                                    -10, 10, 0
                                                                ]
                                                  },
                                                  className:
                                                      "bg-rose-50 border border-rose-100 rounded-lg p-4 mb-6 text-center h-16 flex items-center justify-center inner-shadow-sm",
                                                  children: (0, r.jsx)("span", {
                                                      className:
                                                          "text-3xl text-rose-600 font-mono tracking-[0.5em] h-8 block",
                                                      children:
                                                          o
                                                              .split("")
                                                              .map(() => "•")
                                                              .join("") ||
                                                          (0, r.jsx)("span", {
                                                              className:
                                                                  "opacity-30 text-slate-400 text-sm tracking-normal",
                                                              children:
                                                                  "DDMMYYYY"
                                                          })
                                                  })
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className:
                                                      "grid grid-cols-3 gap-3 mb-6",
                                                  children: [
                                                      [
                                                          1, 2, 3, 4, 5, 6, 7,
                                                          8, 9
                                                      ].map(e =>
                                                          (0, r.jsx)(
                                                              "button",
                                                              {
                                                                  onClick: () =>
                                                                      x(
                                                                          e.toString()
                                                                      ),
                                                                  className:
                                                                      "h-16 w-16 mx-auto rounded-full bg-white hover:bg-rose-50 border border-slate-100 hover:border-rose-200 text-slate-700 text-xl font-medium transition-all active:scale-95 flex items-center justify-center shadow-sm",
                                                                  children: e
                                                              },
                                                              e
                                                          )
                                                      ),
                                                      (0, r.jsx)("div", {}),
                                                      " ",
                                                      (0, r.jsx)("button", {
                                                          onClick: () => x("0"),
                                                          className:
                                                              "h-16 w-16 mx-auto rounded-full bg-white hover:bg-rose-50 border border-slate-100 hover:border-rose-200 text-slate-700 text-xl font-medium transition-all active:scale-95 flex items-center justify-center shadow-sm",
                                                          children: "0"
                                                      }),
                                                      (0, r.jsx)("button", {
                                                          onClick: () => {
                                                              d(o.slice(0, -1));
                                                          },
                                                          className:
                                                              "h-16 w-16 mx-auto rounded-full text-rose-300 hover:text-rose-500 flex items-center justify-center transition-colors",
                                                          children: "⌫"
                                                      })
                                                  ]
                                              }),
                                              (0, r.jsx)("button", {
                                                  onClick: () => {
                                                      o === e.password_hash ||
                                                      "PREVIEW_PASS" ===
                                                          e.password_hash
                                                          ? (l(!0),
                                                            u(!0),
                                                            P.toast.success(
                                                                "Welcome, my love! ❤️"
                                                            ))
                                                          : (P.toast.error(
                                                                "Incorrect Code."
                                                            ),
                                                            h(e => e + 1),
                                                            d(""));
                                                  },
                                                  disabled: 0 === o.length,
                                                  className:
                                                      "w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-rose-200 border-t border-white/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                  children: "UNLOCK GIFT"
                                              })
                                          ]
                                      })
                                  },
                                  "lock-screen"
                              )
                    })
                ]
            });
        }
        e.s(["default", () => eE], 63268);
    }
]);
