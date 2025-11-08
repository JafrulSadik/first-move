import CleaningImage from '../../../assets/images/cleaning/cleaning-one.png'

export default function AboutCleaning() {
  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] max-w-4xl flex-col items-center justify-center md:w-full md:flex-row md:gap-8">
        <div className="my-5 flex-1 text-2xl font-bold leading-[140%] text-[#CAA05C] md:my-0 md:text-4xl">
          Professional cleaning services for commercial, residential, and industrial spaces.
        </div>
        <div className="max-h-[500px] flex-1 md:mt-10">
          <img src={CleaningImage} alt="cleaning" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}
