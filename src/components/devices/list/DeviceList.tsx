"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext } from "@/providers";

import { DeviceModal } from "../modal";
import { styles } from "./styles";

export function DeviceList() {
  const { open } = useBackdropContext();

  return (
    <Stack sx={styles.root}>
      <Typography variant="h4" color="text.primary">
        No devices found
      </Typography>
      <Button variant="text" onClick={open} sx={styles.addButton}>
        + Add new
      </Button>
      <DeviceModal />
    </Stack>
  );
}
