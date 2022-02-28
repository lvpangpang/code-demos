import { createContext } from "react";

export const AppCtx = createContext({
  selectTypes: [],
});

export default function AppProvider({ value, children }) {
  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}
