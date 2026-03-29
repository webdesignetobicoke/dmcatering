'use client'
import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts']

const MENU = [
  {
    name: 'Sweet Potato Soup',
    desc: 'Lemongrass, Thai curry and roasted coconut',
    category: 'Starters',
    tags: ['V', 'GF'],
  },
  {
    name: 'Watercress, Radicchio & Frisée',
    desc: 'Beet carpaccio, micro greens, grapefruit, orange and blood orange with mint, pomegranate seeds and blackberry reduction',
    category: 'Starters',
    tags: ['V', 'GF', 'DF'],
  },
  {
    name: 'Winter Salad',
    desc: 'Acorn squash, yellow beets, candied pecans, chèvre and maple vinaigrette',
    category: 'Starters',
    tags: ['V', 'GF'],
  },
  {
    name: 'Seared Scallop',
    desc: 'Caviar on a bed of cauliflower purée with chive oil',
    category: 'Starters',
    tags: ['GF'],
    popular: true,
  },
  {
    name: 'Sesame Encrusted Tuna',
    desc: 'Black forbidden rice with creamy coconut sauce',
    category: 'Starters',
    tags: ['GF', 'DF'],
    popular: true,
  },
  {
    name: 'Salmon Tartare',
    desc: 'Avocado cream, crispy root chips and baby cilantro',
    category: 'Starters',
    tags: ['GF', 'DF'],
  },
  {
    name: 'Lemony French Beans',
    desc: 'Niagara prosciutto, Toscana cheese and walnut vinaigrette',
    category: 'Starters',
    tags: ['GF'],
  },
  {
    name: 'Maple Ginger Cedar-Planked Pacific Salmon',
    desc: 'Roasted fingerling potatoes',
    category: 'Mains',
    tags: ['GF', 'DF'],
    popular: true,
  },
  {
    name: 'Black Cod',
    desc: 'Champagne yuzu miso sauce on purple sweet potato mash with crispy taro root chip',
    category: 'Mains',
    tags: ['GF', 'DF'],
    popular: true,
  },
  {
    name: 'Filet Mignon',
    desc: 'English mustard butter, Pinot Noir jus and garlic mashed potatoes',
    category: 'Mains',
    tags: ['GF'],
    popular: true,
  },
  {
    name: 'Seared Duck Breast',
    desc: 'Fig jus, forbidden rice and candied kumquat',
    category: 'Mains',
    tags: ['GF', 'DF'],
  },
  {
    name: 'Pistachio Encrusted Lamb',
    desc: 'Pomegranate jus and sunset scalloped potatoes',
    category: 'Mains',
    tags: ['GF'],
    popular: true,
  },
  {
    name: 'Roasted Tofu Medallions',
    desc: 'Roasted garlic, mushroom and shallot jus',
    category: 'Mains',
    tags: ['V', 'GF', 'DF'],
  },
  {
    name: 'King Oyster Mushroom "Scallops"',
    desc: 'Candied vegan bacon with pea purée and quinoa',
    category: 'Mains',
    tags: ['V', 'GF', 'DF'],
  },
  {
    name: 'Pur Noir Chocolate Mousse Cake',
    desc: 'Served with raspberry coulis and berries',
    category: 'Desserts',
    tags: ['V'],
    popular: true,
  },
  {
    name: 'Vanilla Cheesecake',
    desc: 'Served with caramel sauce and berries',
    category: 'Desserts',
    tags: ['V'],
  },
  {
    name: 'Vanilla Panna Cotta Cake',
    desc: 'With macaron, served with mango coulis',
    category: 'Desserts',
    tags: ['V', 'GF'],
    popular: true,
  },
  {
    name: 'La Mancha Saffron Crème Brûlée Cake',
    desc: 'Served with blackberry coulis',
    category: 'Desserts',
    tags: ['V', 'GF'],
  },
  {
    name: 'Assorted Macarons & Truffles',
    desc: 'Shareable platters for the table',
    category: 'Desserts',
    tags: ['V'],
  },
]

