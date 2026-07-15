import type { MapProps } from "@vis.gl/react-google-maps";

import { CHISINAU, EMPTY_COORDINATES, MAP_IDS } from "@/constants";
import type { DeviceCoordinates } from "@/types";

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!;

export function generateMapConfig(id: keyof typeof MAP_IDS): MapProps {
  return {
    id: MAP_IDS[id],
    defaultCenter: CHISINAU.center,
    defaultZoom: 14,
    gestureHandling: "greedy",
    colorScheme: "DARK",
    mapId: mapId,
    disableDefaultUI: true,
    restriction: {
      latLngBounds: CHISINAU.bounds,
      strictBounds: false,
    },
  };
}

export function hasValidCoordinates(coordinates: DeviceCoordinates) {
  return (
    coordinates.latitude !== EMPTY_COORDINATES.latitude ||
    coordinates.longitude !== EMPTY_COORDINATES.longitude
  );
}
