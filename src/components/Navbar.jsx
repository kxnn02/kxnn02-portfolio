import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

/**
 * Navbar — sticky minimal navigation with magnetic CTA.
 * Name on the left, "Get in touch" pill on the right.
 */
function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between px-6 py-5 sm:px-12 lg:px-24"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      {/* Name / wordmark */}
      <MagneticButton>
        <a
          href="#"
          className="font-display text-sm font-700 uppercase tracking-widest text-text transition-colors hover:text-accent"
        >
          Kenneth Clein
        </a>
      </MagneticButton>

      {/* CTA — magnetic pull */}
      <MagneticButton>
        <a
          href="#contact"
          className="inline-block rounded-full border border-white/20 px-5 py-2 text-xs font-500 uppercase tracking-widest text-text transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
        >
          Get in touch
        </a>
      </MagneticButton>
    </motion.nav>
  )
}

export default Navbar
