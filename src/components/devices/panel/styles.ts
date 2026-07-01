import type { SxProps, Theme } from "@mui/material/styles";

export const styles: Record<string, SxProps<Theme>> = {
  root: (theme) => ({
    alignItems: "center",
    p: 1.5,
    bgcolor: "background.paper",
    borderRadius: `${theme.radii.control}px`,
    maxWidth: 351,
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
  },
  location: {
    color: "text.secondary",
  },
};
