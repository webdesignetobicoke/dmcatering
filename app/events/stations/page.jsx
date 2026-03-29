'use client'
import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

const STATIONS = [
  {
    title: 'Pasta Station',
    items: [
      'Crisp Caesar Salad with Pancetta and Grana Padano in a Phyllo Cup',
      'Butternut Squash Agnolotti with Candied Shallots and a Maple Cream Sauce',
      'Lobster Mac & Cheese with Truffle Oil',
      'Gemelli with Vegan Veggie Balls, Spinach and Peppers with Puttanesca Sauce',
      'Chili Flakes, Grated Parmesan and Spicy Oil on the Side',
    ],
    category: 'Comfort',
  },
  {
    title: 'Southern BBQ Station',
    items: [
      'Coleslaw',
      'Buttermilk Fried Chicken with Waffles and Maple Crema',
      'Pulled Brisket Sloppy Joe with Crispy Onion Strings',
      'BBQ Tempeh, Sautéed Onions and Mushrooms Sloppy Joe',
    ],
    category: 'Comfort',
  },
  {
    title: 'Cheese & Charcuterie',
    items: [
      'Prosciutto, Bresaola, Encrusted Salamis and Dried Sausages',
      'Grilled Vegetable Antipasto, Assorted Mustards and Spiced Olives',
      'Artisan Canadian and International Cheeses',
      'Fresh and Dried Fruit with Breads, Flatbreads and Crackers',
    ],
    category: 'Platters',
  },
  {
    title: 'Mexican Station',
    items: [
      'Carne Asada Taco topped with Cilantro Lime Slaw and Crema',
      'Chicken Tinga Taco topped with Red Cabbage Slaw and Crema',
      'Fish Taco topped with Cilantro Lime Slaw and Crema',
      'Roasted Vegetable and Queso Quesadilla',
      'Served with Rustic Ancho Salsa, Salsa Verde and Guacamole',
    ],
    category: 'International',
  },
  {
    title: 'Thai Curry Station',
    items: [
      'Chicken Peanut Satay',
      'Banana Leaf Monkfish',
      'Golden Squash Coconut Curry with Tofu',
      'Vegetable Spring Roll with Nuoc Nam',
      'Jasmine Rice',
      'Served with Mango & Papaya Slaw and Hot Sauces',
    ],
    category: 'International',
  },
  {
    title: 'Seafood Station',
    items: [
      'Butter Poached Cod with Prosciutto Crisps over Braised Lentils with Lemon Tarragon Sauce',
      'Salmon Tartare with Sauce Gribiche and Chive on Crostini',
      'Seared Scallops on Cauliflower Purée with Chive Oil & Caviar',
      'Orange Cilantro Shrimp topped with Avocado, Orange and Red Onion Relish',
    ],
    category: 'Seafood',
  },
  {
    title: 'Poultry Station',
    items: [
      'Pan Roasted Duck Breast on Cauliflower Purée with Sautéed Swiss Chard and Orange Honey Gastrique',
      'Confit Leg of Chicken Stuffed with Chorizo and Grilled Corn and Bulgur with Sherry Glace',
      'Honey Glazed Quail on Seasonal Cassoulet topped with Micro Greens',
    ],
    category: 'Meat',
  },
  {
    title: 'Comfort Food Station',
    items: [
      'Meatballs in Five Mushroom and Merlot Sauce',
      'Sweet and Spicy Braised Chicken',
      'BBQ Pulled Pork',
      'BBQ Vegan TVP',
      'Mashed Sweet Potatoes',
      'Garlic Mashed Potatoes',
      'Creamy Polenta',
    ],
    category: 'Comfort',
  },
  {
    title: 'Chinese Station',
    items: [
      'Vegetable Dumpling Spoons',
      'Pork Dumpling Spoons',
      'General Tso Chicken Skewers',
      'Lemon Beef Skewers',
      'Egg Fried Rice',
      'Spring Rolls',
    ],
    category: 'International',
  },
  {
    title: 'Bollywood Station',
    items: [
      'Vegetable Samosas',
      'Butter Chicken',
      'Lamb Vindaloo',
      'Palak Paneer (Spinach and Fenugreek with Paneer)',
      'Raita, Mango Chutney and Naan',
    ],
    category: 'International',
  },
  {
    title: 'Moroccan Station',
    items: [
      'Grilled Flatbreads with Roasted Red Pepper Hummus',
      'Mint and Lemon Couscous',
      'Halloumi, Beet & Lentil Salad with Pomegranate & Sunflower Seeds',
      'Harissa Chicken Skewers with Cherry Tomatoes and Mint',
      'Paprika Prawns with Fennel Slaw',
      'Ras El Hanout Lamb Chops',
    ],
    category: 'International',
  },
  {
    title: 'Rosemary Flatbreads',
    items: [
      'Smoked Gouda and Roasted Peppers',
      'Prosciutto, Buffalo Mozzarella, Roasted Garlic Oil & Arugula',
      'Peppered Beef Tenderloin with Horseradish Aioli',
      'Spicy Italian Sausage with Rapini and Pickled Peppers',
    ],
    category: 'Comfort',
  },
  {
    title: 'Slider Station',
    items: [
      'Kale, Dried Currants, Shaved Pecorino and Lemon Dressing in a Phyllo Cup',
      'Beef Slider, Pepper Jack Cheese, Jalapeño Jam, Chipotle Aioli and Tortilla Strips',
      'Lamb Slider with Fig Jam, Whipped Ricotta, Pistachio Chimichurri and Pickled Radish',
      'Six Mushroom Ragout Slider on a Butter Bun with Truffle Aioli and Crispy Onion',
    ],
    category: 'Comfort',
  },
  {
    title: 'Cosmo Station',
    items: [
      'Sesame Encrusted Atlantic Salmon with Miso Sauce and Sticky Rice',
      'Juniper Marinated Lamb Chop with Spiced Sweet Potato Mash and Cucumber Mint Raita',
      'Braised Beef Cheeks with Maple Bourbon Demi Glaze on Mashed Potato with Lardon',
    ],
    category: 'Meat',
  },
]

