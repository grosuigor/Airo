import type { HTMLAttributes, Key } from "react";

import type { Device } from "@/types";

export type OptionProps = HTMLAttributes<HTMLLIElement> & {
  key: Key;
  device: Device;
};
