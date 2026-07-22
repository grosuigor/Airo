import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  chartContainer: {
    position: "relative",
    width: "55%",
    maxWidth: 160,
    minWidth: 72,
    aspectRatio: 1,
    display: "grid",
    placeItems: "center",
    alignSelf: "center",
  },
  chart: {
    position: "absolute",
    inset: 0,
  },
};
