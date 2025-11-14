import ManpowerLeft from './manpower-left'
import ManpowerRight from './manpower-right'

const ManpowerSection = () => {
  return (
    <div className={`flex flex-col justify-center items-center py-10 md:py-30 bg-body`}>
      <div className="gap-15 flex w-[90%] max-w-5xl flex-col lg:flex-row">
        <ManpowerLeft />
        <ManpowerRight />
      </div>
    </div>
  )
}

export default ManpowerSection
