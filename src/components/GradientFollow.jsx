import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * GradientFollow — a large radial gradient spotlight that follows
 * the mouse across the entire page. Adds depth and interactivity
 * to the dark background.
 */
function GradientFollow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const x = useSpring(mouseX, { damping: 30, stiffness: 100 })
  const y = useSpring(mouseY, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY + window.scrollY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 opacity-40"
      aria-hidden="true"
      style={{
        background: `radial-gradient(800px circle at var(--mx) var(--my), rgba(167,139,250,0.06), transparent 60%)`,
      }}
    >
      {/* We use a nested div with motion styles for the gradient position */}
      <motion.div
        className="h-full w-full"
        style={{
          background: 'radial-gradient(600px circle at center, rgba(167,139,250,0.07), transparent 60%)',
          x: x,
          y: y,
          position: 'fixed',
          top: '-300px',
          left: '-300px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />
    </motion.div>
  )
}

export default GradientFollow
