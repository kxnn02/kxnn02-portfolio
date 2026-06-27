import { motion } from 'framer-motion'

/**
 * About — two-column section with bio text (left) and a
 * circular placeholder photo (right). Includes tech stack pills.
 */
function About() {
  const stack = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Figma']

  return (
    <section
      id="about"
      className="px-6 py-28 sm:px-12 lg:px-24"
    >
      <motion.div
        className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {/* Text column */}
        <div>
          <h2 className="font-display text-4xl font-800 sm:text-5xl">
            About<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            I&apos;m Kenneth, a 2nd year IT student at San Sebastian
            College-Recoletos in Manila, working toward becoming a full-stack
            developer. I care about writing clean code and building things that
            actually work well. If something can be built, I want to understand
            how and then make my own version of it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            I learn best by doing: picking up projects, breaking things, and
            figuring it out along the way. Outside of code, you&apos;ll find me
            in a Valorant lobby, grinding TFT, petting cats, or defending fried
            rice supremacy.
          </p>

          {/* Stack pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-surface px-4 py-1.5 text-xs font-500 tracking-wide text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <div className="h-72 w-72 overflow-hidden rounded-3xl border border-white/10 bg-surface sm:h-80 sm:w-80">
            <img
              src="/portrait.jpg"
              alt="Kenneth Clein Fernandez"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
