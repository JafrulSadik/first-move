export default function VisionSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-4xl flex w-[90%] flex-col lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center gap-3 lg:gap-16">
              <h1 className="text-3xl font-bold text-[#B79B63] lg:text-4xl">Our Vision</h1>
              <div className="h-[3px] w-8 bg-[#B79B63] lg:h-1 lg:w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-sm leading-[150%] text-[#474344] md:text-base">
          <div>
            Our vision is to become the leading name in facilities management and outsourcing, setting new benchmarks of
            quality, innovation, and trust across the region. We aspire to be recognized not just as a service provider,
            but as a long-term partner that transforms environments into safer, cleaner, and more efficient spaces.
          </div>
        </div>
      </div>
    </div>
  )
}
