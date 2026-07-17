import type { Dispatch } from "react";

import type { Device } from "@/types";

export type DevicesContextType = {
  devices: Device[];
};

export type DevicesAction =
  | { type: "ADD"; payload: Device }
  | { type: "REMOVE"; payload: string }
  | { type: "UPDATE"; payload: { device: Device } }
  | { type: "SET"; payload: Device[] };

export type DevicesDispatchContextType = Dispatch<DevicesAction>;
