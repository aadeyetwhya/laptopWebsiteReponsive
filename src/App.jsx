import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import NoPage from './pages/noPage/NoPage';
import ProductInfo from './pages/productInfo/ProductInfo';
import CartPage from './pages/cartPage/CartPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Correct route for Home */}
          <Route path="/productInfo/:id" element={<ProductInfo />} /> {/* Correct route for productinfo */}

          <Route path="/*" element={<NoPage />} /> {/* Correct route for no pageer */}
          <Route path="/cartPage" element={<CartPage />} /> {/* Correct route for cart */}



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
