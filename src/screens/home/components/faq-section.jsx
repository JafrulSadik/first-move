import FaqLeft from './faq-left'
import FaqRight from './faq-right'

const FaqSection = () => {
  return (
    <section className="flex justify-center py-5 md:py-15 bg-body">
      <div className="md:p-15 flex w-[90%] max-w-7xl justify-center rounded-xl bg-[#B79B63] p-7 md:rounded-3xl lg:p-20">
        <div className="flex flex-col w-full max-w-5xl gap-15 md:flex-row">
          <FaqLeft />
          <FaqRight />
        </div>
      </div>
    </section>
  )
}

export default FaqSection
