import LocationOnIcon from "@mui/icons-material/LocationOn";

import type { FormField } from "./types";

export const DEVICE_FORM_FIELDS: Array<FormField> = [
  {
    name: "name",
    label: "Name",
    placeholder: "Type name...",
  },
  {
    name: "location",
    label: "Location",
    placeholder: "Type location...",
    icon: <LocationOnIcon sx={{ fontSize: "1.75rem" }} />,
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
