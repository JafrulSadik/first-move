import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import SectorHeader from '../../components/sector-header/sector-header'
import { Slider } from '../../components/slider'
import About from './components/about'

export default function SecuritySectorScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <SectorHeader title="Security Sector" linkTag="security-sector" />
        <About />
        <Slider />
        <Footer />
      </div>
    </div>
  )
}
