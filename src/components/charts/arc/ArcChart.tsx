"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { RadialGauge } from "../radialGauge";
import { styles } from "./styles";
import type { ArcChartProps } from "./types";

export function ArcChart({ title, subtitle, value, progress, color }: ArcChartProps) {
  return (
    <Box sx={styles.root}>
      <IconButton size="small" aria-label="More options" sx={styles.dots}>
        <MoreHorizIcon fontSize="small" />
      </IconButton>

      <Typography variant="titleSm">{title}</Typography>
      <Typography variant="caption" sx={styles.subtitle}>
        {subtitle}
      </Typography>

      <Box sx={styles.chartContainer}>
        <Box sx={styles.chart}>
          <RadialGauge progress={progress} color={color} variant="arc" />
        </Box>
        <Typography variant="chartValue">{value}</Typography>
      </Box>
    </Box>
  );
}
