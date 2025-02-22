
const VideoDetails = () => {
  return (
    <div>
      <h1 className='font-bold text-[20px]'>A fast paced JavaScript LIVE course with projects</h1>
      <div className="flex justify-between">
        <div className="left flex gap-5 mt-2">
          <div>
            <div>Chai aur Code</div>
            <div>564K Subscribers</div>
          </div>
          <button className='p-3 px-5 bg-[#262626] text-white rounded-4xl'>Join</button>
          <button className='p-3 px-5 bg-white text-black rounded-4xl'>Subscribe</button>
          
        </div>
        <div className="right flex gap-2">
          <div className='flex gap-3 p-1 px-5 bg-[#262626] text-white rounded-4xl'>
              <button className='border-r-1 pr-2'><i className="fa-regular fa-thumbs-up text-2xl "></i></button>
              <button><i className="fa-regular fa-thumbs-down text-2xl"></i></button>
          </div>
          <button className='p-1 px-5 bg-[#262626] text-white rounded-4xl'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
