import HealthcareAboutImage from '../../../assets/images/sectors/healthcare.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={HealthcareAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Healthcare Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            The healthcare sector demands precision, hygiene, and reliability — values at the heart of First Move
            Facilities Management Services. We serve hospitals, clinics, laboratories, and wellness centers across the
            UAE, ensuring every facility operates in a clean, safe, and compliant manner. Our services cover
            infection-control cleaning, biomedical waste disposal, equipment maintenance, HVAC and air quality
            management, and 24/7 emergency support. We follow international healthcare standards and UAE Ministry of
            Health guidelines to maintain the highest levels of safety and cleanliness.
            <br />
            <br />
            Our trained staff understands the sensitivity of healthcare environments, ensuring patient comfort and the
            seamless functioning of clinical operations. Using advanced tools and eco-friendly disinfectants, we create
            hygienic spaces that prevent cross-contamination. First Move stands as a trusted partner for healthcare
            providers, delivering operational excellence and peace of mind — so medical professionals can focus entirely
            on delivering care while we ensure the environment supports their mission.
          </p>
        </div>
      </div>
    </div>
  )
}
