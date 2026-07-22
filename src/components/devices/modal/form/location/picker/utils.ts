import { Coordinates, Place } from "@/types";
import { hasValidCoordinates } from "@/utils";

export function createInitialDraft(coordinates: Coordinates): Place | null {
  if (!hasValidCoordinates(coordinates)) return null;
  return { location: "", coordinates };
}
