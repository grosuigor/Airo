"use client";

import { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { CHISINAU } from "@/constants";

import { useLocationField } from "./hooks";
import { LocationPicker } from "./LocationPicker";
import { styles } from "./styles";
import type { LocationFieldProps } from "./types";

export function LocationField({ location, coordinates, onLocationChange }: LocationFieldProps) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const { autocompleteOptions, handlePickerConfirm } = useLocationField(onLocationChange);

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", width: "100%" }}>
        <Autocomplete
          {...autocompleteOptions}
          sx={styles.field}
          fullWidth
          freeSolo
          openOnFocus={false}
          forcePopupIcon={false}
          filterOptions={(x) => x}
          value={location}
          inputValue={location}
          noOptionsText={`No addresses in ${CHISINAU.name}`}
          renderInput={(params) => (
            <TextField
              {...params}
              id="device-location"
              placeholder={`Search address in ${CHISINAU.name}...`}
              required
            />
          )}
        />
        <IconButton
          type="button"
          aria-label={`Pick location on map in ${CHISINAU.name}`}
          onClick={() => setPickerOpen(true)}
          sx={styles.iconButton}
        >
          <LocationOnIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      {pickerOpen && (
        <LocationPicker
          open
          coordinates={coordinates}
          onClose={() => setPickerOpen(false)}
          onConfirm={handlePickerConfirm}
        />
      )}
    </>
  );
}
