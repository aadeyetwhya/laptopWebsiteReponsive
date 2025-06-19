import React from 'react'

function HomeCard(props) {
    const discountPercent=20;
  return (
     <div className="card bg-gray-300 w-5/6  lg:w-1/4 my-6 lg:ml-20 h-full shadow-xl rounded-lg p-2 lg:p-4 text-red-black cursor-pointer hover:shadow-2xl">
          <div className="cardImage h-5/6 lg:h-9/10">
                <img src={props.eachLaptopData.imgSrc || "https://pngimg.com/uploads/laptop/laptop_PNG101772.png" } alt="" />
            </div>
            <div className="cardTitle text-center pt-2 text-2xl lg:text-3xl">
                {props.eachLaptopData.modelName}
            </div>
            <div className="price text-center pt-2 text-sm lg:text-lg flex justify-center ">
                <div className="fakePrice line-through">
            { props.eachLaptopData.price*(1+discountPercent/100)}
                </div>
                <div className="realPrice pl-4">
{props.eachLaptopData.price}
                </div>
            </div>
              
          
        </div>
  )
}

export default HomeCard