import StoryImageLeft from '../../../assets/images/about/story/story-img-left.png'
import StoryImageRight from '../../../assets/images/about/story/story-img-right.png'

export default function StoryImageGrid() {
  return (
    <div className="lg:my-15 my-5 flex justify-center">
      <div className="grid w-[90%] max-w-7xl grid-cols-12 gap-2 md:gap-10">
        <img src={StoryImageLeft} alt="" className="col-span-5 h-full rounded-xl object-cover md:rounded-2xl" />
        <img src={StoryImageRight} alt="" className="col-span-7 h-full rounded-xl object-cover md:rounded-2xl" />
      </div>
    </div>
  )
}
