'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { galleryCategories, type PhotoItem } from '@/data/photos'

export default function GalleryCategory() {
  const params = useParams()
  const slug = params.category as string
  const cat = galleryCategories.find(c => c.id === slug)
  const [lightbox, setLightbox] = useState<PhotoItem | null>(null)

  if (!cat) {
    return (
      <div className="gallery-page">
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
        <div className="gallery-not-found">
          <h2>Category not found</h2>
          <Link href="/gallery" className="service-cta">← Back to Gallery</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="gallery-page">
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

      <div className="gallery-header-bar">
        <h1>{cat.label}</h1>
        <span className="gallery-count">
          {cat.photos.length === 0 ? 'Coming soon' : `${cat.photos.length} photos`}
        </span>
      </div>

      <div className="gallery-page-grid">
        {cat.photos.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0', color: 'rgba(253,252,248,0.5)' }}>
            <p style={{ fontSize: '1.1rem' }}>Photos coming soon — check back shortly!</p>
          </div>
        ) : (
          cat.photos.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="gallery-item"
              onClick={() => setLightbox(photo)}
            >
              <Image src={photo.src} alt={photo.ref} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" style={{ objectFit: 'cover' }} quality={75} />
              <div className="gallery-item-label">{photo.ref} — {photo.filename}</div>
            </div>
          ))
        )}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.ref} fill style={{ objectFit: 'contain' }} quality={90} priority />
            <p className="lightbox-filename">{lightbox.ref} — {lightbox.filename}</p>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </div>
  )
}
