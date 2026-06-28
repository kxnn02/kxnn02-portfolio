import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

/**
 * Contact / Footer - bold CTA with magnetic social links.
 * Responsive text sizing and spacing.
 */
function Contact() {
  return (
    <section id="contact" className="relative z-10 px-5 py-20 sm:px-10 sm:py-28 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          className="font-display text-4xl font-800 sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          Let&apos;s build something<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          className="mx-auto mt-3 max-w-sm text-sm text-text-muted sm:mt-4 sm:max-w-md sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Got an idea, a project, or just want to say hi? I&apos;m always down to talk.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-4 sm:mt-10 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <MagneticButton>
            <a
              href="https://github.com/kxnn02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] sm:h-12 sm:w-12"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://www.linkedin.com/in/kenneth-clein-fernandez-8a6b48258/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface text-text-muted transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(167,139,250,0.2)] sm:h-12 sm:w-12"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 pt-6 text-center sm:mt-24 sm:pt-8">
        <p className="text-[10px] text-text-muted sm:text-xs">
          © {new Date().getFullYear()} Kenneth Clein Fernandez. All rights reserved.
        </p>
      </footer>
    </section>
  )
}

export default Contact
