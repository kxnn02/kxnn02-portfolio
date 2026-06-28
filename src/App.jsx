import { useState, useCallback } from 'react'
import Preloader from './components/Preloader'
import SmoothScroll from './components/SmoothScroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Values from './components/Values'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import GradientFollow from './components/GradientFollow'
import FloatingOrbs from './components/FloatingOrbs'
import NoiseOverlay from './components/NoiseOverlay'
import StatusLine from './components/StatusLine'
import RevealSection from './components/RevealSection'

function App() {
  const [loaded, setLoaded] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Custom cursor (hidden on touch devices via component logic) */}
      <CustomCursor />

      {/* Smooth scroll engine */}
      {loaded && <SmoothScroll />}

      {/* Background layers */}
      {loaded && (
        <>
          <GradientFollow />
          <FloatingOrbs />
          <NoiseOverlay />
        </>
      )}

      {/* Main content */}
      {loaded && (
        <>
          <Navbar />
          <StatusLine />
          <main className="relative z-10">
            <Hero />
            <Marquee />
            <RevealSection>
              <Values />
            </RevealSection>
            <RevealSection>
              <About />
            </RevealSection>
            <RevealSection>
              <Experience />
            </RevealSection>
            <RevealSection>
              <Projects />
            </RevealSection>
            <RevealSection>
              <Skills />
            </RevealSection>
            <RevealSection>
              <Contact />
            </RevealSection>
          </main>
        </>
      )}
    </>
  )
}

export default App
