import { useMemo, useRef } from 'react'

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
  CallToActionCSS,
  ScrollDownCSS,
  ContainerPandaCSS,
  CallToActionParentCSS
} from './home.style'
import '@/core/gsap.config'
import { SectionCSS } from '@/features/shared/components/global.style'
import { AnimatedButton } from '@/features/shared/components/animated-button'
import { ColorLetters } from '@/features/shared/components/color-letters'
import { Clock } from '@/features/shared/components/clock'
import { gsap, useGSAP } from '@/core/gsap.config'
import { useNavDetection } from '@/features/shared/nav/hooks/use-nav-detection'
import useStore from '@/core/store'
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'
import type { ColorModes, ModesContent, ThemeAtrributes } from '@/data/colors'
import { useSmoothScroll } from '../../shared/components/hooks/use-smooth-scroll'

export default function Home (): JSX.Element {
  useNavDetection('K', '#home')
  const containerRef = useRef<HTMLElement>(null)
  const pandaRef = useRef<HTMLDivElement>(null)
  const { theme } = useStore()
  const colorsTheme = useThemeAttributes() as ModesContent
  const { onSmoothScroll } = useSmoothScroll(gsap)

  useGSAP(() => {
    const projectsContainer = document.querySelector(
      '#projects'
    ) as HTMLElement | null
    const calltoAction = containerRef.current?.querySelector(
      '.button-container-2 button'
    ) as HTMLButtonElement | null

    const animatedBtn = containerRef.current?.querySelector(
      '.btn-animated'
    ) as HTMLElement | null

    const mainCentral = containerRef.current?.querySelector(
      '.main-central'
    ) as HTMLElement | null
    const panelBottom = containerRef.current?.querySelector(
      '.panel-bottom'
    ) as HTMLElement | null
    const scrollIndicator = containerRef.current?.querySelector(
      '.scroll-indicator'
    ) as HTMLElement | null
    const mask = document.querySelector('.mask') as HTMLElement | null

    if (!animatedBtn || !mainCentral || !panelBottom) {
      console.warn('Éléments manquants pour les animations GSAP')
      return
    }

    const handleCallToActionClick = e => {
      onSmoothScroll(e, '#projects')
    }
    const tl = gsap.timeline({})

    tl.set(animatedBtn, { opacity: 1 }, 0.5)
      .fromTo(animatedBtn, {}, { duration: 0.6, ease: 'power2.out' }, 0.3)
      .fromTo(
        mainCentral,
        { opacity: 0, y: -5 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        0.3
      )
      .fromTo(
        panelBottom,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        0.4
      )

    const handleMouseLeave = (e: MouseEvent): void => {
      if (calltoAction) {
        calltoAction.classList.add('reverse-ani')
      }
    }
    const handleMouseEnter = (e: MouseEvent): void => {
      if (calltoAction && mask) {
        mask.style.opacity = '1'
      }
    }

    const handleAnimationEnd = (animation: AnimationEvent): void => {
      if (!calltoAction) return
      if (
        animation.animationName === 'ani2Light' ||
        animation.animationName === 'ani2Dark' ||
        animation.animationName === 'ani2' 
      ) {
        calltoAction.classList.remove('reverse-ani')

        if (mask) {
          mask.style.opacity = '0'
        }
      }
    }

    if (calltoAction) {
      calltoAction.addEventListener('click', handleCallToActionClick)
      calltoAction.addEventListener('mouseenter', handleMouseEnter)
      calltoAction.addEventListener('mouseleave', handleMouseLeave)
      calltoAction.addEventListener('animationend', handleAnimationEnd)
    }

    if (scrollIndicator) {
      gsap.to(scrollIndicator, {
        opacity: 0.5,
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power2.inOut'
      })
    }

    return () => {
      if (calltoAction) {
        calltoAction.addEventListener('mouseenter', handleMouseEnter)
        calltoAction.removeEventListener('mouseleave', handleMouseLeave)
        calltoAction.removeEventListener('animationend', handleAnimationEnd)
      }

      tl.kill()
    }
  }, [theme])

  return (
    <section
      ref={containerRef}
      style={{ transform: 'translateY(6vh)' }}
      id='home'
      className={`${SectionCSS} ${HomeCSS}`}
    >
      <div className={`${CategoryCSS} category`}>01. HOME</div>

      <div className={`${BioAndIonCSS} main-central`}>
        <div>
          <h1 className={`${H1CSS} main-title`}>
            Hey, I am
            <br />
            Khayyer Mohamed.
          </h1>

          <div>
            <h2 className={`${H2CSS} subtitle`}>
              From pixel to&nbsp;
              <ColorLetters text='API' colors={colorsTheme.colors} />
            </h2>
          </div>

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
            <div className={CallToActionParentCSS}>
              <AnimatedButton
                PandaStyleCSS={`${CallToActionCSS} btn-animated button-container-2`}
                mask='View Projects'
                content='Explore Work'
              />
            </div>
          </div>
        </div>

        <div className={`${ContainerPandaCSS} panda-container`}>
          <div ref={pandaRef}>
            {theme === 'dark' ? (
              <BirdLightIcon width={400} height={380} />
            ) : (
              <BirdDarkIcon width={380} height={380} />
            )}
          </div>
        </div>
      </div>

      <div className='panel-bottom'>
        <div className={PanelCSS}>
          <div className={`${ScrollDownCSS} scroll-indicator`}>
            (scroll down)
          </div>
          <div className={SocialCSS}>
            <div>TOULOUSE, FRANCE</div>
            <a>LINKEDIN</a>
            <a>GITHUB</a>
            <Clock colors={colorsTheme.colors} />
          </div>
        </div>
      </div>
    </section>
  )
}
