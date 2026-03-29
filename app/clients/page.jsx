import Navbar from '../../components/Navbar'
import Clients from '../../components/Clients'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Our Clients — David Mintz Catering',
  description: 'Trusted by Hollywood studios and Toronto\'s most discerning corporate clients. Our reputation speaks through every plate we serve.',
}

export default function ClientsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Clients />
      </div>
      <CTASection line1="JOIN OUR" line2="CLIENT LIST." desc="Tell us about your event and we'll build a custom menu around your vision." />
      <Footer />
    </main>
  )
}
