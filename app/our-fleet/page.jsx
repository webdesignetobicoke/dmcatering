'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

const TRUCKS = [
  'https://dmcatering.ca/wp-content/uploads/2021/05/TRAILER-PIC.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/04/truck-2.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/04/truck-1.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/05/IMG_2419.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/05/IMG_2033.jpg',
]

export default function OurFleetPage() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <main>
      <Navbar />
      <section style={{ background: '#f5f5f5', paddingTop: '140px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h1 className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]" style={{ color: 'var(--cream)' }}>
                OUR<br />
                <span style={{ color: 'var(--gold)' }}>FLEET.</span>
              </h1>
            </div>
            <div>
              <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>
                We bring fully-mobile, state-of-the-art kitchens on wheels to every production — serving hot, fresh breakfasts and lunches cooked on location.
              </p>
            </div>
          </div>

          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {TRUCKS.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/5' }}
                onClick={() => setLightbox(src)}
              >
                <img src={src} alt={`DMC Fleet ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center" style={{ background: 'rgba(130,167,55,0.3)' }}>
                  <span className="font-display text-xs tracking-[0.3em] text-white">EXPAND</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.93)' }} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Expanded" className="max-w-4xl max-h-screen w-full object-contain" />
          <button className="absolute top-6 right-8 font-display text-2xl" style={{ color: 'rgba(255,255,255,0.6)' }} onClick={() => setLightbox(null)}>✕</button>
        </div>
      )}

      <CTASection line1="READY TO FEED" line2="YOUR CREW?" desc="Tell us about your production and we'll handle every meal on set." />
      <Footer />
    </main>
  )
}
