import React, { useState } from 'react'
import { laptopData } from '../../apiData/data';

function SearchBar() {
    const [search,setSearch]=useState("");
    const handleSearch=(e)=>{
        setSearch(e.target.value)
        
    }
     const filteredLaptopData=laptopData.filter((eachLaptopData,index)=>{
            return eachLaptopData.modelName.toUpperCase().includes(search.toUpperCase())
        }).slice(0,5)
  return (
    <div className='searchBox'>
        <input type="text" className='bg-white h-8 w-62 rounded p-2 lg:text-lg lg:w-70 text-center lg:text-left relative' placeholder="Search for any Laptop"
        onChange={(e)=>handleSearch(e)} />
        {

            //dropdown
            search.length>0 && 
            <div className='absolute z-10 w-full border-gray-200 rounded-lg shadow-md mt-1 max-h-60 lg:w-70 overflow-y-auto bg-white'>  
                {filteredLaptopData.map((eachLaptopData,index)=>{
                    return <div key={index}  className='h-9 hover:bg-gray-100 cursor-pointer  flex justify-center items-center'>{eachLaptopData.modelName}</div>
                })}
            </div>
        }

    </div>
  )
}

export default SearchBar