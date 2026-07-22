import type { BoxProps } from "@mui/material/Box";

import type { DeviceMetricData } from "@/types";

export type DevicePinProps = Omit<BoxProps, "children" | "value"> & {
  device: DeviceMetricData;
};
