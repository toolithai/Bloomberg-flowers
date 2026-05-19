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
const testimonials = [
  {
    quote: 'We had the pleasure of working with Jessie for two large scale events, and she was absolutely wonderful to work with. From start to finish, she made the entire process easy and seamless. The centerpiece and bouquets she created were beautiful and truly elevated the look and feel of both events. I highly recommend her and look forward to working with her again in the future.',
    author: 'Megan B.',
    occasion: 'Large Scale Events',
  },
  {
    quote: "Jessie's work consistently goes above and beyond, creating beautiful, meaningful pieces for every occasion. She is professional, caring, always on time, and incredibly accommodating when it comes to dates and custom requests. I'm truly appreciative of everything Jessie has created for us—her work has represented our events beautifully every time.",
    author: 'Angel H.',
    occasion: 'Custom Requests',
  },
  {
    quote: 'Jessie was so easy to work with! She made beautiful custom arrangements which perfectly coordinated with my table size, linens, and style. Her flowers lasted an extremely long time, even though we used them on an outdoor patio. I received lots of compliments on her arrangements and I would highly recommend her!',
    author: 'Jennifer K.',
    occasion: 'Custom Arrangements',
  },
  {
    quote: 'Spending time at Jessie\'s house for our flower-arranging sessions was always something special. She created the warmest, most inviting space—one where creativity felt effortless and everyone, no matter their skill level, felt welcome. It never mattered if you were a beginner or had two left thumbs; Jessie guided us with patience, joy, and a spark of inspiration that made every visit unforgettable. What made it truly magical was the creativity without limits. We didn\'t just make bouquets—we made art. Arrangements in watermelons, pumpkins, and even sleds. Designs tucked into cowboy hats, teapots, and vegetables. Beautiful pieces built with succulents, orchids, spices, and anything else Jessie dreamed up. Every project was unique, fun, and full of personality.',
    author: 'Silvia P.',
    occasion: 'Flower Arranging Sessions',
  },
  {
    quote: "Jessie's flower arranging classes have been one of the most enriching experiences I've had over the past two years. From the moment you step into her world, you're met with warmth, creativity, and effortless elegance. Jessie has an extraordinary eye for detail and a natural ability to inspire, guiding you to create arrangements that feel polished, sophisticated, and magazine-worthy. Beyond the artistry, she cultivates a genuine sense of community — where like-minded people come together and leave as lasting friends. A rare blend of creativity, connection, and elevated experience. I couldn't recommend her classes more highly.",
    author: 'Ilana',
    occasion: 'Flower Arranging Classes',
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
  { title: 'Bouquets', desc: 'One-of-a-kind bouquets built around your vision. No cookie-cutter designs — every piece is crafted for you.', link: '/gallery/bouquets', img: '/assets/bouquet/IMG_4142.jpeg' },
  { title: 'Centerpieces', desc: 'Statement table arrangements for events, holidays, and everyday elegance.', link: '/gallery/centerpieces', img: '/assets/centerpiece/12df46d1-a3a0-4f5f-8b78-9a9be57cda44.jpeg' },
  { title: 'Special Occasions', desc: 'Birthdays, anniversaries, just because — big, bold bouquets for all of life\'s moments.', link: '/gallery/special-occasions', img: '/assets/bouquets-with-people/DSC_4162.JPG' },
  { title: 'Workshops', desc: 'Hands-on floral design classes for adults and kids. Great for groups, parties, or just because.', link: '/gallery/workshops', img: '/assets/flower-party/DSC_3881.jpg' },
  { title: 'Events', desc: 'Circus, non-profits, sports, holidays — whatever the occasion, we bring the blooms.', link: '/gallery/events', img: '/assets/events/IMG_9363.jpeg' },
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

      {/* Our Process */}
      <section className="how-it-works-section">
        <div className="how-it-works-inner">
          <div className="how-header" data-animate>
            <h2>Our <span>Process</span></h2>
            <p>Every bouquet, every centerpiece, every event piece — made for you. No templates.</p>
          </div>
          <div className="how-steps">
            {steps.map((step, i) => (
              <div key={i} className="how-step" data-animate style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="how-step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
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
            <p>Real flowers, real stories, real moments.</p>
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
              I grew up on a sugarcane plantation in the Philippines, where life was deeply rooted in nature. My grandmother, Lola Josefina, was a gifted farmer who filled our home with everything we needed—from fresh fruits and vegetables to healing herbs. She taught me that plants are more than something you grow… they are something you nurture with love. By her side, I learned patience, care, and the quiet beauty of letting nature unfold. That is where my green thumb began.
            </p>
            <p>
              As I grew older, I always kept a small garden, growing vegetables, tending plants, and surrounding myself with flowers. Every home I&apos;ve lived in has been filled with life: orchids on the windowsill, greenery in every corner, and blooms that brought warmth into our space. Along the way, I carried a dream in my heart—to one day have my own flower shop and flower farm, where I could create bouquets using flowers and greens I&apos;d grown myself. In 2017, we moved to the United States, and slowly, that dream began to take shape.
            </p>
            <p>
              In 2022, what started as a simple birthday gathering with friends turned into something truly meaningful. We shared wine, laughter, and created flower arrangements together. It was a peaceful, joyful evening, one that we didn&apos;t want to end. So we continued, gathering once a month to create, connect, and celebrate. Soon, our daughters joined us, making their own small arrangements from leftover flowers. One of them said, &ldquo;What if you make something for the girls too?&rdquo; And just like that, it became a mother-and-daughter tradition, celebrating seasons, holidays, and special moments through flowers. From that moment, BloomBerg Flowers was born—a space where connection, creativity, and nature come together.
            </p>
            <p>
              Today, every arrangement I create carries a piece of that journey. Each bouquet is crafted with intention, inspired by my roots, and designed to bring beauty, warmth, and joy into every home.
            </p>
            <div className="about-details">
              <div className="about-detail">
                <div className="icon">📍</div>
                <span>Downtown Sarasota, By Appointment</span>
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
              <p>Downtown Sarasota<br />By Appointment</p>
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
