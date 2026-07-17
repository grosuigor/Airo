import type { DevicesAction, DevicesContextType } from "./types";

export const initialDevicesState: DevicesContextType = {
  devices: [],
};

export function devicesReducer(
  state: DevicesContextType,
  action: DevicesAction,
): DevicesContextType {
  switch (action.type) {
    case "ADD":
      return {
        devices: [...state.devices, action.payload],
      };
    case "REMOVE":
      return {
        devices: state.devices.filter((device) => device.id !== action.payload),
      };
    case "UPDATE":
      return {
        devices: state.devices.map((device) =>
          device.id === action.payload.device.id ? action.payload.device : device,
        ),
      };
    case "SET":
      return {
        devices: action.payload,
      };
    default:
      return state;
  }
}
