import EntertainmentAboutImage from '../../../assets/images/sectors/entertainment.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={EntertainmentAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Entertainment Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            care — ensuring every space is safe, functional, and well-maintained. We handle apartment complexes, villas,
            offices, retail buildings, and mixed-use developments across the UAE. Our integrated services include
            cleaning, maintenance, security, landscaping, waste management, and energy optimization. We work closely
            with property owners, developers, and tenants to design customized maintenance plans that enhance asset
            longevity and reduce operational costs. Our 24/7 support ensures minimal downtime and quick response to
            maintenance requests.
            <br />
            <br />
            With seven years of proven experience, we bring reliability, transparency, and professionalism to every
            project. Using modern tools and smart monitoring systems, we maintain environments that are not only
            visually appealing but also energy-efficient and sustainable. First Move helps property owners preserve
            value while residents and businesses enjoy complete peace of mind through seamless facility management.
          </p>
        </div>
      </div>
    </div>
  )
}
