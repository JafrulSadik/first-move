export default function MissionSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-4xl flex w-[90%] flex-col lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center gap-3">
              <div className="lg:w-60">
                <h1 className="text-3xl font-bold text-[#B79B63] lg:text-4xl">Our Mission</h1>
              </div>
              <div className="h-[3px] w-8 bg-[#B79B63] lg:h-1 lg:w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-sm leading-[150%] text-[#474344] md:text-base">
          <div>
            To deliver reliable, high-quality facilities management solutions that enhance guest satisfaction, protect
            assets, and support our clients' success across hospitality, events, retail, healthcare, education, and
            mixed-use properties.
          </div>
          <div>
            To set the standard for service excellence and innovation in the UAE, building trusted partnerships and
            creating value for our clients, employees, and communities.
          </div>
        </div>
      </div>
    </div>
  )
}
