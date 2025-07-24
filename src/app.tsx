import Nav from './features/shared/nav/components/nav'
import { css } from '~styled-system/css'

function App () {
  return (
    <div className='app'>
      <div
        className={css({
          minHeight: '100vh',
          bg: 'bg.primary', 
          color: 'text.primary'
        })}
      >
        <div
          className={css({
            maxWidth: '80vw',
            margin: '0 auto',
            bg:'black', 
            minHeight:'100vh'
          })}
        >
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default App
