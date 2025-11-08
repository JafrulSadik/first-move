import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import CaseDetailsContent from './components/case-details-content'
import CaseStudiesDetailsHeader from './components/case-studies-details-header'

export default function CaseStudiesDetailsScreen() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <CaseStudiesDetailsHeader />
        <CaseDetailsContent />
        <Footer />
      </div>
    </div>
  )
}
