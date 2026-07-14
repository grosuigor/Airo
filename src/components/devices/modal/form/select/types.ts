import type { DeviceMetrics } from "@/components/devices/types";

export type SelectFieldProps = {
  metrics: DeviceMetrics[];
  changeField: (field: "metrics", value: string | DeviceMetrics[]) => void;
};
