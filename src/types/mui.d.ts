import type { CSSProperties } from "react";

import type { radii, sizes } from "@/lib/tokens";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleMd: CSSProperties;
    titleSm: CSSProperties;
    chartValue: CSSProperties;
    helper: CSSProperties;
    placeholder: CSSProperties;
    micro: CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleMd?: CSSProperties;
    titleSm?: CSSProperties;
    chartValue?: CSSProperties;
    helper?: CSSProperties;
    placeholder?: CSSProperties;
    micro?: CSSProperties;
  }

  interface PaletteColor {
    accent?: string;
  }

  interface SimplePaletteColorOptions {
    accent?: string;
  }

  interface Theme {
    radii: radii;
    sizes: sizes;
  }

  interface ThemeOptions {
    radii?: radii;
    sizes?: sizes;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleMd: true;
    titleSm: true;
    chartValue: true;
    helper: true;
    placeholder: true;
    micro: true;
  }
}

export {};
