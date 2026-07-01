import type { Components, Theme } from "@mui/material/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const MuiSelect: Components<Theme>["MuiSelect"] = {
  defaultProps: {
    variant: "filled",
    size: "small",
    IconComponent: KeyboardArrowDownIcon,
    disableUnderline: true,
  },
  styleOverrides: {
    filled: ({ theme, ownerState }) => ({
      display: "flex",
      alignItems: "center",
      padding: 0,
      paddingLeft: 12,
      transition: theme.transitions.create("background-color"),
      "&:hover, &.Mui-focused": {
        backgroundColor: theme.palette.primary.light,
      },
      ...(ownerState.open && {
        backgroundColor: theme.palette.primary.light,
        outline: "none",
      }),
      "&.Mui-disabled": {
        backgroundColor: theme.palette.background.paper,
        WebkitTextFillColor: theme.palette.text.disabled,
      },
    }),
    select: {
      padding: 0,
      height: "100%",
    },
    icon: ({ theme }) => ({
      color: theme.palette.text.primary,
    }),
  },
};
