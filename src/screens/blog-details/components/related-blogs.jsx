import { Link } from 'react-router'
import { blogsData } from '../../../utils/blogs'
import { getRandomItems } from '../../../utils/get-random-data'

export default function RelatedBlogs() {
  const relatedBlogs = getRandomItems(blogsData, 3)

  return (
    <div className="mx-auto my-20 w-[90%] max-w-6xl">
      <h2 className="mb-15 text-center text-3xl font-bold text-[#D5A13A]">Related Blogs</h2>

      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {relatedBlogs.map((blog, index) => (
          <Link to={`/insights/${blog.id}`} key={index} className="col-span-12 space-y-4 md:col-span-6 lg:col-span-4">
            <div className="relative aspect-5/3 lg:aspect-3/2">
              <img src={blog.image} alt="" className="object-cover w-full h-full rounded-xl" />
              {blog.category && (
                <div className="absolute left-2 top-2 rounded-full bg-[#B79B63] px-2 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-sm">
                by <span className="font-extrabold text-[#D5A13A]">Admin</span>
              </p>
              <h3 className="text-xl font-bold font-hanken">{blog.title}</h3>
              <p className="font-inter line-clamp-4 font-medium leading-[150%] text-[#5E5E5E]">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
