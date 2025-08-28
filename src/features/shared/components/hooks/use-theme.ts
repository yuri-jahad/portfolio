import useStore from '@/core/store'
import { themeAttributes } from '@/data/colors'

import { useMemo } from 'react'

export const useThemeAttributes = () => {
  const { theme } = useStore()
  return useMemo(() => {
    if (theme === 'dark') {
      return themeAttributes[theme]
    } else if (theme === 'light') {
      return themeAttributes[theme]
    }
    return themeAttributes['dark']
  }, [theme])
}
