import React, { useState } from 'react'

const ItemCount = ({item, onAdd}) => {
const [ count, setCount] = useState(1)

const addCount = (num) => {
  setCount(count + num)
}


  return (
    <div className='count-container'>
        <button 
          onClick = {()=>{ addCount(-1) }}
          disabled = { count === 1 ? true : false}
        >-</button>
        <div>{count}</div>
        <button 
          disabled = { count === item.stock ? true : false}
          onClick = {()=>{ addCount(1) }}
          >+</button>
        <button
          onClick = {()=>{ onAdd (item, qty) }} 
          >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount