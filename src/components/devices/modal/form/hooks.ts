import { useCallback, useState } from "react";

import { DEVICE_METRICS } from "../../data";
import type { Device } from "../../types";

export function useDeviceForm() {
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

  return {
    device,
    changeField,
  };
}
