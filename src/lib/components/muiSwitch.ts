import type { Components, Theme } from "@mui/material/styles";

export const MuiSwitch: Components<Theme>["MuiSwitch"] = {
  styleOverrides: {
    root: {
      width: 57,
      height: 30,
      padding: 0,
    },
    switchBase: ({ theme }) => ({
      padding: 6,
      "&.Mui-checked": {
        transform: "translateX(27px)",
        color: theme.palette.text.primary,
        "& + .MuiSwitch-track": {
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette.airo.borderSubtle}`,
          opacity: 1,
        },
      },
    }),
    thumb: {
      width: 18,
      height: 18,
    },
    track: ({ theme }) => ({
      borderRadius: theme.airo.radii.pill,
      border: `1px solid ${theme.palette.airo.borderSubtle}`,
      backgroundColor: "transparent",
      opacity: 1,
    }),
  },
};
