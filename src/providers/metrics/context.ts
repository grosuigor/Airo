"use client";

import { createContext } from "react";

import type { MetricsContextType, MetricsDispatchContextType } from "./types";

export const MetricsContext = createContext<MetricsContextType | null>(null);
export const MetricsDispatchContext = createContext<MetricsDispatchContextType | null>(null);
