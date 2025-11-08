import CompanyLogo from '../../../assets/images/case-studies-details/comany-info/company-logo.png'

export default function CaseDetailsTitle() {
  return (
    <div className="mb-10 flex flex-col items-center justify-between md:flex-row lg:mb-20">
      <div className="mb-5 md:mb-0">
        <p className="text-center text-2xl font-bold md:text-left md:text-4xl">
          Provision of
          <br /> Housekeeping Services
        </p>
      </div>
      <div className="flex items-center text-[#525252] lg:flex-col lg:items-start">
        <img src={CompanyLogo} alt="Compay" className="h-20" />
        <div className="text-sm md:text-base">
          <p>Company : SIALL</p>
          <p>Location : 22 Properties across the UAE</p>
        </div>
      </div>
    </div>
  )
}
