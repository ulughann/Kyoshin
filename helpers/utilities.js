import {
  Order,
  GridAuto,
  BackgroundGradient,
  FlexContent,
  WidthHeight,
  MaxWidth,
  Transitions,
  BoxShadow,
  Animation,
  FontFamily,
  FontWeight,
  FontSize,
  BorderRadius,
  LetterSpacing,
  LineHeight,
  DropShadow,
  BackgroundAttachment,
  BackgroundPosition,
  BackgroundSize,
  BackgroundClip,
  Blur,
  BorderWidth,
  Resize,
  Ease,
  ObjectFit,
  Flex,
} from "../resources/res.js";

import { hcolor, hisColor, hcolorUtil } from "./colors";
import { hspacing, hspacingPercent, hfloat, hargs } from "./helpers";

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

export const lookup = {
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
