import { Link } from 'react-router'
import FooterBg from '../../assets/backgrounds/footer-bg.png'
import { Logo } from '../../assets/logo'

export default function Footer() {
  return (
    <div
      className="overflow-hidden relative pb-25 md:pb-40 lg:pb-80"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pt-15 relative flex justify-center bg-[#232221]/60">
        <div className="flex w-[90%] max-w-6xl flex-col justify-center">
          {/* grid */}
          <div className="grid grid-cols-12 border-separate lg:gap-4">
            <div className="lg:w-7/10 order-1 col-span-6 flex flex-col justify-end border-b border-[#A4885A] pb-4 lg:order-1 lg:col-span-4 lg:border-none lg:pb-0">
              <div className="mb-4">
                <img src={Logo} alt="" className="h-12 lg:h-15" />
              </div>
              <div className="hidden mb-3 font-bold text-white md:block">
                We transform your vision into beautifully crafted spaces.
              </div>
              <div className="hidden text-sm font-bold text-[#B3B3B3] lg:block">
                Plot No 128/592, Office 205, Al Khabeesi, Deira, Dubai–UAE, P.O. Box
              </div>
            </div>

            {/* col-2 */}
            <div className="flex flex-col order-3 col-span-5 justify-end pt-4 space-y-2 text-sm font-bold text-white md:col-span-6 md:text-base lg:order-2 lg:col-span-2 lg:pt-0">
              <Link to="/about">Mission & Vision</Link>
              <div>Careers</div>
              <Link to="/about#our-team">Our Team</Link>
              <Link to="/project-gallery">Gallery</Link>
              <Link to="/insights">Blog</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>

            {/* col-3 */}
            <div className="flex flex-col order-4 col-span-7 justify-end items-end pt-4 text-sm font-bold text-white md:col-span-6 md:text-base lg:order-3 lg:col-span-3 lg:pt-0">
              <div className="space-y-2">
                <div>Services</div>
                <div className="flex gap-2 items-center">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <Link to="/hospitality-management">Hospitality Manpower</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <Link to="/security-solutions">Security Services</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <Link to="/mall-and-office-cleaning">Mall & Office Cleaning</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <Link to="/event-management">Event Management</Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="size-2 rounded-full bg-[#CAA05C]" />
                  <Link to="/hard-and-soft-facilities">Hard & Soft Facility Services</Link>
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
          <div className="flex gap-2 justify-center text-sm font-normal lg:text-base lg:font-bold">
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
