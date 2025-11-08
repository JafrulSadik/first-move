import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import InsightsContent from './components/insights-content'
import InsightsHeader from './components/insights-header'

export default function InsightsScreen() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <InsightsHeader />
        <InsightsContent />
        <Footer />
      </div>
    </div>
  )
}
