import { useMemo } from "react";

import { useMetricsContext } from "@/providers";
import type { Metric } from "@/types";

export function useChartVisibilty(metric: Metric) {
  const { metrics } = useMetricsContext();

  const isHidden = useMemo(() => !metrics.includes(metric), [metrics, metric]);

  return isHidden;
}
