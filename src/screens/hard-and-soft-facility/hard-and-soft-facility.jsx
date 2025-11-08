import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import AboutService from './components/about-service'
import HardAndSoftFacilityHeader from './components/header'

export default function HardAndSoftFacility() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <HardAndSoftFacilityHeader />
        <AboutService />
        <Footer />
      </div>
    </div>
  )
}
