import type { Components, Theme } from "@mui/material/styles";

export const MuiTab: Components<Theme>["MuiTab"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: theme.sizes.tabHeight,
      borderRadius: theme.radii.control,
      marginRight: 4,
      padding: "4px 12px",
      backgroundColor: theme.palette.background.paper,
      ...theme.typography.body1,
      color: theme.palette.text.secondary,
      textTransform: "none",
      transition: theme.transitions.create(["background-color", "color", "box-shadow"], {
        duration: theme.transitions.duration.shorter,
      }),
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
      },
      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        ...theme.typography.subtitle2,
        fontWeight: 700,
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
      },
    }),
  },
};
