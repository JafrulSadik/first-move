import { Footer } from '../../components/footer'
import Navbar from '../../components/navbar/navbar'
import BlogContent from './components/blog-content'
import BlogDetailsHeader from './components/blog-header'
import RelatedBlogs from './components/related-blogs'

export default function BlogDetailsScreen() {
  return (
    <div className="flex justify-center w-full bg-body">
      <div className="w-full">
        <Navbar />
        <BlogDetailsHeader />
        <BlogContent />
        <RelatedBlogs />
        <Footer />
      </div>
    </div>
  )
}
