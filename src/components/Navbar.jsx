import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toggleMenu } from '../utils/appSlice'

const Navbar = () => {

  //searchbar functions
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if(!input.trim()) return;
    navigate(`/search?q=${encodeURIComponent(input)}`)
  }

  //togglemenu functions
  const dispatch = useDispatch()
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='w-[100vw] h-[10vh] flex justify-between items-center p-2'>
      <div className="left flex justify-start items-center hover:cursor-pointer gap-2">
       <i 
       className="fa-solid fa-bars p-3 hover:cursor-pointer"
       onClick={() => toggleMenuHandler()}
       ></i>
       <Link to="/home">
          <img 
          className='h-[8vh] w-[8vw] '
          src="https://static.digit.in/default/new-youtube-premium-features-1280-6d58ec9cf9.png" alt="" />
        
      </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="center border-1 w-[40vw] rounded-4xl flex justify-between items-center px-5 my-2">
          <input type="text" placeholder='Search' className='w-[90%]' id='search'
          onChange={(e) => setInput(e.target.value)}
          value={input}/>
            <button type='submit'
            className=' border-l-1 p-2 flex justify-center items-center hover:cursor-pointer'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
      </form>
      

      <div className="right flex pr-2 justify-center items-center">
        <button className='p-3 rounded-4xl bg-blue-700 h-10 flex justify-center items-center hover:cursor-pointer'>
           <i className="fab fa-google"></i>
        </button>
         
      </div>
    </div>
  )
}

export default Navbar
