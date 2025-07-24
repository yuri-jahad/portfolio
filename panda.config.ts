import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  conditions: {
    extend: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &, :root:not([data-theme=light]) &' // Dark par défaut + explicite
    }
  },

  theme: {
    tokens: {
      fontSizes: {
        xs: { value: '12.8px' },
        md: { value: '16px' },
        lg: { value: '25px' },
        xl: { value: '50px' }
      },
      colors: {
        white: {
          base: { value: '#FFFFFF' },
          projects: { value: '#000000' },
          infos: { value: '#D9D6D6' }
        },
        dark: {
          base: { value: '#0d1117' },
          brown: { value: '#1A1A1A' },
          projects: { value: '#F6D83E' },
          infos: { value: '#D9D6D6' }
        }
      }, 
    },

    semanticTokens: {
      colors: {
        bg: {
          primary: {
            value: {
              _light: '{colors.white.base}',
              _dark: '{colors.dark.base}'
            }
          }
        },

        text: {
          primary: {
            value: {
              _light: '{colors.white.projects}', // #000000 en light
              _dark: '{colors.white.base}' // #FFFFFF en dark (ET par défaut)
            }
          }
        },

        // Pour votre filterButton (DARK par défaut)
        filterButton: {
          bg: {
            value: {
              _light: '{colors.white.projects}', // #000000 en light
              _dark: '{colors.white.base}' // #FFFFFF en dark (ET par défaut)
            }
          },
          text: {
            value: {
              _light: '{colors.white.base}', // #FFFFFF en light
              _dark: '{colors.white.projects}' // #000000 en dark (ET par défaut)
            }
          }
        }
      }
    },

    extend: {
      recipes: {
        filterButton: {
          className: 'filter-button',
          base: {
            bg: 'filterButton.bg',
            color: 'filterButton.text',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: 'xs',
            width: '92px',

            _hover: {
              opacity: '0.9',
            },

            _active: {
              transform: 'translateY(0)'
            },

            _disabled: {
              opacity: '0.5',
              cursor: 'not-allowed'
            }
          }
        }
      }
    }
  },

  outdir: 'styled-system'
})
