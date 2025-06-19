import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <>
      <NavBar/>
    {children}
    <Footer/>
    </>
  
  )
}

export default Layout