import React, { use, useState, useRef} from 'react'
import { checkValidData } from './utils/validate'
import { Link } from 'react-router-dom';
import { UserAuth } from '../contect/AuthContext';


const CreateAccount = () => {

  const { session } = UserAuth()

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // function handleSubmit(e) {
  //   e.preventDefault()
  
  //     name.current.value,
  //     email.current.value,
  //     password.current.value
      
  //   console.log(name.current.value);

  // }

  // function toogleForm(e) {
  //   e.preventDefault()
  //   setIsClicked(!isClicked)
  // }

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
            Sign up
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
            placeholder="Full Name"
            ref={name}/>
          

            <input 
            type="text" 
            className='border rounded p-2 w-[95%]' 
            placeholder="Email"
            ref={email}/>
            
            <input 
            type="password" 
            className='border rounded p-2 w-[95%]' 
            placeholder='Set Password' 
            ref={password}/>

           {/* <p className='text-red-500 mt-2'>
              {errorMessage}
            </p> */}

            <div className='mt-5 flex justify-end pr-5 gap-5 '>
              <Link to="/login"><button 
              className='text-blue-300 p-2 rounded-3xl px-7 hover:cursor-pointer'
              onClick="">
                Login Instead
              </button></Link>

              <button 
              className='bg-blue-300 text-black p-2 rounded-3xl px-7 hover:cursor-pointer'
              onClick="">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
