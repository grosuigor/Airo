import { DEVICE_METRICS } from "@/constants";

import type { MetricsAction, MetricsContextType } from "./types";

export const initialMetricsState: MetricsContextType = {
  metrics: DEVICE_METRICS,
};

export function metricsReducer(
  state: MetricsContextType,
  action: MetricsAction,
): MetricsContextType {
  switch (action.type) {
    case "ADD":
      return {
        metrics: [...state.metrics, action.payload],
      };
    case "REMOVE":
      return {
        metrics: state.metrics.filter((metric) => metric !== action.payload),
      };
    case "RESET":
      return {
        metrics: DEVICE_METRICS,
      };
    case "CLEAR":
      return {
        metrics: [],
      };
    case "SET":
      return {
        metrics: action.payload,
      };
    default:
      return state;
  }
}
