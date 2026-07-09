import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    width: "100%",
    gap: 8,
  },
  devices: {
    gap: 3,
    alignItems: "center",
    textAlign: "center",

    "& > button": {
      fontWeight: 700,
      color: "text.primary",
    },
  },
  buttons: {
    width: "100%",

    "& > button": {
      flex: 1,
      gap: 2,
    },
  },
};
