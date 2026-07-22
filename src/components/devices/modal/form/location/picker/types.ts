import type { Coordinates, Place } from "@/types";

export type LocationPickerProps = {
  open: boolean;
  coordinates: Coordinates;
  onClose: () => void;
  onConfirm: (selection: Place) => void;
};
