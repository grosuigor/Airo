import type { DeviceCoordinates, LocationSelection } from "@/types";

export type LocationPickerProps = {
  open: boolean;
  coordinates: DeviceCoordinates;
  onClose: () => void;
  onConfirm: (selection: LocationSelection) => void;
};
