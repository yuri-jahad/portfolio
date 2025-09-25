import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const MagneticProject = ({
  imageUrl,
  height,
  gridSize = 9,
  radius = 60,
  className = '',
  children
}) => {
  const canvasRef = useRef()
  const containerRef = useRef()
  const [isLoaded, setIsLoaded] = useState(false)

  // Refs pour stocker les données
  const signsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const mouseOverRef = useRef(false)
  const mouseMovedRef = useRef(false)
  const imageRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const context = canvas.getContext('2d')

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height || rect.width 
    }

    updateCanvasSize()
  

    class GridElement {
      constructor () {
        this.x = 0
        this.y = 0
        this.left = 0
        this.top = 0
        this.scale = 1.0 // Commence à scale 1 pour couvrir parfaitement
      }
    }

    // Charger l'image
    const img = new Image()
    img.crossOrigin = 'anonymous'

    img.onload = () => {
      imageRef.current = img

      const signs = []

      for (let i = 0; i < gridSize; i++) {
        signs[i] = []
        for (let j = 0; j < gridSize; j++) {
          const sign = new GridElement()
          sign.left =
            (canvas.width / gridSize) * i + canvas.width / gridSize / 2
          sign.top =
            (canvas.height / gridSize) * j + canvas.height / gridSize / 2
          signs[i][j] = sign
        }
      }

      signsRef.current = signs
      setIsLoaded(true)

      // Démarrer l'animation
      startAnimation()
    }

    img.onerror = () => {
      console.error("Erreur lors du chargement de l'image:", imageUrl)
    }

    img.src = imageUrl

    const startAnimation = () => {
      const draw = () => {
        if (mouseOverRef.current && mouseMovedRef.current) {
          calculateElementPositions()
          mouseMovedRef.current = false
        }

        context.clearRect(0, 0, canvas.width, canvas.height)

        if (imageRef.current && signsRef.current.length > 0) {
          for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
              const sign = signsRef.current[i][j]

              // Calcul des dimensions et positions exactes
              const segmentWidth = canvas.width / gridSize
              const segmentHeight = canvas.height / gridSize
              const baseX = segmentWidth * i
              const baseY = segmentHeight * j

              // Position finale avec déplacement magnétique
              const finalX = baseX + sign.x
              const finalY = baseY + sign.y

              // Taille fixe pour éviter les gaps
              const scaledWidth = segmentWidth
              const scaledHeight = segmentHeight

              context.drawImage(
                imageRef.current,
                i * (imageRef.current.width / gridSize), 
                j * (imageRef.current.height / gridSize), 
                imageRef.current.width / gridSize, 
                imageRef.current.height / gridSize, 
                finalX, 
                finalY, 
                scaledWidth, 
                scaledHeight 
              )
            }
          }
        }

        animationIdRef.current = requestAnimationFrame(draw)
      }

      draw()
    }

    const calculateElementPositions = () => {
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const sign = signsRef.current[i][j]
          let currentRadius = radius
          const dx = mouseRef.current.x - sign.left
          const dy = mouseRef.current.y - sign.top
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const angle = Math.atan2(dy, dx)

          if (dist < radius) {
            currentRadius = dist
          }

          gsap.to(sign, {
            duration: 0.3,
            x: Math.cos(angle) * currentRadius * 0.3,
            y: Math.sin(angle) * currentRadius * 0.3
          })
        }
      }
    }

    // Event listeners
    const handleMouseMove = e => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      mouseMovedRef.current = true
    }

    const handleMouseEnter = () => {
      mouseOverRef.current = true
    }

    const handleMouseLeave = () => {
      mouseOverRef.current = false

      // Reset tous les éléments
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const sign = signsRef.current[i][j]
          gsap.to(sign, { duration: 0.3, x: 0, y: 0, scale: 0.5 })
        }
      }
    }

    // Resize handler
    const handleResize = () => {
      updateCanvasSize()

      // Recalculer la grille avec les nouvelles dimensions
      if (signsRef.current.length > 0) {
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            const sign = signsRef.current[i][j]
            sign.left =
              (canvas.width / gridSize) * i + canvas.width / gridSize / 2
            sign.top =
              (canvas.height / gridSize) * j + canvas.height / gridSize / 2
          }
        }
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)

      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }

      gsap.killTweensOf(signsRef.current)
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
          objectFit: 'cover' // Respecte ton objectFit original
        }}
      />

      {/* Overlay content */}
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

      {/* Loading state */}
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
