import { motion } from 'framer-motion'

/**
 * About - two-column section. Stacks vertically on mobile,
 * photo above text on small screens for immediate visual impact.
 */
function About() {
  const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Figma']

  return (
    <section id="about" className="px-5 py-20 sm:px-10 sm:py-28 md:px-12 lg:px-24">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center lg:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Photo - shows first on mobile for visual impact */}
        <div className="flex justify-center lg:order-2 lg:justify-end">
          <div className="h-56 w-56 overflow-hidden rounded-2xl border border-white/10 bg-surface sm:h-72 sm:w-72 md:h-80 md:w-80 lg:rounded-3xl">
            <img
              src="/portrait.jpg"
              alt="Kenneth Clein Fernandez"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text column */}
        <div className="lg:order-1">
          <h2 className="font-display text-3xl font-800 sm:text-4xl md:text-5xl">
            About<span className="text-accent">.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-text-muted sm:mt-6 sm:text-base md:text-lg">
            I&apos;m Kenneth, a 2nd year IT student at San Sebastian
            College-Recoletos in Manila, working toward becoming a full-stack
            developer. I care about writing clean code and building things that
            actually work well. If something can be built, I want to understand
            how and then make my own version of it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base md:text-lg">
            I learn best by doing: picking up projects, breaking things, and
            figuring it out along the way. Outside of code, you&apos;ll find me
            in a Valorant lobby, grinding TFT, petting cats, or defending fried
            rice supremacy.
          </p>

          {/* Stack pills */}
          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-surface px-3 py-1 text-xs font-500 tracking-wide text-text-muted sm:px-4 sm:py-1.5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
