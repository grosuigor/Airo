export type DeviceMetrics = "temperature" | "humidity" | "pressure" | "co2" | "pm25" | "pm10";

export type Device = {
  name: string;
  location: string;
  description: string;
  metrics: DeviceMetrics[];
  key: string;
};
