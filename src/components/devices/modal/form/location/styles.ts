import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  field: {
    flex: 1,
  },
  iconButton: {
    fontSize: "1.75rem",
    color: "text.secondary",
  },
  pickerPaper: {
    width: "100%",
    maxWidth: 720,
    borderRadius: 0,
    bgcolor: "background.default",
  },
  pickerContent: {
    gap: 2,
    p: 2.5,
  },
  mapContainer: {
    position: "relative",
    height: 360,
    width: "100%",
    overflow: "hidden",
  },
  hint: {
    color: "text.secondary",
  },
  pickerActions: {
    gap: 2,
    "& > button": {
      flex: 1,
    },
  },
};
