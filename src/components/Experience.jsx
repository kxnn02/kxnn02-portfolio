import { motion } from 'framer-motion'

/**
 * Experience - timeline section. DEVCON entry expanded as a mini case study.
 */

const experiences = [
  {
    role: 'Contributing Developer, AI/Automation',
    company: 'DEVCON Kids Hub / DevKids Op',
    type: 'Volunteer',
    period: 'Jul 2026 - Present',
    current: true,
    // Case study format for the strongest entry
    caseStudy: {
      problem: 'DEVCON Kids needed a centralized platform for event management, volunteer onboarding, and chapter operations. Volunteers repeatedly asked the same operational questions that were buried across scattered documents.',
      built: 'Engineered a RAG-powered chatbot that answers operational questions using DEVCON\'s internal documents. Built the knowledgebase infrastructure from scratch: document chunking, vector embeddings, and retrieval strategies. Also developed automation tools including an AI caption generator for social media posts.',
      result: 'Part of a 4-person team. The chatbot now serves as the first line of support for new volunteers, reducing repetitive questions and speeding up onboarding.',
      tech: ['RAG', 'Vector Embeddings', 'Document Chunking', 'AI'],
    },
  },
  {
    role: '2nd Year Representative',
    company: 'JPCS, SSCR Manila',
    type: 'Organization',
    period: '2025 - 2026',
    description:
      'Representing 2nd year IT students in the Junior Philippine Computer Society, organizing events and initiatives for the department.',
    current: true,
  },
  {
    role: 'Skill Builder Member',
    company: 'AWS Learning Club Heron',
    type: 'Cloud',
    period: 'Jul 2026 - Present',
    description:
      'Building cloud skills through AWS learning paths and community-driven study sessions.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section id="experience" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-800 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Experience<span className="text-accent">.</span>
        </motion.h2>

        <motion.div
          className="mt-10 space-y-0 sm:mt-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.role + exp.company}
              variants={itemVariants}
              className="group relative border-b border-white/10 py-6 pl-7 first:border-t sm:py-8 sm:pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 flex h-3 w-3 items-center justify-center sm:top-10">
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
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg font-700 transition-colors group-hover:text-accent sm:text-xl md:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-500 text-text-muted sm:text-sm">
                      {exp.company}
                    </span>
                    <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] text-text-muted sm:px-2.5 sm:text-xs">
                      {exp.type}
                    </span>
                  </div>

                  {/* Case study format for DEVCON */}
                  {exp.caseStudy ? (
                    <div className="mt-4 space-y-3 sm:mt-5">
                      <div>
                        <span className="text-[10px] font-600 uppercase tracking-widest text-text-muted sm:text-xs">Problem</span>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:max-w-xl sm:text-sm">
                          {exp.caseStudy.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-600 uppercase tracking-widest text-text-muted sm:text-xs">What I Built</span>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:max-w-xl sm:text-sm">
                          {exp.caseStudy.built}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] font-600 uppercase tracking-widest text-text-muted sm:text-xs">Impact</span>
                        <p className="mt-1 text-xs leading-relaxed text-text-muted sm:max-w-xl sm:text-sm">
                          {exp.caseStudy.result}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.caseStudy.tech.map((t) => (
                          <span key={t} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-500 text-accent sm:text-xs">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="mt-2 text-xs leading-relaxed text-text-muted sm:mt-3 sm:max-w-lg sm:text-sm">
                      {exp.description}
                    </p>
                  )}
                </div>

                <span className="mt-1 shrink-0 text-[10px] font-500 uppercase tracking-widest text-text-muted sm:mt-0 sm:text-xs">
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
