'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { galleryCategories, type PhotoItem } from '@/data/photos'

export default function Gallery() {
  const [active, setActive] = useState(galleryCategories[0].id)
  const [lightbox, setLightbox] = useState<PhotoItem | null>(null)

  const activeCategory = galleryCategories.find(c => c.id === active)!

  return (
    <div className="gallery-page">
      {/* Nav */}
      <nav className="gallery-nav">
        <Link href="/" className="gallery-nav-logo">
          <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={180} height={50} style={{ objectFit: 'contain', height: 'auto' }} />
        </Link>
        <ul className="gallery-nav-links">
          <li><Link href="/gallery/bouquets">Gallery</Link></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <a href="tel:+19414245880" className="gallery-nav-cta">Message Us</a>
      </nav>

      {/* Page header */}
      <div className="gallery-page-header">
        <h1>Gallery</h1>
        <p>Browse our work — bouquets, centerpieces, events, workshops, and more.</p>
      </div>

      {/* Category tabs */}
      <div className="gallery-tabs">
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            className={`gallery-tab ${active === cat.id ? 'active' : ''}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label}
            {cat.id === 'holidays' && cat.photos.length === 0 && (
              <span className="tab-count" style={{ opacity: 0.5 }}>—</span>
            )}
            {cat.id !== 'holidays' && (
              <span className="tab-count">{cat.photos.length}</span>
            )}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="gallery-page-grid">
        {activeCategory.photos.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0', color: 'rgba(253,252,248,0.5)' }}>
            <p style={{ fontSize: '1.1rem' }}>Photos coming soon — check back shortly!</p>
          </div>
        ) : (
          activeCategory.photos.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="gallery-item"
              onClick={() => setLightbox(photo)}
            >
              <Image src={photo.src} alt={photo.ref} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" style={{ objectFit: 'cover' }} loading="lazy" />
              <div className="gallery-item-label">{photo.ref} — {photo.filename}</div>
            </div>
          ))
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.ref} fill sizes="90vw" style={{ objectFit: 'contain' }} priority />
            <p className="lightbox-filename">{lightbox.ref} — {lightbox.filename}</p>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}
