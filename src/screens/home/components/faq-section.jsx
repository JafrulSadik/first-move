import FaqLeft from './faq-left'
import FaqRight from './faq-right'

const FaqSection = () => {
  return (
    <section className="md:py-15 flex justify-center bg-white py-5">
      <div className="md:p-15 flex w-[90%] max-w-7xl justify-center rounded-xl bg-[#B79B63] p-7 md:rounded-3xl lg:p-20">
        <div className="gap-15 flex w-full max-w-5xl flex-col md:flex-row">
          <FaqLeft />
          <FaqRight />
        </div>
      </div>
    </section>
  )
}

export default FaqSection
