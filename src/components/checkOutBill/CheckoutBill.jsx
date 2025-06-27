import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function CheckoutBill() {
    const coupanDiscountPercentage=20;
    const taxPercentage=2;
    
    const storeCartItems=useSelector(
        state=>state.cart.items
    )
    
    
    const price=storeCartItems.reduce((total,eachCart)=>{
        return total+eachCart.cartItems.price*eachCart.quantity
    }
    ,0)
    const totalItems=storeCartItems.reduce((total,eachCart)=>{
        return total+eachCart.quantity;
    },0)
    
    const discountedAmount=price*(1-coupanDiscountPercentage/100)
    const taxAmount=discountedAmount*(taxPercentage/100)

    return (
        <div>
            <div className="summary text-xl lg:text-2xl">
                PRICE DETAILS
            </div>
            <hr className='my-3' />
            <div className="subtotal text-lg flex justify-between mb-1 lg:text-xl lg:mb-2">
                <div className="title">
                    Price
                </div>
                <div className="amount  text-red-700">
                   {price.toLocaleString()}
                </div>
            </div>
            <div className="items text-lg flex justify-between mb-1 lg:text-xl lg:mb-2">
                <div className="title">
                    Items:
                </div>
                <div className="piece text-red-700">
                   {totalItems}
                </div>
            </div>

            <div className="delivery text-lg flex justify-between mb-1 lg:text-xl lg:mb-2">
                <div className="title">
                    Delivery:
                </div>
                <div className="piece text-red-700">
                    Free
                </div>
            </div>

            <div className="dicount text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Discounted Amt:
                </div>

                <div className="piece text-red-700">
                    {discountedAmount.toLocaleString()}
                </div>

            </div>
            <div className="tax text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Service Tax
                </div>

                <div className="piece text-red-700">
                    {taxAmount.toLocaleString()}
                </div>

            </div>
            <hr className='my-3' />

            <div className="grandTotal text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Total:
                </div>

                <div className="piece text-red-700">
                    Rs.{(discountedAmount+taxAmount).toLocaleString()}
                </div>

            </div>
            <div className="checkout text-xl w-full mt-5 lg:text-xl">
                <button className='cursor-pointer bg-red-700 w-full py-1.5 shadow-2xl text-white rounded transition duration-1000 lg:py-2.5 hover:border-1 hover-border-white '>
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CheckoutBill