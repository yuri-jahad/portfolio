import { css } from '~styled-system/css'
import type { SystemStyleObject } from '@pandacss/dev'

export const ContainerCSS = css({
  position: 'relative',
  minHeight: '100vh',
  bg: 'bg.primary',
  fontSmooth: 'antialiased',
  color: 'text.primary',
  zIndex: '0'
})

export const SceneCSS = css({
  margin: '0 auto',
  fontFamily: 'geistMedium',
  minWidth: 'width.main',

  width: 'width.main',
  '@media(max-width: 1440px)': {
    padding: '20px 20px 0px 20px',
    minWidth: 'auto',
    width: '100%',
    margin: '0 auto'
  },
  // Ajout des règles mobile uniquement
  '@media(max-width: 768px)': {
    minWidth: 'auto',
    width: '100%',
    padding: '20px'
  }
})

export const flexCSS = {
  base: css({ display: 'flex' }),
  x: css({
    display: 'flex',
    justifyContent: 'center'
  }),
  y: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
}

export const AutoCSS = {
  margin: '0 auto'
}

export const SectionCSS = css({
  fontSize: '{fontSizes.xs}',
  minHeight: 'calc(100vh - 6vh)',
  display: 'grid',
  maxWidth: '100vw',
  gridTemplateRows: 'auto 1fr auto',
  flexDirection: 'column',
  // Ajustements mobile uniquement
  '@media(max-width:1440px)': {
    minHeight: 'calc(94vh - 6vh)'
  },
  '@media(max-width: 768px)': {
    minHeight: 'auto',
    padding: '20px 0'
  }
})

export const ZoneCategoryCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: '40px',
  // Ajustements mobile uniquement
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    paddingBottom: '20px'
  }
})

export const CssOrganize = (...styles: SystemStyleObject[]) =>
  css(Object.assign({}, ...styles))

export const SizesCSS = {
  titleSkills: CssOrganize({
    fontSize: '{fontSizes.xl}',
    fontFamily: 'athena',
    // Ajustement mobile uniquement
    '@media(max-width: 768px)': {
      fontSize: '{fontSizes.lg}',
      textAlign: 'center'
    }
  }),
  titleProjects: CssOrganize({
    fontSize: '{fontSizes.xl}',
    height: 'fit-content',
    fontFamily: 'athena',
    // Ajustement mobile uniquement
    '@media(max-width: 768px)': {
      fontSize: '{fontSizes.lg}',
      textAlign: 'center'
    }
  })
}

export const SpacingCSS = {
  sectionSeparator: css({
    marginTop: '210px',
    // Ajustement mobile uniquement
    '@media(max-width: 768px)': {
      marginTop: '80px'
    }
  })
}

export const FluxCSS = css({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  minHeight: '100vh',
  zIndex: '-1',
  transition: 'background-color 0.5s ease'
})
