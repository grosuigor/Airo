import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  input: (theme) => ({
    minWidth: 400,
    "& .MuiInputBase-root": {
      borderRadius: theme.radii.pill,
    },
  }),
  inputIcon: { pointerEvents: "auto", mr: 0 },
  buttonIcon: {
    color: "text.primary",
    fontSize: 18,
    "&:hover, &.Mui-focusVisible, &.Mui-focused": {
      color: "var(--mui-iconButton-hoverBg)",
    },
  },
  searchIcon: {
    color: "text.secondary",
    fontSize: 18,
  },
};
