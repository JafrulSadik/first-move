import VideoPlayer from './video-player'

function PromoVideoSection() {
  return (
    <section className="md:py-15 flex justify-center bg-white py-10">
      <div className="w-[90%] max-w-7xl justify-center">
        <VideoPlayer />
      </div>
    </section>
  )
}

export default PromoVideoSection
