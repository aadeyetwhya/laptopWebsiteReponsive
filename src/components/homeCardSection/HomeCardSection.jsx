import React from 'react'
import HomeCard from '../homeCard/HomeCard'
import { laptopData } from '../../apiData/data'

function HomeCardSection() {
  return (
    <div className='w-full bg-white py-8 px-3 flex justify-center flex-wrap'>
        {
            laptopData.map((eachLaptopData,index)=>{

                return eachLaptopData.rating>4.5 && <HomeCard key={index} eachLaptopData={eachLaptopData}/>  // show only best selller in home page i.e. rating more than 4.5
            })
        }

    </div>
  )
}

export default HomeCardSection