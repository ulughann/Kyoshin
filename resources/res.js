export const Color = {
  gray: "F9FAFBF3F4F6E5E7EBD1D5DB9CA3AF6B72804B55633741511F2937111827",
  red: "FEF2F2FEE2E2FECACAFCA5A5F87171EF4444DC2626B91C1C991B1B7F1D1D",
  yellow: "FFFBEBFEF3C7FDE68AFCD34DFBBF24F59E0BD97706B4530992400E78350F",
  green: "ECFDF5D1FAE5A7F3D06EE7B734D39910B981059669047857065F46064E3B",
  blue: "EFF6FFDBEAFEBFDBFE93C5FD60A5FA3B82F62563EB1D4ED81E40AF1E3A8A",
  indigo: "EEF2FFE0E7FFC7D2FEA5B4FC818CF86366F14F46E54338CA3730A3312E81",
  pink: "FDF2F8FCE7F3FBCFE8F9A8D4F472B6EC4899DB2777DB27779D174D831843",
  purple: "F5F3FFEDE9FEDDD6FEC4B5FDA78BFA8B5CF67C3AED6D28D95B21B64C1D95",
};

export const Spacing = {
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

export const ObjectFit = ["contain", "cover", "fill", "none", "scale"];

export const Flex = {
  1: "1 1 0%",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none",
};

export const Pseudo = {
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

export const Media = {
  sm: 100,
  md: 200,
  lg: 300,
  xl: 400,
  "2xl": 500,
  dark: 10,
};

export const Order = { first: "-9999", last: "9999", none: "0" };

export const GridAuto = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)",
};

export const BackgroundGradient = {
  t: "top",
  tr: "top right",
  r: "right",
  br: "bottom right",
  b: "bottom",
  bl: "bottom left",
  l: "left",
  tl: "top left",
};

export const FlexContent = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch",
};

export const WidthHeight = {
  screen: "100vh",
  min: "min-content",
  max: "max-content",
};

export const MaxWidth = {
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

export const Transitions = {
  none: "none",
  all: "all",
  "": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
  colors: "background-color, border-color, color, fill, stroke",
  opacity: "opacity",
  shadow: "box-shadow",
  transform: "transform",
};

export const BoxShadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "0 0 #0000",
};

export const Animation = {
  none: "none",
  spin: "spin 1s linear infinite",
  ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  bounce: "bounce 1s infinite",
};

export const FontFamily = {
  sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

export const FontWeight = {
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

export const FontSize = {
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

export const BorderRadius = {
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

export const LetterSpacing = {
  tighter: "-0.05",
  tight: "-0.025",
  normal: "0",
  wide: "0.025",
  wider: "0.05",
  widest: "0.1",
};

export const LineHeight = {
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

export const DropShadow = {
  sm: "(0 1px 1px rgba(0,0,0,0.05))",
  "": "(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))",
  md: "(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))",
  lg: "(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))",
  xl: "(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))",
  "2xl": "(0 25px 25px rgba(0, 0, 0, 0.15))",
  none: "(0 0 #0000)",
};

export const BackgroundAttachment = ["fixed", "local", "scroll"];

export const BackgroundPosition = ["bottom", "center", "left", "right", "top"];

export const BackgroundSize = ["auto", "cover", "contain"];

export const BackgroundClip = {
  border: "border-box",
  padding: "padding-box",
  content: "content-box",
  text: "text",
};

export const Blur = {
  none: "0",
  sm: "4px",
  "": "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px",
};

export const BorderWidth = { t: "top", r: "right", b: "bottom", l: "left" };

export const Resize = { none: "none", y: "vertical", x: "horizontal" };

export const Ease = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
};
