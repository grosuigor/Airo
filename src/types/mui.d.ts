import type { CSSProperties } from "react";

import type { AiroRadii, AiroSizes } from "@/lib/tokens";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleMd: CSSProperties;
    titleSm: CSSProperties;
    chartValue: CSSProperties;
    labelMuted: CSSProperties;
    helper: CSSProperties;
    placeholder: CSSProperties;
    micro: CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleMd?: CSSProperties;
    titleSm?: CSSProperties;
    chartValue?: CSSProperties;
    labelMuted?: CSSProperties;
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

  interface Palette {
    airo: {
      nav: string;
      elevated: string;
      textMuted: string;
      borderSubtle: string;
    };
  }

  interface PaletteOptions {
    airo?: Partial<Palette["airo"]>;
  }

  interface Theme {
    airo: {
      radii: AiroRadii;
      sizes: AiroSizes;
    };
  }

  interface ThemeOptions {
    airo?: {
      radii?: AiroRadii;
      sizes?: AiroSizes;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleMd: true;
    titleSm: true;
    chartValue: true;
    labelMuted: true;
    helper: true;
    placeholder: true;
    micro: true;
  }
}

export {};
