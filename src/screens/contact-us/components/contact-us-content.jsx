import ContactUsLeft from './contact-us-left'
import ContactUsRight from './contact-us-right'

export default function ContactUsContent() {
  return (
    <div className="py-10 lg:py-20">
      <div className="mb-15 space-y-2 lg:space-y-4">
        <h1 className="text-center text-3xl font-bold text-[#231F20] md:text-4xl">Ways to Contact Us</h1>
        <p className="text-center text-lg font-bold text-[#686868]">We’d Love to Hear From You</p>
      </div>

      <div className="mx-auto grid w-[90%] max-w-6xl grid-cols-12 gap-6 lg:gap-8">
        <ContactUsLeft />
        <ContactUsRight />
      </div>
    </div>
  )
}
