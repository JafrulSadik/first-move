import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import ProjectGalleryContent from './components/project-gallery-content'
import ProjectGalleryHeader from './components/project-gallery-header'
import ProjectGalleryTitle from './components/project-gallery-title'

export default function ProjectGalleryScreen() {
  return (
    <div className="flex justify-center w-full bg-white">
      <div className="w-full">
        <Navbar />
        <ProjectGalleryHeader />
        <ProjectGalleryTitle />
        <ProjectGalleryContent />
        <Footer />
      </div>
    </div>
  )
}
