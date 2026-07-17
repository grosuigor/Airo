import type { Device } from "@/types";

import { DEVICE_METRICS } from "../../data";
import type { FormField } from "./types";

export const deviceFormFields: Array<FormField> = [
  {
    name: "name",
    label: "Name",
    placeholder: "Type name...",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Type location...",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Type description...",
  },
  {
    name: "metrics",
    label: "Metrics",
    placeholder: "Select metrics...",
  },
  {
    name: "key",
    label: "Key",
    placeholder: "Type key...",
    multiple: true,
  },
];

export const DUMMY_DEVICE: Device = {
  id: "",
  name: "",
  location: "",
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  description: "",
  metrics: [...DEVICE_METRICS],
  key: "",
};
