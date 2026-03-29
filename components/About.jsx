const TEAM = [
  {
    name: 'David Mintz',
    title: 'President',
    img: 'https://dmcatering.ca/wp-content/uploads/2020/01/David-150x150-1.jpg',
    bio: 'David is the quintessential hospitality expert. He excels in delivering consistently exceptional catering experiences and has been doing so for over 30 years. David prides himself on "sweating the small stuff." He is supported by a team of passionate professionals who have been with him for many years.',
  },
  {
    name: 'Tom Lorusso',
    title: 'Film Operations Manager',
    img: 'https://dmcatering.ca/wp-content/uploads/2021/04/tom-150x150.jpg',
    bio: "Tom Lorusso has been working with David since 2012. Tom oversees every detail of film logistics, managing our fleet of food trucks and visiting every show to ensure that our standards are maintained and that every crew and cast member feels taken care of.",
  },
  {
    name: 'Elena Tsygankova',
    title: 'Executive Chef',
    img: 'https://dmcatering.ca/wp-content/uploads/2020/01/Elena-150x150-1.jpeg',
    bio: 'Elena oversees all the food for Film, Social and Corporate Catering. With a background of owning her own catering company, she tends to every event with humility, personal care and passionate dedication. Her food is elegant, dynamic and always delicious.',
  },
  {
    name: 'Catherine Chalmers',
    title: 'General Manager',
    img: 'https://dmcatering.ca/wp-content/uploads/2020/01/IMG_7510-150x150-2.jpeg',
    bio: 'Catherine has been working in the food industry for over 20 years. She attended George Brown College and graduated with a degree in Culinary Management. Over the years she has gained extensive experience in Film Crew Catering, Corporate & Event Catering.',
  },
]

export default function About() {
  return (
    <section id="about" style={{ background: '#f5f5f5', borderTop: '1px solid rgba(130,167,55,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <h2
              className="font-display leading-none mb-4"
              style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--cream)' }}
            >
              30 YEARS OF<br />
              <span style={{ color: 'var(--gold)' }}>CRAFTSMANSHIP.</span>
            </h2>
            <p className="font-serif mb-8" style={{ fontSize: '1.15rem', color: 'var(--cream-dim)', lineHeight: 1.6 }}>
              Great food. Great people. Always.
            </p>
            <p className="font-serif text-xl mb-6" style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>
              What started as a passion for exceptional hospitality has grown into Toronto's most trusted catering operation — spanning both the glamour of film & television and the warmth of personal events.
            </p>
            <p style={{ color: 'var(--cream-dim)', lineHeight: 1.9, fontSize: '0.9rem' }}>
              Our team brings decades of culinary expertise, genuine care, and an unyielding commitment to excellence to every table we set.
            </p>
          </div>

          {/* Feature image */}
          <div className="relative">
            <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src="/30-years.jpg"
                alt="DMC Team"
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(0.1) saturate(0.9)' }}
              />
            </div>
            {/* Accent corner */}
            <div
              className="absolute -bottom-3 -left-3 w-24 h-24"
              style={{ border: '2px solid var(--gold)', opacity: 0.4 }}
            />
            <div
              className="absolute -top-3 -right-3 w-16 h-16"
              style={{ border: '2px solid var(--gold)', opacity: 0.25 }}
            />
          </div>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              {/* Photo */}
              <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '1/1' }}>
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover  group-hover:scale-105"
                  style={{ filter: 'grayscale(30%)' }}
                />
                <div
                  className="absolute inset-0 "
                  style={{
                    background: 'linear-gradient(135deg, transparent 60%, rgba(130,167,55,0.15))',
                  }}
                />
              </div>
              <div
                className="w-8 h-px mb-4  group-hover:w-16"
                style={{ background: 'var(--gold)' }}
              />
              <p className="font-display text-xl tracking-wide mb-1" style={{ color: 'var(--cream)' }}>{m.name}</p>
              <p className="font-display text-xs tracking-[0.2em] mb-4" style={{ color: 'var(--gold)' }}>{m.title}</p>
              <p style={{ color: 'var(--cream-dim)', fontSize: '0.83rem', lineHeight: 1.8 }}>{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
