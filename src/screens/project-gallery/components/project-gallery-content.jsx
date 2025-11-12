import { ArrowUpIcon } from '../../../assets/icons'
import ImageGrid from './image-grid'

const filters = [
  'All',
  'Hospitality Manpower',
  'Security Services',
  'Cleaning',
  'Event Management',
  'Hard & Soft Facility Services',
]

export default function ProjectGalleryContent() {
  const active = 0
  return (
    <div className="mx-auto w-[90%] max-w-7xl">
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

      <ImageGrid />
    </div>
  )
}
