import type { DeviceMetrics } from "@/types";

export const DEVICE_METRICS: DeviceMetrics[] = [
  "temperature",
  "humidity",
  "pressure",
  "co2",
  "pm25",
  "pm10",
];

export const DEVICE_METRIC_LABELS: Record<DeviceMetrics, string> = {
  temperature: "Temperature",
  humidity: "Humidity",
  pressure: "Pressure",
  co2: "CO2",
  pm25: "PM2.5",
  pm10: "PM10",
};
