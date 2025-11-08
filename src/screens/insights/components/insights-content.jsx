import CoverOne from '../../../assets/images/homepage/blog/blog-1.png'
import CoverTwo from '../../../assets/images/homepage/blog/blog-2.png'
import CoverThree from '../../../assets/images/homepage/blog/blog-3.png'

const blogData = [
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverOne,
  },
  {
    title: 'Event Manpower & Operations: Corporate to Public Events',
    description:
      'Explore our disciplined event crews for conferences, weddings, launches, and festivals—ushering, registration, pantry, and post-event deep cleaning with clear KPIs',
    category: 'Manpower',
    cover: CoverTwo,
  },
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverThree,
  },
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverOne,
  },
  {
    title: 'Event Manpower & Operations: Corporate to Public Events',
    description:
      'Explore our disciplined event crews for conferences, weddings, launches, and festivals—ushering, registration, pantry, and post-event deep cleaning with clear KPIs',
    category: 'Manpower',
    cover: CoverTwo,
  },
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverThree,
  },
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverOne,
  },
  {
    title: 'Event Manpower & Operations: Corporate to Public Events',
    description:
      'Explore our disciplined event crews for conferences, weddings, launches, and festivals—ushering, registration, pantry, and post-event deep cleaning with clear KPIs',
    category: 'Manpower',
    cover: CoverTwo,
  },
  {
    title: 'Hospitality Outsourcing in UAE: End-to-End Solutions',
    description:
      'Discover how First Move delivers hospitality outsourcing for hotels, resorts, and guest houses—covering front- and back-of-house operations, SOPs, KPIs',
    category: 'Hospitality',
    cover: CoverThree,
  },
]

export default function InsightsContent() {
  return (
    <div>
      <div className="py-15 flex justify-center bg-white md:py-20">
        <div className="w-[90%] max-w-6xl space-y-10">
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {blogData.map((blog, index) => (
              <div key={index} className="col-span-12 space-y-4 md:col-span-6 lg:col-span-4">
                <div className="aspect-5/3 lg:aspect-3/2 relative">
                  <img src={blog.cover} alt="" className="w-full object-cover" />
                  <div className="absolute left-2 top-2 rounded-full bg-[#B79B63] px-2 py-1 text-xs font-semibold text-white">
                    {blog.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm">
                    by <span className="font-extrabold text-[#D5A13A]">Admin</span>
                  </p>
                  <h3 className="font-hanken text-xl font-bold">{blog.title}</h3>
                  <p className="font-inter line-clamp-4 font-medium leading-[150%] text-[#5E5E5E]">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
