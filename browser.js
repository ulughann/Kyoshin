import { compile, setScreen, printRules } from "./compiler.js";

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

export function screen() {
  GetScreen();
}
