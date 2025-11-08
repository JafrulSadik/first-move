import SecurityAboutImage from '../../../assets/images/sectors/security.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={SecurityAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Security Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            Security is at the core of operational success, and First Move Facilities Management Services offers
            comprehensive protection solutions across all industries. Our licensed and trained security professionals
            provide 24/7 monitoring, access control, patrolling, and emergency response for commercial, residential, and
            industrial facilities. We design customized security plans that integrate manpower with advanced
            technologies such as CCTV surveillance, alarm systems, and digital access control.
            <br />
            <br />
            Our team ensures compliance with UAE security regulations and maintains high standards of vigilance and
            professionalism. Beyond traditional security, we also offer concierge and front-desk services to enhance
            guest and visitor management. With over seven years of experience, we pride ourselves on safeguarding
            people, property, and assets with reliability and discretion. At First Move, our mission is simple — to
            deliver total peace of mind through proactive, intelligent, and dependable security solutions
          </p>
        </div>
      </div>
    </div>
  )
}
