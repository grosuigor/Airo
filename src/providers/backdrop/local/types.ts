import type { ProviderProps } from "react";

export type BackdropContextType = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  opened: boolean;
};

type BackdropIdValue = "sidebarDrawer" | "deviceModal" | "metricsModal";

export type BackdropProviderProps = ProviderProps<{ id: BackdropIdValue }>;
