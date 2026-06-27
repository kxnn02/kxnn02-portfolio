import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * FloatingOrbs — blurred gradient circles that drift based on
 * scroll position. Adds parallax depth to the background.
 */
function FloatingOrbs() {
  const { scrollYProgress } = useScroll()

  // Each orb moves at different speeds for parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top-right orb — violet */}
      <motion.div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[100px]"
        style={{ y: y1 }}
      />
      {/* Mid-left orb — purple/blue */}
      <motion.div
        className="absolute top-[40%] -left-48 h-[400px] w-[400px] rounded-full bg-purple-600/[0.03] blur-[120px]"
        style={{ y: y2 }}
      />
      {/* Bottom-right orb — soft violet */}
      <motion.div
        className="absolute top-[70%] -right-24 h-[350px] w-[350px] rounded-full bg-accent/[0.03] blur-[90px]"
        style={{ y: y3 }}
      />
    </div>
  )
}

export default FloatingOrbs
