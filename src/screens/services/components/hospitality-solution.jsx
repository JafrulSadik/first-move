export default function HospitalitySolutionSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-4xl flex w-[90%] flex-col lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center gap-3">
              <div className="lg:w-80">
                <h1 className="text-3xl font-bold leading-[140%] text-[#B79B63] lg:text-4xl">
                  Our Hospitality Solutions
                </h1>
              </div>

              <div className="h-[3px] w-12 bg-[#B79B63] lg:h-1 lg:w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-sm leading-[150%] text-[#474344] md:text-base">
          <div>
            Our trained teams cover front- and back-of-house operations, supported by rigorous SOPs, daily briefings,
            and visible supervision. From a seamless check-in to a spotless room and a perfectly set banquet, we ensure
            every guest interaction reflects your brand values and commitment to excellence.
          </div>
        </div>
      </div>
    </div>
  )
}
