import IndustriesServedAboutImage from '../../../assets/images/industries-served/about/indurstries-served-about.jpg'

export default function IndustriesServedAbout() {
  return (
    <div className="md:py-15 mx-auto grid w-[90%] max-w-5xl grid-cols-12 py-10 md:gap-10">
      <div className="order-2 col-span-12 w-full md:order-1 lg:col-span-6">
        <img src={IndustriesServedAboutImage} alt="" className="object-cover w-full rounded-xl" />
      </div>
      <div className="flex flex-col order-1 col-span-12 justify-center mb-5 md:order-2 lg:col-span-6 lg:mb-0 lg:gap-5">
        <h2 className="mb-5 text-center text-3xl font-bold text-[#CAA05C] md:text-5xl lg:mb-0 lg:text-left">
          Industries <span className="text-[#231F20]">Served</span>
        </h2>
        <p className="text-center text-base text-[#474344] md:text-left md:text-lg">
          We proudly deliver integrated facility and event management solutions across diverse sectors. Our experience
          spans commercial, corporate, and hospitality industries—ensuring reliable operations, premium presentation,
          and exceptional guest satisfaction.
        </p>
      </div>
    </div>
  )
}
