"use client";

import { useCallback, useMemo } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext, useDevicesContext, useDeviceViewContext } from "@/providers";

import { DeviceModal } from "../modal";
import { DevicePanel } from "../panel";
import { styles } from "./styles";

export function DeviceList() {
  const { open } = useBackdropContext();
  const { inspect } = useDeviceViewContext();
  const { devices } = useDevicesContext();

  const isEmpty = useMemo(() => devices.length === 0, [devices]);

  const handlePanelClick = useCallback(
    (deviceId: string) => {
      inspect(deviceId);
    },
    [inspect],
  );

  const content = useMemo(
    () =>
      isEmpty ? (
        <Typography variant="h4" color="text.primary">
          No devices found
        </Typography>
      ) : (
        devices.map(({ id, name, location }) => (
          <DevicePanel
            key={id}
            name={name}
            location={location}
            onClick={() => handlePanelClick(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handlePanelClick(id);
              }
            }}
          />
        ))
      ),
    [devices, isEmpty, handlePanelClick],
  );

  return (
    <Stack sx={styles.root}>
      <Stack sx={styles.devicesContainer}>{content}</Stack>
      <Button variant="text" onClick={open} sx={styles.addButton}>
        + Add New
      </Button>
      <DeviceModal />
    </Stack>
  );
}
