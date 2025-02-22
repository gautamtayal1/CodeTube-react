import {FetchVideoData} from "../utils/fetchData"

const VideoDescription = () => {

  const {videoData} = FetchVideoData()
  console.log(videoData);
  if (!videoData) {
    return <div>Loading...</div>}

  return (
    <div className='h-auto min-h-[100vh] bg-[#262626] rounded-2xl mt-5 p-3 mx-3  text-[12px]'>
      <div>
        {videoData[0]?.statistics?.viewCount} views&nbsp;&nbsp; 19 Feb 2025
      </div>
      <div>
        {videoData[0]?.snippet?.description}
        
      </div>
    </div>
  )
}

export default VideoDescription
