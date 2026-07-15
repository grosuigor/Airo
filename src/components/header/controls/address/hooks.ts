"use client";

import { type SyntheticEvent, useCallback, useMemo, useState } from "react";

import { useMap } from "@vis.gl/react-google-maps";

import { MAP_IDS } from "@/constants";
import { useDevicesContext } from "@/providers";
import type { Device } from "@/types";

import { filterOptions } from "./utils";
const DEVICE_ZOOM = 15;
const MIN_QUERY_LENGTH = 3;

export function useAddressField() {
  const map = useMap(MAP_IDS.MAIN);
  const { devices } = useDevicesContext();
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(() => {
    if (!isOpen) return [];

    return filterOptions(inputValue, devices);
  }, [devices, inputValue, isOpen]);

  const handleInputChange = useCallback((_: SyntheticEvent, value: string, reason: string) => {
    if (reason === "input") {
      setInputValue(value);
      setIsOpen(value.trim().length >= MIN_QUERY_LENGTH);
      return;
    }

    if (reason === "clear") {
      setInputValue("");
      setIsOpen(false);
    }
  }, []);

  const handleSelect = useCallback(
    (_: SyntheticEvent, device: Device | null) => {
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
