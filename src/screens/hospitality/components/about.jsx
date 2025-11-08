import HospitalityAboutImage from '../../../assets/images/sectors/hospitality.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={HospitalityAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Hospitality Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            First Move Facilities Management Services delivers comprehensive facility solutions for hotels, resorts, and
            hospitality venues throughout the UAE. We understand that guest satisfaction begins with a clean, safe, and
            welcoming environment. Our hospitality services include housekeeping, technical maintenance, HVAC
            operations, pool and spa upkeep, pest control, and front-of-house support. With seven years of industry
            experience, we combine efficiency, discretion, and reliability to ensure every guest experience exceeds
            expectations.
            <br />
            <br />
            Our teams are trained to maintain luxury standards while operating seamlessly behind the scenes. We also
            provide energy optimization, waste management, and sustainable cleaning solutions that align with green
            hospitality practices. Whether managing boutique hotels or large resorts, First Move guarantees flawless
            facility performance, aesthetic appeal, and comfort — every day. We take pride in being the invisible force
            that keeps hospitality businesses running smoothly, ensuring guests enjoy excellence from check-in to
            check-out.
          </p>
        </div>
      </div>
    </div>
  )
}
