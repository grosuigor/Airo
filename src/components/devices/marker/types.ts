import type { IconButtonProps } from "@mui/material/IconButton";

import { colors } from "@/lib/tokens";
import { DeviceCoordinates } from "@/types";

type MarkerColor = keyof typeof colors.marker;

export type DeviceMarkerProps = Omit<IconButtonProps, "children" | "color"> &
  DeviceCoordinates & {
    color: MarkerColor;
  };
