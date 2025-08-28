import { css } from '~styled-system/css'

export const StackContainerCSS = css({
  marginTop: '70px',
  gap: '100px',
  display: 'flex',
  flexDirection: 'column',
  '& svg': {
    '@media(max-width:750px)': {
      height: '16px',
      textAlign: 'start',
      width: 'fit-content'
    }
  }
})
