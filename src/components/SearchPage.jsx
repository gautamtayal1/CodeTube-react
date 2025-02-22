import React from 'react'
import LeftBar from './LeftBar'
import SearchMain from './SearchMain'

const SearchPage = () => {
  return (
    <div className='flex gap-5'>
      <LeftBar />
      <SearchMain />
    </div>
  )
}

export default SearchPage
