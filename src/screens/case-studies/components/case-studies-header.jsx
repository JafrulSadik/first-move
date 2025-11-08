import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import CaseStudiesHeaderBg from '../../../assets/backgrounds/sector-header-bg.png'

export default function CaseStudiesHeader() {
  return (
    <div
      className="relative pt-10 bg-center bg-cover md:pt-20"
      style={{ backgroundImage: `url(${CaseStudiesHeaderBg})` }}
    >
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <div className="flex relative z-10 flex-col justify-center items-center py-10 text-sm text-white md:gap-6 md:py-20 md:text-base">
        <h1 className="text-xl font-bold text-center md:text-5xl">Case Studies</h1>
        <div className="flex gap-2 items-center">
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
