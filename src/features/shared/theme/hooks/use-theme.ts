import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark'

  const savedTheme = localStorage.getItem('theme') as Theme | null
  if (savedTheme) return savedTheme

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  return systemTheme
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const setSpecificTheme = (newTheme: Theme) => {
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
