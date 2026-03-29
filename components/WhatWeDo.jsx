'use client'
import { useState } from 'react'

const SERVICES = [
  {
    title: 'Film & TV Catering',
    desc: 'On-set catering for film and television productions across Toronto and the GTA. 9 fully-mobile kitchens delivering hot, fresh meals cooked on location for every cast and crew member.',
    href: '/film-tv',
    img: 'https://dmcatering.ca/wp-content/uploads/2021/05/TRAILER-PIC.jpg',
    btnLabel: 'Film & TV Catering',
  },
  {
    title: 'Social & Corporate Events',
    desc: 'From intimate cocktail parties and upscale BBQs to large-scale corporate galas. We handle every detail so you can be a guest at your own event.',
    href: '/events',
    img: '/stations/stations1.jpg',
    btnLabel: 'Social & Corporate Events',
  },
  {
    title: 'Custom Menus',
    desc: "Hors d'oeuvres, food stations, and full sit-down dinners — all crafted by our executive chef with menus tailored to your exact vision.",
    href: '/custom-menus',
    img: '/sitdown/beef.jpeg',
    btnLabel: 'Custom Menus',
  },
]

export default function WhatWeDo() {
  const [hovered, setHovered] = useState(null)

  return (
    <section style={{ background: '#f5f5f5', borderTop: '3px solid var(--gold)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Cards */}
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
                <h3
                  className="font-display text-3xl mb-4"
                  style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}
                >
                  {s.title}
                </h3>
                <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1.05rem', flex: 1 }}>
                  {s.desc}
                </p>
                <div className="mt-6">
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
                    {s.btnLabel} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
