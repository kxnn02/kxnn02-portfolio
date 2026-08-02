import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * RevealSection - wraps a section with a blur-to-clear reveal.
 * Uses a strong ease-out curve for snappy entrance.
 */
function RevealSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.75,
        ease: [0.23, 1, 0.32, 1], // Strong ease-out
      }}
    >
      {children}
    </motion.div>
  )
}

export default RevealSection
