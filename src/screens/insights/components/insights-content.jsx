import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { blogsData } from '../../../utils/blogs'
import PaginationWrapper from './pagination-wrapper'

export default function InsightsContent() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageFromURL = Number(searchParams.get('page')) || 1
  const [currentPage, setCurrentPage] = useState(pageFromURL)

  const ITEMS_PER_PAGE = 9

  // Update URL when page changes
  useEffect(() => {
    setSearchParams({ page: String(currentPage) })
  }, [currentPage, setSearchParams])

  // Calculate start & end indexes
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  // Slice actual data
  const visibleBlogs = blogsData.slice(startIndex, endIndex)

  // Total page count
  const pageCount = Math.ceil(blogsData.length / ITEMS_PER_PAGE)

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1) // react-paginate is 0-based
  }

  return (
    <div className="flex justify-center bg-white py-15 md:py-20">
      <div className="w-[90%] max-w-6xl space-y-10">
        {/* BLOGS GRID */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {visibleBlogs.map((blog, index) => (
            <Link to={`/insights/${blog.id}`} key={index} className="col-span-12 space-y-4 md:col-span-6 lg:col-span-4">
              <div className="relative aspect-5/3 lg:aspect-3/2">
                <img src={blog.image} alt="" className="object-cover w-full h-full rounded-xl" />
                <div className="absolute left-2 top-2 rounded-full bg-[#B79B63] px-2 py-1 text-xs font-semibold text-white">
                  {blog.category}
                </div>
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

        {/* PAGINATION */}
        <PaginationWrapper pageCount={pageCount} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}
