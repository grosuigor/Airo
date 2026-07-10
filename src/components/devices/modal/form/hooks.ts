import { useCallback, useState } from "react";

import { SelectChangeEvent } from "@mui/material/Select";

import { DEVICE_METRICS } from "../../data";
import type { Device, DeviceMetrics } from "../../types";

export function useDeviceForm() {
  const [device, setDevice] = useState<Device>({
    name: "",
    location: "",
    description: "",
    metrics: [...DEVICE_METRICS],
    key: "",
  });

  const changeName = useCallback(
    (name: string) => {
      setDevice({ ...device, name });
    },
    [device],
  );

  const changeLocation = useCallback(
    (location: string) => {
      setDevice({ ...device, location });
    },
    [device],
  );

  const changeDescription = useCallback(
    (description: string) => {
      setDevice({ ...device, description });
    },
    [device],
  );

  const changeMetrics = useCallback(
    (event: SelectChangeEvent<DeviceMetrics[]>) => {
      const { value } = event.target;
      setDevice({
        ...device,
        metrics: typeof value === "string" ? (value.split(",") as DeviceMetrics[]) : value,
      });
    },
    [device],
  );

  const changeKey = useCallback(
    (key: string) => {
      setDevice({ ...device, key });
    },
    [device],
  );

  return {
    device,
    changeName,
    changeLocation,
    changeDescription,
    changeMetrics,
    changeKey,
  };
}
