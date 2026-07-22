import { MetricColor } from "@/lib/tokens";

export type Metric = "temperature" | "humidity" | "pressure" | "co2" | "pm25" | "pm10";

export type MetricRange = {
  min: number;
  max: number;
  decimals: number;
  good: [number, number];
  mid: [number, number];
};

type WithMetric<T> = T & { metric: Metric };

export type MetricReading = {
  value: number;
  quality: MetricColor;
};

export type MetricReadings = Array<WithMetric<MetricReading>>;

export type MetricPoint = {
  value: number;
  label: string;
};

export type ContinuousMetricReading = {
  values: MetricPoint[];
  threshold: number;
};

export type ContinuousMetricReadings = Array<WithMetric<ContinuousMetricReading>>;
