import CeoImage from '../../../assets/images/homepage/client-feedback/client-1.png'

export default function CeoMessageSection() {
  return (
    <div className="my-4 flex flex-col items-center md:my-0">
      <div className="lg:w-4xl flex w-[90%] flex-col lg:flex-row lg:gap-16 lg:py-10">
        <div className="my-4 flex flex-1 lg:my-0 lg:justify-end">
          <div className="flex lg:items-start">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 lg:w-72">
                <div className="size-12 md:size-16">
                  <img src={CeoImage} alt="ceo" />
                </div>
                <div>
                  <h1 className="text-lg font-bold">Zams Walker</h1>
                  <p className="text-sm text-[#505050]">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-2 text-lg leading-[130%] text-[#474344] lg:text-2xl">
          “At First Move Facilities Management Services, we don’t just deliver services — we create trust, value, and
          lasting partnerships. Every step we take is guided by excellence and a vision for a better tomorrow.”
        </div>
      </div>

      <hr className="my-10 h-px w-[90%] max-w-6xl bg-[#AAAAAA]" />
    </div>
  )
}
