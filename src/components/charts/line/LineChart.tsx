"use client";

import { useMemo } from "react";

import Box from "@mui/material/Box";

import { Chart } from "../Chart";
import { SVG_HEIGHT, SVG_WIDTH } from "./data";
import { Line } from "./line";
import { styles } from "./styles";
import { Threshold } from "./threshold";
import { HorizontalTicks, VerticalTicks } from "./ticks";
import type { LineChartProps } from "./types";
import { getYDomain, getYTicks, mapPoints } from "./utils";

export function LineChart({ points, threshold, ...props }: LineChartProps) {
  const { ticks, mapped, yMin, yMax } = useMemo(() => {
    const [domainMin, domainMax] = getYDomain(points, threshold);
    const yTicks = getYTicks(domainMin, domainMax);
    const min = yTicks[0] ?? domainMin;
    const max = yTicks[yTicks.length - 1] ?? domainMax;
    const mappedPoints = mapPoints(points, min, max);

    return {
      ticks: yTicks,
      mapped: mappedPoints,
      yMin: min,
      yMax: max,
    };
  }, [points, threshold]);

  return (
    <Chart {...props}>
      <Box
        component="svg"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        role="img"
        aria-label="Metric trend"
        sx={styles.root}
      >
        <VerticalTicks ticks={ticks} yMin={yMin} yMax={yMax} />
        <Threshold threshold={threshold} yMin={yMin} yMax={yMax} />
        <Line mappedPoints={mapped} />
        <HorizontalTicks points={points} mappedPoints={mapped} />
      </Box>
    </Chart>
  );
}
