'use client'

const LOGOS = [
  { name: 'Cisco', src: '/company logos/cisco logo.png' },
  { name: 'Deloitte', src: '/company logos/deloitte logo.png' },
  { name: 'Scotiabank', src: '/company logos/scotiabank logo.png' },
  { name: 'Sony', src: '/company logos/sony logo.png' },
  { name: 'Harley Davidson', src: '/company logos/harley davidson logo.png' },
  { name: 'Labatt', src: '/company logos/labatt logo.png' },
  { name: 'Pinewood Group', src: '/company logos/pinewood group logo.png' },
  { name: 'Panavision', src: '/company logos/panavision logo.png' },
  { name: 'George Brown College', src: '/company logos/george brown college logo.png' },
  { name: 'Centennial College', src: '/company logos/centennial college logo.png' },
  { name: 'CI Financial', src: '/company logos/ci financial logo.png' },
  { name: 'BrainStation', src: '/company logos/brainstation logo.png' },
  { name: 'City of Mississauga', src: '/company logos/city of mississauga logo.png' },
  { name: 'Farber Financial', src: '/company logos/farber financial logo.png' },
  { name: 'Info Tech', src: '/company logos/info tech logo.png' },
  { name: 'MacGregors', src: '/company logos/macgregors logo.png' },
  { name: 'Sheridan College', src: '/company logos/sheridan college logo.png' },
  { name: 'William F. White', src: '/company logos/william f. white logo.webp' },
]

export default function Clients() {
  return (
    <section id="clients" style={{ background: '#ffffff', borderTop: '1px solid rgba(130,167,55,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <h2
            className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
            style={{ color: 'var(--cream)' }}
          >
            TRUSTED BY<br />
            <span style={{ color: 'var(--gold)' }}>THE BEST.</span>
          </h2>
          <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
            From Hollywood studios to Toronto's most respected corporations, David Mintz Catering has earned the trust of industry leaders across film, finance, tech, and education.
          </p>
        </div>

        <div
          className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6"
          style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-8"
              style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)', minHeight: '100px' }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  width: '90px',
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
