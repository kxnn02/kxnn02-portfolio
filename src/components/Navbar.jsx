import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

/**
 * Navbar - sticky minimal nav. Responsive padding and font sizing.
 */
function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-5 py-4 sm:px-10 sm:py-5 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      <MagneticButton>
        <a
          href="#"
          className="font-display text-xs font-700 uppercase tracking-widest text-text transition-colors hover:text-accent sm:text-sm"
        >
          Kenneth Clein
        </a>
      </MagneticButton>

      <MagneticButton>
        <a
          href="#contact"
          className="inline-block rounded-full border border-white/20 px-4 py-1.5 text-[10px] font-500 uppercase tracking-widest text-text transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] sm:px-5 sm:py-2 sm:text-xs"
        >
          Get in touch
        </a>
      </MagneticButton>
    </motion.nav>
  )
}

export default Navbar
