"use client";

import { useCallback, useMemo, useState } from "react";

import { useMap } from "@vis.gl/react-google-maps";

import { MAIN_MAP_ID } from "@/components/map/view/data";
import { useDevicesContext } from "@/providers";
import type { Device } from "@/types";

const DEVICE_ZOOM = 15;
const MIN_QUERY_LENGTH = 3;

export function useAddressField() {
  const map = useMap(MAIN_MAP_ID);
  const { devices } = useDevicesContext();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(() => {
    if (!isOpen) return [];

    const normalized = inputValue.trim().toLowerCase();
    if (!normalized) return devices;

    return devices.filter(
      ({ name, location }) =>
        name.toLowerCase().includes(normalized) || location.toLowerCase().includes(normalized),
    );
  }, [devices, inputValue, isOpen]);

  const handleInputChange = useCallback(
    (_: React.SyntheticEvent, value: string, reason: string) => {
      if (reason === "input") {
        setInputValue(value);
        setIsOpen(value.trim().length >= MIN_QUERY_LENGTH);
        return;
      }

      if (reason === "clear") {
        setInputValue("");
        setIsOpen(false);
      }
    },
    [],
  );

  const handleSelect = useCallback(
    (_: React.SyntheticEvent, device: Device | null) => {
      setIsOpen(false);
      queueMicrotask(() => {
        (document.activeElement as HTMLElement | null)?.blur();
      });

      if (!device || !map) return;
      if (!device.coordinates.latitude && !device.coordinates.longitude) return;

      setInputValue(device.location);

      map.panTo({
        lat: device.coordinates.latitude,
        lng: device.coordinates.longitude,
      });

      const zoom = map.getZoom();
      if (zoom === undefined || zoom < DEVICE_ZOOM) {
        map.setZoom(DEVICE_ZOOM);
      }
    },
    [map],
  );

  return {
    open: isOpen,
    onClose: () => setIsOpen(false),
    inputValue,
    options,
    onInputChange: handleInputChange,
    onChange: handleSelect,
  };
}
