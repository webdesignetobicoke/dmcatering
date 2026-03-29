import Link from 'next/link'

export default function CTASection({ line1 = 'READY TO PLAN', line2 = 'YOUR EVENT?', desc = "Tell us about your event and we'll build a custom menu around your vision." }) {
  return (
    <div style={{ background: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
        <div className="flex flex-col items-center min-h-0 lg:min-h-[360px]">
          <div>
            <h2
              className="font-display leading-none mb-8 text-[clamp(3rem,8vw,5rem)] sm:text-[clamp(2.5rem,6vw,5rem)]"
              style={{ color: '#ffffff' }}
            >
              {line1}<br />
              <span style={{ color: 'var(--gold)' }}>{line2}</span>
            </h2>
            <p className="font-serif text-lg mb-10 sm:mb-12" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8 }}>
              {desc}
            </p>
          </div>
          <Link
            href="/contact"
            className="font-display text-lg tracking-[0.25em] uppercase block w-full text-center py-4 sm:inline-block sm:w-auto sm:px-14"
            style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}
