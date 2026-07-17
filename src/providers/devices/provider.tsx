"use client";

import { startTransition, useEffect, useReducer, useRef } from "react";

import { DevicesContext, DevicesDispatchContext } from "./context";
import { devicesReducer, initialDevicesState } from "./reducer";
import { readStoredDevices, writeStoredDevices } from "./storage";

export function DevicesProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(devicesReducer, initialDevicesState);
  const isHydrated = useRef(false);

  useEffect(() => {
    const devices = readStoredDevices();

    startTransition(() => {
      dispatch({ type: "SET", payload: devices });
    });
  }, []);

  useEffect(() => {
    if (!isHydrated.current) {
      isHydrated.current = true;
      return;
    }

    writeStoredDevices(state.devices);
  }, [state.devices]);

  return (
    <DevicesContext.Provider value={state}>
      <DevicesDispatchContext.Provider value={dispatch}>{children}</DevicesDispatchContext.Provider>
    </DevicesContext.Provider>
  );
}
