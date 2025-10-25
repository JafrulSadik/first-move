import Housekeeper from '../../../assets/images/homepage/manpower/housekeeper.png'
import Waiter from '../../../assets/images/homepage/manpower/waiter.png'

const ManpowerLeft = () => {
  return (
    <div className="flex flex-1 items-center justify-end">
      <div className="aspect-20/18 relative w-full">
        <div className="absolute left-0 top-0 h-4/6 w-4/6">
          <img src={Waiter} alt="waiter" />
        </div>
        <div className="absolute bottom-0 right-0 h-4/5 w-7/12">
          <img src={Housekeeper} alt="housekeeper" />

          <div className="bg-primary md:-left-18 md:bottom-3/22 w-25 bottom-1/12 absolute -left-14 z-30 rounded-2xl px-3 py-2 text-white md:w-40 md:px-4 md:py-3 lg:rounded-3xl">
            <p className="text-xl font-bold tracking-widest md:text-5xl">05</p>
            <div className="flex justify-end text-xs font-semibold leading-4 md:text-base">
              <div>
                <p>Years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManpowerLeft
