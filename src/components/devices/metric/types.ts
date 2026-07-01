import type { StackProps } from "@mui/material/Stack";

export type DeviceMetricProps = Omit<StackProps, "children"> & {
  label: string;
  value: string;
};
