export default function StorySection() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-5xl lg:pt-30 w-[90%] pt-5">
        <div className="w-full text-3xl font-bold leading-[150%] md:text-5xl lg:max-w-6xl">
          Building Success with Purpose, Vision, and Dedicated Professionals
        </div>
      </div>

      <div className="lg:w-4xl flex w-[90%] flex-col lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center gap-3">
              <div className="lg:w-60">
                <h1 className="text-3xl font-bold text-[#B79B63] lg:text-4xl">Our Story</h1>
              </div>
              <div className="h-[3px] w-8 bg-[#B79B63] lg:h-1 lg:w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-sm leading-[150%] text-[#474344] md:text-base">
          <div>
            First Move Facilities Management Services was founded with a clear purpose – to deliver world-class
            facilities management and outsourcing services that empower businesses to thrive. Over the years, we have
            become a trusted partner across diverse industries, offering hospitality manpower, security solutions, mall
            & office cleaning, event management, and hard & soft facility services.
          </div>
          <div>
            With a strong focus on quality, professionalism, and reliability, First Move continues to support leading
            hotels, corporate offices, shopping malls, and large-scale events in creating seamless operations. Our
            strength lies in our people, our commitment, and our vision to always take the first step toward excellence.
          </div>
        </div>
      </div>
    </div>
  )
}
