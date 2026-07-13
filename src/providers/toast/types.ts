export type ToastSeverity = "success" | "error";

export type ToastState = {
  open: boolean;
  message: string;
  severity: ToastSeverity;
  onRetry?: () => void;
};

export type ToastContextType = {
  showToast: (message: string, severity: ToastSeverity, onRetry?: () => void) => void;
  hideToast: () => void;
};
