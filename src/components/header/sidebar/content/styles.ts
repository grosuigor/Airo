import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  root: {
    alignItems: "center",
    textAlign: "center",
    gap: 4,
    maxWidth: 250,
    "& > h5": {
      fontWeight: 400,
    },
  },
  buttonContainer: {
    mt: 4,
    width: 250,
    gap: 4,
  },
};
