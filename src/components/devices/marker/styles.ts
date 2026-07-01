import type { StylesGroup } from "@/lib/theme";

import { MARKER_BORDER, MARKER_SIZE } from "./data";

export const styles: StylesGroup = {
  root: (theme) => ({
    width: MARKER_SIZE + MARKER_BORDER,
    height: MARKER_SIZE + MARKER_BORDER,
    p: 0,
    flexShrink: 0,
    borderRadius: "50%",
    cursor: "pointer",
    border: `${MARKER_BORDER}px solid transparent`,
    transition: theme.transitions.create("border-color"),
    "&:hover, &.Mui-focusVisible, &.Mui-focused": {
      borderColor: theme.palette.text.primary,
    },
  }),
};
