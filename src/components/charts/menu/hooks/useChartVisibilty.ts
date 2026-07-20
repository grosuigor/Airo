import { useCallback, useMemo } from "react";

import { useMetricsContext, useMetricsDispatchContext } from "@/providers";
import type { Metric } from "@/types";

export function useChartVisibilty(metric: Metric) {
  const { metrics } = useMetricsContext();
  const metricsDispatch = useMetricsDispatchContext();

  const isHidden = useMemo(() => !metrics.includes(metric), [metrics, metric]);

  const toggleVisibility = useCallback(() => {
    metricsDispatch({
      type: isHidden ? "ADD" : "REMOVE",
      payload: metric,
    });
  }, [isHidden, metric, metricsDispatch]);

  return { isHidden, toggleVisibility };
}
