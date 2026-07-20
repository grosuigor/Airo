import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "@/constants";
import type { Metric } from "@/types";

export function renderValue(selected: Metric[]) {
  if (selected.length === DEVICE_METRICS.length) {
    return "All metrics";
  }

  return selected.map((metric) => DEVICE_METRIC_LABELS[metric]).join(", ");
}
