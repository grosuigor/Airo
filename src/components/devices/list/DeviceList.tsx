"use client";

import { useMemo } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext, useDevicesContext } from "@/providers";

import { DeviceModal } from "../modal";
import { DeviceListItem } from "./item";
import { styles } from "./styles";

export function DeviceList() {
  const { open } = useBackdropContext();
  const { devices } = useDevicesContext();

  const isEmpty = useMemo(() => devices.length === 0, [devices]);

  return (
    <Stack sx={styles.root}>
      <Stack sx={styles.devicesContainer}>
        {isEmpty ? (
          <Typography variant="h4" color="text.primary">
            No devices found
          </Typography>
        ) : (
          devices.map((device) => <DeviceListItem key={device.id} device={device} />)
        )}
      </Stack>
      <Button variant="text" onClick={open} sx={styles.addButton}>
        + Add New
      </Button>
      <DeviceModal />
    </Stack>
  );
}
