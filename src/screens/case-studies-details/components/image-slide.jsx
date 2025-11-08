import SlideImageOne from '../../../assets/images/case-studies-details/slide-image/slide-image-one.png'
import SlideImageTwo from '../../../assets/images/case-studies-details/slide-image/slide-image-two.png'

export default function ImageSlide() {
  return (
    <div className="grid grid-cols-12 gap-2 rounded-md bg-[#EEEEEE] p-2 md:gap-6 md:rounded-xl md:p-6">
      <div className="col-span-6 aspect-square">
        <img src={SlideImageOne} alt="" className="h-full rounded-md object-cover md:rounded-xl" />
      </div>
      <div className="col-span-6 aspect-square">
        <img src={SlideImageTwo} alt="" className="h-full rounded-md object-cover md:rounded-xl" />
      </div>
    </div>
  )
}
