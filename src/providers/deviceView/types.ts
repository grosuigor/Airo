import type { Device } from "@/types";

export type DeviceViewContextType = {
  device: Device | null;
  inspect: (deviceId: string) => void;
};
