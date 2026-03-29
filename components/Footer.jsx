'use client'

export default function Footer() {
  const links = [
    { label: 'Film & TV', href: '/film-tv' },
    { label: 'Events', href: '/events' },
    { label: 'About', href: '/about' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer style={{ background: '#1a1a1a', borderTop: '3px solid var(--gold)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">

        <div className="grid lg:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://dmcatering.ca/wp-content/uploads/2020/01/dmc_logo_colour-1.png"
              alt="David Mintz Catering"
              className="w-auto mb-6"
              style={{ height: '64px' }}
            />
            <p className="font-serif" style={{ color: '#ffffff', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '320px' }}>
              Toronto's premier catering service for Film, TV, Corporate, and Social events — since 1998.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.instagram.com/davidmintzcatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-[0.25em] uppercase px-6 py-3 inline-block"
                style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.facebook.com/David-Mintz-Catering-486119858172281/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-[0.25em] uppercase px-6 py-3 inline-block"
                style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
              >
                FACEBOOK
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-display text-sm tracking-[0.35em] mb-8" style={{ color: '#ffffff' }}>NAVIGATE</p>
            <ul className="space-y-4">
              {links.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-display text-base tracking-[0.15em]"
                    style={{ color: '#ffffff' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = '#ffffff'}
                  >
                    {l.label.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display text-sm tracking-[0.35em] mb-8" style={{ color: '#ffffff' }}>CONTACT</p>
            <div className="space-y-4">
              <a
                href="mailto:david@dmcatering.ca"
                className="block font-serif"
                style={{ color: '#ffffff', fontSize: '1.05rem' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = '#ffffff'}
              >
                david@dmcatering.ca
              </a>
              <a
                href="tel:6478373348"
                className="block font-serif"
                style={{ color: '#ffffff', fontSize: '1.05rem' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = '#ffffff'}
              >
                647 837 3348
              </a>
              <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.8 }}>
                225 Commissioners Street<br />Toronto, ON M4M 0A1
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="font-display text-xs tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} DAVID MINTZ CATERING. ALL RIGHTS RESERVED.
          </p>
          <p className="font-display text-xs tracking-[0.2em]" style={{ color: 'var(--gold)', opacity: 0.5 }}>
            GREAT FOOD. GREAT PEOPLE.
          </p>
        </div>
      </div>
    </footer>
  )
}
