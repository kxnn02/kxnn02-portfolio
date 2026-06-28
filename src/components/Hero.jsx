import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import ParticleField from './ParticleField'
import AnimatedTerminal from './AnimatedTerminal'

/**
 * Hero - full-viewport editorial section.
 * Two-column on desktop, single column on mobile/tablet.
 * Terminal shows on tablet (md) and above.
 */
function Hero() {
  const name = 'Kenneth Clein'
  const containerRef = useRef(null)

  // Mouse tracking for 3D tilt (desktop only, no-op on touch)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), { damping: 30, stiffness: 150 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), { damping: 30, stiffness: 150 })

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  const charContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.035, delayChildren: 0.1 },
    },
  }

  const charVariant = {
    hidden: { opacity: 0, y: 40, rotateZ: -4 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const lineVariant = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 sm:px-10 md:px-12 lg:px-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle field (hidden on mobile via component logic) */}
      <ParticleField />

      {/* Layout grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 md:gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: text */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1200,
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.h1
            className="hero-glitch font-display text-[2.75rem] font-800 leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            variants={charContainer}
            initial="hidden"
            animate="visible"
          >
            {name.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={charVariant}
                className="inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="hero-gradient-text font-display mt-1 text-[2.75rem] font-800 leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            variants={lineVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            Developer.
          </motion.p>

          <motion.p
            className="font-display mt-1 text-[2.75rem] font-300 italic leading-[1.05] tracking-tight text-text-muted sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
            variants={lineVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Builder.
          </motion.p>

          <motion.p
            className="mt-6 max-w-md text-sm leading-relaxed text-text-muted sm:mt-8 sm:max-w-lg sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            2nd year IT student at San Sebastian College-Recoletos, Manila.
            Aspiring full-stack developer finding the smartest path to get things done.
          </motion.p>
        </motion.div>

        {/* Right: terminal (visible md and up) */}
        <div className="hidden md:flex md:justify-center lg:justify-end">
          <AnimatedTerminal />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="animate-bounce-slow inline-block text-xs tracking-widest text-text-muted uppercase sm:text-sm">
          ↓ Scroll
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
