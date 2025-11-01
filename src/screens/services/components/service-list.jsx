import { OkayIcon } from '../../../assets/icons'

const serviceList = [
  'Reception & Concierge Support',
  'Public-Area Cleaning',
  'Lobby Ambassadors',
  'Pantry & Stewarding',
  'Bell Desk',
  'Banquet Setup',
  'Housekeeping & Turndown Service',
  'Back-of-House Hygiene',
  'Laundry & Linen',
  'Standardized Processes & Reporting for Multi-Property Clients',
  'Reliable people, clear SLAs, and continuous improvement to lift guest reviews, protect assets, and reduce overtime reliance without compromising brand experience.',
]

export default function ServiceList() {
  return (
    <div className="my-8 flex justify-center">
      <div className="grid w-[90%] max-w-4xl grid-cols-12 gap-4 lg:w-full">
        {serviceList.map((item, index) => (
          <div
            key={index}
            className={`col-span-12 flex gap-2 rounded-lg bg-[#FBF7E2] p-4 ${index === serviceList.length - 1 && index % 2 === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}`}
          >
            <div className="min-w-7">
              <img src={OkayIcon} alt="" />
            </div>
            <div>
              <p className="font-normal md:font-bold">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
