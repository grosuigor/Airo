import { createElement } from "react";

import type { Components, Theme } from "@mui/material/styles";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const MuiAlert: Components<Theme>["MuiAlert"] = {
  defaultProps: {
    variant: "filled",
    iconMapping: {
      success: createElement(CheckCircleIcon),
      error: createElement(CancelIcon),
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      height: theme.spacing(8),
      borderRadius: theme.radii.control,
      paddingRight: theme.spacing(4),
      alignItems: "center",
      ...theme.typography.body1,
    }),
    icon: ({ theme }) => ({
      marginRight: theme.spacing(1),
      fontSize: theme.typography.body1.fontSize,
      padding: 0,
      opacity: 1,
    }),
    message: ({ theme }) => ({
      display: "flex",
      alignItems: "center",
      padding: 0,
      gap: theme.spacing(2.5),

      "& > .MuiAlertTitle-root": {
        margin: 0,
        ...theme.typography.titleMd,
      },
    }),
    action: ({ theme }) => ({
      paddingTop: 0,
      marginRight: 0,
      marginLeft: theme.spacing(2),
      alignItems: "center",

      "& > .MuiButton-root": {
        padding: theme.spacing(1, 4),
        backgroundColor: theme.palette.background.default,
      },
    }),
  },
};
