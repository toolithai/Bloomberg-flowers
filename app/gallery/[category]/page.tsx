'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { galleryCategories, type PhotoItem } from '@/data/photos'

export default function GalleryCategory() {
  const params = useParams()
  const slug = params.category as string
  const cat = galleryCategories.find(c => c.id === slug)
  const [lightbox, setLightbox] = useState<{ photo: PhotoItem; index: number } | null>(null)

  const photos = cat?.photos ?? []

  const openLightbox = (photo: PhotoItem, index: number) => setLightbox({ photo, index })
  const closeLightbox = () => setLightbox(null)

  const goNext = useCallback(() => {
    if (!lightbox) return
    const next = (lightbox.index + 1) % photos.length
    setLightbox({ photo: photos[next], index: next })
  }, [lightbox, photos])

  const goPrev = useCallback(() => {
    if (!lightbox) return
    const prev = (lightbox.index - 1 + photos.length) % photos.length
    setLightbox({ photo: photos[prev], index: prev })
  }, [lightbox, photos])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, goNext, goPrev])

  if (!cat) {
    return (
      <div className="gallery-page">
        <nav className="gallery-nav">
          <Link href="/" className="gallery-nav-logo">
            <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={180} height={50} style={{ objectFit: 'contain', height: 'auto' }} />
          </Link>
          <ul className="gallery-nav-links">
            <li><Link href="/gallery">Gallery</Link></li>
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
          <li><Link href="/gallery">Gallery</Link></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        <a href="tel:+19414245880" className="gallery-nav-cta">Message Us</a>
      </nav>

      <div className="gallery-header-bar">
        <h1>{cat.label}</h1>
        <span className="gallery-count">
          {photos.length === 0 ? 'Coming soon' : `${photos.length} photos`}
        </span>
      </div>

      <div className="gallery-page-grid">
        {photos.length === 0 ? (
          <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0', color: 'rgba(253,252,248,0.5)' }}>
            <p style={{ fontSize: '1.1rem' }}>Photos coming soon — check back shortly!</p>
          </div>
        ) : (
          photos.map((photo, i) => (
            <div key={`${photo.src}-${i}`} className="gallery-item" onClick={() => openLightbox(photo, i)}>
              <Image src={photo.src} alt={photo.filename} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" style={{ objectFit: 'cover' }} quality={75} />
            </div>
          ))
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image src={lightbox.photo.src} alt={lightbox.photo.filename} fill style={{ objectFit: 'contain' }} quality={90} priority />
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            {photos.length > 1 && (
              <>
                <button className="lightbox-arrow lightbox-prev" onClick={e => { e.stopPropagation(); goPrev() }} aria-label="Previous photo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className="lightbox-arrow lightbox-next" onClick={e => { e.stopPropagation(); goNext() }} aria-label="Next photo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                </button>
                <div className="lightbox-counter">{lightbox.index + 1} / {photos.length}</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
