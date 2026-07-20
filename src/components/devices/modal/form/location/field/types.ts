import type { Coordinates, Place } from "@/types";

export type LocationFieldProps = {
  location: string;
  coordinates: Coordinates;
  onLocationChange: (selection: Place) => void;
};

export type { SuggestionOption } from "../common";
