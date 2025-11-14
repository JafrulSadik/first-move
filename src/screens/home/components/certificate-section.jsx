import Marquee from 'react-fast-marquee'
import CertificateFive from '../../../assets/images/homepage/certificates/certificate-five.png'
import CertificateFour from '../../../assets/images/homepage/certificates/certificate-four.png'
import CertificateOne from '../../../assets/images/homepage/certificates/certificate-one.png'
import CertificateSix from '../../../assets/images/homepage/certificates/certificate-six.png'
import CertificateThree from '../../../assets/images/homepage/certificates/certificate-three.png'
import CertificateTwo from '../../../assets/images/homepage/certificates/certificate-two.png'

export default function CertificateSection() {
  return (
    <div className="flex justify-center py-15 bg-body">
      <div className="flex w-[90%] flex-col items-center gap-6 md:gap-8">
        <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
          <div className="size-2 rounded-full bg-[#B79B63]"></div>
          <p className="text-sm text-[#231F20] md:text-base">ACHIEVEMENTS</p>
        </div>

        <h2 className="text-3xl font-bold text-center md:text-4xl">Awards and Certifications</h2>

        <div className="overflow-hidden my-5 w-full">
          <Marquee pauseOnHover={true} speed={50} gradientColor={[15, 23, 42]}>
            <img src={CertificateOne} className="mx-6 h-auto opacity-30 lg:mx-12" />
            <img src={CertificateTwo} className="mx-6 h-auto opacity-30 lg:mx-12" />
            <img src={CertificateThree} className="mx-6 h-auto opacity-30 lg:mx-12" />
            <img src={CertificateFour} className="mx-6 h-auto opacity-30 lg:mx-12" />
            <img src={CertificateFive} className="mx-6 h-auto opacity-30 lg:mx-12" />
            <img src={CertificateSix} className="mx-6 h-auto opacity-30 lg:mx-12" />
          </Marquee>
        </div>
      </div>
    </div>
  )
}
