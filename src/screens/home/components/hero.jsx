import HeroBackground from '../../../assets/backgrounds/carousel-bg-1.png'
import { ArrowUpIcon } from '../../../assets/icons'

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-10 bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="mt-10 flex flex-col items-center space-y-6 md:pt-20">
        <h1 className="leading-15 max-w-10/12 md:leading-20 text-center text-5xl font-bold text-white md:max-w-4xl md:text-7xl">
          We offer a wide range of services.
        </h1>
        <p className="max-w-3xl px-5 text-center leading-6 text-white md:font-bold">
          "Hospitality & Event Management, Wedding Catering & Private Functions, Recreational Services, Sales &
          Promotion Services, Technical & Utility Services, Building Cleaning & Maintenance, Housekeeping & Pantry
          Services, Guest House Management."
        </p>
      </div>

      <div className="bg-primary flex items-center gap-3 rounded-full px-4 py-2 text-lg font-bold uppercase text-white md:py-3">
        <span className="mx-2 text-sm md:text-base">Take Counsel</span>
        <div className="flex size-10 items-center justify-center rounded-full bg-white">
          <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} className="rotate-225" />
        </div>
      </div>

      <div className="mt-10 hidden size-10 items-center justify-center rounded-full bg-white md:flex">
        <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} />
      </div>
    </div>
  )
}

export default Hero
