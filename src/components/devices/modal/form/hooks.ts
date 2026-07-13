import { type MouseEvent, useCallback, useState } from "react";

import { useBackdropContext, useDevicesDispatchContext, useToastContext } from "@/providers";
import type { Device } from "@/types";

import { DEVICE_METRICS } from "../../data";

export function useDeviceForm() {
  const dispatch = useDevicesDispatchContext();
  const { close } = useBackdropContext();
  const { showToast } = useToastContext();

  const [device, setDevice] = useState<Device>({
    name: "",
    location: "",
    description: "",
    metrics: [...DEVICE_METRICS],
    key: "",
  });

  const changeField = useCallback(
    (field: keyof Device, value: Device[keyof Device]) => {
      setDevice({ ...device, [field]: value });
    },
    [device],
  );

  const saveDevice = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch({ type: "ADD", payload: device });
      close();
      showToast(
        device.name ? `Device "${device.name}" added successfully` : "Device added successfully",
        "success",
      );
    },
    [device, dispatch, close, showToast],
  );

  return {
    device,
    changeField,
    saveDevice,
  };
}
