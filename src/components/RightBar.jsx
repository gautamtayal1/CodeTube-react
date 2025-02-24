import { Link } from "react-router-dom"
import { FetchRelatedData } from "../utils/fetchData"

const RightBar = () => {

  const {relatedData} = FetchRelatedData()
  if (!relatedData) {
    return <div>Loading...</div>}

  console.log(relatedData)
  
  return (
    <div >
      
      {relatedData.map((data) => (
        <Link to={`/watch?v=${data.id.playlistId}`} className="card w-[30vw] flex mt-2" key={data.id.videoId}>
          
            <div className="img">
              <img src={data.snippet?.thumbnails?.default.url} alt=""
              className='rounded-2xl w-[10vw] h-[15vh] object-contain' />
            </div>
            <div className="info ml-2">
              <div className='text-[15px] font-medium'>{data?.snippet?.title}</div>
              <div className="font-light text-[10px] my-0.5 text-gray-400">{data?.snippet?.channelTitle}</div>
              <div className="font-light text-[10px] text-gray-400">15K views • 2 days ago</div>
            </div>
        </Link>
      ))}
    
    </div>
  )
}

export default RightBar
