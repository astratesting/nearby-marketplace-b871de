'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

const publicLinks = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Browse' },
];

const authLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/sell', label: 'Sell' },
  { href: '/messages', label: 'Messages' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLoggedIn = !['/', '/login', '/signup'].includes(pathname) || pathname.startsWith('/dashboard') || pathname.startsWith('/sell') || pathname.startsWith('/messages') || pathname.startsWith('/browse');

  const links = [...publicLinks, ...(isLoggedIn ? authLinks : [])];

  return (
    <nav className="sticky top-0 z-50 bg-charcoal text-ivory shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <MapPin className="h-6 w-6 text-gold" />
            <span>NearBy</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-gold',
                  pathname === link.href ? 'text-gold' : 'text-ivory/80'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-sm font-medium text-charcoal bg-gold hover:bg-gold/90 px-4 py-1.5 rounded-lg transition-colors"
            >
              Sign In
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-ivory/10 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={clsx(
                'block py-2 text-sm font-medium',
                pathname === link.href ? 'text-gold' : 'text-ivory/80'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-gold">
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
