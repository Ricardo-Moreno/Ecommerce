import { Link, useParams } from "react-router-dom"

const Item = ( {prod} ) => {

    const { id } = useParams()
    console.log(id)
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
        </div>
    )
}

export default Item
