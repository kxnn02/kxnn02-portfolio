import { useState, useCallback, useRef } from 'react'

/**
 * useTextScramble — custom hook that scrambles text through random
 * characters before resolving to the target string.
 * Gives a hacker/terminal vibe on hover.
 */
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'

export function useTextScramble(originalText) {
  const [displayText, setDisplayText] = useState(originalText)
  const intervalRef = useRef(null)
  const frameRef = useRef(0)

  const scramble = useCallback(() => {
    // Clear any existing animation
    if (intervalRef.current) clearInterval(intervalRef.current)

    frameRef.current = 0
    const totalFrames = 10
    const textLength = originalText.length

    intervalRef.current = setInterval(() => {
      frameRef.current++

      const progress = frameRef.current / totalFrames
      const resolvedCount = Math.floor(progress * textLength)

      let result = ''
      for (let i = 0; i < textLength; i++) {
        if (i < resolvedCount) {
          result += originalText[i]
        } else if (originalText[i] === ' ') {
          result += ' '
        } else {
          result += chars[Math.floor(Math.random() * chars.length)]
        }
      }

      setDisplayText(result)

      if (frameRef.current >= totalFrames) {
        clearInterval(intervalRef.current)
        setDisplayText(originalText)
      }
    }, 40)
  }, [originalText])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setDisplayText(originalText)
  }, [originalText])

  return { displayText, scramble, reset }
}
