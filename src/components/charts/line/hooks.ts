import { useMemo } from "react";

import type { MetricPoint } from "@/types";

export function useYDomain(points: MetricPoint[], threshold: number) {
  return useMemo(() => {
    const values = points.map((point) => point.value);
    const dataMin = Math.min(...values, threshold);
    const dataMax = Math.max(...points.map((point) => point.value), threshold);
    const yMin = dataMin >= 0 ? 0 : dataMin;
    const padding = Math.max((dataMax - yMin) * 0.08, 0.5);
    return [yMin, dataMax + padding];
  }, [points, threshold]);
}
