import EducationAboutImage from '../../../assets/images/sectors/education.png'

export default function About() {
  return (
    <div className="my-20 flex justify-center">
      <div className="grid w-[90%] max-w-5xl grid-cols-12 justify-items-center lg:gap-10">
        <div className="col-span-12 mb-10 flex w-[70%] items-center md:w-[40%] lg:col-span-4 lg:mb-0 lg:w-full">
          <img src={EducationAboutImage} alt="" className="" />
        </div>
        <div className="col-span-12 flex flex-col justify-end gap-4 lg:col-span-8">
          <h1 className="text-xl font-bold text-[#231F20] md:text-[48px]">Education Sector</h1>
          <p className="text-sm leading-[150%] text-[#4A4A4A]">
            At First Move Facilities Management Services, we create safe, clean, and inspiring learning environments for
            schools, universities, and training centers. We recognize that education facilities require consistent
            maintenance, hygiene, and comfort to support students and educators alike. Our services include daily
            cleaning, waste management, HVAC maintenance, plumbing, electrical care, landscaping, and security
            management. We follow strict health and safety protocols to ensure classrooms, laboratories, hostels, and
            administrative buildings remain functional and conducive to learning.
            <br />
            <br />
            Our trained professionals work around academic schedules to minimize disruption while maintaining high
            standards of hygiene and operational efficiency. With over seven years of expertise in UAE’s education
            sector, we help institutions achieve sustainability goals through energy-efficient maintenance and
            eco-friendly cleaning practices. First Move is dedicated to providing a healthy, safe, and motivating
            environment that enhances academic performance and ensures complete peace of mind for students, parents, and
            faculty members.
          </p>
        </div>
      </div>
    </div>
  )
}
