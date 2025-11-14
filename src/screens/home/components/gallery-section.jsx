import GalleryImage from '../../../assets/images/homepage/gallery/image-grid.png'

export default function GallerySection() {
  return (
    <section className="overflow-hidden relative md:pt-50 pt-30 pb-15 bg-body">
      <div>
        <div className="absolute left-40 top-0 z-10 flex w-full select-none items-center justify-center bg-cover bg-center text-[10rem] font-bold text-gray-100 md:left-0 lg:text-[15rem]">
          gallery
        </div>

        <div className="relative z-50 h-[300px] w-full md:h-auto">
          <img src={GalleryImage} alt="cover" className="object-cover h-full transition-all duration-300 md:w-full" />
        </div>
      </div>
    </section>
  )
}
