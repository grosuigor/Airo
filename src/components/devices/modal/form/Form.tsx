"use client";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useBackdropContext } from "@/providers";

import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "../../data";
import { DEVICE_FORM_FIELDS } from "./data";
import { useDeviceForm } from "./hooks";
import { styles } from "./styles";

export function Form() {
  const { close } = useBackdropContext();
  const { device, changeField } = useDeviceForm();

  return (
    <Grid container rowSpacing={2} columnSpacing={4} columns={2} component="form">
      {DEVICE_FORM_FIELDS.map((field) => (
        <Grid size={1} key={field.name}>
          <Typography component="label" htmlFor={`device-${field.name}`} variant="body1">
            {field.label}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {field.name === "metrics" ? (
              <Select
                multiple
                fullWidth
                required
                value={device.metrics}
                onChange={(e) => changeField("metrics", e.target.value)}
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
                    <Checkbox checked={device.metrics.includes(metric)} />
                    <ListItemText primary={DEVICE_METRIC_LABELS[metric]} />
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <TextField
                id={`device-${field.name}`}
                fullWidth
                placeholder={field.placeholder}
                required
                value={device[field.name]}
                onChange={(e) => changeField(field.name, e.target.value)}
                {...(field.multiple ? { multiline: true, rows: 6 } : {})}
              />
            )}
            {field.icon}
          </Stack>
        </Grid>
      ))}
      <Grid size={1} />
      <Grid size={1} />
      <Grid size={1}>
        <Stack direction="row" sx={styles.buttonsContainer}>
          <Button variant="contained" color="primary" type="submit">
            Add device
          </Button>
          <Button variant="outlined" color="primary" type="button" onClick={close}>
            Cancel
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
