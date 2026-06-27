import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Preloader — a counting animation (0→100) that plays on page load
 * before revealing the main content. Inspired by itsjay.us.
 */
function Preloader({ onComplete }) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      // Accelerating count — starts slow, speeds up
      const increment = current < 30 ? 2 : current < 70 ? 4 : 8
      current = Math.min(current + increment, 100)
      setCount(current)

      if (current >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          setDone(true)
          onComplete()
        }, 400)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="font-display text-7xl font-800 tabular-nums text-text sm:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
