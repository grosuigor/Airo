"use client";

import { useContext } from "react";

import { BackdropContext } from "./context";

export function useBackdropContext() {
  const context = useContext(BackdropContext);

  if (!context) {
    throw new Error("useBackdropContext must be used within a BackdropProvider");
  }

  return context;
}
