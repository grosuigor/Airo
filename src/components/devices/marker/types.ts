import type { BoxProps } from "@mui/material/Box";

import type { Device } from "@/types";

export type DeviceMarkerProps = Omit<BoxProps, "children" | "onClick"> & {
  device: Device;
  onClick?: () => void;
  "aria-label"?: string;
};
