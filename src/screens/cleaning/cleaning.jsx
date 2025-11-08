import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import AboutCleaning from './components/about-cleaning'
import CleaningImageGrid from './components/cleaning-image-grid'
import CleaningServiceList from './components/cleaning-service-list'
import CleaningHeader from './components/header'
import ServiceDetails from './components/service-details'

export default function CleaningScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <CleaningHeader />
        <AboutCleaning />
        <ServiceDetails />
        <CleaningImageGrid />
        <CleaningServiceList />
        <Footer />
      </div>
    </div>
  )
}
