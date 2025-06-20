import React from 'react'

function HeroSection() {
    return (
        <div className='w-full bg-black text-white lg:flex py-3 px-3 mt-28.5 text-justify lg:mt-0 lg:py-15'>
            <div className="heroTexts text-center lg:flex lg:flex-col lg:justify-center lg:pl-20 ">
                <div className="title text-xl lg:text-5xl">
                    Buy with Lap Setu
                </div>
                <div className="discription text-sm lg:text-2xl pt-8">
                    From gaming beasts to lightweight ultrabooks, LapSetu connects you to every type of laptop with a smooth, easy-to-use shopping experience.
                </div>
                <div className="quote pt-3 text-lg italic text-red-800 lg:text-3xl">
                    Explore, Compare and Choose
                </div>
            </div>
            <div className="heroImage text-center">
                <img src="https://images.unsplash.com/photo-1536528679846-3c5a38e3026b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    )
}

export default HeroSection