export default function TaglineBanner() {
  return (
    <section style={{ background: 'var(--gold)', padding: '4rem 0' }}>
      <div className="text-center px-6">
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            color: '#ffffff',
            letterSpacing: '0.12em',
          }}
        >
          GREAT FOOD. GREAT PEOPLE.
        </h2>
        <p
          className="font-serif mt-4"
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
        >
          Always.
        </p>
      </div>
    </section>
  )
}
