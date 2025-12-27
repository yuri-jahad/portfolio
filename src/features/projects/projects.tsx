import { technos, projects } from '@/data/techno'
import type { Technos } from '@/core/store'
import { filterButton, filterButtonSelected } from '~styled-system/recipes'
import {
  SectionCSS,
  SpacingCSS,
  ZoneCategoryCSS
} from '@/features/shared/components/global.style'
import {
  ContainerBtnsCSS,
  ContainerProjectCSS,
  ContainerProjectsCSS,
  ContainerProjectBtnsCSS,
  ProjectLegendCSS,
  ImgProjectCSS,
  ProjectsCSS,
  ProjectOriginCSS,
  ProjectNameCSS,
  ImgProjectOriginCSS,
  BtnProjectNotFoundCSS,
  ThumbnailContainerCSS
} from '@/features/projects/projects.style'
import { css } from '~styled-system/css'
import MagneticProject from '@/features/shared/components/magnetic-grid'
import useStore from '@/core/store'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/core/gsap.config'
import { useNavDetection } from '../shared/nav/hooks/use-nav-detection'
import { useRef } from 'react'
import { useThemeAttributes } from '../shared/components/hooks/use-theme'

const ThumbnailItemCSS = css({
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
  }
})

const ContainerProjectNotFoundCSS = css({
  width: '100%',
  display: 'grid',
  gridColumn: '1 / -1'
})

const ThumbnailImageCSS = css({
  width: '100%',
  objectFit: 'cover',
  height: '200px !important',
  borderRadius: '8px',
  marginBottom: '12px',
  position: 'center',
  transition: 'transform 0.3s ease',
  objectPosition: 'center'
})

const ThumbnailNameCSS = css({
  fontSize: '15px',
  textAlign: 'center',
  opacity: '0.6',
  maxWidth: '120px',
  lineHeight: '1.3',
  fontWeight: '500'
})

const NoProjectsMessageCSS = css({
  textAlign: 'center',
  fontSize: '22px',
  opacity: 0.8
})

const SuggestionTextCSS = css({
  textAlign: 'center',
  fontSize: '18px',
  opacity: 0.6,
  fontStyle: 'italic'
})

