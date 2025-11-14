import FeedbackSlider from './feedback-slider'

function TestimonialsSection() {
  return (
    <section className="flex justify-center py-5 bg-body md:py-15">
      <div className="flex w-[90%] max-w-5xl flex-col items-center gap-4 md:gap-8">
        {/* Badge */}
        <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
          <div className="size-2 rounded-full bg-[#B79B63]"></div>
          <p className="text-sm text-[#231F20] md:text-base">Testimonials</p>
        </div>

        {/* Title */}
        <div className="leading-12 md:leading-15 max-w-3xl text-center text-4xl font-bold text-[#231F20] md:text-5xl">
          Here’s What <span className="text-[#B79B63]">Warm Words Our Clients</span> Say
        </div>

        <FeedbackSlider />
      </div>
    </section>
  )
}

export default TestimonialsSection
