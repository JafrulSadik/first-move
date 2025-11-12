import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import AboutHeaderBg from '../../../assets/backgrounds/about-header-bg.jpg'

export default function Header() {
  return (
    <div className="relative pt-10 bg-cover md:pt-20" style={{ backgroundImage: `url(${AboutHeaderBg})` }}>
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
      <div className="flex relative z-10 flex-col justify-center items-center py-10 text-sm text-white md:gap-2 md:py-20 md:text-base">
        <h1 className="text-2xl font-bold text-center md:text-5xl">Mission & Vision</h1>
        <div className="flex gap-2 items-center">
          <Link to="/">Home</Link>
          <p>
            <MdKeyboardArrowRight />
          </p>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </div>
  )
}
