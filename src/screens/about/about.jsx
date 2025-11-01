import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import CertificateSection from '../home/components/certificate-section'
import CeoMessageSection from './components/ceo-message'
import Header from './components/header'
import MissionSection from './components/mission-section'
import StoryImageGrid from './components/story-image-grid'
import StorySection from './components/story-section'
import TeamDetails from './components/team-details'
import VisionSection from './components/vision-section'
export default function AboutPage() {
  return (
    <div className="flex w-full justify-center bg-white">
      <div className="w-full">
        <Navbar />
        <Header />
        <StorySection />
        <StoryImageGrid />
        <MissionSection />
        <VisionSection />
        <CeoMessageSection />
        <TeamDetails />
        <CertificateSection />
        <Footer />
      </div>
    </div>
  )
}
