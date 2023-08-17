(function () {
  'use strict';

  const Color = {
    gray: "F9FAFBF3F4F6E5E7EBD1D5DB9CA3AF6B72804B55633741511F2937111827",
    red: "FEF2F2FEE2E2FECACAFCA5A5F87171EF4444DC2626B91C1C991B1B7F1D1D",
    yellow: "FFFBEBFEF3C7FDE68AFCD34DFBBF24F59E0BD97706B4530992400E78350F",
    green: "ECFDF5D1FAE5A7F3D06EE7B734D39910B981059669047857065F46064E3B",
    blue: "EFF6FFDBEAFEBFDBFE93C5FD60A5FA3B82F62563EB1D4ED81E40AF1E3A8A",
    indigo: "EEF2FFE0E7FFC7D2FEA5B4FC818CF86366F14F46E54338CA3730A3312E81",
    pink: "FDF2F8FCE7F3FBCFE8F9A8D4F472B6EC4899DB2777DB27779D174D831843",
    purple: "F5F3FFEDE9FEDDD6FEC4B5FDA78BFA8B5CF67C3AED6D28D95B21B64C1D95",
  };

  const Spacing = {
    0.5: "0.125",
    1: "0.25",
    1.5: "0.375",
    2: "0.5",
    2.5: "0.625",
    3: "0.75",
    3.5: "0.875",
    4: "1",
    5: "1.25",
    6: "1.5",
    7: "1.75",
    8: "2",
    9: "2.25",
    10: "2.5",
    11: "2.75",
    12: "3",
    14: "3.5",
    16: "4",
    20: "5",
    24: "6",
    28: "7",
    32: "8",
    36: "9",
    40: "10",
    44: "11",
    48: "12",
    52: "13",
    56: "14",
    60: "15",
    64: "16",
    72: "18",
    80: "20",
    96: "24",
  };

  const ObjectFit = ["contain", "cover", "fill", "none", "scale"];

  const Flex = {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none",
  };

  const Pseudo = {
    only: 1,
    "first-of-type": 2,
    "last-of-type": 3,
    target: 4,
    default: 5,
    indeterminate: 6,
    "placeholder-shown": 7,
    autofill: 8,
    valid: 9,
    invalid: 10,
    "in-range": 11,
    "out-of-range": 12,
    first: 13,
    last: 14,
    odd: 15,
    even: 16,
    visited: 17,
    checked: 18,
    "focus-within": 19,
    hover: 20,
    focus: 21,
    "focus-visible": 22,
    active: 23,
    disabled: 24,
  };

  const Media = {
    sm: 100,
    md: 200,
    lg: 300,
    xl: 400,
    "2xl": 500,
    dark: 10,
  };

  const Order = { first: "-9999", last: "9999", none: "0" };

  const GridAuto = {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  };

  const BackgroundGradient = {
    t: "top",
    tr: "top right",
    r: "right",
    br: "bottom right",
    b: "bottom",
    bl: "bottom left",
    l: "left",
    tl: "top left",
  };

  const FlexContent = {
    center: "center",
    start: "flex-start",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
    stretch: "stretch",
  };

  const WidthHeight = {
    screen: "100vh",
    min: "min-content",
    max: "max-content",
  };

  const MaxWidth = {
    0: "0",
    xs: "20",
    sm: "24",
    md: "28",
    lg: "32",
    xl: "36",
    "2xl": "42",
    "3xl": "48",
    "4xl": "56",
    "5xl": "64",
    "6xl": "72",
    "7xl": "80",
  };

  const Transitions = {
    none: "none",
    all: "all",
    "": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors: "background-color, border-color, color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  };

  const BoxShadow = {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "0 0 #0000",
  };

  const Animation = {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
  };

  const FontFamily = {
    sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  };

  const FontWeight = {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  };

  const FontSize = {
    xs: ["0.75", "1rem"],
    sm: ["0.875", "1.25rem"],
    base: ["1", "1.5rem"],
    lg: ["1.125", "1.75rem"],
    xl: ["1.25", "1.75rem"],
    "2xl": ["1.5", "2rem"],
    "3xl": ["1.875", "2.25rem"],
    "4xl": ["2.25", "2.5rem"],
    "5xl": ["3", "1"],
    "6xl": ["3.75", "1"],
    "7xl": ["4.5", "1"],
    "8xl": ["6", "1"],
    "9xl": ["8", "1"],
  };

  const BorderRadius = {
    none: "0px",
    sm: "0.125rem",
    "": "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  };

  const LetterSpacing = {
    tighter: "-0.05",
    tight: "-0.025",
    normal: "0",
    wide: "0.025",
    wider: "0.05",
    widest: "0.1",
  };

  const LineHeight = {
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  };

  const DropShadow = {
    sm: "(0 1px 1px rgba(0,0,0,0.05))",
    "": "(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))",
    md: "(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
    lg: "(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
    xl: "(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))",
    "2xl": "(0 25px 25px rgba(0, 0, 0, 0.15))",
    none: "(0 0 #0000)",
  };

  const BackgroundAttachment = ["fixed", "local", "scroll"];

  const BackgroundPosition = ["bottom", "center", "left", "right", "top"];

  const BackgroundSize = ["auto", "cover", "contain"];

  const BackgroundClip = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
    text: "text",
  };

  const Blur = {
    none: "0",
    sm: "4px",
    "": "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  };

  const BorderWidth = { t: "top", r: "right", b: "bottom", l: "left" };

  const Resize = { none: "none", y: "vertical", x: "horizontal" };

  const Ease = {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  };

  let hcomp = (s, i) => parseInt(s.substring(i, i + 2), 16) + ",";

  function hhexColor(v) {
    if (v == "white") return "ffffff";
    if (v == "black") return "000000";

    let p = v.split("-");
    var c = Color[p[0]];
    if (c) {
      let s = parseInt(p[1]) / 100;
      s = s < 1 ? 0 : s * 6;
      return c.substring(s, s + 6);
    }
    return false;
  }

  let htransCurr = (v) =>
    v == "transparent" ? v : v == "current" ? "currentColor" : false;

  function hcolor(v, o, h) {
    if (!o) o = 1;
    var c = hhexColor(v);
    if (h) {
      if (c) return "#" + c;
      if (htransCurr(v)) return htransCurr(v);
    } else if (c)
      return "rgba(" + hcomp(c, 0) + hcomp(c, 2) + hcomp(c, 4) + o + ")";
  }

  let hisColor = (v) =>
    Color[v] ||
    v == "black" ||
    v == "white" ||
    v == "transparent" ||
    v == "current";

  function hcolorUtil(col, prop, name) {
    let tc = htransCurr(col);
    if (tc) return { [prop]: tc };
    return {
      [prop]: hcolor(col, "var(--tw-" + name + "-opacity)"),
      ["--tw-" + name + "-opacity"]: "1",
    };
  }

  let hpercent = (v, n) => {
    if (v == "full") return n.minus + "100%";
    if (v.indexOf("/") > -1) {
      let p = v.split("/");
      return n.minus + (parseInt(p[0]) / parseInt(p[1])) * 100 + "%";
    }
  };

  let hspacing = (v, n) => {
    if (v == "0" || v == "auto") return v;
    if (v == "px") return n.minus + "1px";
    v = Spacing[v];
    if (v) v = n.minus + v + "rem";
    return v;
  };

  let hspacingPercent = (v, n) => {
    let r = hspacing(v, n);
    if (!r) r = hpercent(v, n);
    return r;
  };

  let hfloat = (v) => (parseInt(v) / 100).toString();

  let hargs = (p, f, d) => p.slice(f).join(d ? d : "-");

  let uboxDecorationBreak = (p) => ({
    "box-decoration-break": p[1],
    "-webkit-box-decoration-break": p[1],
  });

  let uboxSizing = (p) => ({ "box-sizing": p[1] + "-box" });

  let udisplay = (p) => ({
    display: p[0] == "hidden" ? "none" : hargs(p, 0),
  });

  let uvisibility = (p) => ({
    visibility: p[0] == "visible" ? p[0] : "hidden",
  });

  let uposition = (p) => ({ position: p[0] });

  let uzindex = (p) => ({ "z-index": p[1] });

  let uclearFloat = (p) => ({ [p[0]]: p[1] });

  let uisolation = (p) => ({ isolation: p[1] ? "auto" : "isolate" });

  let uobjectFitPosition = (p) => {
    if (ObjectFit.includes(p[1])) return { "object-fit": hargs(p, 1) };
    return { "object-position": hargs(p, 1, " ") };
  };

  let uoverScrollFlow = (p) => {
    let n = p[0] == "overflow" ? p[0] : p[0] + "-behavior";
    if (p.length == 2) return { [n]: p[1] };
    return { [n + "-" + p[1]]: p[2] };
  };

  let uinset = (p, n) => {
    let v = p.length == 2 ? hspacingPercent(p[1], n) : hspacingPercent(p[2], n);
    if (p.length == 2) return { top: v, bottom: v, right: v, left: v };
    if (p[1] == "x") return { right: v, left: v };
    return { top: v, bottom: v };
  };

  let uflexDirection = (p) => {
    if (p[1] == "col") p[1] = "column";
    return { "flex-direction": hargs(p, 1) };
  };

  let uflexWrap = (p) => ({ "flex-wrap": hargs(p, 1) });

  let uflex = (p) => ({ flex: Flex[p[1]] });

  let uflexGrowShrink = (p) => ({
    ["flex-" + p[1]]: p[2] == "0" ? "0" : "1",
  });

  let uorder = (p) => {
    let r = Order[p[1]];
    return { order: r ? r : p[1] };
  };

  let ugridTemplate = (p) => {
    if (p[1] == "cols") p[1] = "columns";
    let r = p[2] == "none" ? "none" : "repeat(" + p[2] + ", minmax(0, 1fr))";
    return { ["grid-template-" + p[1]]: r };
  };

  let ugridAutoFlow = (p) => {
    if (p[2] == "col") p[2] = "column";
    return { "grid-auto-flow": hargs(p, 2, " ") };
  };

  let ugridAuto = (p) => {
    if (p[1] == "cols") p[1] = "columns";
    return { ["grid-auto-" + p[1]]: GridAuto[p[2]] };
  };

  let ugap = (p, n) => {
    let v, prop;
    if (p.length == 2) {
      prop = "gap";
      v = hspacing(p[1], n);
    } else {
      v = hspacing(p[2], n);
      prop = p[1] == "x" ? "column-gap" : "row-gap";
    }
    return { [prop]: v };
  };

  let uspaceBetween = (p, n) => {
    n.csel = "> :not([hidden]) ~ :not([hidden])";
    if (p[2] == "reverse") {
      n.priority++;
      return { ["--tw-space-" + p[1] + "-reverse"]: "1" };
    }
    return {
      ["--tw-space-" + p[1] + "-reverse"]: "0",
      ["margin-" + (p[1] == "x" ? "right" : "bottom")]:
        "calc(" + hspacing(p[2], n) + " * var(--tw-space-" + p[1] + "-reverse))",
      ["margin-" + (p[1] == "x" ? "left" : "top")]:
        "calc(" +
        hspacing(p[2], n) +
        " * calc(1 - var(--tw-space-" +
        p[1] +
        "-reverse)))",
    };
  };

  let udivideWidth = (p, n) => {
    n.csel = "> :not([hidden]) ~ :not([hidden])";
    if (p[2] == "reverse") {
      n.priority++;
      return { ["--tw-divide-" + p[1] + "-reverse"]: "1" };
    }
    let w = p.length == 3 ? p[2] : "1";
    return {
      ["--tw-divide-" + p[1] + "-reverse"]: "0",
      ["border-" + (p[1] == "x" ? "right" : "bottom") + "-width"]:
        "calc(" + w + "px * var(--tw-divide-" + p[1] + "-reverse))",
      ["border-" + (p[1] == "x" ? "left" : "top") + "-width"]:
        "calc(" + w + "px * calc(1 - var(--tw-divide-" + p[1] + "-reverse)))",
    };
  };

  let udivideColor = (p, n) => {
    n.csel = "> :not([hidden]) ~ :not([hidden])";
    if (hisColor(p[1])) return hcolorUtil(hargs(p, 1), "border-color", "divide");
    return { "border-style": p[1] };
  };

  let ubackgroundOrigin = (p) => ({ "background-origin": p[2] + "-box" });

  let ubackground = (p, n) => {
    let p1 = p[1];
    if (p1 == "no" && p[2] == "repeat")
      return { "background-repeat": "no-repeat" };
    if (p1 == "none") return { "background-image": "none" };
    if (BackgroundAttachment.includes(p1)) return { "background-attachment": p1 };
    if (BackgroundPosition.includes(p1))
      return { "background-position": hargs(p, 1, " ") };
    if (BackgroundSize.includes(p1)) return { "background-size": p1 };
    return hcolorUtil(hargs(p, 1), "background-color", "bg");
  };

  let ubackgroundGradient = (p, n) => ({
    "background-image":
      "linear-gradient(to " +
      BackgroundGradient[p[3]] +
      ", var(--tw-gradient-stops))",
  });

  let ubackgroundRepeat = (p, n) => {
    let prop = "background-repeat";
    if (p[2] == "round" || p[2] == "space") return { [prop]: p[2] };
    return { [prop]: hargs(p, 1) };
  };

  let ubackgroundClip = (p, n) => ({
    "background-clip": BackgroundClip[p[2]],
  });

  let upadding = (p, n) => ({ padding: hspacing(p[1], n) });

  let upaddingX = (p, n) => ({
    "padding-left": hspacing(p[1], n),
    "padding-right": hspacing(p[1], n),
  });

  let upaddingY = (p, n) => ({
    "padding-top": hspacing(p[1], n),
    "padding-bottom": hspacing(p[1], n),
  });

  let upaddingT = (p, n) => ({ "padding-top": hspacing(p[1], n) });

  let upaddingB = (p, n) => ({ "padding-bottom": hspacing(p[1], n) });

  let upaddingL = (p, n) => ({ "padding-left": hspacing(p[1], n) });

  let upaddingR = (p, n) => ({ "padding-right": hspacing(p[1], n) });

  let umargin = (p, n) => ({ margin: hspacing(p[1], n) });

  let umarginX = (p, n) => ({
    "margin-left": hspacing(p[1], n),
    "margin-right": hspacing(p[1], n),
  });

  let umarginY = (p, n) => ({
    "margin-top": hspacing(p[1], n),
    "margin-bottom": hspacing(p[1], n),
  });

  let umarginT = (p, n) => ({ "margin-top": hspacing(p[1], n) });

  let umarginB = (p, n) => ({ "margin-bottom": hspacing(p[1], n) });

  let umarginL = (p, n) => ({ "margin-left": hspacing(p[1], n) });

  let umarginR = (p, n) => ({ "margin-right": hspacing(p[1], n) });

  let ucolorOpacity = (p, n) => {
    n.priority++;
    return { ["--tw-" + p[0] + "-opacity"]: hfloat(p[2]) };
  };

  let ufrom = (p, n) => {
    let to = hargs(p, 1);
    if (p[1] == "transparent") to = "black";
    else if (p[1] == "current") to = "white";
    return {
      "--tw-gradient-from": hcolor(hargs(p, 1), 1, true),
      "--tw-gradient-stops":
        "var(--tw-gradient-from), var(--tw-gradient-to, " + hcolor(to, "0") + ")",
    };
  };

  let uto = (p, n) => ({
    "--tw-gradient-to": hcolor(hargs(p, 1), 1, true),
  });

  let uvia = (p, n) => {
    let to = hargs(p, 1);
    if (p[1] == "transparent") to = "black";
    else if (p[1] == "current") to = "white";
    return {
      "--tw-gradient-stops":
        "var(--tw-gradient-from), " +
        hcolor(hargs(p, 1), 1, true) +
        ", var(--tw-gradient-to, " +
        hcolor(to, "0") +
        ")",
    };
  };

  let uinline = (p, n) => ({ display: hargs(p, 0) });

  let ugridSpan = (p, n) => {
    if (p[0] == "col") p[0] = "column";
    let r = p[2] == "full" ? "1 / -1" : "span " + p[2] + " / " + "span " + p[2];
    if (p[1] == "auto") r = "auto";
    return { ["grid-" + p[0]]: r };
  };

  let umaxWidth = (p) => {
    let s = p[2];
    let v = MaxWidth[s];
    if (v) v += "rem";
    else if (s == "none") v = "none";
    else if (s == "prose") v = "65ch";
    else if (s == "full") v = "100%";
    else {
      v = L_screens[p[3]];
      if (!v) v = WidthHeight[s];
    }
    return { "max-width": v };
  };

  let umaxHeight = (p, n) => {
    let r = hspacingPercent(p[2], n);
    if (!r) r = WidthHeight[p[2]];
    return { "max-height": r };
  };

  let uwidthHeight = (p, n) => {
    let prop = p[0] == "w" ? "width" : "height";
    let r = hspacingPercent(p[1], n);
    if (!r) r = WidthHeight[p[1]];
    if (p[0] == "w" && p[1] == "screen") r = "100vw";
    return { [prop]: r };
  };

  let uminWidthHeight = (p, n) => {
    let prop = p[1] == "w" ? "min-width" : "min-height";
    let r = WidthHeight[p[2]];
    if (!r) {
      r = hspacingPercent(p[2], n);
      if (!r) r = WidthHeight[(p[2], n)];
    }
    return { [prop]: r };
  };

  let ufillStroke = (p) => ({ [p[0]]: "currentColor" });

  let ustrokeWidth = (p) => ({ "stroke-width": p[1] });

  let uscreenReaders = (p) => {
    if (p[0] == "sr")
      return {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        "white-space": "nowrap",
        "border-width": "0",
      };
    return {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      clip: "auto",
      "white-space": "normal",
    };
  };

  let ublur = (p) => {
    let t = "",
      s = 1;
    if (p[0] == "backdrop") {
      t = "-backdrop";
      s = 2;
    }
    return hfilter(p[0], {
      ["--tw" + t + "-blur"]: "blur(" + Blur[p[s] ? p[s] : ""] + ")",
    });
  };

  let ufilterFloat = (p) => {
    let t = "",
      s = 1;
    if (p[0] == "backdrop") {
      t = "-backdrop";
      s = 2;
    }
    return hfilter(p[0], {
      ["--tw" + t + "-" + p[s - 1]]: p[s - 1] + "(" + hfloat(p[s]) + ")",
    });
  };

  let udropShadow = (p) =>
    hfilter(p[0], {
      "--tw-drop-shadow": "drop-shadow" + DropShadow[p[2] ? p[2] : ""],
    });

  let ugrayscaleInvertSepia = (p) => {
    let t = "",
      s = 1;
    if (p[0] == "backdrop") {
      t = "-backdrop";
      s = 2;
    }
    return hfilter(p[0], {
      ["--tw" + t + "-" + p[s - 1]]: p[s - 1] + "(" + (p[s] ? "0" : "1") + ")",
    });
  };

  let uhueRotate = (p, n) => {
    let t = "",
      s = 2;
    if (p[0] == "backdrop") {
      t = "-backdrop";
      s = 3;
    }
    return hfilter(p[0], {
      ["--tw" + t + "-hue-rotate"]: "hue-rotate(" + n.minus + p[s] + "deg)",
    });
  };

  let uplaceHolderColor = (p, n) => {
    n.pelem = "placeholder";
    return hcolorUtil(hargs(p, 1), "color", "placeholder");
  };

  let uplaceHolderOpacity = (p, n) => {
    n.pelem = "placeholder";
    return ucolorOpacity(p, n);
  };

  let ufontVariantNumeric = (p) => ({
    "font-variant-numeric": p[0] == "normal" ? "normal" : hargs(p, 0),
  });

  let utopRightBottomLeft = (p, n) => ({
    [p[0]]: hspacingPercent(p[1], n),
  });

  let utextDecoration = (p) => ({
    "text-decoration": p[0] == "no" ? "none" : hargs(p, 0),
  });

  let utextTransform = (p) => ({
    "text-transform": p[0] == "normal" ? "none" : p[0],
  });

  let utextOverFlow = (p) => {
    let prop = "text-overflow";
    if (p[0] == "truncate")
      return { overflow: "hidden", [prop]: "ellipsis", "white-space": "nowrap" };
    if (p[1] == "clip") return { [prop]: "clip" };
    return { [prop]: "ellipsis" };
  };

  let uverticalAlign = (p) => ({ "vertical-align": hargs(p, 1) });

  let uwhitespace = (p) => ({ "white-space": hargs(p, 1) });

  let uwordBreak = (p) => {
    if (p[1] == "normal")
      return { "overflow-wrap": "normal", "word-break": "normal" };
    if (p[1] == "words") return { "overflow-wrap": "break-word" };
    return { "word-break": "break-all" };
  };

  let utext = (p) => {
    if (hisColor(p[1])) return hcolorUtil(hargs(p, 1), "color", "text");
    let v = FontSize[p[1]];
    if (v) return { "font-size": v[0] + "rem", "line-height": v[1] };
    return { "text-align": p[1] };
  };

  let ulistTypePosition = (p) => {
    if (p[1] == "inside" || p[1] == "outside")
      return { "list-style-position": p[1] };
    return { "list-style-type": p[1] };
  };

  let uflexContent = (p, n) => {
    let prop = "align-content",
      s = 1;
    if (p[0] == "justify") prop = "justify-content";
    else if (p[0] == "place") {
      prop = "place-content";
      if (p[2] == "start" || p[2] == "end") return { [prop]: p[2] };
      s = 2;
    }
    return { [prop]: FlexContent[p[s]] };
  };

  let ujustifyPlaceSelfItems = (p, n) => ({ [p[0] + "-" + p[1]]: p[2] });

  let ualignSelfItems = (p, n) => {
    let v = p[1];
    if (p[1] == "start") v = "flex-start";
    else if (p[1] == "end") v = "flex-end";
    return { ["align-" + p[0]]: v };
  };

  let utable = (p, n) => {
    if (p[1] == "auto" || p[1] == "fixed") return { "table-layout": p[1] };
    return { display: hargs(p, 0) };
  };

  let ugridStartEnd = (p, n) => {
    if (p[0] == "col") p[0] = "column";
    return { ["grid-" + p[0] + "-" + p[1]]: p[2] };
  };

  let uappearance = (p) => ({ [p[0]]: p[1] });

  let ucursor = (p) => ({ [p[0]]: hargs(p, 1) });

  let uoutline = (p) => {
    let o = "2px solid transparent";
    if (p[1] == "white") o = "2px dotted white";
    if (p[1] == "black") o = "2px dotted black";
    return { outline: o, "outline-offset": "2px" };
  };

  let upointerEvents = (p) => ({ "pointer-events": p[2] });

  let uresize = (p) => {
    if (p.length == 1) return { [p[0]]: "both" };
    return { [p[0]]: Resize[p[1]] };
  };
  let uuserSelect = (p) => ({ "user-select": p[1] });

  let utransformGpu = (p) => ({
    "--tw-transform":
      "translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
  });

  let utransformOrigin = (p) => ({ "transform-origin": hargs(p, 1, " ") });

  let uscale = (p) => {
    let v;
    if (p[1] == "x") {
      v = hfloat(p[2]);
      return htransform({ "--tw-scale-x": v });
    } else if (p[1] == "y") {
      v = hfloat(p[2]);
      return htransform({ "--tw-scale-y": v });
    } else {
      v = hfloat(p[1]);
      return htransform({ "--tw-scale-x": v, "--tw-scale-y": v });
    }
  };

  let urotate = (p, n) => htransform({ "--tw-rotate": n.minus + p[1] + "deg" });

  let utranslate = (p, n) =>
    htransform({ ["--tw-translate-" + p[1]]: hspacingPercent(p[2], n) });

  let uskew = (p, n) =>
    htransform({ ["--tw-skew-" + p[1]]: n.minus + p[2] + "deg" });

  let utransition = (p) => ({
    "transition-property": Transitions[p[1] ? p[1] : ""],
    "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transition-duration": "150ms",
  });

  let udelayDuration = (p) => ({ ["transition-" + p[0]]: p[1] + "ms" });

  let uease = (p) => ({ "transition-timing-function": Ease[hargs(p, 1)] });

  let uborderCollapse = (p) => ({ "border-collapse": p[1] });

  let ublendMode = (p) => {
    if (p[0] == "bg") p[0] = "background";
    return { [p[0] + "-blend-mode"]: hargs(p, 2) };
  };

  let uopacity = (p) => ({ opacity: hfloat(p[1]) });

  let uboxShadow = (p) => ({
    "--tw-shadow": BoxShadow[p[1] ? p[1] : ""],
    "box-shadow":
      "var(--tw-ring-offset-shadow,0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
  });

  let uring = (p) => {
    if (p[1] == "inset") return { "--tw-ring-inset": "inset" };
    if (!hisColor(p[1])) {
      let v = p[1] ? p[1] : "3";
      return {
        "--tw-ring-shadow":
          "var(--tw-ring-inset) 0 0 0 calc(" +
          v +
          "px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "--tw-ring-offset-shadow":
          "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "box-shadow":
          "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      };
    }
    return hcolorUtil(hargs(p, 1), "--tw-ring-color", "ring");
  };

  let uringOffset = (p) => {
    if (!hisColor(p[2])) return { "--tw-ring-offset-width": p[2] + "px" };
    return { "--tw-ring-offset-color": hcolor(hargs(p, 2), "", true) };
  };

  let uborderRadius = (p) => {
    let v = BorderRadius[p[1] ? p[1] : ""];
    if (v) return { "border-radius": v };
    v = BorderRadius[p[2] ? p[2] : ""];
    let d = p[1],
      props = {};
    if (d == "t" || d == "l" || d == "tl") props["border-top-left-radius"] = v;
    if (d == "t" || d == "r" || d == "tr") props["border-top-right-radius"] = v;
    if (d == "r" || d == "b" || d == "br")
      props["border-bottom-right-radius"] = v;
    if (d == "b" || d == "l" || d == "bl") props["border-bottom-left-radius"] = v;
    return props;
  };

  let uborder = (p) => {
    if (hisColor(p[1])) return hcolorUtil(hargs(p, 1), "border-color", "border");
    if (!p[1] || !isNaN(p[1]))
      return { "border-width": (p[1] ? p[1] : "1") + "px" };
    return { "border-style": p[1] };
  };

  let uborderWidth = (p) => {
    let s = BorderWidth[p[1]];
    return { ["border-" + s + "-width"]: (p[2] ? p[2] : "1") + "px" };
  };

  let uanimate = (p) => ({ animation: Animation[p[1]] });

  let ufont = (p) => {
    let v = FontFamily[p[1]];
    if (v) return { "font-family": v };
    return { "font-weight": FontWeight[p[1]] };
  };

  let ufontSmoothing = (p) => {
    let web = "antialiased",
      moz = "grayscale";
    if (p[1]) (web = "auto"), (moz = "auto");
    return { "-webkit-font-smoothing": web, "-moz-osx-font-smoothing": moz };
  };

  let ufontStyle = (p) => {
    let v = "italic";
    if (p[1]) v = "normal";
    return { "font-style": v };
  };

  let uletterSpacing = (p) => ({
    "letter-spacing": LetterSpacing[p[1]] + "em",
  });

  let ulineHeight = (p) => ({ "line-height": LineHeight[p[1]] });

  const lookup = {
    absolute: uposition,
    align: uverticalAlign,
    "align-items": ualignSelfItems,
    "align-self": ualignSelfItems,
    animate: uanimate,
    antialiased: ufontSmoothing,
    "appearance-none": uappearance,
    auto: ugridAuto,
    "bg-blend": ublendMode,
    "backdrop-blur": ublur,
    "backdrop-brightness": ufilterFloat,
    "backdrop-contrast": ufilterFloat,
    "backdrop-grayscale": ugrayscaleInvertSepia,
    "backdrop-hue-rotate": uhueRotate,
    "backdrop-opacity": ufilterFloat,
    "backdrop-saturate": ufilterFloat,
    "backdrop-sepia": ugrayscaleInvertSepia,
    "backdrop-invert": ugrayscaleInvertSepia,
    bg: ubackground,
    "bg-gradient-to": ubackgroundGradient,
    "bg-opacity": ucolorOpacity,
    "bg-origin": ubackgroundOrigin,
    "bg-clip": ubackgroundClip,
    "bg-repeat": ubackgroundRepeat,
    block: udisplay,
    blur: ublur,
    border: uborder,
    "border-opacity": ucolorOpacity,
    "border-t": uborderWidth,
    "border-r": uborderWidth,
    "border-b": uborderWidth,
    "border-l": uborderWidth,
    "border-collapse": uborderCollapse,
    "border-separate": uborderCollapse,
    bottom: utopRightBottomLeft,
    box: uboxSizing,
    break: uwordBreak,
    brightness: ufilterFloat,
    capitalize: utextTransform,
    clear: uclearFloat,
    "col-span": ugridSpan,
    "col-auto": ugridSpan,
    "col-start": ugridStartEnd,
    "col-end": ugridStartEnd,
    content: uflexContent,
    contents: udisplay,
    contrast: ufilterFloat,
    cursor: ucursor,
    decoration: uboxDecorationBreak,
    duration: udelayDuration,
    delay: udelayDuration,
    "diagonal-fractions": ufontVariantNumeric,
    divide: udivideColor,
    "divide-opacity": ucolorOpacity,
    "divide-x": udivideWidth,
    "divide-y": udivideWidth,
    "drop-shadow": udropShadow,
    ease: uease,
    "fill-current": ufillStroke,
    fixed: uposition,
    flex: udisplay,
    "flex-col": uflexDirection,
    "flex-row": uflexDirection,
    "flex-nowrap": uflexWrap,
    "flex-wrap": uflexWrap,
    "flex-1": uflex,
    "flex-auto": uflex,
    "flex-initial": uflex,
    "flex-none": uflex,
    "flex-grow": uflexGrowShrink,
    "flex-shrink": uflexGrowShrink,
    float: uclearFloat,
    "flow-root": udisplay,
    from: ufrom,
    font: ufont,
    gap: ugap,
    grayscale: ugrayscaleInvertSepia,
    grid: udisplay,
    "grid-cols": ugridTemplate,
    "grid-rows": ugridTemplate,
    "grid-flow": ugridAutoFlow,
    h: uwidthHeight,
    hidden: udisplay,
    "hue-rotate": uhueRotate,
    inline: uinline,
    inset: uinset,
    invert: ugrayscaleInvertSepia,
    invisible: uvisibility,
    isolate: uisolation,
    isolation: uisolation,
    italic: ufontStyle,
    items: ualignSelfItems,
    justify: uflexContent,
    "justify-items": ujustifyPlaceSelfItems,
    "justify-self": ujustifyPlaceSelfItems,
    leading: ulineHeight,
    left: utopRightBottomLeft,
    "lining-nums": ufontVariantNumeric,
    list: ulistTypePosition,
    "list-item": udisplay,
    "line-through": utextDecoration,
    lowercase: utextTransform,
    "max-w": umaxWidth,
    "max-h": umaxHeight,
    m: umargin,
    mx: umarginX,
    my: umarginY,
    mt: umarginT,
    mb: umarginB,
    ml: umarginL,
    mr: umarginR,
    "min-w": uminWidthHeight,
    "min-h": uminWidthHeight,
    "mix-blend": ublendMode,
    "no-underline": utextDecoration,
    "not-sr-only": uscreenReaders,
    "normal-nums": ufontVariantNumeric,
    "normal-case": utextTransform,
    "not-italic": ufontStyle,
    object: uobjectFitPosition,
    "oldstyle-nums": ufontVariantNumeric,
    opacity: uopacity,
    order: uorder,
    ordinal: ufontVariantNumeric,
    outline: uoutline,
    origin: utransformOrigin,
    "overflow-ellipsis": utextOverFlow,
    "overflow-clip": utextOverFlow,
    "place-content": uflexContent,
    "place-self": ujustifyPlaceSelfItems,
    "place-items": ujustifyPlaceSelfItems,
    placeholder: uplaceHolderColor,
    "placeholder-opacity": uplaceHolderOpacity,
    "pointer-events": upointerEvents,
    p: upadding,
    px: upaddingX,
    py: upaddingY,
    pt: upaddingT,
    pb: upaddingB,
    pl: upaddingL,
    pr: upaddingR,
    "proportional-nums": ufontVariantNumeric,
    relative: uposition,
    resize: uresize,
    right: utopRightBottomLeft,
    "ring-offset": uringOffset,
    ring: uring,
    "ring-opacity": ucolorOpacity,
    "row-span": ugridSpan,
    "row-auto": ugridSpan,
    "row-start": ugridStartEnd,
    "row-end": ugridStartEnd,
    rounded: uborderRadius,
    saturate: ufilterFloat,
    scale: uscale,
    select: uuserSelect,
    self: ualignSelfItems,
    sepia: ugrayscaleInvertSepia,
    shadow: uboxShadow,
    skew: uskew,
    "slashed-zero": ufontVariantNumeric,
    space: uspaceBetween,
    static: uposition,
    sticky: uposition,
    "stacked-fractions": ufontVariantNumeric,
    "sr-only": uscreenReaders,
    "stroke-current": ufillStroke,
    stroke: ustrokeWidth,
    "subpixel-antialiased": ufontSmoothing,
    table: utable,
    "tabular-nums": ufontVariantNumeric,
    "text-opacity": ucolorOpacity,
    text: utext,
    to: uto,
    top: utopRightBottomLeft,
    rotate: urotate,
    tracking: uletterSpacing,
    transition: utransition,
    translate: utranslate,
    "transform-gpu": utransformGpu,
    truncate: utextOverFlow,
    underline: utextDecoration,
    uppercase: utextTransform,
    overflow: uoverScrollFlow,
    overscroll: uoverScrollFlow,
    via: uvia,
    visible: uvisibility,
    w: uwidthHeight,
    whitespace: uwhitespace,
    z: uzindex,
  };

  let L_screens$1 = null;

  let Group = (c, n) => {
    c = c.split("-");
    let p = Pseudo[c[1]];
    if (p) {
      n.priority += p * 10;
      n.psel = ".group:" + c[1];
    }
  };

  let Type = (n, v, l, a) => {
    let p = l[v];
    if (p) {
      n.priority += p * 10;
      a.push(v);
      return true;
    }
    return false;
  };

  let Compile = (c, n) => {
    let v = c.split(":");
    let len = v.length - 1;
    for (let i = 0; i < len; i++) {
      let curr = v[i];
      if (!Type(n, curr, Media, n.media)) {
        if (!Type(n, curr, Pseudo, n.pseudo)) {
          if (curr.startsWith("group")) Group(curr, n);
          else n.pelem = curr;
        }
      }
    }
    return v[len];
  };

  let classPrefix = (c, n) => {
    if (c.charAt(0) == ":") c = c.substring(1);
    if (c.charAt(0) == "!") {
      n.important = true;
      c = c.substring(1);
    }
    if (c.charAt(0) == "-") {
      n.minus = "-";
      c = c.substring(1);
    }
    return c;
  };

  function compile(c) {
    let node = { class: c, minus: "", priority: 0, media: [], pseudo: [] };
    var c = classPrefix(Compile(c, node), node);

    let parts = c.split("-");
    for (let i = parts.length; i > 0; i--) {
      let fn = lookup[parts.slice(0, i).join("-")];
      if (fn) {
        node.props = fn(parts, node);
        for (const [key, value] of Object.entries(node.props)) {
          if (!value) return false;
        }
        return node;
      }
    }
    return false;
  }

  function setScreen(s) {
    L_screens$1 = s;
  }

  let P_escape = (c) => {
    c = c.replace(/[^A-Za-z0-9_-]/g, "\\$&");
    if (/^[0-9]/.test(c)) {
      c = "\\" + c.charCodeAt(0).toString(16) + c.substring(1);
    }
    return "." + c;
  };

  let Rule = (n) => {
    let s = [];
    if (n.psel) s.push(n.psel + " ");
    s.push(P_escape(n.class));
    for (let i = 0; i < n.pseudo.length; i++) s.push(":" + n.pseudo[i]);
    if (n.pelem) s.push("::" + n.pelem);
    if (n.csel) s.push(" " + n.csel);
    s.push("{");
    for (const [p, v] of Object.entries(n.props)) {
      s.push(p + ":" + v + " !important;");
    }
    s.push("}\n");
    return s.join("");
  };

  let Sort = (rules) => {
    return rules.sort((e1, e2) => {
      if (!e1 && !e2) return 0;
      if (!e1 && e2) return -1;
      if (e1 && !e2) return 1;
      if (e2.priority < e1.priority) return 1;
      if (e2.priority > e1.priority) return -1;
      return 0;
    });
  };

  let Medias = (m) => {
    let s = [];
    for (let i = 0; i < m.length; i++) {
      if (m[i] == "dark") s.push("(prefers-color-scheme: dark)");
      else s.push("(min-width: " + L_screens$1[m[i]] + ")");
    }
    return "@media " + s.join(" and ");
  };

  function printRules(rules) {
    rules = Sort(rules);
    let s = [];
    let i = 0,
      len = rules.length;
    while (i < len) {
      let n = rules[i];
      if (n) {
        if (n.media.length > 0) s.push(Medias(n.media) + "{");
        s.push(Rule(n));
        if (n.media.length > 0) s.push("}");
      }
      i++;
    }
    return s.join("");
  }

  const StyleId = "kyoshin-styles";
  const BaseStyleId = "kyoshin-base";

  let Prefix = false;
  let Update = true;
  let Rules = {};
  let GetScreen = () => {
    return {
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1216px",
      "2xl": "1408px",
    };
  };

  const MutationConfig = {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true,
  };

  const BaseStyles = `
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }
@keyframes bounce { 0%, 100% { transform: translateY(-25%); animationTimingFunction: cubic-bezier(0.8, 0, 1, 1); }
50% { transform: translateY(0); animationTimingFunction: cubic-bezier(0, 0, 0.2, 1); } }
*,::before,::after {border-width: 0;border-style: solid;}
*, ::before, ::after {
--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-border-opacity: 1;
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
border-color: rgba(229, 231, 235, var(--tw-border-opacity));
--tw-shadow: 0 0 #0000;
--tw-hue-rotate: var(--tw-empty, );
--tw-invert: var(--tw-empty, );
--tw-ring-inset: var(--tw-empty, );
--tw-ring-offset-width: 0px;
--tw-contrast: var(--tw-empty, );
--tw-ring-color: rgba(59, 130, 246, 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-blur: var(--tw-empty, );
--tw-brightness: var(--tw-empty, );
--tw-backdrop-saturate: var(--tw-empty, );
--tw-grayscale: var(--tw-empty, );
--tw-backdrop-grayscale: var(--tw-empty, );
--tw-ring-offset-color: #fff;
--tw-saturate: var(--tw-empty, );
--tw-backdrop-blur: var(--tw-empty, );
--tw-backdrop-brightness: var(--tw-empty, );
--tw-backdrop-contrast: var(--tw-empty, );
--tw-backdrop-invert: var(--tw-empty, );
--tw-backdrop-opacity: var(--tw-empty, );
--tw-backdrop-hue-rotate: var(--tw-empty, );
--tw-backdrop-sepia: var(--tw-empty, );
--tw-sepia: var(--tw-empty, );
--tw-drop-shadow: var(--tw-empty, );
--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}`;

  let getStyle = (id) => {
    let style = document.getElementById(id);
    if (style === null) {
      style = document.createElement("style");
      style.id = id;
      document.head.append(style);
    }
    return style;
  };

  let updateStyles = () => {
    if (Update) {
      getStyle(StyleId).textContent = printRules(Object.values(Rules));
      Update = false;
    }
    let b = document.body;
    if (b instanceof HTMLElement && b.hasAttribute("hidden"))
      b.removeAttribute("hidden");
  };

  let addClass = (c) => {
    if (!c) return;
    if (!(c in Rules)) {
      if (Prefix && !c.includes(":")) {
        Rules[c] = false;
      } else {
        let node = compile(c);
        if (node) Update = true;
        Rules[c] = node;
      }
    }
  };

  let addElement = (el) => {
    let cl = el.classList;
    if (!cl) return;
    let len = cl.length;
    for (let i = 0; i < len; i++) {
      addClass(cl[i]);
    }
  };

  let addNode = (node) => {
    addElement(node);
    if (node.querySelectorAll) {
      let els = node.querySelectorAll("[class]");
      let i = 0,
        len = els.length;
      while (i < len) {
        addElement(els[i]);
        i++;
      }
    }
  };

  let start = () => {
    let body = document.body;
    if (body && body.hasAttribute) {
      if (
        body.hasAttribute("kyoshin-prefix") ||
        body.hasAttribute("data-kyoshin-prefix")
      )
        Prefix = true;
    }
    setScreen(GetScreen());
    getStyle(BaseStyleId).textContent = BaseStyles;
    addNode(document);
    updateStyles();

    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            addNode(mutation.addedNodes[i]);
          }
        } else if (mutation.type === "attributes") {
          if (mutation.target) addElement(mutation.target);
        }
      }
      updateStyles();
    };

    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, MutationConfig);
  };

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

})();
