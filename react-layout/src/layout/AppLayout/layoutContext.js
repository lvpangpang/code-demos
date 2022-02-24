import { createContext } from 'react'

export const AppLayoutCtx = createContext({
  descList: [],
})

export default function AppLayoutProvider({ value, children }) {
  return <AppLayoutCtx.Provider value={value}>{children}</AppLayoutCtx.Provider>
}
