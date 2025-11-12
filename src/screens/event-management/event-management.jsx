import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import AboutEventManagement from './components/about'
import EventManagementHeader from './components/event-management-header'
import EventServiceDetails from './components/event-service-details'
import ServiceCover from './components/service-cover'

export default function EventManagementScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <EventManagementHeader />
        <AboutEventManagement />
        <EventServiceDetails />
        <ServiceCover />
        <Footer />
      </div>
    </div>
  )
}
