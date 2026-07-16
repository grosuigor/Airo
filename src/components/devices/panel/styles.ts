import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: (theme) => ({
    alignItems: "center",
    p: 1.5,
    bgcolor: "background.paper",
    borderRadius: `${theme.radii.control}px`,
    maxWidth: 351,
    cursor: "pointer",
    outline: "none",
    transition: theme.transitions.create("background-color"),
    "&:hover, &:focus-visible": {
      bgcolor: "#4A525A",
    },
  }),
  iconBox: {
    position: "relative",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    bgcolor: "primary.main",
    flexShrink: 0,
  },
  icon: {
    position: "absolute",
    top: "50%",
    right: "-25%",
    transform: "translateY(-50%)",
  },
  textContainer: {
    flex: 1,
    minWidth: 0,
    textAlign: "left",
  },
  location: {
    color: "text.secondary",
  },
};
