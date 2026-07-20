import { useMemo } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

import { MetricsModal, MetricsView } from "@/components/metrics";
import { BackdropProvider, useMetricsContext } from "@/providers";

import { Header } from "./header";
import { useDeviceRemoveButton } from "./hooks";
import { styles } from "./styles";
import type { ContentProps } from "./types";

export function Content({ device }: ContentProps) {
  const handleRemove = useDeviceRemoveButton(device.id);
  const { metrics } = useMetricsContext();

  const deviceWithVisibleMetrics = useMemo(() => {
    return {
      ...device,
      metrics: device.metrics.filter((metric) => metrics.includes(metric)),
    };
  }, [device, metrics]);

  return (
    <Stack sx={styles.root}>
      <Header device={device} />
      <BackdropProvider value={{ id: "metricsModal" }}>
        <MetricsView device={deviceWithVisibleMetrics} columns={2} />
        <MetricsModal device={device} />
      </BackdropProvider>
      <Button
        variant="text"
        startIcon={<DeleteIcon />}
        sx={styles.removeButton}
        onClick={handleRemove}
      >
        <Typography variant="body1">Remove Device</Typography>
      </Button>
    </Stack>
  );
}
