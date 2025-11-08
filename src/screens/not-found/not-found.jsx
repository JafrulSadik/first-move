import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import NotFoundContent from './components/not-found-content'
import NotFoundHeader from './components/not-found-header'

export default function NotFoundScreen() {
  return (
    <div className="flex w-full justify-center bg-[#FFFEF9]">
      <div className="w-full">
        <Navbar />
        <NotFoundHeader />
        <NotFoundContent />
        <Footer />
      </div>
    </div>
  )
}
