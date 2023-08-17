import { Spacing } from "../resources/res";

export let hpercent = (v, n) => {
  if (v == "full") return n.minus + "100%";
  if (v.indexOf("/") > -1) {
    let p = v.split("/");
    return n.minus + (parseInt(p[0]) / parseInt(p[1])) * 100 + "%";
  }
};

export let hspacing = (v, n) => {
  if (v == "0" || v == "auto") return v;
  if (v == "px") return n.minus + "1px";
  v = Spacing[v];
  if (v) v = n.minus + v + "rem";
  return v;
};

export let hspacingPercent = (v, n) => {
  let r = hspacing(v, n);
  if (!r) r = hpercent(v, n);
  return r;
};

export let hfloat = (v) => (parseInt(v) / 100).toString();

export let hargs = (p, f, d) => p.slice(f).join(d ? d : "-");

export let htransform = (d) => {
  d.transform = "var(--tw-transform)";
  return d;
};

export let hfilter = (t, d) => {
  if (t == "backdrop") d["backdrop-filter"] = "var(--tw-backdrop-filter)";
  else d.filter = "var(--tw-filter)";
  return d;
};
