import React from 'react'

function ContactUs() {
    return (
        <div className='bg-gray-400 p-5 flex flex-col lg:flex lg:flex-row lg:justify-between items-center '>
            <div className="text text-center mt-5 flex-col  justify-center mx-1   text-white lg:mx-9   lg:w-1/2">
                <div className="title text-center text-2xl font-lightweight lg:text-3xl">
                    Contact Us
                </div>
                <div className="subtitle pt-5 text-xl italic lg:pt-9">
                    Need to get in touch with us?
                </div>
                <div className="description pt-3 text-sm lg:text-lg">
                    Whether you have a question about products, orders, or anything else, our team is ready to help. Fill out the form below and we’ll get back to you as soon as possible.                </div>
            </div>
            <div className="formSection  bg-white rounded-lg py-6 w-full flex flex-col items-center my-10 lg:w-1/2 lg:block lg:my-9 lg:pl-15">
                <div className="name text-center lg:flex  lg:items-center">
                    <div className="fname w-1/2">
                        <label htmlFor="fname" className='flex'>First Name:</label>
                        <input type="text" placeholder="Enter your first name" id="fname" className='bg-gray-200 h-10 w-70 mt-2 p-2 lg:w-full lg:h-14' />
                    </div>
                    <div className="lname  w-1/2 mt-4 lg:mt-0 lg:ml-5 lg:mr-18" >
                        <label htmlFor="lname" className='flex'>Last Name: </label>
                        <input type="text "
                            placeholder="Last Name"
                            className="fname bg-gray-200 h-10 w-70 mt-2 p-2 lg:w-full lg:h-14" id="lname" />

                    </div>



                </div>
                <div className="email mt-4  ">
                    <label htmlFor="email" className='flex'>Email: </label>
                    <input type="text" placeholder="Email"
                        id="fname"
                        className='bg-gray-200 h-10 w-70 mt-2 p-2 lg:w-12/13 lg:h-14' />

                </div>
                <div className="message mt-4  ">
                    <label htmlFor="msg" className='flex'>Message</label>
                    <textarea name="" id="" className='bg-gray-200 w-70 h-30 p-2 mt-2 lg:w-12/13 lg:h-60'></textarea>
                </div>
                <div className="submit my-2">
                    <button className='bg-red-500 py-2 px-6 text-white rounded-sm text-sm cursor-pointer hover:bg-red-800 lg:text-lg'>
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ContactUs