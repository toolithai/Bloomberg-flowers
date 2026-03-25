'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav id="navbar">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={180} height={50} style={{ objectFit: 'contain', height: 'auto' }} />
          </Link>

          {/* Desktop links */}
          <ul className="nav-links">
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>

          <a href="/#contact" className="nav-cta">Message Us</a>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu" onClick={() => setMobileOpen(false)}>
          <div className="mobile-menu-inner" onClick={e => e.stopPropagation()}>
            <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={160} height={44} style={{ objectFit: 'contain', marginBottom: 32 }} />
            <ul>
              <li><a href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</a></li>
              <li><a href="/#services" onClick={() => setMobileOpen(false)}>Services</a></li>
              <li><a href="/#about" onClick={() => setMobileOpen(false)}>About</a></li>
              <li><a href="/#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
            </ul>
            <a href="/#contact" className="mobile-menu-cta" onClick={() => setMobileOpen(false)}>Message Us</a>
          </div>
        </div>
      )}
    </>
  )
}
