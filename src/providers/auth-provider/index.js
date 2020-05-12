import React from "react";
import { createContext, useContext } from "react";
import useAuth from "./use-auth";

// Create a context
const ctx = createContext({});

// Component to init Provider
export function AuthProvider({ children }) {
  const auth = useAuth();
  return <ctx.Provider value={auth}>{children}</ctx.Provider>;
}

// Hook to use the provider
export function useAuthProvider() {
  return useContext(ctx);
}
