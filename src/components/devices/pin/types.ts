import type { BoxProps } from "@mui/material/Box";

export type DevicePinProps = Omit<BoxProps, "children" | "value"> & {
  value?: number | string;
};
