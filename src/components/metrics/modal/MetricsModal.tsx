"use client";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

import { useBackdropContext } from "@/providers";

import { MetricsView } from "../view";
import { Actions } from "./actions";
import { styles } from "./styles";
import type { MetricsModalProps } from "./types";

export function MetricsModal({ device }: MetricsModalProps) {
  const { opened, close } = useBackdropContext();

  return (
    <Dialog open={opened} onClose={close} sx={styles.root}>
      <Stack sx={styles.content}>
        <Stack direction="row" sx={styles.header}>
          <Typography variant="h4">{device.name}</Typography>
          <IconButton onClick={close} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </Stack>
        {opened && <MetricsView device={device} columns={3} />}
        <Actions />
      </Stack>
    </Dialog>
  );
}
