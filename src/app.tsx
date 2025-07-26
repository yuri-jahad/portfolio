import { ContainerCSS, SceneCSS } from '@/features/shared/global/global.style'
import Nav from './features/shared/nav/components/nav'
import Home from './features/home/home'
import Skills from './features/skills/components/skills'
import Projects from './features/projects/projects'
import Contact from './features/contact/components/contact'

function App () {
  return (
    <div className='app'>
      <div className={ContainerCSS}>
        <div className={SceneCSS}>
          <Nav />
          <main>
            <Home />
            <Skills/>
            <Projects/>
            <Contact/>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
