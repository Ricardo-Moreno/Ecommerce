//import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar/NavBar'
import Cart from './Container/Cart/Cart'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer/ItemDetailcontainer'
import CartContextProvider from './context/CartContext'


function App() {
 // const [count, setCount] = useState(0)

  return ( 
    <BrowserRouter>
    <CartContextProvider >
      <div>
        <NavBar/>
      <Routes>
        <Route path="/" element = { <ItemListContainer  /> } />
        <Route path="/category/:id" element = { <ItemListContainer /> } />
        <Route path="/detalle/:detalleId" element = { <ItemDetailContainer /> } />
        <Route path="/cart" element = { <Cart/> } />



            <Route path='/*' element={<Navigate to='/' replace />}/>
        </Routes>
      </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
