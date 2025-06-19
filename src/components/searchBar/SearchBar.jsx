import React from 'react'

function SearchBar() {
  return (
    <div className='searchBox'>
        <input type="text" className='bg-white h-8 w-62 rounded p-2 lg:text-lg lg:w-70 text-center lg:text-left' placeholder="Search for any Laptop"/>
    </div>
  )
}

export default SearchBar