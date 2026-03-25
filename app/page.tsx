'use client'

import { useState, useEffect, useRef } from 'react'
import Hero from './components/Hero'
import Image from 'next/image'
import './globals.css'

// ─── Scroll Animation Hook ───────────────────────────────────────────────────
function useScrollAnimation() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Seasonal Banner Popup ────────────────────────────────────────────────────
function SeasonalBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('seasonal-banner-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="seasonal-popup-overlay" onClick={() => { setVisible(false); sessionStorage.setItem('seasonal-banner-dismissed', '1') }}>
      <div className="seasonal-popup" onClick={e => e.stopPropagation()}>
        <button className="seasonal-popup-close" onClick={() => { setVisible(false); sessionStorage.setItem('seasonal-banner-dismissed', '1') }} aria-label="Dismiss">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div className="seasonal-popup-emoji">🌸</div>
        <h3>Spring Arrangements Available Now</h3>
        <p>Custom florals, BYOB workshops, and event florals — reach out to create something beautiful.</p>
        <button className="seasonal-popup-cta" onClick={() => { setVisible(false); sessionStorage.setItem('seasonal-banner-dismissed', '1') }}>
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  )
}

// ─── How It Works ────────────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: 'Share Your Vision',
    desc: 'Tell us what you\'re imagining — the occasion, colors, mood, or just a feeling. Even a rough idea gets us started.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'We Create for You',
    desc: 'Every piece is built from scratch — no stock arrangements, no shortcuts. Jessie picks the freshest blooms and designs around you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z"/>
        <path d="M9 22h6M12 11v4"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Enjoy',
    desc: 'Your arrangement delivered, picked up, or ready for your event. Exactly what you envisioned — only better.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
  },
]

// ─── Testimonials ────────────────────────────────────────────────────────────
// TODO: Replace with real quotes from Jessie's customers
const testimonials = [
  {
    quote: 'Jessie turned my daughter\'s graduation party into something unforgettable. The centerpiece she made was the centerpiece everyone talked about — not just another grocery store bouquet.',
    author: 'Maria R.',
    occasion: 'Graduation Party',
  },
  {
    quote: 'I had a vision in my head and she just got it. Walked in with flowers I didn\'t even know I wanted. That\'s her gift — she sees what you can\'t quite describe.',
    author: 'James T.',
    occasion: 'Anniversary Gift',
  },
  {
    quote: 'We use BloomBerg for all our nonprofit events. Professional, creative, and she works with our budget every single time. Sarasota is lucky to have her.',
    author: 'Nancy G.',
    occasion: 'Teen Court Justice & Jammies',
  },
]

