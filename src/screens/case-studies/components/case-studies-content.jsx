import { IoArrowUpOutline } from 'react-icons/io5'
import { ArrowUpIcon } from '../../../assets/icons'
import CaseStudiesImageOne from '../../../assets/images/case-studies/studies/case-studies-company-1.png'
import CaseStudiesImageTwo from '../../../assets/images/case-studies/studies/case-studies-company-2.png'
import CaseStudiesImageThree from '../../../assets/images/case-studies/studies/case-studies-company-3.png'
import CaseStudiesImageFour from '../../../assets/images/case-studies/studies/case-studies-company-4.png'
import CaseStudiesImageFive from '../../../assets/images/case-studies/studies/case-studies-company-5.png'
import CaseStudiesImageSix from '../../../assets/images/case-studies/studies/case-studies-company-6.png'
import CaseStudiesImageSeven from '../../../assets/images/case-studies/studies/case-studies-company-7.png'
import CaseStudiesImageEight from '../../../assets/images/case-studies/studies/case-studies-company-8.png'
import CaseStudiesImageNine from '../../../assets/images/case-studies/studies/case-studies-company-9.png'

const caseStudiesData = [
  {
    id: 1,
    title: 'Provision of Housekeeping Services',
    company: 'SIALL',
    location: '22 Properties across the UAE',
    image: CaseStudiesImageOne,
    link: 'Learn More',
  },
  {
    id: 2,
    title: 'Office Boy Services for Multiple',
    company: 'Branches',
    location: '51/2 Dubai - UAE',
    image: CaseStudiesImageTwo,
    link: 'Learn More',
  },
  {
    id: 3,
    title: 'Maintenance Services for 9 Tower',
    company: 'Example Name',
    location: 'House No 5/3 Dubai',
    image: CaseStudiesImageThree,
    link: 'Learn More',
  },
  {
    id: 4,
    title: 'Provision of Housekeeping Services',
    company: 'SIALL',
    location: '22 Properties across the UAE',
    image: CaseStudiesImageFour,
    link: 'Learn More',
  },
  {
    id: 5,
    title: 'Office Boy Services for Multiple',
    company: 'Branches',
    location: '51/2 Dubai - UAE',
    image: CaseStudiesImageFive,
    link: 'Learn More',
  },
  {
    id: 6,
    title: 'Maintenance Services for 9 Tower',
    company: 'Example Name',
    location: 'House No 5/3 Dubai',
    image: CaseStudiesImageSix,
    link: 'Learn More',
  },
  {
    id: 7,
    title: 'Provision of Housekeeping Services',
    company: 'SIALL',
    location: '22 Properties across the UAE',
    image: CaseStudiesImageSeven,
    link: 'Learn More',
  },
  {
    id: 8,
    title: 'Office Boy Services for Multiple',
    company: 'Branches',
    location: '51/2 Dubai - UAE',
    image: CaseStudiesImageEight,
    link: 'Learn More',
  },
  {
    id: 9,
    title: 'Maintenance Services for 9 Tower',
    company: 'Example Name',
    location: 'House No 5/3 Dubai',
    image: CaseStudiesImageNine,
    link: 'Learn More',
  },
]

const filters = [
  'All',
  'Hospitality Manpower',
  'Security Services',
  'Cleaning',
  'Event Management',
  'Hard & Soft Facility Services',
]

export default function CaseStudiesContent() {
  const active = 0
  return (
    <div className="mx-auto w-[90%] max-w-6xl">
      <div className="flex overflow-x-auto mb-10 whitespace-nowrap scrollbar-hide">
        <div className="flex gap-2 mx-auto">
          {filters.map((filter, index) => (
            <div
              key={index}
              className={`flex-shrink:0 inline-flex h-8 items-center gap-2 rounded-full border border-[#B79B63] px-1 font-medium md:h-10 ${
                index === active ? 'bg-[#CAA05C]' : ''
              }`}
            >
              {index !== active ? (
                <div className="ml-2 rounded-full flex-shrink:0 bg-primary size-2" />
              ) : (
                <div className="flex justify-center items-center bg-white rounded-full flex-shrink:0 size-6 md:size-8">
                  <img src={ArrowUpIcon} alt="" className="size-5" />
                </div>
              )}

              <p
                className={`font-inter mr-2 whitespace-nowrap text-sm font-bold ${
                  index === active ? 'text-white' : 'text-gray-700'
                }`}
              >
                {filter}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mb-15">
        {caseStudiesData.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className="col-span-12 p-5 rounded-xl bg-secondary md:col-span-6 md:p-6 lg:col-span-4"
          >
            <img src={caseStudy.image} alt={caseStudy.title} className="w-full rounded-xl aspect-4/3" />
            <h3 className="my-5 mb-4 text-lg font-bold font-inter">{caseStudy.title}</h3>
            <p className="mb-1 text-sm font-inter md:text-base">Company : {caseStudy.company}</p>
            <p className="mb-4 text-sm font-inter md:text-base">Location : {caseStudy.location}</p>
            <div className="flex">
              <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] p-1 font-medium">
                <p className="px-3 text-base font-medium text-gray-700 font-inter">Learn More</p>
                <div className="p-2 rounded-full bg-primary">
                  <IoArrowUpOutline className="text-white rotate-45" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
