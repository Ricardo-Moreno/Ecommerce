//import { useContext } from "react"
import { Link } from "react-router-dom"
//import { CartContext } from "../../context/CartContext"
//import ItemCount from "../ItemCount/ItemCount"


const Item = ( {prod} ) => {
    

//const cartContext = useContext(CartContext)
//const { addToCart } = cartContext;

  return (
      <div
            className='col-md-4'
        >
        <Link to={`/detalle/${prod.id}`}>
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.category}`}
                </div>
                <div className="card-body">
                    <img src={prod.photo} alt='' className='w-50' />
                    {prod.price}
                </div>
                <div className="card-footer">
                    <button className="btn btn-outline-primary btn-block">
                        Mas Informacion
                    </button>
                </div>
            </div>
        </Link>
          {/*  <ItemCount
            item =  { prod }
            onAdd = { addToCart } 
            />*/}
        </div>
    )
}

export default Item
