import { css } from '~styled-system/css'

export const ContactContentCSS = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px',
})

export const SloganCSS = css({
  fontSize: '{fontSizes.xl}',
  maxWidth: '50vw',
  lineHeight: '60px',
  fontFamily: 'athena',
  textAlign: 'center', 
  '@media(max-width:1250px)': {
    maxWidth: '100%'
  }, 
   '@media(max-width:800px)': {
    fontSize:'30px'
  }
})

export const FooterCSS = css({
  display: 'flex',
  justifyContent: 'space-between'
})

export const MailCSS = css({
  width: 'calc(100% / 5 - 2px)',
  height: '55px',
  fontFamily: 'geistMedium',
  color: 'bg.primary',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '{fontSizes.md}',
  borderRadius: '5px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  // Effet active
  '&:active': {
    transform: 'translateY(0) scale(0.98)',
    transition: 'all 0.1s ease'
  },

  // Effet brillant au survol (plus subtil pour le noir)
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'bg.contactHover',
    transition: 'left 0.8s ease',
    zIndex: 1
  },

  '&:hover::before': {
    left: '100%'
  },
  '@media(max-width:1050px)': {
    width: 'calc(100% / 3 - 2px)'
  },
})

export const DomainCSS = css({
  color: 'bg.gardienSingleColor'
})
export const GridCSS = css({
  borderLeft: '1px solid {colors.border.primary}',
  paddingBottom: '10px',
  color: '{colors.bg.primary}',
  minHeight:'80vh !important',
  zIndex: '100',
  backgroundImage:
    'repeating-linear-gradient(90deg, transparent 0, transparent calc(100% / 5 - 1px), {colors.border.primary} calc(100% / 5 - 1px), {colors.border.primary} calc(100% / 5), transparent calc(100% / 5))',
  '@media(max-width:1050px)': {
    backgroundImage:
      'repeating-linear-gradient(90deg, transparent 0, transparent calc(100% / 3 - 1px), {colors.border.primary} calc(100% / 3 - 1px), {colors.border.primary} calc(100% / 3), transparent calc(100% / 3))'
  }
})
