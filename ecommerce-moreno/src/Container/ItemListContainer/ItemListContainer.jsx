import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemCount from "../../components/ItemCount/ItemCount"
import ItemList from "../../components/ItemList/ItemList"
import { getFetch } from "../../helpers/getFetch"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => { 
        if (id) {
            getFetch() 
            .then(respuesta=> setProductos(respuesta.filter((prods) => prods.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))
        } else {
            getFetch()  // fetch llamada a una api  
            .then(respuesta=> setProductos(respuesta))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])



    return (
        <div>
            { loading ? 
                <h2>Cargando...</h2> 
                :
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <ItemList productos={productos} /> 
                </div>
            }
        </div>

    )
}

export default ItemListContainer
