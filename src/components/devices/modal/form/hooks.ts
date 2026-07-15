import { type MouseEvent, useCallback, useState } from "react";

import { useBackdropContext, useDevicesDispatchContext, useToastContext } from "@/providers";
import type { Device, LocationSelection } from "@/types";
import { generateId } from "@/utils";
import { hasValidCoordinates } from "@/utils";

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

  const changeField = useCallback((field: keyof Device, value: Device[keyof Device]) => {
    setDevice((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setLocation = useCallback(({ location, coordinates }: LocationSelection) => {
    setDevice((prev) => ({ ...prev, location, coordinates }));
  }, []);

  const saveDevice = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (!form?.checkValidity()) {
        form?.reportValidity();
        return;
      }
      if (!hasValidCoordinates(device.coordinates)) {
        showToast("Select an address from the list or pick a point on the map.", "error");
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
    setLocation,
    saveDevice,
  };
}
