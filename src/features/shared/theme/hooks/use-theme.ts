import { useEffect } from 'react'
import type { Theme } from '@/core/store'
import useStore from '@/core/store'

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  if (savedTheme) return savedTheme

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  return systemTheme
}

export const useTheme = () => {
  const { theme, setTheme } = useStore()

  useEffect(() => {
    if (theme === null) {
      const initialTheme = getInitialTheme()
      setTheme(initialTheme)
    }
  }, [theme, setTheme])

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  const toggleTheme = () => {
    if (!theme) return

    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const setSpecificTheme = (newTheme: Exclude<Theme, null>) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return {
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    isDark: theme === 'dark'
  }
}
