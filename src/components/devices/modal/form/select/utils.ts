import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "@/components/devices/data";
import type { DeviceMetrics } from "@/types";

export function renderValue(selected: DeviceMetrics[]) {
  if (selected.length === DEVICE_METRICS.length) {
    return "All metrics";
  }

  return selected.map((metric) => DEVICE_METRIC_LABELS[metric]).join(", ");
}
