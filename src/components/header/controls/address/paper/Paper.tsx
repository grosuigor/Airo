import { type MouseEvent, useCallback } from "react";

import Button from "@mui/material/Button";
import Paper, { type PaperProps } from "@mui/material/Paper";

import { useBackdropContext } from "@/providers";

import { styles } from "./styles";

export function PaperComponent({ children, ...paperProps }: PaperProps) {
  const { open } = useBackdropContext();
  const handleAddDevice = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      open();
    },
    [open],
  );

  return (
    <Paper {...paperProps}>
      {children}
      <Button fullWidth variant="text" onMouseDown={handleAddDevice} sx={styles.addButton}>
        + Add new device
      </Button>
    </Paper>
  );
}
