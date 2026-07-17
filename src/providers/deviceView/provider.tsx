"use client";

import { startTransition, useCallback, useEffect, useMemo, useState } from "react";

import { useBackdropContext } from "@/providers/backdrop";
import { useDevicesContext } from "@/providers/devices";

import { DeviceViewContext } from "./context";

export function DeviceViewProvider({ children }: React.PropsWithChildren) {
  const { devices } = useDevicesContext();
  const { open, isInStack } = useBackdropContext();
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    if (!isInStack) {
      startTransition(() => {
        setDeviceId(null);
      });
    }
  }, [isInStack]);

  const device = useMemo(() => {
    return devices.find((device) => device.id === deviceId) ?? null;
  }, [devices, deviceId]);

  const inspect = useCallback(
    (id: string) => {
      const index = devices.findIndex((device) => device.id === id);
      if (index === -1) {
        return;
      }
      setDeviceId(id);
      open();
    },
    [devices, open],
  );

  return (
    <DeviceViewContext.Provider value={{ device, inspect }}>{children}</DeviceViewContext.Provider>
  );
}
