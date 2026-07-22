"use client";

import { AuthProvider } from "./auth";
import { GlobalBackdropProvider } from "./backdrop";
import { DevicesProvider } from "./devices";
import { DeviceViewProvider } from "./deviceView";
import { MapProvider } from "./MapProvider";
import { MetricsProvider } from "./metrics";
import { ToastProvider } from "./toast";

export function LocalProvider({ children }: React.PropsWithChildren) {
  return (
    <MapProvider>
      <AuthProvider>
        <DevicesProvider>
          <MetricsProvider>
            <ToastProvider>
              <GlobalBackdropProvider>
                <DeviceViewProvider>{children}</DeviceViewProvider>
              </GlobalBackdropProvider>
            </ToastProvider>
          </MetricsProvider>
        </DevicesProvider>
      </AuthProvider>
    </MapProvider>
  );
}
