import { DEVICE_METRICS, METRIC_RANGES } from "@/constants";
import type { MetricColor } from "@/lib/tokens";
import type { Device, DeviceScore, MetricRange, MetricReadings } from "@/types";

import { generatePseudoRandomNumber } from "./coordinates";

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

export function getDeviceReadings(device: Device, atMs?: number): MetricReadings {
  const readings: MetricReadings = [];

  for (const metric of device.metrics) {
    const metricIndex = DEVICE_METRICS.indexOf(metric);
    if (metricIndex === -1) {
      throw new Error(`Metric ${metric} not found`);
    }

    const seed = generatePseudoRandomNumber(device.coordinates, metricIndex, atMs);
    const range = METRIC_RANGES[metric];
    const scaled = range.min + seed * (range.max - range.min);
    const rounded = Number(scaled.toFixed(range.decimals));

    readings.push({ value: rounded, quality: mapValueToColor(rounded, range), metric });
  }

  return readings;
}

export function getDeviceScore(device: Device): DeviceScore {
  const readings = getDeviceReadings(device);

  if (readings.length === 0) {
    return {
      value: 100,
      quality: "green",
    };
  }

  const normalizedAverage =
    readings.reduce((sum, reading) => {
      const { min, max } = METRIC_RANGES[reading.metric];
      const span = max - min;
      return sum + (reading.value - min) / span;
    }, 0) / readings.length;

  const value = Math.round(normalizedAverage * 100);

  let quality: MetricColor = "green";
  if (value < 33) {
    quality = "red";
  } else if (value < 66) {
    quality = "orange";
  }

  return {
    value,
    quality,
  };
}
