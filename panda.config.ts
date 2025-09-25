import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  conditions: {
    extend: {
      light: '[data-theme=light] &',
      dark: '[data-theme=dark] &, :root:not([data-theme=light]) &'
    }
  },

  theme: {
    extend: {
      recipes: {
        filterButtonSelected: {
          className: 'filter-button-selected',
          base: {
            bg: 'bg.classic',
            color: 'bg.classicReverse',
            fontSize: '{fontSizes.xs}',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }
        },
        filterButton: {
          className: 'filter-button',
          base: {
            color: 'bg.classic',
            justifyContent: 'center',
            width: 'fit-content',
            height: '30px',
            padding: '0 16px 0 16px',
            fontSize: '{fontSizes.xs}',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '20px',
            cursor: 'pointer',
            border: 'solid 1px',
            borderColor: 'border.primary',
            transitionDuration: '.3s',
            transition: 'ease-in-out',

            _hover: {
              background: 'bg.classic',
              color: 'bg.classicReverse'
            },

            _active: {
              transform: 'translateY(0)'
            },

            _disabled: {
              opacity: '0.5',
              cursor: 'not-allowed'
            }
          }
        },
        image: {
          className: 'projects',
          base: {
            width: '705px',
            height: '500px'
          }
        },
        // 🎯 NOUVEAU: Recipe pour les éléments animés
        animatedElement: {
          className: 'animated-element',
          base: {
            position: 'relative',
            overflow: 'hidden'
          }
        }
      }
    },

    tokens: {
      fonts: {
        sans: { value: ['Geist', 'system-ui', 'sans-serif'] },
        athena: { value: ['Athena'] },
        geistMedium: { value: ['GeistMedium'] },
        geistLight: { value: ['GeistLight'] },
      },
      fontWeights: {
        medium: { value: '500' }
      },
      fontSizes: {
        xs: { value: '12.8px' },
        md: { value: '16px' },
        lg: { value: '20px' },
        xl: { value: '40px' },
        xxl: { value: '60px' }
      },
      spacing: {
        pt: { value: '120px' }
      },
      sizes: {
        height: {
          menu: { value: '6vh' },
          skills: { value: '160px' },
          global: { value: '30px' },
          contactSeperator: { value: '60px' }
        },
        width: {
          main: { value: '1440px' },
          home: { value: '1100px' },
          homeContact: { value: '113px' },
          buttonSkills: { value: '10px' }
        }
      },
      colors: {
        light: {
          base: {
            value:
              'radial-gradient(circle,rgba(255, 255, 255) 0%, rgba(255, 250, 250) 100%, rgba(240,240, 240) 71%)'
          },
          border: { value: 'rgb(000, 000, 000, 0.2)' },
          projects: { value: '#000000' },
          infos: { value: '#D9D6D6' }
        },
        dark: {
          base: { value: 'rgb(255, 255, 255, 0.2)' },
          mod: {
            value: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"%3E%3Cpath fill="%23ffffff" fill-opacity="0.02" d="M1 3h1v1H1V3zm2-2h1v1H3V1z"%3E%3C/path%3E%3C/svg%3E'),
    linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0f0f23 100%)`
          },
          radial: {
            value:
              'linear-gradient(30deg, #2c3e50 0%, #34495e 25%, #1a1a1a 50%, #000000 75%, #2c3e50 100%)'
          },

          github: { value: '#0d1117' },
          border: { value: 'rgba(255, 255, 255, 0.2)' },
          projects: { value: '#F6D83E' },
          infos: { value: '#D9D6D6' },
          slate: {
            value: '#FFF'
          }
        }
      }
    },

    semanticTokens: {
      colors: {
        bg: {
          primary: {
            value: {
              _light: '{colors.light.base}',
              _dark: '{colors.dark.radial}'
            }
          },

          iconDesign: {
            value: {
              _dark:
                'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4))',
              _light:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.4))'
            }
          },
          contactHover: {
            value: {
              _dark:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), transparent)',
              _light:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2), transparent)'
            }
          },
          primaryReverse: {
            value: {
              _dark: '#FFF',
              _light: '#000'
            }
          },

          gardianBackground: {
            value: {
              _dark: 'linear-gradient(90deg, #13d5ff, #eae547, #ffffff)',
              _light: 'linear-gradient(90deg, #fe5251, #eae547, #F53C28)'
            }
          },
          gardienSingleColor: {
            value: {
              _dark: '#13d5ff',
              _light: '#fe5251'
            }
          },
          classic: {
            value: {
              _dark: '#FFF',
              _light: '#000'
            }
          },
          classicReverse: {
            value: {
              _dark: '#000',
              _light: '#FFF'
            }
          }
        },
        btnsFilterSelected: {
          primary: {
            value: {
              // Bleu néon moderne - plus contrasté pour le texte blanc
              _dark:
                'linear-gradient(135deg, rgb(255, 255, 255) 0%, #35acdf 50%, #00d4ff 100%)',

              // Bleu corporate - assombri pour meilleure lisibilité
              _light:
                'linear-gradient(135deg, #1e3a8a 0%, #35acdf 30%, #0f172a 100%)'
            }
          }
        },
        border: {
          primary: {
            value: {
              _light: '{colors.light.border}',
              _dark: '{colors.dark.border}'
            }
          },
          primaryReverse: {
            value: {
              _dark: '{colors.light.border}',
              _light: '{colors.dark.border}'
            }
          }
        },

        p: {
          primary: {
            value: {
              _light: '#010101',
              _dark: '#D9D6D6'
            }
          }
        },
        projects: {
          primary: {
            value: {
              _light: '{colors.light.projects}',
              _dark: '{colors.dark.projects}'
            }
          }
        },

        text: {
          primary: {
            value: {
              _light: '{colors.light.projects}',
              _dark: '#FFF'
            }
          },
          paragraph: {
            value: {
              _light: '#4a5568',
              _dark: '#d1d5db'
            }
          }
        },

        filterButton: {
          bg: {
            value: {
              _light: '{colors.light.projects}',
              _dark: '{colors.light.base}'
            }
          },
          text: {
            value: {
              _light: '{colors.light.base}',
              _dark: '{colors.light.projects}'
            }
          }
        }
      }
    }
  },

  outdir: 'styled-system'
})
