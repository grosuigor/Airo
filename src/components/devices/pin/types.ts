import type { IconButtonProps } from "@mui/material/IconButton";

export type DevicePinProps = Omit<IconButtonProps, "children"> & {
  value: number | string;
};
