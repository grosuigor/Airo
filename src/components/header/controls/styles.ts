import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    alignItems: "center",
  },
  clusterizationText: {
    color: "text.secondary",
    whiteSpace: "nowrap",
  },
  settingsInput: (theme) => ({
    minWidth: 400,
    "& .MuiInputBase-root": {
      borderRadius: theme.radii.pill,
    },
  }),
  settingsButton: { pointerEvents: "auto", mr: 0 },
  settingsButtonIcon: {
    color: "text.primary",
    fontSize: 18,
    "&:hover, &.Mui-focusVisible, &.Mui-focused": {
      color: "var(--mui-iconButton-hoverBg)",
    },
  },
  settingsSearchIcon: {
    color: "text.secondary",
    fontSize: 18,
  },
};
