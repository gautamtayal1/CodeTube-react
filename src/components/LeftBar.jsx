import React from 'react'

const LeftBar = () => {
  return (
    <div className='min-h-[90vh] h-auto w-[31vh]  p-2'>
      <div className="sec1">
        <div className=" flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
          <i className="fa-solid fa-house text-[120%]"></i>
          <span className='text-[18px]'>Home</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-solid fa-video text-[120%]"></i>
          <span className='text-[18px]'>Shorts</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2 mb-3">
        <i className="fa-brands fa-square-youtube text-[120%]"></i>
          <span className='text-[18px]'>Subscriptions</span>
        </div>
      </div><hr />
      
      <div className="div mt-3 font-medium">Languages</div>
      <div className="languages">
        <div className="home flex justify-start items-center gap-5 mt-2 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-brands fa-js text-[120%]"></i>
          <span className='text-[18px]'>JavaScript</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-solid fa-gem text-[120%]"></i>
          <span className='text-[18px]'>Ruby</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-brands fa-html5 text-[120%]"></i>
          <span className='text-[18px]'>HTML</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-brands fa-css3-alt text-[120%]"></i>
          <span className='text-[18px]'>CSS</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-brands fa-react text-[120%]"></i>
          <span className='text-[18px]'>React</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-brands fa-node-js text-[120%]"></i>
          <span className='text-[18px]'>NodeJS</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2 mb-3">
        <i className="fa-brands fa-python text-[120%]"></i>
          <span className='text-[18px]'>Python</span>
        </div>

        </div><hr />
      
      <div className="div mt-3 font-medium">Productivity</div>
      <div className="languages">
        <div className="home flex justify-start items-center gap-5 mt-2 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-solid fa-lightbulb text-[120%]"></i>
          <span className='text-[18px]'>Problem Solving</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2">
        <i className="fa-solid fa-screwdriver-wrench text-[120%]"></i>
          <span className='text-[18px]'>Worflow & Tools</span>
        </div>
        <div className="home flex justify-start items-center gap-5 hover:bg-[#272727] rounded-2xl p-2 mb-3">
        <i className="fa-solid fa-briefcase text-[120%]"></i>
          <span className='text-[18px]'>Jobs</span>
        </div>
      </div> <hr />

      <div className="mt-5">
      <p className="text-gray-500 text-sm">© 2025 CodeTube. All rights reserved. This site is not affiliated with YouTube.</p>

      </div>
    </div>
  )
}

export default LeftBar
