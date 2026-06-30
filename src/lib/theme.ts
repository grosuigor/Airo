"use client";

import { createTheme } from "@mui/material/styles";

import { airoComponents } from "@/lib/components";
import { airoColors, airoRadii, airoSizes, airoTypography } from "@/lib/tokens";

const airoPaletteExtension = {
  nav: airoColors.background.nav,
  elevated: airoColors.background.elevated,
  textMuted: airoColors.text.muted,
  borderSubtle: airoColors.border.subtle,
};

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  defaultColorScheme: "dark",
  airo: {
    radii: airoRadii,
    sizes: airoSizes,
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: airoColors.primary.main,
          light: airoColors.primary.light,
          dark: airoColors.primary.dark,
          contrastText: airoColors.text.primary,
        },
        background: {
          default: airoColors.background.default,
          paper: airoColors.background.paper,
        },
        text: {
          primary: airoColors.text.primary,
          secondary: airoColors.text.secondary,
          disabled: airoColors.text.disabled,
        },
        error: {
          main: airoColors.error.main,
          accent: airoColors.error.accent,
        },
        success: {
          main: airoColors.success.main,
          light: airoColors.success.light,
          dark: airoColors.success.dark,
        },
        divider: airoColors.border.default,
        grey: airoColors.grey,
        airo: airoPaletteExtension,
      },
    },
  },
  typography: {
    fontFamily: airoTypography.body1.fontFamily,
    ...airoTypography,
  },
  shape: {
    borderRadius: airoRadii.control,
  },
  spacing: 8,
  components: airoComponents,
});

export default theme;
