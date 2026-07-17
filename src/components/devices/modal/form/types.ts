import type { Device } from "@/types";

export type FormProps = {
  onClose: () => void;
};

export type FormField = {
  name: keyof Device;
  label: string;
  placeholder: string;
  multiple?: boolean;
  selectOptions?: Array<{ label: string; value: string }>;
};
