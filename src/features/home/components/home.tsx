import { type ReactElement, useRef } from 'react'

import { AnimatedBird } from './animated-bird'

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
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'
import type { ModesContent } from '@/data/colors'
import { useSmoothScroll } from '../../shared/components/hooks/use-smooth-scroll'

export default function Home(): ReactElement {
  useNavDetection('K', '#home')
  const containerRef = useRef<HTMLElement>(null)
  const colorsTheme = useThemeAttributes() as ModesContent
  const { onSmoothScroll } = useSmoothScroll(gsap)

  useGSAP(() => {
    const mainCentral = containerRef.current?.querySelector('.main-central')
    const panelBottom = containerRef.current?.querySelector('.panel-bottom')
    const scrollIndicator = containerRef.current?.querySelector('.scroll-indicator')

    if (!mainCentral || !panelBottom) return

    gsap.set([mainCentral, panelBottom], {
      opacity: 0,
      y: 18,
      force3D: true
    })

    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

    tl.to(mainCentral, {
      opacity: 1,
      y: 0,
      duration: 0.95,
      clearProps: 'transform'
    }).to(panelBottom, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      clearProps: 'transform'
    }, '-=0.55')

    if (scrollIndicator) {
      gsap.fromTo(scrollIndicator,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'sine.out', delay: 0.65 }
      )
    }

    return () => { tl.kill() }
  }, [])

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
          <div style={{ height: '380px', overflow: 'visible', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatedBird />
          </div>
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
