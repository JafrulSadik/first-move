import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import ContactUsContent from './components/contact-us-content'
import ContactUsHeader from './components/contact-us-header'
import ContactUsMap from './components/contact-us-map'

export default function ContactUsScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <ContactUsHeader />
        <ContactUsContent />
        <ContactUsMap />
        <Footer />
      </div>
    </div>
  )
}
