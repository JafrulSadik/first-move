import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import ServicesHeader from './components/header'
import HospitalityImageGrid from './components/hospitality-image-grid'
import HospitalitySolutionSection from './components/hospitality-solution'
import ServiceCoverSection from './components/service-cover'
import ServiceList from './components/service-list'
import SuccessStep from './components/success-step'

export default function HospitalityManagementScreen() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <ServicesHeader />
        <HospitalitySolutionSection />
        <HospitalityImageGrid />
        <ServiceCoverSection />
        <ServiceList />
        <SuccessStep />
        <Footer />
      </div>
    </div>
  )
}
