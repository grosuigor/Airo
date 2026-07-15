import { useCallback, useEffect, useRef } from "react";

import { useMapsLibrary } from "@vis.gl/react-google-maps";

import type { DeviceCoordinates, LocationSelection } from "@/types";

import { isInsideChisinau } from "./utils";

export function useReverseGeocode() {
  const geocodingLib = useMapsLibrary("geocoding");
  const geocoderRef = useRef<google.maps.Geocoder | null>(null);

  useEffect(() => {
    if (!geocodingLib) return;
    geocoderRef.current = new geocodingLib.Geocoder();
  }, [geocodingLib]);

  return useCallback(async (coordinates: DeviceCoordinates): Promise<LocationSelection | null> => {
    if (!geocoderRef.current) return null;
    if (!isInsideChisinau(coordinates.latitude, coordinates.longitude)) return null;

    try {
      const { results } = await geocoderRef.current.geocode({
        location: { lat: coordinates.latitude, lng: coordinates.longitude },
        language: "ro",
        region: "md",
      });

      const address = results[0]?.formatted_address;
      if (!address) return null;

      return { location: address, coordinates };
    } catch {
      return null;
    }
  }, []);
}
