import type { Components, Theme } from "@mui/material/styles";

export const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: theme.airo.sizes.buttonHeight,
      borderRadius: theme.airo.radii.control,
      padding: "8px 16px",
      "&.MuiButton-contained": {
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
        },
        "&:active": {
          backgroundColor: theme.palette.primary.dark,
        },
      },
      "&.MuiButton-outlined": {
        borderColor: theme.palette.divider,
        color: theme.palette.text.primary,
        "&:hover": {
          borderColor: theme.palette.divider,
          backgroundColor: "rgba(255, 255, 255, 0.04)",
        },
      },
    }),
  },
};
