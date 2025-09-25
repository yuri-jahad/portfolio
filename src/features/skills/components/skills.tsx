import { useRef } from 'react'
import { gsap, useGSAP } from '@/core/gsap.config'
import { StackContainerCSS } from './skills.style'
import { stack } from '@/data/techno'
import SkillsCategories from './skills-categories'
import { TechnosContentCSS } from './skills-categories.style'

import {
  SectionCSS,
  ZoneCategoryCSS,
  SpacingCSS,
  FluxCSS
} from '@/features/shared/components/global.style'
import { useNavDetection } from '@/features/shared/nav/hooks/use-nav-detection'
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'

export default function Skills () {
  useNavDetection('SKILLS', '#skills')
  const containerRef = useRef()
  const fluxRef = useRef()
  const themeColors = useThemeAttributes()

  useGSAP(
    context => {
      const TOTAL_DURATION = 0.6
      const myPaths = containerRef.current?.querySelectorAll('#my path')
      const stackPaths = containerRef.current?.querySelectorAll('#stack path')
      const hoverContainer = containerRef.current?.querySelector('svg')
      let currentTween = null

      const allPaths = [...(myPaths || []), ...(stackPaths || [])]

      // Assurer que la couleur de base est bien définie
      const baseColor = themeColors.base || '#000000'

      allPaths.forEach(path => {
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none'
          }
        })
        .to(
          myPaths,
          {
            strokeDashoffset: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out'
          },
          0
        )
        .to(
          myPaths,
          {
            fill: baseColor,
            stroke: baseColor,
            duration: 0.4,
            stagger: 0.03,
            ease: 'power2.out'
          },
          0.5
        )
        .to(
          stackPaths,
          {
            strokeDashoffset: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: 'power2.out'
          },
          0.2
        )
        .to(
          stackPaths,
          {
            fill: baseColor,
            stroke: baseColor,
            duration: 0.3,
            stagger: 0.02,
            ease: 'power2.out'
          },
          0.7
        )
        .fromTo(
          '.skills-category',
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: TOTAL_DURATION - 0.4,
            ease: 'power2.out'
          },
          0.3
        )
        .fromTo(
          '.techno-category',
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: { each: 0.1, from: 'start' },
            ease: 'power2.out'
          },
          0.7
        )

      context.add(() => {
        hoverContainer?.addEventListener('mouseenter', () => {
          if (currentTween) currentTween.kill()

          currentTween = gsap.to(allPaths, {
            fill: 'url(#myStackGradient)',
            stroke: 'url(#myStackGradient)',
            scale: 1.02,
            transformOrigin: 'center',
            duration: 0.5,
            stagger: 0.02,
            ease: 'power2.out'
          })
        })

        hoverContainer?.addEventListener('mouseleave', () => {
          if (currentTween) currentTween.kill()

          currentTween = gsap.to(allPaths, {
            fill: baseColor,
            stroke: baseColor,
            scale: 1,
            duration: 0.4,
            stagger: 0.015,
            ease: 'power2.out'
          })
        })
      })
    },
    { scope: containerRef, dependencies: [themeColors.base] } // Ajout de la dépendance
  )

  return (
    <section
      ref={containerRef}
      className={`${SectionCSS} ${SpacingCSS.sectionSeparator}`}
      id='skills'
      style={{ transition: 'background-color 0.3s ease' }}
    >
      <div className={ZoneCategoryCSS}>
        <div
          className='skills-category'
          style={{ textAlign: 'end', flex: '1' }}
        >
          02. SKILLS
        </div>
      </div>
      <div className={StackContainerCSS}>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='25'
            viewBox='0 0 473.324 69.723'
          >
            <defs>
              <linearGradient
                id='myStackGradient'
                x1='0%'
                y1='0%'
                x2='0%'
                y2='100%'
              >
                <stop
                  offset='0%'
                  stopColor={themeColors.colors?.[0] || '#fe5251'}
                />
                <stop
                  offset='50%'
                  stopColor={themeColors.colors?.[1] || '#FA723B'}
                />
                <stop
                  offset='100%'
                  stopColor={themeColors.colors?.[2] || '#F53C28'}
                />
              </linearGradient>
            </defs>

            <g id='my-stack' transform='translate(0.5 1.223)'>
              <g id='my' transform='translate(0 0.609)'>
                <path
                  id='Tracé_6864'
                  d='M50.848,4.8,31.97,48.95,12.484,4.8H0V71.583H2.03V9.368L26.9,65.9,50.848,9.976V71.583H62.317V4.8Z'
                  transform='translate(0 -4.8)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
                <path
                  id='Tracé_6865'
                  d='M642.056,4.8h2.334L619.727,49.254V71.582H608.259V49.254L584,4.8h12.991l22.531,40.6Z'
                  transform='translate(-509.912 -4.8)'
                  stroke={themeColors.base || '#000000'}
                  fill={themeColors.base || '#000000'}
                  strokeWidth='1'
                />
              </g>
              <g id='stack' transform='translate(175.175)'>
                <path
                  id='Tracé_6866'
                  d='M1427.273,48.412a17.905,17.905,0,0,1-2.893,9.946,19.837,19.837,0,0,1-8.221,7.054A28.4,28.4,0,0,1,1403.625,68a32.369,32.369,0,0,1-13.3-2.892,19.05,19.05,0,0,1-9.439-8.373l1.218-1.624a17.909,17.909,0,0,0,8.931,8.069,30.328,30.328,0,0,0,12.585,2.791q6.9,0,10.911-3.248a11.092,11.092,0,0,0,4.009-9.134q0-4.567-4.11-8.17t-12.839-7.257a115.651,115.651,0,0,1-11.925-5.734,19.912,19.912,0,0,1-6.6-5.785,13.646,13.646,0,0,1-2.283-7.967,16.578,16.578,0,0,1,3.1-10.1,19.353,19.353,0,0,1,8.271-6.394A28.715,28.715,0,0,1,1403.422,0a27.916,27.916,0,0,1,12.991,3.146,19.055,19.055,0,0,1,8.728,8.525l-1.319,1.624a18.094,18.094,0,0,0-8.323-8.272,25.558,25.558,0,0,0-11.875-2.994q-7.105,0-11.164,2.842a9.513,9.513,0,0,0-4.06,8.322,8.273,8.273,0,0,0,1.877,5.43,16.751,16.751,0,0,0,5.075,4.009q3.2,1.727,9.591,4.669l3.045,1.421q9.843,4.467,14.564,8.83a14.189,14.189,0,0,1,4.719,10.86'
                  transform='translate(-1380.789)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
                <path
                  id='Tracé_6867'
                  d='M1861.043,4.8V6.83h-19.994V71.582H1829.58V6.83h-19.994V4.8Z'
                  transform='translate(-1755.186 -4.191)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
                <path
                  id='Tracé_6868'
                  d='M2266.291,67.391l-8.525-19.385H2229.55l-8.932,19.385h-2.233L2249.341,0l29.433,67.391Zm-35.827-21.415h26.49l-12.89-29.534Z'
                  transform='translate(-2112.124)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
                <path
                  id='Tracé_6869'
                  d='M2801.859,56.024A33.385,33.385,0,0,1,2776.181,68a32.738,32.738,0,0,1-16.9-4.567,34.07,34.07,0,0,1-12.332-12.382A33.193,33.193,0,0,1,2742.384,34a33.2,33.2,0,0,1,4.567-17.051,34.082,34.082,0,0,1,12.332-12.382,33.653,33.653,0,0,1,30.346-1.776,33.823,33.823,0,0,1,11.114,7.866l-1.32,1.522A30.909,30.909,0,0,0,2776.181,2.03a18.648,18.648,0,0,0-11.367,3.755,24.79,24.79,0,0,0-7.764,10q-2.69,6.142-2.689,18.218t2.689,18.218a24.771,24.771,0,0,0,7.764,10,18.639,18.639,0,0,0,11.367,3.755q14.41,0,24.358-11.469Z'
                  transform='translate(-2569.644)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
                <path
                  id='Tracé_6870'
                  d='M3341.954,37.38l25.17,34.2h-14.311l-17.761-24.257L3318,71.583h-2.03V4.8h11.469V54.633L3362.456,4.8h2.436Z'
                  transform='translate(-3070.464 -4.192)'
                  stroke={themeColors.base || '#000000'}
                  strokeWidth='1'
                  fill='transparent'
                />
              </g>
            </g>
          </svg>
        </div>
        <div className={TechnosContentCSS}>
          {stack.map((t, index) => (
            <div key={index} className='techno-category'>
              <SkillsCategories technos={t} />
            </div>
          ))}
        </div>
      </div>

      <div ref={fluxRef} className={FluxCSS} />
    </section>
  )
}
