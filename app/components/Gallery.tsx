'use client'

import { useState } from 'react'
import Image from 'next/image'

type PhotoItem = {
  src: string
  filename: string
  category: string
}

// --- Bouquets ---
const bouquets = [
  { src: '/assets/bouquet/IMG_2751.jpeg', filename: 'IMG_2751' },
  { src: '/assets/bouquet/IMG_2758.jpeg', filename: 'IMG_2758' },
  { src: '/assets/bouquet/IMG_2758 2.jpeg', filename: 'IMG_2758' },
  { src: '/assets/bouquet/IMG_2764 2.jpeg', filename: 'IMG_2764' },
  { src: '/assets/bouquet/IMG_2770 2.jpeg', filename: 'IMG_2770' },
  { src: '/assets/bouquet/IMG_4141.jpeg', filename: 'IMG_4141' },
  { src: '/assets/bouquet/IMG_4142.jpeg', filename: 'IMG_4142' },
  { src: '/assets/bouquet/IMG_8729.jpeg', filename: 'IMG_8729' },
  { src: '/assets/bouquet/Photoroom_20260119_165205.jpg', filename: 'Photoroom arrangement' },
]

// --- Bouquets with People ---
const bouquetsWithPeople = [
  { src: '/assets/bouquets-with-people/DSC_4150.JPG', filename: 'DSC_4150' },
  { src: '/assets/bouquets-with-people/DSC_4162.JPG', filename: 'DSC_4162' },
  { src: '/assets/bouquets-with-people/DSC_4194.JPG', filename: 'DSC_4194' },
  { src: '/assets/bouquets-with-people/DSC_4195.JPG', filename: 'DSC_4195' },
  { src: '/assets/bouquets-with-people/DSC_4202.JPG', filename: 'DSC_4202' },
  { src: '/assets/bouquets-with-people/IMG_4171.jpeg', filename: 'IMG_4171' },
  { src: '/assets/bouquets-with-people/IMG_5340.jpeg', filename: 'IMG_5340' },
  { src: '/assets/bouquets-with-people/c6e16f16-a4e5-4151-95f4-6ff7bdc30f1b.jpeg', filename: 'c6e16f16' },
  { src: '/assets/bouquets-with-people/dolly & jassy 3.jpg', filename: 'dolly & jassy' },
]

// --- Centerpieces ---
const centerpieces = [
  { src: '/assets/centerpiece/12df46d1-a3a0-4f5f-8b78-9a9be57cda44.jpeg', filename: 'centerpiece 1' },
  { src: '/assets/centerpiece/C85AAF14-3585-413B-84D6-AF3B3D24E5EA.jpg', filename: 'C85AAF14' },
  { src: '/assets/centerpiece/IMG_0101.jpeg', filename: 'IMG_0101' },
  { src: '/assets/centerpiece/IMG_0426.jpeg', filename: 'IMG_0426' },
  { src: '/assets/centerpiece/IMG_0502.jpeg', filename: 'IMG_0502' },
  { src: '/assets/centerpiece/IMG_1019.jpeg', filename: 'IMG_1019' },
  { src: '/assets/centerpiece/IMG_1076.jpeg', filename: 'IMG_1076' },
  { src: '/assets/centerpiece/IMG_1569 2.jpeg', filename: 'IMG_1569' },
  { src: '/assets/centerpiece/IMG_2738 2.jpeg', filename: 'IMG_2738' },
  { src: '/assets/centerpiece/IMG_3122.jpeg', filename: 'IMG_3122' },
  { src: '/assets/centerpiece/IMG_3493.jpeg', filename: 'IMG_3493' },
  { src: '/assets/centerpiece/IMG_3516.jpeg', filename: 'IMG_3516' },
  { src: '/assets/centerpiece/IMG_3626.jpeg', filename: 'IMG_3626' },
  { src: '/assets/centerpiece/IMG_3723.jpeg', filename: 'IMG_3723' },
  { src: '/assets/centerpiece/IMG_4031.jpeg', filename: 'IMG_4031' },
  { src: '/assets/centerpiece/IMG_4038.jpeg', filename: 'IMG_4038' },
  { src: '/assets/centerpiece/IMG_6392.jpeg', filename: 'IMG_6392' },
  { src: '/assets/centerpiece/IMG_6555.jpeg', filename: 'IMG_6555' },
  { src: '/assets/centerpiece/IMG_6684.jpeg', filename: 'IMG_6684' },
  { src: '/assets/centerpiece/IMG_6730.jpeg', filename: 'IMG_6730' },
  { src: '/assets/centerpiece/IMG_7131.jpeg', filename: 'IMG_7131' },
  { src: '/assets/centerpiece/IMG_7965.jpeg', filename: 'IMG_7965' },
  { src: '/assets/centerpiece/IMG_8221.jpeg', filename: 'IMG_8221' },
  { src: '/assets/centerpiece/IMG_9791.jpeg', filename: 'IMG_9791' },
  { src: '/assets/centerpiece/flower jess.jpg', filename: 'flower jess' },
]

