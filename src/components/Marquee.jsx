import { useState } from 'react'

/**
 * Marquee - horizontal scrolling strip. Responsive text size.
 * Pauses on hover (desktop) and turns accent color.
 */
function Marquee() {
  const [paused, setPaused] = useState(false)

  const text =
    'Development · Web Apps · React · IT Student · Manila · Full-Stack · Blockchain · Building Things · '

  return (
    <section
      className="overflow-hidden border-y border-white/10 py-4 sm:py-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="animate-marquee flex whitespace-nowrap"
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="font-display mx-3 text-base font-600 uppercase tracking-wide text-text-muted transition-colors duration-300 sm:mx-4 sm:text-lg md:text-xl"
            style={{ color: paused ? '#a78bfa' : undefined }}
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee
