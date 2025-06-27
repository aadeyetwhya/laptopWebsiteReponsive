import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../../features/cartSlice/CartSlice';

function AddQuantity({ title = 'Quantity', pxaxis = 3, pyaxis = 1, productId }) {
  console.log("productId", productId)
  const storeItems = useSelector(
    state => state.cart.items
  )
  const productFromStore = storeItems.find(
    (eachStoreCartItems) => eachStoreCartItems.cartItems.id === productId
  );
  const quantity = productFromStore ? productFromStore.quantity : 0;
  console.log(productFromStore);

  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    console.log("here", productFromStore.id)
    dispatch(increaseQuantity(productFromStore.id))
  }


  return (
    <div className='flex items-center text-lg lg:text-xl'>
      <div className="title">
        {title}
      </div>
      <div className="quantity flex ml-2 text-white ">
        <div className={`sub ${quantity > 1 ?
          "bg-red-700 cursor-pointer hover:bg-red-600" : "bg-red-400 cursor- click"}
         py-0 px-${pxaxis} flex items-center text-2xl hover:bg-red-600`}
          onClick={() => handleDecreaseQuantity()}
        // onClick={() => setQuantify((prev) => prev > 1 ? prev - 1 : prev)}
        >
          -
        </div>
        <div className={`showQuantity bg-gray-300 py-0 px-3 flex ml-3  mr-3 items-center text-black`}>
          {quantity}
        </div>
        <div className={`add  py-0 lg:py-${pyaxis} px-${pxaxis} flex items-center  rounded 
                  ${quantity < 5 ? "bg-red-700 cursor-pointer hover:bg-red-600" : "bg-red-400 cursor- click"}        `
        }
          // onClick={() => setQuantify((prev) => prev < 5 ? prev + 1 : prev)}
          onClick={() => dispatch(decreaseQuantity(productFromStore.id))}
        >

          +
        </div>
      </div>
    </div>
  )
}

export default AddQuantity