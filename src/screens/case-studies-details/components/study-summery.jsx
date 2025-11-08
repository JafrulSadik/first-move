import ApproachImage from '../../../assets/images/case-studies-details/study-summery/approch.png'
import ChallengeFacedImage from '../../../assets/images/case-studies-details/study-summery/challange-faced.png'
import ResultsAchievedImage from '../../../assets/images/case-studies-details/study-summery/results-achieve.png'
import ServicesDeliveredImage from '../../../assets/images/case-studies-details/study-summery/service-deliverd.jpg'

export default function StudySummery() {
  return (
    <div className="flex flex-col gap-5 lg:gap-16">
      <div className="mx-auto grid max-w-5xl grid-cols-12 gap-4 rounded-xl bg-white p-6 shadow-md lg:gap-8">
        <div className="col-span-12 flex rounded-xl border border-[#D5D5D5] lg:col-span-4">
          <img src={ChallengeFacedImage} alt="" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="col-span-12 flex flex-col justify-center py-4 lg:col-span-8">
          <h3 className="mb-5 text-3xl font-bold text-[#D5A13A]">Challenges Faced</h3>

          <div>
            <h4 className="text-base font-bold text-[#333333]">Stringent Hygiene Requirements:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Operating within the food industry, Silal faced stringent hygiene standards and regulations, necessitating
              meticulous cleaning and maintenance procedures.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#333333]">Large-Scale Operations:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Managing housekeeping services for 22 properties presented logistical complexities, including resource
              allocation and coordination across diverse locations.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#333333]">Occupant Safety:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Ensuring the safety and well-being of Silal's employees amidst the ongoing cleaning activities was
              paramount, requiring careful planning and execution.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-12 gap-4 rounded-xl bg-white p-6 shadow-md lg:gap-8">
        <div className="col-span-12 flex rounded-xl border border-[#D5D5D5] lg:col-span-4">
          <img src={ServicesDeliveredImage} alt="" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="col-span-12 flex flex-col justify-center py-4 lg:col-span-8">
          <h3 className="mb-5 text-3xl font-bold text-[#D5A13A]">Services Delivered</h3>

          <div>
            <h4 className="text-base font-bold text-[#333333]">Comprehensive Cleaning:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Our team executed thorough internal and external cleaning routines tailored to the unique requirements of
              food manufacturing facilities, including equipment sanitation and waste management
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#333333]">Provision of Helper Services:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              In addition to standard cleaning tasks, we provided helper services to support Silal's workforce,
              facilitating smooth operations and minimizing disruptions.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-12 gap-4 rounded-xl bg-white p-6 shadow-md lg:gap-8">
        <div className="col-span-12 flex items-center rounded-xl border border-[#D5D5D5] lg:col-span-4">
          <img src={ResultsAchievedImage} alt="" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="col-span-12 flex flex-col justify-center py-4 lg:col-span-8">
          <h3 className="mb-5 text-3xl font-bold text-[#D5A13A]">Results Achieved</h3>

          <div>
            <h4 className="text-base font-bold text-[#333333]">Enhanced Hygiene Standards:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Through diligent execution of tailored cleaning protocols, we helped Silal maintain impeccable hygiene
              standards across all 22 properties, mitigating the risk of contamination and ensuring product integrity.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#333333]">Operational Efficiency:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Our provision of helper services streamlined Silal's operations, allowing their workforce to focus on core
              tasks while benefiting from additional support in ancillary activities.
            </p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#333333]">Regulatory Compliance:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              By adhering to industry-specific regulations and standards, Silal remained in compliance with food safety
              requirements, safeguarding their reputation and consumer trust.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-12 gap-4 rounded-xl bg-white p-6 shadow-md lg:gap-8">
        <div className="col-span-12 flex items-center rounded-xl border border-[#D5D5D5] lg:col-span-4">
          <img src={ApproachImage} alt="" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="col-span-12 flex flex-col justify-center py-4 lg:col-span-8">
          <h3 className="mb-5 text-3xl font-bold text-[#D5A13A]">Approach</h3>

          <div>
            <h4 className="text-base font-bold text-[#333333]">Customized Cleaning Protocols:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Leveraging our expertise in facility management, we developed customized cleaning protocols aligned with
              Silal's industry-specific hygiene standards and regulatory requirements.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-[#333333]">Specialized Training:</h4>

            <p className="text-base leading-[150%] text-[#737373]">
              Our cleaning staff underwent specialized training programs focused on food safety, hygiene practices, and
              handling of cleaning agents, ensuring compliance with industry standards. 3.Regular Quality Audits: We
              conducted regular quality audits and inspections to maintain consistency and identify areas for
              improvement, fostering a culture of continuous refinement.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
