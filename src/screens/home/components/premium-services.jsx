import { IoArrowUpOutline } from 'react-icons/io5'
import { Link } from 'react-router'
import EventManagement from '../../../assets/images/homepage/premium-services/event-management.png'
import HardAndSoftFacility from '../../../assets/images/homepage/premium-services/hard-and-soft-facility.png'
import Hospitality from '../../../assets/images/homepage/premium-services/hospitality-manpower.png'
import Cleaning from '../../../assets/images/homepage/premium-services/mall-and-office-cleaning.png'
import Security from '../../../assets/images/homepage/premium-services/security.png'

const services = [
  {
    id: 1,
    name: 'Hospitality Manpower',
    image: Hospitality,
    link: '/hospitality-management',
  },
  {
    id: 2,
    name: 'Security Services',
    image: Security,
    link: '/security-solutions',
  },
  {
    id: 3,
    name: 'Mall & Office Cleaning',
    image: Cleaning,
    link: '/cleaning-services',
  },
  {
    id: 4,
    name: 'Event Management',
    image: EventManagement,
    link: '/event-management',
  },
  {
    id: 5,
    name: 'Hard & Soft Facility Services',
    image: HardAndSoftFacility,
    link: '/hard-and-soft-facilities',
  },
]

const PremiumServices = () => {
  return (
    <div className="flex justify-center py-10 md:py-15 bg-body">
      <div className="w-[90%] max-w-5xl">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="flex flex-col col-span-12 gap-4 justify-center items-center p-6 rounded-lg md:col-span-6 md:items-start lg:col-span-4">
            <div className="flex gap-2 items-center px-4 py-1 font-bold uppercase rounded-full border border-primary w-fit">
              <div className="rounded-full bg-primary size-2"></div>
              <p className="text-base">Since 2020</p>
            </div>
            <p className="text-4xl font-bold leading-10 text-center lg:leading-15 md:text-left md:text-5xl">
              Our Premium Services
            </p>
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className="col-span-12 p-6 rounded-xl transition-all duration-500 ease-in-out bg-secondary hover:scale-105 md:col-span-6 lg:col-span-4"
            >
              <img src={service.image} alt={service.name} className="w-full" />
              <h3 className="my-5 text-xl font-bold text-center font-inter">{service.name}</h3>
              <div className="flex justify-center">
                <Link
                  to={service.link}
                  className="flex gap-2 items-center p-1 font-bold rounded-full border transition-colors ease-in-out duration-800 border-primary-500 hover:border-primary-500 hover:bg-primary-500 group w-fit"
                >
                  <p className="px-3 text-base font-bold text-gray-700 transition-colors duration-300 ease-in-out font-inter group-hover:text-white">
                    Learn More
                  </p>
                  <div className="p-2 rounded-full transition-colors duration-300 ease-in-out bg-primary group-hover:bg-white">
                    <IoArrowUpOutline className="text-white transition-colors duration-300 ease-in-out rotate-45 group-hover:text-primary-500" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PremiumServices
