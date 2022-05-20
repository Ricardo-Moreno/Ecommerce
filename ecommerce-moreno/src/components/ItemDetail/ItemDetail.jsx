import Item from "../Item/Item"

const ItemDetail = ({producto}) => {
  return (
    <div className="row" >
      {/*<div className="col">
        <img className="" src={producto.photo} />
      </div>
      <div className="col">
        <h1>{producto.name}</h1>
        <h2>{producto.category}</h2>
        <p>{producto.price}</p>
      </div>
*/}
      <Item prod={producto} />
    </div>
  )
}

export default ItemDetail
