let L_screens = null;
import { Pseudo, Media } from "./resources/res";

import { lookup } from "./helpers/utilities";

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

export function compile(c) {
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

export function setScreen(s) {
  L_screens = s;
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
    else s.push("(min-width: " + L_screens[m[i]] + ")");
  }
  return "@media " + s.join(" and ");
};

export function printRules(rules) {
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
