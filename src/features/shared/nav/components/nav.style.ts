import { css } from '~styled-system/css'

export const HeaderCSS = css({
  height: 'height.menu',
  borderBottom: 'solid 1px {colors.border.primary}',
  position: 'fixed',
  width: '100vw',
  top: 0,
  left: 0,
  zIndex: '100',
  fontFamily: 'athena',
  fontSize: '{fontSizes.xs}',
  backdropFilter: 'blur(100px)'
})

export const NavCss = css({
  display: 'flex',
  height: '100%',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1440px',
  padding: '0 20px',

  '@media (max-width: 768px)': {
    padding: '0 15px',
    bg:'bg.contactHover'
  }
})

// Menu desktop - se cache sur mobile
export const UlCSS = css({
  display: 'flex',
  gap: '65px',

  '@media (max-width: 768px)': {
    display: 'none'
  }
})

export const NavLinkCSS = css({
  position: 'relative',
  textDecoration: 'none',
  color: 'text.primary',
  fontWeight: '500',
  padding: '10px 0',
  transition: 'color 0.3s ease',

  '& svg': {
    fill: 'bg.gardianBackground',
    transition: 'fill 0.3s ease'
  },

  '& svg path': {
    fill: 'currentColor'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '3px',
    background: 'bg.gardianBackground',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    borderRadius: '2px'
  },

  '&:hover::after': {
    transform: 'scaleX(1)'
  },

  '&:hover': {
    color: 'bg.gardienSingleColor',

    '& svg': {
      fill: 'bg.gardienSingleColor'
    }
  },

  '&.active': {
    color: 'bg.gardienSingleColor',

    '& svg': {
      fill: 'bg.gardienSingleColor'
    },

    '&::after': {
      transform: 'scaleX(1)'
    }
  }
})

// Bouton burger - visible uniquement sur mobile
export const BurgerButtonCSS = css({
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '24px',
  height: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  zIndex: '101',

  '@media (max-width: 768px)': {
    display: 'flex'
  }
})

// Lignes du burger avec le style de votre thème
export const BurgerLineCSS = css({
  width: '100%',
  height: '2px',
  backgroundColor: 'text.primary',
  borderRadius: '1px',
  transition: 'all 0.3s ease',
  transformOrigin: '1px'
})

// Navigation mobile CORRIGÉE
export const MobileNavCSS = css({
  // CORRECTION 1: Enlever le display: 'none' du niveau racine
  position: 'fixed',
  top: 'height.menu',
  left: 0,
  width: '100vw',
  // CORRECTION 2: Utiliser 100dvh pour une hauteur plus précise sur mobile
  height: '100dvh',
  backgroundColor: 'text.primary',
  backdropFilter: 'blur(100px)',
  borderTop: 'solid 1px {colors.border.primary}',
  transform: 'translateX(-100%)',
  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  zIndex: '99',
  // CORRECTION 3: Centrer le contenu verticalement
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  fontFamily: 'athena',
  // Cacher par défaut uniquement sur desktop
  '@media (min-width: 769px)': {
    display: 'none'
  },

  '&.mobile-open': {
    transform: 'translateX(0)'
  },

  // Liste des liens mobiles
  '& ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  },

  // CORRECTION 4: Liens dans le menu mobile avec surlignement centré
  '& a': {
    position: 'relative',
    textDecoration: 'none',
    color: 'bg.classicReverse',
    fontWeight: '500',
    fontSize: '24px',
    padding: '15px 20px',
    display: 'block',
    transition: 'color 0.3s ease',
    textAlign: 'center',
    width: '200px',
    
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '5px', // CORRECTION: Ajuster la position
      height: '3px',
      background: 'bg.gardianBackground',
      transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      borderRadius: '2px'
    },

    '&:hover': {
      color: 'bg.gardienSingleColor',

      '&::after': {
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%'
      }
    },

    '&.active': {
      color: 'bg.classicReverse',

      '&::after': {
        width: '50%',
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }
  }
})

// Overlay pour fermer le menu
export const OverlayCSS = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(4px)',
  zIndex: '98',
  opacity: 0,
  pointerEvents: 'none',
  transition: 'opacity 0.3s ease',
  // Cacher par défaut uniquement sur desktop
  '@media (min-width: 769px)': {
    display: 'none'
  },

  '&.open': {
    opacity: 1,
    pointerEvents: 'auto'
  }
})

// Style pour le theme toggle qui reste visible
export const ThemeToggleWrapperCSS = css({
  zIndex: '101',
  position: 'relative'
})
