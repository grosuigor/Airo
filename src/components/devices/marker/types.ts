import type { BoxProps } from "@mui/material/Box";

import type { DeviceMetricData } from "@/types";

export type DeviceMarkerProps = Omit<BoxProps, "children" | "onClick"> & {
  device: DeviceMetricData;
  onClick?: () => void;
  "aria-label"?: string;
};
