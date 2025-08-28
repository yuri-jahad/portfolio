import { css } from '~styled-system/css'

export const DesignIconCSS = css({
  width: '60px',
  height: '60px',
  background: 'bg.iconDesign',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  '@media(max-width:1024px)': {
    width: '40px',
   height: '40px',
  },
})

export const LineHorizontalCSS = css({
  display: 'flex',
  flexWrap:'wrap',
  gap: '30px',
  blur: '200',
  height: '100%',
  position: 'relative',
  width: 'calc(75vw - 100px)',
  padding: '30px 0 30px 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '0',
    opacity: '0.3',
    width: '100%',
    background: 'bg.classic',
    height: '1px',
    bg: 'bg.classic',
    borderRadius: 'inherit'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    opacity: '0.3',
    width: '100%',
    height: '1px',
    background: 'bg.classic'
  }
})
export const TechnoContentCSS = css({
  display: 'flex',
  position: 'relative',
  justifyContent: 'space-between',
  width: 'fit-content',
  gap: '30px',
  flexDirection: 'column'
})

export const TechnosContentCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '700px',
  width: '50vw',
  marginLeft: '100px',

  flexDirection: 'column'
})

export const TechnoTitleCSS = css({
  fontSize: '{fontSizes.lg}'
})

export const TechnoNameCSS = css({
  position: 'absolute',
  right: '20',
  width: 'fit-content',
  height: 'fit-content',
  fontSize: '40px',
  fontFamily: 'Athena, Arial Black, sans-serif',
  fontWeight: '900',
  color: 'bg.classic',
  opacity: '0.8',
  pointerEvents: 'none',
  zIndex: 10,
  textAlign: 'center',
  whiteSpace: 'nowrap'
})

export const TechnoSelectedCSS = css({
  background: 'border.primary'
})
