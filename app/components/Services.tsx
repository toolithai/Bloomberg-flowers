'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  bouquets,
  bouquetsWithPeople,
  centerpieces,
  events,
  workshops,
  type PhotoItem,
} from '@/data/photos'

type ServiceKey = 'bouquets' | 'special-occasions' | 'workshops' | 'events'

const services: {
  id: ServiceKey
  icon: string
  title: string
  desc: string
  photos: PhotoItem[]
}[] = [
  {
    id: 'bouquets',
    icon: '💐',
    title: 'Bouquets',
    desc: 'One-of-a-kind bouquets built around your vision. No cookie-cutter designs — every piece is crafted for you.',
    photos: [...bouquets, ...bouquetsWithPeople],
  },
  {
    id: 'special-occasions',
    icon: '🌸',
    title: 'Special Occasions',
    desc: "Pick your flowers, your colors, your mood. We'll bring them together into something beautiful for your celebration.",
    photos: [...bouquetsWithPeople, ...centerpieces],
  },
  {
    id: 'workshops',
    icon: '🎨',
    title: 'Workshops',
    desc: 'Hands-on floral design classes for adults and kids. Great for groups, parties, or just because.',
    photos: workshops,
  },
  {
    id: 'events',
    icon: '🎪',
    title: 'Events',
    desc: 'Circus, non-profits, sports, holidays — whatever the occasion, we bring the blooms.',
    photos: events,
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceKey | null>(null)
  const [lightbox, setLightbox] = useState<PhotoItem | null>(null)

  return (
    <>
      {/* What We Do */}
      <section id="services" className="services-section">
        <div className="services-inner">
          <div className="services-header">
            <h2>What We <span>Do</span></h2>
            <p>More than just flowers — we create experiences.</p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div
                key={s.id}
                className={`service-card ${activeService === s.id ? 'active' : ''}`}
              >
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button
                  className="service-cta"
                  onClick={() => setActiveService(activeService === s.id ? null : s.id)}
                >
                  {activeService === s.id ? 'Show Less' : 'See Photos'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={activeService === s.id ? "M5 15l7-7 7 7" : "M5 12h14M12 5l7 7-7 7"} /></svg>
                </button>

                {activeService === s.id && (
                  <div className="service-expanded">
                    <div className="service-expanded-grid">
                      {s.photos.map((photo, i) => (
                        <div
                          key={`${photo.src}-${i}`}
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
                )}
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
