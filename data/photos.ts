// Shared photo data — one source of truth for all gallery components
// Reference codes: BQ=Bouquets, CP=Centerpieces, SO=Special Occasions, HD=Holidays, EP=Events, WP=Workshops

export type PhotoItem = {
  src: string
  filename: string   // display label shown on website
  ref: string        // short reference code, e.g. "CP101"
  category?: string   // only present in allPhotos
}

// --- BOUQUETS ---
export const bouquets: PhotoItem[] = [
  { src: '/assets/bouquet/IMG_2751.jpeg',       filename: 'IMG 2751',                    ref: 'BQ100' },
  { src: '/assets/bouquet/IMG_2758.jpeg',        filename: 'IMG 2758',                    ref: 'BQ101' },
  { src: '/assets/bouquet/IMG_2764 2.jpeg',      filename: 'IMG 2764',                   ref: 'BQ102' },
  { src: '/assets/bouquet/IMG_2770 2.jpeg',      filename: 'IMG 2770',                   ref: 'BQ103' },
  { src: '/assets/bouquet/IMG_4141.jpeg',        filename: 'IMG 4141',                   ref: 'BQ104' },
  { src: '/assets/bouquet/IMG_4142.jpeg',        filename: 'IMG 4142',                   ref: 'BQ105' },
  { src: '/assets/bouquet/IMG_8729.jpeg',        filename: 'IMG 8729',                   ref: 'BQ106' },
  { src: '/assets/bouquet/Photoroom_20260119_165205.jpg', filename: 'Arrangement',        ref: 'BQ107' },
]

// --- BOUQUETS WITH PEOPLE ---
export const bouquetsWithPeople: PhotoItem[] = [
  { src: '/assets/bouquets-with-people/DSC_4150.JPG',  filename: 'DSC 4150',              ref: 'BQ200' },
  { src: '/assets/bouquets-with-people/DSC_4162.JPG',  filename: 'DSC 4162',              ref: 'BQ201' },
  { src: '/assets/bouquets-with-people/DSC_4194.JPG',  filename: 'DSC 4194',              ref: 'BQ202' },
  { src: '/assets/bouquets-with-people/DSC_4195.JPG',  filename: 'DSC 4195',              ref: 'BQ203' },
  { src: '/assets/bouquets-with-people/DSC_4202.JPG',  filename: 'DSC 4202',              ref: 'BQ204' },
  { src: '/assets/bouquets-with-people/IMG_4171.jpeg', filename: 'IMG 4171',              ref: 'BQ205' },
  { src: '/assets/bouquets-with-people/IMG_5340.jpeg', filename: 'IMG 5340',              ref: 'BQ206' },
  { src: '/assets/bouquets-with-people/c6e16f16-a4e5-4151-95f4-6ff7bdc30f1b.jpeg', filename: 'Bouquet', ref: 'BQ207' },
  { src: '/assets/bouquets-with-people/dolly & jassy 3.jpg', filename: 'Dolly & Jassy',   ref: 'BQ208' },
]

// --- CENTERPIECES ---
export const centerpieces: PhotoItem[] = [
  { src: '/assets/centerpiece/12df46d1-a3a0-4f5f-8b78-9a9be57cda44.jpeg', filename: 'Centerpiece',       ref: 'CP100' },
  { src: '/assets/centerpiece/C85AAF14-3585-413B-84D6-AF3B3D24E5EA.jpg',  filename: 'C85AAF14',          ref: 'CP101' },
  { src: '/assets/centerpiece/IMG_0101.jpeg',  filename: 'IMG 0101',  ref: 'CP102' },
  { src: '/assets/centerpiece/IMG_0426.jpeg',  filename: 'IMG 0426',  ref: 'CP103' },
  { src: '/assets/centerpiece/IMG_0502.jpeg',  filename: 'IMG 0502',  ref: 'CP104' },
  { src: '/assets/centerpiece/IMG_1019.jpeg',  filename: 'IMG 1019',  ref: 'CP105' },
  { src: '/assets/centerpiece/IMG_1076.jpeg',  filename: 'IMG 1076',  ref: 'CP106' },
  { src: '/assets/centerpiece/IMG_3122.jpeg',  filename: 'IMG 3122',  ref: 'CP107' },
  { src: '/assets/centerpiece/IMG_3493.jpeg',  filename: 'IMG 3493',  ref: 'CP108' },
  { src: '/assets/centerpiece/IMG_3516.jpeg',  filename: 'IMG 3516',  ref: 'CP109' },
  { src: '/assets/centerpiece/IMG_3626.jpeg',  filename: 'IMG 3626',  ref: 'CP110' },
  { src: '/assets/centerpiece/IMG_3723.jpeg',  filename: 'IMG 3723',  ref: 'CP111' },
  { src: '/assets/centerpiece/IMG_4031.jpeg',  filename: 'IMG 4031',  ref: 'CP112' },
  { src: '/assets/centerpiece/IMG_4038.jpeg',  filename: 'IMG 4038',  ref: 'CP113' },
  { src: '/assets/centerpiece/IMG_6392.jpeg',  filename: 'IMG 6392',  ref: 'CP114' },
  { src: '/assets/centerpiece/IMG_6555.jpeg',  filename: 'IMG 6555',  ref: 'CP115' },
  { src: '/assets/centerpiece/IMG_6684.jpeg',  filename: 'IMG 6684',  ref: 'CP116' },
  { src: '/assets/centerpiece/IMG_6730.jpeg',  filename: 'IMG 6730',  ref: 'CP117' },
  { src: '/assets/centerpiece/IMG_7131.jpeg',  filename: 'IMG 7131',  ref: 'CP118' },
  { src: '/assets/centerpiece/IMG_7965.jpeg',  filename: 'IMG 7965',  ref: 'CP119' },
  { src: '/assets/centerpiece/IMG_8221.jpeg',  filename: 'IMG 8221',  ref: 'CP120' },
  { src: '/assets/centerpiece/IMG_9791.jpeg',  filename: 'IMG 9791',  ref: 'CP121' },
  // flower jess.jpg removed (Jessie photo, not a centerpiece)
]

