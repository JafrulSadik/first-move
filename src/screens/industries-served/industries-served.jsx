import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import ContactUs from './components/contact-us'
import ExpertiseGrid from './components/expertise-grid'
import ExpertiseList from './components/expertise-list'
import ExpertiseSection from './components/expertise-section'
import IndustriesServedHeader from './components/header'
import IndustriesServedAbout from './components/industries-served-about'

export default function IndustriesServedScreen() {
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="w-full">
        <Navbar />
        <IndustriesServedHeader />
        <IndustriesServedAbout />
        <ExpertiseSection />
        <ExpertiseList />
        <ExpertiseGrid />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}
