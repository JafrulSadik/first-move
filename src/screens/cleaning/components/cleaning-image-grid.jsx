import CleaningImageGridFive from '../../../assets/images/cleaning/image-grid/cleaning-img-grid-five.png'
import CleaningImageGridFour from '../../../assets/images/cleaning/image-grid/cleaning-img-grid-four.png'
import CleaningImageGridOne from '../../../assets/images/cleaning/image-grid/cleaning-img-grid-one.png'
import CleaningImageGridThree from '../../../assets/images/cleaning/image-grid/cleaning-img-grid-three.png'
import CleaningImageGridTwo from '../../../assets/images/cleaning/image-grid/cleaning-img-grid-two.png'

export default function CleaningImageGrid() {
  return (
    <div className="my-5 flex justify-center lg:my-20">
      <div className="grid w-[90%] max-w-7xl grid-cols-12 grid-rows-2 gap-3 md:gap-6">
        <div className="col-span-12 row-span-2 lg:col-span-6">
          <img src={CleaningImageGridOne} alt="" className="h-full w-full rounded-xl object-cover md:rounded-2xl" />
        </div>
        <div className="col-span-6 row-span-1 aspect-square lg:col-span-3">
          <img src={CleaningImageGridTwo} alt="" className="h-full w-full rounded-xl object-cover md:rounded-2xl" />
        </div>
        <div className="col-span-6 row-span-1 aspect-square lg:col-span-3">
          <img src={CleaningImageGridThree} alt="" className="h-full w-full rounded-xl object-cover md:rounded-2xl" />
        </div>
        <div className="col-span-6 row-span-1 aspect-square lg:col-span-3">
          <img src={CleaningImageGridFour} alt="" className="h-full w-full rounded-xl object-cover md:rounded-2xl" />
        </div>
        <div className="col-span-6 row-span-1 aspect-square lg:col-span-3">
          <img src={CleaningImageGridFive} alt="" className="h-full w-full rounded-xl object-cover md:rounded-2xl" />
        </div>
      </div>
    </div>
  )
}
