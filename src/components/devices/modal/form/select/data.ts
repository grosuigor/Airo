import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "@/components/devices/data";

export const metricsOptions = DEVICE_METRICS.map((metric) => ({
  label: DEVICE_METRIC_LABELS[metric],
  value: metric,
}));
