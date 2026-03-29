'use client'

const LOGOS = [
  { name: 'Cisco', domain: 'cisco.com' },
  { name: 'Deloitte', domain: 'deloitte.com' },
  { name: 'Scotiabank', domain: 'scotiabank.com' },
  { name: 'Sony', domain: 'sony.com' },
  { name: 'Harley-Davidson', domain: 'harley-davidson.com' },
  { name: 'Labatt', domain: 'labatt.com' },
  { name: 'Pinewood Studios', domain: 'pinewoodgroup.com' },
  { name: 'Panavision', domain: 'panavision.com' },
  { name: 'George Brown College', domain: 'georgebrown.ca' },
  { name: 'Centennial College', domain: 'centennialcollege.ca' },
  { name: 'CI Financial', domain: 'cifinancial.com' },
  { name: 'BrainStation', domain: 'brainstation.io' },
  { name: 'Sheridan College', domain: 'sheridancollege.ca' },
  { name: 'City of Mississauga', domain: 'mississauga.ca' },
  { name: 'Info-Tech', domain: 'infotech.com' },
  { name: 'William F. White', domain: 'williamfwhite.com' },
  { name: 'Farber Financial', domain: 'farberfinancial.com' },
  { name: 'Macgregors', domain: 'macgregors.com' },
]

export default function Clients() {
  return (
    <section id="clients" style={{ background: '#ffffff', borderTop: '1px solid rgba(130,167,55,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="mb-16">
          <h2
            className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
            style={{ color: 'var(--cream)' }}
          >
            TRUSTED BY<br />
            <span style={{ color: 'var(--gold)' }}>THE BEST.</span>
          </h2>
        </div>

        <div
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-8"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)', minHeight: '100px' }}
            >
              <img
                src={`https://logo.clearbit.com/${logo.domain}`}
                alt={logo.name}
                style={{
                  height: '32px',
                  width: 'auto',
                  maxWidth: '110px',
                  filter: 'brightness(0)',
                  opacity: 0.6,
                }}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'block'
                }}
              />
              <span
                className="font-display text-xs tracking-[0.1em] text-center"
                style={{ color: 'var(--cream-dim)', display: 'none', lineHeight: 1.4 }}
              >
                {logo.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
