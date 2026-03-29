import Navbar from '../../components/Navbar'
import News from '../../components/News'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'News — David Mintz Catering',
  description: 'Latest news and updates from David Mintz Catering — industry highlights, events, and community involvement.',
}

export default function NewsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <News />
      </div>
      <Footer />
    </main>
  )
}
