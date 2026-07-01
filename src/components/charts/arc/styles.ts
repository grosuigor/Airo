import type { StylesGroup } from "@/lib/theme";
import { chartSizes } from "@/lib/tokens";

export const styles: StylesGroup = {
  root: (theme) => ({
    position: "relative",
    width: 154,
    height: 154,
    p: 2,
    borderRadius: "3px",
    bgcolor: theme.palette.background.paper,
    boxShadow: "0px 14.6px 19.5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  dots: {
    position: "absolute",
    top: 4,
    right: 4,
    color: "text.primary",
    p: 0.5,
  },
  subtitle: {
    color: "text.primary",
    opacity: 0.7,
    mt: 0.5,
    mb: 1.5,
  },
  chartContainer: {
    position: "relative",
    width: chartSizes.arc,
    height: chartSizes.arc,
    display: "grid",
    placeItems: "center",
  },
  chart: {
    position: "absolute",
    inset: 0,
  },
};
