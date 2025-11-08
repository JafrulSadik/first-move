import GovernmentAboutImage from '../../../assets/images/government/about/government-hero.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={GovernmentAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Government Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            First Move Facilities Management Services partners with government institutions across the UAE to deliver
            efficient, compliant, and sustainable facility operations. We understand the importance of maintaining
            secure, hygienic, and fully functional environments where public services can operate without interruption.
            Our government facility management services include cleaning, maintenance, HVAC management, electrical and
            plumbing service, landscaping, pest control, and 24/7 operational support.
            <br />
            <br />
            With seven years of experience, we adhere strictly to UAE government standards, ensuring transparency,
            safety, and efficiency in every project. Whether it’s administrative offices, public service buildings, or
            infrastructure facilities, our expert teams are trained to maintain operational excellence while optimizing
            costs and energy efficiency. Through smart technology and real-time monitoring, we ensure reliability and
            accountability in every aspect of service delivery — helping the public sector focus on what matters most:
            serving the community.
          </p>
        </div>
      </div>
    </div>
  )
}
