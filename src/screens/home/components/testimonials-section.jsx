import { QuoteIcon } from '../../../assets/icons'
import ClientOne from '../../../assets/images/homepage/client-feedback/client-1.png'
import ClientTwo from '../../../assets/images/homepage/client-feedback/client-2.png'
import ClientThree from '../../../assets/images/homepage/client-feedback/client-3.png'
import ClientFour from '../../../assets/images/homepage/client-feedback/client-4.png'
import ClientFive from '../../../assets/images/homepage/client-feedback/client-5.png'

function TestimonialsSection() {
  return (
    <section className="md:py-15 flex justify-center bg-white py-5">
      <div className="flex w-[90%] max-w-5xl flex-col items-center gap-4 md:gap-8">
        {/* Badge */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
          <div className="size-2 rounded-full bg-[#B79B63]"></div>
          <p className="text-sm text-[#231F20] md:text-base">Testimonials</p>
        </div>

        {/* Title */}
        <div className="leading-12 md:leading-15 max-w-3xl text-center text-4xl font-bold text-[#231F20] md:text-5xl">
          Here’s What <span className="text-[#B79B63]">Warm Words Our Clients</span> Say
        </div>

        <div className="relative flex w-full max-w-5xl flex-col items-center pt-5">
          <div className="relative z-20 mb-10 max-w-2xl rounded-lg bg-[#FBF7E2]">
            <div className="p-8">
              <div className="flex justify-center">
                <img src={QuoteIcon} className="size-20" />
              </div>
              <p className="mb-10 text-center leading-[150%] text-[#231F20]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock
              </p>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <img src={ClientOne} className="size-15 rounded-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-center text-2xl font-bold">Zams Walker</h3>
            <p className="text-center text-sm text-[#7D7D7D]">CEO Example Company</p>
          </div>

          <div className="hidden w-full max-w-2xl items-center justify-center md:flex">
            <img src={ClientTwo} alt="" className="absolute left-0 top-0 size-20" />
            <img src={ClientFive} alt="" className="top-15 absolute right-0 size-20" />
            <img src={ClientThree} alt="" className="left-15 absolute bottom-5 size-16" />
            <img src={ClientFour} alt="" className="right-15 absolute bottom-20 size-16" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
