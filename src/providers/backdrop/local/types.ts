import type { ProviderProps } from "react";

export type BackdropContextType = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  opened: boolean;
  isInStack: boolean;
};

type BackdropIdValue = "sidebarDrawer" | "deviceModal" | "deviceDrawer" | "metricsModal";

export type BackdropProviderProps = ProviderProps<{ id: BackdropIdValue }>;
