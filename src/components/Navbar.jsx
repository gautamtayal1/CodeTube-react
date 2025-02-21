import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[100vw] h-[10vh] flex justify-between p-2'>
      <div className="left flex justify-start items-center hover:cursor-pointer">
        <img 
        className='h-[10vh] w-[10vw] '
        src="https://static.digit.in/default/new-youtube-premium-features-1280-6d58ec9cf9.png" alt="" />
      </div>

      <div className="center border-1 w-[40vw] rounded-4xl flex justify-between items-center px-5 my-2">
        <input type="text" placeholder='Search' className='w-[90%]'/>
        <button className=' border-l-1 p-2 flex justify-center items-center hover:cursor-pointer'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="right flex pr-2 flex justify-center items-center">
        <button className='p-3 rounded-4xl bg-blue-700 h-10 flex justify-center items-center hover:cursor-pointer'>
           <i className="fab fa-google"></i>
        </button>
         
      </div>
    </div>
  )
}

export default Navbar
