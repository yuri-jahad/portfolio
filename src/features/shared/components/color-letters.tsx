import { css } from '~styled-system/css'

interface ColorLettersProps {
  text: string
  colors: string[]
  className?: string
}

const containerStyles = css({
  display: 'inline-flex'
})

const letterStyles = css({
  opacity: 1,
  transform: 'translateY(0)'
})

export function ColorLetters ({
  text,
  colors,
  className = ''
}: ColorLettersProps) {
  const letters = text.split('')

  console.log({colors, toto:'toto'})
  return (
    <span className={`${containerStyles} ${className}`}>
      {colors && letters.map((letter, index) => (
        <span
          key={index}
          className={letterStyles}
          style={{
            color: colors[index % colors.length]
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}
