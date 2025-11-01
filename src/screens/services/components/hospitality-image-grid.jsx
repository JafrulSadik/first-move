import HospitalityImage from '../../../assets/images/services/hospitality-soution/hospitaliy-grid-img.jpg'

function HospitalityImageGrid() {
  return (
    <div className="md:aspect-12/5 aspect-2/1 mx-auto my-10 w-[90%]">
      <img
        src={HospitalityImage}
        alt="HospitalityImage"
        className="h-full w-full rounded-xl object-cover md:rounded-2xl"
      />
    </div>
  )
}

export default HospitalityImageGrid
