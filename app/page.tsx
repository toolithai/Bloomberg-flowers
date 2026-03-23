import Image from 'next/image'

const photos = [
  { src: '/assets/gallery/photo1.jpg', alt: 'Bright sunflower and lily bouquet' },
  { src: '/assets/gallery/photo2.jpg', alt: "Mother's Day workshop arrangements" },
  { src: '/assets/gallery/photo3.jpg', alt: 'Graduation celebration bouquets' },
  { src: '/assets/gallery/photo4.jpg', alt: 'Elegant lily bouquet' },
  { src: '/assets/gallery/photo5.jpg', alt: 'Autumn pumpkin floral arrangement' },
]

const services = [
  { icon: '💐', title: 'Custom Arrangements', desc: 'One-of-a-kind bouquets built around your vision. No cookie-cutter designs — every piece is crafted for you.' },
  { icon: '🌸', title: 'Build Your Own', desc: "Pick your flowers, your colors, your mood. We'll bring them together into something beautiful." },
  { icon: '🎨', title: 'Workshops', desc: 'Hands-on floral design classes for adults and kids. Great for groups, parties, or just because.' },
  { icon: '🎪', title: 'Events', desc: 'Circus, non-profits, sports, holidays — whatever the occasion, we bring the blooms.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-eyebrow">Sarasota, Florida · By Appointment</p>
          <h1>
            Bloom<span className="accent">Berg</span><br />Flowers
          </h1>
          <p>Modern florals for modern moments. Custom arrangements, build-your-own bouquets, workshops, and events that bring something different to every occasion.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#gallery" className="btn-outline">See Our Work</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

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

      {/* Gallery */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2>Our <span>Work</span></h2>
          <p>Real arrangements, real love. Every bouquet tells a story.</p>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, i) => (
            <div key={i} className="gallery-item">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="overlay"><span>{photo.alt}</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <h2>What We <span>Do</span></h2>
            <p>More than just flowers — we create experiences.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-text">
            <h2>Hi, I&apos;m <span>Jessie</span></h2>
            <p>
              Flowers have always been my language. I started BloomBerg Flowers because I believe everyone deserves a little beauty in their life — whether it&apos;s a bouquet for your kitchen table, a showstopper for your event, or a memory you make in one of my workshops.
            </p>
            <p>
              My style? Modern, fun, and always a little unexpected. I don&apos;t do cookie-cutter. Every arrangement is built around you — your vibe, your story, your moment.
            </p>
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
          <div className="about-image">
            <img src="/assets/gallery/photo4.jpg" alt="Jessie's floral arrangement" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner">
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
          <div className="contact-header">
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
        </div>
      </section>
    </main>
  )
}
