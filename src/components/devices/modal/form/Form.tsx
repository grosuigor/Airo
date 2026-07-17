"use client";

import { useCallback } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useBackdropContext } from "@/providers";

import { deviceFormFields } from "./data";
import { useDeviceForm } from "./hooks";
import { LocationField } from "./location";
import { SelectField } from "./select";
import { styles } from "./styles";
import { FormField } from "./types";

export function Form() {
  const { close } = useBackdropContext();
  const { device, changeField, setLocation, canSubmit, saveDevice } = useDeviceForm();

  const renderField = useCallback(
    (field: FormField) => {
      switch (field.name) {
        case "metrics":
          return <SelectField metrics={device.metrics} changeField={changeField} />;
        case "location":
          return (
            <LocationField
              location={device.location}
              coordinates={device.coordinates}
              onLocationChange={setLocation}
            />
          );
        default:
          return (
            <TextField
              id={`device-${field.name}`}
              fullWidth
              placeholder={field.placeholder}
              required
              value={device[field.name]}
              onChange={(e) => changeField(field.name, e.target.value)}
              {...(field.multiple ? { multiline: true, rows: 6 } : {})}
            />
          );
      }
    },
    [device, changeField, setLocation],
  );

  return (
    <Grid container rowSpacing={2} columnSpacing={4} columns={2} component="form">
      {deviceFormFields.map((field) => (
        <Grid size={1} key={field.name}>
          <Typography component="label" htmlFor={`device-${field.name}`} variant="body1">
            {field.label}
          </Typography>
          {renderField(field)}
        </Grid>
      ))}
      <Grid size={1} />
      <Grid size={1} />
      <Grid size={1}>
        <Stack direction="row" sx={styles.buttonsContainer}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={saveDevice}
            disabled={!canSubmit}
          >
            {device.id ? "Edit device" : "Add device"}
          </Button>
          <Button variant="outlined" color="primary" type="button" onClick={close}>
            Cancel
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
