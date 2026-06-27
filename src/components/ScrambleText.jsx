import { useTextScramble } from '../hooks/useTextScramble'

/**
 * ScrambleText — a span that scrambles its text on hover.
 * Wrap any text element with this for the terminal/hacker effect.
 */
function ScrambleText({ text, className = '' }) {
  const { displayText, scramble, reset } = useTextScramble(text)

  return (
    <span
      className={className}
      onMouseEnter={scramble}
      onMouseLeave={reset}
    >
      {displayText}
    </span>
  )
}

export default ScrambleText
