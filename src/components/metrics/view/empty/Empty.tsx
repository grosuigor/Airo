"use client";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext, useMetricsDispatchContext } from "@/providers";

import { styles } from "./styles";

export function Empty() {
  const { open } = useBackdropContext();
  const metricsDispatch = useMetricsDispatchContext();

  const handleUnhideAll = () => {
    metricsDispatch({ type: "RESET" });
  };

  return (
    <Stack sx={styles.root}>
      <Typography variant="h4" sx={styles.message}>
        All metrics are hidden
      </Typography>
      <Stack sx={styles.actions}>
        <Button variant="contained" color="primary" onClick={handleUnhideAll} sx={styles.button}>
          Unhide all
        </Button>
        <Button variant="outlined" color="primary" onClick={open} sx={styles.button}>
          Expand Metrics
        </Button>
      </Stack>
    </Stack>
  );
}
