import type { BoxProps } from "@mui/material/Box";

import type { Device } from "@/types";

export type DevicePinProps = Omit<BoxProps, "children" | "value"> & {
  device: Device;
};
