import { useCartContext } from "../../context/CartContext"

const Cart = () => {

const { cartList, vaciar } = useCartContext()

    return (
      <div>
        <>
        {cartList.map(product => <li>{product.name}-{product.price}</li>)}
        <button onClick={vaciar}>Vaciar Carrito</button>
        </>
      </div>
    )
  }
  
  export default Cart
  



