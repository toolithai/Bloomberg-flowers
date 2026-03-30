'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  allPhotos,
  jessiesFavorites,
  galleryCategories,
  type PhotoItem,
} from '@/data/photos'

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<PhotoItem | null>(null)

  const filtered = active === 'All'
    ? allPhotos
    : allPhotos.filter(p => p.category === active)

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="gallery-header">
          <h2>Our <span>Work</span></h2>
          <p>Real arrangements, real love. Every bouquet tells a story.</p>
        </div>

        <div className="gallery-tabs">
          <button
            className={`gallery-tab ${active === 'All' ? 'active' : ''}`}
            onClick={() => setActive('All')}
          >
            All
          </button>
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              className={`gallery-tab ${active === cat.label ? 'active' : ''}`}
              onClick={() => setActive(cat.label)}
            >
              {cat.label}
              {cat.id === 'holidays' && cat.photos.length === 0 && <span className="tab-badge">soon</span>}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="gallery-item"
              onClick={() => setLightbox(photo as PhotoItem)}
            >
              <Image
                src={photo.src}
                alt={photo.ref}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="gallery-item-label">{photo.ref} — {photo.filename}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Jessie's Favorites */}
      <section className="favorites-section">
        <div className="favorites-inner">
          <div className="favorites-header">
            <h2>Jessie&apos;s <span>Favorites</span></h2>
            <p>A few of her personal favorite pieces.</p>
          </div>
          <div className="gallery-grid">
            {jessiesFavorites.map((photo, i) => (
              <div
                key={`fav-${i}`}
                className="gallery-item"
                onClick={() => setLightbox(photo)}
              >
                <Image
                  src={photo.src}
                  alt={photo.ref}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className="gallery-item-label">{photo.ref} — {photo.filename}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.ref}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
            <p className="lightbox-filename">{lightbox.ref} — {lightbox.filename}</p>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  )
}
