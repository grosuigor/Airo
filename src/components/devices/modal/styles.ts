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
    p: 2.5,
  },
  buttonsContainer: {
    gap: 2,

    "& > button": {
      flex: 1,
    },
  },
};
