export default function SecurityCoverSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:w-6xl flex w-[90%] flex-col md:w-full lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center lg:gap-5">
              <div className="lg:w-96">
                <h1 className="text-3xl font-bold leading-[140%] text-[#B79B63] lg:text-4xl">Our services cover</h1>
              </div>
              <div className="h-[3px] w-12 bg-[#B79B63] lg:h-1 lg:w-12" />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-sm leading-[150%] text-[#474344] md:text-base">
          <div>
            The main thrust is to focus on educating attendees on how to best protect highly vulnerable business
            applications with interactive panel discussions and roundtables.
          </div>
        </div>
      </div>
    </div>
  )
}
