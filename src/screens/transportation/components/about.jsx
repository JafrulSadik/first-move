import TransportationAboutImage from '../../../assets/images/sectors/transportation.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={TransportationAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Transportation Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            First Move Facilities Management Services supports UAE’s growing transportation infrastructure with expert
            facility and operational management. We serve airports, bus terminals, logistics centers, parking
            facilities, and service stations — ensuring safety, cleanliness, and efficiency 24/7. Our services include
            technical maintenance, HVAC, electrical systems management, cleaning, waste handling, and security
            operations. We understand that transportation hubs demand uninterrupted performance and fast response times.
            <br />
            <br />
            Our skilled workforce and technology-driven monitoring systems ensure minimal downtime and optimal safety
            standards. We also emphasize eco-friendly practices by integrating energy-efficient solutions that support
            sustainability goals. With seven years of hands-on experience, First Move delivers operational excellence to
            public and private transportation entities, helping them maintain world-class infrastructure and passenger
            satisfaction. From daily upkeep to emergency support, we ensure every journey begins and ends in a clean,
            safe, and well-maintained environment
          </p>
        </div>
      </div>
    </div>
  )
}
