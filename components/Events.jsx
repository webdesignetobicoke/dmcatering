'use client'
import Link from 'next/link'

const SERVICES = [
  {
    title: "Hors D'Oeuvres",
    btnLabel: "Hors D'Oeuvres Menu",
    desc: 'Start your event in style with our delectable selections. From elegant canapés to artisanal bites, each piece is crafted to impress.',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Hors-D_Oeuvres.pdf',
    href: '/events/hors-doeuvres',
    img: '/hors-doeuvres/duck.jpeg',
  },
  {
    title: 'Stations',
    btnLabel: 'Stations Menu',
    desc: 'Create a more immersive experience where guests mix, mingle and explore a curated variety of live food stations.',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Stations.pdf',
    href: '/events/stations',
    img: '/stations/stations1.jpg',
  },
  {
    title: 'Sit Down',
    btnLabel: 'Sit Down Menu',
    desc: 'An elevated dining experience where your guests are seated, served, and savoured. Custom menus tailored to your exact vision.',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-SIt-Down-Dinner.pdf',
    href: '/events/sit-down',
    img: '/sitdown/beef.jpeg',
  },
]

export default function Events() {
  return (
    <section id="events" style={{ background: '#ffffff', borderTop: '1px solid rgba(130,167,55,0.1)' }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Intro */}
        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
              style={{ color: 'var(--cream)' }}
            >
              YOUR EVENT.<br />
              <span style={{ color: 'var(--gold)' }}>YOUR WAY.</span>
            </h2>
          </div>
          <div>
            <p className="font-serif text-xl mb-6" style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>
              From corporate functions and cozy in-home cocktail parties to upscale BBQs and large-scale galas — consistently earning rave reviews for 25 years.
            </p>
            <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Put your trust in us and be a guest at your own event. Always great food by great people.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden flex flex-col"
              style={{ border: '1px solid rgba(130,167,55,0.2)', background: 'rgba(130,167,55,0.04)' }}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>{s.title}</h3>
                <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1.05rem', flex: 1 }}>{s.desc}</p>

                <div className="mt-6">
                  <Link
                    href={s.href}
                    className="font-display text-lg sm:text-base tracking-[0.2em] block text-center py-4"
                    style={{ background: 'var(--cream)', color: '#ffffff', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#333333'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
                  >
                    {s.btnLabel} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote band */}
        <div
          className="mt-20 p-12 relative overflow-hidden"
          style={{ border: '1px solid rgba(130,167,55,0.2)', background: 'rgba(130,167,55,0.04)' }}
        >
          <div
            className="absolute top-4 left-8 font-serif text-9xl leading-none"
            style={{ color: 'rgba(130,167,55,0.12)', fontStyle: 'italic' }}
          >
            "
          </div>
          <p
            className="font-serif text-2xl lg:text-3xl relative z-10 text-center"
            style={{ color: 'var(--cream)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}
          >
            Put your trust in us and be a guest at your own event.
          </p>
          <p className="font-display text-xs tracking-[0.3em] text-center mt-6" style={{ color: 'var(--gold)' }}>
            — DAVID MINTZ
          </p>
        </div>
      </div>
    </section>
  )
}
