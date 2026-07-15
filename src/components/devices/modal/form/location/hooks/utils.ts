import { CHISINAU } from "@/constants";
import { DeviceCoordinates, LocationSelection } from "@/types";
import { hasValidCoordinates } from "@/utils";

export function isInsideChisinau(lat: number, lng: number) {
  const { south, west, north, east } = CHISINAU.bounds;
  return lat >= south && lat <= north && lng >= west && lng <= east;
}

export function createInitialDraft(coordinates: DeviceCoordinates): LocationSelection | null {
  if (!hasValidCoordinates(coordinates)) return null;
  return { location: "", coordinates };
}
