import { createContext } from "react";

import type { SidebarContextType } from "./types";

export const SidebarContext = createContext<SidebarContextType | null>(null);
