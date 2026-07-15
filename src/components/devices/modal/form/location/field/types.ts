import type { DeviceCoordinates, LocationSelection } from "@/types";

export type LocationFieldProps = {
  location: string;
  coordinates: DeviceCoordinates;
  onLocationChange: (selection: LocationSelection) => void;
};

export type { SuggestionOption } from "../common";
