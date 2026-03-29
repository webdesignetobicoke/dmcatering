import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const productionsRow1 = [
  { title: 'The Shape of Water', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-shape-of-water-1.jpg' },
  { title: 'Spotlight', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/spotlight.jpeg' },
  { title: 'Get Rich or Die Tryin\'', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/Get-rich-or-die-tryin.jpg' },
  { title: 'Ararat', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/ararat.jpg' },
  { title: 'XXX: Return of Xander Cage', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/xxx–return-of-xander-cage.jpg' },
  { title: 'Wrong Turn', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/wrong-turn.jpg' },
  { title: 'Welcome to Mooseport', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/welcome-to-mooseport.jpg' },
  { title: 'Used People', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/used-people.jpg' },
  { title: 'Urban Legend', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/urban-legend.jpg' },
  { title: 'Undercover Brother', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/undercover-brother.jpg' },
  { title: 'The Tuxedo', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-tuxedo.jpg' },
  { title: "The Time Traveler's Wife", src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-time-travelers-wife.jpg' },
  { title: 'The Skulls', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-skulls.jpg' },
  { title: 'The Sentinel', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-sentinel.jpg' },
  { title: 'The Santa Clause', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-santa-clause.jpg' },
  { title: 'The Rocky Horror Picture Show', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-rocky-horror-picture-show.jpg' },
  { title: 'The Recruit', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-recruit.jpg' },
  { title: 'The Pacifier', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-pacifier.jpg' },
  { title: 'The Love Guru', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-love-guru.jpg' },
  { title: 'The Hurricane', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-hurricane.jpg' },
  { title: 'A History of Violence', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-history-of-violence.jpg' },
  { title: 'The Corruptor', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-corruptor.jpg' },
  { title: 'The Comey Rule', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-comey-rule-1.jpg' },
  { title: 'The Boondock Saints', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-boondock-saints.jpg' },
  { title: 'Taken', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/taken.jpg' },
  { title: 'Suits', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/suits.jpg' },
  { title: 'Spin', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/spin.jpg' },
  { title: 'Sneakerella', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/sneakerella.jpg' },
  { title: 'Shadowhunters', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/shadow-hunters.jpg' },
  { title: 'Sex/Life', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/sex-life.jpg' },
]

const productionsRow2 = [
  { title: 'Serendipity', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/serendipity.jpg' },
  { title: 'Searching for Bobby Fischer', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/searching-for-bobby-fischer.jpg' },
  { title: "Schitt's Creek", src: 'https://dmcatering.ca/wp-content/uploads/2021/04/schitts-creek-1.jpg' },
  { title: 'Scary Stories', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/scary-stories.jpg' },
  { title: 'Salvation', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/salvation.jpg' },
  { title: 'Run', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/run.jpg' },
  { title: 'Reign', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/reign.jpg' },
  { title: 'Poltergeist', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/poltergeist.jpg' },
  { title: 'PCU', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/pcu.jpg' },
  { title: 'Pacific Rim', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/pacific-rim.jpg' },
  { title: 'Orphan Black', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/orphan-black.jpg' },
  { title: 'Nurses', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/nurses-1.jpg' },
  { title: 'Novice', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/novice.jpg' },
  { title: 'My Big Fat Greek Wedding 2', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/my-big-fat-greek-wedding-2.jpg' },
  { title: 'My Big Fat Greek Wedding', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/my-big-fat-greek-wedding.jpg' },
  { title: 'Murder at 1600', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/murder-at-1600.jpg' },
  { title: 'Mrs. Winterbourne', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/mrs-winterbourne.jpg' },
  { title: 'Mrs. America', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/mrs-america.jpg' },
  { title: "Mr. Magorium's Wonder Emporium", src: 'https://dmcatering.ca/wp-content/uploads/2021/04/mr-magoriums-wonder-emporium.jpg' },
  { title: 'Mimic', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/mimic.jpg' },
  { title: 'The Man from Toronto', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/man-from-toronto.jpg' },
  { title: 'Lullaby', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/lullaby-1.jpg' },
  { title: 'Loser', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/loser.jpg' },
  { title: 'Locke & Key', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/locke-key.jpg' },
  { title: 'Life with Mikey', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/life-with-mikey.jpg' },
  { title: 'Let It Snow', src: 'https://dmcatering.ca/wp-content/uploads/2021/04/let-it-snow.jpg' },
]

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
          <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)] mb-12" style={{ color: 'var(--cream)' }}>
            EVERYTHING YOU NEED.<br />
            <span style={{ color: 'var(--gold)' }}>ONE TEAM.</span>
          </h2>

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
      <section style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)]" style={{ color: 'var(--cream)' }}>
                ON SET.<br />
                <span style={{ color: 'var(--gold)' }}>ON TIME.</span>
              </h2>
              <p className="font-serif text-xl mt-6" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
                25+ years feeding casts and crews. We move fast, serve hot, and keep productions on schedule.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  {
                    label: 'Crew Breakfast',
                    // Sunrise / morning
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/><path d="M2 12h2"/><path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M5 19H19"/><path d="M3 22h18"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Hot Lunch',
                    // Plate with dome/cloche
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 20h18"/><path d="M3 14h18"/><path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9z"/><line x1="12" y1="3" x2="12" y2="6"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Craft Services',
                    // Snack basket / shopping bag with food
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11h16l-1.5 9H5.5L4 11z"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><line x1="9" y1="15" x2="9" y2="19"/><line x1="15" y1="15" x2="15" y2="19"/>
                      </svg>
                    ),
                  },
                  {
                    label: 'Dietary Friendly',
                    // Leaf
                    icon: (
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 22c1.25-1.25 2.5-2.5 3.75-3.75C7.5 16.5 10 14 12 12c2-2 4.5-4.5 6.25-6.25C20 4 21 2 22 2c0 1-2 2-3.75 3.75C16.5 7.5 14 10 12 12c-2 2-4.5 4.5-6.25 6.25C4 20 2 22 2 22z"/><path d="M22 2C22 2 17 7 12 12S2 22 2 22c4-1 9-4 13-8s5-9 7-12z"/>
                      </svg>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <div key={label} className="flex items-center gap-3 py-3" style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', color: 'var(--cream-dim)' }}>
                    <span style={{ flexShrink: 0 }}>{icon}</span>
                    <span className="font-display text-sm tracking-[0.18em]" style={{ color: 'var(--cream)' }}>{label.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <a
                href="/film-tv"
                className="hidden lg:inline-block font-display text-base tracking-[0.25em] uppercase mt-8 px-10 py-4"
                style={{ border: '1px solid rgba(0,0,0,0.2)', color: 'var(--cream)', textDecoration: 'none' }}
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
              <a
                href="/film-tv"
                className="lg:hidden font-display text-base tracking-[0.25em] uppercase block w-full text-center py-4 mt-6 col-span-2"
                style={{ border: '1px solid rgba(0,0,0,0.2)', color: 'var(--cream)', textDecoration: 'none' }}
              >
                Explore Film & TV →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FILM & TV PRODUCTIONS ─── */}
      <section className="py-24 overflow-hidden" style={{ background: '#111111' }}>
        <div className="max-w-[1400px] mx-auto px-8 mb-12 text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white mb-4">
            400+ Productions Catered
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
            From blockbusters to beloved TV series, David Mintz Catering has fed the crews behind some of the most iconic productions filmed in Toronto.
          </p>
        </div>
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden mb-4">
          <div className="marquee-inner-slow">
            {[...productionsRow1, ...productionsRow1].map((film, i) => (
              <div key={i} className="relative flex-shrink-0 mx-2 overflow-hidden group" style={{ width: '128px', height: '192px' }}>
                <img src={film.src} alt={film.title} className="w-full h-full" style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 flex items-end p-2 transition-colors duration-300 bg-[#111111]/50 group-hover:bg-[#82a737]/60">
                  <span className="font-display text-white leading-tight" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>{film.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="overflow-hidden">
          <div className="marquee-inner-slow-reverse">
            {[...productionsRow2, ...productionsRow2].map((film, i) => (
              <div key={i} className="relative flex-shrink-0 mx-2 overflow-hidden group" style={{ width: '128px', height: '192px' }}>
                <img src={film.src} alt={film.title} className="w-full h-full" style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 flex items-end p-2 transition-colors duration-300 bg-[#111111]/50 group-hover:bg-[#82a737]/60">
                  <span className="font-display text-white leading-tight" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>{film.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section style={{ background: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
            <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)]" style={{ color: 'var(--cream)' }}>
              UNFORGETTABLE<br />
              <span style={{ color: 'var(--gold)' }}>EVENTS.</span>
            </h2>
            <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
              From intimate cocktail receptions to grand gala dinners, we bring the same precision and flavour to every celebration.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Hors D'oeuvres", img: '/hors-doeuvres/duck.jpeg', href: '/events' },
              { label: 'Sit-Down Dinners', img: '/sitdown/beef.jpeg', href: '/events' },
              { label: 'Stations', img: '/stations/stations1.jpg', href: '/events' },
            ].map(card => (
              <a key={card.label} href={card.href} className="relative overflow-hidden group block" style={{ aspectRatio: '3/4', textDecoration: 'none' }}>
                <img src={card.img} alt={card.label} className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ objectFit: 'cover' }} />
                <div className="absolute inset-0 flex items-end p-5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }}>
                  <span className="font-display text-xl tracking-[0.12em] text-white">{card.label.toUpperCase()}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/events"
              className="font-display text-base tracking-[0.25em] uppercase inline-block px-12 py-4"
              style={{ background: 'var(--cream)', color: '#ffffff', textDecoration: 'none' }}
            >
              Explore Events →
            </a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
            <h2 className="font-display leading-none text-[clamp(3rem,7vw,5.5rem)]" style={{ color: 'var(--cream)' }}>
              TRUSTED BY<br />
              <span style={{ color: 'var(--gold)' }}>THE BEST.</span>
            </h2>
            <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
              From Hollywood studios to Toronto's most respected corporations, David Mintz Catering has earned the trust of industry leaders across film, finance, tech, and education.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6" style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>
            {logos.map(logo => (
              <div
                key={logo.name}
                className="flex items-center justify-center p-6"
                style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', borderRight: '1px solid rgba(0,0,0,0.08)', minHeight: '90px' }}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ width: '90px', height: '40px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1a1a1a' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="flex flex-col items-center min-h-0 lg:min-h-[360px]">
            <div>
              <h2 className="font-display leading-none mb-8 text-[clamp(3rem,7vw,5rem)]" style={{ color: '#ffffff' }}>
                READY TO PLAN<br />
                <span style={{ color: 'var(--gold)' }}>YOUR EVENT?</span>
              </h2>
              <p className="font-serif text-lg" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
                Tell us about your event and we&apos;ll craft a menu and service plan tailored to your guests.
              </p>
            </div>
            <a
              href="/contact"
              className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-14"
              style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
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
