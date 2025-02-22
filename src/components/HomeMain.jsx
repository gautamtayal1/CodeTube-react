import React from 'react'
import FetchData from '../utils/fetchData'

const HomeMain = () => {

  const {data} = FetchData()
  console.log(data);
  if (!data) {
    return <div>Loading...</div>
    
  }
  
// 
// data.items[0].id.snippet.thumbnails.high.url
// data.items[0].id.snippet.title
// data.items[0].id.snippet.publishedTime

  return (
    <div className='py-3'>
      <div className="container flex w-[80vw] gap-5 flex-wrap">
      {data.map((data) => (
        <div className="videoContainer h-[50%] w-[32%] hover:cursor-pointer" key={data.id.videoId}>
          <div className=' aspect-video rounded-2xl mb-2'>
            <img 
            src={data?.snippet?.thumbnails?.high?.url}
            className='rounded-2xl h-full w-full object-cover' />
          </div>
          <div className='h-[40%]'>
            <p className='font-bold text-[17px]'>{data?.snippet?.title}</p>
            <p className='font-light text-gray-400'>{data?.snippet?.channelTitle}</p>
            <p className='font-light text-gray-400'>225K views • 1 year ago</p>
          </div>
          
        </div>
      ))}
      </div>
    </div>
  )
}

export default HomeMain