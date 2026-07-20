import type { ChartTab } from "./types";

export const CHART_TABS: Array<{ value: ChartTab; label: string }> = [
  {
    value: "hour",
    label: "Hour",
  },
  {
    value: "today",
    label: "Today",
  },
  {
    value: "week",
    label: "Week",
  },
] as const;
