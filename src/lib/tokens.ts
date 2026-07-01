export const colors = {
  background: {
    default: "#30363D",
    paper: "#3C444C",
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

export const radii = {
  control: 2,
  card: 4,
  panel: 10,
  pill: 100,
} as const;

export const sizes = {
  buttonHeight: 40,
  inputHeight: 36,
  searchHeight: 34,
  tabHeight: 32,
} as const;

export const chartSizes = {
  arc: 81,
  ring: 60,
} as const;

export const chartStroke = {
  default: 2,
  hover: 6,
} as const;

export const letterSpacing = {
  default: "0.15px",
  compact: "0.03em",
} as const;

export const fontFamilies = {
  heading: "var(--font-fira-sans), sans-serif",
  body: "var(--font-source-sans), sans-serif",
} as const;

export const typography = {
  h1: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: letterSpacing.default,
  },
  h2: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "32px",
    letterSpacing: letterSpacing.default,
  },
  h3: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  h4: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  h5: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: letterSpacing.default,
  },
  h6: {
    fontFamily: fontFamilies.heading,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
  },
  titleMd: {
    fontFamily: fontFamilies.body,
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  titleSm: {
    fontFamily: fontFamilies.body,
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: letterSpacing.default,
  },
  subtitle1: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: letterSpacing.default,
  },
  subtitle2: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  body1: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  body2: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: letterSpacing.compact,
  },
  button: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
    textTransform: "none" as const,
  },
  caption: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "11px",
  },
  overline: {
    fontFamily: fontFamilies.body,
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "15px",
    textTransform: "none" as const,
  },
  chartValue: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    fontSize: "15.6px",
    lineHeight: "20px",
    textTransform: "uppercase" as const,
    textShadow: "0px 4.9px 4.9px rgba(0, 0, 0, 0.25)",
  },
  helper: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  placeholder: {
    fontFamily: fontFamilies.body,
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "24px",
    letterSpacing: letterSpacing.default,
  },
  micro: {
    fontFamily: fontFamilies.body,
    fontWeight: 400,
    fontSize: "10px",
    lineHeight: "13px",
    letterSpacing: letterSpacing.compact,
    textTransform: "uppercase" as const,
  },
} as const;

export type typographyVariant = keyof typeof typography;
export type MetricColor = keyof typeof colors.marker;
