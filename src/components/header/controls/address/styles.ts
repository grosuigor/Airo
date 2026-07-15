import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  input: (theme) => ({
    minWidth: 400,
    "& .MuiInputBase-root": {
      borderRadius: theme.radii.pill,
    },
  }),
};
