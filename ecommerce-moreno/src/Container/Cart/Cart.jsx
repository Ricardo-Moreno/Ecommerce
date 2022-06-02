import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const Cart = () => {

const { cartList, vaciar, precioTotal, removeItem } = useCartContext()

    return (
      <div>
        <>
        {cartList.map(product =><div key={product.id} > 
          <li>
          {product.name}- price: {product.price} - cantidad: {product.cantidad}
          </li>
          <button className="btn btn-primarys" onClick={()=> removeItem(product.id)}>x</button>
          </div>)}
        <h2>Precio Total: {precioTotal() !== 0 && precioTotal()}</h2>
        <button  className='btn btn-primary' onClick={vaciar}>Vaciar Carrito</button>
        </>
        <br />
        <Link to='/'>
          <button className='btn btn-primary'>Seguir Comprando</button>
        </Link>
      </div>
    )
  }
  
  export default Cart
  



