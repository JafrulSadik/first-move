import ManpowerLeft from './manpower-left'
import ManpowerRight from './manpower-right'

const ManpowerSection = () => {
  return (
    <div className={`md:py-30 flex flex-col items-center justify-center bg-white py-10`}>
      <div className="gap-15 flex w-[90%] max-w-5xl flex-col lg:flex-row">
        <ManpowerLeft />
        <ManpowerRight />
      </div>
    </div>
  )
}

export default ManpowerSection
