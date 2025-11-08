import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import CaseStudiesHeaderBg from '../../../assets/backgrounds/sector-header-bg.png'

export default function CaseStudiesDetailsHeader() {
  return (
    <div
      className="relative bg-cover bg-center pt-10 md:pt-20"
      style={{ backgroundImage: `url(${CaseStudiesHeaderBg})` }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-sm text-white md:gap-6 md:py-20 md:text-base">
        <h1 className="text-center text-xl font-bold md:text-5xl">Case Studies</h1>
        <div className="flex items-center gap-2">
          <Link to="/">Home</Link>
          <p>
            <MdKeyboardArrowRight />
          </p>
          <Link to="/case-studies">Case Studies</Link>
        </div>
      </div>
    </div>
  )
}
