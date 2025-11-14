import { IoArrowUpOutline } from 'react-icons/io5'

const ManpowerRight = () => {
  return (
    <div className="flex flex-1 items-center space-y-10">
      <div className="flex flex-col flex-wrap gap-5 w-full lg:max-w-116">
        <div className="flex gap-2 items-center px-4 py-1 font-bold uppercase rounded-full border border-primary w-fit">
          <div className="rounded-full bg-primary size-2"></div>
          <p className="text-base">Since 2020</p>
        </div>

        <div className="text-4xl font-bold md:text-4xl">
          Trusted Facilities & Manpower <span className="text-primary">Solutions</span> in UAE
        </div>

        <div className="text-sm text-gray md:text-base">
          We take pride in our loyal and highly skilled workforce, trained through rigorous development programs. To
          maintain consistent quality, our management team conducts regular spot checks, ensuring that every service
          meets the highest standards.
        </div>

        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-2">
            <div className="text-base font-bold text-black md:text-lg">Hospitality Manpower</div>
            <hr className="w-full text-gray/10" />
            <p className="text-sm text-gray">Our team of experts ensures top-quality results.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-base font-bold text-black md:text-lg">Sustainable Solutions</div>
            <hr className="w-full text-gray/10" />
            <p className="text-sm text-gray">Our team of experts ensures top-quality results.</p>
          </div>
        </div>

        <div className="hover:bg-primary border-primary group flex w-fit items-center gap-2 rounded-full border p-1.5 font-bold transition duration-300 md:p-2">
          <p className="px-3 text-base font-inter group-hover:text-white">Discover More</p>
          <div className="p-2 rounded-full bg-primary group-hover:bg-white">
            <IoArrowUpOutline className="text-white rotate-45 group-hover:text-primary" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManpowerRight
