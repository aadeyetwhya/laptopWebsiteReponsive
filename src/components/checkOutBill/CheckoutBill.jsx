import React from 'react'

function CheckoutBill() {
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
                    5999
                </div>
            </div>
            <div className="piece text-lg flex justify-between mb-1 lg:text-xl lg:mb-2">
                <div className="title">
                    Items:
                </div>
                <div className="piece text-red-700">
                    5
                </div>
            </div>

            <div className="discount text-lg flex justify-between mb-1 lg:text-xl lg:mb-2">
                <div className="title">
                    Delivery:
                </div>
                <div className="piece text-red-700">
                    Free
                </div>
            </div>

            <div className="grandTotal text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Disccount:
                </div>

                <div className="piece text-red-700">
                    20%
                </div>

            </div>
            <div className="grandTotal text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Tax
                </div>

                <div className="piece text-red-700">
                    5656
                </div>

            </div>
            <hr className='my-3' />

            <div className="grandTotal text-xl flex justify-between lg:text-xl lg:mb-2">
                <div className="title">
                    Total:
                </div>

                <div className="piece text-red-700">
                    5656
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