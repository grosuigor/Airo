import type { ReactNode } from "react";

import type { Metric } from "@/types";

export type ChartProps = {
  metric: Metric;
};

export type ChartWrapperProps = ChartProps & {
  children: ReactNode;
};
