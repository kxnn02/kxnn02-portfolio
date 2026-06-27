import { useState } from 'react'

/**
 * Marquee — horizontal auto-scrolling text strip.
 * Pauses on hover for a polished detail.
 */
function Marquee() {
  const [paused, setPaused] = useState(false)

  const text =
    'Development · Design · Motion · IT Student · Manila · Full-Stack · Valorant · Building Things · '

  return (
    <section
      className="overflow-hidden border-y border-white/10 py-5"
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
            className="font-display mx-4 text-lg font-600 uppercase tracking-wide text-text-muted transition-colors duration-300 sm:text-xl"
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
