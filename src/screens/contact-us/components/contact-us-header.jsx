import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import SectorHeaderBg from '../../../assets/backgrounds/sector-header-bg.png'

export default function ContactUsHeader() {
  return (
    <div className="relative bg-cover bg-center pt-10 md:pt-20" style={{ backgroundImage: `url(${SectorHeaderBg})` }}>
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center py-12 text-sm text-white md:gap-4 md:py-20 md:text-base">
        <h1 className="text-center text-xl font-bold md:text-5xl">Contact Us</h1>
        <div className="flex flex-wrap items-center justify-center px-5 md:gap-2">
          <Link to="/">Home</Link>

          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link to={`/contact-us`}>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
