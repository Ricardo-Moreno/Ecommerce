import { useEffect, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { getFetch } from "../../helpers/getFetch"
//import Intercambiabilidad from "../intercambiabilidad/intercambiabilidad"
//import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
  const [loading, setLoading] = useState(true)
  const [cambioBoton, setCambioBoton] = useState(false)
  const {addToCart, cartList} = useCartContext()

  const onAdd = (cant) => {
    setCambioBoton(true)
   // console.log(cant)
    addToCart({...producto ,cantidad: cant})
}

console.log(cartList)

useEffect(() => {
      getFetch()
      .then(()=> setLoading(false))
},)


  
  return (
    <div>
        { loading ? 
                <h2>Cargando...</h2> 
                :
                <>
    <div className="row" >
      <div className="col">
        <img className="img" src={producto.photo} />
      </div>
      <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.category}</h2>
        <p>{producto.price}</p>
      </div>
    </div>
    {/*<Item prod={producto} />*/}
   {/* <ItemCount initial={1} stock={5} onAdd={onAdd} cambioBoton={cambioBoton} /> */}
    <button onClick={()=>onAdd(4)}>Agregaaaar</button>
    </>
        }
    </div>
  )
}

export default ItemDetail
