import type { ReactNode } from "react";

import type { Metric } from "@/types";

export type ContainerProps = {
  value: number;
  metric: Metric;
  children: ReactNode;
};
