import { useSearchParams } from "react-router-dom"


const VideoPlayer = () => {

  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")

  return (
    <div className='bg-gray-400 m-2 h-[70vh] rounded-2xl'>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
        className="rounded-2xl"
      ></iframe>
    </div>
  )
}

export default VideoPlayer
