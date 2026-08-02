import { useEffect, useRef } from 'react'

/**
 * GradientFollow - radial gradient spotlight following the mouse.
 * Uses direct style manipulation for hardware acceleration instead
 * of Framer Motion's x/y props which run on the main thread.
 * Disabled on touch devices.
 */
function GradientFollow() {
  const ref = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    // Skip on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.06)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.06)

      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x - 300}px, ${pos.current.y - 300}px, 0)`
      }

      raf.current = requestAnimationFrame(animate)
    }

    const handleMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    window.addEventListener('mousemove', handleMove)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 h-[600px] w-[600px] rounded-full opacity-40 will-change-transform"
      style={{
        background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }}
      aria-hidden="true"
    />
  )
}

export default GradientFollow
