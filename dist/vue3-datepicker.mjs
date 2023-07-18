(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".v3dp__popout[data-v-902ed860]{z-index:10;position:absolute;text-align:center;width:17.5em;background-color:var(--popout-bg-color);box-shadow:var(--box-shadow);border-radius:var(--border-radius);padding:8px 0 1em;color:var(--text-color)}.v3dp__popout *[data-v-902ed860]{color:inherit;font-size:inherit;font-weight:inherit}.v3dp__popout[data-v-902ed860] button{background:none;border:none;outline:none}.v3dp__popout[data-v-902ed860] button:not(:disabled){cursor:pointer}.v3dp__heading[data-v-902ed860]{width:100%;display:flex;height:var(--heading-size);line-height:var(--heading-size);font-weight:var(--heading-weight)}.v3dp__heading__button[data-v-902ed860]{background:none;border:none;padding:0;display:flex;justify-content:center;align-items:center;width:var(--heading-size)}button.v3dp__heading__center[data-v-902ed860]:hover,.v3dp__heading__button[data-v-902ed860]:not(:disabled):hover{background-color:var(--heading-hover-color)}.v3dp__heading__center[data-v-902ed860]{flex:1}.v3dp__heading__icon[data-v-902ed860]{height:12px;stroke:var(--arrow-color)}.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-902ed860]{stroke:var(--elem-disabled-color)}.v3dp__subheading[data-v-902ed860],.v3dp__elements[data-v-902ed860]{display:grid;grid-template-columns:var(--popout-column-definition);font-size:var(--elem-font-size)}.v3dp__subheading[data-v-902ed860]{margin-top:1em}.v3dp__divider[data-v-902ed860]{border:1px solid var(--divider-color);border-radius:3px}.v3dp__elements[data-v-902ed860] button:disabled{color:var(--elem-disabled-color)}.v3dp__elements[data-v-902ed860] button{padding:.3em .6em}.v3dp__elements[data-v-902ed860] button span{display:block;line-height:1.9em;height:1.8em;border-radius:var(--elem-border-radius)}.v3dp__elements[data-v-902ed860] button:not(:disabled):hover span{background-color:var(--elem-hover-bg-color);color:var(--elem-hover-color)}.v3dp__elements[data-v-902ed860] button.selected span{background-color:var(--elem-selected-bg-color);color:var(--elem-selected-color)}.v3dp__elements[data-v-902ed860] button.current span{font-weight:var(--elem-current-font-weight);outline:1px solid var(--elem-current-outline-color)}.v3dp__column[data-v-a01d90e1]{display:flex;flex-direction:column;overflow-y:auto;height:190px}.v3dp__datepicker{--popout-bg-color: var(--vdp-bg-color, #fff);--box-shadow: var( --vdp-box-shadow, 0 4px 10px 0 rgba(128, 144, 160, .1), 0 0 1px 0 rgba(128, 144, 160, .81) );--text-color: var(--vdp-text-color, #000000);--border-radius: var(--vdp-border-radius, 3px);--heading-size: var(--vdp-heading-size, 2.5em);--heading-weight: var(--vdp-heading-weight, bold);--heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);--arrow-color: var(--vdp-arrow-color, currentColor);--elem-color: var(--vdp-elem-color, currentColor);--elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);--elem-hover-color: var(--vdp-hover-color, #fff);--elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);--elem-selected-color: var(--vdp-selected-color, #fff);--elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);--elem-current-outline-color: var(--vdp-current-date-outline-color, #888);--elem-current-font-weight: var(--vdp-current-date-font-weight, bold);--elem-font-size: var(--vdp-elem-font-size, .8em);--elem-border-radius: var(--vdp-elem-border-radius, 3px);--divider-color: var(--vdp-divider-color, var(--elem-disabled-color));position:relative}.v3dp__clearable{display:inline;position:relative;left:-15px;cursor:pointer}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { defineComponent as I, openBlock as b, createElementBlock as V, normalizeClass as A, normalizeStyle as ge, withModifiers as B, createElementVNode as f, renderSlot as E, createBlock as W, resolveDynamicComponent as we, withCtx as F, Fragment as N, createCommentVNode as Le, renderList as Q, toDisplayString as q, pushScopeId as $e, popScopeId as Se, computed as u, resolveComponent as C, createTextVNode as x, ref as _, watch as ue, nextTick as _e, watchEffect as ne, withDirectives as T, mergeProps as Ve, vModelText as Oe, vShow as Y, createVNode as K } from "vue";
import { isValid as L, startOfDecade as qe, endOfDecade as Ce, eachYearOfInterval as Me, getYear as S, getDecade as G, isBefore as U, isAfter as Z, subYears as ye, addYears as ve, startOfYear as Pe, endOfYear as Be, format as X, eachMonthOfInterval as Fe, isSameMonth as le, isSameYear as ce, startOfMonth as he, endOfMonth as be, startOfWeek as Te, endOfWeek as Ee, setDay as Ie, eachDayOfInterval as Re, isSameDay as ie, isWithinInterval as He, startOfDay as je, endOfDay as Ye, subMonths as Ae, addMonths as Ne, set as me, isSameHour as Ue, isSameMinute as Ze, parse as fe, max as We, min as ze } from "date-fns";
const Ke = ["year", "month", "day", "time", "custom"], Ge = I({
  emits: {
    elementClick: (e) => L(e),
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
      validate: (e) => typeof e == "string" && Ke.includes(e)
    }
  }
});
const R = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, se = (e) => ($e("data-v-902ed860"), e = e(), Se(), e), Je = { class: "v3dp__heading" }, Qe = ["disabled"], Xe = /* @__PURE__ */ se(() => /* @__PURE__ */ f("svg", {
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
], -1)), xe = ["disabled"], et = /* @__PURE__ */ se(() => /* @__PURE__ */ f("svg", {
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
], -1)), tt = { class: "v3dp__body" }, at = { class: "v3dp__subheading" }, nt = /* @__PURE__ */ se(() => /* @__PURE__ */ f("hr", { class: "v3dp__divider" }, null, -1)), it = { class: "v3dp__elements" }, lt = ["disabled", "onClick"];
function st(e, t, r, s, o, c) {
  return b(), V("div", {
    class: A(["v3dp__popout", `v3dp__popout-${e.viewMode}`]),
    style: ge({ ["--popout-column-definition"]: `repeat(${e.columnCount}, 1fr)` }),
    onMousedown: t[3] || (t[3] = B(() => {
    }, ["prevent"]))
  }, [
    f("div", Je, [
      f("button", {
        class: "v3dp__heading__button v3dp__heading__button__left",
        disabled: e.leftDisabled,
        onClick: t[0] || (t[0] = B((i) => e.$emit("left"), ["stop", "prevent"]))
      }, [
        E(e.$slots, "arrow-left", {}, () => [
          Xe
        ], !0)
      ], 8, Qe),
      (b(), W(we(e.headingClickable ? "button" : "span"), {
        class: "v3dp__heading__center",
        onClick: t[1] || (t[1] = B((i) => e.$emit("heading"), ["stop", "prevent"]))
      }, {
        default: F(() => [
          E(e.$slots, "heading", {}, void 0, !0)
        ]),
        _: 3
      })),
      f("button", {
        class: "v3dp__heading__button v3dp__heading__button__right",
        disabled: e.rightDisabled,
        onClick: t[2] || (t[2] = B((i) => e.$emit("right"), ["stop", "prevent"]))
      }, [
        E(e.$slots, "arrow-right", {}, () => [
          et
        ], !0)
      ], 8, xe)
    ]),
    f("div", tt, [
      "subheading" in e.$slots ? (b(), V(N, { key: 0 }, [
        f("div", at, [
          E(e.$slots, "subheading", {}, void 0, !0)
        ]),
        nt
      ], 64)) : Le("", !0),
      f("div", it, [
        E(e.$slots, "body", {}, () => [
          (b(!0), V(N, null, Q(e.items, (i) => (b(), V("button", {
            key: i.key,
            disabled: i.disabled,
            class: A([
              {
                selected: i.selected,
                current: i.current
              },
              `v3dp__element__button__${e.viewMode}`
            ]),
            onClick: B((a) => e.$emit("elementClick", i.value), ["stop", "prevent"])
          }, [
            f("span", null, q(i.display), 1)
          ], 10, lt))), 128))
        ], !0)
      ])
    ])
  ], 38);
}
const ee = /* @__PURE__ */ R(Ge, [["render", st], ["__scopeId", "data-v-902ed860"]]), ot = I({
  components: {
    PickerPopup: ee
  },
  emits: {
    "update:pageDate": (e) => L(e),
    select: (e) => L(e)
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
    const r = u(() => qe(e.pageDate)), s = u(() => Ce(e.pageDate)), o = (h, v, l) => !v && !l ? !0 : !(v && S(h) < S(v) || l && S(h) > S(l)), c = u(
      () => Me({
        start: r.value,
        end: s.value
      }).map(
        (h) => ({
          value: h,
          key: String(S(h)),
          display: S(h),
          selected: !!e.selected && S(h) === S(e.selected),
          disabled: !o(h, e.lowerLimit, e.upperLimit)
        })
      )
    ), i = u(() => {
      const h = S(r.value), v = S(s.value);
      return `${h} - ${v}`;
    }), a = u(
      () => e.lowerLimit && (G(e.lowerLimit) === G(e.pageDate) || U(e.pageDate, e.lowerLimit))
    ), p = u(
      () => e.upperLimit && (G(e.upperLimit) === G(e.pageDate) || Z(e.pageDate, e.upperLimit))
    );
    return {
      years: c,
      heading: i,
      leftDisabled: a,
      rightDisabled: p,
      previousPage: () => t("update:pageDate", ye(e.pageDate, 10)),
      nextPage: () => t("update:pageDate", ve(e.pageDate, 10))
    };
  }
});
function rt(e, t, r, s, o, c) {
  const i = C("picker-popup");
  return b(), W(i, {
    columnCount: 3,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.years,
    viewMode: "year",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onElementClick: t[0] || (t[0] = (a) => e.$emit("select", a))
  }, {
    heading: F(() => [
      x(q(e.heading), 1)
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const dt = /* @__PURE__ */ R(ot, [["render", rt]]), ut = I({
  components: {
    PickerPopup: ee
  },
  emits: {
    "update:pageDate": (e) => L(e),
    select: (e) => L(e),
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
    const r = u(() => Pe(e.pageDate)), s = u(() => Be(e.pageDate)), o = u(
      () => (v) => X(v, e.format, {
        locale: e.locale
      })
    ), c = (v, l, D) => !l && !D ? !0 : !(l && U(v, he(l)) || D && Z(v, be(D))), i = u(
      () => Fe({
        start: r.value,
        end: s.value
      }).map(
        (v) => ({
          value: v,
          display: o.value(v),
          key: o.value(v),
          selected: !!e.selected && le(e.selected, v),
          disabled: !c(v, e.lowerLimit, e.upperLimit)
        })
      )
    ), a = u(() => S(r.value)), p = u(
      () => e.lowerLimit && (ce(e.lowerLimit, e.pageDate) || U(e.pageDate, e.lowerLimit))
    ), O = u(
      () => e.upperLimit && (ce(e.upperLimit, e.pageDate) || Z(e.pageDate, e.upperLimit))
    );
    return {
      months: i,
      heading: a,
      leftDisabled: p,
      rightDisabled: O,
      previousPage: () => t("update:pageDate", ye(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", ve(e.pageDate, 1))
    };
  }
});
function ct(e, t, r, s, o, c) {
  const i = C("picker-popup");
  return b(), W(i, {
    headingClickable: "",
    columnCount: 3,
    items: e.months,
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    viewMode: "month",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (a) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (a) => e.$emit("select", a))
  }, {
    heading: F(() => [
      x(q(e.heading), 1)
    ]),
    _: 1
  }, 8, ["items", "leftDisabled", "rightDisabled", "onLeft", "onRight"]);
}
const mt = /* @__PURE__ */ R(ut, [["render", ct]]), ft = I({
  components: {
    PickerPopup: ee
  },
  emits: {
    "update:pageDate": (e) => L(e),
    select: (e) => L(e),
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
    const r = u(
      () => (g) => (y) => X(y, g, {
        locale: e.locale,
        weekStartsOn: e.weekStartsOn
      })
    ), s = u(() => he(e.pageDate)), o = u(() => be(e.pageDate)), c = u(() => ({
      start: s.value,
      end: o.value
    })), i = u(() => ({
      start: Te(s.value, {
        weekStartsOn: e.weekStartsOn
      }),
      end: Ee(o.value, {
        weekStartsOn: e.weekStartsOn
      })
    })), a = u(() => {
      const g = e.weekStartsOn, y = r.value(e.weekdayFormat);
      return Array.from(Array(7)).map((m, k) => (g + k) % 7).map(
        (m) => Ie(/* @__PURE__ */ new Date(), m, {
          weekStartsOn: e.weekStartsOn
        })
      ).map(y);
    }), p = (g, y, m, k) => {
      var H, j;
      return (H = k == null ? void 0 : k.dates) != null && H.some((z) => ie(g, z)) || (j = k == null ? void 0 : k.predicate) != null && j.call(k, g) ? !1 : !y && !m ? !0 : !(y && U(g, je(y)) || m && Z(g, Ye(m)));
    }, O = u(() => {
      const g = /* @__PURE__ */ new Date(), y = r.value(e.format);
      return Re(i.value).map(
        (m) => ({
          value: m,
          display: y(m),
          selected: !!e.selected && ie(e.selected, m),
          current: ie(g, m),
          disabled: !e.allowOutsideInterval && !He(m, c.value) || !p(
            m,
            e.lowerLimit,
            e.upperLimit,
            e.disabledDates
          ),
          key: r.value("yyyy-MM-dd")(m)
        })
      );
    }), d = u(
      () => r.value(e.headingFormat)(e.pageDate)
    ), h = u(
      () => e.lowerLimit && (le(e.lowerLimit, e.pageDate) || U(e.pageDate, e.lowerLimit))
    ), v = u(
      () => e.upperLimit && (le(e.upperLimit, e.pageDate) || Z(e.pageDate, e.upperLimit))
    );
    return {
      weekDays: a,
      days: O,
      heading: d,
      leftDisabled: h,
      rightDisabled: v,
      previousPage: () => t("update:pageDate", Ae(e.pageDate, 1)),
      nextPage: () => t("update:pageDate", Ne(e.pageDate, 1))
    };
  }
});
function pt(e, t, r, s, o, c) {
  const i = C("picker-popup");
  return b(), W(i, {
    headingClickable: "",
    leftDisabled: e.leftDisabled,
    rightDisabled: e.rightDisabled,
    items: e.days,
    viewMode: "day",
    onLeft: e.previousPage,
    onRight: e.nextPage,
    onHeading: t[0] || (t[0] = (a) => e.$emit("back")),
    onElementClick: t[1] || (t[1] = (a) => e.$emit("select", a))
  }, {
    heading: F(() => [
      x(q(e.heading), 1)
    ]),
    subheading: F(() => [
      (b(!0), V(N, null, Q(e.weekDays, (a, p) => (b(), V("span", {
        key: a,
        class: A(`v3dp__subheading__weekday__${p}`)
      }, q(a), 3))), 128))
    ]),
    _: 1
  }, 8, ["leftDisabled", "rightDisabled", "items", "onLeft", "onRight"]);
}
const gt = /* @__PURE__ */ R(ft, [["render", pt]]);
function pe(e, t) {
  const r = e.getBoundingClientRect(), s = {
    height: e.clientHeight,
    width: e.clientWidth
  }, o = t.getBoundingClientRect();
  if (!(o.top >= r.top && o.bottom <= r.top + s.height)) {
    const i = o.top - r.top, a = o.bottom - r.bottom;
    Math.abs(i) < Math.abs(a) ? e.scrollTop += i : e.scrollTop += a;
  }
}
const yt = I({
  components: {
    PickerPopup: ee
  },
  emits: {
    select: (e) => L(e),
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
    const r = _(null), s = _(null), o = u(() => e.pageDate ?? e.selected), c = _(o.value.getHours()), i = _(o.value.getMinutes());
    ue(
      () => e.selected,
      (l) => {
        let D = 0, g = 0;
        l && (D = l.getHours(), g = l.getMinutes()), c.value = D, i.value = g;
      }
    );
    const a = u(
      () => [...Array(24).keys()].map(
        (l) => ({
          value: l,
          date: me(new Date(o.value.getTime()), {
            hours: l,
            minutes: i.value,
            seconds: 0
          }),
          selected: c.value === l,
          ref: _(null)
        })
      )
    ), p = u(
      () => [...Array(60).keys()].map((l) => ({
        value: l,
        date: me(new Date(o.value.getTime()), {
          hours: c.value,
          minutes: l,
          seconds: 0
        }),
        selected: i.value === l,
        ref: _(null)
      }))
    ), O = (l) => {
      i.value = l.value, t("select", l.date);
    }, d = () => {
      const l = a.value.find(
        (g) => {
          var y, m;
          return ((m = (y = g.ref.value) == null ? void 0 : y.classList) == null ? void 0 : m.contains("selected")) ?? !1;
        }
      ), D = p.value.find(
        (g) => {
          var y, m;
          return ((m = (y = g.ref.value) == null ? void 0 : y.classList) == null ? void 0 : m.contains("selected")) ?? !1;
        }
      );
      l && D && (pe(r.value, l.ref.value), pe(s.value, D.ref.value));
    };
    return ue(
      () => e.visible,
      (l) => {
        l && _e(d);
      }
    ), {
      hoursListRef: r,
      minutesListRef: s,
      hours: c,
      minutes: i,
      hoursList: a,
      minutesList: p,
      padStartZero: (l) => `0${l}`.substr(-2),
      selectMinutes: O,
      isEnabled: (l) => {
        var D, g, y, m;
        return !((g = (D = e.disabledTime) == null ? void 0 : D.dates) != null && g.some(
          (k) => Ue(l, k) && Ze(l, k)
        ) || (m = (y = e.disabledTime) == null ? void 0 : y.predicate) != null && m.call(y, l));
      },
      scroll: d
    };
  }
});
const vt = {
  ref: "hoursListRef",
  class: "v3dp__column"
}, ht = ["disabled", "onClick"], bt = {
  ref: "minutesListRef",
  class: "v3dp__column"
}, Dt = ["disabled", "onClick"];
function kt(e, t, r, s, o, c) {
  const i = C("picker-popup");
  return b(), W(i, {
    headingClickable: "",
    columnCount: 2,
    leftDisabled: !0,
    rightDisabled: !0,
    viewMode: "time",
    onHeading: t[0] || (t[0] = (a) => e.$emit("back"))
  }, {
    heading: F(() => [
      x(q(e.padStartZero(e.hours)) + ":" + q(e.padStartZero(e.minutes)), 1)
    ]),
    body: F(() => [
      f("div", vt, [
        (b(!0), V(N, null, Q(e.hoursList, (a) => (b(), V("button", {
          key: a.value,
          ref_for: !0,
          ref: a.ref,
          class: A([{ selected: a.selected }, "v3dp__element_button__hour"]),
          disabled: !e.isEnabled(a.date),
          onClick: B((p) => e.hours = a.value, ["stop", "prevent"])
        }, [
          f("span", null, q(e.padStartZero(a.value)), 1)
        ], 10, ht))), 128))
      ], 512),
      f("div", bt, [
        (b(!0), V(N, null, Q(e.minutesList, (a) => (b(), V("button", {
          key: a.value,
          ref_for: !0,
          ref: a.ref,
          class: A([{ selected: a.selected }, "v3dp__element_button__minute"]),
          disabled: !e.isEnabled(a.date),
          onClick: B((p) => e.selectMinutes(a), ["stop", "prevent"])
        }, [
          f("span", null, q(e.padStartZero(a.value)), 1)
        ], 10, Dt))), 128))
      ], 512)
    ]),
    _: 1
  });
}
const wt = /* @__PURE__ */ R(yt, [["render", kt], ["__scopeId", "data-v-a01d90e1"]]), J = ["time", "day", "month", "year"], Lt = (e, t, r = void 0) => {
  let s = r || /* @__PURE__ */ new Date();
  return e && (s = We([e, s])), t && (s = ze([t, s])), s;
}, $t = I({
  components: {
    YearPicker: dt,
    MonthPicker: mt,
    DayPicker: gt,
    TimePicker: wt
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
      validate: (e) => typeof e == "string" && J.includes(e)
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
      validate: (e) => typeof e == "string" && J.includes(e)
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
    "update:modelValue": (e) => e == null || L(e),
    decadePageChanged: (e) => !0,
    yearPageChanged: (e) => !0,
    monthPageChanged: (e) => !0,
    opened: () => !0,
    closed: () => !0
  },
  setup(e, { emit: t, attrs: r }) {
    const s = _("none"), o = _(e.startingViewDate), c = _(null), i = _(!1), a = _("");
    ne(() => {
      const n = fe(a.value, e.inputFormat, /* @__PURE__ */ new Date(), {
        locale: e.locale
      });
      L(n) && (o.value = n);
    }), ne(
      () => a.value = e.modelValue && L(e.modelValue) ? X(e.modelValue, e.inputFormat, {
        locale: e.locale
      }) : ""
    );
    const p = (n = "none") => {
      e.disabled || (n !== "none" && s.value === "none" && (o.value = e.modelValue || Lt(e.lowerLimit, e.upperLimit, o.value)), s.value = n, t(n !== "none" ? "opened" : "closed"));
    };
    ne(() => {
      e.disabled && (s.value = "none");
    });
    const O = (n, w) => {
      o.value = w, n === "year" ? t("decadePageChanged", w) : n === "month" ? t("yearPageChanged", w) : n === "day" && t("monthPageChanged", w);
    }, d = (n) => {
      o.value = n, e.minimumView === "year" ? (p("none"), t("update:modelValue", n)) : s.value = "month";
    }, h = (n) => {
      o.value = n, e.minimumView === "month" ? (p("none"), t("update:modelValue", n)) : s.value = "day";
    }, v = (n) => {
      o.value = n, e.minimumView === "day" ? (p("none"), t("update:modelValue", n)) : s.value = "time";
    }, l = (n) => {
      p("none"), t("update:modelValue", n);
    }, D = () => {
      e.clearable && (p("none"), t("update:modelValue", null), o.value = e.startingViewDate);
    }, g = () => i.value = !0, y = () => p(z.value), m = () => {
      i.value = !1;
      const n = j(c.value.value);
      H(n) || t("update:modelValue", null), p();
    }, k = (n) => {
      const w = n.keyCode ? n.keyCode : n.which;
      if ([
        27,
        // escape
        13
        // enter
      ].includes(w) && c.value.blur(), e.typeable) {
        if (e.mask && ![n.key, n.code].includes("Backspace")) {
          let $ = c.value.value;
          const re = n.key;
          if ("0123456789".includes(re)) {
            $ = $.slice(0, -1);
            const P = te.find((ae) => $.length === ae.idx);
            P && ($ += P.char), $ += re;
          } else {
            const P = te.find((ae) => $.length === ae.idx + 1);
            P && ($ = $.slice(0, -1) + P.char);
          }
          const de = te.find((P) => $.length === P.idx);
          de && ($ += de.char), c.value.value = $;
        }
        const oe = j(c.value.value);
        H(oe) && (a.value = c.value.value, t("update:modelValue", oe));
      }
    }, H = (n) => L(n) && a.value === X(n, e.inputFormat, { locale: e.locale }), j = (n) => fe(
      n,
      e.inputFormat,
      /* @__PURE__ */ new Date(),
      { locale: e.locale }
    ), z = u(() => {
      const n = J.indexOf(e.startingView), w = J.indexOf(e.minimumView);
      return n < w ? e.minimumView : e.startingView;
    }), De = (n) => Object.fromEntries(
      Object.entries(n ?? {}).filter(([w, M]) => w.startsWith("--"))
    ), ke = () => e.startingView === "time" && e.minimumView === "time" ? null : s.value = "day", te = ((n) => {
      const w = [];
      for (let M = 0; M < n.length; M++)
        /^[0-9a-zA-Z]+$/.test(n[M]) || w.push({ idx: M, char: n[M] });
      return w;
    })(e.inputFormat);
    return {
      blur: m,
      focus: y,
      click: g,
      input: a,
      inputRef: c,
      pageDate: o,
      renderView: p,
      updatePageDate: O,
      selectYear: d,
      selectMonth: h,
      selectDay: v,
      selectTime: l,
      keyUp: k,
      viewShown: s,
      goBackFromTimepicker: ke,
      clearModelValue: D,
      initialView: z,
      log: (n) => console.log(n),
      variables: De
    };
  }
});
const St = { class: "v3dp__input_wrapper" }, _t = ["readonly", "placeholder", "disabled", "tabindex"], Vt = { class: "v3dp__clearable" };
function Ot(e, t, r, s, o, c) {
  const i = C("year-picker"), a = C("month-picker"), p = C("day-picker"), O = C("time-picker");
  return b(), V("div", {
    class: "v3dp__datepicker",
    style: ge(e.variables(e.$attrs.style))
  }, [
    f("div", St, [
      T(f("input", Ve({
        type: "text",
        ref: "inputRef",
        readonly: !e.typeable,
        "onUpdate:modelValue": t[0] || (t[0] = (d) => e.input = d)
      }, e.$attrs, {
        placeholder: e.placeholder,
        disabled: e.disabled,
        tabindex: e.disabled ? -1 : 0,
        onKeyup: t[1] || (t[1] = (...d) => e.keyUp && e.keyUp(...d)),
        onBlur: t[2] || (t[2] = (...d) => e.blur && e.blur(...d)),
        onFocus: t[3] || (t[3] = (...d) => e.focus && e.focus(...d)),
        onClick: t[4] || (t[4] = (...d) => e.click && e.click(...d))
      }), null, 16, _t), [
        [Oe, e.input]
      ]),
      T(f("div", Vt, [
        E(e.$slots, "clear", { onClear: e.clearModelValue }, () => [
          f("i", {
            onClick: t[5] || (t[5] = (d) => e.clearModelValue())
          }, "x")
        ])
      ], 512), [
        [Y, e.clearable && e.modelValue]
      ])
    ]),
    T(K(i, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[6] || (t[6] = (d) => e.updatePageDate("year", d)),
      selected: e.modelValue,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      onSelect: e.selectYear
    }, null, 8, ["pageDate", "selected", "lowerLimit", "upperLimit", "onSelect"]), [
      [Y, e.viewShown === "year"]
    ]),
    T(K(a, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[7] || (t[7] = (d) => e.updatePageDate("month", d)),
      selected: e.modelValue,
      onSelect: e.selectMonth,
      lowerLimit: e.lowerLimit,
      upperLimit: e.upperLimit,
      format: e.monthListFormat,
      locale: e.locale,
      onBack: t[8] || (t[8] = (d) => e.viewShown = "year")
    }, null, 8, ["pageDate", "selected", "onSelect", "lowerLimit", "upperLimit", "format", "locale"]), [
      [Y, e.viewShown === "month"]
    ]),
    T(K(p, {
      pageDate: e.pageDate,
      "onUpdate:pageDate": t[9] || (t[9] = (d) => e.updatePageDate("day", d)),
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
      onBack: t[10] || (t[10] = (d) => e.viewShown = "month")
    }, null, 8, ["pageDate", "selected", "weekStartsOn", "lowerLimit", "upperLimit", "headingFormat", "disabledDates", "locale", "weekdayFormat", "allow-outside-interval", "format", "onSelect"]), [
      [Y, e.viewShown === "day"]
    ]),
    T(K(O, {
      pageDate: e.pageDate,
      visible: e.viewShown === "time",
      selected: e.modelValue,
      disabledTime: e.disabledTime,
      onSelect: e.selectTime,
      onBack: e.goBackFromTimepicker
    }, null, 8, ["pageDate", "visible", "selected", "disabledTime", "onSelect", "onBack"]), [
      [Y, e.viewShown === "time"]
    ])
  ], 4);
}
const Pt = /* @__PURE__ */ R($t, [["render", Ot]]);
export {
  Pt as default
};
