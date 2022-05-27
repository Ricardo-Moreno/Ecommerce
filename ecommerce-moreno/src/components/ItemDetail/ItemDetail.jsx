import { useEffect, useState } from "react"
import { getFetch } from "../../helpers/getFetch"
//import Intercambiabilidad from "../intercambiabilidad/intercambiabilidad"
import Item from "../Item/Item"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
  const [loading, setLoading] = useState(true)
  const [cambioBoton, setCambioBoton] = useState(false)

  const onAdd = (cant) => {
    setCambioBoton(true)
    console.log(cant)
}

useEffect(() => {
      getFetch()
      .then(()=> setLoading(false))
},)


  
  return (
    /*<div className="row" >
      <div className="col">
        <img className="" src={producto.photo} />
      </div>
      <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.category}</h2>
        <p>{producto.price}</p>
      </div>
    </div>*/
    <div>
        { loading ? 
                <h2>Cargando...</h2> 
                :
                <>
    <Item prod={producto} />
    <ItemCount initial={1} stock={5} onAdd={onAdd} cambioBoton={cambioBoton}/>
    </>
        }
    </div>
  )
}

export default ItemDetail
