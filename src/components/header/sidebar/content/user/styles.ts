import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
  },
  buttons: (theme) => ({
    width: "100%",
    height: 62,
    borderRadius: `${theme.radii.card}px`,
    boxShadow: "none",

    "& .MuiButtonGroup-grouped": {
      flex: 1,
      gap: 2,
      height: "100%",
      minHeight: "unset",
      border: "none",
      boxShadow: "none",
      borderRadius: 0,
    },
    "& .MuiButtonGroup-firstButton": {
      borderTopLeftRadius: `${theme.radii.card}px`,
      borderBottomLeftRadius: `${theme.radii.card}px`,
    },
    "& .MuiButtonGroup-lastButton": {
      borderTopRightRadius: `${theme.radii.card}px`,
      borderBottomRightRadius: `${theme.radii.card}px`,
    },
  }),
};
