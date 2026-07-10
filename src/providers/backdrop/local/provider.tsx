"use client";

import { useCallback, useMemo } from "react";

import { useGlobalBackdropContext } from "../global/";
import { BackdropContext } from "./context";
import { BackdropProviderProps } from "./types";

export function BackdropProvider({ children, value: { id } }: BackdropProviderProps) {
  const { push, pop, isOpen } = useGlobalBackdropContext();

  const open = useCallback(() => {
    push(id);
  }, [id, push]);

  const close = useCallback(() => {
    pop(id);
  }, [id, pop]);

  const opened = useMemo(() => {
    return isOpen(id);
  }, [id, isOpen]);

  const toggle = useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [opened, close, open]);

  return (
    <BackdropContext.Provider value={{ open, close, toggle, opened }}>
      {children}
    </BackdropContext.Provider>
  );
}
