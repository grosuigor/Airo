"use client";

import { useMemo } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { DEVICE_METRIC_LABELS, METRIC_RANGES, METRIC_UNITS } from "@/constants";

import { ArcChart } from "./arc";
import { useChartVisibilty } from "./hooks";
import { LineChart } from "./line";
import { ChartMenu } from "./menu";
import { styles } from "./styles";
import type { ChartWrapperProps } from "./types";

function Chart({ metric, children }: ChartWrapperProps) {
  const isHidden = useChartVisibilty(metric);

  const title = useMemo(() => {
    const unit = METRIC_UNITS[metric];
    let nextTitle = DEVICE_METRIC_LABELS[metric];

    if (unit.isInLabel) {
      nextTitle += ` (${unit.value})`;
    }

    return nextTitle;
  }, [metric]);
  const [min, max] = useMemo(() => METRIC_RANGES[metric].good, [metric]);

  return (
    <Stack sx={styles.root} data-hidden={isHidden}>
      <ChartMenu metric={metric} />

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
