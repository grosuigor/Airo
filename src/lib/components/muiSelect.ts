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
    filled: ({ theme }) => ({
      display: "flex",
      alignItems: "center",
      padding: 0,
      paddingLeft: 12,
      backgroundColor: "transparent",
      transition: theme.transitions.create("background-color"),
      "&:hover, &.Mui-focused": {
        backgroundColor: "transparent",
      },
      "&.Mui-disabled": {
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
