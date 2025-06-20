import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <>
      <NavBar/>
      <div className='mt-28 lg:mt-15'>
    {children}

      </div>
    <Footer/>
    </>
  
  )
}

export default Layout