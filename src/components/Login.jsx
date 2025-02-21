import React, { use, useState } from 'react'

const Login = () => {

  const[isClicked, setIsClicked] = useState(false)

  function toogleForm(e) {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  return (
    <div className='min-h-screen bg-[#1e1f20] flex items-center justify-center'>
      <div className="card bg-black h-[55vh] w-[65vw] rounded-2xl flex">
        <div className="left w-[50%] h-[100%] p-5">
          <div className="h-[20%] w-[20%] mb-3">
            <img 
            src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
            className=' h-[100%] w-[100%] object-cover object-center'
            />
          </div>
          
          <h1 
          className='pl-3 text-3xl mb-3'>
            {isClicked ? "Sign up" : "Sign in"}
          </h1>

          <span 
          className='pl-3 '>
            to continue to YouTube
          </span>
          
        </div>
        <div className="right w-[50%] h-[100%] pt-[18vh] p-2">
          <form action="">

            <input 
            type="text" 
            className='border rounded p-2 w-[95%]' 
            placeholder={ isClicked ? 'Full Name' : "Email"}/>
            
            {isClicked && 
            <input 
            type="text" 
            className='border rounded p-2 w-[95%]' 
            placeholder="Email"/>
            }
            
            <input 
            type="password" 
            className='border rounded p-2 w-[95%]' 
            placeholder={ isClicked ? 'Set Password' : "Password"}/>

            {!isClicked && <div 
            className='pt-2 text-blue-300 hover:cursor-pointer'
            onClick={()=> alert("Try to remember maybe")}>
              Forgot email / password?
            </div>}

            <div className='mt-5 flex justify-end pr-5 gap-5 '>
              <button 
              className='text-blue-300 p-2 rounded-3xl px-7 hover:cursor-pointer'
              onClick={toogleForm}>
                {isClicked ? "Login Instead" : "Create Account"}
              </button>

              <button 
              className='bg-blue-300 text-black p-2 rounded-3xl px-7 hover:cursor-pointer'>
                {isClicked ? "Create Account" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
