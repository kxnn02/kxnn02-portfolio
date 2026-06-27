import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import ScrambleText from './ScrambleText'

/**
 * Projects — editorial project list with floating image preview on hover
 * and text scramble effect on project names.
 */

const projects = [
  {
    name: 'PasaBuy',
    category: 'Blockchain / dApp',
    description:
      'Trustless cross-border escrow for informal pasabuy transactions on Stellar.',
    stack: ['Rust', 'Soroban', 'Stellar', 'Vite'],
    link: 'https://github.com/kxnn02/PasaBuy',
    live: 'https://pasa-buy.vercel.app/',
    image: '/pasabuy.png',
  },
  {
    name: 'Flappy Kiro',
    category: 'Game Dev',
    description:
      'Retro-neon Flappy Bird with Steering Mode, procedural audio, and PWA support.',
    stack: ['JavaScript', 'Canvas', 'Web Audio', 'PWA'],
    link: 'https://github.com/kxnn02/flappy-kiro',
    live: 'https://kxnn02.github.io/flappy-kiro/',
    image: '/screenshot.png',
  },
  {
    name: 'StraySafe',
    category: 'Community App',
    description:
      'Pet registration, stray reporting, treatment sponsorship & adoption platform.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    link: 'https://github.com/kxnn02/StraySafe',
    live: 'https://stray-safe-nine.vercel.app/',
    image: '/straysafe.png',
  },
]

function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const containerRef = useRef(null)

  // Mouse position for floating image
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
    <section id="projects" className="relative z-10 px-6 py-28 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="font-display text-4xl font-800 sm:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects<span className="text-accent">.</span>
        </motion.h2>

        {/* Desktop: editorial list with hover image + scramble text */}
        <div
          ref={containerRef}
          className="relative mt-14 hidden lg:block"
          onMouseMove={handleMouseMove}
        >
          {/* Floating preview image */}
          <motion.div
            className="pointer-events-none absolute z-10 h-[300px] w-[420px] overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl"
            style={{ x: springX, y: springY }}
            animate={{
              opacity: hoveredIdx !== null && projects[hoveredIdx]?.image ? 1 : 0,
              scale: hoveredIdx !== null ? 1 : 0.9,
            }}
            transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
          >
            {hoveredIdx !== null && projects[hoveredIdx]?.image && (
              <img
                src={projects[hoveredIdx].image}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* Project rows */}
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="group flex items-center justify-between border-b border-white/10 py-8 first:border-t"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline gap-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-3xl font-700 transition-colors group-hover:text-accent xl:text-4xl"
                >
                  <ScrambleText text={project.name} />
                </a>
                <span className="text-xs font-500 uppercase tracking-widest text-text-muted">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="hidden gap-2 xl:flex">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm font-500 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent"
                  >
                    Code →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:hidden">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.live || project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors hover:border-accent/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image */}
              <div className="aspect-video w-full overflow-hidden bg-bg">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-text-muted">
                    Screenshot coming soon
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-500 uppercase tracking-widest text-accent">
                  {project.category}
                </span>
                <h3 className="font-display mt-2 text-xl font-700">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-bg px-3 py-1 text-xs text-text-muted"
                    >
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
