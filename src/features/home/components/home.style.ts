import { css } from '~styled-system/css'

export const HomeCSS = css({
  flexDirection: 'column',
  alignItems: 'center'
})

export const H1CSS = css({
  fontSize: '{fontSizes.xxl}',
  lineHeight: '74px',
  fontFamily: 'athena',
  '@media(max-width: 1440px)': {
    fontSize: '50px'
  },
  '@media(max-width: 750px)': {
    fontSize: '40px',
    lineHeight: '60px'
  }
})
export const H2CSS = css({
  fontSize: '20px',
  lineHeight: '54px',
  fontFamily: 'athena',
  position: 'relative',
  padding: '3px 0 3px 0'
})

export const CategoryCSS = css({
  textAlign: 'end',
  paddingTop: '10px'
})

export const PCSS = css({
  maxWidth: '500',
  fontFamily: 'geistMedium',
  fontSize: '15px',
  color: 'text.paragraph',
  opacity: '0.9',
  lineHeight: '1.6',
  letterSpacing: '0.2px',
  margin: '0',
  textRendering: 'optimizeLegibility',
  '@media(max-width: 750px)': {}
})

export const BioAndIonCSS = css({
  margin: '0 auto',
  display: 'flex',
  alignSelf: 'center',
  height: 'fit-content',
  gap: '180px',
  marginBottom: '14vh',
  '@media(max-width: 1440px)': {
    gap: '100px'
  },
  '@media(max-width: 1050px)': {
    gap: '0px',
    flexDirection: 'column',
  },
  '@media(max-width: 750px)': {
    marginBottom: '8vh',
  }
})

export const SocialCSS = css({
  display: 'flex',
  flexFlow: 'wrap',
  gap: '113',
  '@media(max-width: 1050px)': {
    gap: '50'
  },
  '@media(max-width: 750px)': {
    gap: '16',
    fontSize: '11px',
  }
})

export const PanelCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '10px',
  flexWrap: 'wrap',
  maxWidth: '100%'
})

export const ContainerPCSS = css({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  gap: '30px'
})




export const LinkSocialCSS = css({
  cursor: 'pointer',
  position: 'relative',
  display: 'inline-block',
  opacity: 0.8,
  transition: 'opacity 0.4s ease',
  _after: {
    content: '""',
    position: 'absolute',
    bottom: '-2px',
    left: 0,
    width: '100%',
    height: '1px',
    bg: 'currentColor',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
  },
  _hover: {
    opacity: 1,
    _after: {
      transform: 'scaleX(1)',
    },
  },
})

export const CallToActionParentCSS = css({
  position: 'absolute',
  bottom: '-15vh',
  left: '25%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '220px',
  height: '50px',
  
  border: '1px solid',
  borderColor: 'text.primary/30',
  borderRadius: '30px',

  bg: 'transparent',
  color: 'text.primary',
  fontFamily: 'athena',
  fontSize: '{fontSizes.md}',
  letterSpacing: '0.05em',
  cursor: 'pointer',
  
  isolation: 'isolate', 
  overflow: 'hidden',
  transition: 'color 0.7s ease, border-color 0.7s ease',

  _before: {
    content: '""',
    position: 'absolute',
    top: '-10%',
    left: '-20%',
    width: '10%',
    height: '120%',
    bg: 'text.primary',
    transform: 'skewX(-18deg)',
    zIndex: -1,
    transition: 'width 0.42s ease',
  },

  _hover: {
    color: 'bg.classicReverse',
    borderColor: 'text.primary/50',
    _before: {
      width: '145%',
      transition: 'width 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  },

  '@media(max-width: 1440px)': {
    bottom: '-12vh',
    fontSize: '14px',
    height: '45px',
    width: '200px',
  },
  '@media(max-width: 1050px)': {
    position: 'relative',
    bottom: 'auto',
    left: 'auto',
    height: '44px',
    width: '180px',
    alignSelf: 'flex-start',
  },
  '@media(max-width: 750px)': {
    width: '160px',
    fontSize: '13px',
  },
})

export const ScrollDownCSS = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  cursor: 'default',
  flexShrink: 0,
  fontSize: '9px',
  fontFamily: 'geistMedium',
  letterSpacing: '0.22em',
  opacity: 0.42,
  animation: 'sdPulse 3.5s ease-in-out infinite',
  whiteSpace: 'nowrap',
})

export const ContainerPandaCSS = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media(max-width: 1440px)': {
    '& svg': {}
  },
  '@media(max-width: 1050px)': {
    display: 'none'
  }
})

export const ButtonContainer2CSS = css({
  border: 'solid 1px',
  borderColor: 'border.primary',
  opacity: '0',
  position: 'relative',
  overflow: 'hidden',
  fontFamily: 'athena',
  fontWeight: '300',
  transition: 'all 0.5s ease',
  letterSpacing: '1px',
  borderRadius: '16px',
  boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden'
})

export const UrbanSpriteCSS = css({
  bg: 'bg.classic',
  color: 'bg.classicReverse',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5px',
  WebkitMaskPosition: '0 0',
  maskPosition: '0 0',
  width: '100%',
  height: '100%',
  padding: 'fit-content',
  fontFamily: 'athena',
  WebkitMask: "url('/img/urban-sprite.png')",
  mask: "url('/img/urban-sprite.png')",
  WebkitMaskSize: '3000% 100%',
  maskSize: '3000% 100%',
  border: 'none',
  cursor: 'pointer',
  _hover: {
    bg: 'bg.classicReverse'
  }
})

export const MaskCSS = css({
  color: 'bg.classic',
  position: 'absolute',
  textAlign: 'center',
  padding: 'fit-content',
  width: '101%',
  opacity: 0,
  fontFamily: 'athena',
  transform: 'translateY(50%)',
  overflow: 'hidden',
  fontWeight: 'bold'
})
