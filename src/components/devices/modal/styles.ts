import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    "& .MuiDialog-paper": {
      width: "100%",
      maxWidth: 950,
      borderRadius: 0,
      bgcolor: "background.default",
    },
  },
  content: {
    gap: 6,
    p: 4,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
  },
};
