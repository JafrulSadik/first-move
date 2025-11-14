import { Link } from 'react-router'
import HeroBackground from '../../../assets/backgrounds/carousel-bg-1.png'
import { ArrowUpIcon } from '../../../assets/icons'

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-10 justify-center items-center py-20 bg-center bg-cover"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="flex flex-col items-center mt-10 space-y-6 md:pt-20">
        <h1 className="text-5xl font-bold text-center text-white leading-15 max-w-10/12 md:leading-20 md:max-w-4xl md:text-7xl">
          We offer a wide range of services.
        </h1>
        <p className="px-5 max-w-3xl leading-6 text-center text-white md:font-bold">
          "Hospitality & Event Management, Wedding Catering & Private Functions, Recreational Services, Sales &
          Promotion Services, Technical & Utility Services, Building Cleaning & Maintenance, Housekeeping & Pantry
          Services, Guest House Management."
        </p>
      </div>

      <Link
        to={'/hospitality-management'}
        className="flex gap-3 items-center px-4 py-3 text-lg font-bold text-white uppercase rounded-full bg-primary md:py-3"
      >
        <span className="mx-4 text-sm md:text-base">Take Counsel</span>
        <div className="flex justify-center items-center bg-white rounded-full size-10">
          <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} className="rotate-225" />
        </div>
      </Link>

      <div className="hidden justify-center items-center mt-10 bg-white rounded-full size-10 md:flex">
        <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} />
      </div>
    </div>
  )
}

export default Hero