const TAG_COLORS = {
  V: { bg: '#eef3e7', color: '#4a7a1e' },
  GF: { bg: '#f5f0e0', color: '#8a6020' },
  DF: { bg: '#e8f0f8', color: '#2a5a8a' },
}

export default function SitDownPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeFilter, setActiveFilter] = useState(null)

  const filtered = MENU.filter(item => {
    const catMatch = activeCategory === 'All' || item.category === activeCategory
    const tagMatch = !activeFilter || item.tags.includes(activeFilter)
    return catMatch && tagMatch
  })

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ paddingTop: '120px', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">
            <div>
              <h1 className="font-display leading-none mb-6 text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]" style={{ color: '#1a1a1a' }}>
                SIT DOWN<br />
                <span style={{ color: 'var(--gold)' }}>DINNER.</span>
              </h1>
              <div className="lg:hidden mb-6 grid grid-cols-2 gap-2">
                {[
                  { src: '/sitdown/beet-carpaccio.jpeg', alt: 'Beet Carpaccio' },
                  { src: '/sitdown/scallop.jpeg', alt: 'Scallop' },
                  { src: '/sitdown/beef.jpeg', alt: 'Beef' },
                  { src: '/sitdown/small-black-cod.jpeg', alt: 'Black Cod' },
                ].map(img => (
                  <div key={img.alt} style={{ overflow: 'hidden', aspectRatio: '4/3' }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full"
                      style={{ objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="hidden lg:block font-display text-lg tracking-[0.25em] uppercase px-10 py-4 text-center"
                  style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-dim)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="mt-0">
              <p className="font-serif text-xl mb-4" style={{ color: '#1a1a1a', lineHeight: 1.7 }}>
                An elevated dining experience where your guests are seated, served, and savoured. Custom menus tailored to your exact vision — from first course to dessert.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Starting from $69 per person. All menus are fully customizable. Contact us for a personalized quote.
              </p>
              <a
                href="https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-SIt-Down-Dinner.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-[0.2em] uppercase block w-full text-center py-4 mt-6 sm:inline-block sm:w-auto sm:px-8"
                style={{ border: '1px solid rgba(0,0,0,0.2)', color: '#1a1a1a', textDecoration: 'none' }}
              >
                Download PDF ↓
              </a>
            </div>
          </div>
        </div>

 
      </div>

      {/* Photo strip */}
      <div className="hidden lg:grid grid-cols-4" style={{ background: '#1a1a1a' }}>
        {[
          { src: '/sitdown/beet-carpaccio.jpeg', alt: 'Beet Carpaccio' },
          { src: '/sitdown/scallop.jpeg', alt: 'Scallop' },
          { src: '/sitdown/beef.jpeg', alt: 'Beef' },
          { src: '/sitdown/small-black-cod.jpeg', alt: 'Black Cod' },
        ].map(img => (
          <div key={img.alt} style={{ overflow: 'hidden', height: '320px' }}>
            <img src={img.src} alt={img.alt} className="w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        ))}
      </div>

      {/* Category tabs */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.08)', position: 'sticky', top: '120px', zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-display tracking-[0.15em] uppercase flex-shrink-0"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  padding: 'clamp(1rem, 2vw, 1.4rem) clamp(1.1rem, 2vw, 1.8rem)',
                  color: activeCategory === cat ? 'var(--gold)' : 'var(--cream-dim)',
                  borderBottom: activeCategory === cat ? '2px solid var(--gold)' : '2px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dietary filters */}
      <div style={{ background: '#f5f5f5', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-3 flex gap-2 flex-wrap items-center">
          <span className="font-display text-base tracking-[0.15em]" style={{ color: 'var(--cream-dim)' }}>FILTER:</span>
          {[
            { key: null, label: 'All' },
            { key: 'V', label: 'Vegetarian' },
            { key: 'GF', label: 'Gluten-Free' },
            { key: 'DF', label: 'Dairy-Free' },
          ].map(f => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.key)}
              className="font-display text-base tracking-[0.1em] px-4 py-2"
              style={{
                background: activeFilter === f.key ? 'var(--cream)' : 'transparent',
                color: activeFilter === f.key ? '#ffffff' : 'var(--cream-dim)',
                border: '1px solid rgba(0,0,0,0.15)',
                cursor: 'pointer',
              }}
            >
              {f.label}
            </button>
          ))}
          <span className="font-display text-base ml-1" style={{ color: 'var(--cream-dim)' }}>
            {filtered.length} items
          </span>
        </div>
      </div>

      {/* Menu items */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10">
          <div className="grid md:grid-cols-2 gap-0">
            {filtered.map(item => (
              <div
                key={item.name}
                className="py-5 px-2"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
              >
                <div className="flex items-start gap-2 mb-1 flex-wrap">
                  <span className="font-display" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', color: 'var(--cream)', letterSpacing: '0.03em', lineHeight: 1.2 }}>{item.name}</span>
                  {item.popular && (
                    <span className="font-display text-xs tracking-[0.1em] px-2 py-0.5 flex-shrink-0" style={{ background: 'var(--gold)', color: '#ffffff' }}>POPULAR</span>
                  )}
                </div>
                <div className="flex gap-1 flex-wrap mb-1">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-display text-xs px-2 py-0.5" style={{ background: TAG_COLORS[tag]?.bg, color: TAG_COLORS[tag]?.color }}>{tag}</span>
                  ))}
                </div>
                <p style={{ color: 'var(--cream-dim)', fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)', lineHeight: 1.5 }}>{item.desc}</p>
                <span className="font-display mt-2 inline-block" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', color: 'var(--gold)' }}>
                  {item.category === 'Starters' ? 'Starter' : item.category === 'Desserts' ? 'Dessert' : 'Main'}
                </span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-serif py-16" style={{ color: 'var(--cream-dim)' }}>No items match your current filters.</p>
          )}
        </div>
      </div>

      {/* Image band */}
      <div style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Sit Down Dinner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pricing note */}
      <div style={{ background: '#f5f5f5', borderTop: '3px solid var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {[
              { label: 'Pricing', value: 'Starting from $69.00 per person. Prices do not include HST.' },
              { label: 'Customization', value: 'All menus are fully customizable to your dietary needs and event vision.' },
              { label: 'Service', value: 'Staffing, rentals, and service fees are additional. Contact us for a full quote.' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="py-8 px-6"
                style={{ borderBottom: i < 2 ? '1px solid rgba(130,167,55,0.15)' : 'none' }}
              >
                <p className="font-display tracking-[0.3em] mb-3" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: 'var(--gold)' }}>{item.label.toUpperCase()}</p>
                <p className="font-serif" style={{ color: 'var(--cream-dim)', lineHeight: 1.7, fontSize: '1.05rem' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
          <h2 className="font-display leading-none mb-6 text-[clamp(3rem,8vw,5rem)] sm:text-[clamp(2.5rem,6vw,5rem)]" style={{ color: '#ffffff' }}>
            READY TO PLAN YOUR<br />
            <span style={{ color: 'var(--gold)' }}>SIT DOWN DINNER?</span>
          </h2>
          <p className="font-serif text-lg mb-8" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
            Tell us about your event and we'll craft a custom dinner menu around your vision.
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

      {/* Sticky mobile CTA */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4"
        style={{ background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 -4px 20px rgba(0,0,0,0.08)' }}
      >
        <Link
          href="/contact"
          className="font-display text-base tracking-[0.2em] uppercase block text-center py-4 w-full"
          style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
        >
          Book Now
        </Link>
      </div>

      <Footer />
    </main>
  )
}
