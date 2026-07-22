import type { MetricColor } from "@/lib/tokens";

import type { Coordinates } from "./map";
import type { Metric } from "./metric";

export type Device = {
  coordinates: Coordinates;
  metrics: Metric[];
};

export type DeviceScore = {
  value: number;
  quality: MetricColor;
};

export type DetailedDevice = Device & {
  id: string;
  name: string;
  location: string;
  description: string;
  key: string;
};
