import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    gridArea: "1 / 1",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    minHeight: 200,
    py: 4,
  },
  message: {
    textAlign: "center",
  },
  actions: {
    gap: 2,
  },
  button: {
    minWidth: 160,
    px: 3,
  },
};
