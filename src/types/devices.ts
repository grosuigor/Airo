export type DeviceMetrics = "temperature" | "humidity" | "pressure" | "co2" | "pm25" | "pm10";

export type Device = {
  id: string;
  name: string;
  location: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  description: string;
  metrics: DeviceMetrics[];
  key: string;
};
