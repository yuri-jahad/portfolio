import { css } from '~styled-system/css'

// Container pour les boutons de filtre - INCHANGÉ
export const ContainerBtnsCSS = css({
  display: 'flex',
  gap: '20px 10px',
  width: '50vw',
  margin: '0 auto',
  marginTop: '30px',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '@media(max-width:1440px)': {
    gap: '18px 10px'
  },
  '@media(max-width:1024px)': {
    width: '80vw',
    gap: '16px 8px',
    marginBottom: '40px'
  },
  '@media(max-width:768px)': {
    width: '100%',
    gap: '14px 8px',
    paddingTop: '30px 0 30px 0'
  },
  '@media(max-width:480px)': {
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    gap: '12px',
    padding: '20px 0 20px 0'
  }
})

// Container pour un projet individuel - CORRIGÉ avec hauteurs
export const ContainerProjectCSS = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '20px',

  '& .magnetic-project-container': {
    height: '500px', // Hauteur fixe pour desktop

    '@media(max-width:1024px)': {
      height: '400px'
    },
    '@media(max-width:768px)': {
      height: '300px'
    },
    '@media(max-width:480px)': {
      height: '250px'
    }
  }
})

// Container pour la grille de projets - CORRIGÉ
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

// Boutons des technos dans chaque projet - INCHANGÉ
export const ContainerProjectBtnsCSS = css({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
  fontFamily: 'geistMedium'
})

// Images des projets - CORRIGÉ avec hauteurs fixes
export const ImgProjectCSS = css({
  objectFit: 'cover',
  height: '500px !important',
  width: '100%',

  '@media(max-width:1250px)': {
    height: '400px !important'
  },
  '@media(max-width:1024px)': {
    height: '300px !important'
  },
  '@media(max-width:765px)': {
    height: '400px !important',
    objectFit: 'content'
  }
})

export const ImgProjectOriginCSS = css({
  objectFit: 'cover',
  objectPosition: 'right',
  height: '500px !important',
  width: '100%',

  '@media(max-width:1250px)': {
    height: '400px !important'
  },
  '@media(max-width:1024px)': {
    height: '300px !important'
  },
  '@media(max-width:765px)': {
    height: '400px !important',
    objectFit: 'content'
  }
})

// Nom du projet - AJOUTÉ responsive
export const ProjectNameCSS = css({
  fontSize: '{fontSizes.lg}',
  '@media(max-width:768px)': {
    fontSize: '{fontSizes.md}',
    textAlign: 'center'
  }
})

// Styles pour la section principale - INCHANGÉ
export const ProjectsCSS = css({
  display: 'flex',
  fontSize: '{fontSizes.xs}',
  flexDirection: 'column'
})

// Style pour les projets non trouvés - INCHANGÉ
export const ProjectNotFoundCSS = css({
  bg: '#E4004B',
  color: 'bg.classicReverse',
  _hover: {
    color: 'bg.classicReverse'
  }
})

// NOUVEAUX STYLES pour la section "No projects found"

// Container pour les projets non trouvés
export const ContainerProjectNotFoundCSS = css({
  width: '100%',
  display: 'grid',
  gridColumn: '1 / -1'
})

// Container pour les miniatures
export const ThumbnailContainerCSS = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '20px',

  '@media(max-width:1024px)': {
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

// Items des miniatures - CORRIGÉ avec hauteur définie
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

  // AJOUT: Définir la hauteur du container des miniatures
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

// Images des miniatures - CORRIGÉ avec hauteur fixe
export const ThumbnailImageCSS = css({
  width: '100%',
  objectFit: 'cover',
  height: '200px',
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

// Nom des miniatures
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

// Message "No projects found"
export const NoProjectsMessageCSS = css({
  textAlign: 'center',
  fontSize: '22px',
  opacity: 0.8,

  '@media(max-width:768px)': {
    fontSize: '18px'
  }
})

// Texte de suggestion
export const SuggestionTextCSS = css({
  textAlign: 'center',
  fontSize: '18px',
  opacity: 0.6,
  fontStyle: 'italic',

  '@media(max-width:768px)': {
    fontSize: '16px'
  }
})
