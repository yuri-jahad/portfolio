import { create } from 'zustand'

export type Theme = 'dark' | 'light' | null

interface TypeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const useStore = create<TypeStore>(set => ({
  theme: null,
  setTheme: theme => set({ theme })
}))

export default useStore
