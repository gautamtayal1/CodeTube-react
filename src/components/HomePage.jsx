import React from 'react'
import LeftBar from './LeftBar'
import HomeMain from './HomeMain'

const HomePage = () => {
  return (
    <div className='flex gap-5'>
      <LeftBar />
      <HomeMain />
    </div>
  )
}

export default HomePage
