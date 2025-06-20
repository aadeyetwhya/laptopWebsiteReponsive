import React from 'react'
import SearchBar from '../searchBar/SearchBar'
import { Link } from 'react-router-dom'

function NavBar() {
  const navBarMenu=()=>{
    return  <ul className='flex justify-center lg:text-lg'>
          <li className='pr-3 hover:text-black cursor-pointer'><Link to="/" >Home</Link></li>
          <li className='pr-3 hover:text-black cursor-pointer'><Link to="/*" > All Products</Link></li>
          <li className='pr-3 hover:text-black cursor-pointer'><Link to="/*" >About</Link></li>
          <li className='pr-3 hover:text-black cursor-pointer'><Link to="/*" >Signup</Link></li>
          <li className='pr-3 hover:text-black cursor-pointer'><Link to="/*" >Cart</Link></li>
        </ul>
  }
 
  
  return (
    <div className='wholeNavBar bg-red-500 pt-2  pb-2 lg:flex lg:justify-between lg:p-2 lg:px-3 lg:items-center w-full lg:py-3 fixed top-0 '>
      <div className="title text-3xl text-black text-center" >
        Lap <span className='text-white'>Setu</span>
      </div>
      <div className="middleMenu  text-white">
       {navBarMenu()}


      </div>
      <div className="searchSection text-center pt-1 lg:pt-0">
        <SearchBar/>
      </div>
    </div>
  )
}

export default NavBar