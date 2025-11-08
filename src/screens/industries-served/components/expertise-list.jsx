import { OkayIcon } from '../../../assets/icons'

const expertiseList = [
  'Manned Guarding & Patrols',
  'Parking & Perimeter Security',
  'Access Control & Visitor Management',
  'Event Security',
  'CCTV Monitoring',
  'Retail Loss Prevention',
  'Emergency Response & Evacuation',
  'Key Management',
  'Reception & Lobby Security',
  'Fire Safety & Alarm Monitoring',
  'Vetted, licensed guards and a proactive approach to risk management for total site protection.',
]

export default function ExpertiseList() {
  return (
    <div className="flex justify-center mb-8">
      <div className="grid w-[90%] max-w-3xl grid-cols-12 gap-4 lg:w-full">
        {expertiseList.map((item, index) => (
          <div
            key={index}
            className={`col-span-12 flex gap-2 rounded-lg bg-[#FBF7E2] p-4 ${index === expertiseList.length - 1 && index % 2 === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}`}
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
