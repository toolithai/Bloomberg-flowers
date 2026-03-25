import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#1C1C1C',
      color: '#FDFCF8',
      textAlign: 'center',
      padding: '40px 24px',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ marginBottom: '32px' }}>
        <Image
          src="/assets/logo-files/header2.png"
          alt="BloomBerg Flowers"
          width={200}
          height={56}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 style={{ fontSize: '5rem', fontWeight: 800, margin: '0 0 16px', color: '#8db236' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 16px' }}>Page not found</h2>
      <p style={{ opacity: 0.6, margin: '0 0 32px', maxWidth: '360px', lineHeight: 1.6 }}>
        Looks like this page wandered off. Let&apos;s get you back to the flowers.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          background: '#8db236',
          color: '#FDFCF8',
          padding: '14px 28px',
          borderRadius: '50px',
          fontWeight: 600,
          textDecoration: 'none',
          fontSize: '0.95rem',
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}
