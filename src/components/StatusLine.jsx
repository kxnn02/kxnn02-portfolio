import { motion } from 'framer-motion'

/**
 * StatusLine — a tiny "currently" status that sits at the bottom-left
 * of the viewport. Adds personality and makes the site feel alive.
 * Update the status text whenever you want.
 */
function StatusLine() {
  const status = 'Building this portfolio'
  const availability = 'Open to opportunities'

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 hidden items-center gap-3 lg:flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.6 }}
    >
      {/* Pulsing dot — indicates "live" */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>

      <span className="text-xs text-text-muted">
        <span className="text-text/70">{status}</span>
        <span className="mx-2 text-white/20">·</span>
        <span className="text-accent/70">{availability}</span>
      </span>
    </motion.div>
  )
}

export default StatusLine
