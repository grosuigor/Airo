import type { StylesGroup } from "@/lib/theme";

import { MARKER_BORDER, MARKER_BOX_SIZE, MARKER_RING_OFFSET, MARKER_SIZE } from "./data";

export const styles: StylesGroup = {
  root: (theme) => ({
    position: "relative",
    width: MARKER_BOX_SIZE + MARKER_BORDER * 2,
    height: MARKER_BOX_SIZE + MARKER_BORDER * 2,
    transform: `scale(0.75)`,
    boxSizing: "border-box",
    p: 0,
    m: 0,
    lineHeight: 0,
    fontSize: 0,
    flexShrink: 0,
    overflow: "visible",
    borderRadius: "50%",
    cursor: "pointer",
    border: `${MARKER_BORDER}px solid transparent`,
    opacity: 0,
    animation: `device-marker-fade-in ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut} forwards`,
    "@keyframes device-marker-fade-in": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    transition: theme.transitions.create("border-color"),
    "& > svg": {
      position: "absolute",
      top: MARKER_RING_OFFSET,
      left: MARKER_RING_OFFSET,
      display: "block",
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      margin: 0,
      padding: 0,
      pointerEvents: "none",
    },
  }),
  active: (theme) => ({
    borderColor: theme.palette.text.primary,
  }),
};
