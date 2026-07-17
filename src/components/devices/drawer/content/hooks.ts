import { useCallback } from "react";

import { useBackdropContext, useDevicesDispatchContext, useToastContext } from "@/providers";

export function useDeviceRemoveButton(deviceId: string) {
  const dispatch = useDevicesDispatchContext();
  const { showToast } = useToastContext();
  const { close } = useBackdropContext();

  const handleRemove = useCallback(() => {
    close();
    dispatch({ type: "REMOVE", payload: deviceId });
    showToast("The device was removed.", "success");
  }, [dispatch, deviceId, close, showToast]);

  return handleRemove;
}
