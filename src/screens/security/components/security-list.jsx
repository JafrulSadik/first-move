import { OkayIcon } from '../../../assets/icons'

const securityList = [
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

export default function SecurityList() {
  return (
    <div className="my-8 flex justify-center">
      <div className="grid w-[90%] max-w-4xl grid-cols-12 gap-4 lg:w-full">
        {securityList.map((item, index) => (
          <div
            key={index}
            className={`col-span-12 flex gap-2 rounded-lg bg-[#FBF7E2] p-4 ${index === securityList.length - 1 && index % 2 === 0 ? 'lg:col-span-12' : 'lg:col-span-6'}`}
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
