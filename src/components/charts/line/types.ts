import type { MetricPoint } from "@/types";

import { ChartProps } from "../types";

export type LineChartProps = ChartProps & {
  points: MetricPoint[];
  threshold: number;
};

export type Point = { x: number; y: number };
