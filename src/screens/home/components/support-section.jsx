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
    <section className="flex justify-center bg-white pb-10">
      <div className="bg-primary flex w-[90%] flex-col items-center gap-4 rounded-2xl px-10 py-10 md:px-20 lg:flex-row">
        <div className="flex gap-2 text-xl font-bold text-white lg:flex-col lg:border-r lg:pr-10">
          <p className="text-nowrap">Supported by</p>
          <p className="text-nowrap">Our Partners</p>
        </div>

        <div className="lg:pl-10">
          <div className="grid grid-cols-6 items-center gap-8 lg:grid-cols-5">
            {partners.map((partner) => (
              <div className="col-span-3 flex justify-center md:col-span-2 lg:col-span-1">
                <img src={partner.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
