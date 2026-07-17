"use client";

import { useContext } from "react";

import { DeviceViewContext } from "./context";

export function useDeviceViewContext() {
  const context = useContext(DeviceViewContext);
  if (!context) {
    throw new Error("useDeviceViewContext must be used within a DeviceViewProvider");
  }
  return context;
}
