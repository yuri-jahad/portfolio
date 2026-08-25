import { type ReactNode, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

type MagneticProjectProps = {
  imageUrl: string
  gridSize?: number
  radius?: number
  className?: string
  children?: ReactNode
  found?: boolean
}

type CoverSourceRect = {
  x: number
  y: number
  width: number
  height: number
}

class GridElement {
  x = 0
  y = 0
  left = 0
  top = 0
}

const MagneticProject = ({
  imageUrl,
  gridSize = 9,
  radius = 60,
  className = '',
  children
}: MagneticProjectProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const signsRef = useRef<GridElement[][]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const mouseOverRef = useRef(false)
  const mouseMovedRef = useRef(false)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const context = canvas.getContext('2d')
    if (!context) return

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height || rect.width
    }

    const placeGrid = () => {
      const signs: GridElement[][] = []

      for (let i = 0; i < gridSize; i++) {
        signs[i] = []
        for (let j = 0; j < gridSize; j++) {
          const sign = new GridElement()
          sign.left = (canvas.width / gridSize) * i + canvas.width / gridSize / 2
          sign.top = (canvas.height / gridSize) * j + canvas.height / gridSize / 2
          signs[i][j] = sign
        }
      }

      signsRef.current = signs
    }

    const getCoverSourceRect = (image: HTMLImageElement): CoverSourceRect => {
      const canvasRatio = canvas.width / canvas.height
      const imageRatio = image.width / image.height

      if (imageRatio > canvasRatio) {
        const sourceWidth = image.height * canvasRatio

        return {
          x: (image.width - sourceWidth) / 2,
          y: 0,
          width: sourceWidth,
          height: image.height
        }
      }

      const sourceHeight = image.width / canvasRatio

      return {
        x: 0,
        y: (image.height - sourceHeight) / 2,
        width: image.width,
        height: sourceHeight
      }
    }

    const calculateElementPositions = () => {
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const sign = signsRef.current[i]?.[j]
          if (!sign) continue

          const dx = mouseRef.current.x - sign.left
          const dy = mouseRef.current.y - sign.top
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const angle = Math.atan2(dy, dx)
          const influence = Math.pow(Math.max(0, 1 - dist / radius), 1.35)
          const displacement = 16 * influence

          gsap.to(sign, {
            duration: 0.22,
            x: Math.cos(angle) * displacement,
            y: Math.sin(angle) * displacement,
            overwrite: 'auto'
          })
        }
      }
    }

    const draw = () => {
      if (mouseOverRef.current && mouseMovedRef.current) {
        calculateElementPositions()
        mouseMovedRef.current = false
      }

      context.clearRect(0, 0, canvas.width, canvas.height)

      const image = imageRef.current
      if (image && signsRef.current.length > 0) {
        const sourceRect = getCoverSourceRect(image)
        const segmentWidth = canvas.width / gridSize
        const segmentHeight = canvas.height / gridSize
        const sourceSegmentWidth = sourceRect.width / gridSize
        const sourceSegmentHeight = sourceRect.height / gridSize
        const overlap = Math.max(1, Math.min(segmentWidth, segmentHeight) * 0.035)

        context.drawImage(
          image,
          sourceRect.x,
          sourceRect.y,
          sourceRect.width,
          sourceRect.height,
          0,
          0,
          canvas.width,
          canvas.height
        )

        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const sign = signsRef.current[i]?.[j]
            if (!sign) continue

            const baseX = segmentWidth * i
            const baseY = segmentHeight * j

            context.drawImage(
              image,
              sourceRect.x + i * sourceSegmentWidth,
              sourceRect.y + j * sourceSegmentHeight,
              sourceSegmentWidth,
              sourceSegmentHeight,
              baseX + sign.x - overlap / 2,
              baseY + sign.y - overlap / 2,
              segmentWidth + overlap,
              segmentHeight + overlap
            )
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(draw)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = event.clientX - rect.left
      mouseRef.current.y = event.clientY - rect.top
      mouseMovedRef.current = true
    }

    const handleMouseEnter = () => {
      mouseOverRef.current = true
    }

    const handleMouseLeave = () => {
      mouseOverRef.current = false

      signsRef.current.forEach(row => {
        row.forEach(sign => {
          gsap.to(sign, { duration: 0.24, x: 0, y: 0, overwrite: 'auto' })
        })
      })
    }

    const handleResize = () => {
      updateCanvasSize()
      placeGrid()
    }

    updateCanvasSize()

    const image = new Image()
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      imageRef.current = image
      placeGrid()
      setIsLoaded(true)
      draw()
    }
    image.onerror = () => {
      console.error("Erreur lors du chargement de l'image:", imageUrl)
    }
    image.src = imageUrl

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }

      gsap.killTweensOf(signsRef.current.flat())
    }
  }, [imageUrl, gridSize, radius])

  return (
    <div
      ref={containerRef}
      className={`magnetic-project-container ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />

      {children && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          {children}
        </div>
      )}

      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Chargement...
        </div>
      )}
    </div>
  )
}

export default MagneticProject
