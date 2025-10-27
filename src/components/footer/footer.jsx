import FooterBg from '../../assets/backgrounds/footer-bg.png'
import { Logo } from '../../assets/logo'

export default function Footer() {
  return (
    <div
      className="pb-25 relative overflow-hidden md:pb-40 lg:pb-80"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pt-15 relative flex justify-center bg-[#232221]/60">
        <div className="flex w-[90%] max-w-5xl flex-col justify-center lg:w-full">
          {/* grid */}
          <div className="grid border-separate grid-cols-12 lg:gap-4">
            <div className="order-1 col-span-6 flex flex-col justify-end border-b border-[#A4885A] pb-4 lg:order-1 lg:col-span-4 lg:border-none lg:pb-0">
              <div className="mb-4">
                <img src={Logo} alt="" className="lg:h-15 h-12" />
              </div>
              <div className="mb-3 hidden font-bold text-white md:block">
                We transform your vision into beautifully crafted spaces.
              </div>
              <div className="hidden text-sm font-bold text-[#B3B3B3] lg:block">
                Plot No 128/592, Office 205, Al Khabeesi, Deira, Dubai–UAE, P.O. Box
              </div>
            </div>

            {/* col-2 */}
            <div className="order-3 col-span-5 flex flex-col justify-end space-y-2 pt-4 text-sm font-bold text-white md:col-span-6 md:text-base lg:order-2 lg:col-span-2 lg:pt-0">
              <div>Mission & Vision</div>
              <div>Careers</div>
              <div>Our Team</div>
              <div>Gallery</div>
              <div>Blog</div>
              <div>Contact Us</div>
            </div>

            {/* col-3 */}
            <div className="order-4 col-span-7 flex flex-col items-end justify-end pt-4 text-sm font-bold text-white md:col-span-6 md:text-base lg:order-3 lg:col-span-3 lg:pt-0">
              <div className="space-y-2">
                <div>Services</div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <p>Hospitality Manpower</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <p>Security Services</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <p>Mall & Office Cleaning</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <p>Event Management</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <p>Hard & Soft Facility Services</p>
                </div>
              </div>
            </div>

            {/* col-4 */}
            <div className="order-2 col-span-6 flex flex-col items-end justify-end border-b border-[#A4885A] pb-4 lg:order-4 lg:col-span-3 lg:border-none lg:pb-0">
              <div className="text-sm font-bold text-[#CAA05C] lg:pb-4 lg:text-base">
                <p className="underline">+971504668928</p>
                <p className="underline">+971504668930</p>
                <p className="underline">+971502066895</p>
              </div>
              <div className="text-sm font-bold text-white lg:text-xl">info@firstmoveuae.com</div>
              <div className="hidden text-xs font-bold text-white lg:block">
                Facebook - Instagram - Twitter - youTube
              </div>
            </div>
          </div>

          <hr className="mt-15 border-[#A4885A] lg:border-[#5D5D5D]/60" />
          <div className="flex justify-center gap-2 text-sm font-normal lg:text-base lg:font-bold">
            <p className="py-7 text-center text-[#B3B3B3]">
              Copyright 2025
              <span className="text-white"> © </span>
              <span className="text-[#CAA05C]"> First Move Facilities Management Services</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center text-[4rem] font-bold leading-[70%] text-[#585858]/50 md:text-[8rem] lg:text-[12rem]">
        First Move
      </div>
    </div>
  )
}
