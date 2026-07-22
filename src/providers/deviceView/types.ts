import type { DetailedDevice } from "@/types";

export type DeviceViewContextType = {
  device: DetailedDevice | null;
  inspect: (deviceId: string) => void;
};
