import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  conditions: {
    extend: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &'
    }
  },

  theme: {
    tokens: {
      colors: {
        primary: {
          50: { value: '#f0f9ff' },
          500: { value: '#3b82f6' },
          900: { value: '#1e3a8a' }
        },
        white: { value: '#ffffff' },
        gray: {
          900: { value: '#1A1A1A' }
        }
      }
    },

    // Utiliser semanticTokens pour les couleurs conditionnelles
    semanticTokens: {
      colors: {
        bg: {
          primary: {
            value: {
              base: '{colors.white}',
              _dark: '{colors.gray.900}'
            }
          }
        }
      }
    },

    extend: {}
  },

  outdir: 'styled-system'
})
