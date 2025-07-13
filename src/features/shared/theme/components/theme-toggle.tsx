import { useTheme } from '@theme/hooks/use-theme'

export default function ToggleTheme () {
  const { theme, toggleTheme, isDark } = useTheme()
  return (
    <button onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
      {theme}
    </button>
  )
}
