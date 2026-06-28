import { motion } from 'framer-motion'

/**
 * Skills - tech pills + three-column breakdown.
 * Pills wrap naturally on all screen sizes.
 */

const techLinks = [
  { name: 'React', url: 'https://react.dev/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Vite', url: 'https://vitejs.dev/' },
  { name: 'Supabase', url: 'https://supabase.com/' },
  { name: 'Figma', url: 'https://www.figma.com/' },
  { name: 'GitHub', url: 'https://github.com/' },
  { name: 'Framer Motion', url: 'https://motion.dev/' },
  { name: 'Rust', url: 'https://www.rust-lang.org/' },
  { name: 'Stellar', url: 'https://stellar.org/' },
]

const columns = [
  {
    title: 'Dev Tools',
    items: ['HTML / CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Supabase', 'Git & GitHub', 'Vite'],
  },
  {
    title: 'Design Tools',
    items: ['Figma', 'Canva', 'Photoshop'],
  },
  {
    title: 'Currently Learning',
    items: ['Rust / Soroban', 'TypeScript', 'Next.js', 'Full-Stack Dev', 'Framer Motion'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-10 sm:py-28 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-800 sm:text-4xl md:text-5xl">
            Skills<span className="text-accent">.</span>
          </h2>
          <p className="mt-2 text-xs uppercase tracking-widest text-text-muted sm:mt-3 sm:text-sm">
            Professional at
          </p>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {techLinks.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-surface px-3.5 py-2 text-xs font-500 text-text transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {tech.name}
            </a>
          ))}
        </motion.div>

        {/* Three-column breakdown */}
        <motion.div
          className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-base font-700 text-accent sm:text-lg">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-xs text-text-muted sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
