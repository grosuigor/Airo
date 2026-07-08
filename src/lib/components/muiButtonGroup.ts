import type { Components, Theme } from "@mui/material/styles";

export const MuiButtonGroup: Components<Theme>["MuiButtonGroup"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      height: 62,
      borderRadius: theme.radii.card,
      boxShadow: "none",
    }),
    grouped: {
      boxShadow: "none",
      border: "none",
    },
    firstButton: ({ theme }) => ({
      borderTopLeftRadius: theme.radii.card,
      borderBottomLeftRadius: theme.radii.card,
    }),
    lastButton: ({ theme }) => ({
      borderTopRightRadius: theme.radii.card,
      borderBottomRightRadius: theme.radii.card,
    }),
  },
};
