export const airoColors = {
  background: {
    default: "#30363D",
    paper: "#3C444C",
    elevated: "#3C444D",
    nav: "#242C35",
  },
  primary: {
    main: "#6202EE",
    light: "#7A1EFF",
    dark: "#4B1797",
    gradientStart: "#A154F2",
    gradientEnd: "#8643E8",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "rgba(255, 255, 255, 0.6)",
    muted: "rgba(255, 255, 255, 0.4)",
    disabled: "rgba(255, 255, 255, 0.25)",
  },
  border: {
    default: "rgba(255, 255, 255, 0.6)",
    subtle: "#ACAFB1",
  },
  grey: {
    300: "#DADADA",
    400: "#BDBDBD",
    500: "#909090",
    600: "#6A6A6A",
    700: "#828282",
    chart: "#747D88",
  },
  error: {
    main: "#EB5757",
    accent: "#EA212D",
  },
  success: {
    dark: "#3E8525",
    main: "#20944E",
    light: "#ACF254",
  },
  marker: {
    green: { start: "#ACF254", end: "#51B72E" },
    orange: { start: "#F2B354", end: "#B75F2E" },
    red: { start: "#F27A54", end: "#F02121" },
  },
  pin: {
    gradientStart: "#ACF254",
    gradientEnd: "#20944E",
  },
} as const;

export const airoRadii = {
  control: 2,
  card: 4,
  panel: 10,
  pill: 100,
} as const;

export const airoSizes = {
  buttonHeight: 40,
  inputHeight: 36,
  searchHeight: 34,
  tabHeight: 32,
} as const;

export const airoChartSizes = {
  arc: 81,
  ring: 60,
} as const;

export const airoChartStroke = {
  default: 2,
  hover: 6,
} as const;

export const airoLetterSpacing = {
  default: "0.15px",
  compact: "0.03em",
} as const;

export const airoFontFamilies = {
  heading: "var(--font-fira-sans), sans-serif",
  body: "var(--font-source-sans), sans-serif",
} as const;

export const airoTypography = {
  h1: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: airoLetterSpacing.default,
  },
  h2: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "32px",
    letterSpacing: airoLetterSpacing.default,
  },
  h3: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  h4: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  h5: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: airoLetterSpacing.default,
  },
  h6: {
    fontFamily: airoFontFamilies.heading,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
  },
  titleMd: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  titleSm: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: airoLetterSpacing.default,
  },
  subtitle1: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: airoLetterSpacing.default,
  },
  subtitle2: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  body1: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  body2: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: airoLetterSpacing.compact,
  },
  button: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
    textTransform: "none" as const,
  },
  caption: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "11px",
  },
  overline: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "15px",
    textTransform: "none" as const,
  },
  chartValue: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 600,
    fontSize: "15.6px",
    lineHeight: "20px",
    textTransform: "uppercase" as const,
    textShadow: "0px 4.9px 4.9px rgba(0, 0, 0, 0.25)",
  },
  labelMuted: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
    opacity: 0.5,
  },
  helper: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  placeholder: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: airoLetterSpacing.default,
  },
  micro: {
    fontFamily: airoFontFamilies.body,
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "13px",
    letterSpacing: airoLetterSpacing.compact,
    textTransform: "uppercase" as const,
  },
} as const;

export type AiroTypographyVariant = keyof typeof airoTypography;
export type MetricColor = keyof typeof airoColors.marker;