// --- Events ---
const events = [
  { src: '/assets/events/IMG_3524.jpeg', filename: 'IMG_3524' },
  { src: '/assets/events/IMG_6179.JPG', filename: 'IMG_6179' },
  { src: '/assets/events/IMG_7820.jpeg', filename: 'IMG_7820' },
  { src: '/assets/events/IMG_7895 2.jpeg', filename: 'IMG_7895' },
  { src: '/assets/events/IMG_7898 2.jpeg', filename: 'IMG_7898' },
  { src: '/assets/events/IMG_9354.jpeg', filename: 'IMG_9354' },
  { src: '/assets/events/IMG_9363.jpeg', filename: 'IMG_9363' },
  { src: '/assets/events/TeenCourtJustice&Jammies2025-PhotosbyNancyGuth--105.JPG', filename: 'Teen Court Justice & Jammies' },
  { src: '/assets/events/TeenCourtJustice&Jammies2025-PhotosbyNancyGuth--107.JPG', filename: 'Teen Court Justice & Jammies' },
]

// --- Flower Parties ---
const flowerParties = [
  { src: '/assets/flower-party/DSC_0569.JPG', filename: 'DSC_0569' },
  { src: '/assets/flower-party/DSC_0602.JPG', filename: 'DSC_0602' },
  { src: '/assets/flower-party/DSC_0671.JPG', filename: 'DSC_0671' },
  { src: '/assets/flower-party/DSC_3202.JPG', filename: 'DSC_3202' },
  { src: '/assets/flower-party/DSC_3877.jpg', filename: 'DSC_3877' },
  { src: '/assets/flower-party/DSC_3881.jpg', filename: 'DSC_3881' },
  { src: '/assets/flower-party/DSC_3892.jpg', filename: 'DSC_3892' },
  { src: '/assets/flower-party/DSC_7456.JPG', filename: 'DSC_7456' },
  { src: '/assets/flower-party/DSC_7650.JPG', filename: 'DSC_7650' },
  { src: '/assets/flower-party/DSC_8998.JPG', filename: 'DSC_8998' },
]

// My Favorites — Jessie to pick 8. Using best shots as placeholder.
const myFavorites = [
  bouquets[0], bouquets[8], bouquetsWithPeople[4],
  centerpieces[0], centerpieces[3],
  flowerParties[4], flowerParties[5], events[10],
]

const allPhotos: PhotoItem[] = [
  ...bouquets.map(p => ({ ...p, category: 'Bouquets' })),
  ...bouquetsWithPeople.map(p => ({ ...p, category: 'Bouquets with People' })),
  ...centerpieces.map(p => ({ ...p, category: 'Centerpieces' })),
  ...events.map(p => ({ ...p, category: 'Events' })),
  ...flowerParties.map(p => ({ ...p, category: 'Flower Parties' })),
  ...myFavorites.map(p => ({ ...p, category: 'My Favorites' })),
]

const categories = ['All', 'Bouquets', 'Bouquets with People', 'Centerpieces', 'Events', 'Flower Parties', 'My Favorites']

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
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {cat === 'My Favorites' && <span className="tab-badge">pick 8</span>}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((photo, i) => (
            <div
              key={`${photo.src}-${i}`}
              className="gallery-item"
              onClick={() => setLightbox(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.filename}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: 'cover' }}
                loading="lazy"
              />
              <div className="gallery-item-label">{photo.filename}</div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.filename}
              fill
              sizes="90vw"
              style={{ objectFit: 'contain' }}
              priority
            />
            <p className="lightbox-filename">{lightbox.filename}</p>
            <p className="lightbox-category">{lightbox.category}</p>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  )
}
