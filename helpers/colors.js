import { Color } from "../resources/res.js";

export let hcomp = (s, i) => parseInt(s.substring(i, i + 2), 16) + ",";

export function hhexColor(v) {
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

export let htransCurr = (v) =>
  v == "transparent" ? v : v == "current" ? "currentColor" : false;

export function hcolor(v, o, h) {
  if (!o) o = 1;
  var c = hhexColor(v);
  if (h) {
    if (c) return "#" + c;
    if (htransCurr(v)) return htransCurr(v);
  } else if (c)
    return "rgba(" + hcomp(c, 0) + hcomp(c, 2) + hcomp(c, 4) + o + ")";
}

export let hisColor = (v) =>
  Color[v] ||
  v == "black" ||
  v == "white" ||
  v == "transparent" ||
  v == "current";

export function hcolorUtil(col, prop, name) {
  let tc = htransCurr(col);
  if (tc) return { [prop]: tc };
  return {
    [prop]: hcolor(col, "var(--tw-" + name + "-opacity)"),
    ["--tw-" + name + "-opacity"]: "1",
  };
}
