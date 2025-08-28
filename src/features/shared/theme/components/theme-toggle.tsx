import { useTheme } from '@theme/hooks/use-theme'
import { buttonCSS } from '@theme/components/theme-toggle.style'
import LightMode from '@/assets/icons/svg/light-mode.svg?react'
import DarkMode from '@/assets/icons/svg/dark-mode.svg?react'

export default function ToggleTheme () {
  const { theme, toggleTheme, isDark } = useTheme()
  return (
    <button className={buttonCSS} onClick={toggleTheme}>
      {isDark ? <LightMode width={30} /> : <DarkMode width={30}/>}
    </button>
  )
}
