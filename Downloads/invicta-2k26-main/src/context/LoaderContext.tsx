"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LoaderContextType {
  loadingComplete: boolean;
  setLoadingComplete: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: ReactNode }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <LoaderContext.Provider value={{ loadingComplete, setLoadingComplete }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
