import { css } from '~styled-system/css'

export const ContactContentCSS = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px'
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
    fontSize: '30px'
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
  '@media(max-width:700px)': {
    width: '60vw',
    fontSize: '15px'
  },
  '@media(max-width:400px)': {
    fontSize: '13px'
  }
})

export const DomainCSS = css({
  color: 'bg.gardienSingleColor'
})
export const GridCSS = css({
  paddingBottom: '10px',
  color: '{colors.bg.primary}',
  minHeight: '80vh !important',
  zIndex: '100',
  backgroundImage: `
    repeating-linear-gradient(
      90deg,
      {colors.border.primary} 0,
      {colors.border.primary} 1px,
      transparent 1px,
      transparent calc(100% / 5)
    ),
    linear-gradient(
      90deg,
      transparent calc(100% - 1px),
      {colors.border.primary} calc(100% - 1px)
    )
  `,
  '@media(max-width:1050px)': {
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        {colors.border.primary} 0,
        {colors.border.primary} 1px,
        transparent 1px,
        transparent calc(100% / 3)
      ),
      linear-gradient(
        90deg,
        transparent calc(100% - 1px),
        {colors.border.primary} calc(100% - 1px)
      )
    `
  },
  '@media(max-width:700px)': {
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        {colors.border.primary} 0,
        {colors.border.primary} 1px,
        transparent 1px,
        transparent calc(100% / 2)
      ),
      linear-gradient(
        90deg,
        transparent calc(100% - 1px),
        {colors.border.primary} calc(100% - 1px)
      )
    `
  }
})

export const ParentArrowUPCSS = css({
  position: 'relative',
  width: '100%'
})

export const ArrowUPCSS = css({
  position: 'absolute',
  right: 0,
  bottom: 40, 
  fill:'bg.classic'
})
