export type DeviceMetrics = "temperature" | "humidity" | "pressure" | "co2" | "pm25" | "pm10";

export type DeviceCoordinates = {
  latitude: number;
  longitude: number;
};

export type Device = {
  id: string;
  name: string;
  location: string;
  coordinates: DeviceCoordinates;
  description: string;
  metrics: DeviceMetrics[];
  key: string;
};
