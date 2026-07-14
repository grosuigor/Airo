import { useCallback } from "react";

import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import type { DeviceMetrics } from "@/types";

import { metricsOptions } from "./data";
import type { SelectFieldProps } from "./types";
import { renderValue } from "./utils";

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
      renderValue={renderValue}
      inputProps={{
        id: "device-metrics",
      }}
    >
      {metricsOptions.map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          <Checkbox checked={metrics.includes(value)} />
          <ListItemText primary={label} />
        </MenuItem>
      ))}
    </Select>
  );
}
