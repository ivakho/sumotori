import { createContext } from "react";
import type { useCarsFilters } from "./hooks";

export type CarsFiltersContextType = ReturnType<typeof useCarsFilters>;

export const CarsFiltersContext = createContext<CarsFiltersContextType | null>(
  null
);
