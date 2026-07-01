import type { Components, Theme } from "@mui/material/styles";

import { textFieldErrorEndAdornment } from "@/lib/textFieldSlots";

export const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "filled",
    hiddenLabel: true,
    size: "small",
    slotProps: {
      input: {
        endAdornment: textFieldErrorEndAdornment,
      },
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "& .field-error-icon": {
        opacity: 0,
        visibility: "hidden",
        transition: theme.transitions.create(["opacity", "visibility"]),
      },
      "& .MuiFilledInput-root.Mui-error .field-error-icon": {
        opacity: 1,
        visibility: "visible",
      },
      "& .MuiFilledInput-input": {
        padding: "6px 12px",
        ...theme.typography.body1,
        "&::placeholder": {
          ...theme.typography.placeholder,
          color: theme.palette.text.secondary,
          opacity: 1,
        },
      },
      "& .MuiFormHelperText-root": {
        marginLeft: 0,
        marginTop: 4,
        ...theme.typography.helper,
      },
    }),
  },
};
