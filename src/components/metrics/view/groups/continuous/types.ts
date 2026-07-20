import type { MetricsViewProps } from "../../types";

export type ContinuousProps = MetricsViewProps & {
  type: "today" | "week";
};
