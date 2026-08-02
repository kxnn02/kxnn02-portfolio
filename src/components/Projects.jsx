import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import ScrambleText from './ScrambleText'

/**
 * Projects - featured projects (large) + secondary projects (compact).
 * Recruiter sees the strongest work first and biggest.
 */

const featured = [
  {
    name: 'CampusCurrents',
    category: 'Mobile App',
    description:
      'Real-time campus communication system with push notifications for class suspensions and emergencies. Led a 5-person team through beta testing with real students.',
    stack: ['React Native', 'Next.js', 'Supabase', 'TypeScript'],
    link: 'https://github.com/kxnn02/campus-currents',
    live: null,
    image: null,
  },
  {
    name: 'PasaBuy',
    category: 'Blockchain dApp',
    description:
      'Trustless escrow on Stellar for cross-border pasabuy transactions. Smart contract locks XLM and releases on delivery confirmation with on-chain dispute resolution.',
    stack: ['Rust', 'Soroban', 'Stellar', 'Vite'],
    link: 'https://github.com/kxnn02/PasaBuy',
    live: 'https://pasa-buy.vercel.app/',
    image: '/pasabuy.png',
  },
]

const secondary = [
  {
    name: 'Flappy Kiro',
    category: 'Game',
    stack: ['JavaScript', 'Canvas', 'Web Audio'],
    link: 'https://github.com/kxnn02/flappy-kiro',
    live: 'https://kxnn02.github.io/flappy-kiro/',
    image: '/screenshot.png',
  },
  {
    name: 'StraySafe',
    category: 'Community',
    stack: ['HTML', 'CSS', 'JS', 'Supabase'],
    link: 'https://github.com/kxnn02/StraySafe',
    live: 'https://stray-safe-nine.vercel.app/',
    image: '/straysafe.png',
  },
]

function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const containerRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - rect.left + 20)
      mouseY.set(e.clientY - rect.top - 150)
    }
  }

  return (
    <section id="projects" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-3xl font-800 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects<span className="text-accent">.</span>
        </motion.h2>

        {/* Featured projects - desktop editorial list */}
        <div
          ref={containerRef}
          className="relative mt-14 hidden lg:block"
          onMouseMove={handleMouseMove}
        >
          {/* Floating preview */}
          <motion.div
            className="pointer-events-none absolute z-10 h-[280px] w-[400px] overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl"
            style={{ x: springX, y: springY }}
            animate={{
              opacity: hoveredIdx !== null && featured[hoveredIdx]?.image ? 1 : 0,
              scale: hoveredIdx !== null && featured[hoveredIdx]?.image ? 1 : 0.9,
            }}
            transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
          >
            {hoveredIdx !== null && featured[hoveredIdx]?.image && (
              <img src={featured[hoveredIdx].image} alt="" className="h-full w-full object-cover" />
            )}
          </motion.div>

          {/* Featured rows */}
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              className="group border-b border-white/10 py-8 first:border-t xl:py-10"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-3xl font-700 transition-colors group-hover:text-accent xl:text-5xl"
                  >
                    <ScrambleText text={project.name} />
                  </a>
                  <span className="text-[10px] font-500 uppercase tracking-widest text-text-muted xl:text-xs">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm font-500 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent">
                    Code →
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary projects - compact row on desktop */}
        <motion.div
          className="mt-8 hidden grid-cols-2 gap-4 lg:grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {secondary.map((project) => (
            <a
              key={project.name}
              href={project.live || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-surface/50 p-4 transition-all hover:border-accent/30 hover:bg-surface"
            >
              {project.image && (
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-bg">
                  <img src={project.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
              )}
              <div>
                <h4 className="font-display text-sm font-700 transition-colors group-hover:text-accent">
                  {project.name}
                </h4>
                <span className="text-[10px] uppercase tracking-widest text-text-muted">{project.category}</span>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Mobile/Tablet: all projects as cards */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 md:gap-6 lg:hidden">
          {[...featured, ...secondary].map((project, i) => (
            <motion.a
              key={project.name}
              href={project.live || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-surface transition-colors hover:border-accent/40"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden bg-bg">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <span className="text-[10px] font-500 uppercase tracking-widest text-accent sm:text-xs">
                  {project.category}
                </span>
                <h3 className="font-display mt-1.5 text-lg font-700 sm:text-xl">
                  {project.name}
                </h3>
                {'description' in project && (
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {project.description}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-bg px-2.5 py-0.5 text-[10px] text-text-muted sm:px-3 sm:py-1 sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
