'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

const CATEGORIES = ['All', 'Vegetarian', 'Meat', 'Seafood', 'Platters', 'Stations']

const MENU = [
  { name: 'Bruschetta Trio', desc: 'Tomato basil, roasted pepper, olive tapenade', price: '3.00 / piece', tags: ['V'], category: 'Vegetarian' },
  { name: 'Risotto Cake', desc: 'Wild forest mushroom, lemon aioli', price: '3.00 / piece', tags: ['V', 'GF'], category: 'Vegetarian' },
  { name: 'Caprese Skewer', desc: 'Fresh bocconcini, heirloom tomato, basil oil', price: '2.75 / piece', tags: ['V', 'GF'], category: 'Vegetarian' },
  { name: 'Goat Cheese Crostini', desc: 'Caramelized onion, fig jam, walnut', price: '3.00 / piece', tags: ['V'], category: 'Vegetarian' },
  { name: 'Vegetable Spring Roll', desc: 'Sweet chili dipping sauce', price: '2.50 / piece', tags: ['V'], category: 'Vegetarian' },
  { name: 'Stuffed Mushroom', desc: 'Spinach, ricotta, roasted garlic', price: '3.25 / piece', tags: ['V', 'GF'], category: 'Vegetarian' },
  { name: 'Mini Quiche', desc: 'Caramelized leek and gruyère', price: '2.75 / piece', tags: ['V'], category: 'Vegetarian' },
  { name: 'Avocado Toast Bite', desc: 'Sourdough, smashed avocado, everything spice', price: '3.00 / piece', tags: ['V'], category: 'Vegetarian', popular: true },
  { name: 'Beef Tenderloin Crostini', desc: 'Horseradish cream, pickled shallot', price: '4.50 / piece', tags: ['GF'], category: 'Meat', popular: true },
  { name: 'Chicken Satay', desc: 'Peanut sauce, cucumber ribbon', price: '3.25 / piece', tags: ['GF'], category: 'Meat' },
  { name: 'Pulled Pork Slider', desc: 'Brioche bun, apple slaw, BBQ glaze', price: '4.00 / piece', tags: [], category: 'Meat' },
  { name: 'Duck Confit Tartlet', desc: 'Puff pastry, cherry compote, micro herbs', price: '4.75 / piece', tags: [], category: 'Meat', popular: true },
  { name: 'Lamb Chop Lollipop', desc: 'Rosemary, Dijon, mint chimichurri', price: '5.50 / piece', tags: ['GF'], category: 'Meat' },
  { name: 'Prosciutto Melon Skewer', desc: 'Cantaloupe, fresh mint, balsamic drizzle', price: '3.50 / piece', tags: ['GF'], category: 'Meat' },
  { name: 'Beef Slider', desc: 'Aged cheddar, caramelized onion, special sauce', price: '4.25 / piece', tags: [], category: 'Meat' },
  { name: 'Bacon-Wrapped Date', desc: 'Manchego stuffed, maple glaze', price: '3.25 / piece', tags: ['GF'], category: 'Meat', popular: true },
  { name: 'Shrimp Cocktail', desc: 'Classic cocktail sauce, lemon', price: '3.75 / piece', tags: ['GF', 'DF'], category: 'Seafood', popular: true },
  { name: 'Smoked Salmon Blini', desc: 'Crème fraîche, capers, dill', price: '4.00 / piece', tags: [], category: 'Seafood' },
  { name: 'Tuna Tartare Spoon', desc: 'Sesame, avocado, ponzu', price: '4.25 / piece', tags: ['GF', 'DF'], category: 'Seafood', popular: true },
  { name: 'Crab Cake', desc: 'Remoulade, micro greens', price: '5.00 / piece', tags: ['GF'], category: 'Seafood' },
  { name: 'Lobster Bisque Shot', desc: 'Warm shooter, chive cream', price: '4.50 / piece', tags: ['GF'], category: 'Seafood' },
  { name: 'Seared Scallop', desc: 'Cauliflower purée, pancetta, lemon oil', price: '5.50 / piece', tags: ['GF'], category: 'Seafood' },
  { name: 'Oyster on the Half Shell', desc: 'Mignonette, cocktail sauce, lemon', price: '4.00 / piece', tags: ['GF', 'DF'], category: 'Seafood' },
  { name: 'Charcuterie Board', desc: 'Cured meats, artisan cheeses, house pickles, crackers, seasonal fruit', price: 'From $18 / person', tags: [], category: 'Platters', popular: true },
  { name: 'Cheese & Fruit Display', desc: 'Selection of local and imported cheeses, fresh and dried fruit, honeycomb, nuts', price: 'From $14 / person', tags: ['V', 'GF'], category: 'Platters' },
  { name: 'Crudité Platter', desc: 'Seasonal vegetables, house-made hummus, tzatziki, bagna cauda', price: 'From $10 / person', tags: ['V', 'GF', 'DF'], category: 'Platters' },
  { name: 'Sushi Display', desc: 'Assorted rolls, nigiri, sashimi, pickled ginger, wasabi, soy', price: 'From $22 / person', tags: ['GF', 'DF'], category: 'Platters', popular: true },
  { name: 'Seafood Tower', desc: 'Shrimp, oysters, crab claws, smoked salmon, lobster tail', price: 'From $38 / person', tags: ['GF', 'DF'], category: 'Platters' },
  { name: 'Carving Station', desc: 'Whole roasted tenderloin or prime rib, accompaniments, artisan rolls', price: 'From $28 / person', tags: ['GF'], category: 'Stations', popular: true },
  { name: 'Pasta Station', desc: 'Two pasta varieties, four sauces, toppings bar — made to order', price: 'From $18 / person', tags: ['V'], category: 'Stations' },
  { name: 'Slider Bar', desc: 'Mini beef, chicken, and veggie sliders, condiment station, fries', price: 'From $20 / person', tags: [], category: 'Stations' },
  { name: 'Oyster Shucking Station', desc: 'Live oyster bar with shucker, full accompaniments', price: 'From $32 / person', tags: ['GF', 'DF'], category: 'Stations' },
  { name: 'Taco Bar', desc: 'Chicken, beef, and vegetarian fillings, house-made salsas, all accompaniments', price: 'From $22 / person', tags: [], category: 'Stations', popular: true },
]

