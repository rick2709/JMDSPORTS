import HeroSection from '../components/home/HeroSection'
import MarqueeStrip from '../components/home/MarqueeStrip'
import SportsOverview from '../components/home/SportsOverview'
import AboutSection from '../components/home/AboutSection'
import HowItWorks from '../components/home/HowItWorks'
import MerchPreview from '../components/home/MerchPreview'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import CTABanner from '../components/home/CTABanner'
import Footer from '../components/Footer'

export default function HomePage({ navigate }) {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection navigate={navigate} />
      <MarqueeStrip />
      <SportsOverview navigate={navigate} />
      <AboutSection />
      <HowItWorks />
      <MerchPreview navigate={navigate} />
      <Testimonials />
      <FAQ />
      <CTABanner navigate={navigate} />
      <Footer navigate={navigate} />
    </main>
  )
}
