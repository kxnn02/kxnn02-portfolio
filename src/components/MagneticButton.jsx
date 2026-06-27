import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * MagneticButton — a wrapper that pulls its children toward the cursor
 * when the mouse is nearby. Creates that premium agency-site feel.
 */
function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { damping: 15, stiffness: 200 })
  const springY = useSpring(y, { damping: 15, stiffness: 200 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Pull strength — how far the button moves toward cursor
    const pullStrength = 0.3
    x.set((e.clientX - centerX) * pullStrength)
    y.set((e.clientY - centerY) * pullStrength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default MagneticButton
