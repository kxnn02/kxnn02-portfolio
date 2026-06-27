import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import ParticleField from './ParticleField'

/**
 * Hero — full-viewport editorial section featuring:
 * 1. Character-by-character name animation with occasional glitch
 * 2. Animated gradient on "Developer."
 * 3. Mouse-reactive 3D tilt on the entire text block
 * 4. Particle field background with cursor repulsion
 */
function Hero() {
  const name = 'Kenneth Clein'
  const containerRef = useRef(null)

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { damping: 30, stiffness: 150 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { damping: 30, stiffness: 150 })

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

  // Character animation variants
  const charContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  }

  const charVariant = {
    hidden: { opacity: 0, y: 50, rotateZ: -5 },
    visible: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const lineVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Particle field background */}
      <ParticleField />

      {/* 3D tilt container */}
      <motion.div
        className="relative z-10 max-w-5xl"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1200,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Name — character by character with glitch class */}
        <motion.h1
          className="hero-glitch font-display text-5xl font-800 leading-[1.05] tracking-tight sm:text-7xl lg:text-[6.5rem]"
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

        {/* Role — animated gradient text */}
        <motion.p
          className="hero-gradient-text font-display mt-2 text-5xl font-800 leading-[1.05] tracking-tight sm:text-7xl lg:text-[6.5rem]"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          Developer.
        </motion.p>

        {/* Builder — italic/light for editorial contrast */}
        <motion.p
          className="font-display mt-2 text-5xl font-300 italic leading-[1.05] tracking-tight text-text-muted sm:text-7xl lg:text-[6.5rem]"
          variants={lineVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          Builder.
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="mt-8 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          2nd year IT student at San Sebastian College-Recoletos, Manila.
          Aspiring full-stack developer — finding the smartest path to get things done.
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="animate-bounce-slow inline-block text-sm tracking-widest text-text-muted uppercase">
          ↓ Scroll
        </span>
      </motion.div>
    </section>
  )
}

export default Hero
