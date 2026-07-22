import { METRIC_RANGES } from "@/constants";
import { Device, MetricReadings } from "@/types";
import { getDeviceReadings } from "@/utils";

type MetricReadingsWithProgress = Array<MetricReadings[number] & { progress: number }>;

export function getIndividualDeviceReadings(device: Device): MetricReadingsWithProgress {
  const readings = getDeviceReadings(device);

  return readings.map(({ metric, value, quality }) => {
    const range = METRIC_RANGES[metric];
    const progress = ((value - range.min) / (range.max - range.min)) * 100;
    const clamped = Math.min(100, Math.max(0, Math.round(progress)));

    return { metric, value, quality, progress: clamped };
  });
}
