import { Link } from 'react-router'
import { blogsData } from '../../../utils/blogs'
import { getRandomItems } from '../../../utils/get-random-data'

export default function BlogSection() {
  const blogs = getRandomItems(blogsData, 3)

  return (
    <div className="flex justify-center py-10 bg-body md:py-15">
      <div className="w-[90%] max-w-5xl space-y-10">
        <div className="flex flex-col gap-10 items-center lg:flex-row lg:gap-0">
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
          {blogs.map((blog, index) => (
            <Link to={`/insights/${blog.id}`} key={index} className="col-span-12 space-y-4 md:col-span-6 lg:col-span-4">
              <div className="relative">
                <img src={blog.image} alt="" className="object-cover w-full rounded-xl aspect-5/3 lg:aspect-3/2" />
                <div className="absolute left-2 top-2 rounded-full bg-[#B79B63] px-2 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm">
                  by <span className="font-extrabold text-[#D5A13A]">Admin</span>
                </p>
                <h3 className="text-xl font-bold font-hanken line-clamp-2">{blog.title}</h3>
                <p className="font-inter line-clamp-4 font-medium leading-[150%] text-[#5E5E5E]">{blog.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
