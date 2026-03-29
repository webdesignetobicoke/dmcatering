import Navbar from '../../components/Navbar'
import About from '../../components/About'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Us — David Mintz Catering',
  description: 'Meet the team behind Toronto\'s most trusted catering operation. 30 years of culinary expertise, genuine care, and an unyielding commitment to excellence.',
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <About />
      </div>
      <CTASection line1="LET'S WORK" line2="TOGETHER." desc="Tell us about your event and we'll build a custom menu around your vision." />
      <Footer />
    </main>
  )
}
