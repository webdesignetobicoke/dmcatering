'use client'
import Link from 'next/link'

const links = [
  {
    label: 'What We Do',
    href: '/#what-we-do',
    dropdown: [
      { label: 'Film & TV Catering', href: '/film-tv' },
      { label: 'Social & Corporate Events', href: '/events' },
      { label: 'Custom Menus', href: '/custom-menus' },
    ],
  },
  {
    label: 'Events',
    href: '/events',
    dropdown: [
      { label: "Hors D'Oeuvres", href: '/events/hors-doeuvres' },
      { label: 'Stations', href: '/events/stations' },
      { label: 'Sit Down', href: '/events/sit-down' },
    ],
  },
  { label: 'Our Fleet', href: '/our-fleet' },
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
]

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#0f0f0f',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between" style={{ height: '120px' }}>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="https://dmcatering.ca/wp-content/uploads/2020/01/dmc_logo_colour-1.png"
            alt="David Mintz Catering"
            className="w-auto"
            style={{ height: '68px' }}
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map(l =>
            l.dropdown ? (
              <li key={l.label} className="relative group">
                <Link
                  href={l.href}
                  className="font-display text-xl tracking-[0.15em] uppercase flex items-center gap-1"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  {l.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '2px', marginTop: '2px', flexShrink: 0 }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <ul
                  className="absolute top-full left-0 py-2 min-w-[200px] hidden group-hover:block"
                  style={{ background: '#ffffff', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(130,167,55,0.15)', zIndex: 100 }}
                >
                  {l.dropdown.map(sub => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="font-display text-base tracking-[0.15em] uppercase block px-6 py-4"
                        style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-display text-xl tracking-[0.15em] uppercase"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              href="/contact"
              className="font-display text-lg tracking-[0.25em] uppercase px-14 py-4 inline-block"
              style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <details className="lg:hidden">
          <summary className="list-none cursor-pointer flex flex-col justify-center gap-1.5 p-2">
            <span className="block w-6 h-0.5" style={{ background: 'var(--gold)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--gold)' }} />
            <span className="block w-6 h-0.5" style={{ background: 'var(--gold)' }} />
          </summary>
          <div
            className="absolute right-0 left-0 mt-2"
            style={{
              background: '#f5f5f5',
              borderTop: '1px solid rgba(130,167,55,0.15)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              zIndex: 50,
            }}
          >
            <ul className="px-8 py-8 flex flex-col gap-6">
              {links.map(l =>
                l.dropdown ? (
                  <li key={l.label}>
                    <details>
                      <summary className="font-display text-lg tracking-[0.2em] uppercase cursor-pointer">
                        {l.label}
                      </summary>
                      <ul className="mt-3 flex flex-col gap-4" style={{ borderLeft: '2px solid var(--gold)', padding: '0.75rem 1rem' }}>
                        {l.dropdown.map(sub => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="font-display text-base tracking-[0.2em] uppercase block"
                              style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="font-display text-lg tracking-[0.2em] uppercase"
                      style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
              <li>
                <Link
                  href="/contact"
                  className="font-display text-base tracking-[0.25em] uppercase block w-full text-center py-4"
                  style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </nav>
  )
}
