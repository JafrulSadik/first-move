import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import { Slider } from '../../components/slider'
import About from './components/about'
import GovernmentHeader from './components/header'

export default function GovernmentScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <GovernmentHeader />
        <About />
        <Slider />
        <Footer />
      </div>
    </div>
  )
}
