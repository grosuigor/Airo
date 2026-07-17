import type { Components, Theme } from "@mui/material/styles";

export const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  defaultProps: {
    anchor: "right",
    variant: "persistent",
    ModalProps: {
      keepMounted: true,
    },
  },
  styleOverrides: {
    root: {
      "& .MuiBackdrop-root": {
        bgcolor: "transparent",
      },
    },
    paper: ({ theme }) => ({
      width: "22.5rem",
      top: "3.75rem",
      height: "calc(100vh - 3.75rem)",
      bgcolor: "background.default",
      borderLeft: "none",
      padding: theme.spacing(4.5, 2),
    }),
  },
};
