import { IoArrowUpOutline } from 'react-icons/io5'
import { Link } from 'react-router'
import { OkayIcon } from '../../../assets/icons'
import ServiceCoverImg from '../../../assets/images/event-management/event-management-service-cover.png'

const eventServices = [
  'Venue Setup & Decoration',
  'Registration & Guest Management',
  'Ushers & Hostesses',
  'Technical & AV Support',
  'Catering Coordination',
  'Crowd Control & Security',
  'VIP & Backstage Services',
  'Cleaning & Waste Management',
  'Logistics & Equipment Handling',
  'Emergency Response Team',
  'Flexible, reliable teams and a focus on guest experience to ensure your event runs smoothly from start to finish',
]

export default function ServiceCover() {
  return (
    <div>
      <div className="mx-auto mb-10 w-[90%] max-w-xl text-center">
        <span className="text-2xl font-bold text-[#474747] md:text-4xl">
          Our <span className="text-[#CAA05C]">services</span> cover:
        </span>
        <p className="mt-4 text-center font-bold leading-[150%]">
          We provide end-to-end event support, including crowd control, technical assistance, and VIP management, so you
          can focus on your event’s success.
        </p>
      </div>

      <div className="mx-auto my-10 flex max-w-[1440px] flex-col bg-[#231F20] md:flex-row lg:gap-20">
        <div className="flex-1">
          <img src={ServiceCoverImg} alt="" className="object-cover h-full rounded-r-xl" />
        </div>
        <div className="flex-1 py-10 md:py-15">
          <div className="mx-auto w-[90%] max-w-sm md:mx-0">
            <ul className="flex flex-col gap-3 font-bold">
              {eventServices.map((service, index) => (
                <li key={index} className="flex gap-4 items-center text-white">
                  <img src={OkayIcon} alt="" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto max-w-sm text-center text-[#231F20]">
        If you’d like to see more of our amazing work, visit our <span className="font-bold">Gallery</span> to explore
        real project moments!
      </p>

      <div className="flex justify-center mt-5 mb-10 md:mb-20">
        <Link
          to="/project-gallery"
          className="flex gap-2 items-center p-1 font-bold rounded-full border transition-colors duration-300 ease-in-out border-primary-500 bg-primary-500 group w-fit hover:bg-transparent"
        >
          <p className="px-3 text-base font-bold text-white transition-colors duration-300 ease-in-out font-inter group-hover:text-gray-700">
            Gallery
          </p>
          <div className="p-2 bg-white rounded-full transition-colors duration-300 ease-in-out group-hover:bg-primary">
            <IoArrowUpOutline className="transition-colors duration-300 ease-in-out rotate-45 text-primary-500 group-hover:text-white" />
          </div>
        </Link>
      </div>
    </div>
  )
}
