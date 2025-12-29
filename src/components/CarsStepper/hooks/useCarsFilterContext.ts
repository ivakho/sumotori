import { useContext } from "react";
import { CarsFiltersContext } from "../context";

export function useCarsFiltersContext() {
  const ctx = useContext(CarsFiltersContext);

  if (!ctx) {
    throw new Error(
      "useCarsFiltersContext должен быть использован CarsFiltersContext.Provider"
    );
  }

  return ctx;
}
