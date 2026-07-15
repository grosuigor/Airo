import { DeviceCoordinates, LocationSelection } from "@/types";
import { hasValidCoordinates } from "@/utils";

export function createInitialDraft(coordinates: DeviceCoordinates): LocationSelection | null {
  if (!hasValidCoordinates(coordinates)) return null;
  return { location: "", coordinates };
}
