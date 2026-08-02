import { useEffect, useState, useRef } from 'react'

/**
 * CustomCursor - hardware-accelerated custom cursor.
 * Uses requestAnimationFrame + direct transform for GPU compositing.
 * Ring expands on interactive elements, shrinks on text.
 * Hidden on touch devices.
 */
function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const ringScale = useRef(1)
  const targetRingScale = useRef(1)
  const dotOpacity = useRef(1)
  const targetDotOpacity = useRef(1)
  const raf = useRef(null)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      // Dot: tight follow
      dotPos.current.x = lerp(dotPos.current.x, pos.current.x, 0.2)
      dotPos.current.y = lerp(dotPos.current.y, pos.current.y, 0.2)
      dotOpacity.current = lerp(dotOpacity.current, targetDotOpacity.current, 0.15)

      // Ring: looser follow
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.1)
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.1)
      ringScale.current = lerp(ringScale.current, targetRingScale.current, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x - 5}px, ${dotPos.current.y - 5}px, 0) scale(${dotOpacity.current})`
        dotRef.current.style.opacity = dotOpacity.current
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0) scale(${ringScale.current})`
      }

      raf.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const interactive = target.closest('a, button, [role="button"], input, textarea')

      if (interactive) {
        targetRingScale.current = 1.6
        targetDotOpacity.current = 0
      } else {
        targetRingScale.current = 1
        targetDotOpacity.current = 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border-[1.5px] border-accent/40 will-change-transform"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(167,139,250,0.6)] will-change-transform"
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor
