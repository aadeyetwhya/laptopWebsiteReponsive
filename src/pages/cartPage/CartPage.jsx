import React from 'react'
import Layout from '../../components/layout/Layout'
import CheckoutBill from '../../components/checkOutBill/CheckoutBill'
import CartItems from '../../components/cartItems/CartItems'

function CartPage() {
    const cartItems = [
        {
            "id": 1,
            "brand": "Dell",
            "modelName": "Dell Inspiron 14",
            "category": "General",
            "processor": "Intel Core i3-1215U",
            "ram": "8GB",
            "storage": "256GB SSD",
            "price": 49000,
            "rating": 4.6,
            "description": "A reliable everyday laptop ideal for web browsing, productivity, and light multitasking.",
            "size": "18.2 x 324 x 224 mm",
            "battery": "7 hours",
            "weight": "1.48 kg",
            "maxPower": "65W",
            "display": "14-inch FHD (1920x1080), 60Hz",
            "graphics": "Intel UHD Graphics"
        },

        {
            "id": 2,
            "brand": "HP",
            "modelName": "HP Pavilion 15",
            "category": "Best Seller",
            "processor": "Intel Core i5-1135G7",
            "ram": "8GB",
            "storage": "512GB SSD",
            "price": 82000,
            "rating": 4.7,
            "imgSrc": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06107420.png",
            "description": "A popular all-rounder laptop with a balance of power and style, suitable for work and casual use.",
            "size": "17.9 x 360 x 234 mm",
            "battery": "8.5 hours",
            "weight": "1.75 kg",
            "maxPower": "65W",
            "display": "15.6-inch FHD (1920x1080), 60Hz",
            "graphics": "Intel Iris Xe Graphics"
        },

        {
            "id": 3,
            "brand": "Lenovo",
            "modelName": "Lenovo IdeaPad L3",
            "category": "Student",
            "processor": "AMD Ryzen 3 5300U",
            "ram": "4GB",
            "storage": "256GB SSD",
            "price": 46000,
            "rating": 3.9,
            "imgSrc": "https://static.lenovo.com/na/subseries/hero/ideapad-1-14-intel-ice-blue-hero.png",
            "description": "An entry-level student laptop designed for basic tasks like document editing and web browsing.",
            "size": "22.9 x 363 x 254 mm",
            "battery": "6 hours",
            "weight": "2.2 kg",
            "maxPower": "45W",
            "display": "15.6-inch HD (1366x768), 60Hz",
            "graphics": "Integrated AMD Radeon Graphics"
        }

    ]
    return (
        <Layout>

            <div className='cartPage px-2 py-6 lg:pl-20 lg:pr-10'>
                <div className="title text-2xl font-medium lg:text-3xl mb-5 ml-3 underline decoration-red-700 decoration-2.5 underline-offset-6">
                    SHOPPING CART
                </div>
                <div className="cartAndBilling lg:flex ">
                    <div className="cartItems  lg:w-6/9 lg:mr-10">
                       <CartItems/>
                       <CartItems/>
                       <CartItems/>
                       <CartItems/>
                       
                    </div>
                    <div className="billing bg-gray-200 mt-12 lg:mt-0 lg:w-3/9 lg:p-7 p-4 lg:h-full">
                        <CheckoutBill />
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default CartPage