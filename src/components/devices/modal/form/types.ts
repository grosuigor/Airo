import type { DetailedDevice } from "@/types";

export type FormProps = {
  onClose: () => void;
};

export type FormField = {
  name: keyof DetailedDevice;
  label: string;
  placeholder: string;
  multiple?: boolean;
  selectOptions?: Array<{ label: string; value: string }>;
};
