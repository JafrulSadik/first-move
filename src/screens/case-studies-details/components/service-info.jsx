import { FactoryWorkIcon, OutgoingIcon, PinEndIcon, StartIcon } from '../../../assets/icons'

export default function ServiceInfo() {
  return (
    <div className="mb-10 grid grid-cols-12 gap-4 md:gap-5">
      <div className="col-span-6 flex items-center justify-center gap-2 lg:col-span-3">
        <div>
          <img src={OutgoingIcon} alt="" className="size-8 md:size-10" />
        </div>
        <div>
          <p className="text-sm text-[#525252] md:text-base">Status:</p>
          <p className="text-base font-bold text-[#231F20] md:text-lg">On Going</p>
        </div>
      </div>

      <div className="col-span-6 flex items-center justify-center gap-2 lg:col-span-3">
        <div>
          <img src={FactoryWorkIcon} alt="" className="size-8 md:size-10" />
        </div>
        <div>
          <p className="text-sm text-[#525252] md:text-base">No of staff:</p>
          <p className="text-base font-bold text-[#231F20] md:text-lg">Over 250</p>
        </div>
      </div>

      <div className="col-span-6 flex items-center justify-center gap-2 lg:col-span-3">
        <div>
          <img src={StartIcon} alt="" className="size-8 md:size-10" />
        </div>
        <div>
          <p className="text-sm text-[#525252] md:text-base">Start Date:</p>
          <p className="text-base font-bold text-[#231F20] md:text-lg">2024</p>
        </div>
      </div>

      <div className="col-span-6 flex items-center justify-center gap-2 lg:col-span-3">
        <div>
          <img src={PinEndIcon} alt="" className="size-8 md:size-10" />
        </div>
        <div>
          <p className="text-sm text-[#525252] md:text-base">End Date:</p>
          <p className="text-base font-bold text-[#231F20] md:text-lg">Active</p>
        </div>
      </div>
    </div>
  )
}
