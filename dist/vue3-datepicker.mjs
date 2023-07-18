(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v3dp__popout[data-v-902ed860]{z-index:10;position:absolute;text-align:center;width:17.5em;background-color:var(--popout-bg-color);box-shadow:var(--box-shadow);border-radius:var(--border-radius);padding:8px 0 1em;color:var(--text-color)}.v3dp__popout *[data-v-902ed860]{color:inherit;font-size:inherit;font-weight:inherit}.v3dp__popout[data-v-902ed860] button{background:none;border:none;outline:none}.v3dp__popout[data-v-902ed860] button:not(:disabled){cursor:pointer}.v3dp__heading[data-v-902ed860]{width:100%;display:flex;height:var(--heading-size);line-height:var(--heading-size);font-weight:var(--heading-weight)}.v3dp__heading__button[data-v-902ed860]{background:none;border:none;padding:0;display:flex;justify-content:center;align-items:center;width:var(--heading-size)}button.v3dp__heading__center[data-v-902ed860]:hover,.v3dp__heading__button[data-v-902ed860]:not(:disabled):hover{background-color:var(--heading-hover-color)}.v3dp__heading__center[data-v-902ed860]{flex:1}.v3dp__heading__icon[data-v-902ed860]{height:12px;stroke:var(--arrow-color)}.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-902ed860]{stroke:var(--elem-disabled-color)}.v3dp__subheading[data-v-902ed860],.v3dp__elements[data-v-902ed860]{display:grid;grid-template-columns:var(--popout-column-definition);font-size:var(--elem-font-size)}.v3dp__subheading[data-v-902ed860]{margin-top:1em}.v3dp__divider[data-v-902ed860]{border:1px solid var(--divider-color);border-radius:3px}.v3dp__elements[data-v-902ed860] button:disabled{color:var(--elem-disabled-color)}.v3dp__elements[data-v-902ed860] button{padding:.3em .6em}.v3dp__elements[data-v-902ed860] button span{display:block;line-height:1.9em;height:1.8em;border-radius:var(--elem-border-radius)}.v3dp__elements[data-v-902ed860] button:not(:disabled):hover span{background-color:var(--elem-hover-bg-color);color:var(--elem-hover-color)}.v3dp__elements[data-v-902ed860] button.selected span{background-color:var(--elem-selected-bg-color);color:var(--elem-selected-color)}.v3dp__elements[data-v-902ed860] button.current span{font-weight:var(--elem-current-font-weight);outline:1px solid var(--elem-current-outline-color)}.v3dp__column[data-v-a01d90e1]{display:flex;flex-direction:column;overflow-y:auto;height:190px}.v3dp__datepicker{--popout-bg-color: var(--vdp-bg-color, #fff);--box-shadow: var( --vdp-box-shadow, 0 4px 10px 0 rgba(128, 144, 160, .1), 0 0 1px 0 rgba(128, 144, 160, .81) );--text-color: var(--vdp-text-color, #000000);--border-radius: var(--vdp-border-radius, 3px);--heading-size: var(--vdp-heading-size, 2.5em);--heading-weight: var(--vdp-heading-weight, bold);--heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);--arrow-color: var(--vdp-arrow-color, currentColor);--elem-color: var(--vdp-elem-color, currentColor);--elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);--elem-hover-color: var(--vdp-hover-color, #fff);--elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);--elem-selected-color: var(--vdp-selected-color, #fff);--elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);--elem-current-outline-color: var(--vdp-current-date-outline-color, #888);--elem-current-font-weight: var(--vdp-current-date-font-weight, bold);--elem-font-size: var(--vdp-elem-font-size, .8em);--elem-border-radius: var(--vdp-elem-border-radius, 3px);--divider-color: var(--vdp-divider-color, var(--elem-disabled-color));position:relative}.v3dp__clearable{display:inline;position:relative;left:-15px;cursor:pointer}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as E, openBlock as b, createElementBlock as V, normalizeClass as H, normalizeStyle as pe, withModifiers as P, createElementVNode as f, renderSlot as T, createBlock as N, resolveDynamicComponent as ke, withCtx as B, Fragment as j, createCommentVNode as we, renderList as G, toDisplayString as q, pushScopeId as Le, popScopeId as $e, computed as u, resolveComponent as M, createTextVNode as Q, ref as L, watch as de, nextTick as Se, watchEffect as te, withDirectives as F, mergeProps as _e, vModelText as Ve, vShow as R, createVNode as W } from "vue";
import { isValid as $, startOfDecade as Oe, endOfDecade as qe, eachYearOfInterval as Ce, getYear as _, getDecade as z, isBefore as Y, isAfter as A, subYears as ge, addYears as ve, startOfYear as Me, endOfYear as Pe, format as J, eachMonthOfInterval as Be, isSameMonth as ne, isSameYear as ue, startOfMonth as ye, endOfMonth as he, startOfWeek as Fe, endOfWeek as Te, setDay as Ee, eachDayOfInterval as Ie, isSameDay as ae, isWithinInterval as Re, startOfDay as He, endOfDay as je, subMonths as Ye, addMonths as Ae, set as ce, isSameHour as Ne, isSameMinute as Ue, parse as fe } from "date-fns";
const Ze = ["year", "month", "day", "time", "custom"], We = E({
  emits: {
    elementClick: (e) => $(e),
    left: () => !0,
    right: () => !0,
    heading: () => !0
  },
  props: {
    headingClickable: {
      type: Boolean,
      default: !1
    },
    leftDisabled: {
      type: Boolean,
      default: !1
    },
    rightDisabled: {
      type: Boolean,
      default: !1
    },
    columnCount: {
      type: Number,
      default: 7
    },
    items: {
      type: Array,
      default: () => []
    },
    viewMode: {
      type: String,
      required: !0,
      validate: (e) => typeof e == "string" && Ze.includes(e)
    }
  }
});
const I = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [d, r] of t)
    i[d] = r;
  return i;
}, le = (e) => (Le("data-v-902ed860"), e = e(), $e(), e), ze = { class: "v3dp__heading" }, Ke = ["disabled"], Ge = /* @__PURE__ */ le(() => /* @__PURE__ */ f("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ f("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ f("path", {
      stroke: "none",
      d: "M-9 16V-8h24v24z"
    }),
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5 0L1 4l4 4"
    })
  ])
], -1)), Je = ["disabled"], Qe = /* @__PURE__ */ le(() => /* @__PURE__ */ f("svg", {
  class: "v3dp__heading__icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 6 8"
}, [
  /* @__PURE__ */ f("g", {
    fill: "none",
    "fill-rule": "evenodd"
  }, [
    /* @__PURE__ */ f("path", {
      stroke: "none",
      d: "M15-8v24H-9V-8z"
    }),
    /* @__PURE__ */ f("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M1 8l4-4-4-4"
    })
  ])
], -1)), Xe = { class: "v3dp__body" }, xe = { class: "v3dp__subheading" }, et = /* @__PURE__ */ le(() => /* @__PURE__ */ f("hr", { class: "v3dp__divider" }, null, -1)), tt = { class: "v3dp__elements" }, at = ["disabled", "onClick"];
function nt(e, t, i, d, r, y) {
  return b(), V("div", {
    class: H(["v3dp__popout", `v3dp__popout-${e.viewMode}`]),
    style: pe({ ["--popout-column-definition"]: `repeat(${e.columnCount}, 1fr)` }),
    onMousedown: t[3] || (t[3] = P(() => {
    }, ["prevent"]))
  }, [
    f("div", ze, [
      f("button", {
        class: "v3dp__heading__button v3dp__heading__button__left",
        disabled: e.leftDisabled,
        onClick: t[0] || (t[0] = P((l) => e.$emit("left"), ["stop", "prevent"]))
      }, [
        T(e.$slots, "arrow-left", {}, () => [
          Ge
        ], !0)
      ], 8, Ke),
      (b(), N(ke(e.headingClickable ? "button" : "span"), {
        class: "v3dp__heading__center",
        onClick: t[1] || (t[1] = P((l) => e.$emit("heading"), ["stop", "prevent"]))
      }, {
        default: B(() => [
          T(e.$slots, "heading", {}, void 0, !0)
        ]),
        _: 3
      })),
      f("button", {
        class: "v3dp__heading__button v3dp__heading__button__right",
        disabled: e.rightDisabled,
        onClick: t[2] || (t[2] = P((l) => e.$emit("right"), ["stop", "prevent"]))
      }, [
        T(e.$slots, "arrow-right", {}, () => [
          Qe
        ], !0)
      ], 8, Je)
    ]),
    f("div", Xe, [
      "subheading" in e.$slots ? (b(), V(j, { key: 0 }, [
        f("div", xe, [
          T(e.$slots, "subheading", {}, void 0, !0)
        ]),
        et
      ], 64)) : we("", !0),
      f("div", tt, [
        T(e.$slots, "body", {}, () => [
          (b(!0), V(j, null, G(e.items, (l) => (b(), V("button", {
            key: l.key,
            disabled: l.disabled,
            class: H([
              {
                selected: l.selected,
                current: l.current
              },
              `v3dp__element__button__${e.viewMode}`
            ]),
            onClick: P((n) => e.$emit("elementClick", l.value), ["stop", "prevent"])
          }, [
            f("span", null, q(l.display), 1)
          ], 10, at))), 128))
        ], !0)
      ])
    ])
  ], 38);
}
const X = /* @__PURE__ */ I(We, [["render", nt], ["__scopeId", "data-v-902ed860"]]), lt = E({
  components: {
    PickerPopup: X
  },
  emits: {
    "update:pageDate": (e) => $(e),
    select: (e) => $(e)
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const i = u(() => Oe(e.pageDate)), d = u(() => qe(e.pageDate)), r = (D, v, o) => !v && !o ? !0 : !(v && _(D) < _(v) || o && _(D) > _(o)), y = u(
      () => Ce({
        start: i.value,
        end: d.value
      }).map(
        (D) => ({
          value: D,
          key: String(_(D)),
          display: _(D),
          selected: !!e.selected && _(D) === _(e.selected),
          disabled: !r(D, e.lowerLimit, e.upperLimit)
        })
      )
    ), l = u(() => {
      const D = _(i.value), v = _(d.value);
      return `${D} - ${v}`;
    }), n = u(
      () => e.lowerLimit && (z(e.lowerLimit) === z(e.pageDate) || Y(e.pageDate, e.lowerLimit))
    ), h = u(
      () => e.upperLimit && (z(e.upperLimit) === z(e.pageDate) || A(e.pageDate, e.upperLimit))
    );
    return {
      years: y,
      heading: l,
      leftDisabled: n,
      rightDisabled: h,
      previousPage: () => t("update:pageDate", ge(e.pageDate, 10)),
      nextPage: () => t("update:pageDate", ve(e.pageDate, 10))
    };
  }
});
function it(e, t, i, d, r, y) {
  const l = M("picker-popup");
  return b(), N(l, {
    columnCount: 3,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.years,
    viewMode: "year",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onElementClick: t[0] || (t[0] = (n) => e.$emit("select", n))
  }, {
    heading: B(() => [
      Q(q(e.heading), 1)
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const st = /* @__PURE__ */ I(lt, [["render", it]]), ot = E({
  components: {
    PickerPopup: X
  },
  emits: {
    "update:pageDate": (e) => $(e),
    select: (e) => $(e),
    back: () => !0
  },
  props: {
    /**
     * Currently selected date, needed for highlighting
     */
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "LLL"
    },
    locale: {
      type: Object,
      required: !1
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const i = u(() => Me(e.pageDate)), d = u(() => Pe(e.pageDate)), r = u(
      () => (v) => J(v, e.format, {
        locale: e.locale
      })
    ), y = (v, o, k) => !o && !k ? !0 : !(o && Y(v, ye(o)) || k && A(v, he(k))), l = u(
      () => Be({
        start: i.value,
        end: d.value
      }).map(
        (v) => ({
          value: v,
          display: r.value(v),
          key: r.value(v),
          selected: !!e.selected && ne(e.selected, v),
          disabled: !y(v, e.lowerLimit, e.upperLimit)
        })
      )
    ), n = u(() => _(i.value)), h = u(
      () => e.lowerLimit && (ue(e.lowerLimit, e.pageDate) || Y(e.pageDate, e.lowerLimit))
    ), S = u(
      () => e.upperLimit && (ue(e.upperLimit, e.pageDate) || A(e.pageDate, e.upperLimit))
    );
    return {
      months: l,
      heading: n,
      leftDisabled: h,
      rightDisabled: S,
      previousPage: () => t("update:pageDate", ge(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", ve(e.pageDate, 1))
    };
  }
});
function rt(e, t, i, d, r, y) {
  const l = M("picker-popup");
  return b(), N(l, {
    headingClickable: "",
    columnCount: 3,
    items: e.months,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    viewMode: "month",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (n) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (n) => e.$emit("select", n))
  }, {
    heading: B(() => [
      Q(q(e.heading), 1)
    ]),
    _: 1
  }, 8, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]);
}
const dt = /* @__PURE__ */ I(ot, [["render", rt]]), ut = E({
  components: {
    PickerPopup: X
  },
  emits: {
    "update:pageDate": (e) => $(e),
    select: (e) => $(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    format: {
      type: String,
      required: !1,
      default: "dd"
    },
    headingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    locale: {
      type: Object,
      required: !1
    },
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 6
    },
    lowerLimit: {
      type: Date,
      required: !1
    },
    upperLimit: {
      type: Date,
      required: !1
    },
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e, { emit: t }) {
    const i = u(
      () => (m) => (p) => J(p, m, {
        locale: e.locale,
        weekStartsOn: e.weekStartsOn
      })
    ), d = u(() => ye(e.pageDate)), r = u(() => he(e.pageDate)), y = u(() => ({
      start: d.value,
      end: r.value
    })), l = u(() => ({
      start: Fe(d.value, {
        weekStartsOn: e.weekStartsOn
      }),
      end: Te(r.value, {
        weekStartsOn: e.weekStartsOn
      })
    })), n = u(() => {
      const m = e.weekStartsOn, p = i.value(e.weekdayFormat);
      return Array.from(Array(7)).map((c, w) => (m + w) % 7).map(
        (c) => Ee(/* @__PURE__ */ new Date(), c, {
          weekStartsOn: e.weekStartsOn
        })
      ).map(p);
    }), h = (m, p, c, w) => {
      var U, Z;
      return (U = w == null ? void 0 : w.dates) != null && U.some((x) => ae(m, x)) || (Z = w == null ? void 0 : w.predicate) != null && Z.call(w, m) ? !1 : !p && !c ? !0 : !(p && Y(m, He(p)) || c && A(m, je(c)));
    }, S = u(() => {
      const m = /* @__PURE__ */ new Date(), p = i.value(e.format);
      return Ie(l.value).map(
        (c) => ({
          value: c,
          display: p(c),
          selected: !!e.selected && ae(e.selected, c),
          current: ae(m, c),
          disabled: !e.allowOutsideInterval && !Re(c, y.value) || !h(
            c,
            e.lowerLimit,
            e.upperLimit,
            e.disabledDates
          ),
          key: i.value("yyyy-MM-dd")(c)
        })
      );
    }), s = u(
      () => i.value(e.headingFormat)(e.pageDate)
    ), D = u(
      () => e.lowerLimit && (ne(e.lowerLimit, e.pageDate) || Y(e.pageDate, e.lowerLimit))
    ), v = u(
      () => e.upperLimit && (ne(e.upperLimit, e.pageDate) || A(e.pageDate, e.upperLimit))
    );
    return {
      weekDays: n,
      days: S,
      heading: s,
      leftDisabled: D,
      rightDisabled: v,
      previousPage: () => t("update:pageDate", Ye(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", Ae(e.pageDate, 1))
    };
  }
});
function ct(e, t, i, d, r, y) {
  const l = M("picker-popup");
  return b(), N(l, {
    headingClickable: "",
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.days,
    viewMode: "day",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (n) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (n) => e.$emit("select", n))
  }, {
    heading: B(() => [
      Q(q(e.heading), 1)
    ]),
    subheading: B(() => [
      (b(!0), V(j, null, G(e.weekDays, (n, h) => (b(), V("span", {
        key: n,
        class: H(`v3dp__subheading__weekday__${h}`)
      }, q(n), 3))), 128))
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const ft = /* @__PURE__ */ I(ut, [["render", ct]]);
function me(e, t) {
  const i = e.getBoundingClientRect(), d = {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = t.getBoundingClientRect();
  if (!(r.top >= i.top && r.bottom <= i.top + d.height)) {
    const l = r.top - i.top, n = r.bottom - i.bottom;
    Math.abs(l) < Math.abs(n) ? e.scrollTop += l : e.scrollTop += n;
  }
}
const mt = E({
  components: {
    PickerPopup: X
  },
  emits: {
    select: (e) => $(e),
    back: () => !0
  },
  props: {
    selected: {
      type: Date,
      required: !1
    },
    pageDate: {
      type: Date,
      required: !0
    },
    visible: {
      type: Boolean,
      required: !0
    },
    disabledTime: {
      type: Object,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    const i = L(null), d = L(null), r = u(() => e.pageDate ?? e.selected), y = L(r.value.getHours()), l = L(r.value.getMinutes());
    de(
      () => e.selected,
      (o) => {
        let k = 0, m = 0;
        o && (k = o.getHours(), m = o.getMinutes()), y.value = k, l.value = m;
      }
    );
    const n = u(
      () => [...Array(24).keys()].map(
        (o) => ({
          value: o,
          date: ce(new Date(r.value.getTime()), {
            hours: o,
            minutes: l.value,
            seconds: 0
          }),
          selected: y.value === o,
          ref: L(null)
        })
      )
    ), h = u(
      () => [...Array(60).keys()].map((o) => ({
        value: o,
        date: ce(new Date(r.value.getTime()), {
          hours: y.value,
          minutes: o,
          seconds: 0
        }),
        selected: l.value === o,
        ref: L(null)
      }))
    ), S = (o) => {
      l.value = o.value, t("select", o.date);
    }, s = () => {
      const o = n.value.find(
        (m) => {
          var p, c;
          return ((c = (p = m.ref.value) == null ? void 0 : p.classList) == null ? void 0 : c.contains("selected")) ?? !1;
        }
      ), k = h.value.find(
        (m) => {
          var p, c;
          return ((c = (p = m.ref.value) == null ? void 0 : p.classList) == null ? void 0 : c.contains("selected")) ?? !1;
        }
      );
      o && k && (me(i.value, o.ref.value), me(d.value, k.ref.value));
    };
    return de(
      () => e.visible,
      (o) => {
        o && Se(s);
      }
    ), {
      hoursListRef: i,
      minutesListRef: d,
      hours: y,
      minutes: l,
      hoursList: n,
      minutesList: h,
      padStartZero: (o) => `0${o}`.substr(-2),
      selectMinutes: S,
      isEnabled: (o) => {
        var k, m, p, c;
        return !((m = (k = e.disabledTime) == null ? void 0 : k.dates) != null && m.some(
          (w) => Ne(o, w) && Ue(o, w)
        ) || (c = (p = e.disabledTime) == null ? void 0 : p.predicate) != null && c.call(p, o));
      },
      scroll: s
    };
  }
});
const pt = {
  ref: "hoursListRef",
  class: "v3dp__column"
}, gt = ["disabled", "onClick"], vt = {
  ref: "minutesListRef",
  class: "v3dp__column"
}, yt = ["disabled", "onClick"];
function ht(e, t, i, d, r, y) {
  const l = M("picker-popup");
  return b(), N(l, {
    headingClickable: "",
    columnCount: 2,
    leftDisabled: !0,
    rightDisabled: !0,
    viewMode: "time",
    onHeading: t[0] || (t[0] = (n) => e.$emit("back"))
  }, {
    heading: B(() => [
      Q(q(e.padStartZero(e.hours)) + ":" + q(e.padStartZero(e.minutes)), 1)
    ]),
    body: B(() => [
      f("div", pt, [
        (b(!0), V(j, null, G(e.hoursList, (n) => (b(), V("button", {
          key: n.value,
          ref_for: !0,
          ref: n.ref,
          class: H([{ selected: n.selected }, "v3dp__element_button__hour"]),
          disabled: !e.isEnabled(n.date),
          onClick: P((h) => e.hours = n.value, ["stop", "prevent"])
        }, [
          f("span", null, q(e.padStartZero(n.value)), 1)
        ], 10, gt))), 128))
      ], 512),
      f("div", vt, [
        (b(!0), V(j, null, G(e.minutesList, (n) => (b(), V("button", {
          key: n.value,
          ref_for: !0,
          ref: n.ref,
          class: H([{ selected: n.selected }, "v3dp__element_button__minute"]),
          disabled: !e.isEnabled(n.date),
          onClick: P((h) => e.selectMinutes(n), ["stop", "prevent"])
        }, [
          f("span", null, q(e.padStartZero(n.value)), 1)
        ], 10, yt))), 128))
      ], 512)
    ]),
    _: 1
  });
}
const Dt = /* @__PURE__ */ I(mt, [["render", ht], ["__scopeId", "data-v-a01d90e1"]]), K = ["time", "day", "month", "year"], bt = E({
  components: {
    YearPicker: st,
    MonthPicker: dt,
    DayPicker: ft,
    TimePicker: Dt
  },
  inheritAttrs: !1,
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * `v-model` for selected date
     */
    modelValue: {
      type: Date,
      required: !1
    },
    /**
     * Dates not available for picking
     */
    disabledDates: {
      type: Object,
      required: !1
    },
    allowOutsideInterval: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Time not available for picking
     */
    disabledTime: {
      type: Object,
      required: !1
    },
    /**
     * Upper limit for available dates for picking
     */
    upperLimit: {
      type: Date,
      required: !1
    },
    /**
     * Lower limit for available dates for picking
     */
    lowerLimit: {
      type: Date,
      required: !1
    },
    /**
     * View on which the date picker should open. Can be either `year`, `month`, `day` or `time`
     */
    startingView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && K.includes(e)
    },
    /**
     * Date which should be the "center" of the initial view.
     * When an empty datepicker opens, it focuses on the month/year
     * that contains this date
     */
    startingViewDate: {
      type: Date,
      required: !1,
      default: () => /* @__PURE__ */ new Date()
    },
    /**
     * `date-fns`-type formatting for a month view heading
     */
    dayPickerHeadingFormat: {
      type: String,
      required: !1,
      default: "LLLL yyyy"
    },
    /**
     * `date-fns`-type formatting for the month picker view
     */
    monthListFormat: {
      type: String,
      required: !1,
      default: "LLL"
    },
    /**
     * `date-fns`-type formatting for a line of weekdays on day view
     */
    weekdayFormat: {
      type: String,
      required: !1,
      default: "EE"
    },
    /**
     * `date-fns`-type formatting for the day picker view
     */
    dayFormat: {
      type: String,
      required: !1,
      default: "dd"
    },
    /**
     * `date-fns`-type format in which the string in the input should be both
     * parsed and displayed
     */
    inputFormat: {
      type: String,
      required: !1,
      default: "yyyy-MM-dd"
    },
    /**
     * [`date-fns` locale object](https://date-fns.org/v2.16.1/docs/I18n#usage).
     * Used in string formatting (see default `dayPickerHeadingFormat`)
     */
    locale: {
      type: Object,
      required: !1
    },
    /**
     * Day on which the week should start.
     *
     * Number from 0 to 6, where 0 is Sunday and 6 is Saturday.
     * Week starts with a Monday (1) by default
     */
    weekStartsOn: {
      type: Number,
      required: !1,
      default: 1,
      validator: (e) => [0, 1, 2, 3, 4, 5, 6].includes(e)
    },
    /**
     * Disables datepicker and prevents it's opening
     */
    disabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Clears selected date
     */
    clearable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /*
     * Allows user to input date manually
     */
    typeable: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * If set, lower-level views won't show
     */
    minimumView: {
      type: String,
      required: !1,
      default: "day",
      validate: (e) => typeof e == "string" && K.includes(e)
    },
    /*
     * If typeable is true,  enables automatic date formatting (masking) as the user types
     */
    mask: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  emits: {
    "update:modelValue": (e) => e == null || $(e),
    decadePageChanged: (e) => !0,
    yearPageChanged: (e) => !0,
    monthPageChanged: (e) => !0,
    opened: () => !0,
    closed: () => !0
  },
  setup(e, { emit: t }) {
    const i = L("none"), d = L(e.startingViewDate), r = L(null), y = L(!1), l = L(!1), n = L("");
    te(() => {
      const a = fe(n.value, e.inputFormat, /* @__PURE__ */ new Date(), { locale: e.locale });
      $(a) && (d.value = a);
    }), te(
      () => n.value = e.modelValue && $(e.modelValue) ? J(e.modelValue, e.inputFormat, {
        locale: e.locale
      }) : ""
    );
    const h = () => {
      l.value || (t("opened"), l.value = !0);
    }, S = () => {
      l.value && (t("closed"), l.value = !1);
    }, s = (a = "none") => {
      e.disabled || (a !== "none" && i.value === "none" && (d.value = e.modelValue ? e.modelValue : e.startingViewDate), i.value = a, a !== "none" ? h() : S());
    };
    te(() => {
      e.disabled && (i.value = "none", l.value = !1);
    });
    const D = (a, g) => {
      d.value = g, a === "year" ? t("decadePageChanged", g) : a === "month" ? t("yearPageChanged", g) : a === "day" && t("monthPageChanged", g);
    }, v = (a) => {
      d.value = a, e.minimumView === "year" ? (s("none"), t("update:modelValue", a)) : i.value = "month";
    }, o = (a) => {
      d.value = a, e.minimumView === "month" ? (s("none"), t("update:modelValue", a)) : i.value = "day";
    }, k = (a) => {
      d.value = a, e.minimumView === "day" ? (s("none"), t("update:modelValue", a)) : i.value = "time";
    }, m = (a) => {
      s("none"), t("update:modelValue", a);
    }, p = () => {
      e.clearable && (s("none"), t("update:modelValue", null), d.value = e.startingViewDate);
    }, c = () => y.value = !0, w = () => {
      s(oe.value), h();
    }, U = () => {
      y.value = !1;
      const a = se(r.value.value);
      ie(a) || t("update:modelValue", null), s(), S();
    }, Z = (a) => {
      if (e.typeable && e.mask && ![a.key, a.code].includes("Backspace")) {
        let g = r.value.value;
        const O = a.key;
        if ("0123456789".includes(O)) {
          const C = re.find((ee) => g.length === ee.idx);
          C && (g += C.char), g += O;
        } else {
          const C = re.find((ee) => g.length === ee.idx);
          C && (g += C.char);
        }
        return r.value.value = g, a.preventDefault(), !1;
      }
    }, x = (a) => {
      const g = a.keyCode ? a.keyCode : a.which;
      if ([
        27,
        // escape
        13
        // enter
      ].includes(g) && r.value.blur(), e.typeable) {
        const C = se(r.value.value);
        ie(C) && (n.value = r.value.value, t("update:modelValue", C));
      }
    }, ie = (a) => {
      let g = r.value.value;
      return $(a) && g === J(a, e.inputFormat, { locale: e.locale });
    }, se = (a) => fe(
      a,
      e.inputFormat,
      /* @__PURE__ */ new Date(),
      { locale: e.locale }
    ), oe = u(() => {
      const a = K.indexOf(e.startingView), g = K.indexOf(e.minimumView);
      return a < g ? e.minimumView : e.startingView;
    }), De = (a) => Object.fromEntries(
      Object.entries(a ?? {}).filter(([g, O]) => g.startsWith("--"))
    ), be = () => e.startingView === "time" && e.minimumView === "time" ? null : i.value = "day", re = ((a) => {
      const g = [];
      for (let O = 0; O < a.length; O++)
        /^[0-9a-zA-Z]+$/.test(a[O]) || g.push({ idx: O, char: a[O] });
      return g;
    })(e.inputFormat);
    return {
      blur: U,
      focus: w,
      click: c,
      input: n,
      inputRef: r,
      pageDate: d,
      renderView: s,
      updatePageDate: D,
      selectYear: v,
      selectMonth: o,
      selectDay: k,
      selectTime: m,
      keyUp: x,
      keyDown: Z,
      viewShown: i,
      goBackFromTimepicker: be,
      clearModelValue: p,
      initialView: oe,
      log: (a) => console.log(a),
      variables: De
    };
  }
});
const kt = { class: "v3dp__input_wrapper" }, wt = ["readonly", "placeholder", "disabled", "tabindex"], Lt = { class: "v3dp__clearable" };
function $t(e, t, i, d, r, y) {
  const l = M("year-picker"), n = M("month-picker"), h = M("day-picker"), S = M("time-picker");
  return b(), V("div", {
    class: "v3dp__datepicker",
    style: pe(e.variables(e.$attrs.style))
  }, [
    f("div", kt, [
      F(f("input", _e({
        type: "text",
        ref: "inputRef",
        readonly: !e.typeable,
        "onUpdate:modelValue": t[0] || (t[0] = (s) => e.input = s)
      }, e.$attrs, {
        placeholder: e.placeholder,
        disabled: e.disabled,
        tabindex: e.disabled ? -1 : 0,
        onKeyup: t[1] || (t[1] = (...s) => e.keyUp && e.keyUp(...s)),
        onKeydown: t[2] || (t[2] = (...s) => e.keyDown && e.keyDown(...s)),
        onBlur: t[3] || (t[3] = (...s) => e.blur && e.blur(...s)),
        onFocus: t[4] || (t[4] = (...s) => e.focus && e.focus(...s)),
        onClick: t[5] || (t[5] = (...s) => e.click && e.click(...s))
      }), null, 16, wt), [
        [Ve, e.input]
      ]),
      F(f("div", Lt, [
        T(e.$slots, "clear", { onClear: e.clearModelValue }, () => [
          f("i", {
            onClick: t[6] || (t[6] = (s) => e.clearModelValue())
          }, "x")
        ])
      ], 512), [
        [R, e.clearable && e.modelValue]
      ])
    ]),
    F(W(l, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[7] || (t[7] = (s) => e.updatePageDate("year", s)),
      selected: e.modelValue,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      onSelect: e.selectYear
    }, null, 8, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [R, e.viewShown === "year"]
    ]),
    F(W(n, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[8] || (t[8] = (s) => e.updatePageDate("month", s)),
      selected: e.modelValue,
      onSelect: e.selectMonth,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      format: e.monthListFormat,
      locale: e.locale,
      onBack: t[9] || (t[9] = (s) => e.viewShown = "year")
    }, null, 8, ["pageDate", "selected", "onSelect", "lowerLimit", "upperLimit", "format", "locale"]), [
      [R, e.viewShown === "month"]
    ]),
    F(W(h, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[10] || (t[10] = (s) => e.updatePageDate("day", s)),
      selected: e.modelValue,
      weekStartsOn: e.weekStartsOn,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      headingFormat: e.dayPickerHeadingFormat,
      disabledDates: e.disabledDates,
      locale: e.locale,
      weekdayFormat: e.weekdayFormat,
      "allow-outside-interval": e.allowOutsideInterval,
      format: e.dayFormat,
      onSelect: e.selectDay,
      onBack: t[11] || (t[11] = (s) => e.viewShown = "month")
    }, null, 8, ["pageDate", "selected", "weekStartsOn", "lowerLimit", "upperLimit", "headingFormat", "disabledDates", "locale", "weekdayFormat", "allow-outside-interval", "format", "onSelect"]), [
      [R, e.viewShown === "day"]
    ]),
    F(W(S, {
      pageDate: e.pageDate,
      visible: e.viewShown === "time",
      selected: e.modelValue,
      disabledTime: e.disabledTime,
      onSelect: e.selectTime,
      onBack: e.goBackFromTimepicker
    }, null, 8, ["pageDate", "visible", "selected", "disabledTime", "onSelect", "onBack"]), [
      [R, e.viewShown === "time"]
    ])
  ], 4);
}
const Ot = /* @__PURE__ */ I(bt, [["render", $t]]);
export {
  Ot as default
};
