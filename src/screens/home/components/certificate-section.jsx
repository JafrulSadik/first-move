import CertificateFive from '../../../assets/images/homepage/certificates/certificate-five.png'
import CertificateFour from '../../../assets/images/homepage/certificates/certificate-four.png'
import CertificateOne from '../../../assets/images/homepage/certificates/certificate-one.png'
import CertificateSix from '../../../assets/images/homepage/certificates/certificate-six.png'
import CertificateThree from '../../../assets/images/homepage/certificates/certificate-three.png'
import CertificateTwo from '../../../assets/images/homepage/certificates/certificate-two.png'

export default function CertificateSection() {
  return (
    <div className="py-15 flex justify-center bg-white">
      <div className="flex w-[90%] flex-col items-center gap-6 md:gap-8">
        <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
          <div className="size-2 rounded-full bg-[#B79B63]"></div>
          <p className="text-sm text-[#231F20] md:text-base">ACHIEVEMENTS</p>
        </div>

        <h2 className="text-center text-3xl font-bold md:text-4xl">Awards and Certifications</h2>

        <div className="fade-edges relative mt-6 w-full overflow-hidden rounded-lg">
          <marquee behavior="scroll" direction="left" scrollamount="10" loop="true" className="flex">
            <div className="flex w-full items-start">
              <img src={CertificateOne} alt="" className="h-auto px-8 opacity-30" />
              <img src={CertificateTwo} alt="" className="h-auto px-8 opacity-30" />
              <img src={CertificateThree} alt="" className="h-auto px-8 opacity-30" />
              <img src={CertificateFour} alt="" className="h-auto px-8 opacity-30" />
              <img src={CertificateFive} alt="" className="h-auto px-8 opacity-30" />
              <img src={CertificateSix} alt="" className="h-auto px-8 opacity-30" />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  )
}
