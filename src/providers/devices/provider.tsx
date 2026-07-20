"use client";

import { useReducer } from "react";

import { useHydration } from "@/hooks";

import { DevicesContext, DevicesDispatchContext } from "./context";
import { devicesReducer, initialDevicesState } from "./reducer";
import { readStoredDevices, writeStoredDevices } from "./storage";

export function DevicesProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(devicesReducer, initialDevicesState);

  useHydration({
    data: state.devices,
    read: readStoredDevices,
    write: writeStoredDevices,
    dispatch,
  });

  return (
    <DevicesContext.Provider value={state}>
      <DevicesDispatchContext.Provider value={dispatch}>{children}</DevicesDispatchContext.Provider>
    </DevicesContext.Provider>
  );
}
