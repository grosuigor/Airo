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

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useBackdropContext } from "@/providers";

import { DEVICE_METRIC_LABELS, DEVICE_METRICS } from "../../data";
import { useDeviceForm } from "./hooks";
import { styles } from "./styles";

export function Form() {
  const { close } = useBackdropContext();
  const { device, changeName, changeLocation, changeDescription, changeMetrics, changeKey } =
    useDeviceForm();

  return (
    <Grid container rowSpacing={2} columnSpacing={4} columns={2} component="form">
      <Grid size={1}>
        <Typography component="label" htmlFor="device-name" variant="body1">
          Device&apos;s name
        </Typography>
        <TextField
          id="device-name"
          fullWidth
          placeholder="Type name..."
          required
          value={device.name}
          onChange={(e) => changeName(e.target.value)}
        />
      </Grid>
      <Grid size={1}>
        <Typography component="label" htmlFor="device-location" variant="body1">
          Location
        </Typography>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
          <TextField
            id="device-location"
            fullWidth
            placeholder="Type location..."
            required
            value={device.location}
            onChange={(e) => changeLocation(e.target.value)}
          />
          <LocationOnIcon sx={{ fontSize: "1.75rem" }} />
        </Stack>
      </Grid>
      <Grid size={1}>
        <Typography component="label" htmlFor="device-description" variant="body1">
          Description
        </Typography>
        <TextField
          id="device-description"
          fullWidth
          placeholder="Type description..."
          required
          value={device.description}
          onChange={(e) => changeDescription(e.target.value)}
        />
      </Grid>
      <Grid size={1}>
        <Typography component="label" htmlFor="device-metrics" variant="body1">
          Metrics to be tracked
        </Typography>
        <Select
          multiple
          fullWidth
          required
          value={device.metrics}
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
              <Checkbox checked={device.metrics.includes(metric)} />
              <ListItemText primary={DEVICE_METRIC_LABELS[metric]} />
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid size={1}>
        <Typography component="label" htmlFor="device-key" variant="body1">
          Key
        </Typography>
        <TextField
          id="device-key"
          fullWidth
          multiline
          rows={6}
          placeholder="Type key..."
          required
          value={device.key}
          onChange={(e) => changeKey(e.target.value)}
        />
      </Grid>
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
