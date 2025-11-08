import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

export default function SliderNavigationButton({ scrollPrev, scrollNext }) {
  return (
    <div className="flex gap-1 md:gap-2">
      <button
        onClick={scrollPrev}
        className="flex size-8 items-center justify-center rounded-full border border-[#B79B63] bg-white text-[#B79B63] transition-all duration-300 hover:bg-[#B79B63] hover:text-white md:size-10"
      >
        <BsArrowLeftShort className="size-6 md:size-8" />
      </button>

      <button
        onClick={scrollNext}
        className="flex size-8 items-center justify-center rounded-full border border-[#B79B63] bg-white text-[#B79B63] transition-all duration-300 hover:bg-[#B79B63] hover:text-white md:size-10"
      >
        <BsArrowRightShort className="size-6 md:size-8" />
      </button>
    </div>
  )
}