// ─── Floating Contact Button ─────────────────────────────────────────────────
function FloatingContact() {
  return (
    <a href="tel:+19414245880" className="floating-contact" aria-label="Call BloomBerg Flowers">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.12 1.21 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    </a>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────
const services = [
  { title: 'Custom Arrangements', desc: 'One-of-a-kind bouquets built around your vision. No cookie-cutter designs — every piece is crafted for you.', link: '/gallery/custom', img: '/assets/bouquet/IMG_4142.jpeg' },
  { title: 'Centerpieces', desc: 'Statement table arrangements for events, holidays, and everyday elegance.', link: '/gallery/centerpieces', img: '/assets/centerpiece/IMG_6684.jpeg' },
  { title: 'Celebratory Bouquets', desc: 'Birthdays, anniversaries, just because — big, bold bouquets for all of life\'s moments.', link: '/gallery/byo', img: '/assets/bouquets-with-people/DSC_4162.JPG' },
  { title: 'Workshops', desc: 'Hands-on floral design classes for adults and kids. Great for groups, parties, or just because.', link: '/gallery/workshops', img: '/assets/flower-party/DSC_3881.jpg' },
  { title: 'Events', desc: 'Circus, non-profits, sports, holidays — whatever the occasion, we bring the blooms.', link: '/gallery/events', img: '/assets/events/IMG_9354.jpeg' },
]

export default function Home() {
  useScrollAnimation()

  return (
    <main>
      <SeasonalBanner />
      <Hero />

      {/* Marquee */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[1,2].map(i => (
            <div key={i} className="marquee-item">
              <span>Custom Florals</span><span className="dot" />
              <span>Build Your Own</span><span className="dot" />
              <span>Workshops</span><span className="dot" />
              <span>Events</span><span className="dot" />
              <span>Sarasota, FL</span><span className="dot" />
              <span>Modern & Fun</span><span className="dot" />
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <section className="how-it-works-section">
        <div className="how-it-works-inner">
          <div className="how-header" data-animate>
            <h2>How It <span>Works</span></h2>
            <p>Every bouquet, every centerpiece, every event piece — made for you. No templates.</p>
          </div>
          <div className="how-steps">
            {steps.map((step, i) => (
              <div key={i} className="how-step" data-animate style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="how-step-icon">{step.icon}</div>
                <div className="how-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="services-header" data-animate>
            <h2>What We <span>Do</span></h2>
            <p>More than just flowers — we create experiences.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card service-card-photo" style={{ backgroundImage: `url('${s.img}')` }}>
                <div className="service-card-overlay">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href={s.link} className="service-cta">
                    See Photos
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="testimonials-header" data-animate>
            <h2>What People <span>Say</span></h2>
            <p>Real moments, real flowers, real stories.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" data-animate style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="testimonial-quote">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--green)" opacity="0.4">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                  </svg>
                  <p>{t.quote}</p>
                </div>
                <div className="testimonial-author">
                  <span className="testimonial-name">{t.author}</span>
                  <span className="testimonial-occasion">{t.occasion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text" data-animate>
            <h2>Hi, I&apos;m <span>Jessie</span></h2>
            <p>
              Flowers have always been my language. I started BloomBerg Flowers because I believe everyone deserves a little beauty in their life — whether it&apos;s a bouquet for your kitchen table, a showstopper for your event, or a memory you make in one of my workshops.
            </p>
            <p>
              My style? Modern, fun, and always a little unexpected. I don&apos;t do cookie-cutter. Every arrangement is built around you — your vibe, your story, your moment.
            </p>
            <div className="back-of-card">
              <Image src="/assets/logo-files/unnamed.png" alt="Flowers by Jessie" width={120} height={120} style={{ objectFit: 'contain' }} />
            </div>
            <div className="about-details">
              <div className="about-detail">
                <div className="icon">📍</div>
                <span>1991 Main Street, Sarasota, FL 34236</span>
              </div>
              <div className="about-detail">
                <div className="icon">📞</div>
                <span>(941) 424-5880</span>
              </div>
              <div className="about-detail">
                <div className="icon">✉️</div>
                <span>jessie@bloombergflowers.com</span>
              </div>
              <div className="about-detail">
                <div className="icon">⏰</div>
                <span>By Appointment</span>
              </div>
            </div>
          </div>
          <div className="about-image" data-animate>
            <Image src="/assets/bouquet/IMG_4142.jpeg" alt="Jessie's floral arrangement" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" data-animate>
        <h2>Ready to Create Something Beautiful?</h2>
        <p>Let&apos;s talk about your vision.</p>
        <a href="#contact" className="btn-dark">
          Get in Touch
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="contact-header" data-animate>
            <h2>Get in <span>Touch</span></h2>
            <p>Reach out to discuss your arrangement, event, or workshop.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h4>Phone</h4>
              <p><a href="tel:+19414245880">(941) 424-5880</a></p>
            </div>
            <div className="contact-card">
              <h4>Email</h4>
              <p><a href="mailto:jessie@bloombergflowers.com">jessie@bloombergflowers.com</a></p>
            </div>
            <div className="contact-card">
              <h4>Location</h4>
              <p>1991 Main Street<br />Sarasota, FL 34236</p>
            </div>
            <div className="contact-card">
              <h4>Hours</h4>
              <p>By Appointment</p>
            </div>
          </div>
          <div className="social-links">
            <a href="https://instagram.com/bloombergflowersbyjessie" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X
            </a>
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  )
}
