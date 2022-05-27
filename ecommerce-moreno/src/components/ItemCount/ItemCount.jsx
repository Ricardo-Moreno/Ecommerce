import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({initial, stock, onAdd, cambioBoton}) => {
const [ count, setCount] = useState(initial)

const sumar = () =>{
  if (count < stock){
    setCount(count + 1)
  }
  else{
    alert(`Compra Maxima ${stock}`)
  }
}
const restar = () =>{
  if (count > initial){
    setCount(count - 1)
  }
  else{
    alert(`Compra Minima ${initial}`)
  }
}



  return (
  <>
    {count}<br />
    <button onClick={sumar} className='btn btn-primary'>+</button>
    <button onClick={restar} className='btn btn-primary'>-</button>
    <br />
    {
      !cambioBoton ?
       <button onClick={() => onAdd(count)} className='btn btn-primary'> Agregar al Carrito</button> :
      <div>
        <Link to='/cart'>
          <button className='btn btn-primary'> Ir al Carrito</button>
        </Link>
        <br />
        <br />
        <Link to='/'>
          <button className='btn btn-primary'>Seguir Comprando</button>
        </Link>
      </div>
    }
    </>
  )
}

export default ItemCount