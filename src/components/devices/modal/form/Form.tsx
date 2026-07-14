"use client";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { useBackdropContext } from "@/providers";

import { deviceFormFields } from "./data";
import { useDeviceForm } from "./hooks";
import { SelectField } from "./select";
import { styles } from "./styles";

export function Form() {
  const { close } = useBackdropContext();
  const { device, changeField } = useDeviceForm();

  return (
    <Grid container rowSpacing={2} columnSpacing={4} columns={2} component="form">
      {deviceFormFields.map((field) => (
        <Grid size={1} key={field.name}>
          <Typography component="label" htmlFor={`device-${field.name}`} variant="body1">
            {field.label}
          </Typography>
          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {field.name === "metrics" ? (
              <SelectField metrics={device.metrics} changeField={changeField} />
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
            {field.name === "location" && <LocationOnIcon sx={{ fontSize: "1.75rem" }} />}
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
