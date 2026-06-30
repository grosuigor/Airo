import type { Components, Theme } from "@mui/material/styles";

export const MuiBadge: Components<Theme>["MuiBadge"] = {
  styleOverrides: {
    badge: ({ theme, ownerState }) =>
      ownerState.variant === "dot"
        ? {
            backgroundColor: theme.palette.error.accent,
          }
        : {},
  },
};
