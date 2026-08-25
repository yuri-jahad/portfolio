import { memo, useEffect, useRef } from 'react'
import BirdDarkIcon from '@/assets/icons/svg/bird-dark.svg?react'
import BirdLightIcon from '@/assets/icons/svg/bird-light.svg?react'
import { gsap, useGSAP } from '@/core/gsap.config'
import useStore from '@/core/store'

const W = 480
const H = 480

const STARS = [
  { rx: 0.09, ry: 0.13, sz: 4.5, ph: 0.0 },
  { rx: 0.91, ry: 0.18, sz: 3.0, ph: 1.3 },
  { rx: 0.04, ry: 0.50, sz: 5.5, ph: 2.5 },
  { rx: 0.95, ry: 0.42, sz: 3.5, ph: 0.8 },
  { rx: 0.12, ry: 0.74, sz: 3.0, ph: 2.0 },
  { rx: 0.88, ry: 0.08, sz: 5.0, ph: 3.2 },
  { rx: 0.81, ry: 0.83, sz: 2.5, ph: 2.8 },
  { rx: 0.25, ry: 0.89, sz: 3.5, ph: 1.5 },
  { rx: 0.77, ry: 0.29, sz: 2.0, ph: 0.4 },
  { rx: 0.50, ry: 0.06, sz: 3.0, ph: 1.9 },
  { rx: 0.03, ry: 0.28, sz: 2.5, ph: 0.9 }
]

export const AnimatedBird = memo(function AnimatedBird () {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const birdWrapRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useStore()
  const isDark = theme !== 'light'

  useGSAP(() => {
    const wrap = birdWrapRef.current
    if (!wrap) return

    gsap.to(wrap, {
      y: -18,
      duration: 3.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
    gsap.to(wrap, {
      rotation: 2.2,
      duration: 5.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }, { scope: containerRef, dependencies: [theme] })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = `${W}px`
    canvas.style.height = `${H}px`
    ctx.scale(dpr, dpr)

    const ac = isDark ? '100,210,255' : '254,82,81'
    const starRgb = isDark ? '210,242,255' : '250,114,59'

    let t = 0
    let raf = 0

    const tick = () => {
      raf = requestAnimationFrame(tick)
      t += 0.016
      ctx.clearRect(0, 0, W, H)

      const cx = W / 2
      const floatApprox = Math.sin(t * 0.85) * 18
      const cy = H / 2 - 8 + floatApprox
      const aBreath = 0.09 + 0.05 * Math.sin(t * 0.72)

      const drawAura = (radius: number, peak: number) => {
        const gradient = ctx.createRadialGradient(cx, cy - 14, 0, cx, cy - 14, radius)
        gradient.addColorStop(0, `rgba(${ac},${peak})`)
        gradient.addColorStop(0.5, `rgba(${ac},${peak * 0.35})`)
        gradient.addColorStop(1, `rgba(${ac},0)`)
        ctx.save()
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.ellipse(cx, cy - 14, radius, radius * 0.87, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      drawAura(215, aBreath)
      drawAura(130, aBreath * 1.9)

      STARS.forEach(star => {
        const pulse = (Math.sin(t * 1.65 + star.ph) + 1) / 2
        const alpha = 0.25 + 0.75 * pulse
        const scale = 0.5 + 0.5 * pulse

        ctx.save()
        ctx.globalAlpha = isDark ? alpha * 0.9 : alpha * 0.55
        ctx.globalCompositeOperation = isDark ? 'screen' : 'source-over'
        ctx.translate(star.rx * W, star.ry * H)
        ctx.scale(scale, scale)
        ctx.fillStyle = `rgb(${starRgb})`
        ctx.beginPath()

        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2 - Math.PI / 2
          const ray = i % 2 === 0 ? star.sz : star.sz * 0.26
          const x = Math.cos(angle) * ray
          const y = Math.sin(angle) * ray
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.closePath()
        ctx.fill()
        ctx.globalAlpha = alpha * 0.45
        ctx.beginPath()
        ctx.arc(0, 0, star.sz * 0.55, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
    }

    tick()

    return () => cancelAnimationFrame(raf)
  }, [isDark])

  const glowFilter = isDark
    ? 'drop-shadow(0 6px 26px rgba(80,190,255,0.40)) drop-shadow(0 0 50px rgba(60,160,255,0.16))'
    : 'drop-shadow(0 6px 22px rgba(40,80,180,0.30)) drop-shadow(0 0 38px rgba(30,60,160,0.14))'

  return (
    <div ref={containerRef} style={{ position: 'relative', width: W, height: H, flexShrink: 0 }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 0 }}
      />

      <div
        ref={birdWrapRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          filter: glowFilter,
          transformOrigin: 'center 65%',
          willChange: 'transform',
          zIndex: 1
        }}
      >
        {isDark
          ? <BirdLightIcon width={380} height={358} />
          : <BirdDarkIcon width={380} height={358} />}
      </div>
    </div>
  )
})
