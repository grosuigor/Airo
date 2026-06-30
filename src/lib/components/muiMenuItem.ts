import type { Components, Theme } from "@mui/material/styles";

export const MuiMenuItem: Components<Theme>["MuiMenuItem"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 36,
      ...theme.typography.body1,
      color: "#FFFFFF66",
      transition: theme.transitions.create("color"),
      "&:hover, &.Mui-focusVisible": {
        color: theme.palette.text.primary,
        backgroundColor: "transparent",
      },
      "&.Mui-selected": {
        backgroundColor: "transparent",
        color: "#FFFFFF66",
        fontWeight: theme.typography.body1.fontWeight,
      },
      "&.Mui-selected:hover, &.Mui-selected.Mui-focusVisible, &.Mui-selected.Mui-focused": {
        backgroundColor: "transparent",
        color: theme.palette.text.primary,
      },
      "&.Mui-disabled": {
        opacity: 1,
        color: theme.palette.airo.textMuted,
      },
    }),
  },
};
