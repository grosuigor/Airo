import type { Dispatch } from "react";

import type { Metric } from "@/types";

export type MetricsContextType = {
  metrics: Metric[];
};

export type MetricsAction =
  | { type: "ADD"; payload: Metric }
  | { type: "REMOVE"; payload: Metric }
  | { type: "RESET" }
  | { type: "CLEAR" }
  | { type: "SET"; payload: Metric[] };

export type MetricsDispatchContextType = Dispatch<MetricsAction>;
