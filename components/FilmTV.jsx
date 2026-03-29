'use client'
import { useState } from 'react'

const MOVIES = [
  { title: 'DC Titans', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/dc-titans.jpg', imdb: 'https://www.imdb.com/title/tt1043813/' },
  { title: 'The Expanse', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-expanse.jpg', imdb: 'https://www.imdb.com/title/tt3230854/' },
  { title: 'Self Made', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/self-made.jpg', imdb: 'https://www.imdb.com/title/tt8771910/' },
  { title: 'Scary Stories to Tell in the Dark', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/scary-stories-to-tell-in-the-dark.jpg' },
  { title: 'The Umbrella Academy', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-umbrella-academy-1.jpg', imdb: 'https://www.imdb.com/title/tt1312171/' },
  { title: 'SEE', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/see-1.jpg', imdb: 'https://www.imdb.com/title/tt7949218/' },
  { title: "The Handmaid's Tale", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-handmaids-tale.jpg', imdb: 'https://www.imdb.com/title/tt5834204/' },
  { title: 'The Boys', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-boys-1.jpg', imdb: 'https://www.imdb.com/title/tt1190634/' },
  { title: 'The Shape of Water', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-shape-of-water-1.jpg' },
  { title: 'Spotlight', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/spotlight.jpeg' },
  { title: 'Nightmare Alley', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/nightmare-alley-1.jpg', imdb: 'https://www.imdb.com/title/tt0039661/' },
  { title: "Molly's Game", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/mollys-game.jpg', imdb: 'https://www.imdb.com/title/tt4209788/' },
  { title: 'Robocop', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/robocop.jpg', imdb: 'https://www.imdb.com/title/tt1234721/' },
  { title: 'Suicide Squad', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/suicide-squad.jpg', imdb: 'https://www.imdb.com/title/tt1386697/' },
  { title: 'Pixels', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/pixels.jpg', imdb: 'https://www.imdb.com/title/tt2120120/' },
  { title: 'XXX: Return of Xander Cage', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/xxx%E2%80%93return-of-xander-cage.jpg', imdb: 'https://www.imdb.com/title/tt1293847/' },
  { title: 'Pacific Rim', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/pacific-rim.jpg' },
  { title: 'Downsizing', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/downsizing.jpg', imdb: 'https://www.imdb.com/title/tt1389072/' },
  { title: 'Mrs. America', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/mrs-america.jpg', imdb: 'https://www.imdb.com/title/tt9244556/' },
  { title: 'Nurses', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/nurses-1.jpg', imdb: 'https://www.imdb.com/title/tt9024590/' },
  { title: 'Sex/Life', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/sex-life.jpg', imdb: 'https://www.imdb.com/title/tt10539484/' },
  { title: 'Grand Army', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/grand-army-1.jpg', imdb: 'https://www.imdb.com/title/tt10473150/' },
  { title: 'Spin', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/spin.jpg', imdb: 'https://www.imdb.com/title/tt12969826/' },
  { title: 'The Man from Toronto', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/man-from-toronto.jpg', imdb: 'https://www.imdb.com/title/tt11671006/' },
  { title: 'The Comey Rule', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-comey-rule-1.jpg', imdb: 'https://www.imdb.com/title/tt9174536/' },
  { title: 'Lullaby', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/lullaby-1.jpg', imdb: 'https://www.imdb.com/title/tt2210781/' },
  { title: 'In The Dark', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/in-the-dark-1.jpg', imdb: 'https://www.imdb.com/title/tt7772602/' },
  { title: 'American Gods', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/american-gods.jpg', imdb: 'https://www.imdb.com/title/tt1898069/' },
  { title: 'Ginny and Georgia', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/ginny-and-georgia.jpg', imdb: 'https://www.imdb.com/title/tt10813940/' },
  { title: 'Sneakerella', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/sneakerella.jpg', imdb: 'https://www.imdb.com/title/tt10160886/' },
  { title: "Schitt's Creek", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/schitts-creek-1.jpg', imdb: 'https://www.imdb.com/title/tt3526078/' },
  { title: "Jupiter's Legacy", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/jupiters-legacy.jpg', imdb: 'https://www.imdb.com/title/tt5774002/' },
  { title: 'Frankie Drake Mysteries', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/frankie-drake-mysteries.jpg', imdb: 'https://www.imdb.com/title/tt6881870/' },
  { title: 'Run', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/run.jpg', imdb: 'https://www.imdb.com/title/tt8633478/' },
  { title: 'Designated Survivor', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/designated-survivor.jpg', imdb: 'https://www.imdb.com/title/tt5296406/' },
  { title: 'Dare Me', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/dare-me.jpg', imdb: 'https://www.imdb.com/title/tt2983222/' },
  { title: 'Taken', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/taken.jpg', imdb: 'https://www.imdb.com/title/tt5052460/' },
  { title: 'Disney Zombies', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/disney-zombies.jpg' },
  { title: 'Shadowhunters', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/shadow-hunters.jpg' },
  { title: 'Salvation', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/salvation.jpg', imdb: 'https://www.imdb.com/title/tt6170874/' },
  { title: 'Locke & Key', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/locke-key.jpg', imdb: 'https://www.imdb.com/title/tt3007572/' },
  { title: 'Killjoys', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/killjoys.jpg', imdb: 'https://www.imdb.com/title/tt3952222/' },
  { title: 'Fahrenheit 451', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/fahrenheit-451.jpg', imdb: 'https://www.imdb.com/title/tt0360556/' },
  { title: 'A Simple Favor', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/a-simple-favor.jpg', imdb: 'https://www.imdb.com/title/tt9515594/' },
  { title: 'Suits', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/suits.jpg', imdb: 'https://www.imdb.com/title/tt1632701/' },
  { title: 'Reign', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/reign.jpg', imdb: 'https://www.imdb.com/title/tt2710394/' },
  { title: 'The Rocky Horror Picture Show', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-rocky-horror-picture-show.jpg', imdb: 'https://www.imdb.com/title/tt1267299/' },
  { title: 'My Big Fat Greek Wedding 2', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/my-big-fat-greek-wedding-2.jpg', imdb: 'https://www.imdb.com/title/tt3760922/' },
  { title: 'Flatliners', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/flatliners.jpg', imdb: 'https://www.imdb.com/title/tt2039338/' },
  { title: 'Novice', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/novice.jpg', imdb: 'https://www.imdb.com/title/tt12638360/' },
  { title: 'Let It Snow', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/let-it-snow.jpg', imdb: 'https://www.imdb.com/title/tt1950235/' },
  { title: 'Alias Grace', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/alias-grace.jpg', imdb: 'https://www.imdb.com/title/tt1034007/' },
  { title: 'Wrong Turn', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/wrong-turn.jpg', imdb: 'https://www.imdb.com/title/tt9110170/' },
  { title: 'The Tuxedo', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-tuxedo.jpg', imdb: 'https://www.imdb.com/title/tt0290095/' },
  { title: 'Urban Legend', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/urban-legend.jpg', imdb: 'https://www.imdb.com/title/tt0146336/' },
  { title: "The Time Traveler's Wife", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-time-travelers-wife.jpg', imdb: 'https://www.imdb.com/title/tt0452694/' },
  { title: 'The Skulls', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-skulls.jpg', imdb: 'https://www.imdb.com/title/tt0192614/' },
  { title: 'The Pacifier', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-pacifier.jpg', imdb: 'https://www.imdb.com/title/tt0395699/' },
  { title: 'The Corruptor', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-corruptor.jpg', imdb: 'https://www.imdb.com/title/tt0142192/' },
  { title: 'Murder at 1600', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/murder-at-1600.jpg', imdb: 'https://www.imdb.com/title/tt0119731/' },
  { title: 'Kids in the Hall', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/kids-in-the-hall.jpg', imdb: 'https://www.imdb.com/title/tt3360652/' },
  { title: 'The Recruit', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-recruit.jpg', imdb: 'https://www.imdb.com/title/tt0292506/' },
  { title: 'The Love Guru', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-love-guru.jpg', imdb: 'https://www.imdb.com/title/tt0811138/' },
  { title: 'Mrs. Winterbourne', img: 'https://dmcatering.ca/wp-content/uploads/2020/01/Mrs.-Winterbourne.jpg', imdb: 'https://www.imdb.com/title/tt0117104/' },
  { title: 'PCU', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/pcu.jpg', imdb: 'https://www.imdb.com/title/tt0110759/' },
  { title: 'Mimic', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/mimic.jpg', imdb: 'https://www.imdb.com/title/tt0119675/' },
  { title: 'Loser', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/loser.jpg', imdb: 'https://www.imdb.com/title/tt0217630/' },
  { title: 'John Q.', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/john-q.jpg', imdb: 'https://www.imdb.com/title/tt0251160/' },
  { title: 'Ice Princess', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/ice-princess.jpg', imdb: 'https://www.imdb.com/title/tt0396652/' },
  { title: 'The Boondock Saints', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-boondock-saints.jpg', imdb: 'https://www.imdb.com/title/tt0144117/' },
  { title: 'Undercover Brother', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/undercover-brother.jpg', imdb: 'https://www.imdb.com/title/tt0279493/' },
  { title: 'Half Baked', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/half-baked.jpg', imdb: 'https://www.imdb.com/title/tt2915940/' },
  { title: 'Firehouse Dog', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/firehouse-dog.jpg', imdb: 'https://www.imdb.com/title/tt0476995/' },
  { title: 'Life with Mikey', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/life-with-mikey.jpg', imdb: 'https://www.imdb.com/title/tt0107413/' },
  { title: 'Searching for Bobby Fischer', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/searching-for-bobby-fischer.jpg', imdb: 'https://www.imdb.com/title/tt0108065/' },
  { title: 'The Sentinel', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-sentinel.jpg', imdb: 'https://www.imdb.com/title/tt0115351/' },
  { title: 'Gotti', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/gotti.jpg', imdb: 'https://www.imdb.com/title/tt1801552/' },
  { title: 'My Big Fat Greek Wedding', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/my-big-fat-greek-wedding.jpg', imdb: 'https://www.imdb.com/title/tt0259446/' },
  { title: 'Used People', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/used-people.jpg', imdb: 'https://www.imdb.com/title/tt0105706/' },
  { title: 'Knockaround Guys', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/knockaround-guys.jpg', imdb: 'https://www.imdb.com/title/tt0211465/' },
  { title: 'Kick-Ass', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/kickass.jpg', imdb: 'https://www.imdb.com/title/tt1250777/' },
  { title: 'A Cool, Dry Place', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/a-cool-dry-place.jpg', imdb: 'https://www.imdb.com/title/tt0120642/' },
  { title: 'Serendipity', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/serendipity.jpg', imdb: 'https://www.imdb.com/title/tt0240890/' },
  { title: "Don't Say a Word", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/dont-say-a-word.jpg', imdb: 'https://www.imdb.com/title/tt0260866/' },
  { title: 'Death to Smoochy', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/death-to-smoochy.jpg', imdb: 'https://www.imdb.com/title/tt0266452/' },
  { title: 'Against the Ropes', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/against-the-ropes.jpg', imdb: 'https://www.imdb.com/title/tt0312329/' },
  { title: 'Foolproof', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/foolproof.jpg', imdb: 'https://www.imdb.com/title/tt0356614/' },
  { title: 'Exit Wounds', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/exit-wounds.jpg', imdb: 'https://www.imdb.com/title/tt0242445/' },
  { title: 'Detroit Rock City', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/detroit-rock-city.jpg', imdb: 'https://www.imdb.com/title/tt0165710/' },
  { title: 'Confessions of a Teenage Drama Queen', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/confessions-of-a-teenage-drama-queen.jpg', imdb: 'https://www.imdb.com/title/tt0361467/' },
  { title: 'Ararat', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/ararat.jpg', imdb: 'https://www.imdb.com/title/tt0273435/' },
  { title: 'Cold Creek Manor', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/cold-creek-manor.jpg', imdb: 'https://www.imdb.com/title/tt0331468/' },
  { title: 'Fever Pitch', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/fever-pitch.jpg', imdb: 'https://www.imdb.com/title/tt0332047/' },
  { title: 'A History of Violence', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-history-of-violence.jpg', imdb: 'https://www.imdb.com/title/tt2816090/' },
  { title: 'Billy Madison', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/billy-madison.jpg', imdb: 'https://www.imdb.com/title/tt0112508/' },
  { title: 'Finding Forrester', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/finding-forrester.jpg', imdb: 'https://www.imdb.com/title/tt0181536/' },
  { title: 'How to Lose a Guy in 10 Days', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/how-to-lose-a-guy-in-10-days.jpg', imdb: 'https://www.imdb.com/title/tt0251127/' },
  { title: "Mr. Magorium's Wonder Emporium", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/mr-magoriums-wonder-emporium.jpg', imdb: 'https://www.imdb.com/title/tt0457419/' },
  { title: 'K-19: The Widowmaker', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/k19-the-widowmaker.jpg', imdb: 'https://www.imdb.com/title/tt0267626/' },
  { title: "Get Rich or Die Tryin'", img: 'https://dmcatering.ca/wp-content/uploads/2021/04/Get-rich-or-die-tryin.jpg', imdb: 'https://www.imdb.com/title/tt0430308/' },
  { title: 'Bullet Proof', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/bullet-proof.jpg', imdb: 'https://www.imdb.com/title/tt14006238/' },
  { title: 'Four Brothers', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/four-brothers.jpg', imdb: 'https://www.imdb.com/title/tt0430105/' },
  { title: 'Chicago', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/chicago.jpg', imdb: 'https://www.imdb.com/title/tt0299658/' },
  { title: 'Orphan Black', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/orphan-black.jpg', imdb: 'https://www.imdb.com/title/tt2234222/' },
  { title: 'The Santa Clause', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-santa-clause.jpg', imdb: 'https://www.imdb.com/title/tt0111070/' },
  { title: 'The Hurricane', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/the-hurricane.jpg', imdb: 'https://www.imdb.com/title/tt0174856/' },
  { title: 'Cinderella Man', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/cinderella-man.jpg', imdb: 'https://www.imdb.com/title/tt0352248/' },
  { title: 'Poltergeist', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/poltergeist.jpg', imdb: 'https://www.imdb.com/title/tt0084516/' },
  { title: 'Welcome to Mooseport', img: 'https://dmcatering.ca/wp-content/uploads/2021/04/welcome-to-mooseport.jpg', imdb: 'https://www.imdb.com/title/tt0361925/' },
]

const TRUCKS = [
  'https://dmcatering.ca/wp-content/uploads/2021/05/TRAILER-PIC.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/04/truck-2.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/04/truck-1.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/05/IMG_2419.jpg',
  'https://dmcatering.ca/wp-content/uploads/2021/05/IMG_2033.jpg',
]

export default function FilmTV({
  heroBg = '#eef3e7',
  altBg = '#f5f5f5',
  heroBorder = '1px solid rgba(130,167,55,0.15)',
  altBorder = '1px solid rgba(130,167,55,0.15)',
}) {
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null)

  const displayed = showAll ? MOVIES : MOVIES.slice(0, 24)

  return (
    <section id="film" style={{ background: heroBg, borderTop: heroBorder }}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Section title */}
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
              style={{ color: 'var(--cream)' }}
            >
              ON SET.<br />ON TIME.<br />
              <span style={{ color: 'var(--gold)' }}>ON POINT.</span>
            </h2>
          </div>
          <div>
            <p className="font-serif text-xl mb-6" style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>
              For over 25 years, David has proudly served as the premier caterer in the Toronto Film and TV production sector — with over 400 productions under his belt.
            </p>
            <p className="font-serif" style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1rem' }}>
              We provide every person on every set with personal attention. We are only as good as our last meal.
            </p>
            <ul className="mt-6 list-disc pl-5" style={{ color: 'var(--cream-dim)', lineHeight: 1.8, fontSize: '1.05rem' }}>
              <li className="font-display text-base tracking-[0.2em]">CREW BREAKFAST</li>
              <li className="font-display text-base tracking-[0.2em]">HOT LUNCH</li>
              <li className="font-display text-base tracking-[0.2em]">CRAFT SERVICES</li>
              <li className="font-display text-base tracking-[0.2em]">DIETARY FRIENDLY</li>
            </ul>
          </div>
        </div>

        {/* Productions grid */}

        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}
        >
          {displayed.map((m) => {
            const Tag = m.imdb ? 'a' : 'div'
            return (
              <Tag
                key={m.title}
                href={m.imdb}
                target={m.imdb ? '_blank' : undefined}
                rel={m.imdb ? 'noopener noreferrer' : undefined}
                className="group relative overflow-hidden block"
                style={{ aspectRatio: '2/3', cursor: m.imdb ? 'pointer' : 'default' }}
              >
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover  group-hover:scale-110"
                  loading="lazy"
                  onError={e => { e.target.style.display = 'none' }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 "
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 60%)' }}
                >
                  <p className="font-display text-xs leading-tight" style={{ color: 'var(--cream)', letterSpacing: '0.05em' }}>{m.title}</p>
                  {m.imdb && <p className="font-display text-xs mt-1" style={{ color: 'var(--film-accent)' }}>IMDB →</p>}
                </div>
              </Tag>
            )
          })}
        </div>

        {!showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="font-display tracking-[0.15em] uppercase"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)', color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-dim)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--gold)'}
            >
              View All {MOVIES.length} Productions →
            </button>
          </div>
        )}

      </div>

      {/* Trucks section — different background */}
      <div style={{ background: altBg, borderTop: altBorder }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h3
                className="font-display leading-none text-[clamp(4rem,10vw,7rem)] sm:text-[clamp(3.5rem,8vw,7rem)]"
                style={{ color: 'var(--cream)' }}
              >
                OUR<br /><span style={{ color: 'var(--gold)' }}>FLEET.</span>
              </h3>
            </div>
            <div>
              <p className="font-serif text-lg" style={{ color: 'var(--cream-dim)', lineHeight: 1.7 }}>
                We bring 9 fully-mobile, state-of-the-art kitchens on wheels to every production — serving hot, fresh breakfasts and lunches cooked on location.
              </p>
            </div>
          </div>

          {/* Trucks masonry-style grid */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}
          >
            {TRUCKS.slice(0, 5).map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/5' }}
                onClick={() => setLightbox(src)}
              >
                <img
                  src={src}
                  alt={`DMC Fleet ${i + 1}`}
                  className="w-full h-full object-cover  group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100  flex items-center justify-center"
                  style={{ background: 'rgba(130,167,55,0.3)' }}
                >
                  <span className="font-display text-xs tracking-[0.3em] text-white">EXPAND</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.93)' }}
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Expanded" className="max-w-4xl max-h-screen w-full object-contain" />
          <button
            className="absolute top-6 right-8 font-display text-2xl"
            style={{ color: 'var(--cream-dim)' }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
