import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
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
};
