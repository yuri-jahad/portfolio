import { css } from '~styled-system/css'

export const HomeCSS = css({
  flexDirection: 'column',
  alignItems: 'center',
  '@media(max-width:750px)': {
  minHeight:'80vh'
  }
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
  height: 'fit-content',
  gap: '180px',
  marginBottom: '14vh',
  '@media(max-width: 1440px)': {
    gap: '100px'
  },
  '@media(max-width: 1050px)': {
    gap: '0px'
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
    gap: '20'
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

export const CallToActionCSS = css({
  height: '50px',
  width: '220px',
  color: 'text.primary',
  fontSize: '{fontSizes.md}',
  '@media(max-width: 1440px)': {
    fontSize: '14px',
    height: '45px',
    width: '200px'
  },
  '@media(max-width: 1050px)': {
    fontSize: '14px',
    height: '40px',
    width: '150px'
  }
})

export const CallToActionParentCSS = css({
  bottom: '-15vh',
  position: 'absolute',
  left: '25%',
  '@media(max-width: 1440px)': {
    bottom: '-12vh'
  },
  '@media(max-width: 1050px)': {
    bottom: '-10vh'
  },
  '@media(max-width: 750px)': {
    bottom: '-10vh'
  }
})

export const ScrollDownCSS = css({
  fontSize: '{fontSizes.md}'
})

export const ContainerPandaCSS = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media(max-width: 1440px)': {
    '& svg': {}
  },
  '@media(max-width: 1050px)': {
    bg: 'red',
    '& svg': {
      display: 'none'
    }
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
  WebkitMask: "url('img/urban-sprite.png')",
  mask: "url('img/urban-sprite.png')",
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
