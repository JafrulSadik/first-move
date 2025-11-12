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
    link: '/hard-and-soft-facility',
  },
]

const PremiumServices = () => {
  return (
    <div className="md:py-15 flex justify-center bg-white py-10">
      <div className="w-[90%] max-w-5xl">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 flex flex-col items-center justify-center gap-4 rounded-lg p-6 md:col-span-6 md:items-start lg:col-span-4">
            <div className="border-primary flex w-fit items-center gap-2 rounded-full border px-4 py-1 font-bold uppercase">
              <div className="bg-primary size-2 rounded-full"></div>
              <p className="text-base">Since 2020</p>
            </div>
            <p className="lg:leading-15 text-center text-4xl font-bold leading-10 md:text-left md:text-5xl">
              Our Premium Services
            </p>
          </div>

          {services.map((service) => (
            <div key={service.id} className="bg-secondary col-span-12 rounded-xl p-6 md:col-span-6 lg:col-span-4">
              <img src={service.image} alt={service.name} className="w-full" />
              <h3 className="font-inter my-5 text-center text-xl font-bold">{service.name}</h3>
              <div className="flex justify-center">
                <Link
                  to={service.link}
                  className="border-primary-500 hover:border-primary-500 hover:bg-primary-500 group flex w-fit items-center gap-2 rounded-full border p-1 font-bold transition-colors duration-300 ease-in-out"
                >
                  <p className="font-inter px-3 text-base font-bold text-gray-700 transition-colors duration-300 ease-in-out group-hover:text-white">
                    Learn More
                  </p>
                  <div className="bg-primary rounded-full p-2 transition-colors duration-300 ease-in-out group-hover:bg-white">
                    <IoArrowUpOutline className="group-hover:text-primary-500 rotate-45 text-white transition-colors duration-300 ease-in-out" />
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
