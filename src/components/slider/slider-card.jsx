import { IoArrowUpOutline } from 'react-icons/io5'
import { Link } from 'react-router'

export default function SliderCard({ sector }) {
  return (
    <div className="col-span-3 h-full rounded-2xl bg-[#E4D4B4] md:rounded-3xl">
      <div className="px-5 pt-5 md:pt-8 lg:px-10">
        <div className="p-8 w-full h-full bg-white rounded-full aspect-square md:p-10">
          <img src={sector.image} alt={sector.title} className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-2 pt-3 pb-5 space-y-3 md:px-4 md:pb-10 md:pt-5">
        <h3 className="font-bold text-center text-md md:text-xl">{sector.title}</h3>
        <Link
          to={sector.link}
          className="flex gap-2 items-center p-1 font-bold rounded-full border transition duration-500 border-primary-500 hover:bg-primary group w-fit"
        >
          <p className="pr-2 pl-2 text-sm font-bold text-gray-700 font-inter group-hover:text-white lg:pr-0">
            Read More
          </p>
          <div className="hidden p-2 rounded-full bg-primary group-hover:bg-white lg:block">
            <IoArrowUpOutline className="text-white rotate-45 group-hover:text-primary" />
          </div>
        </Link>
      </div>
    </div>
  )
}
