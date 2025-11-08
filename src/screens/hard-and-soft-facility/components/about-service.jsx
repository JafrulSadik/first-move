import AboutServiceImage from '../../../assets/images/hard-and-soft-facility/about/hard-and-soft-about.png'

import { OkayIcon } from '../../../assets/icons'
import AboutServiceImage2 from '../../../assets/images/hard-and-soft-facility/about/hard-and-soft-about-two.png'

const serviceList = [
  'Electrical & Plumbing Maintenance',
  'HVAC Operation & Servicing',
  'Building Fabric Maintenance',
  'Fire & Safety System Management',
  'Cleaning & Housekeeping Services',
  'Landscaping & Pest Control',
  'Waste Management & Recycling',
  'Security & Access Control',
  'Energy Efficiency Monitoring',
  'Preventive & Reactive Maintenance',
  'Flexible, proactive, and reliable—our facility teams ensure your assets remain safe, functional, and sustainable every day',
]

export default function AboutService() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-12 gap-6 mx-auto max-w-5xl py-15 md:gap-8 lg:py-20">
        <div className="col-span-12 px-5 text-center text-3xl font-bold leading-[130%] md:col-span-6 md:text-4xl lg:px-10 lg:text-left">
          <span className="text-[#CAA05C]">Hard & Soft</span>
          <span className="text-[#474747]"> Facility Services</span>
        </div>
        <div className="col-span-12 text-center md:col-span-6 lg:text-left">
          <p className="px-5 text-base leading-[150%] text-[#474344] md:text-lg">
            Comprehensive facility solutions designed to maintain, enhance, and optimize your property’s performance.
            Our skilled teams ensure safe, efficient, and well-managed environments across residential, commercial, and
            industrial spaces
          </p>
        </div>
      </div>

      <div className="pb-15 mx-auto w-[90%] max-w-6xl">
        <img src={AboutServiceImage} alt="" className="object-cover w-full rounded-xl aspect-6/3" />
      </div>

      <div className="mb-15 mx-auto w-[90%] max-w-3xl">
        <h1 className="text-center text-2xl font-bold leading-[130%] text-[#474747] md:text-4xl">
          Our Facility <br />
          Management Services
        </h1>
        <p className="mt-5 text-center text-base text-[#666666] md:text-lg">
          From daily maintenance to technical operations, we deliver both hard and soft facility services tailored to
          your property’s needs. Our goal is to keep your building systems functional, your environment clean and
          comfortable, and your operations uninterrupted.
          <br />
          <br />
          Our teams are trained to manage preventive maintenance, repair tasks, and hygiene standards with efficiency
          and care. We work closely with clients to maintain compliance, safety, and comfort—ensuring your facilities
          reflect your organization’s professionalism and reliability.
        </p>
      </div>

      <hr className="mx-auto my-5 w-[90%] border-[#7B7B7B]" />

      <div className="md:py-15 mx-auto grid w-[90%] max-w-5xl grid-cols-12 gap-6 py-5 md:gap-8 lg:py-20">
        <div className="col-span-12 text-center md:col-span-7 md:text-left">
          <span className="text-3xl font-bold text-[#474747] md:text-4xl">Our services cover:</span>
        </div>
        <div className="col-span-12 md:col-span-5">
          <p className="text-center text-base leading-[150%] text-[#474344] md:text-left md:text-lg">
            We provide complete facility care—covering everything from engineering maintenance to cleaning and
            security—so you can focus on your core business with peace of mind.
          </p>
        </div>
        <div className="col-span-12 aspect-square md:col-span-7">
          <img src={AboutServiceImage2} alt="" className="object-cover h-full rounded-xl" />
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="flex h-full flex-col justify-center space-y-1 rounded-xl bg-[#FBF7E2] px-6 py-10 md:space-y-4 md:px-8">
            {serviceList.map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="min-w-6">
                  <img className="w-4" src={OkayIcon} alt="" />
                </div>
                <p className="font-bold text-[#454545] md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
