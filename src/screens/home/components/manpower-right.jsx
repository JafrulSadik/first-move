import { IoArrowUpOutline } from 'react-icons/io5'

const ManpowerRight = () => {
  return (
    <div className="flex flex-1 items-center space-y-10">
      <div className="lg:max-w-116 flex w-full flex-col flex-wrap gap-5">
        <div className="border-primary flex w-fit items-center gap-2 rounded-full border px-4 py-1 font-bold uppercase">
          <div className="bg-primary size-2 rounded-full"></div>
          <p className="text-base">Since 2020</p>
        </div>

        <div className="text-4xl font-bold">
          Trusted Facilities & Manpower <span className="text-primary">Solutions</span> in UAE
        </div>

        <div className="text-gray text-sm md:text-base">
          We take pride in our loyal and highly skilled workforce, trained through rigorous development programs. To
          maintain consistent quality, our management team conducts regular spot checks, ensuring that every service
          meets the highest standards.
        </div>

        <div className="flex w-full gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-base font-bold text-black md:text-lg">Hospitality Manpower</div>
            <hr className="text-gray/10 w-full" />
            <p className="text-gray text-sm">Our team of experts ensures top-quality results.</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-base font-bold text-black md:text-lg">Sustainable Solutions</div>
            <hr className="text-gray/10 w-full" />
            <p className="text-gray text-sm">Our team of experts ensures top-quality results.</p>
          </div>
        </div>

        <div className="border-primary flex w-fit items-center gap-2 rounded-full border p-2 font-bold">
          <p className="font-inter px-3 text-base">Discover More</p>
          <div className="bg-primary rounded-full p-2">
            <IoArrowUpOutline className="rotate-45 text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManpowerRight
