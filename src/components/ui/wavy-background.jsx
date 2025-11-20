import React, { useEffect, useRef } from 'react'
import SimplexNoise from 'simplex-noise'

// Animated neon-blue wavy canvas background
// Uses simplex-noise to generate organic waves
export default function WavyBackground({
  className,
  colorA = '#38bdf8', // sky-400
  colorB = '#22d3ee', // cyan-400
  opacity = 0.15,
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const simplex = new SimplexNoise()

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const handleResize = () => {
      onResize()
    }

    const gradient = () => {
      const g = ctx.createLinearGradient(0, 0, w, h)
      g.addColorStop(0, colorA)
      g.addColorStop(1, colorB)
      return g
    }

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const layers = 5
      for (let i = 0; i < layers; i++) {
        const progress = i / (layers - 1)
        ctx.beginPath()

        for (let x = 0; x <= w; x += 8) {
          const nx = x / 300
          const ny = progress * 1.5 + 0.2
          const noise = simplex.noise3D(nx, ny, t)
          const amplitude = 28 + i * 6
          const y = h * (0.55 + progress * 0.25) + noise * amplitude
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.lineTo(w, h)
        ctx.lineTo(0, h)
        ctx.closePath()

        ctx.fillStyle = gradient()
        ctx.globalAlpha = opacity * (0.9 - progress * 0.6)
        ctx.fill()

        ctx.strokeStyle = colorB
        ctx.globalAlpha = 0.25 * (1 - progress)
        ctx.shadowColor = colorB
        ctx.shadowBlur = 20
        ctx.lineWidth = 1.2
        ctx.stroke()
        ctx.shadowBlur = 0
      }

      t += 0.005
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [colorA, colorB, opacity])

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(900px_500px_at_10%_10%,rgba(34,211,238,0.2),transparent)]" />
    </div>
  )
}
