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
