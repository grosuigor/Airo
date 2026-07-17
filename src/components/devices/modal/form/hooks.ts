import { type MouseEvent, useCallback, useState } from "react";

import {
  useBackdropContext,
  useDevicesDispatchContext,
  useDeviceViewContext,
  useToastContext,
} from "@/providers";
import type { Device, LocationSelection } from "@/types";
import { generateId } from "@/utils";
import { hasValidCoordinates } from "@/utils";

import { DUMMY_DEVICE } from "./data";

export function useDeviceForm() {
  const dispatch = useDevicesDispatchContext();
  const { device: editableDevice } = useDeviceViewContext();
  const { close } = useBackdropContext();
  const { showToast } = useToastContext();

  const [device, setDevice] = useState<Device>(editableDevice ?? DUMMY_DEVICE);

  const changeField = useCallback((field: keyof Device, value: Device[keyof Device]) => {
    setDevice((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setLocation = useCallback(({ location, coordinates }: LocationSelection) => {
    setDevice((prev) => ({ ...prev, location, coordinates }));
  }, []);

  const canSubmit =
    Boolean(device.name.trim()) &&
    Boolean(device.location.trim()) &&
    Boolean(device.description.trim()) &&
    Boolean(device.key.trim()) &&
    device.metrics.length > 0 &&
    hasValidCoordinates(device.coordinates);

  const addDevice = useCallback(() => {
    const id = generateId();
    dispatch({ type: "ADD", payload: { ...device, id } });
    showToast("The device was added.", "success");
  }, [device, dispatch, showToast]);

  const editDevice = useCallback(() => {
    dispatch({ type: "UPDATE", payload: { device } });
    showToast("The device was edited.", "success");
  }, [device, dispatch, showToast]);

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
      close();
      if (device.id !== "") {
        editDevice();
      } else {
        addDevice();
      }
    },
    [device, close, showToast, editDevice, addDevice],
  );

  return {
    device,
    changeField,
    setLocation,
    canSubmit,
    saveDevice,
  };
}
