import type { DetailedDevice } from "@/types";

export type ChartTab = "hour" | "today" | "week";

export type ChartsProps = {
  device: DetailedDevice;
};
