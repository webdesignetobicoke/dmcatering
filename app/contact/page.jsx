'use client'
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '120px', background: '#f5f5f5', minHeight: '100vh' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — info */}
            <div>
              <h1
                className="font-display leading-none mb-10 text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
                style={{ color: 'var(--cream)' }}
              >
                LET'S<br />
                <span style={{ color: 'var(--gold)' }}>TALK.</span>
              </h1>

              <div className="space-y-8">
                <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem' }}>
                  <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--gold)' }}>FILM & TELEVISION INQUIRIES</p>
                  <p className="font-display text-xl mb-1" style={{ color: 'var(--cream)' }}>David Mintz</p>
                  <a
                    href="mailto:david@dmcatering.ca"
                    className="block font-serif text-lg"
                    style={{ color: 'var(--cream-dim)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                  >
                    david@dmcatering.ca
                  </a>
                  <a
                    href="tel:6478373348"
                    className="block font-serif text-lg mt-1"
                    style={{ color: 'var(--cream-dim)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                  >
                    647 837 3348 x1
                  </a>
                </div>

                <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem' }}>
                  <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--gold)' }}>SOCIAL & CORPORATE EVENTS</p>
                  <a
                    href="mailto:david@dmcatering.ca"
                    className="block font-serif text-lg"
                    style={{ color: 'var(--cream-dim)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                  >
                    david@dmcatering.ca
                  </a>
                </div>

                <div style={{ borderLeft: '2px solid rgba(130,167,55,0.3)', paddingLeft: '1.5rem' }}>
                  <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--cream-dim)' }}>MAILING ADDRESS</p>
                  <p className="font-serif" style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
                    225 Commissioners Street<br />
                    Toronto, ON · M4M 0A1
                  </p>
                </div>

                <div className="flex gap-6 pt-2">
                  <a
                    href="https://www.facebook.com/David-Mintz-Catering-486119858172281/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs tracking-[0.25em]"
                    style={{ color: 'var(--cream-dim)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                  >
                    FACEBOOK →
                  </a>
                  <a
                    href="https://www.instagram.com/davidmintzcatering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs tracking-[0.25em]"
                    style={{ color: 'var(--cream-dim)' }}
                    onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                  >
                    INSTAGRAM →
                  </a>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div style={{ background: '#ffffff', padding: '3rem', border: '1px solid rgba(130,167,55,0.15)' }}>
              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="font-display mb-4" style={{ fontSize: '3rem', color: 'var(--gold)' }}>THANK YOU.</h3>
                  <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)' }}>We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <p className="font-display text-sm tracking-[0.3em] mb-8" style={{ color: 'var(--gold)' }}>SEND A MESSAGE</p>

                  {[
                    { label: 'Name', type: 'text', placeholder: 'Your full name' },
                    { label: 'Email', type: 'email', placeholder: 'your@email.com' },
                    { label: 'Phone', type: 'tel', placeholder: '(416) 000-0000' },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="font-display text-xs tracking-[0.2em] block mb-2" style={{ color: 'var(--cream-dim)' }}>
                        {f.label.toUpperCase()}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="w-full bg-transparent outline-none font-serif text-lg"
                        style={{
                          borderBottom: '1px solid rgba(0,0,0,0.15)',
                          color: 'var(--cream)',
                          paddingBottom: '0.75rem',
                        }}
                        onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderBottomColor = 'rgba(0,0,0,0.15)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="font-display text-xs tracking-[0.2em] block mb-3" style={{ color: 'var(--cream-dim)' }}>
                      SERVICE TYPE
                    </label>
                    <div className="flex gap-3 flex-wrap">
                      {['Film & TV', 'Events', 'Both'].map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setSelected(opt)}
                          className="font-display text-xs tracking-[0.15em] px-5 py-2"
                          style={{
                            border: '1px solid rgba(0,0,0,0.2)',
                            background: selected === opt ? 'var(--cream)' : 'transparent',
                            color: selected === opt ? '#ffffff' : 'var(--cream-dim)',
                            cursor: 'pointer',
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-display text-xs tracking-[0.2em] block mb-2" style={{ color: 'var(--cream-dim)' }}>
                      MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or event..."
                      className="w-full bg-transparent outline-none font-serif resize-none"
                      style={{
                        border: '1px solid rgba(0,0,0,0.15)',
                        color: 'var(--cream)',
                        padding: '0.75rem',
                        fontSize: '1rem',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(0,0,0,0.15)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-display text-base tracking-[0.3em] uppercase py-4"
                    style={{ background: 'var(--cream)', color: '#ffffff' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#333333'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
