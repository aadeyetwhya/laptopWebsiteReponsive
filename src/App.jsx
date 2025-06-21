import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import NoPage from './pages/noPage/NoPage';
import ProductInfo from './components/productInfo/ProductInfo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Correct route for Home */}
          <Route path="/productInfo/:id" element={<ProductInfo />} /> {/* Correct route for Home */}

          <Route path="/*" element={<NoPage />} /> {/* Correct route for Home */}


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
