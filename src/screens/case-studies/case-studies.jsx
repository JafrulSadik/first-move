import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import CaseStudiesContent from './components/case-studies-content'
import CaseStudiesHeader from './components/case-studies-header'
import CaseStudiesTitle from './components/case-studies-title'

export default function CaseStudiesScreen() {
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="w-full">
        <Navbar />
        <CaseStudiesHeader />
        <CaseStudiesTitle />
        <CaseStudiesContent />
        <Footer />
      </div>
    </div>
  )
}
