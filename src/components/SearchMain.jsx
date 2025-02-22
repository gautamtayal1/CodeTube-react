import { Link } from "react-router-dom"
import {FetchSearchData} from "../utils/fetchData"

const SearchMain = () => {

  const {searchData} = FetchSearchData()
  if(!searchData) {
    return <div>Loading...</div>
  }
  console.log(searchData)
 
  return (
    <div className="p-3">
      {searchData.map((data) => (
        <Link to={`/watch?v=${data.id.videoId}`} className="card w-auto h-[37vh] flex mb-5" key={data.id.videoId}>
            <div className="img w-[35vw] h-10 aspect-video">
              <img src={data?.snippet?.thumbnails?.high?.url} alt=""
              className='rounded-2xl h-[35vh] w-[45vw] object-cover ' />
            </div>
            <div className="info ml-4">
              <div className=''>{searchData[0]?.snippet?.title}</div>
              <div className="font-light text-[14px]">15K views • 2 days ago</div>
              <div className="font-light text-[14px] my-3">{data?.snippet?.channelTitle}</div>
              <div className='font-light text-[14px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, molestias. lorem20</div>
            </div>
        </Link>
      ))}
      
    </div>
  )
}

export default SearchMain
