"use client";

import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Map } from "@vis.gl/react-google-maps";

import { DeviceMarker, DevicePin } from "@/components/devices";
import { useDevicesContext } from "@/providers";
import { generateMapConfig } from "@/utils";

import { Buttons } from "./buttons";
import { useLocationPicker } from "./hooks";
import { styles } from "./styles";
import type { LocationPickerProps } from "./types";

const mapConfig = generateMapConfig("LOCATION");

export function LocationPicker({ open, coordinates, onClose, onConfirm }: LocationPickerProps) {
  const { devices } = useDevicesContext();
  const { markerPosition, location, handleMapClick, handleConfirm } = useLocationPicker(
    coordinates,
    onConfirm,
    onClose,
  );

  return (
    <Dialog open={open} onClose={onClose} slotProps={{ paper: { sx: styles.pickerPaper } }}>
      <Stack sx={styles.pickerContent}>
        <Typography variant="h5">Select location</Typography>
        <Typography variant="body2" sx={styles.hint}>
          Click the map to place the device.
        </Typography>
        <Box sx={styles.mapContainer}>
          <Map {...mapConfig} style={{ height: "100%", width: "100%" }} onClick={handleMapClick}>
            {devices.map((device) => (
              <DeviceMarker
                key={device.id}
                color="green"
                aria-label={`${device.name} marker`}
                latitude={device.coordinates.latitude}
                longitude={device.coordinates.longitude}
              />
            ))}
            {markerPosition && (
              <DevicePin latitude={markerPosition.lat} longitude={markerPosition.lng} />
            )}
          </Map>
        </Box>
        <Typography variant="body2" sx={styles.hint}>
          {location ?? "loading..."}
        </Typography>
        <Buttons onConfirm={handleConfirm} onCancel={onClose} />
      </Stack>
    </Dialog>
  );
}
