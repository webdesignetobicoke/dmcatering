import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Social & Corporate Events — David Mintz Catering',
  description: 'Exceptional catering for corporate events, cocktail parties, upscale BBQs, and large-scale galas. Put your trust in us and be a guest at your own event.',
}

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Events />
      </div>
      <CTASection line1="READY TO PLAN" line2="YOUR EVENT?" desc="Tell us about your event and we'll handle every detail so you can be a guest at your own event." />
      <Footer />
    </main>
  )
}
