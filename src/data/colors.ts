import DarkMode from '@/assets/icons/svg/dark-mode.svg?react'
const lightMode = {
  colors: ['#fe5251', '#FA723B', '#F53C28'],
  base: '#000000',
  contact: {
    btnContact: `linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2) `
  }
}

const darkMode = {
  colors: ['#13D5FF', '#eae547', '#ffffffe1'],
  base: '#FFFFFF',
  contact: {
    btnContact: `linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2) `
  }
}

export const themeAttributes = {
  light: lightMode,
  dark: darkMode
}

export type LightMode = typeof lightMode
export type DarkMode = typeof darkMode
export type ColorModes = 'dark' | 'light'
export type ModesContent = LightMode | DarkMode
export type ThemeAtrributes = Record<ColorModes, ModesContent>
