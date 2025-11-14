import { Link } from 'react-router'
import { ArrowUpIcon } from '../../../assets/icons'

export default function ContactUs() {
  return (
    <div className="md:mb-15 mx-auto my-10 w-[90%] max-w-md lg:mt-0">
      <p className="mb-5 text-center text-lg text-[#231F20] md:mb-10 md:text-xl">
        Have questions or need assistance? Our team is here to help — reach out anytime!
      </p>

      <Link
        to="/contact-us"
        className="flex gap-3 items-center px-2 py-2 mx-auto mt-5 text-lg font-bold text-white uppercase rounded-full bg-primary w-fit md:px-3 md:py-3"
      >
        <span className="mx-4 text-sm md:text-base">Contact Us</span>
        <div className="flex justify-center items-center bg-white rounded-full size-8">
          <img src={ArrowUpIcon} alt="Arrow Up" width={20} height={20} className="rotate-225" />
        </div>
      </Link>
    </div>
  )
}
