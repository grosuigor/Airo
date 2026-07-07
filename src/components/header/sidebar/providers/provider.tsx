import { PropsWithChildren, useCallback, useState } from "react";

import { SidebarContext } from "./context";

export function SidebarProvider({ children }: PropsWithChildren) {
  const [opened, setOpened] = useState(true);

  const toggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    setOpened(false);
  }, []);

  return (
    <SidebarContext.Provider value={{ opened, close, toggle }}>{children}</SidebarContext.Provider>
  );
}
