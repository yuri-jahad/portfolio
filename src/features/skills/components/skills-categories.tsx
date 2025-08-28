import type { StackType } from '@/data/techno.type'
import {
  TechnoTitleCSS,
  TechnoContentCSS,
  DesignIconCSS,
  TechnoSelectedCSS,
  TechnoNameCSS,
  LineHorizontalCSS
} from '@/features/skills/components/skills-categories.style'
import { useState, useCallback } from 'react'

interface SkillsCategoriesProps {
  technos: StackType
}

const CONTAINER_STYLES = {
  display: 'flex',
  gap: '30px',
  borderTop: 'right',
  border: 'solid',

  borderWidth: '1px 0px 1px 0px',
  width: 'calc(75vw - 100px)',
  padding: '30px 0px'
} as const

export default function SkillsCategories({ technos }: SkillsCategoriesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = useCallback((techName: string, index: number) => {
    setHoveredIndex(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null)
  }, [])

  return (
    <div className={TechnoContentCSS}>
      <div className={TechnoTitleCSS}>{technos.title}</div>
      
      <div className={LineHorizontalCSS}>
        {technos.technos.map((techno, index) => (
          <div
            key={`${techno.name}-${index}`}
            className={`${DesignIconCSS} ${hoveredIndex === index ? TechnoSelectedCSS : ''}`}
            onMouseEnter={() => handleMouseEnter(techno.name, index)}
            onMouseLeave={handleMouseLeave}
          >
            <techno.IconComponent width={40} height={40} />
          </div>
        ))}
        
        {hoveredIndex !== null && (
          <div className={TechnoNameCSS}>
            {technos.technos[hoveredIndex]?.name}
          </div>
        )}
      </div>
    </div>
  )
}