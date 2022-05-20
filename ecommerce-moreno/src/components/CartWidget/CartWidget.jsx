
import Img from '../../Imagenes/carrito.jpg'
import { Link } from 'react-router-dom'



const CartWidget = () => {
    return (
      <>
      <Link to='./cart'>
          <img src={ Img } style={{width: 50}} alt="imagen"/>
      </Link>
      </>
    )
}

export default CartWidget
