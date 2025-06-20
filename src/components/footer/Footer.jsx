import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  return (
    <div className='bg-gray-700 w-ful p-6 lg:pr-0 pb-0 text-gray-300 '>
      <div className="upperSection flex flex-wrap">
        <div className="brandInfo items-center w-full pb-5 lg:pb-0 lg:w-5/16 lg:flex lg:flex-col lg:justify-center ">
          <h1 className='text-2xl pb-2 text-center lg:text-3xl  text-red-200'>LapSetu</h1>
          <p className='text-center lg:text-lg'>Bridging you to all kinds of laptops.</p>
        </div>
        <div className="quickLinks w-4/9 my-4 lg:w-5/16 ">
          <div className="title text-xl pb-2  text-red-200 lg:text-2xl">Quick Links</div>
          <ul>
            <li className='lg:text-xl cursor-pointer hover:underline'><Link to="/" />Home</li>
            <li className='lg:text-xl cursor-pointer hover:underline'><Link to="/*" /> All Products</li>
            <li className='lg:text-xl cursor-pointer hover:underline'> <Link to="/*" />About</li>
            <li className='lg:text-xl cursor-pointer hover:underline'> <Link to="/*" />Signup</li>
            <li className='lg:text-xl cursor-pointer hover:underline'> <Link to="/*" />Cart</li>
          </ul>
        </div>
        <div className="cutomerService  w-5/9  my-4 lg:w-5/16">
          <div className="title text-xl  pb-2 text-red-200 lg:text-2xl">
            Customer Service
          </div>
          <ul>
            <li className='lg:text-xl  cursor-pointer hover:underline'> <Link to="*/" />Shipping & Returns</li>
            <li className='lg:text-xl  cursor-pointer hover:underline'> <Link to="*/" />FAQs</li>
            <li className='lg:text-xl  cursor-pointer hover:underline'> <Link to="*/" />Warranty</li>
            <li className='lg:text-xl  cursor-pointer hover:underline'> <Link to="*/" /> Support</li>
          </ul>
        </div>
        <div className="socialMedia w-full  lg:my-6 lg:w-1/16 ">
          <ul className='flex justify-center lg:block'>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <FaFacebook size={30} className='text-blue-600 m-3' /></a></li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <FaTwitter size={30} className='text-blue-400  m-3' /></a></li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <FaInstagram size={30} className='text-pink-400  m-3' /></a></li>
            <li>
              <a href="https://www.whatsapp.com/" target="_blank">
                <FaWhatsapp size={30} className='text-green-400  m-3' /></a></li>
          </ul>
        </div>
      </div>
      <div className="legalLinks text-center text-sm text-gray-300 py-4 border-t border-gray-600 lg:text-lg ">
        © 2025 Lapsetu &nbsp;|&nbsp; All rights reserved &nbsp;|&nbsp; Terms of Service &nbsp;|&nbsp; Privacy Policy
      </div>
    </div>
  )
}

export default Footer