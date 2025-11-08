'use client'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { sectorData } from '../../utils'
import SliderCard from './slider-card'
import SliderNavigationButton from './slider-navigation-button'

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      dragFree: true,
      containScroll: 'trimSnaps',
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ],
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="lg:mb-30 mx-auto mb-10 w-[90%] max-w-6xl lg:pt-10">
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <span className="text-2xl font-bold md:text-4xl">
          <span className="text-[#231F20]">Other </span>
          <span className="text-[#CAA05C]">Sectors</span>
        </span>
        <SliderNavigationButton scrollPrev={scrollPrev} scrollNext={scrollNext} />
      </div>
      <div className="relative my-4 flex items-center justify-center md:my-5">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {sectorData.map((sector, i) => (
              <div key={i} className="min-w-[190px] flex-[0_0_25%] px-2 md:px-3">
                <SliderCard sector={sector} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
