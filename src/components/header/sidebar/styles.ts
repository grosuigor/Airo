import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    "& .MuiBackdrop-root": {
      bgcolor: "transparent",
    },
    "& .MuiDrawer-paper": {
      width: "22.5rem",
      top: "3.75rem",
      height: "calc(100vh - 3.75rem)",
      bgcolor: "background.default",
    },
  },
  container: {
    width: "100%",
    height: "100%",
    px: 2,
    py: 4.5,
    gap: 4,
    alignItems: "center",
  },
};
