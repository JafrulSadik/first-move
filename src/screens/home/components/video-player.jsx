import { useRef, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  return (
    <div className="aspect-6/4 md:aspect-12/5 group relative w-full overflow-hidden rounded-2xl">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 500'%3E%3Crect fill='%23c4a574' width='1200' height='500'/%3E%3C/svg%3E"
      >
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="md:p-15 relative flex h-full items-end px-3">
        {/* Left Content */}
        <div className="z-10 max-w-2xl text-white">
          <h1 className="mb-6 text-2xl font-bold leading-tight lg:text-5xl">
            Turn Your Moments
            <br /> Into Memories!
          </h1>
        </div>

        {/* Right Content */}
        <div className="hidden max-w-xs text-sm text-white md:block md:text-base lg:block">
          <p className="leading-relaxed">
            We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
          </p>
        </div>
      </div>

      {/* Play Button Overlay */}
      <button
        onClick={toggleVideo}
        className="size-15 border-6 top-4/12 absolute left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border-white bg-opacity-90 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-opacity-100"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <BiPause className="ml-0 size-12 text-white" fill="currentColor" />
        ) : (
          <BiPlay className="ml-1 size-12 text-white" fill="currentColor" />
        )}
      </button>
    </div>
  )
}
