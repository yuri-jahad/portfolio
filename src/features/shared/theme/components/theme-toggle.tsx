import { useTheme } from '@theme/hooks/use-theme'
import { buttonCSS } from '@theme/components/theme-toggle.style'

export default function ToggleTheme () {
  const { theme, toggleTheme, isDark } = useTheme()
  return (
    <button className={buttonCSS} onClick={toggleTheme}>
      {isDark ? '☀️' : '🌙'}
    </button>
  )
}
