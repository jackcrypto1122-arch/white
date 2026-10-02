'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header({ onOpenSearch }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isWhitepaper = pathname.startsWith('/chapter') || pathname === '/';

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo from Pic 2 */}
        <div className="header-left">
          <Link href="/" className="brand-logo-link" aria-label="Blackwood Protocol Home">
            <img
              src="/blackwood-logo.png"
              alt="Blackwood Protocol"
              className="brand-logo-img"
              width={160}
              height={32}
              priority="true"
            />
          </Link>
        </div>

        {/* Center Navigation: Whitepaper */}
        <nav className="header-center" aria-label="Main Navigation">
          <Link
            href="/chapter/executive-summary"
            className={`nav-link ${isWhitepaper ? 'nav-link-active' : ''}`}
          >
            Whitepaper
          </Link>
        </nav>
      </div>

      {/* Grid cross markers on bottom border matching Framer style in Pic 1 */}
      <span className="header-grid-cross left" aria-hidden="true">+</span>
      <span className="header-grid-cross right" aria-hidden="true">+</span>
    </header>
  );
}