const CATEGORIES = ['All', 'International', 'Comfort', 'Meat', 'Seafood', 'Platters']

export default function StationsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = STATIONS.filter(s => activeCategory === 'All' || s.category === activeCategory)

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <div style={{ paddingTop: '120px', background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-start">
            <div>
              <h1 className="font-display leading-none mb-6 text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]" style={{ color: '#1a1a1a' }}>
                FOOD<br />
                <span style={{ color: 'var(--gold)' }}>STATIONS.</span>
              </h1>
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
                Create an immersive experience where guests mix, mingle and explore a curated variety of live food stations — each one a destination in itself.
              </p>
              <p style={{ color: 'rgba(0,0,0,0.55)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Stations are priced from $9 to $22 per person. Mix and match stations to build your perfect event menu. Contact us for a personalized quote.
              </p>
              <a
                href="https://dmcatering.ca/wp-content/uploads/2020/01/DMC-2019-Stations.pdf"
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', animation: 'bounce 1.8s infinite' }}>
            <span className="font-display text-base tracking-[0.2em]" style={{ color: 'var(--gold)' }}>SCROLL</span>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
              <path d="M2 5L8 11L14 5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <style>{`@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }`}</style>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-4" style={{ background: '#1a1a1a' }}>
        {[
          { src: '/stations/stations1.jpg', alt: 'Stations' },
          { src: '/stations/scallops.jpg', alt: 'Scallops' },
          { src: '/stations/sweet-and-spicy-chicken.jpg', alt: 'Sweet and Spicy Chicken' },
          { src: '/stations/dessert.jpg', alt: 'Dessert' },
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

      {/* Station cards */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map(station => (
              <div
                key={station.title}
                className="p-8"
                style={{ border: '1px solid rgba(130,167,55,0.2)', background: 'rgba(130,167,55,0.02)' }}
              >
                <h3 className="font-display mb-5" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', color: 'var(--cream)', letterSpacing: '0.05em' }}>
                  {station.title}
                </h3>
                <ul className="space-y-2">
                  {station.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '0.55em', display: 'inline-block' }} />
                      <span style={{ color: 'var(--cream-dim)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.6 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center font-serif py-16" style={{ color: 'var(--cream-dim)' }}>No stations match your current filter.</p>
          )}
        </div>
      </div>

      {/* Image band */}
      <div style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80"
          alt="Food Stations"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pricing note */}
      <div style={{ background: '#f5f5f5', borderTop: '3px solid var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {[
              { label: 'Pricing', value: 'Stations are priced from $9.00 to $22.00 per person. Prices do not include HST.' },
              { label: 'Customization', value: 'Mix and match stations to suit your event. All menus are fully customizable.' },
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
            READY TO BUILD<br />
            <span style={{ color: 'var(--gold)' }}>YOUR STATIONS?</span>
          </h2>
          <p className="font-serif text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Tell us about your event and we'll build a custom station lineup around your vision.
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
