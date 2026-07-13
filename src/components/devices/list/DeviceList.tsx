"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext, useDevicesContext } from "@/providers";

import { DeviceModal } from "../modal";
import { DevicePanel } from "../panel";
import { styles } from "./styles";

export function DeviceList() {
  const { open } = useBackdropContext();
  const { devices } = useDevicesContext();

  return (
    <Stack sx={styles.root}>
      {devices.length === 0 ? (
        <Typography variant="h4" color="text.primary">
          No devices found
        </Typography>
      ) : (
        <Stack sx={styles.devicesContainer}>
          {devices.map((device, i) => (
            <DevicePanel
              key={`${device.name}-${i}`}
              name={device.name}
              location={device.location}
            />
          ))}
        </Stack>
      )}
      <Button variant="text" onClick={open} sx={styles.addButton}>
        + Add new
      </Button>
      <DeviceModal />
    </Stack>
  );
}
