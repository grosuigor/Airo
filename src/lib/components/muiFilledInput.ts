import type { Components, Theme } from "@mui/material/styles";

import { filledInputRootStyles } from "./filledInputRootStyles";

export const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  styleOverrides: {
    root: ({ theme }) => filledInputRootStyles(theme),
  },
};
