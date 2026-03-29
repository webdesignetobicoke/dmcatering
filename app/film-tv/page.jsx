import Navbar from '../../components/Navbar'
import FilmTV from '../../components/FilmTV'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Film & TV Catering — David Mintz Catering',
  description: 'Toronto\'s premier on-set caterer for Film & TV productions. 400+ productions, 9 mobile kitchens, 25+ years of experience.',
}

export default function FilmTVPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <FilmTV heroBg="#ffffff" altBg="#f5f5f5" />
      </div>
      <CTASection line1="READY TO FEED" line2="YOUR CREW?" desc="Tell us about your production and we'll handle every meal on set." />
      <Footer />
    </main>
  )
}
