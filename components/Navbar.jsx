'use client'
import { useState, useRef, useEffect } from 'react'
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
  { label: 'About', href: '/about' },
  { label: 'Clients', href: '/clients' },
]

function DropdownItem({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <li ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={item.href}
        className="font-display text-xl tracking-[0.15em] uppercase flex items-center gap-1"
        style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--cream-dim)'}
      >
        {item.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: '2px', marginTop: '2px', flexShrink: 0 }}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {open && (
        <ul
          className="absolute top-full left-0 py-2 min-w-[200px]"
          style={{ background: '#ffffff', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '1px solid rgba(130,167,55,0.15)', zIndex: 100 }}
        >
          {item.dropdown.map(sub => (
            <li key={sub.href}>
              <Link
                href={sub.href}
                className="font-display text-base tracking-[0.15em] uppercase block px-6 py-4"
                style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.background = 'rgba(130,167,55,0.05)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--cream-dim)'; e.currentTarget.style.background = 'transparent' }}
                onClick={() => setOpen(false)}
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mobileOpenLabel, setMobileOpenLabel] = useState(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid rgba(130,167,55,0.2)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
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
              <DropdownItem key={l.label} item={l} />
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-display text-xl tracking-[0.15em] uppercase"
                  style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--cream-dim)'}
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
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="block w-6 h-0.5" style={{ background: open ? 'var(--gold)' : 'var(--cream)', transform: open ? 'rotate(45deg) translate(0px, 6px)' : '' }} />
          <span className="block w-6 h-0.5" style={{ background: open ? 'transparent' : 'var(--cream)', opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-0.5" style={{ background: open ? 'var(--gold)' : 'var(--cream)', transform: open ? 'rotate(-45deg) translate(0px, -6px)' : '' }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? '600px' : '0',
          background: '#ffffff',
          borderTop: open ? '1px solid rgba(130,167,55,0.15)' : 'none',
          boxShadow: open ? '0 8px 24px rgba(0,0,0,0.06)' : 'none',
          transition: 'max-height 0.3s ease',
        }}
      >
        <ul className="px-8 py-8 flex flex-col gap-6">
          {links.map(l =>
            l.dropdown ? (
              <li key={l.label}>
                <button
                  className="font-display text-sm tracking-[0.2em] uppercase flex items-center gap-2 w-full text-left"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cream-dim)', padding: 0 }}
                  onClick={() => setMobileOpenLabel(mobileOpenLabel === l.label ? null : l.label)}
                >
                  {l.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transform: mobileOpenLabel === l.label ? 'rotate(180deg)' : '', transition: 'transform 0.2s' }}>
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {mobileOpenLabel === l.label && (
                  <ul className="mt-3 pl-4 flex flex-col gap-4" style={{ borderLeft: '2px solid var(--gold)' }}>
                    {l.dropdown.map(sub => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="font-display text-xs tracking-[0.2em] uppercase block"
                          style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                          onClick={() => { setOpen(false); setMobileOpenLabel(null) }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-display text-sm tracking-[0.2em] uppercase"
                  style={{ color: 'var(--cream-dim)', textDecoration: 'none' }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              href="/contact"
              className="font-display text-xs tracking-[0.25em] uppercase inline-block px-6 py-3"
              style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
