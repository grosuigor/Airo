"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { styles } from "./styles";
import type { ButtonsProps } from "./types";

export function Buttons({ onConfirm, onCancel }: ButtonsProps) {
  return (
    <Stack direction="row" sx={styles.pickerActions}>
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={onConfirm}
        disabled={!location}
      >
        Confirm
      </Button>
      <Button variant="outlined" color="primary" type="button" onClick={onCancel}>
        Cancel
      </Button>
    </Stack>
  );
}
