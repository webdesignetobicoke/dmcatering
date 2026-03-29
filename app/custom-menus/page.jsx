'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const MENU_TYPES = [
  {
    title: "Hors D'Oeuvres",
    desc: "Start your event in style with our delectable passed and stationed selections. From elegant canapés to artisanal bites, each piece is crafted by our executive chef to impress.",
    href: '/events/hors-doeuvres',
    img: '/hors-doeuvres/duck.jpeg',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Hors-D_Oeuvres.pdf',
  },
  {
    title: 'Stations',
    desc: 'Create a more immersive experience where guests mix, mingle and explore a curated variety of live food stations — from carving stations to pasta bars.',
    href: '/events/stations',
    img: '/stations/stations1.jpg',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Stations.pdf',
  },
  {
    title: 'Sit Down Dinners',
    desc: 'An elevated dining experience where your guests are seated, served, and savoured. Custom multi-course menus tailored to your exact vision and dietary needs.',
    href: '/events/sit-down',
    img: '/sitdown/beef.jpeg',
    menu: 'https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-SIt-Down-Dinner.pdf',
  },
]

const PROCESS = [
  { step: '01', label: 'Consultation', desc: 'We start with a conversation about your event, guest count, dietary needs, and vision.' },
  { step: '02', label: 'Menu Design', desc: 'Our executive chef builds a custom menu around your preferences and budget.' },
  { step: '03', label: 'Tasting', desc: 'Sample your selections before the event so everything is perfect on the day.' },
  { step: '04', label: 'Your Event', desc: 'Sit back and enjoy — you are a guest at your own event.' },
]

export default function CustomMenusPage() {
  const [hovered, setHovered] = useState(null)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ paddingTop: '120px', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="font-display leading-none mb-6 text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]" style={{ color: '#1a1a1a' }}>
                CUSTOM<br />
                <span style={{ color: 'var(--gold)' }}>MENUS.</span>
              </h1>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-10"
                  style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div>
              <p className="font-serif text-xl mb-4" style={{ color: '#1a1a1a', lineHeight: 1.7 }}>
                Hors d'oeuvres, food stations, and full sit-down dinners — all crafted by our executive chef with menus tailored to your exact vision.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Every menu is built from scratch around your event, your guests, and your preferences. No two menus are the same.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-3" style={{ background: '#1a1a1a' }}>
        {[
          { src: '/hors-doeuvres/figs.jpeg', alt: 'Figs' },
          { src: '/stations/scallops.jpg', alt: 'Scallops' },
          { src: '/sitdown/scallop.jpeg', alt: 'Sit Down' },
        ].map(img => (
          <div key={img.alt} style={{ overflow: 'hidden', height: '300px' }}>
            <img src={img.src} alt={img.alt} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        ))}
      </div>

      {/* Menu types */}
      <section style={{ background: '#f5f5f5', borderTop: '3px solid var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-3 gap-6">
            {MENU_TYPES.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col"
                style={{ border: '1px solid rgba(130,167,55,0.2)', background: 'rgba(130,167,55,0.04)' }}
              >
                <div style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full"
                    style={{ objectFit: 'cover', display: 'block' }}
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl mb-4" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>
                    {s.title}
                  </h3>
                  <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1.05rem', flex: 1 }}>
                    {s.desc}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={s.href}
                      className="font-display text-base sm:text-sm tracking-[0.2em] block text-center py-4"
                      style={{
                        background: hovered === i ? '#333333' : 'var(--cream)',
                        color: '#ffffff',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {s.title} →
                    </a>
                    <a
                      href={s.menu}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-base sm:text-sm tracking-[0.2em] text-center"
                      style={{ color: 'var(--gold)', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-dim)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--gold)'}
                    >
                      Download Menu PDF ↓
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#ffffff', borderTop: '1px solid rgba(130,167,55,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="font-display leading-none mb-16 text-[clamp(3rem,7vw,4.5rem)] sm:text-[clamp(2.5rem,5vw,4.5rem)]" style={{ color: 'var(--cream)' }}>
            HOW IT<br /><span style={{ color: 'var(--gold)' }}>WORKS.</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-0">
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                className="p-8"
                style={{ borderRight: i < 3 ? '1px solid rgba(130,167,55,0.2)' : 'none', borderTop: '1px solid rgba(130,167,55,0.2)' }}
              >
                <p className="font-display mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--gold)', lineHeight: 1 }}>{p.step}</p>
                <h3 className="font-display text-2xl mb-3" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>{p.label.toUpperCase()}</h3>
                <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
          <h2 className="font-display leading-none mb-6 text-[clamp(3rem,8vw,5rem)] sm:text-[clamp(2.5rem,6vw,5rem)]" style={{ color: '#ffffff' }}>
            READY TO BUILD<br />
            <span style={{ color: 'var(--gold)' }}>YOUR MENU?</span>
          </h2>
          <p className="font-serif text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Tell us about your event and our executive chef will craft a menu around your vision.
          </p>
          <Link
            href="/contact"
            className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-14"
            style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >
            Book Now
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
