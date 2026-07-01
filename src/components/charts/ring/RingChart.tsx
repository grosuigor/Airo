"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { RadialGauge } from "../radialGauge";
import { styles } from "./styles";
import type { RingChartProps } from "./types";

export function RingChart({ label, value, progress, color }: RingChartProps) {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.chartContainer}>
        <Box sx={styles.chart}>
          <RadialGauge progress={progress} color={color} variant="ring" />
        </Box>
        <Typography variant="chartValue" sx={styles.value}>
          {value}
        </Typography>
      </Box>
      <Typography className="metric-ring-chart-label" sx={styles.label}>
        {label}
      </Typography>
    </Box>
  );
}
