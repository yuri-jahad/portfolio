import {
  ContainerCSS,
  SceneCSS
} from '@/features/shared/components/global.style'
import Nav from './features/shared/nav/components/nav'
import Home from './features/home/components/home'
import Skills from './features/skills/components/skills'
import Projects from './features/projects/projects'
import Contact from './features/contact/components/contact'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

function App () {
  return (
    <>
      <div className={ContainerCSS}>
        <div className={SceneCSS}>
          <Nav />
          <main>
            <Home />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
