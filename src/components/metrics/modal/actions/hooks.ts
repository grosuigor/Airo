import { useCallback } from "react";

import { useMetricsDispatchContext } from "@/providers";

export function useMetricsModalActions() {
  const metricsDispatch = useMetricsDispatchContext();

  const unhideAll = useCallback(() => {
    metricsDispatch({
      type: "RESET",
    });
  }, [metricsDispatch]);

  const hideAll = useCallback(() => {
    metricsDispatch({
      type: "CLEAR",
    });
  }, [metricsDispatch]);

  return {
    unhideAll,
    hideAll,
  };
}
