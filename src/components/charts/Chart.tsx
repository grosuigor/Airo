"use client";

import { useMemo } from "react";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { DEVICE_METRIC_LABELS, METRIC_RANGES, METRIC_UNITS } from "@/constants";

import { ArcChart } from "./arc";
import { LineChart } from "./line";
import { styles } from "./styles";
import type { ChartWrapperProps } from "./types";

function Chart({ metric, children }: ChartWrapperProps) {
  const title = useMemo(() => {
    const unit = METRIC_UNITS[metric];
    let title = DEVICE_METRIC_LABELS[metric];

    if (unit.isInLabel) {
      title += ` (${unit.value})`;
    }

    return title;
  }, [metric]);
  const [min, max] = useMemo(() => METRIC_RANGES[metric].good, [metric]);

  return (
    <Stack sx={styles.root}>
      <IconButton size="small" aria-label="More options" sx={styles.dots}>
        <MoreHorizIcon fontSize="small" />
      </IconButton>

      <Typography variant="titleSm" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="caption" sx={styles.subtitle}>
        Normal range: {min}-{max}
      </Typography>

      {children}
    </Stack>
  );
}

Chart.Arc = ArcChart;
Chart.Line = LineChart;

export { Chart };