const TAG_COLORS = {
  V: { bg: '#eef3e7', color: '#4a7a1e' },
  GF: { bg: '#f5f0e0', color: '#8a6020' },
  DF: { bg: '#e8f0f8', color: '#2a5a8a' },
}

export default function HorsDoeuvresPage() {
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
                HORS<br />
                <span style={{ color: 'var(--gold)' }}>D'OEUVRES.</span>
              </h1>
              <div className="lg:hidden mb-6">
                <div style={{ overflow: 'hidden', borderRadius: '8px', aspectRatio: '4/3' }}>
                  <img
                    src="/hors-doeuvres/duck.jpeg"
                    alt="Hors d'oeuvres"
                    className="w-full h-full"
                    style={{ objectFit: 'cover', display: 'block' }}
                  />
                </div>
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
                Elegant passed and stationed selections crafted by our executive chef — tailored to your event, your guests, and your vision.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Minimum order quantities apply. All menus are fully customizable. Pricing is per piece unless noted. Contact us for a personalized quote.
              </p>
              <a
                href="https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Hors-D_Oeuvres.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm tracking-[0.2em] uppercase block w-full text-center py-4 mt-6 sm:inline-block sm:w-auto sm:px-8"
                style={{ border: '1px solid rgba(0,0,0,0.2)', color: '#1a1a1a', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'; e.currentTarget.style.color = '#1a1a1a' }}
              >
                Download PDF ↓
              </a>

            </div>
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="lg:hidden flex justify-center pb-6">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              animation: 'bounce 1.8s infinite',
            }}
          >
            <span className="font-display text-base tracking-[0.2em]" style={{ color: 'var(--gold)' }}>SCROLL</span>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M2 5L8 11L14 5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}</style>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-4" style={{ background: '#1a1a1a' }}>
        {[
          { src: "/hors-doeuvres/enoki-quail-egg.jpeg", alt: 'Enoki Quail Egg' },
          { src: "/hors-doeuvres/beef-tartare.jpeg", alt: 'Beef Tartare' },
          { src: "/hors-doeuvres/duck.jpeg", alt: 'Duck' },
          { src: "/hors-doeuvres/figs.jpeg", alt: 'Figs' },
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
            {filtered.map((item) => (
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
                    <span key={tag} className="font-display text-sm px-3 py-1" style={{ background: TAG_COLORS[tag]?.bg, color: TAG_COLORS[tag]?.color }}>{tag}</span>
                  ))}
                </div>
                <p style={{ color: 'var(--cream-dim)', fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)', lineHeight: 1.5 }}>{item.desc}</p>
                <span className="font-display mt-2 inline-block" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', color: 'var(--gold)' }}>{item.price}</span>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-serif py-16" style={{ color: 'var(--cream-dim)' }}>No items match your current filters.</p>
          )}
        </div>
      </div>

      {/* Pricing note */}
      <div style={{ background: '#f5f5f5', borderTop: '3px solid var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {[
              { label: 'Minimums', value: 'Minimum 25 pieces per selection. Event minimums vary by guest count.' },
              { label: 'Customization', value: 'All menus are fully customizable to your dietary needs and preferences.' },
              { label: 'Pricing', value: 'Prices are per piece unless noted. Staffing, rentals, and service fees are additional.' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="py-8 px-6"
                style={{
                  borderBottom: i < 2 ? '1px solid rgba(130,167,55,0.15)' : 'none',
                  borderRight: 'none',
                }}
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
            READY TO BUILD YOUR<br />
            <span style={{ color: 'var(--gold)' }}>HORS D'OEUVRES?</span>
          </h2>
          <p className="font-serif text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Tell us about your event and we'll build a custom menu around your vision.
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
