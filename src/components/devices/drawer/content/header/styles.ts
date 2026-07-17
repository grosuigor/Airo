import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    width: "100%",
    gap: 1,
    "& svg": {
      width: 16,
      height: 16,
    },
  },
  name: {
    gap: 1.5,
    alignItems: "center",
  },
  row: {
    gap: 1,
    alignItems: "center",
  },
};
