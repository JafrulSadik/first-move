import VideoPlayer from './video-player'

function PromoVideoSection() {
  return (
    <section className="flex justify-center py-10 md:py-15 bg-body">
      <div className="w-[90%] max-w-7xl justify-center">
        <VideoPlayer />
      </div>
    </section>
  )
}

export default PromoVideoSection
