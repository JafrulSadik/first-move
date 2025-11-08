import ExpertiseGridImageOne from '../../../assets/images/industries-served/grid/government.png'
import ExpertiseGridImageThree from '../../../assets/images/industries-served/grid/hotels-and-resort.png'
import ExpertiseGridImageTwo from '../../../assets/images/industries-served/grid/malls.png'
import ExpertiseGridImageFour from '../../../assets/images/industries-served/grid/office.png'

const gridImageData = [
  {
    id: 1,
    title: 'Government',
    image: ExpertiseGridImageOne,
  },
  {
    id: 2,
    title: 'Malls',
    image: ExpertiseGridImageTwo,
  },
  {
    id: 3,
    title: 'Hotels and Resorts',
    image: ExpertiseGridImageThree,
  },
  {
    id: 4,
    title: 'Office',
    image: ExpertiseGridImageFour,
  },
]

export default function ExpertiseGrid() {
  return (
    <div className="md:py-15 mx-auto grid w-[90%] max-w-7xl grid-cols-12 gap-4 pb-5">
      <div className="relative col-span-12 md:col-span-5">
        <img src={gridImageData[0].image} alt="" className="object-cover w-full h-full rounded-xl" />
        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h2 className="text-md w-fit rounded-md bg-white px-3 py-2 text-center font-bold leading-[130%] text-[#231F20] md:text-lg">
            {gridImageData[0].title}
          </h2>
        </div>
      </div>
      <div className="relative col-span-12 md:col-span-7">
        <img src={gridImageData[1].image} alt="" className="object-cover w-full h-full rounded-xl" />
        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h2 className="text-md w-fit rounded-md bg-white px-3 py-2 text-center font-bold leading-[130%] text-[#231F20] md:text-lg">
            {gridImageData[1].title}
          </h2>
        </div>
      </div>
      <div className="relative col-span-12 md:col-span-7">
        <img src={gridImageData[2].image} alt="" className="object-cover w-full h-full rounded-xl" />
        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h2 className="text-md w-fit rounded-md bg-white px-3 py-2 text-center font-bold leading-[130%] text-[#231F20] md:text-lg">
            {gridImageData[2].title}
          </h2>
        </div>
      </div>
      <div className="relative col-span-12 md:col-span-5">
        <img src={gridImageData[3].image} alt="" className="object-cover w-full h-full rounded-xl" />
        <div className="absolute right-0 bottom-0 left-0 p-5">
          <h2 className="text-md w-fit rounded-md bg-white px-3 py-2 text-center font-bold leading-[130%] text-[#231F20] md:text-lg">
            {gridImageData[3].title}
          </h2>
        </div>
      </div>
    </div>
  )
}
