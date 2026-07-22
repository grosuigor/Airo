import { METRIC_RANGES } from "@/constants";
import type { ContinuousMetricReading, ContinuousMetricReadings, Device, Metric } from "@/types";

import { getDeviceReadingsFiller } from "./fillers";

export function getContinuousDeviceReadings(
  device: Device,
  type: "today" | "week",
): ContinuousMetricReadings {
  const filler = getDeviceReadingsFiller(type);
  const labeledReadings = filler(device);

  const continuousReadings: Partial<Record<Metric, ContinuousMetricReading>> = {};

  for (const [label, readings] of Object.entries(labeledReadings)) {
    for (const reading of readings) {
      if (continuousReadings[reading.metric]) {
        continuousReadings[reading.metric]?.values.push({
          value: reading.value,
          label,
        });
      } else {
        const threshold = METRIC_RANGES[reading.metric].good[1];
        continuousReadings[reading.metric] = {
          threshold,
          values: [
            {
              value: reading.value,
              label,
            },
          ],
        };
      }
    }
  }

  return Object.entries(continuousReadings).map(([metric, reading]) => ({
    metric: metric as Metric,
    ...reading,
  }));
}
