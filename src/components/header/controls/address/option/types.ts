import type { HTMLAttributes } from "react";

import type { DetailedDevice } from "@/types";

export type OptionProps = HTMLAttributes<HTMLLIElement> & {
  device: DetailedDevice;
};
