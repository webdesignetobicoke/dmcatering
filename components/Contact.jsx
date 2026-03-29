'use client'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#f5f5f5', borderTop: '1px solid rgba(130,167,55,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <div>
            <h2
              className="font-display leading-none mb-10"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--cream)' }}
            >
              LET'S<br />
              <span style={{ color: 'var(--gold)' }}>TALK.</span>
            </h2>

            <div className="space-y-8">
              {/* Film contact */}
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem' }}>
                <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--gold)' }}>FILM & TELEVISION INQUIRIES</p>
                <p className="font-display text-xl mb-1" style={{ color: 'var(--cream)' }}>David Mintz</p>
                <a
                  href="mailto:david@dmcatering.ca"
                  className="block font-serif text-lg "
                  style={{ color: 'var(--cream-dim)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                >
                  david@dmcatering.ca
                </a>
                <a
                  href="tel:6478373348"
                  className="block font-serif text-lg  mt-1"
                  style={{ color: 'var(--cream-dim)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                >
                  647 837 3348 x1
                </a>
              </div>

              {/* Social contact */}
              <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '1.5rem' }}>
                <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--gold)' }}>SOCIAL & CORPORATE EVENTS</p>
                <a
                  href="mailto:david@dmcatering.ca"
                  className="block font-serif text-lg "
                  style={{ color: 'var(--cream-dim)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                >
                  david@dmcatering.ca
                </a>
              </div>

              {/* Address */}
              <div style={{ borderLeft: '2px solid rgba(130,167,55,0.3)', paddingLeft: '1.5rem' }}>
                <p className="font-display text-xs tracking-[0.3em] mb-3" style={{ color: 'var(--cream-dim)' }}>MAILING ADDRESS</p>
                <p style={{ color: 'var(--cream-dim)', lineHeight: 1.8 }}>
                  225 Commissioners Street<br />
                  Toronto, ON · M4M 0A1
                </p>
              </div>

              {/* Social links */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.facebook.com/David-Mintz-Catering-486119858172281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-xs tracking-[0.25em] "
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
                  className="font-display text-xs tracking-[0.25em] "
                  style={{ color: 'var(--cream-dim)' }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--cream-dim)'}
                >
                  INSTAGRAM →
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              border: '1px solid rgba(130,167,55,0.2)',
              padding: '2.5rem',
              background: 'rgba(130,167,55,0.04)',
            }}
          >
            <p className="font-display text-xs tracking-[0.3em] mb-8" style={{ color: 'var(--gold)' }}>SEND A MESSAGE</p>

            <div className="space-y-6">
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
                    className="w-full bg-transparent outline-none font-serif text-lg "
                    style={{
                      borderBottom: '1px solid rgba(130,167,55,0.3)',
                      color: 'var(--cream)',
                      paddingBottom: '0.75rem',
                    }}
                    onFocus={e => e.target.style.borderBottomColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderBottomColor = 'rgba(130,167,55,0.3)'}
                  />
                </div>
              ))}

              {/* Service type */}
              <div>
                <label className="font-display text-xs tracking-[0.2em] block mb-3" style={{ color: 'var(--cream-dim)' }}>
                  SERVICE TYPE
                </label>
                <div className="flex gap-4">
                  {['Film & TV', 'Events', 'Both'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="service" value={opt} className="hidden" />
                      <span
                        className="font-display text-xs tracking-[0.15em] px-4 py-2 cursor-pointer "
                        style={{ border: '1px solid rgba(130,167,55,0.3)', color: 'var(--cream-dim)' }}
                        onClick={e => {
                          document.querySelectorAll('.radio-opt').forEach(el => {
                            el.style.background = 'transparent'
                            el.style.color = 'var(--cream-dim)'
                          })
                          e.currentTarget.style.background = 'var(--gold)'
                          e.currentTarget.style.color = 'var(--black)'
                        }}
                      >
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-display text-xs tracking-[0.2em] block mb-2" style={{ color: 'var(--cream-dim)' }}>
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project or event..."
                  className="w-full bg-transparent outline-none font-serif resize-none "
                  style={{
                    border: '1px solid rgba(130,167,55,0.3)',
                    color: 'var(--cream)',
                    padding: '0.75rem',
                    fontSize: '1rem',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(130,167,55,0.3)'}
                />
              </div>

              <button
                className="w-full font-display text-sm tracking-[0.3em] uppercase py-4 "
                style={{ background: 'var(--gold)', color: 'var(--black)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
