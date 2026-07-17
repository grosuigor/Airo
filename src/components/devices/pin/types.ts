import type { BoxProps } from "@mui/material/Box";

import { DeviceCoordinates } from "@/types";

export type DevicePinProps = Omit<BoxProps, "children" | "value"> &
  DeviceCoordinates & {
    value?: number | string;
  };
