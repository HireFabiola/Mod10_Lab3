import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Filter, FilterContextType } from "../types";

// Create context
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// Provider component
export function FilterProvider({ children }: { children: ReactNode }) {
  // Default filter shows all todos
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

// Custom hook
export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
}