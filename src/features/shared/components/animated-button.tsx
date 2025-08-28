import useStore from '@/core/store'
import {
  ButtonContainer2CSS,
  MaskCSS,
  UrbanSpriteCSS
} from '@/features/home/components/home.style'

export function AnimatedButton ({
  children,
  PandaStyleCSS,
  mask,
  content
}: {
  children: React.ReactNode
  PandaStyleCSS: any
  content: string
  mask: string
}) {
  const { theme } = useStore()
  return (
    <div
      className={`button-container-2 ${
        theme === 'dark' ? 'dark' : 'light'
      } ${ButtonContainer2CSS} ${PandaStyleCSS}`}
    >
      <span className={`${MaskCSS} mask`}>{mask}</span>
      <button className={UrbanSpriteCSS} type='button' name='hover'>
        {content}
      </button>
      {children}
    </div>
  )
}
