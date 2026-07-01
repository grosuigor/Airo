import type { StylesGroup } from "@/lib/theme";
import { colors } from "@/lib/tokens";

export const styles: StylesGroup = {
  root: (theme) => ({
    border: "1.5px solid transparent",
    borderRadius: `${theme.radii.card}px`,
    background: `
      linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default}) padding-box,
      linear-gradient(135deg, ${colors.pin.gradientStart} 0%, ${colors.pin.gradientEnd} 100%) border-box
    `,
    p: 1,
  }),
};
