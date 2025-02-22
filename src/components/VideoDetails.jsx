import {FetchVideoData} from "../utils/fetchData"

const VideoDetails = () => {

  const {videoData} = FetchVideoData()
  console.log(videoData);
  if (!videoData) {
    return <div>Loading...</div>}
  
  return (
    <div className="px-4">
      <h1 className='font-bold text-[20px]'>{videoData[0]?.snippet?.title}</h1>
      <div className="flex justify-between">
        <div className="left flex gap-5 mt-2">
          <div>
            <div>{videoData[0]?.snippet?.channelTitle}</div>
            <div>100K Subscribers</div>
          </div>
          <button className='p-3 px-5 bg-[#262626] text-white rounded-4xl'>Join</button>
          <button className='p-3 px-5 bg-white text-black rounded-4xl'>Subscribe</button>
          
        </div>
        <div className="right flex gap-2">
          <div className='flex gap-3 p-1 px-5 bg-[#262626] text-white rounded-4xl'>
              <button className='border-r-1 pr-2'>
                <span>{videoData[0]?.statistics?.likeCount}</span>
                <i className="fa-regular fa-thumbs-up text-2xl pl-5"></i>
              </button>
              <button><i className="fa-regular fa-thumbs-down text-2xl"></i></button>
          </div>
          <button className='p-1 px-5 bg-[#262626] text-white rounded-4xl'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
