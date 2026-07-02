import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    zIndex: 1000,
    position: "fixed",
    px: 3,
    py: 1,
    top: 0,
    width: "100%",
    height: "3.75rem",
    backgroundColor: "background.default",
    borderBottom: "1px solid",
    borderColor: "background.paper",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "flex-end",
  },
};
