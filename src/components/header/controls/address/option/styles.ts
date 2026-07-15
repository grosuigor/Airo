import type { StylesGroup } from "@/lib/theme";

export const styles: StylesGroup = {
  option: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "left",
    flexWrap: "wrap",
    gap: 0.25,
    py: 1,

    "& .MuiTypography-root": {
      width: "100%",
    },
  },
};
