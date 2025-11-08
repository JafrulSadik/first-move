import { ArrowUpIcon } from '../../../assets/icons'

export default function NotFoundContent() {
  return (
    <div className="md:py-30 py-20">
      <div className="mx-auto max-w-md">
        <h1 className="text-primary text-center text-[60px] font-bold md:text-[120px]">404</h1>
        <h2 className="text-center text-[24px] font-bold text-[#231F20] md:text-[36px]">Opps... Page Not Found</h2>
        <p className="mt-5 text-center text-lg text-[#686868] md:text-xl">
          This page seems to have wandered off. Let’s head back home!
        </p>

        <div className="bg-primary mx-auto mt-5 flex w-fit items-center gap-3 rounded-full px-2 py-2 text-lg font-bold uppercase text-white md:px-3 md:py-3">
          <span className="mx-2 text-sm md:text-base">Go Back Home</span>
          <div className="flex size-8 items-center justify-center rounded-full bg-white">
            <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} className="rotate-225" />
          </div>
        </div>
      </div>
    </div>
  )
}
