"use client";

import { useReducer } from "react";

import { useHydration } from "@/hooks";

import { MetricsContext, MetricsDispatchContext } from "./context";
import { initialMetricsState, metricsReducer } from "./reducer";
import { readStoredMetrics, writeStoredMetrics } from "./storage";

export function MetricsProvider({ children }: React.PropsWithChildren) {
  const [state, dispatch] = useReducer(metricsReducer, initialMetricsState);

  useHydration({
    data: state.metrics,
    read: readStoredMetrics,
    write: writeStoredMetrics,
    dispatch,
  });

  return (
    <MetricsContext.Provider value={state}>
      <MetricsDispatchContext.Provider value={dispatch}>{children}</MetricsDispatchContext.Provider>
    </MetricsContext.Provider>
  );
}
