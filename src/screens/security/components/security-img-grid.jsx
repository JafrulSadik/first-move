import SecurityGridImgOne from '../../../assets/images/security/security-image-grid/security-grid-img-one.png'
import SecurityGridImgThree from '../../../assets/images/security/security-image-grid/security-grid-img-three.png'
import SecurityGridImgTwo from '../../../assets/images/security/security-image-grid/security-grid-img-two.png'

export default function SecurityImgGrid() {
  return (
    <div className="lg:my-15 my-5 flex justify-center">
      <div className="grid-cols-18 grid w-[90%] max-w-7xl gap-2 md:gap-6">
        <img
          src={SecurityGridImgOne}
          alt=""
          className="aspect-3/2 order-1 col-span-9 h-full rounded-xl object-cover md:aspect-auto md:rounded-2xl lg:order-1 lg:col-span-5"
        />
        <img
          src={SecurityGridImgTwo}
          alt=""
          className="col-span-18 aspect-4/2 order-3 h-full rounded-xl object-cover md:aspect-auto md:rounded-2xl lg:order-2 lg:col-span-8"
        />
        <img
          src={SecurityGridImgThree}
          alt=""
          className="aspect-3/2 order-2 col-span-9 h-full rounded-xl object-cover md:aspect-auto md:rounded-2xl lg:order-3 lg:col-span-5"
        />
      </div>
    </div>
  )
}
