import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { QuoteIcon } from '../../../assets/icons'
import { clientsFeedback } from '../../../utils/clients-feedback'

export default function FeedbackSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)

    // Auto play
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 2000)

    return () => clearInterval(interval)
  }, [emblaApi, onSelect])

  // Jump to clicked client
  const handleClick = (index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }

  return (
    <div className="flex relative flex-col items-center pt-5 w-full max-w-5xl">
      <div className="overflow-hidden w-full embla" ref={emblaRef}>
        <div className="flex embla__container">
          {clientsFeedback.map((client, index) => (
            <div key={index} className="flex-shrink-0 px-4 w-full embla__slide">
              <div className="relative z-20 mx-auto mb-10 max-w-2xl rounded-lg bg-[#FBF7E2]">
                <div className="p-8">
                  <div className="flex justify-center">
                    <img src={QuoteIcon} className="w-8 h-8" />
                  </div>
                  <p className="mb-10 text-center leading-[150%] text-[#231F20]">{client.feedback}</p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <img
                    src={client.image}
                    className="object-cover w-16 h-16 rounded-full cursor-pointer"
                    onClick={() => handleClick(index)}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-center">{client.name}</h3>
                <p className="text-center text-sm text-[#7D7D7D]">{client.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client thumbnails */}
      <div className="hidden gap-4 justify-center mt-5 w-full md:flex">
        {clientsFeedback.map((client, index) => (
          <img
            key={index}
            src={client.image}
            className={`h-12 w-12 cursor-pointer rounded-full object-cover ${
              selectedIndex === index ? 'ring-primary-500 ring-2' : ''
            }`}
            onClick={() => handleClick(client.id)}
          />
        ))}
      </div>
    </div>
  )
}
