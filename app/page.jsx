import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const services = [
    {
      title: 'Film & TV Catering',
      desc: 'On-set catering for productions across Toronto and the GTA with 9 fully-mobile kitchens.',
      img: 'https://dmcatering.ca/wp-content/uploads/2021/05/TRAILER-PIC.jpg',
      href: '/film-tv',
      cta: 'Film & TV Catering',
    },
    {
      title: 'Social & Corporate Events',
      desc: 'From intimate cocktail parties to large-scale galas — seamless service and unforgettable menus.',
      img: '/stations/stations1.jpg',
      href: '/events',
      cta: 'Events Catering',
    },
    {
      title: 'Custom Menus',
      desc: "Hors d'oeuvres, stations, and full sit-down dinners crafted to your exact vision.",
      img: '/sitdown/beef.jpeg',
      href: '/custom-menus',
      cta: 'Build My Menu',
    },
  ]

  const stats = [
    { value: '400+', label: 'Productions', note: 'Film & TV sets fed across Toronto and the GTA' },
    { value: '25+', label: 'Years', note: 'Serving the industry since 1998' },
    { value: '9', label: 'Mobile Kitchens', note: 'State-of-the-art on-location cooking rigs' },
  ]

  const logos = [
    'cisco.com',
    'deloitte.com',
    'scotiabank.com',
    'sony.com',
    'harley-davidson.com',
    'labatt.com',
    'pinewoodgroup.com',
    'panavision.com',
    'georgebrown.ca',
    'centennialcollege.ca',
    'cifinancial.com',
    'brainstation.io',
  ]

  return (
    <main>
      <Navbar />
      {/* Hero */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 55%, #0f0f0f 100%)',
          color: '#ffffff',
          paddingTop: '160px',
          paddingBottom: '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1">
              <h1
                className="font-display leading-none mb-6 text-[clamp(3.4rem,9vw,6.5rem)]"
                style={{ color: '#ffffff' }}
              >
                FEED EVERY CREW.<br />
                <span style={{ color: 'var(--gold)' }}>ELEVATE EVERY EVENT.</span>
              </h1>
              <p className="font-serif text-lg mb-8" style={{ color: '#ffffff', lineHeight: 1.8, maxWidth: '560px' }}>
                From film sets to private celebrations, we deliver bold menus, flawless logistics, and a team that treats every guest like a VIP.
              </p>
              <div className="lg:hidden grid grid-cols-2 gap-3 mb-8">
                <div className="col-span-2" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src="/team-dmc-hero.jpg" alt="David Mintz Catering" className="w-full h-full" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src="/stations/scallops.jpg" alt="Scallops" className="w-full h-full" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                  <img src="/sitdown/scallop.jpeg" alt="Sit Down" className="w-full h-full" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-12"
                  style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
                >
                  Book Now
                </a>
                <a
                  href="/custom-menus"
                  className="font-display text-sm tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-10"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff', textDecoration: 'none' }}
                >
                  View Menus
                </a>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-3 mt-8 lg:mt-0">
              <div className="col-span-2" style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src="/team-dmc-hero.jpg" alt="David Mintz Catering" className="w-full h-full" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src="/stations/scallops.jpg" alt="Scallops" className="w-full h-full" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src="/sitdown/scallop.jpeg" alt="Sit Down" className="w-full h-full" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#ffffff', borderTop: '3px solid var(--gold)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map(s => (
              <div key={s.label} style={{ border: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="p-6">
                  <p className="font-display text-5xl" style={{ color: 'var(--cream)', lineHeight: 1 }}>{s.value}</p>
                  <p className="font-display tracking-[0.2em] mt-2 mb-3" style={{ color: 'var(--gold)' }}>{s.label.toUpperCase()}</p>
                  <p style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-12">
            <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)]" style={{ color: 'var(--cream)' }}>
              EVERYTHING YOU NEED.<br />
              <span style={{ color: 'var(--gold)' }}>ONE TEAM.</span>
            </h2>
            <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
              Full-service catering with a production-minded crew. We handle timing, logistics, and service so you can stay focused on the moment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map(card => (
              <div key={card.title} className="flex flex-col" style={{ border: '1px solid rgba(130,167,55,0.2)', background: '#ffffff' }}>
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={card.img} alt={card.title} className="w-full h-full" style={{ objectFit: 'cover' }} />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display text-3xl mb-3" style={{ color: 'var(--cream)' }}>{card.title}</h3>
                  <p style={{ color: 'var(--cream-dim)', lineHeight: 1.7, marginBottom: '2.5rem' }}>{card.desc}</p>
                  <a
                    href={card.href}
                    className="font-display text-base tracking-[0.2em] uppercase block text-center py-4 mt-auto"
                    style={{ background: 'var(--cream)', color: '#ffffff', textDecoration: 'none' }}
                  >
                    {card.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Film & TV */}
      <section style={{ background: '#101010' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)]" style={{ color: '#ffffff' }}>
                ON SET.<br />
                <span style={{ color: 'var(--gold)' }}>ON TIME.</span>
              </h2>
              <p className="font-serif text-xl mt-6" style={{ color: '#ffffff', lineHeight: 1.8 }}>
                25+ years feeding casts and crews. We move fast, serve hot, and keep productions on schedule.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Crew Breakfast', 'Hot Lunch', 'Craft Services', 'Dietary Friendly'].map(item => (
                  <div key={item} className="font-display text-base tracking-[0.2em]" style={{ color: '#ffffff' }}>
                    {item.toUpperCase()}
                  </div>
                ))}
              </div>
              <a
                href="/film-tv"
                className="font-display text-base tracking-[0.25em] uppercase inline-block mt-8 px-10 py-4"
                style={{ border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff', textDecoration: 'none' }}
              >
                Explore Film & TV →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src="/stations/sweet-and-spicy-chicken.jpg" alt="Chicken" className="w-full h-full" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src="/hors-doeuvres/duck.jpeg" alt="Duck" className="w-full h-full" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)] mb-10" style={{ color: 'var(--cream)' }}>
            TRUSTED BY<br />
            <span style={{ color: 'var(--gold)' }}>THE BEST.</span>
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
            {logos.map(domain => (
              <div
                key={domain}
                className="flex items-center justify-center p-6"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)', minHeight: '90px' }}
              >
                <img
                  src={`https://logo.clearbit.com/${domain}`}
                  alt={domain}
                  style={{ height: '28px', width: 'auto', maxWidth: '120px', filter: 'brightness(0)', opacity: 1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="flex flex-col items-center" style={{ minHeight: '360px' }}>
            <div>
              <h2 className="font-display leading-none mb-8 text-[clamp(3rem,7vw,5rem)]" style={{ color: '#ffffff' }}>
                READY TO PLAN<br />
                <span style={{ color: 'var(--gold)' }}>YOUR EVENT?</span>
              </h2>
              <p className="font-serif text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.8 }}>
                Tell us about your event and we’ll craft a menu and service plan tailored to your guests.
              </p>
            </div>
            <a
              href="/contact"
              className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-14"
              style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none', marginTop: 'auto' }}
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
