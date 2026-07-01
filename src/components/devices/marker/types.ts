import type { IconButtonProps } from "@mui/material/IconButton";

import { colors } from "@/lib/tokens";

type MarkerColor = keyof typeof colors.marker;

export type DeviceMarkerProps = Omit<IconButtonProps, "children" | "color"> & {
  color: MarkerColor;
};
