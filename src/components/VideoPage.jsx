
import VideoPlayer from './VideoPlayer'
import VideoDetails from './VideoDetails'
import VideoDescription from './VideoDescription'
import RightBar from './RightBar'

const VideoPage = () => {
  return (
    <div className='flex px-4'>
      <div className='left w-[70vw]'>
        <VideoPlayer />
        <VideoDetails />
        <VideoDescription />
      </div>
      <div className="right vw-[30vw]">
        <RightBar />
      </div>
      
    </div>

  )
}

export default VideoPage
