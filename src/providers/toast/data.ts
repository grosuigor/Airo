import type { ToastSeverity, ToastState } from "./types";

export const TOAST_LIVE_TIME = 4000;

export const initialToast: ToastState = {
  open: false,
  message: "",
  severity: "success",
  onRetry: undefined,
};

export const STATUS_LABELS: Record<ToastSeverity, string> = {
  success: "Success",
  error: "Oops!",
};
