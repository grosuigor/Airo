"use client";

import { useCallback, useState } from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

import { ToastContext } from "./context";
import { initialToast, STATUS_LABELS, TOAST_LIVE_TIME } from "./data";
import type { ToastSeverity, ToastState } from "./types";

export function ToastProvider({ children }: React.PropsWithChildren) {
  const [toast, setToast] = useState<ToastState>(initialToast);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, open: false }));
  }, []);

  const showToast = useCallback(
    (message: string, severity: ToastSeverity, onRetry?: () => void) => {
      setToast({ open: true, message, severity, onRetry });
    },
    [],
  );

  const retry = useCallback(() => {
    if (toast.open && toast.onRetry) {
      toast.onRetry();
      hideToast();
    }
  }, [toast, hideToast]);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <Snackbar
        open={toast.open}
        autoHideDuration={TOAST_LIVE_TIME}
        onClose={hideToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={hideToast}
          severity={toast.severity}
          variant="filled"
          sx={{ width: "100%" }}
          action={
            toast.onRetry ? (
              <Button variant="contained" onClick={retry}>
                Try again
              </Button>
            ) : (
              <></>
            )
          }
        >
          <AlertTitle>{STATUS_LABELS[toast.severity]}</AlertTitle>
          {toast.message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
}
