import type { HTMLAttributes } from "react";

import type { Device } from "@/types";

export type OptionProps = HTMLAttributes<HTMLLIElement> & {
  device: Device;
};
