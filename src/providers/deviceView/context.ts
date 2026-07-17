"use client";

import { createContext } from "react";

import type { DeviceViewContextType } from "./types";

export const DeviceViewContext = createContext<DeviceViewContextType | null>(null);
