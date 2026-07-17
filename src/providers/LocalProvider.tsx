"use client";

import { AuthProvider } from "./auth";
import { GlobalBackdropProvider } from "./backdrop";
import { DevicesProvider } from "./devices";
import { DeviceViewProvider } from "./deviceView";
import { MapProvider } from "./MapProvider";
import { ToastProvider } from "./toast";

export function LocalProvider({ children }: React.PropsWithChildren) {
  return (
    <MapProvider>
      <AuthProvider>
        <DevicesProvider>
          <ToastProvider>
            <GlobalBackdropProvider>
              <DeviceViewProvider>{children}</DeviceViewProvider>
            </GlobalBackdropProvider>
          </ToastProvider>
        </DevicesProvider>
      </AuthProvider>
    </MapProvider>
  );
}
