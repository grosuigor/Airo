import { BackdropProvider } from "@/providers/backdrop";

import { DeviceViewProvider } from "./provider";

export function DeviceViewWrapper({ children }: React.PropsWithChildren) {
  return (
    <BackdropProvider value={{ id: "deviceDrawer" }}>
      <DeviceViewProvider>{children}</DeviceViewProvider>
    </BackdropProvider>
  );
}
