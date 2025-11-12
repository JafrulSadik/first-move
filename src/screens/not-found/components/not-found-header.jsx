import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import SectorHeaderBg from '../../../assets/backgrounds/sector-header-bg.png'

export default function NotFoundHeader() {
  return (
    <div className="relative pt-10 bg-center bg-cover md:pt-20" style={{ backgroundImage: `url(${SectorHeaderBg})` }}>
      <div className="absolute inset-0 bg-[#000000] opacity-70"></div>
      <div className="flex relative z-10 flex-col justify-center items-center py-12 text-sm text-white md:gap-4 md:py-20 md:text-base">
        <h1 className="text-2xl font-bold text-center md:text-5xl">Error Page</h1>
        <div className="flex flex-wrap justify-center items-center px-5 md:gap-2">
          <Link to="/">Home</Link>

          <span>
            <MdKeyboardArrowRight />
          </span>
          <Link to={`/404`}>404 Page</Link>
        </div>
      </div>
    </div>
  )
}
