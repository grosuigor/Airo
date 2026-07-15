import type { MapProps } from "@vis.gl/react-google-maps";

import { EMPTY_COORDINATES, LOCATION_MAP_PROPS, MAP_IDS } from "@/constants";
import type { DeviceCoordinates } from "@/types";

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!;

export function generateMapConfig(id: keyof typeof MAP_IDS): MapProps {
  return {
    id: MAP_IDS[id],
    mapId,
    ...LOCATION_MAP_PROPS,
  };
}

export function hasValidCoordinates(coordinates: DeviceCoordinates) {
  return (
    coordinates.latitude !== EMPTY_COORDINATES.latitude ||
    coordinates.longitude !== EMPTY_COORDINATES.longitude
  );
}
