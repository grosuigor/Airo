import type { ChartProps } from "../radialGauge";

export type ArcChartProps = ChartProps & {
  title: string;
  subtitle: string;
  value: string;
};
