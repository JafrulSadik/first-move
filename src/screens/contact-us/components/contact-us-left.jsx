import { Contact } from 'lucide-react'
import { PhoneIcon, WhatsappIcon } from '../../../assets/icons'

export default function ContactUsLeft() {
  return (
    <div className="bg-primary col-span-12 rounded-lg p-6 md:p-8 lg:col-span-4 lg:p-10">
      <div className="w-fit rounded-full bg-white p-4">
        <Contact className="text-primary" />
      </div>

      <div className="text-white">
        <p className="my-4 font-bold">Address:</p>

        <p className="my-8">
          Plot No 128/592, Office 205, Al Khabeesi, Deira, Dubai–UAE, P.O. Box 192005 Mobile: +971 50 585 8972 ·
        </p>

        <h3 className="py-2 text-xl font-bold">Get in touch with us on WhatsApp!</h3>

        <div className="flex items-center gap-2">
          <div className="flex w-fit items-center gap-2 rounded-full bg-[#1ABD50] px-4 py-3 text-base font-bold">
            <img src={WhatsappIcon} alt="Whatsapp" width={20} height={20} className="" />
            <span>Whatsapp</span>
          </div>

          <div className="w-fit rounded-full bg-[#F4B217] p-3">
            <img src={PhoneIcon} alt="Phone" width={20} height={20} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}
