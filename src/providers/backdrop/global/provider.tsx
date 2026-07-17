"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { BackdropContext } from "./context";

export function BackdropProvider({ children }: { children: React.ReactNode }) {
  const [backdrops, setBackdrops] = useState<string[]>([]);

  const last = useMemo(() => {
    return backdrops.at(-1);
  }, [backdrops]);

  const includes = useCallback(
    (id: string) => {
      return backdrops.includes(id);
    },
    [backdrops],
  );

  const isOpen = useCallback(
    (id: string) => {
      return backdrops.at(-1) === id;
    },
    [backdrops],
  );

  const push = useCallback(
    (id: string) => {
      if (includes(id)) {
        return;
      }
      setBackdrops((prev) => [...prev, id]);
    },
    [includes],
  );

  const pop = useCallback(
    (id: string) => {
      if (!isOpen(id)) {
        return;
      }
      setBackdrops((prev) => prev.slice(0, -1));
    },
    [isOpen],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!last) {
        return;
      }
      if (event.key === "Escape") {
        pop(last);
      }
    },
    [last, pop],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <BackdropContext.Provider value={{ push, pop, isOpen, includes }}>
      {children}
    </BackdropContext.Provider>
  );
}
