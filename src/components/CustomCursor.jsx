import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

/**
 * CustomCursor - dot + ring cursor that reacts to hover state.
 * Completely hidden on touch/mobile devices.
 */
function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Inner dot
  const dotConfig = { damping: 25, stiffness: 250, mass: 0.4 }
  const dotX = useSpring(cursorX, dotConfig)
  const dotY = useSpring(cursorY, dotConfig)

  // Outer ring
  const ringConfig = { damping: 18, stiffness: 140, mass: 0.7 }
  const ringX = useSpring(cursorX, ringConfig)
  const ringY = useSpring(cursorY, ringConfig)

  // Ring size
  const ringSize = useMotionValue(40)
  const springRingSize = useSpring(ringSize, { damping: 20, stiffness: 200 })

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor="grow"]')
      const textEl = target.closest('p, span, li, h1, h2, h3, h4, h5, h6')

      if (interactive) {
        setCursorVariant('interactive')
        animate(ringSize, 64, { duration: 0.3 })
      } else if (textEl && !interactive) {
        setCursorVariant('text')
        animate(ringSize, 24, { duration: 0.2 })
      } else {
        setCursorVariant('default')
        animate(ringSize, 40, { duration: 0.3 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY, ringSize])

  // Don't render on touch devices
  if (isTouchDevice) return null

  const dotVariants = {
    default: { scale: 1, opacity: 1 },
    interactive: { scale: 0, opacity: 0 },
    text: { scale: 0.6, opacity: 0.8 },
  }

  const ringVariants = {
    default: { borderColor: 'rgba(167, 139, 250, 0.4)' },
    interactive: { borderColor: 'rgba(167, 139, 250, 0.6)' },
    text: { borderColor: 'rgba(167, 139, 250, 0.2)' },
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border-[1.5px]"
        style={{
          x: ringX,
          y: ringY,
          width: springRingSize,
          height: springRingSize,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={ringVariants[cursorVariant]}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(167,139,250,0.6)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={dotVariants[cursorVariant]}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor
