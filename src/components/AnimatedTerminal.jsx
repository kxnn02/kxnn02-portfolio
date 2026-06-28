import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedTerminal - a fake terminal window that types out commands
 * and responses. Uses a step-based approach to avoid state stalling.
 */

const script = [
  { type: 'command', text: 'npx create-next-app portfolio' },
  { type: 'output', text: 'Creating a new Next.js app...' },
  { type: 'output', text: '✓ Installing dependencies' },
  { type: 'output', text: '✓ Initializing project' },
  { type: 'pause' },
  { type: 'command', text: 'npm run dev' },
  { type: 'output', text: 'ready - started server on localhost:3000' },
  { type: 'pause' },
  { type: 'command', text: 'git add . && git commit -m "ship it"' },
  { type: 'output', text: '[main 4a2f8c1] ship it' },
  { type: 'output', text: ' 12 files changed, 847 insertions(+)' },
  { type: 'pause' },
  { type: 'command', text: 'vercel --prod' },
  { type: 'output', text: 'Deploying to production...' },
  { type: 'output', text: '✓ Build completed' },
  { type: 'output', text: '✓ Deployed to kxnn02.vercel.app' },
]

function AnimatedTerminal() {
  const [displayedLines, setDisplayedLines] = useState([])
  const [typingText, setTypingText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)

  const runScript = useCallback(() => {
    let stepIndex = 0
    let charIndex = 0

    setDisplayedLines([])
    setTypingText('')

    function next() {
      if (stepIndex >= script.length) {
        // Loop after a pause
        timeoutRef.current = setTimeout(runScript, 4000)
        return
      }

      const step = script[stepIndex]

      if (step.type === 'pause') {
        stepIndex++
        timeoutRef.current = setTimeout(next, 600)
      } else if (step.type === 'output') {
        setDisplayedLines((prev) => [...prev, { type: 'output', text: step.text }])
        stepIndex++
        timeoutRef.current = setTimeout(next, 120)
      } else if (step.type === 'command') {
        if (charIndex <= step.text.length) {
          setTypingText(step.text.slice(0, charIndex))
          charIndex++
          timeoutRef.current = setTimeout(next, 35 + Math.random() * 30)
        } else {
          // Done typing this command
          setDisplayedLines((prev) => [...prev, { type: 'command', text: step.text }])
          setTypingText('')
          charIndex = 0
          stepIndex++
          timeoutRef.current = setTimeout(next, 400)
        }
      }
    }

    next()
  }, [])

  useEffect(() => {
    runScript()
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [runScript])

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [displayedLines, typingText])

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((c) => !c), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-[#111111] shadow-2xl shadow-accent/5 md:max-w-md"
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 1.5, duration: 0.8, ease: 'easeOut' }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-text-muted">terminal</span>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        className="h-[220px] overflow-y-auto p-3 font-mono text-[11px] leading-relaxed sm:h-[260px] sm:p-4 sm:text-xs md:text-sm"
      >
        {displayedLines.map((line, i) => (
          <div key={i} className="min-h-[1.25rem]">
            {line.type === 'command' ? (
              <span>
                <span className="text-green-400">$</span>{' '}
                <span className="text-text">{line.text}</span>
              </span>
            ) : (
              <span className="text-text-muted">{line.text}</span>
            )}
          </div>
        ))}

        {/* Currently typing */}
        {typingText !== '' && (
          <div className="min-h-[1.25rem]">
            <span className="text-green-400">$</span>{' '}
            <span className="text-text">{typingText}</span>
            <span
              className="ml-0.5 inline-block h-4 w-[2px] bg-accent"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </div>
        )}

        {/* Idle cursor when not typing */}
        {typingText === '' && displayedLines.length > 0 && (
          <div className="min-h-[1.25rem]">
            <span className="text-green-400">$</span>{' '}
            <span
              className="inline-block h-4 w-[2px] bg-accent"
              style={{ opacity: showCursor ? 1 : 0 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default AnimatedTerminal