export default function Projects(): JSX.Element {
  useNavDetection('PROJECTS', '#projects')
  const projectsRef = useRef<HTMLElement | null>(null)
  const themeColors = useThemeAttributes()

  const {
    projectsFiltered,
    techsSelected,
    filterMode,
    toggleTech,
    clearFilters,
    filterByProjectName,
    setFilterMode
  } = useStore()

  const projectsFilteredIsEmpty = projectsFiltered.length <= 0
  const baseColor = themeColors.base || '#000000'

  useGSAP(
    () => {
      const techStackPaths = projectsRef.current?.querySelectorAll('svg path') as NodeListOf<SVGPathElement>
      const hoverContainer = projectsRef.current?.querySelector('svg')
      const elementsToFade = projectsRef.current?.querySelectorAll('.projects-buttons, .filter-mode, .projects-content, .category-section')
      let currentTween: gsap.core.Tween | null = null

      gsap.set(elementsToFade, { opacity: 0, y: 15 })

      techStackPaths.forEach((path) => {
        const pathLength = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
          fill: 'transparent',
          stroke: baseColor,
          strokeWidth: 1,
          opacity: 1
        })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 85%',
          once: true
        }
      })

      tl.to(techStackPaths, {
        strokeDashoffset: 0,
        duration: 0.6,
        stagger: 0.02,
        ease: 'power2.out'
      })
      .to(techStackPaths, {
        fill: baseColor,
        duration: 0.4,
        stagger: 0.01,
        ease: 'power1.inOut'
      }, '-=0.4')
      .to(elementsToFade, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out'
      }, '-=0.5')

      const handleMouseEnter = () => {
        if (currentTween) currentTween.kill()
        currentTween = gsap.to(techStackPaths, {
          fill: 'url(#chooseTechGradientHover)',
          stroke: 'url(#chooseTechGradientHover)',
          scale: 1.02,
          transformOrigin: 'center',
          duration: 0.3,
          stagger: 0.01,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        if (currentTween) currentTween.kill()
        currentTween = gsap.to(techStackPaths, {
          fill: baseColor,
          stroke: baseColor,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      }

      hoverContainer?.addEventListener('mouseenter', handleMouseEnter)
      hoverContainer?.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        hoverContainer?.removeEventListener('mouseenter', handleMouseEnter)
        hoverContainer?.removeEventListener('mouseleave', handleMouseLeave)
      }
    },
    { scope: projectsRef, dependencies: [themeColors.base] }
  )

  return (
    <section id='projects' ref={projectsRef} className={`${SpacingCSS.sectionSeparator} ${!projectsFilteredIsEmpty ? SectionCSS : ProjectsCSS}`}>
      <div className={ZoneCategoryCSS}>
        <div>
          <svg xmlns='http://www.w3.org/2000/svg' height='25' viewBox='0 0 503.045 33.5'>
            <defs>
              <linearGradient id='chooseTechGradientHover' x1='0%' y1='0%' x2='0%' y2='100%'>
                <stop offset='0%' stopColor={themeColors.colors?.[0] || '#fe5251'} />
                <stop offset='50%' stopColor={themeColors.colors?.[1] || '#FA723B'} />
                <stop offset='100%' stopColor={themeColors.colors?.[2] || '#F53C28'} />
              </linearGradient>
            </defs>
            <g>
              <path d='M29.3,27.6a16.438,16.438,0,0,1-12.649,5.9,16.132,16.132,0,0,1-8.326-2.25,16.79,16.79,0,0,1-6.075-6.1A16.353,16.353,0,0,1,0,16.75a16.351,16.351,0,0,1,2.25-8.4,16.8,16.8,0,0,1,6.075-6.1A16.132,16.132,0,0,1,16.651,0a16.283,16.283,0,0,1,6.625,1.375A16.657,16.657,0,0,1,28.75,5.25L28.1,6a15.23,15.23,0,0,0-11.45-5,9.189,9.189,0,0,0-5.6,1.851A12.209,12.209,0,0,0,7.226,7.776Q5.9,10.8,5.9,16.75t1.325,8.976a12.209,12.209,0,0,0,3.824,4.925,9.187,9.187,0,0,0,5.6,1.849,15.3,15.3,0,0,0,12-5.649Z' />
              <path d='M55.5.3h5.649V33.2H55.5V17.3H41.55V33.2H35.9V.3H41.55v16H55.5Z' />
              <path d='M101.448,16.75A16.266,16.266,0,0,1,99.2,25.1a16.99,16.99,0,0,1-6.074,6.125,16.451,16.451,0,0,1-16.65.024,16.777,16.777,0,0,1-6.075-6.1,16.35,16.35,0,0,1-2.25-8.4,16.351,16.351,0,0,1,2.25-8.4,16.787,16.787,0,0,1,6.075-6.1,16.447,16.447,0,0,1,16.65.025A16.99,16.99,0,0,1,99.2,8.4a16.265,16.265,0,0,1,2.25,8.35m-5.9,0q0-5.949-1.351-8.975a12.606,12.606,0,0,0-3.8-4.924,9.071,9.071,0,0,0-5.6-1.8,8.938,8.938,0,0,0-5.6,1.8,12.205,12.205,0,0,0-3.824,4.924Q74.048,10.8,74.049,16.75t1.325,8.976A12.205,12.205,0,0,0,79.2,30.65a8.911,8.911,0,0,0,5.6,1.85,9.044,9.044,0,0,0,5.6-1.85,12.606,12.606,0,0,0,3.8-4.924q1.352-3.026,1.351-8.976' />
              <path d='M140.5,16.75a16.266,16.266,0,0,1-2.25,8.351,16.99,16.99,0,0,1-6.074,6.125,16.451,16.451,0,0,1-16.65.024,16.777,16.777,0,0,1-6.075-6.1,16.35,16.35,0,0,1-2.25-8.4,16.351,16.351,0,0,1,2.25-8.4,16.787,16.787,0,0,1,6.075-6.1,16.447,16.447,0,0,1,16.65.025A16.99,16.99,0,0,1,138.248,8.4a16.265,16.265,0,0,1,2.25,8.35m-5.9,0q0-5.949-1.351-8.975a12.606,12.606,0,0,0-3.8-4.924,9.071,9.071,0,0,0-5.6-1.8,8.938,8.938,0,0,0-5.6,1.8,12.205,12.205,0,0,0-3.824,4.924Q113.1,10.8,113.1,16.75t1.325,8.976a12.205,12.205,0,0,0,3.824,4.924,8.911,8.911,0,0,0,5.6,1.85,9.044,9.044,0,0,0,5.6-1.85,12.606,12.606,0,0,0,3.8-4.924Q134.6,22.7,134.6,16.75' />
              <path d='M168.9,23.851a8.815,8.815,0,0,1-1.425,4.9,9.776,9.776,0,0,1-4.05,3.476,13.987,13.987,0,0,1-6.174,1.274,15.938,15.938,0,0,1-6.55-1.424,9.388,9.388,0,0,1-4.651-4.125l.6-.8a8.821,8.821,0,0,0,4.4,3.974,14.945,14.945,0,0,0,6.2,1.375,8.3,8.3,0,0,0,5.375-1.6,5.469,5.469,0,0,0,1.974-4.5,5.263,5.263,0,0,0-2.024-4.026,23.8,23.8,0,0,0-6.325-3.575,57.119,57.119,0,0,1-5.875-2.824,9.8,9.8,0,0,1-3.25-2.851A6.721,6.721,0,0,1,146,9.2a8.16,8.16,0,0,1,1.524-4.975,9.527,9.527,0,0,1,4.075-3.15A14.136,14.136,0,0,1,157.148,0a13.761,13.761,0,0,1,6.4,1.55,9.4,9.4,0,0,1,4.3,4.2l-.649.8a8.913,8.913,0,0,0-4.1-4.074A12.584,12.584,0,0,0,157.249,1a9.456,9.456,0,0,0-5.5,1.4,4.684,4.684,0,0,0-2,4.1,4.068,4.068,0,0,0,.924,2.675,8.281,8.281,0,0,0,2.5,1.976q1.575.851,4.725,2.3l1.5.7a27.587,27.587,0,0,1,7.176,4.349,6.992,6.992,0,0,1,2.324,5.351' />
              <path d='M196.748,1.3H181.6V16.25H193v1H181.6V32.2h15.15v1h-20.8V.3h20.8Z' />
              <path d='M242.547.3v1H232.7V33.2h-5.65V1.3H217.2V.3Z' />
              <path d='M269.4,1.3h-15.15V16.25h11.4v1h-11.4V32.2H269.4v1H248.6V.3h20.8Z' />
              <path d='M302.947,27.6A16.438,16.438,0,0,1,290.3,33.5a16.132,16.132,0,0,1-8.326-2.25,16.79,16.79,0,0,1-6.075-6.1,16.353,16.353,0,0,1-2.25-8.4,16.351,16.351,0,0,1,2.25-8.4,16.8,16.8,0,0,1,6.075-6.1,16.581,16.581,0,0,1,14.951-.875A16.667,16.667,0,0,1,302.4,5.25l-.65.75A15.226,15.226,0,0,0,290.3,1a9.189,9.189,0,0,0-5.6,1.851,12.209,12.209,0,0,0-3.824,4.925q-1.326,3.024-1.325,8.974t1.325,8.976a12.209,12.209,0,0,0,3.824,4.925,9.187,9.187,0,0,0,5.6,1.849,15.3,15.3,0,0,0,12-5.649Z' />
              <path d='M329.147.3H334.8V33.2h-5.649V17.3H315.2V33.2h-5.651V.3H315.2v16h13.95Z' />
              <path d='M379.8,23.851a8.816,8.816,0,0,1-1.426,4.9,9.77,9.77,0,0,1-4.05,3.476,13.987,13.987,0,0,1-6.174,1.274,15.945,15.945,0,0,1-6.55-1.424,9.4,9.4,0,0,1-4.651-4.125l.6-.8a8.818,8.818,0,0,0,4.4,3.974,14.952,14.952,0,0,0,6.2,1.375,8.3,8.3,0,0,0,5.375-1.6,5.466,5.466,0,0,0,1.974-4.5,5.263,5.263,0,0,0-2.024-4.026,23.8,23.8,0,0,0-6.325-3.575,57.121,57.121,0,0,1-5.875-2.824,9.8,9.8,0,0,1-3.25-2.851A6.721,6.721,0,0,1,356.9,9.2a8.16,8.16,0,0,1,1.525-4.975,9.524,9.524,0,0,1,4.074-3.15A14.141,14.141,0,0,1,368.046,0a13.76,13.76,0,0,1,6.4,1.55,9.391,9.391,0,0,1,4.3,4.2l-.649.8a8.913,8.913,0,0,0-4.1-4.074A12.584,12.584,0,0,0,368.146,1a9.458,9.458,0,0,0-5.5,1.4,4.684,4.684,0,0,0-2,4.1,4.074,4.074,0,0,0,.924,2.675,8.281,8.281,0,0,0,2.5,1.976q1.575.851,4.726,2.3l1.5.7a27.561,27.561,0,0,1,7.175,4.349,6.992,6.992,0,0,1,2.325,5.351' />
              <path d='M409.045.3v1h-9.85V33.2h-5.65V1.3h-9.85V.3Z' />
              <path d='M432.844,33.2l-4.2-9.55h-13.9l-4.4,9.55h-1.1L424.495,0l14.5,33.2ZM415.2,22.65h13.05L421.895,8.1Z' />
              <path d='M471.3,27.6a16.439,16.439,0,0,1-12.649,5.9,16.132,16.132,0,0,1-8.326-2.25,16.79,16.79,0,0,1-6.075-6.1,16.353,16.353,0,0,1-2.25-8.4,16.351,16.351,0,0,1,2.25-8.4,16.8,16.8,0,0,1,6.075-6.1,16.581,16.581,0,0,1,14.951-.875,16.667,16.667,0,0,1,5.474,3.875L470.1,6a15.226,15.226,0,0,0-11.449-5,9.189,9.189,0,0,0-5.6,1.851,12.211,12.211,0,0,0-3.825,4.925Q447.9,10.8,447.9,16.75t1.324,8.976a12.211,12.211,0,0,0,3.825,4.925,9.187,9.187,0,0,0,5.6,1.849,15.3,15.3,0,0,0,12-5.649Z' />
              <path d='M490.645,16.351l12.4,16.85H496l-8.75-11.951-8.4,11.951h-1V.3H483.5V24.851L500.745.3h1.2Z' />
            </g>
          </svg>
        </div>
        <span className='category-section'>03. PROJECTS</span>
      </div>

      <div className={`${ContainerBtnsCSS} projects-buttons`}>
        <button className={`${filterButton()} ${techsSelected.length === 0 ? filterButtonSelected() : ''}`} onClick={clearFilters}>
          All Work
        </button>
        {technos.map((techno, i) => (
          <div key={i} className={`${filterButton()} ${techsSelected.includes(techno) ? (projectsFilteredIsEmpty ? BtnProjectNotFoundCSS : filterButtonSelected()) : ''}`} onClick={() => toggleTech(techno)}>
            {techno}
          </div>
        ))}
      </div>

      <div className='filter-mode' style={{ display: 'flex', justifyContent: 'flex-end', opacity: 0.6, padding: '20px 30px' }}>
        <span>Filter mode:</span>
        <div style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
          <span onClick={() => setFilterMode('OR')} style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', backgroundColor: filterMode === 'OR' ? 'rgba(53, 172, 223, 0.2)' : 'transparent', color: filterMode === 'OR' ? '#13D5FF' : 'inherit' }}>OR</span>
          <span onClick={() => setFilterMode('AND')} style={{ cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', backgroundColor: filterMode === 'AND' ? 'rgba(53, 172, 223, 0.2)' : 'transparent', color: filterMode === 'AND' ? '#13D5FF' : 'inherit' }}>AND</span>
        </div>
      </div>

      <div className={`${ContainerProjectsCSS} projects-content`}>
        {!projectsFilteredIsEmpty ? (
          projectsFiltered.map((project, i) => (
            <div key={i} className={ContainerProjectCSS}>
              <MagneticProject found={true} imageUrl={project.url.icon} gridSize={8} className={ImgProjectCSS} />
              <div className={ProjectLegendCSS}>
                <div className={ProjectNameCSS}>{project.name}</div>
                <div className={ProjectOriginCSS}>
                  {project.url.server && <a target='_blank' href={project.url.server}>Live View</a>}
                  <a target='_blank' href={project.url.github}>Github</a>
                </div>
              </div>
              <div className={ContainerProjectBtnsCSS}>
                {project.technos.map((t, idx) => (
                  <button key={idx} className={`${filterButton()} ${techsSelected.includes(t as Technos) ? filterButtonSelected() : ''}`} onClick={() => toggleTech(t as Technos)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={ContainerProjectNotFoundCSS}>
            <div style={{ padding: '60px' }}>
              <div className={NoProjectsMessageCSS}>No projects found for the selected filters</div>
              <div className={SuggestionTextCSS}>Maybe you'd like to see one of these?</div>
            </div>
            <div className={ThumbnailContainerCSS}>
              {projects.map((p, i) => (
                <div key={i} className={ThumbnailItemCSS} onClick={() => filterByProjectName(p.name)}>
                  <MagneticProject found={false} imageUrl={p.url.icon} gridSize={8} className={ThumbnailImageCSS} />
                  <span className={ThumbnailNameCSS}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}