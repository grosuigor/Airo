import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    flexGrow: 1,
    width: "100%",
    gap: 2,
  },
  panels: {
    display: "grid",
  },
  panel: {
    gridArea: "1 / 1",
    display: "grid",
    gap: 2,
    '&[data-active="false"]': {
      pointerEvents: "none",
    },
  },
};
