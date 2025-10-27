import { IoArrowUpOutline } from 'react-icons/io5'
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
  },
  {
    id: 2,
    name: 'Security Services',
    image: Security,
  },
  {
    id: 3,
    name: 'Mall & Office Cleaning',
    image: Cleaning,
  },
  {
    id: 4,
    name: 'Event Management',
    image: EventManagement,
  },
  {
    id: 5,
    name: 'Hard & Soft Facility Services',
    image: HardAndSoftFacility,
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
                <div className="border-primary-500 flex w-fit items-center gap-2 rounded-full border p-1 font-bold">
                  <p className="font-inter px-3 text-base font-bold text-gray-700">Learn More</p>
                  <div className="bg-primary rounded-full p-2">
                    <IoArrowUpOutline className="rotate-45 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PremiumServices
