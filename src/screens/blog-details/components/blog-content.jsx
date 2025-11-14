import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi'
import { Navigate, useNavigate, useParams } from 'react-router'
import { Dribble, FacebookIcon, LinkedIn, TwitterIcon } from '../../../assets/icons'
import Writer1 from '../../../assets/images/homepage/client-feedback/client-1.png'
import { blogsData } from '../../../utils/blogs'

const createMarkup = (htmlContent) => {
  const processedContent = htmlContent.replace(/className=/g, 'class=')
  return { __html: processedContent }
}

export default function BlogContent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const blogId = Number(id)
  const blog = blogsData.find((blog) => blog.id === blogId)

  if (!blog) {
    return <Navigate to="/not-found" />
  }

  const handlePrev = () => {
    if (blogId > 1) {
      navigate(`/insights/${blogId - 1}`)
    }
  }

  const handleNext = () => {
    if (blogId < 12) {
      navigate(`/insights/${blogId + 1}`)
    }
  }

  return (
    <div className="mx-auto w-[90%] max-w-5xl">
      <div className="relative my-10 lg:my-20">
        <img src={blog.image} alt="" className="object-cover w-full rounded-xl aspect-6/3" />
        <div className="absolute bottom-0 left-0 px-4 py-2 text-sm font-bold text-white rounded-md rounded-bl-xl bg-primary md:text-base lg:px-8 lg:py-4">
          25 Aug ‘24
        </div>
      </div>

      <h1 className="mx-auto mb-5 max-w-3xl text-center text-xl font-bold text-[#231F20] md:mb-10 md:text-3xl">
        {blog.title}
      </h1>

      <div
        className="blog-content mx-auto mb-10 max-w-4xl leading-[160%]"
        dangerouslySetInnerHTML={createMarkup(blog.content)}
      />

      <div className="flex flex-col gap-4 justify-between items-center mx-auto mb-5 max-w-4xl md:flex-row lg:mb-10 lg:gap-0">
        <div className="flex gap-3 items-center">
          <img src={Writer1} alt="" className="rounded-full md:size-18 size-10" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#282828] md:text-xl">Maisha Smith</h3>
            <p className="text-sm text-[#585858] md:text-base">Article Writer, Senior Architect Designer</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <h4 className="text-xl font-bold md:text-xl">Share : </h4>

          <div className="flex gap-3">
            <img src={FacebookIcon} className="size-8" />
            <img src={TwitterIcon} className="size-8" />
            <img src={LinkedIn} className="size-8" />
            <img src={Dribble} className="size-8" />
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 flex max-w-3xl items-center justify-center gap-6 border-b border-t border-[#E8DBD8] py-3 text-base font-bold text-[#282828] md:my-20 md:py-5 lg:gap-12 lg:text-2xl">
        <div
          className={`flex cursor-pointer items-center gap-4 ${blogId === 1 ? 'pointer-events-none opacity-50' : ''}`}
          onClick={handlePrev}
        >
          <span className="text-[#D5A13A]">
            <FiArrowLeftCircle className="size-6 md:size-8" />
          </span>
          <span>Previous Post</span>
        </div>
        <div
          className={`flex cursor-pointer items-center gap-4 ${blogId === 12 ? 'pointer-events-none opacity-50' : ''}`}
          onClick={handleNext}
        >
          <span>Next Post</span>
          <span className="text-[#D5A13A]">
            <FiArrowRightCircle className="size-6 md:size-8" />
          </span>
        </div>
      </div>
    </div>
  )
}
