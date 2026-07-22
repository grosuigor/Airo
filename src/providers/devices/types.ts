import type { Dispatch } from "react";

import type { DetailedDevice } from "@/types";

export type DevicesContextType = {
  devices: DetailedDevice[];
};

export type DevicesAction =
  | { type: "ADD"; payload: DetailedDevice }
  | { type: "REMOVE"; payload: string }
  | { type: "UPDATE"; payload: { device: DetailedDevice } }
  | { type: "SET"; payload: DetailedDevice[] };

export type DevicesDispatchContextType = Dispatch<DevicesAction>;
