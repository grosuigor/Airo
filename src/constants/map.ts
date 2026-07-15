import type { MapProps } from "@vis.gl/react-google-maps";

import type { DeviceCoordinates } from "@/types";

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!;

export const CHISINAU = {
  name: "Chișinău",
  center: { lat: 47.029839114464394, lng: 28.826235866221495 },
  bounds: {
    south: 46.96,
    west: 28.74,
    north: 47.08,
    east: 28.95,
  },
} as const;

export const MAP_IDS = {
  MAIN: "main-map",
  LOCATION: "location-map",
};

export const LOCATION_MAP_PROPS: MapProps = {
  defaultCenter: CHISINAU.center,
  defaultZoom: 14,
  gestureHandling: "greedy",
  colorScheme: "DARK",
  mapId,
  disableDefaultUI: true,
  restriction: {
    latLngBounds: CHISINAU.bounds,
    strictBounds: false,
  },
};

export const EMPTY_COORDINATES: DeviceCoordinates = { latitude: 0, longitude: 0 };
