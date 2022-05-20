import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import ItemListContainer from './Container/ItemListContainer/ItemListContainer'
import Item from './components/Item/Item'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <NavBar/>
      <Routes>
      <Route path="/" element = { <ItemListContainer  /> } />
                        <Route path="/category/:id" element = { <Item  /> } />                   
                        <Route path="/detalle/:detalleId" element = { <Item /> } />
                        <Route path="/cart" element = { <Cart /> } />

  

            <Route path='/*' element={<Navigate to='/' replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
