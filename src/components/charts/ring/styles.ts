import type { StylesGroup } from "@/lib/theme";
import { chartSizes, chartStroke } from "@/lib/tokens";

export const styles: StylesGroup = {
  root: (theme) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0.75,
    flex: 1,
    minWidth: 0,
    cursor: "default",

    "& .radial-gauge-progress": {
      transition: theme.transitions.create("stroke-width"),
    },

    "&:hover": {
      "& .metric-ring-chart-label": {
        color: theme.palette.text.primary,
        opacity: 1,
      },
      "& .radial-gauge-progress": {
        strokeWidth: chartStroke.hover,
      },
    },
  }),
  chartContainer: {
    position: "relative",
    width: chartSizes.ring,
    height: chartSizes.ring,
    display: "grid",
    placeItems: "center",
  },
  chart: {
    position: "absolute",
    inset: 0,
  },
  value: {
    textAlign: "center",
    px: 0.25,
  },
  label: (theme) => ({
    textAlign: "center",
    whiteSpace: "nowrap",
    color: theme.palette.text.secondary,
    transition: theme.transitions.create("color"),
  }),
};
