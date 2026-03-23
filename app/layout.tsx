import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BloomBerg Flowers | Sarasota Florist',
  description: 'Modern, custom floral arrangements in Sarasota, FL. Build your own bouquet, workshops, and events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav id="navbar">
          <div className="container nav-inner">
            <div className="nav-logo">Bloom<span>Berg</span> Flowers</div>
            <ul className="nav-links">
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="nav-insta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM20 4v16"/></svg>
              Message Us
            </a>
          </div>
        </nav>
        {children}
        <footer>
          <div className="footer-inner">
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="BloomBerg Flowers" style={{height: 52, width: 'auto', marginBottom: 16}} />
              <p>Modern florals for modern moments. Custom arrangements, workshops, and events in Sarasota, FL.</p>
            </div>
            <div className="footer-col">
              <h5>Navigate</h5>
              <ul>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:+19414245880">(941) 424-5880</a></li>
                <li><a href="mailto:jessie@bloombergflowers.com">jessie@bloombergflowers.com</a></li>
                <li>1991 Main Street<br />Sarasota, FL 34236</li>
                <li>By Appointment</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} <span>BloomBerg Flowers</span> · Sarasota, Florida</p>
            <p>Made with 💛 in Sarasota</p>
          </div>
        </footer>
        <script dangerouslySetInnerHTML={{ __html: `
          // Scroll animations for gallery
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
