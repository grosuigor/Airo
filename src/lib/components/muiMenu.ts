import type { Components, Theme } from "@mui/material/styles";

export const MuiMenu: Components<Theme>["MuiMenu"] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    paper: {
      boxShadow: "none",
    },
  },
};
