import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router'
import AboutHeaderBg from '../../../assets/backgrounds/about-header-bg.jpg'

export default function Header() {
  return (
    <div className="relative bg-cover pt-10 md:pt-20" style={{ backgroundImage: `url(${AboutHeaderBg})` }}>
      <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center py-10 text-sm text-white md:gap-2 md:py-20 md:text-base">
        <h1 className="text-center text-xl font-bold md:text-5xl">Mission & Vision</h1>
        <div className="flex items-center gap-2">
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
