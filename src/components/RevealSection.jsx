import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * RevealSection - wraps a section with a clip-path reveal animation.
 * As the section scrolls into view, it expands from a circle/rectangle
 * to full visibility with a smooth transition.
 */
function RevealSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default RevealSection
