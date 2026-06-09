import HeroSection from '../components/home/HeroSection'
import MarqueeStrip from '../components/home/MarqueeStrip'
import AboutSection from '../components/home/AboutSection'
import ProgramsSection from '../components/home/ProgramsSection'
import HowItWorks from '../components/home/HowItWorks'
import CoachesSection from '../components/home/CoachesSection'
import MerchPreview from '../components/home/MerchPreview'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import FAQ from '../components/home/FAQ'
import CTABanner from '../components/home/CTABanner'
import Footer from '../components/Footer'

export default function HomePage({ navigate }) {
  return (
    <main className="pb-20 md:pb-0">
      <HeroSection navigate={navigate} />
      <MarqueeStrip />
      <AboutSection />
      <ProgramsSection navigate={navigate} />
      <HowItWorks />
      <CoachesSection />
      <MerchPreview navigate={navigate} />
      <Testimonials />
      <Pricing navigate={navigate} />
      <FAQ />
      <CTABanner navigate={navigate} />
      <Footer navigate={navigate} />
    </main>
  )
}
