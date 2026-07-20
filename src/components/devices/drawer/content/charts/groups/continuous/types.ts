import type { ChartsProps } from "../../types";

export type ContinuousProps = ChartsProps & {
  type: "today" | "week";
};
