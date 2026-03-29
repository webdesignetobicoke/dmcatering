'use client'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--black)', paddingTop: '180px', paddingBottom: '100px' }}
    >

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h1
              className="font-display mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
                color: 'var(--cream)',
                lineHeight: 1.05,
              }}
            >
              Toronto catering that feeds every crew and{' '}
              <span style={{ color: 'var(--gold)' }}>elevates every event.</span>
            </h1>

            <ul className="mb-10 space-y-3">
              {['Film & TV on-set catering', 'Social & corporate events', 'Custom menus'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--cream)', flexShrink: 0, display: 'inline-block' }} />
                  <span className="font-display" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--cream)', letterSpacing: '0.05em' }}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="font-display text-lg tracking-[0.25em] uppercase px-14 py-4 inline-block"
              style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Book Now
            </a>
          </div>

          {/* Right — image */}
          <div>
            <img
              src="/team-dmc-hero.jpg"
              alt="David Mintz Catering"
              className="w-full h-auto block"
            />
          </div>

        </div>
      </div>

    </section>
  )
}
