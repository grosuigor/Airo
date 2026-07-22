"use client";

import { useContext } from "react";

import { MetricsContext, MetricsDispatchContext } from "./context";

export function useMetricsContext() {
  const context = useContext(MetricsContext);
  if (!context) {
    throw new Error("useMetricsContext must be used within a MetricsProvider");
  }
  return context;
}

export function useMetricsDispatchContext() {
  const context = useContext(MetricsDispatchContext);
  if (!context) {
    throw new Error("useMetricsDispatchContext must be used within a MetricsProvider");
  }
  return context;
}
