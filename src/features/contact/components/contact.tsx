import {
  FluxCSS,
  SectionCSS,
  SpacingCSS
} from '@/features/shared/components/global.style'
import {
  ContactContentCSS,
  SloganCSS,
  FooterCSS,
  MailCSS,
  GridCSS,
  DomainCSS
} from './contact.style'
import { gsap, useGSAP } from '@/core/gsap.config'
import { useRef } from 'react'
import { ColorLetters } from '@/features/shared/components/color-letters'
import { useNavDetection } from '@/features/shared/nav/hooks/use-nav-detection'
import { useThemeAttributes } from '@/features/shared/components/hooks/use-theme'

export default function Contact () {
  const themeColors = useThemeAttributes()
  useNavDetection("CONTACT", '#contact')
  const fluxRef = useRef()
  useGSAP(() => {
    gsap.timeline({})
  })

  return (
    <section
      className={`${SectionCSS} ${SpacingCSS.sectionSeparator} ${GridCSS}`}
      id='contact'
    >
      <span style={{ textAlign: 'end' }}>04. CONTACT</span>
      <div className={ContactContentCSS}>
        <div className={SloganCSS}>LET'S BRING YOUR VISION TO LIFE</div>

        <a
          style={{background:themeColors.contact.btnContact}}
          className={MailCSS}
          href='https://mail.google.com/mail/?view=cm&to=khayyerpro@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          khayyerpro@gmail.
          <span className={DomainCSS}>com</span>
        </a>
      </div>
      <footer className={FooterCSS}>
        <div>© 2025 khayyer Mohamed. Tous droits réservés.</div>
        <div>business UXUI design, Web development</div>
      </footer>
      <div ref={fluxRef} className={FluxCSS}></div>
    </section>
  )
}
