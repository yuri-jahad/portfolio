import { HeaderCSS, UlCSS } from '@/features/shared/nav/components/nav.style'
import ToggleTheme from '@/features/shared/theme/components/theme-toggle'

export default function Nav () {
  return (
    <header className={HeaderCSS}>
      <div>KHAYYER.M</div>
      <ul className={UlCSS}>
        <li>PROJECTS</li>
        <li>SKILLS</li>
        <li>RÉSUMÉ</li>
        <li>CONTACT</li>
      </ul>
      <ToggleTheme />
    </header>
  )
}
