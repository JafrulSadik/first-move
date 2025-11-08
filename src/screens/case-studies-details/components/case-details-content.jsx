import About from './about'
import CaseDetailsTitle from './case-details-title'
import ImageSlide from './image-slide'
import ServiceInfo from './service-info'
import StudySummery from './study-summery'

export default function CaseDetailsContent() {
  return (
    <div className="mx-auto w-[90%] max-w-6xl py-10 md:py-20">
      <CaseDetailsTitle />
      <ServiceInfo />
      <ImageSlide />
      <About />
      <StudySummery />
    </div>
  )
}
