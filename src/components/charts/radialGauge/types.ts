import { chartSizes, type MetricColor } from "@/lib/tokens";

export type RadialGaugeProps = {
  progress: number;
  color: MetricColor;
  variant: keyof typeof chartSizes;
};
