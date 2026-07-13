import { useCallback } from "react";

import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "@/components/devices/data";
import type { DeviceMetrics } from "@/types";

import type { SelectFieldProps } from "./types";

export function SelectField({ metrics, changeField }: SelectFieldProps) {
  const changeMetrics = useCallback(
    (event: SelectChangeEvent<DeviceMetrics[]>) => {
      changeField("metrics", event.target.value);
    },
    [changeField],
  );

  return (
    <Select
      multiple
      fullWidth
      required
      value={metrics}
      onChange={changeMetrics}
      renderValue={(selected) =>
        selected.length === DEVICE_METRICS.length
          ? "All metrics"
          : selected.map((metric) => DEVICE_METRIC_LABELS[metric]).join(", ")
      }
      inputProps={{
        id: "device-metrics",
      }}
    >
      {DEVICE_METRICS.map((metric) => (
        <MenuItem key={metric} value={metric}>
          <Checkbox checked={metrics.includes(metric)} />
          <ListItemText primary={DEVICE_METRIC_LABELS[metric]} />
        </MenuItem>
      ))}
    </Select>
  );
}
