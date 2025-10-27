import LeftBg from '../../../assets/images/homepage/partner-section/partner-bg-left.png'
import RightBg from '../../../assets/images/homepage/partner-section/partner-bg-right.png'
import ProposalForm from './proposal-form'

function PartnerSection() {
  return (
    <div
      className="py-15 flex w-full flex-col items-center gap-10 overflow-hidden bg-white sm:bg-none md:bg-none lg:bg-no-repeat"
      style={{
        backgroundImage: `url(${LeftBg}), url(${RightBg})`,
        backgroundPosition: 'left bottom, right bottom',
        backgroundSize: 'auto 50%, auto 50%',
      }}
    >
      <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
        <div className="size-2 rounded-full bg-[#B79B63]"></div>
        <p className="text-sm text-[#231F20] md:text-base">Partner With Us for Excellence</p>
      </div>

      <h1 className="text-center text-4xl font-bold md:text-5xl">
        Request <span className="text-[#B79B63]">a Proposal</span>
      </h1>

      <ProposalForm />
    </div>
  )
}

export default PartnerSection
