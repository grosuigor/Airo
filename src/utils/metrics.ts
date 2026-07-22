import type { MetricColor } from "@/lib/tokens";
import type { DeviceMetricData, DeviceMetrics } from "@/types";

import { generatePseudoRandomNumber } from "./coordinates";

type MetricRange = {
  min: number;
  max: number;
  decimals: number;
  good: [number, number];
  mid: [number, number];
};

/** Channel index (0–5) used to decorrelate seeds per metric. */
export const METRIC_CHANNEL: Record<DeviceMetrics, number> = {
  temperature: 0,
  humidity: 1,
  pressure: 2,
  co2: 3,
  pm25: 4,
  pm10: 5,
};

const METRIC_RANGES: Record<DeviceMetrics, MetricRange> = {
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

/** Higher = healthier (used for averaging into an overall score). */
const QUALITY_SCORE: Record<MetricColor, number> = {
  green: 1,
  orange: 0.5,
  red: 0,
};

export type MetricReading = {
  value: number;
  quality: MetricColor;
};

export type DeviceReadings = {
  byMetric: Partial<Record<DeviceMetrics, MetricReading>>;
  overall: {
    /** Average healthiness of selected metrics, 0–100 (higher is better). */
    score: number;
    quality: MetricColor;
  };
};

function isInBand(value: number, [from, to]: [number, number]): boolean {
  return value >= from && value <= to;
}

function mapValueToColor(value: number, range: MetricRange): MetricColor {
  if (isInBand(value, range.good)) {
    return "green";
  }

  if (isInBand(value, range.mid)) {
    return "orange";
  }

  return "red";
}

function averageQuality(qualities: MetricColor[]): MetricColor {
  if (qualities.length === 0) {
    return "green";
  }

  const average =
    qualities.reduce((sum, quality) => sum + QUALITY_SCORE[quality], 0) / qualities.length;

  if (average >= 2 / 3) {
    return "green";
  }

  if (average >= 1 / 3) {
    return "orange";
  }

  return "red";
}

function averageScore(qualities: MetricColor[]): number {
  if (qualities.length === 0) {
    return 100;
  }

  const average =
    qualities.reduce((sum, quality) => sum + QUALITY_SCORE[quality], 0) / qualities.length;

  return Math.round(average * 100);
}

/**
 * Scales a normalized [0, 1] seed to a Chișinău-typical metric reading and quality color.
 *
 * @param value Normalized seed in the range [0, 1].
 * @param metric Target device metric.
 * @returns Scaled value and green / orange / red quality.
 */
export function scaleMetricValue(value: number, metric: DeviceMetrics): MetricReading {
  const clamped = Math.min(1, Math.max(0, value));
  const range = METRIC_RANGES[metric];
  const scaled = range.min + clamped * (range.max - range.min);
  const rounded = Number(scaled.toFixed(range.decimals));

  return {
    value: rounded,
    quality: mapValueToColor(rounded, range),
  };
}

/**
 * Builds per-metric readings plus an overall score/color from the device's selected metrics.
 * Recalculate whenever coordinates or the selected metrics list change.
 */
export function getDeviceReadings(device: DeviceMetricData): DeviceReadings {
  const byMetric: DeviceReadings["byMetric"] = {};
  const qualities: MetricColor[] = [];

  for (const metric of device.metrics) {
    const seed = generatePseudoRandomNumber(device.coordinates, METRIC_CHANNEL[metric]);
    const reading = scaleMetricValue(seed, metric);

    byMetric[metric] = reading;
    qualities.push(reading.quality);
  }

  return {
    byMetric,
    overall: {
      score: averageScore(qualities),
      quality: averageQuality(qualities),
    },
  };
}
