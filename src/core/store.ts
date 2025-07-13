import { create } from 'zustand'

interface TypeStore {
  theme: 'dark' | 'light' | null
}

const useStore = create<TypeStore>(set => ({
  theme: null
}))
