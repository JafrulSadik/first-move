import MallsAboutImage from '../../../assets/images/sectors/malls.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={MallsAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Malls & Supermarkets Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            First Move Facilities Management Services provides specialized management for malls, supermarkets, and large
            retail environments across the UAE. We understand that shopping spaces demand continuous cleanliness,
            safety, and functionality to create an enjoyable customer experience. Our services include daily
            housekeeping, HVAC maintenance, electrical and plumbing support, waste management, pest control, and
            security supervision. We also ensure escalators, lifts, and parking areas remain fully operational and clean
            at all times.
            <br />
            <br />
            Our team works around business hours to avoid disruption while maintaining impeccable hygiene and
            presentation. With years of experience in high-traffic retail environments, we bring efficiency, precision,
            and professionalism to every project. We also incorporate smart maintenance systems and green cleaning
            practices to promote sustainability and reduce operating costs. At First Move, we ensure every retail space
            remains inviting, safe, and vibrant — enhancing both shopper satisfaction and tenant confidence
          </p>
        </div>
      </div>
    </div>
  )
}