// --- SPECIAL OCCASIONS (Build Your Own renamed) ---
// Combines bouquets-with-people + events photos
export const specialOccasions: PhotoItem[] = [
  ...bouquetsWithPeople.map(p => ({ ...p })),
  { src: '/assets/events/IMG_9354.jpeg', filename: 'IMG 9354', ref: 'SO200' },
]

// --- EVENTS ---
export const events: PhotoItem[] = [
  { src: '/assets/events/IMG_3524.jpeg',  filename: 'IMG 3524',  ref: 'EP100' },
  { src: '/assets/events/IMG_6179.JPG',   filename: 'IMG 6179',  ref: 'EP101' },
  { src: '/assets/events/IMG_7820.jpeg',  filename: 'IMG 7820',  ref: 'EP102' },
  { src: '/assets/events/IMG_7895 2.jpeg', filename: 'IMG 7895',  ref: 'EP103' },
  { src: '/assets/events/IMG_7898 2.jpeg', filename: 'IMG 7898',  ref: 'EP104' },
  { src: '/assets/events/IMG_9363.jpeg',  filename: 'IMG 9363',  ref: 'EP105' },
  { src: '/assets/events/TeenCourtJustice&Jammies2025-PhotosbyNancyGuth--105.JPG', filename: 'Teen Court Justice & Jammies', ref: 'EP106' },
  { src: '/assets/events/TeenCourtJustice&Jammies2025-PhotosbyNancyGuth--107.JPG', filename: 'Teen Court Justice & Jammies', ref: 'EP107' },
  // IMG_9354 moved to Special Occasions
]

// --- WORKSHOPS (Flower Parties renamed) ---
export const workshops: PhotoItem[] = [
  { src: '/assets/flower-party/DSC_0569.JPG',  filename: 'DSC 0569',  ref: 'WP100' },
  { src: '/assets/flower-party/DSC_0602.JPG',  filename: 'DSC 0602',  ref: 'WP101' },
  { src: '/assets/flower-party/DSC_3202.JPG',  filename: 'DSC 3202',  ref: 'WP102' },
  { src: '/assets/flower-party/DSC_3877.jpg',  filename: 'DSC 3877',  ref: 'WP103' },
  { src: '/assets/flower-party/DSC_3881.jpg',  filename: 'DSC 3881',  ref: 'WP104' },
  { src: '/assets/flower-party/DSC_3892.jpg',  filename: 'DSC 3892',  ref: 'WP105' },
  { src: '/assets/flower-party/DSC_7456.JPG',  filename: 'DSC 7456',  ref: 'WP106' },
  { src: '/assets/flower-party/DSC_7650.JPG',  filename: 'DSC 7650',  ref: 'WP107' },
  // DSC_0671.JPG removed (Jessie photo)
  // DSC_8998.JPG removed (Jessie photo)
  // b279962d...jpeg removed (bouquet photo, not a workshop photo)
]

// --- HOLIDAYS (placeholder — photos pending from Jessie) ---
export const holidays: PhotoItem[] = []

// --- ALL PHOTOS (flat list for "All" view) ---
export const allPhotos: PhotoItem[] = [
  ...bouquets.map(p => ({ ...p, category: 'Bouquets' })),
  ...bouquetsWithPeople.map(p => ({ ...p, category: 'Bouquets' })),
  ...centerpieces.map(p => ({ ...p, category: 'Centerpieces' })),
  ...specialOccasions.map(p => ({ ...p, category: 'Special Occasions' })),
  ...events.map(p => ({ ...p, category: 'Events' })),
  ...workshops.map(p => ({ ...p, category: 'Workshops' })),
  ...holidays.map(p => ({ ...p, category: 'Holidays' })),
]

export type PhotoWithCategory = typeof allPhotos[number] & { category: string }

// --- JESSIE'S FAVORITES (8 photos — Jessie to finalize) ---
// Placeholder: picks from each category
export const jessiesFavorites: PhotoItem[] = [
  bouquets[0],
  bouquets[7],
  bouquetsWithPeople[4],
  centerpieces[1],
  centerpieces[17],
  workshops[4],
  workshops[5],
  events[6],
]

// --- GALLERY PAGE CATEGORIES ---
export const galleryCategories = [
  { id: 'bouquets',       label: 'Bouquets',          photos: bouquets },
  { id: 'centerpieces',   label: 'Centerpieces',       photos: centerpieces },
  { id: 'special-occasions', label: 'Special Occasions', photos: specialOccasions },
  { id: 'events',         label: 'Events',             photos: events },
  { id: 'workshops',      label: 'Workshops',          photos: workshops },
  { id: 'holidays',       label: 'Holidays',           photos: holidays },
]
