import Marquee from 'react-fast-marquee'
import Partner3 from '../../../assets/images/homepage/support-partners/holiday-inn.png'
import Partner1 from '../../../assets/images/homepage/support-partners/radisson.png'
import Partner4 from '../../../assets/images/homepage/support-partners/sheraton.png'
import Partner2 from '../../../assets/images/homepage/support-partners/the-first-collection-one.png'
import Partner5 from '../../../assets/images/homepage/support-partners/the-first-collection-two.png'

const partners = [
  {
    id: 1,
    name: 'radisson',
    image: Partner1,
  },
  {
    id: 2,
    name: 'the first collection',
    image: Partner2,
  },
  {
    id: 3,
    name: 'holiday innn',
    image: Partner3,
  },
  {
    id: 4,
    name: 'sheraton',
    image: Partner4,
  },
  {
    id: 5,
    name: 'the collection two',
    image: Partner5,
  },
]

const SupportSection = () => {
  return (
    <section className="flex justify-center bg-body md:pb-10">
      <div className="bg-primary flex w-[90%] flex-col items-center gap-4 rounded-2xl px-5 py-8 md:px-20 lg:flex-row lg:gap-4 lg:py-10">
        {/* Left Text  */}
        <div className="flex gap-2 text-xl font-bold text-white lg:flex-col lg:border-r lg:pr-10">
          <p className="hidden text-nowrap md:block">Supported by</p>
          <p className="text-nowrap">Our Partners</p>
        </div>

        {/* Marquee Section */}
        <div className="overflow-hidden w-full lg:pl-10">
          <Marquee pauseOnHover={true} speed={50}>
            {partners.map((partner) => (
              <div key={partner.image} className="mx-4 flex min-w-[120px] justify-center lg:mx-5">
                <img src={partner.image} alt="" className="object-contain h-12" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
