import { useCallback } from "react";

import { DevicePanel } from "@/components/devices";
import { useDeviceViewContext } from "@/providers";

import type { DeviceListItemProps } from "./types";

export function DeviceListItem({ device }: DeviceListItemProps) {
  const { inspect } = useDeviceViewContext();

  const handlePanelClick = useCallback(
    (deviceId: string) => {
      inspect(deviceId);
    },
    [inspect],
  );

  return (
    <DevicePanel
      name={device.name}
      location={device.location}
      onClick={() => handlePanelClick(device.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handlePanelClick(device.id);
        }
      }}
    />
  );
}
