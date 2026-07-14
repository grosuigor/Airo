"use client";

import { createContext } from "react";

import type { BackdropContextType } from "./types";

export const BackdropContext = createContext<BackdropContextType>({
  open: () => {},
  close: () => {},
  toggle: () => {},
  opened: false,
});
