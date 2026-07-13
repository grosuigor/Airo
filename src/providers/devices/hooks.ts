"use client";

import { useContext } from "react";

import { DevicesContext, DevicesDispatchContext } from "./context";

export function useDevicesContext() {
  const context = useContext(DevicesContext);
  if (!context) {
    throw new Error("useDevicesContext must be used within a DevicesProvider");
  }
  return context;
}

export function useDevicesDispatchContext() {
  const context = useContext(DevicesDispatchContext);
  if (!context) {
    throw new Error("useDevicesDispatchContext must be used within a DevicesProvider");
  }
  return context;
}
