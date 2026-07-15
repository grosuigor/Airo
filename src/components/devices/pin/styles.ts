import type { StylesGroup } from "@/lib/theme";

import { CIRCLE_LEFT, CIRCLE_SIZE, CIRCLE_TOP, PIN_HEIGHT, PIN_WIDTH } from "./data";

export const styles: StylesGroup = {
  root: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    width: PIN_WIDTH,
    height: PIN_HEIGHT,
    p: 0,
    flexShrink: 0,
    lineHeight: 0,
    pointerEvents: "none",
  },
  circle: {
    position: "absolute",
    top: CIRCLE_TOP,
    left: CIRCLE_LEFT,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    bgcolor: "common.white",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
  },
  value: {
    color: "common.black",
    textTransform: "uppercase",
  },
};
