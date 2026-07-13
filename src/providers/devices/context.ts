"use client";

import { createContext } from "react";

import type { DevicesContextType, DevicesDispatchContextType } from "./types";

export const DevicesContext = createContext<DevicesContextType | null>(null);
export const DevicesDispatchContext = createContext<DevicesDispatchContextType | null>(null);
