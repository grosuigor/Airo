import type { Components, Theme } from "@mui/material/styles";

export const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
      minHeight: theme.sizes.inputHeight,
      borderRadius: theme.radii.control,
      backgroundColor: theme.palette.background.paper,
      transition: theme.transitions.create(["outline", "background-color"]),
      outline: "2px solid transparent",
      outlineOffset: 0,
      "&:before, &:after": {
        display: "none",
      },
      "&.Mui-error": {
        outline: `2px solid ${theme.palette.error.main}`,
      },
      "&:hover, &.Mui-focused, &.Mui-focusVisible": {
        outline: `2px solid ${theme.palette.primary.light}`,
        outlineOffset: 0,
      },
      "&.Mui-error:hover, &.Mui-error.Mui-focused, &.Mui-error.Mui-focusVisible": {
        outline: `2px solid ${theme.palette.error.accent}`,
        outlineOffset: 0,
      },
      "&:has(.MuiSelect-select):hover, &:has(.MuiSelect-select).Mui-focused": {
        backgroundColor: theme.palette.primary.light,
      },
      "&:has(.MuiSelect-select).Mui-disabled": {
        backgroundColor: theme.palette.background.paper,
      },
    }),
  },
};
