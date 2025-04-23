import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Common/MainLayout'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Error from './Pages/Error'
import Cart from './Pages/Cart'

import Header from './Common/Header'
import MaiContext from './Common/MaiContext'


createRoot(document.getElementById('root')).render(

    <MaiContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Error />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          {/* <Route path='/' element={<Header />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </MaiContext>

)
