import React, { useState } from 'react'

function AddQuantity() {
    const [quantity,setQuantify]=useState(1);
  return (
    <div className='flex items-center text-lg lg:text-xl'>
        <div className="title">
            Quantity : 
        </div>
        <div className="quantity flex ml-2 text-white ">
            <div className="sub bg-red-700 py-0 px-3 flex items-center text-2xl cursor-pointer"
            onClick={()=>setQuantify((prev)=>prev>1?prev-1:prev)}>
                 -
            </div>
            <div className="showQuantity bg-gray-300 py-0 px-3 flex ml-3  mr-3 items-center text-black">
       {quantity}
            </div>
            <div className="add bg-red-700 py-0 lg:py-1 px-3 flex items-center cursor-pointer"
                        onClick={()=>setQuantify((prev)=>prev<5?prev+1:prev)}>

                +
            </div>
        </div>
    </div>
  )
}

export default AddQuantity