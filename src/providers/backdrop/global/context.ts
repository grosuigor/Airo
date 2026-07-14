"use client";

import { createContext } from "react";

import type { BackdropContextType } from "./types";

export const BackdropContext = createContext<BackdropContextType>({
  push: () => {},
  pop: () => {},
  isOpen: () => false,
});
