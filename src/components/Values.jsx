import { motion } from 'framer-motion'

/**
 * Values — bold standalone words section, inspired by
 * motherdesign.com's "Rigor · Rebellion · Depth · Care" strip.
 * Personal spin on Kenneth's approach.
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="px-6 py-20 sm:px-12 lg:px-24">
      <motion.div
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-16"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {words.map((word) => (
          <motion.span
            key={word}
            variants={item}
            className="font-display text-3xl font-800 uppercase tracking-wide text-text/80 sm:text-4xl lg:text-5xl"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}

export default Values
