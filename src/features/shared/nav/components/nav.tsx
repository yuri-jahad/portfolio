import {
  HeaderCSS,
  UlCSS,
  NavLinkCSS,
  NavCss,
  BurgerButtonCSS,
  BurgerLineCSS,
  MobileNavCSS,
  OverlayCSS,
  ThemeToggleWrapperCSS
} from '@/features/shared/nav/components/nav.style'
import ToggleTheme from '@/features/shared/theme/components/theme-toggle'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/core/gsap.config'
import DetectLinkNameByHref, {
  type LinksProps
} from '@/features/shared/components/detect-link-name'
import useStore from '@/core/store'
import { useSmoothScroll } from '../../components/hooks/use-smooth-scroll'

const menuItems = [
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
  // { href: '#resume', label: 'RÉSUMÉ' }
]

export default function Nav () {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore()
  const { onSmoothScroll, closeMobileMenu } = useSmoothScroll(gsap)
  useGSAP(() => {
    gsap
      .timeline({})
      .fromTo(
        '.header',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        0.2
      )
  })

  const handleLinkClick = (linkName: LinksProps): void => {
    DetectLinkNameByHref(linkName)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className={`${OverlayCSS} open`} onClick={closeMobileMenu} />
      )}

      <header className={`${HeaderCSS} header`}>
        <nav className={NavCss}>
          {/* Logo */}
          <a
            className={`${NavLinkCSS}`}
            href='#home'
            onClick={e => onSmoothScroll(e, '#home')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10.08'
              height='13.16'
              viewBox='0 0 10.08 13.16'
            >
              <path
                id='K'
                d='M9.159,0,2.26,9.82V0H0V13.16H.4L3.76,8.38l3.5,4.78H10.08L5.12,6.42,9.64,0Z'
                transform='translate(0 0)'
              />
            </svg>
          </a>

          {/* Menu Desktop */}
          <ul className={UlCSS}>
            {menuItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={NavLinkCSS}
                  onClick={e => onSmoothScroll(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <div className={ThemeToggleWrapperCSS}>
            <ToggleTheme />
          </div>

          {/* Bouton Burger */}
          <button
            className={BurgerButtonCSS}
            onClick={toggleMobileMenu}
            aria-label='Menu de navigation'
          >
            <div
              className={BurgerLineCSS}
              style={{
                transform: isMobileMenuOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : 'none'
              }}
            />
            <div
              className={BurgerLineCSS}
              style={{
                opacity: isMobileMenuOpen ? '0' : '1'
              }}
            />
            <div
              className={BurgerLineCSS}
              style={{
                transform: isMobileMenuOpen
                  ? 'rotate(-45deg) translate(7px, -6px)'
                  : 'none'
              }}
            />
          </button>
        </nav>
      </header>

      {/* Navigation Mobile */}
      <nav
        className={`${MobileNavCSS} ${isMobileMenuOpen ? 'mobile-open' : ''}`}
      >
        <ul>
          {menuItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={NavLinkCSS}
                onClick={e => onSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
