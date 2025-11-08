import { IoArrowUpOutline } from 'react-icons/io5'

export default function SliderCard({ sector }) {
  return (
    <div className="col-span-3 h-full rounded-2xl bg-[#E4D4B4] md:rounded-3xl">
      <div className="px-5 pt-5 md:pt-8 lg:px-10">
        <div className="aspect-square h-full w-full rounded-full bg-white p-8 md:p-10">
          <img src={sector.image} alt={sector.title} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-3 px-2 pb-5 pt-3 md:px-4 md:pb-10 md:pt-5">
        <h3 className="text-md text-center font-bold md:text-xl">{sector.title}</h3>
        <div className="border-primary-500 flex w-fit items-center gap-2 rounded-full border p-1 font-bold">
          <p className="font-inter pl-2 pr-2 text-sm font-bold text-gray-700 lg:pr-0">Read More</p>
          <div className="bg-primary hidden rounded-full p-2 lg:block">
            <IoArrowUpOutline className="rotate-45 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}
