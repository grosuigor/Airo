import type { StylesGroup } from "@/lib/theme";

import { SIZE } from "../data";

export const styles: StylesGroup = {
  chartContainer: {
    position: "relative",
    width: SIZE,
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
