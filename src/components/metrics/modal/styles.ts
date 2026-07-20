import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    "& .MuiDialog-paper": {
      width: "100%",
      maxWidth: 1100,
      borderRadius: 0,
      bgcolor: "background.default",
    },
  },
  content: {
    gap: 3,
    p: 4,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
  },
};
