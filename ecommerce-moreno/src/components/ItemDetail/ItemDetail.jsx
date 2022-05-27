import Intercambiabilidad from "../intercambiabilidad/intercambiabilidad"
import Item from "../Item/Item"
//import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

  

  /*const onAdd = (cant) => {
    console.log(cant)
}
  */
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
    </div>*/ <>
    <Item prod={producto} />
    <Intercambiabilidad />
    {/*<ItemCount initial={1} stock={5} onAdd={onAdd}/>*/}
    </>
  )
}

export default ItemDetail
