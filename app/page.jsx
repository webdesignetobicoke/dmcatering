import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import WhatWeDo from '../components/WhatWeDo'
import FilmTV from '../components/FilmTV'
import Events from '../components/Events'
import About from '../components/About'
import Clients from '../components/Clients'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <WhatWeDo />
      <FilmTV />
      <Events />
      <About />
      <Clients />
      <CTASection />
      <Footer />
    </main>
  )
}
