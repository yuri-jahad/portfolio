import ToggleTheme from '@/features/shared/theme/components/theme-toggle'
import { useTheme } from '@/features/shared/theme/hooks/use-theme'

function App () {
  const { theme, isDark } = useTheme()
  console.log({ isDark })
  return (
    <div className='app'>
      <header>
        <h1>Mon App</h1>
        <ToggleTheme />
      </header>

      <main>
        <p>Thème actuel : {theme}</p>
        <p>Mode sombre : {isDark ? 'Oui' : 'Non'}</p>
      </main>
    </div>
  )
}

export default App
