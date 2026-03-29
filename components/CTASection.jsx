import Link from 'next/link'

export default function CTASection({ line1 = 'READY TO PLAN', line2 = 'YOUR EVENT?', desc = "Tell us about your event and we'll build a custom menu around your vision." }) {
  return (
    <div style={{ background: '#1a1a1a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 text-center">
        <h2 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#ffffff' }}>
          {line1}<br />
          <span style={{ color: 'var(--gold)' }}>{line2}</span>
        </h2>
        <p className="font-serif text-lg mb-10" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          {desc}
        </p>
        <Link
          href="/contact"
          className="font-display text-lg tracking-[0.25em] uppercase px-14 py-4 inline-block w-full lg:w-auto text-center"
          style={{ background: 'var(--gold)', color: '#1a1a1a', textDecoration: 'none' }}
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
