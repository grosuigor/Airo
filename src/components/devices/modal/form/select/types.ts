import type { Metric } from "@/types";

export type SelectFieldProps = {
  metrics: Metric[];
  changeField: (field: "metrics", value: string | Metric[]) => void;
};
