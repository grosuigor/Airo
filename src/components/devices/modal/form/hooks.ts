import { type MouseEvent, useCallback, useState } from "react";

import { useBackdropContext, useDevicesDispatchContext, useToastContext } from "@/providers";
import type { Device } from "@/types";
import { generateId } from "@/utils";

import { DEVICE_METRICS } from "../../data";

export function useDeviceForm() {
  const dispatch = useDevicesDispatchContext();
  const { close } = useBackdropContext();
  const { showToast } = useToastContext();

  const [device, setDevice] = useState<Device>({
    id: "",
    name: "",
    location: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
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
      const form = e.currentTarget.form;
      if (!form?.checkValidity()) {
        form?.reportValidity();
        return;
      }
      const id = generateId();
      dispatch({ type: "ADD", payload: { ...device, id } });
      close();
      showToast("The device was added.", "success");
    },
    [device, dispatch, close, showToast],
  );

  return {
    device,
    changeField,
    saveDevice,
  };
}
