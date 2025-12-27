import { css } from '~styled-system/css'

export const ContainerBtnsCSS = css({
  display: 'flex',
  gap: '12px 16px', 
  width: '100%',    
  maxWidth: '900px', 
  margin: '0 auto',
  marginTop: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  
  '@media(max-width:1024px)': {
    maxWidth: '100%',
    padding: '0 20px',
    gap: '10px 12px',
    marginBottom: '40px'
  },

  '@media(max-width:768px)': {
    paddingTop: '20px',
    gap: '8px 10px'
  },

  '@media(max-width:480px)': {
    gap: '8px',
    padding: '10px 0'
  }
})
export const ContainerProjectCSS = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '20px',

  '& .magnetic-project-container': {
    height: '500px !important',

    '@media(max-width:1024px)': {
      height: '400px !important'
    },
    '@media(max-width:768px)': {
      height: '300px !important'
    },
    '@media(max-width:480px)': {
      height: '250px !important'
    }
  }
})

export const ContainerProjectsCSS = css({
  alignItems: 'start',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px 70px',
  '@media(max-width:768px)': {
    gridTemplateColumns: '1fr',
    gap: '40px'
  }
})

export const ContainerProjectBtnsCSS = css({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  fontFamily: 'geistMedium'
})

export const ImgProjectCSS = css({
  objectFit: 'cover',
  height: '500px !important',
  width: '100%',

  '@media(max-width:1250px)': {
    height: '350px !important'
  },
  '@media(max-width:1050px)': {
    height: '200px !important'
  },
  '@media(max-width:765px)': {
    height: '400px !important',
    objectFit: 'content'
  }
})

export const ProjectNameCSS = css({
  fontSize: '{fontSizes.lg}',
  '@media(max-width:768px)': {
    fontSize: '{fontSizes.md}',
    textAlign: 'center'
  }
})

export const ProjectOriginCSS = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'bg.gardienSingleColor',
  gap: '10px',
  '& a': {
    position: 'relative'
  },
  '& a::after': {
    content: '""',
    position: 'absolute',
    height: '1px',
    width: '100%',
    left: 0,
    bottom: 0,
    background: 'bg.gardianBackground'
  }
})

export const ProjectsCSS = css({
  display: 'flex',
  fontSize: '{fontSizes.xs}',
  flexDirection: 'column'
})

export const BtnProjectNotFoundCSS = css({
  bg: '#E4004B',
  color: 'bg.classicReverse',
  _hover: {
    color: 'bg.classicReverse'
  }
})

export const ContainerProjectNotFoundCSS = css({
  width: '100%',
  display: 'grid',
  gridColumn: '1 / -1'
})

export const ThumbnailContainerCSS = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',

  '@media(max-width:1250px)': {
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  '@media(max-width:768px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px'
  },
  '@media(max-width:480px)': {
    gridTemplateColumns: '1fr',
    gap: '20px'
  }
})

export const ImgProjectOriginCSS = css({
  objectFit: 'cover',
  objectPosition: 'right',
  width: '100%',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  height: '200px !important'
})

export const ProjectLegendCSS = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const ThumbnailItemCSS = css({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  width: '98%',
  borderRadius: '12px',
  transition: 'all 0.3s ease',

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: '#35acdf',
    backgroundColor: 'rgba(53, 172, 223, 0.1)'
  },

  '& .magnetic-project-container': {
    height: '200px',

    '@media(max-width:768px)': {
      height: '150px'
    },
    '@media(max-width:480px)': {
      height: '200px'
    }
  }
})

export const ThumbnailImageCSS = css({
  width: '100%',
  objectFit: 'cover',
  height: '200px !important',
  borderRadius: '8px',
  marginBottom: '12px',
  position: 'center',
  transition: 'transform 0.3s ease',
  objectPosition: 'center',

  '@media(max-width:768px)': {
    height: '150px'
  },
  '@media(max-width:480px)': {
    height: '200px'
  }
})

export const ThumbnailNameCSS = css({
  fontSize: '15px',
  textAlign: 'center',
  opacity: '0.6',
  maxWidth: '120px',
  lineHeight: '1.3',
  fontWeight: '500',

  '@media(max-width:480px)': {
    maxWidth: '100%',
    fontSize: '14px'
  }
})

export const NoProjectsMessageCSS = css({
  textAlign: 'center',
  fontSize: '22px',
  opacity: 0.8,

  '@media(max-width:768px)': {
    fontSize: '18px'
  }
})

export const SuggestionTextCSS = css({
  textAlign: 'center',
  fontSize: '18px',
  opacity: 0.6,
  fontStyle: 'italic',

  '@media(max-width:768px)': {
    fontSize: '16px'
  }
})
