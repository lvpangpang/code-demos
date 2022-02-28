import { createContext } from 'react'

export const AppLayoutCtx = createContext()

export default function AppLayoutProvider({ value, children }) {
  return <AppLayoutCtx.Provider value={value}>{children}</AppLayoutCtx.Provider>
}
