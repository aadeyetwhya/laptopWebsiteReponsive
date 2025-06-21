import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import { laptopData } from '../../apiData/data'
import { useParams } from 'react-router-dom'
import RatingShow from '../ratingShow/RatingShow';
import AddQuantity from '../addQuantity/AddQuantity';


function ProductInfo() {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState(null);
    useEffect(() => {
        const productInfoValue = laptopData.find((eachProduct, index) => {

            return eachProduct.id === Number(id)
        })
        console.log(productInfoValue)
        setProductInfo(productInfoValue || null);
    }, [id])
    console.log(typeof id, id)
    return (
        <Layout>
            <div className='wholeProductPage bg-white py-6 lg:py-21.5 lg:mx-27' >
                <div className="productSection p-6 lg:flex ">
                    <div className="productImageSection w-full flex items-center justify-center lg:w-1/2 ">
                        <div className="productImage bg-gray-300  p-8 lg:px-14 lg:py-20 ">
                            <img src={productInfo?.imgSrc || "https://thumbs.dreamstime.com/b/no-preview-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-88028050.jpg"} className='lg:h-95' alt="" />

                        </div>
                    </div>
                    <div className="productInfo w-full mt-8 lg:flex lg:flex-col lg:justify-center lg:w-1/2 ">
                        <div className="stock text-white flex mb-2 lg:mb-4" >
                            <h1 className=' bg-green-500 py-1 px-1.5 rounded-lg mb-1 lg:text-lg  lg:px-3 lg:bg-green-500'>In stock</h1>

                        </div>
                        <div className="title text-2xl mb-3 lg:mb-4 lg:text-4xl">
                            {productInfo?.modelName || ""}
                        </div>

                        <div className="rating mb-2 lg:mb-4">
                            {productInfo && <RatingShow rating={productInfo.rating} />}
                        </div>
                        <div className="price mb-2 flex text-lg lg:text-xl">
                            Price:
                            <div className="fakePrice line-through mr-2 ml-2">
                                Rs. {productInfo?.price * 0.8 || ""}
                            </div>
                            <div className="realPrice">
                                Rs. {productInfo?.price || ""}

                            </div>
                        </div>
                        <div className="addQuantity  mb-3">
                            <AddQuantity/>
                        </div>
                        <div className="buy mt-4 mb-4">
                            <button className='bg-red-700 rounded py-3  shadow-2xl w-full lg:w-5/7 text-white lg:text-lg hover:bg-red-600 cursor-pointer'>Add To Cart</button>
                        </div>

                        <h1 style={{ fontWeight: '500' }} className='text-lg lg:text-xl mb-3' >Key features</h1>

                        <ul className='list-disc pl-4 lg:pl-5  lg:text-lg'>
                            <li> <div className="processor mb-2">
                                Model Name : {productInfo?.modelName || ""}
                            </div></li>
                            <li> <div className="processor mb-2">
                                Processor : {productInfo?.processor || ""}
                            </div></li>
                            <li> <div className="ram mb-2">
                                RAM : {productInfo?.ram || "fd"}
                            </div></li>
                            <li> <div className="storage mb-2">
                                Storage : {productInfo?.storage || ""}
                            </div></li>
                            <li> <div className="storage mb-2">
                                Display : {productInfo?.display || ""}
                            </div></li>
                            <li> <div className="storage mb-2">
                                Graphics : {productInfo?.graphics || "No Graphics"}
                            </div></li>
                        </ul>
                        <div className="decription my-3">
                            <div style={{ fontWeight: '500' }} className='text-lg lg:text-xl mb-2'>
                                Description
                            </div>
                            <div className="actualDiscription text-justify  lg:text-lg">
                                {productInfo?.description || "No Description"}
                            </div>

                        </div>
                        

                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default ProductInfo