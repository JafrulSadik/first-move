import Navbar from '../../components/navbar/navbar'
import Hero from './components/hero'
import ManpowerSection from './components/manpower-section'
import PremiumServices from './components/permium-services'
import SupportSection from './components/support-section'

const HomePage = () => {
  return (
    <div className="flex w-full justify-center bg-black">
      <div className="max-w-[1400px]">
        <Navbar />
        <Hero />
        <ManpowerSection />
        <SupportSection />
        <PremiumServices />
      </div>
    </div>
  )
}

export default HomePage
