import { type MetricColor } from "@/lib/tokens";

import type { ChartProps } from "../types";
import type { ContainerProps } from "./container";

export type ArcChartProps = ChartProps &
  Omit<ContainerProps, "children"> & {
    progress: number;
    color: MetricColor;
  };
