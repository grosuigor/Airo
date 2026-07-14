"use client";

import { useMemo } from "react";

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

  const isEmpty = useMemo(() => devices.length === 0, [devices]);

  const content = useMemo(
    () =>
      isEmpty ? (
        <Typography variant="h4" color="text.primary">
          No devices found
        </Typography>
      ) : (
        devices.map(({ id, name, location }) => (
          <DevicePanel key={id} name={name} location={location} />
        ))
      ),
    [devices, isEmpty],
  );

  return (
    <Stack sx={styles.root}>
      <Stack sx={styles.devicesContainer}>{content}</Stack>
      <Button variant="text" onClick={open} sx={styles.addButton}>
        + Add new
      </Button>
      <DeviceModal />
    </Stack>
  );
}
