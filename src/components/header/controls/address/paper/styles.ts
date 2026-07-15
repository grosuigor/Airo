import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  addButton: (theme) => ({
    borderRadius: 0,
    justifyContent: "flex-start",
    px: 2,
    py: 1.25,
    color: theme.palette.text.primary,
  }),
};
