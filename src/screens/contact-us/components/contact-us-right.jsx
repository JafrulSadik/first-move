import { Mail } from 'lucide-react'
import ContactForm from './contact-form'

export default function ContactUsRight() {
  return (
    <div className="bg-primary col-span-12 rounded-lg p-8 lg:col-span-8 lg:p-10">
      <div className="w-fit rounded-full bg-white p-4">
        <Mail className="text-primary" />
      </div>

      <div>
        <p className="my-4 text-[#FFFAF1]">
          <span className="font-bold text-white">Email Us:</span> Send us your queries, we’ll respond promptly.
        </p>
      </div>

      <ContactForm />
    </div>
  )
}
