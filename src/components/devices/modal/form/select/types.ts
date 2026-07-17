import type { DeviceMetrics } from "@/types";

export type SelectFieldProps = {
  metrics: DeviceMetrics[];
  changeField: (field: "metrics", value: string | DeviceMetrics[]) => void;
};
