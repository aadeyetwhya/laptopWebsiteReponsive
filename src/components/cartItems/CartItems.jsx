import React from 'react'
import AddQuantity from '../addQuantity/AddQuantity'

function CartItems() {
  return (
     <div className="cart py-3 px-4 mb-5 bg-gray-200 lg:flex lg:justify-between ">
                            <div className="image lg:w-1/7 flex justify-center pb-2">
                                <img src="https://static.lenovo.com/na/subseries/hero/ideapad-1-14-intel-ice-blue-hero.png"
                                    className=' w-3/7 lg:w-full lg:object-contain flex justify-center' alt="" />
                            </div>
                            <div className="itemDetail lg:w-6/7 lg:ml-10 lg:flex lg:flex-col lg:justify-between">
                                <div className='titleAndRemove lg:flex lg:justify-between lg:mb-1'>
                                    <div className="title lg:text-2xl font-medium text-justify mb-1 lg:w-11/15 lg:font-normal">
                                        Acer Swift Go 14 2023 AMD Ryzen 5 7530U | 1 Year Warranty | 8GB RAM | 512GB SSD | 14" FHD display | Backlight Keyboard
                                    </div>
                                    <div className="removeItems mb-1 lg:w-1/6">
                                        <button className='text-sm text-red-600 lg:text-lg cursor-pointer hover:underline underline-offset-3'>Remove Items</button>
                                    </div>
                                </div>
                                <div className='lg:flex lg:justify-between items-center  mt-1'>
                                    <div className="price lg:text-xl flex ">
                                        Price:
                                        <div className="fakePrice line-through mr-2 ml-2">
                                            Rs. 6565
                                        </div>
                                        <div className="realPrice">
                                            Rs.5656

                                        </div>

                                    </div>
                                    <div className="quantity mt-2 lg:mt-0">
                                        <AddQuantity title="Qty:" pxaxis={2} pyaxis={0}/>
                                    </div>
                                </div>


                            </div>

                        </div>
  )
}

export default CartItems