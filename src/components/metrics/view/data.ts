import type { MetricsViewTab } from "./types";

export const METRICS_VIEW_TABS: Array<{ value: MetricsViewTab; label: string }> = [
  { value: "hour", label: "Hour" },
  { value: "today", label: "Today" },
  { value: "week", label: "Week" },
];
