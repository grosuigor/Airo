import type { Metric, MetricRange } from "@/types";

export const DEVICE_METRICS: Metric[] = [
  "temperature",
  "humidity",
  "pressure",
  "co2",
  "pm25",
  "pm10",
];

export const DEVICE_METRIC_LABELS: Record<Metric, string> = {
  temperature: "Temperature",
  humidity: "Humidity",
  pressure: "Pressure",
  co2: "CO2",
  pm25: "PM2.5",
  pm10: "PM10",
};

export const METRIC_UNITS: Record<Metric, { value: string; isInLabel: boolean }> = {
  temperature: { value: "°C", isInLabel: false },
  humidity: { value: "%", isInLabel: false },
  pressure: { value: "Pa", isInLabel: true },
  co2: { value: "ppm", isInLabel: true },
  pm25: { value: "µg/m³", isInLabel: true },
  pm10: { value: "µg/m³", isInLabel: true },
};

export const METRIC_RANGES: Record<Metric, MetricRange> = {
  temperature: {
    min: -8,
    max: 36,
    decimals: 1,
    good: [16, 24],
    mid: [5, 30],
  },
  humidity: {
    min: 25,
    max: 95,
    decimals: 0,
    good: [40, 60],
    mid: [30, 75],
  },
  pressure: {
    min: 990,
    max: 1035,
    decimals: 0,
    good: [1005, 1020],
    mid: [995, 1028],
  },
  co2: {
    min: 400,
    max: 1100,
    decimals: 0,
    good: [400, 600],
    mid: [400, 900],
  },
  pm25: {
    min: 2,
    max: 55,
    decimals: 1,
    good: [2, 15],
    mid: [2, 35],
  },
  pm10: {
    min: 5,
    max: 80,
    decimals: 1,
    good: [5, 30],
    mid: [5, 50],
  },
};
