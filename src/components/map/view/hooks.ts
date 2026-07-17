"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SETTLE_MS = 500;

export function useMapReady() {
  const [ready, setReady] = useState(false);
  const readyRef = useRef(false);
  const hasTilesRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scheduleReady = useCallback(() => {
    if (readyRef.current || !hasTilesRef.current) return;

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      readyRef.current = true;
      setReady(true);
    }, SETTLE_MS);
  }, []);

  const handleTilesLoaded = useCallback(() => {
    hasTilesRef.current = true;
    scheduleReady();
  }, [scheduleReady]);

  const handleIdle = useCallback(() => {
    scheduleReady();
  }, [scheduleReady]);

  return {
    ready,
    onTilesLoaded: handleTilesLoaded,
    onIdle: handleIdle,
  };
}
