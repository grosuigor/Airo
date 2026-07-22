"use client";

import { useMemo } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { METRIC_UNITS } from "@/constants/devices";

import { styles } from "./styles";
import type { ContainerProps } from "./types";

export function Container({ value, metric, children }: ContainerProps) {
  const formattedValue = useMemo(() => {
    const unit = METRIC_UNITS[metric];

    if (!unit.isInLabel) {
      return `${value}${unit.value}`;
    }

    return value;
  }, [value, metric]);

  return (
    <Box sx={styles.chartContainer}>
      <Box sx={styles.chart}>{children}</Box>
      <Typography variant="chartValue">{formattedValue}</Typography>
    </Box>
  );
}
