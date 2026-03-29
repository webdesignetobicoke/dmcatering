export default function StatsBar() {
  const stats = [
    { stat: '400+', label: 'Productions', desc: 'Film & TV sets fed across Toronto and the GTA' },
    { stat: '25+', label: 'Years', desc: 'Serving the industry since 1998' },
    { stat: '9', label: 'Mobile Kitchens', desc: 'State-of-the-art on-location cooking rigs' },
  ]

  return (
    <section style={{ background: '#1a1a1a', borderTop: '3px solid var(--gold)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-3">
          {stats.map((item, i) => (
            <div
              key={item.label}
              className="py-8 px-4 lg:py-12 lg:px-10"
              style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
            >
              <p
                className="font-display"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'var(--gold)', lineHeight: 1 }}
              >
                {item.stat}
              </p>
              <p
                className="font-display tracking-[0.2em] mt-2 mb-3"
                style={{ fontSize: 'clamp(0.65rem, 1.5vw, 1.1rem)', color: '#ffffff' }}
              >
                {item.label.toUpperCase()}
              </p>
              <p
                className="text-[clamp(0.9rem,2.4vw,1rem)] sm:text-[clamp(0.65rem,1.5vw,1rem)]"
                style={{ color: '#ffffff', lineHeight: 1.7 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
