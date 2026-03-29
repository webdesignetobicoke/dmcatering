'use client'

const NEWS = [
  {
    title: 'Pinewood Toronto Studios Breaks Ground on Studio Expansion',
    img: 'https://dmcatering.ca/wp-content/uploads/2019/07/FILM-FEEDS-TORONTO-IMAGE-300x169.jpg',
    href: 'https://dmcatering.ca/pinewood-toronto-studios-breaks-ground-on-studio-expansion/',
    date: 'Industry News',
  },
  {
    title: 'Polo for Heart 40th Anniversary',
    img: 'https://dmcatering.ca/wp-content/uploads/2019/07/POLO-FOR-HEART-40th-300x168.jpg',
    href: 'https://dmcatering.ca/polo-for-heart-40th-anniversary/',
    date: 'Events',
  },
  {
    title: 'Netflix QT Pinewood Studios',
    img: 'https://dmcatering.ca/wp-content/uploads/2019/07/netflix-news-850x429-1-300x151.jpg',
    href: 'https://dmcatering.ca/netflix-qt-pinewood-studios/',
    date: 'Industry News',
  },
  {
    title: 'Invictus Games — Feeding Wounded Warriors',
    img: 'https://dmcatering.ca/wp-content/uploads/2021/05/TRAILER-PIC.jpg',
    href: 'https://dmcatering.ca/invictus-games/',
    date: 'Community',
  },
]

export default function News() {
  return (
    <section id="news" style={{ background: '#eef3e7', borderTop: '1px solid rgba(130,167,55,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-center gap-6 mb-16">
          <a
            href="https://www.instagram.com/davidmintzcatering"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs tracking-[0.2em] "
            style={{ color: 'var(--cream-dim)' }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
          >
            @DAVIDMINTZCATERING →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS.map((n) => (
            <a
              key={n.title}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ textDecoration: 'none' }}
            >
              <div className="overflow-hidden mb-4" style={{ aspectRatio: '16/9' }}>
                <img
                  src={n.img}
                  alt={n.title}
                  className="w-full h-full object-cover  group-hover:scale-110"
                  style={{ filter: 'grayscale(20%)' }}
                />
              </div>
              <p className="font-display text-xs tracking-[0.25em] mb-2" style={{ color: 'var(--gold)' }}>{n.date}</p>
              <h4
                className="font-serif text-lg leading-snug "
                style={{ color: 'var(--cream)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--cream)'}
              >
                {n.title}
              </h4>
              <div
                className="mt-3 h-px  group-hover:w-full"
                style={{ background: 'var(--gold)', width: '24px' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
