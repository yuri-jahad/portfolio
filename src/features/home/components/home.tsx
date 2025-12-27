import { useRef } from 'react'

import BirdDarkIcon from '@/assets/icons/svg/bird-dark.svg?react'
import BirdLightIcon from '@/assets/icons/svg/bird-light.svg?react'

import {
  HomeCSS,
  H1CSS,
  H2CSS,
  CategoryCSS,
  PCSS,
  BioAndIonCSS,
  SocialCSS,
  PanelCSS,
  ContainerPCSS,
  ScrollDownCSS,
  LinkSocialCSS,
  ContainerPandaCSS,
  CallToActionParentCSS
} from './home.style'
import '@/core/gsap.config'
import { SectionCSS } from '@/features/shared/components/global.style'
import { ColorLetters } from '@/features/shared/components/color-letters'
import { Clock } from '@/features/shared/components/clock'
import { gsap, useGSAP } from '@/core/gsap.config'
import { useNavDetection } from '@/features/shared/nav/hooks/use-nav-detection'
import useStore from '@/core/store'
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'
import type { ModesContent } from '@/data/colors'
import { useSmoothScroll } from '../../shared/components/hooks/use-smooth-scroll'

export default function Home(): JSX.Element {
  useNavDetection('K', '#home')
  const containerRef = useRef<HTMLElement>(null)
  const { theme } = useStore()
  const colorsTheme = useThemeAttributes() as ModesContent
  const { onSmoothScroll } = useSmoothScroll(gsap)

  useGSAP(() => {
    const mainCentral = containerRef.current?.querySelector('.main-central')
    const panelBottom = containerRef.current?.querySelector('.panel-bottom')
    const scrollIndicator = containerRef.current?.querySelector('.scroll-indicator')

    const tl = gsap.timeline()

    // Animation ralentie à 1.4s avec un ease très doux pour un effet "premium"
    tl.fromTo(mainCentral, 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.4, 
        ease: 'power4.out', 
        delay: 0.3 
      }
    ).fromTo(panelBottom,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: 'power3.out' 
      },
      "-=1" // Transition tuilée pour plus de fluidité
    )

    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        opacity: 0.4,
        y: 8,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })
    }

    return () => { tl.kill() }
  }, [theme])

  return (
    <section 
      ref={containerRef} 
      id='home' 
      className={`${SectionCSS} ${HomeCSS}`}
      style={{ transform: 'translateY(6vh)' }}
    >
      <div className={`${CategoryCSS} category`}>01. HOME</div>

      <div className={`${BioAndIonCSS} main-central`}>
        <div>
          <h1 className={`${H1CSS} main-title`}>
            Hey, I am <br /> Khayyer Mohamed.
          </h1>
          <h2 className={`${H2CSS} subtitle`}>
            From pixel to <ColorLetters text='API' colors={colorsTheme.colors} />
          </h2>

          <div className={`${ContainerPCSS} description`}>
            <p className={PCSS}>
              I'm a developer specializing in the modern JavaScript ecosystem,
              creating elegant web applications. Every user interaction is
              designed to be smooth and enjoyable.
            </p>
            <p className={PCSS}>
              I love turning complex problems into simple, accessible solutions
              for everyone.
            </p>
            <button 
              className={CallToActionParentCSS}
              onClick={(e) => onSmoothScroll(e, '#projects')}
            >
              View Projects
            </button>
          </div>
        </div>

        <div className={ContainerPandaCSS}>
          {theme === 'dark' ? (
            <BirdLightIcon width={400} height={380} />
          ) : (
            <BirdDarkIcon width={380} height={380} />
          )}
        </div>
      </div>

      <div className='panel-bottom'>
        <div className={PanelCSS}>
          <div className={`${ScrollDownCSS} scroll-indicator`}>(scroll down)</div>
        <div className={SocialCSS}>
  <div>TOULOUSE, FRANCE</div>
  <a 
    href="https://www.linkedin.com/in/mohamed-khayyer/" 
    target="_blank" 
    rel="noopener noreferrer"
    className={LinkSocialCSS} // Ajout de la classe ici
  >
    LINKEDIN
  </a>
  <a 
    href="https://github.com/yuri-jahad" 
    target="_blank" 
    rel="noopener noreferrer"
    className={LinkSocialCSS} // Ajout de la classe ici
  >
    GITHUB
  </a>
  <Clock colors={colorsTheme.colors} />
</div>
        </div>
      </div>
    </section>
  )
}