import type { Components, Theme } from "@mui/material/styles";

export const MuiTabs: Components<Theme>["MuiTabs"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: theme.airo.sizes.tabHeight,
    }),
    indicator: {
      display: "none",
    },
  },
};
