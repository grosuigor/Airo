import type { Device } from "@/types";

export type MetricsViewTab = "hour" | "today" | "week";

export type MetricsViewProps = {
  device: Device;
  columns?: 2 | 3;
};
