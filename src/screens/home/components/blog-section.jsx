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
]

export default function BlogSection() {
  return (
    <div className="md:py-15 flex justify-center bg-white py-10">
      <div className="w-[90%] max-w-5xl space-y-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-0">
          <div className="lg:border-r lg:border-[#E2E2E2] lg:pr-10">
            <div className="flex w-fit items-center gap-2 rounded-full border border-[#B79B63] px-2 py-1 font-bold uppercase md:px-4 md:py-1">
              <div className="size-2 rounded-full bg-[#B79B63]"></div>
              <p className="text-nowrap text-xs text-[#231F20] md:text-sm">straight from the newsroom</p>
            </div>
          </div>
          <div className="max-w-md text-center text-3xl font-bold leading-[130%] md:text-4xl lg:ml-10 lg:text-left">
            Take A Look at <span className="text-primary">Our Latest Blog </span> & Articles.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {blogData.map((blog, index) => (
            <div key={index} className="col-span-12 space-y-4 md:col-span-6 lg:col-span-4">
              <div className="relative">
                <img src={blog.cover} alt="" />
                <div className="absolute left-2 top-2 rounded-full bg-[#B79B63] px-2 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm">
                  by <span className="font-extrabold text-[#D5A13A]">Admin</span>
                </p>
                <h3 className="font-hanken text-xl font-bold">{blog.title}</h3>
                <p className="font-inter line-clamp-4 font-medium leading-[150%] text-[#5E5E5E]">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
