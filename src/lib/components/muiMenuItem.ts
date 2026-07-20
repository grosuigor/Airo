import type { Components, Theme } from "@mui/material/styles";

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 36,
      ...theme.typography.body1,
      color: "#FFFFFF",
      transition: theme.transitions.create("color"),
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.background.default,
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontWeight: theme.typography.body1.fontWeight,
      },
      "&.Mui-selected:hover, &.Mui-selected.Mui-focusVisible, &.Mui-selected.Mui-focused": {
        backgroundColor: theme.palette.background.default,
      },
      "&.Mui-disabled": {
        opacity: 1,
        color: theme.palette.text.secondary,
      },
    }),
  },
};
