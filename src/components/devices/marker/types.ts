import type { BoxProps } from "@mui/material/Box";

import { colors } from "@/lib/tokens";
import type { DeviceCoordinates } from "@/types";

type MarkerColor = keyof typeof colors.marker;

export type DeviceMarkerProps = Omit<BoxProps, "children" | "color" | "onClick"> &
  DeviceCoordinates & {
    color: MarkerColor;
    onClick?: () => void;
    "aria-label"?: string;
  };
