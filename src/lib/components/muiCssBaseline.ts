import type { Components, Theme } from "@mui/material/styles";

export const MuiCssBaseline: Components<Theme>["MuiCssBaseline"] = {
  styleOverrides: (theme) => ({
    body: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  }),
};
