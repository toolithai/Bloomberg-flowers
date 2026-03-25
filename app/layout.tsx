import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

const siteUrl = 'https://www.bloombergflowers.com'
const siteName = 'BloomBerg Flowers'
const siteDescription = 'Modern, custom floral arrangements in Sarasota, FL. Build your own bouquet, BYOB workshops, events, and centerpiece design. Made-to-order, never cookie-cutter.'
const ogImage = '/assets/og-image.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BloomBerg Flowers | Sarasota Florist — Custom Florals & Events',
    template: '%s | BloomBerg Flowers',
  },
  description: siteDescription,
  keywords: [
    'florist Sarasota FL',
    'custom floral arrangements Sarasota',
    'flower shop Sarasota Florida',
    'Sarasota wedding flowers',
    'event florist Sarasota',
    'BYOB flower workshop Sarasota',
    'Sarasota flower arrangements',
    'build your own bouquet Sarasota',
    'Sarasota event flowers',
    'flower workshop Florida',
  ],
  authors: [{ name: 'Jessie — BloomBerg Flowers' }],
  creator: 'BloomBerg Flowers',
  publisher: 'BloomBerg Flowers',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'BloomBerg Flowers | Sarasota Florist',
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'BloomBerg Flowers — Custom floral arrangements in Sarasota, FL',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BloomBerg Flowers | Sarasota Florist',
    description: siteDescription,
    images: [ogImage],
    creator: '@bloombergflowersbyjessie',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'BloomBerg Flowers',
    description: siteDescription,
    image: `${siteUrl}${ogImage}`,
    telephone: '+1-941-424-5880',
    email: 'jessie@bloombergflowers.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1991 Main Street',
      addressLocality: 'Sarasota',
      addressRegion: 'FL',
      postalCode: '34236',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.3364,
      longitude: -82.5307,
    },
    url: siteUrl,
    sameAs: [
      'https://instagram.com/bloombergflowersbyjessie',
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '18:00',
      description: 'By Appointment',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Floral Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Floral Arrangements' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'BYOB Workshops' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Floristry' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Centerpiece Design' } },
      ],
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does custom floral arrangement ordering work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You share your vision — the occasion, colors, mood, or just a feeling. Jessie builds every arrangement from scratch around your specific request. No stock designs, no shortcuts. Reach out by phone or email to get started.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer flower workshops?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! BloomBerg Flowers offers hands-on floral design workshops for adults and kids. Great for private groups, birthday parties, team events, or just because. Contact Jessie to schedule a private session.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you deliver?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BloomBerg Flowers works primarily by appointment at the Sarasota studio. Delivery may be available for events and large orders — reach out to discuss your needs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Based in Sarasota, FL, BloomBerg Flowers serves the greater Sarasota area for events, workshops, and custom arrangements. Contact Jessie to discuss your location.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you create arrangements for corporate events?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Jessie has experience with nonprofit events, corporate functions, sports events, and community gatherings. Every corporate event gets a custom approach — reach out early to plan.',
        },
      },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body>
        <nav id="navbar">
          <div className="container nav-inner">
            <Link href="/" className="nav-logo">
              <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={180} height={50} style={{ objectFit: 'contain', height: 'auto' }} />
            </Link>
            <ul className="nav-links">
              <li><a href="/gallery" className="nav-green">Gallery</a></li>
              <li><a href="/#services" className="nav-green">Services</a></li>
              <li><a href="/#about" className="nav-green">About</a></li>
              <li><a href="/#contact" className="nav-green">Contact</a></li>
            </ul>
            <a href="/#contact" className="nav-insta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM20 4v16"/></svg>
              Message Us
            </a>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer-inner">
            <div className="footer-brand">
              <Image src="/assets/logo-files/header2.png" alt="BloomBerg Flowers" width={160} height={44} style={{ height: 44, width: 'auto', marginBottom: 16, objectFit: 'contain' }} />
              <p>Modern florals for modern moments. Custom arrangements, workshops, and events in Sarasota, FL.</p>
              <a href="https://instagram.com/bloombergflowersbyjessie" target="_blank" rel="noopener noreferrer" className="footer-insta">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                @bloombergflowersbyjessie
              </a>
            </div>
            <div className="footer-col">
              <h5>Navigate</h5>
              <ul>
                <li><Link href="/gallery/custom">Gallery</Link></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:+19414245880">(941) 424-5880</a></li>
                <li><a href="mailto:jessie@bloombergflowers.com">jessie@bloombergflowers.com</a></li>
                <li>1991 Main Street<br />Sarasota, FL 34236</li>
              </ul>
              <h5 style={{ marginTop: '24px' }}>Hours</h5>
              <ul>
                <li>By Appointment</li>
                <li>Reach out anytime — we&apos;ll make it work.</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} <span>BloomBerg Flowers</span> · Sarasota, Florida</p>
            <p>Made with 🌸 in Sarasota</p>
          </div>
        </footer>
        <script dangerouslySetInnerHTML={{ __html: `
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });
          document.querySelectorAll('.gallery-item').forEach(function(item) {
            observer.observe(item);
          });
        `}} />
      </body>
    </html>
  )
}
