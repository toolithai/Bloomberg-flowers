'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

const slides = [
  {
    src: '/assets/bouquet/IMG_2751.jpeg',
    eyebrow: 'Sarasota, Florida',
    headline: 'Bloom',
    accent: 'Berg',
    sub: 'Flowers by Jessie',
  },
  {
    src: '/assets/bouquet/Photoroom_20260119_165205.jpg',
    eyebrow: 'Custom Florals',
    headline: 'Every',
    accent: 'Bouquet',
    sub: 'Tells a Story',
  },
  {
    src: '/assets/events/IMG_9354.jpeg',
    eyebrow: 'Events & Weddings',
    headline: 'Bringing',
    accent: 'Beauty',
    sub: 'to Every Occasion',
  },
  {
    src: '/assets/centerpiece/IMG_3122.jpeg',
    eyebrow: 'Table & Venue Styling',
    headline: 'Setting the',
    accent: 'Mood',
    sub: 'for Every Event',
  },
  {
    src: '/assets/centerpiece/IMG_6684.jpeg',
    eyebrow: 'Centerpieces & Installations',
    headline: 'Designed to',
    accent: 'Impress',
    sub: 'Every Single Time',
  },
  {
    src: '/assets/flower-party/DSC_0671.JPG',
    eyebrow: 'Workshops & Parties',
    headline: 'Learn.',
    accent: 'Create.',
    sub: 'Celebrate.',
  },
  {
    src: '/assets/flower-party/DSC_8998.JPG',
    eyebrow: "Sarasota's Favorite Florist",
    headline: 'Bloom',
    accent: 'Berg',
    sub: 'Flowers by Jessie',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    setMounted(true)
  }, [])

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return
    setTransitioning(true)
    setCurrent(index)
    setTimeout(() => setTransitioning(false), 1200)
  }, [current, transitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  // Pause slideshow when tab is hidden to save CPU/battery
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearInterval(timerRef.current)
      } else {
        timerRef.current = setInterval(next, 4000)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    timerRef.current = setInterval(next, 4000)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [next])

  const s = slides[current]

  return (
    <section className="hero">
      {/* Background */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-bg ${i === current ? 'hero-bg-active' : ''}`}
          style={{
            backgroundImage: `url('${slide.src}')`,
            zIndex: i === current ? 1 : 0,
          }}
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className={`hero-eyebrow ${mounted ? 'visible' : ''}`}>{s.eyebrow}</p>
        <h1 className={`hero-title ${mounted ? 'visible' : ''}`}>
          <span className="hero-line" key={current}>{s.headline}</span>
          <span className="hero-accent">{s.accent}</span>
        </h1>
        <p className={`hero-subtitle visible`} key={current}>{s.sub}</p>
        <div className={`hero-actions ${mounted ? 'visible' : ''}`}>
          <a href="/#services" className="btn-primary">
            See Our Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
