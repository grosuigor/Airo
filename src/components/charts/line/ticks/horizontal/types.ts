import type { MetricPoint } from "@/types";

import type { Point } from "../../types";

export type HorizontalTicksProps = {
  points: MetricPoint[];
  mappedPoints: Point[];
};
