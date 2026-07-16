"use client";

import { startTransition, useCallback, useEffect, useState } from "react";

import { useBackdropContext } from "@/providers/backdrop";
import { useDevicesContext } from "@/providers/devices";
import type { Device } from "@/types";

import { DeviceViewContext } from "./context";

export function DeviceViewProvider({ children }: React.PropsWithChildren) {
  const { devices } = useDevicesContext();
  const { opened, open } = useBackdropContext();
  const [device, setDevice] = useState<Device | null>(null);

  useEffect(() => {
    if (!opened) {
      startTransition(() => {
        setDevice(null);
      });
    }
  }, [opened]);

  const inspect = useCallback(
    (deviceId: string) => {
      const device = devices.find((device) => device.id === deviceId);
      if (device) {
        setDevice(device);
        open();
      }
    },
    [devices, open],
  );

  return (
    <DeviceViewContext.Provider value={{ device, inspect }}>{children}</DeviceViewContext.Provider>
  );
}
