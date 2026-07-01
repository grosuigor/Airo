import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    position: "absolute",
    bottom: 40,
    right: 40,
    zIndex: 1200,
  },
  control: (theme) => ({
    bgcolor: theme.palette.primary.main,
    borderRadius: theme.radii.control,
    boxShadow: "0px 3px 0px 0px #00000026",
    "&:hover": {
      bgcolor: theme.palette.primary.dark,
    },
  }),
};
