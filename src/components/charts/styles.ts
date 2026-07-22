import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: (theme) => ({
    position: "relative",
    width: "100%",
    p: 2,
    borderRadius: "3px",
    bgcolor: theme.palette.background.paper,
    boxShadow: "0px 14.6px 19.5px rgba(0, 0, 0, 0.1)",
    gap: 1,
  }),
  dots: {
    position: "absolute",
    top: 4,
    right: 4,
    color: "text.primary",
    p: 0.5,
  },
  title: {
    color: "text.primary",
    pr: 3,
  },
  subtitle: {
    flexGrow: 1,
    color: "text.primary",
    opacity: 0.7,
    mb: 1,
  },
};
