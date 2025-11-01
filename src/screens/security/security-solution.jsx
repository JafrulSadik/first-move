import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import SecuritySolutionHeader from './components/header'
import SecurityCoverSection from './components/security-cover'
import SecurityImgGrid from './components/security-img-grid'
import SecurityList from './components/security-list'
import SolutionDescription from './components/soution-description'
import SuccessStep from './components/success-step'

export default function SecuritySolutionScreen() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <SecuritySolutionHeader />
        <SolutionDescription />
        <SecurityImgGrid />
        <SecurityCoverSection />
        <SecurityList />
        <SuccessStep />
        <Footer />
      </div>
    </div>
  )
}
