"use client";

import { createTheme, type SxProps, type Theme } from "@mui/material/styles";

import { components } from "@/lib/components";
import { colors, radii, sizes, typography } from "@/lib/tokens";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data",
  },
  defaultColorScheme: "dark",
  radii: radii,
  sizes: sizes,
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: colors.primary.main,
          light: colors.primary.light,
          dark: colors.primary.dark,
          contrastText: colors.text.primary,
        },
        background: {
          default: colors.background.default,
          paper: colors.background.paper,
        },
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          disabled: colors.text.disabled,
        },
        error: {
          main: colors.error.main,
          accent: colors.error.accent,
        },
        success: {
          main: colors.success.main,
          light: colors.success.light,
          dark: colors.success.dark,
        },
        divider: colors.border.default,
        grey: colors.grey,
      },
    },
  },
  typography: {
    fontFamily: typography.body1.fontFamily,
    ...typography,
  },
  shape: {
    borderRadius: radii.control,
  },
  spacing: 8,
  components,
});

export default theme;

export type StylesGroup = Record<string, SxProps<Theme>>;
