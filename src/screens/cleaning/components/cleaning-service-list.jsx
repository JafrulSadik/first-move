import { OkayIcon } from '../../../assets/icons'

const ceaningServiceList = [
  'Public-Area Cleaning',
  'Restroom Hygiene & Frequent Checks',
  'Daily & Deep Cleaning (All Areas)',
  'High-Touch Disinfection',
  'Pantry & Food-Court Cleanin',
  'Back-of-House & BOH Hygiene',
  'Waste Segregation & Hazard Reporting',
  'Laundry & Linen Support',
  'Floor Care with Appropriate Chemicals',
  'Cart Sanitization & Trolley Recovery',
  'Night Deep Cleaning & Façade Glass',
  'Flexible Staffing for Events & Peak Hours',
  'Flexible, reliable people, clear SLAs, and continuous improvement to lift satisfaction, protect assets, and reduce overtime reliance without compromising standards.',
]

export default function CleaningServiceList() {
  return (
    <div className="mb-15 my-10 flex justify-center">
      <div className="flex w-[90%] max-w-4xl flex-col items-start justify-center gap-8 md:w-full md:flex-row">
        <div className="flex flex-1 justify-center md:justify-end">
          <div className="md:rounded-b-4xl md:rounded-tl-4xl w-full space-y-4 rounded-lg bg-[#FBF7E2] p-6 md:w-[85%] md:space-y-6 md:p-8">
            <h1 className="text-3xl font-bold text-[#231F20] md:text-4xl">Our cleaning services include:</h1>
            <p className="text-base leading-[160%] text-[#474344] md:text-lg">
              All staff are trained on PPE, color-coded tools, eco-friendly chemicals, and audit checklists. Supervisors
              ensure compliance, safety, and consistent results across all property types.
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-2 rounded-t-xl rounded-bl-xl rounded-br-[80px] bg-[#FBF7E2] px-6 py-10 md:space-y-4 md:px-8">
          {ceaningServiceList.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="min-w-6">
                <img className="w-4" src={OkayIcon} alt="" />
              </div>
              <p className="font-bold text-[#454545] md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
