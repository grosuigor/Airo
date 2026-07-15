import type { DeviceCoordinates, LocationSelection } from "@/types";

export type LocationFieldProps = {
  location: string;
  coordinates: DeviceCoordinates;
  onLocationChange: (selection: LocationSelection) => void;
};

export type LocationPickerProps = {
  open: boolean;
  coordinates: DeviceCoordinates;
  onClose: () => void;
  onConfirm: (selection: LocationSelection) => void;
};
