import React from 'react'
import AddQuantity from '../addQuantity/AddQuantity'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../features/cartSlice/CartSlice';

function CartItems({storeCartItem }) {
    const productDetails=storeCartItem.cartItems;
    const dispatch=useDispatch();

    const handleDeleteItem=(productId)=>{
            dispatch(deleteItem(productId));

    }
    
    return (
        <div className="cart py-3 px-4 mb-5 bg-gray-200 lg:flex lg:justify-between ">
            <div className="image lg:w-1/7 flex justify-center pb-2">
                <img src={productDetails.imgSrc??"https://thumbs.dreamstime.com/b/no-preview-rubber-stamp-grunge-design-dust-scratches-effects-can-be-easily-removed-clean-crisp-look-color-easily-88028050.jpg"}
                    className=' w-3/7 lg:w-full lg:object-contain flex justify-center' alt="" />
            </div>
            <div className="itemDetail lg:w-6/7 lg:ml-10 lg:flex lg:flex-col lg:justify-between">
                <div className='titleAndRemove lg:flex lg:justify-between lg:mb-1'>
                    <div className="title lg:text-2xl font-medium text-justify mb-1 lg:w-11/15 lg:font-normal">
                        {productDetails && productDetails.modelName + " " + productDetails.graphics + " | " + productDetails.ram + " |  " + productDetails.storage +
                             " | " + productDetails.size + " | " + " |  14' FHD display | Backlight Keyboard"}
                    </div>
                    <div className="removeItems mb-1 lg:w-1/6">
                        <button className='text-sm text-red-600 lg:text-lg cursor-pointer hover:underline underline-offset-3'
                        onClick={()=>handleDeleteItem(productDetails.id)}>Remove Items</button>
                    </div>
                </div>
                <div className='lg:flex lg:justify-between items-center  mt-1'>
                    <div className="price lg:text-xl flex ">
                        Price:
                        <div className="fakePrice line-through mr-2 ml-2">
                            {productDetails && productDetails.price * 1.2}
                        </div>
                        <div className="realPrice">
                            {productDetails?.price}

                        </div>

                    </div>
                    <div className="quantity mt-2 lg:mt-0">
                        <AddQuantity title="Qty:" pxaxis={2} pyaxis={0} productId={productDetails.id} />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default CartItems