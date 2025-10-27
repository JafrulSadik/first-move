import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import BlogSection from './components/blog-section'
import CertificateSection from './components/certificate-section'
import FaqSection from './components/faq-section'
import GallerySection from './components/gallery-section'
import Hero from './components/hero'
import ManpowerSection from './components/manpower-section'
import PartnerSection from './components/partner-section'
import PremiumServices from './components/premium-services'
import PromoVideoSection from './components/promo-video-section'
import SupportSection from './components/support-section'
import TestimonialsSection from './components/testimonials-section'

const HomePage = () => {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="max-w-[1400px]">
        <Navbar />
        <Hero />
        <ManpowerSection />
        <SupportSection />
        <PremiumServices />
        <FaqSection />
        <TestimonialsSection />
        <PromoVideoSection />
        <BlogSection />
        <GallerySection />
        <PartnerSection />
        <CertificateSection />
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
