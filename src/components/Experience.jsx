import { motion } from 'framer-motion'

/**
 * Experience — timeline-style section showcasing internships,
 * roles, and notable involvements.
 */

const experiences = [
  {
    role: 'Backend AI Engineer Intern',
    company: 'FlyRank AI',
    type: 'Remote',
    period: 'June 2026 - Present',
    description:
      'Working on AI-powered backend systems. Building and integrating intelligent services at scale.',
    current: true,
  },
  {
    role: 'Incoming Intern, Digital Solutions',
    company: 'Philippine Coast Guard',
    type: 'On-site',
    period: 'Upcoming',
    description:
      'Part of an academic-industry collaboration between SSCR Manila and PCG to develop innovative digital solutions for lighthouse operations nationwide.',
    current: false,
  },
  {
    role: '2nd Year Representative',
    company: 'JPCS, SSCR Manila',
    type: 'Organization',
    period: '2026 - Present',
    description:
      'Representing the 2nd year IT students in the Junior Philippine Computer Society, helping organize events and initiatives for the department.',
    current: true,
  },
]

function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="experience" className="relative z-10 px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-4xl font-800 sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Experience<span className="text-accent">.</span>
        </motion.h2>

        <motion.div
          className="mt-14 space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              variants={itemVariants}
              className="group relative border-b border-white/10 py-8 pl-8 first:border-t"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-10 flex h-3 w-3 items-center justify-center">
                {exp.current ? (
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                  </span>
                ) : (
                  <span className="inline-flex h-3 w-3 rounded-full border-2 border-white/30" />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-xl font-700 transition-colors group-hover:text-accent sm:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-sm font-500 text-text-muted">
                      {exp.company}
                    </span>
                    <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs text-text-muted">
                      {exp.type}
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
                    {exp.description}
                  </p>
                </div>

                <span className="shrink-0 text-xs font-500 uppercase tracking-widest text-text-muted sm:text-right">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
