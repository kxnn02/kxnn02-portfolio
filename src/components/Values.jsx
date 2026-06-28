import { motion } from 'framer-motion'

/**
 * Values - bold words strip. Scales down gracefully on mobile.
 */
function Values() {
  const words = ['Efficiency', 'Curiosity', 'Craft', 'Persistence']

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section className="px-5 py-14 sm:px-10 sm:py-20 md:px-12 lg:px-24">
      <motion.div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10 md:gap-x-14 lg:gap-x-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {words.map((word) => (
          <motion.span
            key={word}
            variants={item}
            className="font-display text-2xl font-800 uppercase tracking-wide text-text/80 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}

export default Values
